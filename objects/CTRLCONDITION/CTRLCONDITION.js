mos = {
    "objectName": "CTRLCONDITION",
    "className": "psdi.app.appsetup.CtrlConditionSet",
    "description": "Condition for control group security",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CTRLCONDITIONID",
    "primaryKeyColumns": [
        "CONDITIONNUM",
        "CTRLGROUPID"
    ],
    "logicalRelationships": [
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
    "targetLogicalRelationships": [
        {
            "objectName": "CONDITION",
            "targetObject": "CTRLCONDITION",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition",
            "longDescription": null
        },
        {
            "objectName": "CTRLGROUP",
            "targetObject": "CTRLCONDITION",
            "parentKeys": "CTRLGROUPID",
            "targetKeys": "CTRLGROUPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Control Group",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CTRLCONDITIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CTRLGROUPID",
            "required": true,
            "persistent": true,
            "title": "Control Group Id",
            "remarks": "Control Group Id",
            "sameAsAttribute": "CTRLGROUPID",
            "sameAsObject": "CTRLGROUP"
        },
        {
            "attributeName": "CONDITIONNUM",
            "required": true,
            "persistent": true,
            "title": "Condition Number",
            "remarks": "Specify conditions for the control. The conditions apply only to the security groups that you specified.",
            "sameAsAttribute": "CONDITIONNUM",
            "sameAsObject": "CONDITION"
        },
        {
            "attributeName": "CONDITIONSEQ",
            "required": true,
            "persistent": true,
            "title": "Condition Sequence",
            "remarks": "Condition Sequence",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REEVALUATE",
            "required": true,
            "persistent": true,
            "title": "Re-evaluate Condition",
            "remarks": "Flag for Re-evaluating Condition",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CONDITION",
            "target": "CONDITION",
            "remarks": "Relationship to the CONDITION table, used to find control condition for a given control group. (ctrlcondition.conditionnum=:condition$CONDITION.CONDITIONNUM). The resulting set will contain zero or more objects.",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONDITIONSELECT",
            "target": "CONDITION",
            "remarks": "Relationship to the CONDITION table, used to find all conditions. (1=1). The resulting set will contain zero or more objects.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLCONDPROP",
            "target": "CTRLCONDPROP",
            "remarks": "Relationship to the CTRLCONDPROP table, used to find properties for a given control condition. (ctrlcondprop.ctrlconditionid=:ctrlcondition$CTRLCONDITION.CTRLCONDITIONID). The resulting set will contain zero or more objects.",
            "whereClause": "ctrlconditionid = :ctrlconditionid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLCONDPROPFALSE",
            "target": "CTRLCONDPROP",
            "remarks": "Relationship to the CTRLCONDPROP table, used to find all property values when the condition is false. (ctrlcondprop.ctrlconditionid = ctrlcondition.ctrlconditionid and ctrlcondprop.conditionresult=0). The resulting set will contain zero or more objects.",
            "whereClause": "ctrlconditionid = :ctrlconditionid and conditionresult=0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLCONDPROPTRUE",
            "target": "CTRLCONDPROP",
            "remarks": "Relationship to the CTRLCONDPROP table, used to find all property values when the condition is true. (ctrlcondprop.ctrlconditionid = ctrlcondition.ctrlconditionid and ctrlcondprop.conditionresult=1). The resulting set will contain zero or more objects.",
            "whereClause": "ctrlconditionid = :ctrlconditionid and conditionresult=1",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CTRLCONDITION",
            "source": "CONDITION",
            "remarks": "Relationship to the CTRLCONDITION table, used to find control condition for a given control group. (ctrlcondition.conditionnum=:condition$CONDITION.CONDITIONNUM). The resulting set will contain zero or more objects.",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLCONDITION",
            "source": "CTRLGROUP",
            "remarks": "Relationship to the CTRLCONDITION table, used to find control condition for a given control group. (ctrlcondition.ctrlgroupid=:ctrlgroup$CTRLGROUP.CTRLGROUPID). The resulting set will contain zero or more objects.",
            "whereClause": "ctrlgroupid = :ctrlgroupid",
            "cardinality": "UNDEFINED"
        }
    ]
}