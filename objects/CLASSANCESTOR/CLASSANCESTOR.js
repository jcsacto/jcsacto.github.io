mos = {
    "objectName": "CLASSANCESTOR",
    "className": "psdi.app.assetcatalog.ClassAncestorSet",
    "description": "Class Structure Ancestors",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CLASSANCESTORID",
    "primaryKeyColumns": [
        "CLASSSTRUCTUREID",
        "ANCESTOR"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSIFICATION",
            "targetObject": "CLASSANCESTOR",
            "parentKeys": "CLASSIFICATIONID, ORGID, SITEID",
            "targetKeys": "ANCESTORCLASSID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Classification and descendants",
            "longDescription": null
        },
        {
            "objectName": "CLASSIFICATION",
            "targetObject": "CLASSANCESTOR",
            "parentKeys": "CLASSIFICATIONID, ORGID, SITEID",
            "targetKeys": "CLASSIFICATIONID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Classification and ancestors",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CLASSANCESTOR",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "ANCESTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure Ancestor",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CLASSANCESTOR",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CLASSANCESTOR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CLASSANCESTOR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CLASSANCESTORID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Class Structure Identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "CLASSIFICATIONID",
            "required": false,
            "persistent": true,
            "title": "Classification",
            "remarks": "Classification of the node",
            "sameAsAttribute": "CLASSIFICATIONID",
            "sameAsObject": "CLASSIFICATION"
        },
        {
            "attributeName": "ANCESTOR",
            "required": false,
            "persistent": true,
            "title": "Ancestor",
            "remarks": "One ancestor of the current classification",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "ANCESTORCLASSID",
            "required": false,
            "persistent": true,
            "title": "Ancestor Classification",
            "remarks": "The ancestor's classification",
            "sameAsAttribute": "CLASSIFICATIONID",
            "sameAsObject": "CLASSIFICATION"
        },
        {
            "attributeName": "HIERARCHYLEVELS",
            "required": false,
            "persistent": true,
            "title": "Hierarchy Levels",
            "remarks": "Number of hierarchy levels between Class Structure and Ancestor Class Structure",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization ID",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CLASSANCESTOR",
            "source": "ACTCI",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given actci (actci.classstructureid=classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "source": "ASSET",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (asset.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "source": "CI",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given ci (ci.classstructureid=classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (classstructure.classsificationid = classancestor.classificationid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR_ANCESTOR",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (classstructure.classsificationid = classancestor.ancestorclassid). The resulting set will contain zero or more objects.",
            "whereClause": "ancestorclassid=:classificationid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "source": "ITEM",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (item.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "source": "LOCATIONS",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (locatoins.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "source": "PLUSCTEMPLATE",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (plusctemplate.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": null
        },
        {
            "name": "CLASSANCESTOR",
            "source": "RELATION",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given relation (relation.classstructureid=classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "source": "SEARCHSOLUTION",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (searchsolution.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "source": "SERVICEITEMS",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (serviceitems.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "source": "SLA",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (sla.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "source": "SOLUTION",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (solution.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "source": "TICKET",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (ticket.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "source": "TKTEMPLATE",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (tktemplate.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "source": "TOOLITEM",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (toolitem.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "source": "WORKORDER",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (workorder.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        }
    ]
}