mos = {
    "objectName": "OSLCNATIVEPREVIEW",
    "className": "com.ibm.tivoli.maximo.oslc.consumer.app.interaction.OslcApplicationSet",
    "description": "OSLC Application",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "PROPNAME",
            "required": false,
            "persistent": false,
            "title": "Property Name",
            "remarks": "Property Name",
            "sameAsAttribute": "PROPNAME",
            "sameAsObject": "OSLCINTQUERYPARAMS"
        },
        {
            "attributeName": "PROPTITLE",
            "required": false,
            "persistent": false,
            "title": "Title",
            "remarks": "Title",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "PROPVALUE",
            "required": false,
            "persistent": false,
            "title": "Property Value",
            "remarks": "Property Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "OSLCNATIVEPREVIEW",
            "source": "OSLCGENERATOR",
            "remarks": "Relation to get native preview properties",
            "whereClause": "",
            "cardinality": null
        }
    ]
}