mos = {
    "objectName": "LABORQUALSTATUS",
    "className": "psdi.app.labor.LaborQualStatusSet",
    "description": "Status History for Labor Qualification",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LABORQUALSTATUSID",
    "primaryKeyColumns": [
        "ORGID",
        "LABORCODE",
        "QUALIFICATIONID",
        "CHANGEDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LABOR",
            "targetObject": "LABORQUALSTATUS",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor Qualification Status History",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LABORQUALSTATUS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LABORQUALSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "QUALIFICATION",
            "targetObject": "LABORQUALSTATUS",
            "parentKeys": "ORGID, QUALIFICATIONID",
            "targetKeys": "ORGID, QUALIFICATIONID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LABORCODE",
            "required": true,
            "persistent": true,
            "title": "Labor",
            "remarks": "Labor Code",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "QUALIFICATIONID",
            "required": false,
            "persistent": true,
            "title": "Qualification",
            "remarks": "ID of the qualification",
            "sameAsAttribute": "QUALIFICATIONID",
            "sameAsObject": "QUALIFICATION"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization of the Labor",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Labor Qual History Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Status Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Status Memo",
            "remarks": "Memo",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date Changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Changed By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "LABORQUALSTATUSID",
            "required": true,
            "persistent": true,
            "title": "LABORQUALSTATUSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LABORQUAL",
            "target": "LABORQUAL",
            "remarks": "Relationship to the LaborQual table where labor, qualification, and org match.  Returns 0 or more values",
            "whereClause": "laborcode=:laborcode and qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LABORQUALSTATUS",
            "source": "LABOR",
            "remarks": "Returns a set of the laborqualstatuses associated with this labor, where laborcode=laborcode.  This will return 0 or more objects.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORQUALSTATUS",
            "source": "LABORQUAL",
            "remarks": "Relationship to the LaborQualStatus table where labor, qualification, and org match.  Returns 0 or more values",
            "whereClause": "laborcode=:laborcode and qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}