mos = {
    "objectName": "CHANGEPASSWORDS",
    "className": "psdi.app.signature.virtual.ChangePasswordsSet",
    "description": "Change Passwords menu option for User app",
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
            "remarks": "Identifies the user whose password you want to change.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PASSWORDINPUT",
            "required": false,
            "persistent": false,
            "title": "New Password",
            "remarks": "Password you want to change to.",
            "sameAsAttribute": "PASSWORDINPUT",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "PASSWORDCHECK",
            "required": false,
            "persistent": false,
            "title": "Confirm New Password",
            "remarks": "Enter the password again. Maximo compares this entry with the New Password field to ensure accuracy.",
            "sameAsAttribute": "PASSWORDINPUT",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "DATABASEUSERID",
            "required": false,
            "persistent": false,
            "title": "Database User ID",
            "remarks": "User name for connecting to the database using a database tool or SQL editor. The database user ID is not related to the Maximo user ID. It may be the same or different unless you chose to synchronize them by selecting check box above. This field is not accessible unless the user already has database access.",
            "sameAsAttribute": "DATABASEUSERID",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "DBPASSWORD",
            "required": false,
            "persistent": false,
            "title": "New Database Password",
            "remarks": "Database password you want to change to.",
            "sameAsAttribute": "DBPASSWORD",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "DBPASSWORDCHECK",
            "required": false,
            "persistent": false,
            "title": "Confirm New Database Password",
            "remarks": "Enter the password again. Maximo compares this entry with the New Database Password field to ensure accuracy.",
            "sameAsAttribute": "DBPASSWORD",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "SYNCHPASSWORDS",
            "required": true,
            "persistent": false,
            "title": "Also Change Database Password to This Password",
            "remarks": "Specifies whether to use the same password for Maximo and database access. If you select the check box, the password values in the Database Password section will be copied from the New Password section. If the check box is cleared the passwords can be the same or different. This field cannot be edited unless the user already has database access.",
            "sameAsAttribute": "SYNCHPASSWORDS",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "FORCEEXPIRATION",
            "required": true,
            "persistent": false,
            "title": "Password Should Expire After First Login",
            "remarks": "Specifies whether to force the user to change their password. If the check box is selected, the user must change the password at login or they will not be able to log in again. If the check box is cleared, the user can retain or change the password.",
            "sameAsAttribute": "FORCEEXPIRATION",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "GENERATEDPSWD",
            "required": false,
            "persistent": false,
            "title": "View Password",
            "remarks": "Randomly generated password.",
            "sameAsAttribute": "PASSWORDINPUT",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "EMAILPSWD",
            "required": true,
            "persistent": false,
            "title": "E-mail Password to User",
            "remarks": "Indicates whether a new or changed password should be emailed to the user",
            "sameAsAttribute": "EMAILPSWD",
            "sameAsObject": "MAXUSER"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXUSER",
            "target": "MAXUSER",
            "remarks": "ChangePasswords to MaxUser",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "ChangePasswords to Person",
            "whereClause": "personid = (select personid from maxuser where userid = :userid)",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CHANGEPASSWORDS",
            "source": "MAXUSER",
            "remarks": "MaxUser to ChangePasswords",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}