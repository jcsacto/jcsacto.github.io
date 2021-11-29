mos = {
    "objectName": "CISPECHIS",
    "className": "psdi.app.ci.CISpecHisSet",
    "description": "CI Specifications History Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CISPECHISID",
    "primaryKeyColumns": [
        "CINUM",
        "ASSETATTRID",
        "SECTION",
        "STARTDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTCI",
            "targetObject": "CISPECHIS",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "CISPEC",
            "targetObject": "CISPECHIS",
            "parentKeys": "CISPECID",
            "targetKeys": "CISPECID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Configuration Item Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CISPECHIS",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CISPECHIS",
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
            "attributeName": "CISPECHISID",
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
            "remarks": "Attribute value in alphanumeric form",
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
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User name who last changed record",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
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
            "attributeName": "MEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "Attribute value's unit of measure. This is usually applicable for numeric attributes",
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
            "attributeName": "CISPECID",
            "required": false,
            "persistent": true,
            "title": "Cl Specification ID",
            "remarks": "CI Specification Unique ID",
            "sameAsAttribute": "CISPECID",
            "sameAsObject": "CISPEC"
        },
        {
            "attributeName": "STARTDATE",
            "required": true,
            "persistent": true,
            "title": "Start Date",
            "remarks": "The Date when this attribute value was entered",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "The Date when this attribute value was modified",
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
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given configuration item specification history (cispechis.assetattrid=assetattribute.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid = :assetattrid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CISPECHIS",
            "source": "CI",
            "remarks": "Relationship to the CISpecHis table, used to find cispechis records for a given CI",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCISPECHIS",
            "source": "CI",
            "remarks": "Relationship to the cispechis table, used to find the specifications history records for a given ci (cispechis.cinum=ci.cinum and ((cispechis.enddate is null and cispechis.startdate <=ci.asofdate) or (cispechis.enddate is not null and ci.asofdate between cispechis.startdate and cispechis.enddate))). The resulting set will contain zero or more objects.",
            "whereClause": "cinum=:cinum and ((enddate is null and startdate<=:asofdate) or (enddate is not null and :asofdate between startdate and enddate))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CISPECHIS",
            "source": "CISPEC",
            "remarks": "Relationship to the CISpecHis table, used to find the CI specification history record for a given CI specification (cispechis.cispecid=:cispec.cispecid and cispechis.enddate is null). The resulting set will contain zero or one object.",
            "whereClause": "cispecid=:cispecid and enddate is null",
            "cardinality": "UNDEFINED"
        }
    ]
}