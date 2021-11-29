mos = {
    "objectName": "WOLINEARSEARCH",
    "className": "psdi.app.workorder.virtual.WOLinearSearchSet",
    "description": "Non persistent Mbo for searching linear assets",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ASSETLOCORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "The Organization to which the asset belongs to",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ASSETLOCSITEID",
            "required": true,
            "persistent": false,
            "title": "Site",
            "remarks": "The Site to which the asset belongs to",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "STARTASSETFEATUREID",
            "required": false,
            "persistent": false,
            "title": "Start Asset Feature unique identifier",
            "remarks": "A previously defined feature or relationship used, in conjunction with the start offset, to determine the start measure for this linear search.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDASSETFEATUREID",
            "required": false,
            "persistent": false,
            "title": "End Asset Feature unique identifier",
            "remarks": "A previously defined feature or relationship used, in conjunction with the end offset, to determine the end measure for this linear search.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": false,
            "title": "Asset",
            "remarks": "Identifies the asset",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ASSETFEATURE",
            "required": false,
            "persistent": false,
            "title": "Feature",
            "remarks": "An instance of a generic feature within a given location.",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "FEATURE",
            "required": false,
            "persistent": false,
            "title": "Feature",
            "remarks": "Unique feature identifier.",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "STARTFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "Label for the Start Asset Feature",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "STARTOFFSET",
            "required": false,
            "persistent": false,
            "title": "Start Offset",
            "remarks": "Distance used in conjunction with the start reference point to determine where the linear asset search will begin.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTYOFFSET",
            "required": false,
            "persistent": false,
            "title": "Start Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTZOFFSET",
            "required": false,
            "persistent": false,
            "title": "Start Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTMEASURE",
            "required": false,
            "persistent": false,
            "title": "Start Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where we want the linear search to commence.  Returned work orders for this linear asset must overlap the segment entered here.  They must start or end between the provided start/end measure or completely overlap the segment provided.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "Label for the End Asset Feature",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDOFFSET",
            "required": false,
            "persistent": false,
            "title": "End Offset",
            "remarks": "Distance used in conjunction with the end reference point to determine where the linear asset search will begin.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDYOFFSET",
            "required": false,
            "persistent": false,
            "title": "End Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDZOFFSET",
            "required": false,
            "persistent": false,
            "title": "End Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDMEASURE",
            "required": false,
            "persistent": false,
            "title": "End Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where we want the linear search to end.  Returned work orders for this linear asset must overlap the segment entered here.  They must start or end between the provided start/end measure or completely overlap the segment provided.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTMEASUREUNITID",
            "required": false,
            "persistent": false,
            "title": "Unit of Start Measure",
            "remarks": "Start Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ENDMEASUREUNITID",
            "required": false,
            "persistent": false,
            "title": "Unit of End Measure",
            "remarks": "End Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "STARTOFFSETUNITID",
            "required": false,
            "persistent": false,
            "title": "Unit of Start Offset",
            "remarks": "Unit of measure for the offset (before or after) from the start reference point of this asset.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ENDOFFSETUNITID",
            "required": false,
            "persistent": false,
            "title": "Unit of End Offset",
            "remarks": "Unit of measure for the offset (before or after) from the end reference point of this asset.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "BASEMEASUREUNITID",
            "required": false,
            "persistent": false,
            "title": "Unit of Base Measure",
            "remarks": "Usually, this is the same as the unit of measure  for the asset. If they differ, Maximo will display measures in the unit of measure but will store measures in both the unit of measure and base unit of measure.  A conversion between the unit of measure and base unit of measure, entered via the Units of Measure and Conversion Action in Assets, must exist if the base unit of measure differs from the unit of measure.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "STARTBASEMEASURE",
            "required": false,
            "persistent": false,
            "title": "Start Base Measure",
            "remarks": "An absolute measure that is calculated by converting from the end measure using a defined conversion method.  Conversion methods are defined in the Assets application using the Add/Modify Conversions action.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDBASEMEASURE",
            "required": false,
            "persistent": false,
            "title": "End Base Measure",
            "remarks": "An absolute measure that is calculated by converting from the end measure using a defined conversion method.  Conversion methods are defined in the Assets application using the Add/Modify Conversions action.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to wolinearsearch asset will return 0 or 1 object",
            "whereClause": "assetnum=:assetnum and siteid=:assetlocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the asset for this WOLINEARSEARCH object. (asset.assetnum=wolinearsearch.assetnum and asset.siteid=wolinearsearch.assetlocsiteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:assetlocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record being used by this WOLINEARSEARCH object to filter PMs, SRs or Work Orders by the Start Feature Label (assetfeature.asseetfeatureid=wolinearsearch.startassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record being used by this WOLINEARSEARCH object to filter PMs, SRs or Work Orders by the End Feature Label (assetfeature.asseetfeatureid=wolinearsearch.endassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:endassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the WOLINEARSEARCH to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}