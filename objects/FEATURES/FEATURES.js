mos = {
    "objectName": "FEATURES",
    "className": "psdi.app.feature.FeatureSet",
    "description": "Sign,milepost or similar object in Linear System.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "FEATURESID",
    "primaryKeyColumns": [
        "FEATURE"
    ],
    "logicalRelationships": [
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "FEATURE",
            "targetKeys": "ENDASSETFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "FEATURE",
            "targetKeys": "FEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "FEATURE",
            "targetKeys": "STARTASSETFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "FEATURE",
            "targetKeys": "ENDFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "FEATURE",
            "targetKeys": "FEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "FEATURE",
            "targetKeys": "STARTFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "FEATURE",
            "targetKeys": "ENDFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "FEATURE",
            "targetKeys": "FEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "FEATURE",
            "targetKeys": "STARTFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "FEATURE",
            "targetKeys": "ENDFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "FEATURE",
            "targetKeys": "FEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "FEATURE",
            "targetKeys": "STARTFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETMETER",
            "parentKeys": "FEATURE",
            "targetKeys": "ENDFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETMETER",
            "parentKeys": "FEATURE",
            "targetKeys": "STARTFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "FEATURE",
            "targetKeys": "ENDASSETFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "FEATURE",
            "targetKeys": "STARTASSETFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "FEATURESPEC",
            "parentKeys": "FEATURE",
            "targetKeys": "FEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Feature",
            "longDescription": null
        },
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
            "objectName": "FEATURES",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "FEATURE",
            "targetKeys": "FEATURE",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Features",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "FEATURE",
            "targetKeys": "FEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Feature",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "FEATURES",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "FEATURES",
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
            "attributeName": "FEATURESID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Identifies the Features record. This value must be unique for all Features records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FEATURE",
            "required": true,
            "persistent": true,
            "title": "Feature",
            "remarks": "An object that exists on or alongside a linear asset that is not a point asset (for example, milepost, guardrail)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FEATURETYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "There are two types of features. A POINT feature has no length, or its length is not related to its use with the linear asset. For example, a mile post and a power line crossing are both point features. A LINEAR feature has length and its length is related to the linear asset. For example, a guard rail has length and its length is described by start and end measures along the roadway.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTINUOUS",
            "required": true,
            "persistent": true,
            "title": "Continuous",
            "remarks": "Specifies whether the feature is continuous. If the check box is selected, it is continuous. A continuous feature exists for the entire span of the linear asset with which it is associated. To satisfy this condition you can create a single Features record whose start and end measures equal the start and end measures of the linear asset. You can also create multiple Features records that together cover the entire linear asset without overlapping.  To validate this property, run the Gap and Overlap report. If the check box is cleared (the default), you can apply the feature to a segment of the linear asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the feature. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHARED",
            "required": true,
            "persistent": true,
            "title": "Shared",
            "remarks": "Specifies whether the feature will be shared by related linear assets. If the check box is selected, and you apply the feature to one linear asset, the feature will be visible to other linear assets that you specify as related to it. For example, if two linear assets share a segment, and you apply the feature to one of the assets, it will be visible to the other, as well.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Classification",
            "remarks": "Unique ID of the classification structure that holds a list of attributes, for example, Size, Length and Color.",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Similar to asset status, this allows us to manage features, and the access to them, without having to delete them from the database.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ISLINEARREF",
            "required": true,
            "persistent": true,
            "title": "Is Reference Point",
            "remarks": "Specifies whether you can use the feature as a start or end point for a linear segment. If the check box is selected (the default), Maximo will create an feature instance that you can use as a start or end reference point. If the check box is cleared, you cannot.",
            "sameAsAttribute": "ISLINEARREF",
            "sameAsObject": "RELATION"
        },
        {
            "attributeName": "RELATIONID",
            "required": false,
            "persistent": true,
            "title": "Relation Unique Id",
            "remarks": "Unique identifier for thie relationship (Relation Table) that generated this relational feature.",
            "sameAsAttribute": "RELATIONID",
            "sameAsObject": "RELATION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "WHEREFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the AssetFeature table, used to find all AssetFeatures for this Feature, that is, it answers the question 'Where is this feature used?'. (assetfeature.feature=features.feature). The resulting set will contain zero or more objects.",
            "whereClause": "feature=:feature",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WHEREISFEATURENOW",
            "target": "ASSETFEATUREHIST",
            "remarks": "Relationship to the AssetFeatureHist table, used to find all AssetFeaturesHist records for this Feature that have not yet been removed. It answers the question 'Where is this feature currently used?'. (assetfeaturehist.feature=features.feature and assetfeaturehis.removeddate is null). The resulting set will contain zero or more objects.",
            "whereClause": "feature=:feature and removeddate is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given feature (classspec.classstructureid = features.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstruvcture table, used to find the classstructure record for a given feature. (features.classstructureid=classstructure.classstructureid) The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given Feature. The resulting set will contain zero or more objects.",
            "whereClause": "ownertable = 'FEATURES' and ownerid = :featuresid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURESPEC",
            "target": "FEATURESPEC",
            "remarks": "Relationship to the featurespec table, used to find the featurespec records for a given feature. (feature.feature=featurespec.feature and feature.classstructureid=featurespec.classstructureid) The resulting set will contain zero or more objects.",
            "whereClause": "feature=:feature and classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURESSPEC",
            "target": "FEATURESPEC",
            "remarks": "Relationship to the featurespec table, used to find the featurespec records for a given feature. (features.featuresid=featurespec.refobjectid) The resulting set will contain zero or more object.",
            "whereClause": "refobjectid=:featuresid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURESSPECCLASS",
            "target": "FEATURESPEC",
            "remarks": "Relationship to the featurespec table, used to find the featurespec records for a given feature. (features.feature=featurespec.feature and features.classstructureid=featurespec.classstructureid) The resulting set will contain zero or more object.",
            "whereClause": "feature= :feature and classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURESTATUS",
            "target": "FEATURESTATUS",
            "remarks": "Relationship to the FeatureStatus table. The resulting set will contain zero or more objects.",
            "whereClause": "feature=:feature",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FTRCHANGESTATUS",
            "target": "FTRCHANGESTATUS",
            "remarks": "Relationship to the non-persistent FTRChangeStatus table. (There is no where clause for non-persistent objects). The resulting set will contain zero or more objects. Note : FTRChangeStatus is a non-persistent MBO with whose help the dialog box binds with the object.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to SYNONYMDOMAIN.",
            "whereClause": "domainid='FEATURESTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ENDFEATURE",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the Features table, used to find the EndFeature that delineates where this AssetFeature's Feature ends.  EndFeature is null and zero objects are returned if this AssetFeature is a point feature. (features.feature=assetfeature.endfeature). The resulting set will contain zero or one object.",
            "whereClause": "feature=:endfeature",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURE",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the Features table, used to find the feature for this AssetFeature. (features.feature=assetfeature.feature). The resulting set will contain one object.",
            "whereClause": "feature=:feature",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTFEATURE",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the Features table, used to find the StartFeature that delineates where this AssetFeature's Feature begins.  StartFeature is null and zero objects are returned if this AssetFeature is a point feature. (features.feature=assetfeature.startfeature). The resulting set will contain zero or one object.",
            "whereClause": "feature=:startfeature",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURE",
            "source": "ASSETFEATUREHIST",
            "remarks": "Relationship to the Features table, used to find the feature for this AssetFeatureHist. (features.feature=assetfeaturehist.feature). The resulting set will contain one object.",
            "whereClause": "feature = :feature",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURE",
            "source": "ASSETFEATURESPEC",
            "remarks": "Relationship to the Features table, used to find the feature for this AssetFeatureSpec.",
            "whereClause": "feature=:feature",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURES",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the features table, used to find the features records for a given classstructure.(classstructure.classstructureid = features.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURES_ONLY",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the features table, used to find the features records for a given classstructure.(classstructure.classstructureid =features.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURE",
            "source": "PM",
            "remarks": "Relationship to the Features table, used to find the feature for this PM. (features.feature=pm.feature). The resulting set will contain one object",
            "whereClause": "feature = :feature",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURES",
            "source": "RELATION",
            "remarks": "Relationship to the Features table , used to find Features record for a given relation.(Relation.relationid= Features.relationid). The resulting set will contain zero or one object.",
            "whereClause": "relationid=:relationid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONFEATURES",
            "source": "RELATION",
            "remarks": "Relationship to the Features table , used to find Features record for a given relation.(Relation.relationnum= Features.feature). The resulting set will contain zero or one object.",
            "whereClause": "feature=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDFEATURE",
            "source": "ROUTE_STOP",
            "remarks": "Relationship to the features table, used to find the end feature on the route stop. The resulting set will contain zero or one object.",
            "whereClause": "feature=:endfeature",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTFEATURE",
            "source": "ROUTE_STOP",
            "remarks": "Relationship to the features table, used to find the start feature on the route stop. The resulting set will contain zero or one object.",
            "whereClause": "feature=:startfeature",
            "cardinality": "UNDEFINED"
        }
    ]
}