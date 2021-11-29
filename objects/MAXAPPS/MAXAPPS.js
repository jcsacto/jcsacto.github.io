mos = {
    "objectName": "MAXAPPS",
    "className": "psdi.app.appsetup.MaxAppsSet",
    "description": "The MAXAPPS Table",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "MAXAPPSID",
    "primaryKeyColumns": [
        "APP"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "APPDOCTYPE",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "APPFIELDDEFAULTS",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Field defaults for an application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "APPLICATIONAUTH",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Security Authorizations for an application.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "BOOKMARK",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bookmarks defined for an application.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "COMMTEMPLATEDOCS",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "COMPANYSETFILTER",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "CTRLGROUP",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "DEFAULTQUERY",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default query for an application.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "DMCOLLAPPTOOLBAR",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application assiciated with the toolbar entry.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "DMCOLLECTIONOBJECT",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application for the Migration Object data.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "DMCOLLECTIONRELOBJ",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application used in Migration collection.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "DMCOLLEVENTTRK",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application for event tracking.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "EXCLUDEDACTIONS",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application with execluded actions",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "FACONFIG",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the Favorite Applications Portlet to the Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "INBCOMMSECURITY",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "ITEMSETFILTER",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "LAYOUT",
            "parentKeys": "APP",
            "targetKeys": "QUERYAPP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "LOGINTRACKING",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXAPPS",
            "parentKeys": "APP",
            "targetKeys": "ORIGINALAPP",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Application this application was created from.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXGROUP",
            "parentKeys": "APP",
            "targetKeys": "DFLTAPP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Start Application for the group.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXINTOBJAPP",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXINTOBJECT",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXINTOBJECT",
            "parentKeys": "APP",
            "targetKeys": "AUTHAPP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Authorizing Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXLABELS",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Presentation labels defined for the application.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXLICAPPACCESS",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXLICPRODAPPS",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXLICSELFSRVAPPS",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXLOGMSGTOOLBAR",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXMENU",
            "parentKeys": "APP",
            "targetKeys": "KEYVALUE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 28",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXMENU",
            "parentKeys": "APP",
            "targetKeys": "MODULEAPP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Menus for an application.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXPRESENTATION",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The UI presentation defined for an application.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXSERVSECURITY",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXUSERAPPLOG",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "OBJECTAPPAUTH",
            "parentKeys": "APP",
            "targetKeys": "AUTHAPP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Authorizing Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "ORGFILTER",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "OSLCINTERACTION",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Starting Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "OSLCINTGRPAPPMENU",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Starting Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "OSLCINTGRPAPPS",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "OSLCQUERY",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "OSOSLCACTION",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "PERSON",
            "parentKeys": "APP",
            "targetKeys": "DFLTAPP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Start Application for the person.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "QUERY",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Stored Queries for an application.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORT",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application this report is registered to.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTADHOC",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 39",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTADHOCCALC",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 40",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTADHOCFIELD",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTADHOCSUM",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTAPPAUTH",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTAUTH",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTBROS",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTJOB",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTLISTCFG",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTLOOKUP",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 48",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTOUTPUT",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 49",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTPROCRESERVE",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTPROCSCHED",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTRUNQUEUE",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTSCHED",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTUSAGELOG",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "SECURITYRESTRICT",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "SIGOPTFLAG",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application the flag applies to",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "SIGOPTION",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Security Options defined for an application.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "SITEFILTER",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "VIEWSECURITYDET",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application name.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "WFAPPTOOLBAR",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Workflow buttons defined for an application.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default application for a workflow assignment.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "WFINTERACTION",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The application to change to when the interaction node is reached.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "WFTASK",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default application for a workflow task.",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "WORKVIEW",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXAPPS",
            "parentKeys": "APP",
            "targetKeys": "ORIGINALAPP",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Application this application was created from.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXAPPS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MAINTBNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object that is the main source of data for the application.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Application Name (Name of the .RUN file)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": true,
            "persistent": true,
            "title": "Description",
            "remarks": "Application Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPTYPE",
            "required": true,
            "persistent": true,
            "title": "Application Type",
            "remarks": "Application Type (.RUN .EXE etc.)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESTRICTIONS",
            "required": false,
            "persistent": true,
            "title": "Restrictions",
            "remarks": "Application Restrictions",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORDERBY",
            "required": false,
            "persistent": true,
            "title": "Order By",
            "remarks": "Application Default Order By",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGINALAPP",
            "required": false,
            "persistent": true,
            "title": "Original Application",
            "remarks": "Application Name (Name of the .RUN file)",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "CUSTAPPTYPE",
            "required": false,
            "persistent": true,
            "title": "Custom Application Type",
            "remarks": "Custom Application Type. This further types MaxApps with AppType = NOTES.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAINTBNAME",
            "required": false,
            "persistent": true,
            "title": "Main Object",
            "remarks": "Main Object name (table or view) for APP used to get JAVA MBO set",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MAXAPPSID",
            "required": true,
            "persistent": true,
            "title": "MAXAPPSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPNAME",
            "required": false,
            "persistent": false,
            "title": "Group",
            "remarks": "GroupName for use when owner is MaxGroup",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "READ",
            "required": true,
            "persistent": false,
            "title": "Read",
            "remarks": "Indicates whether this security group has Read access for this application",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSERT",
            "required": true,
            "persistent": false,
            "title": "Insert",
            "remarks": "Indicates whether this security group has Insert access for this application",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SAVE",
            "required": true,
            "persistent": false,
            "title": "Save",
            "remarks": "Indicates whether this security group has Save access for this application",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELETE",
            "required": true,
            "persistent": false,
            "title": "Delete",
            "remarks": "Indicates whether this security group has Delete access for this application",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MODULE",
            "required": false,
            "persistent": false,
            "title": "Module Name",
            "remarks": "Non-persistent column used by Application Designer",
            "sameAsAttribute": "MODULE",
            "sameAsObject": "MAXMODULES"
        },
        {
            "attributeName": "KEYATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Key Attribute",
            "remarks": "Will be used as key for the link on the list page",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "VIEWPORT",
            "required": false,
            "persistent": false,
            "title": "Viewport",
            "remarks": "Lets the user choose the desired viewport size when designing apps",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISMOBILE",
            "required": false,
            "persistent": true,
            "title": "Is Mobile",
            "remarks": "Checking this box switches the screen look and UI controls so that they are appropriate for interactions on a small, touch-screen device",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCKENABLED",
            "required": true,
            "persistent": true,
            "title": "Edit Mode Enabled",
            "remarks": "Indicates whether users of the application can open records in edit mode. When a record is in edit mode, no other users can change the record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "APPDOCTYPE",
            "target": "APPDOCTYPE",
            "remarks": "Relationship to AppDoctype table by app, used to find document types for an application. ( appdoctype.app = maxapps.app ). This relationship will find 1 or more objects.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "APPFIELDDEFAULTS",
            "target": "APPFIELDDEFAULTS",
            "remarks": "Relationship to AppFieldDefaults table, used to find all AppFieldDefaults for an App. ( appfielddefaults.app = maxapps.app ). This relationship will find 1 or more objects.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "APPLICATIONAUTH",
            "target": "APPLICATIONAUTH",
            "remarks": "Application authorities for a specified application",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BOOKMARK",
            "target": "BOOKMARK",
            "remarks": "Relationship to Bookmark table by app, used to find bookmarks for an application. ( bookmark.app = maxapps.app ). This relationship will find 0 or more objects.",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFAULTQUERY",
            "target": "DEFAULTQUERY",
            "remarks": "Relationship to DefaultQuery table by app, used to find default queries for an application. ( defaultquery.app = maxapps.app ). This relationship will find 0 or more objects.",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCOLLAPPTOOLBAR",
            "target": "DMCOLLAPPTOOLBAR",
            "remarks": "Relationship from MAXAPPS to DMCOLLAPPTOOLBAR",
            "whereClause": "appname=:app",
            "cardinality": null
        },
        {
            "name": "ORIGAPP",
            "target": "MAXAPPS",
            "remarks": "Relationship from MaxApps to MaxApps for originalapp",
            "whereClause": "app = :originalapp",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXLABELS",
            "target": "MAXLABELS",
            "remarks": "Relationship to MaxLabels table, used to find all MaxLabels for an App. ( maxlabels.app = maxapps.app ). This relationship will find 1 or more objects.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXLOGMSGTOOLBAR",
            "target": "MAXLOGMSGTOOLBAR",
            "remarks": "Relationship from MAXAPPS to MAXLOGMSGTOOLBAR",
            "whereClause": "appname=:app",
            "cardinality": null
        },
        {
            "name": "MAXMENU",
            "target": "MAXMENU",
            "remarks": "Relationship to MaxMenu table, used to find all MaxMenu records for an App. (maxmenu.moduleapp = maxapps.app and menutype != 'MODULE'. This relationship will find 1 or more objects.",
            "whereClause": "moduleapp=:app and menutype != 'MODULE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXMENUAPPMENU",
            "target": "MAXMENU",
            "remarks": "Relationship to MaxMenu table, used to find all MaxMenu records for an App of menutype APPMENU. ( maxmenu.moduleapp = maxapps.app and menutype=). This relationship will find 1 or more objects.",
            "whereClause": "moduleapp=:app and menutype='APPMENU'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXMENUAPPTOOL",
            "target": "MAXMENU",
            "remarks": "Relationship to MaxMenu table, used to find all MaxMenu records for an App of menutype APPTOOL. ( maxmenu.moduleapp = maxapps.app and menutype='APPTOOL'). This relationship will find 1 or more objects.",
            "whereClause": "moduleapp=:app and menutype='APPTOOL'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXMENUMODULEAPP",
            "target": "MAXMENU",
            "remarks": "Relationship to MaxMenu table, used to find all MaxMenu app records for a module. (menutype='MODULE' and moduleapp=:module). This relationship will find 1 or more objects.",
            "whereClause": "menutype='MODULE' and moduleapp=:module",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXMENUSEARCHMENU",
            "target": "MAXMENU",
            "remarks": "Relationship to MaxMenu table, used to find all MaxMenu records for an App of menutype SEARCHMENU. ( maxmenu.moduleapp = maxapps.app and menutype='SEARCHMENU'). This relationship will find 1 or more objects.",
            "whereClause": "moduleapp=:app and menutype='SEARCHMENU'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXMODULES",
            "target": "MAXMODULES",
            "remarks": "Relationship to MaxModules table by module, used to find the module. ( maxmodules.module = maxapps.module ). This relationship will find only 1 object at most.",
            "whereClause": "module=:module",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECT",
            "target": "MAXOBJECT",
            "remarks": "Relationship from MaxApps to MaxObject for maintbname",
            "whereClause": "objectname = :maintbname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXPRESENTATION",
            "target": "MAXPRESENTATION",
            "remarks": "Relationship to MaxPresentation table, used to find the MaxPresenation record for an App. ( maxpresentation.app = maxapps.app ). This relationship will find zero or 1 object.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXRECORDLOCK",
            "target": "MAXRECORDLOCK",
            "remarks": "Relationship between MaxApps and Recordlock",
            "whereClause": "ownertable = :maintbname",
            "cardinality": null
        },
        {
            "name": "QUERY",
            "target": "QUERY",
            "remarks": "Relationship to Query table by app, used to find queries for an application. ( query.app = maxapps.app ). This relationship will find 0 or more objects.",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTDIALOGDET",
            "target": "REPORTDIALOGDET",
            "remarks": "REPORTDIALOGDET Relationship from MAXAPPS to REPORTDIALOGDET",
            "whereClause": "appname = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SECURITYRESTRICT",
            "target": "SECURITYRESTRICT",
            "remarks": "Relationship from MaxApps to Security Restriction",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTFLAG",
            "target": "SIGOPTFLAG",
            "remarks": "Sigoption Flags for a specified application",
            "whereClause": "app=:app",
            "cardinality": null
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to SigOption table by app, used to find security ooptions for an application. ( sigoption.app = maxapps.app ). This relationship will find 1 or more objects.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOWITHOUTREAD",
            "target": "SIGOPTION",
            "remarks": "Maxapps to Sigoption, not including the READ option.  This relationship is used for the ESig menu option in the DB Configure application.",
            "whereClause": "app = :app and optionname != 'READ'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOMAIN",
            "target": "SIGOPTION",
            "remarks": "Maxapps to Sigoption for optionnames Read, Insert, Save, and Delete",
            "whereClause": "app = :app and optionname in ('READ','INSERT','SAVE','DELETE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOOTHER",
            "target": "SIGOPTION",
            "remarks": "Maxapps to Sigoption for optionnames other than Read, Insert, Save, and Delete and visible is true",
            "whereClause": "app = :app and optionname not in ('READ','INSERT','SAVE','DELETE') and visible = :yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOOTHER2",
            "target": "SIGOPTION",
            "remarks": "Maxapps to Sigoption for optionnames other than Read, Insert, Save, and Delete and visible is false",
            "whereClause": "app = :app and optionname not in ('READ','INSERT','SAVE','DELETE') and visible = :no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFAPPTOOLBAR",
            "target": "WFAPPTOOLBAR",
            "remarks": "Relationship to get WFAPPTOOLBAR",
            "whereClause": "appname=:app",
            "cardinality": null
        },
        {
            "name": "WFASSIGNMENT",
            "target": "WFASSIGNMENT",
            "remarks": "Relationship WFAssignment table by app, used to find workflow assignments for an application. ( wfassignment.app = maxapps.app ). This relationship will find 1 or more objects.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTASK",
            "target": "WFTASK",
            "remarks": "Relationship to psdi.workflow.WFTask by app, used to find workflow tasks for an application.\t( wftask.app = maxapps.app ). This relationship will find 1 or more objects.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ACTION_MAXAPPS",
            "source": "ACTIONSCFG",
            "remarks": "Relationship to the MAXAPPS table, used to find information for given app. The resulting set will contain one object.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "source": "APPDOCTYPE",
            "remarks": "Relationship to MaxApps table. (maxapps.app = appdoctype.app). The result set will contain one object.",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "source": "BOOKMARK",
            "remarks": "Relationship to MaxApps table. (maxapps.app = bookmark.app). Used to get the application for this bookmark.\tThe result set will normally contain one object, assuming the app exists in only one module.",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLTAPP",
            "source": "COMMTEMPLATE",
            "remarks": "Relationship to get all applications for the object type.",
            "whereClause": "maintbname=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "source": "DEFAULTQUERY",
            "remarks": "Relationship to MaxApps table. (maxapps.app = defaultquery.app). Used to get the application for this default query. The result set will normally contain one object, assuming the app exists in only one module.",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "source": "DMCOLLECTIONOBJECT",
            "remarks": "A relationship from DMCOLLECTIONOBJECT to MAXAPPS",
            "whereClause": "(app not in ('CHANGEPSWD','LOGGING') ) and ( maintbname in (select objectname from maxintobjdetail where parentobjid is null and intobjectname in (select intobjectname from maxintobject where usewith in (select value from synonymdomain where domainid='INTUSEWITH' and maxvalue='MIGRATIONMGR'))))",
            "cardinality": null
        },
        {
            "name": "FA_APP",
            "source": "FACONFIG",
            "remarks": "Relationship between FACONFIG and MAXAPPS table",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INBMAXAPP",
            "source": "INBCOMMSECURITY",
            "remarks": "Maximo App for InboundCommsecurity maximo object",
            "whereClause": "maintbname=:objectname and app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "source": "INTGENERATOR",
            "remarks": "Relation to get Application Description Name. It will return one row.",
            "whereClause": "app=:appname",
            "cardinality": null
        },
        {
            "name": "MAXAPPS",
            "source": "LAYOUT",
            "remarks": "Relationship from LAYOUT to MAXAPPS",
            "whereClause": ":queryapp=app",
            "cardinality": null
        },
        {
            "name": "ORIGAPP",
            "source": "MAXAPPS",
            "remarks": "Relationship from MaxApps to MaxApps for originalapp",
            "whereClause": "app = :originalapp",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "source": "MAXGROUP",
            "remarks": "Relationship for MaxGroup to MaxApps",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTUPAPPLICATION",
            "source": "MAXGROUP",
            "remarks": "Default group startup application relationship.",
            "whereClause": "app=:dfltapp",
            "cardinality": null
        },
        {
            "name": "MAXAPPS",
            "source": "MAXINTERACTION",
            "remarks": "Relationship to get Application Info",
            "whereClause": "app=:appname",
            "cardinality": null
        },
        {
            "name": "MAXAPPS",
            "source": "MAXINTOBJAPP",
            "remarks": "Get Application description",
            "whereClause": "app=:app",
            "cardinality": null
        },
        {
            "name": "MAXAPPS",
            "source": "MAXINTOBJECT",
            "remarks": "Relationship to the MAXAPPS table, used for Report Object Structures. The resulting set will contain zero or one object.",
            "whereClause": "app=:app",
            "cardinality": null
        },
        {
            "name": "MAXAPPS",
            "source": "MAXLICPRODAPPS",
            "remarks": "Relationship from MAXLICPRODAPPS to MAXAPPS table.",
            "whereClause": "app=:appname",
            "cardinality": null
        },
        {
            "name": "MAXAPPS",
            "source": "MAXLICSELFSRVAPPS",
            "remarks": "Relationship from MAXLICSELFSRVAPPS to MAXAPPS table.",
            "whereClause": "app=:appname",
            "cardinality": null
        },
        {
            "name": "MAXAPPS",
            "source": "MAXMENU",
            "remarks": "MaxMenu to MaxApps for elementtypes APP and OPTION",
            "whereClause": "(:elementtype = 'OPTION' and app = :moduleapp) or (:elementtype = 'APP' and app = :keyvalue)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "source": "MAXMODULES",
            "remarks": "Relationship to MaxApps table by module (maxapps.module = maxmodules.module ). This relationship will find 1 or more objects.",
            "whereClause": "module=:module",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "source": "MAXOBJECT",
            "remarks": "MaxObject to any app for which this is the main object",
            "whereClause": "maintbname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMXMLAPP",
            "source": "MAXPRESENTATION",
            "remarks": null,
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "source": "OSLCINTERACTION",
            "remarks": "Relation to get Application Description Name. It will return one row.",
            "whereClause": "app=:appname",
            "cardinality": null
        },
        {
            "name": "MAXAPPS",
            "source": "OSLCINTGRPAPPS",
            "remarks": "Relation to get Application Description Name. It will return one row.",
            "whereClause": "app=:appname",
            "cardinality": null
        },
        {
            "name": "STARTUPAPPLICATION",
            "source": "PERSON",
            "remarks": "Person startup application relationship.",
            "whereClause": "app=:dfltapp",
            "cardinality": null
        },
        {
            "name": "MAXAPPS",
            "source": "QUERY",
            "remarks": "Relationship to MaxApps table. (maxapps.app = query.app). The result set will normally contain one object, assuming the app exists in only one module.",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTTOAPP",
            "source": "REPORT",
            "remarks": "Report to Maxapps",
            "whereClause": "app = :appname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "source": "SECURITYRESTRICT",
            "remarks": "Relationship from Security Restriction to MaxApps",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TASKAPP",
            "source": "SHOWWFTASK",
            "remarks": "Relationship to get the MAXAPPS description.",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "source": "SIGOPTION",
            "remarks": "Relationship to MaxApps table. (maxapps.app = sigoption.app). The result set will normally contain one object, assuming the app exists in only one module.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "source": "VIEWSECURITYDET",
            "remarks": "Relationship from VIEWSECURITYDET to MAXAPPS",
            "whereClause": "app=:appname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "source": "WFAPPTOOLBAR",
            "remarks": "Relationship to the application where the button resides. (app = :appname). Single member set.",
            "whereClause": "app = :appname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNAPP",
            "source": "WFASSIGNMENT",
            "remarks": "Relationship to get the MAXAPPS description.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        }
    ]
}