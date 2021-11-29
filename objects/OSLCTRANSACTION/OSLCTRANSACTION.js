mos = {
    "objectName": "OSLCTRANSACTION",
    "className": "com.ibm.tivoli.maximo.oslc.consumer.app.provider.OslcTransactionSet",
    "description": "OSLC Transaction",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "OSLCTRANSACTIONID",
    "primaryKeyColumns": [
        "TXID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "OSLCTRANSACTION",
            "parentKeys": "PERSONID",
            "targetKeys": "TXSENDER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Transaction sender",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TXID",
            "required": true,
            "persistent": true,
            "title": "Transaction Id",
            "remarks": "Transaction Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HTTPMETHOD",
            "required": true,
            "persistent": true,
            "title": "HTTP Method",
            "remarks": "HTTP Method",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TXSENDER",
            "required": true,
            "persistent": true,
            "title": "Transaction From",
            "remarks": "Transaction From",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "TXDATE",
            "required": false,
            "persistent": true,
            "title": "Transaction Date",
            "remarks": "Transaction Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESID",
            "required": false,
            "persistent": true,
            "title": "Resource Id",
            "remarks": "Resource Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSLCTRANSACTIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}