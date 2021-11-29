mos = {
    "objectName": "USERSECCONTROL",
    "className": "psdi.app.signature.virtual.UserSecControlSet",
    "description": "Security Controls in User application",
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
            "attributeName": "NEWUSERGROUP",
            "required": true,
            "persistent": false,
            "title": "Default Group for New Users",
            "remarks": "Group to which Maximo automatically assigns new users, including those who self register. This group determines a user's initial security privileges.",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "LOGINTRACKING",
            "required": true,
            "persistent": false,
            "title": "Enable Login Tracking",
            "remarks": "Specifies whether login tracking is in effect. If this check box is selected, Maximo performs login tracking, which allows you to specify a maximum number of login attempts, and is required for electronic audit. If this check box is cleared, Maximo does not track login attempts and you cannot limit the number of login attempts.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOGINATTEMPTS",
            "required": false,
            "persistent": false,
            "title": "Login Attempts Allowed",
            "remarks": "Number of unsuccessful login attempts Maximo will allow before a user is blocked from logging in.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDDURATION",
            "required": false,
            "persistent": false,
            "title": "Password Lasts this Number of Days",
            "remarks": "Number of days a password is in effect before Maximo requires the user to change it.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDWARNING",
            "required": false,
            "persistent": false,
            "title": "Days Before Password Expires to Warn User",
            "remarks": "Number of days before password expiration that a user will be warned to change their password.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDTHRESHOLD",
            "required": false,
            "persistent": false,
            "title": "Days Before Previously Used Password can be Reused",
            "remarks": "Number of days that must elapse before a user can reuse a password.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDMINLENGTH",
            "required": true,
            "persistent": false,
            "title": "Minimum Password Length",
            "remarks": "Minimum number of characters required for a password.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDNUM",
            "required": true,
            "persistent": false,
            "title": "Must Include a Number",
            "remarks": "Specifies whether passwords must contain a numeric character. If the check box is selected, user passwords must contain at least one numeric character.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDCHAR",
            "required": true,
            "persistent": false,
            "title": "Must Include a Special Character (!, @, #, $, etc.)",
            "remarks": "Specifies whether passwords must contain a special character. If the checkbox is selected, user passwords must contain a special character. Supported special characters are listed in the Help topic for this dialog box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REGSTATUS",
            "required": true,
            "persistent": false,
            "title": "Initial Self-Registered User Status",
            "remarks": "Initial status for self-registered users. The default is NEWREG.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "PASSWORDUPPER",
            "required": true,
            "persistent": false,
            "title": "Must Include an Uppercase Character",
            "remarks": "Identifies whether the password must include an uppercase character",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDLOWER",
            "required": true,
            "persistent": false,
            "title": "Must Include a Lowercase Character",
            "remarks": "Identifies whether the password must include a lowercase character",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDNUMSTART",
            "required": true,
            "persistent": false,
            "title": "First Character can be a Number",
            "remarks": "Identifies whether the password can start with a number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDNUMEND",
            "required": true,
            "persistent": false,
            "title": "Last Character can be a Number",
            "remarks": "Identifies whether the password can end with a number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDCHARSTART",
            "required": true,
            "persistent": false,
            "title": "First Character can be a Special Character",
            "remarks": "Identifies whether the password can start with a special character",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDCHAREND",
            "required": true,
            "persistent": false,
            "title": "Last Character can be a Special Character",
            "remarks": "Identifies whether the password can end with a special character",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDID",
            "required": true,
            "persistent": false,
            "title": "Password can Contain Login ID",
            "remarks": "Identifies whether the password can contain the value of the user's loginid",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDADJCHAR",
            "required": false,
            "persistent": false,
            "title": "Number of Identical Adjacent Characters Allowed in Password",
            "remarks": "The number of identical adjacent characters allowed in a password",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDTEMPLATE",
            "required": true,
            "persistent": false,
            "title": "Template for Emailing Reset Passwords",
            "remarks": "Communication template for emailing reset passwords",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "PASSWORDDISPLAY",
            "required": true,
            "persistent": false,
            "title": "Allow Generated Passwords to Be Displayed on Screen",
            "remarks": "Allow generated passwords to be displayed on screen",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALLUSERGROUP",
            "required": true,
            "persistent": false,
            "title": "Group for All Users",
            "remarks": "Security group to which all users will be assigned",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "DISPLAYESIGUSERID",
            "required": true,
            "persistent": false,
            "title": "Display User ID in the Electronic Signature Dialog",
            "remarks": "Indicates whether to default the User ID on the Esig dialog",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LDAPUSERWF",
            "required": false,
            "persistent": false,
            "title": "Workflow process for auto-created LDAP users",
            "remarks": "Workflow process for auto-created LDAP users",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "SELFREGWF",
            "required": false,
            "persistent": false,
            "title": "Workflow process for self-registered users",
            "remarks": "Workflow process for self-registered users",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "FORGOTPSWDATTEMPTS",
            "required": false,
            "persistent": false,
            "title": "Forgot Password Attempts Allowed",
            "remarks": "Specifies the maximum number of consecutive forgotten password attempts before the status of the user becomes BLOCKED. A null value allows unlimited attempts.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "EXCLUDEPASSWORD",
            "target": "EXCLUDEPASSWORD",
            "remarks": "Relationship from UserSecControl to ExcludePassword",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "USERSECCONTROL",
            "source": "MAXGROUP",
            "remarks": "MaxGroup to UserSecControl",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "USERSECCONTROL",
            "source": "MAXUSER",
            "remarks": "MaxUser to UserSecControl",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}