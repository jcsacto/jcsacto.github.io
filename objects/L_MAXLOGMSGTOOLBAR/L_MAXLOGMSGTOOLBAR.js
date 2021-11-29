mos = {
    "objectName": "L_MAXLOGMSGTOOLBAR",
    "className": "psdi.mbo.LanguageMboSet",
    "description": "Language table of MAXLOGMSGTOOLBAR",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "L_MAXLOGMSGTOOLBARID",
    "primaryKeyColumns": [
        "LANGCODE",
        "OWNERID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "L_MAXLOGMSGTOOLBAR",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "OWNERID",
            "required": true,
            "persistent": true,
            "title": "Owner Id",
            "remarks": "ID of MAXLOGMSGTOOLBAR",
            "sameAsAttribute": "MAXLOGMSGTOOLBARID",
            "sameAsObject": "MAXLOGMSGTOOLBAR"
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": true,
            "persistent": true,
            "title": "Description",
            "remarks": "Multi-language description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXLOGMSGTOOLBAR"
        },
        {
            "attributeName": "L_MAXLOGMSGTOOLBARID",
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