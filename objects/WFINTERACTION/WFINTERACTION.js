mos = {
    "objectName": "WFINTERACTION",
    "className": "psdi.workflow.WFInteractionSet",
    "description": "Details for a WFInteraction node.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WFINTERACTIONID",
    "primaryKeyColumns": [
        "PROCESSNAME",
        "PROCESSREV",
        "NODEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "WFINTERACTION",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "WFINTERACTION",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The application to change to when the interaction node is reached.",
            "longDescription": null
        },
        {
            "objectName": "MAXRELATIONSHIP",
            "targetObject": "WFINTERACTION",
            "parentKeys": "NAME",
            "targetKeys": "RELATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "After the interaction is reached, the first record this relationship returns will be brought up.",
            "longDescription": "This for interactions before a stopping point (Stop, Wait, or Task node). With this you can design your interaction to bring up the Asset of the Work Order, in the Asset application, and even launch an Asset Workflow process on that record."
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFINTERACTION",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "LAUNCHPROCESS, PROCESSREV, NODEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFINTERACTION",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Interaction node attributes",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFINTERACTION",
            "parentKeys": "PROCESSNAME",
            "targetKeys": "LAUNCHPROCESS",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "The process to launch after the interaction completes.",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFINTERACTION",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "LAUNCHPROCESS, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFINTERACTION",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WFINTERACTIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSNAME",
            "required": true,
            "persistent": true,
            "title": "Process Name",
            "remarks": "Name of the owning process.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
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
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node ID",
            "remarks": "Identifies the node this is the details for.",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "Application to bring up.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PAGE",
            "required": false,
            "persistent": true,
            "title": "obsolete",
            "remarks": "obsolete",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATION",
            "required": false,
            "persistent": true,
            "title": "Relation",
            "remarks": "Which related record to bring up in the application",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DIRECTIONS",
            "required": false,
            "persistent": true,
            "title": "Directions",
            "remarks": "Interaction Directions for the user from the workflow process.",
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
            "persistent": true,
            "title": "Action",
            "remarks": "Action to launch at the interaction",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TABNAME",
            "required": false,
            "persistent": true,
            "title": "Tab Name",
            "remarks": "Tab to bring up at the interaction",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LAUNCHPROCESS",
            "required": false,
            "persistent": true,
            "title": "Launch Process",
            "remarks": "Process to launch upon Mbo hand off.",
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
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STAYCURRENTAPP",
            "required": true,
            "persistent": true,
            "title": "Stay on Current App",
            "remarks": "Stay on the current app overriding the AppName",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relatioship to get long description table from WFINTERACTION.",
            "whereClause": "ldkey=:wfinteractionid and ldownertable='WFINTERACTION'",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "INTERACTION",
            "source": "WFNODE",
            "remarks": "Relationship to details for a WFInteraction node. One member set.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}