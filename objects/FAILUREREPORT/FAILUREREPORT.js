mos = {
    "objectName": "FAILUREREPORT",
    "className": "psdi.app.workorder.FailureReportSet",
    "description": "The FAILUREREPORT Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "FAILUREREPORTID",
    "primaryKeyColumns": [
        "FAILUREREPORTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "FAILUREREPORT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Reports for an asset.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "FAILUREREPORT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Code description.",
            "longDescription": null
        },
        {
            "objectName": "FAILURELIST",
            "targetObject": "FAILUREREPORT",
            "parentKeys": "ORGID, FAILURELIST",
            "targetKeys": "ORGID, LINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure List hierarchy position.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "FAILUREREPORT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "FAILUREREPORT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "TICKET",
            "targetObject": "FAILUREREPORT",
            "parentKeys": "CLASS, TICKETID",
            "targetKeys": "TICKETCLASS, TICKETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Report attached to a ticket.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "FAILUREREPORT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Report attached to a work order.",
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
            "attributeName": "FAILURECODE",
            "required": true,
            "persistent": true,
            "title": "Failure Code",
            "remarks": "Identifies the problem, cause or remedy.",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LINENUM",
            "required": true,
            "persistent": true,
            "title": "Line",
            "remarks": "Failure List Number",
            "sameAsAttribute": "FAILURELIST",
            "sameAsObject": "FAILURELIST"
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Identifies the type of failure code, such as problem, cause, or remedy.",
            "sameAsAttribute": "TYPE",
            "sameAsObject": "FAILURELIST"
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
            "attributeName": "PARENT",
            "required": false,
            "persistent": false,
            "title": "Parent",
            "remarks": "Parent Failure Report Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FAILUREREPORTID",
            "required": true,
            "persistent": true,
            "title": "FAILUREREPORTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "FAILURECODE",
            "target": "FAILURECODE",
            "remarks": "Relationship to the FailureCode table, used to find the failurecode for a given failurereport. (FailureCode.failurecode = FailureReport.Failurecode). This resulting set will contain one object.",
            "whereClause": "failurecode=:failurecode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILURELIST",
            "target": "FAILURELIST",
            "remarks": "Relationship to the FailureList table, used to find the failurelist for a given failurereport. (Failurelist.parent = FailureReport.linenum). This resulting set will contain zero or more objects.",
            "whereClause": "parent=:linenum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "FAILUREREPORT",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "ticketid=:ticketid and ticketclass=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILUREREPORT",
            "source": "WORKORDER",
            "remarks": "Relationship to the FailureReport table, used to find the failurereport set for a work order. (FailureReport.wonum = Workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}