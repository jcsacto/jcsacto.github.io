mos = {
    "objectName": "DPAMSWVARIANT",
    "className": "psdi.app.dpamadpt.DPAMConversionVariantSet",
    "description": "Deployed Assets Software Conversion Variants",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DPAMSWVARIANTID",
    "primaryKeyColumns": [
        "DPAMSWVARIANTID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DPAMSWVARIANT",
            "targetObject": "DPACSOFTWARE",
            "parentKeys": "DPAMSWVARIANTID",
            "targetKeys": "DPAMSWVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Software Variant",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SOFTWARENAME",
            "required": true,
            "persistent": true,
            "title": "Target Software",
            "remarks": "Software Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOFTWAREVARIANT",
            "required": true,
            "persistent": true,
            "title": "Software Variant",
            "remarks": "A variation of a software name. Maximo translates this variation to the target software name when it displays software application data in Deployed Assets module applications and in Maximo reports. This field is case sensitive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPAMSWVARIANTID",
            "required": true,
            "persistent": true,
            "title": "Software Variant Id",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DPAMREFSWNAME",
            "target": "DPASOFTWARE",
            "remarks": "Find the SW instances that reference this SW",
            "whereClause": "softwarename=:softwarevariant",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DPAMSWVARIANT",
            "source": "DPAMSOFTWARE",
            "remarks": null,
            "whereClause": "softwarename = :softwarename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMSWVARIANT",
            "source": "DPAMSWMOVE",
            "remarks": null,
            "whereClause": "softwarename = :softwarename",
            "cardinality": "UNDEFINED"
        }
    ]
}