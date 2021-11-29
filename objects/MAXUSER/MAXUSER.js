mos = {
    "objectName": "MAXUSER",
    "className": "psdi.app.signature.MaxUserSet",
    "description": "Users of the system",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "MAXUSERID",
    "primaryKeyColumns": [
        "USERID"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXUSER",
            "targetObject": "COMPANYSETFILTER",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User Restricted",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "CRONTASKINSTANCE",
            "parentKeys": "USERID",
            "targetKeys": "RUNASUSERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User ID to run the instance as",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "DEFAULTQUERY",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Query for User",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "GLCOMPONENTS",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User",
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
            "objectName": "MAXUSER",
            "targetObject": "LOGINTRACKING",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "MAXASYNCJOB",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "MAXUSERSTATUS",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "REPORT",
            "parentKeys": "USERID",
            "targetKeys": "LASTRUNBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User ID of last user to run the report.",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "REPORT",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User ID of the owner if this is an ad hoc report.",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "REPORTOUTPUT",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User ID of the initiating user.",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "REPORTOUTPUTAUTH",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User ID of the authorized user.",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "SCCONFIG",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Center Configuration",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "SITEFILTER",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Users with Access",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LOCATIONS",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "DEFAULTREPFACSITEID, DEFAULTREPFAC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Repair Facility",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "DEFAULTREPFACSITEID, DEFSTOREROOM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 117",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "DEFSITE, DEFAULTREPFAC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 118",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "DEFSITE, DEFSTOREROOM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 120",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STOREROOMSITE, DEFAULTREPFAC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 120",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STOREROOMSITE, DEFSTOREROOM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Storeroom",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXUSER",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person record for user.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXUSER",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 220",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID",
            "targetKeys": "DEFAULTREPFACSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 135",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID",
            "targetKeys": "DEFSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID",
            "targetKeys": "STOREROOMSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 137",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "User",
            "remarks": "Identifies the user. The name or value must be unique for all User records. A Maximo user must be associated with a person record in the People application. If you enter a user name for which no person record exists, Maximo lets you create a person record with the same name when you create the user record. If you choose not to create a person record with the same name as the user name, you make the association with a person in the Person field.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PERSONID",
            "required": true,
            "persistent": true,
            "title": "Person",
            "remarks": "Identifies the person record in the People application. This field is already filled in if you entered a name in the User field that matched an existing person record or if you let Maximo create a new person record when you added the user. You can also use the Detail Menu button to choose an option and retrieve a person ID from the People application (only active persons who are not users will appear in the Select Value dialog box).",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Read-only field that indicates whether a user's status is active or inactive. If inactive, a user cannot log in to Maximo. You change a user's status with the Change Status action on the Select Action menu.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "The system contains users type 1 - 10. In the USERTYPE domain, the descriptions should be updated to reflect the types of users in the license. The appropriate type should be associated with each user id to ensure license compliance.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFSITE",
            "required": false,
            "persistent": true,
            "title": "Default Insert Site",
            "remarks": "When a user inserts a record, Maximo enters this site in the Site field unless the Site field is determined by some other relationship.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "QUERYWITHSITE",
            "required": true,
            "persistent": true,
            "title": "Use Default Insert Site as a Display Filter",
            "remarks": "Specifies which records the user sees. If the check box is selected, Maximo displays only the records from the site specified in the Default Insert Site field. If the check box is cleared, Maximo displays all records. Note that even if this check box is selected, a user can still see records for all the sites for which they are authorized by clearing the filter.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFSTOREROOM",
            "required": false,
            "persistent": true,
            "title": "Default Storeroom for Self-Service Requisitions",
            "remarks": "When a user enters a material reservation, Maximo enters this site as the storeroom unless the storeroom is determined by some other relationship. If you specify a default storeroom, you must also enter a site in the Storeroom Site field.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STOREROOMSITE",
            "required": false,
            "persistent": true,
            "title": "Storeroom Site for Self-Service Requisitions",
            "remarks": "When a user enters a material reservation, Maximo enters this site as the storeroom site unless the site is determined by some other relationship.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "PWHINTQUESTION",
            "required": false,
            "persistent": true,
            "title": "Password Hint Question",
            "remarks": "Question a user or administrator chooses to have asked to verify user identity. An administrator defines password hint questions by adding values to the PWHINTQUESTION domain in the Domains application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PWHINTANSWER",
            "required": false,
            "persistent": true,
            "title": "Answer",
            "remarks": "Correct answer to the password hint question.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FORCEEXPIRATION",
            "required": true,
            "persistent": true,
            "title": "Password Should Expire After First Login",
            "remarks": "Indicates whether to force user to change password at the next login",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PWEXPIRATION",
            "required": false,
            "persistent": true,
            "title": "Password Expiration Date",
            "remarks": "Read-only field that displays a password expiration date if you specify a password duration using the Security Controls action.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FAILEDLOGINS",
            "required": true,
            "persistent": true,
            "title": "Failed Logins",
            "remarks": "Number of consecutive failed login attempts",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATABASEUSERID",
            "required": false,
            "persistent": true,
            "title": "Database User",
            "remarks": "User name for connecting to the database outside of the Maximo applications (if any)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORD",
            "required": true,
            "persistent": true,
            "title": "Password",
            "remarks": "Password for logging in to Maximo (encrypted)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDCHECK",
            "required": false,
            "persistent": false,
            "title": "Confirm Password",
            "remarks": "Enter the password again. Maximo compares this entry with the Password field to ensure accuracy.",
            "sameAsAttribute": "PASSWORDINPUT",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "PASSWORDOLD",
            "required": false,
            "persistent": false,
            "title": "Old Password",
            "remarks": "Original value of password (when changing password)",
            "sameAsAttribute": "PASSWORDINPUT",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "LOGINID",
            "required": true,
            "persistent": true,
            "title": "User Name",
            "remarks": "Name that the user uses to log in to Maximo. The login user name can be the same as or different from the user ID.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXUSERID",
            "required": true,
            "persistent": true,
            "title": "MAXUSERID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NP_STATUSMEMO",
            "required": false,
            "persistent": false,
            "title": "Change Status Memo",
            "remarks": "Status change memo, temporary non-persistent field used by MEA",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "SYNCHPASSWORDS",
            "required": true,
            "persistent": false,
            "title": "Also Change Database Password to This Password",
            "remarks": "Specifies whether to use the same password for Maximo and database access. If you select the check box, the password values in the Database Password section will be copied from the New Password section. If the check box is cleared the passwords can be the same or different. This field cannot be edited unless the user already has database access.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DBPASSWORD",
            "required": false,
            "persistent": false,
            "title": "Database Password",
            "remarks": "Native database password (when databaseuserid is not null)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DBPASSWORDCHECK",
            "required": false,
            "persistent": false,
            "title": "Database Password Check",
            "remarks": "Second entry when changing database password to ensure no typos",
            "sameAsAttribute": "DBPASSWORD",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Enter, as needed, additional information about the user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWPERSONID",
            "required": false,
            "persistent": false,
            "title": "New Person",
            "remarks": "New person to be associated with the user name. The person must be entered in the People application, have an active status, and not be associated with another user.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "SYSUSER",
            "required": true,
            "persistent": true,
            "title": "System Account",
            "remarks": "Specifies whether the user ID can be deleted. If the check box is selected, the user ID is a system account and cannot be deleted. If the check box is cleared, the user ID is not a system account and can be deleted. Maximo has three system users when it is installed (MAXADMIN, MXINTADM, and MAXREG), but you can add others. Maximo requires system users for functions such as chron tasks and self registration.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDINPUT",
            "required": false,
            "persistent": false,
            "title": "Password",
            "remarks": "Non-persistent field for storing a password that is typed in before it is encrypted and stored in the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INACTIVESITES",
            "required": true,
            "persistent": true,
            "title": "Can Access Inactive Sites",
            "remarks": "Identifies whether this user can use inactive sites in Maximo applications",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GENERATEDPSWD",
            "required": false,
            "persistent": false,
            "title": "View Password",
            "remarks": "Non-persistent field for storing an automatically generated password before it is encrypted and stored in the database.",
            "sameAsAttribute": "PASSWORDINPUT",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "EMAILPSWD",
            "required": true,
            "persistent": false,
            "title": "E-mail Password to User",
            "remarks": "Indicates whether a new or changed password should be emailed to the user",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSIFACE",
            "required": true,
            "persistent": false,
            "title": "Has Status Changed",
            "remarks": "Non persistent boolean field to indicate whether the status has been changed after the stateful object is fetched from the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCREENREADER",
            "required": true,
            "persistent": true,
            "title": "Use Screen Reader",
            "remarks": "Indicates whether this user utilizes a screen reader, a device often used by the visually impaired.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IM_PASSWORD",
            "required": false,
            "persistent": false,
            "title": "Instant Messaging Password",
            "remarks": "Instant Messaging Password",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULTREPFACSITEID",
            "required": false,
            "persistent": true,
            "title": "Repair Facility Site",
            "remarks": "The site for the repair facility.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DEFAULTREPFAC",
            "required": false,
            "persistent": true,
            "title": "Default Repair Facility",
            "remarks": "The default repair facility that is assigned to work orders that are inserted by this user.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ISCONSULTANT",
            "required": true,
            "persistent": true,
            "title": "Is Consultant",
            "remarks": "Indicates whether the user provides consultancy services for one or more tenants.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIDENAV",
            "required": true,
            "persistent": true,
            "title": "User Display Side Navigation",
            "remarks": "Enables the side navigation menu, which replaces many of the actions that are normally found on the horizontal navigation toolbar, including the Select Action menu and toolbar buttons.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PWHINTDOMAIN",
            "target": "ALNDOMAIN",
            "remarks": "MaxUser to ALNDomain for PWHintQuestion",
            "whereClause": "domainid = 'PWHINTQUESTION' and value = :pwhintquestion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BOOKMARK",
            "target": "BOOKMARK",
            "remarks": "Bookmarks for a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHANGEPASSWORDS",
            "target": "CHANGEPASSWORDS",
            "remarks": "MaxUser to ChangePasswords",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRONTASKINSTANCE",
            "target": "CRONTASKINSTANCE",
            "remarks": "MaxUser to CronTaskInstance, for users in active crontasks",
            "whereClause": "runasuserid = :userid and active = :yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DATABASEACCESSID",
            "target": "DATABASEACCESSID",
            "remarks": "MaxUser to DatabaseAccessID",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFAULTQUERY",
            "target": "DEFAULTQUERY",
            "remarks": "Default queries for a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the MAXUSER to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a Location or Asset field.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "EMAIL",
            "target": "EMAIL",
            "remarks": "MaxUser to Email, by PersonID",
            "whereClause": "personid = :personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GROUPUSER",
            "target": "GROUPUSER",
            "remarks": "RoleUser records for a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "GRPREASSIGNAUTH",
            "target": "GRPREASSIGNAUTH",
            "remarks": "Role reassignment authorities for a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "DEFSTOREROOM",
            "target": "LOCATIONS",
            "remarks": "Location record for user default storeroom",
            "whereClause": "siteid = :storeroomsite and location = :defstoreroom",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPAIRFACILITY",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find all location records for a User record. (location = :DEFAULTREPFAC and siteid=:DEFAULTREPFACSITEID). The resulting set will contain zero or more objects.",
            "whereClause": "location = :DEFAULTREPFAC and siteid=:DEFAULTREPFACSITEID",
            "cardinality": null
        },
        {
            "name": "LOGINTRACKING",
            "target": "LOGINTRACKING",
            "remarks": "Login tracking records for a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXLICUSAGE",
            "target": "MAXLICUSAGE",
            "remarks": "Relationship from MAXUSER to MAXLICUSAGE table.",
            "whereClause": "userid=:userid and licensenum is not null and islatest=1",
            "cardinality": null
        },
        {
            "name": "MAXSESSION",
            "target": "MAXSESSION",
            "remarks": "Sessions owned by a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSERSTATUS",
            "target": "MAXUSERSTATUS",
            "remarks": "Status history for a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMMAXUSRDBAUTH",
            "target": "MAXUSRDBAUTHINFO",
            "remarks": "maxusrdbauthinfo for user",
            "whereClause": "loginid=:loginid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MYPROFILECHANGEPASSWORDS",
            "target": "MYPROFILECHNGEPW",
            "remarks": "Relationship to the non-persistent MyProfileChangePasswords set",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PASSWORDHISTORY",
            "target": "PASSWORDHISTORY",
            "remarks": "Password history for a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Person for a specified user",
            "whereClause": "personid = :personid",
            "cardinality": "SINGLE"
        },
        {
            "name": "NEWPERSON",
            "target": "PERSON",
            "remarks": "MaxUser to Person for new person ID",
            "whereClause": "personid = :newpersonid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PHONE",
            "target": "PHONE",
            "remarks": "MaxUser to Phone, by PersonID",
            "whereClause": "personid = :personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUERY",
            "target": "QUERY",
            "remarks": "Queries for a specified user",
            "whereClause": "owner = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCCONFIG",
            "target": "SCCONFIG",
            "remarks": "Start Center Configuration for a user.  Will contain zero or more records.",
            "whereClause": "userid = :userid",
            "cardinality": null
        },
        {
            "name": "SITE",
            "target": "SITE",
            "remarks": "Relationship to the Site table, used to find site records for a given User record. (siteid = :DEFAULTREPFACSITEID). The resulting set will contain zero or one object.",
            "whereClause": "siteid = :DEFAULTREPFACSITEID",
            "cardinality": null
        },
        {
            "name": "STOREROOMSITE",
            "target": "SITE",
            "remarks": "MaxUser to Site for StoreroomSite",
            "whereClause": "siteid = :storeroomsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFSITE",
            "target": "SITE",
            "remarks": "Site record for user default site",
            "whereClause": "siteid = :defsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship from MaxUser to SynonymDomain for status description",
            "whereClause": "domainid ='MAXUSERSTATUS' and value = :status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "USERPREF",
            "target": "USERPREF",
            "remarks": "MaxUser to UserPref",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "UP_TREE",
            "target": "USERPROFILEHIER",
            "remarks": "Relationship for userprofile hier tree",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "USERPURGL",
            "target": "USERPURGL",
            "remarks": "Default GL Accounts for a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "USERSECCONTROL",
            "target": "USERSECCONTROL",
            "remarks": "MaxUser to UserSecControl",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "USERSECUR",
            "target": "USERSECUR",
            "remarks": "MaxUser to UserSecur",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "USERSTATUSCHANGE",
            "target": "USERSTATUSCHANGE",
            "remarks": "MaxUser to UserStatusChange",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "target": "WFASSIGNMENT",
            "remarks": "Relationship to active assignments on this workorder. (ownertable = 'MAXUSER' and ownerid = :maxuserid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'MAXUSER' and wfassignment.ownerid = :maxuserid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTOOLBAR",
            "target": "WFTOOLBAR",
            "remarks": "Relationship to virutal set that manages the toolbar buttons. (empty). Any number member set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "target": "WFTRANSACTION",
            "remarks": "Relationship to maxuser transactions. (ownertable = 'MAXUSER' and ownerid = :maxuserid). Zero to many member set.",
            "whereClause": "ownertable = 'MAXUSER' and ownerid = :maxuserid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "target": "WORKFLOWMAP",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXUSER",
            "source": "BOOKMARK",
            "remarks": "The user who owns this bookmark record",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSER",
            "source": "CHANGEPASSWORDS",
            "remarks": "ChangePasswords to MaxUser",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSER",
            "source": "DEFAULTQUERY",
            "remarks": "The user who owns this default query record",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSER",
            "source": "GROUPUSER",
            "remarks": "User associated with this RoleUser",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSER",
            "source": "GRPREASSIGNAUTH",
            "remarks": "User who owns this RoleReassignAuth",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSER",
            "source": "LOGINTRACKING",
            "remarks": "The user who owns this LoginTracking record",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSER",
            "source": "MAXLICUSAGE",
            "remarks": "Relationship from MAXLICUSAGE to MAXUSER table.",
            "whereClause": "userid=:userid",
            "cardinality": null
        },
        {
            "name": "MAXUSER",
            "source": "MAXLICUSERASC",
            "remarks": "Relationship from MAXLICUSERASC to MAXUSER table.",
            "whereClause": "userid=:userid",
            "cardinality": null
        },
        {
            "name": "MAXUSER",
            "source": "MAXSESSION",
            "remarks": "User associated with this session",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSER",
            "source": "MAXTHREADLOGGERDET",
            "remarks": "TableDomain for Person.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "MAXUSER",
            "source": "MYPROFILECHNGEPW",
            "remarks": "MyProfileChngePW to MaxUser",
            "whereClause": "userid=:userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSER",
            "source": "PASSWORDHISTORY",
            "remarks": "User associated with this PasswordHistory",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "USER",
            "source": "PERSON",
            "remarks": "Relationship to the maxuser table, used to find the user for this person. (user.personid = person.personid). The resulting set will contain zero or one object.",
            "whereClause": "personid=:personid and status not in (select value from synonymdomain where domainid='MAXUSERSTATUS' and maxvalue='DELETED')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSER",
            "source": "QUERY",
            "remarks": "The user who owns this query record",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSER",
            "source": "USERPURGL",
            "remarks": "User who owns this GL default",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        }
    ]
}