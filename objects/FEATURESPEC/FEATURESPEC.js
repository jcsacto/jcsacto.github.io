mos = {
    "objectName": "FEATURESPEC",
    "className": "psdi.app.feature.FeatureSpecSet",
    "description": "The FeatureSpec Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "FEATURESPECID",
    "primaryKeyColumns": [
        "FEATURE",
        "ASSETATTRID",
        "SECTION"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "FEATURESPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "FEATURESPEC",
            "parentKeys": "FEATURE",
            "targetKeys": "FEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Feature",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "FEATURESPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "FEATURESPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "FEATURESPECID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique ID for the FEATURESPEC table ",
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
            "required": true,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Identifies the attribute of a feature.",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
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
            "remarks": "Sequence in which the attributes will be displayed in the application.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "title": "Linked to Attribute",
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
            "attributeName": "REMOVEDDATE",
            "required": false,
            "persistent": true,
            "title": "Removed Date",
            "remarks": "Date when this record was removed from the system.",
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
            "attributeName": "REFOBJECTID",
            "required": true,
            "persistent": true,
            "title": "x",
            "remarks": "Unique ID of the object that created this attribute.  The name of the object is held in REFOBJECTNAME.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Referenced Object Name",
            "remarks": "Name of the object that created this attribute.  In this case, FEATURES ",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
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
            "attributeName": "TABLEVALUE",
            "required": false,
            "persistent": true,
            "title": "Table Value",
            "remarks": "The value from the table specified in the DOMAIN where the domaintype and datatype is TABLE.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FEATURESID",
            "required": false,
            "persistent": true,
            "title": "Feature ID",
            "remarks": "Identifies the Features record. This value must be unique for all Features records.",
            "sameAsAttribute": "FEATURESID",
            "sameAsObject": "FEATURES"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSETATTRIBUTE",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given featurespec. (featurespec.assetattrid=assetattribute.assetattrid) The resulting set will contain one object.",
            "whereClause": "assetattrid= :assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec records for a given feature. (featurespec.assetattrid=classspec.assetattrid and featurespec.classstructureid=classspec.classstructureid and featurespec.sectiond=classspec.section.) The resulting set will contain zero or more objects.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREUNIT",
            "target": "MEASUREUNIT",
            "remarks": "Relationship to the measureunit table, used to find the measureunit record for a given featurespec. (featurespec.measureunitid=assetattribute.measureunitid) The resulting set will contain zero or one object.",
            "whereClause": "measureunitid= :measureunitid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "FEATURESPEC",
            "source": "FEATURES",
            "remarks": "Relationship to the featurespec table, used to find the featurespec records for a given feature. (feature.feature=featurespec.feature and feature.classstructureid=featurespec.classstructureid) The resulting set will contain zero or more objects.",
            "whereClause": "feature=:feature and classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURESSPEC",
            "source": "FEATURES",
            "remarks": "Relationship to the featurespec table, used to find the featurespec records for a given feature. (features.featuresid=featurespec.refobjectid) The resulting set will contain zero or more object.",
            "whereClause": "refobjectid=:featuresid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURESSPECCLASS",
            "source": "FEATURES",
            "remarks": "Relationship to the featurespec table, used to find the featurespec records for a given feature. (features.feature=featurespec.feature and features.classstructureid=featurespec.classstructureid) The resulting set will contain zero or more object.",
            "whereClause": "feature= :feature and classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        }
    ]
}