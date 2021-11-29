mos = {
    "objectName": "USERPREF",
    "className": "psdi.app.signature.UserPrefSet",
    "description": "The USERPREF Table",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "USERPREFID",
    "primaryKeyColumns": [
        "USERID",
        "VARNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "USERPREF",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User Preference",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "VARNAME",
            "required": true,
            "persistent": true,
            "title": "Variable",
            "remarks": "Name of user setting.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VARVALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "Value of user setting.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
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
            "attributeName": "USERPREFID",
            "required": true,
            "persistent": true,
            "title": "USERPREFID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "USERPREF",
            "source": "INVUSE",
            "remarks": "Relationship to the USERPREF table, used to find USERPREF records. The resulting set will contain zero or one object.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "USERPREF",
            "source": "MAXUSER",
            "remarks": "MaxUser to UserPref",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        }
    ]
}