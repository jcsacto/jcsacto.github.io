mos = {
    "objectName": "CISPEC",
    "className": "psdi.app.ci.CISpecSet",
    "description": "Configuration Items Specification Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CISPECID",
    "primaryKeyColumns": [
        "CINUM",
        "ASSETATTRID",
        "SECTION"
    ],
    "logicalRelationships": [
        {
            "objectName": "CISPEC",
            "targetObject": "CISPECHIS",
            "parentKeys": "CISPECID",
            "targetKeys": "CISPECID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Configuration Item Specification",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTCI",
            "targetObject": "CISPEC",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "CI",
            "targetObject": "CISPEC",
            "parentKeys": "CIID",
            "targetKeys": "REFOBJECTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Configuration Item Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CISPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "CISPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CISPEC",
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
            "attributeName": "CISPECID",
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
            "required": true,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Asset attribute identifier",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "CINUM",
            "required": true,
            "persistent": true,
            "title": "Configuration Item",
            "remarks": "Authorized CI Identifier",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
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
            "remarks": "Classification Structure identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
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
            "remarks": "Entered units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
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
            "attributeName": "SECTION",
            "required": false,
            "persistent": true,
            "title": "Section",
            "remarks": "Section for a group of attributes",
            "sameAsAttribute": "SECTION",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "REFOBJECTID",
            "required": false,
            "persistent": true,
            "title": "Reference Object ID",
            "remarks": "Reference Object ID",
            "sameAsAttribute": "CIID",
            "sameAsObject": "CI"
        },
        {
            "attributeName": "REFOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Reference Object Name",
            "remarks": "Reference Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CLASSSPECID",
            "required": false,
            "persistent": true,
            "title": "ClassSpec ID",
            "remarks": "ClassSpec Unique ID",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSETATTRIBUTE",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given configuration item (cispec.assetattrid=assetattribute.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid = :assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CISPECHIS",
            "target": "CISPECHIS",
            "remarks": "Relationship to the CISpecHis table, used to find the CI specification history record for a given CI specification (cispechis.cispecid=:cispec.cispecid and cispechis.enddate is null). The resulting set will contain zero or one object.",
            "whereClause": "cispecid=:cispecid and enddate is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given cispec. (cispec.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CISPEC",
            "source": "AUTOATTRUPDATE",
            "remarks": null,
            "whereClause": "cinum=:cinum and assetattrid=:attribute",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CISPEC",
            "source": "CI",
            "remarks": "Relationship to the cispec table, used to find the cispec records for a given ci (ci.ciid=cispec.refobjectid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:ciid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CISPECCLASS",
            "source": "CI",
            "remarks": "Relationship to the CISpec table, used to find all specifications for a given CI with a given classstructureid.",
            "whereClause": "cinum=:cinum and classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CISPEC",
            "source": "MULTIASSETLOCCI",
            "remarks": null,
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        }
    ]
}