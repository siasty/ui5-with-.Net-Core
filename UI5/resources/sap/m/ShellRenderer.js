/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/library','sap/m/library','sap/ui/Device',"sap/base/security/encodeXML"],function(q,c,l,D,e){"use strict";var B=l.BackgroundHelper;var T=c.TitleLevel;var S={};S.render=function(r,C){var t=(C.getTitleLevel()===T.Auto)?T.H1:C.getTitleLevel();r.write("<div");r.writeControlData(C);r.addClass("sapMShell");if(C.getAppWidthLimited()){r.addClass("sapMShellAppWidthLimited");}B.addBackgroundColorStyles(r,C.getBackgroundColor(),C.getBackgroundImage(),"sapMShellGlobalOuterBackground");r.writeClasses();r.writeStyles();var s=C.getTooltip_AsString();if(s){r.writeAttributeEscaped("title",s);}r.write(">");B.renderBackgroundImageTag(r,C,["sapContrastPlus","sapMShellBG","sapUiGlobalBackgroundImageForce"],C.getBackgroundImage(),C.getBackgroundRepeat(),C.getBackgroundOpacity());r.write("<div class='sapMShellBrandingBar'></div>");r.write("<div class='sapMShellCentralBox'>");var a="",b="";if(!C.getBackgroundImage()){a="sapMShellBackgroundColorOnlyIfDefault";b="sapUiGlobalBackgroundImageOnlyIfDefault";}r.write("<header class='sapMShellHeader "+a+"' id='"+C.getId()+"-hdr'>");r.write("<div class='"+b+"'></div>");r.write(S.getLogoImageHtml(C));if(C.getTitle()){r.write("<"+t);r.write(" id='"+C.getId()+"-hdrTxt' class='sapMShellHeaderText'>");r.writeEscaped(C.getTitle());r.write("</"+t+">");}r.write("<span class='sapMShellHeaderRight'>");r.write("<span id='"+C.getId()+"-hdrRightTxt' ");if(!C.getHeaderRightText()){r.writeAttribute("style","display:none;");}r.write("class='sapMShellHeaderRightText'>"+e(C.getHeaderRightText())+"</span>");if(C.getShowLogout()){var d=sap.ui.getCore().getLibraryResourceBundle("sap.m");r.write("<a id='"+C.getId()+"-logout' tabindex='0' role='button' class='sapMShellHeaderLogout'>"+d.getText("SHELL_LOGOUT")+"</a>");}r.write("</span></header>");r.write("<div class='sapMShellContent sapMShellGlobalInnerBackground' id='"+C.getId()+"-content' data-sap-ui-root-content='true'>");r.renderControl(C.getApp());r.write("</div></div></div>");};S.getLogoImageHtml=function(C){var i=C.getLogo();if(!i){q.sap.require("sap.ui.core.theming.Parameters");i=sap.ui.core.theming.Parameters._getThemeImage();}var r="";if(i){var R=sap.ui.getCore().getLibraryResourceBundle("sap.m");r="<div class='sapMShellLogo'>";if(D.browser.msie){r+="<span class='sapMShellLogoImgAligner'></span>";}r+="<img id='"+C.getId()+"-logo' class='sapMShellLogoImg' src='";r+=e(i);r+="' alt='";r+=R.getText("SHELL_ARIA_LOGO");r+="' /></div>";}return r;};return S;},true);
