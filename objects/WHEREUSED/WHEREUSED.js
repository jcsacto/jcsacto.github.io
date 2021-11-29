mos = {
    "objectName": "WHEREUSED",
    "className": "psdi.app.inventory.virtual.WhereUsedSet",
    "description": "Used for the Where Used tab in Inventory",
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
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Asset number of the item or tool currently being tracked, or the asset on which a spare part is being used.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "A brief written description of the asset.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "Quantity of this asset in the storeroom.",
            "sameAsAttribute": "QUANTITY",
            "sameAsObject": "SPAREPART"
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": false,
            "title": "Remarks",
            "remarks": "Describes the asset.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "NEWROW",
            "required": true,
            "persistent": false,
            "title": "New Row",
            "remarks": "Flag for when this is a new row",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "The orgid",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "The siteid",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "Item Set",
            "remarks": "Item set identifier for this item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "SPAREPARTID",
            "required": false,
            "persistent": false,
            "title": "SparePartId",
            "remarks": "Unique Identifier.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "WHEREUSEDASSET",
            "target": "ASSET",
            "remarks": "Relationship to the WhereUsed table, used to find the items in the virtual WhereUsed table for a given item. (Whereused.assetnum = Asset.assetnum). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the WHEREUSED to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the WHEREUSED to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WHEREUSED",
            "source": "INVENTORY",
            "remarks": "Relationship to the WhereUsed table, used to find the items in the virtual WhereUsed table for a given item. (Inventory.itemnum = Whereused.assetnum and whereused.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:itemnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}