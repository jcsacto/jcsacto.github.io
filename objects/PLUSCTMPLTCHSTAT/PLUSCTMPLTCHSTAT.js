mos = {
    "objectName": "PLUSCTMPLTCHSTAT",
    "className": "psdi.plusc.app.plusctmplt.virtual.PlusCAssetTemplateChgStatusSet",
    "description": "Parameters for Asset Template Change Status",
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
            "attributeName": "STATUS",
            "required": true,
            "persistent": false,
            "title": "New Status",
            "remarks": "The status you are changing the asset template to. Select the value Draft, Active, or Inactive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Information associated with the asset status change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASOFDATE",
            "required": false,
            "persistent": false,
            "title": "As Of Date",
            "remarks": "The date and time the status of the asset template changed. This field defaults to the current system date and time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PLUSCTMPLTCHSTAT",
            "source": "PLUSCTEMPLATE",
            "remarks": "Relationship to the non-persistent PlusCAssetTemplateChgStatus table. PlusCAssetTemplateChgStatus is a non-persistent MBO with whose help the dialog box binds with the object",
            "whereClause": null,
            "cardinality": null
        }
    ]
}