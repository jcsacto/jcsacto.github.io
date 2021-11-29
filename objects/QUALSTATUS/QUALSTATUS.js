mos = {
    "objectName": "QUALSTATUS",
    "className": "psdi.app.qual.QualStatusSet",
    "description": "Qualification Status History",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "QUALSTATUSID",
    "primaryKeyColumns": [
        "ORGID",
        "QUALIFICATIONID",
        "CHANGEDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "QUALSTATUS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "QUALSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "QUALIFICATION",
            "targetObject": "QUALSTATUS",
            "parentKeys": "ORGID, QUALIFICATIONID",
            "targetKeys": "ORGID, QUALIFICATIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "QUALIFICATIONID",
            "required": true,
            "persistent": true,
            "title": "Qualification",
            "remarks": "Qualification ID",
            "sameAsAttribute": "QUALIFICATIONID",
            "sameAsObject": "QUALIFICATION"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Status Date",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "LABORQUALSTATUS"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Memo",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Changed Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "changed by",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "QUALSTATUSID",
            "required": true,
            "persistent": true,
            "title": "QUALSTATUSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "QUALSTATUS",
            "source": "QUALIFICATION",
            "remarks": "Relationship to the QualStatus history table on qualificationid and orgid.(qualstatus.qualificationid=qualification.qualificationid and qualstatus.orgid=qualification.orgid.)  This will return 0 or more objects.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}