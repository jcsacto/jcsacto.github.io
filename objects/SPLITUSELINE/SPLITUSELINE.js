mos = {
    "objectName": "SPLITUSELINE",
    "className": "psdi.app.inventory.virtual.SplitUseLineSet",
    "description": "Inventory Usage Lines that requires split.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "CONTENTUID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "INVUSENUM",
            "required": false,
            "persistent": false,
            "title": "Usage",
            "remarks": "The identifier of the inventory usage.",
            "sameAsAttribute": "INVUSENUM",
            "sameAsObject": "INVUSE"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "The site of the organization that is associated with the inventory. The site information comes from the default insert site in the user profile, which also contains information about the organization and storeroom.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "The organization that is associated with the inventory.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "The identifier of the inventory item.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "Item Set",
            "remarks": "Identifies the item set, or group of items, to which this item belongs. An organization is assigned to only one item set, but multiple organizations can use the same item set.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "USETYPE",
            "required": false,
            "persistent": false,
            "title": "Usage Type",
            "remarks": "The type of usage that is contained in the record. The value in this field is based on the usage line types that are entered for the record. By default, the field is set to MIXED. The value changes to ISSUE if the usage lines are for issues or returns. The value changes to TRANSFER when transfer usage lines are entered.",
            "sameAsAttribute": "USETYPE",
            "sameAsObject": "INVUSE"
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "The quantity of items in this usage line.",
            "sameAsAttribute": "QUANTITY",
            "sameAsObject": "INVUSELINE"
        },
        {
            "attributeName": "FROMBIN",
            "required": false,
            "persistent": false,
            "title": "From Bin",
            "remarks": "The identifier of the storeroom bin from which the current item is being issued.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "CURBAL",
            "required": false,
            "persistent": false,
            "title": "Current Balance",
            "remarks": "The current balance in the bin.",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "TOTAVLBALANCE",
            "required": false,
            "persistent": false,
            "title": "Total Avail. Balance",
            "remarks": "The total available balance in the bin.",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "INVUSELINENUM",
            "required": false,
            "persistent": false,
            "title": "Line",
            "remarks": "The identifier that is associated with the inventory usage line.",
            "sameAsAttribute": "INVUSELINENUM",
            "sameAsObject": "INVUSELINE"
        },
        {
            "attributeName": "TOTCURBAL",
            "required": false,
            "persistent": false,
            "title": "Total Current Balance",
            "remarks": "The total current balance in the bin.",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Don't use “push button”. Just “click” and the labelDescribes the item. To enter more information, click Long Description.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "FROMSTORELOC",
            "required": false,
            "persistent": false,
            "title": "Storeroom",
            "remarks": "The storeroom where the item is stocked. The storeroom information comes from default storeroom entry in the user profile, which also contains information about the site and organization.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "INVUSELINEID",
            "required": false,
            "persistent": false,
            "title": "Usage line ID",
            "remarks": "The identifier of the current usage line.",
            "sameAsAttribute": "INVUSELINEID",
            "sameAsObject": "INVUSELINE"
        },
        {
            "attributeName": "FROMCONDITIONCODE",
            "required": false,
            "persistent": false,
            "title": "From Condition Code",
            "remarks": "The condition code that indicates the current physical condition of the item.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "FROMLOT",
            "required": false,
            "persistent": false,
            "title": "From Lot",
            "remarks": "The identifier of the lot where the current item is stored.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "ROTATING",
            "required": true,
            "persistent": false,
            "title": "Rotating",
            "remarks": "Identifies whether the current item is a rotating asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUESTNUM",
            "required": false,
            "persistent": false,
            "title": "Request",
            "remarks": "Identifies the request associated with the current record.",
            "sameAsAttribute": "REQUESTNUM",
            "sameAsObject": "INVRESERVE"
        },
        {
            "attributeName": "RESERVEDQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Reserved",
            "remarks": "Identifies the number of items that are reserved and have not been issued.",
            "sameAsAttribute": "RESERVEDQTY",
            "sameAsObject": "INVRESERVE"
        },
        {
            "attributeName": "TOTRESERVEDQTY",
            "required": false,
            "persistent": false,
            "title": "Total Qty Reserved",
            "remarks": "Identifies the total number of items that are reserved and have not been issued.",
            "sameAsAttribute": "RESERVEDQTY",
            "sameAsObject": "INVRESERVE"
        },
        {
            "attributeName": "CONTENTUID",
            "required": false,
            "persistent": false,
            "title": "Content Unique Id",
            "remarks": "Content Unique ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOSITEID",
            "required": false,
            "persistent": false,
            "title": " To Site",
            "remarks": "The destination site for the current inventory usage line.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ROTASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the asset for the splituseline. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and itemsetid=:itemsetid and siteid=:siteid and (conditioncode is null or conditioncode=:fromconditioncode)",
            "cardinality": null
        },
        {
            "name": "INVBALANCES",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this InvUseLine where bin num is specified. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and itemsetid=:itemsetid and siteid=:siteid and stagingbin=:NO",
            "cardinality": null
        },
        {
            "name": "INVBALANCESCC",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for this material issue when bin num is specified but lot num is either specified or null. (invbalances.itemnum = invuseline.itemnum and invbalances.itemsetid = matusetrans.itemsetid  and invbalances.location = invuseline.fromstoreloc and invbalances.binnum=invuseline.frombin and invbalances.itemsetid = invuseline.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and location = :fromstoreloc and ( conditioncode is null or conditioncode =:fromconditioncode) and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVBALANCESLOT",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find the balances on hand for inventory usage line with bin num and lot num are both specified. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and lotnum=:fromlot and itemsetid=:itemsetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory on hand for this InvUseLine. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and itemsetid=:itemsetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVLOT",
            "target": "INVLOT",
            "remarks": "Relationship to the InvLot table, used to find the lot information for the invuseline.The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "target": "INVUSELINE",
            "remarks": "Relationship to the Invuseline table, used to find the invuseline record for the splituseline. The resulting set will contain zero or one object.",
            "whereClause": "invuselineid=:invuselineid",
            "cardinality": null
        },
        {
            "name": "INVUSELINESPLIT",
            "target": "INVUSELINESPLIT",
            "remarks": "Relationship to the InvUseLineSplit table, used to find the invuselinesplit records for a given invuseline. The resulting set will contain one object.",
            "whereClause": "invuselineid=:invuselineid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item records for a given splituseline record. The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "LINESPLIT",
            "target": "LINESPLIT",
            "remarks": "Relationship to the LineSplit table, used to find SplitUseLine records. The resulting set will contain zero or more objects.",
            "whereClause": "invusenum=:invusenum and siteid=:siteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "SPLITUSELINE",
            "source": "INVUSE",
            "remarks": "Relationship to the SplitInvUseLine. The resulting set will contain zero or more objects.",
            "whereClause": "invusenum=:invusenum and siteid=:siteid",
            "cardinality": null
        }
    ]
}