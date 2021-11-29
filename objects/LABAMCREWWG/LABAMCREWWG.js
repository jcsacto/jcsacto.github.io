mos = {
    "objectName": "LABAMCREWWG",
    "className": "psdi.app.labor.virtual.LabAmCrewWorkGroupSet",
    "description": "Labor crew workgroup virtual mbo",
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
            "attributeName": "CREWWORKGROUP",
            "required": false,
            "persistent": false,
            "title": "Crew Work Group",
            "remarks": "Identifies the resource pool for labor.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CREWWGLIST",
            "source": "LABOR",
            "remarks": "Relationship to the non-persistent parameter set for crew workgroup.",
            "whereClause": "",
            "cardinality": null
        }
    ]
}