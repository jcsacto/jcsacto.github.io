mos = {
    "objectName": "DMCOLLEVENTTRK",
    "className": "psdi.dm.collection.DMCollEventTrkSet",
    "description": "Event tracking for Migration Collections",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMCOLLEVENTTRKID",
    "primaryKeyColumns": [
        "DMCOLLECTIONID",
        "APP",
        "INTOBJECTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "DMCOLLEVENTTRK",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application for event tracking.",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMCOLLEVENTTRK",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure for event tracking.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DMCOLLECTIONID",
            "required": true,
            "persistent": true,
            "title": "Collection Id",
            "remarks": "Unique ID of the Migration Collections",
            "sameAsAttribute": "DMCOLLECTIONID",
            "sameAsObject": "DMCOLLECTION"
        },
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Specify the application for which you want to add events to the migration collection.",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object Structure",
            "remarks": "Specify the object structure for which you want to add events to the migration collection.",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "ADDEVENT",
            "required": true,
            "persistent": true,
            "title": "Add Event",
            "remarks": "Select this check box to add Add events.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDATEEVENT",
            "required": true,
            "persistent": true,
            "title": "Update Event",
            "remarks": "Select this check box to add Update events.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELETEEVENT",
            "required": true,
            "persistent": true,
            "title": "Delete Event",
            "remarks": "Select this check box to add Delete events.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DMCOLLEVENTTRKID",
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
            "name": "DMCOLLEVENTTRK",
            "source": "DMCOLLECTION",
            "remarks": "Relationship from DMCOLLECTION to DMCOLLEVENTTRK",
            "whereClause": "dmcollectionid=:dmcollectionid",
            "cardinality": null
        }
    ]
}