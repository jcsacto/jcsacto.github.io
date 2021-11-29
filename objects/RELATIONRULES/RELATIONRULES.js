mos = {
    "objectName": "RELATIONRULES",
    "className": "psdi.app.relation.RelationRulesSet",
    "description": "RelationRules table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "RELATIONRULESID",
    "primaryKeyColumns": [
        "RELATIONNUM",
        "SOURCECLASS",
        "TARGETCLASS"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RELATIONRULES",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "SOURCECLASS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RELATIONRULES",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "TARGETCLASS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Class Structure",
            "longDescription": null
        },
        {
            "objectName": "RELATION",
            "targetObject": "RELATIONRULES",
            "parentKeys": "RELATIONNUM",
            "targetKeys": "RELATIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship Information",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RELATIONRULESID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATIONNUM",
            "required": true,
            "persistent": true,
            "title": "Relationship Num",
            "remarks": "Relationship identifier",
            "sameAsAttribute": "RELATIONNUM",
            "sameAsObject": "RELATION"
        },
        {
            "attributeName": "SOURCECLASS",
            "required": true,
            "persistent": true,
            "title": "Source Classification",
            "remarks": "Source Classification",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "TARGETCLASS",
            "required": true,
            "persistent": true,
            "title": "Target Classification",
            "remarks": "Target Classification",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "CONTAINMENT",
            "required": true,
            "persistent": true,
            "title": "Containment",
            "remarks": "Indicates whether the relationship between two CI instances is containment or not",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CARDINALITY",
            "required": true,
            "persistent": true,
            "title": "Cardinality",
            "remarks": "Indicates the cardinality of the relationship",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROPAGATECHANGE",
            "required": true,
            "persistent": true,
            "title": "Propagate Change",
            "remarks": "Indicates whether a change should be propagated",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMPORTED",
            "required": true,
            "persistent": true,
            "title": "Imported",
            "remarks": "Indicates if this relation was populated by an external source or not.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVRELATIONSHIP",
            "required": true,
            "persistent": true,
            "title": "Is Target Parent",
            "remarks": "A flag to indicate the direction of the parent-child (Containment) relationship between the Source and the Target Classification. This flag will be checked if the Target is parent to the Source.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SWAPPED",
            "required": true,
            "persistent": true,
            "title": "Swapped",
            "remarks": "A flag to indicate that the relationship has been swapped.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CIRELATIONRULE",
            "target": "CIRELATION",
            "remarks": "Relationship to the cirelation table, used to find a relation rule for a given relation number",
            "whereClause": "cirelationid in (select cirelationid from cirelation where targetci in ( select cinum from ci where classstructureid =:targetclass) and sourceci in ( select cinum from ci where classstructureid =:sourceclass) and relationnum =:relationnum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCECLASS",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the  classstructure table, used to find a class structure record for a given relationrules source specification.",
            "whereClause": "classstructureid=:sourceclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETCLASS",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the  classstructure table, used to find a class structure record for a given relationrules target specification.",
            "whereClause": "classstructureid=:targetclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATION",
            "target": "RELATION",
            "remarks": "Relationship to the Relation table, used to find relation for a given relation",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONRULES",
            "target": "RELATIONRULES",
            "remarks": "Relationship to the relation rule table, used to find all relation rules for a given relation rule number",
            "whereClause": "relationnum =:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NORELATIONRULES",
            "target": "RELATIONRULES",
            "remarks": "Relations used for constructing new relation rules",
            "whereClause": "2=1",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ACTCIRELATIONRELATIONRULE",
            "source": "ACTCIRELATION",
            "remarks": "Relationship to the RelationRules table, used to find relationrule for a given relation and sourceci classstructureid and targetci classstructureid",
            "whereClause": "relationnum=:relationnum and sourceclass = (select classstructureid from actci where actcinum=:sourceci) and targetclass = (select classstructureid from actci where actcinum=:targetci)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONRULES",
            "source": "CIRELATION",
            "remarks": "Relationship to the RelationRules table, used to find relationrules for a given CI relation",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIRELATIONRELATIONRULE",
            "source": "CIRELATION",
            "remarks": "Relationship to the RelationRules table, used to find relationrule for a given relation and sourceci classstructureid and targetci classstructureid",
            "whereClause": "relationnum=:relationnum and sourceclass = (select classstructureid from ci where cinum=:sourceci) and targetclass = (select classstructureid from ci where cinum=:targetci)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONRULES",
            "source": "CITEMPLATE",
            "remarks": "Relationship to the relationrules table, used to find the relationrules for the classstructure(relationrules.sourceci=:citemplate.ciclassci). The resulting set will contain zero or more objects.",
            "whereClause": "sourceclass=:ciclassid or targetclass=:ciclassid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONRULES",
            "source": "RELATION",
            "remarks": "Relationship to the RelationRules table, used to find relationrule for a given relation",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONRULES",
            "source": "RELATIONRULES",
            "remarks": "Relationship to the relation rule table, used to find all relation rules for a given relation rule number",
            "whereClause": "relationnum =:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NORELATIONRULES",
            "source": "RELATIONRULES",
            "remarks": "Relations used for constructing new relation rules",
            "whereClause": "2=1",
            "cardinality": "UNDEFINED"
        }
    ]
}