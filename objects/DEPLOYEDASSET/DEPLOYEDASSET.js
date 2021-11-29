mos = {
    "objectName": "DEPLOYEDASSET",
    "className": "psdi.app.dpldasset.DeployedAssetSet",
    "description": "Deployed Assets",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "NODEID",
    "primaryKeyColumns": [
        "NODEID"
    ],
    "logicalRelationships": [
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
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACCOMMDEVICE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
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
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACDISK",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACDISPLAY",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACIMAGEDEVICE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACMEDIAADAPTER",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACNETADAPTER",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACNETDEVCARD",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACOMMDEVICE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Communication Device",
            "longDescription": null
        },
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
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACOS",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACPU",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Operating System",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACSOFTWARE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACSOFTWARE",
            "parentKeys": "SOFTWAREID",
            "targetKeys": "SOFTWAREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Software",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACSWSUITE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPADISK",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Computer Disks, Deployed Assets",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPADISPLAY",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Display Adapter",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPAFILE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed File",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPAIMAGEDEVICE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Image Device",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPAIPX",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed IPX address",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPALOGICALDRIVE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Logical Drive",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPAMEDIAADAPTER",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Media Adapter",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPANETADAPTER",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Net Adapter",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPANETDEVCARD",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Network Device Card",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPANETDEVICE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Network Device",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPANETPRINTER",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Network Printer",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPAOS",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Operating System",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPASOFTWARE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Software",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPASWSUITE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Software Suite",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPATCPIP",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed TCPIP",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPAUSERINFO",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed User Information",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "NETDEVICE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Network Device",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "NETPRINTER",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Network Printer",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "TAMITDPAHWM",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "High Watermark Data Table",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "TLOAMDPAANCESTOR",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Software Ancestor Table",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "TLOAMDPAHWM",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "TLOAM Deployed Computer History",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "TLOAMDPAPARENT",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Child Records",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "TLOAMDPAPARENT",
            "parentKeys": "NODEID",
            "targetKeys": "TLOAMPARENTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Records",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "TLOAMPROMOTE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "TLOAMPROMOTE",
            "parentKeys": "NODEID",
            "targetKeys": "TLOAMPARENTID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "DEPLOYEDASSET",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "DEPLOYEDASSET",
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
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NODENAME",
            "required": true,
            "persistent": true,
            "title": "Node",
            "remarks": "Node Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOMAINNAME",
            "required": true,
            "persistent": true,
            "title": "Domain",
            "remarks": "Domain Name",
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
            "required": false,
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
            "attributeName": "HWLASTSCANDATE",
            "required": false,
            "persistent": true,
            "title": "Hardware Last Scan Date",
            "remarks": "Hw Last Scan Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HWDETECTIONTOOL",
            "required": false,
            "persistent": true,
            "title": "Hardware Detection Tool",
            "remarks": "Hw Detection Tool",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUPPORTSSNMP",
            "required": true,
            "persistent": true,
            "title": "Supports SNMP",
            "remarks": "Supports SNMP",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEID",
            "required": false,
            "persistent": true,
            "title": "Source",
            "remarks": "Source Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SYSTEMROLE",
            "required": false,
            "persistent": true,
            "title": "Role",
            "remarks": "System Role",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETCLASS",
            "required": true,
            "persistent": true,
            "title": "Asset Class",
            "remarks": "Asset Class",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Id",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
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
            "attributeName": "GUID",
            "required": false,
            "persistent": true,
            "title": "GUID",
            "remarks": "Actual CI's GUID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMISPROMOTED",
            "required": false,
            "persistent": true,
            "title": "Promoted?",
            "remarks": "Indicates whether or not the Deployed Asset was previously promoted using the promotion process.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMHWTYPE",
            "required": false,
            "persistent": true,
            "title": "Hardware Type",
            "remarks": "Indicates the type of hardware",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMSTATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Indicates whether or not the deployed assets is currently active.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMNRSGUID",
            "required": false,
            "persistent": true,
            "title": "NRS GUID",
            "remarks": "Naming and Reconciliation Service (NRS) GUID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMNRSSIGNATURE",
            "required": false,
            "persistent": true,
            "title": "NRS Signature",
            "remarks": "The primary IP address, or if there is no IP stack then SNA_HOST",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMNRSVMID",
            "required": false,
            "persistent": true,
            "title": "NRS VMID",
            "remarks": "The VMID is a unique identifier for the virtual machine",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMNRSMANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "NRS Manufacturer",
            "remarks": "Manufacturer",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMNRSMODEL",
            "required": false,
            "persistent": true,
            "title": "NRS Make/Model",
            "remarks": "Make/Model",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMNRSSERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "NRS Serial Number",
            "remarks": "Serial Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMNRSSYSTEMBOARDUUID",
            "required": false,
            "persistent": true,
            "title": "NRS System Board UUID",
            "remarks": "System Board UUID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMNRSPRIMARYMACADDRESS",
            "required": false,
            "persistent": true,
            "title": "NRS MAC Address",
            "remarks": "Primary MAC address",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMNRSHOSTSYSTEM",
            "required": false,
            "persistent": true,
            "title": "NRS Host System",
            "remarks": "Host System",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMNRSNAME",
            "required": false,
            "persistent": true,
            "title": "NRS Name",
            "remarks": "Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMHASH",
            "required": false,
            "persistent": true,
            "title": "Partition ID",
            "remarks": "The unique ID which is used to identify a partition from a discovery perspective.  This field can be used by reconciliation to link and audit authorized partitions.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMNRSMANAGEDSYSTEMNAME",
            "required": false,
            "persistent": true,
            "title": "NRS Managed System Name",
            "remarks": "The name used by the OMEGAMON and IBM Tivoli Monitoring (ITM) products to uniquely identify the agent that manages a specific resource. This agent simultaneously serves as a surrogate for the specific resource under management.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSPCUSTOMER",
            "required": false,
            "persistent": true,
            "title": "Customer",
            "remarks": "Customer",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMNRSUUID",
            "required": false,
            "persistent": true,
            "title": "NRS Virtual Machine UUID",
            "remarks": "UUID of a virtual machine",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "RECONLINK",
            "target": "RECONLINK",
            "remarks": "delete rerefenced reconciliation link results",
            "whereClause": "nodeid=:nodeid and recontype in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DEPLOYEDASSET",
            "source": "ASSET",
            "remarks": "Relationship to the DEPLOYEDASSET table, used to find the DEPLOYEDASSETs for the asset. The resulting set will contain zero or one object.",
            "whereClause": "nodeid in (select nodeid from reconlink where assetid=:assetid) ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERA",
            "source": "DPAMMANUVARIANT",
            "remarks": "Find the deployed assets that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONASSETLINK_DPA",
            "source": "RECONASSETLINK",
            "remarks": "Relationship to the DEPLOYEDASSET object, used to find the DEPLOYEDASSET record for the reconassetlink based on the nodeid.",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEPLOYEDASSET",
            "source": "RECONASSETRESULT",
            "remarks": "Relationship to the DEPLOYEDASSET object, used to find a record for the reconciresult based on node ID.",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINK_DEPLOYEDASSET",
            "source": "RECONLINK",
            "remarks": "Deployed Asset for a Reconciliation Link",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEPLOYEDASSET",
            "source": "RECONMULTILINK",
            "remarks": "Relationship from reconmultilink to deployedasset",
            "whereClause": "nodeid=:nodeid",
            "cardinality": null
        },
        {
            "name": "DEPLOYEDASSET",
            "source": "TLOAMPROMOTE",
            "remarks": "Relationship from Asset Promotion Records to Deployed Asset. Returns one and only one record.",
            "whereClause": "nodeid = :nodeid",
            "cardinality": null
        }
    ]
}