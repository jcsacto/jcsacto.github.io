mos = {
    "objectName": "PHONE",
    "className": "psdi.app.person.PhoneSet",
    "description": "The Phone Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PHONEID",
    "primaryKeyColumns": [
        "PERSONID",
        "PHONENUM",
        "TYPE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "PHONE",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person''s Phone numbers",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PHONEID",
            "required": true,
            "persistent": true,
            "title": "Phone ID",
            "remarks": "Phone ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONID",
            "required": true,
            "persistent": true,
            "title": "Person",
            "remarks": "Person",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PHONENUM",
            "required": true,
            "persistent": true,
            "title": "Phone",
            "remarks": "The primary phone number that is used to contact this person. The primary phone number may not be deleted unless it is the only phone number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "The type of phone number used to contact this person.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISPRIMARY",
            "required": true,
            "persistent": true,
            "title": "Primary ",
            "remarks": "Indicates that this is the primary phone number that is used to contact this person. Only one phone number can be the primary number; by defa",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PHONE",
            "source": "LABOR",
            "remarks": "Relationship to the PHONE table.  (phone.personid=labor.personid.)  The resulting set will contain one or more objects.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PHONE",
            "source": "MAXUSER",
            "remarks": "MaxUser to Phone, by PersonID",
            "whereClause": "personid = :personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PHONE",
            "source": "PERSON",
            "remarks": "Relationship to the phone table. Used to find all the phone records of this person. (phone.personid=person.personid). The resulting set will be zero or more records.",
            "whereClause": "personid=:personid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "PRIMARYPHONE",
            "source": "PERSON",
            "remarks": "Relationship to the phone table where personid=personid and isprimary=Y.  (person.personid=phone.personid AND phone.isprimary=Y.)  This will return 1 object.",
            "whereClause": "personid=:personid and  isprimary=:yes",
            "cardinality": "UNDEFINED"
        }
    ]
}