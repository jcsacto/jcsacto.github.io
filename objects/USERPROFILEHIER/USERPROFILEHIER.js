mos = {
    "objectName": "USERPROFILEHIER",
    "className": "psdi.app.signature.virtual.UserProfileHierarchySet",
    "description": "Security Profile Hierarchy",
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
            "attributeName": "USERID",
            "required": false,
            "persistent": false,
            "title": "UserID",
            "remarks": "User Id",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": false,
            "title": "Object Name",
            "remarks": "ObjectName",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "HASCHILDREN",
            "required": true,
            "persistent": false,
            "title": "Has Children",
            "remarks": "Does this node have any Children",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASPARENT",
            "required": true,
            "persistent": false,
            "title": "hasparent",
            "remarks": "Does this node have a parent ?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NODE",
            "required": false,
            "persistent": false,
            "title": "Node",
            "remarks": "Current Node",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTRA_1",
            "required": false,
            "persistent": false,
            "title": "extra1",
            "remarks": "Extra Column",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTRA_2",
            "required": false,
            "persistent": false,
            "title": "extra2",
            "remarks": "Extra 2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTRA_3",
            "required": false,
            "persistent": false,
            "title": "Extra 3",
            "remarks": "Extra 3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPUNIQUEID",
            "required": false,
            "persistent": false,
            "title": "Up Unique",
            "remarks": "Unique Id",
            "sameAsAttribute": "MAXUSERID",
            "sameAsObject": "MAXUSER"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "UP_TREE",
            "source": "MAXUSER",
            "remarks": "Relationship for userprofile hier tree",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        }
    ]
}