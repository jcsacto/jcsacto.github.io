mos = {
    "objectName": "USERSECUR",
    "className": "psdi.app.signature.virtual.UserSecurSet",
    "description": "User Security non-persistent object for User app",
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
            "attributeName": "DEFSITE",
            "required": false,
            "persistent": false,
            "title": "Default Insert Site",
            "remarks": "Updates the default insert site for all selected users. When a selected user inserts a record, Maximo enters this site in the Site field unless the Site field is determined by some other relationship. Similarly, if an Organization field is not determined by some other relationship, Maximo enters the organization owning this site in the field.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DEFSTOREROOM",
            "required": false,
            "persistent": false,
            "title": "Default Storeroom for Self-Service Requisitions",
            "remarks": "Updates the default storeroom for all selected users. When a user enters a material reservation, Maximo enters this site as the storeroom unless the storeroom is determined by some other relationship. If you specify a default storeroom, you must also enter a site in the Storeroom Site field.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STOREROOMSITE",
            "required": false,
            "persistent": false,
            "title": "Storeroom Site for Self-Service Requisitions",
            "remarks": "Updates the Storeroom Site for all selected users. When a user enters a material reservation, Maximo enters this site as the storeroom site unless the site is determined by some other relationship.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "QUERYWITHSITE",
            "required": true,
            "persistent": false,
            "title": "Use Default Insert Site as a Display Filter",
            "remarks": "Updates the default insert site filter for all selected users. If the check box is selected, Maximo displays only the records from the site specified in the Default Insert Site field. If the check box is cleared, Maximo displays all records.",
            "sameAsAttribute": "QUERYWITHSITE",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "EDITDEFSITE",
            "required": true,
            "persistent": false,
            "title": "Edit",
            "remarks": "Select this check box if you want to update the Default Insert Site property, in the field below this one. If the check box is cleared, you cannot edit that field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EDITDEFSTOREROOM",
            "required": true,
            "persistent": false,
            "title": "Edit",
            "remarks": "Select this check box if you want to update the Storeroom Site or Default Storeroom properties, in the two fields below this one. If the check box is cleared you cannot edit those fields.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EDITQUERYWITHSITE",
            "required": true,
            "persistent": false,
            "title": "Edit",
            "remarks": "Select this check box if you want to update the Use Default Insert Site as a Display Filter property, in the field below this one. If the check box is cleared, you cannot edit that field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPACTION",
            "required": true,
            "persistent": false,
            "title": "Group",
            "remarks": "Specifies what action to take with the groups in the Groups table window regarding a user security profile. You can add or remove groups to a security profile, or you can replace all groups in a profile with the ones in the Groups table window.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERCOUNT",
            "required": true,
            "persistent": false,
            "title": "User Count",
            "remarks": "Number of users to be affected by this security profile change. This field appears only if you select users from the List tab.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERID",
            "required": false,
            "persistent": false,
            "title": "User",
            "remarks": "User identifier",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DISPLAYNAME",
            "required": false,
            "persistent": false,
            "title": "Name",
            "remarks": "The name of the person being displayed on the screen",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DEFSTOREROOM",
            "target": "LOCATIONS",
            "remarks": "UserSecur to Locations, for default storeroom",
            "whereClause": "siteid = :storeroomsite and location = :defstoreroom",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STOREROOMSITE",
            "target": "SITE",
            "remarks": "UserSecur to Site, for storeroom site",
            "whereClause": "siteid = :storeroomsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFSITE",
            "target": "SITE",
            "remarks": "UserSecur to Site, for default site",
            "whereClause": "siteid = :defsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "USERSECURGROUP",
            "target": "USERSECURGROUP",
            "remarks": "UserSecur to UserSecurGroup",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "USERSECUR",
            "source": "MAXUSER",
            "remarks": "MaxUser to UserSecur",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}