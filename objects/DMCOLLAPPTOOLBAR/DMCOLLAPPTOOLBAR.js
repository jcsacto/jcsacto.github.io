mos = {
    "objectName": "DMCOLLAPPTOOLBAR",
    "className": "psdi.dm.collection.DMCollToolIconSet",
    "description": "Add to Migration Collection toolbar Icon",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMCOLLAPPTOOLBARID",
    "primaryKeyColumns": [
        "DMCOLLAPPTOOLBARID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DMCOLLAPPTOOLBAR",
            "targetObject": "L_DMCOLLAPPTOOLBAR",
            "parentKeys": "DMCOLLAPPTOOLBARID",
            "targetKeys": "OWNERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner ID of Object used for Multi Language translation.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "DMCOLLAPPTOOLBAR",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application assiciated with the toolbar entry.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "APPNAME",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "TOOLBARLOCATION",
            "required": false,
            "persistent": true,
            "title": "Toolbar Location",
            "remarks": "Toolbar Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOLBARICON",
            "required": false,
            "persistent": true,
            "title": "Toolbar Icon",
            "remarks": "Toolbar Icon",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOLBARSEQUENCE",
            "required": false,
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
            "attributeName": "DMCOLLAPPTOOLBARID",
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
            "name": "DMCOLLAPPTOOLBAR",
            "source": "DMCOLLTOOLDISP",
            "remarks": "Relationship from DMCOLLTOOLDISP to DMCOLLAPPTOOLBAR",
            "whereClause": "appname=:app",
            "cardinality": null
        },
        {
            "name": "DMCOLLAPPTOOLBAR",
            "source": "MAXAPPS",
            "remarks": "Relationship from MAXAPPS to DMCOLLAPPTOOLBAR",
            "whereClause": "appname=:app",
            "cardinality": null
        }
    ]
}