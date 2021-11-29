mos = {
    "objectName": "MXCOLLAB",
    "className": "psdi.app.integration.MXCollabSet",
    "description": "The MXCollab Table",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MXCOLLABID",
    "primaryKeyColumns": [
        "OWNER1SYSID",
        "OWNER2SYSID",
        "PCID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "OWNER1SYSID",
            "required": true,
            "persistent": true,
            "title": "Owner1 Sys ID",
            "remarks": "Owner1 Sys ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNER2SYSID",
            "required": true,
            "persistent": true,
            "title": "Owner2 Sys ID",
            "remarks": "Owner2 Sys ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PCID",
            "required": true,
            "persistent": true,
            "title": "Proc ID",
            "remarks": "Proc ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PCVALUE",
            "required": true,
            "persistent": true,
            "title": "Proc Value",
            "remarks": "Proc Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MXCOLLABID",
            "required": true,
            "persistent": true,
            "title": "MXCOLLABID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}