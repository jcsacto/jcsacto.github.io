mos = {
    "objectName": "ITEMORGINFO",
    "className": "psdi.app.item.ItemOrgInfoSet",
    "description": "Item Information Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ITEMORGINFOID",
    "primaryKeyColumns": [
        "ITEMNUM",
        "ITEMSETID",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "ITEMORGINFO",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Item Organization",
            "longDescription": null
        },
        {
            "objectName": "HAZARD",
            "targetObject": "ITEMORGINFO",
            "parentKeys": "ORGID, HAZARDID",
            "targetKeys": "ORGID, HAZARDID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Hazard",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "ITEMORGINFO",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ITEMORGINFO",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "ITEMORGINFO",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 30",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Service",
            "remarks": "Inventory Item Number",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item Set Identifier",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization for which you want to add or modify specific details for this item. Items are grouped in item sets, which can be used by multiple organizations. However, safety hazards and tax codes are generally specific to a single organization.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "HAZARDID",
            "required": false,
            "persistent": true,
            "title": "Hazard",
            "remarks": "Specifies a safety hazard. Click the Select Value button to choose a safety hazard.",
            "sameAsAttribute": "HAZARDID",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "TOOLRATE",
            "required": false,
            "persistent": true,
            "title": "Tool Rate",
            "remarks": "Hourly rate that is charged to job plans, work order plans, and work order actuals when this tool is used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": true,
            "title": "GL Account",
            "remarks": "Identifies the GL Account to track resource usage of the tool. MAXIMO merges this account segment with the work order GL account to populate the debit account when you report tool actuals. MAXIMO defaults the GL account from the Chart of Accounts application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTROLACC",
            "required": false,
            "persistent": true,
            "title": "Control Account",
            "remarks": "Control Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX1CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 1",
            "remarks": "Tax code associated with this item and organization.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX2CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 2",
            "remarks": "Second tax code associated with this item and organization.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX3CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 3",
            "remarks": "Third tax code associated with this item and organization.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX4CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 4",
            "remarks": "Fourth tax code associated with this item and organization.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX5CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 5",
            "remarks": "Fifth tax code associated with this item and organization.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "ITEMORGINFOID",
            "required": true,
            "persistent": true,
            "title": "ITEMORGINFOID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Outside Vendor",
            "remarks": "Outside Vendor",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "The current status of the item such as ACTIVE, PENDING, PLANNING, PENDOBS and OBSELETE.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date the work order status was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CATEGORY",
            "required": true,
            "persistent": true,
            "title": "Stock Category",
            "remarks": "Indicates whether the item is a stocked item (STK), or a non-stocked item (NS). If the value is SP, then the item was identified as a special order item by the system as part of the purchasing process.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find all assets for a given item. (asset.itemnum = itemorginfo.itemnum and asset.itemsetid = itemorginfo.itemsetid and asset.orgid=itemorgifo.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid = :itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "target": "CI",
            "remarks": "Relationship from ITEMORGINFO to the CONTRACTLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIES",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTLINE",
            "target": "CONTRACTLINE",
            "remarks": "Relationship from ITEMORGINFO to the CONTRACTLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARD",
            "target": "HAZARD",
            "remarks": "Relationship to the Hazard table, used to find the hazard record associted with the item. (hazard.hazardid=itemorginfo.hazardid and hazard.orgid=itemorginfo.orgid) This relationship will find zero or one object.",
            "whereClause": "hazardid=:hazardid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCES",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find all balance records for a given item. (invbalances.itemnum = itemorginfo.itemnum and invbalances.itemsetid = itemorginfo.itemsetid and invbalances.orgid=itemorgifo.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid = :itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the INVENTORY table, used to find all Item records. (inventory.itemnum = itemorginfo.itemnum and inventory.itemsetid = itemorginfo.itemsetid and inventory.orgid=itemorginfo.orgid). This resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item record for an item information record. (item.itemnum=itemorginfo.itemnum and item.itemsetid=itemorginfo.itemsetid) This relationship will find one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGCHGSTATUS",
            "target": "ITEMORGCHGSTATUS",
            "remarks": "Relationship to the non-persistent ITEMORGCHGSTATUS table for changing status. (No where clause).",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGSTATUS",
            "target": "ITEMORGSTATUS",
            "remarks": "Relationship to the ItemOrgStatus table, used to find the Itemorginfo record for given item. This relationship will find one or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBITEM",
            "target": "JOBITEM",
            "remarks": "Relationship from ITEMORGINFO to the JOBITEM table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINE",
            "target": "MRLINE",
            "remarks": "Relationship from ITEMORGINFO to the MRLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGANIZATION",
            "target": "ORGANIZATION",
            "remarks": null,
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship from ITEMORGINFO to the POLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "target": "PRLINE",
            "remarks": "Relationship from ITEMORGINFO to the PRLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPITEM",
            "target": "WPITEM",
            "remarks": "Relationship to the WPITEM table, used to find all work plan Item(material and services) for a itemnum. (WPitem.itemnum = item.itemnum and WPitem.itemsetid = item.itemsetid). This resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ITEMORGINFO",
            "source": "AMCTTOOL",
            "remarks": "get itemorginfo record for AMCTTOOL.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "ASSET",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg record for a given asset.(itemorginfo.itemnum = asset.itemnum and itemorginfo.itemsetid = asset.itemsetid and itemorginfo.orgid = asset.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "CONTRACTLINE",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the itemorg record for contractline item with valid status. (itemorginfo.itemnum=contractline.itemnum and itemorginfo.itemsetid=contractline.itemsetid and itemorginfo.orgid=:contractline.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This relationship will find zero or one object. ",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "source": "HAZARD",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the item information records for a hazard. (itemorginfo.orgid=hazard.orgid and itemorginfo.hazardid=hazard.hazardid and itemorginfo.itemsetid = (select itemsetid from organization where orgid = hazard.orgid)) This relationship will find zero or more objects.",
            "whereClause": "orgid=:orgid and hazardid=:hazardid and itemsetid = (select itemsetid from organization where orgid = :orgid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "source": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the Itemorginfo record for given item. This relationship will find one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "source": "INVOICELINE",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an item for a given invoice line. (invoiceline.itemnum = itemorginfo.itemnum and invoiceline.itemsetid = itemorginfo.itemsetid and invoiceline.orgid = itemorginfo.orgid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "source": "INVVENDOR",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg record for a given invvendor",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "source": "ITEM",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the item information records for all organizations using this item. (itemorginfo.itemnum=item.itemnum and itemorginfo.itemsetid=item.itemsetid) This relationship will find zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ITEMORGINFO_HAZARD",
            "source": "ITEM",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the item information hazard records for all organizations using this item. (itemorginfo.itemnum=item.itemnum and itemorginfo.itemsetid=item.itemsetid) This relationship will find zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO_TAX",
            "source": "ITEM",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the item information tax records for all organizations using this item. (itemorginfo.itemnum=item.itemnum and itemorginfo.itemsetid=item.itemsetid) This relationship will find zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "JOBMATERIAL",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the itemorg record for jobMaterial item with valid status. (itemorginfo.itemnum=jobmaterial.itemnum and itemorginfo.itemsetid=jobmaterial.itemsetid and itemorginfo.orgid = jobmaterial.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This relationship will find zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "JOBSERVICE",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the itemorg record for jobService item with valid status. (itemorginfo.itemnum=jobservice.itemnum and itemorginfo.itemsetid=jobservice.itemsetid and itemorginfo.orgid = jobservice.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This relationship will find zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "source": "JOBTOOL",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the item information records for all organizations using this item. (itemorginfo.itemnum=jobtool.itemnum and itemorginfo.itemsetid=jobtool.itemsetid) This relationship will find zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "JOBTOOL",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the itemorg record for jobtool item with valid status. (itemorginfo.itemnum=jobtool.itemnum and itemorginfo.itemsetid=jobtool.itemsetid and itemorginfo.orgid=:jobtool.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This relationship will find zero or one object. ",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "source": "MRLINE",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an item for a given material requisition line. (mrline.itemnum = itemorginfo.itemnum and mrline.itemsetid = itemorginfo.itemsetid and mrline.orgid = itemorginfo.orgid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "MRLINE",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg record for a given mrline.(itemorginfo.itemnum = mrline.itemnum and itemorginfo.itemsetid = mrline.itemsetid and itemorginfo.orgid = mrline.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the ItemOrgInfo table, used to find all item information records associated with this organization. (itemorginfo.orgid=organization.orgid) This relationship will find zero or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "PLUSCTEMPLATE",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg record for a given asset.(itemorginfo.itemnum = asset.itemnum and itemorginfo.itemsetid = asset.itemsetid and itemorginfo.orgid = asset.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": null
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "PLUSCTPSPAREPART",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg record for a given template spare part.(itemorginfo.itemnum = plusctpsparepart.itemnum and itemorginfo.itemsetid = plusctpsparepart.itemsetid and itemorginfo.orgid = plusctpsparepart.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": null
        },
        {
            "name": "ITEMORGINFO",
            "source": "POLINE",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an item for a given purchase order line. (poline.itemnum = itemorginfo.itemnum and poline.itemsetid = itemorginfo.itemsetid and poline.orgid = itemorginfo.orgid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "POLINE",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg info for a given purchase order line.(itemorginfo.itemnum = poline.itemnum and itemorginfo.itemsetid = poline.itemsetid and itemorginfo.orgid = poline.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "source": "PRLINE",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an item for a given requisition line. (prline.itemnum = itemorginfo.itemnum and prline.itemsetid = itemorginfo.itemsetid and prline.orgid = itemorginfo.orgid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "PRLINE",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg record for a given prline.(itemorginfo.itemnum = prline.itemnum and itemorginfo.itemsetid = prline.itemsetid and itemorginfo.orgid = prline.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "source": "RFQLINE",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an item for a given request for quotation line. (rfqlline.itemnum = itemorginfo.itemnum and rfqlline.itemsetid = itemorginfo.itemsetid and rfqlline.orgid = itemorginfo.orgid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "RFQLINE",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg record for a given rfqline.(itemorginfo.itemnum = rfqline.itemnum and itemorginfo.itemsetid = rfqline.itemsetid and itemorginfo.orgid = rfqline.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRVITEMORG",
            "source": "SERVICEITEMS",
            "remarks": null,
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "source": "SERVICEITEMS",
            "remarks": "Service Items Report Object Structure",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "SPAREPART",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg record for a given sparepart.(itemorginfo.itemnum = sparepart.itemnum and itemorginfo.itemsetid = sparepart.itemsetid and itemorginfo.orgid = sparepart.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "TLOAMPRMDFLT",
            "remarks": "Relationship from Computer Promotion Defaults to Item-Org Info to find active items. Returns zero or one record.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": null
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "TLOAMPRMVALUE",
            "remarks": "Relationship from Computer Promotion Values to Item-Org Info to find active items. Returns zero or one record.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": null
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "TLOAMPROMOTE",
            "remarks": "Relationship from Computer Promotion to Item-Org Info to find active items. Returns zero or more records.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": null
        },
        {
            "name": "ITEMORGINFO",
            "source": "TOOLTRANS",
            "remarks": null,
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "source": "WPMATERIAL",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the item information records for all organizations using this item. (itemorginfo.itemnum=wpmaterial.itemnum and itemorginfo.itemsetid=wpmaterial.itemsetid) This relationship will find zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "WPMATERIAL",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the itemorg record for wpMaterial item with valid status. (itemorginfo.itemnum=wpmaterial.itemnum and itemorginfo.itemsetid=wpmaterial.itemsetid and itemorginfo.orgid = wpmaterial.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This relationship will find zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "WPSERVICE",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the itemorg record for wpService item with valid status. (itemorginfo.itemnum=wpservice.itemnum and itemorginfo.itemsetid=wpservice.itemsetid and itemorginfo.orgid = wpservice.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This relationship will find zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "source": "WPTOOL",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the item information records for all organizations using this item. (itemorginfo.itemnum=wptool.itemnum and itemorginfo.itemsetid=wptool.itemsetid) This relationship will find zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "source": "WPTOOL",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the itemorg record for wptool item with valid status. (itemorginfo.itemnum=wptool.itemnum and itemorginfo.itemsetid=wptool.itemsetid and itemorginfo.orgid=:wptool.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This relationship will find zero or one object. ",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        }
    ]
}