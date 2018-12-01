// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/LayerList/setting/LayerSelector":function(){define("dijit/_WidgetBase dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/on dojo/query jimu/dijit/CheckBox dijit/_TemplatedMixin dojo/text!./LayerSelector.html dojo/dom-class dojo/dom-style".split(" "),function(k,r,l,p,e,d,t,u,v,w,f,q){return r([k,v],{templateString:w,baseClass:"layer-selector",_currentSelectedLayerRowNode:null,_displayStateStorage:null,postMixInProperties:function(){this.inherited(arguments);
this._displayStateStorage={}},postCreate:function(){p.forEach(this.operLayerInfos.getLayerInfoArrayOfWebmap(),function(a){this.drawListNode(a,0,this.layerListTable)},this);p.forEach(this.operLayerInfos.getTableInfoArray(),function(a){this.drawListNode(a,0,this.tableListTable)},this)},drawListNode:function(a,b,c){var d;0===a.newSubLayers.length?(d=this.addLayerNode(a,b,c),f.add(t(".showLegend-div",d.currentNode)[0],"hidden")):(d=this.addLayerNode(a,b,c),p.forEach(a.newSubLayers,l.hitch(this,function(a,
b){this.drawListNode(b,a+1,d.subNode)},b)))},addLayerNode:function(a,b,c){var h=e.create("tr",{"class":"jimu-widget-row layer-row ",layerTrNodeId:a.id},c),g,k,m,n;g=e.create("td",{"class":"col col1"},h);for(n=0;n<b;n++)e.create("div",{"class":"begin-blank-div jimu-float-leading",innerHTML:""},g);n=e.create("div",{"class":"showLegend-div jimu-float-leading"},g);k=e.create("div",{"class":"div-select jimu-float-leading"},g);m=!0;this.config.layerOptions&&void 0!==this.config.layerOptions[a.id]&&(m=this.config.layerOptions[a.id].display);
m=new u({checked:m,"class":"visible-checkbox-"+a.id});e.place(m.domNode,k);q.set(g,"width",12*b+35+"px");b=e.create("td",{"class":"col col2"},h);g=e.create("div",{"class":"noLegend-div jimu-float-leading"},b);a.isTable&&f.add(g,"table");a.isTable&&q.set(g,"display","block");b=e.create("div",{innerHTML:a.title,"class":"layer-title-div-"+a.id+" div-content jimu-float-leading "},b);g=e.create("td",{"class":"col col3"},h);e.create("div",{"class":"layers-list-popupMenu-div"},g);c=e.create("tr",{"class":"",
layerContentTrNodeId:a.id},c);c=e.create("td",{"class":"",colspan:"3"},c);c=e.create("table",{"class":"layer-sub-node"},c);this.initDisplayStateStorage(a,m,b);this.own(d(n,"click",l.hitch(this,this._onRowTrClick,a,n,h,c)));this.own(d(h,"mouseover",l.hitch(this,this._onLayerNodeMouseover,h,void 0)));this.own(d(h,"mouseout",l.hitch(this,this._onLayerNodeMouseout,h,void 0)));this.own(d(m.domNode,"click",l.hitch(this,this._onCkSelectNodeClick,a,m)));return{currentNode:h,subNode:c}},_fold:function(a,b,
c){"none"===q.get(c,"display")?(q.set(c,"display","table"),f.add(b,"unfold"),a=!1):(q.set(c,"display","none"),f.remove(b,"unfold"),a=!0);return a},_onCkSelectNodeClick:function(a,b,c){a.traversal(l.hitch(this,function(a){this._grayedLayerLabel(a)}));c.stopPropagation()},_onLayerNodeMouseover:function(a,b){f.add(a,"layer-row-mouseover");b&&f.add(b.btnNode,"jimu-icon-btn-selected")},_onLayerNodeMouseout:function(a,b){f.remove(a,"layer-row-mouseover");b&&f.remove(b.btnNode,"jimu-icon-btn-selected")},
_onRowTrClick:function(a,b,c,d){this._changeSelectedLayerRow(c);this._fold(a,b,d)},_changeSelectedLayerRow:function(a){this._currentSelectedLayerRowNode&&this._currentSelectedLayerRowNode===a||(this._currentSelectedLayerRowNode&&f.remove(this._currentSelectedLayerRowNode,"jimu-widget-row-selected"),f.add(a,"jimu-widget-row-selected"),this._currentSelectedLayerRowNode=a)},initDisplayStateStorage:function(a,b,c){this._displayStateStorage[a.id]={displayCK:b,labelDiv:c};this._grayedLayerLabel(a)},_grayedLayerLabel:function(a){var b=
!0,c=a;if(a=this._displayStateStorage[a.id].labelDiv){for(;c;){b=b&&this._displayStateStorage[c.id].displayCK.checked;if(!b)break;c=c.parentLayerInfo}b?f.remove(a,"grayed-title"):f.add(a,"grayed-title")}},getLayerOptions:function(){var a={},b;for(b in this._displayStateStorage)this._displayStateStorage.hasOwnProperty(b)&&"function"!==typeof this._displayStateStorage[b]&&(a[b]={display:this._displayStateStorage[b].displayCK.checked});return a}})})},"widgets/LayerList/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html",
"dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/LayerList/setting/LayerSelector.html":'\x3cdiv\x3e\r\n  \x3ctable class\x3d"layer-list-table"\x3e\r\n    \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"layerListTable"\x3e\x3c/tbody\x3e\r\n    \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"tableListTable"\x3e\x3c/tbody\x3e       \r\n  \x3c/table\x3e\r\n\x3c/div\x3e\r\n',"url:widgets/LayerList/setting/Setting.html":'\x3cdiv\x3e\r\n  \x3ctable class\x3d"show-legend-checkbox"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"showTitle"\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"label"\x3e${nls.showTitle}\x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"showBasemap"\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"label"\x3e${nls.showBasemap}\x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"showLegend"\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"label"\x3e${nls.showLegend}\x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"expandAllLayersByDefault"\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"label"\x3e${nls.expandAllLayersByDefault}\x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\r\n  \x3cdiv class\x3d"control-popupmenu-part" data-dojo-attach-point\x3d"controlPopupMenuPart"\x3e\r\n    \x3cdiv class\x3d"title"\x3e${nls.controlPopupMenuTitle}\x3c/div\x3e\r\n    \x3ctable class\x3d"control-popupmenu-table"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"control-popupmenu-item" itemKey\x3d"zoomto" checked\x3d"true" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"zoomto"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"label"\x3e${nls.zoomto}\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"control-popupmenu-item" itemKey\x3d"transparency" checked\x3d"true" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"transparency"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"label"\x3e${nls.transparency}\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"control-popupmenu-item" itemKey\x3d"controlPopup" checked\x3d"true" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"controlPopup"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"label"\x3e${nls.controlPopup}\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"control-popupmenu-item" itemKey\x3d"moveup movedown" checked\x3d"true" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"moveupDown"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd  class\x3d"label"\x3e${nls.moveUpAndDown}\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"control-popupmenu-item" itemKey\x3d"table" checked\x3d"true" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"table"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"label"\x3e${nls.attributeTable}\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"control-popupmenu-item" itemKey\x3d"url" checked\x3d"true" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"url"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd  class\x3d"label"\x3e${nls.url}\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"layer-selector-part" data-dojo-attach-point\x3d"controlPopupMenuPart"\x3e\r\n    \x3cdiv class\x3d"title"\x3e${nls.layerSelectorTitle}\x3c/div\x3e\r\n    \x3cdiv class\x3d"layer-selector-div" data-dojo-attach-point\x3d"layerSelectorDiv"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/LayerList/setting/css/style.css":'.layer-selector{position: relative;}.layer-selector .jimu-hr{margin-top: 15px;}.layer-selector .layers-section{margin-top: 0px; z-index: 0; position: relative;}.layer-selector .layers-section .layers-list{width: 100%;}.layer-selector .layers-section .layer-list-title{height: 16px; font-size: 14px; color: #86909c; margin-top: 14px;}.layer-selector .layer-list-table{width: 100%; border-spacing: 0px;}.layer-selector .layers-list-body{border: 0px solid #999;}.layer-selector .jimu-widget-row{}.layer-selector .layer-row{background-color: #ffffff; height: 25px;}.layer-selector .jimu-widget-row-active{background-color: #009cff;}.layer-selector .jimu-widget-row-selected .col-layer-label{color: #333;}.layer-selector .jimu-widget-row-active .col-layer-label{color: #fff;}.layer-selector .col{border: 1px solid #ffffff;}.layer-selector .col1{border-right-width: 0;}.jimu-rtl .layer-selector .col1{border-right-width: 1px; border-left-width: 0;}.layer-selector .col2{width: auto; word-break: break-word; border-left-width: 0; border-right-width: 0; padding-left: 10px;}.layer-selector .col3{width: 24px; border-left-width: 0;}.jimu-rtl .layer-selector .col3{border-left-width: 1px; border-right-width: 0;}.layer-selector .begin-blank-div{width: 12px; height: 2px;}.layer-selector .col-showLegend{width: 17px; text-align: center;}.layer-selector .showLegend-div{width: 13px; height: 13px; cursor: pointer; margin-left: 3px; margin-top: 3px; background-image: url("../../images/v_right.png"); background-repeat: no-repeat; background-position: center;}.jimu-rtl .layer-selector .showLegend-div{background-image: url("../../images/v_left.png"); margin-left: 0; margin-right: 3px;}.layer-selector .showLegend-div.unfold{background-image: url("../../images/v.png");}.layer-selector .showLegend-div.hidden{background-image: none; cursor: auto;}.layer-selector .layers-list-imageShowLegend-down{-moz-transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg); -webkit-transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg); -o-transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg); -ms-transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg); transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);}.layer-selector .layers-list-imageShowLegend-down-div{background-color: #d9dde0;}.layer-selector .noLegend-div{width: 16px; height: 16px; text-align: right; display: none; background-image: url("../../images/noLegend.png"); background-repeat: no-repeat; background-position: center; margin-right: 5px;}.jimu-rtl .layer-selector .noLegend-div{margin-right: auto; margin-left: 5px;}.layer-selector .noLegend-div.table{background-image: url("../../images/table.png");}.layer-selector .col-blank{width:17px;}.layer-selector .col-select{width: 17px;}.layer-selector .col-reserve-blank{width: 25px;}.layer-selector .col-content{font-size: 12px;}.layer-selector .div-select{position: relative; font-size: 2px;}.layer-selector .div-select .checkbox{cursor: auto;}.layer-selector .div-content{position: relative; font-size: 14px; border: 0px solid;}.layer-selector .div-content.grayed-title{opacity: 0.5;}.layer-selector .col-popupMenu{width: 17px; text-align: center;}.layer-selector .col-select .jimu-selection-box{margin-top: 5px;}.layer-selector .layers-list-body .col-layer-label{}.layer-selector .layer-sub-node{display: none; width:100%; border-spacing: 0px;}.jimu-widget-layerList-setting {font-size: 14px; color: #596679;}.jimu-widget-layerList-setting .show-legend-checkbox {}.jimu-widget-layerList-setting .show-legend-checkbox .label{margin-top: 20px; margin-bottom: 40px; padding-left: 10px; padding-right: 10px; padding-top: 2px;}.jimu-widget-layerList-setting .jimu-checkout {display: table-cell;}.jimu-widget-layerList-setting .title {font-size: 14px; color: #596679; margin-top: 5px; margin-bottom: 5px;}.jimu-widget-layerList-setting .control-popupmenu-part {margin: 20px 0 20px 0;}.jimu-widget-layerList-setting .control-popupmenu-part .label {padding-left: 12px; padding-right: 12px;}.jimu-widget-layerList-setting .control-popupmenu-table {margin-left: 18px; border-spacing: 0px;}.jimu-rtl .jimu-widget-layerList-setting .control-popupmenu-table {margin-left: auto; margin-right: 18px;}.jimu-widget-layerList-setting .control-popupmenu-part tr{height: 25px;}.jimu-widget-layerList-setting .layer-selector-div {min-height: 100px; max-height: 330px; border: 1px solid #d9dde0; border-radius: 1px; overflow: auto;}',
"*now":function(k){k(['dojo/i18n!*preload*widgets/LayerList/setting/nls/Setting*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare jimu/BaseWidgetSetting jimu/LayerInfos/LayerInfos dijit/_WidgetsInTemplateMixin ./LayerSelector dijit/form/CheckBox jimu/dijit/CheckBox".split(" "),function(k,r,l,p,e){return k([r,p],{baseClass:"jimu-widget-layerList-setting",startup:function(){this.inherited(arguments);this.setConfig(this.config);this.createLayerSelector()},createLayerSelector:function(){var d=l.getInstanceSync();this.layerSelector=(new e({operLayerInfos:d,config:this.config})).placeAt(this.layerSelectorDiv)},
setConfig:function(d){this.showTitle.setValue(!1===d.showTitle?!1:!0);this.showBasemap.setValue(d.showBasemap);this.showLegend.setValue(d.showLegend);this.expandAllLayersByDefault.setValue(d.expandAllLayersByDefault);d.contextMenu&&(this.zoomto.setValue(d.contextMenu.ZoomTo),this.transparency.setValue(d.contextMenu.Transparency),this.controlPopup.setValue(d.contextMenu.EnableOrDisablePopup),this.moveupDown.setValue(d.contextMenu.MoveupOrMovedown),this.table.setValue(d.contextMenu.OpenAttributeTable),
this.url.setValue(d.contextMenu.DescriptionOrShowItemDetailsOrDownload))},getConfig:function(){this.config.showTitle=this.showTitle.getValue();this.config.showBasemap=this.showBasemap.getValue();this.config.showLegend=this.showLegend.getValue();this.config.expandAllLayersByDefault=this.expandAllLayersByDefault.getValue();this.config.contextMenu||(this.config.contextMenu={});this.config.contextMenu.ZoomTo=this.zoomto.getValue();this.config.contextMenu.Transparency=this.transparency.getValue();this.config.contextMenu.EnableOrDisablePopup=
this.controlPopup.getValue();this.config.contextMenu.MoveupOrMovedown=this.moveupDown.getValue();this.config.contextMenu.OpenAttributeTable=this.table.getValue();this.config.contextMenu.DescriptionOrShowItemDetailsOrDownload=this.url.getValue();this.config.layerOptions=this.layerSelector.getLayerOptions();return this.config}})});