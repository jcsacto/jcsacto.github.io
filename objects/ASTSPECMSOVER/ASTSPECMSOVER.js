mos = {
    "objectName": "ASTSPECMSOVER",
    "className": "psdi.app.asset.topology.AssetSpecMouseOverSet",
    "description": "AssetSpec MouseOver Items",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASTSPECMSOVERID",
    "primaryKeyColumns": [
        "NAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
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
            "attributeName": "ASTSPECATTRIBUTE",
            "required": true,
            "persistent": true,
            "title": "Asset Specification ID",
            "remarks": "The specification for the asset attribute ID.",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
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
            "attributeName": "ASTSPECMSOVERID",
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
            "name": "TOPOMSSPEC",
            "source": "ASSET",
            "remarks": "Relationship to get topology mouse items indirectly through the ASSETSPEC's attribute.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}