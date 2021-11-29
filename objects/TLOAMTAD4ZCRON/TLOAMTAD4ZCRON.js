mos = {
    "objectName": "TLOAMTAD4ZCRON",
    "className": "psdi.iface.app.swcatalog.cron.TAD4ZCronParamSet",
    "description": "Parameter validation for TAD4ZIMPORT Cron job",
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
            "attributeName": "TEMPFILE",
            "required": true,
            "persistent": false,
            "title": "File Name",
            "remarks": "Name of temporary file",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARTIALRUN",
            "required": true,
            "persistent": false,
            "title": "Partial Run",
            "remarks": "Enable partial runs of cron action",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPDIR",
            "required": true,
            "persistent": false,
            "title": "Temp Directory",
            "remarks": "Temporary directory with read-write permissions accessible to application server.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}