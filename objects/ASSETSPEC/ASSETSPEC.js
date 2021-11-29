mos = {
    "objectName": "ASSETSPEC",
    "className": "psdi.app.asset.AssetSpecSet",
    "description": "Values of an attribute specified for an asset",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASSETSPECID",
    "primaryKeyColumns": [
        "ASSETATTRID",
        "ASSETNUM",
        "SECTION",
        "SITEID",
        "LINEARASSETSPECID"
    ],
    "logicalRelationships": [
        {
            "objectName": "ASSETSPEC",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "ASSETSPECID",
            "targetKeys": "ASSETSPECID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Specification",
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
            "objectName": "ASSETSPEC",
            "targetObject": "LNRRECALIBNONAF",
            "parentKeys": "ASSETSPECID",
            "targetKeys": "ASSETSPECID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Specification",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "ASSETSPEC",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Current Asset''s AssetSpec records. The attributes associated with the Asset by virtue of its classification.",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "ASSETSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "ASSETSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "LINKEDTOATTRIBUTE, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETSPEC",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETSPEC",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, SECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ASSETSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 49",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 52",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 53",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 54",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "BASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSETSPEC",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETSPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETSPEC",
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
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ASSETATTRID",
            "required": true,
            "persistent": true,
            "title": "Attribute",
            "remarks": "The name of an attribute defined for the classification specified for this asset. Create and manage classifications in the Classifications application.",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": true,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Classification Structure identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "INHERITEDFROMITEM",
            "required": true,
            "persistent": true,
            "title": "Inherited from Item",
            "remarks": "Specification inherited from Item Specification?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMSPECVALCHANGED",
            "required": true,
            "persistent": true,
            "title": "Item Specification Value Changed ",
            "remarks": "Item Specification value changed after being inherited? N if value not changed and N if value not inherited from item specification.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYSEQUENCE",
            "required": true,
            "persistent": true,
            "title": "Display Sequence",
            "remarks": "Display sequence",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMVALUE",
            "required": false,
            "persistent": true,
            "title": "Numeric Value",
            "remarks": "Numeric value in entered units",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "NUMERICDOMAIN"
        },
        {
            "attributeName": "MEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "A unit of measure specified for this classification attribute",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ALNVALUE",
            "required": false,
            "persistent": true,
            "title": "Alphanumeric Value",
            "remarks": "Alphanumeric(text) value",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date record modified",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User name who last changed record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ES01",
            "required": false,
            "persistent": true,
            "title": "Es01",
            "remarks": "Cross-over field from ClassSpec.CS01",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ES02",
            "required": false,
            "persistent": true,
            "title": "Es02",
            "remarks": "Cross-over field from ClassSpec.CS02",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ES03",
            "required": false,
            "persistent": true,
            "title": "Es03",
            "remarks": "Cross-over field from ClassSpec.CS03",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ES04",
            "required": false,
            "persistent": true,
            "title": "Es04",
            "remarks": "Cross-over field from ClassSpec.CS04",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ES05",
            "required": false,
            "persistent": true,
            "title": "Es05",
            "remarks": "Cross-over field from ClassSpec.CS05",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SECTION",
            "required": false,
            "persistent": true,
            "title": "Section",
            "remarks": "Section for a group of attributes",
            "sameAsAttribute": "SECTION",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "ASSETSPECID",
            "required": true,
            "persistent": true,
            "title": "ASSETSPECID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MANDATORY",
            "required": true,
            "persistent": true,
            "title": "Mandatory",
            "remarks": "Is value mandatory?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TABLEVALUE",
            "required": false,
            "persistent": true,
            "title": "Table Value",
            "remarks": "The value from the table specified in the DOMAIN where the domaintype and datatype is TABLE.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINKEDTOATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Linked to Attribute",
            "remarks": "This attribute is linked to another attribute in this specification.",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "LINKEDTOSECTION",
            "required": false,
            "persistent": true,
            "title": "Linked to Section",
            "remarks": "This section is linked to another section in this specification.",
            "sameAsAttribute": "SECTION",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "STARTFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "Used in lieu of an absolute measure, a reference point is an object, like a mile or kilometer marker, whose measure has been predefined.",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "STARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "Start Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where the current value for this attribute is initially encountered.  This can be manually entered or calculated by entering a start reference point and start offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Offset",
            "remarks": "Distance used in conjunction with the start reference point to determine where the current attribute value for the asset begins.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "ENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "End Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where the current value for this attribute ends.  This can be manually entered or calculated by entering an end reference point and end offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Offset",
            "remarks": "Distance used in conjunction with the end reference point to determine where the current attribute value for the asset ends.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTINUOUS",
            "required": true,
            "persistent": true,
            "title": "Continuous",
            "remarks": "Specifies whether the attribute is continuous. If the check box is selected, it is continuous. A continuous attribute exists for the entire span of the linear asset with which it is associated. To satisfy this condition you can create a single attribute record whose start and end measures equal the start and end measures of the linear asset. You can also create multiple attributes records that together cover the entire linear asset without overlapping.  To validate this property, run the Gap and Overlap report. If the check box is cleared (the default), you can apply the attribute to a segment of the linear asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDYOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTYOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDZOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTZOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Start Y Offset Referent",
            "remarks": "The point from which the Start Y Offset is measured (e.g. centerline, edge, etc).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTZOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Start Z Offset Referent",
            "remarks": "Reference point from which the start Z-Offset (distance above or below the linear asset) is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "End Y Offset Referent",
            "remarks": "The point from which the End Y Offset is measured (e.g. centerline, edge).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDZOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "End Z Offset Referent",
            "remarks": "Point from which the Z-Offset is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BASEMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Base Measure",
            "remarks": "Base Measure Units ",
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
            "attributeName": "ENDBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "End Base Measure",
            "remarks": "An absolute measure that is calculated by converting from the end measure using a defined conversion method.  Conversion methods are defined in the Assets application using the Add/Modify Conversions action.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Start Unit of Measure",
            "remarks": "Start Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ENDMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "End Unit of Measure",
            "remarks": "End Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "STARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Start Asset Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the start offset, to determine the start measure for this attribute value.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "End Asset Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the end offset, to determine the end measure for this attribute value.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "STARTOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Start Offset",
            "remarks": "Unit of measure for the offset (before or after) from the start reference point of this attribute.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ENDOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of End Offset",
            "remarks": "Unit of measure for the offset (before or after) from the end reference point of this attribute.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "LINEARASSETSPECID",
            "required": true,
            "persistent": true,
            "title": "Linear Specification Id",
            "remarks": "Part of the primary key to differentiate Linear asset specifications only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the  Asset table, used to find all asset for a given asset specification. (asset.assetnum = assetspec.assetnum).This resulting set will contain zero or one object.",
            "whereClause": "assetnum=:assetnum and classstructureid =:classstructureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this AssetSpec's linear Asset. (assetspec.assetnum=asset.assetnum and assetspec.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the AssetAttribute table, used to find all asset attributes for a given asset specification. (assetattribute.assetattrid = assetspec.assetattrid).  This resulting set will contain zero or one object.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetfspec for its end asset feature. (assetfeature.assetfeatureid=assetspec.endassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:endassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetspec for its start asset feature. (assetfeature.assetfeatureid=assetspec.startassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSPECHIST",
            "target": "ASSETSPECHIST",
            "remarks": "Relationship to the AssetSpecHist table, used to find the asset specification history record for a given asset specification (assetspechist.assetspecid=assetspec.assetspecid and assetspechist.removeddate is null). The resulting set will contain zero or one object.",
            "whereClause": "assetspecid=:assetspecid and removeddate is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find all class specifications for a given asset specification. (classstructure.classstructureid = assetspec.classstructureid and assetattribute.assetattrid = assetspec.assetattrid). This resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid and assetattrid=:assetattrid and (section is null or (section is not null and section=:section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ClassStructure table, used to find all class structures for a given asset specification. (classstructure.classstructureid = assetspec.classstructureid). This resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREUNIT",
            "target": "MEASUREUNIT",
            "remarks": "Relationship to the MeasureUnit table, used to find the MeasureUnit object associated with this AssetSpec. The WHERE clause is: measureunit.measureunitid = assetspec.measureunitid and measureunit.orgid = assetspec.orgid. The resulting set will contain one object",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ASSETSPEC",
            "source": "ASSET",
            "remarks": "Relationship to the AssetSpec table, used to find all specifications for a given asset. (assetspec.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSETSPECCLASS",
            "source": "ASSET",
            "remarks": "Relationship to the AssetSpec table, used to find all asset specifications for the asset.  If the asset a linear asset, it finds all asset specifications between the linear asset's FROMMEASURE and TOMEASURE. FROMMEASURE and TOMEASURE do not apply to non-linear assets.  (assetspec.assetnum=asset.assetnum and assetspec.siteid=asset.siteid and ((assetspec.startmeasure >= asset.frommeasure and assetspec.startmeasure <= asset.tomeasure) or (assetspec.endmeasure >= asset.frommeasure and assetspec.endmeasure <= asset.tomeasure) or (assetspec.startmeasure <= asset.frommeasure and assetspec.endmeasure >= asset.tomeasure) or (assetspec.startmeasure >= asset.tomeasure and assetspec.endmeasure <= asset.frommeasure) or (assetspec.startmeasure is null or assetspec.endmeasure is null)) ). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and classstructureid = :classstructureid and siteid=:siteid and ((startmeasure >= :frommeasure and startmeasure <= :tomeasure) or (endmeasure >= :frommeasure and endmeasure <= :tomeasure) or (startmeasure <= :frommeasure and endmeasure >= :tomeasure) or (startmeasure >= :tomeasure and endmeasure <= :frommeasure) or (startmeasure is null or endmeasure is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSPECDELETE",
            "source": "ASSET",
            "remarks": "Relationship to the AssetSpec table, used to find all specifications for a given asset where classstructureid is not equal to asset's classstructureid. (assetspec.assetnum = asset.assetnum and assetspec.classstructureid != asset.classstructureid). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and classstructureid != :classstructureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSPEC",
            "source": "ASSETATTRIBUTE",
            "remarks": "Relationship to the AssetSpec table, used to find all asset specification records for a given asset attribute. (assetspec.assetattrid = assetattribute.assetattrid). The resulting set will contain zero or more objects.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECALASSETSPEC",
            "source": "ASSETFEATURE",
            "remarks": "Linear Recalibration AssetSpec",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LNRASSETSPEC",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the AssetSpec table, used to find the assetfeature records for the given AssetFeatureId",
            "whereClause": "startassetfeatureid=:assetfeatureid or endassetfeatureid=:assetfeatureid",
            "cardinality": null
        },
        {
            "name": "ASSETSPEC",
            "source": "AUTOATTRUPDATE",
            "remarks": null,
            "whereClause": "assetnum=:asset and assetattrid=:attribute and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSPEC",
            "source": "CLASSSPEC",
            "remarks": "Relationship to the AssetSpec table, used to find any asset specification records derived from the given class specification record. (assetspec.classstructureid = classspec.classstructureid and assetspec.assetattrid = classspec.assetattrid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid and assetattrid=:assetattrid and ((:section is null and section is null) or (:section is not null and section=:section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSPECCLASS",
            "source": "CLASSSPEC",
            "remarks": "Relationship to the AssetSpec table, used to find any asset specification records derived from the given class specification. (assetspec.classstructureid = classspec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid and (:section is null or (:section is not null and :section=section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSPEC",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the AssetSpec table, used to find any asset specification records for the given class structure. (assetspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROTATINGASSETSPEC",
            "source": "ITEMSPEC",
            "remarks": "Relationship to the AssetSpec table, used to find a rotating asset specifiaction for a given item specification. (assetspec.inheritedfromitem = 'yes' and assetspec.classstructureid = itemspec.classstructureid and assetspec.assetattrid = itemspec.assetattrid). The resulting set will contain zero or one object.",
            "whereClause": "inheritedfromitem = 1 and classstructureid=:classstructureid and assetattrid=:assetattrid and assetnum in (select b.assetnum from asset b where b.itemnum = :itemnum and assetspec.assetnum = b.assetnum and assetspec.siteid = b.siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSPEC",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the AssetSpec table, used to find all asset specification records that use the given measure unit. (assetspec.measureunitid = measureunit.measureunitid). The resulting set will contain zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSPEC",
            "source": "MULTIASSETLOCCI",
            "remarks": null,
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}