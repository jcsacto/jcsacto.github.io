mos = {
    "objectName": "SKDTEMPLATES",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Scheduler Template Storage",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "SKDTEMPLATESID",
    "primaryKeyColumns": [
        "ORGID",
        "TEMPLATENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SKDTEMPLATES",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDTEMPLATES",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDTEMPLATES",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site id not used",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "SKD App Name",
            "remarks": "SKD APP name or ALL for all apps.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPLATENAME",
            "required": true,
            "persistent": true,
            "title": "Template Name",
            "remarks": "State Key.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPLATE",
            "required": true,
            "persistent": true,
            "title": "Template",
            "remarks": "Template Data",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "Maximo User",
            "remarks": "Maximo User Id.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MODIFIED",
            "required": true,
            "persistent": true,
            "title": "Last Modified Date",
            "remarks": "Last Modified",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDTEMPLATESID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}