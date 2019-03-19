/*
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./SelectionAdapter','./library'],function(S,l){"use strict";var a=l.SelectionMode;var B=S.extend("sap.ui.table.BindingSelectionAdapter");B.prototype.exit=function(){var b=this._getBinding();if(b){b.detachEvent("change",this._onBindingChange);}S.prototype.exit.call(this);};B.prototype.addSelectionInterval=function(i,I){if(this.getSelectionMode()===a.None){return;}var b=this._getBinding();if(b&&b.addSelectionInterval){if(this.getSelectionMode()===a.Single){i=I;b.setSelectionInterval(i,I);}b.addSelectionInterval(i,I);}};B.prototype.clearSelection=function(){var b=this._getBinding();if(b&&b.clearSelection){b.clearSelection();}};B.prototype.getSelectedIndex=function(){var b=this._getBinding();if(b&&b.findNode){return b.getSelectedIndex();}else{return-1;}};B.prototype.getSelectedIndices=function(){var b=this._getBinding();if(b&&b.findNode&&b.getSelectedIndices){return b.getSelectedIndices();}else{return[];}};B.prototype.getSelectableCount=function(){var b=this._getBinding();if(!b){return 0;}else if(b.getGrandTotalContextInfo){var r=b.getGrandTotalContextInfo();return r?r.totalNumberOfLeafs:0;}else{return b.getLength();}};B.prototype.getSelectedCount=function(){var b=this._getBinding();if(b&&b.getSelectedNodesCount){return b.getSelectedNodesCount();}else{return 0;}};B.prototype.isIndexSelectable=function(i){var b=this._getBinding();if(b){return b.isIndexSelectable(i);}else{return false;}};B.prototype.isIndexSelected=function(i){var b=this._getBinding();if(b&&b.isIndexSelected){return b.isIndexSelected(i);}else{return false;}};B.prototype.removeSelectionInterval=function(i,I){var b=this._getBinding();if(b&&b.findNode&&b.removeSelectionInterval){b.removeSelectionInterval(i,I);}};B.prototype.selectAll=function(){if(this.getSelectionMode()===a.None){return;}var b=this._getBinding();if(b&&b.selectAll){b.selectAll();}};B.prototype.setSelectedIndex=function(i){if(this.getSelectionMode()===a.None){return;}if(i===-1){this.clearSelection();}else{var b=this._getBinding();if(b&&b.setSelectedIndex){b.setSelectedIndex(i);}}};B.prototype.setSelectionInterval=function(i,I){if(this.getSelectionMode()===a.None){return;}var b=this._getBinding();if(b&&b.setSelectionInterval){if(this.getSelectionMode()===a.Single){i=I;}b.setSelectionInterval(i,I);}};B.prototype.setSelectionMode=function(s){var o=this.getSelectionMode();S.prototype.setSelectionMode.apply(this,arguments);if(this.getSelectionMode()!==o){this.clearSelection();}return this;};B.prototype._setBinding=function(b){var c=this._getBinding();S.prototype._setBinding.call(this,b);if(c!==b){if(b){b.attachEvent("change",this._onBindingChange,this);}if(c){c.detachEvent("change",this._onBindingChange);}}};B.prototype._onBindingChange=function(e){var r=typeof(e)==="object"?e.getParameter("reason"):e;if(r==="sort"||r==="filter"){this.clearSelection();}};return B;});
