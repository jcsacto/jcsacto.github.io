mos = {
    "objectName": "TAMITDPAHWM",
    "className": "psdi.app.common.CommonMboSet",
    "description": "High Watermark Data Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TAMITDPAHWMID",
    "primaryKeyColumns": [
        "TAMITDPAHWMID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "TAMITDPAHWM",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "High Watermark Data Table",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TAMITDPAHWM",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NODEID",
            "required": false,
            "persistent": true,
            "title": "Node Id",
            "remarks": "Unique identifier for the deployed asset",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET"
        },
        {
            "attributeName": "SOFTWAREID",
            "required": false,
            "persistent": true,
            "title": "Deployed Software ID",
            "remarks": "Unique identifier for the deployed software instance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMSOFTWAREID",
            "required": true,
            "persistent": true,
            "title": "Catalog Software ID",
            "remarks": "Unique identifier for the software product",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CAPACITY",
            "required": true,
            "persistent": true,
            "title": "Capacity",
            "remarks": "Maximum  software usage allowed by the license, specified in number of capacity units",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CAPACITYUNIT",
            "required": true,
            "persistent": true,
            "title": "Capacity Unit",
            "remarks": "Unit of measurement for software usage, as indicated in the product license agreement",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESOURCEQTY",
            "required": false,
            "persistent": true,
            "title": "Resource Quantity",
            "remarks": "Maximum  usage that occurred during a given time range, specified in number of resource units.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESOURCEUNIT",
            "required": false,
            "persistent": true,
            "title": "Resource Unit",
            "remarks": "A type of resource usage, as indicated in the license agreement when capacity units are RVU.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUBCAP",
            "required": false,
            "persistent": true,
            "title": "Subcapacity",
            "remarks": "Software is licensed based on partition capacity rather than server capacity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Beginning date for collecting the software consumption data",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "Ending date for collecting the software consumption data",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCE",
            "required": false,
            "persistent": true,
            "title": "Source",
            "remarks": "The origin of the software consumption data.",
            "sameAsAttribute": "HWDETECTIONTOOL",
            "sameAsObject": "DEPLOYEDASSET"
        },
        {
            "attributeName": "CREATEDATE",
            "required": false,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Created Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date and time the consumption data record was last updated",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User name of the person who last changed the consumption data record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ISUPDATEABLE",
            "required": true,
            "persistent": true,
            "title": "Editable",
            "remarks": "Indicates whether or not this consumption data record can be modified; only manually entered records are editable.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIGDATE",
            "required": false,
            "persistent": true,
            "title": "Signed Date",
            "remarks": "Date when the PVU report imported by  IBM Tivoli Asset Discovery for Distributed was signed by the user",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAMITDPAHWMID",
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