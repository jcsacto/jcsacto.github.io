mos = {
    "objectName": "JOBPLANFILTER",
    "className": "psdi.app.jobplan.virtual.JobPlanFilterSet",
    "description": "Non Persistent Object for JobPlan",
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
            "attributeName": "LOCATIONSELECT",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "Location value selected",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ASSETSELECT",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Asset value selected",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ITEMNUMSELECT",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "Item Number Selected",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "Item Set",
            "remarks": "Set identifier for the item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the JOBPLANFILTER to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "JOBPLANFILTER",
            "source": "JOBPLAN",
            "remarks": "Relationship to the Job Plan's non-persistent JobPlanFilter Set. The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}