mos = {
    "objectName": "MAXWSREGISTRY",
    "className": "psdi.iface.app.wsregistry.MaxWSRegistrySet",
    "description": "WS Regisytry Table",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXWSREGISTRYID",
    "primaryKeyColumns": [
        "WSNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXWSREGISTRY",
            "targetObject": "MAXWSREGISTRY",
            "parentKeys": "WSNAME",
            "targetKeys": "SOURCENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXWSREGISTRY",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXWSREGISTRY",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXWSREGISTRY",
            "parentKeys": "IFACENAME",
            "targetKeys": "SERVICENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
            "longDescription": null
        },
        {
            "objectName": "MAXWSREGISTRY",
            "targetObject": "MAXWSREGISTRY",
            "parentKeys": "WSNAME",
            "targetKeys": "SOURCENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXWSREGISTRY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAXWSREGISTRYID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WSNAME",
            "required": true,
            "persistent": true,
            "title": "Web Service Name",
            "remarks": "Name of the Web service.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the Web service.",
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
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCE",
            "required": false,
            "persistent": true,
            "title": "Source",
            "remarks": "Source of the Web service, which is one of the three source options: Object Structure Service, Enterprise Service, or Standard service.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCENAME",
            "required": true,
            "persistent": true,
            "title": "Source Name",
            "remarks": "Name of the Web service source.",
            "sameAsAttribute": "WSNAME",
            "sameAsObject": "MAXWSREGISTRY"
        },
        {
            "attributeName": "SERVICENAME",
            "required": false,
            "persistent": true,
            "title": "Service Name",
            "remarks": "Underlying Service Name",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "EXTSYSNAME",
            "required": false,
            "persistent": true,
            "title": "External System",
            "remarks": "External System Name",
            "sameAsAttribute": "EXTSYSNAME",
            "sameAsObject": "MAXEXTSYSTEM"
        },
        {
            "attributeName": "ISSYNCHRONOUS",
            "required": true,
            "persistent": true,
            "title": "Bypass Queue",
            "remarks": "Indicates whether an enterprise service Web service uses the inbound Java Message Service (JMS) queue or bypasses it for synchronous communcation, for example if a response is required.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISDEPLOYED",
            "required": true,
            "persistent": true,
            "title": "Is Deployed",
            "remarks": "Is Web Service Deployed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "Indicates whether the Web service is a user-defined or a predefined service.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has LD",
            "remarks": "Has LD",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSNAME",
            "required": false,
            "persistent": true,
            "title": "Implementation Class",
            "remarks": "Service Implementation Class",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISRUNNING",
            "required": true,
            "persistent": false,
            "title": "Is Deployed",
            "remarks": "Indicates whether the Web service is deployed or not.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOAPVERSION",
            "required": false,
            "persistent": true,
            "title": "SOAP Version",
            "remarks": "Version of the SOAP protocol that the Web service uses.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPLTYPE",
            "required": false,
            "persistent": true,
            "title": "Deployment",
            "remarks": "Deployment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TENANTCODE",
            "required": false,
            "persistent": false,
            "title": "Tenant",
            "remarks": "The unique identifier for the tenant. All users that belong to this tenant enter this code as part of their login credentials. The identifier is used as the USERID value and the PERSONID value for this tenant.If you enter a long identifier when you create a tenant, the identifier is shortened. You can modify the value, but after you save it, the identifier is  read only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXWSOPERATION",
            "target": "MAXWSOPERATION",
            "remarks": "Relationship to the MAXWSOPERATION table, used to find all operations for webservice . The resulting set will contain one row.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXWSREGISTRY",
            "source": "MAXEXTIFACEIN",
            "remarks": "Relationship to get all WS Registry records for external system. It will return zero or more records.",
            "whereClause": "extsysname=:extsysname and servicename=:ifacename and source = 'Enterprise Service'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXWSREGISTRY",
            "source": "MAXINTOBJECT",
            "remarks": "Relationship to get all WS Registry records for Object Structure. It will return zero or more records.",
            "whereClause": "servicename=:intobjectname  and source = 'Object Structure Service'",
            "cardinality": null
        }
    ]
}