mos = {
    "objectName": "TLOAMDPAANCESTOR",
    "className": "psdi.app.common.CommonMboSet",
    "description": "Deployed Software Ancestor Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TLOAMDPAANCESTORID",
    "primaryKeyColumns": [
        "TLOAMDPAANCESTORID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "TLOAMDPAANCESTOR",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Software Ancestor Table",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node ID",
            "remarks": "Node ID",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET"
        },
        {
            "attributeName": "ANCESTOR",
            "required": true,
            "persistent": true,
            "title": "Parent",
            "remarks": "Parent",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HIERARCHYLEVELS",
            "required": true,
            "persistent": true,
            "title": "Level",
            "remarks": "Level",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMDPAANCESTORID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PARENTDPAANCESTOR",
            "source": "COMPUTERSYSTEM",
            "remarks": "Relationship to the deployed asset ancestor, used to find all parent relationship record in hierarchy tree.",
            "whereClause": "nodeid = :nodeid",
            "cardinality": null
        }
    ]
}