mos = {
    "objectName": "DPAMOS",
    "className": "psdi.app.dpamos.DPAMOSSet",
    "description": "Deployed Assets Operating System Conversion Targets",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "OSID",
    "primaryKeyColumns": [
        "OSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "OSID",
            "required": true,
            "persistent": true,
            "title": "OS ID",
            "remarks": "OS ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSNAME",
            "required": true,
            "persistent": true,
            "title": "Target Operating System",
            "remarks": "Target name for the operating system. Maximo translates operating system names that match the variants specified in the operating system conversion record to this target name when it displays operating system data in Deployed Assets module applications and in Maximo reports.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALIDATED",
            "required": true,
            "persistent": true,
            "title": "Reviewed",
            "remarks": "Indicates whether an administrator reviewed the operating system conversion record. The purpose of this field is to identify new records imported into Maximo, so an administrator can review them. By default, Maximo selects the check box when administrators create or change records using the Operating System Conversion application. By default, IBM Tivoli Integration Composer clears the check box when it creates records. To ensure that Maximo uses your naming conventions, after each IBM Tivoli Integration Composer import, filter newly imported records, which display an N in the Reviewed? column on the List tab. Review the new records and select this check box; if you edit the new records, Maximo automatically selects the check box. Note that when Maximo displays deployed asset operating system data, translating a variant to a target name does not depend on the setting in this check box; if an operating system name matches a variant, Maximo translates it to the target name without regard to the setting in the check box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DPAMOSMOVE",
            "target": "DPAMOSMOVE",
            "remarks": null,
            "whereClause": null,
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
            "name": "MOVEDVARIANTSOWNER",
            "source": "DPAMOSMOVE",
            "remarks": "Links the target set back to the move variant action object",
            "whereClause": "osname=:osname",
            "cardinality": "UNDEFINED"
        }
    ]
}