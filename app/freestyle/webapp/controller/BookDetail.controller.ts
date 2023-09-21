import Controller from "sap/ui/core/mvc/Controller";
import formatter from "../model/formatter";
import UIComponent from "sap/ui/core/UIComponent";
import { Button$PressEvent } from "sap/m/Button";
import { Route$MatchedEvent } from "sap/ui/core/routing/Route";

/**
 * @namespace com.asabau.freestyle.controller
 */
export default class App extends Controller {
  public formatter = formatter;

  public onInit(): void {
    var oRouter = (<UIComponent>this.getOwnerComponent()).getRouter();
    oRouter
      ?.getRoute("bookdetail")
      ?.attachPatternMatched(this._onObjectMatched, this);
  }

  private _onObjectMatched(oEvent: Route$MatchedEvent): void {
    const { bookID } = oEvent.getParameter("arguments") as { bookID: number };

    this.getView()?.bindElement({ path: `/Books/${bookID}` });
  }

  public navToBooks(oEvent: Button$PressEvent): void {
    (<UIComponent>this.getOwnerComponent()).getRouter().navTo("books");
  }
}
