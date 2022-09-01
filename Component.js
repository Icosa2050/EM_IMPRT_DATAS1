/*
 * Copyright (C) 2009-2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","ehs/em/import/datas1/model/models"],function(U,D,m){"use strict";return U.extend("ehs.em.import.datas1.Component",{metadata:{manifest:"json"},init:function(){U.prototype.init.apply(this,arguments);this.setModel(m.createDeviceModel(),"device");},destroy:function(){U.prototype.destroy.apply(this,arguments);}});});
