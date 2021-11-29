mos = {
    "objectName": "EDITWFAPPTOOLBAR",
    "className": "psdi.workflow.virtual.EditWFAppToolBarSet",
    "description": "Edit Actions on WFAppToolBar",
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
            "attributeName": "APPNAME",
            "required": false,
            "persistent": false,
            "title": "Application",
            "remarks": "Application to add the toolbar button",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "PROCESSNAME",
            "required": false,
            "persistent": false,
            "title": "Process Name",
            "remarks": "Name of the process to launch from the Go button.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "ObjectName",
            "remarks": "Name of the MBO type for the application and process",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "WFAPPTOOLBAR",
            "target": "WFAPPTOOLBAR",
            "remarks": "Relationship to the WFAppToolBar table which this set helps edit. (no where clause). Any number of members set.",
            "whereClause": "objectname=:objectname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "EDITWFAPPTOOLBAR",
            "source": "WFPROCESS",
            "remarks": "Relationship to action set EditWFAppToolBar.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}