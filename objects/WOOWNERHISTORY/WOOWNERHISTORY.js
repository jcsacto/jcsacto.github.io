mos = {
    "objectName": "WOOWNERHISTORY",
    "className": "psdi.app.workorder.OwnerHistorySet",
    "description": "Work order owner history",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WOOWNERHISTORYID",
    "primaryKeyColumns": [
        "SITEID",
        "WONUM",
        "OWNDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WOOWNERHISTORY",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOOWNERHISTORY",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Owning Work Order",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOOWNERHISTORY",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNERCHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who changed Ownership",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOOWNERHISTORY",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assigned Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOOWNERHISTORY",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group owning Work Order",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOOWNERHISTORY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOOWNERHISTORY",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Ownership History",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WOOWNERHISTORYID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Identifies the work order.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "WOCLASS",
            "required": true,
            "persistent": true,
            "title": "Class",
            "remarks": "Identifies the work order's class.",
            "sameAsAttribute": "WOCLASS",
            "sameAsObject": "WORKTYPE"
        },
        {
            "attributeName": "OWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Owner Group",
            "remarks": "Owner group of the work order.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": true,
            "title": "Owner",
            "remarks": "Owner of the work order",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "OWNDATE",
            "required": true,
            "persistent": true,
            "title": "Own Date",
            "remarks": "Date and time at which the owner or owner group received possession of the work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization of the work order",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "OWNERCHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Owner Change By",
            "remarks": "Person who changed the work order's ownership.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ASSIGNEDOWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Assigned Owner Group",
            "remarks": "Identifies the owner group that is assigned to the  record as of date. ",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "OWNERHISTORY",
            "source": "WORKORDER",
            "remarks": "Relationship to woownerhistory table, used to find all owner history, it will contain zero or more objects.",
            "whereClause": "wonum=:wonum and woclass=:woclass and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}