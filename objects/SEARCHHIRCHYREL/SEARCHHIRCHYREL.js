mos = {
    "objectName": "SEARCHHIRCHYREL",
    "className": "psdi.app.workorder.virtual.SearchHirchyrelSet",
    "description": "Use to search hierarchies and relationships",
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
            "attributeName": "RECORDKEY",
            "required": false,
            "persistent": false,
            "title": "Search Record",
            "remarks": "Record key of work order or ticket",
            "sameAsAttribute": "RECORDKEY",
            "sameAsObject": "WORKVIEW"
        },
        {
            "attributeName": "CLASS",
            "required": false,
            "persistent": false,
            "title": "Record Class",
            "remarks": "Class of work order or ticket",
            "sameAsAttribute": "CLASS",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Record Site",
            "remarks": "site of record",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Record Org",
            "remarks": "orgnization of record",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SHOWRELRECORDS",
            "required": true,
            "persistent": false,
            "title": "Show Related Records",
            "remarks": "Should Related records be displayed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWTOPLEVLREC",
            "required": true,
            "persistent": false,
            "title": "Show Top Level Record",
            "remarks": "Should the only result be the Top Level parent",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWUPHIERARCHY",
            "required": true,
            "persistent": false,
            "title": "Show Up Hierarchy",
            "remarks": "Should the ancestor work orders be displayed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWDOWNHIERARCHY",
            "required": true,
            "persistent": false,
            "title": "Show Down Hierarchy",
            "remarks": "Should the descendant work orders be displayed",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SEARCHHIRCHYREL",
            "source": "MULTIASSETLOCCI",
            "remarks": "use for searching workview records",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SEARCHHIRCHYREL",
            "source": "WORKORDER",
            "remarks": "use for searching workview records",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}