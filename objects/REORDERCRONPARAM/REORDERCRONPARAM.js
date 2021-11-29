mos = {
    "objectName": "REORDERCRONPARAM",
    "className": "psdi.app.inventory.virtual.ReorderCronParamSet",
    "description": "Reorder crontask parameter validation mbo",
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
            "attributeName": "STOREROOM",
            "required": false,
            "persistent": false,
            "title": "Storeroom",
            "remarks": "Site storeroom list",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DIRECTISSUE",
            "required": false,
            "persistent": false,
            "title": "Direct Issue Sites",
            "remarks": "List of sites to direct issue",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEAGREEMENT",
            "required": true,
            "persistent": false,
            "title": "Use Agreement",
            "remarks": "Use agreement or not",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IGNOREREORDERPOINT",
            "required": true,
            "persistent": false,
            "title": "Ignore Reorder Point",
            "remarks": "Ignore reorder point or not",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILTO",
            "required": false,
            "persistent": false,
            "title": "E-mail To",
            "remarks": "Email to address",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOGFILE",
            "required": false,
            "persistent": false,
            "title": "Log File",
            "remarks": "Log file path",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LEADTIME",
            "required": false,
            "persistent": false,
            "title": "Lead Time",
            "remarks": "Extra Lead time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUDESOFTRESERVATIONS",
            "required": true,
            "persistent": false,
            "title": "Include Soft Reservations",
            "remarks": "Include soft reservations or not",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}