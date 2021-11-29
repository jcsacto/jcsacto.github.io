mos = {
    "objectName": "LOCCHANGESTATUS",
    "className": "psdi.app.location.virtual.LocChangeStatusSet",
    "description": "For Location \"Change Status\" page",
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
            "attributeName": "STATUS",
            "required": true,
            "persistent": false,
            "title": "New Status",
            "remarks": "Change to status. Acceptable values are in valuelist LOCASSETSTATUS",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ASOFDATE",
            "required": false,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Date of the status change",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo for the status change",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "LOCSTATUS"
        },
        {
            "attributeName": "ROLLTOALLCHILDREN",
            "required": true,
            "persistent": false,
            "title": "Roll New Status down to All Child Locations in All Non-Network Systems",
            "remarks": "Roll new status to all child locations in non-network systems ?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMOVEFROMALLJP",
            "required": true,
            "persistent": false,
            "title": "Remove All References to This Location from All Job Plans",
            "remarks": "Remove Location reference from all Job Plans",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROLLTOALLEQUIPMENT",
            "required": true,
            "persistent": false,
            "title": "Roll New Status down to All Assets in All Changed Locations",
            "remarks": "Roll new status down to all Assets in all changed Locations ?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMOVEFROMALLROUTES",
            "required": true,
            "persistent": false,
            "title": "Remove All References to This Location from All Routes",
            "remarks": "Remove all references to this Location from all routes?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMOVEFROMACTIVESP",
            "required": true,
            "persistent": false,
            "title": "Remove All References to This Location from All Safety Plans",
            "remarks": "Remove all references to thei Location from all active Safety Plans ?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEPMSTATUS",
            "required": true,
            "persistent": false,
            "title": "Change the Status of All Associated PMs to Inactive",
            "remarks": "Change the Status of all associated PMs to INACTIVE ?",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "LOCCHANGESTATUS",
            "source": "LOCATIONS",
            "remarks": "Relationship to the non-persistent LocChangeStatus table. (No where clause). The resulting set will contain zero objects. This relationship is used only for the Change Status action page to change the status of a given operating location.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}