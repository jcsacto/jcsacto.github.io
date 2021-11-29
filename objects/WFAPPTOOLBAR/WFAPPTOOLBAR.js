mos = {
    "objectName": "WFAPPTOOLBAR",
    "className": "psdi.workflow.WFAppToolBarSet",
    "description": "Workflow Go Button definitions",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WFAPPTOOLBARID",
    "primaryKeyColumns": [
        "APPNAME",
        "TOOLBARSEQUENCE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "WFAPPTOOLBAR",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Workflow buttons defined for an application.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "WFAPPTOOLBAR",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The type of Mbo Object these buttons are for.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WFAPPTOOLBARID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPNAME",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Application containing the toolbar button",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "TOOLBARLOCATION",
            "required": true,
            "persistent": true,
            "title": "Toolbar Location",
            "remarks": "Where to display the button",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOLBARICON",
            "required": false,
            "persistent": true,
            "title": "Toolbar Icon",
            "remarks": "Icon for the Go button",
            "sameAsAttribute": "IMAGE",
            "sameAsObject": "MAXMENU"
        },
        {
            "attributeName": "TOOLBARSEQUENCE",
            "required": true,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Ordering of Go buttons.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSNAME",
            "required": false,
            "persistent": true,
            "title": "Process Name",
            "remarks": "Name of the process to launch from the Go button.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "ObjectName",
            "remarks": "Name of the MBO type for the application and process",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Text describing workflow toolbar button",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "TOOLBARICONACTIVE",
            "required": false,
            "persistent": true,
            "title": "Active Icon",
            "remarks": "Icon to use when the process is active",
            "sameAsAttribute": "IMAGE",
            "sameAsObject": "MAXMENU"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relationship to the application where the button resides. (app = :appname). Single member set.",
            "whereClause": "app = :appname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFPROCESS",
            "target": "WFPROCESS",
            "remarks": "Relationship to the processname called by the button. (processname = :processname). Single member set.",
            "whereClause": "processname = :processname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WFAPPTOOLBAR",
            "source": "EDITWFAPPTOOLBAR",
            "remarks": "Relationship to the WFAppToolBar table which this set helps edit. (no where clause). Any number of members set.",
            "whereClause": "objectname=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFAPPTOOLBAR",
            "source": "MAXAPPS",
            "remarks": "Relationship to get WFAPPTOOLBAR",
            "whereClause": "appname=:app",
            "cardinality": null
        },
        {
            "name": "WFAPPTOOLBAR",
            "source": "WFPROCESS",
            "remarks": "This relationship gets all the toolbar info. (1=1). Zero to many member set.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}