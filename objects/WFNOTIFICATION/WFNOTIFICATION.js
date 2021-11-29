mos = {
    "objectName": "WFNOTIFICATION",
    "className": "psdi.workflow.WFNotificationSet",
    "description": "This table is related to the WFTASK table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "NOTIFICATIONID",
    "primaryKeyColumns": [
        "PROCESSNAME",
        "PROCESSREV",
        "UNIQUEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "WFNOTIFICATION",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "TEMPLATEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CommTemplate used to send a notification from the Workflow process.",
            "longDescription": null
        },
        {
            "objectName": "WFACTION",
            "targetObject": "WFNOTIFICATION",
            "parentKeys": "PROCESSNAME, PROCESSREV, ACTIONID",
            "targetKeys": "PROCESSNAME, PROCESSREV, ACTIONID",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Designed Notification on Workflow Action",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFNOTIFICATION",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Notification defined on the Workflow Node",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFNOTIFICATION",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NOTIFICATIONID",
            "required": true,
            "persistent": true,
            "title": "Notification ID",
            "remarks": "Key field for the table - auto generated",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node ID",
            "remarks": "The node for the task node that this notification is related to.",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "ACTIONID",
            "required": true,
            "persistent": true,
            "title": "Action",
            "remarks": "The action that this notification is related to (if any).",
            "sameAsAttribute": "ACTIONID",
            "sameAsObject": "WFACTION"
        },
        {
            "attributeName": "PROCESSREV",
            "required": true,
            "persistent": true,
            "title": "Process Revision",
            "remarks": "Process Revision",
            "sameAsAttribute": "PROCESSREV",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "PROCESSNAME",
            "required": true,
            "persistent": true,
            "title": "Process",
            "remarks": "Name of the owning process.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "TEMPLATEID",
            "required": true,
            "persistent": true,
            "title": "Communication Template",
            "remarks": "Link to the Communication Template to use.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object",
            "remarks": "Target object for the entire workflow process.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SUBJECT",
            "required": false,
            "persistent": false,
            "title": "Subject",
            "remarks": "Subject of the notification email",
            "sameAsAttribute": "SUBJECT",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "MESSAGE",
            "required": false,
            "persistent": false,
            "title": "Message",
            "remarks": "Message body of notification email",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDTO",
            "required": false,
            "persistent": false,
            "title": "Send To",
            "remarks": "Where to send the notification email",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREEFORM",
            "required": true,
            "persistent": false,
            "title": "Free Form",
            "remarks": "Is this a free for comm template?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Owner Description",
            "remarks": "Descriptive text about MBO in notification's instance.",
            "sameAsAttribute": "OWNERDESCRIPTION",
            "sameAsObject": "WFINSTANCE"
        },
        {
            "attributeName": "HOSTNAME",
            "required": false,
            "persistent": false,
            "title": "Host Name",
            "remarks": "URL of the MXServer",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPDESC",
            "required": false,
            "persistent": false,
            "title": "Template Description",
            "remarks": "Description of the communication template",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "TEMPDESC_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for the Communication Template Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNIQUEID",
            "required": true,
            "persistent": true,
            "title": "Unique ID",
            "remarks": "Unique ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMMTEMPLATE",
            "target": "COMMTEMPLATE",
            "remarks": "Communication Template used by the Notification. (templateid = :templateid) Returns a single record.",
            "whereClause": "templateid = :templateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTEMPLATEINT",
            "target": "COMMTEMPLATE",
            "remarks": "Relationship to get the Comm Template for MEA",
            "whereClause": "templateid = :templateid  and objectname = :objectname and status in (select value from synonymdomain where domainid = 'COMMTMPLTSTATUS' and maxvalue = 'ACTIVE') and usewith in (select value from synonymdomain where domainid = 'TEMPLATEUSEWITH' and maxvalue in ('WORKFLOW','APPS','ALL')) and freeform = :no",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SHOWWFACTIONNOTIFICATION",
            "source": "SHOWWFACTION",
            "remarks": "Relationship to the WFNotification table, used to edit the action notifications.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWFTASKNOTIFICATIONS",
            "source": "SHOWWFTASK",
            "remarks": "Relationship to the WFNotification table, used to edit the task notifications.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWFNOTIFICATIONS",
            "source": "SHOWWFWAIT",
            "remarks": "Relationship to the WFNotification table, used to edit the wait node notifications.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NOTIFICATIONS",
            "source": "WFACTION",
            "remarks": "Relationship to the WFNofitication table which holds the notifications for the action.  (processname=:processname and processrev=:processrev and nodeid = :ownernodeid and actionid = :actionid and actionid <> 0). This resulting set will contain zero to many objects.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:ownernodeid and actionid = :actionid and actionid <> 0",
            "cardinality": null
        },
        {
            "name": "NOTIFICATIONS",
            "source": "WFNODE",
            "remarks": "Relationship to the WFNotification table which holds the notifications for the task node.  (processid=:processid and processid=:processid and nodeid = :nodeid and actionid = 0). This resulting set will contain zero to many objects.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid and actionid = 0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NOTIFICATIONS",
            "source": "WFPROCESS",
            "remarks": " ",
            "whereClause": "processname=:processname and processrev=:processrev",
            "cardinality": "UNDEFINED"
        }
    ]
}