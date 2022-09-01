/*
 * Copyright (C) 2009-2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["sap/ui/core/mvc/Controller",'./Constants','sap/m/MessagePopover','sap/m/MessagePopoverItem'],function(C,a,M,b){"use strict";return C.extend("ehs.em.import.datas1.controller.BaseController",{getRouter:function(){return sap.ui.core.UIComponent.getRouterFor(this);},getModel:function(n){return this.getView().getModel(n);},setModel:function(m,n){return this.getView().setModel(m,n);},getResourceBundle:function(){return this.getOwnerComponent().getModel("i18n").getResourceBundle();},byId:function(i){return this.getView().byId(i);}});});
