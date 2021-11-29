mos = {
    "objectName": "DPAMPROCESSOR",
    "className": "psdi.app.dpamproc.DPAMProcessorSet",
    "description": "Deployed Assets Processor Conversion Targets",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "PROCESSORID",
    "primaryKeyColumns": [
        "PROCESSORID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "PROCESSORID",
            "required": true,
            "persistent": true,
            "title": "Processor ID",
            "remarks": "Processor ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSORNAME",
            "required": true,
            "persistent": true,
            "title": "Target Processor",
            "remarks": "Target name for the processor. Maximo translates processor names that match the variants specified in the processor conversion record to this target name when it displays processor data in Deployed Assets module applications and in Maximo reports.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALIDATED",
            "required": true,
            "persistent": true,
            "title": "Reviewed",
            "remarks": "Indicates whether an administrator reviewed the software conversion record. The purpose of this field is to identify new records imported into Maximo, so an administrator can review them. By default, Maximo selects the check box when administrators create or change records using the Software Conversion application. By default, IBM Tivoli Integration Composer clears the check box when it creates records. To ensure that Maximo uses your naming conventions, after each IBM Tivoli Integration Composer import, filter newly imported records, which display an N in the Reviewed? column on the List tab. Review the new records and select this check box; if you edit the new records, Maximo automatically selects the check box. Note that when Maximo displays deployed asset software data, translating a variant to a target name does not depend on the setting in this check box; if a software application name matches a variant, Maximo translates it to the target name without regard to the setting in the check box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DPAMPROCMOVE",
            "target": "DPAMPROCMOVE",
            "remarks": null,
            "whereClause": null,
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
            "name": "MOVEDVARIANTSOWNER",
            "source": "DPAMPROCMOVE",
            "remarks": "Links the target set back to the move variant action object",
            "whereClause": "processorname=:processorname",
            "cardinality": "UNDEFINED"
        }
    ]
}