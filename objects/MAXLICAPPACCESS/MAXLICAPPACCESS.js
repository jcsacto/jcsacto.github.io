mos = {
    "objectName": "MAXLICAPPACCESS",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Application Access List",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLICAPPACCESSID",
    "primaryKeyColumns": [
        "APPNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "MAXMODULES",
            "targetObject": "MAXLICAPPACCESS",
            "parentKeys": "MODULE",
            "targetKeys": "MODULE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo Modules",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "APPNAME",
            "required": true,
            "persistent": true,
            "title": "Application Name",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "MODULE",
            "required": true,
            "persistent": true,
            "title": "Module Name",
            "remarks": "Module Name",
            "sameAsAttribute": "MODULE",
            "sameAsObject": "MAXMODULES"
        },
        {
            "attributeName": "SELFSERVICE",
            "required": true,
            "persistent": true,
            "title": "Self Service User",
            "remarks": "Self Service User",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPRESSUSE",
            "required": true,
            "persistent": true,
            "title": "Express User",
            "remarks": "Express User",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LIMITEDUSE",
            "required": true,
            "persistent": true,
            "title": "Limited Use User",
            "remarks": "Limited Use User",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "THREEMODULE",
            "required": true,
            "persistent": true,
            "title": "Part of Three Module",
            "remarks": "Part of Three Module",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTHORIZEDUSE",
            "required": true,
            "persistent": true,
            "title": "Authorized User",
            "remarks": "Authorized User",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXLICAPPACCESSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXLICAPPACCESS",
            "source": "MAXLICPRODAPPS",
            "remarks": "Relationship from MAXLICPRODAPPS to MAXLICAPPACCESS table.",
            "whereClause": "appname=:appname",
            "cardinality": null
        }
    ]
}