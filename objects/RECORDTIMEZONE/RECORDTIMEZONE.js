mos = {
    "objectName": "RECORDTIMEZONE",
    "className": "psdi.app.timezone.RecordTimeZoneSet",
    "description": "Table to hold Time Zone information for Objects.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "RECORDTIMEZONEID",
    "primaryKeyColumns": [
        "OBJECTNAME",
        "OBJECTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECORDTIMEZONE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Time Zone for Object. The Objectname specifis which Object is used.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Object name of Time Zone holder",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OBJECTID",
            "required": true,
            "persistent": true,
            "title": "Object ID",
            "remarks": "Object ID of Time Zone holder",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TIMEZONE",
            "required": true,
            "persistent": true,
            "title": "Time Zone",
            "remarks": "The Time Zone of the object",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECORDTIMEZONEID",
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
            "name": "RECORDTIMEZONE",
            "source": "ASSET",
            "remarks": "Get associated Time Zone.",
            "whereClause": "objectname = 'ASSET' and objectid = :assetuid",
            "cardinality": null
        },
        {
            "name": "RECORDTIMEZONE",
            "source": "LOCATIONS",
            "remarks": "Get associated Time Zone.",
            "whereClause": "objectname = 'LOCATIONS' and objectid = :locationsid",
            "cardinality": null
        },
        {
            "name": "RECORDTIMEZONE",
            "source": "ORGANIZATION",
            "remarks": "Get associated Time Zone.",
            "whereClause": "objectname = 'ORGANIZATION' and objectid = :organizationid",
            "cardinality": null
        },
        {
            "name": "RECORDTIMEZONE",
            "source": "PM",
            "remarks": "Get associated Time Zone.",
            "whereClause": "objectname = 'PM' and objectid = :pmuid",
            "cardinality": null
        },
        {
            "name": "RECORDTIMEZONE",
            "source": "RECORDTIMEZONEDIALOG",
            "remarks": "Get current Time Zone if present.",
            "whereClause": "objectname = :objectname and objectid = :objectid",
            "cardinality": null
        },
        {
            "name": "RECORDTIMEZONE",
            "source": "SITE",
            "remarks": "Get associated Time Zone.",
            "whereClause": "objectname = 'SITE' and objectid = :siteuid",
            "cardinality": null
        }
    ]
}