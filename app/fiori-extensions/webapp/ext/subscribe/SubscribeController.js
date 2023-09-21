sap.ui.define(["sap/m/MessageToast"], function (MessageToast) {
    "use strict";

    return {
        subscribe: function (oBindingContext, aSelectedContexts, listBinding) {
            // get selected titles
            const titles = aSelectedContexts.map((c) => c.getObject().title).join(", ");

            // this resolves to oExtensionAPI
            const i18nBundle = this.getModel("@i18n").getResourceBundle();

            MessageToast.show(i18nBundle.getText("subscribeNotification", titles));
        },
    };
});
