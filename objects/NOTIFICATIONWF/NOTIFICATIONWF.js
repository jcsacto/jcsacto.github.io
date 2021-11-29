mos = {
    "objectName": "NOTIFICATIONWF",
    "className": "psdi.workflow.virtual.NotificationWFSet",
    "description": "Parameters for a workflow notification.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SUBJECT",
            "required": false,
            "persistent": false,
            "title": "Subject",
            "remarks": "Subject line of the email message for the notification.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MESSAGE",
            "required": false,
            "persistent": false,
            "title": "Message",
            "remarks": "Body of the email message for the notification.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONID",
            "required": false,
            "persistent": false,
            "title": "obsolete",
            "remarks": "obsolete",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "TEMPLATEID",
            "required": false,
            "persistent": false,
            "title": "Communication Template",
            "remarks": "Identifies the Communication Template to use to email.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "SENDTO",
            "required": true,
            "persistent": false,
            "title": "Send To",
            "remarks": "Where to send the notification email",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMMTEMPLATE",
            "target": "COMMTEMPLATE",
            "remarks": "Gets the communication template used by a notification dialog. (templateid = :templateid). Empty or one member set.",
            "whereClause": "templateid = :templateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "target": "LABOR",
            "remarks": null,
            "whereClause": "laborcode = :laborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "This relationship gets the person details for the person to notify. (person = :personid). One member set.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "NOTIFICATIONS",
            "source": "REASSIGNWF",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}