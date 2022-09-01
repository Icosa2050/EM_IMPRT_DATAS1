/*
 * Copyright (C) 2009-2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(function() {
	"use strict";
 
	var Constants = {
		colorNames: {Warning: "#d14900", Error: "#cc1919", Success: "#2b7d2b", Invalid: "#b3b3b3"},
		monitorParams: ["KEY", "SRC_TYPE", "USAGE_PERIOD"],
		monitorTarget: {semanticObject: "EnvironmentalData", action: "monitorAmount"},
		messageOrder: ["E", "W", "S"],
		messageTableHeader: {severity: "Severity", message: "Message"},
		slug: "All"
	};
 
	return Constants;
 
}, /* bExport= */ true);