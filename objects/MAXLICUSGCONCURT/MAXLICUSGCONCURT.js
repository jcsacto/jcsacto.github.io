mos = {
    "objectName": "MAXLICUSGCONCURT",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "License Concurrent Usage data",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLICUSGCONCURTID",
    "primaryKeyColumns": [
        "MONITOREDDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXLICENSE",
            "targetObject": "MAXLICUSGCONCURT",
            "parentKeys": "LICENSENUM",
            "targetKeys": "LICENSENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo License",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LICENSENUM",
            "required": true,
            "persistent": true,
            "title": "License Num",
            "remarks": "License Num",
            "sameAsAttribute": "LICENSENUM",
            "sameAsObject": "MAXLICENSE"
        },
        {
            "attributeName": "MONITOREDDATE",
            "required": true,
            "persistent": true,
            "title": "Monitored Date",
            "remarks": "Date for which this data is calculated",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERLIST",
            "required": true,
            "persistent": true,
            "title": "User List",
            "remarks": "List of concurrent Users ( comma separated )",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Create Date",
            "remarks": "Timestamp when this record was created",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDATEDATE",
            "required": true,
            "persistent": true,
            "title": "Update Date",
            "remarks": "Last update timestamp",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXLICUSGCONCURTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}