/*
 * Copyright (C) 2009-2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ehs/em/import/datas1/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("ehs.em.import.datas1.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
				
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		},
		
		/**
		 * The component is destroyed by UI5 automatically.
		 * @public
		 * @override
		 */
		destroy : function () {
			// call the base component's destroy function
			UIComponent.prototype.destroy.apply(this, arguments);
		}
	});
});