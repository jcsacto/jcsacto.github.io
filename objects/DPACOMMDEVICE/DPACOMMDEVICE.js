mos = {
    "objectName": "DPACOMMDEVICE",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Communication Devices",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DEVICEID",
    "primaryKeyColumns": [
        "DEVICEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DPACOMMDEVICE",
            "targetObject": "DPACCOMMDEVICE",
            "parentKeys": "DEVICEID",
            "targetKeys": "DEVICEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Communication Device",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACOMMDEVICE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Communication Device",
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
            "attributeName": "DEVICEID",
            "required": true,
            "persistent": true,
            "title": "Device Id",
            "remarks": "Device Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEVICETYPE",
            "required": false,
            "persistent": true,
            "title": "Device Type",
            "remarks": "Device Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEVICENAME",
            "required": false,
            "persistent": true,
            "title": "Device",
            "remarks": "Device Name",
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
            "name": "DDPACOMMDEVICE",
            "source": "COMPUTERSYSTEM",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMAKEMODELB",
            "source": "DPAMADPTVARIANT",
            "remarks": "Find the communications devices that reference this variant",
            "whereClause": "makemodel=:adaptervariant",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERD",
            "source": "DPAMMANUVARIANT",
            "remarks": "Find the communications devices that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        }
    ]
}