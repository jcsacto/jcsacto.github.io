mos = {
    "objectName": "PMANCESTOR",
    "className": "psdi.app.pm.PMAncestorSet",
    "description": "Relationship between a PM and an Ancestor PM.",
    "longDescription": "This is the ancestor table for PMs. More information about ancestor tables <a href=\"../../extra/AncestorTables.html\">here.</a> ",
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PMANCESTORID",
    "primaryKeyColumns": [
        "SITEID",
        "PMNUM",
        "ANCESTOR"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PMANCESTOR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PMANCESTOR",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, ANCESTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "List of the PM and its descendants.",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PMANCESTOR",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "List of the PM and its ancestors.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PMANCESTOR",
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
            "attributeName": "PMNUM",
            "required": true,
            "persistent": true,
            "title": "PM",
            "remarks": "The PM Identifier.",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "ANCESTOR",
            "required": true,
            "persistent": true,
            "title": "Ancestor",
            "remarks": "An Ancestor PM of this PM.",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "HIERARCHYLEVELS",
            "required": true,
            "persistent": true,
            "title": "Hierarchy Levels",
            "remarks": "Number of hierarchy levels between PM and Ancestor PM.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "PMANCESTORID",
            "required": true,
            "persistent": true,
            "title": "PMANCESTORID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PMANCESTOR",
            "source": "PM",
            "remarks": "Relationship to the PM's PMAncestor records, used to find all PMAncestor records which refer to the PM. (pmancestor.pmnum=pm.pmnum or pmancesotr.ancestor=pm.pmnum). The resulting set will contain zero to many records.",
            "whereClause": "pmnum = :pmnum or ancestor = :pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}