mos = {
    "objectName": "DPANETPRINTER",
    "className": "psdi.app.npasset.DPANetPrinterSet",
    "description": "Deployed Assets Network Printers",
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
            "targetObject": "DPANETPRINTER",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Network Printer",
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
            "attributeName": "NETWORKADDRESS",
            "required": false,
            "persistent": true,
            "title": "Network Address",
            "remarks": "Network Address",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NETMACADDR",
            "required": false,
            "persistent": true,
            "title": "Net MAC Address",
            "remarks": "Net MAC Address",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENTRAM",
            "required": false,
            "persistent": true,
            "title": "Current RAM Size",
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
            "attributeName": "NUMBEROFTRAYS",
            "required": false,
            "persistent": true,
            "title": "Number of Trays",
            "remarks": "Number of Trays",
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
            "title": "Maximum Width",
            "remarks": "MAX Width",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VMAXLENGTH",
            "required": false,
            "persistent": false,
            "title": "Maximum Length",
            "remarks": "MAX Length",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}