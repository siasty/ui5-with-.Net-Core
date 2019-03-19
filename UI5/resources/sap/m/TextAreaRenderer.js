/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','./InputBaseRenderer','sap/ui/Device','sap/ui/core/library',"sap/base/security/encodeXML"],function(R,I,D,c,e){"use strict";var W=c.Wrapping;var T={};var T=R.extend(I);T.addOuterClasses=function(r,C){r.addClass("sapMTextArea");if(C.getShowExceededText()){r.addClass("sapMTextAreaWithCounter");}if(C.getHeight()){r.addClass("sapMTextAreaWithHeight");}};T.addOuterStyles=function(r,C){C.getHeight()&&r.addStyle("height",C.getHeight());};T.writeDecorations=function(r,C){var o=C.getAggregation("_counter");r.renderControl(o);};T.openInputTag=function(r,C){r.write("<textarea");};T.closeInputTag=function(r,C){r.write("</textarea>");};T.writeInnerValue=function(){};T.writeInnerContent=function(r,C){var v=C.getValue();v=e(v);r.write(v);};T.addInnerClasses=function(r,C){r.addClass("sapMTextAreaInner");if(C.getGrowing()){r.addClass("sapMTextAreaGrow");}};T.getAriaRole=function(C){return"";};T.writeInnerAttributes=function(r,C){if(C.getWrapping()!=W.None){r.writeAttribute("wrap",C.getWrapping());}r.writeAttribute("rows",C.getRows());r.writeAttribute("cols",C.getCols());};return T;},true);
