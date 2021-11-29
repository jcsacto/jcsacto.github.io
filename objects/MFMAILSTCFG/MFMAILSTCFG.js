mos = {
    "objectName": "MFMAILSTCFG",
    "className": "com.ibm.tivoli.maximo.mfmail.util.sc.STCtrlCfgSet",
    "description": "Maximo for E-mail: Status change configuration",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MFMAILSTCFGID",
    "primaryKeyColumns": [
        "MFMAILCFGNUM",
        "STATUS"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILSTCFG",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "COMMTEMPLATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILSTCFG",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "REPLYTEMPLATENOST",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template For Reply, No Status Change",
            "longDescription": null
        },
        {
            "objectName": "MAXROLE",
            "targetObject": "MFMAILSTCFG",
            "parentKeys": "MAXROLE",
            "targetKeys": "SENDTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Send To Role",
            "longDescription": null
        },
        {
            "objectName": "MFMAILCFG",
            "targetObject": "MFMAILSTCFG",
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
            "remarks": "The statuses that are available to the user to apply to the object. For example, you might have three statuses for a work order: Approved, In progress and Complete",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "SYNONYMDOMAIN"
        },
        {
            "attributeName": "ATTRIBUTES",
            "required": false,
            "persistent": true,
            "title": "Attributes",
            "remarks": "The characteristics of the object or workflow assignment that are listed in the body of the email. For example, you might choose to add a completion date.",
            "sameAsAttribute": "ATTRIBUTES",
            "sameAsObject": "MFMAILST"
        },
        {
            "attributeName": "COMMTEMPLATE",
            "required": false,
            "persistent": true,
            "title": "Notification Template",
            "remarks": "The template for the email sent to the user when the status defined in escalations matches the status of the object.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "DOMAINDESC",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "The description of the status.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "SYNONYMDOMAIN"
        },
        {
            "attributeName": "REPLYTEMPLATENOST",
            "required": false,
            "persistent": true,
            "title": "Status unchanged response template.",
            "remarks": "The template for the email that is sent to the user to notify them that the status of the record was not changed by the users email. The notification is optional.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "SENDTO",
            "required": false,
            "persistent": true,
            "title": "Send To",
            "remarks": "The role of the person who receives the first outbound email. The email might be sent to more than one person.",
            "sameAsAttribute": "MAXROLE",
            "sameAsObject": "MAXROLE"
        },
        {
            "attributeName": "MFMAILSTCFGID",
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
            "name": "NOTIFICATION",
            "target": "COMMTEMPLATE",
            "remarks": "Relationship to the COMMTEMPLATE table, used to show the description of COMMTEMPLATE field",
            "whereClause": "templateid = :commtemplate",
            "cardinality": null
        },
        {
            "name": "REPLYTEMPLATENOST",
            "target": "COMMTEMPLATE",
            "remarks": "Relationship to the COMMTEMPLATE table, used to show the description of COMMTEMPLATE field",
            "whereClause": "templateid = :replytemplatenost",
            "cardinality": null
        },
        {
            "name": "SENDTO",
            "target": "MAXROLE",
            "remarks": "Relationship to the MAXROLE table, used to show the description of SENDTO field",
            "whereClause": "maxrole = :sendto",
            "cardinality": null
        },
        {
            "name": "MFMAILSTVALCFG",
            "target": "MFMAILSTVALCFG",
            "remarks": "Relationship to the COMMTEMPLATE table, used to show the description of COMMTEMPLATE field",
            "whereClause": "status = :status and mfmailcfgnum = :mfmailcfgnum",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MFMAILSTCFG",
            "source": "MFMAILCFG",
            "remarks": "Relationship to the MFMAILSTCFG table, used to find the child records of Status Changing scenario table",
            "whereClause": "mfmailcfgnum = :mfmailcfgnum",
            "cardinality": null
        },
        {
            "name": "MFMAILSTCFG",
            "source": "MFMAILSTVALCFG",
            "remarks": "Relationship to the parent table",
            "whereClause": "status = :status and mfmailcfgnum = :mfmailcfgnum",
            "cardinality": null
        }
    ]
}