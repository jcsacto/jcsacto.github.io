mos = {
    "objectName": "INBXCONFIG",
    "className": "psdi.app.inbxconfig.InbxConfigSet",
    "description": "Inbox Portlet Configuration",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "INBXCONFIGID",
    "primaryKeyColumns": [
        "INBXCONFIGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LAYOUT",
            "targetObject": "INBXCONFIG",
            "parentKeys": "LAYOUTID",
            "targetKeys": "LAYOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the Inbox/Assignments Portlet Configuration to the Start Center Layout",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INBXCONFIGID",
            "required": true,
            "persistent": true,
            "title": "Inbox Configuration Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LAYOUTID",
            "required": false,
            "persistent": true,
            "title": "Layout",
            "remarks": "Layout Id",
            "sameAsAttribute": "LAYOUTID",
            "sameAsObject": "LAYOUT"
        },
        {
            "attributeName": "INBXCOLUMN",
            "required": false,
            "persistent": true,
            "title": "Column",
            "remarks": "Inbox Column",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Custom Column Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORDERNUM",
            "required": false,
            "persistent": true,
            "title": "Order",
            "remarks": "Order appearance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAY",
            "required": true,
            "persistent": true,
            "title": "Display",
            "remarks": "Display",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTENTUID",
            "required": true,
            "persistent": true,
            "title": "CONTENTUID",
            "remarks": "Content Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "INBXCONFIG",
            "source": "LAYOUT",
            "remarks": "Relationship between INBXCONFIG Object and LAYOUT object. Used to return Inbox portlet configuration for a given portlet.",
            "whereClause": "layoutid = :layoutid",
            "cardinality": "UNDEFINED"
        }
    ]
}