mos = {
    "objectName": "CONDITION",
    "className": "psdi.app.system.ConditionSet",
    "description": "Conditions and Expressions",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "CONDITIONID",
    "primaryKeyColumns": [
        "CONDITIONNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "CONDITION",
            "targetObject": "APPLICATIONAUTH",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition",
            "longDescription": null
        },
        {
            "objectName": "CONDITION",
            "targetObject": "CROSSOVERDOMAIN",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "DESTCONDITION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Destination Condition",
            "longDescription": null
        },
        {
            "objectName": "CONDITION",
            "targetObject": "CROSSOVERDOMAIN",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "SOURCECONDITION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Condition",
            "longDescription": null
        },
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
            "objectName": "CONDITION",
            "targetObject": "JOBITEM",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition",
            "longDescription": null
        },
        {
            "objectName": "CONDITION",
            "targetObject": "JOBLABOR",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition",
            "longDescription": null
        },
        {
            "objectName": "CONDITION",
            "targetObject": "JOBMATERIAL",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition",
            "longDescription": null
        },
        {
            "objectName": "CONDITION",
            "targetObject": "JOBSERVICE",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition",
            "longDescription": null
        },
        {
            "objectName": "CONDITION",
            "targetObject": "JOBTASK",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition to include the Task",
            "longDescription": null
        },
        {
            "objectName": "CONDITION",
            "targetObject": "JOBTOOL",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition",
            "longDescription": null
        },
        {
            "objectName": "CONDITION",
            "targetObject": "MAXATTRIBUTESKIPCOPY",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "CONDITION",
            "targetObject": "MAXDOMVALCOND",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition for domain value.",
            "longDescription": null
        },
        {
            "objectName": "CONDITION",
            "targetObject": "OSLCINTGRPMEMBERS",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition",
            "longDescription": null
        },
        {
            "objectName": "CONDITION",
            "targetObject": "SECURITYRESTRICT",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "CONDITIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONNUM",
            "required": true,
            "persistent": true,
            "title": "Condition",
            "remarks": "Identifies the condition. New conditions are autonumbered. However, you can give the condition a meaningful name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "The type of condition. An expression condition is an SQL-like expression that evaluates data and returns a result of true or false. A class type condition also returns a true or false result, but uses a Java class file to evaluate the logic. Use a class type condition if the logic that you want to implement is complex.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPRESSION",
            "required": false,
            "persistent": true,
            "title": "Expression",
            "remarks": "The expression text. You can enter the expression or use the condition expression builder to build your expression. The expression syntax is similar to SQL with some additional variables.",
            "sameAsAttribute": "CLAUSE",
            "sameAsObject": "QUERY"
        },
        {
            "attributeName": "CLASSNAME",
            "required": false,
            "persistent": true,
            "title": "Condition Class",
            "remarks": "The class file name. Enter the name of the Java class file that contains the logic that you want to evaluate. The class file must evaluate to true or false. The class file must exist under the product root installation folder. You can use a sample condition class file. There are sample class files saved under the product root installation folder.",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the condition.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFCOUNT",
            "required": false,
            "persistent": false,
            "title": "Reference Count",
            "remarks": "The number of times that the condition is used in applications. If you change the condition, the changes affect all of the applications that use the condition.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPORCLASS",
            "required": false,
            "persistent": false,
            "title": "Expression or Condition",
            "remarks": "Non persistent field that displays either the expression or class file name for a condition, depending on its type, for use in other applications, for example, viewing the condition on a Signature Option.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOCACHING",
            "required": false,
            "persistent": true,
            "title": "Always Evaluate",
            "remarks": "Always Evaluate Condition (Do Not Cache). Any value other than 1, the evaulated condition result is cached and is only re-evaluate if any value on the MBO that the condition is evaulated against is modified. If 1,  the condition result will not be cached.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BOOLEANNOCACHING",
            "required": false,
            "persistent": false,
            "title": "Always Evaluate",
            "remarks": "Evaluates the condition whenever the condition is applied, whether or not the object that the condition is applied to changes.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "APPLICATIONAUTH",
            "target": "APPLICATIONAUTH",
            "remarks": "Relationship from Condition to ApplicationAuth",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLCONDITION",
            "target": "CTRLCONDITION",
            "remarks": "Relationship to the CTRLCONDITION table, used to find control condition for a given control group. (ctrlcondition.conditionnum=:condition$CONDITION.CONDITIONNUM). The resulting set will contain zero or more objects.",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMVALCOND",
            "target": "MAXDOMVALCOND",
            "remarks": "Relationship from CONDITION to MAXDOMVALCOND",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SECURITYRESTRICT",
            "target": "SECURITYRESTRICT",
            "remarks": "Relationship from Condition to Security Restriction",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFEXPBUILDER",
            "target": "WFEXPBUILDER",
            "remarks": "Relationship for EXPBUILD",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CONDITION",
            "source": "APPLICATIONAUTH",
            "remarks": "Relationship from ApplicationAuth to Condition",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "SINGLE"
        },
        {
            "name": "DESTCONDITION",
            "source": "CROSSOVERDOMAIN",
            "remarks": "Relationship to the condition table, used to find the condition object of the destination condition on crossover domain.",
            "whereClause": "conditionnum=:destcondition",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRCCONDITION",
            "source": "CROSSOVERDOMAIN",
            "remarks": "Relationship to the condition table, used to find the condition object of the source condition on crossover domain.",
            "whereClause": "conditionnum=:sourcecondition",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONDITION",
            "source": "CTRLCONDITION",
            "remarks": "Relationship to the CONDITION table, used to find control condition for a given control group. (ctrlcondition.conditionnum=:condition$CONDITION.CONDITIONNUM). The resulting set will contain zero or more objects.",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONDITIONSELECT",
            "source": "CTRLCONDITION",
            "remarks": "Relationship to the CONDITION table, used to find all conditions. (1=1). The resulting set will contain zero or more objects.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONDITION",
            "source": "JOBLABOR",
            "remarks": "Relationship from Job Labor to Condition.",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": null
        },
        {
            "name": "CONDITION",
            "source": "JOBMATERIAL",
            "remarks": "Relationship from Job Materials to Condition.",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": null
        },
        {
            "name": "CONDITION",
            "source": "JOBSERVICE",
            "remarks": "Relationship from Job Services to Condition.",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": null
        },
        {
            "name": "CONDITION",
            "source": "JOBTASK",
            "remarks": "Relationship from Job Tasks to Condition.",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": null
        },
        {
            "name": "CONDITION",
            "source": "JOBTOOL",
            "remarks": "Relationship from Job Tools to Condition.",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": null
        },
        {
            "name": "CONDITION",
            "source": "JPTASKLOOKUP",
            "remarks": "Relationship from Job Plan Task Lookup to Condition.",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": null
        },
        {
            "name": "CONDITION",
            "source": "MAXDOMVALCOND",
            "remarks": "Relationship from MAXDOMVALCOND to CONDITION",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONDITION",
            "source": "SECURITYRESTRICT",
            "remarks": "Relationship from Security Restriction to Condition",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONDITION",
            "source": "SIGOPTION",
            "remarks": "Relationship from SigOption to Condition",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "UNDEFINED"
        }
    ]
}