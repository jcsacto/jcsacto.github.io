mos = {
    "objectName": "DATASTORE",
    "className": "psdi.app.designer.virtual.DatastoreSet",
    "description": "Datastore virtual object",
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
            "attributeName": "ID",
            "required": true,
            "persistent": false,
            "title": "ID",
            "remarks": "DataStore ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOMAIN",
            "required": true,
            "persistent": false,
            "title": "Domain",
            "remarks": "Domain Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATASRC",
            "required": true,
            "persistent": false,
            "title": "Data Source",
            "remarks": "Data Source",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALIDFOR",
            "required": true,
            "persistent": false,
            "title": "Valid For",
            "remarks": "Interval for domain refreshing",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CACHEDATA",
            "required": true,
            "persistent": false,
            "title": "Cache Data",
            "remarks": "Cache data, or always fetch data from the server",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATAATTRIBUTE",
            "required": true,
            "persistent": false,
            "title": "Data Attribute",
            "remarks": "Data Attribute",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DATASTOREFILTER",
            "target": "DATASTORECHILD",
            "remarks": "Relationship to the set for application designer datastore filter configuration",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "DATASTORESETVALUE",
            "target": "DATASTORECHILD",
            "remarks": "Relationship to the set for application designer datastore setvalue configuration",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "DATASTORETYPEAHEAD",
            "target": "DATASTORECHILD",
            "remarks": "Relationship to the set for application designer datastore typeahead configuration",
            "whereClause": "",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DATASTORES",
            "source": "DATASTORECHILD",
            "remarks": "Relationship to the set for application designer datastore setvalue and filter configuration",
            "whereClause": "",
            "cardinality": null
        }
    ]
}