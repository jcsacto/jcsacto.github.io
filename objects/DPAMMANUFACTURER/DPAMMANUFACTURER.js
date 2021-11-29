mos = {
    "objectName": "DPAMMANUFACTURER",
    "className": "psdi.app.dpammanu.DPAMManufacturerSet",
    "description": "Deployed Assets Manufacturer Conversion Targets",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "MANUFACTURERID",
    "primaryKeyColumns": [
        "MANUFACTURERID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "MANUFACTURERID",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MANUFACTURERNAME",
            "required": true,
            "persistent": true,
            "title": "Target Manufacturer",
            "remarks": "Target name for the manufacturer. Maximo translates manufacturer names that match the variants specified in the manufacturer conversion record to this target name when it displays manufacturer data in Deployed Assets module applications and in Maximo reports.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALIDATED",
            "required": true,
            "persistent": true,
            "title": "Reviewed",
            "remarks": "Indicates whether an administrator reviewed the manufacturer conversion record. The purpose of this field is to identify new records imported into Maximo, so an administrator can review them. By default, Maximo selects the check box when administrators create or change records using the Manufacturer Conversion application. By default, IBM Tivoli Integration Composer clears the check box when it creates records. To ensure that Maximo uses your naming conventions, after each IBM Tivoli Integration Composer import, filter newly imported records, which display an N in the Reviewed? column on the List tab. Review the new records and select this check box; if you edit the new records, Maximo automatically selects the check box. Note that when Maximo displays deployed asset manufacturer data, translating a variant to a target name does not depend on the setting in this check box; if a manufacturer name matches a variant, Maximo translates it to the target name without regard to the setting in the check box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DPAMMANUMOVE",
            "target": "DPAMMANUMOVE",
            "remarks": null,
            "whereClause": null,
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
            "name": "MOVEDVARIANTSOWNER",
            "source": "DPAMMANUMOVE",
            "remarks": "Links the target set back to the move variant action object",
            "whereClause": "manufacturername=:manufacturername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TLOAMDPAMMANUFACTURER",
            "source": "DPAMMANUVARIANT",
            "remarks": "relationship of manufacturer variant to manufacturer",
            "whereClause": "manufacturername=:manufacturername",
            "cardinality": null
        }
    ]
}