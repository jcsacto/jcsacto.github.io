mos = {
    "objectName": "SEARCHSOLUTION",
    "className": "psdi.app.solution.virtual.SearchSolutionSet",
    "description": "Solution Searching Non-Persistent object",
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
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Solution Description",
            "remarks": "Description of the solution.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "SOLUTION"
        },
        {
            "attributeName": "CLASSIFICATION",
            "required": false,
            "persistent": false,
            "title": "Classification",
            "remarks": "Classification of this solution. Enter a value or click the Detail Menu button to select an option and retrieve a value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": false,
            "title": "Classstructureid",
            "remarks": "Classstructureid",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CLASSANCESTOR",
            "target": "CLASSANCESTOR",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (searchsolution.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the CLASSSTRUCTURE table, used to find the CLASSSTRUCTURE record for a given solution. (classstructure.classstructureid = searchsolution.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SEARCHSOL",
            "target": "SOLUTION",
            "remarks": "Relationship to the Solution table, used to find the solution object. (no where clause). The resulting set will contain one object. Note: SearchSolution is a virtual table.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}