mos = {
    "objectName": "ATTRFORMULA",
    "className": "com.ibm.tivoli.maximo.expression.app.AttrFormulaSet",
    "description": "Attribute Formulas",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ATTRFORMULAID",
    "primaryKeyColumns": [
        "OBJECTNAME",
        "ATTRIBUTENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "ATTRFORMULA",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute Formule",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ATTRFORMULA",
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
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Object Name.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": true,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "Attribute Name",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "FORMULA",
            "required": false,
            "persistent": true,
            "title": "Formula Expression",
            "remarks": "Formula Expression.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ATTRFORMULAID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}