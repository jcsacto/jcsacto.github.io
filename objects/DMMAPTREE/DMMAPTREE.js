mos = {
    "objectName": "DMMAPTREE",
    "className": "psdi.dm.virtual.DMMapTreeSet",
    "description": "Non-persistent object for mapping structure tree",
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
            "attributeName": "DMMAPTREEID",
            "required": false,
            "persistent": false,
            "title": "Unique ID",
            "remarks": "Unique ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASCHILDREN",
            "required": false,
            "persistent": false,
            "title": "Has Children ",
            "remarks": "Does this node have any children",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASPARENT",
            "required": false,
            "persistent": false,
            "title": "Has Parent ",
            "remarks": "Does this node have a parent",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NODE",
            "required": false,
            "persistent": false,
            "title": "ode",
            "remarks": "Current Node",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object name",
            "remarks": "Object name or relationship name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "NODEDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description of Node",
            "remarks": "Node Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CFGOBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Configuration Object name",
            "remarks": "Configuration Object name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MBOOBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "MBO Object name",
            "remarks": "MBO Object name",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMMAPTREE",
            "target": "DMMAPTREE",
            "remarks": "Relationship for DMMAPTREE",
            "whereClause": null,
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMMAPTREE",
            "source": "DMMAPTREE",
            "remarks": "Relationship for DMMAPTREE",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "MAPPING_TREE",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship for Mapping tree",
            "whereClause": null,
            "cardinality": null
        }
    ]
}