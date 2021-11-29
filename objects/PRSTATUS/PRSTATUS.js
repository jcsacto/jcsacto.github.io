mos = {
    "objectName": "PRSTATUS",
    "className": "psdi.app.pr.PRStatusSet",
    "description": "The PRSTATUS Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PRSTATUSID",
    "primaryKeyColumns": [
        "PRSTATUSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PRSTATUS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PRSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "PRSTATUS",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PR Status History",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PRSTATUS",
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
            "attributeName": "PRNUM",
            "required": true,
            "persistent": true,
            "title": "PR",
            "remarks": "Purchase Requisition Number",
            "sameAsAttribute": "PRNUM",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date-Time Status Was Changed",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Purchase Requisition Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Name Of User That Changed Status",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Status Memo",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
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
            "attributeName": "PRSTATUSID",
            "required": true,
            "persistent": true,
            "title": "PRSTATUSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PRSTATUS",
            "source": "PR",
            "remarks": "Relationship to the PRStatus table, used to find all status records for a given purchase requisition. (prstatus.prnum = pr.prnum). The resulting set will contain zero or more objects.",
            "whereClause": "prnum=:prnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}