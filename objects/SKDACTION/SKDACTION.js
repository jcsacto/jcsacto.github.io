mos = {
    "objectName": "SKDACTION",
    "className": "com.ibm.tivoli.maximo.skd.skdaction.SKDActionSet",
    "description": "Table to register actions",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDACTIONID",
    "primaryKeyColumns": [
        "SKDOBJECTNAME",
        "OBJECTNAME",
        "ACTIONNAME",
        "USEWITH",
        "FRAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDACTION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDACTION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Storage MBO",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SKDOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Scheduler Object Name",
            "remarks": "The location where data will be stored in Scheduler.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "APPLETACTCLASS",
            "required": false,
            "persistent": true,
            "title": "Applet action class name",
            "remarks": "Class Name of the applet side action class",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDACTCLASS",
            "required": true,
            "persistent": true,
            "title": "Scheduler action class name",
            "remarks": "Class Name of the Server side action class",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TITLE",
            "required": true,
            "persistent": true,
            "title": "Title",
            "remarks": "Action title",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARK",
            "required": false,
            "persistent": true,
            "title": "Remark",
            "remarks": "Description about the action",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIONNAME",
            "required": true,
            "persistent": true,
            "title": "Action Name",
            "remarks": "Name of the action",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISMENUBASED",
            "required": true,
            "persistent": true,
            "title": "Menu based action",
            "remarks": "Is the action menu based",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDACTIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": false,
            "persistent": true,
            "title": "Language code",
            "remarks": "Language code",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MULTIREC",
            "required": true,
            "persistent": true,
            "title": "Multiple Records",
            "remarks": "Applied for multiple records",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DLGNAME",
            "required": false,
            "persistent": true,
            "title": "Dialog Name",
            "remarks": "Name of the dialog displayed for action",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MENUORDER",
            "required": true,
            "persistent": true,
            "title": "Order",
            "remarks": "Menu Order",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEWITH",
            "required": true,
            "persistent": true,
            "title": "USEWITH",
            "remarks": "Use for menu actions for different apps.",
            "sameAsAttribute": "USEWITH",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "FRAME",
            "required": true,
            "persistent": true,
            "title": "FRAME",
            "remarks": "Use for menu actions for different apps different chart frames.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICENSE",
            "required": false,
            "persistent": true,
            "title": "License",
            "remarks": "License for the action. Can be empty - no license check.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}