mos = {
    "objectName": "MAXENDPOINTTEST",
    "className": "psdi.iface.app.endpoint.MaxEndPointTestSet",
    "description": "Test End Point",
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
            "attributeName": "TESTDATA",
            "required": false,
            "persistent": false,
            "title": "Test Data",
            "remarks": "Test data",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESPONSE",
            "required": false,
            "persistent": false,
            "title": "Response",
            "remarks": "Response",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXENDPOINTTEST",
            "source": "MAXENDPOINT",
            "remarks": "Relationship to the test table . The resulting set will contain one row.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}