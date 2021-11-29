mos = {
    "objectName": "RECONRULECLAUSE",
    "className": "psdi.app.rcnlnkrule.ReconRuleClauseSet",
    "description": "A Single Piece of Reconciliation Rule",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "RECONRULECLAUSEID",
    "primaryKeyColumns": [
        "RULENAME",
        "RULETYPE",
        "SEQUENCENUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "RECONRULECLAUSE",
            "targetObject": "RECONATTRCLAUSE",
            "parentKeys": "RULENAME, RULETYPE, SEQUENCENUM",
            "targetKeys": "RULENAME, RULETYPE, SEQUENCENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reconciliation Rule Clause",
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
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RECONRULECLAUSE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "ASSETCLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RECONRULECLAUSE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "DPACLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 Class Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONRULECLAUSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ASSETOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONRULECLAUSE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "DPAOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 MBO",
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
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RULENAME",
            "required": true,
            "persistent": true,
            "title": "Rule",
            "remarks": "Rule Name",
            "sameAsAttribute": "RULENAME",
            "sameAsObject": "RECONRULE"
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
            "attributeName": "SEQUENCENUM",
            "required": true,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Sequence Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECORDCOMPOPERATOR",
            "required": false,
            "persistent": true,
            "title": "Record Comp Operator",
            "remarks": "Record Comparison Operator",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Asset Object",
            "remarks": "Asset Object Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETCLASSSTRUCTID",
            "required": false,
            "persistent": true,
            "title": "Asset Class Structure",
            "remarks": "Asset Class Structure Id",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "ASSETATTRIBUTENAME",
            "required": false,
            "persistent": true,
            "title": "Asset Attribute",
            "remarks": "Asset Attribute Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPAOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Object",
            "remarks": "Deployed Asset Object Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPAATTRIBUTENAME",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Attribute",
            "remarks": "Deployed Asset Attribute Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ANDOR",
            "required": false,
            "persistent": true,
            "title": "And/Or",
            "remarks": "And/Or",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPENPARENTHESES",
            "required": false,
            "persistent": true,
            "title": "Open Parentheses",
            "remarks": "Open Parentheses",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLOSEPARENTHESES",
            "required": false,
            "persistent": true,
            "title": "Close Parentheses",
            "remarks": "Close Parentheses",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPAUNITATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Unit of Measure Attribute",
            "remarks": "Deployed Asset Unit of Measure Attribute",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPACLASSSTRUCTID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Data Set 2 Class Structure Id",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}