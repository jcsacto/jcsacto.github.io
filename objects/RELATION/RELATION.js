mos = {
    "objectName": "RELATION",
    "className": "psdi.app.relation.RelationSet",
    "description": "Relation table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "RELATIONID",
    "primaryKeyColumns": [
        "RELATIONNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "RELATION",
            "targetObject": "ACTCIRELATION",
            "parentKeys": "RELATIONNUM",
            "targetKeys": "RELATIONNUM",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Relationship Information",
            "longDescription": null
        },
        {
            "objectName": "RELATION",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "RELATIONNUM",
            "targetKeys": "ASSETRELATIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship Information",
            "longDescription": null
        },
        {
            "objectName": "RELATION",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "RELATIONNUM",
            "targetKeys": "ASSETRELATIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship Information",
            "longDescription": null
        },
        {
            "objectName": "RELATION",
            "targetObject": "CIRELATION",
            "parentKeys": "RELATIONNUM",
            "targetKeys": "RELATIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship Information",
            "longDescription": null
        },
        {
            "objectName": "RELATION",
            "targetObject": "CIRELATIONHIS",
            "parentKeys": "RELATIONNUM",
            "targetKeys": "RELATIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship Information",
            "longDescription": null
        },
        {
            "objectName": "RELATION",
            "targetObject": "RELATION",
            "parentKeys": "RELATIONNUM",
            "targetKeys": "COMPRELATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship Information",
            "longDescription": null
        },
        {
            "objectName": "RELATION",
            "targetObject": "RELATIONRULES",
            "parentKeys": "RELATIONNUM",
            "targetKeys": "RELATIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship Information",
            "longDescription": null
        },
        {
            "objectName": "RELATION",
            "targetObject": "RELATIONRULESEXT",
            "parentKeys": "RELATIONNUM",
            "targetKeys": "RELATIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship Information",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RELATION",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "RELATION",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "RELATION",
            "targetObject": "RELATION",
            "parentKeys": "RELATIONNUM",
            "targetKeys": "COMPRELATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship Information",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RELATIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATIONNUM",
            "required": true,
            "persistent": true,
            "title": "Relationship",
            "remarks": "Relationship identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the Relationship",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Type of the relationship. A relationship can be unidirectional or bidirectional. Parent - Child relationships are unidirectional where as relationships like connected to, intersects etc. are bidirectional",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPRELATION",
            "required": false,
            "persistent": true,
            "title": "Complementary Relationship",
            "remarks": "Identifier of the Relationship that is complementary to the current relationship. Parent relation is complementary to child relation. Complementary relationship can exists only between two unidirectional relationships",
            "sameAsAttribute": "RELATIONNUM",
            "sameAsObject": "RELATION"
        },
        {
            "attributeName": "LINEAR",
            "required": true,
            "persistent": true,
            "title": "Linear",
            "remarks": "Indicates if this relationship can be used by linear assets",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Classification",
            "remarks": "Classification of the Relationship",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
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
            "attributeName": "IMPORTED",
            "required": true,
            "persistent": true,
            "title": "Imported",
            "remarks": "Indicates if this relation was populated by an external source or not.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISLINEARREF",
            "required": true,
            "persistent": true,
            "title": "Is Reference Point",
            "remarks": "If checked, Maximo will create a feature instance each time this relationship is applied to a linear asset.  That feature instance will be identified as a reference point and can be used to locate work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEWITH",
            "required": false,
            "persistent": true,
            "title": "Use WIth",
            "remarks": "Use WIth",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALLOWOVERRIDE",
            "required": false,
            "persistent": true,
            "title": "Allow Override",
            "remarks": "Allows user to specify if the relationship rules can be overridden",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ACTCIRELATION",
            "target": "ACTCIRELATION",
            "remarks": "Relationship to the actcirelation table, used to find ACTCIRELATION record for a given relationship",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCRELATION",
            "target": "ASSETLOCRELATION",
            "remarks": "Relationship to the ASSETLOCRELATION table, used to find assetlocrelation for a given RELATION .",
            "whereClause": "assetrelationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCRELHIST",
            "target": "ASSETLOCRELHIST",
            "remarks": "Relationship to the ASSETLOCRELHIST table, used to find assetlocrelation for a given RELATION",
            "whereClause": "assetrelationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIRELATION",
            "target": "CIRELATION",
            "remarks": "Relationship to the cirelation table, used to find a CIRELATION record for a given relationship",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIRELATIONHIS",
            "target": "CIRELATIONHIS",
            "remarks": "Relationship to the cirelationhis table, used to find CIRELATIONHIS record for a given relationship",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "target": "CLASSANCESTOR",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given relation (relation.classstructureid=classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given Relation specification. (classstructure.classstructureid = relation.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Relation's DocLinks records, used to find documents for a given Relation. (doclinks.keytable = 'RELATION' and doclinks.keycolumn = 'RELATIONNUM' and relation.relationnum= doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "ownertable = 'RELATION' and ownerid = :relationid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURES",
            "target": "FEATURES",
            "remarks": "Relationship to the Features table , used to find Features record for a given relation.(Relation.relationid= Features.relationid). The resulting set will contain zero or one object.",
            "whereClause": "relationid=:relationid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONFEATURES",
            "target": "FEATURES",
            "remarks": "Relationship to the Features table , used to find Features record for a given relation.(Relation.relationnum= Features.feature). The resulting set will contain zero or one object.",
            "whereClause": "feature=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPRELATION",
            "target": "RELATION",
            "remarks": "Relationship to relation table, used to find complementary relationship records for a given relation number.",
            "whereClause": "comprelation=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELCOMPRELATION",
            "target": "RELATION",
            "remarks": "Relationship to relation table, used to find a relationship record for a given complementary relation number.",
            "whereClause": "relationnum=:comprelation",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONRULES",
            "target": "RELATIONRULES",
            "remarks": "Relationship to the RelationRules table, used to find relationrule for a given relation",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONRULESEXT",
            "target": "RELATIONRULESEXT",
            "remarks": "Extended Relationship Rules",
            "whereClause": "relationnum=:relationnum",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "RELATION",
            "source": "ACTCIRELATION",
            "remarks": "Relationship to the Relation table, used to find relation for a given relation",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATION",
            "source": "ASSETLOCRELATION",
            "remarks": "Relationship to the RELATION table, used to find relation for a given ASSETLOCRELATION relation.",
            "whereClause": "relationnum =:assetrelationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATION",
            "source": "ASSETLOCRELHIST",
            "remarks": "Relationship to the RELATION table, used to find relation for a given ASSETLOCRELHISt relation.",
            "whereClause": "relationnum =:assetrelationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATION",
            "source": "CIRELATION",
            "remarks": "Relationship to the Relation table, used to find relation for a given relation",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATION",
            "source": "CIRELATIONHIS",
            "remarks": "Relationship to the RELATION table, used to find relation for a given CIRELATIONHIS relation ",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATION",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the relation table, used to find the relation records for a given classstructure.(classstructure.classstructureid = relation.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATION_ONLY",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the relation table, used to find the relation records for a given classstructure.(classstructure.classstructureid = relation.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPRELATION",
            "source": "RELATION",
            "remarks": "Relationship to relation table, used to find complementary relationship records for a given relation number.",
            "whereClause": "comprelation=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELCOMPRELATION",
            "source": "RELATION",
            "remarks": "Relationship to relation table, used to find a relationship record for a given complementary relation number.",
            "whereClause": "relationnum=:comprelation",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATION",
            "source": "RELATIONRULES",
            "remarks": "Relationship to the Relation table, used to find relation for a given relation",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        }
    ]
}