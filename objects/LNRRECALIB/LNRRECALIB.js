mos = {
    "objectName": "LNRRECALIB",
    "className": "psdi.app.asset.LNRRecalibSet",
    "description": "Table to store Linear Recalibration Objects Measures.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LNRRECALIBID",
    "primaryKeyColumns": [
        "LNRRECALIBID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "LNRRECALIB",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 68",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "LNRRECALIB",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, SOURCEASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 69",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "LNRRECALIB",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, TARGETASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 70",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIB",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIB",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIB",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "SOURCEENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIB",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "SOURCESTARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIB",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIB",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "TARGETENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIB",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "TARGETSTARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURESPEC",
            "targetObject": "LNRRECALIB",
            "parentKeys": "ASSETFEATURESPECID",
            "targetKeys": "ASSETFEATURESPECID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature Specification",
            "longDescription": null
        },
        {
            "objectName": "ASSETLOCRELATION",
            "targetObject": "LNRRECALIB",
            "parentKeys": "ASSETLOCRELATIONID",
            "targetKeys": "ASSETLOCRELATIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset / Location Relation",
            "longDescription": null
        },
        {
            "objectName": "ASSETSPEC",
            "targetObject": "LNRRECALIB",
            "parentKeys": "ASSETSPECID",
            "targetKeys": "ASSETSPECID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Specification",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "LNRRECALIB",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "LNRRECALIB",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LNRRECALIB",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Object on which the recalibration is done. Stores the object name of the modified measures, for example AssetFeature, AssetMeter, PM, RouteStops, AssetSepc, AssetFeatureSpec",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Asset Feature ID",
            "remarks": "Asset Feature ID",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "STARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Start Asset Feature ID",
            "remarks": "Start Asset Feature ID",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "End Asset Feature ID",
            "remarks": "End Asset Feature ID",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "STARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "Start Measure",
            "remarks": "Start Measure",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "End Measure",
            "remarks": "End Measure",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Offset",
            "remarks": "Offset Start",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Offset",
            "remarks": "Offset End",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "Start Base Measure",
            "remarks": "Start Base Measure",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "End Base Measure",
            "remarks": "End Base Measure",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "RECALIBNUM",
            "required": false,
            "persistent": true,
            "title": "Recalibration Num Count",
            "remarks": "Rcalibration Number for each Object record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset on which the recalibration is done.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "BASEMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Base Measure",
            "remarks": "Base Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "STARTMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Start Measure",
            "remarks": "Start Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ENDMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "End Measure Units",
            "remarks": "Unit of End Measure",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "STARTOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Start Offset",
            "remarks": "Unit of measure for the offset (before or after) from the start reference point of this meter.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ENDOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of End Offset",
            "remarks": "Unit of measure for the offset (before or after) from the end reference point of this meter.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "METERNAME",
            "required": false,
            "persistent": true,
            "title": "Meter",
            "remarks": "Identifier of the meter.",
            "sameAsAttribute": "METERNAME",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "PMNUM",
            "required": false,
            "persistent": true,
            "title": "PM",
            "remarks": "The PM Identifier.",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "PARENTAF",
            "required": false,
            "persistent": true,
            "title": "Is Parent Asset Feature",
            "remarks": "The original asset feature whose measures were modified by the user to start the current recalibration.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROUTE_STOPID",
            "required": false,
            "persistent": true,
            "title": "Route_Stop Identifier",
            "remarks": "Unique Identifier for the Route_Stop Object",
            "sameAsAttribute": "ROUTE_STOPID",
            "sameAsObject": "ROUTE_STOP"
        },
        {
            "attributeName": "ASSETFEATURESPECID",
            "required": false,
            "persistent": true,
            "title": "Unique Identifier for Asset Feature Specifications",
            "remarks": "Unique Identifier for Asset Feature Specifications",
            "sameAsAttribute": "ASSETFEATURESPECID",
            "sameAsObject": "ASSETFEATURESPEC"
        },
        {
            "attributeName": "ASSETSPECID",
            "required": false,
            "persistent": true,
            "title": "Unique Identifier for Asset Specification",
            "remarks": "Unique Identifier for Asset Specification",
            "sameAsAttribute": "ASSETSPECID",
            "sameAsObject": "ASSETSPEC"
        },
        {
            "attributeName": "LNRRECALIBID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETLOCRELATIONID",
            "required": false,
            "persistent": true,
            "title": "Unique Id for Asset Loc Relation",
            "remarks": "Unique Id for Asset Loc Relation",
            "sameAsAttribute": "ASSETLOCRELATIONID",
            "sameAsObject": "ASSETLOCRELATION"
        },
        {
            "attributeName": "SOURCESTARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Source Start Asset Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the start offset, to determine the start measure for the linear segment of the source asset.",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "TARGETSTARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Target Start Asset Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the start offset, to determine the start measure for the linear segment of the target asset",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "SOURCEENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Source End Asset Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the end offset, to determine the end measure for the linear segment of the source asset.",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "TARGETENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Target End Asset Feature",
            "remarks": "A previously defined feature or relationship used, in conjunction with the end offset, to determine the end measure for the linear segment of the target asset.",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "SOURCEASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Source Asset",
            "remarks": "Source asset or location is related to a target asset or location.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TARGETASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Target Asset",
            "remarks": "Source asset or location is related to the target asset or location",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SOURCESTARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "Source Start Measure",
            "remarks": "Source Start Measure",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TARGETSTARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "Target Start Measure",
            "remarks": "Target Start Measure",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SOURCEENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "Source End Measure",
            "remarks": "Source End Measure",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TARGETENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "Target End Measure",
            "remarks": "Target End Measure",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSETLOCRELATION",
            "target": "ASSETLOCRELATION",
            "remarks": "Relationship to the AssetLoc Relationship table, used to find a Asset Relationship record for a given LNRRecalib.",
            "whereClause": "assetlocrelationid=:assetlocrelationid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AFRECALIB",
            "source": "ASSETFEATURE",
            "remarks": "AssetFeature to LNRRecalib",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        }
    ]
}