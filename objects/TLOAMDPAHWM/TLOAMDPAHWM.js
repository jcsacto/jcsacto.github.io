mos = {
    "objectName": "TLOAMDPAHWM",
    "className": "psdi.app.common.CommonMboSet",
    "description": "TLOAM Deployed Computer History Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TLOAMDPAHWMID",
    "primaryKeyColumns": [
        "TLOAMDPAHWMID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "TLOAMDPAHWM",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "TLOAM Deployed Computer History",
            "longDescription": null
        },
        {
            "objectName": "TLOAMSOFTWARE",
            "targetObject": "TLOAMDPAHWM",
            "parentKeys": "TLOAMSOFTWAREID",
            "targetKeys": "TLOAMSOFTWAREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Software",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node ID",
            "remarks": "Node ID",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET"
        },
        {
            "attributeName": "TLOAMSOFTWAREID",
            "required": true,
            "persistent": true,
            "title": "Software ID",
            "remarks": "Software ID",
            "sameAsAttribute": "TLOAMSOFTWAREID",
            "sameAsObject": "TLOAMSOFTWARE"
        },
        {
            "attributeName": "LASTMODIFIED",
            "required": false,
            "persistent": true,
            "title": "Last Modified",
            "remarks": "Last Modified",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HWMCORESFULL",
            "required": false,
            "persistent": true,
            "title": "Number of Cores for fullcapacity",
            "remarks": "Number of Cores for fullcapacity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HWMCORESSUB",
            "required": false,
            "persistent": true,
            "title": "Number of Cores for subcapacity",
            "remarks": "Number of Cores for subcapacity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HWMVUFULL",
            "required": false,
            "persistent": true,
            "title": "PVU fullcapacity",
            "remarks": "PVU fullcapacity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HWMVUSUB",
            "required": false,
            "persistent": true,
            "title": "PVU Subcapacity",
            "remarks": "PVU Subcapacity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": true,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Start date of the high water mark aggregation period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": true,
            "persistent": true,
            "title": "End Date",
            "remarks": "End date of the high water mark aggregation period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HWMMSU",
            "required": false,
            "persistent": true,
            "title": "MSUS",
            "remarks": "MSU info from SCRT report specific to product and node id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIGDATE",
            "required": false,
            "persistent": true,
            "title": "SIGDATE",
            "remarks": "SIGDATE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMDPAHWMID",
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