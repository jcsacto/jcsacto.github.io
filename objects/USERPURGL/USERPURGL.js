mos = {
    "objectName": "USERPURGL",
    "className": "psdi.app.signature.UserPurGLSet",
    "description": "User's default GL accounts for purchases",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "USERPURGLID",
    "primaryKeyColumns": [
        "USERID",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "USERPURGL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "USERPURGL",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "User",
            "remarks": "User identifier",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization for which you specify a default purchasing GL account.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "GLACCOUNT",
            "required": true,
            "persistent": true,
            "title": "GL Account",
            "remarks": "When a user inserts a purchasing record with a GL account, Maximo uses this default debit GL account unless the GL account defaults from some other relationship. You must specify a GL account for each organization you want the user to have a default puchasing GL account in.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERPURGLID",
            "required": true,
            "persistent": true,
            "title": "USERPURGLID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CHARTOFACCOUNTS",
            "target": "CHARTOFACCOUNTS",
            "remarks": "The GL account related to this user GL default",
            "whereClause": "orgid = :orgid and glaccount = :glaccount",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSER",
            "target": "MAXUSER",
            "remarks": "User who owns this GL default",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGANIZATION",
            "target": "ORGANIZATION",
            "remarks": "Organization for this user GL default",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "USERPURGL",
            "source": "CHARTOFACCOUNTS",
            "remarks": "User GL defaults for a specified GL account",
            "whereClause": "orgid = :orgid and glaccount = :glaccount",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "USERPURGL",
            "source": "MAXUSER",
            "remarks": "Default GL Accounts for a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "USERPURGL",
            "source": "ORGANIZATION",
            "remarks": "User GL defaults for a specified organization",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}