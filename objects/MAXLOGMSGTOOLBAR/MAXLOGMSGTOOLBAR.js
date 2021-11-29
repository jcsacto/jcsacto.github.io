mos = {
    "objectName": "MAXLOGMSGTOOLBAR",
    "className": "psdi.util.logging.MaxLogMSGToolBarSet",
    "description": "Add Custom Log Message toolbar Icon",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLOGMSGTOOLBARID",
    "primaryKeyColumns": [
        "APPNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXLOGMSGTOOLBAR",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "APPNAME",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "TOOLBARLOCATION",
            "required": true,
            "persistent": true,
            "title": "Toolbar Location",
            "remarks": "Toolbar Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOLBARICON",
            "required": true,
            "persistent": true,
            "title": "Toolbar Icon",
            "remarks": "Toolbar Icon",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOLBARSEQUENCE",
            "required": true,
            "persistent": true,
            "title": "Toolbar Sequence",
            "remarks": "Toolbar Sequence",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of this button",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXLOGMSGTOOLBARID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXLOGMSGTOOLBAR",
            "source": "MAXAPPS",
            "remarks": "Relationship from MAXAPPS to MAXLOGMSGTOOLBAR",
            "whereClause": "appname=:app",
            "cardinality": null
        },
        {
            "name": "MAXLOGMSGTOOLBAR",
            "source": "MAXLOGMSGTOOLDISP",
            "remarks": "Relationship from MAXLOGMSGTOOLDISP to MAXLOGMSGTOOLBAR",
            "whereClause": "appname=:app",
            "cardinality": null
        }
    ]
}