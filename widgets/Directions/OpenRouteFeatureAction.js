// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","jimu/BaseFeatureAction","jimu/WidgetManager"],function(b,d,e){return b(d,{iconClass:"icon-direction-open-route",isFeatureSupported:function(a){return(a=a.features[0])&&a.attributes&&a.attributes.RouteLayerItemID&&a.attributes.RouteLayerItemURL?!0:!1},onExecute:function(a){e.getInstance().triggerWidgetOpen(this.widgetId).then(function(b){var c=a.features[0];c&&b.openRoute(c)})}})});