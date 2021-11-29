mos = {
    "objectName": "SHOWWFTASK",
    "className": "psdi.workflow.virtual.ShowWFTaskSet",
    "description": "Non-Persistent used table to edit a work flow task",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "TITLE",
            "required": false,
            "persistent": false,
            "title": "Title",
            "remarks": "Name of the node.",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of the node",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Description of the node",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": false,
            "title": "Application",
            "remarks": "Default application to launch for this task",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "CALENDARBASED",
            "required": true,
            "persistent": false,
            "title": "Calendar Based",
            "remarks": "Is this a calendar based time limit?",
            "sameAsAttribute": "CALENDARBASED",
            "sameAsObject": "WFTASK"
        },
        {
            "attributeName": "FIRSTCOMPLETE",
            "required": true,
            "persistent": false,
            "title": "First Complete",
            "remarks": "Will the first person to complete an assignment complete the task? If N then all of the assignments must be complete before a new current task is calculated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": false,
            "persistent": false,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "READONLY",
            "required": true,
            "persistent": false,
            "title": "Read Only",
            "remarks": "Should the application associated with this task be read only for all users other than those assigned to the task?",
            "sameAsAttribute": "READONLY",
            "sameAsObject": "WFTASK"
        },
        {
            "attributeName": "TIMELIMIT",
            "required": false,
            "persistent": false,
            "title": "Time Limit",
            "remarks": "Time in hours that can pass before the task is escalated.",
            "sameAsAttribute": "TIMELIMIT",
            "sameAsObject": "WFTASK"
        },
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": false,
            "title": "Node ID",
            "remarks": "The WFTASK type node that this task is related to.",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "PROCESSNAME",
            "required": true,
            "persistent": false,
            "title": "Process",
            "remarks": "Name of the owning process.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "PROCESSREV",
            "required": true,
            "persistent": false,
            "title": "Process Revision",
            "remarks": "Process Revision",
            "sameAsAttribute": "PROCESSREV",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "DISPLAYONE",
            "required": true,
            "persistent": false,
            "title": "Display One",
            "remarks": "Display a single complete assignment or simply complete it?",
            "sameAsAttribute": "DISPLAYONE",
            "sameAsObject": "WFTASK"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Name",
            "remarks": "Target MBO type for the process",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "WFTASKTYPE",
            "required": false,
            "persistent": false,
            "title": "WF Task Type",
            "remarks": "WF Task Type",
            "sameAsAttribute": "WFTASKTYPE",
            "sameAsObject": "WFTASK"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "TASKAPP",
            "target": "MAXAPPS",
            "remarks": "Relationship to get the MAXAPPS description.",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWFTASKASGNGROUPS",
            "target": "WFASGNGROUP",
            "remarks": "Relationship to the WFAsgnGroup table, used to edit the task assignment groups.",
            "whereClause": "1=2",
            "cardinality": null
        },
        {
            "name": "SHOWWFTASKASSIGNMENTS",
            "target": "WFASSIGNMENT",
            "remarks": "Relationship to the WFAssignment table, used to edit the task assignments.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWFTASKNOTIFICATIONS",
            "target": "WFNOTIFICATION",
            "remarks": "Relationship to the WFNotification table, used to edit the task notifications.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SHOWWFTASK",
            "source": "WFNODE",
            "remarks": "Relationship to the ShowWFTask non-persistantobject, used to edit a WFTASK.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}