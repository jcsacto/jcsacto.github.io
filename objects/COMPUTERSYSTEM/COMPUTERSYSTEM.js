mos = {
    "objectName": "COMPUTERSYSTEM",
    "className": "psdi.app.dpldasset.ComputerSystemSet",
    "description": "Deployed Assets Computers",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": null,
    "primaryKeyColumns": [
        "NODEID",
        "NODENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "COMPUTERSYSTEM",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Computer Systems are Deployed Assets",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "COMPUTERSYSTEM",
            "parentKeys": "NODEID",
            "targetKeys": "TLOAMPARENTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Deployed Asset",
            "longDescription": null
        },
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
            "objectName": "ORGANIZATION",
            "targetObject": "COMPUTERSYSTEM",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "COMPUTERSYSTEM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
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
            "tableName": "DPACOMPUTER",
            "tableColumnName": "NODEID"
        },
        {
            "attributeName": "NODEID1",
            "required": true,
            "persistent": true,
            "title": "Node Id",
            "remarks": "Node Id",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "NODEID1",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "NODEID"
        },
        {
            "attributeName": "LOGONNAME",
            "required": false,
            "persistent": true,
            "title": "Logon",
            "remarks": "User name for the last known user logged on to the computer.",
            "sameAsAttribute": "LOGONNAME",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "LOGONNAME",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "LOGONNAME"
        },
        {
            "attributeName": "SWLASTSCANDATE",
            "required": false,
            "persistent": true,
            "title": "Software Last Scan Date",
            "remarks": "Last date that the computer was scanned for its software configuration.",
            "sameAsAttribute": "SWLASTSCANDATE",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "SWLASTSCANDATE",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "SWLASTSCANDATE"
        },
        {
            "attributeName": "SWDETECTIONTOOL",
            "required": false,
            "persistent": true,
            "title": "Software Detection Tool",
            "remarks": "Name and version of the software tool used to scan the computer for software information.",
            "sameAsAttribute": "SWDETECTIONTOOL",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "SWDETECTIONTOOL",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "SWDETECTIONTOOL"
        },
        {
            "attributeName": "SUPPORTSWMI",
            "required": true,
            "persistent": true,
            "title": "Supports WMI",
            "remarks": "Specifies whether the computer supports WMI (Windows Management Instrumentation) and has it enabled. If the check box is selected, the asset discovery tool determined that the computer supports WMI. If the check box is cleared, the asset discovery tool did not determine that the computer supports WMI. If the detection tool does not collect this data, the default value is used, and the check box is cleared.",
            "sameAsAttribute": "SUPPORTSWMI",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "SUPPORTSWMI",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "SUPPORTSWMI"
        },
        {
            "attributeName": "NODENAME",
            "required": true,
            "persistent": true,
            "title": "Computer",
            "remarks": "Name that identifies a computer or a partition. The data in this field is dependent on the discovery tool used to collect the information; the field might consist of several concatenated pieces of information. For computers, the value in this field is often the network name for the computer. For partitions, the value is typically the name assigned by the administrator when the partition was created.",
            "sameAsAttribute": "NODENAME",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "NODENAME",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "NODENAME"
        },
        {
            "attributeName": "DOMAINNAME",
            "required": true,
            "persistent": true,
            "title": "Domain",
            "remarks": "Network domain name.",
            "sameAsAttribute": "DOMAINNAME",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "DOMAINNAME",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "DOMAINNAME"
        },
        {
            "attributeName": "SERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial number of the computer.",
            "sameAsAttribute": "SERIALNUMBER",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "SERIALNUMBER",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "SERIALNUMBER"
        },
        {
            "attributeName": "ASSETTAG",
            "required": false,
            "persistent": true,
            "title": "Asset Tag",
            "remarks": "Asset tag of the computer.",
            "sameAsAttribute": "ASSETTAG",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "ASSETTAG",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "ASSETTAG"
        },
        {
            "attributeName": "MAKEMODEL",
            "required": false,
            "persistent": true,
            "title": "Make/Model",
            "remarks": "Make or model (product name) of the computer. Sometimes the make and model field contains the name of the manufacturer of the computer.",
            "sameAsAttribute": "MAKEMODEL",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "MAKEMODEL",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "MAKEMODEL"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the computer. This description contains relevant data that is not provided in other fields or that identifies the computer in more detail. The data in this field is dependent on the discovery tool used to collect the computer information; the field might be empty or might consist of several concatenated pieces of information.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "DESCRIPTION",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "HWLASTSCANDATE",
            "required": false,
            "persistent": true,
            "title": "Hardware Last Scan Date",
            "remarks": "Last date that the computer was scanned for its hardware configuration.",
            "sameAsAttribute": "HWLASTSCANDATE",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "HWLASTSCANDATE",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "HWLASTSCANDATE"
        },
        {
            "attributeName": "HWDETECTIONTOOL",
            "required": false,
            "persistent": true,
            "title": "Hardware Detection Tool",
            "remarks": "Name and version of the software tool used to scan the computer for hardware information.",
            "sameAsAttribute": "HWDETECTIONTOOL",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "HWDETECTIONTOOL",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "HWDETECTIONTOOL"
        },
        {
            "attributeName": "SUPPORTSSNMP",
            "required": true,
            "persistent": true,
            "title": "Supports SNMP",
            "remarks": "Specifies whether the computer supports SNMP (Simple Network Management Protocol) and has it enabled. If the check box is selected, the asset discovery tool determined that the computer supports SNMP. If the check box is cleared, the asset discovery tool did not determine that the computer supports SNMP. If the detection tool does not collect this data, the default value is used, and the check box is cleared.",
            "sameAsAttribute": "SUPPORTSSNMP",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "SUPPORTSSNMP",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "SUPPORTSSNMP"
        },
        {
            "attributeName": "SOURCEID",
            "required": false,
            "persistent": true,
            "title": "Source",
            "remarks": "Source Id",
            "sameAsAttribute": "SOURCEID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "SOURCEID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "SOURCEID"
        },
        {
            "attributeName": "SYSTEMROLE",
            "required": false,
            "persistent": true,
            "title": "Role",
            "remarks": "Role of the computer. The values displayed in this field are dependent on the values collected by the discovery tool used to obtain the deployed asset data. Roles for computers can include the following values: desktop, laptop, notebook, server, handheld, UNIX box, etc.",
            "sameAsAttribute": "SYSTEMROLE",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "SYSTEMROLE",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "SYSTEMROLE"
        },
        {
            "attributeName": "ASSETCLASS",
            "required": true,
            "persistent": true,
            "title": "Asset Class",
            "remarks": "Asset Class",
            "sameAsAttribute": "ASSETCLASS",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "ASSETCLASS",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "ASSETCLASS"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site to which the computer is assigned. An administrator must specify the value for this field when he creates a IBM Tivoli Integration Composer mapping; IBM Tivoli Integration Composer assigns the value to each computer when it executes the mapping.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE",
            "viewColumnName": "SITEID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "SITEID"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORGID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "ORGID"
        },
        {
            "attributeName": "MOBOCHIPSET",
            "required": false,
            "persistent": true,
            "title": "Chipset",
            "remarks": "Chipset on the computer's motherboard. The chipset is the collection of integrated circuits that enable the motherboard to function.",
            "sameAsAttribute": "MOBOCHIPSET",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "MOBOCHIPSET",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "MOBOCHIPSET"
        },
        {
            "attributeName": "RAMTYPE",
            "required": false,
            "persistent": true,
            "title": "RAM Type",
            "remarks": "Type of RAM (random access memory) installed on the computer, for example DRAM, SDRAM, SIMM, DIMM, etc. This field can also include the RAM speed.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "RAMTYPE",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "RAMTYPE"
        },
        {
            "attributeName": "RAMTOTALSLOTS",
            "required": false,
            "persistent": true,
            "title": "RAM Total Slots",
            "remarks": "Total number of RAM slots on the computer's motherboard.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "RAMTOTALSLOTS",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "RAMTOTALSLOTS"
        },
        {
            "attributeName": "RAMUNUSEDSLOTS",
            "required": false,
            "persistent": true,
            "title": "RAM Unused Slots",
            "remarks": "Number of unused RAM slots that are available on the computer's motherboard.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "RAMUNUSEDSLOTS",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "RAMUNUSEDSLOTS"
        },
        {
            "attributeName": "RAMDESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "RAM Description",
            "remarks": "Describes the RAM (random access memory) installed on the computer. This description contains relevant data that is not provided in other fields or that identifies the RAM in more detail. The data in this field is dependent on the discovery tool used to collect the RAM information; the field might be empty or might consist of several concatenated pieces of information.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "RAMDESCRIPTION",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "RAMDESCRIPTION"
        },
        {
            "attributeName": "BIOSNAME",
            "required": false,
            "persistent": true,
            "title": "BIOS",
            "remarks": "Name of the BIOS installed on the computer's motherboard.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "BIOSNAME",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "BIOSNAME"
        },
        {
            "attributeName": "BIOSVERSION",
            "required": false,
            "persistent": true,
            "title": "BIOS Version",
            "remarks": "Version of the BIOS installed on the computer's motherboard.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "BIOSVERSION",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "BIOSVERSION"
        },
        {
            "attributeName": "BIOSDATE",
            "required": false,
            "persistent": true,
            "title": "BIOS Date",
            "remarks": "Release date of the BIOS installed on the computer's motherboard.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "BIOSDATE",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "BIOSDATE"
        },
        {
            "attributeName": "BIOSPNP",
            "required": true,
            "persistent": true,
            "title": "PNP",
            "remarks": "Specifies whether the BIOS on the motherboard supports Plug and Play devices. If the check box is selected, the asset discovery tool determined that the BIOS supports Plug and Play. If the check box is cleared, the asset discovery tool did not determine that the BIOS supports Plug and Play. If the detection tool does not collect this data, the default value is used, and the check box is cleared. Plug and Play means that a device that can be added to the computer without configuration or setup routines.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "BIOSPNP",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "BIOSPNP"
        },
        {
            "attributeName": "MOBOSERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial number of the motherboard on the computer.",
            "sameAsAttribute": "MOBOSERIALNUMBER",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "MOBOSERIALNUMBER",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "MOBOSERIALNUMBER"
        },
        {
            "attributeName": "MOBOASSETTAG",
            "required": false,
            "persistent": true,
            "title": "Asset Tag",
            "remarks": "Asset tag of the motherboard on the computer.",
            "sameAsAttribute": "MOBOASSETTAG",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "MOBOASSETTAG",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "MOBOASSETTAG"
        },
        {
            "attributeName": "MOBOMAKEMODEL",
            "required": false,
            "persistent": true,
            "title": "Make/Model",
            "remarks": "Make or model (product name) of the motherboard on the computer. Sometimes the make or model field contains the name of the manufacturer of the motherboard.",
            "sameAsAttribute": "MOBOMAKEMODEL",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "MOBOMAKEMODEL",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "MOBOMAKEMODEL"
        },
        {
            "attributeName": "MOBOMANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer of the motherboard on the computer.",
            "sameAsAttribute": "MOBOMANUFACTURER",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "MOBOMANUFACTURER",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "MOBOMANUFACTURER"
        },
        {
            "attributeName": "MOBODESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Motherboard Description",
            "remarks": "Describes the motherboard. This description contains relevant data that is not provided in other fields or that identifies the motherboard in more detail. The data in this field is dependent on the discovery tool used to collect the motherboard information; the field might be empty or might consist of several concatenated pieces of information.",
            "sameAsAttribute": "MOBODESCRIPTION",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "MOBODESCRIPTION",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "MOBODESCRIPTION"
        },
        {
            "attributeName": "RAMSIZE",
            "required": false,
            "persistent": true,
            "title": "RAM Size",
            "remarks": "Size of the computer's RAM (random access memory).",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "RAMSIZE",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "RAMSIZE"
        },
        {
            "attributeName": "RAMUNIT",
            "required": false,
            "persistent": true,
            "title": "RAM Unit",
            "remarks": "Unit of measurement for the computer's RAM (random access memory), in kilobytes (KB), megabytes (MB), or gigabytes (GB).",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "RAMUNIT",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "RAMUNIT"
        },
        {
            "attributeName": "SMBIOS",
            "required": true,
            "persistent": true,
            "title": "SMBIOS",
            "remarks": "Specifies whether the BIOS on the motherboard supports SMBIOS (System Management BIOS) specification standards. If the check box is selected, the asset discovery tool determined that the BIOS supports SMBIOS. If the check box is cleared, the asset discovery tool did not determine that the BIOS supports SNMP. If the detection tool does not collect this data, the default value is used, and the check box is cleared.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "SMBIOS",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "SMBIOS"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Create Date",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "CREATEDATE",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "CREATEDATE"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "CHANGEDATE",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "CHANGEDATE"
        },
        {
            "attributeName": "VRAMSIZE",
            "required": false,
            "persistent": false,
            "title": "RAM Size",
            "remarks": "Size of the computer's RAM (random access memory), measured in kilobytes (KB), megabytes (MB), or gigabytes (GB).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDATE1",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Create Date",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "CREATEDATE1",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "CREATEDATE"
        },
        {
            "attributeName": "CHANGEDATE1",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "CHANGEDATE1",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "CHANGEDATE"
        },
        {
            "attributeName": "CMANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Name of manufacturer of the computer.",
            "sameAsAttribute": "MANUFACTURERNAME",
            "sameAsObject": "DPAMMANUVARIANT",
            "viewColumnName": "CMANUFACTURER",
            "tableName": "DPAMMANUVARIANT",
            "tableColumnName": "MANUFACTURERNAME"
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
            "attributeName": "GUID",
            "required": false,
            "persistent": true,
            "title": "GUID",
            "remarks": "Actual CI's GUID",
            "sameAsAttribute": "GUID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "GUID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "GUID"
        },
        {
            "attributeName": "CAPACITYMODEL1",
            "required": false,
            "persistent": true,
            "title": "Capacity Model",
            "remarks": "Model based on actual capacity",
            "sameAsAttribute": "CAPACITYMODEL1",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "CAPACITYMODEL1",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "CAPACITYMODEL1"
        },
        {
            "attributeName": "MSUS1",
            "required": false,
            "persistent": true,
            "title": "MSU Capacity",
            "remarks": "Current capacity in MSUs",
            "sameAsAttribute": "MSUS1",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "MSUS1",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "MSUS1"
        },
        {
            "attributeName": "MIPS1",
            "required": false,
            "persistent": true,
            "title": "MIPS Capacity",
            "remarks": "Current capacity in MIPS",
            "sameAsAttribute": "MIPS1",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "MIPS1",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "MIPS1"
        },
        {
            "attributeName": "NUMCPUCONFIG1",
            "required": false,
            "persistent": true,
            "title": "Number of Configured Processors",
            "remarks": "Number of configured processors",
            "sameAsAttribute": "NUMCPUCONFIG1",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "NUMCPUCONFIG1",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "NUMCPUCONFIG1"
        },
        {
            "attributeName": "NUMCPUTOTAL1",
            "required": false,
            "persistent": true,
            "title": "Total Processors",
            "remarks": "Total number of processors",
            "sameAsAttribute": "NUMCPUTOTAL1",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "NUMCPUTOTAL1",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "NUMCPUTOTAL1"
        },
        {
            "attributeName": "PLANTCODE1",
            "required": false,
            "persistent": true,
            "title": "Manufacturing Plant",
            "remarks": "Manufacturing Plant",
            "sameAsAttribute": "PLANTCODE1",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "PLANTCODE1",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "PLANTCODE1"
        },
        {
            "attributeName": "TLOAMPARENTID",
            "required": false,
            "persistent": true,
            "title": "Parent Node Id",
            "remarks": "Parent Node Id",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMPARENTID",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "TLOAMPARENTID"
        },
        {
            "attributeName": "TLOAMPLATFORMBASE",
            "required": false,
            "persistent": true,
            "title": "Platform",
            "remarks": "Indicates if the computer is distributed or mainframe.",
            "sameAsAttribute": "TLOAMPLATFORMBASE",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "TLOAMPLATFORMBASE",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "TLOAMPLATFORMBASE"
        },
        {
            "attributeName": "TLOAMPARENTNAME",
            "required": false,
            "persistent": false,
            "title": "Parent",
            "remarks": "Parent computer or partition node name for the selected computer record.",
            "sameAsAttribute": "TLOAMPARENTNAME",
            "sameAsObject": "DPACOMPUTER"
        },
        {
            "attributeName": "TLOAMISPROMOTED",
            "required": false,
            "persistent": true,
            "title": "Promoted?",
            "remarks": "Indicates whether or not the Computer was previously promoted using the promotion process.",
            "sameAsAttribute": "TLOAMISPROMOTED",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMISPROMOTED",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMISPROMOTED"
        },
        {
            "attributeName": "TLOAMHWTYPE",
            "required": false,
            "persistent": true,
            "title": "Hardware Type",
            "remarks": "Indicates the type of hardware",
            "sameAsAttribute": "TLOAMHWTYPE",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMHWTYPE",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMHWTYPE"
        },
        {
            "attributeName": "TLOAMSTATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Indicates whether or not the computer is currently active.",
            "sameAsAttribute": "TLOAMSTATUS",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMSTATUS",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMSTATUS"
        },
        {
            "attributeName": "TLOAMNRSGUID",
            "required": false,
            "persistent": true,
            "title": "NRS GUID",
            "remarks": "Naming and Reconciliation Service (NRS) GUID",
            "sameAsAttribute": "TLOAMNRSGUID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSGUID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSGUID"
        },
        {
            "attributeName": "TLOAMNRSSIGNATURE",
            "required": false,
            "persistent": true,
            "title": "NRS Signature",
            "remarks": "The primary IP address, or if there is no IP stack then SNA_HOST",
            "sameAsAttribute": "TLOAMNRSSIGNATURE",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSSIGNATURE",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSSIGNATURE"
        },
        {
            "attributeName": "TLOAMNRSVMID",
            "required": false,
            "persistent": true,
            "title": "NRS VMID",
            "remarks": "The VMID is a unique identifier for the virtual machine",
            "sameAsAttribute": "TLOAMNRSVMID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSVMID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSVMID"
        },
        {
            "attributeName": "TLOAMNRSMANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "NRS Manufacturer",
            "remarks": "Manufacturer",
            "sameAsAttribute": "TLOAMNRSMANUFACTURER",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSMANUFACTURER",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSMANUFACTURER"
        },
        {
            "attributeName": "TLOAMNRSMODEL",
            "required": false,
            "persistent": true,
            "title": "NRS Make/Model",
            "remarks": "Make/Model",
            "sameAsAttribute": "TLOAMNRSMODEL",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSMODEL",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSMODEL"
        },
        {
            "attributeName": "TLOAMNRSSERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "NRS Serial Number",
            "remarks": "Serial Number",
            "sameAsAttribute": "TLOAMNRSSERIALNUMBER",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSSERIALNUMBER",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSSERIALNUMBER"
        },
        {
            "attributeName": "TLOAMNRSSYSTEMBOARDUUID",
            "required": false,
            "persistent": true,
            "title": "NRS System Board UUID",
            "remarks": "System Board UUID",
            "sameAsAttribute": "TLOAMNRSSYSTEMBOARDUUID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSSYSTEMBOARDUUID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSSYSTEMBOARDUUID"
        },
        {
            "attributeName": "TLOAMNRSPRIMARYMACADDRESS",
            "required": false,
            "persistent": true,
            "title": "NRS MAC Address",
            "remarks": "Primary MAC address",
            "sameAsAttribute": "TLOAMNRSPRIMARYMACADDRESS",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSPRIMARYMACADDRESS",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSPRIMARYMACADDRESS"
        },
        {
            "attributeName": "TLOAMNRSHOSTSYSTEM",
            "required": false,
            "persistent": true,
            "title": "NRS Host System",
            "remarks": "Host System",
            "sameAsAttribute": "TLOAMNRSHOSTSYSTEM",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSHOSTSYSTEM",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSHOSTSYSTEM"
        },
        {
            "attributeName": "TLOAMNRSNAME",
            "required": false,
            "persistent": true,
            "title": "NRS Name",
            "remarks": "Name",
            "sameAsAttribute": "TLOAMNRSNAME",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSNAME",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSNAME"
        },
        {
            "attributeName": "TLOAMHASH",
            "required": false,
            "persistent": true,
            "title": "Partition ID",
            "remarks": "The unique ID which is used to identify a partition from a discovery perspective.  This field can be used by reconciliation to link and audit authorized partitions.",
            "sameAsAttribute": "TLOAMHASH",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMHASH",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMHASH"
        },
        {
            "attributeName": "TLOAMNRSMANAGEDSYSTEMNAME",
            "required": false,
            "persistent": true,
            "title": "NRS Managed System Name",
            "remarks": "The name used by the OMEGAMON and IBM Tivoli Monitoring (ITM) products to uniquely identify the agent that manages a specific resource. This agent simultaneously serves as a surrogate for the specific resource under management.",
            "sameAsAttribute": "TLOAMNRSMANAGEDSYSTEMNAME",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSMANAGEDSYSTEMNAME",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSMANAGEDSYSTEMNAME"
        },
        {
            "attributeName": "HASCHILDREN",
            "required": true,
            "persistent": false,
            "title": "Has Children",
            "remarks": "Does this node have child nodes?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASPARENT",
            "required": true,
            "persistent": false,
            "title": "Has Parent",
            "remarks": "Does this node have a parent node?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": false,
            "title": "Object",
            "remarks": "The name of this object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "NUMCORETOTAL",
            "required": false,
            "persistent": true,
            "title": "Total Cores",
            "remarks": "Total number of cores for the computer",
            "sameAsAttribute": "NUMCORETOTAL",
            "sameAsObject": "DPACOMPUTER",
            "viewColumnName": "NUMCORETOTAL",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "NUMCORETOTAL"
        },
        {
            "attributeName": "TLOAMNRSUUID",
            "required": false,
            "persistent": true,
            "title": "NRS Virtual Machine UUID",
            "remarks": "UUID of a virtual machine",
            "sameAsAttribute": "TLOAMNRSUUID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSUUID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSUUID"
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": "dpacomputer.nodeid=deployedasset.nodeid and deployedasset.manufacturer=dpammanuvariant.manufacturervar",
        "viewselect": "select deployedasset.assetclass, deployedasset.assettag, dpacomputer.biosdate, dpacomputer.biosname, dpacomputer.biospnp, dpacomputer.biosversion,dpacomputer.changedate, deployedasset.changedate as changedate1, dpacomputer.createdate, deployedasset.createdate as createdate1, deployedasset.description,deployedasset.domainname, deployedasset.guid, deployedasset.hwdetectiontool, deployedasset.hwlastscandate, dpacomputer.logonname, deployedasset.makemodel,deployedasset.manufacturer, dpacomputer.moboassettag, dpacomputer.mobochipset, dpacomputer.mobodescription, dpacomputer.mobomakemodel,dpacomputer.mobomanufacturer, dpacomputer.moboserialnumber, dpacomputer.nodeid, deployedasset.nodeid as nodeid1, deployedasset.nodename, deployedasset.orgid, dpacomputer.ramdescription, dpacomputer.ramsize, dpacomputer.ramtotalslots, dpacomputer.ramtype,dpacomputer.ramunit, dpacomputer.ramunusedslots, dpacomputer.rowstamp, deployedasset.rowstamp as rowstamp1, deployedasset.serialnumber, deployedasset.siteid, dpacomputer.smbios, deployedasset.sourceid, deployedasset.supportssnmp, dpacomputer.supportswmi,dpacomputer.swdetectiontool, dpacomputer.swlastscandate, deployedasset.systemrole, dpacomputer.plantcode1, dpacomputer.msus1, dpacomputer.mips1, dpacomputer.capacitymodel1, dpacomputer.numcpuconfig1, dpacomputer.numcputotal1, dpammanuvariant.manufacturername as cmanufacturer, dpammanuvariant.manufacturervar,dpammanuvariant.dpammanuvariantid, dpammanuvariant.rowstamp as rowstamp2,deployedasset.tloamnrsguid, deployedasset.tloamnrssignature, deployedasset.tloamnrsvmid, deployedasset.tloamnrsmanufacturer, deployedasset.tloamnrsmodel, deployedasset.tloamnrsserialnumber, deployedasset.tloamnrssystemboarduuid, deployedasset.tloamnrsprimarymacaddress, deployedasset.tloamnrshostsystem, deployedasset.tloamnrsname, deployedasset.tloamispromoted, deployedasset.tloamnrsmanagedsystemname,deployedasset.tloamhwtype, deployedasset.tloamstatus,dpacomputer.tloamparentid, deployedasset.tloamhash, dpacomputer.tloamplatformbase,dpacomputer.numcoretotal,deployedasset.tloamnrsuuid",
        "viewfrom": "from deployedasset, dpacomputer,dpammanuvariant"
    },
    "outgoingRelationships": [
        {
            "name": "DPLDASSET_ACTCI",
            "target": "ACTCI",
            "remarks": "Relationship to the ACTCI object, used to find the ACTCI record for the dpldasset based on the guid.",
            "whereClause": "guid=:guid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TLOAMCHILDCOMPUTER",
            "target": "COMPUTERSYSTEM",
            "remarks": "Relationship to the computersystem view, used to find children for a given node. (computersystem.nodeid = computersystem.tloamparentid). This resulting set will contain zero or more objects.",
            "whereClause": "tloamparentid = :nodeid",
            "cardinality": null
        },
        {
            "name": "TLOAMPARENTCOMPUTER",
            "target": "COMPUTERSYSTEM",
            "remarks": "Relationship to the computersystem view, used to find the parent for a given computer. (computersystem.nodeid = computersystem.tloamparentid). This resulting set will contain zero or one object.",
            "whereClause": "nodeid = :tloamparentid",
            "cardinality": null
        },
        {
            "name": "TLOAMTOPCOMPUTER",
            "target": "COMPUTERSYSTEM",
            "remarks": "Selects the node id to be equal to the ancestor from the record with the deepest hierarchy where the child is nodeid of the relatonship's parent. Does not allow the hierarchy to be 0 levels deep",
            "whereClause": "nodeid = (select a2.ancestor from tloamdpaancestor a2 where (a2.hierarchylevels=(select max(tloamdpaancestor.hierarchylevels) from tloamdpaancestor where (tloamdpaancestor.nodeid=a2.nodeid)) and a2.hierarchylevels>0 and a2.nodeid=:nodeid))",
            "cardinality": null
        },
        {
            "name": "DDPACOMMDEVICE",
            "target": "DPACOMMDEVICE",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DDPACPU",
            "target": "DPACPU",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TLOAMFILTERSW",
            "target": "DPACSOFTWARE",
            "remarks": "Relationship between Computersystem and dpacsoftware",
            "whereClause": "nodeid=:nodeid and compliancesetting not in(select value from synonymdomain where domainid = 'COMPLIANCESETTING' and maxvalue = 'Ignored')",
            "cardinality": null
        },
        {
            "name": "DDPADISK",
            "target": "DPADISK",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DDPADISPLAY",
            "target": "DPADISPLAY",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DDPAFILE",
            "target": "DPAFILE",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DDPAIMAGEDEVICE",
            "target": "DPAIMAGEDEVICE",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DDPAIPX",
            "target": "DPAIPX",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DDPALOGICALDRIVE",
            "target": "DPALOGICALDRIVE",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DDPAMEDIAADAPTER",
            "target": "DPAMEDIAADAPTER",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DDPANETADAPTER",
            "target": "DPANETADAPTER",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DDPAOS",
            "target": "DPAOS",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DDPASOFTWARE",
            "target": "DPASOFTWARE",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DDPASWSUITE",
            "target": "DPASWSUITE",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DDPATCPIP",
            "target": "DPATCPIP",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DDPAUSERINFO",
            "target": "DPAUSERINFO",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TLOAMRECONRESULT",
            "target": "RECONASSETRESULT",
            "remarks": "Link between COMPUTERSYSTEM and RECONRESULT",
            "whereClause": "nodeid=:nodeid and code not in ('C3', 'C4','C1','C2') and recontype in (select maxvalue from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select maxvalue from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": null
        },
        {
            "name": "TLOAMRECONLINK",
            "target": "RECONLINK",
            "remarks": "Link between COMPUTERSYSTEM and RECONLINK",
            "whereClause": "nodeid=:nodeid and recontype in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": null
        },
        {
            "name": "RECONLINK",
            "target": "RECONLINK",
            "remarks": "delete rerefenced reconciliation link results",
            "whereClause": "nodeid=:nodeid and recontype in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SWUSGQUERY",
            "target": "SWUSGQUERY",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTDPAANCESTOR",
            "target": "TLOAMDPAANCESTOR",
            "remarks": "Relationship to the deployed asset ancestor, used to find all parent relationship record in hierarchy tree.",
            "whereClause": "nodeid = :nodeid",
            "cardinality": null
        },
        {
            "name": "TLOAMDPADRILLDOWN",
            "target": "TLOAMDPADRILLDOWN",
            "remarks": "Relationship from the Computer System to the non-persistent Drilldown object. (No where clause). The resulting set will contain zero objects. This relationship is used when the Drilldown page is launched from the Computer application.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "TLOAMPRMDFLT",
            "target": "TLOAMPRMDFLT",
            "remarks": "computer system default",
            "whereClause": "defaultname='DO_NOT_CHANGE_THIS_DPLDASSET'",
            "cardinality": null
        },
        {
            "name": "TLOAMPRMVALUE",
            "target": "TLOAMPRMVALUE",
            "remarks": "non-persistent relationship",
            "whereClause": "1=1",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "TLOAMCHILDCOMPUTER",
            "source": "COMPUTERSYSTEM",
            "remarks": "Relationship to the computersystem view, used to find children for a given node. (computersystem.nodeid = computersystem.tloamparentid). This resulting set will contain zero or more objects.",
            "whereClause": "tloamparentid = :nodeid",
            "cardinality": null
        },
        {
            "name": "TLOAMPARENTCOMPUTER",
            "source": "COMPUTERSYSTEM",
            "remarks": "Relationship to the computersystem view, used to find the parent for a given computer. (computersystem.nodeid = computersystem.tloamparentid). This resulting set will contain zero or one object.",
            "whereClause": "nodeid = :tloamparentid",
            "cardinality": null
        },
        {
            "name": "TLOAMTOPCOMPUTER",
            "source": "COMPUTERSYSTEM",
            "remarks": "Selects the node id to be equal to the ancestor from the record with the deepest hierarchy where the child is nodeid of the relatonship's parent. Does not allow the hierarchy to be 0 levels deep",
            "whereClause": "nodeid = (select a2.ancestor from tloamdpaancestor a2 where (a2.hierarchylevels=(select max(tloamdpaancestor.hierarchylevels) from tloamdpaancestor where (tloamdpaancestor.nodeid=a2.nodeid)) and a2.hierarchylevels>0 and a2.nodeid=:nodeid))",
            "cardinality": null
        },
        {
            "name": "TLOAMCOMPUTERNODEID",
            "source": "TLOAMDPADRILLDOWN",
            "remarks": "Relationship to the Computer System, used to find the Computer System record for a given NodeId. (tloamdpadrilldown.nodeid = computersystem.nodeid). The resulting set will contain zero or 1 objects.",
            "whereClause": "nodeid=:nodeid",
            "cardinality": null
        },
        {
            "name": "COMPUTERSYSTEM",
            "source": "TLOAMPROMOTE",
            "remarks": "Relationship from Computer Promotion Records to Computer Systems. Returns one and only one record.",
            "whereClause": "nodeid = :nodeid",
            "cardinality": null
        },
        {
            "name": "PARENTCOMPUTER",
            "source": "TLOAMPROMOTE",
            "remarks": "Relationship from Computer Promotion Records to parent Computer Systems. Returns none or one record.",
            "whereClause": "nodeid = :tloamparentid",
            "cardinality": null
        }
    ]
}