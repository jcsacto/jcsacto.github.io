mos = {
    "objectName": "SMS",
    "className": "psdi.app.person.SMSSet",
    "description": "A table for storing SMS addresses.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SMSID",
    "primaryKeyColumns": [
        "PERSONID",
        "ADDRESS",
        "SMSTYPE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "SMS",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SMSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESS",
            "required": true,
            "persistent": true,
            "title": "SMS Address",
            "remarks": "The address of this SMS.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONID",
            "required": true,
            "persistent": true,
            "title": "Person Identifier",
            "remarks": "The person associated with this SMS.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "SMSTYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Valuelist value of SMSType.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISPRIMARY",
            "required": true,
            "persistent": true,
            "title": "Is this the Primary SMS Address",
            "remarks": "Is this the primary SMS address?",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SMS",
            "source": "PERSON",
            "remarks": "Relationship from the person table to the sms table where person=person.  This will return 0 or more records.",
            "whereClause": "personid=:personid",
            "cardinality": "MULTIPLE"
        }
    ]
}