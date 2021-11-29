mos = {
    "objectName": "LNRRECALIBNONAF",
    "className": "psdi.app.asset.LNRRecalibNonafSet",
    "description": "Table to store Linear Recalibration Objects Measures of Non AssetFeature.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LNRRECALIBNONAFID",
    "primaryKeyColumns": [
        "LNRRECALIBNONAFID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "LNRRECALIBNONAF",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 71",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIBNONAF",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIBNONAF",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIBNONAF",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURESPEC",
            "targetObject": "LNRRECALIBNONAF",
            "parentKeys": "ASSETFEATURESPECID",
            "targetKeys": "ASSETFEATURESPECID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature Specification",
            "longDescription": null
        },
        {
            "objectName": "ASSETSPEC",
            "targetObject": "LNRRECALIBNONAF",
            "parentKeys": "ASSETSPECID",
            "targetKeys": "ASSETSPECID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Specification",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "LNRRECALIBNONAF",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "LNRRECALIBNONAF",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LNRRECALIBNONAF",
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
            "attributeName": "METERNAME",
            "required": false,
            "persistent": true,
            "title": "Meter",
            "remarks": "Identifier of the meter.",
            "sameAsAttribute": "METERNAME",
            "sameAsObject": "METER"
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
            "attributeName": "PMNUM",
            "required": false,
            "persistent": true,
            "title": "PM",
            "remarks": "The PM Identifier.",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
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
            "attributeName": "ASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Asset Feature ID",
            "remarks": "Asset Feature ID",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
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
            "attributeName": "LNRRECALIBNONAFID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "NONAFRECALIB",
            "source": "ASSETFEATURE",
            "remarks": "AssetFeature to LNRRECALIBNONAF",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        }
    ]
}