mos = {
    "objectName": "OSLCQUERY",
    "className": "com.ibm.tivoli.maximo.oslc.provider.app.OSLCQuerySet",
    "description": "OSLC Query Definition",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSLCQUERYID",
    "primaryKeyColumns": [
        "CLAUSENAME",
        "APP",
        "INTOBJECTNAME",
        "SCRIPTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "MAXINTOBJECT",
            "targetObject": "OSLCQUERY",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "OSLCNSPREFIX",
            "targetObject": "OSLCQUERY",
            "parentKeys": "NSURI",
            "targetKeys": "USAGE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Namespace",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INTOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Structure Name",
            "remarks": "Object Structure Name",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": true,
            "title": "App Name",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "CLAUSENAME",
            "required": false,
            "persistent": true,
            "title": "Query Clause Name",
            "remarks": "Query Clause Name",
            "sameAsAttribute": "CLAUSENAME",
            "sameAsObject": "QUERY"
        },
        {
            "attributeName": "SCRIPTNAME",
            "required": false,
            "persistent": true,
            "title": "Query Script Name",
            "remarks": "Query Script Name",
            "sameAsAttribute": "AUTOSCRIPT",
            "sameAsObject": "AUTOSCRIPT"
        },
        {
            "attributeName": "USAGE",
            "required": true,
            "persistent": true,
            "title": "Usage URI",
            "remarks": "Usage URI",
            "sameAsAttribute": "NSURI",
            "sameAsObject": "OSLCNSPREFIX"
        },
        {
            "attributeName": "OSLCQUERYID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "OSLCRESOURCE",
            "target": "OSLCRESOURCE",
            "remarks": "Finds the OSLC resource holder for query",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "OSLCQUERY",
            "source": "OSLCRESOURCE",
            "remarks": "Relationship to OSLC Query Definition entries",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        }
    ]
}