mos = {
    "objectName": "MFMAILWFNODECFG",
    "className": "com.ibm.tivoli.maximo.mfmail.util.wf.WFCtrlNodeCfgSet",
    "description": "Maximo for E-mail: workflow assignment control staging table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MFMAILWFNODECFGID",
    "primaryKeyColumns": [
        "MFMAILCFGNUM",
        "WFNODE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILWFNODECFG",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "NOTIFYTEMPLATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template",
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
            "attributeName": "WFNODE",
            "required": true,
            "persistent": true,
            "title": "Node ID",
            "remarks": "The identifier of the task node in the workflow process that requires a response from the user.",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "ATTRIBUTES",
            "required": false,
            "persistent": true,
            "title": "Attributes",
            "remarks": "The characteristics associated with the record that appear in the body of the email to the user. For example, the site ID where the work is carried out.",
            "sameAsAttribute": "ATTRIBUTES",
            "sameAsObject": "MFMAILWF"
        },
        {
            "attributeName": "NOTIFYTEMPLATE",
            "required": false,
            "persistent": true,
            "title": "Task Completion Notification Template",
            "remarks": "The template for the email that is sent to notify a user that a task is complete. The email is sent to all users defined in the role.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "SELATTR",
            "required": false,
            "persistent": true,
            "title": "Attribute to store value",
            "remarks": "The attribute that is used to store the value that the user specified in the email. For example, if a user states a reason for rejecting a task, you can store the reason the user specified.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "WFNODETITLE",
            "required": false,
            "persistent": false,
            "title": "Title",
            "remarks": "The description of the workflow task.",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "MFMAILWFNODECFGID",
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
            "name": "NOTIFYTEMPLATE",
            "target": "COMMTEMPLATE",
            "remarks": "Relationship to the COMMTEMPLATE table, used to show the description of NOTIFYTEMPLATE field",
            "whereClause": "templateid = :notifytemplate",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTE",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to show the description of SELATTR field",
            "whereClause": "attributename = :selattr and objectname = (select mboname from mfmailcfg where mfmailcfgnum = :mfmailcfgnum)",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTESELATTRS",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to show the description of SELATTR field",
            "whereClause": "objectname = (select mboname from mfmailcfg where mfmailcfgnum = :mfmailcfgnum)",
            "cardinality": null
        },
        {
            "name": "MFMAILWFVALCFG",
            "target": "MFMAILWFVALCFG",
            "remarks": "Relationship to the WFNODE table, used to find the workflow nodes from parent's WFNAME field",
            "whereClause": "wfnodeid = :wfnode and mfmailcfgnum = :mfmailcfgnum",
            "cardinality": null
        },
        {
            "name": "WFNODE",
            "target": "WFNODE",
            "remarks": "Relationship to the WFNODE table, used to find the workflow nodes from parent's WFNAME field",
            "whereClause": "nodeid = :wfnode and processname = (select wfname from mfmailcfg where mfmailcfgnum = :mfmailcfgnum) and processrev = (select processrev from wfprocess where  active = :yes and processname =  (select wfname from mfmailcfg where mfmailcfgnum = :mfmailcfgnum))",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MFMAILWFNODECFG",
            "source": "MFMAILCFG",
            "remarks": "Relationship to the MFMAILWFNODECFG table, used to find the child records of Work flow task scenario table",
            "whereClause": "mfmailcfgnum = :mfmailcfgnum",
            "cardinality": null
        },
        {
            "name": "MFMAILWFNODECFG",
            "source": "MFMAILWFVALCFG",
            "remarks": "Relationship to the parent table",
            "whereClause": "wfnode = :wfnodeid and mfmailcfgnum = mfmailcfgnum",
            "cardinality": null
        }
    ]
}