mos = {
    "objectName": "OSLCBUSRES",
    "className": "com.ibm.tivoli.maximo.oslc.provider.bus.OSLCBusResourceSet",
    "description": "OSLC Bus Definition",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "OSLCBUSRESID",
    "primaryKeyColumns": [
        "RESCONTEXT"
    ],
    "logicalRelationships": [
        {
            "objectName": "OSLCBUSRES",
            "targetObject": "OSLCBUSRES",
            "parentKeys": "RESCONTEXT",
            "targetKeys": "PARENTCONTEXT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Resource",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "OSLCBUSRES",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "OSLCBUSRES",
            "targetObject": "OSLCBUSRES",
            "parentKeys": "RESCONTEXT",
            "targetKeys": "PARENTCONTEXT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Resource",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CLASSNAME",
            "required": true,
            "persistent": true,
            "title": "Class or Script name",
            "remarks": "Specify a class name or script name that is used to retrieve information for the resource. The format is script:name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the system information that this resource represents.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROPERTYNAME",
            "required": true,
            "persistent": true,
            "title": "Property Name",
            "remarks": "The qualified property name that the resource is attached to.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESCONTEXT",
            "required": true,
            "persistent": true,
            "title": "Resource Name",
            "remarks": "The name of the resource.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENTCONTEXT",
            "required": false,
            "persistent": true,
            "title": "Parent Name",
            "remarks": "The name of the parent resource for nested resources.",
            "sameAsAttribute": "RESCONTEXT",
            "sameAsObject": "OSLCBUSRES"
        },
        {
            "attributeName": "ISCOLLECTION",
            "required": true,
            "persistent": true,
            "title": "Is Collection",
            "remarks": "Generates Collection Resources",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPTIONNAME",
            "required": false,
            "persistent": true,
            "title": "Signature Option",
            "remarks": "Only users who have access to this signature option can access the resource. If no signature option is specified, all users can access the resource.",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "PROPNS",
            "required": true,
            "persistent": false,
            "title": "Property Namespace",
            "remarks": "The property namespace that the resource is attached to.",
            "sameAsAttribute": "NSURI",
            "sameAsObject": "OSLCNSPREFIX"
        },
        {
            "attributeName": "PROPNAME",
            "required": true,
            "persistent": false,
            "title": "Property Name",
            "remarks": "The property name that the resource is attached to.",
            "sameAsAttribute": "PROPERTYNAME",
            "sameAsObject": "OSLCBUSRES"
        },
        {
            "attributeName": "OSLCBUSRESID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
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
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}