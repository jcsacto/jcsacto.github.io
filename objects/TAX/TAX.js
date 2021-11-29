mos = {
    "objectName": "TAX",
    "className": "psdi.app.financial.TaxSet",
    "description": "The Tax Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TAXID",
    "primaryKeyColumns": [
        "ORGID",
        "TYPECODE",
        "TAXCODE",
        "EFFECTIVE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "TAX",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TAX",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TAX",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "TAXTYPE",
            "targetObject": "TAX",
            "parentKeys": "ORGID, TYPECODE",
            "targetKeys": "ORGID, TYPECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tax Type",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TYPECODE",
            "required": true,
            "persistent": true,
            "title": "Tax Code Identifier",
            "remarks": "Tax Code Identifier",
            "sameAsAttribute": "TYPECODE",
            "sameAsObject": "TAXTYPE"
        },
        {
            "attributeName": "TAXCODE",
            "required": true,
            "persistent": true,
            "title": "Tax Code",
            "remarks": "Short identifier for the tax, for example, MA to represent the Massachusetts sales tax.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAXRATE",
            "required": true,
            "persistent": true,
            "title": "Tax Rate",
            "remarks": "Tax rate for the specified tax code, for example, 5.0 for a 5 percent sales tax. When a tax rate changes, the Effective Date and the Changed Date fields do not get updated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EFFECTIVE",
            "required": true,
            "persistent": true,
            "title": "Effective Date",
            "remarks": "Tax applies from this date forward.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVEGL",
            "required": false,
            "persistent": true,
            "title": "Paid Tax GL Account",
            "remarks": "GL Account used for invoices that include the tax.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXCLUSIVEGL",
            "required": false,
            "persistent": true,
            "title": "Unpaid Tax GL Account",
            "remarks": "GL Account used for invoices that do not include the tax.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User who last modified tax or any rate information.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date and time that you change tax information.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the tax, for example, Massachusetts sales tax.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Tax description.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAXID",
            "required": true,
            "persistent": true,
            "title": "TAXID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "TAX",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the Tax table, used to find all tax records for a given organization. (organization.orgid = tax.orgid). The resulting set will contain one or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAX",
            "source": "TAXTYPE",
            "remarks": "Relationship to the Tax table, used to find all tax records for a specific tax type. (tax.typecode = taxtype.typecode). This relationship will find zero or more objects.",
            "whereClause": "typecode = :typecode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}