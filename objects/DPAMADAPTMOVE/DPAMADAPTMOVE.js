mos = {
    "objectName": "DPAMADAPTMOVE",
    "className": "psdi.app.dpamadpt.virtual.DPAMAdaptMoveVariantSet",
    "description": "Non Persistent Move Variants",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ADAPTERNAME",
            "required": false,
            "persistent": false,
            "title": "Original Target Adapter",
            "remarks": "Target adapter name of the original adapter conversion record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETNAME",
            "required": true,
            "persistent": false,
            "title": "Target Adapter",
            "remarks": "Target adapter name of the record to which Maximo will move the selected variants.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MOVEDVARIANTSOWNER",
            "target": "DPAMADAPTER",
            "remarks": "Links the target set back to the move variant action object",
            "whereClause": "adaptername=:adaptername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMADPTVARIANT",
            "target": "DPAMADPTVARIANT",
            "remarks": null,
            "whereClause": "adaptername = :adaptername",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DPAMADAPTMOVE",
            "source": "DPAMADAPTER",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}