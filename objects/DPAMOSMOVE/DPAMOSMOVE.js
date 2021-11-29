mos = {
    "objectName": "DPAMOSMOVE",
    "className": "psdi.app.dpamos.virtual.DPAMOsMoveVariantSet",
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
            "attributeName": "OSNAME",
            "required": false,
            "persistent": false,
            "title": "Original Target Operating System",
            "remarks": "Target operating system name of the original operating system conversion record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETNAME",
            "required": true,
            "persistent": false,
            "title": "Target Operating System",
            "remarks": "Target operating system name of the record to which Maximo will move the selected variants.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MOVEDVARIANTSOWNER",
            "target": "DPAMOS",
            "remarks": "Links the target set back to the move variant action object",
            "whereClause": "osname=:osname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMOSVARIANT",
            "target": "DPAMOSVARIANT",
            "remarks": null,
            "whereClause": "osname = :osname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DPAMOSMOVE",
            "source": "DPAMOS",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}