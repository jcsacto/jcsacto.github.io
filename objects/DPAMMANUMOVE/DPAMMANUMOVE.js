mos = {
    "objectName": "DPAMMANUMOVE",
    "className": "psdi.app.dpammanu.virtual.DPAMManuMoveVariantSet",
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
            "attributeName": "MANUFACTURERNAME",
            "required": false,
            "persistent": false,
            "title": "Original Target Manufacturer",
            "remarks": "Target manufacturer name of the original manufacturer conversion record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETNAME",
            "required": true,
            "persistent": false,
            "title": "Target Manufacturer",
            "remarks": "Target manufacturer name of the record to which Maximo will move the selected variants.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MOVEDVARIANTSOWNER",
            "target": "DPAMMANUFACTURER",
            "remarks": "Links the target set back to the move variant action object",
            "whereClause": "manufacturername=:manufacturername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMMANUVARIANT",
            "target": "DPAMMANUVARIANT",
            "remarks": null,
            "whereClause": "manufacturername = :manufacturername",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DPAMMANUMOVE",
            "source": "DPAMMANUFACTURER",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}