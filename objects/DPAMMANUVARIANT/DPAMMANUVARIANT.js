mos = {
    "objectName": "DPAMMANUVARIANT",
    "className": "psdi.app.dpamadpt.DPAMConversionVariantSet",
    "description": "Deployed Assets Manufacturer Conversion Variants",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DPAMMANUVARIANTID",
    "primaryKeyColumns": [
        "DPAMMANUVARIANTID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "COMPUTERSYSTEM",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Computer System Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "DPACCOMMDEVICE",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "DPACCPU",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "DPACDISK",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "DPACDISPLAY",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "DPACIMAGEDEVICE",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "DPACMEDIAADAPTER",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "DPACNETADAPTER",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "DPACNETDEVCARD",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "DPACOS",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "DPACSOFTWARE",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "DPACSWSUITE",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "NETDEVICE",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "NETPRINTER",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "MANUFACTURERNAME",
            "required": true,
            "persistent": true,
            "title": "Target Manufacturer",
            "remarks": "Manufacturer Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MANUFACTURERVAR",
            "required": true,
            "persistent": true,
            "title": "Manufacturer Variant",
            "remarks": "A variation of a manufacturer name. Maximo translates this variation to the target manufacturer name when it displays manufacturer data in Deployed Assets module applications and in Maximo reports. This field is case sensitive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPAMMANUVARIANTID",
            "required": true,
            "persistent": true,
            "title": "Manufacturer Variant Id",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DPAMREFMANUFACTURERA",
            "target": "DEPLOYEDASSET",
            "remarks": "Find the deployed assets that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERD",
            "target": "DPACOMMDEVICE",
            "remarks": "Find the communications devices that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERB",
            "target": "DPACPU",
            "remarks": "Find the processors that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERH",
            "target": "DPADISK",
            "remarks": "Find the disk devces that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERF",
            "target": "DPADISPLAY",
            "remarks": "Find the displays that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERE",
            "target": "DPAIMAGEDEVICE",
            "remarks": "Find the imaging devices that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERG",
            "target": "DPAMEDIAADAPTER",
            "remarks": "Find the media adapters that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TLOAMDPAMMANUFACTURER",
            "target": "DPAMMANUFACTURER",
            "remarks": "relationship of manufacturer variant to manufacturer",
            "whereClause": "manufacturername=:manufacturername",
            "cardinality": null
        },
        {
            "name": "DPAMREFMANUFACTURERC",
            "target": "DPANETADAPTER",
            "remarks": "Find the network adaptars that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERL",
            "target": "DPANETDEVCARD",
            "remarks": "Find the network device cards that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERI",
            "target": "DPAOS",
            "remarks": "Find the OS that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERJ",
            "target": "DPASOFTWARE",
            "remarks": "Find the software that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERK",
            "target": "DPASWSUITE",
            "remarks": "Find the SW suites that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DPAMMANUVARIANT",
            "source": "DPAMMANUFACTURER",
            "remarks": null,
            "whereClause": "manufacturername = :manufacturername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMMANUVARIANT",
            "source": "DPAMMANUMOVE",
            "remarks": null,
            "whereClause": "manufacturername = :manufacturername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TLOAMDPAMMANUVARIANT",
            "source": "TLOAMSOFTWARE",
            "remarks": "relationship of tloamsoftware to manufacturer variant",
            "whereClause": "manufacturervar=:manufacturer",
            "cardinality": null
        }
    ]
}