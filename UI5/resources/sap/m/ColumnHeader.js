/*
 * ! OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Control','sap/ui/core/Icon','./ColumnHeaderRenderer'],function(C,I,a){"use strict";var b=C.extend("sap.m.ColumnHeader",{library:"sap.m",metadata:{properties:{text:{type:"string",defaultValue:null},sorted:{type:"boolean",defaultValue:false},sortOrder:{type:"string",defaultValue:null},filtered:{type:"boolean",defaultValue:false}},defaultAggregations:"viewSettingsPopover",aggregations:{viewSettingsPopover:{type:"sap.m.ViewSettingsPopover",multiple:false},_sortIcon:{type:"sap.ui.core.Icon",multiple:false,visibility:"hidden"},_filterIcon:{type:"sap.ui.core.Icon",multiple:false,visibility:"hidden"}}}});b.prototype.setViewSettingsPopover=function(v){this.setAggregation("viewSettingsPopover",v,true);this._attachViewSettingsPopoverEvents();return this;};b.prototype.setSortOrder=function(s){this.setProperty("sortOrder",s);var i=s==="Ascending"?"sap-icon://sort-ascending":"sap-icon://sort-descending";var S=this.getAggregation("_sortIcon");if(!S){this.setAggregation("_sortIcon",new I({src:i,visible:this.getSorted()}));}else{S.setSrc(i);}return this;};b.prototype.setSorted=function(s){this.setProperty("sorted",s);var S=this.getAggregation("_sortIcon");if(!s&&!S){return this;}if(s){if(!S){this.setAggregation("_sortIcon",new I({src:this.getSortOrder()==="Ascending"?"sap-icon://sort-ascending":"sap-icon://sort-descending"}));}else{S.setVisible(true);}}else{S.setVisible(false);}return this;};b.prototype.setFiltered=function(f){this.setProperty("filtered",f);var F=this.getAggregation("_filterIcon");if(!f&&!F){return this;}if(f){if(!F){this.setAggregation("_filterIcon",new I({src:"sap-icon://filter"}));}else{F.setVisible(true);}}else{F.setVisible(false);}return this;};b.prototype.setTableAdapter=function(A){this._oAdapter=A;};b.prototype.getTableAdapter=function(){return this._oAdapter||{interactive:true,rowAggregation:"items"};};b.prototype.onclick=function(e){if(this._isInteractive()){this._openColumnActions();}};b.prototype.onsapselect=b.prototype.onclick;b.prototype._openColumnActions=function(){var v=this.getViewSettingsPopover();if(v!=null){var $=this.$();v.openBy(this);v._getPopover(this).setOffsetY(-$.outerHeight());}};b.prototype._attachViewSettingsPopoverEvents=function(){var v=this.getViewSettingsPopover();if(v){this._detachViewSettingsPopoverEvents(v);v.attachSortSelected(this.onSortSelected,this);v.attachFilterSelected(this.onFilterSelected,this);}};b.prototype._detachViewSettingsPopoverEvents=function(v){v.detachSortSelected(this.onSortSelected,this);v.detachFilterSelected(this.onFilterSelected,this);};b.prototype.onSortSelected=function(){if(!this.getSorted()){this.setSorted(true);}if(this.getSortOrder()===""||this.getSortOrder()==="Descending"){this.setSortOrder("Ascending");}else{this.setSortOrder("Descending");}};b.prototype.onFilterSelected=function(){this.setFiltered(true);};b.prototype.getAccessibilityInfo=function(){var B=sap.ui.getCore().getLibraryResourceBundle("sap.m"),A=this.getText()+" ";if(this._isInteractive()){if(this.getSortOrder()){A+=B.getText("COLUMNHEADER_SORTED")+" ";A+=(this.getSortOrder()==="Ascending"?B.getText("COLUMNHEADER_SORTED_ASCENDING"):B.getText("COLUMNHEADER_SORTED_DESCENDING"))+" ";}if(this.getFiltered()){A+=B.getText("COLUMNHEADER_FILTERED")+" ";}A+=B.getText("COLUMNHEADER_ACCESS_COLUMN_ACTIONS");return{role:"button",focusable:true,description:A};}return{focusable:false,description:A};};b.prototype._isInteractive=function(){return this.getTableAdapter().interactive&&!!this.getViewSettingsPopover();};b.prototype.exit=function(){this._oAdapter=null;};return b;});
