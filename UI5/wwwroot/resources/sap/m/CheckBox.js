/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./Label','./library','sap/ui/Device','sap/ui/core/Control','sap/ui/core/IconPool','sap/ui/core/EnabledPropagator','sap/ui/core/library','./CheckBoxRenderer',"sap/ui/thirdparty/jquery"],function(L,l,D,C,I,E,c,a,q){"use strict";var V=c.ValueState;var T=c.TextAlign;var b=c.TextDirection;var d=C.extend("sap.m.CheckBox",{metadata:{interfaces:["sap.ui.core.IFormContent"],library:"sap.m",properties:{selected:{type:"boolean",group:"Data",defaultValue:false},partiallySelected:{type:"boolean",group:"Data",defaultValue:false},enabled:{type:"boolean",group:"Behavior",defaultValue:true},name:{type:"string",group:"Misc",defaultValue:null},text:{type:"string",group:"Appearance",defaultValue:null},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:b.Inherit},textAlign:{type:"sap.ui.core.TextAlign",group:"Appearance",defaultValue:T.Begin},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:''},useEntireWidth:{type:"boolean",group:"Appearance",defaultValue:false},activeHandling:{type:"boolean",group:"Misc",defaultValue:true},editable:{type:"boolean",group:"Behavior",defaultValue:true},valueState:{type:"sap.ui.core.ValueState",group:"Data",defaultValue:V.None},displayOnly:{type:"boolean",group:"Behavior",defaultValue:false},wrapping:{type:"boolean",group:"Appearance",defaultValue:false}},aggregations:{_label:{type:"sap.m.Label",group:"Behavior",multiple:false,visibility:"hidden"}},associations:{ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{select:{parameters:{selected:{type:"boolean"}}}},designtime:"sap/m/designtime/CheckBox.designtime"}});E.call(d.prototype);d.prototype.init=function(){this.addActiveState(this);I.insertFontFaceStyle();};d.prototype.exit=function(){this._oLabel=null;delete this._iTabIndex;};d.prototype.setSelected=function(s){if(s===this.getSelected()){return this;}this.$("CbBg").toggleClass("sapMCbMarkChecked",!!s);var o=this.getDomRef("CB");if(o){s?o.setAttribute('checked','checked'):o.removeAttribute('checked');}this.setProperty("selected",s,true);this.$().attr("aria-checked",this._getAriaChecked());return this;};d.prototype.setPartiallySelected=function(p){if(p===this.getPartiallySelected()){return this;}this.setProperty("partiallySelected",p,true);this.$("CbBg").toggleClass("sapMCbMarkPartiallyChecked",p);this.$().attr("aria-checked",this._getAriaChecked());return this;};d.prototype.setText=function(t){var o=this._getLabel(),h=!!t;this.setProperty("text",t,true);o.setText(t);this.$().toggleClass("sapMCbHasLabel",h);return this;};d.prototype.setWidth=function(w){this.setProperty("width",w,true);this._setWidth();return this;};d.prototype.setUseEntireWidth=function(u){this.setProperty("useEntireWidth",u,true);this._setWidth();return this;};d.prototype.setTextDirection=function(s){var o=this._getLabel();this.setProperty("textDirection",s,true);o.setTextDirection(s);return this;};d.prototype.setTextAlign=function(A){var o=this._getLabel();this.setProperty("textAlign",A,true);o.setTextAlign(A);return this;};d.prototype.setWrapping=function(w){var o=this._getLabel();this.setProperty("wrapping",w,true);o.setWrapping(w);this.$().toggleClass("sapMCbWrapped",w);return this;};d.prototype.addActiveState=function(o){if(D.os.blackberry){o.addDelegate({ontouchstart:function(e){q(o.getDomRef()).addClass("sapMActive");},ontouchend:function(e){q(o.getDomRef()).removeClass("sapMActive");}});}};d.prototype.ontouchstart=function(e){e.originalEvent._sapui_handledByControl=true;};d.prototype.ontap=function(e){var s;if(this.getEnabled()&&this.getEditable()&&!this.getDisplayOnly()){this.$().focus();s=this._getSelectedState();this.setSelected(s);this.setPartiallySelected(false);this.fireSelect({selected:s});e&&e.setMarked();}};d.prototype.onsapspace=function(e){this.ontap(e);if(e){e.preventDefault();e.stopPropagation();}};d.prototype.onsapenter=function(e){this.ontap(e);};d.prototype.setTabIndex=function(t){this._iTabIndex=t;this.$("CbBg").attr("tabindex",t);return this;};d.prototype.getTabIndex=function(){if(this.hasOwnProperty("_iTabIndex")){return this._iTabIndex;}return(this.getEnabled()&&!this.getDisplayOnly())?0:-1;};d.prototype._getLabel=function(){if(!this._oLabel){this._oLabel=new L(this.getId()+"-label",{labelFor:this.getId()}).addStyleClass("sapMCbLabel");this.setAggregation("_label",this._oLabel,true);}return this.getAggregation("_label");};d.prototype._setWidth=function(){var o=this._getLabel(),$=this.$(),w=this.getWidth();if(this.getUseEntireWidth()){o.setWidth("");$.outerWidth(w);}else{$.outerWidth("");o.setWidth(w);}};d.prototype._getSelectedState=function(){var s=this.getSelected(),p=this.getPartiallySelected();return(s===p)||(!s&&p);};d.prototype._getAriaChecked=function(){var s=this.getSelected();if(this.getPartiallySelected()&&s){return"mixed";}return s;};d.prototype.getAccessibilityInfo=function(){var B=sap.ui.getCore().getLibraryResourceBundle("sap.m");return{role:"checkbox",type:B.getText("ACC_CTR_TYPE_CHECKBOX"),description:(this.getText()||"")+(this.getSelected()?(" "+B.getText("ACC_CTR_STATE_CHECKED")):""),focusable:this.getEnabled()&&!this.getDisplayOnly(),enabled:this.getEnabled(),editable:this.getEditable()};};d.prototype.getFormDoNotAdjustWidth=function(){return this.getText()?false:true;};return d;});