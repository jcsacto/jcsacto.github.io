mos = {
    "objectName": "TAXORDER",
    "className": "psdi.app.financial.TaxOrderSet",
    "description": "Tax Order table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TAXORDERID",
    "primaryKeyColumns": [
        "ORGID",
        "TABLENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "TAXORDER",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TABLENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TAXORDER",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TABLENAME",
            "required": true,
            "persistent": true,
            "title": "Table Name",
            "remarks": "Table Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "TAXORDER",
            "required": true,
            "persistent": true,
            "title": "Order",
            "remarks": "The order in which tax codes are used to calculate the amount of tax that is due.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "TAXORDERID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "TAXSOURCE",
            "target": "ALNDOMAIN",
            "remarks": "d",
            "whereClause": "domainid='TAXSOURCE' and value=:tablename",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "TAXORDER",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the TaxOrder table, used to find all tax order records for a given organization. (organization.orgid = taxorder.orgid). The resulting set will contain one or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": null
        }
    ]
}