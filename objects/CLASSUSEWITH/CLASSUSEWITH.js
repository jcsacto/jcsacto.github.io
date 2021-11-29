mos = {
    "objectName": "CLASSUSEWITH",
    "className": "psdi.app.assetcatalog.ClassUseWithSet",
    "description": "Contains ClassStructure UseWith information",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CLASSUSEWITHID",
    "primaryKeyColumns": [
        "CLASSSTRUCTUREID",
        "OBJECTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CLASSUSEWITH",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "CLASSUSEWITH",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CLASSUSEWITHID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": true,
            "persistent": true,
            "title": "Class Structure ID",
            "remarks": "The ClassStructure ID",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Use With",
            "remarks": "The Object/Area which the classification can be classified with",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTVALUE",
            "required": true,
            "persistent": true,
            "title": "Use With Object",
            "remarks": "The Object Value for the OBJECTNAME column.  The OBJECTNAME column is obtained from the MAXVALUE from synonymdomain CLASSUSEWITH. The OBJECTVALUE represents the VALUE from the same domain",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOPLEVEL",
            "required": true,
            "persistent": true,
            "title": "Top Level",
            "remarks": "Top level node on a classification hierarchy.  This YORN flag is to be used for CI only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CLASSSPECUSEWITH",
            "target": "CLASSSPECUSEWITH",
            "remarks": "Relationship to the classspecusewith table, used to find the classspecusewith records for a given classsusewith. (classsusewith.classstructureid=classspecusewith.classstructureid and classusewith.objectname=classspecusewith.objectname) The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid and objectname=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstructure table, used to find the classstructure record for a given classsusewith. (classstructure.classstructureid=classusewith.classstructureid) The resulting set will contain one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CLASSUSEWITH",
            "source": "CDMCITYPES",
            "remarks": "Relationship to the ClassUseWith table, used to find classusewith for a given CIType.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSUSEWITH",
            "source": "CI",
            "remarks": "Relationship to the ClassUseWith table, used to find classusewith for a given CI.",
            "whereClause": "classstructureid=:classstructureid and objectname = 'CI'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSUSEWITH",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classusewith table, used to find the classusewith records for a given classstructure. (classstructure.classstructureid=classusewith.classstructureid) The resulting set will contain zero or more object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "MULTIPLE"
        }
    ]
}