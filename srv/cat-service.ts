// const cds = require('@sap/cds')
import cds from "@sap/cds";
import { Service } from "@sap/cds/apis/services";

module.exports = async function (cat: Service) {
    const db = await cds.connect.to("db"); // connect to database service
    const { Books } = db.entities; // get reflected definitions

    // Reduce stock of ordered books if available stock suffices
    cat.on("submitOrder", async (req) => {
        const { book, quantity } = req.data;
        const n = await UPDATE(Books, book)
            .with({ stock: { "-=": quantity } })
            .where({ stock: { ">=": quantity } });
        n > 0 || req.error(409, `${quantity} exceeds stock for book #${book}`);
    });

    // Add some discount for overstocked books
    cat.after("READ", "Books", (book) => {
        if (book.stock > 111) book.title += ` -- 11% discount!`;
    });
};
