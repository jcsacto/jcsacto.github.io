mos = {
    "objectName": "SKDOBJECTMGR",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Schedule Object Data Manager",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDOBJECTMGRID",
    "primaryKeyColumns": [
        "SKDOBJECTNAME",
        "OBJECTNAME",
        "PURPOSE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDOBJECTMGR",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Input MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDOBJECTMGR",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Output SKD MBO",
            "longDescription": null
        }
    ],
    "columns": [
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
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "PURPOSE",
            "required": true,
            "persistent": true,
            "title": "Purpose of this object Manager",
            "remarks": "Purpose of this object Manager",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSNAME",
            "required": true,
            "persistent": true,
            "title": "Data Manager Class Name",
            "remarks": "Data Manager Class Name",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "INVOCATIONSEQ",
            "required": true,
            "persistent": true,
            "title": "Invocation Sequence",
            "remarks": "Sequence in which this Manager is invoked",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDOBJECTMGRID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDOBJECTMGR",
            "source": "SKDOBJECT",
            "remarks": "Scheduler Object Manager information",
            "whereClause": "skdobjectname=:skdobjectname and objectname=:objectname",
            "cardinality": null
        }
    ]
}