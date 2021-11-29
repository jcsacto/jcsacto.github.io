mos = {
    "objectName": "ESCREPEATTRACK",
    "className": "psdi.app.escalation.EscalationRepeatTrackingSet",
    "description": "Repeat Tracking",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "ESCALATION",
        "REFPOINTID",
        "OBJECTNAME",
        "OWNERID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ESCALATION",
            "targetObject": "ESCREPEATTRACK",
            "parentKeys": "ESCALATION",
            "targetKeys": "ESCALATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Escalation",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ESCREPEATTRACK",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object the escalation executes on.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "OWNERID",
            "required": true,
            "persistent": true,
            "title": "OwnerID",
            "remarks": "Owner ID",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "REFPOINTID",
            "required": true,
            "persistent": true,
            "title": "REFPOINTID",
            "remarks": "Ref rernce Point ID",
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
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "ESCREPEATTRACK",
            "source": "ESCALATION",
            "remarks": "Relationship for repeattracking",
            "whereClause": "escalation =:escalation",
            "cardinality": "UNDEFINED"
        }
    ]
}