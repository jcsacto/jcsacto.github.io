mos = {
    "objectName": "SKDRESOURCEVIEW",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Resource Views",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDRESOURCEVIEWID",
    "primaryKeyColumns": [
        "VIEWNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "VIEWNAME",
            "required": true,
            "persistent": true,
            "title": "Name of the Resource View",
            "remarks": "Unique Name that identifies the Resource View",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TITLE",
            "required": true,
            "persistent": true,
            "title": "Title of the Resource View",
            "remarks": "Title of the Resource View to identify its purpose",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSNAME",
            "required": true,
            "persistent": true,
            "title": "Java Class Name",
            "remarks": "Class Name that implements the initialization and behavior of the Resource View",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VIEWINDEX",
            "required": true,
            "persistent": true,
            "title": "Index of the Resource View",
            "remarks": "Index of the Resource View to indicate where this Resource View needs to be shown",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VIEWTOOLTIP",
            "required": false,
            "persistent": true,
            "title": "Tool Tip",
            "remarks": "Tool Tip that can be used to display additional information about the Resource View",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VIEWICON",
            "required": false,
            "persistent": true,
            "title": "Icon Name",
            "remarks": "Path to the icon included in the applet jar file",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDRESOURCEVIEWID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEWITH",
            "required": true,
            "persistent": true,
            "title": "USEWITH",
            "remarks": "Use with Scheduler or Graphical Assignment",
            "sameAsAttribute": "USEWITH",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "LANGCODE",
            "required": false,
            "persistent": true,
            "title": "Language code",
            "remarks": "Language code",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}