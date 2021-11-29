mos = {
    "objectName": "CHANGEPUBLICURI",
    "className": "com.ibm.tivoli.maximo.oslc.consumer.app.provider.PublicURISet",
    "description": "OSLC Service Provider",
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
            "attributeName": "OLDURI",
            "required": true,
            "persistent": false,
            "title": "Old Public URI",
            "remarks": "Old public URI.",
            "sameAsAttribute": "BASEURL",
            "sameAsObject": "OSLCPROVIDER"
        },
        {
            "attributeName": "NEWURI",
            "required": true,
            "persistent": false,
            "title": "New Public URI",
            "remarks": "New public URI.",
            "sameAsAttribute": "BASEURL",
            "sameAsObject": "OSLCPROVIDER"
        },
        {
            "attributeName": "PROVIDERNAME",
            "required": true,
            "persistent": false,
            "title": "Provider Name",
            "remarks": "Provider Name",
            "sameAsAttribute": "PROVIDERNAME",
            "sameAsObject": "OSLCPROVIDER"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CHANGEPUBLICURI",
            "source": "OSLCPROVIDER",
            "remarks": "Relation to non persistent object for changing public URI.",
            "whereClause": "",
            "cardinality": null
        }
    ]
}