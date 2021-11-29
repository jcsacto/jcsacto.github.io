mos = {
    "objectName": "DMMAPTREERULE",
    "className": "psdi.dm.virtual.DMMapTreeRulesSet",
    "description": "Non-persistent object for mapping structure tree for rules",
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
            "attributeName": "DMMAPTREERULEID",
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
        },
        {
            "attributeName": "HIERARCHYPATH",
            "required": false,
            "persistent": false,
            "title": "Object Location Path",
            "remarks": "The parent object details of the current object detail node",
            "sameAsAttribute": "HIERARCHYPATH",
            "sameAsObject": "MAXINTOBJDETAIL"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "TREEDMCFGOBJECT",
            "target": "DMCFGOBJECT",
            "remarks": "Get list of Configuration Objects for Tree Control.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DMMAPDEFMAPPED",
            "target": "DMMAPDEF",
            "remarks": "Used to test if there are any mapped attributes for this object.",
            "whereClause": "objectname=:mboObjectname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAPPING_TREE_RULE",
            "source": "DMMAPRULES",
            "remarks": "DMMAPTREERULE relationship.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "MAPPING_TREE_RULE",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship for Mapping Rules tree",
            "whereClause": null,
            "cardinality": null
        }
    ]
}