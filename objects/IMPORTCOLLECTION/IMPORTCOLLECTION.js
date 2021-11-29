mos = {
    "objectName": "IMPORTCOLLECTION",
    "className": "psdi.dm.collection.virtual.ImportCollectionSet",
    "description": "Parameters for Importing Collections",
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
            "attributeName": "FILENAME",
            "required": true,
            "persistent": false,
            "title": "Specify a File",
            "remarks": "Name of File to Import",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDCONFIG",
            "required": true,
            "persistent": false,
            "title": "Add Configuration records to migration collection",
            "remarks": "Create Configuration from imported Collection",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMPORTLIMIT",
            "required": true,
            "persistent": false,
            "title": "Import Limit",
            "remarks": "The import limit restricts the number of records that are imported. If you raise the limit, you might cause out-of-memory errors.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "IMPORTCOLLECTION",
            "source": "DMCOLLECTION",
            "remarks": "Link to Import parameters set",
            "whereClause": null,
            "cardinality": null
        }
    ]
}