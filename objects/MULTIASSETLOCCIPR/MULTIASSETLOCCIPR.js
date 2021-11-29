mos = {
    "objectName": "MULTIASSETLOCCIPR",
    "className": "psdi.app.workorder.MultiAssetLocCIPrSet",
    "description": "Progress for MultiAssetLocCI entries",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MULTIASSETLOCCIPRID",
    "primaryKeyColumns": [
        "MULTIASSETLOCCIPRID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 111",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "FEATURE",
            "targetKeys": "FEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Feature",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 179",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 180",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 181",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 182",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 183",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "BASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MULTIASSETLOCCI",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MULTIID",
            "targetKeys": "MULTIID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MULTIASSETLOCCIPR",
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
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Who entered the progress",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Date the progress was entered",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "End Asset Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the end offset, to determine the end measure for this linear segment.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "End Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where progress for this linear work segment ends.  This can be manually entered or calculated by entering an end reference point and end offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Offset",
            "remarks": "Distance used in conjunction with the end reference point to determine where the progress for the work location ended.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Start Asset Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the start offset, to determine the start measure for this linear segment.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "STARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "Start Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where progress for this linear work segment begins.  This can be manually entered or calculated by entering a start reference point and start offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Offset",
            "remarks": "Distance used in conjunction with the start reference point to determine where the progress for the work location began.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "MULTIASSETLOCCIPRID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique ID for the MULTIASSETLOCCIPR table ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MULTIID",
            "required": false,
            "persistent": true,
            "title": "Multiple Asset Table ID",
            "remarks": "Multiple asset table unique identifier",
            "sameAsAttribute": "MULTIID",
            "sameAsObject": "MULTIASSETLOCCI"
        },
        {
            "attributeName": "STARTFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "Where the work segment for the linear asset starts in terms of a readily identifiable reference point (e.g. Mile Post 27).  The start measure of the start reference point + start offset = start measure for the current linear segment.   ",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "Where the work segment for the linear asset ends in terms of a readily identifiable reference point (e.g. Mile Post 27).  The end measure of the end reference point + end offset = end measure for the current linear segment.   ",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "SEQUENCE",
            "required": false,
            "persistent": true,
            "title": "Sequence",
            "remarks": "The sequence number of the entry in the table",
            "sameAsAttribute": "SEQUENCE",
            "sameAsObject": "MULTIASSETLOCCI"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Asset/Location Site",
            "remarks": "The site of the the Asset/Location",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Asset/Location Organization",
            "remarks": "Organization Identifier ",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "BASEMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Base Measure",
            "remarks": "Usually, this is the same as the unit of measure  for the asset. If they differ, Maximo will display measures in the unit of measure but will store measures in both the unit of measure and base unit of measure.  A conversion between the unit of measure and base unit of measure, entered via the Units of Measure and Conversion Action in Assets, must exist if the base unit of measure differs from the unit of measure.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ENDBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "End Base Measure",
            "remarks": "An absolute measure that is calculated by converting from the end measure using a defined conversion method.  Conversion methods are defined in the Assets application using the Add/Modify Conversions action.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of End Measure",
            "remarks": "Unit of measure for the starting measure of this progress record.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ENDOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of End Offset",
            "remarks": "Unit of measure for the offset (before or after) from the end reference point of this progress record.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "STARTBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "Start Base Measure",
            "remarks": "An absolute measure that is calculated by converting from the end measure using a defined conversion method.  Conversion methods are defined in the Assets application using the Add/Modify Conversions action.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Start Measure",
            "remarks": "Unit of measure for the starting measure of this progress record.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "STARTOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Start Offset",
            "remarks": "Unit of measure for the offset (before or after) from the start reference point of this progress record.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "FEATURE",
            "required": false,
            "persistent": true,
            "title": "Feature",
            "remarks": "An object that exists on or alongside a linear asset that is not a point asset.",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "FEATURELABEL",
            "required": false,
            "persistent": true,
            "title": "Feature Label",
            "remarks": "Unique label used to differentiate features.",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Asset record for the multiassetlocciPR.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this MultiAssetLocCIPr's linear Asset. (multiassetloccipr.assetnum=asset.assetnum and multiassetloccipr.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "The MultiassetlocciPR's start feature.",
            "whereClause": "assetfeatureid=:startassetfeatureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Asset feature relationship.",
            "whereClause": "assetfeatureid in (select assetfeatureid from multiassetlocci where multiassetlocci.multiid = :multiid and multiassetlocci.siteid = :siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "The Multiassetlocci's end feature.",
            "whereClause": "assetfeatureid=:endassetfeatureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MULTIASSETLOCCIPR",
            "source": "MULTIASSETLOCCI",
            "remarks": "Retrieves progress records associated with a MultiAssetLocCI record; will return zero or many records.",
            "whereClause": "multiid = :multiid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCIPR",
            "source": "WORKORDER",
            "remarks": "Relationship to the Multiassetloccipr table.",
            "whereClause": "multiid in (select multiid from multiassetlocci where multiassetlocci.recordkey = :wonum and multiassetlocci.recordclass = :woclass)",
            "cardinality": "UNDEFINED"
        }
    ]
}