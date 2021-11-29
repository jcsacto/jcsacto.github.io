mos = {
    "objectName": "ESCNOTIFICATION",
    "className": "psdi.app.escalation.EscalationNotificationSet",
    "description": "This table maps a Reference point to a communicati",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ESCNOTIFICATIONID",
    "primaryKeyColumns": [
        "ESCALATION",
        "REFPOINTNUM",
        "TEMPLATEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "ESCNOTIFICATION",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "TEMPLATEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CommTemplate used to send a notification from the escalation.",
            "longDescription": null
        },
        {
            "objectName": "ESCALATION",
            "targetObject": "ESCNOTIFICATION",
            "parentKeys": "ESCALATION",
            "targetKeys": "ESCALATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Escalation",
            "longDescription": null
        },
        {
            "objectName": "ESCREFPOINT",
            "targetObject": "ESCNOTIFICATION",
            "parentKeys": "REFPOINTNUM, ESCALATION",
            "targetKeys": "REFPOINTNUM, ESCALATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Escalation Reference Point",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TEMPLATEID",
            "required": true,
            "persistent": true,
            "title": "Template",
            "remarks": "Identifies the communication template that is associated with one or more notifications. Click the Detail Menu button to choose a communication template or go to the Communications Template application to create one. If you do not apply a communication template, you can create a free-form notification by completing the Role/Recipient, Subject, and Message fields.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
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
            "attributeName": "ROLE",
            "required": false,
            "persistent": false,
            "title": "Role/Recipient",
            "remarks": "Person or role to which the notification is sent when the escalation is triggered. By default, the Role/Recipient value is populated from the communication template that is applied. If you do not apply a communication template, you can create a free-form notification and enter a role/recipient manually. Click the Select Value button to choose a person or role. If you are creating a free-form notification, the Select Value list displays only roles.",
            "sameAsAttribute": "TOLIST",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "SUBJECT",
            "required": false,
            "persistent": false,
            "title": "Subject",
            "remarks": "Displays the information for the Subject line of the e-mail notification that is sent when the escalation is triggered. By default, the Subject field is populated from the communication template that is applied. If you do not apply a communication template, you can create a free-form notification and enter a subject manually.",
            "sameAsAttribute": "SUBJECT",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "MESSAGE",
            "required": false,
            "persistent": false,
            "title": "Message",
            "remarks": "Content of the e-mail notification that is sent when the escalation is triggered. By default, the Message is populated from the communication template that is applied. If you do not apply a communication template, you can create a free-form notification and enter a message manually.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TMPID",
            "required": false,
            "persistent": false,
            "title": "TempID",
            "remarks": "TempId",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "ESCNOTIFICATIONID",
            "required": true,
            "persistent": true,
            "title": "Unique ID",
            "remarks": "Unique ID",
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
            "attributeName": "REFPOINTNUM",
            "required": true,
            "persistent": true,
            "title": "Reference Point Number",
            "remarks": "Reference Point Number",
            "sameAsAttribute": "REFPOINTNUM",
            "sameAsObject": "ESCREFPOINT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ESCCOMM",
            "target": "COMMTEMPLATE",
            "remarks": "Relationship for comm templates",
            "whereClause": "templateid =:templateid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ESCNOTIFICATION",
            "source": "ESCREFPOINT",
            "remarks": "Relationship for notifications",
            "whereClause": "refpointid =:refpointid",
            "cardinality": "UNDEFINED"
        }
    ]
}