mos = {
    "objectName": "MFMAILWF",
    "className": "com.ibm.tivoli.maximo.mfmail.control.WFCtrlSet",
    "description": "Maximo for E-mail: Workflow Control",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MFMAILWFID",
    "primaryKeyColumns": [
        "MFMAILWFID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILWF",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "NOTIFYTEMPLATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILWF",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "REPLYTEMPLATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template For Reply",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "MFMAILWF",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MFMAILWF",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "MBONAME, SELATTR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MFMAILWF",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MBONAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WFNAME",
            "required": true,
            "persistent": true,
            "title": "Workflow name",
            "remarks": "Workflow process name",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "WFNODE",
            "required": true,
            "persistent": true,
            "title": "Workflow node",
            "remarks": "Workflow node",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "VALUE",
            "required": true,
            "persistent": true,
            "title": "Value",
            "remarks": "Value used in the selection",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTION",
            "required": true,
            "persistent": true,
            "title": "Action",
            "remarks": "How to complete work flow assignment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ATTRIBUTES",
            "required": false,
            "persistent": true,
            "title": "List of attributes",
            "remarks": "List of attributes to be included in the list of name/value pair for medium device.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MBONAME",
            "required": true,
            "persistent": true,
            "title": "MBO Name",
            "remarks": "MBO Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "NOTIFYTEMPLATE",
            "required": false,
            "persistent": true,
            "title": "Reply Template",
            "remarks": "Communication template used to create notification mail if the assignment is completed by another user",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "REPLYTEMPLATE",
            "required": false,
            "persistent": true,
            "title": "Reply Template",
            "remarks": "Communication template to create reply",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "SELATTR",
            "required": false,
            "persistent": true,
            "title": "Attribute to set selection value",
            "remarks": "The name of attribute to set the value user has chosen.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "MFMAILWFID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}