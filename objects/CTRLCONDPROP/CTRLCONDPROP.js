mos = {
    "objectName": "CTRLCONDPROP",
    "className": "psdi.app.appsetup.CtrlCondPropSet",
    "description": "Property changes for controls based on conditiions",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CTRLCONDPROPID",
    "primaryKeyColumns": [
        "CTRLCONDITIONID",
        "CONDITIONRESULT",
        "PROPERTY"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CTRLCONDITION",
            "targetObject": "CTRLCONDPROP",
            "parentKeys": "CTRLCONDITIONID",
            "targetKeys": "CTRLCONDITIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Control Condition Property",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CTRLCONDPROPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROPERTY",
            "required": true,
            "persistent": true,
            "title": "Property",
            "remarks": "Specify the name of the property to be controlled by the condition.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROPERTYVALUE",
            "required": true,
            "persistent": true,
            "title": "Property Value",
            "remarks": "Specify the value of the property to be controlled by the condition.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONRESULT",
            "required": true,
            "persistent": true,
            "title": "Condition Result",
            "remarks": "Condition Result",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CTRLCONDITIONID",
            "required": true,
            "persistent": true,
            "title": "Control Condition Id",
            "remarks": "Control Condition Id",
            "sameAsAttribute": "CTRLCONDITIONID",
            "sameAsObject": "CTRLCONDITION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CTRLCONDPROP",
            "source": "CTRLCONDITION",
            "remarks": "Relationship to the CTRLCONDPROP table, used to find properties for a given control condition. (ctrlcondprop.ctrlconditionid=:ctrlcondition$CTRLCONDITION.CTRLCONDITIONID). The resulting set will contain zero or more objects.",
            "whereClause": "ctrlconditionid = :ctrlconditionid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLCONDPROPFALSE",
            "source": "CTRLCONDITION",
            "remarks": "Relationship to the CTRLCONDPROP table, used to find all property values when the condition is false. (ctrlcondprop.ctrlconditionid = ctrlcondition.ctrlconditionid and ctrlcondprop.conditionresult=0). The resulting set will contain zero or more objects.",
            "whereClause": "ctrlconditionid = :ctrlconditionid and conditionresult=0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLCONDPROPTRUE",
            "source": "CTRLCONDITION",
            "remarks": "Relationship to the CTRLCONDPROP table, used to find all property values when the condition is true. (ctrlcondprop.ctrlconditionid = ctrlcondition.ctrlconditionid and ctrlcondprop.conditionresult=1). The resulting set will contain zero or more objects.",
            "whereClause": "ctrlconditionid = :ctrlconditionid and conditionresult=1",
            "cardinality": "UNDEFINED"
        }
    ]
}