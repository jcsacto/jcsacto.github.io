mos = {
    "objectName": "RESERVATION",
    "className": "psdi.app.inventory.virtual.ReservationSet",
    "description": "This is non-persistent object for reservation validation.",
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
            "attributeName": "REQUESTNUM",
            "required": false,
            "persistent": false,
            "title": "Request",
            "remarks": "Identifies the request associated with the current record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "The identifier of the inventory item.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "ItemSet",
            "remarks": "Identifies the item set, or group of items, to which this item belongs. An organization is assigned to only one item set, but multiple organizations can use the same item set.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "The operating location for this reservation.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STORELOC",
            "required": false,
            "persistent": false,
            "title": "Storeroom",
            "remarks": "The storeroom where the reserved item is stocked. The storeroom information comes from default storeroom entry in the user profile, which also contains information about the site and organization.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "The site of the organization that is associated with the inventory. The site information comes from the default insert site in the user profile, which also contains information about the organization and storeroom.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "The identifier of the work order that is related to this record.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ACTUALQTY",
            "required": false,
            "persistent": false,
            "title": "Actual Quantity",
            "remarks": "The number of items already issued for the current reservation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESERVEDQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Reserved",
            "remarks": "Identifies the number of items that are reserved and have not been issued.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Identifies the asset that is associated with the current record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUESTEDBY",
            "required": false,
            "persistent": false,
            "title": "Requested By",
            "remarks": "The person who is requesting the item.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ISSUETO",
            "required": false,
            "persistent": false,
            "title": "Issue To",
            "remarks": "Identifies the Laborcode or Craft to issue to.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": false,
            "title": "Condition Code",
            "remarks": "The condition code that indicates the current physical condition of the item.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "PENDINGQTY",
            "required": false,
            "persistent": false,
            "title": "Pending Quantity",
            "remarks": "The pending quantity of items to be issued or transferred.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIPPEDQTY",
            "required": false,
            "persistent": false,
            "title": "Shipped Quantity",
            "remarks": "The quantity of items that were shipped.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STAGEDQTY",
            "required": false,
            "persistent": false,
            "title": "Staged Quantity",
            "remarks": "The quantity of items that are staged.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEEPCURQTY",
            "required": true,
            "persistent": false,
            "title": "Keep Current Quantity",
            "remarks": "Indicates whether to keep the quantity specified on the inventory usage line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "The organization that is associated with the inventory.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "PONUM",
            "required": false,
            "persistent": false,
            "title": "PO",
            "remarks": "The purchase order that is associated with the current record.",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "POLINENUM",
            "required": false,
            "persistent": false,
            "title": "PO Line",
            "remarks": "The purchase order line number that is associated with the current record.",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "MRNUM",
            "required": false,
            "persistent": false,
            "title": "Requisition",
            "remarks": "The material requisition number that is associated with the current transaction. The material requisition is created and managed using the Desktop Requisitions application.",
            "sameAsAttribute": "MRNUM",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "MRLINENUM",
            "required": false,
            "persistent": false,
            "title": "Requisition Line",
            "remarks": "The material requisition line number that is associated with the item being issued. The material requisition is created and managed using the Desktop Requisitions application.",
            "sameAsAttribute": "MRLINENUM",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "SHOWAGAINPREF",
            "required": true,
            "persistent": false,
            "title": "Do not show this again",
            "remarks": "Indicates whether the window is displayed in future.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOSTORELOC",
            "required": false,
            "persistent": false,
            "title": "Storeroom",
            "remarks": "The storeroom where the reserved item is transferred.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "TOSITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "The destination site where item is transferred",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "RESERVATION",
            "source": "INVUSELINE",
            "remarks": "Relationship to the InvUseLine table. The resulting set will contain zero or more objects.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}