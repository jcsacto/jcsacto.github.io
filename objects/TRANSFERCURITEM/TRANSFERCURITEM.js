mos = {
    "objectName": "TRANSFERCURITEM",
    "className": "psdi.app.inventory.virtual.TransferCurItemSet",
    "description": "Parameters for Transfer Current Item functionality",
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
            "attributeName": "QUANTITY",
            "required": true,
            "persistent": false,
            "title": "Quantity",
            "remarks": "The quantity of this item to transfer to the destination location (SITEID).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FROMSTORELOC",
            "required": true,
            "persistent": false,
            "title": "From Storeroom",
            "remarks": "Source storeroom for transfer.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "TOSTORELOC",
            "required": true,
            "persistent": false,
            "title": "To Storeroom",
            "remarks": "Destination storeroom for transfer.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "Default issue cost of the item in the storeroom.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST",
            "required": false,
            "persistent": false,
            "title": "Line Cost",
            "remarks": "The linecost of the transfer, calculated as unitcost multiplied by quantity.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": false,
            "title": "GL Debit Account",
            "remarks": "GL Account to be debited on the transfer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": false,
            "title": "GL Credit Account",
            "remarks": "GL Account to be credited on the transfer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Remarks for this transfer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISLOT",
            "required": true,
            "persistent": false,
            "title": "Lot Tracked ",
            "remarks": "Is the item being issued or returned lotted?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FROMCURBAL",
            "required": false,
            "persistent": false,
            "title": "Current Balance",
            "remarks": "Current balance for the item at the from storeroom location.",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "FROMAVBLBALANCE",
            "required": false,
            "persistent": false,
            "title": "Available Balance for Originating Storeroom",
            "remarks": "Total available balance for the item in the storeroom across all bins.",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "Inventory identification number for the item being transferred.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "FROMBIN",
            "required": false,
            "persistent": false,
            "title": "From Bin",
            "remarks": "Source binnum for this transfer.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "FROMLOT",
            "required": false,
            "persistent": false,
            "title": "From Lot",
            "remarks": "Source lotnum for transfer.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "TOBIN",
            "required": false,
            "persistent": false,
            "title": "To Bin",
            "remarks": "Destination binnum for transfer.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "TOLOT",
            "required": false,
            "persistent": false,
            "title": "To Lot",
            "remarks": "Destination lotnum for transfer.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": false,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "TOSITEID",
            "required": true,
            "persistent": false,
            "title": "To Site",
            "remarks": "The site identification indicating where the item is transferred.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "Item Set",
            "remarks": "Item set identifier for the item being transferred.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": false,
            "title": "To Condition Code",
            "remarks": "The condition of the item being transferred.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "FROMCONDITIONCODE",
            "required": false,
            "persistent": false,
            "title": "From Condition Code",
            "remarks": "The condition code of the item in the originating storeroom.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "CONVERSION",
            "required": true,
            "persistent": false,
            "title": "Conversion Factor",
            "remarks": "Conversion factor to be used for this transfer's Material Receipt Transaction. For this field, the conversion is the ratio used to convert quantities of the received unit to the receiving storeroom's issue unit. Material Receipt Transaction refers to the MAXIMO table that stores transactions related to items being transferred into or received into a storeroom.",
            "sameAsAttribute": "CONVERSION",
            "sameAsObject": "CONVERSION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the TRANSFERCURITEM to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to Inventory, used to find the inventory for this TransferCurItem's ToStoreLoc. WHERE clause is: inventory.itemnum=transfercuritem.itemnum and inventory.location=transfercuritem.tostoreloc and inventory.itemsetid=transfercuritem.itemsetid and inventory.siteid=transfercuritem.siteid. Result will be one (if item already exists in the 'to' location) or zero objects.",
            "whereClause": "itemnum = :itemnum and location = :tostoreloc and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given transfer current itemy record. (itemcondition.itemnum = transfercuritem.itemnum and itemcondition.itemsetid=transfercuritem.itemsetid and itemcondition.conditioncode=transfercuritem.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "TRANSFERCURITEM",
            "source": "INVENTORY",
            "remarks": "Relationship to the non-persistent TransferCurItem table. (TransferCurItem.itemnum = inventory.itemnum and TransferCurItem.storeloc = inventory.location). The resulting set will contain zero objects. This relationship is used only for the Transfer Current Item action page on the Inventory application.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}