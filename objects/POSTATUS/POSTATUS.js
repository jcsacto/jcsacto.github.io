mos = {
    "objectName": "POSTATUS",
    "className": "psdi.app.po.POStatusSet",
    "description": "The POSTATUS Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "POSTATUSID",
    "primaryKeyColumns": [
        "POSTATUSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "POSTATUS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "POSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "POSTATUS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO Status History",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "POSTATUS",
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
            "attributeName": "PONUM",
            "required": true,
            "persistent": true,
            "title": "PO",
            "remarks": "Purchase Order Number",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Purchase Order Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date-Time Status Is Changed",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "PO"
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
            "attributeName": "POSTATUSID",
            "required": true,
            "persistent": true,
            "title": "POSTATUSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the purchase order. Indicates how many times a purchase order has been revised.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "POSTATUS",
            "source": "PO",
            "remarks": "Relationship to the POStatus table, used to find all status records for a given purchase order. (postatus.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and revisionnum=:revisionnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}