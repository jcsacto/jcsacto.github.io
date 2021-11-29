mos = {
    "objectName": "PERSONANCESTOR",
    "className": "psdi.app.person.PersonAncestorSet",
    "description": "Relationship between a person and an ancestor person",
    "longDescription": "This is the ancestor table for Person records. More information about ancestor tables <a href=\"../../extra/AncestorTables.html\">here.</a> ",
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PERSONANCESTORID",
    "primaryKeyColumns": [
        "PERSONID",
        "ANCESTOR"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "PERSONANCESTOR",
            "parentKeys": "PERSONID",
            "targetKeys": "ANCESTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "List of the person and the people who report to that person.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSONANCESTOR",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "List of the person and that person\"s supervisors.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ANCESTOR",
            "required": true,
            "persistent": true,
            "title": "Ancestor",
            "remarks": "PERSONID of Ancestor PERSON",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PERSONID",
            "required": true,
            "persistent": true,
            "title": "Person",
            "remarks": "Person Identifier",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "HIERARCHYLEVELS",
            "required": true,
            "persistent": true,
            "title": "Hierarchy Levels",
            "remarks": "Number of hierarchy levels between PERSON and Ancestor PERSON",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONANCESTORID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}