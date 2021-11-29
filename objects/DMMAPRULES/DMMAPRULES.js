mos = {
    "objectName": "DMMAPRULES",
    "className": "psdi.dm.virtual.DMMapRulesSet",
    "description": "Mapping Rules table",
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
            "attributeName": "SHOWALL",
            "required": false,
            "persistent": false,
            "title": "Show Configuration Objects",
            "remarks": "Show all Configuration Objects.",
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
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Strucuture",
            "remarks": "Integration Object",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Sub-Record",
            "remarks": "OBJECTNAME",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMCFGOBJECT_COUNT",
            "target": "DMCFGOBJECT",
            "remarks": "Used to test if there are any rules defined at all.",
            "whereClause": "cfgobject in (select intobjectname from maxifaceproc where usewith = 'MIGRATIONOBJECT')",
            "cardinality": null
        },
        {
            "name": "RULECFGOBJ",
            "target": "DMCFGOBJECT",
            "remarks": "Relationship for CFG Object",
            "whereClause": "cfgobject=:cfgobject",
            "cardinality": null
        },
        {
            "name": "MAPPING_TREE_RULE",
            "target": "DMMAPTREERULE",
            "remarks": "DMMAPTREERULE relationship.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DMMAPRULEDET",
            "target": "MAXIFACEPROC",
            "remarks": "Relationship for Mapping Rules tree to mapping detail",
            "whereClause": "ifacename=:intobjectname and intobjectname=:intobjectname and hierarchypath=:hierarchypath and usewith='MIGRATIONOBJECT'",
            "cardinality": null
        },
        {
            "name": "RULEMBOOBJ",
            "target": "MAXOBJECT",
            "remarks": "Mbo Object Relationship",
            "whereClause": "objectname = :mboobject",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMMAPRULES",
            "source": "DMPACKAGEDEF",
            "remarks": "DMMAPRULES table.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}