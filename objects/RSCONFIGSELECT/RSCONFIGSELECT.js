mos = {
    "objectName": "RSCONFIGSELECT",
    "className": "psdi.app.rsconfig.virtual.RSConfigSelectSet",
    "description": "Selected Attribute for result set portlet",
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
            "attributeName": "APP",
            "required": true,
            "persistent": false,
            "title": "Application",
            "remarks": "Application Linked To",
            "sameAsAttribute": "APP",
            "sameAsObject": "RSCONFIG"
        },
        {
            "attributeName": "QUERYCOLUMN",
            "required": true,
            "persistent": false,
            "title": "Query Column",
            "remarks": "Enter the column name to filter the list by.",
            "sameAsAttribute": "QUERYCOLUMN",
            "sameAsObject": "RSCONFIG"
        },
        {
            "attributeName": "COLUMNORDER",
            "required": false,
            "persistent": false,
            "title": "Order",
            "remarks": "A number that indicates the order of the fields in the portlet.",
            "sameAsAttribute": "COLUMNORDER",
            "sameAsObject": "RSCONFIG"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": true,
            "persistent": false,
            "title": "Description",
            "remarks": "A user-entered, plain language description for this column. This description appears only in the Resut Set.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "RSCONFIG"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "RSCONFIGSELECT",
            "source": "LAYOUT",
            "remarks": "Relationship from LAYOUT to Selected Attributes",
            "whereClause": "",
            "cardinality": null
        }
    ]
}