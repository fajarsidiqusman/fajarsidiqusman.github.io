// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/AGOLLoading.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"loading-container"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"imgDiv" class\x3d"img-div"\x3e\r\n      \x3c/div\x3e\r\n      \x3cp data-dojo-attach-point\x3d"textNode"\x3e\x3c/p\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/text!./templates/AGOLLoading.html","dojo/_base/html"],function(c,d,e,f,a){return c([d,e],{baseClass:"jimu-agol-loading",declaredClass:"jimu.dijit.AGOLLoading",templateString:f,loadingText:null,hidden:!1,showLoading:!0,postMixInProperties:function(){this.nls=window.jimuNls.loadingShelter},postCreate:function(){this.inherited(arguments);this.hidden&&a.setStyle(this.domNode,"display","none");a.setStyle(this.domNode,{width:"100%",
height:"100%"});this.showLoading||a.setStyle(this.imgDiv,"display","none");"string"===typeof this.loadingText&&(this.textNode.innerHTML=this.loadingText)},show:function(b){this.domNode&&this.hidden&&("string"===typeof b&&(this.textNode.innerHTML=b),a.setStyle(this.domNode,"display","block"),this.hidden=!1)},hide:function(){this.domNode&&!this.hidden&&(a.setStyle(this.domNode,"display","none"),this.hidden=!0)}})});