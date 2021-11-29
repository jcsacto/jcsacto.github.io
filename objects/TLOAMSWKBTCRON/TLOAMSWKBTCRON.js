mos = {
    "objectName": "TLOAMSWKBTCRON",
    "className": "psdi.iface.app.swcatalog.cron.SwKbtCronParamSet",
    "description": "Parameter validation for SWCATALOGIMPORT Cron job",
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
            "attributeName": "HOSTNAME",
            "required": false,
            "persistent": false,
            "title": "Host name",
            "remarks": "Host or IP address for SwKBT server",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PORT",
            "required": false,
            "persistent": false,
            "title": "Port",
            "remarks": "Port number for SwKBT server",
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
        },
        {
            "attributeName": "TEMPFILE",
            "required": true,
            "persistent": false,
            "title": "File name",
            "remarks": "Name of temporary file",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARTIALRUN",
            "required": true,
            "persistent": false,
            "title": "Partial run",
            "remarks": "Enable partial runs of cron action",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPOSITORYID",
            "required": false,
            "persistent": false,
            "title": "Repository Id",
            "remarks": "Repository identifier in the imported file for validation, or blank for no validation",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}