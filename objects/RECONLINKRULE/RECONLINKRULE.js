mos = {
    "objectName": "RECONLINKRULE",
    "className": "psdi.app.rcnlnkrule.ReconLinkRuleSet",
    "description": "Reconciliation Link Rule Setup",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": null,
    "primaryKeyColumns": [
        "RULENAME",
        "RULETYPE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "RECONLINKRULE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "RECONRULE",
            "targetObject": "RECONLINKRULE",
            "parentKeys": "RULENAME, RULETYPE",
            "targetKeys": "RULENAME, RULETYPE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reconcilation Rule",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RECONRULEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": "RECONRULEID",
            "sameAsObject": "RECONRULE",
            "viewColumnName": "RECONRULEID",
            "tableName": "RECONRULE",
            "tableColumnName": "RECONRULEID"
        },
        {
            "attributeName": "RULENAME",
            "required": true,
            "persistent": true,
            "title": "Link",
            "remarks": "Rule Name",
            "sameAsAttribute": "RULENAME",
            "sameAsObject": "RECONRULE",
            "viewColumnName": "RULENAME",
            "tableName": "RECONRULE",
            "tableColumnName": "RULENAME"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the link rule. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "RECONRULE",
            "viewColumnName": "DESCRIPTION",
            "tableName": "RECONRULE",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "RULETYPE",
            "required": true,
            "persistent": true,
            "title": "Rule Type",
            "remarks": "Rule Type",
            "sameAsAttribute": "RULETYPE",
            "sameAsObject": "RECONRULE",
            "viewColumnName": "RULETYPE",
            "tableName": "RECONRULE",
            "tableColumnName": "RULETYPE"
        },
        {
            "attributeName": "CURRENTEXPRESSION",
            "required": false,
            "persistent": false,
            "title": "Expression",
            "remarks": "A field shown to the user that displays the expression built from the current tab",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE",
            "viewColumnName": "LANGCODE",
            "tableName": "RECONRULE",
            "tableColumnName": "LANGCODE"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "HASLD",
            "tableName": "RECONRULE",
            "tableColumnName": "HASLD"
        },
        {
            "attributeName": "RECONTYPE",
            "required": true,
            "persistent": true,
            "title": "Data Set 1",
            "remarks": "Used to categorize the type of Reconciliation Rule being configured.",
            "sameAsAttribute": "RECONTYPE",
            "sameAsObject": "RECONRULE",
            "viewColumnName": "RECONTYPE",
            "tableName": "RECONRULE",
            "tableColumnName": "RECONTYPE"
        },
        {
            "attributeName": "COMPSET",
            "required": false,
            "persistent": true,
            "title": "Data Set 2",
            "remarks": "Used to categorize set of data being compared in this reconciliation type.",
            "sameAsAttribute": "COMPSET",
            "sameAsObject": "RECONRULE",
            "viewColumnName": "COMPSET",
            "tableName": "RECONRULE",
            "tableColumnName": "COMPSET"
        },
        {
            "attributeName": "FULLCICOMPARE",
            "required": true,
            "persistent": true,
            "title": "FULLCICOMPARE",
            "remarks": "indicates a complete CI relationship and attribute comparison should be performed",
            "sameAsAttribute": "FULLCICOMPARE",
            "sameAsObject": "RECONRULE",
            "viewColumnName": "FULLCICOMPARE",
            "tableName": "RECONRULE",
            "tableColumnName": "FULLCICOMPARE"
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "ruletype='LINK'"
    },
    "outgoingRelationships": [
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from RECONLINKRULE.",
            "whereClause": "ldkey=:reconruleid and ldownertable = 'RECONLINKRULE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKRULE_RECONLINKCLAUSE",
            "target": "RECONLINKCLAUSE",
            "remarks": "Clauses for a Link Rule ",
            "whereClause": "rulename=:rulename",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RECONTASK_RECONLINKRULE",
            "source": "RECONTASK",
            "remarks": "Link Rules for a Task",
            "whereClause": "rulename in (select linkrulename from recontasklink where taskname=:taskname)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONTASKLINK_RECONLINKRULE",
            "source": "RECONTASKLINK",
            "remarks": "Link Rules for a Task",
            "whereClause": "rulename=:linkrulename",
            "cardinality": "UNDEFINED"
        }
    ]
}