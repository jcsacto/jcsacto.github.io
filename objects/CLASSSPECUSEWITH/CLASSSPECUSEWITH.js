mos = {
    "objectName": "CLASSSPECUSEWITH",
    "className": "psdi.app.assetcatalog.ClassSpecUseWithSet",
    "description": "The ClassSpec Use With table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CLASSSPECUSEWITHID",
    "primaryKeyColumns": [
        "CLASSSTRUCTUREID",
        "ASSETATTRID",
        "SECTION",
        "ORGID",
        "SITEID",
        "OBJECTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "CLASSSPECUSEWITH",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "CLASSSPECUSEWITH",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Use With",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CLASSSPECUSEWITH",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "CLASSSPECUSEWITH",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CLASSSPECUSEWITH",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CLASSSPECUSEWITH",
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
            "attributeName": "CLASSSPECUSEWITHID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSPECID",
            "required": true,
            "persistent": true,
            "title": "ClassSpec Unique ID",
            "remarks": "The unique identifier for the ClassSpec record this Class Spec Use With object references.",
            "sameAsAttribute": "CLASSSPECID",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": true,
            "persistent": true,
            "title": "ClassStructure ID",
            "remarks": "The ClassStructure ID the owning ClassSpec object pointing to",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "ASSETATTRID",
            "required": true,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Attribute this Class Spec Use With object references",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "SECTION",
            "required": false,
            "persistent": true,
            "title": "Section",
            "remarks": "Section that this Class Spec Use Wtih object references",
            "sameAsAttribute": "SECTION",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
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
            "attributeName": "MANDATORY",
            "required": true,
            "persistent": true,
            "title": "Mandatory",
            "remarks": "Is value mandatory when the attribute is applied?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SEQUENCE",
            "required": true,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Sequence",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEINDESC",
            "required": true,
            "persistent": true,
            "title": "Use In Description Generation",
            "remarks": "Used In Description Generation?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEINSPEC",
            "required": true,
            "persistent": true,
            "title": "Use In Specifications",
            "remarks": "Used this attribute in generating specifications?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Key to link to Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OBJECTVALUE",
            "required": true,
            "persistent": true,
            "title": "Use With Object",
            "remarks": "The Object Value for the OBJECTNAME column.  The OBJECTNAME column is obtained from the MAXVALUE from synonymdomain CLASSUSEWITH. The OBJECTVALUE represents the VALUE from the same domain.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULTALNVALUE",
            "required": false,
            "persistent": true,
            "title": "Default Alphanumeric Value",
            "remarks": "Default alphanumeric(text) value",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "DEFAULTNUMVALUE",
            "required": false,
            "persistent": true,
            "title": "Default Numeric Value",
            "remarks": "Default numeric value",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "NUMERICDOMAIN"
        },
        {
            "attributeName": "DEFAULTTABLEVALUE",
            "required": false,
            "persistent": true,
            "title": "Default Table Value",
            "remarks": "Default Table Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec records for a given classspecusewith. (classspec.classspecid=classspecusewith.classspecid) The resulting set will contain one object.",
            "whereClause": "classspecid = :classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstructure table, used to find the classstructure record for a given classsspecusewith. (classstructure.classstructureid=classspecusewith.classstructureid) The resulting set will contain one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CLASSSPECUSEWITH",
            "source": "CLASSSPEC",
            "remarks": "Relationship to the classspecusewith table, used to find the classspecusewith records for a given classspec. (classspec.classspecid=classspecusewith.classspecid) The resulting set will contain zero or more object.",
            "whereClause": "classspecid = :classspecid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "CLASSSPECUSEWITH",
            "source": "CLASSUSEWITH",
            "remarks": "Relationship to the classspecusewith table, used to find the classspecusewith records for a given classsusewith. (classsusewith.classstructureid=classspecusewith.classstructureid and classusewith.objectname=classspecusewith.objectname) The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid and objectname=:objectname",
            "cardinality": "UNDEFINED"
        }
    ]
}