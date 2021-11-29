mos = {
    "objectName": "RECORDTIMEZONEDIALOG",
    "className": "psdi.app.timezone.RecordTimeZoneDialogSet",
    "description": "Non persitent object for dialog box",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Name",
            "remarks": "Object name of Time Zone holder",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OBJECTID",
            "required": false,
            "persistent": false,
            "title": "Object ID",
            "remarks": "Object ID of Time Zone holder",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TIMEZONE",
            "required": false,
            "persistent": false,
            "title": "Time Zone",
            "remarks": "The Time Zone of the object",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMOVETZ",
            "required": false,
            "persistent": false,
            "title": "Remove Time Zone",
            "remarks": "Remove Time Zone for Object",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "RECORDTIMEZONE",
            "target": "RECORDTIMEZONE",
            "remarks": "Get current Time Zone if present.",
            "whereClause": "objectname = :objectname and objectid = :objectid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "RECORDTIMEZONEDIALOG",
            "source": "ASSET",
            "remarks": "Used to show the Associate Time Zone Dialog Box.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "RECORDTIMEZONEDIALOG",
            "source": "LOCATIONS",
            "remarks": "Used to show the Associate Time Zone Dialog Box.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "RECORDTIMEZONEDIALOG",
            "source": "ORGANIZATION",
            "remarks": "Used to show the Associate Time Zone Dialog Box.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "RECORDTIMEZONEDIALOG",
            "source": "PM",
            "remarks": "Used to show the Associate Time Zone Dialog Box.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "RECORDTIMEZONEDIALOG",
            "source": "SITE",
            "remarks": "Used to show the Associate Time Zone Dialog Box.",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}