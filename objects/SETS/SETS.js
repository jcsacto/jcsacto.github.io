mos = {
    "objectName": "SETS",
    "className": "psdi.app.sets.SetsSet",
    "description": "Sets attributes.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "SETSID",
    "primaryKeyColumns": [
        "SETID"
    ],
    "logicalRelationships": [
        {
            "objectName": "SETS",
            "targetObject": "ALTITEM",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "AMCREWTOOL",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Tool Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "AMCREWTOOLSQ",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Tool Item Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "AMCTTOOL",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "ASSET",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "ASSETLOCCOMM",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "AUTOKEY",
            "parentKeys": "SETID",
            "targetKeys": "SETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item or Company Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "CI",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "COMMODITIES",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "COMPANYSETFILTER",
            "parentKeys": "SETID",
            "targetKeys": "SETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "COMPCOMMODITY",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "COMPCONTACTMSTR",
            "parentKeys": "SETID",
            "targetKeys": "COMPANYSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "COMPMASTER",
            "parentKeys": "SETID",
            "targetKeys": "COMPANYSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "CONTCOMMODITY",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "CONTRACTLINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "CONVERSION",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "DEPRECIATION",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "DEPTRANS",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "FAVITEM",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "FAVITEM",
            "parentKeys": "SETID",
            "targetKeys": "VENDORSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVBALANCES",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVCOST",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVENTORY",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVLIFOFIFOCOST",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVLOT",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVOICELINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVRESERVE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVSTATUS",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 23",
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
            "objectName": "SETS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "INVUSELINESPLIT",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Set",
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
            "objectName": "SETS",
            "targetObject": "ITEM",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Sets",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "ITEMCONDITION",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 29",
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
        },
        {
            "objectName": "SETS",
            "targetObject": "ITEMORGSTATUS",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 31",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "ITEMSETFILTER",
            "parentKeys": "SETID",
            "targetKeys": "SETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 32",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "ITEMSPEC",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 33",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "ITEMSTATUS",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 34",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "ITEMSTRUCT",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 35",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "JOBITEM",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 36",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "JOBMATERIAL",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 37",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "JOBSERVICE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 38",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "JOBTOOL",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 39",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "JPASSETSPLINK",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 40",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "LOCOPER",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "MASTERPM",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 43",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "MRLINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 46",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "ORGANIZATION",
            "parentKeys": "SETID",
            "targetKeys": "COMPANYSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization Company Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "ORGANIZATION",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization Item Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "PERSCOMMODITY",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "PLUSCTEMPLATE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "PLUSCTPSPAREPART",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "POLINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 52",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "PRLINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Set for PR Line",
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
            "objectName": "SETS",
            "targetObject": "REORDERPAD",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 55",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "RFQLINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 56",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "SERVICEITEMS",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 57",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 58",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "SFWVIEWLINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 59",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 60",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "SKDEXTRACAPACITY",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Item Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Item Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Item Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "SKDEXTRACAPTOOLVIEW",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Item Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "SKDEXTRACAPTOOLVIEW",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID1",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Item Set",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "SKDWORKPLANEXTCAP",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Item Set",
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
            "objectName": "SETS",
            "targetObject": "TLOAMPRMDFLT",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 62",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "TOOLINV",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 63",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "TOOLITEM",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 64",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "TOOLQUAL",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 65",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 66",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "WARRANTYVIEWLINE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 67",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "WOMATSTATUSSYNC",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 68",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "WPITEM",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 69",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 70",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "WPSERVICE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 71",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "WPTOOL",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 72",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "SETS",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SETS",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SETID",
            "required": true,
            "persistent": true,
            "title": "Set",
            "remarks": "Identifies the set. This value must be unique for all sets. You cannot use the same identifier for a company set and an item set.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SETTYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Either COMPANY or ITEM. Enter the value or click the Select Value button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the set.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "Name of user who entered item set record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "Date and time the item set record was entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOUPDATE",
            "required": true,
            "persistent": true,
            "title": "Automatically Add Companies to Company Master",
            "remarks": "Specifies whether you want Maximo to automatically create a Company Master record when a user adds a company in the Companies application. If the check box is selected, a Company Master record will be created. If the check box is cleared (the default), a Company Master record will not be created, and users must add companies in the Company Master application. This field only applies to sets of the TYPE COMPANY.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for this set.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SETSID",
            "required": true,
            "persistent": true,
            "title": "Set",
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
            "attributeName": "DFLTITEMSTATUS",
            "required": true,
            "persistent": true,
            "title": "Default Item Status",
            "remarks": "The default item status for items added to the set.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AUTOKEY",
            "target": "AUTOKEY",
            "remarks": "Relationship to Autokey table",
            "whereClause": "setid = :setid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPMASTER",
            "target": "COMPMASTER",
            "remarks": "Relationship to the CompMaster table, used to find all company masters in this set. (compmaster.companysetid = sets.setid). This relationship will find zero or more objects.",
            "whereClause": "companysetid=:setid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find all items in this item set. (item.itemsetid = itemset.itemsetid). This relationship will find zero or more objects.",
            "whereClause": "itemsetid=:setid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": null,
            "whereClause": "itemsetid=:setid and itemnum is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from SETS.",
            "whereClause": "ldkey=:setsid and ldownertable = 'SETS'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGANIZATION",
            "target": "ORGANIZATION",
            "remarks": "Relationship to the Organization table, used to find all Organizations. (1=1). This relationship will find one or more objects.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGANIZATION_COMPANY",
            "target": "ORGANIZATION",
            "remarks": "Relationship to the Organization table, used to find all Organizations associated with this company set. (organization.companysetid=sets.setid). This relationship will find one or more objects.",
            "whereClause": "companysetid=:setid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGANIZATION_ITEM",
            "target": "ORGANIZATION",
            "remarks": "Relationship to the Organization table, used to find all Organizations associated with this item set. (organization.itemsetid=sets.setid). This relationship will find zero or more objects.",
            "whereClause": "itemsetid=:setid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGANIZATION_TYPE",
            "target": "ORGANIZATION",
            "remarks": "Relationship to the Organization table, used to find all organizations using this set. (organization.companysetid=sets.setid or organization.itemsetid = sets.setid). This relationship will find zero or more objects.",
            "whereClause": "companysetid=:setid or itemsetid = :setid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SETS",
            "target": "SETS",
            "remarks": "Relationship to the Sets table, used to get this sets. (sets.setid=sets.setid and sets.settype = sets.settype). This relationship will find one object.",
            "whereClause": "setid=:setid and settype = :settype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SETS_COMPANY",
            "target": "SETS",
            "remarks": "Relationship to the Sets table, used to find all company sets. (sets.settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'COMPANY')). This relationship will find one or more objects.",
            "whereClause": "settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'COMPANY')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SETS_ITEM",
            "target": "SETS",
            "remarks": "Relationship to the Sets table, used to find all item sets. (sets.settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'ITEM')). This relationship will find zero or more objects.",
            "whereClause": "settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'ITEM')",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SETS_COMPANY",
            "source": "COMPANIES",
            "remarks": "Relationship to the Sets table, used to find the company set record for this company's organization. (sets.setid=(select companysetid from organization where organization.orgid = company.orgid) and settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'COMPANY')",
            "whereClause": "setid=(select companysetid from organization where orgid = :orgid) and settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'COMPANY')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SETS",
            "source": "ITEM",
            "remarks": "Relationship to the Sets table, used to find the item set record for an item. (itemset.itemsetid =item.itemsetid and sets.settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'ITEM')) This relationship will find one object.",
            "whereClause": "setid=:itemsetid and settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'ITEM')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SETS",
            "source": "JOBITEM",
            "remarks": "Relationship to the Sets table, used to find the item set record for an item. This relationship will find one object.",
            "whereClause": "setid=:itemsetid and settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'ITEM')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SETS",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the Sets table, used to find all sets. (1=1). This relationship will find zero or more objects.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SETS_COMPANY",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the Sets table, used to find all company sets. (sets.settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'COMPANY')) This relationship will find zero or more objects.",
            "whereClause": "settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'COMPANY')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SETS_ITEM",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the Sets table, used to find all item sets. (sets.settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'ITEM')) This relationship will find zero or more objects.",
            "whereClause": "settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'ITEM')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SETS_STATUS",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the Sets table, used to find the set record for an item set. This relationship will find one object.",
            "whereClause": "setid=:itemsetid and settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'ITEM')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGCOMPANYSET",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the Sets table, used to find the company set for this organization. (sets.setid=organization.companysetid and sets.settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'COMPANY')) This relationship will find zero or one object.",
            "whereClause": "setid=:companysetid and settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'COMPANY')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGITEMSET",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the Sets table, used to find the item set for this organization. (sets.setid=organization.itemsetid and sets.settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'ITEM')) This relationship will find zero or one object.",
            "whereClause": "setid=:itemsetid and settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'ITEM')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SETS",
            "source": "PLUSCTPSPAREPART",
            "remarks": "relationship to the sets table (plusctpsparepart.itemsetid = sets.setid",
            "whereClause": "setid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "SETS",
            "source": "SETS",
            "remarks": "Relationship to the Sets table, used to get this sets. (sets.setid=sets.setid and sets.settype = sets.settype). This relationship will find one object.",
            "whereClause": "setid=:setid and settype = :settype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SETS_COMPANY",
            "source": "SETS",
            "remarks": "Relationship to the Sets table, used to find all company sets. (sets.settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'COMPANY')). This relationship will find one or more objects.",
            "whereClause": "settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'COMPANY')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SETS_ITEM",
            "source": "SETS",
            "remarks": "Relationship to the Sets table, used to find all item sets. (sets.settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'ITEM')). This relationship will find zero or more objects.",
            "whereClause": "settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'ITEM')",
            "cardinality": "UNDEFINED"
        }
    ]
}