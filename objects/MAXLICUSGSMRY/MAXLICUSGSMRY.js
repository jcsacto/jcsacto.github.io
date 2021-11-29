mos = {
    "objectName": "MAXLICUSGSMRY",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "License Usage Summary",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLICUSGSMRYID",
    "primaryKeyColumns": [
        "MONITOREDDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "MONITOREDDATE",
            "required": true,
            "persistent": true,
            "title": "Monitored Date",
            "remarks": "The latest date for which the cron task collected license usage data. For example, if the cron task collected data for Monday through Friday, this field shows Friday's date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALUSERCNT",
            "required": true,
            "persistent": true,
            "title": "Total Users",
            "remarks": "The total number of active or blocked users in your product deployment. An example of a blocked user is someone who has exceeded the allowed number of login attempts.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELFSERVICEUSERCNT",
            "required": true,
            "persistent": true,
            "title": "Self service Users",
            "remarks": "The number of users who are not eligible or unlicensed users. These users can use free self-service licenses.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNLICUSERCNT",
            "required": true,
            "persistent": true,
            "title": "Unlicensed Users",
            "remarks": "The number of users who have access to the products but are not assigned a license.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ELIGIBLELICUSERCNT",
            "required": true,
            "persistent": true,
            "title": "Number of eligible Users",
            "remarks": "The number of users who have access to the products and are assigned a license.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISLATEST",
            "required": true,
            "persistent": true,
            "title": "Is Latest",
            "remarks": "Is this latest record",
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
            "attributeName": "MAXLICUSGSMRYID",
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