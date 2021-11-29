mos = {
    "objectName": "ITEMSTRUCT",
    "className": "psdi.app.item.ItemStructSet",
    "description": "The ITEMSTRUCT Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ITEMSTRUCTID",
    "primaryKeyColumns": [
        "ITEMID",
        "ITEMNUM",
        "INSTANCE",
        "ITEMSETID"
    ],
    "logicalRelationships": [
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "ITEMID, ITEMID, PARINST, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "ITEMID, ITEMNUM, PARINST, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "ITEMID, PARENT, PARINST, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Item Structure",
            "longDescription": null
        },
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMID, PARINST, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMNUM, PARINST, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "ITEMNUM, PARENT, PARINST, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "PARENT, ITEMID, PARINST, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "PARENT, ITEMNUM, PARINST, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "PARENT, PARENT, PARINST, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ITEM",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMID, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Top-Level Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "PARENT, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "ITEMID, ITEMID, PARINST, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "ITEMID, ITEMNUM, PARINST, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "ITEMID, PARENT, PARINST, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Item Structure",
            "longDescription": null
        },
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMID, PARINST, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMNUM, PARINST, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "ITEMNUM, PARENT, PARINST, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "PARENT, ITEMID, PARINST, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "PARENT, ITEMNUM, PARINST, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "ITEMSTRUCT",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMID, ITEMNUM, INSTANCE, ITEMSETID",
            "targetKeys": "PARENT, PARENT, PARINST, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 35",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Item",
            "remarks": "Item at either the current level of the item assembly structure (the components of which show in the Children table window) or item that shows the item that the current-level item belongs to in the hierarchy. Click the Detail Menu button to view items by classification or availability.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "INSTANCE",
            "required": true,
            "persistent": true,
            "title": "Instance",
            "remarks": "Instance of Item Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENT",
            "required": false,
            "persistent": true,
            "title": "Parent",
            "remarks": "Parent Inventory Item Number",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "PARINST",
            "required": false,
            "persistent": true,
            "title": "Parinst",
            "remarks": "Instance of Parent Item Number",
            "sameAsAttribute": "INSTANCE",
            "sameAsObject": "ITEMSTRUCT"
        },
        {
            "attributeName": "ITEMID",
            "required": true,
            "persistent": true,
            "title": "Item ID",
            "remarks": "Top Level Item for the Item Assembly Structure",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Quantity of this item in the structure. mroBuyer enters a default value of 1 in this field. You cannot edit the field if this is a rotating item.",
            "sameAsAttribute": "QUANTITY",
            "sameAsObject": "SPAREPART"
        },
        {
            "attributeName": "REMARK",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Comments associated with the item within the item assembly structure. Unlike the description, the remark applies only to the item in the context of the item assembly structure. The remark does not appear on the Item record on the Item tab. Click the Long Description button to enter more details.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IAS1",
            "required": false,
            "persistent": true,
            "title": "Ias1",
            "remarks": "PAS Extra Field #1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IAS2",
            "required": false,
            "persistent": true,
            "title": "Ias2",
            "remarks": "PAS Extra Field #2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IAS3",
            "required": false,
            "persistent": true,
            "title": "Ias3",
            "remarks": "PAS Extra Field #3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IAS4",
            "required": false,
            "persistent": true,
            "title": "Ias4",
            "remarks": "PAS Extra Field #4",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IAS5",
            "required": false,
            "persistent": true,
            "title": "Ias5",
            "remarks": "PAS Extra Field #5",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item set identifier for the items.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "REMARK_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Remark Long Description",
            "remarks": "Long Description for Remark",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IASDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "IASDESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROTSUSPACCT",
            "required": false,
            "persistent": false,
            "title": "Rotating Suspense Account",
            "remarks": "ROTSUSPACCT",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": false,
            "title": "GL Account",
            "remarks": "GLACCOUNT",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Current Location",
            "remarks": "LOCATION",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "ASSETNUM",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ITEMSTRUCTID",
            "required": true,
            "persistent": true,
            "title": "ITEMSTRUCTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KITQUANTITY",
            "required": false,
            "persistent": false,
            "title": "Kit Quantity",
            "remarks": "quantity of this component used by the kit.  It is calculated as the product of this ItemStruct's Quantity and the Quantity attribute in the corresponding Kit object",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization Identifier - non persistent",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item referenced by the item in the item assembly structure. (itemstruct.itemnum = item.itemnum and item.itemsetid = itemstruct.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMIDITEMISKIT",
            "target": "ITEM",
            "remarks": "Rel. to Item, used to find the kit item assoc. with this ItemStruct's ItemID. WHERE clause is: item.itemnum=itemstruct.itemid and item.iskit=1 and item.itemsetid=itemstruct.itemsetid. Result will be one (if ItemStruct is a kit structure) or zero objects.",
            "whereClause": "itemnum=:itemid and iskit=1 and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item referenced by the parent in the item assembly structure (If this is the top level item, the parent will be null). (itemstruct.parent = item.itemnum and item.itemsetid = itemstruct.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :parent and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SUBASSEMBLY",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find another top level item structure which is being added to the current hierarchy. (If the item being added as a child to the current hierarchy has its own item structure, we will want to copy its descents to this new hierarchy ). (itemstruct.itemnum=itemstruct.itemnum and itemstruct.itemid != itemstruct.itemid and itemstruct.itemid = itemstruct.itemnum and itemstruct.parent is null and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemid != :itemid and itemnum=itemid and parent is null and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMINSTANCE",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find item structure records where the itemnum is same as this itemnum because an item may be referrenced in multiple item structure records. (itemstruct.itemnum = itemstruct.itemnum and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or more object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSTRUCT",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find existing item structure records that have the same itemid and itemnum as this item structure. (itemstruct.itemid = itemstruct.itemid and itemstruct.itemnum = itemstruct.itemnum and itemstruct.itemnum = itemstruct.itemid and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemid = :itemid and itemnum = :itemnum and itemnum = itemid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENT",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find the parent item structure record. (itemstruct.itemid = itemstruct.itemid and itemstruct.itemnum = itemstruct.parent and itemstruct.instance = itemstruct.parinst and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or one object. It will contain zero objects if this is a top level itemstruct.",
            "whereClause": "itemid=:itemid and itemnum = :parent and instance = :parinst and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find the child item structure records. (itemstruct.itemid = itemstruct.itemid and itemstruct.parent = itemstruct.itemnum and itemstruct.parinst = itemstruct.instance and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemid=:itemid and parent = :itemnum and parinst = :instance and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN_NONROTATING",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find the child item structure records which are not rotating items. (itemstruct.itemid = itemstruct.itemid and itemstruct.parent = itemstruct.itemnum and itemstruct.parinst = itemstruct.instance and exists (select 1 from item where item.rotating=:no and item.itemnum=itemstruct.itemnum) and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemid=:itemid and parent = :itemnum and parinst = :instance and exists (select 1 from item where item.rotating = :no and item.itemnum = itemstruct.itemnum) and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN_ROTATING",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find the child item structure records which are rotating items. (itemstruct.itemid = itemstruct.itemid and itemstruct.parent = itemstruct.itemnum and itemstruct.parinst = itemstruct.instance and exists (select 1 from item where item.rotating=:yes and item.itemnum=itemstruct.itemnum) and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemid=:itemid and parent = :itemnum and parinst = :instance and exists (select 1 from item where item.rotating = :yes and item.itemnum = itemstruct.itemnum) and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN_ROTATING_ASSET",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find the child item structure records which are rotating items (used for apply item assembly structure on a piece of asset). (itemstruct.itemid = itemstruct.itemid and itemstruct.parent = itemstruct.itemnum and itemstruct.parinst = itemstruct.instance and exists (select 1 from item where item.rotating=:yes and item.itemnum=itemstruct.itemnum) and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemid=:itemid and parent = :itemnum and parinst = :instance and exists (select 1 from item where item.rotating = :yes and item.itemnum = itemstruct.itemnum ) and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN_ROTATING_LOCATION",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find the child item structure records which are rotating items. (used for apply item assembly structure for a location). (itemstruct.itemid = itemstruct.itemid and itemstruct.parent = itemstruct.itemnum and itemstruct.parinst = itemstruct.instance and exists (select 1 from item where item.rotating=:yes and item.itemnum=itemstruct.itemnum) and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemid=:itemid and  parent = :itemnum and parinst = :instance and exists (select 1 from item where item.rotating = :yes and item.itemnum = itemstruct.itemnum) and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the ITEMSTRUCT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "TOPITEMSTRUCT",
            "source": "ASSET",
            "remarks": "Relationship to the Top-level ItemStruct table, used to find the item struct for a given rotating asset.(itemstruct.itemnum = asset.itemnum and itemstruct.itemid=asset.itemnum and itemstruct.parent is null and itemstruct.itemsetid = asset.itemsetid). This resulting set will contain zero or 1 object.",
            "whereClause": "1=1",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "TOPITEMSTRUCT",
            "source": "ASSETINPUT",
            "remarks": "Relationship to the ItemStruct table, used to find the top-level item assembly structure which contains the ItemNum. (ItemStruct.Itemnum =AssetInput.itemnum and itemstruct.itemid=AssetInput.itemnum and itemstruct.parent is null and itemstruct.itemsetid = assetinput.itemsetid). The resulting set will contain zero or one object. AssetInput is a non-persistent table. See psdi.app.inventory.virtual.AssetInput for more information.",
            "whereClause": "itemnum=:itemnum and itemid = :itemnum and parent is null and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPITEMSTRUCT_1",
            "source": "ASSETINPUT",
            "remarks": null,
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FIRSTLEVELKITSTRUCT",
            "source": "INVENTORY",
            "remarks": "Relationship to the inventory's first level ItemStruct recs. The WHERE clause is: (itemstruct.parent=inventory.itemnum or itemstruct.parent is null) and itemstruct.itemid=inventory.itemnum and itemstruct.itemsetid=inventory.itemsetid. Result set will contain zero or more objects.",
            "whereClause": "(parent=:itemnum or parent is null) and itemid=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSTRUCT",
            "source": "ITEM",
            "remarks": "Relationship to the ItemStruct table, used to find all item structure records for a given item. (item.itemnum = itemstruct.itemnum and itemstruct.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COPYIASDLG",
            "source": "ITEM",
            "remarks": "Relationship to the Item table, used to get all top-level item structure MBOs for the copy item assembly structure functionality. (itemnum = itemid and parent is null and itemstruct.itemsetid = item.itemsetid). The resulting set will contain one or more objects.",
            "whereClause": "itemnum=itemid and parent is null and itemsetid=:itemsetid and itemnum in (select a.parent from itemstruct a where a.itemid=itemstruct.itemid and a.itemsetid=itemstruct.itemsetid and a.itemnum !=a.itemid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPITEMSTRUCT",
            "source": "ITEM",
            "remarks": "Relationship to the ItemStruct table, used to find the top-level item structure record for a given item. (item.itemnum = itemstruct.itemnum and item.itemnum=itemstruct.itemid and itemstruct.parent is null and item.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or 1 object.",
            "whereClause": "itemnum = :itemnum and itemid = :itemnum and parent is null and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPITEMSTRUCT_1",
            "source": "ITEM",
            "remarks": "Relationship to the itemstruct table, used to find the top item struct record in Move To for a given item. (1=1). The resulting set will contain zero or more objects.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDRENITEMSTRUCT",
            "source": "ITEM",
            "remarks": "Relationship to the ItemStruct table, used to find all children item structure records a given item which may be a top level item. (item.itemnum = itemstruct.itemid and item.itemnum != itemstruct.itemnum and item.itemnum=itemstruct.parent and itemstruct.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemid = :itemnum and itemnum != :itemnum and parent= :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SUBASSEMBLY",
            "source": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find another top level item structure which is being added to the current hierarchy. (If the item being added as a child to the current hierarchy has its own item structure, we will want to copy its descents to this new hierarchy ). (itemstruct.itemnum=itemstruct.itemnum and itemstruct.itemid != itemstruct.itemid and itemstruct.itemid = itemstruct.itemnum and itemstruct.parent is null and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemid != :itemid and itemnum=itemid and parent is null and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMINSTANCE",
            "source": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find item structure records where the itemnum is same as this itemnum because an item may be referrenced in multiple item structure records. (itemstruct.itemnum = itemstruct.itemnum and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or more object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSTRUCT",
            "source": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find existing item structure records that have the same itemid and itemnum as this item structure. (itemstruct.itemid = itemstruct.itemid and itemstruct.itemnum = itemstruct.itemnum and itemstruct.itemnum = itemstruct.itemid and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemid = :itemid and itemnum = :itemnum and itemnum = itemid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENT",
            "source": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find the parent item structure record. (itemstruct.itemid = itemstruct.itemid and itemstruct.itemnum = itemstruct.parent and itemstruct.instance = itemstruct.parinst and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or one object. It will contain zero objects if this is a top level itemstruct.",
            "whereClause": "itemid=:itemid and itemnum = :parent and instance = :parinst and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "source": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find the child item structure records. (itemstruct.itemid = itemstruct.itemid and itemstruct.parent = itemstruct.itemnum and itemstruct.parinst = itemstruct.instance and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemid=:itemid and parent = :itemnum and parinst = :instance and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN_NONROTATING",
            "source": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find the child item structure records which are not rotating items. (itemstruct.itemid = itemstruct.itemid and itemstruct.parent = itemstruct.itemnum and itemstruct.parinst = itemstruct.instance and exists (select 1 from item where item.rotating=:no and item.itemnum=itemstruct.itemnum) and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemid=:itemid and parent = :itemnum and parinst = :instance and exists (select 1 from item where item.rotating = :no and item.itemnum = itemstruct.itemnum) and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN_ROTATING",
            "source": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find the child item structure records which are rotating items. (itemstruct.itemid = itemstruct.itemid and itemstruct.parent = itemstruct.itemnum and itemstruct.parinst = itemstruct.instance and exists (select 1 from item where item.rotating=:yes and item.itemnum=itemstruct.itemnum) and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemid=:itemid and parent = :itemnum and parinst = :instance and exists (select 1 from item where item.rotating = :yes and item.itemnum = itemstruct.itemnum) and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN_ROTATING_ASSET",
            "source": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find the child item structure records which are rotating items (used for apply item assembly structure on a piece of asset). (itemstruct.itemid = itemstruct.itemid and itemstruct.parent = itemstruct.itemnum and itemstruct.parinst = itemstruct.instance and exists (select 1 from item where item.rotating=:yes and item.itemnum=itemstruct.itemnum) and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemid=:itemid and parent = :itemnum and parinst = :instance and exists (select 1 from item where item.rotating = :yes and item.itemnum = itemstruct.itemnum ) and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN_ROTATING_LOCATION",
            "source": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find the child item structure records which are rotating items. (used for apply item assembly structure for a location). (itemstruct.itemid = itemstruct.itemid and itemstruct.parent = itemstruct.itemnum and itemstruct.parinst = itemstruct.instance and exists (select 1 from item where item.rotating=:yes and item.itemnum=itemstruct.itemnum) and itemstruct.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemid=:itemid and  parent = :itemnum and parinst = :instance and exists (select 1 from item where item.rotating = :yes and item.itemnum = itemstruct.itemnum) and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENTIREKITSTRUCT",
            "source": "KIT",
            "remarks": "Relationship to the ItemStruct table used to find all ItemStruct records that belong to this kit's assembly structure. (itemstruct.itemid = kit.itemnum and itemstruct.itemsetid = kit.itemsetid).  The resulting set will contain zero or more objects.",
            "whereClause": "itemid = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FIRSTLEVELKITSTRUCT",
            "source": "KIT",
            "remarks": "Rel to kit's first level ItemStruct recs.(itemstruct.parent=kit.itemnum or itemstruct.parent is null ) and itemstruct.itemid=kit.itemnum and itemstruct.itemsetid=kit.itemsetid). Result set will contain zero or more objects.",
            "whereClause": "(parent=:itemnum or parent is null) and itemid=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPITEMSTRUCT",
            "source": "LOCATIONS",
            "remarks": "Relationship to the ItemStruct table, used to find the top-level item assembly structure which contains the operating location's ItemNum. (ItemStruct.Itemnum =location.itemnum and itemstruct.itemid=location.itemnum and itemstruct.parent is null and itemstruct.itemsetid = locations.itemsetid). The resulting set will contain zero or one object. ItemNum is a non-persistent column for the Location object. See the attribute defined in Location table for more information.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSTRUCT",
            "source": "LOCOPER",
            "remarks": "Relationship to the ItemStruct table, used to find all item assembly structure records for the rotating item at the location. (locoper.itemnum=itemstruct.itemnum and itemstruct.itemsetid = locoper.itemsetid). The resulting set will contain zero or more objects. If records are found, it indicates that the rotating item belongs to some item assembly structures.",
            "whereClause": "itemnum=:itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSTRUCTID",
            "source": "LOCOPER",
            "remarks": "Relationship to the ItemStruct table, used to find the child item assembly structure records for the rotating item at thelocation. (locoper.itemnum=itemstruct.itemid and locoper.itemnum = itemstruct.parent and itemstruct.itemsetid = locoper.itemsetid). The resulting set will contain zero or more objects. If records are found, it indicates that the rotating item is a top-level item and have its own assembly structure.",
            "whereClause": "itemid=:itemnum and parent = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        }
    ]
}