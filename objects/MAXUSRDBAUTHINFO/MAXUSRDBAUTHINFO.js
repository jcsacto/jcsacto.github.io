mos = {
    "objectName": "MAXUSRDBAUTHINFO",
    "className": "psdi.security.MaxUsrDBAuthInfoSet",
    "description": "DB authentication information for max users",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXUSRDBAUTHINFOID",
    "primaryKeyColumns": [
        "CONTENTUID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "MAXUSRDBAUTHINFOID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOGINID",
            "required": true,
            "persistent": true,
            "title": "LOGINID",
            "remarks": "Login id of the maximo user, same as the database user.",
            "sameAsAttribute": "LOGINID",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "PASSWORD",
            "required": false,
            "persistent": true,
            "title": "password",
            "remarks": "Encrypted database password for the database user identified as loginid.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DN",
            "required": false,
            "persistent": true,
            "title": "Distinguished Name",
            "remarks": "Distinguished name for the database user identified as loginid.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CERTIFICATE",
            "required": false,
            "persistent": true,
            "title": "Certificate",
            "remarks": "Base64 encoded byte array of x509 certificate used as authentication credential for the database user identified as loginid.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTENTUID",
            "required": true,
            "persistent": true,
            "title": "CONTENTUID",
            "remarks": "Content Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DMMAXUSRDBAUTH",
            "source": "MAXUSER",
            "remarks": "maxusrdbauthinfo for user",
            "whereClause": "loginid=:loginid",
            "cardinality": "UNDEFINED"
        }
    ]
}