/*
 * Copyright (C) 2009-2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
	"./BaseController",
	"../utils/AmountImportDialog",
	"../utils/Formatter",
	"sap/ui/core/util/Export",
	"sap/ui/core/util/ExportTypeCSV",
	"./Constants"

], function(BaseController, AmountImportDialog, Formatter, Export, ExportTypeCSV, Constants) {
	"use strict";

	return BaseController.extend("ehs.em.import.datas1.controller.Import", {

		onInit: function() {
			this.getView().setBusy(true);
		},

		onAfterRendering: function() {
			this.onImportPress(); // Start with the Dialog open
			this.getView().setBusy(false);
		},
		
		// Open Dialog
		onImportPress: function() {
			var oImportDialog = new AmountImportDialog(this.getView());
			oImportDialog.open();
		},
		
		// Fetch template from attachments folder
		onTemplateDownload: function() {
			var sModulePath = jQuery.sap.getModulePath("ehs.em.import.datas1", "/attachments/EnvDataImportTemplate.xlsx.zip");
			sap.m.URLHelper.redirect(sModulePath, false);
		},
		
		// Export messages table to CSV
		onExportCSV: function() {
			var that = this;
			var severityLabel = this.byId("severityLabel");
			var messageLabel = this.byId("messageLabel");
			var formatMessageText = function(value){
				if (value) {
					var result = value.replace('""', '"');
					result = result.replace(",", " ");
					return result;
				}
			};
			var formatMessageSeverity = function(value) {
				return Formatter.formatMessageSeverity(value,that);
			};

			var oExport = new Export({
				exportType : new ExportTypeCSV({
					separatorChar : ",",
					charset : "utf-8"
				}),
				
				models : this.getModel("messages"),

				rows : {
					path : "/rows"
				},
				
				columns : 
				[
					{
						name: severityLabel.getText(),
						template: {
							content: {
								path: Constants.messageTableHeader.severity,
								formatter: formatMessageSeverity
							}
						}
					},
					{
						name: messageLabel.getText(),
						template: {
							content: {
								path: Constants.messageTableHeader.message,
								formatter: formatMessageText
							}
						}
					}
				]
			});
			
			oExport.saveFile("ImportEnvDataMessages").always(function() {
				this.destroy();
			});
		},
		
		// Use cross app navigation to open the Monitor Data application
		onPressCollection: function(oEvent) {
			var oControl = oEvent.getSource();
			var oContext = oControl.getBindingContext("messages");
			var oParams = {};
			// get a handle on the global XAppNav service
			var oCrossAppNavigator = sap.ushell && sap.ushell.Container && sap.ushell.Container.getService && sap.ushell.Container.getService("CrossApplicationNavigation");
			
			for (var i = 0; i < Constants.monitorParams.length; i++) {
				oParams[Constants.monitorParams[i]] = oContext.getProperty(Constants.monitorParams[i]); // get relevant parameters from constants
			}
			
			var oArgs = {
				target: Constants.monitorTarget,
				params: oParams
			};
			
			if (oCrossAppNavigator) {
				oCrossAppNavigator.isNavigationSupported([oArgs]).done(
					function(oResponse) {
						if (oResponse[0].supported === true) {
							oCrossAppNavigator.toExternal(oArgs);
						}
					}
				);
			}
		},

		formatter: Formatter

	});
});