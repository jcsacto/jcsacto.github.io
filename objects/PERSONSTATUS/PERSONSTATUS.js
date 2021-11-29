mos = {
    "objectName": "PERSONSTATUS",
    "className": "psdi.app.person.PersonStatusSet",
    "description": "The Person Status Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PERSONSTATUSID",
    "primaryKeyColumns": [
        "PERSONID",
        "STATUS",
        "CHANGEDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "PERSONSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSONSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        }
    ],
    "columns": [
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
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "The user who changed the status",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "The date when the status is changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Memo of changing status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONSTATUSID",
            "required": true,
            "persistent": true,
            "title": "PERSONSTATUSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PERSONSTATUS",
            "source": "PERSON",
            "remarks": "Relationship to the personstatus table. Used to find the personstatus records of this person. (personstatus.personid=person.personid). The resulting set will be zero or more records.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        }
    ]
}