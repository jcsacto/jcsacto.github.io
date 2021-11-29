mos = {
    "objectName": "MAXLECONTEXT",
    "className": "psdi.iface.app.launch.MaxLaunchContextSet",
    "description": "Launch Entry Context",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLECONTEXTID",
    "primaryKeyColumns": [
        "LAUNCHENTRYNAME",
        "RESOURCETYPE",
        "RESOURCECLASS"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXLAUNCHENTRY",
            "targetObject": "MAXLECONTEXT",
            "parentKeys": "LAUNCHENTRYNAME",
            "targetKeys": "LAUNCHENTRYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Launch Entry",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXLECONTEXT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAXLECONTEXTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LAUNCHENTRYNAME",
            "required": true,
            "persistent": true,
            "title": "Launch Entry",
            "remarks": "Launch Entry",
            "sameAsAttribute": "LAUNCHENTRYNAME",
            "sameAsObject": "MAXLAUNCHENTRY"
        },
        {
            "attributeName": "RESOURCETYPE",
            "required": true,
            "persistent": true,
            "title": "Resource Object Name",
            "remarks": "Resource Type (Resource Object Name)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESOURCECLASS",
            "required": false,
            "persistent": true,
            "title": "Resource Classification",
            "remarks": "Resource Classification",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change date",
            "remarks": "Change date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUDECHILDCLASS",
            "required": true,
            "persistent": true,
            "title": "Include Child Classifications",
            "remarks": "Include Child Classification",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relates the LE context resource classification ID to the classstructure table",
            "whereClause": "classstructureid=:resourceclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECT",
            "target": "MAXOBJECT",
            "remarks": "Relationship between Launch Context and MBOs, that shows the MBO type for this Launch Context.",
            "whereClause": "resourcetype=:objectname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXLECONTEXT",
            "source": "MAXLAUNCHENTRY",
            "remarks": "Relationship between Launch Entry and Launch Context, that shows all of the Launch Context that for Launch entry.",
            "whereClause": "launchentryname=:launchentryname",
            "cardinality": "UNDEFINED"
        }
    ]
}