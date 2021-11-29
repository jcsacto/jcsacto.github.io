mos = {
    "objectName": "EDITMESSAGE",
    "className": "psdi.app.dbchange.EditMessageSet",
    "description": "Store and edit messages for MAXIMO",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "EDITMESSAGEID",
    "primaryKeyColumns": [
        "MSGID"
    ],
    "logicalRelationships": [
        {
            "objectName": "EDITMESSAGE",
            "targetObject": "MSGPROJECT",
            "parentKeys": "MSGID",
            "targetKeys": "MSGID",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 1",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXMESSAGES",
            "targetObject": "EDITMESSAGE",
            "parentKeys": "MSGKEY, MSGGROUP",
            "targetKeys": "MSGKEY, MSGGROUP",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "EDITMESSAGE",
            "parentKeys": "PERSONID",
            "targetKeys": "ASSIGNEDTO",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 85",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "EDITMESSAGE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 86",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "EDITMESSAGE",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEDBY",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 87",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MSGGROUP",
            "required": true,
            "persistent": true,
            "title": "Message Group",
            "remarks": "Group for this message",
            "sameAsAttribute": "MSGGROUP",
            "sameAsObject": "MAXMESSAGES"
        },
        {
            "attributeName": "MSGKEY",
            "required": true,
            "persistent": true,
            "title": "Message Key",
            "remarks": "Message Key",
            "sameAsAttribute": "MSGKEY",
            "sameAsObject": "MAXMESSAGES"
        },
        {
            "attributeName": "VALUE",
            "required": true,
            "persistent": true,
            "title": "Value",
            "remarks": "Text to display for the message",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXMESSAGES"
        },
        {
            "attributeName": "DISPLAYMETHOD",
            "required": true,
            "persistent": true,
            "title": "Display Method",
            "remarks": "Method of message display",
            "sameAsAttribute": "DISPLAYMETHOD",
            "sameAsObject": "MAXMESSAGES"
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
            "attributeName": "MSGID",
            "required": true,
            "persistent": true,
            "title": "Message ID",
            "remarks": "Unique ID to be displayed when the message is displayed. It comforms to the TMS message id format.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPLANATION",
            "required": false,
            "persistent": true,
            "title": "Explanation",
            "remarks": "Explains the message in more detail.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXMESSAGES"
        },
        {
            "attributeName": "RESPONSE",
            "required": false,
            "persistent": true,
            "title": "Response",
            "remarks": "Describes what sort of response might be able to be taken.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXMESSAGES"
        },
        {
            "attributeName": "PREFIX",
            "required": true,
            "persistent": true,
            "title": "Prefix with ID",
            "remarks": "Boolean field to indicate whether the end user will see the message id. Default to 1. In almost all cases, the default should be used. The unique message identifier is needed to uniquely identify the message.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPROVED",
            "required": true,
            "persistent": true,
            "title": "Message Approved",
            "remarks": "Flag indicating that the message is accepted",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DROPPED",
            "required": true,
            "persistent": true,
            "title": "Dropped",
            "remarks": "Was this message dropped?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLOSE",
            "required": true,
            "persistent": false,
            "title": "Close Button",
            "remarks": "Close Option Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OK",
            "required": true,
            "persistent": false,
            "title": "OK Button",
            "remarks": "OK Option Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CANCEL",
            "required": true,
            "persistent": false,
            "title": "Cancel Button",
            "remarks": "Cancel Option Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "YES",
            "required": true,
            "persistent": false,
            "title": "Yes Button",
            "remarks": "Yes Option Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NO",
            "required": true,
            "persistent": false,
            "title": "No Button",
            "remarks": "No Option Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WARNING",
            "required": true,
            "persistent": false,
            "title": "Warning Icon",
            "remarks": "Warning Option Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STOP",
            "required": true,
            "persistent": false,
            "title": "Stop Icon",
            "remarks": "Stop Option Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXCLAMATION",
            "required": true,
            "persistent": false,
            "title": "Exclamation Icon",
            "remarks": "Exclamation Option Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGNEDTO",
            "required": false,
            "persistent": true,
            "title": "Assigned To",
            "remarks": "Person current assigned to work on this message",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "NOTES",
            "required": false,
            "persistent": true,
            "title": "Notes",
            "remarks": "Notes about the message",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDBY",
            "required": false,
            "persistent": true,
            "title": "Created By",
            "remarks": "Person who created the message",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Created By",
            "remarks": "Last person who modified the message",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Date when the field was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGPREFIX",
            "required": true,
            "persistent": true,
            "title": "Prefix",
            "remarks": "The Message Prefix",
            "sameAsAttribute": "PREFIX",
            "sameAsObject": "PREFIXPRODUCT"
        },
        {
            "attributeName": "MSGNUMBER",
            "required": true,
            "persistent": true,
            "title": "Message #",
            "remarks": "The Message Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGSUFFIX",
            "required": true,
            "persistent": true,
            "title": "Suffix",
            "remarks": "The Message Suffix",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CATEGORY",
            "required": false,
            "persistent": true,
            "title": "Category",
            "remarks": "Category",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EDITMESSAGEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSIGNEDTO",
            "target": "PERSON",
            "remarks": "Link to AssignedTo Person record.",
            "whereClause": "personid=:assignedto",
            "cardinality": null
        },
        {
            "name": "CREATEDBY",
            "target": "PERSON",
            "remarks": "Link to CreatedBy Person record.",
            "whereClause": "personid = :createdby",
            "cardinality": null
        },
        {
            "name": "PROMOTE",
            "target": "PROMOTEMESSAGE",
            "remarks": "Get dialog class to promote message.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "PROPROMOTE",
            "target": "PROMOTEPROJECT",
            "remarks": "Bring up the dialog to promote a project's messages.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "TRANSFER",
            "target": "TRANSFERMSG",
            "remarks": "Transfer Messages dialog",
            "whereClause": "1=1",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}