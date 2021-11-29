mos = {
    "objectName": "RESULTSETCOLS",
    "className": "psdi.app.rsconfig.ResultSetColsSet",
    "description": "Result Set Columns",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "RESULTSETCOLSID",
    "primaryKeyColumns": [
        "RESULTSETCOLSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "RSCONFIG",
            "targetObject": "RESULTSETCOLS",
            "parentKeys": "APP, QUERYCOLUMN",
            "targetKeys": "APP, ATTRIBUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Selected Columns for the Result Set Portlet",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "APP",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "Application",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Attribute",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESULTSETCOLSID",
            "required": true,
            "persistent": true,
            "title": "RESULTSETCOLSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAINTABLE",
            "required": false,
            "persistent": true,
            "title": "Main Table",
            "remarks": "Main Table",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "RESULTSETCOLS",
            "source": "RSCONFIG",
            "remarks": "Relationship between RSCONFIG and RESULTSETCOLS table",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        }
    ]
}