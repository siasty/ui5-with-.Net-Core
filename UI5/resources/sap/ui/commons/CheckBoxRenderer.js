/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/ValueStateSupport','sap/ui/core/library'],function(V,c){"use strict";var T=c.TextDirection;var a=c.ValueState;var A=c.AccessibleRole;var C={};C.render=function(r,o){r.addClass("sapUiCb");r.write("<span");r.writeControlData(o);r.writeAccessibilityState(o,{"role":A.Checkbox.toLowerCase()});r.writeAttributeEscaped("aria-labelledby",o.getId()+"-label");var e=o.getEnabled()!=null&&o.getEnabled();var b=o.getEditable()!=null&&o.getEditable();var i=false;var d=false;if(o.getValueState()!=null){i=a.Error==o.getValueState();d=a.Warning==o.getValueState();}if(o.getChecked()){r.addClass("sapUiCbChk");}var m=0;if(!b){r.addClass("sapUiCbRo");m=0;}if(!e){r.addClass("sapUiCbDis");m=-1;}if(i){r.addClass("sapUiCbErr");r.writeAttribute("aria-invalid","true");}else if(d){r.addClass("sapUiCbWarn");}if(e&&b&&!i&&!d){r.addClass("sapUiCbStd");}if(e&&b){r.addClass("sapUiCbInteractive");}r.writeClasses();if(o.getWidth()&&o.getWidth()!=''){r.writeAttribute("style","width:"+o.getWidth()+";");}r.writeAttribute("tabIndex",m);r.write(">");r.write("<input type='CheckBox' tabindex='-1' id='");r.write(o.getId());r.write("-CB'");if(o.getName()){r.writeAttributeEscaped('name',o.getName());}if(o.getChecked()){r.write(" checked='checked'");}if(!e){r.write(" disabled='disabled'");}var t=V.enrichTooltip(o,o.getTooltip_AsString());if(t){r.writeAttributeEscaped("title",t);}if(!b){r.write(" disabled='disabled'");}r.write(" />");r.write("<label");r.writeAttributeEscaped("id",o.getId()+"-label");if(t){r.writeAttributeEscaped("title",t);}r.writeAttribute("for",o.getId()+"-CB");if(!o.getText()){r.write(" class='sapUiCbNoText'");}r.write(">");if(o.getText()){this.renderText(r,o.getText(),o.getTextDirection());}r.write("</label>");r.write("</span>");};C.renderText=function(r,t,e){if(!e||e==T.Inherit){r.writeEscaped(t);}else{r.write("<span style=\"direction:"+e.toLowerCase()+";\">");r.writeEscaped(t);r.write("</span>");}};return C;},true);
