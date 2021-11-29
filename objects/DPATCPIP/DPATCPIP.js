mos = {
    "objectName": "DPATCPIP",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers TCP/IP",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TCPIPID",
    "primaryKeyColumns": [
        "TCPIPID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPATCPIP",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed TCPIP",
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
            "attributeName": "TCPIPID",
            "required": true,
            "persistent": true,
            "title": "TcpIp Id",
            "remarks": "TcpIp Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TCPIPADDRESS",
            "required": true,
            "persistent": true,
            "title": "TCP/IP Address",
            "remarks": "TCPIP (Transmission Control Protocol Internet Protocol) address. This is a unique Internet Protocol number that is assigned to each machine connected to the Internet.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TCPIPNETMASK",
            "required": false,
            "persistent": true,
            "title": "Network Mask",
            "remarks": "Network mask. This is a TCPIP configuration parameter, a numeric designation in the same format as an IP address, that defines which parts of an address specify the host and which parts specify the network. A subnet mask subdivides a network into smaller pieces and allows a site with multiple LAN segments to share a single IP number. It is used to determine what subnet an IP address belongs to.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HOST",
            "required": false,
            "persistent": true,
            "title": "Host",
            "remarks": "Host name. The host name is the name that a network uses to identify the computer; this is often identical to the computer name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GATEWAY",
            "required": false,
            "persistent": true,
            "title": "Gateway",
            "remarks": "TCPIP gateway. This field specifies which node on the network connects a computer to an outside network.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DNSSERVER1",
            "required": false,
            "persistent": true,
            "title": "DNS Server 1",
            "remarks": "First DNS (Domain Name Server) address. The Domain Name Server is responsible for translating domain names into IP addresses.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DNSSERVER2",
            "required": false,
            "persistent": true,
            "title": "DNS Server 2",
            "remarks": "Second DNS (Domain Name Server) address. The Domain Name Server is responsible for translating domain names into IP addresses.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DNSSERVER3",
            "required": false,
            "persistent": true,
            "title": "DNS Server 3",
            "remarks": "Third DNS (Domain Name Server) address. The Domain Name Server is responsible for translating domain names into IP addresses.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DHCPSERVER",
            "required": false,
            "persistent": true,
            "title": "DHCP Server",
            "remarks": "DHCP (Dynamic Host Configuration Protocol) server. This is the server responsible for assigning an IP address to a computer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIMARYWINS",
            "required": false,
            "persistent": true,
            "title": "Primary WINS",
            "remarks": "Primary WINS (Windows Internet Naming Service). WINS is a system that enables computers to track IP addresses and is useful when IP addresses are assigned dynamically.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SECONDARYWINS",
            "required": false,
            "persistent": true,
            "title": "Secondary WINS",
            "remarks": "Secondary WINS (Windows Internet Naming Service). WINS is a system that enables computers to track IP addresses and is useful when IP addresses are assigned dynamically.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TCPIPDOMAIN",
            "required": false,
            "persistent": true,
            "title": "TCP/IP Domain",
            "remarks": "TCPIP (Transmission Control Protocol Internet Protocol) domain. A domain is a group of computers and devices on a network that are administered as a unit with common rules and procedures. On the Internet, domains are defined by the IP address, and devices sharing a common part of the IP address belong to the same domain.",
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
            "name": "DDPATCPIP",
            "source": "COMPUTERSYSTEM",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPATCPIP",
            "source": "DPACOMPUTER",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}