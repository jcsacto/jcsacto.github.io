mos = {
    "objectName": "MYPROFILECHNGEPW",
    "className": "psdi.app.signature.virtual.MyProfileChangePasswordsSet",
    "description": "Non Persistent table for changing pw in myProfile",
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
            "required": true,
            "persistent": false,
            "title": "User",
            "remarks": "User identifier",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PASSWORDINPUT",
            "required": false,
            "persistent": false,
            "title": "New Password",
            "remarks": "Password",
            "sameAsAttribute": "PASSWORDINPUT",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "PASSWORDCHECK",
            "required": false,
            "persistent": false,
            "title": "Verify New Password",
            "remarks": "Second entry when changing password to ensure no typos",
            "sameAsAttribute": "PASSWORDINPUT",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "PASSWORD",
            "required": false,
            "persistent": false,
            "title": "Password",
            "remarks": "Password",
            "sameAsAttribute": "PASSWORD",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "PASSWORDOLD",
            "required": true,
            "persistent": false,
            "title": "Current Password",
            "remarks": "Current Password",
            "sameAsAttribute": "PASSWORDINPUT",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "PWHINTQUESTION",
            "required": false,
            "persistent": false,
            "title": "Password Hint Question",
            "remarks": "Question to elicit password hint in order to obtain password",
            "sameAsAttribute": "PWHINTQUESTION",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "PWHINTANSWER",
            "required": false,
            "persistent": false,
            "title": "Password Hint Answer",
            "remarks": "Answer to the password hint question",
            "sameAsAttribute": "PWHINTANSWER",
            "sameAsObject": "MAXUSER"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PWHINTDOMAIN",
            "target": "ALNDOMAIN",
            "remarks": "MaxUser to ALNDomain for PWHintQuestion",
            "whereClause": "domainid='PWHINTQUESTION' and value=:pwhintquestion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSER",
            "target": "MAXUSER",
            "remarks": "MyProfileChngePW to MaxUser",
            "whereClause": "userid=:userid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MYPROFILECHANGEPASSWORDS",
            "source": "MAXUSER",
            "remarks": "Relationship to the non-persistent MyProfileChangePasswords set",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}