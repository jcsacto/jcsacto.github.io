mos = {
    "objectName": "ASSETFEATURESPEC",
    "className": "psdi.app.asset.AssetFeatureSpecSet",
    "description": "The AssetFeatureSpec table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASSETFEATURESPECID",
    "primaryKeyColumns": [
        "LINEARASSETFEATURESPECID",
        "ASSETNUM",
        "FEATURE",
        "ASSETATTRID",
        "SECTION",
        "SITEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "ASSETFEATURESPEC",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "ASSETFEATURESPECID",
            "targetKeys": "ASSETFEATURESPECID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature Specification",
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
            "objectName": "ASSETFEATURESPEC",
            "targetObject": "LNRRECALIBNONAF",
            "parentKeys": "ASSETFEATURESPECID",
            "targetKeys": "ASSETFEATURESPECID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature Specification",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Current Asset''s AssetFeatureSpec records. (Linear)",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "LINKEDTOATTRIBUTE, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, SECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "FEATURE",
            "targetKeys": "ENDFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "FEATURE",
            "targetKeys": "FEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "FEATURE",
            "targetKeys": "STARTFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Feature",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "BASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETFEATURESPEC",
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
            "attributeName": "ASSETFEATURESPECID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "ASSETATTRID",
            "required": false,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Identifies the attribute of a feature.",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset with which the feature is associated ",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User name who last changed record",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
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
            "attributeName": "CLASSSTRUCTUREID",
            "required": true,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Unique ID of the classification structure that holds a list of attributes, for example, Size, Length and Color.",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "CREATEDDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Date when this record was created.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYSEQUENCE",
            "required": true,
            "persistent": true,
            "title": "Display Sequence",
            "remarks": "Sequence in which the attributes will be displayed in the application",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDFEATURE",
            "required": false,
            "persistent": true,
            "title": "End Feature",
            "remarks": "Generic feature that has at least one, labeled feature instance defined for this asset and identified to be used as a reference point.  Labels are required since reference points must be easily identifiable in the field.",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "ENDGISPOINTNUM",
            "required": false,
            "persistent": true,
            "title": "End GIS Point",
            "remarks": "GIS coordinates that designate the end of the point asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "remarks": "Distance used in conjunction with the end reference point to determine where the current attribute value for the feature instance ends.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "FEATURE",
            "required": true,
            "persistent": true,
            "title": "Feature",
            "remarks": "Unique feature identifier.  The feature to which this attribute is applied.",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "LINKEDTOATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Linked To Attribute",
            "remarks": "This attribute is linked to another attribute in this specification.  For example, an attribute 'WIDTH' could identify the attribute 'MATERIAL' in its linked to field to state that the width is related to the material - not the width of the asset itself.",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "LINKEDTOSECTION",
            "required": false,
            "persistent": true,
            "title": "Linked To Section",
            "remarks": "This section is linked to another section in this specification.",
            "sameAsAttribute": "SECTION",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "MEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "Attribute value's unit of measure. This is usually applicable for numeric attributes ",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "NUMVALUE",
            "required": false,
            "persistent": true,
            "title": "Numeric Value",
            "remarks": "Numeric value in entered units ",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "NUMERICDOMAIN"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Orgnization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "REMOVEDDATE",
            "required": false,
            "persistent": true,
            "title": "Removed Date",
            "remarks": "Date when this record was removed from the system.  When a user-identified column in this table is modified, Maximo will place a Removed Date on the existing record and create a new copy - with changes - and give it a Created Date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SECTION",
            "required": false,
            "persistent": true,
            "title": "Section",
            "remarks": "Section for a Group of Attributes",
            "sameAsAttribute": "SECTION",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "STARTFEATURE",
            "required": false,
            "persistent": true,
            "title": "Start Feature",
            "remarks": "Generic feature that has at least one, labeled feature instance defined for this asset and identified to be used as a reference point.  Labels are required since reference points must be easily identifiable in the field.",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Start Feature",
            "remarks": "Site where the asset, with which this feature is associated, is located.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "STARTGISPOINTNUM",
            "required": false,
            "persistent": true,
            "title": "Start GIS Point",
            "remarks": "GIS point where the attribute is initially encountered.  Can be solely for information purposes, or used to support an interface with a Geographic Information System.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "Start Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where the current value for this attribute is initially encountered.  This can be manually entered or calculated by entering start reference point and start offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Offset",
            "remarks": "Distance used in conjunction with the start reference point to determine where the current attribute value for the feature instance begins.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "CLASSSPECID",
            "required": false,
            "persistent": true,
            "title": "ClassSpec Unique ID",
            "remarks": "The Unique ID of the Classspec object this work order spec gets attribute from",
            "sameAsAttribute": "CLASSSPECID",
            "sameAsObject": "CLASSSPEC"
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
            "attributeName": "REFOBJECTID",
            "required": true,
            "persistent": true,
            "title": "Referenced Object",
            "remarks": "Unique ID of the object that created this attribute.  The name of the object is held in REFOBJECTNAME.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Referenced Object Name",
            "remarks": "Name of the object that created this attribute.  In this case, ASSETFEATURE ",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
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
            "attributeName": "STARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Start Asset Feature unique identifier",
            "remarks": "A previously defined feature or relationship used, in conjunction with the start offset, to determine the start measure for this attribute value.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "End Asset Feature Unique Identifier",
            "remarks": "A previously defined feature or relationship used, in conjunction with the end offset, to determine the end measure for this attribute value.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "STARTFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "Where the value of the feature instance attribute changes in terms of a readily identifiable reference point (e.g. Mile Post 27).  The start measure of the start reference point + start offset = start measure for the current attribute value.   ",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "Where the value of the feature instance attribute changes in terms of a readily identifiable reference point (e.g. Mile Post 27).  The end measure of the end reference point + end offset = end measure for the current attribute value.   ",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Asset Feature ID",
            "remarks": "Unique identifier for the feature instance that this attribute defines.",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
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
            "remarks": "Unit of measure for the starting measure of this attribute.",
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
            "remarks": "Unit of measure for the starting measure of this attribute.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
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
            "attributeName": "STARTYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Start Y Offset Referent",
            "remarks": "Reference point from which the start Y-Offset (measure to the left or right of the linear asset) is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "End Y Offset Referent",
            "remarks": "Point from which the Y-Offset is measured.  ",
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
            "attributeName": "ENDZOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "End Z Offset Referent",
            "remarks": "Point from which the Z-Offset is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "ENDYOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
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
            "attributeName": "ENDZOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LINEARASSETFEATURESPECID",
            "required": true,
            "persistent": true,
            "title": "Linear Feature Specification Id",
            "remarks": "Part of the primary key to differentiate Linear asset feature specifications only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this AssetFeatureSpec's linear Asset. (assetfeaturespec.assetnum=asset.assetnum and assetfeaturespec.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given assetfeaturespec(assetfeaturespec.assetattrid=assetattribute.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid = :assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEASPECHIST",
            "target": "ASSETFEASPECHIST",
            "remarks": "Relationship to the AssetFeaSpecHist table, used to find the asset feature specification history record for a given asset feature specification (assetfeaspechist.assetfeaturespecid=assetfeaturespec.assetfeaturespecid and assetfeaspechist.removeddate is null). The resulting set will contain zero or one object.",
            "whereClause": "assetfeaturespecid=:assetfeaturespecid and removeddate is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LNRASSETFEATURESPEC",
            "target": "ASSETFEATURE",
            "remarks": "To find Asset Fetaure record for the given Asset Feature Specification record.",
            "whereClause": "assetfeatureid=:refobjectid and classstructureid=:classstructureid",
            "cardinality": null
        },
        {
            "name": "STARTASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetfeaturespec for its start asset feature. (assetfeature.asseetfeatureid=assetfeaturespec.startassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetfeaturespec for its end asset feature. (assetfeature.asseetfeatureid=assetfeaturespec.endassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:endassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec records for a given assetfeaturespec. (assetfeaturespec.assetattrid=classspec.assetattrid and assetfeaturespec.classstructureid=classspec.classstructureid and assetfeaturespec.sectiond=classspec.section.) The resulting set will contain zero or more objects.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURE",
            "target": "FEATURES",
            "remarks": "Relationship to the Features table, used to find the feature for this AssetFeatureSpec.",
            "whereClause": "feature=:feature",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ASSETFEATURESPECS",
            "source": "ASSET",
            "remarks": "Relationship from an asset to all of the feature specifications",
            "whereClause": "assetnum=:assetnum and ((startmeasure >= :frommeasure and startmeasure <= :tomeasure) or (endmeasure >= :frommeasure and endmeasure <= :tomeasure) or (startmeasure <= :frommeasure and endmeasure >= :tomeasure) or (startmeasure >= :tomeasure and endmeasure <= :frommeasure) or (startmeasure is null or endmeasure is null))",
            "cardinality": null
        },
        {
            "name": "ASSETFEATURESPEC",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeaturespec table, used to find the assetfeaturespec records for a given assetfeature. (assetfeature.assetfeatureid=assetfeaturespec.refobjectid and assetfeaturespec.refobjectname='ASSETFEATURE') The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid = :assetfeatureid and refobjectname = 'ASSETFEATURE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURESPECCLASS",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeaturespec table, used to find the assetfeaturespec records for a given assetfeature (assetfeature.assetfeatureid=assetfeaturespec.refobjectid and assetfeaturespec.refobjecti='ASSETFEATURE' and assetfeature.classstructureid=assetfeaturespec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid = :assetfeatureid and refobjectname = 'ASSETFEATURE' and classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LNRASSETFEATSPEC",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the AssetFeatureSpec table, used to find the assetfeature records for the given AssetFeatureId",
            "whereClause": "startassetfeatureid=:assetfeatureid or endassetfeatureid=:assetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECALASSETFEATSPEC",
            "source": "ASSETFEATURE",
            "remarks": "Linear Recalibration for Asset Feature Spec",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        }
    ]
}