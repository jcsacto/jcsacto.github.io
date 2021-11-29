mos = {
    "objectName": "DPADISPLAY",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Displays",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DISPLAYID",
    "primaryKeyColumns": [
        "DISPLAYID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DPADISPLAY",
            "targetObject": "DPACDISPLAY",
            "parentKeys": "DISPLAYID",
            "targetKeys": "DISPLAYID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Display Adapter",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPADISPLAY",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Display Adapter",
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
            "attributeName": "DISPLAYID",
            "required": true,
            "persistent": true,
            "title": "Display Id",
            "remarks": "Display Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYTYPE",
            "required": false,
            "persistent": true,
            "title": "Display Type",
            "remarks": "Display Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYSIZE",
            "required": false,
            "persistent": true,
            "title": "Display Size",
            "remarks": "Display Size",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXHORZRESOLUTION",
            "required": false,
            "persistent": true,
            "title": "Maximum Horizontal Resolution",
            "remarks": "Max Horizontal Resolution",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXVERTRESOLUTION",
            "required": false,
            "persistent": true,
            "title": "Maximum Vertical Resolution",
            "remarks": "Max Vertical Resolution",
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
            "remarks": "Change  Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DDPADISPLAY",
            "source": "COMPUTERSYSTEM",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERF",
            "source": "DPAMMANUVARIANT",
            "remarks": "Find the displays that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        }
    ]
}