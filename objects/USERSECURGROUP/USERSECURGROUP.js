mos = {
    "objectName": "USERSECURGROUP",
    "className": "psdi.app.signature.virtual.UserSecurGroupSet",
    "description": "Child object of UserSecur, for menu option in User",
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
            "attributeName": "GROUPNAME",
            "required": true,
            "persistent": false,
            "title": "Group",
            "remarks": "Name of the Group.",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXGROUP",
            "target": "MAXGROUP",
            "remarks": "UserSecurGroup to MaxGroup",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "USERSECURGROUP",
            "source": "USERSECUR",
            "remarks": "UserSecur to UserSecurGroup",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}