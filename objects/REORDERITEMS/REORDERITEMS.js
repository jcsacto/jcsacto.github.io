mos = {
    "objectName": "REORDERITEMS",
    "className": "psdi.app.inventory.virtual.ReorderItemsSet",
    "description": "Non-persistent table for \"Reorder Items\" page.",
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
            "attributeName": "DIRECTISSUE",
            "required": true,
            "persistent": false,
            "title": "Reorder Direct Issue Items and Services",
            "remarks": "Indicates whether direct issue items can be reordered for all work orders.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LEADTIME",
            "required": false,
            "persistent": false,
            "title": "Additional Lead Time (Days)",
            "remarks": "Allowance for extra lead time in days.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AGREEMENTPO",
            "required": true,
            "persistent": false,
            "title": "Consider Contracts When Creating PRs/POs",
            "remarks": "Checking this box enables the reorder process to consider agreement purchase orders when creating PRs/POs?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RUNREORDER",
            "required": true,
            "persistent": false,
            "title": "Run Reorder ",
            "remarks": "Run the reorder process now? Or show Preview/Modify page? Y (Yes) means to run reorder. N (No) means to show Preview/Modify page.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STORELOC",
            "required": false,
            "persistent": false,
            "title": "Storeroom",
            "remarks": "The storeroom where the reorder process takes place.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "IGNOREPOINT",
            "required": true,
            "persistent": false,
            "title": "Ignore Reorder Point",
            "remarks": "Indicates whether the reorder point can be disregarded when generating order quantities.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELECTEDITEMS",
            "required": true,
            "persistent": false,
            "title": "Selected Items ",
            "remarks": "Reorder to process selected items? Yes means to process the selected items. No means just to process current item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALLITEMS",
            "required": true,
            "persistent": false,
            "title": "All Items in Storeroom",
            "remarks": "Indicates whether to reorder all of the inventory items in a selected storeroom.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DIRECTORDERONLY",
            "required": true,
            "persistent": false,
            "title": "Direct Order Only",
            "remarks": "Indicates if a reorder is for direct order items only",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALNUM",
            "required": false,
            "persistent": false,
            "title": "Total of Items Reordered",
            "remarks": "The total number of items reordered in this process.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTPRNUM",
            "required": false,
            "persistent": false,
            "title": "PRs Generated From",
            "remarks": "The number of the first PR generated during reorder process.",
            "sameAsAttribute": "PRNUM",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "ENDPRNUM",
            "required": false,
            "persistent": false,
            "title": "PRs Generated To",
            "remarks": "The number of the last PR generated during the reorder process.",
            "sameAsAttribute": "PRNUM",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "STARTPONUM",
            "required": false,
            "persistent": false,
            "title": "POs Generated From",
            "remarks": "The number of the first PO generated during the reorder process.",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "ENDPONUM",
            "required": false,
            "persistent": false,
            "title": "POs Generated To",
            "remarks": "The number of the first PO generated during the reorder process.",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "PREVIEWREORDER",
            "required": true,
            "persistent": false,
            "title": "Reorder After Preview",
            "remarks": "Indicates if reorder request is submitted after preview",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASYNC",
            "required": true,
            "persistent": false,
            "title": "Run in Background Mode",
            "remarks": "Indicates whether to run the reorder process in the background.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOEMAILADDR",
            "required": false,
            "persistent": false,
            "title": "E-mail Address Notification",
            "remarks": "The email address of the person who receives the reorder notification.",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": false,
            "title": "Site",
            "remarks": "Site id of the storeroom.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "REORDERSOFT",
            "required": false,
            "persistent": false,
            "title": "Include Soft Reservations",
            "remarks": "Indicates whether to include soft reservations (APSOFT or SOFT) when selecting items for reorder.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to locations record. Used to find the location record for the storeloc of a given reorderitems record. (locations.location = reorderitems.storeloc). The resulting set will contain one object.",
            "whereClause": "location=:storeloc and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "REORDERITEMS",
            "source": "INVENTORY",
            "remarks": "Relationship to the non-persistent ReorderItems table. (ReorderItems.storeloc = inventory.location). The resulting set will contain zero objects. This relationship is used only for the Reorder Items action page on the Inventory application.",
            "whereClause": "storeloc = :location ",
            "cardinality": "UNDEFINED"
        }
    ]
}