mos = {
    "objectName": "DMPKGEVENTTRK",
    "className": "psdi.dm.changetracking.DMPkgEventTrackingSet",
    "description": "Track events for DM change tracking",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMPKGEVENTTRKID",
    "primaryKeyColumns": [
        "PKGDEFNAME",
        "SOURCE",
        "OBJECT",
        "OBJECTID",
        "ACTION"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGEVENTTRK",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tracking Events for Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMPKGEVENTTRK",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tracking Events for Object.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMPKGEVENTTRK",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PARENTOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tracking Events for Parent Object in Object Structure.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMPKGEVENTTRK",
            "parentKeys": "PERSONID",
            "targetKeys": "EVENTUSER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tracking Events for this Person.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DMPKGEVENTTRKID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCE",
            "required": true,
            "persistent": true,
            "title": "Source",
            "remarks": "Identifies the source MAXIMO environment where package is created",
            "sameAsAttribute": "SOURCE",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "OBJECT",
            "required": true,
            "persistent": true,
            "title": "Object",
            "remarks": "Identifies the MAXIMO business object for which this event occurred",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OBJECTID",
            "required": true,
            "persistent": true,
            "title": "Object Id",
            "remarks": "Identifies the unique internal ID of the record of the MBO which was affected by the event",
            "sameAsAttribute": "MAXOBJECTID",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ACTION",
            "required": true,
            "persistent": true,
            "title": "Action",
            "remarks": "Identifies the type of event (ADD, UPDATE, DELETE)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIMARYKEYS",
            "required": false,
            "persistent": true,
            "title": "Primary Keys",
            "remarks": "Comma-separated name-value pairs indicating the primary key column and corresponding value for deleted records",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EVENTUSER",
            "required": true,
            "persistent": true,
            "title": "Event User",
            "remarks": "Identifies the user that caused the event",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "EVENTDATE",
            "required": true,
            "persistent": true,
            "title": "Event Date",
            "remarks": "Date and time information when the event occurred",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENTOBJECT",
            "required": false,
            "persistent": true,
            "title": "Parent Object",
            "remarks": "Identifies the parent MBO of the object for which the current listener entry has been generated",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "PARENTOBJECTID",
            "required": false,
            "persistent": true,
            "title": "Parent Object Id",
            "remarks": "Identifies the unique internal ID of the record of the MBO identified in the PARENTOBJECT column",
            "sameAsAttribute": "MAXOBJECTID",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "PKGDEFNAME",
            "required": true,
            "persistent": true,
            "title": "Package Definition Name",
            "remarks": "Name of the package definition as entered by the user",
            "sameAsAttribute": "PKGDEFNAME",
            "sameAsObject": "DMPACKAGEDEF"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMPKGEVENTTRK_CHILD",
            "target": "DMPKGEVENTTRK",
            "remarks": "Relationship to get tracked events for the child level mbo.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source and parentobject=:object and parentobjectid=:objectid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMPKGEVENTTRK",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship to get all tracked events for this definition.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGEVENTTRK_ROOT",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship to get tracked events for the root level mbo.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source and parentobject is null",
            "cardinality": null
        },
        {
            "name": "DMPKGEVENTTRK_CHILD",
            "source": "DMPKGEVENTTRK",
            "remarks": "Relationship to get tracked events for the child level mbo.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source and parentobject=:object and parentobjectid=:objectid",
            "cardinality": null
        }
    ]
}