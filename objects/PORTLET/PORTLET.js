mos = {
    "objectName": "PORTLET",
    "className": "psdi.app.scconfig.PortletSet",
    "description": "Available Portlets",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PORTLETUID",
    "primaryKeyColumns": [
        "PORTLETID"
    ],
    "logicalRelationships": [
        {
            "objectName": "PORTLET",
            "targetObject": "LAYOUT",
            "parentKeys": "PORTLETID",
            "targetKeys": "PORTLETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Portlet types available for the Start Center",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "PORTLETID",
            "required": false,
            "persistent": true,
            "title": "Portlet Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Portlet",
            "remarks": "The type of portlet.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FORMAT",
            "required": false,
            "persistent": true,
            "title": "Suggested Format",
            "remarks": "Suggested Format",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PORTLETUID",
            "required": true,
            "persistent": true,
            "title": "PORTLETUID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTROLNAME",
            "required": false,
            "persistent": true,
            "title": "Control Name",
            "remarks": "Control name for the portlet as specified in control-registry",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PORTLET",
            "source": "LAYOUT",
            "remarks": "Relationship between PORTLET Object and LAYOUT object. Used to return portlet information for a given portlet.",
            "whereClause": "portletid = :portletid",
            "cardinality": "UNDEFINED"
        }
    ]
}