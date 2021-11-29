mos = {
    "objectName": "INVUSESTATUS",
    "className": "psdi.app.inventory.InvUseStatusSet",
    "description": "Inventory Usage Status History",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "INVUSESTATUSID",
    "primaryKeyColumns": [
        "INVUSESTATUSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "INVUSE",
            "targetObject": "INVUSESTATUS",
            "parentKeys": "INVUSENUM, SITEID",
            "targetKeys": "INVUSENUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Use History",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVUSESTATUS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVUSESTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVUSESTATUS",
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
            "attributeName": "INVUSENUM",
            "required": true,
            "persistent": true,
            "title": "Usage",
            "remarks": "Inventory Usage Number.",
            "sameAsAttribute": "INVUSENUM",
            "sameAsObject": "INVUSE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Idenifier.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Inventory Usage Status.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "INVUSE"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Changed By.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Changed Date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Memo recorded during the status change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVUSESTATUSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "INVUSESTATUS",
            "source": "INVUSE",
            "remarks": "Relationship to the InvUseStatus table, used to find the InvUse record for given invuse number. This relationship will find one or more objects.",
            "whereClause": "invusenum=:invusenum and siteid=:siteid",
            "cardinality": null
        }
    ]
}