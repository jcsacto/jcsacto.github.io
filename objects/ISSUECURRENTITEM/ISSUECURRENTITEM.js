mos = {
    "objectName": "ISSUECURRENTITEM",
    "className": "psdi.app.inventory.virtual.IssueCurrentItemSet",
    "description": "Non-persistent table for \"Issue Current Item\" page",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "ASSETNUM",
        "TOSITEID",
        "ITEMNUM",
        "ITEMSETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": false,
            "title": "Item",
            "remarks": "The Inventory Item to be issued or returned",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "STORELOC",
            "required": true,
            "persistent": false,
            "title": "Storeroom",
            "remarks": "The storeroom location from which this item is issued and returned.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ENTERDATE",
            "required": false,
            "persistent": false,
            "title": "Entered Date",
            "remarks": "Date and time transaction was entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERBY",
            "required": false,
            "persistent": false,
            "title": "Entered By",
            "remarks": "The user ID of the person initiating this transaction.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "The quantity of this item to issue to or return from the SITEID.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUETYPE",
            "required": true,
            "persistent": false,
            "title": "Transaction Type",
            "remarks": "Type of transaction - valid values are ISSUE or RETURN.",
            "sameAsAttribute": "ISSUETYPE",
            "sameAsObject": "MATUSETRANS"
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "The number indicating which work order this item is issued for or returned from.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "The asset to or from which the item is issued or returned.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "The charge location for the issue or return.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "BINNUM",
            "required": false,
            "persistent": false,
            "title": "Bin",
            "remarks": "A unique identification number indicating the primary bin or storage location for the selected item within a storeroom.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "LOTNUM",
            "required": false,
            "persistent": false,
            "title": "Lot",
            "remarks": "Lot number of the item if the item is lotted.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
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
            "remarks": "The linecost of the issue/return calculated as unitcost multiplied by quantity.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OUTSIDE",
            "required": true,
            "persistent": false,
            "title": "Outside",
            "remarks": "Is Item an Outside Item?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROTASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Rotating Asset",
            "remarks": "A unique identification number for an item in inventory in the selected storeroom. In this case, it is a rotating item to be issued and returned.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Remarks associated with this issue or return.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": false,
            "title": "GL Debit Account",
            "remarks": "The GL account to be debited as a result of the issue or return.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": false,
            "title": "GL Credit Account",
            "remarks": "The GL account to be credited as a result of the issue or return.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUETO",
            "required": false,
            "persistent": false,
            "title": "Issue To",
            "remarks": "The person who receives the issued item and who is responsible for it until it is returned.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MRNUM",
            "required": false,
            "persistent": false,
            "title": "Requisition",
            "remarks": "Material request number",
            "sameAsAttribute": "MRNUM",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "MRLINENUM",
            "required": false,
            "persistent": false,
            "title": "MR Line",
            "remarks": "MR Line Number",
            "sameAsAttribute": "MRLINENUM",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "AVBLBALANCE",
            "required": false,
            "persistent": false,
            "title": "Available Balance",
            "remarks": "Total available balance for the Item in the storeroom.",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "ROTATING",
            "required": true,
            "persistent": false,
            "title": "Rotating",
            "remarks": "Checking this box indicates that the item can be issued and returned to inventory when it is no longer needed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISLOT",
            "required": true,
            "persistent": false,
            "title": "Lot Tracked ",
            "remarks": "Is the item being issued/returned a lot tracking asset?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURBAL",
            "required": false,
            "persistent": false,
            "title": "Current Balance",
            "remarks": "The current balance for the item in a bin",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "WO Task",
            "remarks": "Work order task identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFWO",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Referenced Work Order",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": false,
            "title": "Site",
            "remarks": "The site identifier indicating where the item is being used.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ENTEREDASTASK",
            "required": true,
            "persistent": false,
            "title": "Entered as Task ",
            "remarks": "Was this transaction created against a work order task?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
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
            "remarks": "Condition code of this item. The code should be checked before issue and before rotating back in to inventory.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "TOSITEID",
            "required": true,
            "persistent": false,
            "title": "To Site",
            "remarks": "The Siteid of the site to which you are issuing the current item.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "FINANCIALPERIOD",
            "required": false,
            "persistent": false,
            "title": "Financial Period",
            "remarks": "Financial Period of transaction",
            "sameAsAttribute": "FINANCIALPERIOD",
            "sameAsObject": "FINANCIALPERIODS"
        },
        {
            "attributeName": "ACTUALDATE",
            "required": false,
            "persistent": false,
            "title": "Actual Date",
            "remarks": "Date and time of the issue transaction, which may be different than the time the transaction is recorded in Maximo. Maximo populates the current date and time by default. You can modify the value in this field. Click the Select Date and Time button to use the calendar control.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the asset table, used to find the asset record for a given IssueCurrentItem record. (asset.assetnum=issuecurrentitem.assetnum and asset.siteid=issuecurrentitem.tositeid). The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:assetnum and siteid=:tositeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the ISSUECURRENTITEM to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLOT",
            "target": "INVLOT",
            "remarks": "Relationship to the InvLot table, used to find the lot information for the material issue.",
            "whereClause": "itemnum = :itemnum and location = :storeloc and lotnum=:lotnum and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Inventory Issue Current Item record. (itemcondition.itemnum = issuecurrentitem.itemnum and itemcondition.itemsetid=issuecurrentitem.itemsetid and itemcondition.conditioncode=issuecurrentitem.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the ISSUECURRENT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field.",
            "whereClause": "",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "ISSUECURRENTITEM",
            "source": "INVENTORY",
            "remarks": "Relationship to the non-persistent IssueCurrentItem table. (IssueCurrentItem.itemnum = inventory.itemnum and IssueCurrentItem.storeloc = inventory.location and issuecurrentitem.itemsetid = inventory.itemsetid). The resulting set will contain zero objects. This relationship is used only for the Issue Current Item action page on the Inventory application.",
            "whereClause": "itemnum=:itemnum and storeloc=:location and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ISSUECURRENTITEM",
            "source": "ISSUEITEMTOASSET",
            "remarks": "Relationship to the non-persistent ISSUECURRENTITEM table, used to get an empty set so that assets can be select for the issue or return. (1>2). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}