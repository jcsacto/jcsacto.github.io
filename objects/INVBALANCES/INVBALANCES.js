mos = {
    "objectName": "INVBALANCES",
    "className": "psdi.app.inventory.InvBalancesSet",
    "description": "The Inventory Balances Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "INVBALANCESID",
    "primaryKeyColumns": [
        "ITEMNUM",
        "LOCATION",
        "BINNUM",
        "LOTNUM",
        "CONDITIONCODE",
        "SITEID",
        "ITEMSETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "INVLOT",
            "targetObject": "INVBALANCES",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Lot",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "INVBALANCES",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "INVBALANCES",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVBALANCES",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Balence Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVBALANCES",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVBALANCES",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVBALANCES",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Item",
            "remarks": "A unique identification number for an item in inventory in the selected storeroom.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "LOCATION",
            "required": true,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "A unique identification code indicating the primary storeroom location for the item.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "BINNUM",
            "required": false,
            "persistent": true,
            "title": "Bin",
            "remarks": "A unique identification code indicating the primary bin or storage location for the selected item or tool within a storeroom.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "LOTNUM",
            "required": false,
            "persistent": true,
            "title": "Lot",
            "remarks": "Lot number of the item or tool, if it exists in a lot.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "CURBAL",
            "required": true,
            "persistent": true,
            "title": "Current Balance",
            "remarks": "The current number of this item or tool at this location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PHYSCNT",
            "required": true,
            "persistent": true,
            "title": "Physical Count",
            "remarks": "The number of this item or tool logged the last time a physical count was performed at this location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PHYSCNTDATE",
            "required": false,
            "persistent": true,
            "title": "Physical Count Date",
            "remarks": "The date of the last physical count at this location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECONCILED",
            "required": true,
            "persistent": true,
            "title": "Reconciled",
            "remarks": "Checking this box indicates if the record has been reconciled or not. Valid values for this field are Y (yes) or N (no).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Set identifier for the item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "USEBY",
            "required": false,
            "persistent": false,
            "title": "Expiration Date",
            "remarks": "The date on which this item or tool's shelf life expires. Sometimes known as a Use-by date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHELFLIFE",
            "required": false,
            "persistent": false,
            "title": "Shelf Life (Days)",
            "remarks": "The maximum number of days that this item or tool can be stored.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADJUSTEDPHYSCNTDATE",
            "required": false,
            "persistent": false,
            "title": "Count Date",
            "remarks": "The date on which you perform a physical count to adjust the physical count field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADJUSTEDPHYSCNT",
            "required": false,
            "persistent": false,
            "title": "New Count",
            "remarks": "The current number of this item at this location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "A code indicating the condition of the item or tool.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "NEWCURBAL",
            "required": false,
            "persistent": false,
            "title": "New Balance",
            "remarks": "New quantity to adjust the item's current balance in the bin.",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "SHRINKAGEACC",
            "required": false,
            "persistent": false,
            "title": "Shrinkage Account",
            "remarks": "The inventory's shrinkage GL account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTROLACC",
            "required": false,
            "persistent": false,
            "title": "Control Account",
            "remarks": "The inventory's control GL account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVBALANCESID",
            "required": true,
            "persistent": true,
            "title": "INVBALANCESID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "INVTRANS"
        },
        {
            "attributeName": "ITEMTYPE",
            "required": false,
            "persistent": false,
            "title": "Item Type",
            "remarks": "Item Type",
            "sameAsAttribute": "ITEMTYPE",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "STAGINGBIN",
            "required": true,
            "persistent": true,
            "title": "Staging Bin",
            "remarks": "Indicates if this bin is used exclusively for staged issues and transfers.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STAGEDCURBAL",
            "required": false,
            "persistent": true,
            "title": "Staged Balance",
            "remarks": "The current balance in the bin that is staged for issue or transfer.",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "The LIFO/FIFO unit cost.",
            "sameAsAttribute": "UNITCOST",
            "sameAsObject": "INVLIFOFIFOCOST"
        },
        {
            "attributeName": "COSTDATE",
            "required": false,
            "persistent": false,
            "title": "Cost Date",
            "remarks": "The receipt date for the current cost record.",
            "sameAsAttribute": "COSTDATE",
            "sameAsObject": "INVLIFOFIFOCOST"
        },
        {
            "attributeName": "NEWPHYSCNT",
            "required": false,
            "persistent": false,
            "title": "New Physical Count",
            "remarks": "The quantity that results from a physical count of items in inventory.",
            "sameAsAttribute": "PHYSCNT",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "ITEMQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Requested",
            "remarks": "Number of items you need for the task. If you modify this field, Maximo recalculates the Line Cost field on the Materials subtab, and the Current Estimate Material Cost on the View Costs dialog box. You can edit this field if the work order's status allows work plan material edits. Work order editing rules are set up in the Organizations application.",
            "sameAsAttribute": "ITEMQTY",
            "sameAsObject": "JOBITEM"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory for a given inventory balance record. (invbalances.itemnum = inventory.itemnum and invbalances.location = inventory.location and inventory.itemsetid = invbalances.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and location = :location and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLOT",
            "target": "INVLOT",
            "remarks": "Relationship to the InvLot table, used to find the lot information for a given inventory balance record. (invlot.itemnum=invbalances.itemnum and invlot.location=invbalances.location and invlot.lotnum = invbalances.lotnum and invlot.siteid = invbalances.siteid and invlot.itemsetid = invbalances.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and location = :location and lotnum = :lotnum and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVTRANS",
            "target": "INVTRANS",
            "remarks": "Relationship to the InvTrans table, used to find the inventory adjustment transactions for a given inventory balance record. (invbalances.itemnum = invtrans.itemnum and invbalances.storeloc = invtrans.storeloc and invtrans.itemsetid = invbalances.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and storeloc = :location and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item for a given inventory balance record. (invbalances.itemnum = item.itemnum and item.itemsetid = invbalances.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given inventory balances record. (itemcondition.itemnum = invbalances.itemnum and itemcondition.itemsetid=invbalances.itemsetid and itemcondition.conditioncode=invbalances.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MOVETOINVBALANCES",
            "source": "ASSET",
            "remarks": "Relationship to the InvBalances table, used to find invbalances for a given rotating asset's itemnum, storeroom location, site and binnum. (invbalances.itemnum = asset.itemnum and invbalances.location = asset.newlocation and invbalances.siteid = asset.newsite and invbalances.binnum = asset.movemodifybinnum and invbalances.itemsetid = asset.itemsetid). This resulting set will contain zero or one object. Note: If and only if this asset object is a rotating piece of asset and in the process of being moved, describes the asset's relationship to invbalances via its itemnum, proposed destination location (Asset.NewLocation)in a given site and proposed destination binnum(Asset.Binnum) that is does this asset's itemnum already exist in the destination location/binnum. Lotnum is not included since only non-lotted items can be rotating.",
            "whereClause": "itemnum = :itemnum and location = :newlocation and siteid = :newsite and binnum=:movemodifybinnum and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MOVETOINVBALANCES_BINNULL",
            "source": "ASSET",
            "remarks": "Relationship to the InvBalances table, used to find invbalances for a given rotating asset's itemnum,storeroom location and site when the binnum is null. (invbalances.itemnum = asset.itemnum and invbalances.location = asset.newlocation and invbalances.siteid = asset.newsite and invbalances.binnum is null and invbalances.itemsetid = asset.itemsetid). This resulting set will contain zero or one object. Note: If and only if this asset object is a rotating piece of asset and in the process of being moved, describes the asset's relationship to invbalances via its itemnum and proposed destination location (Asset.NewLocation)in a given site when InvBalances.Binnum is null, that is does this asset's itemnum already exist in the destination location with a null binnum. Lotnum is not included since only non-lotted items can be rotating.",
            "whereClause": "itemnum = :itemnum and location = :newlocation and siteid = :newsite and binnum is null and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCES",
            "source": "INVENTORY",
            "remarks": "Relationship to the InvBalances table, used to find the on hand balances for a given inventory record. (invbalances.itemnum = inventory.itemnum and invbalances.location = inventory.location and invbalances.siteid = inventory.siteid and invbalances.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and location = :location and siteid = :siteid and itemsetid = :itemsetid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "INVBALANCES_DEFAULT",
            "source": "INVENTORY",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for a given inventory's default bin. (invbalances.itemnum = inventory.itemnum and invbalances.location = inventory.location and invbalances.binnum=inventory.binnum and invbalances.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and location = :location and binnum = :binnum and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCES_NOREC",
            "source": "INVENTORY",
            "remarks": "Relationship to the InvBalances, used to find the unreconciled balances for a given inventory record. (invbalances.itemnum = inventory.itemnum and invbalances.location = inventory.location and invbalances.reconciled = no and invbalances.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and location = :location and reconciled = :no and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCESNOSTGBIN",
            "source": "INVENTORY",
            "remarks": "Relationship to the InvBalances table, used to find the on hand balances for a given inventory record.",
            "whereClause": "itemnum=:itemnum and location=:location and siteid=:siteid and itemsetid=:itemsetid and stagingbin=:NO",
            "cardinality": null
        },
        {
            "name": "INVBALANCES",
            "source": "INVLOT",
            "remarks": "Relationship to the InvBalances table, used to find items that have balances on hand for a given lot. (invbalances.itemnum=invlot.itemnum and invbalances.location=invlot.location and invbalances.lotnum = invlot.lotnum and invbalances.siteid = invlot.siteid and invbalances.itemsetid = invlot.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and location = :location and lotnum = :lotnum and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCESOUT",
            "source": "INVUSE",
            "remarks": "Relationship to the InvBalances table. The resulting set will contain zero or more objects.",
            "whereClause": "location=:fromstoreloc and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVBALANCES",
            "source": "INVUSELINE",
            "remarks": "Relationship to invbalances table, used to find invbalances records for the invuseline record. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:tostoreloc and binnum=:tobin and lotnum=:tolot and itemsetid=:itemsetid and siteid=:tositeid",
            "cardinality": null
        },
        {
            "name": "INVBALANCES_BINLOT",
            "source": "INVUSELINE",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this material issue where the material being issued is a lot-tracking item and bin num and lot num are both specified. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and ( binnum is null or binnum=:frombin) and lotnum=:fromlot and itemsetid=:itemsetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVBALANCES_BINNOLOT",
            "source": "INVUSELINE",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this InvUseLine where the inventory usage document being issued is not a lot-tracking item and bin num is specified and lot num is null. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and binnum=:frombin and lotnum is null and itemsetid=:itemsetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVBALANCESBIN",
            "source": "INVUSELINE",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this material issue when bin num is specified but lot num is either specified or null. (invbalances.itemnum = invuseline.itemnum and invbalances.itemsetid = matusetrans.itemsetid  and invbalances.location = invuseline.fromstoreloc and invbalances.binnum=invuseline.frombin and invbalances.itemsetid = invuseline.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and location = :fromstoreloc and ( binnum is null or binnum = :frombin) and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVBALANCESBINLOT",
            "source": "INVUSELINESPLIT",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this InvUseLineSplit where the inventory usage document being issued is not a lot-tracking item and bin num is specified and lot num is specified. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and siteid=:siteid and itemsetid=:itemsetid and stagingbin=:NO and ( binnum is null or binnum=:frombin) and lotnum=:fromlot and (conditioncode is null or conditioncode=:fromconditioncode)",
            "cardinality": null
        },
        {
            "name": "INVBALANCESBINNOLOT",
            "source": "INVUSELINESPLIT",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this InvUseLineSplit where the inventory usage document being issued is not a lot-tracking item and bin num is specified and lot num is null. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and itemsetid=:itemsetid and siteid=:siteid and stagingbin=:NO and ( binnum is null or binnum=:frombin) and (conditioncode is null or conditioncode=:fromconditioncode)",
            "cardinality": null
        },
        {
            "name": "INVBALANCES",
            "source": "ITEM",
            "remarks": "Relationship to the InvBalances table, used to find all inventory balances for a given item. (invbalances.itemnum = item.itemnum and invbalances.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCES",
            "source": "ITEMORGINFO",
            "remarks": "Relationship to the InvBalances table, used to find all balance records for a given item. (invbalances.itemnum = itemorginfo.itemnum and invbalances.itemsetid = itemorginfo.itemsetid and invbalances.orgid=itemorgifo.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid = :itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCESIN",
            "source": "LOCATIONS",
            "remarks": "Relationship to the InvBalances table, used to find item balances for material transfers in to a given storeroom location. (invbalances.location = locations.location). The resulting set will contain zero or more objects. This relationship is primarily used for the Select Items for Transfer action on the Transfer In tab of the Issues and Transfers application.",
            "whereClause": "orgid =:orgid and curbal > 0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCESOUT",
            "source": "LOCATIONS",
            "remarks": "Relationship to the InvBalances table, used to find item balances for material transfers out of a given storeroom location. (invbalances.location = locations.location). The resulting set will contain zero or more objects. This relationship is primarily used for the Select Items for Transfer action on the Transfer Out tab of the Issues and Transfers application.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCES",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the Invbalances table, used to find the balances on hand before the material is received to the bin in the storeroom. (invbalances.itemnum = matrectrans.itemnum and invbalances.location = matrectrans.tostoreloc and invbalances.binnum = matrectrans.tobin and invbalances.lotnum = matrectrans.tolot and invbalances.itemsetid = matrectrans.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:tostoreloc and binnum = :tobin and lotnum = :tolot and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCES_BIN",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this material issue when bin num is specified but lot num is either specified or null. (invbalances.itemnum = matusetrans.itemnum and invbalances.itemsetid = matusetrans.itemsetid  and invbalances.location = matusetrans.storeloc and invbalances.binnum=matusetrans.binnum and invbalances.itemsetid = matusetrans.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and location = :storeloc and binnum = :binnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCES_BINLOT",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this material issue where the material being issued is a lot-tracking item and bin num and lot num are both specified. (invbalances.itemnum = matusetrans.itemnum and invbalances.location = matusetrans.storeloc and invbalances.binnum = matusetrans.binnum and invbalances.lotnum = matusetrans.lotnum and invbalances.itemsetid = matusetrans.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and location = :storeloc and binnum = :binnum and lotnum = :lotnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCES_BINNOLOT",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this material issue where the material being issued is not a lot-tracking item and bin num is specified and lot num is null. (invbalances.itemnum = matusetrans.itemnum and invbalances.location = matusetrans.storeloc and invbalances.binnum = matusetrans.binnum and invbalances.lotnum = is null and invbalances.itemsetid = matusetrans.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and location = :storeloc and binnum = :binnum and lotnum is null and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCES",
            "source": "SPLITUSELINE",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this InvUseLine where bin num is specified. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and itemsetid=:itemsetid and siteid=:siteid and stagingbin=:NO",
            "cardinality": null
        },
        {
            "name": "INVBALANCESCC",
            "source": "SPLITUSELINE",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this material issue when bin num is specified but lot num is either specified or null. (invbalances.itemnum = invuseline.itemnum and invbalances.itemsetid = matusetrans.itemsetid  and invbalances.location = invuseline.fromstoreloc and invbalances.binnum=invuseline.frombin and invbalances.itemsetid = invuseline.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and location = :fromstoreloc and ( conditioncode is null or conditioncode =:fromconditioncode) and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVBALANCESLOT",
            "source": "SPLITUSELINE",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for inventory usage line with bin num and lot num are both specified. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and lotnum=:fromlot and itemsetid=:itemsetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVBALANCES",
            "source": "TOOLINV",
            "remarks": "Stocked Tools Report Object Structure",
            "whereClause": "itemnum=:itemnum and location=:location and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "WPINVBALANCES",
            "source": "WORKORDER",
            "remarks": "Relationship to the InvBalances table, used to find all inventory balances for a given item. (invbalances.itemnum = item.itemnum and invbalances.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=invbalances.itemsetid and itemsetid=invbalances.itemsetid and storelocsite=invbalances.siteid and location=invbalances.location)",
            "cardinality": null
        },
        {
            "name": "WPINVBALANCES_ALL",
            "source": "WORKORDER",
            "remarks": "Relationship to the InvBalances table, used to find all inventory balances for a given item. (invbalances.itemnum = item.itemnum and invbalances.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=invbalances.itemsetid)",
            "cardinality": null
        }
    ]
}