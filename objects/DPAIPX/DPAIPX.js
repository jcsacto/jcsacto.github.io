mos = {
    "objectName": "DPAIPX",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers IPX",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "IPXID",
    "primaryKeyColumns": [
        "IPXID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPAIPX",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed IPX address",
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
            "attributeName": "IPXID",
            "required": true,
            "persistent": true,
            "title": "IPX Id",
            "remarks": "iPX Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IPXADDRESS",
            "required": true,
            "persistent": true,
            "title": "IPX Address",
            "remarks": "IPX (Internetwork Packet Exchange) address. IPX is a network routing protocol used by Novell Netware local area networks.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FRAMETYPE",
            "required": false,
            "persistent": true,
            "title": "Frame Type",
            "remarks": "Frame type for IPX transfer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NETWORKNUMBER",
            "required": false,
            "persistent": true,
            "title": "Network Number",
            "remarks": "Network number for IPX transfer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINKSPEED",
            "required": false,
            "persistent": true,
            "title": "Link Speed",
            "remarks": "Link speed for IPX transfer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXPACKETSIZE",
            "required": false,
            "persistent": true,
            "title": "Maximum Packet Size",
            "remarks": "Maximum packet size for IPX transfer.",
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
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DDPAIPX",
            "source": "COMPUTERSYSTEM",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAIPX",
            "source": "DPACOMPUTER",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}