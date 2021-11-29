mos = {
    "objectName": "INVVENDOR",
    "className": "psdi.app.item.InvVendorSet",
    "description": "The Inventory Vendors Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "INVVENDORID",
    "primaryKeyColumns": [
        "ITEMNUM",
        "VENDOR",
        "MANUFACTURER",
        "MODELNUM",
        "CONDITIONCODE",
        "CATALOGCODE",
        "ITEMSETID",
        "ORGID",
        "SITEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "INVVENDOR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Inventory Vendor",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVVENDOR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Inventory Vendor",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "INVVENDOR",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "INVVENDOR",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVVENDOR",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 109",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVVENDOR",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVVENDOR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVVENDOR",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVVENDOR",
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
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Actual vendor from which this item, tool, service, or lot was received. This may not be the primary vendor.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer of the item or tool for a particular vendor.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "MODELNUM",
            "required": false,
            "persistent": true,
            "title": "Model",
            "remarks": "Primary vendor's model number for the item or tool.",
            "sameAsAttribute": "MODELNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "CATALOGCODE",
            "required": false,
            "persistent": true,
            "title": "Catalog #",
            "remarks": "Vendor's catalog or part number for the item, tool, or service.",
            "sameAsAttribute": "CATALOGCODE",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "TAX1CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code",
            "remarks": "Tax code for this vendor, for example, NY for New York. This field defaults to the tax code of the vendor in the Companies application, if there is one.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX2CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 2",
            "remarks": "Tax 2 code",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX3CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 3",
            "remarks": "Tax 3 code",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "BIDPRICE",
            "required": true,
            "persistent": true,
            "title": "Bid Price",
            "remarks": "Bid Price",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BIDDATE",
            "required": false,
            "persistent": true,
            "title": "Bid Date",
            "remarks": "Bid Price Date (for analysis)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROMDELIVERYTIME",
            "required": true,
            "persistent": true,
            "title": "Promised Lead Time (Days)",
            "remarks": "Promised delivery time (lead time) from the vendor for this item, tool, or service and this specific manufacturer, model, and catalog number.",
            "sameAsAttribute": "DELIVERYTIME",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "TAX4CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 4",
            "remarks": "Tax 4 code.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX5CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 5",
            "remarks": "Tax 5 code.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "LASTCOST",
            "required": false,
            "persistent": true,
            "title": "Last Price",
            "remarks": "Last price received from the vendor for this item, tool, or service and this specific manufacturer, model, and catalog number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTDATE",
            "required": false,
            "persistent": true,
            "title": "Last Order Date",
            "remarks": "Last date the item, tool, or service was ordered from this vendor. Click the Select Date button to use the calendar control.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CATALOGWEBPAGE",
            "required": false,
            "persistent": true,
            "title": "Catalog Web Page",
            "remarks": "Internet address for this catalog item, tool, or service on the vendor's web page. Click the Detail Menu button to connect to the web page.",
            "sameAsAttribute": "URLNAME",
            "sameAsObject": "DOCINFO"
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
            "attributeName": "ORDERUNIT",
            "required": false,
            "persistent": true,
            "title": "Order Unit",
            "remarks": "Order unit associated with the vendor's bid price for this item, tool, or service and this specific manufacturer, model, and catalog number. For example, the vendor sells the item at an order unit of EACH for this price. Click the Select Value button to view a list of order units.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ISDEFAULT",
            "required": true,
            "persistent": true,
            "title": "Default Vendor",
            "remarks": "Specifies whether the current vendor is the default for a given item in an organization. If the check box is selected, this will be the default vendor used on Work Order Planned Materials and Services lines for direct issue requisitioning. If the check box is cleared (the default), this vendor is not the default vendor for this item. You can have only one default vendor for an item in an organization.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ECOMPARTNUM1",
            "required": false,
            "persistent": true,
            "title": "Supplier Part ID",
            "remarks": "E-Commerce Supplier Part ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ECOMPARTNUM2",
            "required": false,
            "persistent": true,
            "title": "Part Auxillary ID",
            "remarks": "E-Commerce Supplier Part auxiliary ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of a specified vendor catalogue part",
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
            "required": false,
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
            "attributeName": "ORDERQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "ORDERQTY",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTDELIVERYTIME",
            "required": false,
            "persistent": false,
            "title": "Last Delivery Time",
            "remarks": "LASTDELIVERYTIME",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERCENTONTIME",
            "required": false,
            "persistent": false,
            "title": "Percent on Time",
            "remarks": "PERCENTONTIME",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AVGDELIVERYTIME",
            "required": false,
            "persistent": false,
            "title": "Average Delivery Time",
            "remarks": "AVGDELIVERYTIME",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QTYREJECTEDYTD",
            "required": false,
            "persistent": false,
            "title": "Quantity Rejected YTD",
            "remarks": "QTYREJECTEDYTD",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QTYRECEIVEDYTD",
            "required": false,
            "persistent": false,
            "title": "Quantity Received YTD",
            "remarks": "QTYRECEIVEDYTD",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERCENTREJECTEDYTD",
            "required": false,
            "persistent": false,
            "title": "Percent Rejected YTD",
            "remarks": "PERCENTREJECTEDYTD",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERCENTREJECTED",
            "required": false,
            "persistent": false,
            "title": "Percent Rejected",
            "remarks": "PERCENTREJECTED",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QTYREJECTED",
            "required": false,
            "persistent": false,
            "title": "Quantity Rejected",
            "remarks": "QTYREJECTED",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QTYRECEIVED",
            "required": false,
            "persistent": false,
            "title": "Quantity Received",
            "remarks": "QTYRECEIVED",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOOFCOMPLETEPOS",
            "required": false,
            "persistent": false,
            "title": "Total # Complete POs",
            "remarks": "NOOFCOMPLETEPOS",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "Condition Code  For the Item",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "INVVENDORID",
            "required": true,
            "persistent": true,
            "title": "INVVENDORID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "CONTRACTTYPE",
            "required": false,
            "persistent": false,
            "title": "Contract Type",
            "remarks": "Contract Type",
            "sameAsAttribute": "CONTRACTTYPE",
            "sameAsObject": "CONTRACT"
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
            "attributeName": "CURRENCYCODE",
            "required": false,
            "persistent": false,
            "title": "Currency Code",
            "remarks": "Currency Code",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "TAXEXEMPT",
            "required": true,
            "persistent": true,
            "title": "Tax Exempt",
            "remarks": "Select this check box if the item, the tool, or the service is not taxable. The buyer for your organization determines the tax-exempt status of items, of tools, and of services.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIPTTOLERANCE",
            "required": false,
            "persistent": true,
            "title": "Receipt Tolerance %",
            "remarks": "The percentage value of items that can be received over the amount set in the initial agreement.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MANUFACTURER",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find a manufacturer for a given inventory vendor. (invvendor.manufacturer = companies.company). The resulting set will contain one object.",
            "whereClause": "company=:manufacturer and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find a vendor for a given inventory vendor. (invvendor.vendor = companies.company). The resulting set will contain one object.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORYVENDOR",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the item's inventory for a given inventory vendor. (invvendor.itemnum = inventory.itemnum and inventory.itemsetid = invvendor.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item records for a given invvendor. (invvendor.itemnum = item.itemnum and invvendor.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg record for a given invvendor",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS'))",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "INVVENDOR",
            "source": "COMPANIES",
            "remarks": "Relationship to the InvVendor table, used to find the InvVendor records for a given company. (invvendor.vendorcompany = companies.company and invvendor.orgid = companies.orgid).  The resulting set will contain zero or more object.",
            "whereClause": "vendor=:company and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR",
            "source": "INVENTORY",
            "remarks": "Relationship to the InvVendor table, used to find all item vendor records for a given Inventory record. (invvendor.itemnum = inventory.itemnum and invvendor.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and orgid=:orgid and (siteid is null or (siteid is not null and siteid=:siteid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR_ORA",
            "source": "INVENTORY",
            "remarks": "Relationship to the InvVendor table, used to find all item vendor records for a given Inventory record - ORACLE only. ( invendor.itemnum = inventory.itemnum and (((inventory.vendor is not null and (invendor.vendor=inventory.vendor)) or (inventory.vendor is null)) and (((inventory.manufacturer is not null) and (invendor.manufacturer=inventory.manufacturer)) or (inventory.manufacturer is null)) and (((inventory.modelnum is not null) and (invendor.modelnum=inventory.modelnum)) or (inventory.modelnum is null)) and (((inventory.catalogcode is not null) and (invendor.catalogcode=inventory.catalogcode)) or (inventory.catalogcode is null))) and invvendor.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects. This relationship is primarily used by MEA to be used for ORACLE.",
            "whereClause": "itemnum = :itemnum and (((:vendor is not null and (vendor=:vendor)) or (:vendor is null)) and (((:manufacturer is not null) and (manufacturer=:manufacturer)) or (:manufacturer is null)) and (((:modelnum is not null) and (modelnum=:modelnum)) or (:modelnum is null)) and (((:catalogcode is not null) and (catalogcode=:catalogcode)) or (:catalogcode is null))) and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR_PRIMARY",
            "source": "INVENTORY",
            "remarks": "Relationship to the InvVendor table, used to find the Invvendor record that matches the vendor,modelnum, and manufacturer of the given Inventory record. (invvendor.itemnum = inventory.itemnum and invvendor.vendor=inventory.vendor. and invvendor.manufacturer = inventory.manufacturer and invvendor.modelnum=inventory.modelnum and invvendor.itemsetid = inventory.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and vendor=:vendor and modelnum=:modelnum and manufacturer=:manufacturer and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR_SQL",
            "source": "INVENTORY",
            "remarks": "Relationship to the InvVendor table, used to find all item vendor records for a given Inventory record - SQLServer only. ( invendor.itemnum = inventory.itemnum and (((inventory.vendor != '' and (invendor.vendor=inventory.vendor)) or (inventory.vendor ='')) and (((inventory.manufacturer !='') and (invendor.manufacturer=inventory.manufacturer)) or (inventory.manufacturer ='')) and (((inventory.modelnum !='') and (invendor.modelnum=inventory.modelnum)) or (inventory.modelnum ='')) and (((inventory.catalogcode !='') and (invendor.catalogcode=inventory.catalogcode)) or (inventory.catalogcode =''))) and invvendor.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects. This relationship is primarily used by MEA to be used for SQLServer.",
            "whereClause": "itemnum = :itemnum and (((:vendor is not null and (vendor=:vendor)) or (:vendor is null)) and (((:manufacturer is not null) and (manufacturer=:manufacturer)) or (:manufacturer is null)) and (((:modelnum is not null) and (modelnum=:modelnum)) or (:modelnum is null)) and (((:catalogcode is not null) and (catalogcode=:catalogcode)) or (:catalogcode is null))) and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR",
            "source": "ITEM",
            "remarks": "Relationship to the InvVendor table, used to find all vendors for a given Item. (invvendor.itemnum = item.itemnum and invvendor.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR",
            "source": "JOBITEM",
            "remarks": null,
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFAULTVENDOR",
            "source": "JOBITEM",
            "remarks": "Relationship to the InvVendor table, used to find default vendor for a given Item. (itemnum = :itemnum and itemsetid = :itemsetid and siteid=:siteid and isdefault=:yes). The resulting set will contain one record.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and orgid=:orgid and isdefault=:yes and vendor in (select company from companies where disabled=:no and orgid=:orgid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the InvVendor table to find all InvVendor records for this Contract (leaseview.vendor=invvendor.vendor and leaseview.orgid=invvendor.orgid and itemnum in (select itemnum from item where rotating=1))",
            "whereClause": "vendor=:vendor and orgid=:orgid and itemnum in (select itemnum from item where rotating=1 and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the measureunit table, used to find all measureunit records using this measureunit. (measureunit.orderunit=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR",
            "source": "PO",
            "remarks": "Relationship to the InvVendor table, used to find all inventory vendor records for a given purchase order. (invvendor.vendor = po.vendor). The resulting set will contain zero or more objects.",
            "whereClause": "vendor = :vendor and orgid = :orgid and (siteid=:siteid or siteid is null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR",
            "source": "POLINE",
            "remarks": "Relationship to the InvVendor table, used to find the invvendor records for a given purchase order line. (invvendor.itemnum=poline.itemnum and (invvendor.siteid=poline.siteid or invvendor.siteid is null)). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and (siteid=:siteid or siteid is null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR",
            "source": "PR",
            "remarks": "Relationship to the InvVendor table, used to find the invvendor records for a given purchase requisition. (invvendor.vendor = pr.vendor). The resulting set will contain zero or more objects. ",
            "whereClause": "vendor = :vendor and orgid = :orgid and (siteid=:siteid or siteid is null) and itemnum not in (select itemnum from item where status not in (select value from synonymdomain where domainid ='ITEMSTATUS' and maxvalue in ('ACTIVE','PLANNING','PENDOBS')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the InvVendor table, used to find the invvendor records for a given vendor. (invvendor.vendor = purchview.vendor and invvendor.orgid=purchview.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "vendor=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR",
            "source": "SERVICEITEMS",
            "remarks": "Service Items Report Object Structure",
            "whereClause": "itemsetid=:itemsetid and itemnum=:itemnum",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "SRVINVVENDOR",
            "source": "SERVICEITEMS",
            "remarks": null,
            "whereClause": "itemnum=:itemnum and itemsetid =:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR",
            "source": "SFWVIEW",
            "remarks": "Relationship to the InvVendor table, used to find the invvendor records for a given vendor. (invvendor.vendor = sfwview.vendor and invvendor.orgid=sfwview.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "vendor=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}