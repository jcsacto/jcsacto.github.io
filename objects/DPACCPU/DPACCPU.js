mos = {
    "objectName": "DPACCPU",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Processors - Converted Make/Model and Manufacturer",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "CPUID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACCPU",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "DPACPU",
            "targetObject": "DPACCPU",
            "parentKeys": "CPUID",
            "targetKeys": "CPUID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 4",
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
            "objectName": "DPAMPROCVARIANT",
            "targetObject": "DPACCPU",
            "parentKeys": "DPAMPROCVARIANTID",
            "targetKeys": "DPAMPROCVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Processor Variant",
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
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "NODEID",
            "tableName": "DPACPU",
            "tableColumnName": "NODEID"
        },
        {
            "attributeName": "CPUID",
            "required": true,
            "persistent": true,
            "title": "CPU Id",
            "remarks": "CPU Id",
            "sameAsAttribute": "CPUID",
            "sameAsObject": "DPACPU",
            "viewColumnName": "CPUID",
            "tableName": "DPACPU",
            "tableColumnName": "CPUID"
        },
        {
            "attributeName": "SERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial number of the processor.",
            "sameAsAttribute": "SERIALNUMBER",
            "sameAsObject": "DPACPU",
            "viewColumnName": "SERIALNUMBER",
            "tableName": "DPACPU",
            "tableColumnName": "SERIALNUMBER"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the processor. This description contains relevant data that is not provided in other fields or that identifies the processor in more detail. The data in this field is dependent on the discovery tool used to collect the processor information; the field might be empty or might consist of several concatenated pieces of information.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "DPACPU",
            "viewColumnName": "DESCRIPTION",
            "tableName": "DPACPU",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "MAXSPEED",
            "required": false,
            "persistent": true,
            "title": "Maximum Speed",
            "remarks": "Maximum clock speed specified by the manufacturer of the processor. Note that the speed set on the motherboard may be greater than the speed specified by the manufacturer.",
            "sameAsAttribute": "MAXSPEED",
            "sameAsObject": "DPACPU",
            "viewColumnName": "MAXSPEED",
            "tableName": "DPACPU",
            "tableColumnName": "MAXSPEED"
        },
        {
            "attributeName": "CURRSPEED",
            "required": false,
            "persistent": true,
            "title": "Current Speed",
            "remarks": "Clock speed of the processor, as set on the motherboard where it is installed. This speed may be higher than the maximum speed specified by the manufacturer.",
            "sameAsAttribute": "CURRSPEED",
            "sameAsObject": "DPACPU",
            "viewColumnName": "CURRSPEED",
            "tableName": "DPACPU",
            "tableColumnName": "CURRSPEED"
        },
        {
            "attributeName": "SPEEDUNIT",
            "required": false,
            "persistent": true,
            "title": "Speed Unit",
            "remarks": "Unit of measurement for the processor's speed, MHz or GHz.",
            "sameAsAttribute": "SPEEDUNIT",
            "sameAsObject": "DPACPU",
            "viewColumnName": "SPEEDUNIT",
            "tableName": "DPACPU",
            "tableColumnName": "SPEEDUNIT"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Create Date",
            "sameAsAttribute": "CREATEDATE",
            "sameAsObject": "DPACPU",
            "viewColumnName": "CREATEDATE",
            "tableName": "DPACPU",
            "tableColumnName": "CREATEDATE"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change Date",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "DPACPU",
            "viewColumnName": "CHANGEDATE",
            "tableName": "DPACPU",
            "tableColumnName": "CHANGEDATE"
        },
        {
            "attributeName": "VMAXSPEED",
            "required": false,
            "persistent": false,
            "title": "Maximum Speed",
            "remarks": "Maximum clock speed specified by the manufacturer of the processor. Note that the speed set on the motherboard may be greater than the speed specified by the manufacturer.",
            "sameAsAttribute": "VMAXSPEED",
            "sameAsObject": "DPACPU"
        },
        {
            "attributeName": "VCURRSPEED",
            "required": false,
            "persistent": false,
            "title": "Current Speed",
            "remarks": "Clock speed of the processor, as set on the motherboard where it is installed. This speed may be higher than the maximum speed specified by the manufacturer.",
            "sameAsAttribute": "VCURRSPEED",
            "sameAsObject": "DPACPU"
        },
        {
            "attributeName": "CMANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Name of the manufacturer of the processor.",
            "sameAsAttribute": "MANUFACTURERNAME",
            "sameAsObject": "DPAMMANUVARIANT",
            "viewColumnName": "CMANUFACTURER",
            "tableName": "DPAMMANUVARIANT",
            "tableColumnName": "MANUFACTURERNAME"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Name of the manufacturer of the processor.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "MANUFACTURER",
            "tableName": "DPACPU",
            "tableColumnName": "MANUFACTURER"
        },
        {
            "attributeName": "MANUFACTURERVAR",
            "required": true,
            "persistent": true,
            "title": "Manufacturer Variant",
            "remarks": "Manufacturer Var",
            "sameAsAttribute": "MANUFACTURERVAR",
            "sameAsObject": "DPAMMANUVARIANT",
            "viewColumnName": "MANUFACTURERVAR",
            "tableName": "DPAMMANUVARIANT",
            "tableColumnName": "MANUFACTURERVAR"
        },
        {
            "attributeName": "DPAMMANUVARIANTID",
            "required": true,
            "persistent": true,
            "title": "Manufacturer Variant Id",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "DPAMMANUVARIANTID",
            "sameAsObject": "DPAMMANUVARIANT",
            "viewColumnName": "DPAMMANUVARIANTID",
            "tableName": "DPAMMANUVARIANT",
            "tableColumnName": "DPAMMANUVARIANTID"
        },
        {
            "attributeName": "CMAKEMODEL",
            "required": true,
            "persistent": true,
            "title": "Make/Model",
            "remarks": "Make or model of the processor. Sometimes the make or model field contains the name of the manufacturer of the processor.",
            "sameAsAttribute": "PROCESSORNAME",
            "sameAsObject": "DPAMPROCVARIANT",
            "viewColumnName": "CMAKEMODEL",
            "tableName": "DPAMPROCVARIANT",
            "tableColumnName": "PROCESSORNAME"
        },
        {
            "attributeName": "MAKEMODEL",
            "required": true,
            "persistent": true,
            "title": "Make/Model",
            "remarks": "Make or model of the processor. Sometimes the make or model field contains the name of the manufacturer of the processor.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "MAKEMODEL",
            "tableName": "DPACPU",
            "tableColumnName": "MAKEMODEL"
        },
        {
            "attributeName": "PROCESSORVAR",
            "required": true,
            "persistent": true,
            "title": "Processor Variant",
            "remarks": "Processor Var",
            "sameAsAttribute": "PROCESSORVAR",
            "sameAsObject": "DPAMPROCVARIANT",
            "viewColumnName": "PROCESSORVAR",
            "tableName": "DPAMPROCVARIANT",
            "tableColumnName": "PROCESSORVAR"
        },
        {
            "attributeName": "DPAMPROCVARIANTID",
            "required": true,
            "persistent": true,
            "title": "Processor Variant Id",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "DPAMPROCVARIANTID",
            "sameAsObject": "DPAMPROCVARIANT",
            "viewColumnName": "DPAMPROCVARIANTID",
            "tableName": "DPAMPROCVARIANT",
            "tableColumnName": "DPAMPROCVARIANTID"
        },
        {
            "attributeName": "TLOAMCPUTYPE",
            "required": false,
            "persistent": true,
            "title": "Processor Type",
            "remarks": "Indicates the type of processor, such as Single-Core, Dual-Core, Quad-Core, etc.",
            "sameAsAttribute": "TLOAMCPUTYPE",
            "sameAsObject": "DPACPU",
            "viewColumnName": "TLOAMCPUTYPE",
            "tableName": "DPACPU",
            "tableColumnName": "TLOAMCPUTYPE"
        },
        {
            "attributeName": "TLOAMFAMILY",
            "required": false,
            "persistent": true,
            "title": "Processor Family",
            "remarks": "Indicates the processor family, such as Intel Centrino, AMD Athlon or IBM Power5.",
            "sameAsAttribute": "TLOAMFAMILY",
            "sameAsObject": "DPACPU",
            "viewColumnName": "TLOAMFAMILY",
            "tableName": "DPACPU",
            "tableColumnName": "TLOAMFAMILY"
        },
        {
            "attributeName": "NUMCORE",
            "required": false,
            "persistent": true,
            "title": "Cores",
            "remarks": "Total number of cores for the processor",
            "sameAsAttribute": "NUMCORE",
            "sameAsObject": "DPACPU",
            "viewColumnName": "NUMCORE",
            "tableName": "DPACPU",
            "tableColumnName": "NUMCORE"
        },
        {
            "attributeName": "NUMACTIVECORE",
            "required": false,
            "persistent": true,
            "title": "Active Cores",
            "remarks": "Total number of active cores for the processor",
            "sameAsAttribute": "NUMACTIVECORE",
            "sameAsObject": "DPACPU",
            "viewColumnName": "NUMACTIVECORE",
            "tableName": "DPACPU",
            "tableColumnName": "NUMACTIVECORE"
        },
        {
            "attributeName": "IS64BITEN",
            "required": true,
            "persistent": true,
            "title": "64-bit Enabled",
            "remarks": "Specifies whether the processor is 64-bit enabled",
            "sameAsAttribute": "IS64BITEN",
            "sameAsObject": "DPACPU",
            "viewColumnName": "IS64BITEN",
            "tableName": "DPACPU",
            "tableColumnName": "IS64BITEN"
        },
        {
            "attributeName": "CPUNUM",
            "required": false,
            "persistent": true,
            "title": "Processor identifier",
            "remarks": "A processor identifier provided by user",
            "sameAsAttribute": "CPUNUM",
            "sameAsObject": "DPACPU",
            "viewColumnName": "CPUNUM",
            "tableName": "DPACPU",
            "tableColumnName": "CPUNUM"
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": "dpacpu.manufacturer=dpammanuvariant.manufacturervar and dpacpu.makemodel=dpamprocvariant.processorvar",
        "viewselect": "select dpacpu.nodeid,dpacpu.cpuid,dpacpu.serialnumber,dpacpu.manufacturer, dpacpu.makemodel, dpacpu.description,dpacpu.maxspeed,dpacpu.currspeed,dpacpu.speedunit,dpacpu.createdate, dpacpu.changedate,dpacpu.rowstamp, dpammanuvariant.manufacturername as cmanufacturer,dpammanuvariant.manufacturervar, dpammanuvariant.dpammanuvariantid, dpammanuvariant.rowstamp as rowstamp1, dpamprocvariant.processorname as cmakemodel, dpamprocvariant.processorvar, dpamprocvariant.dpamprocvariantid,dpamprocvariant.rowstamp as rowstamp2,dpacpu.tloamcputype,dpacpu.tloamfamily ,dpacpu.numcore, dpacpu.numactivecore,dpacpu.is64biten,dpacpu.cpunum",
        "viewfrom": "from dpacpu,dpammanuvariant,dpamprocvariant"
    },
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DPACPU",
            "source": "DPACOMPUTER",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}