mos = {
    "objectName": "SKDDATAGROUP",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Schedule Data Group",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDDATAGROUPID",
    "primaryKeyColumns": [
        "GROUPNAME",
        "SKDOBJECTNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "SKDDATAGROUP",
            "targetObject": "SKDOBJECT",
            "parentKeys": "GROUPNAME, SKDOBJECTNAME",
            "targetKeys": "DATAGROUPNAME, OBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "SKDDATAGROUP",
            "targetObject": "SKDOBJECT",
            "parentKeys": "GROUPNAME, SKDOBJECTNAME",
            "targetKeys": "DATAGROUPNAME, SAMEASOBJECT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "SKDDATAGROUP",
            "targetObject": "SKDOBJECT",
            "parentKeys": "GROUPNAME, SKDOBJECTNAME",
            "targetKeys": "DATAGROUPNAME, SKDOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Object Data Group",
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
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDDATAGROUP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD MBO",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "GROUPNAME",
            "required": true,
            "persistent": true,
            "title": "Object Group Name",
            "remarks": "Object Group Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the Object Group",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TITLE",
            "required": true,
            "persistent": true,
            "title": "Title",
            "remarks": "Title used for identifying the group",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Scheduler Object Name",
            "remarks": "The location where data will be stored in Scheduler.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CLASSNAME",
            "required": false,
            "persistent": true,
            "title": "Class Name",
            "remarks": "Class Name used for managing Group",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "GROUPSEQ",
            "required": true,
            "persistent": true,
            "title": "Group Sequence",
            "remarks": "Sequence order in which the data to be shown",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDDATAGROUPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": false,
            "persistent": true,
            "title": "Language code",
            "remarks": "Language code",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}