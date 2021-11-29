mos = {
    "objectName": "DPAMOSVARIANT",
    "className": "psdi.app.dpamadpt.DPAMConversionVariantSet",
    "description": "Deployed Assets Operating System Conversion Variants",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DPAMOSVARIANTID",
    "primaryKeyColumns": [
        "DPAMOSVARIANTID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DPAMOSVARIANT",
            "targetObject": "DPACOS",
            "parentKeys": "DPAMOSVARIANTID",
            "targetKeys": "DPAMOSVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "OS Variant",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "OSNAME",
            "required": true,
            "persistent": true,
            "title": "Target Operating System",
            "remarks": "OS Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSVARIANT",
            "required": true,
            "persistent": true,
            "title": "Operating System Variant",
            "remarks": "A variation of an operating system name. Maximo translates this variation to the target operating system name when it displays operating system data in Deployed Assets module applications and in Maximo reports. This field is case sensitive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPAMOSVARIANTID",
            "required": true,
            "persistent": true,
            "title": "Operating System Variant Id",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DPAMREFOSNAME",
            "target": "DPAOS",
            "remarks": "Find the operating system installations that reference this OS",
            "whereClause": "name=:osvariant",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DPAMOSVARIANT",
            "source": "DPAMOS",
            "remarks": null,
            "whereClause": "osname = :osname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMOSVARIANT",
            "source": "DPAMOSMOVE",
            "remarks": null,
            "whereClause": "osname = :osname",
            "cardinality": "UNDEFINED"
        }
    ]
}