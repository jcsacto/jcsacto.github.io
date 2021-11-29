mos = {
    "objectName": "INVRESERVE",
    "className": "psdi.app.inventory.InvReserveSet",
    "description": "The Inventory Reserve Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "INVRESERVEID",
    "primaryKeyColumns": [
        "SITEID",
        "REQUESTNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "INVRESERVE",
            "targetObject": "INVUSELINE",
            "parentKeys": "STORELOCSITEID, REQUESTNUM",
            "targetKeys": "SITEID, REQUESTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "POSITEID, REQUESTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "PRSITEID, REQUESTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "SITEID, REQUESTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "TOSITEID, REQUESTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "SITEID, REQUESTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Reservations",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "STORELOCSITE, REQUESTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "SITEID, REQUESTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Reservations",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "STORELOCSITE, REQUESTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "WPSERVICE",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "SITEID, REQUESTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Reservations",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "WPSERVICE",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "STORELOCSITE, REQUESTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "SITEID, REQUESTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Reservations",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "STORELOCSITE, REQUESTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 49",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "STORELOCSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "INVRESERVE",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
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
            "objectName": "ITEMCONDITION",
            "targetObject": "INVRESERVE",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "INVRESERVE",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, ISSUETO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Issued To",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "INVRESERVE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, DELLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, OPLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 53",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 54",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, DELLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 55",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 56",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, OPLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 57",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 58",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "SITEID, MRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Request Inventory Reservations",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "STORELOCSITEID, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVRESERVE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVRESERVE",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "STORELOCSITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "POLINE",
            "targetObject": "INVRESERVE",
            "parentKeys": "POLINEID",
            "targetKeys": "POLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO Line Inventory Reservations",
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
            "objectName": "SITE",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 78",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Reservations for the work order.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "STORELOCSITEID, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "REQUESTNUM",
            "required": true,
            "persistent": true,
            "title": "Request",
            "remarks": "Unique identification number that is generated for each reservation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "Identifies the item for which you want to add or change a reservation. Click the Detail Menu button to choose an item.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "Storeroom location of the reserved item.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Work order number for which this item is reserved.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ACTUALQTY",
            "required": true,
            "persistent": true,
            "title": "Actual Quantity",
            "remarks": "Number of this item already issued against the reservation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESERVEDQTY",
            "required": true,
            "persistent": true,
            "title": "Reserved Quantity",
            "remarks": "The number of items that are reserved and not issued.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INITFLAG",
            "required": true,
            "persistent": true,
            "title": "Initialized Flag",
            "remarks": "Initiated flag.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DIRECTREQ",
            "required": true,
            "persistent": true,
            "title": "Direct Request",
            "remarks": "If item is ordered outside of standard inventory replenishment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": true,
            "title": "GL Account",
            "remarks": "The GL Account to be debited on issue.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUESTEDBY",
            "required": false,
            "persistent": true,
            "title": "Requested By",
            "remarks": "Name of person requesting the item.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "REQUESTEDDATE",
            "required": false,
            "persistent": true,
            "title": "Requested Date",
            "remarks": "Date the request for this item was made. Click the Select Date and Time button to use the calendar control.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIREDDATE",
            "required": false,
            "persistent": true,
            "title": "Required Date",
            "remarks": "Date by which the item is needed on the work order. Click the Select Date and Time button to use the calendar control.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PONUM",
            "required": false,
            "persistent": true,
            "title": "Purchase Order",
            "remarks": "The purchase order to which the item reservation is associated.",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "POLINENUM",
            "required": false,
            "persistent": true,
            "title": "PO Line",
            "remarks": "Line number of the item on the associated purchase order.",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "DELLOCATION",
            "required": false,
            "persistent": true,
            "title": "Delivery Location",
            "remarks": "Delivery location.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Special instructions for this item.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "POLINEID",
            "required": false,
            "persistent": true,
            "title": "ID",
            "remarks": "Internal POLine Identifier reference",
            "sameAsAttribute": "POLINEID",
            "sameAsObject": "POLINE"
        },
        {
            "attributeName": "MRNUM",
            "required": false,
            "persistent": true,
            "title": "Requisition",
            "remarks": "Requisition number associated with this transaction. Click the Select Value button to choose a requisition.",
            "sameAsAttribute": "MRNUM",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "MRLINENUM",
            "required": false,
            "persistent": true,
            "title": "Requisition Line",
            "remarks": "Line number on the requestion for the item being reserved.",
            "sameAsAttribute": "MRLINENUM",
            "sameAsObject": "MRLINE"
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
            "attributeName": "ISSUETO",
            "required": false,
            "persistent": true,
            "title": "Issue To",
            "remarks": "Issue to a Laborcode or Craft",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
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
            "attributeName": "FINCNTRLID",
            "required": false,
            "persistent": true,
            "title": "FCID",
            "remarks": "Financial Control Identifier",
            "sameAsAttribute": "FINCNTRLID",
            "sameAsObject": "FINCNTRL"
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
            "remarks": "Long Description for Special instructions.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYTASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "DISPLAYTASKID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYWONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "DISPLAYWONUM",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "Condition code associated with the reserved item. A condition code allows you to track the balance and value of each item. You can apply different rates to an item as its condition changes from use, such as from new to used. Click the Select Value button to choose a condition code.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "INVRESERVEID",
            "required": true,
            "persistent": true,
            "title": "INVRESERVEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FCPROJECTID",
            "required": false,
            "persistent": false,
            "title": "FC Project ID",
            "remarks": "Financial control project identifier.",
            "sameAsAttribute": "PROJECTID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "FCTASKID",
            "required": false,
            "persistent": false,
            "title": "FC Task ID",
            "remarks": "Financial control task identifier.",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "STORELOCSITEID",
            "required": true,
            "persistent": true,
            "title": "Storeroom Site",
            "remarks": "StoreLoc Siteid",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "ITEMTYPE",
            "required": false,
            "persistent": false,
            "title": "Itemtype",
            "remarks": "itemtype",
            "sameAsAttribute": "ITEMTYPE",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "WODESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Work Order Description.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "WODESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Special instructions.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POREVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "PO Revision",
            "remarks": "Revision number of the purchase order. Indicates how many times a purchase order has been revised.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "PENDINGQTY",
            "required": false,
            "persistent": true,
            "title": "Pending Quantity",
            "remarks": "The pending quantity of items to be issued or transferred.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIPPEDQTY",
            "required": false,
            "persistent": true,
            "title": "Shipped Quantity",
            "remarks": "The quantity of items that have been shipped.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STAGEDQTY",
            "required": false,
            "persistent": true,
            "title": "Staged Quantity",
            "remarks": "The quantity of items that have been staged.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPLOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "The operating location of the reserved item.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SHOWALLRESERVATION",
            "required": true,
            "persistent": false,
            "title": "Show All Reservations",
            "remarks": "Show All Reservations",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOSTORELOC",
            "required": false,
            "persistent": true,
            "title": "To Storeroom",
            "remarks": "The storeroom location the inventory items are charged to.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "RESTYPE",
            "required": true,
            "persistent": true,
            "title": "Reservation Type",
            "remarks": "Specify the type of reservation, depending on whether it is a firm request for material or not (hard or soft). The reservation type may also be set by automatic processing (APHARD or APSOFT), where a calculation of the required date of the reservation determines the reservation type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HARDBACKORDER",
            "required": false,
            "persistent": true,
            "title": "Hard Backorder",
            "remarks": "Indicates whether the requested material is related to a backorder reservation. The Backorder reservation type indicates that a hard reservation is needed for the item and that the system can create hard reservations only when the available balance can satisfy the inventory record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWSITE",
            "required": false,
            "persistent": false,
            "title": "To Site",
            "remarks": "Site Identifier.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ITEMQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Requested",
            "remarks": "Number of items you need for the task. If you modify this field, Maximo recalculates the Line Cost field on the Materials subtab, and the Current Estimate Material Cost on the View Costs dialog box. You can edit this field if the work order's status allows work plan material edits. Work order editing rules are set up in the Organizations application.",
            "sameAsAttribute": "ITEMQTY",
            "sameAsObject": "JOBITEM"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the asset information. The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the INVRESERVE to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find all inventory records for a given inventory reserve record. (inventory.itemnum = invreserve.itemnum and inventory.itemsetid = invreserve.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and location = :location and itemsetid = :itemsetid and siteid=:storelocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOINVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the reservation records. The resulting set will contain one or more objects.",
            "whereClause": "itemnum=:itemnum and location=:tostoreloc and siteid=:siteid and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "INVUSE",
            "target": "INVUSE",
            "remarks": "Relationship to the InvUse table, used to find inventory usage for material transfers out of a given storeroom location.The resulting set will contain zero or more objects.",
            "whereClause": "fromstoreloc=:location and siteid=:storelocsiteid",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "target": "INVUSELINE",
            "remarks": "Relationship to the InvUseLine table, used to find an inventory usage line records againt this reservation.The resulting set will contain zero or more objects.",
            "whereClause": "requestnum=:requestnum and siteid=:storelocsiteid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item being reserved. (item.itemnum = invreserve.itemnum and item.itemsetid = invreserve.itemsetid). The resulting set will contain one or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given Inventory Reservation record. (itemcondition.itemnum = invreserve.itemnum and itemcondition.itemsetid=invreserve.itemsetid and itemcondition.conditioncode=invreserve.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the location for a given invreserve record. Relationship to the Locations table, used to find the location for a given invreserve record.",
            "whereClause": "location=:location and siteid=:storelocsiteid",
            "cardinality": null
        },
        {
            "name": "OPLOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the location for a given invreserve record. This relationship will find zero or one object.",
            "whereClause": "location=:oplocation and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "TOLOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the location information in a given site to which the material is transferred. The resulting set will contain zero or one object.",
            "whereClause": "location=:tostoreloc and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "MATUSETRANS",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatuseTrans table, used to find all the material issues done against this reservation. (matusetrans.requestnum = invreserve.requestnum). The resulting set will contain zero or more objects.",
            "whereClause": "requestnum=:requestnum and siteid=:storelocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO",
            "target": "PO",
            "remarks": "Relationship to the PO table, used to find the internal purchase order for which the material is reserved. (po.ponum = invreserve.ponum). The resulting set will contain zero or one object.",
            "whereClause": "ponum = :ponum and siteid=:siteid",
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
            "remarks": "Relationship from the INVRESERVE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOMATSTATUSSYNC",
            "target": "WOMATSTATUSSYNC",
            "remarks": "Relationship to the WOMATStatusSync table, fetches zero or one record.",
            "whereClause": "itemnum = :itemnum and location = :location and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to the WorkOrder table, used to find the work order for which the material is reserved. (workorder.wonum = invreserve.wonum). The resulting set will contain one object.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "INVRESERVE",
            "source": "ASSET",
            "remarks": "Relationship to the INVRESERVE table, used to find the ASSETS. The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVRESERVE",
            "source": "INVENTORY",
            "remarks": "Relationship to the InvReserve table, used to find inventory reservations for a given inventory record. (invreserve.itemnum = inventory.itemnum and invreserve.location = inventory.location and invreserve.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and location = :location and itemsetid = :itemsetid and storelocsiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOFTRESERVATIONS",
            "source": "INVENTORY",
            "remarks": "Finds all the soft reservations for the item and site.",
            "whereClause": "itemnum=:itemnum and location=:location and storelocsiteid=:siteid and itemsetid=:itemsetid and restype in (select value from synonymdomain where domainid='RESTYPE' and maxvalue in ('SOFT','APSOFT'))",
            "cardinality": null
        },
        {
            "name": "HARDRESERVATIONS",
            "source": "INVENTORY",
            "remarks": "Finds all the hard reservations for the given inventory item for the site.",
            "whereClause": "itemnum=:itemnum and location=:location and storelocsiteid=:siteid and itemsetid=:itemsetid and restype in (select value from synonymdomain where domainid='RESTYPE' and maxvalue in ('HARD','APHARD'))",
            "cardinality": null
        },
        {
            "name": "INVRESERVE",
            "source": "INVUSE",
            "remarks": "Relationship to the InvReserve table, used to find inventory reservations for material transfers out of a given storeroom location.The resulting set will contain zero or more objects.",
            "whereClause": "location=:fromstoreloc and storelocsiteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVRESERVEPARTIALSHIP",
            "source": "INVUSE",
            "remarks": "Relationship from invuse to invreserve table, used to find the invreserve records  that still hold partial shipments of inventory usage documents. The resulting set will contain zero or more objects.",
            "whereClause": "location=:fromstoreloc and storelocsiteid=:siteid and ponum is not null and polinenum is not null and porevisionnum is not null and tostoreloc is not null and shippedqty >0 and (reservedqty - pendingqty - stagedqty - shippedqty) > 0  and  (requestnum in (select requestnum from invuseline where invuseline.invusenum=:invusenum and invuseline.requestnum=invreserve.requestnum and invuseline.requestnum is not null)   or   ponum in (select ponum from invuseline where invuseline.invusenum=:invusenum and invuseline.ponum=invreserve.ponum and invuseline.ponum is not null  and invuseline.polinenum=invreserve.polinenum and invuseline.porevisionnum = invreserve.porevisionnum and invuseline.tostoreloc=invreserve.tostoreloc))",
            "cardinality": null
        },
        {
            "name": "INVRESERVEUNISSUED",
            "source": "INVUSE",
            "remarks": "Relationship from invuse to invreserve table, used to find the invreserve records for the partial/un-issued items. The resulting set will contain zero or more objects.",
            "whereClause": "location=:fromstoreloc and storelocsiteid=:siteid and ponum is null and polinenum is null and tostoreloc is null and (reservedqty - pendingqty - stagedqty - shippedqty) > 0  and  (requestnum in (select requestnum from invuseline where invuseline.invusenum=:invusenum and invuseline.requestnum=invreserve.requestnum and invuseline.requestnum is not null)   or   wonum in (select refwo from invuseline where invuseline.invusenum=:invusenum and invuseline.refwo=invreserve.wonum and invuseline.refwo is not null)   or   mrnum in (select mrnum from invuseline where invuseline.invusenum=:invusenum and invuseline.mrnum=invreserve.mrnum and invuseline.mrnum is not null))",
            "cardinality": null
        },
        {
            "name": "INVRESERVE",
            "source": "INVUSELINE",
            "remarks": "Relationship to the InvReserve table, used to find an inventory reservation record for the invuseline document.  The resulting set will contain zero or more objects.",
            "whereClause": "requestnum=:requestnum and storelocsiteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVRESERVEFORUSELINE",
            "source": "INVUSELINE",
            "remarks": "Relationship to the InvReserve table, used to find the reservation information for the the invuseline record. The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and location=:fromstoreloc and storelocsiteid=:siteid and ((ponum is not null and tostoreloc=:tostoreloc and siteid=:tositeid) or (wonum is not null and wonum=:refwo) or (wonum is null and assetnum is not null and assetnum=:assetnum) or (wonum is null and assetnum is null and oplocation is not null and oplocation=:location) or (wonum is null and assetnum is null and oplocation is null and glaccount is not null and glaccount=:gldebitacct))",
            "cardinality": null
        },
        {
            "name": "INVRESERVE",
            "source": "ITEM",
            "remarks": "Relationship to the InvReserve table, used to find all inventory reserves for a given item. (invreserve.itemnum = item.itemnum and invreserve.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVE",
            "source": "LOCATIONS",
            "remarks": "Relationship to the InvReserve table, used to find inventory reservations for material issues from a given storeroom location. (locations.location = invreserve.location and ponum is null). The resulting set will contain zero or more objects. The reservations found using the relationship can be used only for material issues from a given storeroom location. These reservations may have been created as a result of approvals of work orders or material requests. They may have been manually created for purpose of reserving materials for work orders or material requests, but not for internal POs.",
            "whereClause": "location = :location and storelocsiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVEIN",
            "source": "LOCATIONS",
            "remarks": "Relationship to the InvReserve table, used to find inventory reservations for material transfers in to a given storeroom location. (polineid is not null and exists. (select 1 from poline where poline.polineid=invreserve.polineid and poline.storeloc = locations.location')). The resulting set will contain zero or more objects. The reservations found using the relationship can be used only for material transfers in to a given storeroom location. These reservations may have been created as a result of approvals of internal POs. They may have been manually created for purpose of reserving materials for internal POs.",
            "whereClause": "polineid is not null and exists (select 1 from poline where poline.polineid=invreserve.polineid and poline.storeloc = :location) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVEOUT",
            "source": "LOCATIONS",
            "remarks": "Relationship to the InvReserve table, used to find inventory reservations for material transfers out of a given storeroom location. (locations.location = invreserve.location and polineid is not null and exists. (select 1 from po where po.vendor = invreserve.location and invreserve.ponum = po.ponum)). The resulting set will contain zero or more objects.  The reservations found using the relationship can be used only for material transfers out of a given storeroom location. These reservations may have been created as a result of approvals of internal POs. They may have been manually created for purpose of reserving materials for internal POs.",
            "whereClause": "location = :location and polineid is not null and exists (select 1 from po where po.vendor = invreserve.location and invreserve.ponum = po.ponum) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVE",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the InvReserve table, used to find an inventory reservation record for the material issue. (invreserve.requestnum = matusetrans.requestnum). The resulting set will contain zero or one object. RequestNum is a non-persistent column for the MatUseTrans object. See the attribute defined in psdi.app.inventory.MatUseTrans for more information.",
            "whereClause": "requestnum=:requestnum and storelocsiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVE",
            "source": "MR",
            "remarks": "Relationship to the Invreserve table, used to find all invreserve records whose mrnum match that of the material requisition's. (invreserve.mrnum = mr.mrnum). The resulting set will contain zero or more objects.",
            "whereClause": "mrnum = :mrnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVE",
            "source": "PO",
            "remarks": "Relationship to the InvReserve table, used to find PO records. The resulting set will contain zero or more objects.",
            "whereClause": "ponum=:ponum and siteid=:siteid and itemnum in (select itemnum from poline where ponum=:ponum and siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "WPINVRESERVE",
            "source": "WORKORDER",
            "remarks": "Relationship to the InvReserve table, used to find all inventory reserves for a given item. (invreserve.itemnum = item.itemnum and invreserve.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=invreserve.itemsetid and storelocsite=invreserve.storelocsiteid and location=invreserve.location)",
            "cardinality": null
        },
        {
            "name": "WPINVRESERVE_ALL",
            "source": "WORKORDER",
            "remarks": "Relationship to the InvReserve table, used to find all inventory reserves for a given item. (invreserve.itemnum = item.itemnum and invreserve.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=invreserve.itemsetid)",
            "cardinality": null
        },
        {
            "name": "MXINTINVRES",
            "source": "WORKORDER",
            "remarks": "Relationship to the InvReserve table, used by MEA to find all invreserves for a work order. (InvReserve.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWINVRESERVE",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowInvReserve Set used by UI for display. This is a special MboSet used for displaying the inventory reserves for a given workorder and it's tasks. (wonum in (select wonum from workorder where ((workorder.wonum=workorder.wonum) or (workorder.parent=workorder.wonum and workorder.istask = :yes)) and workorder.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SELECTINVRESVITEM",
            "source": "WORKORDER",
            "remarks": "Relationship to the InvReserve table, used to find all reserved invreserves for a work order. (InvReserve.ponum is null and InvReserve.directreq=:NO) and InvReserve.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and ponum is null and directreq=:no and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVE",
            "source": "WORKORDER",
            "remarks": "Relationship to the InvReserve table, used to find all invreserves for a work order. (InvReserve.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid  and itemnum in  (select itemnum from wpmaterial where wonum=:wonum and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVEALL",
            "source": "WORKORDER",
            "remarks": "Relationship to the InvReserve table, used to find all invreserves for a work order. (InvReserve.wonum = workorder.wonum and invreserve.siteid=:workorder.siteid). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVRESERVETOOL",
            "source": "WORKORDER",
            "remarks": "Relationship to the InvReserve table, used to find all invreserves for a work order. (InvReserve.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid  and itemnum in  (select itemnum from wptool where wonum=:wonum and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SKDINVRESERVE",
            "source": "WPITEM",
            "remarks": "Get invreserve record for wpitem record,return 0 or 1 record.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and requestnum=:requestnum",
            "cardinality": null
        },
        {
            "name": "INVRESERVE",
            "source": "WPMATERIAL",
            "remarks": "Used to find the reservation of a wpmaterial",
            "whereClause": "requestnum=:requestnum and siteid=:siteid",
            "cardinality": null
        }
    ]
}