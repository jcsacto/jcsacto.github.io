mos = {
    "objectName": "DPACOMPUTER",
    "className": "psdi.app.dpldasset.DPAComputerSet",
    "description": "Deployed Assets Computers",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "NODEID",
    "primaryKeyColumns": [
        "NODEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACOMPUTER",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Computer",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACOMPUTER",
            "parentKeys": "NODEID",
            "targetKeys": "TLOAMPARENTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Computer",
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
            "attributeName": "LOGONNAME",
            "required": false,
            "persistent": true,
            "title": "Logon",
            "remarks": "Logon Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SWLASTSCANDATE",
            "required": false,
            "persistent": true,
            "title": "Software Last Scan Date",
            "remarks": "Software Last Scan Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SWDETECTIONTOOL",
            "required": false,
            "persistent": true,
            "title": "Software Detection Tool",
            "remarks": "Software Detection Tool",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUPPORTSWMI",
            "required": true,
            "persistent": true,
            "title": "Supports WMI",
            "remarks": "Supports WMI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MOBOCHIPSET",
            "required": false,
            "persistent": true,
            "title": "Chipset",
            "remarks": "Chip Set",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RAMTYPE",
            "required": false,
            "persistent": true,
            "title": "RAM Type",
            "remarks": "RAM Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RAMTOTALSLOTS",
            "required": false,
            "persistent": true,
            "title": "RAM Total Slots",
            "remarks": "RAM Total Slots",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RAMUNUSEDSLOTS",
            "required": false,
            "persistent": true,
            "title": "RAM Unused Slots",
            "remarks": "RAM Unused Slots",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RAMDESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "RAM Description",
            "remarks": "RAM Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BIOSNAME",
            "required": false,
            "persistent": true,
            "title": "BIOS",
            "remarks": "BIOS Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BIOSVERSION",
            "required": false,
            "persistent": true,
            "title": "BIOS Version",
            "remarks": "BIOS Version",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BIOSDATE",
            "required": false,
            "persistent": true,
            "title": "BIOS Date",
            "remarks": "BIOS Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BIOSPNP",
            "required": true,
            "persistent": true,
            "title": "PNP",
            "remarks": "BIOS PNP",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MOBOSERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Mother Board Serial Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MOBOASSETTAG",
            "required": false,
            "persistent": true,
            "title": "Asset Tag",
            "remarks": "Mother Board's Asset Tag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MOBOMAKEMODEL",
            "required": false,
            "persistent": true,
            "title": "Make/Model",
            "remarks": "Mother Board's Make/Model",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MOBOMANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Mother Board's Manufacturer",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MOBODESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Motherboard Description",
            "remarks": "Mother Board's Description",
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
            "attributeName": "SMBIOS",
            "required": true,
            "persistent": true,
            "title": "SMBIOS",
            "remarks": "SMBIOS",
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
        },
        {
            "attributeName": "MSUS1",
            "required": false,
            "persistent": true,
            "title": "MSU Capacity",
            "remarks": "Current capacity in MSUs",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CAPACITYMODEL1",
            "required": false,
            "persistent": true,
            "title": "Capacity Model",
            "remarks": "Model based on actual capacity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MIPS1",
            "required": false,
            "persistent": true,
            "title": "MIPS Capacity",
            "remarks": "Current capacity in MIPS",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMCPUCONFIG1",
            "required": false,
            "persistent": true,
            "title": "Number of Configured Processors",
            "remarks": "Number of configured processors",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMCPUTOTAL1",
            "required": false,
            "persistent": true,
            "title": "Total Processors",
            "remarks": "Total number of processors",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLANTCODE1",
            "required": false,
            "persistent": true,
            "title": "Manufacturing Plant",
            "remarks": "Manufacturing Plant",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMPARENTID",
            "required": false,
            "persistent": true,
            "title": "Parent Node Id",
            "remarks": "Parent Node Id",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET"
        },
        {
            "attributeName": "TLOAMPLATFORMBASE",
            "required": false,
            "persistent": true,
            "title": "Platform",
            "remarks": "Indicates whether the IT asset platform is distributed or mainframe.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMPARENTNAME",
            "required": false,
            "persistent": false,
            "title": "Parent",
            "remarks": "Parent computer or partition node name for the selected computer record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMCORETOTAL",
            "required": false,
            "persistent": true,
            "title": "Total Cores",
            "remarks": "Total number of cores for the computer",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DPACOMMDEVICE",
            "target": "DPACCOMMDEVICE",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPACPU",
            "target": "DPACCPU",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPADISK",
            "target": "DPACDISK",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPADISPLAY",
            "target": "DPACDISPLAY",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAIMAGEDEVICE",
            "target": "DPACIMAGEDEVICE",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMEDIAADAPTER",
            "target": "DPACMEDIAADAPTER",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPANETADAPTER",
            "target": "DPACNETADAPTER",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAOS",
            "target": "DPACOS",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPASOFTWARE",
            "target": "DPACSOFTWARE",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPASWSUITE",
            "target": "DPACSWSUITE",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAFILE",
            "target": "DPAFILE",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAIPX",
            "target": "DPAIPX",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPALOGICALDRIVE",
            "target": "DPALOGICALDRIVE",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPATCPIP",
            "target": "DPATCPIP",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAUSERINFO",
            "target": "DPAUSERINFO",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}