mos = {
    "objectName": "PLUSCTPMASTERPM",
    "className": "psdi.plusc.app.plusctmplt.PlusCATMasterPMSet",
    "description": "Asset Template Master PM table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PLUSCTPMASTERPMID",
    "primaryKeyColumns": [
        "MASTERPMNUM",
        "ORGID",
        "TEMPLATEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCTPMASTERPM",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MASTERPMNUM",
            "required": true,
            "persistent": true,
            "title": "Master PM",
            "remarks": "The Master PM associated with the template. Enter a value or click Detail Menu to select the Master PM.",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization the asset template belongs to.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "TEMPLATEID",
            "required": true,
            "persistent": true,
            "title": "Template",
            "remarks": "Identifies the asset template.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCTPMASTERPMID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MASTERPM",
            "target": "MASTERPM",
            "remarks": "relationship to the masterpm table (plusctpmasterpm.masterpmnum = masterpm.masterpmnum",
            "whereClause": "masterpmnum = :masterpmnum",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PLUSCTPMASTERPM",
            "source": "PLUSCTEMPLATE",
            "remarks": "relationship to the plusctpmasterpm table (plusctpmasterpm.templateid = plusctemplate.templateid and plusctpmasterpm.orgid = plusctemplate.orgid",
            "whereClause": "templateid = :templateid and orgid = :orgid",
            "cardinality": null
        }
    ]
}