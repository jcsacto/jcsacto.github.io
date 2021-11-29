mos = {
    "objectName": "SPAREPART",
    "className": "psdi.app.asset.SparePartSet",
    "description": "The SPAREPART Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SPAREPARTID",
    "primaryKeyColumns": [
        "SPAREPARTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "SPAREPART",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 143",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "SPAREPART",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "SPAREPART",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SPAREPART",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "SPAREPART",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 61",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SPAREPART",
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
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": true,
            "title": "Enter asset to search for spare parts",
            "remarks": "Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Item",
            "remarks": "Spare Part Item Number",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "QUANTITY",
            "required": true,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Quantity Needed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Remark",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
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
            "attributeName": "ITEMSETID",
            "required": true,
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
            "remarks": "Long Description for Remark",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPAREPARTID",
            "required": true,
            "persistent": true,
            "title": "SPAREPARTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "ISSUEDQTY",
            "required": true,
            "persistent": true,
            "title": "IssuedQty",
            "remarks": "Total Quantity Issued",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the SPAREPART to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find all items for a given spare part.(item.itemnum = sparepart.itemnum and item.itemsetid = sparepart.itemsetid). This resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg record for a given sparepart.(itemorginfo.itemnum = sparepart.itemnum and itemorginfo.itemsetid = sparepart.itemsetid and itemorginfo.orgid = sparepart.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the SPAREPART to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SPAREPART",
            "source": "ASSET",
            "remarks": "Relationship to the SparePart table, used to find all spareparts for a given asset. (sparepart.assetnum = asset.assetnum).  This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "SPAREPART_AVAILTOADD",
            "source": "ASSET",
            "remarks": "Relationship to the SparePart table, used to find all spareparts not yet related to this asset. (sparepart.assetnum != asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum != :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPAREPARTITEM",
            "source": "ASSET",
            "remarks": "Relationship to the Sparepart table, used to find all spare parts for a given asset.(sparepart.assetnum = asset.assetnum and sparepart.itemnum = asset.itemnum and sparepart.itemsetid = asset.itemsetid). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and itemnum=:itemnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPAREPART",
            "source": "INVENTORY",
            "remarks": "Relationship to the Sparpart table, used to find all spare parts for the given Inventory record. (Inventory.itemnum = sparepart.itemnum and sparepart.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and assetnum in ( select assetnum from asset where ( moved=:no or status not in (select value from synonymdomain where maxvalue in ('DECOMMISSIONED') and domainid='LOCASSETSTATUS') ) and siteid=sparepart.siteid ) and :sitefiltering",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPAREPART_NOSITE",
            "source": "INVENTORY",
            "remarks": "Fix for APAR/Issue IZ87029/10-19214: same as SPAREPART relationship on the INVENTORY object minus the site restriction",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and assetnum in ( select assetnum from asset where ( moved=:no or status not in (select value from synonymdomain where maxvalue in ('DECOMMISSIONED') and domainid='LOCASSETSTATUS'))) and :sitefiltering",
            "cardinality": null
        },
        {
            "name": "INVUSESPAREPART",
            "source": "INVUSE",
            "remarks": "Relationship to the sparepart records, used to find the sparepart records for a given storeroom.",
            "whereClause": "itemnum in (select itemnum from invbalances where location = :fromstoreloc and siteid=:siteid) and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "SPAREPART",
            "source": "ITEM",
            "remarks": "Relationship to the SparePart table, used to find all spare parts for a given item. (sparepart.itemnum = item.itemnum and sparepart.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ISSUETRANSFERSPARTPART",
            "source": "LOCATIONS",
            "remarks": "Relationship to the sparepart records, used to find the sparepart records for a given storeroom.",
            "whereClause": "itemnum in (select itemnum from invbalances where location = :location and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPAREPART",
            "source": "PLUSCTPSPAREPART",
            "remarks": "relationship to the sparepart table, used for Select Spare Parts dialog",
            "whereClause": "orgid = :orgid",
            "cardinality": null
        }
    ]
}