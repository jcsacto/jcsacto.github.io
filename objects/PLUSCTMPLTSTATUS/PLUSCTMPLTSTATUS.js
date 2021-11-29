mos = {
    "objectName": "PLUSCTMPLTSTATUS",
    "className": "psdi.plusc.app.plusctmplt.virtual.PlusCAssetTemplateDumStatusSet",
    "description": "Asset Template Status History",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo associated with the asset status change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPLATEID",
            "required": false,
            "persistent": false,
            "title": "Template",
            "remarks": "Identifies the asset template.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": false,
            "title": "Change Date",
            "remarks": "The date and time the status of the asset template changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDBY",
            "required": false,
            "persistent": false,
            "title": "Change By",
            "remarks": "Identifies the user who changed the status of the asset template.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PLUSCTMPLTSTATUS",
            "source": "PLUSCTEMPLATE",
            "remarks": "Asset Template Status History",
            "whereClause": "templateid = :templateid",
            "cardinality": null
        }
    ]
}