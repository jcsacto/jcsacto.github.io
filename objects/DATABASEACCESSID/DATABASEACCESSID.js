mos = {
    "objectName": "DATABASEACCESSID",
    "className": "psdi.app.signature.virtual.DatabaseAccessIDSet",
    "description": "Database Access menu option for User app",
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
        },
        {
            "attributeName": "DATABASEUSERID",
            "required": false,
            "persistent": false,
            "title": "Database User ID",
            "remarks": "User name for connecting to the database using a database tool or SQL editor. The database user ID is not related to the Maximo user ID. They may be the same or different.",
            "sameAsAttribute": "DATABASEUSERID",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "DBPASSWORD",
            "required": false,
            "persistent": false,
            "title": "Database Password",
            "remarks": "Secret word or value to verify the identity of the user.",
            "sameAsAttribute": "DBPASSWORD",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "DBPASSWORDCHECK",
            "required": false,
            "persistent": false,
            "title": "Confirm Password",
            "remarks": "Enter the password again. Maximo compares this entry with the Database Password field to ensure accuracy.",
            "sameAsAttribute": "DBPASSWORD",
            "sameAsObject": "MAXUSER"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DATABASEACCESS",
            "target": "DATABASEACCESS",
            "remarks": "DatabaseAccessID to DatabaseAccess",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DATABASEACCESSID",
            "source": "MAXUSER",
            "remarks": "MaxUser to DatabaseAccessID",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}