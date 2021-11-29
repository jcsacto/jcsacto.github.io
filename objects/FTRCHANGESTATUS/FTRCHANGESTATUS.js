mos = {
    "objectName": "FTRCHANGESTATUS",
    "className": "psdi.app.feature.virtual.FeatureChangeStatusSet",
    "description": "Non-persistent table for Feature change status  di",
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
            "required": false,
            "persistent": false,
            "title": "New Status",
            "remarks": "Non persistent field - stored upon completion of transaction to the FEATURESTATUS table",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Non persistent field - stored upon completion of transaction to the FEATURESTATUS table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INACTIVEPM",
            "required": true,
            "persistent": false,
            "title": "Associated PMs to INACTIVE",
            "remarks": "Non persistent field.  If checked, see if this feature exists in the PM table (StartFeature/EndFeature) where PM.Status='ACTIVE'.  If rows exist, Warn user \"This feature is currently used on active PMs.  Continue?\"",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": false,
            "title": "Changed Date",
            "remarks": "Status Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "FTRCHANGESTATUS",
            "source": "FEATURES",
            "remarks": "Relationship to the non-persistent FTRChangeStatus table. (There is no where clause for non-persistent objects). The resulting set will contain zero or more objects. Note : FTRChangeStatus is a non-persistent MBO with whose help the dialog box binds with the object.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}