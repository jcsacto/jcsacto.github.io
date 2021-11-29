mos = {
    "objectName": "MFMAILST",
    "className": "com.ibm.tivoli.maximo.mfmail.control.STCtrlSet",
    "description": "Maximo for E-mail: Status Control",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MFMAILSTID",
    "primaryKeyColumns": [
        "MFMAILSTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILST",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "COMMTEMPLATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILST",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "REPLYTEMPLATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template For Reply",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILST",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "REPLYTEMPLATENOST",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template For Reply, No Status Change",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MFMAILST",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MBONAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXROLE",
            "targetObject": "MFMAILST",
            "parentKeys": "MAXROLE",
            "targetKeys": "SENDTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Send To Role",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MBONAME",
            "required": true,
            "persistent": true,
            "title": "MBO name",
            "remarks": "MBO name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "SYNONYMDOMAIN"
        },
        {
            "attributeName": "VALUE",
            "required": true,
            "persistent": true,
            "title": "Value",
            "remarks": "Value used in the selection list for the corresponding status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ATTRIBUTES",
            "required": false,
            "persistent": true,
            "title": "List of attributes",
            "remarks": "List of attributes to send in the list of name/value pair to the medium devices. Attributes needs to be separated by comma.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMTEMPLATE",
            "required": false,
            "persistent": true,
            "title": "Communication Template ID",
            "remarks": "Communication template to create initial outbound mail",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "NEXTSTATUS",
            "required": true,
            "persistent": true,
            "title": "Next Status",
            "remarks": "The status to set when corresponding value is selected in the reply mail.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "SYNONYMDOMAIN"
        },
        {
            "attributeName": "ORIGIN",
            "required": false,
            "persistent": true,
            "title": "Origin",
            "remarks": "Origin",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPLYTEMPLATE",
            "required": false,
            "persistent": true,
            "title": "Reply Template",
            "remarks": "Communication template to create reply mail.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "REPLYTEMPLATENOST",
            "required": false,
            "persistent": true,
            "title": "Reply Template",
            "remarks": "Reply template to create reply mail when the incoming mail does not change the status.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "SENDTO",
            "required": false,
            "persistent": true,
            "title": "Send To",
            "remarks": "The role used as the recipient of the initial outbound mail",
            "sameAsAttribute": "MAXROLE",
            "sameAsObject": "MAXROLE"
        },
        {
            "attributeName": "MFMAILSTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}