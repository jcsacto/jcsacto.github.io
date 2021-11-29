mos = {
    "objectName": "ITEM",
    "className": "psdi.app.item.ItemSet",
    "description": "The ITEM Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "ITEMID",
    "primaryKeyColumns": [
        "ITEMNUM",
        "ITEMSETID"
    ],
    "logicalRelationships": [
        {
            "objectName": "ITEM",
            "targetObject": "ALTITEM",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ALTITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Alternative",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "ALTITEM",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "AMCREWTOOL",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Tool Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "AMCREWTOOLSQ",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tools used by Crew",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "AMCTTOOL",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type Tool",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "ASSET",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "CI",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Configuration Information",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "CONTRACTLINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "CONVERSION",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "DEPRECIATION",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item depreciating",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "DEPTRANS",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset''s Item #",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "FAVITEM",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "FAVITEM",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, VENDORSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
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
            "objectName": "ITEM",
            "targetObject": "INVCOST",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "INVENTORY",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "INVLIFOFIFOCOST",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "INVLOT",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "INVOICELINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "INVRESERVE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "INVSTATUS",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
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
            "objectName": "ITEM",
            "targetObject": "INVUSELINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "INVUSELINESPLIT",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
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
            "objectName": "ITEM",
            "targetObject": "ITEMCONDITION",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
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
            "objectName": "ITEM",
            "targetObject": "ITEMORGSTATUS",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Organization Status History",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "ITEMSPEC",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "ITEMSTATUS",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMID, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Top-Level Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "PARENT, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "JOBITEM",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "JOBMATERIAL",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "JOBSERVICE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "JOBTOOL",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "JPASSETSPLINK",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "LOCOPER",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "MASTERPM",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "MATRECTRANS",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "MATUSETRANS",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "MRLINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "PLUSCTEMPLATE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "PLUSCTPSPAREPART",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "POLINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "PRLINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PR Line Item",
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
            "objectName": "ITEM",
            "targetObject": "REORDERPAD",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "RFQLINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "SERVICEITEMS",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "SFWVIEWLINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "SKDEXTRACAPACITY",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "RESOURCENAME, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Extra Capacity Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "RESOURCENAME, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Scheduler Extra Capacity Craft Itemnum",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "RESOURCENAME, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Extra Capacity Crew Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "SKDEXTRACAPTOOLVIEW",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 59",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "SKDEXTRACAPTOOLVIEW",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID1",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 60",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "SKDEXTRACAPTOOLVIEW",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "RESOURCENAME, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Extra Capacity Tool",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "SKDEXTRACAPTOOLVIEW",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "RESOURCENAME, ITEMSETID1",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 62",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "SKDWORKPLANEXTCAP",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "RESOURCENAME, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Extra Capacity Item",
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
            "objectName": "ITEM",
            "targetObject": "TLOAMPRMDFLT",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "TOOLINV",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "TOOLINV",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM3, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "TOOLITEM",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "TOOLQUAL",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "TOOLTRANS",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "WARRANTYVIEWLINE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "WOMATSTATUSSYNC",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "WPITEM",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "WPMATERIAL",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "WPSERVICE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "WPTOOL",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ITEM",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "ITEM",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "ITEM",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "ITEM",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "ITEM",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter on Item",
            "longDescription": null
        },
        {
            "objectName": "METERGROUP",
            "targetObject": "ITEM",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter Group of Item",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "ITEM",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Sets",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Item",
            "remarks": "Identifies the item record. This value must be unique for all item records. Click the Detail Menu button to view items by classification or availability.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Names or describes the inventory item. For additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROTATING",
            "required": true,
            "persistent": true,
            "title": "Rotating",
            "remarks": "Specifies whether the item is a rotating asset. If the check box is selected, the item becomes an asset tracked by item number and individual asset number. If the check box is cleared (the default), the item is not tracked as an individual asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOTTYPE",
            "required": true,
            "persistent": true,
            "title": "Lot Type",
            "remarks": "Specifies whether the item is tracked by lot (LOT) or not (NOLOT). LOT is used for an item that is lotted, typically has an expiration date, and is able to be assigned lot numbers upon receipt. NOLOT means that the item does not need to be tracked by lots. Click the Select Value button to choose a lot type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CAPITALIZED",
            "required": true,
            "persistent": true,
            "title": "Capitalized",
            "remarks": "Specifies whether the item is to be financially accounted for as a capitalized cost or a non-capitalized cost. If the check box is selected, the item is capitalized. If the check box is cleared (the default), the item is a non-capitalized cost. Tools are always accounted for as capitalized costs. You can only change the setting for this field by using the Change Capitalized Status action in Item Master. Capitalized items are always issued and returned at zero cost, regardless of the cost carried in inventory. Non-capitalized items are issued and returned at the standard, last, or average cost, as specified in Multisite.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSDSNUM",
            "required": false,
            "persistent": true,
            "title": "MSDS",
            "remarks": "Material Safety Data Sheet number issued by the Occupational Safety and Health Association (OSHA). The Material Safety Data Sheet (MSDS), which describes product dangers, must be available to purchasers and users of commercial quantities of all hazardous materials.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OUTSIDE",
            "required": true,
            "persistent": true,
            "title": "Outside",
            "remarks": "Specifies whether the item is a consignment good. If the check box is selected, the item belongs to a contractor (or vendor), but it is stored on-site, and it is an item for which you expect to be charged for its use. If the check box is cleared (the default), the item is not owned by an outside party.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IN19",
            "required": false,
            "persistent": true,
            "title": "Extra Field 19",
            "remarks": "Extra Field 19",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IN20",
            "required": false,
            "persistent": true,
            "title": "Extra Field 20",
            "remarks": "Extra Field 20",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IN21",
            "required": false,
            "persistent": true,
            "title": "Extra Field 21",
            "remarks": "Extra Field 21",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IN22",
            "required": false,
            "persistent": true,
            "title": "Extra Field 22",
            "remarks": "Extra Field 22",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IN23",
            "required": false,
            "persistent": true,
            "title": "Extra Field 23",
            "remarks": "Extra Field 23",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPAREPARTAUTOADD",
            "required": true,
            "persistent": true,
            "title": "Add as Spare Part",
            "remarks": "Specifies whether the item will be added as a spare part for the asset when issued, if the item is not already a spare part. If the checkbox is selected, the item can be added as a spare part. If the check box is cleared (the default), the item is not used as a spare part.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Class Structure identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "INSPECTIONREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Inspect on Receipt",
            "remarks": "Specifies whether the item should be held out of inventory when being received, until the purchase order receipt has been approved. If the check box is selected, the item cannot be received until it has been inspected. If the check box is cleared (the default), the item can be received without an inspection.",
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
            "attributeName": "IN24",
            "required": false,
            "persistent": true,
            "title": "IN24",
            "remarks": "Extra Field 24",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IN25",
            "required": false,
            "persistent": true,
            "title": "IN25",
            "remarks": "Extra Field 25",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IN26",
            "required": false,
            "persistent": true,
            "title": "IN26",
            "remarks": "Extra Field 26",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IN27",
            "required": false,
            "persistent": true,
            "title": "IN27",
            "remarks": "Extra Field 27",
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
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Identifies the item set, or group of items, to which this item belongs. An organization is assigned to only one item set, but multiple organizations can use the same item set. Click the Select Value button to choose an item set.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "ORDERUNIT",
            "required": false,
            "persistent": true,
            "title": "Order Unit",
            "remarks": "Unit of measure used to order the item, such as DOZEN or CASE. Click the Select Value button to view a list of valid order units.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ISSUEUNIT",
            "required": false,
            "persistent": true,
            "title": "Issue Unit",
            "remarks": "Unit of measure used to issue the item from the storeroom, such as EACH or ROLL. Click the Select Value button to choose an issue unit.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
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
            "attributeName": "ITEM_DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of this item.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEM_ID",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "Inventory item number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "SITEID",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "HASIAS",
            "required": true,
            "persistent": false,
            "title": "Rotating",
            "remarks": "HASIAS",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTANCE",
            "required": false,
            "persistent": false,
            "title": "Instance",
            "remarks": "INSTANCE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONENABLED",
            "required": true,
            "persistent": true,
            "title": "Condition Enabled",
            "remarks": "Specifies whether this item has a value or worth you want to assign and track based on its physical condition. You can apply different rates to an item as its condition changes from use, such as from new to used. If the check box is selected, you must assign at least one full value (100%) condition code for this item, and any other codes you assign must be a percentage of that. If the check box is cleared (the default), the physical condition of the item is not tracked.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPNAME",
            "required": false,
            "persistent": true,
            "title": "Meter Group",
            "remarks": "Identifies the meter group, or category of meters, to which the meter applied to this item belongs. Applies only to rotating items. Click the Select Value button to choose a meter group.",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "METERGROUP"
        },
        {
            "attributeName": "METERNAME",
            "required": false,
            "persistent": true,
            "title": "Meter",
            "remarks": "Identifies the meter associated with the item, for which a reading is to be recorded when this item is issued to an asset. A meter is a device designed to measure time, distance, speed, or intensity, or indicate and record or regulate the amount or volume, as of the flow of a gas or an electric current. Only non-rotating items can be associated with a meter.",
            "sameAsAttribute": "METERNAME",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": true,
            "title": "Commodity Group",
            "remarks": "Identifies the commodity group, or product category, associated with this item or tool. Click the Select Value button to view a list of valid commdity groups.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Commodity Code",
            "remarks": "Identifies the commodity code associated with this item or tool. Click the Select Value button to view a list of valid commodity codes.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "ITEMTYPE",
            "required": true,
            "persistent": true,
            "title": "Item Type",
            "remarks": "Item Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRORATE",
            "required": true,
            "persistent": true,
            "title": "Prorate Service",
            "remarks": "Prorate Service?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMID",
            "required": true,
            "persistent": true,
            "title": "ITEMID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISKIT",
            "required": true,
            "persistent": true,
            "title": "Kit",
            "remarks": "Specifies whether the item is a kit item that contains a collection of items that can be issued together as a single item. If the check box is selected, the item is a kit. If the check box is cleared (the default), the item is not a kit.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KITCOMPONENTTOADDTOSTORE",
            "required": true,
            "persistent": false,
            "title": "Is Kit Component to Be Added to Store",
            "remarks": "non-persistent attribute used when adding the kit to which this item belongs to a storeroom.",
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
            "attributeName": "ATTACHONISSUE",
            "required": true,
            "persistent": true,
            "title": "Attach to Parent Asset on Issue",
            "remarks": "Specifies whether to attach the item to the parent asset when the item is issued. If the check box is selected, the item becomes a subassembly of the parent asset upon issue. If the check box is cleared (the default), the item is not attached to the parent asset when issued.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "MAXISSUE",
            "required": false,
            "persistent": true,
            "title": "Maximum Quantity Issued",
            "remarks": "Total maximum quantity that can be issued to an asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "The current status of the item such as ACTIVE, PENDING, PLANNING, PENDOBS and OBSELETE.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "HIERARCHYPATH",
            "required": false,
            "persistent": false,
            "title": "Hierarchy Path",
            "remarks": "Sets value to HIERARCHYPATH, if the item has an associated CLASSSTRUCTURE record",
            "sameAsAttribute": "HIERARCHYPATH",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "STATUSIFACE",
            "required": true,
            "persistent": false,
            "title": "Has Status Changed",
            "remarks": "Non persistent boolean field to indicate whether the status has been changed after the stateful object is fetched from the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NP_STATUSMEMO",
            "required": false,
            "persistent": false,
            "title": "Change Status Memo",
            "remarks": "Status change memo, temporary non-persistent field used by MEA",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "NP_STATUSROLLDOWN",
            "required": true,
            "persistent": false,
            "title": "Roll New Status to Organizations and Inventory",
            "remarks": "Roll New Status to Organizations and Inventory, temporary non-persistent field used by MEA",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HARDRESISSUE",
            "required": true,
            "persistent": true,
            "title": "Requires hard reservation on use",
            "remarks": "Indicates whether a hard reservation must be referenced when the item is issued from a storeroom.",
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
        },
        {
            "attributeName": "PLUSCISINHOUSECAL",
            "required": true,
            "persistent": true,
            "title": "Internal Calibration",
            "remarks": "When selected, indicates that this tool is calibrated in house. This field can be used to sort tools that are calibrated internally or externally.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCISMTE",
            "required": true,
            "persistent": true,
            "title": "Is M&TE",
            "remarks": "Defines whether a Tool is a standard used for measuring and testing equipment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCISMTECLASS",
            "required": false,
            "persistent": true,
            "title": "M&TE Classification",
            "remarks": "When the Is M&TE? field is checked then you have the option to choose a classification for M&TE.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCSOLUTION",
            "required": true,
            "persistent": true,
            "title": "Buffer Solution",
            "remarks": "Buffer Solution Flag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISCREW",
            "required": true,
            "persistent": true,
            "title": "Crew",
            "remarks": "Specifies whether the tool can be used in Crew applications and Work Order Tracking applications. If the check box is selected, the tool can be used. If the check box is cleared, the tool cannot be used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ALTITEM",
            "target": "ALTITEM",
            "remarks": "Relationship to the AltItem table, used to find all alternate items for a given item. (item.itemnum = altitem.itemnum and altitem.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "PLUSCTLALTINVER",
            "target": "ALTITEM",
            "remarks": "all altitems that have parent as alternate",
            "whereClause": "altitemnum=:itemnum and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find all asset for a given item. (asset.itemnum = item.itemnum and asset.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHANGECAPSTATUS",
            "target": "CHANGECAPSTATUS",
            "remarks": "Relationship to the nonpersistent parameter set for changing capitalized status.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "target": "CI",
            "remarks": "Relationship from ITEM to the CONTRACTLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "target": "CLASSANCESTOR",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (item.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given item. (classspec.classstructureid = item.classstructureid and classspec.orgid = (select orgid from organization where itemsetid = item.itemsetid)). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure for a given item. (classstructure.classstructureid = item.classstructureid and classspec.orgid = (select orgid from organization where itemsetid = item.itemsetid)). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM_CLASS_STRUCT",
            "target": "CLASSSTRUCTURE",
            "remarks": null,
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_ITMGRP",
            "target": "COMMODITIES",
            "remarks": null,
            "whereClause": "commodity = :commodity and parent is not null and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITIES",
            "target": "COMMODITIES",
            "remarks": "Relationship to the Commodities table, used to find the commodity associated with the Item. (commodities.commodity = item.commodity and commodities.itemsetid = item.itemsetid). The resulting set will contain one object.",
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITYGROUP",
            "target": "COMMODITIES",
            "remarks": "Relationship to the Commodities table, used to find the commodity associated with the Item's CommodityGroup. (commodities.commodity = item.commoditygroup and commodities.itemsetid = item.itemsetid). The resulting set will contain one object.",
            "whereClause": "commodity = :commoditygroup and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTLINE",
            "target": "CONTRACTLINE",
            "remarks": "Relationship from ITEM to the CONTRACTLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTLINE_NOHIST",
            "target": "CONTRACTLINE",
            "remarks": "Relationship to CONTRACTLINE, used to find all non-historical contract line records for this item. The WHERE clause is: contractline.itemnum = item.itemnum and exists (select 1 from contract where contract.contractnum=contractline.contractnum and contract.historyflag=:no) and contractline.itemsetid = item.itemsetid. The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and exists (select 1 from contract where contract.contractnum=contractline.contractnum and contract.historyflag=:no) and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONVERSION",
            "target": "CONVERSION",
            "remarks": "Relationship to the Conversion table, used to find all Conversion factors for a given item. (item.itemnum = conversion.itemnum and conversion.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONVERSION_NEW",
            "target": "CONVERSION",
            "remarks": "Relationship to the Conversion table, used to get an empty conversion set. (1=2) This relationship will find zero objects.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEPRECIATION",
            "target": "DEPRECIATION",
            "remarks": "Relationship to get the Depreciation",
            "whereClause": "ITEMNUM = :ITEMNUM and  ITEMSETID= :ITEMSETID",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Doclinks table, used to find all documents for a given item. (doclinks.keytable = 'ITEM' and doclinks.keycolumn = 'ITEMNUM' and doclinks.keyvalue = item.itemnum and doclinks.itemsetid = item.itemsetid). The resulting set will contain zero or more objects. Note: The Item.ItemNum field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable='ITEM' and ownerid=:itemid) or (ownertable = 'HAZARD' and ownerid = (select hazarduid from hazard where exists( select 1 from itemorginfo where itemnum=:itemnum\tand itemsetid = :itemsetid and hazardid = hazard.hazardid and orgid = hazard.orgid  ) ) )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "IMGLIB",
            "target": "IMGLIB",
            "remarks": "Relationship to the IMGLIB table, used to find the image for a given item. (imglib.refobject='ITEM' and imglib.refobjectid=:item$ITEM.ITEMID). The resulting set will contain zero or one object.",
            "whereClause": "refobject = 'ITEM' and refobjectid = :itemid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCES",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find all inventory balances for a given item. (invbalances.itemnum = item.itemnum and invbalances.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find all inventory records for a given item. (inventory.itemnum = item.itemnum and inventory.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVE",
            "target": "INVRESERVE",
            "remarks": "Relationship to the InvReserve table, used to find all inventory reserves for a given item. (invreserve.itemnum = item.itemnum and invreserve.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR",
            "target": "INVVENDOR",
            "remarks": "Relationship to the InvVendor table, used to find all vendors for a given Item. (invvendor.itemnum = item.itemnum and invvendor.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVLIFOFIFOCOST",
            "target": "ITEM",
            "remarks": "Relationship to the item table, used to find the item record for a given Inventory Lifo Fifo Cost. The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEMCHANGESTATUS",
            "target": "ITEMCHANGESTATUS",
            "remarks": "Relationship to the non-persistent ITEMCHANGESTATUS table for changing status. (No where clause).",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given item. (itemcondition.itemnum = item.itemnum and itemcondition.itemsetid=item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ITEMCONDITION_FULL",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition record of full rate for a given item. (itemcondition.itemnum = item.itemnum and itemcondition.itemsetid=item.itemsetid and itemcondition.condrate=100). The resulting set will contain zeor or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and condrate=100",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION_SETUP",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given item set of the current login organization (itemcondition.itemnum is null and itemcondition.itemsetid=item.itemsetid). The resulting set will contain zeor or more objects.",
            "whereClause": "itemnum is null and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the item information records for all organizations using this item. (itemorginfo.itemnum=item.itemnum and itemorginfo.itemsetid=item.itemsetid) This relationship will find zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ITEMORGINFO_HAZARD",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the item information hazard records for all organizations using this item. (itemorginfo.itemnum=item.itemnum and itemorginfo.itemsetid=item.itemsetid) This relationship will find zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO_TAX",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the item information tax records for all organizations using this item. (itemorginfo.itemnum=item.itemnum and itemorginfo.itemsetid=item.itemsetid) This relationship will find zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSPEC",
            "target": "ITEMSPEC",
            "remarks": "Relationship to the ItemSpec table, used to find all item specifications for a given item. (item.itemnum = itemspec.itemnum and itemspec.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSPECCLASS",
            "target": "ITEMSPEC",
            "remarks": "Relationship to the ItemSpec table, used to find all item specifications for a given item with a class structure. (item.itemnum = itemspec.itemnum and item.classstructureid = itemspec.classstructureid and itemspec.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and classstructureid = :classstructureid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSTATUS",
            "target": "ITEMSTATUS",
            "remarks": "Relationship to the ItemStatus table, used to find all item status for an item. (ItemStatus.itemnum = item.itemnum). This resulting set will contain 1 or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSTRUCT",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find all item structure records for a given item. (item.itemnum = itemstruct.itemnum and itemstruct.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COPYIASDLG",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the Item table, used to get all top-level item structure MBOs for the copy item assembly structure functionality. (itemnum = itemid and parent is null and itemstruct.itemsetid = item.itemsetid). The resulting set will contain one or more objects.",
            "whereClause": "itemnum=itemid and parent is null and itemsetid=:itemsetid and itemnum in (select a.parent from itemstruct a where a.itemid=itemstruct.itemid and a.itemsetid=itemstruct.itemsetid and a.itemnum !=a.itemid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPITEMSTRUCT",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find the top-level item structure record for a given item. (item.itemnum = itemstruct.itemnum and item.itemnum=itemstruct.itemid and itemstruct.parent is null and item.itemsetid = itemstruct.itemsetid). The resulting set will contain zero or 1 object.",
            "whereClause": "itemnum = :itemnum and itemid = :itemnum and parent is null and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPITEMSTRUCT_1",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the itemstruct table, used to find the top item struct record in Move To for a given item. (1=1). The resulting set will contain zero or more objects.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDRENITEMSTRUCT",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find all children item structure records a given item which may be a top level item. (item.itemnum = itemstruct.itemid and item.itemnum != itemstruct.itemnum and item.itemnum=itemstruct.parent and itemstruct.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemid = :itemnum and itemnum != :itemnum and parent= :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBITEM",
            "target": "JOBITEM",
            "remarks": "Relationship from ITEM to the JOBITEM table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBTOOL",
            "target": "JOBTOOL",
            "remarks": "Relationship to the JobTool table, used to find all job records for a given item(tool). (jobtool.itemnum = item.itemnum and jobtool.orgid = tool.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LIFOFIFOCOST",
            "target": "LIFOFIFOCOST",
            "remarks": "Relationship to LifoFifoCost table. This relationship will find one or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "LINKCLASSSPEC",
            "target": "LINKCLASSSPEC",
            "remarks": "Relationship to the nonpersistent parameter set LinkClassSpec.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find all locations for a given item. (locations.siteid=item.siteid and location in (select location from locoper where locations.location=locoper.location and locoper.itemnum=item.itemnum and locoper.itemsetid = item.itemsetid and locations.orgid=locoper.orgid)). The resulting set will contain zero or more objects.",
            "whereClause": "location in (select location from locoper where locations.location=locoper.location and locoper.itemnum=:itemnum and locoper.itemsetid=:itemsetid and locations.orgid=locoper.orgid and locations.siteid=locoper.siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for item. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:itemid and ldownertable = 'ITEM'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MASTERPM",
            "target": "MASTERPM",
            "remarks": "Relationship to the MASTERPM table, used to find all Master PM records for a given item. (masterpm.itemnum = item.itemnum and masterpm.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and  itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "MATRECTRANS",
            "remarks": "Matrectrans relationship to item",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "target": "METER",
            "remarks": "Relationship to the Meter table, used to find the meter associated with the Item. (meter.metername = item.metername). The resulting set will contain one object.",
            "whereClause": "metername=:metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERGROUP",
            "target": "METERGROUP",
            "remarks": "Relationship to the MeterGroup table, used to find the metergroup associated with the Item. (metergroup.groupname = item.groupname). The resulting set will contain one object.",
            "whereClause": "groupname=:groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINE",
            "target": "MRLINE",
            "remarks": "Relationship from ITEM to the MRLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGANIZATION",
            "target": "ORGANIZATION",
            "remarks": "Relationship to the Organization table, used to find all organizations using this item. (organization.itemsetid=item.itemsetid) This relationship will find zero or more objects.",
            "whereClause": "itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship from ITEM to the POLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE_NOHIST",
            "target": "POLINE",
            "remarks": "Relationship to POLINE ,used to find all non-historical po line records, excluding those on POs of type PRICE and BLANK, for this item. The WHERE clause is: poline.itemnum = item.itemnum and exists (select 1 from po where po.ponum=poline.ponum and po.historyflag = :no and po.potype not in (select VALUE from valuelist where listname='POTYPE' AND MAXVALUE in ('PRICE', 'BLANK') ) and poline.itemsetid = item.itemsetid) . The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and exists (select 1 from po where po.ponum=poline.ponum and po.revisionnum=poline.revisionnum and po.siteid=poline.siteid and po.historyflag = :no) and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "target": "PRLINE",
            "remarks": "Relationship from ITEM to the PRLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE_NOHIST",
            "target": "PRLINE",
            "remarks": "Relationship to the PRLINE table, used to find all non-historical pr line records for this item. (item.itemnum=poline.itemnum and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag=no) and prline.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and ponum is null and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag=:no) and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SETS",
            "target": "SETS",
            "remarks": "Relationship to the Sets table, used to find the item set record for an item. (itemset.itemsetid =item.itemsetid and sets.settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'ITEM')) This relationship will find one object.",
            "whereClause": "setid=:itemsetid and settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'ITEM')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPAREPART",
            "target": "SPAREPART",
            "remarks": "Relationship to the SparePart table, used to find all spare parts for a given item. (sparepart.itemnum = item.itemnum and sparepart.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and siteid=:siteid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOOLQUAL",
            "target": "TOOLQUAL",
            "remarks": "Relationship to the TOOLQUAL table. This set returns 0 or more objects.",
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
            "name": "ALTITEM",
            "source": "ALTITEM",
            "remarks": "Relationship to the item table, used to find all alternative/interchangeable items for a given item. (altitem.altitemnum = item.itemnum and item.itemsetid = altitem.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum =:altitemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCTLITEMALT",
            "source": "ALTITEM",
            "remarks": "Relationship to the item table, used to find all surces of alternative/interchangeable items for a given item. (altitem.itemnum = item.itemnum and item.itemsetid = altitem.itemsetid).",
            "whereClause": "itemnum =:altitemnum and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "AMCREWTOOL",
            "remarks": "Relationship between AMCREWTOOL and ITEM tables.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "AMCREWTOOLSQ",
            "remarks": "Relationship between AMCREWTOOLSQ and ITEM tables.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "AMCTTOOL",
            "remarks": "Item entry for corresponding AMCTTOOL.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "ASSET",
            "remarks": "Relationship to the Item table, used to find all items for a given asset. (item.itemnum = asset.itemnum and item.itemsetid = asset.itemsetid). This resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSET_ITEM",
            "source": "ASSET",
            "remarks": null,
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ITEM",
            "source": "CI",
            "remarks": "Relationship to the Item table, used to find item for a given CI Item",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "CLASSSPEC",
            "remarks": "Relationship to the Item table, used to find all items associated with a given class specification. (item.classstructureid = classspec.classstructureid and item.itemsetid = (select itemsetid from organization where orgid =  classspec.orgid)). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the Item table, used to find all items associated with the given class structure. (item.classstructureid = classstructure.classstructureid and item.itemsetid = (select itemsetid from organization where orgid =  classstructure.orgid)). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMS_ONLY",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the item table, used to find the item records for a given classstructure. (classstructure.classstructureid = item.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_ITMCOMDEL",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "commodity = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_ITMGRPDEL",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "commoditygroup = :commodity and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "CONTRACTLINE",
            "remarks": "Relationship to the Item table, used to find the item records for a given contract line. (item.itemnum = contractline.itemnum and item.itemsetid = contractline.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "FAVITEM",
            "remarks": null,
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "INVBALANCES",
            "remarks": "Relationship to the Item table, used to find the item for a given inventory balance record. (invbalances.itemnum = item.itemnum and item.itemsetid = invbalances.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "INVCOST",
            "remarks": "Relationship to the item table, used to find the item record for a given Invnetory Cost. (invcost.itemnum = item.itemnum and invcost.itemsetid=item.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "INVENTORY",
            "remarks": "Relationship to the Item table, used to find the item for a given inventory record. (item.itemnum = inventory.itemnum and item.itemsetid = inventory.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "INVOICELINE",
            "remarks": "Relationship to the Item table, used to find the item records for a given invoice line. (item.itemnum = invoiceline.itemnum and item.itemsetid = invoiceline.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "INVRESERVE",
            "remarks": "Relationship to the Item table, used to find the item being reserved. (item.itemnum = invreserve.itemnum and item.itemsetid = invreserve.itemsetid). The resulting set will contain one or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "INVTRANS",
            "remarks": "Realtionship from INVTRANS to ITEM to get and item record.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "INVUSELINE",
            "remarks": "Relationship to the Item table, used to find the item information for the inventory usage line.The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "INVUSELINESPLIT",
            "remarks": "Relationship to the Item table, used to find the item information for the inventory usage split line.The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "INVVENDOR",
            "remarks": "Relationship to the Item table, used to find the item records for a given invvendor. (invvendor.itemnum = item.itemnum and invvendor.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "ISSUEDITEMFORRETURN",
            "remarks": "Relationship to the Item table, used to find the item records for a given return record. The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "INVLIFOFIFOCOST",
            "source": "ITEM",
            "remarks": "Relationship to the item table, used to find the item record for a given Inventory Lifo Fifo Cost. The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "ITEMCONDITION",
            "remarks": "Relationship to the item table, used to find the item record for a given item condition record. (itemcondition.itemnum = item.itemnum and itemcondition.itemsetid=item.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "ITEMORGINFO",
            "remarks": "Relationship to the Item table, used to find the item record for an item information record. (item.itemnum=itemorginfo.itemnum and item.itemsetid=itemorginfo.itemsetid) This relationship will find one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "ITEMSTRUCT",
            "remarks": "Relationship to the Item table, used to find the item referenced by the item in the item assembly structure. (itemstruct.itemnum = item.itemnum and item.itemsetid = itemstruct.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMIDITEMISKIT",
            "source": "ITEMSTRUCT",
            "remarks": "Rel. to Item, used to find the kit item assoc. with this ItemStruct's ItemID. WHERE clause is: item.itemnum=itemstruct.itemid and item.iskit=1 and item.itemsetid=itemstruct.itemsetid. Result will be one (if ItemStruct is a kit structure) or zero objects.",
            "whereClause": "itemnum=:itemid and iskit=1 and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTITEM",
            "source": "ITEMSTRUCT",
            "remarks": "Relationship to the Item table, used to find the item referenced by the parent in the item assembly structure (If this is the top level item, the parent will be null). (itemstruct.parent = item.itemnum and item.itemsetid = itemstruct.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :parent and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "JOBITEM",
            "remarks": "Relationship to the Job Material's Item records, used to find the item records for a given Job Material. (item.itemnum=jobmaterial.itemnum and item.itemsetid = jobmaterial.itemsetid). The resulting set will contain zero or one record.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "JOBMATERIAL",
            "remarks": "Relationship to the Job Material's Item records, used to find the item records for a given Job Material. (item.itemnum=jobmaterial.itemnum and item.itemsetid = jobmaterial.itemsetid). The resulting set will contain zero or one record.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSTATUS",
            "source": "JOBMATERIAL",
            "remarks": "Relationship to the Itemo table, used to find the item record for jobMaterial item with valid status. (item.itemnum=jobmaterial.itemnum and item.itemsetid=jobmaterial.itemsetid and item.orgid = jobmaterial.orgid and item.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This relationship will find zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSTATUS",
            "source": "JOBSERVICE",
            "remarks": "Relationship to the Item table, used to find the item record for jobService item with valid status. (item.itemnum=jobservice.itemnum and item.itemsetid=jobservice.itemsetid and item.orgid = jobservice.orgid and item.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This relationship will find zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "JOBTOOL",
            "remarks": "Relationship to the Job Tool's Tool(item) records, used to find the Tool(item) records for a given Job Tool. (item.itemnum=jobtool.itemnum). The resulting set will contain zero or one record.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSTATUS",
            "source": "JOBTOOL",
            "remarks": "Relationship to the Item table, used to find the item record for jobtool item with valid status. (item.itemnum=jobtool.itemnum and item.itemsetid=jobtool.itemsetid and item.orgid=:jobtool.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This relationship will find zero or one object. ",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "JPASSETSPLINK",
            "remarks": "Relationship to the Work Asset's Item records, used to find the item records for a given work asset. (item.itemnum=jpassetsplink.itemnum  and item.itemsetid = jpassetsplink.itemsetid). The resulting set will contain zero or one record.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "LIFOFIFOCOST",
            "remarks": "Relationship to Item table. This relationship will find one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "LINESPLIT",
            "remarks": "Relationship to the Inventory table. The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Item table. (item.itemnum=locations.itemnum and item.itemsetid = locations.itemsetid). The resulting set will contain zero or one object. ItemNum is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "LOCOPER",
            "remarks": "Relationship to the Item table, used to find the rotating item at the operating location. (locoper.itemnum=item.itemnum and item.itemsetid = locoper.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOC_ITEM",
            "source": "LOCOPER",
            "remarks": null,
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "MASTERPM",
            "remarks": "Relationship to the MasterPM's Item records, used to find the item records for a given MasterPM. (item.itemnum=masterpm.itemnum and item.itemsetid = masterpm.itemsetid). The resulting set will contain zero or one record.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the Item table, used to find the item received or transferred. (item.itemnum = matrectrans.itemnum and item.itemsetid = matrectrans.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the Item table, used to find the item issued. (item.itemnum = matusetrans.itemnum and item.itemsetid = matusetrans.itemsetid ). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "SINGLE"
        },
        {
            "name": "ITEM",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the item table, used to find all item records using this measureunit. (item.orderunit=measureunit.measureunitid or item.issueunit=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid or issueunit=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "METER",
            "remarks": "Relationship to the ITEM table, used to find all items associated with the meter. The WHERE clause is: meter.metername = item.metername. The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "METERGROUP",
            "remarks": "Relationship to the Item table, used to find all items that use the given meter group. (item.groupname = metergroup.groupname). The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSONLY",
            "source": "MR",
            "remarks": "list all the items from items table(itemtype=ITEM)",
            "whereClause": "itemtype in (:&synonymlist&_itemtype[ITEM]) and itemsetid in (select itemsetid from organization where orgid=:orgid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "MRLINE",
            "remarks": "Relationship to Item table, used to find the item records for a given material requisition line. (mrline.itemnum = item.itemnum and poline.itemsetid = mrline.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the Item table, used to find all items in orgaization item set. (item.itemsetid = organization.itemsetid). This relationship will find zero or more objects.",
            "whereClause": "itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "PLUSCTEMPLATE",
            "remarks": "relationship to the item table (plusctemplate.itemnum = item.itemnum",
            "whereClause": "itemnum = :itemnum",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "PLUSCTPMETER",
            "remarks": "relationship to the item table (plusctpmeter.itemnum = item.itemnum",
            "whereClause": "itemnum = :itemnum",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "PLUSCTPSPAREPART",
            "remarks": "relationship to the item table (plusctpsparepart.itemnum = item.itemnum",
            "whereClause": "itemnum = :itemnum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSALITEM",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "itemnum in (select itemnum from pluscdsassetlink where dsplannum = :dsplannum) and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "PM",
            "remarks": "Relationship to the PM's Item records, used to find the item records for a given PM. (item.itemnum=pm.masterpmitemnum and item.itemsetid = pm.itemsetid). The resulting set will contain zero or one record.",
            "whereClause": "itemnum = :masterpmitemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "POLINE",
            "remarks": "Relationship to the Item table, used to find the item records for a given purchase order line. (item.itemnum = poline.itemnum). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid",
            "cardinality": "SINGLE"
        },
        {
            "name": "ITEM",
            "source": "PRLINE",
            "remarks": "Relationship to the Item table, used to find the item records for a given purchase requisition line. (item.itemnum = prline.itemnum and item.itemsetid = prline.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "RFQLINE",
            "remarks": "Relationship to the item table, used to find the item record for a given RFQ line record. (rfqline.itemnum = item.itemnum and rfqline.itemsetid=item.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "SETS",
            "remarks": "Relationship to the Item table, used to find all items in this item set. (item.itemsetid = itemset.itemsetid). This relationship will find zero or more objects.",
            "whereClause": "itemsetid=:setid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "SPAREPART",
            "remarks": "Relationship to the Item table, used to find all items for a given spare part.(item.itemnum = sparepart.itemnum and item.itemsetid = sparepart.itemsetid). This resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "SPLITUSELINE",
            "remarks": "Relationship to the Item table, used to find the item records for a given splituseline record. The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "TLOAMPRMDFLT",
            "remarks": "Relationship from Computer Promotion Defaults to Item. Returns zero or one record.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "TLOAMPRMVALUE",
            "remarks": "Relationship from Computer Promotion Values to Item. Returns zero or one record.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "TLOAMPROMOTE",
            "remarks": "Relationship from Computer Promotion to Item. Returns zero or one record.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "source": "TOOLQUAL",
            "remarks": "Relationship to the Item table on itemnum and itemsetid. (item.itemnum=toolqual.itemnum and item.itemsetid=toolqual.itemsetid.)  This set returns 0 or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "TOOLTRANS",
            "remarks": null,
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STDSERVICESONLY",
            "source": "WORKORDER",
            "remarks": "list all the standard service items from items table(itemtype=STDSERVICE)",
            "whereClause": "itemtype in (:&synonymlist&_itemtype[STDSERVICE]) and itemsetid in (select itemsetid from organization where orgid=:orgid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOOLSONLY",
            "source": "WORKORDER",
            "remarks": "list all the tools from items table(itemtype=TOOL)",
            "whereClause": "itemtype in (:&synonymlist&_itemtype[TOOL]) and itemsetid in (select itemsetid from organization where orgid=:orgid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSONLY",
            "source": "WORKORDER",
            "remarks": "list all the items from items table(itemtype=ITEM)",
            "whereClause": "itemtype in (:&synonymlist&_itemtype[ITEM]) and itemsetid in (select itemsetid from organization where orgid=:orgid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "WPMATERIAL",
            "remarks": "Relationship to the Item table, used to find the item records for a given work plan material line (item.itemnum = wpmaterial.itemnum and item.itemsetid = wpmaterial.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid",
            "cardinality": "SINGLE"
        },
        {
            "name": "ITEMSTATUS",
            "source": "WPMATERIAL",
            "remarks": "Relationship to the Item table, used to find the item record for wpMaterial item with valid status. (item.itemnum=wpmaterial.itemnum and item.itemsetid=wpmaterial.itemsetid and item.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This relationship will find zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "WPSERVICE",
            "remarks": "Relationship to the Item table, used to find the item records for a given work plan service line (item.itemnum = wpservice.itemnum and item.itemsetid = wpservice.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOOL",
            "source": "WPTOOL",
            "remarks": "Relationship to the Tool(Item) table, used to find the tool(item) for a given work plan tool. (itemnum=:itemnum and itemtype=:linetype and itemsetid=:itemsetid and orgid=:orgid). This resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and itemtype=:linetype and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "source": "WPTOOL",
            "remarks": "Relationship to the Item table, used to find the tool records for a given work plan tool line (item.itemnum = wptool.itemnum and item.itemsetid = wptool.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCITEM",
            "source": "WPTOOL",
            "remarks": null,
            "whereClause": "itemnum=:pluscitemnum",
            "cardinality": null
        }
    ]
}