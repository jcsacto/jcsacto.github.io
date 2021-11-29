mos = {
    "objectName": "DPACPU",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Processors",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CPUID",
    "primaryKeyColumns": [
        "CPUID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DPACPU",
            "targetObject": "DPACCPU",
            "parentKeys": "CPUID",
            "targetKeys": "CPUID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 4",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACPU",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Operating System",
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
            "attributeName": "CPUID",
            "required": true,
            "persistent": true,
            "title": "CPU Id",
            "remarks": "CPU Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial number of the processor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Name of the manufacturer of the processor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAKEMODEL",
            "required": true,
            "persistent": true,
            "title": "Make/Model",
            "remarks": "Make or model of the processor. Sometimes the make or model field contains the name of the manufacturer of the processor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the processor. This description contains relevant data that is not provided in other fields or that identifies the processor in more detail. The data in this field is dependent on the discovery tool used to collect the processor information; the field might be empty or might consist of several concatenated pieces of information.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXSPEED",
            "required": false,
            "persistent": true,
            "title": "Maximum Speed",
            "remarks": "Maximum clock speed specified by the manufacturer of the processor. Note that the speed set on the motherboard may be greater than the speed specified by the manufacturer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRSPEED",
            "required": false,
            "persistent": true,
            "title": "Current Speed",
            "remarks": "Current Speed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPEEDUNIT",
            "required": false,
            "persistent": true,
            "title": "Speed Unit",
            "remarks": "Unit of measurement for the processor's speed, MHz or GHz.",
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
            "attributeName": "VMAXSPEED",
            "required": false,
            "persistent": false,
            "title": "Maximum Speed",
            "remarks": "Max Speed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VCURRSPEED",
            "required": false,
            "persistent": false,
            "title": "Current Speed",
            "remarks": "Clock speed of the processor, as set on the motherboard where it is installed. This speed may be higher than the maximum speed specified by the manufacturer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMCPUTYPE",
            "required": false,
            "persistent": true,
            "title": "Processor Type",
            "remarks": "Indicates the type of processor, such as Single-Core, Dual-Core, Quad-Core, etc.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMFAMILY",
            "required": false,
            "persistent": true,
            "title": "Processor Family",
            "remarks": "Indicates the processor family, such as Intel Centrino, AMD Athlon or IBM Power5.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMCORE",
            "required": false,
            "persistent": true,
            "title": "Cores",
            "remarks": "Total number of cores for the processor",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMACTIVECORE",
            "required": false,
            "persistent": true,
            "title": "Active Cores",
            "remarks": "Total number of active cores for the processor",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IS64BITEN",
            "required": true,
            "persistent": true,
            "title": "64-bit Enabled",
            "remarks": "Specifies whether the processor is 64-bit enabled",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CPUNUM",
            "required": false,
            "persistent": true,
            "title": "Processor identifier",
            "remarks": "A processor identifier provided by user",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DDPACPU",
            "source": "COMPUTERSYSTEM",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERB",
            "source": "DPAMMANUVARIANT",
            "remarks": "Find the processors that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFPROCESSORNAME",
            "source": "DPAMPROCVARIANT",
            "remarks": "Find the processors that reference this processor variant",
            "whereClause": "makemodel=:processorvar",
            "cardinality": "UNDEFINED"
        }
    ]
}