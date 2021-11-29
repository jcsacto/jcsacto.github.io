mos = {
    "objectName": "RECONRULE",
    "className": "psdi.app.rcnlnkrule.ReconRuleSet",
    "description": "Definitions of  Comparison and Link Rules",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "RECONRULEID",
    "primaryKeyColumns": [
        "RULENAME",
        "RULETYPE"
    ],
    "logicalRelationships": [
        {
            "objectName": "RECONRULE",
            "targetObject": "RECONCOMPRULE",
            "parentKeys": "RULENAME, RULETYPE",
            "targetKeys": "RULENAME, RULETYPE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reconcilation Rule",
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
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "RECONRULE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
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
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RULENAME",
            "required": true,
            "persistent": true,
            "title": "Rule",
            "remarks": "Rule Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RULETYPE",
            "required": true,
            "persistent": true,
            "title": "Rule Type",
            "remarks": "Rule Type",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "sameAsObject": "LANGUAGE"
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
            "sameAsObject": null
        },
        {
            "attributeName": "RECONTYPE",
            "required": true,
            "persistent": true,
            "title": "Data Set 1",
            "remarks": "Used to categorize the type of Reconciliation Rule being configured.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPSET",
            "required": false,
            "persistent": true,
            "title": "Data Set 2",
            "remarks": "Used to categorize set of data being compared in this reconciliation type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FULLCICOMPARE",
            "required": true,
            "persistent": true,
            "title": "FULLCICOMPARE",
            "remarks": "indicates a complete CI relationship and attribute comparison should be performed",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "RECONRULE_RECONTASKCOMP",
            "target": "RECONTASKCOMP",
            "remarks": "ReconRule to ReconTaskComp",
            "whereClause": "comprulename=:rulename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONRULE_RECONTASKLINK",
            "target": "RECONTASKLINK",
            "remarks": "ReconRule to ReconTaskLink",
            "whereClause": "linkrulename=:rulename",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}