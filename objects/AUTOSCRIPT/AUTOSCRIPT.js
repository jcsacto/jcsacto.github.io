mos = {
    "objectName": "AUTOSCRIPT",
    "className": "com.ibm.ism.script.autoscript.AutoScriptSet",
    "description": "Automation Scripts",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AUTOSCRIPTID",
    "primaryKeyColumns": [
        "AUTOSCRIPT"
    ],
    "logicalRelationships": [
        {
            "objectName": "AUTOSCRIPT",
            "targetObject": "AUTOSCRIPTSTATE",
            "parentKeys": "AUTOSCRIPT",
            "targetKeys": "AUTOSCRIPT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Automation Script",
            "longDescription": null
        },
        {
            "objectName": "AUTOSCRIPT",
            "targetObject": "AUTOSCRIPTVARS",
            "parentKeys": "AUTOSCRIPT",
            "targetKeys": "AUTOSCRIPT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Automation Script",
            "longDescription": null
        },
        {
            "objectName": "AUTOSCRIPT",
            "targetObject": "LAUNCHPOINTVARS",
            "parentKeys": "AUTOSCRIPT",
            "targetKeys": "AUTOSCRIPT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Automation Script",
            "longDescription": null
        },
        {
            "objectName": "AUTOSCRIPT",
            "targetObject": "OSLCQUERY",
            "parentKeys": "AUTOSCRIPT",
            "targetKeys": "SCRIPTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "OSLC Script",
            "longDescription": null
        },
        {
            "objectName": "AUTOSCRIPT",
            "targetObject": "SCRIPTLAUNCHPOINT",
            "parentKeys": "AUTOSCRIPT",
            "targetKeys": "AUTOSCRIPT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Automation Script",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTION",
            "targetObject": "AUTOSCRIPT",
            "parentKeys": "ACTION",
            "targetKeys": "ACTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "AUTOSCRIPT",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "CREATEDBYEMAIL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Created By Email Address",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "AUTOSCRIPT",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "OWNEREMAIL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Email Address",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "AUTOSCRIPT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AUTOSCRIPT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "AUTOSCRIPT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "AUTOSCRIPT",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEDBYID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Created By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "AUTOSCRIPT",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AUTOSCRIPT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "AUTOSCRIPT",
            "required": true,
            "persistent": true,
            "title": "Script",
            "remarks": "The unique identifier of the automation script.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of the script.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULEDSTATUS",
            "required": false,
            "persistent": true,
            "title": "Scheduled State",
            "remarks": "Next desired state of the script",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMENTS",
            "required": false,
            "persistent": true,
            "title": "Comments",
            "remarks": "Comments",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERID",
            "required": false,
            "persistent": true,
            "title": "Owner",
            "remarks": "Identifies the owner of the script. The owner or owner group manages the script",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "OWNERNAME",
            "required": false,
            "persistent": true,
            "title": "name",
            "remarks": "Name of the owner of the script. The owner or owner group manages the script",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "OWNERPHONE",
            "required": false,
            "persistent": true,
            "title": "Phone",
            "remarks": "Telephone number of the owner of the script. The owner or owner group manages the script",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "OWNEREMAIL",
            "required": false,
            "persistent": true,
            "title": "E-mail",
            "remarks": "E-mail address of the owner of the script. The owner or owner group manages the script",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "CREATEDBYID",
            "required": false,
            "persistent": true,
            "title": "Created By",
            "remarks": "Identifies the person creating the script.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the script.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ACTION",
            "required": false,
            "persistent": true,
            "title": "Action",
            "remarks": "Action",
            "sameAsAttribute": "ACTION",
            "sameAsObject": "ACTION"
        },
        {
            "attributeName": "STDERR",
            "required": false,
            "persistent": false,
            "title": "Stderr",
            "remarks": "Script Execution Error",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STDOUT",
            "required": false,
            "persistent": false,
            "title": "Stdout",
            "remarks": "Script Execution Output",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCE",
            "required": false,
            "persistent": true,
            "title": "Source Code",
            "remarks": "The source code of the script. You can write source code in an external application and import it into the Automation Scripts application, or you can enter code in this field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDDATE",
            "required": true,
            "persistent": true,
            "title": "Date",
            "remarks": "Date and time the script was created.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VERSION",
            "required": false,
            "persistent": true,
            "title": "Version",
            "remarks": "Script Version",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CATEGORY",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Script type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "State Date",
            "remarks": "Date on which the script state was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Date",
            "remarks": "Date on which script was changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDBYPHONE",
            "required": false,
            "persistent": true,
            "title": "Phone",
            "remarks": "Telephone number of the person creating the script.",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "CREATEDBYNAME",
            "required": false,
            "persistent": true,
            "title": "Name",
            "remarks": "Name of the person creating the script.",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CREATEDBYEMAIL",
            "required": false,
            "persistent": true,
            "title": "E-mail",
            "remarks": "E-mail address of the person creating the script.",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": true,
            "title": "Owner Person",
            "remarks": "Identifies the owner of the script. The owner or owner group manages the script",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CREATEDBY",
            "required": false,
            "persistent": true,
            "title": "Created By Person",
            "remarks": "Identifies the person creating the script.",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Modified By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "AUTOSCRIPTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "BINARYSCRIPTSOURCE",
            "required": false,
            "persistent": true,
            "title": "Script Source",
            "remarks": "Store the binary information for a script",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCRIPTLANGUAGE",
            "required": true,
            "persistent": true,
            "title": "Script Language",
            "remarks": "The language that is used in the script. The available languages depend on the script engines in the application server.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "Specifies whether the corresponding script was predefined or added by a user",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOGLEVEL",
            "required": true,
            "persistent": true,
            "title": "Log Level",
            "remarks": "Determines when the output statements in the script code are written to the system console and the product log file.",
            "sameAsAttribute": "LOGLEVEL",
            "sameAsObject": "MAXLOGGER"
        },
        {
            "attributeName": "INTERFACE",
            "required": true,
            "persistent": true,
            "title": "Is Interface",
            "remarks": "Is Interface Script",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Active",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACETYPE",
            "required": false,
            "persistent": false,
            "title": "Integration Type",
            "remarks": "The automation script runs on the selected type of integration component to insert custom logic into the processing of integration messages.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACEDIR",
            "required": false,
            "persistent": false,
            "title": "Direction",
            "remarks": "Determines the direction that the script runs.  Select Inbound processing to run the script inbound to Maximo Asset Management.  Select Outbound definition to run the script outbound from Maximo Asset Management.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Structure",
            "remarks": "Select the object structure that you want to customize",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "IFACENAME",
            "required": false,
            "persistent": false,
            "title": "Publish Channel",
            "remarks": "Select the publish channel that you want to customize",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "IFACENAMEES",
            "required": false,
            "persistent": false,
            "title": "Enterprise Service",
            "remarks": "Select the enterprise service that you want to customize",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "IFACENAMEIC",
            "required": false,
            "persistent": false,
            "title": "Invocation Channel",
            "remarks": "Select the invocation channel that you want to customize",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "IFACEEXIT",
            "required": false,
            "persistent": false,
            "title": "Exit Criteria",
            "remarks": "The automation script runs on the selected Java processing class. The External Exit class is the main processing class for the integration component.  The User Exit class is a user-defined class that can be inserted to add custom logic. The Event Filter class runs on publish channels only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACEBA",
            "required": false,
            "persistent": false,
            "title": "Before/After",
            "remarks": "The automation script runs on the selected processing point on the associated External Exit processing class. A preprocessor method executes a script before the Java exit class is executed and a postprocessor method executes the script after the Java exit class is executed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACEESDIR",
            "required": false,
            "persistent": false,
            "title": "Direction",
            "remarks": "For synchronous integration transactions, that require both a request and a response, specify whether the automation script executes during the processing of the request message or the response message.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACEICDIR",
            "required": false,
            "persistent": false,
            "title": "Direction",
            "remarks": "REQUEST(OUT)/RESPONSE(IN)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIONNAMENP",
            "required": false,
            "persistent": false,
            "title": "Action Script Name",
            "remarks": "Action Script Name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUERYNAMENP",
            "required": false,
            "persistent": false,
            "title": "Query Script Name",
            "remarks": "Query Script Name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ACTION",
            "target": "ACTION",
            "remarks": "Relationship to the Action table",
            "whereClause": ":action = action",
            "cardinality": null
        },
        {
            "name": "AUTOSCRIPTCHGSTATE",
            "target": "AUTOSCRIPTCHGSTATE",
            "remarks": "Relationship to the nonpersistent parameter set for changing the automation script state.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "AUTOSCRIPTSTATE",
            "target": "AUTOSCRIPTSTATE",
            "remarks": "Relationship to the  AUTOSCRIPTSTATE table, used to find the state of the automation script . (AUTOSCRIPTSTATE.autoscriptid =  AUTOSCRIPT.autoscriptid). This resulting set will contain 1 or more objects",
            "whereClause": "autoscript=:autoscript",
            "cardinality": null
        },
        {
            "name": "AUTOSCRIPTTESTNP",
            "target": "AUTOSCRIPTTESTNP",
            "remarks": "Relation to Autoscript test. This relationship will return 1 or more rows",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "AUTOSCRIPTVARS",
            "target": "AUTOSCRIPTVARS",
            "remarks": "Relationship to the  AUTOSCRIPTVARS table, used to find the all variables of the script.  This resulting set will contain 1 or more objects",
            "whereClause": "autoscript=:autoscript",
            "cardinality": null
        },
        {
            "name": "BOOKMARK",
            "target": "BOOKMARK",
            "remarks": "Relationship to the BOOKMARK table, used to find all bookmarks for a automation script. ( bookmark.app= 'AUTOSCRIPT' and bookmark.keyvalue = autoscript.autoscriptuid). This resulting set will contain zero or more objects.",
            "whereClause": "app='AUTOSCRIPT' and keyvalue=:autoscriptid",
            "cardinality": null
        },
        {
            "name": "MAXIFACEIN",
            "target": "MAXIFACEIN",
            "remarks": "Relationship to the MaxIfaceIn table, enterprise service table, used to find enterprise service records for a given ifacename. The resulting set will contain one row.",
            "whereClause": "ifacename=:ifacenamees",
            "cardinality": null
        },
        {
            "name": "MAXIFACEINVOKE",
            "target": "MAXIFACEINVOKE",
            "remarks": "Relationship to the MaxIfaceInvoke table, Invocation Channel table, used to find invocation channel records for a given ifacename . The resulting set will contain one row.",
            "whereClause": "ifacename=:ifacenameic",
            "cardinality": null
        },
        {
            "name": "MAXIFACEOUT",
            "target": "MAXIFACEOUT",
            "remarks": "Relationship to the MaxIfaceOut table, publish channel table, used to find publish channel records for a given ifacename . The resulting set will contain one row.",
            "whereClause": "ifacename=:ifacename",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJECT",
            "target": "MAXINTOBJECT",
            "remarks": "Relationship to the MaxIntObject table, used to find object records for a given intobectname . The resulting set will contain one row.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        },
        {
            "name": "OWNER",
            "target": "PERSON",
            "remarks": "Relationship to the person table, used to find the person who owns the script. This resulting set will contain zero or one object.",
            "whereClause": "personid = :owner",
            "cardinality": null
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Relationship to the person table, used to find the person who created the script. This resulting set will contain zero or one object.",
            "whereClause": "personid = :createdby",
            "cardinality": null
        },
        {
            "name": "SCRIPTLAUNCHPOINT",
            "target": "SCRIPTLAUNCHPOINT",
            "remarks": "Relationship to the  SCRIPTLAUNCHPOINT table, used to find the all launch points of the script.  This resulting set will contain 1 or more objects",
            "whereClause": "autoscript=:autoscript",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonym domain table, used to find description for the state, it will contain one object.",
            "whereClause": "domainid='AUTOSCRPHASE' and value=:status",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AUTOSCRIPT",
            "source": "AUTOSCRIPTVARS",
            "remarks": "Relationship to the  AUTOSCRIPT table, used to find AutoScript recorda.  This resulting set will contain 1 object",
            "whereClause": "autoscript=:autoscript",
            "cardinality": null
        },
        {
            "name": "AUTOSCRIPT",
            "source": "SCRIPTLAUNCHPOINT",
            "remarks": "Relationship to the  AUTOSCRIPT table, used to find the Script.  This resulting set will contain 1 object",
            "whereClause": "autoscript=:autoscript",
            "cardinality": null
        },
        {
            "name": "AUTOSCRIPTNP",
            "source": "SCRIPTLAUNCHPOINT",
            "remarks": "Relationship to the  AUTOSCRIPT table, used to find the Script.  This resulting set will contain 1 object",
            "whereClause": "autoscript=:autoscriptnp",
            "cardinality": null
        }
    ]
}