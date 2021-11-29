mos = {
    "objectName": "SHOWWFINTERACT",
    "className": "psdi.workflow.virtual.ShowWFInteractSet",
    "description": "Non-Persistent used table to edit a WFINTERACTION",
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
            "remarks": "Application to bring up.",
            "sameAsAttribute": "APP",
            "sameAsObject": "WFINTERACTION"
        },
        {
            "attributeName": "PAGE",
            "required": false,
            "persistent": false,
            "title": "obsolete",
            "remarks": "obsolete",
            "sameAsAttribute": "PAGE",
            "sameAsObject": "WFINTERACTION"
        },
        {
            "attributeName": "RELATION",
            "required": false,
            "persistent": false,
            "title": "Relation",
            "remarks": "Which related record to bring up in the application",
            "sameAsAttribute": "RELATION",
            "sameAsObject": "WFINTERACTION"
        },
        {
            "attributeName": "ACTIONDEFAULTS",
            "required": false,
            "persistent": false,
            "title": "Action Defaults",
            "remarks": "List of defaults for an action page",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DIRECTIONS",
            "required": false,
            "persistent": false,
            "title": "Directions",
            "remarks": "Interaction Directions for the user from the workflow process.",
            "sameAsAttribute": "DIRECTIONS",
            "sameAsObject": "WFINTERACTION"
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
            "attributeName": "NODEID",
            "required": true,
            "persistent": false,
            "title": "Node ID",
            "remarks": "Identifies the node this is the details for.",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "PROCESSNAME",
            "required": true,
            "persistent": false,
            "title": "Process Name",
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
            "attributeName": "DIRECTIONS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DIRECTIONS Long description",
            "remarks": "Long description for DIRECTIONS",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTION",
            "required": false,
            "persistent": false,
            "title": "Action",
            "remarks": "Action to launch at the interaction",
            "sameAsAttribute": "ACTION",
            "sameAsObject": "WFINTERACTION"
        },
        {
            "attributeName": "TABNAME",
            "required": false,
            "persistent": false,
            "title": "Tab Name",
            "remarks": "Tab to bring up at the interaction",
            "sameAsAttribute": "TABNAME",
            "sameAsObject": "WFINTERACTION"
        },
        {
            "attributeName": "LAUNCHPROCESS",
            "required": false,
            "persistent": false,
            "title": "Launch Process",
            "remarks": "Process to launch upon next Mbo fetch.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Name",
            "remarks": "Target Mbo Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "STAYCURRENTAPP",
            "required": true,
            "persistent": false,
            "title": "Stay on Current App",
            "remarks": "Stay on the current app overriding the AppName",
            "sameAsAttribute": "STAYCURRENTAPP",
            "sameAsObject": "WFINTERACTION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "RELATIONSHIPTREE",
            "target": "EXPBUILDTREE",
            "remarks": "Relationship for WFINTERACTION TREE",
            "whereClause": "objectname=:objectname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SHOWWFINTERACT",
            "source": "WFNODE",
            "remarks": "Relationship to the ShowWFInteract non-persistantobject, used to edit a WFINTERACTION.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}