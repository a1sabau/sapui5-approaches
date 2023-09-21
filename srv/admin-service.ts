import cds from "@sap/cds";
import { Service } from "@sap/cds/apis/services";

module.exports = function (cat: Service) {

  // Add some discount for overstocked books
  cat.after ('READ','Books', each => {
    if (each.stock > 111)  each.title += ` -- 111% discount!`
  })
}