mos = {
    "objectName": "SWUSGQUERY",
    "className": "psdi.app.dpldasset.virtual.DPASwUsageQuerySet",
    "description": "Non Persistent Software Usage Query",
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
            "attributeName": "USAGE",
            "required": false,
            "persistent": false,
            "title": "Usage",
            "remarks": "Usage",
            "sameAsAttribute": "USAGE",
            "sameAsObject": "DPAMSWUSAGERANGE"
        },
        {
            "attributeName": "RANGEFROM",
            "required": true,
            "persistent": false,
            "title": "Range From",
            "remarks": "Range From",
            "sameAsAttribute": "RANGEFROM",
            "sameAsObject": "DPAMSWUSAGERANGE"
        },
        {
            "attributeName": "RANGETO",
            "required": true,
            "persistent": false,
            "title": "Range To",
            "remarks": "Range To",
            "sameAsAttribute": "RANGETO",
            "sameAsObject": "DPAMSWUSAGERANGE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SWUSGQUERY",
            "source": "COMPUTERSYSTEM",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}