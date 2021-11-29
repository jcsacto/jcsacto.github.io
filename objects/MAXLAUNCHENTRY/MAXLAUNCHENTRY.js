mos = {
    "objectName": "MAXLAUNCHENTRY",
    "className": "psdi.iface.app.launch.MaxLaunchEntrySet",
    "description": "Launch in Context table",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLAUNCHENTRYID",
    "primaryKeyColumns": [
        "LAUNCHENTRYNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXLAUNCHENTRY",
            "targetObject": "JOBPLAN",
            "parentKeys": "LAUNCHENTRYNAME",
            "targetKeys": "LAUNCHENTRYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Launch Entry",
            "longDescription": null
        },
        {
            "objectName": "MAXLAUNCHENTRY",
            "targetObject": "JOBTASK",
            "parentKeys": "LAUNCHENTRYNAME",
            "targetKeys": "LAUNCHENTRYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Launch Entry",
            "longDescription": null
        },
        {
            "objectName": "MAXLAUNCHENTRY",
            "targetObject": "MAXLECONTEXT",
            "parentKeys": "LAUNCHENTRYNAME",
            "targetKeys": "LAUNCHENTRYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Launch Entry",
            "longDescription": null
        },
        {
            "objectName": "MAXLAUNCHENTRY",
            "targetObject": "SIGOPTFLAG",
            "parentKeys": "LAUNCHENTRYNAME",
            "targetKeys": "VALUE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Launch Entry",
            "longDescription": null
        },
        {
            "objectName": "MAXLAUNCHENTRY",
            "targetObject": "WOACTIVITY",
            "parentKeys": "LAUNCHENTRYNAME",
            "targetKeys": "LAUNCHENTRYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Launch Entry",
            "longDescription": null
        },
        {
            "objectName": "MAXLAUNCHENTRY",
            "targetObject": "WOCHANGE",
            "parentKeys": "LAUNCHENTRYNAME",
            "targetKeys": "LAUNCHENTRYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Launch Entry",
            "longDescription": null
        },
        {
            "objectName": "MAXLAUNCHENTRY",
            "targetObject": "WORELEASE",
            "parentKeys": "LAUNCHENTRYNAME",
            "targetKeys": "LAUNCHENTRYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Launch Entry",
            "longDescription": null
        },
        {
            "objectName": "MAXLAUNCHENTRY",
            "targetObject": "WORKORDER",
            "parentKeys": "LAUNCHENTRYNAME",
            "targetKeys": "LAUNCHENTRYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Launch Entry",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXLAUNCHENTRY",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXLAUNCHENTRY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAXLAUNCHENTRYID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LAUNCHENTRYNAME",
            "required": true,
            "persistent": true,
            "title": "Launch Entry Name",
            "remarks": "Launch Entry",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYNAME",
            "required": false,
            "persistent": true,
            "title": "Display Name",
            "remarks": "Launch Entry Display Name",
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
            "attributeName": "DISPLAYNAME_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DISPLAYNAME Long description",
            "remarks": "Long description for DISPLAYNAME",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Las LD",
            "remarks": "Has Long Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PORTNUMBER",
            "required": false,
            "persistent": true,
            "title": "Port Number",
            "remarks": "Port Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONSOLEURL",
            "required": true,
            "persistent": true,
            "title": "Console URL",
            "remarks": "Console URL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETWINDOW",
            "required": false,
            "persistent": true,
            "title": "Target Browser Window",
            "remarks": "Target Browser Window",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OMPPRODUCTNAME",
            "required": false,
            "persistent": true,
            "title": "OMP Product Name",
            "remarks": "OMP Productname",
            "sameAsAttribute": "PRODUCTNAME",
            "sameAsObject": "OMP"
        },
        {
            "attributeName": "OMPVERSION",
            "required": false,
            "persistent": true,
            "title": "OMP Version",
            "remarks": "OMP Version",
            "sameAsAttribute": "VERSION",
            "sameAsObject": "OMP"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMMAXLNENTRYLONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "long description record for MAXLAUNCHENTRY",
            "whereClause": "ldkey=:maxlaunchentryid and ldownertable = 'MAXLAUNCHENTRY'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXLECONTEXT",
            "target": "MAXLECONTEXT",
            "remarks": "Relationship between Launch Entry and Launch Context, that shows all of the Launch Context that for Launch entry.",
            "whereClause": "launchentryname=:launchentryname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTFLAG",
            "target": "SIGOPTFLAG",
            "remarks": "Relationship from MAXLAUNCHENTRY to SIGOPTFLAG, showing the SIGOPTFLAG entries that have a reference to the current MAXLAUNCHENTRY",
            "whereClause": "value=:launchentryname and flagname in ('LAUNCHENTRY')",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXLAUNCHENTRY",
            "source": "SIGOPTFLAGDLGPRX",
            "remarks": "Links the launch entry loookup in the Advanced Sigoption Flag dialog",
            "whereClause": "launchentryname=:value",
            "cardinality": "UNDEFINED"
        }
    ]
}