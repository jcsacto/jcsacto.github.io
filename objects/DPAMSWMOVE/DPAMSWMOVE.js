mos = {
    "objectName": "DPAMSWMOVE",
    "className": "psdi.app.dpamsw.virtual.DPAMSwMoveVariantSet",
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
            "attributeName": "SOFTWARENAME",
            "required": false,
            "persistent": false,
            "title": "Original Target Software",
            "remarks": "Target software name of the original software conversion record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETNAME",
            "required": true,
            "persistent": false,
            "title": "Target Software",
            "remarks": "Target software name of the record to which Maximo will move the selected variants.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MOVEDVARIANTSOWNER",
            "target": "DPAMSOFTWARE",
            "remarks": "Links the target set back to the move variant action object",
            "whereClause": "softwarename=:softwarename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMSWVARIANT",
            "target": "DPAMSWVARIANT",
            "remarks": null,
            "whereClause": "softwarename = :softwarename",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DPAMSWMOVE",
            "source": "DPAMSOFTWARE",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}