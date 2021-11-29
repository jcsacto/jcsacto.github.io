mos = {
    "objectName": "DPAMADPTVARIANT",
    "className": "psdi.app.dpamadpt.DPAMConversionVariantSet",
    "description": "Deployed Assets Adapter Conversion Variants",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DPAMADPTVARIANTID",
    "primaryKeyColumns": [
        "DPAMADPTVARIANTID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DPAMADPTVARIANT",
            "targetObject": "DPACCOMMDEVICE",
            "parentKeys": "DPAMADPTVARIANTID",
            "targetKeys": "DPAMADPTVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMADPTVARIANT",
            "targetObject": "DPACCOMMDEVICE",
            "parentKeys": "DPAMADPTVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Adapter Conversion Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMADPTVARIANT",
            "targetObject": "DPACMEDIAADAPTER",
            "parentKeys": "DPAMADPTVARIANTID",
            "targetKeys": "DPAMADPTVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Adapter Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMADPTVARIANT",
            "targetObject": "DPACNETADAPTER",
            "parentKeys": "DPAMADPTVARIANTID",
            "targetKeys": "DPAMADPTVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant Adapter",
            "longDescription": null
        },
        {
            "objectName": "DPAMADPTVARIANT",
            "targetObject": "DPACNETDEVCARD",
            "parentKeys": "DPAMADPTVARIANTID",
            "targetKeys": "DPAMADPTVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Adapter Variant",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ADAPTERNAME",
            "required": true,
            "persistent": true,
            "title": "Target Adapter",
            "remarks": "Adapter Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADAPTERVARIANT",
            "required": true,
            "persistent": true,
            "title": "Adapter Variant",
            "remarks": "A variation of an adapter name. Maximo translates this variation to the target adapter name when it displays adapter data in Deployed Assets module applications and in Maximo reports. This field is case sensitive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPAMADPTVARIANTID",
            "required": true,
            "persistent": true,
            "title": "Adapter Variant Id",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DPAMREFMAKEMODELB",
            "target": "DPACOMMDEVICE",
            "remarks": "Find the communications devices that reference this variant",
            "whereClause": "makemodel=:adaptervariant",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMAKEMODELC",
            "target": "DPAMEDIAADAPTER",
            "remarks": "Find the media adapters that reference this variant",
            "whereClause": "makemodel=:adaptervariant",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMAKEMODELA",
            "target": "DPANETADAPTER",
            "remarks": "Find the net adapters that reference this variant",
            "whereClause": "makemodel=:adaptervariant",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMAKEMODELD",
            "target": "DPANETDEVCARD",
            "remarks": "Find the net device cards that reference this variant",
            "whereClause": "makemodel=:adaptervariant",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DPAMADPTVARIANT",
            "source": "DPAMADAPTER",
            "remarks": null,
            "whereClause": "adaptername = :adaptername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMADPTVARIANT",
            "source": "DPAMADAPTMOVE",
            "remarks": null,
            "whereClause": "adaptername = :adaptername",
            "cardinality": "UNDEFINED"
        }
    ]
}