mos = {
    "objectName": "CITEMPLATE",
    "className": "psdi.app.actualci.CITemplateSet",
    "description": "CITemplate table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CITEMPLATEID",
    "primaryKeyColumns": [
        "CITEMPLATEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CITEMPLATE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "ACTCICLASSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CITEMPLATE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CICLASSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CITEMPLATE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "TOPACTCICLASSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CITEMPLATE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "TOPCICLASSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CITEMPLATEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTCICLASSID",
            "required": true,
            "persistent": true,
            "title": "Actual CI Classification",
            "remarks": "Identifier of the Actual CI Classification",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "CICLASSID",
            "required": true,
            "persistent": true,
            "title": "CI Classification",
            "remarks": "Identifier of the Authorized CI Classification",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "TOPACTCICLASSID",
            "required": false,
            "persistent": true,
            "title": "Actual CI Classification",
            "remarks": "Identifier of the top level Actual CI Classification",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "TOPCICLASSID",
            "required": false,
            "persistent": true,
            "title": "CI Classification",
            "remarks": "Identifier of the top level Authorized CI Classification",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CHILDREN",
            "target": "CITEMPLATE",
            "remarks": "Relationship to the citemplate table, used to find the citemplate records for the child classstructures. The resulting set will contain zero or more objects.",
            "whereClause": "ciclassid in (select classstructureid from classstructure where classstructure.parent=:ciclassid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENT",
            "target": "CITEMPLATE",
            "remarks": "Relationship to the ctemplate table, used to find the parent template for a given citemaplte.",
            "whereClause": "ciclassid in(select parent from classstructure where classstructureid=:ciclassid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CICLASSID",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the CLASSSTRUCTURE table, used to find the classstructure for the ci classstructure  id",
            "whereClause": "classstructureid=:ciclassid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTCICLASSID",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstucture table, used to find the classstucture record for classstructure id.",
            "whereClause": "classstructureid=:actciclassid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPACTCICLASSID",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstucture table, used to find the classstucture record for classstructure id.",
            "whereClause": "classstructureid=:topactciclassid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPCICLASSID",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the CLASSSTRUCTURE table, used to find the classstructure for the ci classstructure  id",
            "whereClause": "classstructureid=:topciclassid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONRULES",
            "target": "RELATIONRULES",
            "remarks": "Relationship to the relationrules table, used to find the relationrules for the classstructure(relationrules.sourceci=:citemplate.ciclassci). The resulting set will contain zero or more objects.",
            "whereClause": "sourceclass=:ciclassid or targetclass=:ciclassid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CHILDREN",
            "source": "CITEMPLATE",
            "remarks": "Relationship to the citemplate table, used to find the citemplate records for the child classstructures. The resulting set will contain zero or more objects.",
            "whereClause": "ciclassid in (select classstructureid from classstructure where classstructure.parent=:ciclassid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENT",
            "source": "CITEMPLATE",
            "remarks": "Relationship to the ctemplate table, used to find the parent template for a given citemaplte.",
            "whereClause": "ciclassid in(select parent from classstructure where classstructureid=:ciclassid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CITEMPLATE",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the CITEMPALTE table, used to find the citemplate record for the classification. The resulting set will contain zero or more objects",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}