mos = {
    "objectName": "RECONLINKCLAUSE",
    "className": "psdi.app.rcnlnkrule.ReconLinkClauseSet",
    "description": "Reconciliation Link Rule Clause",
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
            "targetObject": "RECONLINKCLAUSE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "ASSETCLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RECONLINKCLAUSE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "DPACLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 Class Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONLINKCLAUSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ASSETOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONLINKCLAUSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "DPAOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 MBO",
            "longDescription": null
        },
        {
            "objectName": "RECONRULECLAUSE",
            "targetObject": "RECONLINKCLAUSE",
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
            "remarks": "Number that specifies the order in which to process the clause. The number must be unique, and it must be greater than 0.",
            "sameAsAttribute": "SEQUENCENUM",
            "sameAsObject": "RECONRULECLAUSE",
            "viewColumnName": "SEQUENCENUM",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "SEQUENCENUM"
        },
        {
            "attributeName": "RECORDCOMPOPERATOR",
            "required": false,
            "persistent": true,
            "title": "Operator",
            "remarks": "Type of link between assets and deployed assets. The equals ( = ) operator is read-only; it cannot be changed.",
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
            "remarks": "Specifies the dataset 1 object for comparison.",
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
            "remarks": "Dataset 1 object class structure to use for the attributes equality clause. When ASSETSPEC (Asset Specification) or CISPEC (CI Specification) is selected as the dataset 1 object, this field is mandatory. This field is not used if you select ASSET or CI for the dataset 1 object.",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE",
            "viewColumnName": "ASSETCLASSSTRUCTID",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "ASSETCLASSSTRUCTID"
        },
        {
            "attributeName": "ASSETATTRIBUTENAME",
            "required": true,
            "persistent": true,
            "title": "Data Set 1 Attribute",
            "remarks": "Specific attribute of the dataset 1 object to compare with the dataset 2 object.",
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
            "remarks": "Specifies the dataset 2 object for the comparison.",
            "sameAsAttribute": "DPAOBJECTNAME",
            "sameAsObject": "RECONRULECLAUSE",
            "viewColumnName": "DPAOBJECTNAME",
            "tableName": "RECONRULECLAUSE",
            "tableColumnName": "DPAOBJECTNAME"
        },
        {
            "attributeName": "DPAATTRIBUTENAME",
            "required": true,
            "persistent": true,
            "title": "Data Set 2 Attribute",
            "remarks": "Specific attribute of the selected Data Set 2 object to compare with the specified attribute of the Data Set 1 object. The values displayed in the lookup depend on the value in the Data Set 2 Object field.",
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
            "remarks": "Logical operator that defines how a link clause relates to the next clause in the sequence. This field is mandatory if a link rule consists of more than one clause. This field must be empty for the last row in the sequence of clauses. Select one of the following values: AND, OR, or nothing.",
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
            "attributeName": "ASSETATTRIBUTEDESC",
            "required": false,
            "persistent": false,
            "title": "Data Set 1 Attribute Title",
            "remarks": "Describes the attribute displayed in the Data Set 1 Object Attribute field.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
        },
        {
            "attributeName": "DPAATTRIBUTEDESC",
            "required": false,
            "persistent": false,
            "title": "Data Set 2 Attribute Title",
            "remarks": "Describes the attribute displayed in the Data Set 2 Object Attribute field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "ruletype='LINK'"
    },
    "outgoingRelationships": [
        {
            "name": "RECONLINKCLAUSE_ASSETATTRIBUTEDESC",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the ASSETATTRIBUTE table, used to find classstructureid attribute description",
            "whereClause": "assetattrid=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKCLAUSE_DPACLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Data Set 2 Class Structure description",
            "whereClause": "classstructureid=:dpaclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKCLAUSE_CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Asset Class Structure description",
            "whereClause": "classstructureid=:assetclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKCLAUSE_DPAATTRIBUTEDESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find  Title for a Deployed Asset Attribute",
            "whereClause": "attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKCLAUSE_DPADESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Data Set 2 description",
            "whereClause": "objectname='DEPLOYEDASSET' and attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKCLAUSE_DPAUNITATTRIBUTEDESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find  Title for a Deployed Asset Unit of Measure Attribute",
            "whereClause": "attributename=:dpaunitattribute",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKCLAUSE_ASSETDESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find Asset attribute description",
            "whereClause": "objectname='ASSET' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKCLAUSE_CIDESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find CI attribute description",
            "whereClause": "objectname='CI' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKCLAUSE_ACTCIDESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find CI attribute description",
            "whereClause": "objectname='ACTCI' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RECONLINKRULE_RECONLINKCLAUSE",
            "source": "RECONLINKRULE",
            "remarks": "Clauses for a Link Rule ",
            "whereClause": "rulename=:rulename",
            "cardinality": "UNDEFINED"
        }
    ]
}