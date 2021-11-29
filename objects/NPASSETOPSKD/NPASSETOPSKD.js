mos = {
    "objectName": "NPASSETOPSKD",
    "className": "psdi.app.asset.virtual.NPAssetOpSKDSet",
    "description": "Non Persistent Asset Operational Schedule",
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
            "attributeName": "STARTDATETIME",
            "required": true,
            "persistent": false,
            "title": "Schedule Start",
            "remarks": "The date and time that the maintenance/operating schedule for the asset starts.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATETIME",
            "required": false,
            "persistent": false,
            "title": "Schedule End",
            "remarks": "The date and time that the maintenance/operating schedule for the asset ends.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPHRS",
            "required": true,
            "persistent": false,
            "title": "Operating Hours/Maintenance Hours",
            "remarks": "Duration of the operating schedule/maintenance schedule. The asset will be unavailable for maintenance during its operating schedule",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": false,
            "title": "Remarks",
            "remarks": "Comments about the maintenance/operating schedule.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "SKDTYPE",
            "required": true,
            "persistent": false,
            "title": "Schedule Type",
            "remarks": "Type of schedule like weekly, bi-weekly, daily, annually or custom",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}