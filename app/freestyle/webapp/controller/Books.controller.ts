import Controller from "sap/ui/core/mvc/Controller";
import formatter from "../model/formatter";
import UIComponent from "sap/ui/core/UIComponent";
import Button, { Button$PressEvent } from "sap/m/Button";

/**
 * @namespace com.asabau.freestyle.controller
 */
export default class App extends Controller {
  public formatter = formatter;

  public navToBookDetail(oEvent: Button$PressEvent): void {
    var bookID = (<Button>oEvent.getSource()).data("bookID");

    (<UIComponent>this.getOwnerComponent())
      .getRouter()
      .navTo("bookdetail", { bookID });
  }
}
