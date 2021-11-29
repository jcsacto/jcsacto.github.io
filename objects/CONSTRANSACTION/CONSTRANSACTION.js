mos = {
    "objectName": "CONSTRANSACTION",
    "className": "psdi.app.invoice.virtual.ConsTransactionSet",
    "description": "Nonpersistent object to collect transaction records",
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
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "Item Number",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "Item Set",
            "remarks": "Item Set",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Describes the item. To enter or view more information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "INVOICEQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "Quantity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "Cost of the item on this transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST",
            "required": false,
            "persistent": false,
            "title": "Line Cost",
            "remarks": "Line cost of the transaction, calculated as Unit Cost multiplied by the Quantity of the item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": false,
            "title": "Commodity Code",
            "remarks": "The commodity code that is associated with this item or tool for categorization. Commodity codes are used in the purchasing process. For example, items can be categorized into electrical components or maintenance supplies.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": false,
            "title": "Commodity Group",
            "remarks": "The commodity group or product category that is associated with this item or tool.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": false,
            "title": "To Condition Code",
            "remarks": "The condition code that indicates the current physical condition of the item.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "CONVERSION",
            "required": false,
            "persistent": false,
            "title": "Conversion Factor",
            "remarks": "The numeric value that is used to convert the order unit of an item to the issue unit of the item. The number of items that you order at one time can be different from the number of items that you issue at one time. For example, if you order in batches of 36 but issue one item at a time, you can define a measurement unit of CASE and another measurement unit of EACH. You define a conversion ratio from CASE to EACH with a factor of 36. Then, when you receive an order of this item into a storeroom, the received order unit of one CASE is converted into issue unit of 36 EACH.",
            "sameAsAttribute": "CONVERSION",
            "sameAsObject": "CONVERSION"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "The location where the item is to be used.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "The organization that is associated with the shipment receipt.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "The site that is associated with the shipment receipt.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "LOADEDCOST",
            "required": false,
            "persistent": false,
            "title": "Loaded Cost",
            "remarks": "The overall cost that is attributed to the line. This value is calculated by multiplying the unit cost by the quantity and adding taxes and special charges.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVOICEUNIT",
            "required": false,
            "persistent": false,
            "title": "Order Unit",
            "remarks": "The standard unit by which the item is ordered, such as by roll or by case.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": false,
            "title": "Consignment Vendor",
            "remarks": "The vendor that is responsible for replenishing the consignment items. Purchase orders and invoices are generated for the vendor specified in this field.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Identifies the asset that is associated with the shipment or line item.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "FINCNTRLID",
            "required": false,
            "persistent": false,
            "title": "FCID",
            "remarks": "The financial control identifier, which is used by the Financial Control application to manage budgets.",
            "sameAsAttribute": "FINCNTRLID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": false,
            "title": "GL Credit Account",
            "remarks": "The GL account that is credited when the item is received or transferred.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": false,
            "title": "GL Debit Account",
            "remarks": "The GL account that is debited when the item is received or transferred.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFWO",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Identifies the work order that is associated with the current record.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "The work order task that is associated with the current line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TRANSID",
            "required": false,
            "persistent": false,
            "title": "Unique Identifier",
            "remarks": "Originating Transaction Object",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGINATOR",
            "required": false,
            "persistent": false,
            "title": "Originating Transaction",
            "remarks": "Originating Transaction Object Record Id",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "TRANSTYPE",
            "required": false,
            "persistent": false,
            "title": "Transaction Type",
            "remarks": "Type of inventory transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CONSTRANSACTION",
            "source": "INVOICE",
            "remarks": "Realtionship from Invoice to nonpersistent CONSTRANSACTION.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}