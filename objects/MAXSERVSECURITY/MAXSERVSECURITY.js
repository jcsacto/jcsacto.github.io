mos = {
    "objectName": "MAXSERVSECURITY",
    "className": "psdi.app.signature.MaxServSecuritySet",
    "description": "Application service security",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXSERVSECURITYID",
    "primaryKeyColumns": [
        "SERVICENAME",
        "METHODNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "MAXSERVICE",
            "targetObject": "MAXSERVSECURITY",
            "parentKeys": "SERVICENAME",
            "targetKeys": "SERVICENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "MAXSERVSECURITY",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APP, OPTIONNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Signature Security Option",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAXSERVSECURITYID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVICENAME",
            "required": true,
            "persistent": true,
            "title": "Service",
            "remarks": "The application service containing the method to be secured.",
            "sameAsAttribute": "SERVICENAME",
            "sameAsObject": "MAXSERVICE"
        },
        {
            "attributeName": "METHODNAME",
            "required": true,
            "persistent": true,
            "title": "Method",
            "remarks": "The name of the method to be secured.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "The name of the application, part of the key to SigOption.",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "OPTIONNAME",
            "required": true,
            "persistent": true,
            "title": "Option",
            "remarks": "Security option name.  App and option name are key to SigOption.  SigOption is the security entity that should be evaluated when calling the specified method.",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}