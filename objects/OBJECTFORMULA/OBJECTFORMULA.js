mos = {
    "objectName": "OBJECTFORMULA",
    "className": "com.ibm.tivoli.maximo.expression.app.ObjectFormulaSet",
    "description": "Object Formulas",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OBJECTFORMULAID",
    "primaryKeyColumns": [
        "OBJECTNAME",
        "FORMULANAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "OBJECTFORMULA",
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
            "attributeName": "FORMULANAME",
            "required": true,
            "persistent": true,
            "title": "Formula Name",
            "remarks": "Formula Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FORMULA",
            "required": false,
            "persistent": true,
            "title": "Formula Expression",
            "remarks": "Formula Expression.",
            "sameAsAttribute": "FORMULA",
            "sameAsObject": "ATTRFORMULA"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the formula.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTFORMULAID",
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