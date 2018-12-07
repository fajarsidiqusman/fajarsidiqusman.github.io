// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/ThreatAnalysis/nls/strings":{_widgetLabel:"\u8105\u5a01\u5206\u6790",threatAnalysisMainPageTitle:"JCAT Counterterrorism Guide \u306b\u57fa\u3065\u304f",jcatURL:"https://www.dni.gov/nctc/jcat/references.html",inputLocation:"\u5165\u529b\u4f4d\u7f6e",interactive:"\u5bfe\u8a71\u7684",fromCoord:"\u56fa\u5b9a\u5ea7\u6a19",existingFeature:"\u65e2\u5b58\u306e\u30d5\u30a3\u30fc\u30c1\u30e3\u304b\u3089",threatAnalysisCoordInputLabel:"\u8105\u5a01\u306e\u4f4d\u7f6e",enterCoords:"\u5ea7\u6a19\u5024\u5165\u529b",
threatAddPointToolTip:"\u8105\u5a01\u306e\u4f4d\u7f6e\u306e\u8ffd\u52a0",threatDrawPointToolTip:"\u30af\u30ea\u30c3\u30af\u3057\u3066\u8105\u5a01\u306e\u4f4d\u7f6e\u3092\u8ffd\u52a0",threatType:"\u8105\u5a01\u30bf\u30a4\u30d7",threatPlaceholder:"\u8105\u5a01\u306e\u691c\u7d22\u306e\u305f\u3081\u306e\u5165\u529b\u3092\u958b\u59cb",mandatoryLabel:"\u5fc5\u9808\u907f\u96e3\u8ddd\u96e2",safeLabel:"\u30b7\u30a7\u30eb\u30bf\u30fc\u5185\u907f\u96e3\u30be\u30fc\u30f3",zoneTypeLabel:"\u30be\u30fc\u30f3 \u30bf\u30a4\u30d7",
feetLabel:"\u30d5\u30a3\u30fc\u30c8",metersLabel:"\u30e1\u30fc\u30c8\u30eb",unitsLabel:"\u5358\u4f4d",settingsTitle:"\u8a2d\u5b9a",mandatoryButtonLabel:"\u5fc5\u9808\u907f\u96e3\u8ddd\u96e2\u8a2d\u5b9a\u306e\u69cb\u6210",safeButtonLabel:"\u30b7\u30a7\u30eb\u30bf\u30fc\u5185\u907f\u96e3\u8a2d\u5b9a\u306e\u69cb\u6210",style:"\u30b9\u30bf\u30a4\u30eb",lineStyles:{esriSLSDash:"\u7834\u7dda",esriSLSDashDot:"1 \u70b9\u9396\u7dda",esriSLSDashDotDot:"2 \u70b9\u9396\u7dda",esriSLSDot:"\u70b9",esriSLSLongDash:"\u9577\u3044\u7834\u7dda",
esriSLSLongDashDot:"\u9577\u3044 1 \u70b9\u9396\u7dda",esriSLSNull:"NULL",esriSLSShortDash:"\u77ed\u3044\u7834\u7dda",esriSLSShortDashDot:"\u77ed\u3044 1 \u70b9\u9396\u7dda",esriSLSShortDashDotDot:"\u77ed\u3044 2 \u70b9\u9396\u7dda",esriSLSShortDot:"\u70b9\u7dda",esriSLSSolid:"\u5b9f\u7dda"},fillStyles:{esriSFSBackwardDiagonal:"\u9006\u65b9\u5411",esriSFSCross:"\u5341\u5b57",esriSFSDiagonalCross:"\u5bfe\u89d2\u7dda",esriSFSForwardDiagonal:"\u6b63\u65b9\u5411",esriSFSHorizontal:"\u6c34\u5e73\u65b9\u5411",
esriSFSNull:"NULL",esriSFSSolid:"\u5b9f\u7dda",esriSFSVertical:"\u5782\u76f4"},resultsTitle:"\u7d50\u679c",publishTABtn:"\u516c\u958b",layerName:"\u516c\u958b\u3055\u308c\u305f\u30ec\u30a4\u30e4\u30fc\u540d",invalidLayerName:"\u30ec\u30a4\u30e4\u30fc\u540d\u306f\u3001\u82f1\u6570\u5b57\u3068\u30a2\u30f3\u30c0\u30fc\u30b9\u30b3\u30a2 (_) \u3060\u3051\u3092\u542b\u3080\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",missingLayerName:"\u30ec\u30a4\u30e4\u30fc\u306e\u540d\u524d\u3092\u5165\u529b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059",
missingLayerNameMessage:"\u516c\u958b\u306e\u524d\u306b\u3001\u6709\u52b9\u306a\u30ec\u30a4\u30e4\u30fc\u540d\u3092\u5165\u529b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",publishingFailedLayerExists:"\u516c\u958b\u306b\u5931\u6557\u3057\u307e\u3057\u305f: \u30d5\u30a3\u30fc\u30c1\u30e3 \u30b5\u30fc\u30d3\u30b9\u540d {0} \u306f\u3059\u3067\u306b\u5b58\u5728\u3057\u3066\u3044\u307e\u3059\u3002 \u5225\u306e\u540d\u524d\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002",checkService:"\u6b21\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u78ba\u8a8d: {0}",
createService:"\u6b21\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u4f5c\u6210: {0}",unableToCreate:"\u6b21\u306e\u3082\u306e\u3092\u4f5c\u6210\u3067\u304d\u307e\u305b\u3093: {0}",addToDefinition:"\u5b9a\u7fa9\u306b\u8ffd\u52a0: {0}",successfullyPublished:"Web \u30ec\u30a4\u30e4\u30fc {0} \u3092\u6b63\u5e38\u306b\u516c\u958b\u3067\u304d\u307e\u3057\u305f\u3002Web \u30ec\u30a4\u30e4\u30fc\u306e\u7ba1\u7406",userRole:"\u30e6\u30fc\u30b6\u30fc\u306b\u30a2\u30af\u30bb\u30b9\u6a29\u9650\u304c\u306a\u3044\u305f\u3081\u3001\u30b5\u30fc\u30d3\u30b9\u3092\u4f5c\u6210\u3067\u304d\u307e\u305b\u3093\u3002",
transparencyLabel:"\u900f\u904e\u8868\u793a",outline:"\u30a2\u30a6\u30c8\u30e9\u30a4\u30f3",fill:"\u5857\u308a\u3064\u3076\u3057 (\u30b9\u30bf\u30a4\u30eb\u3092\u5b9f\u7dda\u306b\u8a2d\u5b9a\u3057\u305f\u5834\u5408\u306e\u307f\u8272\u3092\u9069\u7528)",createBtn:"\u30be\u30fc\u30f3\u306e\u4f5c\u6210",clearBtn:"\u6d88\u53bb",invalidNumberMessage:"\u5165\u529b\u3055\u308c\u305f\u5024\u304c\u6709\u52b9\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002",invalidRangeMessage:"\u5024\u306f 0 \u3088\u308a\u5927\u304d\u304f\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002",
parseCoordinatesError:"\u5ea7\u6a19\u3092\u89e3\u6790\u3067\u304d\u307e\u305b\u3093\u3002 \u5165\u529b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002",_localized:{}}});