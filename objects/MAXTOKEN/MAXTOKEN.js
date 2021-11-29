mos = {
    "objectName": "MAXTOKEN",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Security Token",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXTOKENID",
    "primaryKeyColumns": [
        "USERID",
        "TOKEN"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "MAXTOKEN",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "User Identity",
            "remarks": "User Identity",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "TOKEN",
            "required": true,
            "persistent": true,
            "title": "Temporary token",
            "remarks": "Temporary token",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Token Created timestamp",
            "remarks": "Token Created timestamp",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COUNTRY",
            "required": false,
            "persistent": true,
            "title": "Country",
            "remarks": "Locale Country",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGUAGE",
            "required": true,
            "persistent": true,
            "title": "Language",
            "remarks": "Locale Language",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VARIANT",
            "required": false,
            "persistent": true,
            "title": "Variant",
            "remarks": "Locale Variant",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TIMEZONE",
            "required": true,
            "persistent": true,
            "title": "Time Zone",
            "remarks": "Time Zone",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXTOKENID",
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