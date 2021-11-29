mos = {
    "objectName": "OSLCDOMAIN",
    "className": "com.ibm.tivoli.maximo.oslc.provider.app.OslcDomainSet",
    "description": "Table for oslc domain",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSLCDOMAINID",
    "primaryKeyColumns": [
        "DOMAINNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "OSLCDOMAIN",
            "targetObject": "OSLCRESOURCE",
            "parentKeys": "DOMAINNAME",
            "targetKeys": "DOMAINNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "OSLC Domain",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "OSLCDOMAIN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PROVIDEROBJNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Service Provider",
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
        }
    ],
    "columns": [
        {
            "attributeName": "DOMAINNAME",
            "required": false,
            "persistent": true,
            "title": "Domain Name",
            "remarks": "The OSLC domain to which resources can belong.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NSURI",
            "required": true,
            "persistent": true,
            "title": "Domain Namespace URI",
            "remarks": "The namespace URI for a domain.",
            "sameAsAttribute": "NSURI",
            "sameAsObject": "OSLCNSPREFIX"
        },
        {
            "attributeName": "PROVIDEROBJNAME",
            "required": false,
            "persistent": true,
            "title": "Service Provider",
            "remarks": "Service Provider.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OSLCDOMAINID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Identifies the unique OSLC Domain ID.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "If the check box is selected, the domain was created by a user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "OSLCDOMAIN",
            "source": "OSLCRESOURCE",
            "remarks": "Relation to get all OSLC Resource details. This relationship returns one or more rows.",
            "whereClause": "domainname=:domainname",
            "cardinality": null
        }
    ]
}