mos = {
    "objectName": "EXPBUILDER",
    "className": "psdi.common.expbuilder.ExpressionBuilderSet",
    "description": "Non-Persistent Object for Expression Builder",
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
            "attributeName": "USERSQL",
            "required": false,
            "persistent": false,
            "title": "Expression",
            "remarks": "User Entered Expression",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CUSTCLASS",
            "required": false,
            "persistent": false,
            "title": "Custom Class",
            "remarks": "Custom Class",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPRESSION",
            "required": true,
            "persistent": false,
            "title": "Expression",
            "remarks": "Expression",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": false,
            "title": "Class Structure",
            "remarks": "NP ClassStructure ID",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "ISCUSTOMCLASS",
            "required": true,
            "persistent": false,
            "title": "Custom Class",
            "remarks": "Custom Class",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship for classstructure",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXPCLASST",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship for classstructure",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXPBUILDTREE",
            "target": "EXPBUILDTREE",
            "remarks": "Relationship for exptree",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "EXPBUILDER",
            "source": "DMCFGOBJECT",
            "remarks": "Relationship for EXPBUILD",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXPBUILDER",
            "source": "DMCOLLLOOKUPRULE",
            "remarks": "Relationship from DMCOLLLOOKUPRULE to EXPBUILDER",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "EXPBUILDER",
            "source": "DMCOLLPKGEXCEPTION",
            "remarks": "Relationship to SQLBuilder.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "EXPBUILDER",
            "source": "ESCALATION",
            "remarks": "Relationship for EXPBUILD",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXPBUILDER",
            "source": "ESCREFPOINT",
            "remarks": "Relationship for EXPBUILD",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXPBUILDER",
            "source": "SCRIPTLAUNCHPOINT",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "SCREXPBUILDER",
            "source": "SCRIPTLAUNCHPOINT",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "EXPBUILDER",
            "source": "SKDASSETLOCQUERY",
            "remarks": "Relationship for EXPBUILD.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "EXPBUILDER",
            "source": "SKDPROJECTEMWO",
            "remarks": "Relationship for EXPBUILD",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "EXPBUILDER",
            "source": "SKDQUERY",
            "remarks": "Relationship for EXPBUILD",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "EXPBUILDER",
            "source": "SLA",
            "remarks": "SLA to EXPBUILDER relation",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}