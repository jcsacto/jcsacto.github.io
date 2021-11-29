mos = {
    "objectName": "LIMITTOLERANCE",
    "className": "psdi.app.signature.LimitToleranceSet",
    "description": "Limits and tolerances for a security group",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LIMITTOLERANCEID",
    "primaryKeyColumns": [
        "GROUPNAME",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXGROUP",
            "targetObject": "LIMITTOLERANCE",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LIMITTOLERANCE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LIMITTOLERANCEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPNAME",
            "required": true,
            "persistent": true,
            "title": "Group",
            "remarks": "Group identifier",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier for limits and tolerances.  Implicit currencycode is the organization's default currency.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "PRLIMIT",
            "required": false,
            "persistent": true,
            "title": "PR Limit",
            "remarks": "Limit for PR approval",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POLIMIT",
            "required": false,
            "persistent": true,
            "title": "PO Limit",
            "remarks": "Limit for PO approval",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRLIMIT",
            "required": false,
            "persistent": true,
            "title": "MR Limit",
            "remarks": "Limit for MR Approval",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVOICELIMIT",
            "required": false,
            "persistent": true,
            "title": "Invoice Limit",
            "remarks": "Limit for invoice approval",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTLIMIT",
            "required": false,
            "persistent": true,
            "title": "Contract Limit",
            "remarks": "Limit for contract approval",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOWERINVOICEAMT",
            "required": false,
            "persistent": true,
            "title": "Lower Invoice Amount",
            "remarks": "Lower invoice amount for Tolerance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPPERINVOICEAMT",
            "required": false,
            "persistent": true,
            "title": "Upper Invoice Amount",
            "remarks": "Upper invoice amount for Tolerance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOWERINVOICEPCT",
            "required": false,
            "persistent": true,
            "title": "Lower Invoice Percent",
            "remarks": "Lower invoice percent for Tolerance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPPERINVOICEPCT",
            "required": false,
            "persistent": true,
            "title": "Upper Invoice Percent",
            "remarks": "Upper invoice percent for Tolerance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOWERSERVICEAMT",
            "required": false,
            "persistent": true,
            "title": "Lower Service Amount",
            "remarks": "Lower service amount for Tolerance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPPERSERVICEAMT",
            "required": false,
            "persistent": true,
            "title": "Upper Service Amount",
            "remarks": "Upper service amount for Tolerance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOWERSERVICEPCT",
            "required": false,
            "persistent": true,
            "title": "Lower Service Percent",
            "remarks": "Lower service percent for Tolerance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPPERSERVICEPCT",
            "required": false,
            "persistent": true,
            "title": "Upper Service Percent",
            "remarks": "Upper service percent for Tolerance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOWERTAXAMT",
            "required": false,
            "persistent": true,
            "title": "Lower Tax Amount",
            "remarks": "Lower tax amount for Tolerance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPPERTAXAMT",
            "required": false,
            "persistent": true,
            "title": "Upper Tax Amount",
            "remarks": "Upper tax amount for Tolerance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOWERTAXPCT",
            "required": false,
            "persistent": true,
            "title": "Lower Tax Percent",
            "remarks": "Lower tax percent for Tolerance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPPERTAXPCT",
            "required": false,
            "persistent": true,
            "title": "Upper Tax Percent",
            "remarks": "Upper tax percent for Tolerance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTHORIZED",
            "required": true,
            "persistent": false,
            "title": "Authorized",
            "remarks": "Indicates whether the logged-on user is allowed to delete this LimitTolerance record",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXGROUP",
            "target": "MAXGROUP",
            "remarks": "Relationship from LimitTolerance to MaxGroup",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGANIZATION",
            "target": "ORGANIZATION",
            "remarks": "Relationship from LimitTolerance to Organization",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LIMITTOLERANCE",
            "source": "MAXGROUP",
            "remarks": "Relationship from MaxGroup to LimitTolerance",
            "whereClause": "groupname = :groupname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LIMITTOLERANCE",
            "source": "ORGANIZATION",
            "remarks": "Relationship from Organization to LimitTolerance",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}