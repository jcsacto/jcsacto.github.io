mos = {
    "objectName": "ASTMSOVER",
    "className": "psdi.app.asset.topology.AssetMouseOverSet",
    "description": "Asset MouseOver Items",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASTMSOVERID",
    "primaryKeyColumns": [
        "NAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "ASTMSOVER",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "MOOBJECT, MOATTRIBUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute to Include",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ASTMSOVER",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MOOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Included MBO",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NAME",
            "required": true,
            "persistent": true,
            "title": "Internal Name",
            "remarks": "A user-defined field which identifies the attribute internally. This field must be unique.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MOOBJECT",
            "required": true,
            "persistent": true,
            "title": "Object",
            "remarks": "Specify an object to include in the asset summary view.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MOATTRIBUTE",
            "required": true,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Specify the object attribute to include in the asset summary view.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "TITLE",
            "required": false,
            "persistent": true,
            "title": "Display Title",
            "remarks": "The name that is displayed for the attribute in the asset summary view.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWINMOUSEOVER",
            "required": true,
            "persistent": true,
            "title": "Show in Summary View",
            "remarks": "If selected, this attribute is included in the asset summary view.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYORDER",
            "required": true,
            "persistent": true,
            "title": "Display Order",
            "remarks": "This entry determines the order in which the attributes are displayed in the asset summary view.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASTMSOVERID",
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
            "name": "TOPOMSFIELD",
            "source": "ASSET",
            "remarks": "Relationship to get topology mouse items directly from table field.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}