mos = {
    "objectName": "DPAMADAPTER",
    "className": "psdi.app.dpamadpt.DPAMAdapterSet",
    "description": "Deployed Assets Adapter Conversion Targets",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "ADAPTERID",
    "primaryKeyColumns": [
        "ADAPTERID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ADAPTERID",
            "required": true,
            "persistent": true,
            "title": "Adapter Id",
            "remarks": "Adapter ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADAPTERNAME",
            "required": true,
            "persistent": true,
            "title": "Target Adapter",
            "remarks": "Target name for the adapter. Maximo translates adapter names that match the variants specified in the adapter conversion record to this target name when it displays adapter data in Deployed Assets module applications and in Maximo reports. Adapters listed in this field can be network adapters or media adapters (such as sound or video cards).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALIDATED",
            "required": true,
            "persistent": true,
            "title": "Reviewed",
            "remarks": "Indicates whether an administrator reviewed the adapter conversion record. The purpose of this field is to identify new records imported into Maximo, so an administrator can review them. By default, Maximo selects the check box when administrators create or change records using the Adapter Conversion application. By default, IBM Tivoli Integration Composer clears the check box when it creates records. To ensure that Maximo uses your naming conventions, after each IBM Tivoli Integration Composer import, filter newly imported records, which display an N in the Reviewed? column on the List tab. Review the new records and select this check box; if you edit the new records, Maximo automatically selects the check box. Note that when Maximo displays deployed asset adapter data, translating a variant to a target name does not depend on the setting in this check box; if an adapter name matches a variant, Maximo translates it to the target name without regard to the setting in the check box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DPAMADAPTMOVE",
            "target": "DPAMADAPTMOVE",
            "remarks": null,
            "whereClause": null,
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
            "name": "MOVEDVARIANTSOWNER",
            "source": "DPAMADAPTMOVE",
            "remarks": "Links the target set back to the move variant action object",
            "whereClause": "adaptername=:adaptername",
            "cardinality": "UNDEFINED"
        }
    ]
}