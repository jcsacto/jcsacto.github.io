mos = {
    "objectName": "CURRENCY",
    "className": "psdi.app.currency.CurrencySet",
    "description": "The Currency Management Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "CURRENCYID",
    "primaryKeyColumns": [
        "CURRENCYCODE"
    ],
    "logicalRelationships": [
        {
            "objectName": "CURRENCY",
            "targetObject": "COMPANIES",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "COMPMASTER",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "CONTRACT",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "EXCHANGE",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "EXCHANGE",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODETO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "FAVITEM",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "INVOICE",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "INVOICETRANS",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "INVUSE",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Currency used on InvUse record.",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "LABORVIEW",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "LEASEVIEW",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "MASTERVIEW",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "MATRECTRANS",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Recorded Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "MATUSETRANS",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Transaction Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "MRLINE",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "ORGANIZATION",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "BASECURRENCY1",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Currency for Organization",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "ORGANIZATION",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "BASECURRENCY2",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Optional Second Currency for Organization",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "PO",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO''s Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "PR",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Currency of this PR",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "PURCHVIEW",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "REORDERPAD",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "RFQVENDOR",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Transaction Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "SFWVIEW",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "WARRANTYVIEW",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "CURRENCY",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CURRENCY",
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
            "attributeName": "CURRENCYCODE",
            "required": true,
            "persistent": true,
            "title": "Currency",
            "remarks": "Identifies the currency by a code value. This value must be unique for all currency code records, for example, CND to represent the Canadian dollar.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the currency code, for example, Canadian dollar. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Is the currency active?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date/Time currency information was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User ID of who last changed information.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Description of currency.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENCYID",
            "required": true,
            "persistent": true,
            "title": "CURRENCYID",
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
            "name": "EXCHANGE",
            "target": "EXCHANGE",
            "remarks": "Relationship to the Exchange table, used to find all exchange records for a given currency. (currency.currencycode = exchange.currencycode). The resulting set will contain zero or more objects.",
            "whereClause": "currencycode=:currencycode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCURRENCYLONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "long description record for Currency",
            "whereClause": "ldkey=:currencyid and ldownertable = 'CURRENCY'",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMP_CURRENCY",
            "source": "COMPANIES",
            "remarks": null,
            "whereClause": "currencycode=:currencycode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CURRENCY",
            "source": "EXCHANGE",
            "remarks": null,
            "whereClause": "currencycode=:currencycode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXCHANGECURRENCYTO",
            "source": "EXCHANGE",
            "remarks": null,
            "whereClause": "currencycode=:currencycodeto",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BASECURRENCY1",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the BaseCurrency table, used to find the base currency 1 record for a given organization. (organization.orgid = basecurrency.orgid and organization.basecurrency1 = basecurrency.basecurrencycode1). The resulting set will contain one objects.",
            "whereClause": "currencycode = :basecurrency1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BASECURRENCY2",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the BaseCurrency table, used to find the base currency 2 record for a given organization. (organization.orgid = basecurrency.orgid and organization.basecurrency2 = basecurrency.basecurrencycode2). The resulting set will contain zero or one objects.",
            "whereClause": "currencycode = :basecurrency2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CURRENCY",
            "source": "ORGANIZATION",
            "remarks": null,
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}