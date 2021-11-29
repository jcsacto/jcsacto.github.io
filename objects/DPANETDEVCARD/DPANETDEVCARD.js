mos = {
    "objectName": "DPANETDEVCARD",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Network Devices Network Device Cards",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CARDID",
    "primaryKeyColumns": [
        "CARDID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DPANETDEVCARD",
            "targetObject": "DPACNETDEVCARD",
            "parentKeys": "CARDID",
            "targetKeys": "CARDID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Network Device Card",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPANETDEVCARD",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Network Device Card",
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
            "attributeName": "CARDID",
            "required": true,
            "persistent": true,
            "title": "Card",
            "remarks": "Card Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Device Type",
            "remarks": "Type of network protocol or type of card in the network device, such as WAN (wide area network), LAN (local area network), FDDI (fiber distributed data interface), Token Ring, Ethernet, or ATM (asynchronous transfer mode).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NETWORKADDRESS",
            "required": false,
            "persistent": true,
            "title": "Network Address",
            "remarks": "Device's network address. This is usually the TCPIP address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NETMACADDR",
            "required": false,
            "persistent": true,
            "title": "MAC Address",
            "remarks": "Primary MAC address for the device card. The MAC (Media Access Control) address uniquely identifies each node of a network.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FIRMWAREVERSION",
            "required": false,
            "persistent": true,
            "title": "Firmware Version",
            "remarks": "Firmware or BIOS version of the device. Firmware is software (data or program instructions) stored on integrated circuits in read only memory (ROM).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RAMSIZE",
            "required": false,
            "persistent": true,
            "title": "RAM Size",
            "remarks": "RAM Size",
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
            "attributeName": "CHIPSET",
            "required": false,
            "persistent": true,
            "title": "Chipset",
            "remarks": "Chipset on the device card. The chipset is the collection of integrated circuits that enable the card to function.",
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
            "attributeName": "SERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial number of the device card.",
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
            "remarks": "Describes the device card. This description contains relevant data that is not provided in other fields or that identifies the card in more detail. The data in this field is dependent on the discovery tool used to collect the card information; the field might be empty or might consist of several concatenated pieces of information.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETTAG",
            "required": false,
            "persistent": true,
            "title": "Asset Tag",
            "remarks": "Asset tag of the device card.",
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
            "remarks": "Bandwidth of the device card. Bandwidth is the amount of data that can be transmitted in a given amount of time, measured in bits per second.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VRAMSIZE",
            "required": false,
            "persistent": false,
            "title": "RAM Size",
            "remarks": "Size of the RAM (random access memory) on the device card and unit of measurement, either kilobytes (KB), megabytes (MB), or gigabytes (GB).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEID1",
            "required": false,
            "persistent": true,
            "title": "Source ID",
            "remarks": "Source ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DPAMREFMAKEMODELD",
            "source": "DPAMADPTVARIANT",
            "remarks": "Find the net device cards that reference this variant",
            "whereClause": "makemodel=:adaptervariant",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERL",
            "source": "DPAMMANUVARIANT",
            "remarks": "Find the network device cards that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DDPANETDEVCARD",
            "source": "NETDEVICE",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}