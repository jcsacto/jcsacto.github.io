mos = {
    "objectName": "RSCONFIG",
    "className": "psdi.app.rsconfig.RSConfigSet",
    "description": "Result Set Portlet Configuration",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "RSCONFIGID",
    "primaryKeyColumns": [
        "RSCONFIGID"
    ],
    "logicalRelationships": [
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
    "targetLogicalRelationships": [
        {
            "objectName": "LAYOUT",
            "targetObject": "RSCONFIG",
            "parentKeys": "LAYOUTID",
            "targetKeys": "LAYOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the Result Set Portlet Configuration to the Start Center Layout",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RSCONFIGID",
            "required": true,
            "persistent": true,
            "title": "Config Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LAYOUTID",
            "required": false,
            "persistent": true,
            "title": "Layout",
            "remarks": "Layout Id",
            "sameAsAttribute": "LAYOUTID",
            "sameAsObject": "LAYOUT"
        },
        {
            "attributeName": "QUERYCOLUMN",
            "required": false,
            "persistent": true,
            "title": "Query Column",
            "remarks": "Enter the column name to filter the list by.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "A user-entered, plain language description for this column. This description appears only in the Resut Set.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COLUMNORDER",
            "required": false,
            "persistent": true,
            "title": "Order",
            "remarks": "Enter a number for the order the items are to be listed in.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAY",
            "required": true,
            "persistent": true,
            "title": "Display",
            "remarks": "Check this box to display this column in the Result Set.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "Application Linked To",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUERYID",
            "required": false,
            "persistent": true,
            "title": "Query Id",
            "remarks": "Query Id",
            "sameAsAttribute": "QUERYID",
            "sameAsObject": "QUERY"
        },
        {
            "attributeName": "ISCONDITIONSET",
            "required": true,
            "persistent": true,
            "title": "ISCONDITIONSET",
            "remarks": "Is Condition SetOn this column",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISGRAPHON",
            "required": true,
            "persistent": true,
            "title": "Select For Graph Display",
            "remarks": "Selected For Graph",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTENTUID",
            "required": true,
            "persistent": true,
            "title": "CONTENTUID",
            "remarks": "Content Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "QUERY",
            "target": "QUERY",
            "remarks": "Relationship of RSConfig Object with Query Object. Used to return the query in a Result Set Portlet Configuration",
            "whereClause": "clausename = :clausename and app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RESULTSETCOLS",
            "target": "RESULTSETCOLS",
            "remarks": "Relationship between RSCONFIG and RESULTSETCOLS table",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RSCONFIG",
            "source": "LAYOUT",
            "remarks": "Relationship between PORTLET Object and LAYOUT object. Used to return result set portlet configuration for a given portlet.",
            "whereClause": "layoutid = :layoutid",
            "cardinality": "UNDEFINED"
        }
    ]
}