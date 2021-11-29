mos = {
    "objectName": "FSNLASTSCAN",
    "className": "psdi.app.fusion.FSNLastScanSet",
    "description": "Fusion Mapping Last Scan",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "SOURCEID",
        "MAPPINGNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "MAPPINGNAME",
            "required": true,
            "persistent": true,
            "title": "Mapping Name",
            "remarks": "Mapping Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEID",
            "required": true,
            "persistent": true,
            "title": "Source",
            "remarks": "Source ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETID",
            "required": true,
            "persistent": true,
            "title": "Target ID",
            "remarks": "Target ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTSCANDATE",
            "required": false,
            "persistent": true,
            "title": "Last Scan Date",
            "remarks": "Last Scan Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}