mos = {
    "objectName": "RECONCOMPFLTRDPA",
    "className": "psdi.app.rcncmprule.ReconCompFltrDPASet",
    "description": "Reconciliation Comparison Rule Filter for Deployed",
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
            "targetObject": "RECONCOMPFLTRDPA",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "DPACLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 Class Structure",
            "longDescription": null
        },
        {
            "objectName": "RECONCOMPFILTER",
            "targetObject": "RECONCOMPFLTRDPA",
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
            "remarks": "Number that specifies the order in which to process the deployed asset filter clause. The number must be unique, and it must be greater than 0. You cannot leave the field blank. The default is increments of 10 in ascending order.",
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
            "required": false,
            "persistent": true,
            "title": "Asset Object",
            "remarks": "Asset Object Name",
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
            "title": "Asset Class Structure",
            "remarks": "Asset Class Structure Id",
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
            "title": "Asset Attribute",
            "remarks": "Asset Attribute Name",
            "sameAsAttribute": "ASSETATTRIBUTENAME",
            "sameAsObject": "RECONCOMPFILTER",
            "viewColumnName": "ASSETATTRIBUTENAME",
            "tableName": "RECONCOMPFILTER",
            "tableColumnName": "ASSETATTRIBUTENAME"
        },
        {
            "attributeName": "DPAOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Data Set 2 Object",
            "remarks": "Specifies the dataset 2 object for the dataset 2 filter.",
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
            "title": "Data Set 2 Attribute",
            "remarks": "Specific attribute of the selected dataset 2 object to use in the filter. The values displayed in the lookup depend on the value selected for the dataset 2 object.",
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
            "remarks": "Comparison operator for the comparison object filter clause. The default value is equals (=).",
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
            "remarks": "Specific value for the comparison object attribute specified in the Comparison Object Attribute field.",
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
        "viewwhere": "filtertype='DEPLOYED'"
    },
    "outgoingRelationships": [
        {
            "name": "RECONCOMPFLTRDPA_ASSETATTRIBUTEDESC",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the ASSETATTRIBUTE table, used to find classstructureid attribute description",
            "whereClause": "assetattrid=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRDPA_CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Data Set 2 Class Structure description",
            "whereClause": "classstructureid=:dpaclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRDPA_DPACLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Data Set 2 Class Structure description",
            "whereClause": "classstructureid=:dpaclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRDPA_DPADESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Data Set 2 description",
            "whereClause": "objectname='DEPLOYEDASSET' and attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRDPA_DPAATTRIBUTEDESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find  Title for a Deployed Asset Attribute",
            "whereClause": "attributename=:dpaattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRDPA_ASSETDESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find Data Set 1 attribute description",
            "whereClause": "objectname='ASSET' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRDPA_CIDESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find CI attribute description",
            "whereClause": "objectname='CI' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRDPA_ACTCIDESC",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table, used to find CI attribute description",
            "whereClause": "objectname='ACTCI' and attributename=:assetattributename",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RECONCOMPRULE_RECONCOMPFLTRDPA",
            "source": "RECONCOMPRULE",
            "remarks": "Deployed Asset Filters for a Comparison Rule ",
            "whereClause": "rulename=:rulename",
            "cardinality": "UNDEFINED"
        }
    ]
}