mos = {
    "objectName": "WOMATSTATUSSYNC",
    "className": "psdi.app.inventory.WOMATStatusSyncSet",
    "description": "WOMATL Status Transaction Sync Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WOMATSTATUSSYNCID",
    "primaryKeyColumns": [
        "ITEMNUM",
        "LOCATION",
        "SITEID",
        "ITEMSETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "LOCATIONS",
            "targetObject": "WOMATSTATUSSYNC",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WOMATSTATUSSYNC",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
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
            "objectName": "SITE",
            "targetObject": "WOMATSTATUSSYNC",
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
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "The identifier of the inventory item or tool that is stocked in the current storeroom.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "The storeroom where the current inventory item or tool is stocked. To check the availability of the item in multiple storerooms, select View Availability from the Select Action menu.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "The identifier of the site where the current inventory item or tool is stored.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "The item set or group of items to which the current item belongs. An organization is assigned to only one item set, but multiple organizations can use the same item set.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "The organization that is associated with the current record.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "WOMATSTATUSSYNCID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "WOMATSTATUSSYNC",
            "source": "INVENTORY",
            "remarks": "Relationship to the WOMATStatusSync table, fetches zero or one record.",
            "whereClause": "itemnum = :itemnum and location = :location and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "WOMATSTATUSSYNC",
            "source": "INVRESERVE",
            "remarks": "Relationship to the WOMATStatusSync table, fetches zero or one record.",
            "whereClause": "itemnum = :itemnum and location = :location and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": null
        }
    ]
}