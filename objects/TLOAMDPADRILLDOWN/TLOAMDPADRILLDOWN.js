mos = {
    "objectName": "TLOAMDPADRILLDOWN",
    "className": "psdi.app.dpldasset.virtual.ComputerSystemDrillDownSet",
    "description": "The non-persistent table used for drilldown.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Attribute",
            "remarks": "The name of the column that refers to the node ID.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INHIERARCHY",
            "required": false,
            "persistent": false,
            "title": "Computer System in Hierarchy",
            "remarks": "The computer system currently in focus in the drilldown hierarchy.",
            "sameAsAttribute": "NODENAME",
            "sameAsObject": "DEPLOYEDASSET"
        },
        {
            "attributeName": "ISQBE",
            "required": true,
            "persistent": false,
            "title": "QBE",
            "remarks": "Is the drilldown object instantiated from a find page?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NODEID",
            "required": false,
            "persistent": false,
            "title": "Node Id",
            "remarks": "Node Id",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET"
        },
        {
            "attributeName": "TBNAME",
            "required": false,
            "persistent": false,
            "title": "Table",
            "remarks": "The name of the table being drilled down.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": false,
            "title": "Computer",
            "remarks": "The node name value.",
            "sameAsAttribute": "NODENAME",
            "sameAsObject": "DEPLOYEDASSET"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "TLOAMCOMPUTERNODEID",
            "target": "COMPUTERSYSTEM",
            "remarks": "Relationship to the Computer System, used to find the Computer System record for a given NodeId. (tloamdpadrilldown.nodeid = computersystem.nodeid). The resulting set will contain zero or 1 objects.",
            "whereClause": "nodeid=:nodeid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "TLOAMDPADRILLDOWN",
            "source": "COMPUTERSYSTEM",
            "remarks": "Relationship from the Computer System to the non-persistent Drilldown object. (No where clause). The resulting set will contain zero objects. This relationship is used when the Drilldown page is launched from the Computer application.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}