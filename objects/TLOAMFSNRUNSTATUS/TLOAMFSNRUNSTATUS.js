mos = {
    "objectName": "TLOAMFSNRUNSTATUS",
    "className": null,
    "description": "Fusion mapping run status",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TLOAMFSNRUNSTATUSID",
    "primaryKeyColumns": [
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
            "remarks": "Mapping name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCESCHEMA",
            "required": false,
            "persistent": true,
            "title": "Source Schema",
            "remarks": "Source schema",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETSCHEMA",
            "required": false,
            "persistent": true,
            "title": "Target Schema",
            "remarks": "Target schema",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEDATASOURCE",
            "required": false,
            "persistent": true,
            "title": "Source Data Source",
            "remarks": "Source data source",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETDATASOURCE",
            "required": false,
            "persistent": true,
            "title": "Target Data Source",
            "remarks": "Target data source",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": true,
            "title": "Start Time",
            "remarks": "Mapping Start time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDTIME",
            "required": false,
            "persistent": true,
            "title": "End Time",
            "remarks": "Mapping end time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECORDSINSERTED",
            "required": false,
            "persistent": true,
            "title": "Records Inserted",
            "remarks": "Records inserted during mapping",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECORDSUPDATED",
            "required": false,
            "persistent": true,
            "title": "Records Updated",
            "remarks": "Records updated during mapping",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECORDSDELETED",
            "required": false,
            "persistent": true,
            "title": "Records Deleted",
            "remarks": "Records deleted during mapping",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FAILED",
            "required": true,
            "persistent": true,
            "title": "Failed",
            "remarks": "Mapping failed?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMBEROFERRORS",
            "required": false,
            "persistent": true,
            "title": "Number Of Errors",
            "remarks": "Number of errors in the mapping",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMFSNRUNSTATUSID",
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