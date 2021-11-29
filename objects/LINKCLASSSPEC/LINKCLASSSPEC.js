mos = {
    "objectName": "LINKCLASSSPEC",
    "className": "psdi.app.assetcatalog.virtual.LinkClassSpecSet",
    "description": "Non Persistent table for linking specs to Asset",
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
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": false,
            "title": "Class Structure",
            "remarks": "The classstructure ID for the levels of classifications",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "LINKCLASSSPEC",
            "source": "ASSET",
            "remarks": "Relationship to the nonpersistent LinkClassSpec object to the Asset object.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINKCLASSSPEC",
            "source": "ITEM",
            "remarks": "Relationship to the nonpersistent parameter set LinkClassSpec.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINKCLASSSPEC",
            "source": "LOCATIONS",
            "remarks": "Relationship to the non-persistent LinkClassSpec table. (No where clause). The resulting set will contain zero objects. This relationship is used only for the Associate Specification Template action page to associate the operating location with a classstructure.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}