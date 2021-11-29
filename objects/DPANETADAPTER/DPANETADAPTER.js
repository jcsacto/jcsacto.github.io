mos = {
    "objectName": "DPANETADAPTER",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Network Adapters",
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
            "objectName": "DPANETADAPTER",
            "targetObject": "DPACNETADAPTER",
            "parentKeys": "ADAPTERID",
            "targetKeys": "ADAPTERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Net Adapter",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPANETADAPTER",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Net Adapter",
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
            "remarks": "Adapter Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADAPTERTYPE",
            "required": false,
            "persistent": true,
            "title": "Adapter Type",
            "remarks": "Adapter Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BANDWIDTH",
            "required": false,
            "persistent": true,
            "title": "Bandwidth",
            "remarks": "Bandwidth",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BANDWIDTHUNIT",
            "required": false,
            "persistent": true,
            "title": "Bandwidth Unit",
            "remarks": "Bandwidth Unit",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROTOCOL",
            "required": false,
            "persistent": true,
            "title": "Protocol",
            "remarks": "Protocol",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PORT",
            "required": false,
            "persistent": true,
            "title": "Port",
            "remarks": "Port",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NETMACADDR1",
            "required": false,
            "persistent": true,
            "title": "MAC Address 1",
            "remarks": "Net MAC Address 1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NETMACADDR2",
            "required": false,
            "persistent": true,
            "title": "MAC Address 2",
            "remarks": "Net MAC Address 2",
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
            "attributeName": "FIRMWAREVERSION",
            "required": false,
            "persistent": true,
            "title": "Firmware Version",
            "remarks": "Firmware Version",
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
            "attributeName": "VBANDWIDTH",
            "required": false,
            "persistent": false,
            "title": "Bandwidth",
            "remarks": "Bandwidth",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DDPANETADAPTER",
            "source": "COMPUTERSYSTEM",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMAKEMODELA",
            "source": "DPAMADPTVARIANT",
            "remarks": "Find the net adapters that reference this variant",
            "whereClause": "makemodel=:adaptervariant",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERC",
            "source": "DPAMMANUVARIANT",
            "remarks": "Find the network adaptars that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        }
    ]
}