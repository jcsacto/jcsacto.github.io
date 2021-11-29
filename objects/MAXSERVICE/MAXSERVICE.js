mos = {
    "objectName": "MAXSERVICE",
    "className": "psdi.app.configure.MaxServiceSet",
    "description": "Java Services",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXSERVICEID",
    "primaryKeyColumns": [
        "SERVICENAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXSERVICE",
            "targetObject": "MAXOBJECT",
            "parentKeys": "SERVICENAME",
            "targetKeys": "SERVICENAME",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "The service that provides the Mbo Object.",
            "longDescription": null
        },
        {
            "objectName": "MAXSERVICE",
            "targetObject": "MAXOBJECTCFG",
            "parentKeys": "SERVICENAME",
            "targetKeys": "SERVICENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 2",
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
        }
    ],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SERVICENAME",
            "required": true,
            "persistent": true,
            "title": "Service",
            "remarks": "A description of the service.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "A description of the service that uses the object.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSNAME",
            "required": true,
            "persistent": true,
            "title": "Class",
            "remarks": "Name of the Java class that implements the service.",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MAXSERVICEID",
            "required": true,
            "persistent": true,
            "title": "MAXSERVICEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INITORDER",
            "required": true,
            "persistent": true,
            "title": "Initialization Order",
            "remarks": "The order in the sequence of which the services are initialized during server startup. If it is not a out-of-the-box service, the number should start from 1000.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERNAL",
            "required": true,
            "persistent": true,
            "title": "Internal",
            "remarks": "When checked, indicates that this service is internal to maximo and cannot be disabled.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Only when set to true, will maximo load and initialize this service.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SINGLETON",
            "required": false,
            "persistent": true,
            "title": "Is Singleton",
            "remarks": "Specifies whether the session is singleton or can be different for tenant",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXSERVICE",
            "source": "MAXOBJECTCFG",
            "remarks": "MaxObjectCfg to MaxService.  The result set will contain one object.",
            "whereClause": "servicename = :servicename",
            "cardinality": "UNDEFINED"
        }
    ]
}