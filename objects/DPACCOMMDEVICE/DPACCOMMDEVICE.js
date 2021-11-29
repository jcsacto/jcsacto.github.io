mos = {
    "objectName": "DPACCOMMDEVICE",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Communication Devices",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "DEVICEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "DPACOMMDEVICE",
            "targetObject": "DPACCOMMDEVICE",
            "parentKeys": "DEVICEID",
            "targetKeys": "DEVICEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Communication Device",
            "longDescription": null
        },
        {
            "objectName": "DPAMADPTVARIANT",
            "targetObject": "DPACCOMMDEVICE",
            "parentKeys": "DPAMADPTVARIANTID",
            "targetKeys": "DPAMADPTVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMADPTVARIANT",
            "targetObject": "DPACCOMMDEVICE",
            "parentKeys": "DPAMADPTVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Adapter Conversion Variant",
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
            "tableName": "DPACOMMDEVICE",
            "tableColumnName": "NODEID"
        },
        {
            "attributeName": "DEVICEID",
            "required": true,
            "persistent": true,
            "title": "Device Id",
            "remarks": "Device Id",
            "sameAsAttribute": "DEVICEID",
            "sameAsObject": "DPACOMMDEVICE",
            "viewColumnName": "DEVICEID",
            "tableName": "DPACOMMDEVICE",
            "tableColumnName": "DEVICEID"
        },
        {
            "attributeName": "DEVICETYPE",
            "required": false,
            "persistent": true,
            "title": "Device Type",
            "remarks": "Internal device name within the system, such as COM3.",
            "sameAsAttribute": "DEVICETYPE",
            "sameAsObject": "DPACOMMDEVICE",
            "viewColumnName": "DEVICETYPE",
            "tableName": "DPACOMMDEVICE",
            "tableColumnName": "DEVICETYPE"
        },
        {
            "attributeName": "DEVICENAME",
            "required": false,
            "persistent": true,
            "title": "Device",
            "remarks": "Type of communication device. This is usually a modem; however the field can also contain additional information, such as \"\"internal,\"\" \"\"external,\"\" or \"\"fax modem,\"\" etc.",
            "sameAsAttribute": "DEVICENAME",
            "sameAsObject": "DPACOMMDEVICE",
            "viewColumnName": "DEVICENAME",
            "tableName": "DPACOMMDEVICE",
            "tableColumnName": "DEVICENAME"
        },
        {
            "attributeName": "BANDWIDTH",
            "required": false,
            "persistent": true,
            "title": "Bandwidth",
            "remarks": "Bandwidth of the communication device. Bandwidth is the amount of data that can be transmitted in a given amount of time, measured in bits or bytes per second.",
            "sameAsAttribute": "BANDWIDTH",
            "sameAsObject": "DPACOMMDEVICE",
            "viewColumnName": "BANDWIDTH",
            "tableName": "DPACOMMDEVICE",
            "tableColumnName": "BANDWIDTH"
        },
        {
            "attributeName": "BANDWIDTHUNIT",
            "required": false,
            "persistent": true,
            "title": "Bandwidth Unit",
            "remarks": "Unit of measurement for the bandwidth",
            "sameAsAttribute": "BANDWIDTHUNIT",
            "sameAsObject": "DPACOMMDEVICE",
            "viewColumnName": "BANDWIDTHUNIT",
            "tableName": "DPACOMMDEVICE",
            "tableColumnName": "BANDWIDTHUNIT"
        },
        {
            "attributeName": "SERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial number of the communication device.",
            "sameAsAttribute": "SERIALNUMBER",
            "sameAsObject": "DPACOMMDEVICE",
            "viewColumnName": "SERIALNUMBER",
            "tableName": "DPACOMMDEVICE",
            "tableColumnName": "SERIALNUMBER"
        },
        {
            "attributeName": "ASSETTAG",
            "required": false,
            "persistent": true,
            "title": "Asset Tag",
            "remarks": "Asset tag of the communication device.",
            "sameAsAttribute": "ASSETTAG",
            "sameAsObject": "DPACOMMDEVICE",
            "viewColumnName": "ASSETTAG",
            "tableName": "DPACOMMDEVICE",
            "tableColumnName": "ASSETTAG"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the communication device. This description contains relevant data that is not provided in other fields or that identifies the device in more detail. The data in this field is dependent on the discovery tool used to collect the device information; the field might be empty or might consist of several concatenated pieces of information.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "DPACOMMDEVICE",
            "viewColumnName": "DESCRIPTION",
            "tableName": "DPACOMMDEVICE",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Create Date",
            "sameAsAttribute": "CREATEDATE",
            "sameAsObject": "DPACOMMDEVICE",
            "viewColumnName": "CREATEDATE",
            "tableName": "DPACOMMDEVICE",
            "tableColumnName": "CREATEDATE"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change Date",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "DPACOMMDEVICE",
            "viewColumnName": "CHANGEDATE",
            "tableName": "DPACOMMDEVICE",
            "tableColumnName": "CHANGEDATE"
        },
        {
            "attributeName": "VBANDWIDTH",
            "required": false,
            "persistent": false,
            "title": "Bandwidth",
            "remarks": "Bandwidth of the communication device. Bandwidth is the amount of data that can be transmitted in a given amount of time, measured in bits or bytes per second.",
            "sameAsAttribute": "VBANDWIDTH",
            "sameAsObject": "DPACOMMDEVICE"
        },
        {
            "attributeName": "CMANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer of the communication device.",
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
            "tableName": "DPACOMMDEVICE",
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
            "remarks": "Make or model of the communication device. Sometimes the make or model field contains the name of the manufacturer of the device.",
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
            "tableName": "DPACOMMDEVICE",
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
        "viewwhere": "dpacommdevice.manufacturer=dpammanuvariant.manufacturervar and dpacommdevice.makemodel=dpamadptvariant.adaptervariant",
        "viewselect": "select dpacommdevice.nodeid,dpacommdevice.deviceid,dpacommdevice.devicetype,dpacommdevice.devicename, dpacommdevice.bandwidth,dpacommdevice.bandwidthunit,dpacommdevice.serialnumber,dpacommdevice.assettag, dpacommdevice.makemodel,dpacommdevice.manufacturer,dpacommdevice.description,dpacommdevice.createdate, dpacommdevice.changedate,dpacommdevice.rowstamp, dpammanuvariant.manufacturername as cmanufacturer,dpammanuvariant.manufacturervar,dpammanuvariant.dpammanuvariantid, dpammanuvariant.rowstamp as rowstamp1, dpamadptvariant.adaptername as cmakemodel,dpamadptvariant.adaptervariant, dpamadptvariant.dpamadptvariantid,dpamadptvariant.rowstamp as rowstamp2",
        "viewfrom": "from dpacommdevice,dpammanuvariant,dpamadptvariant"
    },
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DPACOMMDEVICE",
            "source": "DPACOMPUTER",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}