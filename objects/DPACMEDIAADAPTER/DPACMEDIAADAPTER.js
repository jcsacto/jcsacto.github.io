mos = {
    "objectName": "DPACMEDIAADAPTER",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Media Adapters - Converted Make/Model and Manufacturer",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "ADAPTERID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "DPAMEDIAADAPTER",
            "targetObject": "DPACMEDIAADAPTER",
            "parentKeys": "ADAPTERID",
            "targetKeys": "ADAPTERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Adapter Variant",
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
            "tableName": "DPAMEDIAADAPTER",
            "tableColumnName": "NODEID"
        },
        {
            "attributeName": "ADAPTERID",
            "required": true,
            "persistent": true,
            "title": "Adapter",
            "remarks": "Adapter id",
            "sameAsAttribute": "ADAPTERID",
            "sameAsObject": "DPAMEDIAADAPTER",
            "viewColumnName": "ADAPTERID",
            "tableName": "DPAMEDIAADAPTER",
            "tableColumnName": "ADAPTERID"
        },
        {
            "attributeName": "MEDIATYPE",
            "required": false,
            "persistent": true,
            "title": "Media Adapter Type",
            "remarks": "Type of media adapter, such as video card or sound card.",
            "sameAsAttribute": "MEDIATYPE",
            "sameAsObject": "DPAMEDIAADAPTER",
            "viewColumnName": "MEDIATYPE",
            "tableName": "DPAMEDIAADAPTER",
            "tableColumnName": "MEDIATYPE"
        },
        {
            "attributeName": "MEMORYTYPE",
            "required": false,
            "persistent": true,
            "title": "Memory Type",
            "remarks": "Type of memory on the media adapter (for example, DDR-SDRAM).",
            "sameAsAttribute": "MEMORYTYPE",
            "sameAsObject": "DPAMEDIAADAPTER",
            "viewColumnName": "MEMORYTYPE",
            "tableName": "DPAMEDIAADAPTER",
            "tableColumnName": "MEMORYTYPE"
        },
        {
            "attributeName": "RAMSIZE",
            "required": false,
            "persistent": true,
            "title": "RAM Size",
            "remarks": "Size of the random access memory (RAM) on the media adapter.",
            "sameAsAttribute": "RAMSIZE",
            "sameAsObject": "DPAMEDIAADAPTER",
            "viewColumnName": "RAMSIZE",
            "tableName": "DPAMEDIAADAPTER",
            "tableColumnName": "RAMSIZE"
        },
        {
            "attributeName": "RAMUNIT",
            "required": false,
            "persistent": true,
            "title": "RAM Unit",
            "remarks": "Unit of measurement for the RAM size, kilobytes (KB), megabytes (MB), or gigabytes (GB).",
            "sameAsAttribute": "RAMUNIT",
            "sameAsObject": "DPAMEDIAADAPTER",
            "viewColumnName": "RAMUNIT",
            "tableName": "DPAMEDIAADAPTER",
            "tableColumnName": "RAMUNIT"
        },
        {
            "attributeName": "BUSTYPE",
            "required": false,
            "persistent": true,
            "title": "Bus Type",
            "remarks": "Type of bus on the media adapter (for example, PCI, Peripheral Component Interconnect, or AGP, Accelerated Graphics Port).",
            "sameAsAttribute": "BUSTYPE",
            "sameAsObject": "DPAMEDIAADAPTER",
            "viewColumnName": "BUSTYPE",
            "tableName": "DPAMEDIAADAPTER",
            "tableColumnName": "BUSTYPE"
        },
        {
            "attributeName": "CHIPSET",
            "required": false,
            "persistent": true,
            "title": "Chipset",
            "remarks": "Chipset on the media adapter. The chipset is the collection of integrated circuits that enable the adapter to function.",
            "sameAsAttribute": "CHIPSET",
            "sameAsObject": "DPAMEDIAADAPTER",
            "viewColumnName": "CHIPSET",
            "tableName": "DPAMEDIAADAPTER",
            "tableColumnName": "CHIPSET"
        },
        {
            "attributeName": "SERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial number of the media adapter.",
            "sameAsAttribute": "SERIALNUMBER",
            "sameAsObject": "DPAMEDIAADAPTER",
            "viewColumnName": "SERIALNUMBER",
            "tableName": "DPAMEDIAADAPTER",
            "tableColumnName": "SERIALNUMBER"
        },
        {
            "attributeName": "ASSETTAG",
            "required": false,
            "persistent": true,
            "title": "Asset Tag",
            "remarks": "Asset tag of the media adapter.",
            "sameAsAttribute": "ASSETTAG",
            "sameAsObject": "DPAMEDIAADAPTER",
            "viewColumnName": "ASSETTAG",
            "tableName": "DPAMEDIAADAPTER",
            "tableColumnName": "ASSETTAG"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the media adapter (that is, video or sound card). This description contains relevant data that is not provided in other fields or that identifies the adapter in more detail. The data in this field is dependent on the discovery tool used to collect the adapter information; the field might be empty or might consist of several concatenated pieces of information.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "DPAMEDIAADAPTER",
            "viewColumnName": "DESCRIPTION",
            "tableName": "DPAMEDIAADAPTER",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Create Date",
            "sameAsAttribute": "CREATEDATE",
            "sameAsObject": "DPAMEDIAADAPTER",
            "viewColumnName": "CREATEDATE",
            "tableName": "DPAMEDIAADAPTER",
            "tableColumnName": "CREATEDATE"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change Date",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "DPAMEDIAADAPTER",
            "viewColumnName": "CHANGEDATE",
            "tableName": "DPAMEDIAADAPTER",
            "tableColumnName": "CHANGEDATE"
        },
        {
            "attributeName": "VRAMSIZE",
            "required": false,
            "persistent": false,
            "title": "RAM Size",
            "remarks": "Size of the random access memory (RAM) on the media adapter.",
            "sameAsAttribute": "VRAMSIZE",
            "sameAsObject": "DPAMEDIAADAPTER"
        },
        {
            "attributeName": "CMANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer of the media adapter.",
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
            "remarks": "Manufacturer",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "MANUFACTURER",
            "tableName": "DPAMEDIAADAPTER",
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
            "remarks": "Make or model of the media adapter. Sometimes the make or model field contains the name of the manufacturer of the adapter.",
            "sameAsAttribute": "ADAPTERNAME",
            "sameAsObject": "DPAMADPTVARIANT",
            "viewColumnName": "CMAKEMODEL",
            "tableName": "DPAMADPTVARIANT",
            "tableColumnName": "ADAPTERNAME"
        },
        {
            "attributeName": "MAKEMODEL",
            "required": true,
            "persistent": true,
            "title": "Make/Model",
            "remarks": "Make/Model",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "MAKEMODEL",
            "tableName": "DPAMEDIAADAPTER",
            "tableColumnName": "MAKEMODEL"
        },
        {
            "attributeName": "ADAPTERVARIANT",
            "required": true,
            "persistent": true,
            "title": "Adapter Variant",
            "remarks": "Adapter Variant",
            "sameAsAttribute": "ADAPTERVARIANT",
            "sameAsObject": "DPAMADPTVARIANT",
            "viewColumnName": "ADAPTERVARIANT",
            "tableName": "DPAMADPTVARIANT",
            "tableColumnName": "ADAPTERVARIANT"
        },
        {
            "attributeName": "DPAMADPTVARIANTID",
            "required": true,
            "persistent": true,
            "title": "Adapter Variant Id",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "DPAMADPTVARIANTID",
            "sameAsObject": "DPAMADPTVARIANT",
            "viewColumnName": "DPAMADPTVARIANTID",
            "tableName": "DPAMADPTVARIANT",
            "tableColumnName": "DPAMADPTVARIANTID"
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": "dpamediaadapter.manufacturer=dpammanuvariant.manufacturervar and dpamediaadapter.makemodel=dpamadptvariant.adaptervariant",
        "viewselect": "select dpamediaadapter.nodeid,dpamediaadapter.adapterid,dpamediaadapter.mediatype,dpamediaadapter.memorytype, dpamediaadapter.ramsize,dpamediaadapter.ramunit,dpamediaadapter.bustype,dpamediaadapter.chipset, dpamediaadapter.serialnumber,dpamediaadapter.assettag,dpamediaadapter.makemodel,dpamediaadapter.manufacturer, dpamediaadapter.description,dpamediaadapter.createdate,dpamediaadapter.changedate,dpamediaadapter.rowstamp, dpammanuvariant.manufacturername as cmanufacturer,dpammanuvariant.manufacturervar,dpammanuvariant.dpammanuvariantid, dpammanuvariant.rowstamp as rowstamp1, dpamadptvariant.adaptername as cmakemodel,dpamadptvariant.adaptervariant, dpamadptvariant.dpamadptvariantid,dpamadptvariant.rowstamp as rowstamp2",
        "viewfrom": "from dpamediaadapter,dpammanuvariant,dpamadptvariant"
    },
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DPAMEDIAADAPTER",
            "source": "DPACOMPUTER",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}