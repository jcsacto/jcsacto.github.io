mos = {
    "objectName": "MFMAILSTVALCFG",
    "className": "com.ibm.tivoli.maximo.mfmail.util.sc.STCtrlValueCfgSet",
    "description": "Maximo for E-mail: status change value table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MFMAILSTVALCFGID",
    "primaryKeyColumns": [
        "MFMAILSTVALCFGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILSTVALCFG",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "REPLYTEMPLATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template For Reply",
            "longDescription": null
        },
        {
            "objectName": "MFMAILCFG",
            "targetObject": "MFMAILSTVALCFG",
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
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Parent Configuration MBO key",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "SYNONYMDOMAIN"
        },
        {
            "attributeName": "VALUE",
            "required": true,
            "persistent": true,
            "title": "Selection Value",
            "remarks": "The number associated with a status change option. For example, the status options for a work order might be 1 = Approved, 2 = In Progress, 3 = Complete",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOMAINDESC",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "The description of the target status.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "SYNONYMDOMAIN"
        },
        {
            "attributeName": "NEXTSTATUS",
            "required": true,
            "persistent": true,
            "title": "Target Status",
            "remarks": "The status that the record is changed to based on the corresponding value in the user's reply mail.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "SYNONYMDOMAIN"
        },
        {
            "attributeName": "REPLYTEMPLATE",
            "required": false,
            "persistent": true,
            "title": "Status change response template",
            "remarks": "The template for the email sent to the user when the status of a target object is changed by the user's email. You can define a different response template for each selection value.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "MFMAILSTVALCFGID",
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
            "name": "REPLYTEMPLATE",
            "target": "COMMTEMPLATE",
            "remarks": "Relationship to the COMMTEMPLATE table, used to show the description of REPLYTEMPLATE field",
            "whereClause": "templateid = :replytemplate",
            "cardinality": null
        },
        {
            "name": "MFMAILSTCFG",
            "target": "MFMAILSTCFG",
            "remarks": "Relationship to the parent table",
            "whereClause": "status = :status and mfmailcfgnum = :mfmailcfgnum",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MFMAILSTVALCFG",
            "source": "MFMAILCFG",
            "remarks": "Relationship to the MFMAILSTVALCFG table, used to find the next status field for this configuration",
            "whereClause": "mfmailcfgnum = :mfmailcfgnum",
            "cardinality": null
        },
        {
            "name": "MFMAILSTVALCFG",
            "source": "MFMAILSTCFG",
            "remarks": "Relationship to the COMMTEMPLATE table, used to show the description of COMMTEMPLATE field",
            "whereClause": "status = :status and mfmailcfgnum = :mfmailcfgnum",
            "cardinality": null
        }
    ]
}