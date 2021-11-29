mos = {
    "objectName": "GROUPUSER",
    "className": "psdi.app.signature.GroupUserSet",
    "description": "Defines a user's membership in one or more Groups",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "GROUPUSERID",
    "primaryKeyColumns": [
        "USERID",
        "GROUPNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXGROUP",
            "targetObject": "GROUPUSER",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "GROUPUSER",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User''s Groups",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "GROUPUSER",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 89",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "GROUPUSERID",
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
            "remarks": "Name of security group.",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXGROUP",
            "target": "MAXGROUP",
            "remarks": "Role associated with this RoleUser",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSER",
            "target": "MAXUSER",
            "remarks": "User associated with this RoleUser",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "GroupUser to Person, will be one record",
            "whereClause": "personid in (select personid from maxuser where userid = :userid)",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "GROUPUSER",
            "source": "MAXGROUP",
            "remarks": "RoleUser records for a specified role",
            "whereClause": "groupname = :groupname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "GROUPUSER",
            "source": "MAXUSER",
            "remarks": "RoleUser records for a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "MULTIPLE"
        }
    ]
}