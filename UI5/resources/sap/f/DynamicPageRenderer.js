/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device"],function(D){"use strict";var a={};a.render=function(r,d){var o=d.getTitle(),b=d.getHeader(),c=d.getFooter(),e=d.getContent(),h=d.getHeaderExpanded(),H=b?b.getContent():[],f=H.length>0,s=d.getShowFooter(),p=d._preserveHeaderStateOnScroll(),l=d.getLandmarkInfo(),g=d._getHeaderTag(l),F=d._getFooterTag(l);r.write("<article");r.writeControlData(d);r.addClass("sapFDynamicPage");if(d.getToggleHeaderOnTitleClick()){r.addClass("sapFDynamicPageTitleClickEnabled");}r.writeClasses();r.writeAccessibilityState(d,d._formatLandmarkInfo(l,"Root"));r.write(">");if(D.system.desktop){r.renderControl(d._getScrollBar().addStyleClass("sapFDynamicPageScrollBar"));}r.write("<"+g);r.writeAttributeEscaped("id",d.getId()+"-header");r.addClass("sapContrastPlus");r.addClass("sapFDynamicPageTitleWrapper");if(!h){r.addClass(D.system.phone&&o.getSnappedTitleOnMobile()?"sapFDynamicPageTitleSnappedTitleOnMobile":"sapFDynamicPageTitleSnapped");}if(!f){r.addClass("sapFDynamicPageTitleOnly");}r.writeClasses();r.writeAccessibilityState(d,d._formatLandmarkInfo(l,"Header"));r.write(">");r.renderControl(o);if(p){r.renderControl(b);}r.write("</"+g+">");r.write("<div");r.writeAttributeEscaped("id",d.getId()+"-contentWrapper");r.addClass("sapFDynamicPageContentWrapper");r.writeClasses();r.write(">");if(!p){r.renderControl(b);}r.write("<div");r.writeAttributeEscaped("id",d.getId()+"-content");r.addClass("sapFDynamicPageContent");r.writeClasses();r.writeAccessibilityState(d,d._formatLandmarkInfo(l,"Content"));r.write(">");r.write("<div");r.writeAttributeEscaped("id",d.getId()+"-contentFitContainer");if(d.getFitContent()){r.addClass("sapFDynamicPageContentFitContainer");}if(c&&s){r.addClass("sapFDynamicPageContentFitContainerFooterVisible");}r.writeClasses();r.write(">");r.renderControl(e);a.renderFooterSpacer(r,d,c,s);r.write("</div>");r.write("</div>");r.write("</div>");a.renderFooter(r,d,c,s,F,l);r.write("</article>");};a.renderFooter=function(r,d,o,s,f,l){if(o){r.write("<"+f);r.writeAttributeEscaped("id",d.getId()+"-footerWrapper");r.addClass("sapContrast sapContrastPlus sapFDynamicPageFooter sapFFooter-CTX");if(!s){r.addClass("sapUiHidden");}r.writeClasses();r.writeAccessibilityState(d,d._formatLandmarkInfo(l,"Footer"));r.write(">");o.addStyleClass("sapFDynamicPageActualFooterControl");r.renderControl(o);r.write("</"+f+">");}};a.renderFooterSpacer=function(r,d,o,s){if(o){r.write("<div");r.writeAttributeEscaped("id",d.getId()+"-spacer");if(s){r.addClass("sapFDynamicPageContentWrapperSpacer");}r.writeClasses();r.write(">");r.write("</div>");}};return a;},true);
