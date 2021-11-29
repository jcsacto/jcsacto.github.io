mos = {
    "objectName": "RECONCOMPFILTER",
    "className": "psdi.app.rcncmprule.ReconCompFilterSet",
    "description": "Comparison Rule Filters",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "RECONCOMPFILTERID",
    "primaryKeyColumns": [
        "RULENAME",
        "FILTERTYPE",
        "SEQUENCENUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "RECONCOMPFILTER",
            "targetObject": "RECONCOMPFLTRAST",
            "parentKeys": "RULENAME, FILTERTYPE, SEQUENCENUM",
            "targetKeys": "RULENAME, FILTERTYPE, SEQUENCENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reconcilation Completion Filter",
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
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "RECONCOMPFILTERID",
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
            "attributeName": "SEQUENCENUM",
            "required": true,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Sequence Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILTERTYPE",
            "required": true,
            "persistent": true,
            "title": "Filter Type",
            "remarks": "Filter Type",
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
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "OPERATOR",
            "required": false,
            "persistent": true,
            "title": "Operator",
            "remarks": "Operator",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALNVALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "Value",
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
            "title": "Open Parantheses",
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
            "attributeName": "DPACLASSSTRUCTID",
            "required": false,
            "persistent": true,
            "title": "DPA Class Structure",
            "remarks": "DPA Class Structure Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "RECONCOMPFILTER",
            "source": "RECONCOMPRULE",
            "remarks": "Filters for a comparison rule",
            "whereClause": "rulename=:rulename",
            "cardinality": "UNDEFINED"
        }
    ]
}