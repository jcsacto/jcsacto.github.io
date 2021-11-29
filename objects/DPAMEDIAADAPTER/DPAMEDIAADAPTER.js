mos = {
    "objectName": "DPAMEDIAADAPTER",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Media Adapters",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ADAPTERID",
    "primaryKeyColumns": [
        "ADAPTERID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DPAMEDIAADAPTER",
            "targetObject": "DPACMEDIAADAPTER",
            "parentKeys": "ADAPTERID",
            "targetKeys": "ADAPTERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Adapter Variant",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPAMEDIAADAPTER",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Media Adapter",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node Id",
            "remarks": "Node Id",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET"
        },
        {
            "attributeName": "ADAPTERID",
            "required": true,
            "persistent": true,
            "title": "Adapter",
            "remarks": "Adapter id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEDIATYPE",
            "required": false,
            "persistent": true,
            "title": "Media Adapter Type",
            "remarks": "Media Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMORYTYPE",
            "required": false,
            "persistent": true,
            "title": "Memory Type",
            "remarks": "Memory Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RAMSIZE",
            "required": false,
            "persistent": true,
            "title": "RAM Size",
            "remarks": "RAM  Size",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RAMUNIT",
            "required": false,
            "persistent": true,
            "title": "RAM Unit",
            "remarks": "RAM Unit",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUSTYPE",
            "required": false,
            "persistent": true,
            "title": "Bus Type",
            "remarks": "Bus Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHIPSET",
            "required": false,
            "persistent": true,
            "title": "Chipset",
            "remarks": "Chip Set",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETTAG",
            "required": false,
            "persistent": true,
            "title": "Asset Tag",
            "remarks": "Asset Tag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAKEMODEL",
            "required": true,
            "persistent": true,
            "title": "Make/Model",
            "remarks": "Make/Model",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Create Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VRAMSIZE",
            "required": false,
            "persistent": false,
            "title": "RAM Size",
            "remarks": "RAM Size",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DDPAMEDIAADAPTER",
            "source": "COMPUTERSYSTEM",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMAKEMODELC",
            "source": "DPAMADPTVARIANT",
            "remarks": "Find the media adapters that reference this variant",
            "whereClause": "makemodel=:adaptervariant",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERG",
            "source": "DPAMMANUVARIANT",
            "remarks": "Find the media adapters that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        }
    ]
}