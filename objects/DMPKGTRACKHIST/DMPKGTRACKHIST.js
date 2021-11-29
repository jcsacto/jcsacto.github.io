mos = {
    "objectName": "DMPKGTRACKHIST",
    "className": "psdi.dm.changetracking.DMPkgTrackHistSet",
    "description": "Specifies history information for event tracking",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMPKGTRACKHISTID",
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
            "targetObject": "DMPKGTRACKHIST",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "History tracking for Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMPKGTRACKHIST",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "History tracking for Object.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMPKGTRACKHIST",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PARENTOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "History tracking for Parent Object in Object Structure.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMPKGTRACKHIST",
            "parentKeys": "PERSONID",
            "targetKeys": "EVENTUSER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "History tracking for this Person.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DMPKGTRACKHISTID",
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
            "remarks": "Identifies the source Maximo environment where this package was defined and created",
            "sameAsAttribute": "SOURCE",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "OBJECT",
            "required": true,
            "persistent": true,
            "title": "Object",
            "remarks": "Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OBJECTID",
            "required": true,
            "persistent": true,
            "title": "Object Id",
            "remarks": "Identifies the unqiue internal ID of the record of the MBO which was affected by the event",
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
            "sameAsAttribute": "PRIMARYKEYS",
            "sameAsObject": "DMPKGEVENTTRK"
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
            "title": "Parent Object Name",
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
        },
        {
            "attributeName": "CONTENTID",
            "required": true,
            "persistent": true,
            "title": "Content Id",
            "remarks": "Unique attribute for content delivery",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DMPKGTRACKHIST",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship to get all trackinghistory for this definition.",
            "whereClause": "pkgdefname=:pkgdefname and source=:source",
            "cardinality": "UNDEFINED"
        }
    ]
}