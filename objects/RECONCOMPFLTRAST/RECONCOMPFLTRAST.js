mos = {
    "objectName": "RECONCOMPFLTRAST",
    "className": "psdi.app.rcncmprule.ReconCompFltrAstSet",
    "description": "Reconciliation Comparison Rule FIlter For Asset",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "RULENAME",
        "FILTERTYPE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RECONCOMPFLTRAST",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "DPACLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 Class Structure",
            "longDescription": null
        },
        {
            "objectName": "RECONCOMPFILTER",
            "targetObject": "RECONCOMPFLTRAST",
            "parentKeys": "RULENAME, FILTERTYPE, SEQUENCENUM",
            "targetKeys": "RULENAME, FILTERTYPE, SEQUENCENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reconcilation Completion Filter",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RECONCOMPFILTERID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": "RECONCOMPFILTERID",
            "sameAsObject": "RECONCOMPFILTER",
            "viewColumnName": "RECONCOMPFILTERID",
            "tableName": "RECONCOMPFILTER",
            "tableColumnName": "RECONCOMPFILTERID"
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
            "tableName": "RECONCOMPFILTER",
            "tableColumnName": "RULENAME"
        },
        {
            "attributeName": "SEQUENCENUM",
            "required": true,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Number that specifies the order in which to process the asset filter clause. The number must be unique, and it must be greater than 0. You cannot leave the field blank. The default is increments of 10 in ascending order.",
            "sameAsAttribute": "SEQUENCENUM",
            "sameAsObject": "RECONCOMPFILTER",
            "viewColumnName": "SEQUENCENUM",
            "tableName": "RECONCOMPFILTER",
            "tableColumnName": "SEQUENCENUM"
        },
        {
            "attributeName": "FILTERTYPE",
            "required": true,
            "persistent": true,
            "title": "Filter Type",
            "remarks": "Filter Type",
            "sameAsAttribute": "FILTERTYPE",
            "sameAsObject": "RECONCOMPFILTER",
            "viewColumnName": "FILTERTYPE",
            "tableName": "RECONCOMPFILTER",
            "tableColumnName": "FILTERTYPE"
        },
        {
            "attributeName": "ASSETOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Data Set 1 Object",
            "remarks": "Specifies the IT dataset 1 object for the dataset 1 filter. There are four possible values for this field: ASSET, ASSETSPEC, CI and CISPEC.",
            "sameAsAttribute": "ASSETOBJECTNAME",
            "sameAsObject": "RECONCOMPFILTER",
            "viewColumnName": "ASSETOBJECTNAME",
            "tableName": "RECONCOMPFILTER",
            "tableColumnName": "ASSETOBJECTNAME"
        },
        {
            "attributeName": "ASSETCLASSSTRUCTID",
            "required": false,
            "persistent": true,
            "title": "Data Set 1 Class Structure",
            "remarks": "Data Set 1 class structure to use for the dataset 1 filter clause. When ASSETSPEC (Asset Specification) or CISPEC (CI Specification) is selected as the dataset 1 object, this field is mandatory. This field is not used if you select ASSET or CI for the dataset 1 object.",
            "sameAsAttribute": "ASSETCLASSSTRUCTID",
            "sameAsObject": "RECONCOMPFILTER",
            "viewColumnName": "ASSETCLASSSTRUCTID",
            "tableName": "RECONCOMPFILTER",
            "tableColumnName": "ASSETCLASSSTRUCTID"
        },
        {
            "attributeName": "ASSETATTRIBUTENAME",
            "required": false,
            "persistent": true,
            "title": "Data Set 1 Attribute",
            "remarks": "Specifies the attribute of the dataset 1 object or dataset 1 class structure to use for the dataset 1 filter. Values displayed in the lookup depend on the object specified in the Data Set 1 Object field.",
            "sameAsAttribute": "ASSETATTRIBUTENAME",
            "sameAsObject": "RECONCOMPFILTER",
            "viewColumnName": "ASSETATTRIBUTENAME",
            "tableName": "RECONCOMPFILTER",
            "tableColumnName": "ASSETATTRIBUTENAME"
        },
        {
            "attributeName": "DPAOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Object",
            "remarks": "Deployed Asset Object Name",
            "sameAsAttribute": "DPAOBJECTNAME",
            "sameAsObject": "RECONCOMPFILTER",
            "viewColumnName": "DPAOBJECTNAME",
            "tableName": "RECONCOMPFILTER",
            "tableColumnName": "DPAOBJECTNAME"
        },
        {
            "attributeName": "DPAATTRIBUTENAME",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Attribute",
            "remarks": "Deployed Asset Attribute Name",
            "sameAsAttribute": "DPAATTRIBUTENAME",
            "sameAsObject": "RECONCOMPFILTER",
            "viewColumnName": "DPAATTRIBUTENAME",
            "tableName": "RECONCOMPFILTER",
            "tableColumnName": "DPAATTRIBUTENAME"
        },
        {
            "attributeName": "OPERATOR",
            "required": false,
            "persistent": true,
            "title": "Operator",
            "remarks": "Comparison operator for the reconciliation filter clause. The default value is equals (=).",
            "sameAsAttribute": "OPERATOR",
            "sameAsObject": "RECONCOMPFILTER",
            "viewColumnName": "OPERATOR",
            "tableName": "RECONCOMPFILTER",
            "tableColumnName": "OPERATOR"
        },
        {
            "attributeName": "ALNVALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "Specific value for the reconciliation attribute specified in the Reconciliation Attribute field.",
            "sameAsAttribute": "ALNVALUE",
            "sameAsObject": "RECONCOMPFILTER",
            "viewColumnName": "ALNVALUE",
            "tableName": "RECONCOMPFILTER",
            "tableColumnName": "ALNVALUE"
        },
        {
            "attributeName": "ANDOR",
            "required": false,
            "persistent": true,
            "title": "Sequence Operator",
            "remarks": "Logical operator that defines how the clause relates to the next clause in the sequence. This field is mandatory if you define more than one clause. This field must be empty for the last row in the sequence of clauses. Select one of the following values: AND, OR, or nothing.",
            "sameAsAttribute": "ANDOR",
            "sameAsObject": "RECONCOMPFILTER",
            "viewColumnName": "ANDOR",
            "tableName": "RECONCOMPFILTER",
            "tableColumnName": "ANDOR"
        },
        {
            "attributeName": "OPENPARENTHESES",
            "required": false,
            "persistent": true,
            "title": "(...",
            "remarks": "Open parenthesis mark to indicate the beginning of an expression. Each open parenthesis mark must have a corresponding close parenthesis mark. Parenthesis marks group expressions to specify the order of operations when you use multiple clauses joined by a logical operator (AND or OR).",
            "sameAsAttribute": "OPENPARENTHESES",
            "sameAsObject": "RECONCOMPFILTER",
            "viewColumnName": "OPENPARENTHESES",
            "tableName": "RECONCOMPFILTER",
            "tableColumnName": "OPENPARENTHESES"
        },
        {
            "attributeName": "CLOSEPARENTHESES",
            "required": false,
            "persistent": true,
            "title": "...)",
            "remarks": "Close parenthesis mark to indicate the end of an expression. Each close parenthesis mark must have a corresponding open parenthesis mark. Parenthesis marks group expressions to specify the order of operations when you use multiple clauses joined by a logical operator (AND or OR).",
            "sameAsAttribute": "CLOSEPARENTHESES",
            "sameAsObject": "RECONCOMPFILTER",
            "viewColumnName": "CLOSEPARENTHESES",
            "tableName": "RECONCOMPFILTER",
            "tableColumnName": "CLOSEPARENTHESES"
        },
        {
            "attributeName": "ASSETATTRIBUTEDESC",
            "required": false,
            "persistent": false,
            "title": "Data Set 1 Attribute Title",
            "remarks": "Describes the attribute displayed in the Data Set 1 Attribute field.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "tableName": "RECONCOMPFILTER",
            "tableColumnName": "DPACLASSSTRUCTID"
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "filtertype='AUTHORIZED'"
    },
    "outgoingRelationships": [
        {
            "name": "RECONCOMPFLTRAST_ASSETATTRIBUTEDESC",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the ASSETATTRIBUTE table, used to find classstructureid attribute description",
            "whereClause": "assetattrid=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRAST_CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Asset Class Structure description",
            "whereClause": "classstructureid=:assetclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRAST_DPACLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Data Set 2 Class Structure description",
            "whereClause": "classstructureid=:dpaclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRAST_DPADESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Data Set 2 description",
            "whereClause": "objectname='DEPLOYEDASSET' and attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRAST_ITEMDESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find Item attribute description",
            "whereClause": "objectname='ITEM' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRAST_DPAATTRIBUTEDESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Data Set 2 Attribute description",
            "whereClause": "attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRAST_ASSETDESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find Asset attribute description",
            "whereClause": "objectname='ASSET' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RECONCOMPRULE_RECONCOMPFLTRAST",
            "source": "RECONCOMPRULE",
            "remarks": "Asset Filters for a Comparison Rule ",
            "whereClause": "rulename=:rulename",
            "cardinality": "UNDEFINED"
        }
    ]
}