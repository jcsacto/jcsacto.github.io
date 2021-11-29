mos = {
    "objectName": "WFEXPBUILDER",
    "className": "psdi.workflow.virtual.WFExpressionBuilderSet",
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
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": false,
            "title": "Class Structure",
            "remarks": "NP ClassStructure ID",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "CUSTCLASS",
            "required": false,
            "persistent": false,
            "title": "Custom Class",
            "remarks": "Custom Class",
            "sameAsAttribute": "CUSTCLASS",
            "sameAsObject": "EXPBUILDER"
        },
        {
            "attributeName": "EXPRESSION",
            "required": true,
            "persistent": false,
            "title": "Expression",
            "remarks": "Expression",
            "sameAsAttribute": "EXPRESSION",
            "sameAsObject": "EXPBUILDER"
        },
        {
            "attributeName": "USERSQL",
            "required": false,
            "persistent": false,
            "title": "Expression",
            "remarks": "The expression text. Use conditions, operators, maths functions, and keywords to build the expression.",
            "sameAsAttribute": "USERSQL",
            "sameAsObject": "EXPBUILDER"
        },
        {
            "attributeName": "ISCUSTOMCLASS",
            "required": true,
            "persistent": false,
            "title": "Custom Class",
            "remarks": "Custom Class",
            "sameAsAttribute": "ISCUSTOMCLASS",
            "sameAsObject": "EXPBUILDER"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Name",
            "remarks": "Select a business object. The attributes associated with the business object are listed in the field below. The object is not stored as part of the condition.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
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
            "remarks": "Relationship to expression builder tree.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WFEXPBUILDER",
            "source": "ACTION",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "objectname=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFEXPBUILDER",
            "source": "CONDITION",
            "remarks": "Relationship for EXPBUILD",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFEXPBUILDER",
            "source": "SHOWWFACTION",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFEXPBUILDER",
            "source": "SHOWWFCONDITION",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFEXPBUILDER",
            "source": "SKDPROJECTEMWO",
            "remarks": "Relationship for WFEXPBUILDER",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "WFEXPBUILDER",
            "source": "SKDQUERY",
            "remarks": "Relationship for WFEXPBUILDER",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "WFEXPBUILDER",
            "source": "WFASSIGNMENT",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}