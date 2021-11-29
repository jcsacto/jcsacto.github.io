mos = {
    "objectName": "POECOMSTATUS",
    "className": "psdi.app.po.POEcomStatusSet",
    "description": "Holds history of e-commerce communication status",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "POECOMSTATUSID",
    "primaryKeyColumns": [
        "POECOMSTATUSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "POECOMSTATUS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "POECOMSTATUS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Order",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "POECOMSTATUS",
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
            "title": "Comm Status",
            "remarks": "Communication status of the PO",
            "sameAsAttribute": "MNETSENT",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date the status was changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Notes associated with status change",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "POECOMSTATUSID",
            "required": true,
            "persistent": true,
            "title": "POECOMSTATUSID",
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
            "name": "POECOMSTATUS",
            "source": "PO",
            "remarks": "Relationship to the POEcomStatus table, used to find all purchase order ecommerce status records for a given purchase order. (poecomstatus.ponum = po.ponum). The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}