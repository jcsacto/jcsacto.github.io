mos = {
    "objectName": "MAXROLE",
    "className": "psdi.common.role.MaxRoleSet",
    "description": "Holds Roles",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "MAXROLEID",
    "primaryKeyColumns": [
        "MAXROLE"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXROLE",
            "targetObject": "DMCOLLECTION",
            "parentKeys": "MAXROLE",
            "targetKeys": "DMCOLLROLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Role tracked by Change collection.",
            "longDescription": null
        },
        {
            "objectName": "MAXROLE",
            "targetObject": "DMPACKAGEDEF",
            "parentKeys": "MAXROLE",
            "targetKeys": "DMROLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Role used by Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "MAXROLE",
            "targetObject": "MFMAILST",
            "parentKeys": "MAXROLE",
            "targetKeys": "SENDTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Send To Role",
            "longDescription": null
        },
        {
            "objectName": "MAXROLE",
            "targetObject": "MFMAILSTCFG",
            "parentKeys": "MAXROLE",
            "targetKeys": "SENDTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Send To Role",
            "longDescription": null
        },
        {
            "objectName": "MAXROLE",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "MAXROLE",
            "targetKeys": "ESCROLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Escalation Role for the assignment.",
            "longDescription": null
        },
        {
            "objectName": "MAXROLE",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "MAXROLE",
            "targetKeys": "ROLEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Role for the assignment. The role returns the users that get WF assignments.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXROLE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXROLE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Mbo object this role is designed for.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAXROLE",
            "required": true,
            "persistent": true,
            "title": "Role",
            "remarks": "Roles can be one of 6 types; person, group, record data, user data, email address or custom. Use one of these role categories when you build the roles for your system.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Workflow Role Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISEMAILDATASET",
            "required": true,
            "persistent": true,
            "title": "E-mail",
            "remarks": "Checking this box indicates the data set is made up of email addresses, instead of PersonIDs.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARAMETER",
            "required": false,
            "persistent": true,
            "title": "Parameter",
            "remarks": "Extra parameter sent to custom role classes.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISBROADCAST",
            "required": true,
            "persistent": true,
            "title": "Broadcast",
            "remarks": "Checking this box indicates that when making assignments to the role, send it to everyone in the group.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object",
            "remarks": "Optional name of object for which this role is designed.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MAXROLEID",
            "required": true,
            "persistent": true,
            "title": "MAXROLEID",
            "remarks": "MAXROLEID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDTO",
            "required": true,
            "persistent": false,
            "title": "To",
            "remarks": "Recipient type is to.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CC",
            "required": true,
            "persistent": false,
            "title": "cc",
            "remarks": "Recipient type is cc.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BCC",
            "required": true,
            "persistent": false,
            "title": "bcc",
            "remarks": "Recipient type is bcc.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "The type of r you are creating, modifying or veiwing.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUE",
            "required": true,
            "persistent": true,
            "title": "Value",
            "remarks": "Value looks up either a person, person group or a field that will contain a person's name at run time. It changes based on role type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for MaxRole Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "RELOBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Name",
            "remarks": "The root object name of the relationship tree.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "RELATIONSHIPTREE",
            "target": "EXPBUILDTREE",
            "remarks": "Relationship to get relationship tree for object type.",
            "whereClause": "objectname=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from MAXROLE.",
            "whereClause": "ldkey=:maxroleid and ldownertable = 'MAXROLE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Relationship to get person record for a role.",
            "whereClause": "personid=:value",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUP",
            "target": "PERSONGROUP",
            "remarks": "Relationship to get persongroup record for a role.",
            "whereClause": "persongroup=:value",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMMLOG_ROLE",
            "source": "COMMLOG",
            "remarks": "Relationship to get maxrole set.",
            "whereClause": "(objectname='WOCHANGE' and :ownertable='CHANGE') or (objectname='WOACTIVITY' and :ownertable='ACTIVITY') or (objectname='WORELEASE' and :ownertable='RELEASE') or objectname=:ownertable or objectname is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLTSENDTO_ROLE",
            "source": "COMMTMPLTSENDTO",
            "remarks": "Relationship to the MAXROLE table, used to get the role records for a recipient.",
            "whereClause": "maxrole=:sendtovalue",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SENDTO",
            "source": "MFMAILSTCFG",
            "remarks": "Relationship to the MAXROLE table, used to show the description of SENDTO field",
            "whereClause": "maxrole = :sendto",
            "cardinality": null
        },
        {
            "name": "ROLE",
            "source": "WFASSIGNMENT",
            "remarks": "Gets the assignment's role. Returns a single record.",
            "whereClause": "maxrole = :roleid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ESCROLE",
            "source": "WFASSIGNMENT",
            "remarks": "Gets the assignments escalation role. Returns a single record.",
            "whereClause": "maxrole = :escrole",
            "cardinality": "UNDEFINED"
        }
    ]
}