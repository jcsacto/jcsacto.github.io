mos = {
    "objectName": "TAXTYPE",
    "className": "psdi.app.financial.TaxTypeSet",
    "description": "The Tax Type Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TAXTYPEID",
    "primaryKeyColumns": [
        "ORGID",
        "TYPECODE"
    ],
    "logicalRelationships": [
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
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "TAXTYPE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TAXTYPE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TAXTYPE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
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
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUDETAX1",
            "required": true,
            "persistent": true,
            "title": "Tax 1",
            "remarks": "Specifies whether to include Tax 1 in the calculation of the tax you are currently defining. Select the check box to include Tax 1.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUDETAX2",
            "required": true,
            "persistent": true,
            "title": "Tax 2",
            "remarks": "Specifies whether to include Tax 2 in the calculation of the tax you are currently defining. Select the check box to include Tax 2.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUDETAX3",
            "required": true,
            "persistent": true,
            "title": "Tax 3",
            "remarks": "Specifies whether to include Tax 3 in the calculation of the tax you are currently defining. Select the check box to include Tax 3.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVEGL",
            "required": false,
            "persistent": true,
            "title": "Paid Tax GL Account",
            "remarks": "Default GL account for taxes paid to the vendor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXCLUSIVEGL",
            "required": false,
            "persistent": true,
            "title": "Unpaid Tax GL Account",
            "remarks": "Default GL account for taxes yet to be paid to the government.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Changed by",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUDETAX4",
            "required": true,
            "persistent": true,
            "title": "Tax 4",
            "remarks": "Specifies whether to include Tax 4 in the calculation of the tax you are currently defining. Select the check box to include Tax 4.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUDETAX5",
            "required": true,
            "persistent": true,
            "title": "Tax 5",
            "remarks": "Specifies whether to include Tax 5 in the calculation of the tax you are currently defining. Select the check box to include Tax 5.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDTAXINDCR",
            "required": true,
            "persistent": true,
            "title": "Add Tax",
            "remarks": "Specifies whether to add the tax to the cost of line items when invoicing.",
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
            "remarks": "Describes the kind of tax you are defining in the dialog box. For example, the tax might be a federal, state, provincial, or city sales tax, or a special tax, such as one for handling hazardous material.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Tax type desciption.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAXTYPEID",
            "required": true,
            "persistent": true,
            "title": "TAXTYPEID",
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
    "outgoingRelationships": [
        {
            "name": "TAX",
            "target": "TAX",
            "remarks": "Relationship to the Tax table, used to find all tax records for a specific tax type. (tax.typecode = taxtype.typecode). This relationship will find zero or more objects.",
            "whereClause": "typecode = :typecode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "TAXTYPE",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the TaxType table, used to find all tax type records for a given organization. (organization.orgid = taxtype.orgid). The resulting set will contain one or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}