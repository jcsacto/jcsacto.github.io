mos = {
    "objectName": "MFMAILWFVALCFG",
    "className": "com.ibm.tivoli.maximo.mfmail.util.wf.WFCtrlValueCfgSet",
    "description": "Maximo for E-mail: Workflow control value staging table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MFMAILWFVALCFGID",
    "primaryKeyColumns": [
        "MFMAILWFVALCFGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILWFVALCFG",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "REPLYTEMPLATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template for Reply",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "MFMAILWFVALCFG",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MFMAILCFG",
            "targetObject": "MFMAILWFVALCFG",
            "parentKeys": "MFMAILCFGNUM",
            "targetKeys": "MFMAILCFGNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo for E-mail Configuration Admin",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MFMAILCFGNUM",
            "required": true,
            "persistent": true,
            "title": "Configuration",
            "remarks": "Main Configuration MBO key",
            "sameAsAttribute": "MFMAILCFGNUM",
            "sameAsObject": "MFMAILCFG"
        },
        {
            "attributeName": "WFNODEID",
            "required": true,
            "persistent": true,
            "title": "Node",
            "remarks": "Parent Configuration MBO key",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "VALUE",
            "required": true,
            "persistent": true,
            "title": "Selection value",
            "remarks": "You can have only one value for accepting a task. You can have multiple rejection values, each with a different reason explaining why the user is rejecting the task.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MFMAILWF"
        },
        {
            "attributeName": "ISACCEPT",
            "required": true,
            "persistent": true,
            "title": "Accept",
            "remarks": "If you select this checkbox, the value in the Selection value field is listed in the email as a prompt for accepting a task. If you clear this checkbox, the value in the Selection value field is listed in the email as a prompt for rejecting a task.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SETVALUE",
            "required": true,
            "persistent": true,
            "title": "Store the value to attribute",
            "remarks": "Store the value chosen by the user. The value is stored in the attribute you have specified in the Attribute to store value field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPLYTEMPLATE",
            "required": false,
            "persistent": true,
            "title": "Workflow change response template",
            "remarks": "The template for the email that is sent when the workflow assignment is changed by the user's email. You can define a different response template for each selection value.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the value that is presented as a prompt in the email to the user.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MFMAILWF"
        },
        {
            "attributeName": "MFMAILWFVALCFGID",
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
    "outgoingRelationships": [
        {
            "name": "REPLYTEMPLATE",
            "target": "COMMTEMPLATE",
            "remarks": "Relationship to the COMMTEMPLATE table, used to show the description of REPLYTEMPLATE",
            "whereClause": "templateid = :replytemplate",
            "cardinality": null
        },
        {
            "name": "MFMAILWFNODECFG",
            "target": "MFMAILWFNODECFG",
            "remarks": "Relationship to the parent table",
            "whereClause": "wfnode = :wfnodeid and mfmailcfgnum = mfmailcfgnum",
            "cardinality": null
        },
        {
            "name": "MFMAILWFVALCFGREL",
            "target": "MFMAILWFVALCFG",
            "remarks": "Relationship to the other values in parent node",
            "whereClause": "mfmailcfgnum = :mfmailcfgnum and not mfmailwfvalcfgid <> :mfmailwfvalcfgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MFMAILWFVALCFG",
            "source": "MFMAILCFG",
            "remarks": "Relationship to the WFPROCESS table, used to find the active records in work flow processes",
            "whereClause": "mfmailcfgnum = :mfmailcfgnum",
            "cardinality": null
        },
        {
            "name": "MFMAILWFVALCFG",
            "source": "MFMAILWFNODECFG",
            "remarks": "Relationship to the WFNODE table, used to find the workflow nodes from parent's WFNAME field",
            "whereClause": "wfnodeid = :wfnode and mfmailcfgnum = :mfmailcfgnum",
            "cardinality": null
        },
        {
            "name": "MFMAILWFVALCFGREL",
            "source": "MFMAILWFVALCFG",
            "remarks": "Relationship to the other values in parent node",
            "whereClause": "mfmailcfgnum = :mfmailcfgnum and not mfmailwfvalcfgid <> :mfmailwfvalcfgid",
            "cardinality": null
        }
    ]
}