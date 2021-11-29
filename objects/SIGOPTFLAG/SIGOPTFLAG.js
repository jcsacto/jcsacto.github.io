mos = {
    "objectName": "SIGOPTFLAG",
    "className": "psdi.app.appsetup.SigOptFlagSet",
    "description": "Store the flags associated with sigoptions",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SIGOPTFLAGID",
    "primaryKeyColumns": [
        "APP",
        "OPTIONNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "SIGOPTION",
            "targetObject": "SIGOPTFLAG",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APP, OPTIONNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action flagged.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SIGOPTFLAGID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPTIONNAME",
            "required": true,
            "persistent": true,
            "title": "Option",
            "remarks": "Signature Option Option Name",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Signature Option Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "FLAGNAME",
            "required": true,
            "persistent": true,
            "title": "Flag",
            "remarks": "Name of the Flag set for sigoption",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "Launch Entry Name",
            "remarks": "Launch Entry",
            "sameAsAttribute": "LAUNCHENTRYNAME",
            "sameAsObject": "MAXLAUNCHENTRY"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find a flag for the sigoption given app and optionname values. The resulting set will contain zero or one object.",
            "whereClause": "app = :app and optionname = :optionname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SIGOPTFLAG",
            "source": "MAXAPPS",
            "remarks": "Sigoption Flags for a specified application",
            "whereClause": "app=:app",
            "cardinality": null
        },
        {
            "name": "SIGOPTFLAG",
            "source": "MAXLAUNCHENTRY",
            "remarks": "Relationship from MAXLAUNCHENTRY to SIGOPTFLAG, showing the SIGOPTFLAG entries that have a reference to the current MAXLAUNCHENTRY",
            "whereClause": "value=:launchentryname and flagname in ('LAUNCHENTRY')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTFLAG",
            "source": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTFLAG table, used to find a flag for the sigoption given app and optionname values. The resulting set will contain zero or one object.",
            "whereClause": "app = :app and optionname = :optionname",
            "cardinality": "UNDEFINED"
        }
    ]
}