mos = {
    "objectName": "FEATURESTATUS",
    "className": "psdi.app.feature.FeatureStatusSet",
    "description": "The FeatureStatus Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "FEATURESTATUSID",
    "primaryKeyColumns": [
        "FEATURESTATUSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "FEATURES",
            "targetObject": "FEATURESTATUS",
            "parentKeys": "FEATURE",
            "targetKeys": "FEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "FEATURESTATUS",
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
            "attributeName": "FEATURESTATUSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique ID for the FEATURESTATUS table ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FEATURE",
            "required": false,
            "persistent": true,
            "title": "Feature",
            "remarks": "Feature",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "memo",
            "remarks": "Memo for feature status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date-Time Status Was Changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Name Of User That Changed Status",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "FEATURESTATUS",
            "source": "FEATURES",
            "remarks": "Relationship to the FeatureStatus table. The resulting set will contain zero or more objects.",
            "whereClause": "feature=:feature",
            "cardinality": "UNDEFINED"
        }
    ]
}