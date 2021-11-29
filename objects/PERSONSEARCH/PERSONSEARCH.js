mos = {
    "objectName": "PERSONSEARCH",
    "className": "com.ibm.tivoli.maximo.skd.app.virtual.SKDPersonSearchSet",
    "description": "Non-persistent object for a person search (scheduler application, select owner action, select owner,",
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
            "attributeName": "PERSONGROUP",
            "required": false,
            "persistent": false,
            "title": "Person Group",
            "remarks": "Person Group",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "FILTERDATE",
            "required": false,
            "persistent": false,
            "title": "Date",
            "remarks": "Date",
            "sameAsAttribute": "REPORTDATE",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Identifies the site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PERSONS",
            "target": "PERSONGROUPVIEW",
            "remarks": "Get person records based on search (Scheduler Application)",
            "whereClause": "1=1",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}