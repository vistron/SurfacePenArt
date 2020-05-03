sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History",
    "sap/m/MessageBox",
], function (Controller, JSONModel, History, MessageBox) {
    "use strict";

    const component = sap.ui.getCore().getComponent("app-main-component");

    return Controller.extend("vistronart.controller.BaseController", {
        onInit: function () {
            this.mFragmentList = {};
            this._sAppName = "vistronart";
        },
        /**
         * Convenience method for accessing the router.
         * @public
         * @returns {sap.ui.core.routing.Router} the router for this component
         */
        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        },
        /**
         * Convenience method for accessing the perviousHash.
         * @public
         * @returns {String} the previous Hash of router
         */
        getPreviousRouterPattern: function () {
            let oHistory = History.getInstance();
            return oHistory.getPreviousHash();
        },
        /**
         * Convenience method for getting the view model by name.
         * @public
         * @param {string} [sName] the model name
         * @returns {sap.ui.model.Model} the model instance
         */
        getModel: function (sName) {
            return this.getView().getModel(sName);
        },
        checkPageReloaded:function(sCurrentHash){
            let sPreviousHash = this.getPreviousRouterPattern();
			if (sPreviousHash === undefined) {
                return true;
            }else{
                return false;
            }
        },
        _checkBackwardNav:function(){
            let oHistory = History.getInstance(),
			    sDirection =  oHistory.getDirection();
			if (sDirection === 'Backwards') {
                return true;
            }else{
                return false;
            }
        },
        /**
         * Convenience method for setting the view model.
         * @public
         * @param {sap.ui.model.Model} oModel the model instance
         * @param {string} sName the model name
         * @returns {sap.ui.mvc.View} the view instance
         */
        setModel: function (oModel, sName) {
            return this.getView().setModel(oModel, sName);
        },
        onPreviousPage : function () {
            this.refreshTableData(this.paginationModel.getProperty('/currentPage') - 0);
        },
    
        onNextPage : function () {
            this.refreshTableData(this.paginationModel.getProperty('/currentPage') + 2);
        },
        /**
         * Getter for the resource bundle.
         * @public
         * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
         */
        getResourceBundle: function () {
            var dScope = this.getView().getController().getOwnerComponent();
            return dScope.getModel("i18n").getResourceBundle();
        },
        /**
         * Gets the localized text to display to end users.
         * If parameters are passed and the resource identifier has arguments,
         * an appropriate localized text with the supplied arguments will be displayed
         * @param {string} sKey Resource identifier
         * @param {array} aParams Parameters used to display the correct localized format
         * @return {string} the localized text
         *
         * @public
         */
        getText: function (sKey, aParams) {
            var sParamsType = jQuery.type(aParams),
                sFormattedText, oRb = this.getResourceBundle();
            if (sKey && jQuery.type(sKey) === "string") {
                switch (sParamsType) {
                    case "undefined":
                    case "null":
                        sFormattedText = oRb.getText(sKey);
                        break;
                    case "array":
                        sFormattedText = aParams.length > 0 ? oRb.getText(sKey, aParams) : "";
                        break;
                    case "string":
                    case "number":
                        sFormattedText = oRb.getText(sKey, [aParams]);
                        break;
                }
            }
            return sFormattedText;
        },
        /**
         * Function to get Data from the api
         * @param  {Model} theModel     JSON Model in which data will be populated
         * @param  {Object} headers      additional header other than authorization {Optional}
         * @param  {String} sAPIService      the name of the web api service to call
         * @param  {Map} mParams        List of parameters to be passed to the API
         * @param  {Boolean} asyncRequest true if we are doing asynchronous requests (usual behaviour)
         * @param  {Object} oReqCompleted      Function to be called on call finished
         * @param  {Boolean} bDirectServiceURL  Checks whether the URI has to be parsed with backend helper
         *
         * @public
         */
        getData: function (theModel, headers, sAPIService, mParams, asyncRequest, oReqCompleted, bDirectServiceURL) {
            if (!ServiceFactory.getInstance('Api').isConfigured()) {
                console.error(`Attempted to use un-configured service for endpoint ${sAPIService}`);
                return;
            }

            if (sAPIService.startsWith('/')) {
                sAPIService = sAPIService.substring(1);
            }

            let sUri = bDirectServiceURL ? sAPIService : ServiceFactory.getInstance('Api').ENDPOINTS[sAPIService];
            let sUrl = ServiceFactory.getInstance('Api').getBaseURL() + sUri;

            headers = headers || {};

            asyncRequest = (jQuery.type(asyncRequest) === "Boolean") ? asyncRequest : true;
            if (oReqCompleted) {
                theModel.attachRequestCompleted(oReqCompleted);
            }

            theModel.attachRequestFailed(oErr => {
                console.error('error in getData', oErr);
            });

            // TODO: remove
            headers.Authorization = component.authManager.getAccessToken();
            if (theModel instanceof sap.ui.model.json.JSONModel) {
                // Params: URL, URIparams, Async, Type, Merge, Cache, Headers
                theModel.loadData(sUrl, mParams, asyncRequest, "GET", false, true, headers);
            }
        },
        /**
         * Function to posts data to the API
         * @param  {Object} theModel             data model containing payload to send
         * @param  {Object} mheaders             additional header other than authorization {Optional}
         * @param  {String} sAPIService              api service to call
         * @param  {Boolean} asyncRequest        true if we are doing asynchronous requests
         * @param  {Object} oReqCompleted      Function to be called on call finished
         * @param  {Boolean} bDirectServiceURL  Checks whether the URI has to be parsed with backend helper
         *
         * @public
         * @author 116758
         */
        postData: function (theModel, sMethod, mheaders, sAPIService, asyncRequest, oReqCompleted, bDirectServiceURL, oDirectObject, oControl, fErrorHandler) {
            if (!ServiceFactory.getInstance('Api').isConfigured()) {
                console.error(`Attempted to use un-configured service for endpoint ${sAPIService}`);
                return;
            }

            if (sAPIService.startsWith('/')) {
                sAPIService = sAPIService.substring(1);
            }
            let sUri = bDirectServiceURL ? sAPIService : ServiceFactory.getInstance('Api').ENDPOINTS[sAPIService];
            let sURL = ServiceFactory.getInstance('Api').getBaseURL() + sUri;
            let fErrorCallback = jQuery.proxy(function (oError) {
                    var sErrorMessage = (jQuery.type(oError.responseJSON) === "object") ? oError.responseJSON.detail + ". Please try again." : this.getText("validateError");
                    sap.m.MessageBox.error(sErrorMessage);
                    if (oControl) {
                        oControl.setBusy(false);
                    }
                }, this),
                successFunction;
            mheaders = mheaders || {};
            sMethod = sMethod || "POST";
            if (oReqCompleted && oReqCompleted instanceof Function) {
                theModel.attachRequestCompleted(oReqCompleted);
                successFunction = oReqCompleted;
            }
            mheaders["Content-Type"] = "application/json";
            mheaders.Accept = "application/json";
            // TODO: remove
            mheaders.Authorization = component.authManager.getAccessToken();
            asyncRequest = (typeof asyncRequest === "boolean") ? asyncRequest : true;
            jQuery.ajax({
                url: sURL,
                method: sMethod,
                type: sMethod,
                headers: mheaders,
                data: oDirectObject || theModel.getJSON(),
                async: asyncRequest,
                error: (fErrorHandler instanceof Function) ? fErrorHandler : fErrorCallback,
                success: successFunction
            });
            return true;
        },
        /**
         * Generic function to close and destroy fragment
         * @param {sap.ui.base.Event} oEvent Triggers after closing the dialog <sap.m.Dialog>
         *
         * @public
         */
        closeDialog: function (oEvent) {
            var oFragment = oEvent.getSource();
            while (!(oFragment instanceof sap.m.Dialog)) {
                oFragment = oFragment.getParent();
            }
            for (var sFragmentName in this.mFragmentList) {
                if (jQuery.sap.equal(this.mFragmentList[sFragmentName].instance, oFragment)) {
                    oFragment.close();
                    oFragment.destroy();
                    delete this.mFragmentList[sFragmentName];
                    return;
                }
            }
            oFragment.close();
            oFragment.destroy();
        },
        /**
         * Generic function to update the model's property on live change
         * @param {sap.ui.base.Event} oEvent Triggers after liveChange on the TextArea <sap.m.TextArea>
         * @public
         */
        updateProperty: function (oEvent) {
            var oControl = oEvent.getSource();
            oControl.getModel().setProperty(oControl.data("valueBound"), oControl.getValue());
        },
        parseApiError: function (errorResponse) {
            var errorMessage = errorResponse.toString();
            if (errorResponse.responseText) {
                try {
                    errorMessage = JSON.parse(errorResponse.responseText).detail;
                } catch (e) {
                    errorMessage = errorResponse.responseText;
                }
            }
            return errorMessage;
        },
        addEventListener: function (eventName, callback) {
            component.eventManager.addEventListener(eventName, callback.bind(this), true);
        },
        /**
         * Initialize list of fragments based on Controller instance
         * @param {string} sFragmentName Fragment Name
         * @param {string} sId Control ID
         * @returns {sap.ui.core.Control}|null the Control instance if available
         *
         * @private
         */
        _getFragmentControl: function (sFragmentName, sId) {
            var oFragment = this._getFragmentFromList(sFragmentName);
            return oFragment && oFragment.sfId ?
                sap.ui.core.Fragment.byId(oFragment.sfId, sId) :
                null;
        },
        /**
         * Initialize list of fragments based on Controller instance
         * @param {array} aFragmentList list of fragments
         *
         * @private
         */
        _initFragmentList: function (aFragmentList) {
            var fnCapitalCharacter = function (sCharacter) {
                if (sCharacter >= "A" && sCharacter <= "Z") {
                    return sCharacter;
                }
            };
            for (var i = 0, j = aFragmentList.length; i < j; i++) {
                if (jQuery.type(aFragmentList[i]) !== "string") {
                    continue;
                }
                var sFragmentName = [this._sAppName, "resources", "fragments", aFragmentList[i]].join("."),
                    sFragmentId;
                try {
                    sFragmentId = aFragmentList[i].split("").filter(fnCapitalCharacter).join("");
                    this.mFragmentList[sFragmentName] = {
                        sfId: sFragmentId,
                        instance: sap.ui.xmlfragment(sFragmentId, sFragmentName, this)
                    };
                    this.mFragmentList[sFragmentName].instance.setModel(this.getOwnerComponent().getModel("i18n"), "i18n");
                } catch (e) {
                    jQuery.sap.log.error("Unable to instantiate fragment as " + aFragmentList[i] +
                        " may be unavailble in " + [this._sAppName, "fragment folder"].join("/"));
                }
            }
        },
        /**
         * Retrieves the fragment associated with relevant controller
         * @param {string} sFragmentName Fragment name to retrieve
         * @returns {object} the fragment
         *
         * @private
         */
        _getFragmentFromList: function (sFragmentName) {
            var oFragment = null;
            if (jQuery.type(sFragmentName) === "string") {
                var sFullPath = [this._sAppName, "resources", "fragments", sFragmentName].join(".");
                if (this.mFragmentList.hasOwnProperty(sFullPath)) {
                    oFragment = this.mFragmentList[sFullPath];
                } else {
                    this._initFragmentList([sFragmentName]);
                    oFragment = this._getFragmentFromList(sFragmentName);
                }
            }
            return oFragment;
        },
        /**
         * Retrieves the fragment instance associated with relevant controller
         * @param {string} sFragmentName Fragment name to retrieve
         * @returns {sap.ui.xmlfragment} the fragment instance
         *
         * @public
         */
        getFragmentInstance: function (sFragmentName) {
            return this._getFragmentFromList(sFragmentName) && this._getFragmentFromList(sFragmentName).instance;
        },
        showErrorMessageBox: function (i18nProperty, params, onClose) {
            if (!i18nProperty) {
                i18nProperty = 'genericErrorMessage';
            }
            MessageBox.error(this.getText(i18nProperty, params), {onClose});
        },
        showSuccessMessageBox: function (i18nProperty, params, onClose) {
            MessageBox.success(this.getText(i18nProperty, params), {onClose});
        }
    });

});