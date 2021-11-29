mos = {
    "objectName": "EXCLUDEPASSWORD",
    "className": "psdi.app.signature.ExcludePasswordSet",
    "description": "Excluded Passwords",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "EXCLUDEPASSWORDID",
    "primaryKeyColumns": [
        "PASSWORD"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "EXCLUDEPASSWORDID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORD",
            "required": true,
            "persistent": true,
            "title": "Password",
            "remarks": "Value that is not allowed for a password",
            "sameAsAttribute": "PASSWORDINPUT",
            "sameAsObject": "MAXUSER"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "EXCLUDEPASSWORD",
            "source": "USERSECCONTROL",
            "remarks": "Relationship from UserSecControl to ExcludePassword",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}