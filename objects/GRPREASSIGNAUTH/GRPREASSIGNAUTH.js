mos = {
    "objectName": "GRPREASSIGNAUTH",
    "className": "psdi.app.signature.GroupReassignAuthSet",
    "description": "Groups that a user is allowed to assign others to",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "GRPREASSIGNAUTHID",
    "primaryKeyColumns": [
        "USERID",
        "GROUPNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXGROUP",
            "targetObject": "GRPREASSIGNAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "GRPREASSIGNAUTH",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Groups user may assign other users to.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "GRPREASSIGNAUTH",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 90",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "GRPREASSIGNAUTHID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
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
            "attributeName": "GROUPNAME",
            "required": true,
            "persistent": true,
            "title": "Group",
            "remarks": "Security group to which this user may assign other users.",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXGROUP",
            "target": "MAXGROUP",
            "remarks": "Role related to this RoleReassignAuth",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSER",
            "target": "MAXUSER",
            "remarks": "User who owns this RoleReassignAuth",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "GRPREASSIGNAUTH",
            "source": "MAXGROUP",
            "remarks": "RoleReassignAuth records for a specified role",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GRPREASSIGNAUTH",
            "source": "MAXUSER",
            "remarks": "Role reassignment authorities for a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "MULTIPLE"
        }
    ]
}