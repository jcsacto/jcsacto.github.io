mos = {
    "objectName": "SKDRESOBJECT",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Schedule Resource related Objects",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDRESOBJECTID",
    "primaryKeyColumns": [
        "RESOURCEOBJECTNAME",
        "ACTIVITYGROUP"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDRESOBJECT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "RESOURCEOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Resource MBO",
            "longDescription": null
        },
        {
            "objectName": "SKDDATAGROUP",
            "targetObject": "SKDRESOBJECT",
            "parentKeys": "GROUPNAME, SKDOBJECTNAME",
            "targetKeys": "ACTIVITYGROUP, RESOURCEOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Resource Objects",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RESOURCEOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Resource Type Object Name",
            "remarks": "Resource Type Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ACTIVITYGROUP",
            "required": true,
            "persistent": true,
            "title": "Activity Group",
            "remarks": "Activity Group that this resource is associated with",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "SKDDATAGROUP"
        },
        {
            "attributeName": "SKDRESOBJECTID",
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