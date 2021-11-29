mos = {
    "objectName": "CITYPESTATUS",
    "className": "psdi.app.citype.CdmCiTypeStatusSet",
    "description": "CI Type Status",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CITYPESTATUSID",
    "primaryKeyColumns": [
        "CITYPESTATUSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CDMCITYPES",
            "targetObject": "CITYPESTATUS",
            "parentKeys": "CDMCITYPESID",
            "targetKeys": "CDMCITYPESID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CITYPESTATUS",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CITYPESTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CDMCITYPESID",
            "required": false,
            "persistent": true,
            "title": "CI Type",
            "remarks": "CI Type",
            "sameAsAttribute": "CDMCITYPESID",
            "sameAsObject": "CDMCITYPES"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo For CI Type Status",
            "remarks": "Memo For CI Type Status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Date-Time Status Was Changed",
            "remarks": "Date-Time Status Was Changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDBY",
            "required": false,
            "persistent": true,
            "title": "Name Of User That Changed Status",
            "remarks": "Changed By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CITYPESTATUSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Classification",
            "remarks": "Classification",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CITYPESTATUS",
            "source": "CDMCITYPES",
            "remarks": "Relation from CdmCiTypes to Citypestatus object",
            "whereClause": "cdmcitypesid=:cdmcitypesid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "CDMCITYPES",
            "remarks": "Relationship to SYNONYMDOMAIN.",
            "whereClause": "domainid='CITYPESTATUS' and value=:status",
            "cardinality": "UNDEFINED"
        }
    ]
}