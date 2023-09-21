import Controller from "sap/ui/core/mvc/Controller";
import AppComponent from "../Component";

/**
 * @namespace com.asabau.freestyle.controller
 */
export default class App extends Controller {
  public onInit(): void {
    // apply content density mode to root view
    const view = this.getView();
    if (view) {
      view.addStyleClass(
        (this.getOwnerComponent() as AppComponent).getContentDensityClass()
      );
    }
  }
}
