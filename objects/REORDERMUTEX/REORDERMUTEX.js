mos = {
    "objectName": "REORDERMUTEX",
    "className": "psdi.app.inventory.ReorderMutexSet",
    "description": "Internal control coordinator for reorder process",
    "longDescription": "This is a scratch pad table used during the reorder process.",
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "SITEID",
        "LOCATION",
        "MRNUM",
        "TYPE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LOCATIONS",
            "targetObject": "REORDERMUTEX",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 166",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "REORDERMUTEX",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "SITEID, MRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "REORDERMUTEX",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REORDERMUTEX",
            "parentKeys": "PERSONID",
            "targetKeys": "USERNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 311",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "REORDERMUTEX",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Internal type of the reorder process",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Storeroom Location where the reorder is initiated",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Internal Status of the reorder process",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSERTDATE",
            "required": false,
            "persistent": true,
            "title": "Insert Date",
            "remarks": "The date when reorder is being processed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRNUM",
            "required": false,
            "persistent": true,
            "title": "MR",
            "remarks": "Material Request number if reorder is initiated by MR",
            "sameAsAttribute": "MRNUM",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "MXSERVERID",
            "required": false,
            "persistent": true,
            "title": "mxserver identifier",
            "remarks": "The string containing the mxserver host and name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REORDERRUNNING",
            "required": true,
            "persistent": true,
            "title": "Is Reorder Running",
            "remarks": "True if the actual reorder process is in progress",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERNAME",
            "required": false,
            "persistent": true,
            "title": "User",
            "remarks": "The user who owns the lock",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}