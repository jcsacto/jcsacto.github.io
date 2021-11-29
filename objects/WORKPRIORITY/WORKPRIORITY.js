mos = {
    "objectName": "WORKPRIORITY",
    "className": "psdi.app.workorder.WorkPrioritySet",
    "description": "The WORKPRIORITY table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WORKPRIORITYID",
    "primaryKeyColumns": [
        "SITEID",
        "PRIORITY"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WORKPRIORITY",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WORKPRIORITY",
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
            "attributeName": "PRIORITY",
            "required": true,
            "persistent": true,
            "title": "Priority",
            "remarks": "Calculated user-defined priority of a work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESPONSETIME",
            "required": true,
            "persistent": true,
            "title": "Response Time",
            "remarks": "Number of user-defined minutes within which a response is required.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "WORKPRIORITYID",
            "required": true,
            "persistent": true,
            "title": "WORKPRIORITYID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "WORKPRIORITY",
            "source": "SITE",
            "remarks": "The relationship from Site to WorkPriority; it fetches all the WorkPriority rows for a given site.  The result set will contain zero or five rows.",
            "whereClause": "siteid = :siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}