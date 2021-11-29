mos = {
    "objectName": "DMRESTRICTION",
    "className": "psdi.dm.DMRestrictionSet",
    "description": "MAXIMO environment to which deployment not allowed",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMRESTRICTIONID",
    "primaryKeyColumns": [
        "INSTANCENAME",
        "INSTANCESCHEMA",
        "INSTANCEHOST"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "DMRESTRICTIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTANCENAME",
            "required": true,
            "persistent": true,
            "title": "Database Name",
            "remarks": "Specifies the database instance identifier as obtained from the RDBMS. For databases that use names longer than eight characters, such as Oracle databases, the first eight characters of the name must be unique so that inbound restrictions for different source environments are applied correctly.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTANCESCHEMA",
            "required": true,
            "persistent": true,
            "title": "Database Schema",
            "remarks": "Specifies the database schema identifier within which all Maximo tables occur",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTANCEHOST",
            "required": true,
            "persistent": true,
            "title": "Database Host",
            "remarks": "Specifies the hostname of the machine where the RDBMS and database files are available",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}