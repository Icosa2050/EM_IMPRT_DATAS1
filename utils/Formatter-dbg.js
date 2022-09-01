/*
 * Copyright (C) 2009-2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
		'sap/ui/core/format/DateFormat',
		'../controller/Constants'
	],function(DateFormat, Constants) {
	"use strict";
 
	var Formatter = {
 
		// Set message icon color depending on message type
        formatIconColor: function(value){
	        var result = "";
        	switch(value) {
			    case "error":
			    case "E":
			        result = Constants.colorNames.Error;
			        break;
			    case "warning2":
			    case "W":
			        result = Constants.colorNames.Warning;
			        break;
			    case "S":
			    	result = Constants.colorNames.Success;
			    	break;
			    default:
			        result = "";
			}
			return result;
        },
        
        // Set tooltip of the message icon depending on message type
        formatMessageSeverity: function(value, oController){
        	var result="";
        	
        	if (this instanceof sap.ui.core.mvc.Controller) {
        		var oBundle = this.getResourceBundle();
        	} else if (oController) {
        		oBundle = oController.getResourceBundle();
        	} else {
        		return value; // should never happen, only thing we can do without i18n
        	}
        	
        	switch(value) {
        		case "E":
        			result = oBundle.getText("error"); 
        			break;
        		case "W":
        			result = oBundle.getText("warning");
        			break;
        		case "S":
        			result = oBundle.getText("success");
        			break;
        	}
        	return result;
        },
        
        // Set message icon depending on message type
        formatMessageSeverityIcon: function(value){
        	var result="";
        	switch(value) {
        		case "E":
        			result = "message-error"; 
        			break;
        		case "W":
        			result = "warning2";
        			break;
        		case "S":
        			result = "message-success";
        			break;
        		default:
        			result = "";
        	}
        	return result;
        }
	};
 
	return Formatter;
 
}, /* bExport= */ true);