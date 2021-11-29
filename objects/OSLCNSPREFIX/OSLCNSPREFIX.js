mos = {
    "objectName": "OSLCNSPREFIX",
    "className": "com.ibm.tivoli.maximo.oslc.provider.app.OslcNSPrefixSet",
    "description": "Table for oslc namespace prefix",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSLCNSPREFIXID",
    "primaryKeyColumns": [
        "NSURI"
    ],
    "logicalRelationships": [
        {
            "objectName": "OSLCNSPREFIX",
            "targetObject": "OSLCCOMMONPROPS",
            "parentKeys": "NSURI",
            "targetKeys": "OSLCPROPNS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Namespace",
            "longDescription": null
        },
        {
            "objectName": "OSLCNSPREFIX",
            "targetObject": "OSLCDOMAIN",
            "parentKeys": "NSURI",
            "targetKeys": "NSURI",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Namespace",
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
        },
        {
            "objectName": "OSLCNSPREFIX",
            "targetObject": "OSLCRESOURCE",
            "parentKeys": "NSURI",
            "targetKeys": "DFLTNSURI",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Namespace",
            "longDescription": null
        },
        {
            "objectName": "OSLCNSPREFIX",
            "targetObject": "OSLCRESOURCE",
            "parentKeys": "NSURI",
            "targetKeys": "OSLCNSURI",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Namespace",
            "longDescription": null
        },
        {
            "objectName": "OSLCNSPREFIX",
            "targetObject": "OSLCRESOURCE",
            "parentKeys": "NSURI",
            "targetKeys": "OSLCUSAGEURI",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Usage Namespace",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "NSPREFIX",
            "required": false,
            "persistent": true,
            "title": "Namespace Prefix",
            "remarks": "The prefix for the namespace.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NSURI",
            "required": true,
            "persistent": true,
            "title": "Namespace URI",
            "remarks": "The namespace for the URI.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSLCNSPREFIXID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "If the check box is selected, the namespace binding was created by a user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}