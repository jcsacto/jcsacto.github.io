mos = {
    "objectName": "FAILUREREMARK",
    "className": "psdi.app.workorder.FailureRemarkSet",
    "description": "The FAILUREREMARK Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "FAILUREREMARKID",
    "primaryKeyColumns": [
        "SITEID",
        "WONUM",
        "TICKETID",
        "TICKETCLASS"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "FAILUREREMARK",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "FAILUREREMARK",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "FAILUREREMARK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "TICKET",
            "targetObject": "FAILUREREMARK",
            "parentKeys": "CLASS, TICKETID",
            "targetKeys": "TICKETCLASS, TICKETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Remark linked to a ticket.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "FAILUREREMARK",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Remark linked to a work order.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Work Order Number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "User-defined information about the selected failure report, elaborating or providing additional details about the failure and/or solution. When the user makes a remark and saves the work order, Maximo enters the current date in the Remark Date field by default.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERDATE",
            "required": false,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "Remark Entry Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "TICKETID",
            "required": false,
            "persistent": true,
            "title": "Ticket ",
            "remarks": "Ticket Identifier",
            "sameAsAttribute": "TICKETID",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "TICKETCLASS",
            "required": false,
            "persistent": true,
            "title": "Ticket Class",
            "remarks": "class of the ticket",
            "sameAsAttribute": "CLASS",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Failure Report Remark",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FAILUREREMARKID",
            "required": true,
            "persistent": true,
            "title": "FAILUREREMARKID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "FAILUREREMARK",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "ticketid=:ticketid and ticketclass=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_FAILUREREMARK",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILUREREMARK",
            "source": "WORKORDER",
            "remarks": "Relationship to the FailureRemark table, used to find the failureremark for a work order. (FailureRemark.wonum = Workorder.wonum). This resulting set will contain zero or one object.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}