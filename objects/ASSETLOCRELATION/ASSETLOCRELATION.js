mos = {
    "objectName": "ASSETLOCRELATION",
    "className": "psdi.app.asset.AssetLocRelationSet",
    "description": "The AssetLocRelation table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASSETLOCRELATIONID",
    "primaryKeyColumns": [
        "ASSETRELATIONNUM",
        "SOURCEASSETNUM",
        "TARGETASSETNUM",
        "LINEARASSETLOCRELATIONID"
    ],
    "logicalRelationships": [
        {
            "objectName": "ASSETLOCRELATION",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "ASSETLOCRELATIONID",
            "targetKeys": "ASSETLOCRELATIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset / Location Relation",
            "longDescription": null
        },
        {
            "objectName": "ASSETLOCRELATION",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "ASSETLOCRELATIONID",
            "targetKeys": "ASSETLOCRELATIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset / Location Relation",
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
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, SOURCEASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "AssetLocRelation records on which the current Asset is source of the linear relationship. (Linear)",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, TARGETASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "AssetLocRelation records on which the current Asset is target of the linear relationship. (Linear)",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "SOURCEENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "SOURCESTARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "TARGETENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "TARGETSTARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, SOURCELOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, TARGETLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Location",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCEBASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCEENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 23",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCEENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCESTARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCESTARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 26",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETBASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 28",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 29",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETSTARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 30",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETSTARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 31",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCEBASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCEENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCEENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCESTARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCESTARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETBASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETSTARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETSTARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "RELATION",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "RELATIONNUM",
            "targetKeys": "ASSETRELATIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship Information",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETLOCRELATION",
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
            "title": "Source Asset",
            "remarks": "Source asset or location is related to a target asset or location.",
            "sameAsAttribute": "ASSETNUM",
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
            "attributeName": "TARGETASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Target Asset",
            "remarks": "Source asset or location is related to the target asset or location ",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
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
            "attributeName": "SOURCESTARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "Source Start Measure",
            "remarks": "Absolute distance taken from the start of the source asset to where this relationship starts.  This can be manually entered or calculated by entering a start reference point and start offset.",
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
            "attributeName": "SOURCEENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "Source End Measure",
            "remarks": "Absolute distance taken from the start of the source asset to where this relationship ends.  This can be manually entered or calculated by entering an end reference point and end offset.",
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
            "attributeName": "SOURCESTARTOFFSET",
            "required": false,
            "persistent": true,
            "title": "Source Start Offset",
            "remarks": "Distance used in conjunction with the start reference point to determine where the current relationship starts.  ",
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
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site where the  source asset/location and the target asset/location are located.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "SOURCESTARTZOFFSET",
            "required": false,
            "persistent": true,
            "title": "Source Start Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
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
            "attributeName": "TARGETSTARTYOFFSET",
            "required": false,
            "persistent": true,
            "title": "Target Start Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
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
            "attributeName": "TARGETENDOFFSET",
            "required": false,
            "persistent": true,
            "title": "Target End Offset",
            "remarks": "Distance used in conjunction with the end reference point to determine where the current relationship ends.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
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
            "attributeName": "TARGETENDZOFFSET",
            "required": false,
            "persistent": true,
            "title": "Target End Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SOURCESTARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Source Start Asset Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the start offset, to determine the start measure for the linear segment of the source asset.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "TARGETSTARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Target Start Asset Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the start offset, to determine the start measure for the linear segment of the target asset.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "SOURCEENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Source End Asset Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the end offset, to determine the end measure for the linear segment of the source asset.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "TARGETENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Target End Asset Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the end offset, to determine the end measure for the linear segment of the target asset.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ASSETLOCRELATIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
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
            "attributeName": "CREATEDDATE",
            "required": false,
            "persistent": true,
            "title": "Created Date",
            "remarks": "The Date when the relation between the two Assets were established",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "ISLINEARREF",
            "required": true,
            "persistent": true,
            "title": "Is Reference Point",
            "remarks": "Specifies whether you can use the relationship as a start or end point for a linear segment. If the check box is selected (the default), Maximo will create an feature instance that you can use as a start or end reference point. If the check box is cleared, you cannot.",
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
            "title": "Unit of Sourec End Measure",
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
            "title": "Unit of Sourec Start Measure",
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
            "remarks": "Unit of target base measure name",
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
            "attributeName": "TARGETENDMEASUREUNITID",
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
            "attributeName": "ASSETLOCRELHISTID",
            "required": false,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINEARASSETLOCRELATIONID",
            "required": true,
            "persistent": true,
            "title": "Linear Specification Id",
            "remarks": "Part of the primary key to differentiate Linear asset assetlocrelation's only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AFUPDATESAR",
            "required": false,
            "persistent": false,
            "title": "Is Asset Relationship measures modified by Asset Feature",
            "remarks": "Is Asset Relationship measures modified by Asset Feature",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find all assets for a given sourceasset or targetasset",
            "whereClause": "assetnum=:sourceassetnum or assetnum=:targetassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCEASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find Asset for a given sourceasset.",
            "whereClause": "assetnum=:sourceassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCELINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this AssetLocRelation's linear Asset. (assetlocrelation.sourceassetnum=asset.assetnum and assetlocrelation.siteid=asset.siteid). The resulting set will contain one object.",
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
            "remarks": "Relationship to the Asset table, used to find this AssetLocRelation's linear Asset. (assetlocrelation.targetassetnum=asset.assetnum and assetlocrelation.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:targetassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETENDASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetlocrelation for its target end asset feature. (assetfeature.asseetfeatureid=assetlocrelation.targetendassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid=:targetendassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETSTARTASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetlocrelation for its target start asset feature. (assetfeature.asseetfeatureid=assetlocrelation.targetstartassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid=:targetstartassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCEENDASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetlocrelation for its source end asset feature. (assetfeature.asseetfeatureid=assetlocrelation.sourceendassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid=:sourceendassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCESTARTASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetlocrelation for its source start asset feature. (assetfeature.asseetfeatureid=assetlocrelation.sourcestartassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:sourcestartassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the AssetFeature table, used to find a Asset feature record for a given AssetLoc Relationship. (AssetLocRelation.assetlocrelationid= AssetFeature.assetlocrelationi). The resulting set will contain zero or one object.",
            "whereClause": "assetlocrelationid=:assetlocrelationid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETREL_ASSETREL",
            "target": "ASSETLOCRELATION",
            "remarks": "Relationship to AssetLocRelation table to find a AssetRelationship record.",
            "whereClause": "sourceassetnum=:sourceassetnum and targetassetnum=:targetassetnum and siteid=:siteid and assetlocrelationid=:assetlocrelationid",
            "cardinality": null
        },
        {
            "name": "NEWRELATION",
            "target": "ASSETLOCRELATION",
            "remarks": "new assetlocrelationship",
            "whereClause": "sourceassetnum=:sourceassetnum and assetrelationnum=:assetrelationnum and targetassetnum=:targetassetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCRELHIST",
            "target": "ASSETLOCRELHIST",
            "remarks": "Relationship to the ASSETLOCRELHIST table, used to find ASSETLOCRELHIST records for a given ASSETLOCRELATION.",
            "whereClause": "sourceassetnum=:sourceassetnum and targetassetnum=:targetassetnum and assetrelationnum=:assetrelationnum",
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
            "whereClause": "location=:targetlocation",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATION",
            "target": "RELATION",
            "remarks": "Relationship to the RELATION table, used to find relation for a given ASSETLOCRELATION relation.",
            "whereClause": "relationnum =:assetrelationnum",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ASSETLOCRELATION",
            "source": "ASSET",
            "remarks": "Relationship to the ASSETLOCRELATION table, used to find related asset's for give Asset.",
            "whereClause": "sourceassetnum =:assetnum or targetassetnum =:assetnum and siteid =:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCRELATION_ALL",
            "source": "ASSET",
            "remarks": "Relationship to the AssetLocRelation table used to find AssetLocRelationships for this Asset that fall within the range of the asset's FROMMEASURE and TOMEASURE.",
            "whereClause": "((sourceassetnum=:assetnum and ((sourcestartmeasure <= :frommeasure and sourceendmeasure >= :frommeasure) or (sourcestartmeasure <= :tomeasure and sourceendmeasure >= :tomeasure) or (sourcestartmeasure >= :frommeasure and sourceendmeasure <= :tomeasure) or (sourcestartmeasure >= :tomeasure and sourceendmeasure <= :frommeasure) or (sourcestartmeasure is null and sourceendmeasure is null))) or (targetassetnum=:assetnum and ((targetstartmeasure <= :frommeasure and targetendmeasure >= :frommeasure) or (targetstartmeasure <= :tomeasure and targetendmeasure >= :tomeasure) or (targetstartmeasure >= :frommeasure and targetendmeasure <= :tomeasure) or (targetstartmeasure >= :tomeasure and targetendmeasure <= :frommeasure) or (targetstartmeasure is null and targetendmeasure is null)))) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDASSET",
            "source": "ASSET",
            "remarks": "For given asset, retrieve its all related assets, either as source or as target",
            "whereClause": "sourceassetnum=:assetnum or targetassetnum=:assetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LNRASSETLOCRELATION",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the AssetLocRelation table used to find AssetLocRelationships for this AssetFeature",
            "whereClause": "(sourcestartassetfeatureid=:assetfeatureid or sourceendassetfeatureid=:assetfeatureid) or (targetstartassetfeatureid=:assetfeatureid or targetendassetfeatureid=:assetfeatureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCRELATION",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the AssetLoc Relationship table, used to find a Asset Relationship record for a given AssetFeature. (AssetFeature.assetlocrelationid= AssetLocRelation.assetlocrelationi). The resulting set will contain zero or one object.",
            "whereClause": "assetlocrelationid=:assetlocrelationid",
            "cardinality": null
        },
        {
            "name": "ASSETREL_ASSETREL",
            "source": "ASSETLOCRELATION",
            "remarks": "Relationship to AssetLocRelation table to find a AssetRelationship record.",
            "whereClause": "sourceassetnum=:sourceassetnum and targetassetnum=:targetassetnum and siteid=:siteid and assetlocrelationid=:assetlocrelationid",
            "cardinality": null
        },
        {
            "name": "NEWRELATION",
            "source": "ASSETLOCRELATION",
            "remarks": "new assetlocrelationship",
            "whereClause": "sourceassetnum=:sourceassetnum and assetrelationnum=:assetrelationnum and targetassetnum=:targetassetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCRELATION",
            "source": "LNRRECALIB",
            "remarks": "Relationship to the AssetLoc Relationship table, used to find a Asset Relationship record for a given LNRRecalib.",
            "whereClause": "assetlocrelationid=:assetlocrelationid",
            "cardinality": null
        },
        {
            "name": "ASSETLOCRELATION",
            "source": "LOCATIONS",
            "remarks": "Relationship to the ASSETLOCRELATION table, used to find related location's for given Location.",
            "whereClause": "sourcelocation =:location or targetlocation =:location and siteid =: siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCRELATION",
            "source": "RELATION",
            "remarks": "Relationship to the ASSETLOCRELATION table, used to find assetlocrelation for a given RELATION .",
            "whereClause": "assetrelationnum=:relationnum",
            "cardinality": "UNDEFINED"
        }
    ]
}