mos = {
    "objectName": "SKDOBJECT",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "SKD Object Map i.e list of allowed objects",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDOBJECTID",
    "primaryKeyColumns": [
        "SKDOBJECTNAME",
        "OBJECTNAME",
        "DATAGROUPNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDOBJECT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDOBJECT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SAMEASOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Same As Object",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDOBJECT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Scheduler Storage Object",
            "longDescription": null
        },
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
        }
    ],
    "columns": [
        {
            "attributeName": "SKDOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Scheduler Object Name",
            "remarks": "The location where data will be stored in Scheduler.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SAMEASOBJECT",
            "required": false,
            "persistent": true,
            "title": "Same as Object",
            "remarks": "Object Name that this object is identical to",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DATAGROUPNAME",
            "required": false,
            "persistent": true,
            "title": "Data Group Name",
            "remarks": "Data Group Name",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "SKDDATAGROUP"
        },
        {
            "attributeName": "OBJECTSEQ",
            "required": false,
            "persistent": true,
            "title": "Sequence number",
            "remarks": "Object Sequence within the group",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDOBJECTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "SKDOBJECTMGR",
            "target": "SKDOBJECTMGR",
            "remarks": "Scheduler Object Manager information",
            "whereClause": "skdobjectname=:skdobjectname and objectname=:objectname",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}