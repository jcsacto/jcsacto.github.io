mos = {
    "objectName": "INVTRANS",
    "className": "psdi.app.inventory.InvTransSet",
    "description": "The INVTRANS Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "INVTRANSID",
    "primaryKeyColumns": [
        "SITEID",
        "INVTRANSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "INVTRANS",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, CONSVENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Inventory Transaction",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "INVTRANS",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "INVTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "LOTNUM, ITEMNUM, STORELOC, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Lot",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, CONSINVOICENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "INVTRANS",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Inventory Transactions",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "INVTRANS",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 60",
            "longDescription": null
        },
        {
            "objectName": "MATRECTRANS",
            "targetObject": "INVTRANS",
            "parentKeys": "MATRECTRANSID",
            "targetKeys": "MATRECTRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Transactions",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "INVTRANS",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "SITEID, MATUSETRANSID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "INVTRANS",
            "parentKeys": "MATUSETRANSID",
            "targetKeys": "MATUSETRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Usage",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVTRANS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVTRANS",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVTRANS",
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
            "remarks": "Inventory Item Number",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "STORELOC",
            "required": true,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "Storeroom Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "TRANSDATE",
            "required": true,
            "persistent": true,
            "title": "Transaction Date",
            "remarks": "The date and time transaction was entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TRANSTYPE",
            "required": true,
            "persistent": true,
            "title": "Transaction Type",
            "remarks": "Type of inventory transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUANTITY",
            "required": true,
            "persistent": true,
            "title": "Quantity",
            "remarks": "This field indicates the quantity in and or out. It is a calculation of items addedand or subtracted.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURBAL",
            "required": true,
            "persistent": true,
            "title": "Current Balance",
            "remarks": "Current balance at this location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PHYSCNT",
            "required": true,
            "persistent": true,
            "title": "Physical Count",
            "remarks": "The number of this item logged the last time a physical count was performed at this location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OLDCOST",
            "required": true,
            "persistent": true,
            "title": "Old Cost",
            "remarks": "The cost before cost adjustment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWCOST",
            "required": true,
            "persistent": true,
            "title": "New Cost",
            "remarks": "The cost after cost adjustment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "The user ID of the person initiating this transaction.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Memo for transactions",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BINNUM",
            "required": false,
            "persistent": true,
            "title": "Bin",
            "remarks": "The bin number from which the item on this transaction originated.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "LOTNUM",
            "required": false,
            "persistent": true,
            "title": "Lot",
            "remarks": "The lot number from which the item on this transaction originated, if the item is in a lot.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "Debit GL Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "Credit GL Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINANCIALPERIOD",
            "required": false,
            "persistent": true,
            "title": "Financial Period",
            "remarks": "Financial Period of transaction",
            "sameAsAttribute": "FINANCIALPERIOD",
            "sameAsObject": "FINANCIALPERIODS"
        },
        {
            "attributeName": "LINECOST",
            "required": true,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "Line cost of the transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXCHANGERATE2",
            "required": false,
            "persistent": true,
            "title": "Secondary Exchange Rate",
            "remarks": "Base Exchange Rate 2",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "LINECOST2",
            "required": false,
            "persistent": true,
            "title": "Secondary Line Cost",
            "remarks": "Base Currency Line Cost 2.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVTRANSID",
            "required": true,
            "persistent": true,
            "title": "ID",
            "remarks": "Primary key for the table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MATRECTRANSID",
            "required": false,
            "persistent": true,
            "title": "Receipt ID",
            "remarks": "Foreign key to MATRECTRANS",
            "sameAsAttribute": "MATRECTRANSID",
            "sameAsObject": "MATRECTRANS"
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
            "remarks": "Item set identifier for this item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "The condition code of the item when inventory transaction occurred.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "CONDRATE",
            "required": false,
            "persistent": true,
            "title": "Rate Percentage",
            "remarks": "Condition Rate Percentage",
            "sameAsAttribute": "CONDRATE",
            "sameAsObject": "INVCOST"
        },
        {
            "attributeName": "MATUSETRANSID",
            "required": false,
            "persistent": true,
            "title": "Usage ID",
            "remarks": "used to record a cost variance when making or breaking a kit.  This attribute gets its value from the MATRECTRANSID attribute of the MATRECTRANS object when making a kit and the MATUSETRANSID attribute of the MATUSETRANS object when breaking a kit.",
            "sameAsAttribute": "MATUSETRANSID",
            "sameAsObject": "MATUSETRANS"
        },
        {
            "attributeName": "SOURCEMBO",
            "required": false,
            "persistent": false,
            "title": "Source MBO",
            "remarks": "Source MBO",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CONSIGNMENT",
            "required": true,
            "persistent": true,
            "title": "Consignment",
            "remarks": "Indicates whether the transaction was created for a consignment item. This field also indicates that the consignment transaction is included in the consignment invoice, which is sent to the vendor that supplies the inventory item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONSINVOICENUM",
            "required": false,
            "persistent": true,
            "title": "Consignment Invoice",
            "remarks": "The number that identifies the invoice that was created to pay for the inventory usage.",
            "sameAsAttribute": "INVOICENUM",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "CONSVENDOR",
            "required": false,
            "persistent": true,
            "title": "Consignment Vendor",
            "remarks": "The vendor that is responsible for replenishing the consignment items. Purchase orders and invoices are generated for the vendor specified in this field.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the inventory table, used to find the inventory records. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:storeloc and itemsetid=:itemsetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVLIFOFIFOCOST",
            "target": "INVLIFOFIFOCOST",
            "remarks": "Relationship to the invtrans table, used to find the invtrans records for a given Inventory Lifo Fifo Cost. The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and location=:location and itemsetid=:itemsetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Realtionship from INVTRANS to ITEM to get and item record.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "INVTRANS",
            "source": "INVBALANCES",
            "remarks": "Relationship to the InvTrans table, used to find the inventory adjustment transactions for a given inventory balance record. (invbalances.itemnum = invtrans.itemnum and invbalances.storeloc = invtrans.storeloc and invtrans.itemsetid = invbalances.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and storeloc = :location and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVTRANS",
            "source": "INVCOST",
            "remarks": "Relationship to the invtrans table, used to find the invtrans records for a given Invnetory Cost. (invcost.itemnum = invtrans.itemnum and invcost.itemsetid=invtrans.itemsetid and invcost.location=invtrans.storeloc). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and storeloc=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVTRANS",
            "source": "INVENTORY",
            "remarks": "Relationship to the InvTrans table, used to find the transactions for a given inventory record. (invtrans.itemnum = inventory.itemnum and invtrans.storeloc = inventory.location and invtrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and storeloc = :location and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVTRANSINVOICE",
            "source": "INVENTORY",
            "remarks": "Relationship to the InvTrans table, used to find the transactions for consignment items for a given inventory record. (invtrans.itemnum = inventory.itemnum and invtrans.tostoreloc = inventory.location and invtrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and storeloc=:location and itemsetid=:itemsetid and siteid=:siteid and transtype in (select value from synonymdomain where domainid ='ITTYPE' and maxvalue in ('CURBALADJ', 'RECBALADJ'))  and consignment=1 and consinvoicenum is not null",
            "cardinality": null
        },
        {
            "name": "INVTRANSNOINVOICE",
            "source": "INVENTORY",
            "remarks": "Relationship to the InvTrans table, used to find the issue and return for consignment items for a given inventory record. (invtrans.itemnum = inventory.itemnum and invtrans.tostoreloc = inventory.location and invtrans.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and storeloc=:location and itemsetid=:itemsetid and siteid=:siteid and transtype in (select value from synonymdomain where domainid ='ITTYPE' and maxvalue in ('CURBALADJ', 'RECBALADJ')) and  consignment=1 and consinvoicenum is null",
            "cardinality": null
        }
    ]
}