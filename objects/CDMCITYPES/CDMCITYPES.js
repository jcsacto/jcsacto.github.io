mos = {
    "objectName": "CDMCITYPES",
    "className": "psdi.app.citype.CdmCiTypeSet",
    "description": "Table for viewing and management of CI type data",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CDMCITYPESID",
    "primaryKeyColumns": [
        "CDMCITYPESID"
    ],
    "logicalRelationships": [
        {
            "objectName": "CDMCITYPES",
            "targetObject": "CITYPESTATUS",
            "parentKeys": "CDMCITYPESID",
            "targetKeys": "CDMCITYPESID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CDMCITYPES",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CDMCITYPESID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": true,
            "persistent": true,
            "title": "Classification",
            "remarks": "Classification",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "TOPLEVELCI",
            "required": true,
            "persistent": true,
            "title": "Top Level CI Type",
            "remarks": "Top Level CI Type?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "CI Type Status",
            "remarks": "CI Type Status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDATE",
            "required": false,
            "persistent": true,
            "title": "Date Created",
            "remarks": "Date Created",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISCOLLECTION",
            "required": true,
            "persistent": true,
            "title": "Collection",
            "remarks": "Specifies if the the CI Type defines a collection.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISFUNCTION",
            "required": true,
            "persistent": true,
            "title": "Function",
            "remarks": "Specifies if the the CI Type defines a function.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ACTCI",
            "target": "ACTCI",
            "remarks": "Relation from CdmCiTypes to ACTCI table.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CITYPECHANGESTATUS",
            "target": "CITYPECNGSTATUS",
            "remarks": "Relationship to the non-persistent CITYPECHANGESTATUS table. (There is no where clause for non-persistent objects).",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CITYPESTATUS",
            "target": "CITYPESTATUS",
            "remarks": "Relation from CdmCiTypes to Citypestatus object",
            "whereClause": "cdmcitypesid=:cdmcitypesid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "CITYPESTATUS",
            "remarks": "Relationship to SYNONYMDOMAIN.",
            "whereClause": "domainid='CITYPESTATUS' and value=:status",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ClassStructure table. The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSUSEWITH",
            "target": "CLASSUSEWITH",
            "remarks": "Relationship to the ClassUseWith table, used to find classusewith for a given CIType.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}