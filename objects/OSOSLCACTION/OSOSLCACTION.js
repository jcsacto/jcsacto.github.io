mos = {
    "objectName": "OSOSLCACTION",
    "className": "com.ibm.tivoli.maximo.oslc.provider.app.OslcActionSet",
    "description": "OSLC Actions",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSOSLCACTIONID",
    "primaryKeyColumns": [
        "NAME",
        "INTOBJECTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "MAXINTOBJECT",
            "targetObject": "OSOSLCACTION",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "OSOSLCACTION",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APP, OPTIONNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Signature Option",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NAME",
            "required": false,
            "persistent": true,
            "title": "Name",
            "remarks": "Relation Property Name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object Structure",
            "remarks": "Object Structure",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "IMPLTYPE",
            "required": false,
            "persistent": true,
            "title": "Implementation Type",
            "remarks": "Implementation Type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMPLNAME",
            "required": false,
            "persistent": true,
            "title": "Implementation Name",
            "remarks": "Implementation Name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPTIONNAME",
            "required": false,
            "persistent": true,
            "title": "Option Name",
            "remarks": "Option Name.",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Security App",
            "remarks": "Security App",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "COLLECTION",
            "required": true,
            "persistent": true,
            "title": "Collection Action",
            "remarks": "Collection Action",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSOSLCACTIONID",
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
            "name": "OSOSLCACTION",
            "source": "MAXINTOBJECT",
            "remarks": "Relation to object structure actions ",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        }
    ]
}