mos = {
    "objectName": "RECONRCDCLAUSE",
    "className": "psdi.app.rcncmprule.ReconRcdClauseSet",
    "description": "Record Comparison Rule Clause",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "RULENAME",
        "RULETYPE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RECONRCDCLAUSE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "ASSETCLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RECONRCDCLAUSE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "DPACLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 Class Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONRCDCLAUSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ASSETOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONRCDCLAUSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "DPAOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 MBO",
            "longDescription": null
        },
        {
            "objectName": "RECONRULECLAUSE",
            "targetObject": "RECONRCDCLAUSE",
            "parentKeys": "RULENAME, RULETYPE, SEQUENCENUM",
            "targetKeys": "RULENAME, RULETYPE, SEQUENCENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reconciliation Rule Clause",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RECONRULECLAUSEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": "RECONRULECLAUSEID",
            "sameAsObject": "RECONRULECLAUSE",
            "viewColumnName": "RECONRULECLAUSEID",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "RECONRULECLAUSEID"
        },
        {
            "attributeName": "RULENAME",
            "required": true,
            "persistent": true,
            "title": "Rule",
            "remarks": "Rule Name",
            "sameAsAttribute": "RULENAME",
            "sameAsObject": "RECONRULE",
            "viewColumnName": "RULENAME",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "RULENAME"
        },
        {
            "attributeName": "RULETYPE",
            "required": true,
            "persistent": true,
            "title": "Rule Type",
            "remarks": "Rule Type",
            "sameAsAttribute": "RULETYPE",
            "sameAsObject": "RECONRULECLAUSE",
            "viewColumnName": "RULETYPE",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "RULETYPE"
        },
        {
            "attributeName": "SEQUENCENUM",
            "required": true,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Number that specifies the order in which to process the clause. The number must be unique, and it must be greater than 0. You cannot leave the field blank. The default is increments of 10 in ascending order.",
            "sameAsAttribute": "SEQUENCENUM",
            "sameAsObject": "RECONRULECLAUSE",
            "viewColumnName": "SEQUENCENUM",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "SEQUENCENUM"
        },
        {
            "attributeName": "RECORDCOMPOPERATOR",
            "required": true,
            "persistent": true,
            "title": "Operator",
            "remarks": "Comparison operator for the reconciliation. From the lookup, select a value to define the match results you want to produce when reconciliation is executed.",
            "sameAsAttribute": "RECORDCOMPOPERATOR",
            "sameAsObject": "RECONRULECLAUSE",
            "viewColumnName": "RECORDCOMPOPERATOR",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "RECORDCOMPOPERATOR"
        },
        {
            "attributeName": "ASSETOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Data Set 1 Object",
            "remarks": "Specifies the dataset 1 object for comparison.  There are four possible values for this field: ASSET, ASSETSPEC, CI and CISPEC.",
            "sameAsAttribute": "ASSETOBJECTNAME",
            "sameAsObject": "RECONRULECLAUSE",
            "viewColumnName": "ASSETOBJECTNAME",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "ASSETOBJECTNAME"
        },
        {
            "attributeName": "ASSETCLASSSTRUCTID",
            "required": false,
            "persistent": true,
            "title": "Data Set 1 Class Structure",
            "remarks": "Dataset 1 class structure to use for the comparison. When ASSETSPEC (Asset Specification) or CISPEC (CI Specification) is selected as the dataset 1 object, this field is mandatory. This field is not used if you select ASSET or CI for the dataset 1 object.",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE",
            "viewColumnName": "ASSETCLASSSTRUCTID",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "ASSETCLASSSTRUCTID"
        },
        {
            "attributeName": "ASSETATTRIBUTENAME",
            "required": false,
            "persistent": true,
            "title": "Asset Attribute",
            "remarks": "Asset Attribute Name",
            "sameAsAttribute": "ASSETATTRIBUTENAME",
            "sameAsObject": "RECONRULECLAUSE",
            "viewColumnName": "ASSETATTRIBUTENAME",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "ASSETATTRIBUTENAME"
        },
        {
            "attributeName": "DPAOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Data Set 2 Object",
            "remarks": "Specifies the dataset2 object for the comparison.",
            "sameAsAttribute": "DPAOBJECTNAME",
            "sameAsObject": "RECONRULECLAUSE",
            "viewColumnName": "DPAOBJECTNAME",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "DPAOBJECTNAME"
        },
        {
            "attributeName": "DPAATTRIBUTENAME",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Attribute",
            "remarks": "Deployed Asset Attribute Name",
            "sameAsAttribute": "DPAATTRIBUTENAME",
            "sameAsObject": "RECONRULECLAUSE",
            "viewColumnName": "DPAATTRIBUTENAME",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "DPAATTRIBUTENAME"
        },
        {
            "attributeName": "ANDOR",
            "required": false,
            "persistent": true,
            "title": "Sequence Operator",
            "remarks": "Logical operator that defines how the clause relates to the next clause in the sequence. This field is mandatory if you define more than one clause. This field must be empty for the last row in the sequence of clauses. Select one of the following values: AND, OR, or nothing.",
            "sameAsAttribute": "ANDOR",
            "sameAsObject": "RECONRULECLAUSE",
            "viewColumnName": "ANDOR",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "ANDOR"
        },
        {
            "attributeName": "OPENPARENTHESES",
            "required": false,
            "persistent": true,
            "title": "(...",
            "remarks": "Open parenthesis mark to indicate the beginning of an expression. Each open parenthesis mark must have a corresponding close parenthesis mark. Parenthesis marks group expressions to specify the order of operations when you use multiple clauses joined by a logical operator (AND or OR).",
            "sameAsAttribute": "OPENPARENTHESES",
            "sameAsObject": "RECONRULECLAUSE",
            "viewColumnName": "OPENPARENTHESES",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "OPENPARENTHESES"
        },
        {
            "attributeName": "CLOSEPARENTHESES",
            "required": false,
            "persistent": true,
            "title": "...)",
            "remarks": "Close parenthesis mark to indicate the end of an expression. Each close parenthesis mark must have a corresponding open parenthesis mark. Parenthesis marks group expressions to specify the order of operations when you use multiple clauses joined by a logical operator (AND or OR).",
            "sameAsAttribute": "CLOSEPARENTHESES",
            "sameAsObject": "RECONRULECLAUSE",
            "viewColumnName": "CLOSEPARENTHESES",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "CLOSEPARENTHESES"
        },
        {
            "attributeName": "DPAUNITATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Unit of Measure Attribute",
            "remarks": "Deployed Asset Unit of Measure Attribute",
            "sameAsAttribute": "DPAUNITATTRIBUTE",
            "sameAsObject": "RECONRULECLAUSE",
            "viewColumnName": "DPAUNITATTRIBUTE",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "DPAUNITATTRIBUTE"
        },
        {
            "attributeName": "DPACLASSSTRUCTID",
            "required": false,
            "persistent": true,
            "title": "Data Set 2 Class Structure",
            "remarks": "Data Set 2 Class Structure Id",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE",
            "viewColumnName": "DPACLASSSTRUCTID",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "DPACLASSSTRUCTID"
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "ruletype='RECORD'"
    },
    "outgoingRelationships": [
        {
            "name": "RECONRCDCLAUSE_ASSETATTRIBUTEDESC",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the ASSETATTRIBUTE table, used to find classstructureid attribute description",
            "whereClause": "assetattrid=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONRCDCLAUSE_DPACLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Data Set 2 Class Structure description",
            "whereClause": "classstructureid=:dpaclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONRCDCLAUSE_CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Asset Class Structure description",
            "whereClause": "classstructureid=:assetclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONRCDCLAUSE_DPAATTRIBUTEDESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Data Set 2 Attribute description",
            "whereClause": "attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONRCDCLAUSE_DPADESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Data Set 2 description",
            "whereClause": "objectname='DEPLOYEDASSET' and attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONRCDCLAUSE_ACTCIDESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find CI attribute description",
            "whereClause": "objectname='ACTCI' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONRCDCLAUSE_ASSETDESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find Data Set 1 attribute description",
            "whereClause": "objectname='ASSET' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONRCDCLAUSE_CIDESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find CI attribute description",
            "whereClause": "objectname='CI' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RECONCOMPRULE_RECONRCDCLAUSE",
            "source": "RECONCOMPRULE",
            "remarks": "Clauses for a Record-Based Comparison Rule",
            "whereClause": "rulename=:rulename",
            "cardinality": "UNDEFINED"
        }
    ]
}