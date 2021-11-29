mos = {
    "objectName": "L_DMCOLLAPPTOOLBAR",
    "className": "psdi.mbo.LanguageMboSet",
    "description": "Language table of DMCOLLAPPTOOLBAR",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "L_DMCOLLAPPTOOLBARID",
    "primaryKeyColumns": [
        "LANGCODE",
        "OWNERID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DMCOLLAPPTOOLBAR",
            "targetObject": "L_DMCOLLAPPTOOLBAR",
            "parentKeys": "DMCOLLAPPTOOLBARID",
            "targetKeys": "OWNERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner ID of Object used for Multi Language translation.",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "L_DMCOLLAPPTOOLBAR",
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
            "remarks": "ID of DMCOLLAPPTOOLBAR",
            "sameAsAttribute": "DMCOLLAPPTOOLBARID",
            "sameAsObject": "DMCOLLAPPTOOLBAR"
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
            "sameAsObject": "DMCOLLAPPTOOLBAR"
        },
        {
            "attributeName": "L_DMCOLLAPPTOOLBARID",
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