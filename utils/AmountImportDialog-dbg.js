/*
 * Copyright (C) 2009-2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
	"sap/ui/base/Object",
	'../controller/Constants',
	'../utils/Formatter',
	'sap/m/MessageToast',
	"sap/ui/model/json/JSONModel",
	'sap/ui/core/message/Message',
    'sap/ui/core/MessageType',
	'sap/ui/core/util/Export',
	'sap/ui/core/util/ExportTypeCSV',
	"sap/m/MessageBox"
], function (UI5Object, Constants, Formatter, MessageToast, JSONModel, Message, MessageType, Export, ExportTypeCSV, MessageBox) {
	"use strict";

	return UI5Object.extend("ehs.em.import.datas1.utils.AmountHistoryDialog", {
		
		constructor: function (oView) {
			this._oView = oView;
			this._oBundle = oView.getController().getResourceBundle();
		},

		open: function () {
		
			var oView = this._oView;
			var oBundle = this._oBundle;
			var oController = oView.getController();
			var oDialog = oController.byId("ImportEnvDataDialog");
			
			var fMessageSorter = function(a,b) {
				var aWeight = Constants.messageOrder.indexOf(a.Severity);
				var bWeight = Constants.messageOrder.indexOf(b.Severity);
				
				return aWeight - bWeight;
		    };
		    
        	// create dialog lazily
        	if (!oDialog) {
            	// create dialog via fragment factory
            	var oFragmentController = {
            		formatter: Formatter,
        			controller: oController,
            		
					onCloseDialog : function () {
						var oFileUploader = oView.byId("fileUploader");
    					oFileUploader.clear();
						
						oDialog.close();
					},
					
					// Check if correct file type is selected and start upload
					onImportButtonPress: function() {
						var oFileUploader = oView.byId("fileUploader");
						var sFileName = jQuery.trim(oFileUploader.getValue());
						
						if (sFileName === "") {
							MessageBox.error(oBundle.getText("noFile"));
						}
						else if (sFileName.toLowerCase().match("\\.xlsx$")){
							oFileUploader.upload();
							oDialog.setBusy(true);
						}
						else {
							MessageBox.error(oBundle.getText("incorrectFile"));
							oFileUploader.clear();
						}
					},
					
					// Fill message table from response via the "messages" model
					handleUploadComplete: function (oEvent) {
						var sResponse = oEvent.getParameter("responseRaw");
						var iStatus = oEvent.getParameter("status");
						var iStatusDigit = +(("" + iStatus)[0]);
						var oFileUploader = oView.byId("fileUploader");
						var sFileName = jQuery.trim(oFileUploader.getValue());
						
						if (iStatus === 403) {
							var sFailedAuthorization = oBundle.getText("errorFailedAuthorization");
							this._showServiceError(sFailedAuthorization);
						} else if ( iStatusDigit === 0 || iStatusDigit === 4 || iStatusDigit === 5 ) { //check if call failed
							this._showServiceError(sResponse);
						} else if (sResponse) {
							var oResponse = JSON.parse(sResponse);
							var oResponseData = oResponse.d;

							if (oResponseData) {
								var sMessage = oResponseData.ResponseMessage;
								
								if (sMessage) {
									var aMessageTableContent = JSON.parse(sMessage);
									aMessageTableContent.sort(fMessageSorter);
									var oMessageModel = new JSONModel({rows: aMessageTableContent});
									oMessageModel.setSizeLimit(200000); //we want to show ALL messages in the table
									oView.setModel(oMessageModel, "messages");
									
									oView.byId("msgTitle").setText(oBundle.getText("messagesFile", [aMessageTableContent.length, sFileName]));
									
    								this.onCloseDialog();
								}
							}
        				}
        				oDialog.setBusy(false);
        			},

					// Show error if call failed
					_showServiceError: function(sDetails) {
						if (this._bMessageOpen) {
							return;
						}
						this._bMessageOpen = true;
						MessageBox.error(
							oBundle.getText("errorText"), {
								id: "serviceErrorMessageBox",
								details: sDetails,
								actions: [MessageBox.Action.CLOSE],
								onClose: function() {
									this._bMessageOpen = false;
								}.bind(this)
							}
						);
					}
            	};

            	oDialog = sap.ui.xmlfragment(oView.getId(), "ehs.em.import.datas1.view.ImportEnvDataDialog", oFragmentController);
            	oView.addDependent(oDialog);
        	}
        	oDialog.open();
        	
        	var oModel = oController.getModel(Constants.upLoadServiceName);
			var crsToken = oModel.getSecurityToken();
			var uploadURL = oModel.sServiceUrl + "/FileSet";
			
			var oUploader = oController.byId("fileUploader");
			oUploader.setUploadUrl(uploadURL);
			
			oUploader.destroyHeaderParameters();
			oUploader.addHeaderParameter(new sap.ui.unified.FileUploaderParameter({name: "x-csrf-token", value: crsToken}));
			oUploader.addHeaderParameter(new sap.ui.unified.FileUploaderParameter({name: "Accept", value: "application/json"}));
			oUploader.addHeaderParameter(new sap.ui.unified.FileUploaderParameter({name: "slug", value: Constants.slug}));
		}

	});

});