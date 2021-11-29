mos = {
    "objectName": "ASSETINPUT",
    "className": "psdi.app.inventory.virtual.AssetInputSet",
    "description": "Information gathering for creating assets",
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
            "remarks": "Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Asset Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "Inventory Item Number",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "Unit Cost of Item",
            "sameAsAttribute": "PURCHASEPRICE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": false,
            "title": "GL Account",
            "remarks": "GL Account Code for Asset",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERIALNUM",
            "required": false,
            "persistent": false,
            "title": "Serial #",
            "remarks": "Asset Serial Number",
            "sameAsAttribute": "SERIALNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "MATRECTRANSID",
            "required": false,
            "persistent": false,
            "title": "MatRecTransID",
            "remarks": "Material Request ID",
            "sameAsAttribute": "MATRECTRANSID",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "ROTSUSPACCT",
            "required": false,
            "persistent": false,
            "title": "Rotating Suspence Account",
            "remarks": "Rotating Repairs Suspense Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "Item Set",
            "remarks": "Set identifier for the item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": false,
            "title": "Condition Code",
            "remarks": "Item condition code of the new asset being received",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "Charge Location.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": false,
            "title": "Contract",
            "remarks": "Contract Number",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": false,
            "title": "Revision",
            "remarks": "Contract Revision Number",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "ASSETID",
            "required": false,
            "persistent": false,
            "title": "Asset ID",
            "remarks": "Unique id for the asset",
            "sameAsAttribute": "ASSETID",
            "sameAsObject": "ASSET"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given AssetInput record. (itemcondition.itemnum = assetinput.itemnum and itemcondition.itemsetid=assetinput.itemsetid and itemcondition.conditioncode=assetinput.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPITEMSTRUCT",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find the top-level item assembly structure which contains the ItemNum. (ItemStruct.Itemnum =AssetInput.itemnum and itemstruct.itemid=AssetInput.itemnum and itemstruct.parent is null and itemstruct.itemsetid = assetinput.itemsetid). The resulting set will contain zero or one object. AssetInput is a non-persistent table. See psdi.app.inventory.virtual.AssetInput for more information.",
            "whereClause": "itemnum=:itemnum and itemid = :itemnum and parent is null and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPITEMSTRUCT_1",
            "target": "ITEMSTRUCT",
            "remarks": null,
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ASSETINPUT",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the AssetInput table, used to find the AssetInput records for a given MatRecTrans. The resulting set will contain 1  object.",
            "whereClause": "orgid = :orgid and matrectransid = :matrectransid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETINPUT",
            "source": "PO",
            "remarks": "Relationship to the non-persistent AssetInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Receiving application, Receive Rotating Items action to display records based on MatRecTrans table with rotating asset for a given purchase order.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETINPUT",
            "source": "SHIPMENT",
            "remarks": "Relationship to the non-persistent AssetInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Receiving application, Receive Rotating Items action to display records based on MatRecTrans table with rotating asset for a given shipment.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}