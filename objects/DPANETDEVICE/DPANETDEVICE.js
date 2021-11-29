mos = {
    "objectName": "DPANETDEVICE",
    "className": "psdi.app.ndasset.DPANetDeviceSet",
    "description": "Deployed Assets Network Devices",
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
            "targetObject": "DPANETDEVICE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Network Device",
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
            "title": "MAC Address",
            "remarks": "Net MAC Address",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FIRMWAREVERSION",
            "required": false,
            "persistent": true,
            "title": "Firmware Version",
            "remarks": "Firmware Version",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSVERSION",
            "required": false,
            "persistent": true,
            "title": "Operating System Version",
            "remarks": "OS Version",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RAMSIZE",
            "required": false,
            "persistent": true,
            "title": "RAM Size",
            "remarks": "RAM Size",
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
            "attributeName": "VRAMSIZE",
            "required": false,
            "persistent": false,
            "title": "RAM Size",
            "remarks": "RAM Size",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NETSOURCEID1",
            "required": false,
            "persistent": true,
            "title": "Network Source ID",
            "remarks": "Network Source ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION1",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DPANETDEVCARD",
            "target": "DPACNETDEVCARD",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}