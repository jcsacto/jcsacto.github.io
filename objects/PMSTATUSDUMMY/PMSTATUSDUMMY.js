mos = {
    "objectName": "PMSTATUSDUMMY",
    "className": "psdi.app.pm.virtual.PMStatusDummySet",
    "description": "Dummy non-persistent object for the PM status.",
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
            "attributeName": "PMNUM",
            "required": false,
            "persistent": false,
            "title": "PM",
            "remarks": "PmNum for PMSTATUSDUMMY",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PMSTATUSDUMMY",
            "source": "PM",
            "remarks": "Relationship to the PMStatusDummy non-persistent table, used to find all status for a given PM. (pmstatusdummy.pmnum = pm.pmnum). This resulting set will contain zero or more objects.",
            "whereClause": "pmnum = :pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}