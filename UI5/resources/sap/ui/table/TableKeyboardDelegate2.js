/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/Device","./library","./TableUtils","sap/ui/events/KeyCodes","sap/ui/thirdparty/jquery"],function(B,D,l,T,K,q){"use strict";var C=T.CELLTYPE;var S=l.SelectionMode;var M={CTRL:1,SHIFT:2,ALT:4};var N={LEFT:"Left",RIGHT:"Right",UP:"Up",DOWN:"Down"};var H=5;var a="1rem";function p(e,P){e.setMarked("sapUiTableSkipItemNavigation",P!==false);}var b=B.extend("sap.ui.table.TableKeyboardDelegate2",{constructor:function(t){B.call(this);},destroy:function(){B.prototype.destroy.apply(this,arguments);},getInterface:function(){return this;}});b._restoreFocusOnLastFocusedDataCell=function(t,e){var c=T.getFocusedItemInfo(t);var L=t._getKeyboardExtension()._getLastFocusedCellInfo();T.focusItem(t,c.cellInRow+(c.columnCount*L.row),e);};b._setFocusOnColumnHeaderOfLastFocusedDataCell=function(t,e){var c=T.getFocusedItemInfo(t);T.focusItem(t,c.cellInRow,e);};b._forwardFocusToTabDummy=function(t,s){t._getKeyboardExtension()._setSilentFocus(t.$().find("."+s));};b._isKeyCombination=function(e,k,m){if(m==null){m=0;}var c=typeof k==="string"?String.fromCharCode(e.charCode):e.keyCode;var d=0;d|=(D.os.macintosh?e.metaKey:e.ctrlKey)&&k!==K.CONTROL?M.CTRL:0;d|=e.shiftKey&&k!==K.SHIFT?M.SHIFT:0;d|=e.altKey&&k!==K.ALT?M.ALT:0;var v=k==null||c===k;var V=m===d;return v&&V;};b._handleSpaceAndEnter=function(t,e){var c=T.getCellInfo(e.target);if(c.isOfType(C.COLUMNROWHEADER)){t._toggleSelectAll();}else if(b._isElementGroupToggler(t,e.target)){T.Grouping.toggleGroupHeaderByRef(t,e.target);}else if(c.isOfType(C.ROWHEADER)){s();}else if(c.isOfType(C.DATACELL|C.ROWACTION)){var E=!t.hasListeners("cellClick");if(!t._findAndfireCellEvent(t.fireCellClick,e)){if(T.isRowSelectionAllowed(t)){s();E=false;}}if(E){var i=T.getInteractiveElements(e.target);if(i){t._getKeyboardExtension().setActionMode(true);}}}function s(){var _=null;if(t._legacyMultiSelection){_=function(r){t._legacyMultiSelection(r,e);return true;};}T.toggleRowSelection(t,e.target,null,_);}};b._moveColumn=function(c,n){var t=c.getParent();var v=t._getVisibleColumns();var i=v.indexOf(c);var d;if(n&&i<v.length-1){d=t.indexOfColumn(v[i+1])+1;}else if(!n&&i>0){d=t.indexOfColumn(v[i-1]);}if(d!=null){T.Column.moveColumnTo(c,d);}};b._getVisibleAndGroupedColumns=function(t){return t.getColumns().filter(function(c){return c.getVisible()||c.getGrouped();});};b._getColumnIndexInVisibleAndGroupedColumns=function(t,c){var v=b._getVisibleAndGroupedColumns(t);for(var i=0;i<v.length;i++){var V=v[i];if(V===c){return i;}}return-1;};b._focusElement=function(t,e,s){if(!t||!e){return;}if(s==null){s=false;}function h(e){return e instanceof window.HTMLInputElement&&/^(text|password|search|tel|url)$/.test(e.type);}if(h(document.activeElement)){document.activeElement.setSelectionRange(0,0);}if(s){t._getKeyboardExtension()._setSilentFocus(e);}else{e.focus();}if(h(e)){e.select();}};b._focusCell=function(t,c,r,i,f){if(!t||c==null||r==null||r<0||r>=t.getRows().length){return;}var R=t.getRows()[r];var o;if(c===C.ROWHEADER){t._getKeyboardExtension()._setFocus(t.getDomRef("rowsel"+r));return;}else if(c===C.ROWACTION){o=t.getDomRef("rowact"+r);}else if(c===C.DATACELL&&(i!=null&&i>=0)){var d=t.getColumns()[i];var e=b._getColumnIndexInVisibleAndGroupedColumns(t,d);if(e>=0&&e<T.getVisibleColumnCount(t)){o=R.getDomRef("col"+e);}}if(!o){return;}if(f){var I=T.getInteractiveElements(o);if(I){b._focusElement(t,I[0]);return;}}o.focus();};b._navigate=function(t,e,d){if(e.isMarked()){return;}var k=t._getKeyboardExtension();var A=k.isInActionMode();var c=T.getCellInfo(T.getCell(t,e.target));var s=false;if((d===N.UP||d===N.DOWN)&&c.isOfType(C.ANYCONTENTCELL)){var f=b._isKeyCombination(e,null,M.CTRL);var g=f||A;var P=T.getParentCell(t,e.target);var h=A&&c.isOfType(C.DATACELL);if(!f&&(e.target instanceof window.HTMLInputElement||e.target instanceof window.HTMLTextAreaElement)){return;}if(!g&&P){P.focus();return;}p(e);if(d===N.UP){if(T.isFirstScrollableRow(t,c.cell)){s=t._getScrollExtension().scrollVertically(false,false,true,h,function(){if(h){document.activeElement.blur();}});}}else if(T.isLastScrollableRow(t,c.cell)){s=t._getScrollExtension().scrollVertically(true,false,true,h,function(){if(h){document.activeElement.blur();}});}if(s){e.preventDefault();if(g){t.attachEventOnce("_rowsUpdated",function(){setTimeout(function(){b._focusCell(t,c.type,c.rowIndex,c.columnIndex,true);},0);});}}else if(d===N.UP&&c.rowIndex===0){p(e,c.isOfType(C.ROWACTION)||g);if(!A&&P){P.focus();}else{k.setActionMode(false);}}else if(d===N.DOWN&&c.rowIndex===t.getVisibleRowCount()-1){if(!A&&P){P.focus();}else{k.setActionMode(false);}}else{var i=d===N.DOWN?1:-1;b._focusCell(t,c.type,c.rowIndex+i,c.columnIndex,g);e.preventDefault();}}else if(d===N.DOWN&&c.isOfType(C.ANYCOLUMNHEADER)){var j=T.getHeaderRowCount(t);if(T.isNoDataVisible(t)){var F=T.getFocusedItemInfo(t);if(F.row-j<=1){p(e);}}else if(c.isOfType(C.COLUMNROWHEADER)&&j>1){p(e);T.focusItem(t,j*(T.getVisibleColumnCount(t)+1),e);}}else if(d===N.LEFT&&!A){var I=sap.ui.getCore().getConfiguration().getRTL();if(c.isOfType(C.COLUMNHEADER)&&I){var o=T.getFocusedItemInfo(t);var m=o.cellInRow-(T.hasRowHeader(t)?1:0);var n=T.getVisibleColumnCount(t);if(T.hasRowActions(t)&&m===n-1){p(e);}}}};b._isElementGroupToggler=function(t,e){return T.Grouping.isInGroupingRow(e)||(T.Grouping.isTreeMode(t)&&e.classList.contains("sapUiTableCellFirst")&&(e.querySelector(".sapUiTableTreeIconNodeOpen")||e.querySelector(".sapUiTableTreeIconNodeClosed")))||e.classList.contains("sapUiTableTreeIconNodeOpen")||e.classList.contains("sapUiTableTreeIconNodeClosed");};b._isElementInteractive=function(e){if(!e){return false;}return q(e).is(T.INTERACTIVE_ELEMENT_SELECTORS);};b._getFirstInteractiveElement=function(r){if(!r){return null;}var t=r.getParent();var c=r.getCells();var $;var I;if(T.hasRowActions(t)){c.push(r.getRowAction());}for(var i=0;i<c.length;i++){$=T.getParentCell(t,c[i].getDomRef());I=T.getInteractiveElements($);if(I){return I.first();}}return null;};b._getLastInteractiveElement=function(r){if(!r){return null;}var t=r.getParent();var c=r.getCells();var $;var I;if(T.hasRowActions(t)){c.push(r.getRowAction());}for(var i=c.length-1;i>=0;i--){$=T.getParentCell(t,c[i].getDomRef());I=T.getInteractiveElements($);if(I){return I.last();}}return null;};b._getPreviousInteractiveElement=function(t,e){if(!t||!e){return null;}var E=q(e);if(!this._isElementInteractive(E)){return null;}var c=T.getParentCell(t,e);var I;var o;var d;var f;var g;var h;var j;I=T.getInteractiveElements(c);if(I[0]!==E[0]){return I.eq(I.index(e)-1);}o=T.getCellInfo(c);f=t.getRows()[o.rowIndex].getCells();if(o.isOfType(C.ROWACTION)){j=f.length-1;}else{g=t.getColumns()[o.columnIndex];h=b._getColumnIndexInVisibleAndGroupedColumns(t,g);j=h-1;}for(var i=j;i>=0;i--){d=f[i].getDomRef();c=T.getParentCell(t,d);I=T.getInteractiveElements(c);if(I){return I.last();}}return null;};b._getNextInteractiveElement=function(t,e){if(!t||!e){return null;}var E=q(e);if(!this._isElementInteractive(E)){return null;}var c=T.getParentCell(t,e);var I;var o;var d;var f;var g;var r;var h;I=T.getInteractiveElements(c);if(I.get(-1)!==E[0]){return I.eq(I.index(e)+1);}o=T.getCellInfo(c);if(o.isOfType(C.ROWACTION)){return null;}r=t.getRows()[o.rowIndex];f=r.getCells();g=t.getColumns()[o.columnIndex];h=b._getColumnIndexInVisibleAndGroupedColumns(t,g);for(var i=h+1;i<f.length;i++){d=f[i].getDomRef();c=T.getParentCell(t,d);I=T.getInteractiveElements(c);if(I){return I.first();}}if(T.hasRowActions(t)){c=T.getParentCell(t,r.getRowAction().getDomRef());I=T.getInteractiveElements(c);if(I.get(-1)!==E[0]){return I.eq(I.index(e)+1);}}return null;};b.prototype.enterActionMode=function(){var k=this._getKeyboardExtension();var A=document.activeElement;var i=T.getInteractiveElements(A);var c=T.getParentCell(this,A);if(i){k._suspendItemNavigation();A.tabIndex=-1;b._focusElement(this,i[0],true);return true;}else if(c){this._getKeyboardExtension()._suspendItemNavigation();return true;}return false;};b.prototype.leaveActionMode=function(A){A=A==null?true:A;var k=this._getKeyboardExtension();var o=document.activeElement;var c=T.getParentCell(this,o);k._resumeItemNavigation();if(A){if(c){b._focusElement(this,c[0],true);}else{k._setSilentFocus(o);}}};b.prototype.onfocusin=function(e){if(e.isMarked("sapUiTableIgnoreFocusIn")){return;}var t=q(e.target);if(t.hasClass("sapUiTableOuterBefore")||t.hasClass("sapUiTableOuterAfter")||(e.target!=this.getDomRef("overlay")&&this.getShowOverlay())){this.$("overlay").focus();}else if(t.hasClass("sapUiTableCtrlBefore")){var n=T.isNoDataVisible(this);if(!n||n&&this.getColumnHeaderVisible()){b._setFocusOnColumnHeaderOfLastFocusedDataCell(this,e);}else{this._getKeyboardExtension()._setSilentFocus(this.$("noDataCnt"));}}else if(t.hasClass("sapUiTableCtrlAfter")){if(!T.isNoDataVisible(this)){b._restoreFocusOnLastFocusedDataCell(this,e);}}var c=T.getParentCell(this,t);var E=c!==null;var i=E&&b._isElementInteractive(t);if(this._getKeyboardExtension().isInActionMode()){var o=T.getCellInfo(e.target);var d=o.cell!=null;var I=o.isOfType(C.ROWHEADER)&&T.Grouping.isInGroupingRow(e.target);var f=o.isOfType(C.ROWHEADER)&&!I&&T.isRowSelectorSelectionAllowed(this);if(d&&!I&&!f){this._getKeyboardExtension().setActionMode(false);}else if(E&&!i){this._getKeyboardExtension().setActionMode(false,false);}}else if(i){this._getKeyboardExtension().setActionMode(true);}};b.prototype.onkeydown=function(e){var k=this._getKeyboardExtension();if(b._isKeyCombination(e,K.F2)){var i=k.isInActionMode();var P=T.getParentCell(this,e.target);if(!i&&P){P.focus();}else{k.setActionMode(!i);}return;}else if(b._isKeyCombination(e,K.F4)&&b._isElementGroupToggler(this,e.target)){T.Grouping.toggleGroupHeaderByRef(this,e.target);return;}if(this._getKeyboardExtension().isInActionMode()){return;}if(b._isKeyCombination(e,K.SPACE)&&T.getCellInfo(e.target).type){e.preventDefault();}var t=q(e.target);var c=T.getCellInfo(t);var s=this.getSelectionMode();if(b._isKeyCombination(e,K.SHIFT)&&s===S.MultiToggle&&(c.isOfType(C.ROWHEADER)&&T.isRowSelectorSelectionAllowed(this)||(c.isOfType(C.DATACELL|C.ROWACTION))&&T.isRowSelectionAllowed(this))){var f=T.getRowIndexOfFocusedCell(this);var d=this.getRows()[f].getIndex();this._oRangeSelection={startIndex:d,selected:this.isIndexSelected(d)};}else if(b._isKeyCombination(e,K.A,M.CTRL)){e.preventDefault();if(c.isOfType(C.ANYCONTENTCELL|C.COLUMNROWHEADER)&&s===S.MultiToggle){this._toggleSelectAll();}}else if(b._isKeyCombination(e,K.A,M.CTRL+M.SHIFT)){if(c.isOfType(C.ANYCONTENTCELL|C.COLUMNROWHEADER)){this.clearSelection();}}else if(b._isKeyCombination(e,K.F4)){if(c.isOfType(C.DATACELL)){k.setActionMode(true);}}else if(b._isKeyCombination(e,K.F10,M.SHIFT)){e.preventDefault();T.Menu.openContextMenu(this,e.target,true,null,e);}};b.prototype.onkeypress=function(e){var k=this._getKeyboardExtension();var c=T.getCellInfo(e.target);if(b._isKeyCombination(e,"+")){if(b._isElementGroupToggler(this,e.target)){T.Grouping.toggleGroupHeaderByRef(this,e.target,true);}else if(c.isOfType(C.DATACELL|C.ROWACTION)){k.setActionMode(true);}}else if(b._isKeyCombination(e,"-")){if(b._isElementGroupToggler(this,e.target)){T.Grouping.toggleGroupHeaderByRef(this,e.target,false);}else if(c.isOfType(C.DATACELL|C.ROWACTION)){k.setActionMode(true);}}};b.prototype.oncontextmenu=function(e){if(e.isMarked("handledByPointerExtension")){return;}e.preventDefault();var c=T.getCell(this,e.target);var o=T.getCellInfo(c);if(o.isOfType(C.COLUMNHEADER|C.ANYCONTENTCELL)){T.Menu.openContextMenu(this,e.target,true,null,e);}};b.prototype.onkeyup=function(e){var c=T.getCellInfo(e.target);if(b._isKeyCombination(e,K.SHIFT)){delete this._oRangeSelection;}if(c.isOfType(C.COLUMNHEADER)){if(b._isKeyCombination(e,K.SPACE)||b._isKeyCombination(e,K.ENTER)){T.Menu.openContextMenu(this,e.target,true);}}else if(b._isKeyCombination(e,K.SPACE)){b._handleSpaceAndEnter(this,e);}else if(this._legacyMultiSelection&&!c.isOfType(C.COLUMNROWHEADER)&&(b._isKeyCombination(e,K.SPACE,M.CTRL)||b._isKeyCombination(e,K.ENTER,M.CTRL))){b._handleSpaceAndEnter(this,e);}};b.prototype.onsaptabnext=function(e){var k=this._getKeyboardExtension();var c=T.getCellInfo(e.target);var $;if(k.isInActionMode()){var i;$=T.getCell(this,e.target);c=T.getCellInfo($);if(!$){return;}var r=this.getRows()[c.rowIndex];var L=b._getLastInteractiveElement(r);var I=L===null||L[0]===e.target;if(I){var A=r.getIndex();var d=T.isLastScrollableRow(this,$);var f=this._getTotalRowCount()-1===A;var t=T.isRowSelectorSelectionAllowed(this);var s=false;if(!f&&d){var g=c.isOfType(C.DATACELL);s=this._getScrollExtension().scrollVertically(true,false,true,g,function(){if(g){document.activeElement.blur();}});}if(f){e.preventDefault();k.setActionMode(false);}else if(s){e.preventDefault();this.attachEventOnce("_rowsUpdated",function(){setTimeout(function(){var j=T.Grouping.isGroupingRow(r.getDomRef());if(t||j){b._focusCell(this,C.ROWHEADER,c.rowIndex);}else{i=b._getFirstInteractiveElement(r);b._focusElement(this,i[0]);}}.bind(this),0);}.bind(this));}else{e.preventDefault();var n=c.rowIndex+1;var o=this.getRows()[n];var h=T.Grouping.isGroupingRow(o.getDomRef());if(t||h){b._focusCell(this,C.ROWHEADER,n);}else{i=b._getFirstInteractiveElement(o);b._focusElement(this,i[0]);}}}else if(c.isOfType(C.ROWHEADER)){e.preventDefault();i=b._getFirstInteractiveElement(r);b._focusElement(this,i[0]);}else{e.preventDefault();i=b._getNextInteractiveElement(this,e.target);b._focusElement(this,i[0]);}}else if(c.isOfType(C.ANYCOLUMNHEADER)){if(T.isNoDataVisible(this)){this.$("noDataCnt").focus();}else{b._restoreFocusOnLastFocusedDataCell(this,e);}e.preventDefault();}else if(c.isOfType(C.ANYCONTENTCELL)){b._forwardFocusToTabDummy(this,"sapUiTableCtrlAfter");}else if(e.target===this.getDomRef("overlay")){k._setSilentFocus(this.$().find(".sapUiTableOuterAfter"));}else if(!c.cell){$=T.getParentCell(this,e.target);if($){e.preventDefault();$.focus();}}};b.prototype.onsaptabprevious=function(e){var k=this._getKeyboardExtension();var c=T.getCellInfo(e.target);var $;if(k.isInActionMode()){var i;$=T.getCell(this,e.target);c=T.getCellInfo($);if(!$){return;}var r=this.getRows()[c.rowIndex];var A=r.getIndex();var f=b._getFirstInteractiveElement(r);var I=f!==null&&f[0]===e.target;var t=T.isRowSelectorSelectionAllowed(this);var R=T.Grouping.isGroupingRow(r);var d=t||R;if(I&&d){e.preventDefault();b._focusCell(this,C.ROWHEADER,c.rowIndex);}else if((I&&!d)||c.isOfType(C.ROWHEADER)){var g=T.isFirstScrollableRow(this,$);var h=A===0;var s=false;if(!h&&g){var j=c.isOfType(C.DATACELL);s=this._getScrollExtension().scrollVertically(false,false,true,j,function(){if(j){document.activeElement.blur();}});}if(h){e.preventDefault();k.setActionMode(false);}else if(s){e.preventDefault();this.attachEventOnce("_rowsUpdated",function(){setTimeout(function(){var n=T.Grouping.isGroupingRow(r.getDomRef());if(n){b._focusCell(this,C.ROWHEADER,c.rowIndex);}else{i=b._getLastInteractiveElement(r);b._focusElement(this,i[0]);}}.bind(this),0);}.bind(this));}else{e.preventDefault();var P=c.rowIndex-1;var o=this.getRows()[P];var m=T.Grouping.isGroupingRow(o.getDomRef());if(m){b._focusCell(this,C.ROWHEADER,P);}else{i=b._getLastInteractiveElement(o);b._focusElement(this,i[0]);}}}else{e.preventDefault();i=b._getPreviousInteractiveElement(this,e.target);b._focusElement(this,i[0]);}}else if(c.isOfType(C.ANYCONTENTCELL)||e.target===this.getDomRef("noDataCnt")){if(this.getColumnHeaderVisible()&&!c.isOfType(C.ROWACTION)){b._setFocusOnColumnHeaderOfLastFocusedDataCell(this,e);e.preventDefault();}else{b._forwardFocusToTabDummy(this,"sapUiTableCtrlBefore");}}else if(e.target===this.getDomRef("overlay")){this._getKeyboardExtension()._setSilentFocus(this.$().find(".sapUiTableOuterBefore"));}else if(!c.cell){$=T.getParentCell(this,e.target);if($){e.preventDefault();$.focus();}}};b.prototype.onsapdown=function(e){b._navigate(this,e,N.DOWN);};b.prototype.onsapdownmodifiers=function(e){if(b._isKeyCombination(e,null,M.CTRL)){b._navigate(this,e,N.DOWN);return;}var k=this._getKeyboardExtension();if(b._isKeyCombination(e,null,M.ALT)&&b._isElementGroupToggler(this,e.target)){p(e);T.Grouping.toggleGroupHeaderByRef(this,e.target,true);return;}if(k.isInActionMode()){return;}var c=T.getCellInfo(e.target);if(b._isKeyCombination(e,null,M.SHIFT)){e.preventDefault();if(c.isOfType(C.ANYCONTENTCELL)){if(!this._oRangeSelection){p(e);return;}var f=T.getRowIndexOfFocusedCell(this);var d=this.getRows()[f].getIndex();if(d===this._getTotalRowCount()-1){return;}if(T.isLastScrollableRow(this,e.target)){var s=this._getScrollExtension().scrollVertically(true,false,true);if(s){p(e);}}if(this._oRangeSelection.startIndex<=d){d++;if(this._oRangeSelection.selected){T.toggleRowSelection(this,d,true);}else{T.toggleRowSelection(this,d,false);}}else{T.toggleRowSelection(this,d,false);}}else{p(e);}}if(b._isKeyCombination(e,null,M.ALT)){if(c.isOfType(C.DATACELL)){k.setActionMode(true);}p(e);}};b.prototype.onsapup=function(e){b._navigate(this,e,N.UP);};b.prototype.onsapupmodifiers=function(e){var k=this._getKeyboardExtension();if(b._isKeyCombination(e,null,M.CTRL)){b._navigate(this,e,N.UP);return;}if(b._isKeyCombination(e,null,M.ALT)&&b._isElementGroupToggler(this,e.target)){p(e);T.Grouping.toggleGroupHeaderByRef(this,e.target,false);return;}if(k.isInActionMode()){return;}var c=T.getCellInfo(e.target);if(b._isKeyCombination(e,null,M.SHIFT)){e.preventDefault();if(c.isOfType(C.ANYCONTENTCELL)){if(!this._oRangeSelection){p(e);return;}var f=T.getRowIndexOfFocusedCell(this);var d=this.getRows()[f].getIndex();if(d===0){p(e);return;}if(T.isFirstScrollableRow(this,e.target)){var s=this._getScrollExtension().scrollVertically(false,false,true);if(s){p(e);}}if(this._oRangeSelection.startIndex>=d){d--;if(this._oRangeSelection.selected){T.toggleRowSelection(this,d,true);}else{T.toggleRowSelection(this,d,false);}}else{T.toggleRowSelection(this,d,false);}}else{p(e);}}if(b._isKeyCombination(e,null,M.ALT)){if(c.isOfType(C.DATACELL)){k.setActionMode(true);}p(e);}};b.prototype.onsapleft=function(e){b._navigate(this,e,N.LEFT);};b.prototype.onsapleftmodifiers=function(e){if(this._getKeyboardExtension().isInActionMode()){return;}var c=T.getCellInfo(e.target);var I=sap.ui.getCore().getConfiguration().getRTL();if(b._isKeyCombination(e,null,M.SHIFT)){e.preventDefault();if(c.isOfType(C.DATACELL)){if(!this._oRangeSelection){p(e);return;}var f=T.getFocusedItemInfo(this);var F=T.hasRowHeader(this)&&f.cellInRow===1;if(F&&!T.isRowSelectorSelectionAllowed(this)){p(e);}}else if(c.isOfType(C.ROWACTION)){if(!this._oRangeSelection){p(e);}}else if(c.isOfType(C.ROWHEADER)&&I){if(!T.isRowSelectionAllowed(this)){p(e);}}else if(c.isOfType(C.COLUMNROWHEADER)&&I){p(e);}else if(c.isOfType(C.COLUMNHEADER)){var r=-T.convertCSSSizeToPixel(a);var d=0;if(I){r=r*-1;}for(var i=c.columnIndex;i<c.columnIndex+c.columnSpan;i++){d+=T.Column.getColumnWidth(this,i);}T.Column.resizeColumn(this,c.columnIndex,d+r,true,c.columnSpan);p(e);}}else if(b._isKeyCombination(e,null,M.CTRL)){if(c.isOfType(C.COLUMNHEADER)){e.preventDefault();e.stopImmediatePropagation();var o=this.getColumns()[c.columnIndex];b._moveColumn(o,I);}}};b.prototype.onsaprightmodifiers=function(e){if(this._getKeyboardExtension().isInActionMode()){return;}var c=T.getCellInfo(e.target);var I=sap.ui.getCore().getConfiguration().getRTL();if(b._isKeyCombination(e,null,M.SHIFT)){e.preventDefault();if(c.isOfType(C.DATACELL)){if(!this._oRangeSelection){p(e);}}else if(c.isOfType(C.ROWHEADER)){if(!T.isRowSelectionAllowed(this)){p(e);}}else if(c.isOfType(C.ROWACTION)&&I){if(!this._oRangeSelection){p(e);}}else if(c.isOfType(C.COLUMNHEADER)){var r=T.convertCSSSizeToPixel(a);var d=0;if(I){r=r*-1;}for(var i=c.columnIndex;i<c.columnIndex+c.columnSpan;i++){d+=T.Column.getColumnWidth(this,i);}T.Column.resizeColumn(this,c.columnIndex,d+r,true,c.columnSpan);p(e);}else if(c.isOfType(C.COLUMNROWHEADER)){p(e);}}else if(b._isKeyCombination(e,null,M.CTRL)){if(c.isOfType(C.COLUMNHEADER)){e.preventDefault();e.stopImmediatePropagation();var o=this.getColumns()[c.columnIndex];b._moveColumn(o,!I);}}};b.prototype.onsaphome=function(e){if(this._getKeyboardExtension().isInActionMode()){return;}if(T.Grouping.isInGroupingRow(e.target)){p(e);e.preventDefault();return;}var c=T.getCellInfo(e.target);if(c.isOfType(C.ANY)){e.preventDefault();}if(c.isOfType(C.DATACELL|C.ROWACTION|C.COLUMNHEADER)){var f=T.getFocusedItemInfo(this);var F=f.cell;var i=f.cellInRow;var d=this.getComputedFixedColumnCount();var h=T.hasRowHeader(this);var r=h?1:0;if(T.hasFixedColumns(this)&&i>d+r){p(e);T.focusItem(this,F-i+d+r,null);}else if(h&&i>1){p(e);T.focusItem(this,F-i+r,null);}}};b.prototype.onsapend=function(e){if(this._getKeyboardExtension().isInActionMode()){return;}if(T.Grouping.isInGroupingRow(e.target)){e.preventDefault();p(e);return;}var c=T.getCellInfo(e.target);if(c.isOfType(C.ANY)){e.preventDefault();var f=T.getFocusedItemInfo(this);var F=f.cell;var i=f.columnCount;var d=this.getComputedFixedColumnCount();var g=f.cellInRow;var h=T.hasRowHeader(this);var r=h?1:0;var I=false;if(c.isOfType(C.COLUMNHEADER)&&T.hasFixedColumns(this)){var j=parseInt(c.cell.attr("colspan")||1);if(j>1&&g+j-r===d){I=true;}}if(h&&g===0){p(e);T.focusItem(this,F+1,null);}else if(T.hasFixedColumns(this)&&g<d-1+r&&!I){p(e);T.focusItem(this,F+d-g,null);}else if(T.hasRowActions(this)&&c.isOfType(C.DATACELL)&&g<i-2){p(e);T.focusItem(this,F-g+i-2,null);}}};b.prototype.onsaphomemodifiers=function(e){if(this._getKeyboardExtension().isInActionMode()){return;}if(b._isKeyCombination(e,null,M.CTRL)){e.preventDefault();var c=T.getCellInfo(e.target);if(c.isOfType(C.ANYCONTENTCELL|C.COLUMNHEADER)){p(e);var f=T.getFocusedItemInfo(this);var F=f.row;if(F>0){var i=f.cell;var d=f.columnCount;var h=T.getHeaderRowCount(this);var g=this.getFixedRowCount();var j=this.getFixedBottomRowCount();if(F<h+g){if(c.isOfType(C.ROWACTION)){T.focusItem(this,i-d*(F-h),e);}else{T.focusItem(this,i-d*F,e);}}else if(F>=h+g&&F<h+T.getNonEmptyVisibleRowCount(this)-j){this._getScrollExtension().scrollVerticallyMax(false,true);if(g>0||c.isOfType(C.ROWACTION)){T.focusItem(this,i-d*(F-h),e);}else{T.focusItem(this,i-d*F,e);}}else{this._getScrollExtension().scrollVerticallyMax(false,true);T.focusItem(this,i-d*(F-h-g),e);}}}}};b.prototype.onsapendmodifiers=function(e){if(this._getKeyboardExtension().isInActionMode()){return;}if(b._isKeyCombination(e,null,M.CTRL)){e.preventDefault();var c=T.getCellInfo(e.target);if(c.isOfType(C.ANY)){var f=T.getFocusedItemInfo(this);var F=f.row;var h=T.getHeaderRowCount(this);var n=T.getNonEmptyVisibleRowCount(this);var i=this.getFixedRowCount();var d=this.getFixedBottomRowCount();p(e);if(d===0||F<h+n-1||(T.isNoDataVisible(this)&&F<h-1)){var g=f.cell;var j=f.columnCount;if(T.isNoDataVisible(this)){T.focusItem(this,g+j*(h-F-1),e);}else if(F<h){if(i>0){T.focusItem(this,g+j*(h+i-F-1),e);}else{this._getScrollExtension().scrollVerticallyMax(true,true);T.focusItem(this,g+j*(h+n-d-F-1),e);}}else if(F>=h&&F<h+i){this._getScrollExtension().scrollVerticallyMax(true,true);T.focusItem(this,g+j*(h+n-d-F-1),e);}else if(F>=h+i&&F<h+n-d){this._getScrollExtension().scrollVerticallyMax(true,true);T.focusItem(this,g+j*(h+n-F-1),e);}else{T.focusItem(this,g+j*(h+n-F-1),e);}}}}};b.prototype.onsappageup=function(e){if(this._getKeyboardExtension().isInActionMode()){return;}e.preventDefault();var c=T.getCellInfo(e.target);if(c.isOfType(C.ANYCONTENTCELL|C.COLUMNHEADER)){var f=T.getFocusedItemInfo(this);var F=f.row;var h=T.getHeaderRowCount(this);var i=this.getFixedRowCount();var d=this.getFixedBottomRowCount();if(i===0&&F>=h||i>0&&F>h){p(e);var g=f.cell;var j=f.columnCount;if(F<h+i){T.focusItem(this,g-j*(F-h),e);}else if(F===h+i){var P=T.getNonEmptyVisibleRowCount(this)-i-d;var r=this.getFirstVisibleRow();this._getScrollExtension().scrollVertically(false,true,true);if(r<P){if(i>0||c.isOfType(C.ROWACTION)){T.focusItem(this,g-j*(F-h),e);}else{T.focusItem(this,g-j*h,e);}}}else if(F>h+i&&F<h+T.getNonEmptyVisibleRowCount(this)){T.focusItem(this,g-j*(F-h-i),e);}else{T.focusItem(this,g-j*(F-h-T.getNonEmptyVisibleRowCount(this)+1),e);}}if(c.isOfType(C.ROWACTION)&&F===h&&i>0){p(e);}}};b.prototype.onsappagedown=function(e){if(this._getKeyboardExtension().isInActionMode()){return;}e.preventDefault();var c=T.getCellInfo(e.target);if(c.isOfType(C.ANY)){var f=T.getFocusedItemInfo(this);var F=f.row;var h=T.getHeaderRowCount(this);var n=T.getNonEmptyVisibleRowCount(this);var i=this.getFixedRowCount();var d=this.getFixedBottomRowCount();p(e);if((T.isNoDataVisible(this)&&F<h-1)||d===0||F<h+n-1){var g=f.cell;var j=f.columnCount;if(F<h-1&&!c.isOfType(C.COLUMNROWHEADER)){T.focusItem(this,g+j*(h-F-1),e);}else if(F<h){if(!T.isNoDataVisible(this)){T.focusItem(this,g+j*(h-F),e);}}else if(F>=h&&F<h+n-d-1){T.focusItem(this,g+j*(h+n-d-F-1),e);}else if(F===h+n-d-1){var P=T.getNonEmptyVisibleRowCount(this)-i-d;var r=this._getTotalRowCount()-d-this.getFirstVisibleRow()-P*2;this._getScrollExtension().scrollVertically(true,true,true);if(r<P&&d>0){T.focusItem(this,g+j*(h+n-F-1),e);}}else{T.focusItem(this,g+j*(h+n-F-1),e);}}}};b.prototype.onsappageupmodifiers=function(e){if(this._getKeyboardExtension().isInActionMode()){return;}if(b._isKeyCombination(e,null,M.ALT)){var c=T.getCellInfo(e.target);var f=T.getFocusedItemInfo(this);if(c.isOfType(C.DATACELL|C.COLUMNHEADER)){var F=f.cell;var i=f.cellInRow;var h=T.hasRowHeader(this);var r=h?1:0;var P=H;p(e);if(h&&(T.Grouping.isInGroupingRow(e.target)||i===1)){T.focusItem(this,F-i,null);}else if(i-r<P){T.focusItem(this,F-i+r,null);}else{T.focusItem(this,F-P,null);}}else if(c.isOfType(C.ROWACTION)){T.focusItem(this,f.cell-1,null);}}};b.prototype.onsappagedownmodifiers=function(e){if(this._getKeyboardExtension().isInActionMode()){return;}if(b._isKeyCombination(e,null,M.ALT)){var c=T.getCellInfo(e.target);if(c.isOfType(C.DATACELL|C.ROWHEADER|C.ANYCOLUMNHEADER)){var f=T.getFocusedItemInfo(this);var F=f.cellInRow;var h=T.hasRowHeader(this);var r=h?1:0;var v=T.getVisibleColumnCount(this);var i=parseInt(c.cell.attr("colspan")||1);p(e);if(F+i-r<v){var d=f.cell;var P=H;if(h&&F===0){T.focusItem(this,d+1,null);}else if(i>P){T.focusItem(this,d+i,null);}else if(F+i-r+P>v){T.focusItem(this,d+v-F-1+r,null);}else if(!T.Grouping.isInGroupingRow(e.target)){T.focusItem(this,d+P,null);}}else if(c.isOfType(C.DATACELL)&&T.hasRowActions(this)&&F===f.columnCount-2){T.focusItem(this,f.cell+1,null);}}}};b.prototype.onsapenter=function(e){b._handleSpaceAndEnter(this,e);};return b;});
