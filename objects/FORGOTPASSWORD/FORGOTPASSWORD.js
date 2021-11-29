mos = {
    "objectName": "FORGOTPASSWORD",
    "className": "psdi.app.signature.virtual.ForgotPasswordSet",
    "description": "User forgot password and is requesting reset.",
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
            "attributeName": "PRIMARYEMAIL",
            "required": true,
            "persistent": false,
            "title": "Primary E-Mail",
            "remarks": "The user's primary email address",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "PWHINTQUESTION",
            "required": true,
            "persistent": false,
            "title": "Password Hint Question",
            "remarks": "The correct password hint question",
            "sameAsAttribute": "PWHINTQUESTION",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "PWHINTANSWER",
            "required": false,
            "persistent": false,
            "title": "Answer",
            "remarks": "Correct answer to the password hint question.",
            "sameAsAttribute": "PWHINTANSWER",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "LOGINID",
            "required": false,
            "persistent": false,
            "title": "Login ID",
            "remarks": "Login id user used to log in.",
            "sameAsAttribute": "LOGINID",
            "sameAsObject": "MAXUSER"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}