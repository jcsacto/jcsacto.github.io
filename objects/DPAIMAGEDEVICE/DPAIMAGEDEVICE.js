mos = {
    "objectName": "DPAIMAGEDEVICE",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Image Devices",
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
            "objectName": "DPAIMAGEDEVICE",
            "targetObject": "DPACIMAGEDEVICE",
            "parentKeys": "DEVICEID",
            "targetKeys": "DEVICEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Image Device",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPAIMAGEDEVICE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Image Device",
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
            "attributeName": "NAME",
            "required": false,
            "persistent": true,
            "title": "Device",
            "remarks": "Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALIAS",
            "required": false,
            "persistent": true,
            "title": "Alias",
            "remarks": "Alias",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENTRAM",
            "required": false,
            "persistent": true,
            "title": "Current RAM",
            "remarks": "Current RAM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXRAM",
            "required": false,
            "persistent": true,
            "title": "Maximum RAM",
            "remarks": "Max RAM",
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
            "attributeName": "COLORDEPTHBIT",
            "required": false,
            "persistent": true,
            "title": "Color Depth Bit",
            "remarks": "Color Depth Bit",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXWIDTH",
            "required": false,
            "persistent": true,
            "title": "Maximum Paper Width",
            "remarks": "Max Width",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXLENGTH",
            "required": false,
            "persistent": true,
            "title": "Maximum Paper Length",
            "remarks": "Max Length",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIZEUNIT",
            "required": false,
            "persistent": true,
            "title": "Size Unit",
            "remarks": "Size Unit",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VERTICALDPI",
            "required": false,
            "persistent": true,
            "title": "Vertical DPI",
            "remarks": "Vertical DPI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HORIZONTALDPI",
            "required": false,
            "persistent": true,
            "title": "Horizontal DPI",
            "remarks": "Horizontal DPI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRINTCAPABLE",
            "required": true,
            "persistent": true,
            "title": "Print Capable",
            "remarks": "Print Capable",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FAXCAPABLE",
            "required": true,
            "persistent": true,
            "title": "Fax Capable",
            "remarks": "Fax Capable",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCANCAPABLE",
            "required": true,
            "persistent": true,
            "title": "Scan Capable",
            "remarks": "Scan Capable",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COPYCAPABLE",
            "required": true,
            "persistent": true,
            "title": "Copy Capable",
            "remarks": "Copy Capable",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMBEROFTRAYS",
            "required": false,
            "persistent": true,
            "title": "Number of Trays",
            "remarks": "Number of Trays",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERFACE",
            "required": false,
            "persistent": true,
            "title": "Interface",
            "remarks": "interface",
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
            "attributeName": "VMAXRAMSIZE",
            "required": false,
            "persistent": false,
            "title": "Maximum RAM Size",
            "remarks": "MAX RAM Size",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VCURRENTRAMSIZE",
            "required": false,
            "persistent": false,
            "title": "Current RAM Size",
            "remarks": "Current RAM Size",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VMAXWIDTH",
            "required": false,
            "persistent": false,
            "title": "Maximum Paper Width",
            "remarks": "MAX Width",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VMAXLENGTH",
            "required": false,
            "persistent": false,
            "title": "Maximum Paper Length",
            "remarks": "MAX Length",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DDPAIMAGEDEVICE",
            "source": "COMPUTERSYSTEM",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERE",
            "source": "DPAMMANUVARIANT",
            "remarks": "Find the imaging devices that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        }
    ]
}