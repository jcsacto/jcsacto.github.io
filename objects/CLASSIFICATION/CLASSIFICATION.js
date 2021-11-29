mos = {
    "objectName": "CLASSIFICATION",
    "className": "psdi.app.assetcatalog.ClassificationSet",
    "description": "Classification to categorize assets",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CLASSIFICATIONUID",
    "primaryKeyColumns": [
        "CLASSIFICATIONID",
        "ORGID",
        "SITEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "CLASSIFICATION",
            "targetObject": "CLASSANCESTOR",
            "parentKeys": "CLASSIFICATIONID, ORGID, SITEID",
            "targetKeys": "ANCESTORCLASSID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Classification and descendants",
            "longDescription": null
        },
        {
            "objectName": "CLASSIFICATION",
            "targetObject": "CLASSANCESTOR",
            "parentKeys": "CLASSIFICATIONID, ORGID, SITEID",
            "targetKeys": "CLASSIFICATIONID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Classification and ancestors",
            "longDescription": null
        },
        {
            "objectName": "CLASSIFICATION",
            "targetObject": "CLASSSTRUCTURE",
            "parentKeys": "CLASSIFICATIONID, ORGID, SITEID",
            "targetKeys": "CLASSIFICATIONID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Classification",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "CLASSIFICATION",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CLASSIFICATION",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CLASSIFICATION",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CLASSIFICATIONID",
            "required": true,
            "persistent": true,
            "title": "Classification",
            "remarks": "Classification Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description for Class",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Orgnization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "CLASSIFICATIONUID",
            "required": true,
            "persistent": true,
            "title": "Classification",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": false,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstructure table, used to find the classstructure records for a given classification. (classification.classificationid = classstructure.classificationid and classification.orgid = classstructure.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "classificationid=:classificationid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CLASSIFICATION",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classification table, used to find the classification record for a given classstructure. (classification.classificationid = classstructure.classificationid and classification.orgid = classstructure.orgid). The resulting set will contain one object.",
            "whereClause": "classificationid=:classificationid and ((:orgid is null and orgid is null) or  (:orgid is not null and orgid = :orgid)) and ((:siteid is null and siteid is null) or  (:siteid is not null and siteid = :siteid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSIFICATION_ADD",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classification table, used to find the classification records for a given classstructure. (classstructure.classificationid = classification.classificationid). The resulting set will contain zero or more objects.",
            "whereClause": "classificationid=:classificationid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSIFICATION_ALL",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classification table, used to find all classification records for a given orgnization. (classification.orgid = classstructure.orgid). The resulting set will contain zero or objects.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}