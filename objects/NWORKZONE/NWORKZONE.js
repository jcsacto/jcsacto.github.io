mos = {
    "objectName": "NWORKZONE",
    "className": "com.ibm.tivoli.maximo.workzone.NWorkZoneSet",
    "description": "Non persistent Work Zone",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "WORKZONE",
            "required": true,
            "persistent": false,
            "title": "Work Zone",
            "remarks": "The name of the work zone",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": false,
            "title": "Work Zone Type",
            "remarks": "The type of the work zone",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization the workzone belongs to",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}