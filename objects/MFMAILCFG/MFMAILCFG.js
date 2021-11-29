mos = {
    "objectName": "MFMAILCFG",
    "className": "com.ibm.tivoli.maximo.mfmail.util.MfMailCfgSet",
    "description": "Maximo for E-mail Configuration Admin Main Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "MFMAILCFGID",
    "primaryKeyColumns": [
        "MFMAILCFGNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "MFMAILCFG",
            "targetObject": "MFMAILSTCFG",
            "parentKeys": "MFMAILCFGNUM",
            "targetKeys": "MFMAILCFGNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo for E-mail Configuration Admin",
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
        },
        {
            "objectName": "MFMAILCFG",
            "targetObject": "MFMAILWFNODECFG",
            "parentKeys": "MFMAILCFGNUM",
            "targetKeys": "MFMAILCFGNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo for E-mail Configuration Admin",
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
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MFMAILCFG",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MFMAILCFG",
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
            "attributeName": "MFMAILCFGNUM",
            "required": true,
            "persistent": true,
            "title": "Configuration ID",
            "remarks": "The identifier of the configuration.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "When you activate the configuration from the Select Action menu, this check box is automatically selected.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the configuration.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MBONAME",
            "required": true,
            "persistent": true,
            "title": "Target object",
            "remarks": "The object that the user receives information about in an email. For example, in the status change configuration you might use a work order as the target object.The user decides how to update the object and replies with a corresponding number prompt.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "WFNAME",
            "required": false,
            "persistent": true,
            "title": "Workflow Process",
            "remarks": "The name of the workflow process used in the configuration. The workflow must be defined for at least one task in the process.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "MFMAILCFGID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
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
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Configuration Type",
            "remarks": "The type of the configuration you want to create. If you want to configure email notifications for object status changes select status. If you want to configure email notifications for workflow assignments select workflow.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXATTRIBUTES",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find the maxattributes for MAXATTRIBUTES field in MFMAILMATRIXCFG and MFMAILWFNODECFG table",
            "whereClause": "objectname = :mboname",
            "cardinality": null
        },
        {
            "name": "MAXOBJECT",
            "target": "MAXOBJECT",
            "remarks": "Relationship to the MAXOBJECT table, used to find description for MBO name",
            "whereClause": "objectname = :mboname",
            "cardinality": null
        },
        {
            "name": "MFMAILSTCFG",
            "target": "MFMAILSTCFG",
            "remarks": "Relationship to the MFMAILSTCFG table, used to find the child records of Status Changing scenario table",
            "whereClause": "mfmailcfgnum = :mfmailcfgnum",
            "cardinality": null
        },
        {
            "name": "MFMAILSTVALCFG",
            "target": "MFMAILSTVALCFG",
            "remarks": "Relationship to the MFMAILSTVALCFG table, used to find the next status field for this configuration",
            "whereClause": "mfmailcfgnum = :mfmailcfgnum",
            "cardinality": null
        },
        {
            "name": "MFMAILWFNODECFG",
            "target": "MFMAILWFNODECFG",
            "remarks": "Relationship to the MFMAILWFNODECFG table, used to find the child records of Work flow task scenario table",
            "whereClause": "mfmailcfgnum = :mfmailcfgnum",
            "cardinality": null
        },
        {
            "name": "MFMAILWFVALCFG",
            "target": "MFMAILWFVALCFG",
            "remarks": "Relationship to the WFPROCESS table, used to find the active records in work flow processes",
            "whereClause": "mfmailcfgnum = :mfmailcfgnum",
            "cardinality": null
        },
        {
            "name": "WFTASK",
            "target": "WFNODE",
            "remarks": "Relationship to the WFTASK table, used to find the tasks which specified in workflow process",
            "whereClause": "processname = :wfname and processrev = (select processrev from wfprocess where  active = :yes and processname = :wfname) and nodetype in (select value from synonymdomain where domainid='WFNODETYPE' and maxvalue='WFTASK')",
            "cardinality": null
        },
        {
            "name": "WFPROCESS",
            "target": "WFPROCESS",
            "remarks": "Relationship to the WFPROCESS table, used to find the active records in work flow processes",
            "whereClause": "processname = :wfname and active = 1",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}