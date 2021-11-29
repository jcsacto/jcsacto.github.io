mos = {
    "objectName": "REPORTADHOCPARAM",
    "className": "psdi.app.report.virtual.ReportAdHocParamSet",
    "description": "Nonpersistent table for ad hoc report parameter entry.",
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
            "attributeName": "ATTRIBUTENAME",
            "required": false,
            "persistent": false,
            "title": "Attribute Name",
            "remarks": "The name of the attribute this parameter is bound to.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Filter",
            "remarks": "Description of the parameter.",
            "sameAsAttribute": "REPORTLABEL",
            "sameAsObject": "REPORTADHOCFIELD"
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": false,
            "title": "Value",
            "remarks": "The user supplied value for the parameter.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SINGLEVALUE",
            "required": true,
            "persistent": false,
            "title": "Single Value",
            "remarks": "Does the filter support single or multiple values?",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "REPORTADHOCPARAM",
            "source": "REPORTADHOC",
            "remarks": "Relationship from THE REPORTADHOC table to the nonpersistent REPORTADHOCPARAM table.",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}