mos = {
    "objectName": "DPAMPROCMOVE",
    "className": "psdi.app.dpamproc.virtual.DPAMProcMoveVariantSet",
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
            "attributeName": "PROCESSORNAME",
            "required": false,
            "persistent": false,
            "title": "Original Target Processor",
            "remarks": "Target processor name of the original processor conversion record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETNAME",
            "required": true,
            "persistent": false,
            "title": "Target Processor",
            "remarks": "Target processor name of the record to which Maximo will move the selected variants.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MOVEDVARIANTSOWNER",
            "target": "DPAMPROCESSOR",
            "remarks": "Links the target set back to the move variant action object",
            "whereClause": "processorname=:processorname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMPROCVARIANT",
            "target": "DPAMPROCVARIANT",
            "remarks": null,
            "whereClause": "processorname = :processorname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DPAMPROCMOVE",
            "source": "DPAMPROCESSOR",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}