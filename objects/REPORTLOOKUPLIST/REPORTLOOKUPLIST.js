mos = {
    "objectName": "REPORTLOOKUPLIST",
    "className": "psdi.app.report.virtual.ReportLookupListSet",
    "description": "Virtual mbo for lookup type for an attribute",
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
            "attributeName": "LOOKUPNAME",
            "required": false,
            "persistent": false,
            "title": "Lookup Name",
            "remarks": "Lookup Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "REPORT_LOOKUPS",
            "source": "REPORTLOOKUP",
            "remarks": "List of Lookups",
            "whereClause": "lookupname = :lookupname",
            "cardinality": "UNDEFINED"
        }
    ]
}