mos = {
    "objectName": "EXCHANGE",
    "className": "psdi.app.currency.ExchangeSet",
    "description": "The Exchange Management Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "EXCHANGEID",
    "primaryKeyColumns": [
        "ORGID",
        "CURRENCYCODE",
        "CURRENCYCODETO",
        "EXPIREDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "ORGANIZATION",
            "targetObject": "EXCHANGE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "EXCHANGE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "EXCHANGE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CURRENCYCODE",
            "required": true,
            "persistent": true,
            "title": "Convert from Currency",
            "remarks": "Currency you are converting. Click the Select Value button to select a currency code.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "EXCHANGERATE",
            "required": true,
            "persistent": true,
            "title": "Exchange Rate",
            "remarks": "The multiplier MAXIMO uses when calculating a conversion from the currency in the Convert From Currency field to the currency in the Convert To Currency field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIVEDATE",
            "required": true,
            "persistent": true,
            "title": "Active Date",
            "remarks": "Date on which the exchange rate becomes active. Enter a date or click the Select Date button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPIREDATE",
            "required": true,
            "persistent": true,
            "title": "Expiration Date",
            "remarks": "First moment at which an Exchange rate is not valid. Enter a date and time or click the Select Date button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Comment or further information pertaining to the exchange rate, for example, the source for the exchange rate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "Date rate was entered into the system.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "User ID who entered the rate.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CURRENCYCODETO",
            "required": true,
            "persistent": true,
            "title": "Convert to Currency",
            "remarks": "Currency into which you are converting the Convert From currency. Click the Select Value button to select a currency code.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
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
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User ID who changed the rate.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date rate was last Changed in the system.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXCHANGEID",
            "required": true,
            "persistent": true,
            "title": "EXCHANGEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CURRENCY",
            "target": "CURRENCY",
            "remarks": null,
            "whereClause": "currencycode=:currencycode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXCHANGECURRENCYTO",
            "target": "CURRENCY",
            "remarks": null,
            "whereClause": "currencycode=:currencycodeto",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "EXCHANGE",
            "source": "CURRENCY",
            "remarks": "Relationship to the Exchange table, used to find all exchange records for a given currency. (currency.currencycode = exchange.currencycode). The resulting set will contain zero or more objects.",
            "whereClause": "currencycode=:currencycode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXCHANGE",
            "source": "ORGANIZATION",
            "remarks": null,
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}