mos = {
    "objectName": "DPAMPROCVARIANT",
    "className": "psdi.app.dpamadpt.DPAMConversionVariantSet",
    "description": "Deployed Assets Processor Conversion Variants",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DPAMPROCVARIANTID",
    "primaryKeyColumns": [
        "DPAMPROCVARIANTID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DPAMPROCVARIANT",
            "targetObject": "DPACCPU",
            "parentKeys": "DPAMPROCVARIANTID",
            "targetKeys": "DPAMPROCVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Processor Variant",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "PROCESSORNAME",
            "required": true,
            "persistent": true,
            "title": "Target Processor",
            "remarks": "Processor Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSORVAR",
            "required": true,
            "persistent": true,
            "title": "Processor Variant",
            "remarks": "A variation of a processor name. Maximo translates this variation to the target processor name when it displays processor data in Deployed Assets module applications and in Maximo reports. This field is case sensitive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPAMPROCVARIANTID",
            "required": true,
            "persistent": true,
            "title": "Processor Variant Id",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DPAMREFPROCESSORNAME",
            "target": "DPACPU",
            "remarks": "Find the processors that reference this processor variant",
            "whereClause": "makemodel=:processorvar",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DPAMPROCVARIANT",
            "source": "DPAMPROCESSOR",
            "remarks": null,
            "whereClause": "processorname = :processorname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMPROCVARIANT",
            "source": "DPAMPROCMOVE",
            "remarks": null,
            "whereClause": "processorname = :processorname",
            "cardinality": "UNDEFINED"
        }
    ]
}