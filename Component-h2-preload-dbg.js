//@ui5-bundle ehs/em/import/datas1/Component-h2-preload.js
/*
 * Copyright (C) 2009-2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.predefine('ehs/em/import/datas1/Component',["sap/ui/core/UIComponent","sap/ui/Device","ehs/em/import/datas1/model/models"],function(U,D,m){"use strict";return U.extend("ehs.em.import.datas1.Component",{metadata:{manifest:"json"},init:function(){U.prototype.init.apply(this,arguments);this.setModel(m.createDeviceModel(),"device");},destroy:function(){U.prototype.destroy.apply(this,arguments);}});});
sap.ui.require.preload({
	"ehs/em/import/datas1/manifest.json":'{"_version":"1.11.0","sap.app":{"id":"ehs.em.import.datas1","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"9.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","dataSources":{"uploadService":{"uri":"/sap/opu/odata/sap/EHS_EM_IMPORTENVDATA_SRV/","type":"OData","settings":{"localUri":"localService/metadata.xml"}}},"ach":"EHS-SUS-EM","sourceTemplate":{"id":"ui5template.basicSAPUI5ApplicationProject","version":"1.40.12"},"crossNavigation":{"inbounds":{"EnvironmentalDatamportAmountData":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"EnvironmentalData","action":"importAmountData"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":["sap_hcb","sap_belize"]},"sap.ui5":{"rootView":{"viewName":"ehs.em.import.datas1.view.Import","id":"import","type":"XML"},"dependencies":{"minUI5Version":"1.30.0","libs":{"sap.ui.core":{"lazy":false},"sap.m":{"lazy":false},"sap.ui.layout":{"lazy":false},"sap.ui.unified":{"lazy":false},"sap.ushell":{"lazy":false},"sap.collaboration":{"lazy":false},"sap.ui.comp":{"lazy":false},"sap.uxap":{"lazy":false}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ehs.em.import.datas1.i18n.i18n"}},"":{"preload":true,"dataSource":"uploadService","settings":{"defaultBindingMode":"OneWay","defaultCountMode":"Inline","refreshAfterChange":false}}},"routing":{"config":{"async":true,"routerClass":"sap.m.routing.Router"}},"resources":{"css":[{"uri":"css/style.css"}]},"flexEnabled":true},"sap.fiori":{"_version":"1.1.0","registrationIds":["F2784"],"archeType":"transactional"}}'
},"ehs/em/import/datas1/Component-h2-preload"
);
sap.ui.loader.config({depCacheUI5:{
"ehs/em/import/datas1/Component.js":["ehs/em/import/datas1/model/models.js","sap/ui/Device.js","sap/ui/core/UIComponent.js"],
"ehs/em/import/datas1/controller/BaseController.js":["ehs/em/import/datas1/controller/Constants.js","sap/m/MessagePopover.js","sap/m/MessagePopoverItem.js","sap/ui/core/mvc/Controller.js"],
"ehs/em/import/datas1/controller/Import.controller.js":["ehs/em/import/datas1/controller/BaseController.js","ehs/em/import/datas1/controller/Constants.js","ehs/em/import/datas1/utils/AmountImportDialog.js","ehs/em/import/datas1/utils/Formatter.js","sap/ui/core/util/Export.js","sap/ui/core/util/ExportTypeCSV.js"],
"ehs/em/import/datas1/model/models.js":["sap/ui/Device.js","sap/ui/model/json/JSONModel.js"],
"ehs/em/import/datas1/utils/AmountImportDialog.js":["ehs/em/import/datas1/controller/Constants.js","ehs/em/import/datas1/utils/Formatter.js","sap/m/MessageBox.js","sap/m/MessageToast.js","sap/ui/base/Object.js","sap/ui/core/MessageType.js","sap/ui/core/message/Message.js","sap/ui/core/util/Export.js","sap/ui/core/util/ExportTypeCSV.js","sap/ui/model/json/JSONModel.js"],
"ehs/em/import/datas1/utils/Formatter.js":["ehs/em/import/datas1/controller/Constants.js","sap/ui/core/format/DateFormat.js"],
"ehs/em/import/datas1/view/Import.view.xml":["ehs/em/import/datas1/controller/Import.controller.js","sap/m/App.js","sap/m/Button.js","sap/m/Column.js","sap/m/ColumnListItem.js","sap/m/Label.js","sap/m/Link.js","sap/m/OverflowToolbar.js","sap/m/Page.js","sap/m/Table.js","sap/m/Text.js","sap/m/Title.js","sap/m/ToolbarSpacer.js","sap/ui/core/Icon.js","sap/ui/core/mvc/XMLView.js"],
"ehs/em/import/datas1/view/ImportEnvDataDialog.fragment.xml":["sap/m/Button.js","sap/m/Dialog.js","sap/m/Link.js","sap/m/VBox.js","sap/ui/core/Fragment.js","sap/ui/unified/FileUploader.js"]
}});
