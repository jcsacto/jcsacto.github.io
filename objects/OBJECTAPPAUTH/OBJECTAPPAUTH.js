mos = {
    "objectName": "OBJECTAPPAUTH",
    "className": "psdi.iface.app.intobject.MaxObjectAppAuthSet",
    "description": "Object Application Authorization",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OBJECTAPPAUTHID",
    "primaryKeyColumns": [
        "CONTEXT",
        "OBJECTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "MAXOBJECT",
            "targetObject": "OBJECTAPPAUTH",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CONTEXT",
            "required": true,
            "persistent": true,
            "title": "Integration Context",
            "remarks": "Specify the REST API context for the object resource (for example if the object resource URI is /rest/mbo/po, the REST API context for object po is /rest/mbo). The context is case-sensitive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object",
            "remarks": "Specify the object that the REST API can query or update using this application security context.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "AUTHAPP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Specify an application that can authorize the request. The combination of the application and the security group of the user determines if the request is authorized.",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the context",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OBJECTAPPAUTHID",
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