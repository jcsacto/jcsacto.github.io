mos = {
    "objectName": "ESCSTATUS",
    "className": "psdi.app.escalation.EscalationStatusSet",
    "description": "Status Info. Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ESCSTATUSID",
    "primaryKeyColumns": [
        "ESCSTATUSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ESCALATION",
            "targetObject": "ESCSTATUS",
            "parentKeys": "ESCALATION",
            "targetKeys": "ESCALATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ESCSTATUS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object the escalation executes on.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ESCSTATUS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ESCSTATUS",
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
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization ID",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site ID",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Staus",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "RECORDSPROCESSED",
            "required": true,
            "persistent": true,
            "title": "Records Processed",
            "remarks": "Records Processed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSMEMO",
            "required": false,
            "persistent": true,
            "title": "Status Memo",
            "remarks": "Status Memo",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFPOINTID",
            "required": true,
            "persistent": true,
            "title": "REFPOINTID",
            "remarks": "Reference Point ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESCALATION",
            "required": true,
            "persistent": true,
            "title": "Escalation",
            "remarks": "Escalation",
            "sameAsAttribute": "ESCALATION",
            "sameAsObject": "ESCALATION"
        },
        {
            "attributeName": "ESCSTATUSID",
            "required": true,
            "persistent": true,
            "title": "UNIQUEID",
            "remarks": "UNIQUEID",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "ESCSTATUS",
            "source": "ESCALATION",
            "remarks": "Relationship to get the status records associated with the escalation.",
            "whereClause": "escalation=:escalation",
            "cardinality": "UNDEFINED"
        }
    ]
}