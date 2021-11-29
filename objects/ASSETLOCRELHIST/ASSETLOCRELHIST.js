mos = {
    "objectName": "ASSETLOCRELHIST",
    "className": "psdi.app.asset.AssetLocRelHistSet",
    "description": "The AssetLocRelationHist Table.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASSETLOCRELHISTID",
    "primaryKeyColumns": [
        "ASSETLOCRELHISTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, SOURCEASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Historical record (AssetLocRelHist) of the current Asset''s involvement as a source in linear relationships. (Linear)",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, TARGETASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Historical record (AssetLocRelHist) of the current Asset''s involvement as a target in linear relationships. (Linear)",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "SOURCEENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "SOURCESTARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "TARGETENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "TARGETSTARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, SOURCELOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, TARGETLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Location",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCEBASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 32",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCEENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 33",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCEENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 34",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCESTARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 35",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCESTARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 36",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETBASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 37",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 38",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETENDMEASUREUNITUID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 39",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 40",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETSTARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETSTARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCEBASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCEENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCEENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCESTARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCESTARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETBASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETSTARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETSTARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "RELATION",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "RELATIONNUM",
            "targetKeys": "ASSETRELATIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship Information",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETLOCRELHIST",
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
            "attributeName": "SOURCEASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Source Asset Number",
            "remarks": "Source asset or location is related to a target asset or location.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SOURCEENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Source End Asset Feature",
            "remarks": "A previously defined feature or relationship used, in conjunction with the end offset, to determine the end measure for the linear segment of the source asset.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "SOURCEENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "Source End Measure",
            "remarks": "Absolute distance taken from the start of the source asset to where this relationship ends.  This can be manually entered or calculated by entering an end reference point and end offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SOURCEENDOFFSET",
            "required": false,
            "persistent": true,
            "title": "Source End Offset",
            "remarks": "Distance used in conjunction with the end reference point to determine where the current relationship ends.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SOURCEENDYOFFSET",
            "required": false,
            "persistent": true,
            "title": "Source End Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SOURCEENDZOFFSET",
            "required": false,
            "persistent": true,
            "title": "Source End Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SOURCELOCATION",
            "required": false,
            "persistent": true,
            "title": "Source Location",
            "remarks": "Location related to a linear asset ",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SOURCESTARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Source Start Asset Feature",
            "remarks": "A previously defined feature or relationship used in conjunction with the start offset to determine the start measure for the linear segment of the source asset.",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "SOURCESTARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "Source Start Measure",
            "remarks": "Absolute distance taken from the start of the source asset to where this relationship starts.  This can be manually entered or calculated by entering a start reference point and start offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SOURCESTARTOFFSET",
            "required": false,
            "persistent": true,
            "title": "Source Start Offset",
            "remarks": "Distance used in conjunction with the start reference point to determine where the current relationship starts.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "REMOVEDDATE",
            "required": false,
            "persistent": true,
            "title": "Removed Date",
            "remarks": "When a relationship is applied to a linear asset, we add a new record to the history table with a created date.  When the attribute is modified, we add a removed date to that record and create a new record with a new created date.  This allows us easily access relationship history.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier ",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "TARGETSTARTZOFFSET",
            "required": false,
            "persistent": true,
            "title": "Target Start Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TARGETSTARTYOFFSET",
            "required": false,
            "persistent": true,
            "title": "Target Start Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TARGETSTARTOFFSET",
            "required": false,
            "persistent": true,
            "title": "Target Start Offset",
            "remarks": "Distance used in conjunction with the start reference point to determine where the current relationship starts.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TARGETSTARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "Target Start Measure",
            "remarks": "Absolute distance taken from the start of the target asset to where this relationship starts.  This can be manually entered or calculated by entering start reference points and start offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TARGETSTARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Target Start Asset Feature",
            "remarks": "A previously defined feature or relationship used, in conjunction with the start offset, to determine the start measure for the linear segment of the target asset.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "TARGETENDYOFFSET",
            "required": false,
            "persistent": true,
            "title": "Target End Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TARGETENDOFFSET",
            "required": false,
            "persistent": true,
            "title": "Target End Offset",
            "remarks": "Distance used in conjunction with the end reference point to determine where the current relationship ends.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TARGETENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "Target End Measure",
            "remarks": "Absolute distance taken from the start of the target asset to where this relationship ends.  This can be manually entered or calculated by entering an end reference point and end offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TARGETASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Target Asset Number",
            "remarks": "Source asset or location is related to the target asset or location",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SOURCESTARTZOFFSET",
            "required": false,
            "persistent": true,
            "title": "Source Start Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SOURCESTARTYOFFSET",
            "required": false,
            "persistent": true,
            "title": "Source Start Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TARGETENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Target End Asset Feature",
            "remarks": "A previously defined feature or relationship used, in conjunction with the end offset, to determine the end measure for the linear segment of the target asset.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "TARGETENDZOFFSET",
            "required": false,
            "persistent": true,
            "title": "Target End Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site where the  source asset/location and the target asset/location are located.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ASSETLOCRELATIONID",
            "required": false,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "When a relationship is applied to a linear asset, we add a new record to the history table with a created date.  When the attribute is modified, we add a removed date to that record and create a new record with a new created date.  This allows us easily access relationship history.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETRELATIONNUM",
            "required": true,
            "persistent": true,
            "title": "Relation",
            "remarks": "Asset Relationship identifier",
            "sameAsAttribute": "RELATIONNUM",
            "sameAsObject": "RELATION"
        },
        {
            "attributeName": "ASSETLOCRELHISTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETLOCATION",
            "required": false,
            "persistent": true,
            "title": "Target Location",
            "remarks": "Location related to a linear asset ",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SOURCESTARTFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "Where the relationship starts in terms of a readily identifiable reference point (e.g. Mile Post 27).  The start measure of the reference point + start offset = start measure for the source asset in this relationship.   ",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "SOURCEENDFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "Where the relationship ends in terms of a readily identifiable reference point (e.g. Mile Post 27).  The end measure of the end reference point + end offset = end measure for the source asset in this relationship.   ",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "TARGETSTARTFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "Where the relationship starts in terms of a readily identifiable reference point (e.g. Mile Post 27).  The start measure of the reference point + start offset = start measure for the target asset in this relationship.   ",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "TARGETENDFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "Where the relationship ends in terms of a readily identifiable reference point (e.g. Mile Post 27).  The end measure of the end reference point + end offset = end measure for the target asset in this relationship.   ",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "SOURCESTARTYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Source Start Y Offset Reference",
            "remarks": "Reference point from which the start Y-Offset (measure to the left or right of the linear asset) is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEENDYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Source End Y Offset Reference",
            "remarks": "Point from which the Y-Offset is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCESTARTZOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Source Start Z Offset Reference",
            "remarks": "Point from which the Z-Offset is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEENDZOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Source End Z Offset Reference",
            "remarks": "Point from which the Z-Offset is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETSTARTYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Target Start Y Offset Referent",
            "remarks": "Reference point from which the start Y-Offset (measure to the left or right of the linear asset) is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETENDYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Target End Y Offset Referent",
            "remarks": "Reference point from which the end Y-Offset (measure to the left or right of the linear asset) is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETSTARTZOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Target Start Z Offset Referent",
            "remarks": "Reference point from which the start Z-Offset (distance above or below the linear asset) is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETENDZOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Target End Z Offset Referent",
            "remarks": "Point from which the Z-Offset is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEBASEMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Source Base Measure",
            "remarks": "Base unit of measure.  Only differs from the linear asset's unit of measure when the values need to be stored in an additional unit of measure than that normally displayed (and stored).",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "SOURCEENDBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "Source End Base Measure",
            "remarks": "Measurement taken from the start of this linear asset to where this asset ends.  This can be manually measured and entered or calculated using the EndLabel and EndOffset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SOURCEENDMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Source End Measure",
            "remarks": "End Measure Units ",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "SOURCEENDOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Source End Offset",
            "remarks": "End Offset Units ",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "SOURCESTARTBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "Source Start Base Measure",
            "remarks": "Measurement taken from the start of this linear asset to where this asset is initially encountered. This can be manually measured and entered or calculated using the StartLabel and StartOffset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SOURCESTARTMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Source Start Measure",
            "remarks": "Start Measure Units ",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "SOURCESTARTOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Source Start Offset",
            "remarks": "start Offset Units ",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "TARGETBASEMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Target Base Measure",
            "remarks": "Unique Identifier.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "TARGETSTARTMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Target Start Measure",
            "remarks": "start Measure Units ",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "TARGETSTARTOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Target Start Offset",
            "remarks": "Start Measure Units ",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "TARGETENDMEASUREUNITUID",
            "required": false,
            "persistent": true,
            "title": "Unit of Target End Measure",
            "remarks": "End Measure Units ",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "TARGETENDOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Target End Offset",
            "remarks": "End Offset Units ",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "TARGETSTARTBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "Target Start Base Measure",
            "remarks": "Measurement taken from the start of this linear asset to where this asset is initially encountered.  This can be manually measured and entered or calculated using the StartLabel and StartOffset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TARGETENDBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "Target End Base Measure",
            "remarks": "Measurement taken from the start of this linear asset to where this asset ends.  This can be manually measured and entered or calculated using the EndLabel and EndOffset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ISLINEARREF",
            "required": true,
            "persistent": true,
            "title": "Is Reference Point",
            "remarks": "Specifies whether you can use the relationship as a start or end point for a linear segment. If the check box is selected (the default), Maximo will create an feature instance that you can use as a start or end reference point. If the check box is cleared, you cannot.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETENDMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Target End Measure",
            "remarks": "End Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "RELSEQUENCENUM",
            "required": false,
            "persistent": true,
            "title": "Sequence Number",
            "remarks": "Use sequence numbers to list relationships in a logical order, rather than in the order of entry. For example, you can view the assets in a circuit from the starting asset, through several connections, to the terminating asset. If you increment each sequence number by 10, you can insert additional relationships at any point, using a smaller number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "SOURCEASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find asset for a given sourceasset",
            "whereClause": "assetnum=:sourceassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCELINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this AssetLocRelHist's linear Asset Measures.",
            "whereClause": "assetnum=:sourceassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find Asset for a given targetasset.",
            "whereClause": "assetnum=:targetassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETLINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this AssetLocRelHist's linear Asset Measures.",
            "whereClause": "assetnum=:targetassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETENDASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetlocrelhist for its target end asset feature. (assetfeature.asseetfeatureid=assetlocrelhist.targetendassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:targetendassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCESTARTASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetlocrelhist for its source start asset feature. (assetfeature.asseetfeatureid=assetlocrelhist .sourcestartassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:sourcestartassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETSTARTASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetlocrelhist for its target start asset feature. (assetfeature.asseetfeatureid=assetlocrelhist .targetstartassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:targetstartassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCEENDASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetlocrelhist for its source end asset feature. (assetfeature.asseetfeatureid=assetlocrelhist.sourceendassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:sourceendassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCELOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table,used to find location for a given sourcelocation",
            "whereClause": "location=:sourcelocation and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETLOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the locations table, used to find location for a given targetlocation.",
            "whereClause": "location=:targetlocation and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATION",
            "target": "RELATION",
            "remarks": "Relationship to the RELATION table, used to find relation for a given ASSETLOCRELHISt relation.",
            "whereClause": "relationnum =:assetrelationnum",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ASSETRELATIONHISTSOURCEASOF",
            "source": "ASSET",
            "remarks": "Relationship to the ASSETLOCRELHIST table, used to find sourceasset's for a given Asset with Asofdate.",
            "whereClause": "targetassetnum=:assetnum and ((removeddate is not null and :asofdate between createddate and removeddate) or (removeddate is null and createddate <=:asofdate)) and ((targetstartmeasure <= :frommeasure and targetendmeasure >= :frommeasure) or (targetstartmeasure <= :tomeasure and targetendmeasure >= :tomeasure) or (targetstartmeasure >= :frommeasure and targetendmeasure <= :tomeasure) or (targetstartmeasure >= :tomeasure and targetendmeasure <= :frommeasure) or (targetstartmeasure is null and targetendmeasure is null)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETRELATIONHISTTARGETASOF",
            "source": "ASSET",
            "remarks": "Relationship to the ASSETLOCRELHIST table, used to find targetassetnum's for a given Asset with Asof date.",
            "whereClause": "sourceassetnum=:assetnum and ((removeddate is not null and :asofdate between createddate and removeddate) or (removeddate is null and createddate <=:asofdate))  and ((sourcestartmeasure <= :frommeasure and sourceendmeasure >= :frommeasure) or (sourcestartmeasure <= :tomeasure and sourceendmeasure >= :tomeasure) or (sourcestartmeasure >= :frommeasure and sourceendmeasure <= :tomeasure) or (sourcestartmeasure >= :tomeasure and sourceendmeasure <= :frommeasure)  or (sourcestartmeasure is null and sourceendmeasure is null)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCRELHIST",
            "source": "ASSETLOCRELATION",
            "remarks": "Relationship to the ASSETLOCRELHIST table, used to find ASSETLOCRELHIST records for a given ASSETLOCRELATION.",
            "whereClause": "sourceassetnum=:sourceassetnum and targetassetnum=:targetassetnum and assetrelationnum=:assetrelationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCRELHIST",
            "source": "RELATION",
            "remarks": "Relationship to the ASSETLOCRELHIST table, used to find assetlocrelation for a given RELATION",
            "whereClause": "assetrelationnum=:relationnum",
            "cardinality": "UNDEFINED"
        }
    ]
}