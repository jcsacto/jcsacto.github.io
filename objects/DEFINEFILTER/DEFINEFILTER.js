mos = {
    "objectName": "DEFINEFILTER",
    "className": "psdi.app.labor.virtual.DefineFilterSet",
    "description": "Non-Persistent table to define filters in Labor",
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
            "attributeName": "LABORSELECT",
            "required": true,
            "persistent": false,
            "title": "Labor",
            "remarks": "Is labor selected?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CRAFTSELECT",
            "required": true,
            "persistent": false,
            "title": "Craft",
            "remarks": "Is craft selected?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SAVESETTINGS",
            "required": true,
            "persistent": false,
            "title": "Save Settings",
            "remarks": "Save selected criteria?",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DEFINEFILTER",
            "source": "LABOR",
            "remarks": "Relationship to the nonpersistent parameter set to apply  define filters.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}