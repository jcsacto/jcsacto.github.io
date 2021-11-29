mos = {
    "objectName": "MAXMESSAGES",
    "className": "psdi.app.appsetup.MaxMessagesSet",
    "description": "Translatable text for maximo user messages",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXMESSAGESID",
    "primaryKeyColumns": [
        "MSGKEY",
        "MSGGROUP"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXMESSAGES",
            "targetObject": "OSLCERRORMAP",
            "parentKeys": "MSGKEY, MSGGROUP",
            "targetKeys": "ERRORKEY, ERRORGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo Message",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "MSGKEY",
            "required": true,
            "persistent": true,
            "title": "Message Key",
            "remarks": "Key for the message",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGGROUP",
            "required": true,
            "persistent": true,
            "title": "Message Group",
            "remarks": "Group for the message",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUE",
            "required": true,
            "persistent": true,
            "title": "Value",
            "remarks": "Text to display for the message",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TITLE",
            "required": false,
            "persistent": true,
            "title": "Title",
            "remarks": "Title for the message",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYMETHOD",
            "required": true,
            "persistent": true,
            "title": "Display Method",
            "remarks": "Display method of the message (MSGBOX, STATUS etc.)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPTIONS",
            "required": true,
            "persistent": true,
            "title": "Options",
            "remarks": "Logical ORing of options for icons and buttons",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUTTONTEXT",
            "required": false,
            "persistent": true,
            "title": "Button Text",
            "remarks": "Overrides standard button text",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXMESSAGESID",
            "required": true,
            "persistent": true,
            "title": "MAXMESSAGESID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLOSE",
            "required": true,
            "persistent": false,
            "title": "Close",
            "remarks": "Indicates whether the Close button should be displayed in a message box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OK",
            "required": true,
            "persistent": false,
            "title": "OK",
            "remarks": "Indicates whether the OK button should be displayed in a message box",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CANCEL",
            "required": true,
            "persistent": false,
            "title": "Cancel",
            "remarks": "Indicates whether the Cancel button should be displayed in a message box",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "YES",
            "required": true,
            "persistent": false,
            "title": "Yes",
            "remarks": "Indicates whether the Yes button should be displayed in a message box",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NO",
            "required": true,
            "persistent": false,
            "title": "No",
            "remarks": "Indicates whether the No button should be displayed in a message box",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WARNING",
            "required": true,
            "persistent": false,
            "title": "Warning",
            "remarks": "Indicates whether the Warning icon should be displayed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STOP",
            "required": true,
            "persistent": false,
            "title": "Stop",
            "remarks": "Indicates whether the Stop icon should be displayed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXCLAMATION",
            "required": true,
            "persistent": false,
            "title": "Exclamation",
            "remarks": "Indicates whether the Exclamation icon should be displayed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGID",
            "required": true,
            "persistent": true,
            "title": "Message ID",
            "remarks": "Unique ID to be displayed when the message is displayed. The unique ID conforms to the TMS message ID format.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPLANATION",
            "required": false,
            "persistent": true,
            "title": "Explanation",
            "remarks": "Explains the message in more detail.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADMINRESPONSE",
            "required": false,
            "persistent": true,
            "title": "Admin Response",
            "remarks": "Describes what response a System Administrator might be able to take.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPERATORRESPONSE",
            "required": false,
            "persistent": true,
            "title": "Operator Response",
            "remarks": "Describes what response the operator might be able to take.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SYSTEMACTION",
            "required": false,
            "persistent": true,
            "title": "System Action",
            "remarks": "Describes the system's reaction to the condition that caused it to display this message.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREFIX",
            "required": true,
            "persistent": true,
            "title": "Display ID",
            "remarks": "Boolean field to indicate whether the end user will see the message id. Default to 1. In almost all cases, the default should be used. The unique message identifier is needed for service to be able to uniquely identify the message.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUEMESSAGE",
            "required": false,
            "persistent": false,
            "title": "Value",
            "remarks": "Used to display the message from the Value column but without duplicate doble quotes.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXMESSAGES"
        },
        {
            "attributeName": "MSGIDSUFFIX",
            "required": true,
            "persistent": false,
            "title": "Message ID Suffix",
            "remarks": "Suffix for MSGID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGIDPREFIX",
            "required": true,
            "persistent": false,
            "title": "Message ID Prefix",
            "remarks": "Message ID Prefix",
            "sameAsAttribute": "PREFIX",
            "sameAsObject": "MAXDATAPREFIX"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXMESSAGES",
            "source": "OSLCERRORMAP",
            "remarks": "Display Messsage description from maxMessages. THis relation will return 1 row.",
            "whereClause": "msggroup=:errorgroup and msgkey=:errorkey",
            "cardinality": null
        }
    ]
}