mos = {
    "objectName": "DMSTRUC",
    "className": "psdi.dm.virtual.DMStrucSet",
    "description": "Non-persistent object for deployment manager structure tree",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "HASCHILDREN",
            "required": true,
            "persistent": false,
            "title": "Has Children",
            "remarks": "Does this node have any children",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASPARENT",
            "required": true,
            "persistent": false,
            "title": "Has Parent",
            "remarks": "Does this node have a parent",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NODE",
            "required": false,
            "persistent": false,
            "title": "Current Node",
            "remarks": "Current Node",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DMSTRUCID",
            "required": true,
            "persistent": false,
            "title": "Unique Id",
            "remarks": "Unique ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Name",
            "remarks": "Object name or relationship name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DMGRP_TREE",
            "source": "DMCFGGROUP",
            "remarks": "Relationship for deployment group hier tree",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PKGDEF_TREE",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship for package definition hier tree",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}