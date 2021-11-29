mos = {
    "objectName": "QUOTATIONLINE",
    "className": "psdi.app.rfq.QuotationLineSet",
    "description": "Vendor's Quotation Line Item Detail",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "QUOTATIONLINEID",
    "primaryKeyColumns": [
        "SITEID",
        "RFQNUM",
        "RFQLINENUM",
        "VENDOR",
        "QUOTATIONLINEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMODITIES",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Quotation Line",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Quotation Line",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 209",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "RFQ",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "SITEID, RFQNUM",
            "targetKeys": "SITEID, RFQNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "RFQ",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 54",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "QUOTATIONLINE",
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
            "attributeName": "RFQNUM",
            "required": true,
            "persistent": true,
            "title": "RFQ",
            "remarks": "Request for Quotation (RFQ) Number.",
            "sameAsAttribute": "RFQNUM",
            "sameAsObject": "RFQ"
        },
        {
            "attributeName": "RFQLINENUM",
            "required": true,
            "persistent": true,
            "title": "Line",
            "remarks": "RFQ line item number.",
            "sameAsAttribute": "RFQLINENUM",
            "sameAsObject": "RFQLINE"
        },
        {
            "attributeName": "VENDOR",
            "required": true,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Vendor Company",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "QUOTATIONLINEID",
            "required": true,
            "persistent": true,
            "title": "Quotation Line ID",
            "remarks": "Internal Quotation Line Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "Identifies the item record. Leave this field blank if you are entering a line item for a service or for a material item not in inventory.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Identifying code for the manufacturer of the item.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "MODELNUM",
            "required": false,
            "persistent": true,
            "title": "Model",
            "remarks": "Manufacturer's model number for the item. The default value comes from the inventory record.",
            "sameAsAttribute": "MODELNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "ORDERQTY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Number of units of the ordered item. If you are entering a service line item, you can enter a number of hours here and a corresponding hourly cost in the Unit Cost field. You can also leave this field and the Unit Cost field blank, and enter a lump sum amount in the Line Cost field. This is a required field, unless you enter a lump sum cost for a service line item in the Line Cost field.",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "ORDERUNIT",
            "required": false,
            "persistent": true,
            "title": "Order Unit",
            "remarks": "Standard unit by which the item is ordered, such as roll or case. After you enter a value, Maximo enters the corresponding conversion value in the Conversion Factor field. If you are ordering a service, you can enter hours in this field. If you are ordering materials not in inventory, you can enter a new or existing unit in this field, or leave this field blank.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "Cost per unit of the item. If entering a service line item, you can enter a unit cost here and a number of hours in the Quantity field. Or, you can enter a lump sum amount in the Line Cost field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST",
            "required": false,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "Cost for the line item, calculated by multiplying the quantity by the unit cost. If you are entering a cost for a service line item, you can enter a lump sum amount in this field (rather than specify a quantity of hours and a unit cost).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EOQ",
            "required": true,
            "persistent": true,
            "title": "Economic Order Quantity",
            "remarks": "The number of items that should be ordered at one time in order to get the best price.",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "DELIVERYTIME",
            "required": false,
            "persistent": true,
            "title": "Delivery Time",
            "remarks": "Amount of time, in days, anticipated between order and delivery of the item.",
            "sameAsAttribute": "DELIVERYTIME",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "DELIVERYDATE",
            "required": false,
            "persistent": true,
            "title": "Delivery Date",
            "remarks": "Anticipated delivery date of the line item, as specified by the vendor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "Date and time the line item was entered. The default is the system date and time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "The person who entered the line item. The default is the current login ID.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ISAWARDED",
            "required": true,
            "persistent": true,
            "title": "Awarded",
            "remarks": "Specifies whether the quotation line has been awarded to a vendor. If the checkbox is selected, the quotation line has been awarded to the specified vendor. If the checkbox is cleared, the quotation line has not been awarded to that vendor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELECTEDFORDISPLAY",
            "required": true,
            "persistent": true,
            "title": "Selected for Display",
            "remarks": "Quotation line selected for display?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "GL Contra Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX1CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code",
            "remarks": "Tax code used to calculate the value in the Tax field. When you enter a new line item or change the Item field, Maximo fills in the Tax Code field with a value taken from the Company tab. Any change to this field updates the Tax Amount field automatically.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX1",
            "required": true,
            "persistent": true,
            "title": "Tax Amount",
            "remarks": "Amount of tax payable for the line item. Maximo multiplies the Line Cost by the tax codes applied. You can change this value, but Maximo will overwrite your entry if future changes to related fields cause Maximo to recalculate the tax value. Any changes to the Item, Quantity, Unit Cost, Line Cost, or Tax Code fields cause Maximo to recalculate this value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX2CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 2",
            "remarks": "Tax code used for calculation of Tax2 column.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX2",
            "required": true,
            "persistent": true,
            "title": "Tax 2",
            "remarks": "Amount of tax due on line item levied by Tax2Code column.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX3CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 3",
            "remarks": "Tax code used for calculation of Tax3 column.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX3",
            "required": true,
            "persistent": true,
            "title": "Tax 3",
            "remarks": "Amount of tax due on line item levied by Tax3Code column.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX4CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 4",
            "remarks": "Tax code used for calculation of Tax4 column.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX4",
            "required": true,
            "persistent": true,
            "title": "Tax 4",
            "remarks": "Amount of tax due on line item levied by Tax4Code column.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX5CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 5",
            "remarks": "Tax code used for calculation of Tax5 column.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX5",
            "required": true,
            "persistent": true,
            "title": "Tax 5",
            "remarks": "Amount of tax due on line item levied by Tax5Code column.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CATALOGCODE",
            "required": false,
            "persistent": true,
            "title": "Catalog #",
            "remarks": "Vendor's catalog code for the item.",
            "sameAsAttribute": "CATALOGCODE",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Comments about quote from the vendor or the buyer.",
            "sameAsAttribute": "REMARK",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the Quotation line item.  To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "QUOTESTARTDATE",
            "required": false,
            "persistent": true,
            "title": "Quote Start Date",
            "remarks": "Start date when the quote is valid.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUOTEENDDATE",
            "required": false,
            "persistent": true,
            "title": "Quote End Date",
            "remarks": "End date of when the quote is valid.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "VENDORPACKCODE",
            "required": false,
            "persistent": true,
            "title": "Vendor Pack Code",
            "remarks": "The pack code of the product. It is the code of how the items will be packed. For example, BOX (12 to a box) or PALLET (30 to a pallet).",
            "sameAsAttribute": "VENDORPACKCODE",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "VENDORPACKQUANTITY",
            "required": false,
            "persistent": true,
            "title": "Vendor Pack Quantity",
            "remarks": "The quantity of the pack code. For example, pack code is box, pack quantity is 12.",
            "sameAsAttribute": "VENDORPACKQUANTITY",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "VENDORWAREHOUSE",
            "required": false,
            "persistent": true,
            "title": "Vendor Warehouse",
            "remarks": "Vendor warehouse that the product will come from.",
            "sameAsAttribute": "VENDORWAREHOUSE",
            "sameAsObject": "MRLINE"
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
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "LINETYPE",
            "required": true,
            "persistent": true,
            "title": "Line Type",
            "remarks": "Line type. Values include Item, Material, Service, Special Order or External Catalog Item.",
            "sameAsAttribute": "LINETYPE",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item set identifier for this item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Item Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Memo Long Description",
            "remarks": "Long Description for Notes/Comments about quote. Could be from vendor or written by buyer",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "The condition of the item quoted",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": true,
            "title": "Commodity Group",
            "remarks": "Commodity Group",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Commodity Code",
            "remarks": "Commodity",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
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
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MKTPLCITEM",
            "required": true,
            "persistent": true,
            "title": "Marketplace Item",
            "remarks": "Flag to determine the items from the marketplace.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BASELINECOST",
            "required": false,
            "persistent": false,
            "title": "Base Line Cost",
            "remarks": "Line cost of the item in the currency of the organization.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "QUOTATIONLINE"
        },
        {
            "attributeName": "BASEUNITCOST",
            "required": false,
            "persistent": false,
            "title": "Base Unit Cost",
            "remarks": "Unit cost of the item in the currency of the organization.",
            "sameAsAttribute": "UNITCOST",
            "sameAsObject": "QUOTATIONLINE"
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": false,
            "persistent": false,
            "title": "Currency",
            "remarks": "Currency the vendor uses, if it is different than your company's base curency. This value is used for currency conversion.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "BASETAX1",
            "required": false,
            "persistent": false,
            "title": "Base Tax Amount",
            "remarks": "The amount of tax payable for the line item in the currency of the organization.",
            "sameAsAttribute": "TAX1",
            "sameAsObject": "QUOTATIONLINE"
        },
        {
            "attributeName": "BASETAX2",
            "required": false,
            "persistent": false,
            "title": "Base Tax 2 Amount",
            "remarks": "The amount of tax payable for the line item in the currency of the organization.",
            "sameAsAttribute": "TAX2",
            "sameAsObject": "QUOTATIONLINE"
        },
        {
            "attributeName": "BASETAX3",
            "required": false,
            "persistent": false,
            "title": "Base Tax 3 Amount",
            "remarks": "The amount of tax payable for the line item in the currency of the organization.",
            "sameAsAttribute": "TAX3",
            "sameAsObject": "QUOTATIONLINE"
        },
        {
            "attributeName": "BASETAX4",
            "required": false,
            "persistent": false,
            "title": "Base Tax 4 Amount",
            "remarks": "The amount of tax payable for the line item in the currency of the organization.",
            "sameAsAttribute": "TAX4",
            "sameAsObject": "QUOTATIONLINE"
        },
        {
            "attributeName": "BASETAX5",
            "required": false,
            "persistent": false,
            "title": "Base Tax 5 Amount",
            "remarks": "The amount of tax payable for the line item in the currency of the organization.",
            "sameAsAttribute": "TAX5",
            "sameAsObject": "QUOTATIONLINE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Quotation Line record. (itemcondition.itemnum = quotationline.itemnum and itemcondition.itemsetid=quotationline.itemsetid and itemcondition.conditioncode=quotationline.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGANIZATION",
            "target": "ORGANIZATION",
            "remarks": "QuotationLine to Organization",
            "whereClause": "orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "RFQ",
            "target": "RFQ",
            "remarks": "Relationship to the RFQ table, used to find all request for quotation records for a given quotation line. (quotationline.rfqnum = rfq.rfqnum). The resulting set will contain zero or one object.",
            "whereClause": "rfqnum = :rfqnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "target": "RFQLINE",
            "remarks": "Relationship to the RFQLine table, used to find all request for quotation lines for a given quotation line. (quotationline.rfqnum = rfqline.rfqnum and quotationline.rfqlinenum = quotationline.rfqlinenum). The resulting set will contain zero or one object.",
            "whereClause": "rfqnum = :rfqnum and rfqlinenum = :rfqlinenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQVENDOR",
            "target": "RFQVENDOR",
            "remarks": "QuotationLine to RFQVendor",
            "whereClause": "rfqnum=:rfqnum and vendor=:vendor and siteid=:siteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "QUOTATIONLINE",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the quotationline table, used to find all quotationline records using this measureunit. (quotationline.orderunit=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUOTATIONITEM",
            "source": "RFQLINE",
            "remarks": "Relationship to the QuotationLine table, used to find all quotation lines for a given item number or description for quotation line. (rfqline.rfqnum=quotationline.rfqnum and rfqline.rfqlinenum=quotationline.rfqlinenum and rfqline.siteid=quotationline.siteid and ((rfqline.itemnum=quotationline.itemnum and rfqline.itemsetid=quotationline.itemsetid) or (rfqline.itemnum is null and rfqline.description=quotationline.description))). The resulting set will contain zero or more object.",
            "whereClause": "rfqnum=:rfqnum and rfqlinenum=:rfqlinenum and siteid=:siteid and ((itemnum=:itemnum and itemsetid=:itemsetid) or (itemnum is null and description=:description))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUOTATIONLINE",
            "source": "RFQLINE",
            "remarks": "Relationship to the QuotationLine table, used to find all quotation lines for a given request for quotation line. (rfqline.rfqnum = quotationline.rfqnum and rfqline.rfqlinenum = quotationline.rfqlinenum). The resulting set will contain zero or more object.",
            "whereClause": "rfqnum=:rfqnum and rfqlinenum=:rfqlinenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUOTATIONLINEVENDOR",
            "source": "RFQVENDOR",
            "remarks": "Relationship to the QuotationLine table, used to find all quotation line records for a given request for quotation vendor. (rfqvendor.rfqnum = quotationline.rfqnum and rfqvendor.vendor = quotationline.vendor). The resulting set will contain zero or one objects.",
            "whereClause": "rfqnum = :rfqnum and vendor = :vendor and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}