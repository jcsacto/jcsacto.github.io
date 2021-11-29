mos = {
    "objectName": "DATASTORECHILD",
    "className": "psdi.app.designer.virtual.DatastoreChildSet",
    "description": "Virtual object for datastore child objects such as typeahead, setvalue and filter",
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
            "required": false,
            "persistent": false,
            "title": "ID",
            "remarks": "Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOMAINATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Domain Attribute",
            "remarks": "Domain Attribute",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEYATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Key Attribute",
            "remarks": "Is key attribute for typeahead",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "To Attribute",
            "remarks": "To attribute for setvalue",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FROMATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "From Attribute",
            "remarks": "From attribute for filter",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TODATASRC",
            "required": false,
            "persistent": false,
            "title": "To Datasource",
            "remarks": "To datasource",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FROMDATASRC",
            "required": false,
            "persistent": false,
            "title": "From Datasource",
            "remarks": "From datasource",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DATASTORES",
            "target": "DATASTORE",
            "remarks": "Relationship to the set for application designer datastore setvalue and filter configuration",
            "whereClause": "",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DATASTOREFILTER",
            "source": "DATASTORE",
            "remarks": "Relationship to the set for application designer datastore filter configuration",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "DATASTORESETVALUE",
            "source": "DATASTORE",
            "remarks": "Relationship to the set for application designer datastore setvalue configuration",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "DATASTORETYPEAHEAD",
            "source": "DATASTORE",
            "remarks": "Relationship to the set for application designer datastore typeahead configuration",
            "whereClause": "",
            "cardinality": null
        }
    ]
}