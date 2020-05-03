sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
	var oHomeController = Controller.extend("vistronart.Home", {
		onInit : function () {
			this.initSidebarModel();
		},
		onAfterRendering: function () {
//			this.byId("sideNav").getSideContent().setExpanded(false);
		}
	});
	
	oHomeController.prototype.initSidebarModel = function () {
		this.setModel(new JSONModel({"navigation": [
				{key: "portrait", text: this.getText("portrait"), icon:"sap-icon://employee-pane"},
				{key: "fan-art", text: this.getText("fanArt"), icon:"sap-icon://leads"},
				{key: "pets", text: this.getText("pets"), icon:"sap-icon://Netweaver-business-client"}
			]}), "side");
	};

	oHomeController.prototype.onSideNavButtonPress = function (oEvent) {
		var oToolPage = this.byId("sideNav");
		oEvent.getSource().setTooltip(oToolPage.getSideExpanded() ? this.getText("expandMenu") : this.getText("collapseMenu"));
		oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
	};

	oHomeController.prototype.openLanguageOptions = function () {
		sap.m.MessageToast.show(this.getText("languageSupport"));
	};
	
	return oHomeController;
});