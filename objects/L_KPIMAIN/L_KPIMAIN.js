mos = {
    "objectName": "L_KPIMAIN",
    "className": "psdi.mbo.LanguageMboSet",
    "description": "Language table of KPIMAIN",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "L_KPIMAINID",
    "primaryKeyColumns": [
        "OWNERID",
        "LANGCODE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "L_KPIMAIN",
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
            "remarks": "ID of KPIMAIN",
            "sameAsAttribute": "KPIMAINID",
            "sameAsObject": "KPIMAIN"
        },
        {
            "attributeName": "L_KPIMAINID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "sameAsObject": "KPIMAIN"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}