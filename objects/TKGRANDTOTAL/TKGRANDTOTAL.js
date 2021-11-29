mos = {
    "objectName": "TKGRANDTOTAL",
    "className": "psdi.app.ticket.virtual.TKGrandTotalSet",
    "description": "Non-Persistent table to display TK grandtotals",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ESTLABHRS",
            "required": false,
            "persistent": false,
            "title": "Estimated Labor Hours",
            "remarks": "Total of Estimated Labor Hours for Work Order Hierarchy",
            "sameAsAttribute": "ESTLABHRS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTATAPPRLABHRS",
            "required": false,
            "persistent": false,
            "title": "Estimated Labor Hours at Approval",
            "remarks": "Total of Estimated Labor Hours for Work Order Hierarchy when Approved",
            "sameAsAttribute": "ESTATAPPRLABHRS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ACTLABHRS",
            "required": false,
            "persistent": false,
            "title": "Actual Labor Hours",
            "remarks": "Total of Actual Labor Hours for Work Order Hierarchy",
            "sameAsAttribute": "ACTLABHRS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTLABCOST",
            "required": false,
            "persistent": false,
            "title": "Estimated Labor Cost",
            "remarks": "Total of Estimated Labor Cost for Work Order Hierarchy",
            "sameAsAttribute": "ESTLABCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTATAPPRLABCOST",
            "required": false,
            "persistent": false,
            "title": "Estimated Labor Cost at Approval",
            "remarks": "Total of Estimated Labor Cost for Work Order Hierarchy when Approved",
            "sameAsAttribute": "ESTATAPPRLABCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ACTLABCOST",
            "required": false,
            "persistent": false,
            "title": "Actual Labor Cost",
            "remarks": "Total of Actual Labor Cost for Work Order Hierarchy",
            "sameAsAttribute": "ACTLABCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTMATCOST",
            "required": false,
            "persistent": false,
            "title": "Estimated Material Cost",
            "remarks": "Total of Estimated Material Cost for Work Order Hierarchy",
            "sameAsAttribute": "ESTMATCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTATAPPRMATCOST",
            "required": false,
            "persistent": false,
            "title": "Estimated Material Cost at Approval",
            "remarks": "Total of Estimated Material Cost for Work Order Hierarchy when Approved",
            "sameAsAttribute": "ESTATAPPRMATCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ACTMATCOST",
            "required": false,
            "persistent": false,
            "title": "Actual Material Cost",
            "remarks": "Total of Actual Material Cost for Work Order Hierarchy",
            "sameAsAttribute": "ACTMATCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTTOOLCOST",
            "required": false,
            "persistent": false,
            "title": "Estimated Tool Cost",
            "remarks": "Total of Estimated Tool Cost for Work Order Hierarchy",
            "sameAsAttribute": "ESTTOOLCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTATAPPRTOOLCOST",
            "required": false,
            "persistent": false,
            "title": "Estimated Tool Cost at Approval",
            "remarks": "Total of Estimated Tool Cost for Work Order Hierarchy when Approved",
            "sameAsAttribute": "ESTATAPPRTOOLCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ACTTOOLCOST",
            "required": false,
            "persistent": false,
            "title": "Actual Tool Cost",
            "remarks": "Total of Actual Tool Cost for Work Order Hierarchy",
            "sameAsAttribute": "ACTTOOLCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTSERVCOST",
            "required": false,
            "persistent": false,
            "title": "Estimated Service Cost",
            "remarks": "Total of Estimated Service Cost for Work Order Hierarchy",
            "sameAsAttribute": "ESTSERVCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTATAPPRSERVCOST",
            "required": false,
            "persistent": false,
            "title": "Estimated Service Cost at Approval",
            "remarks": "Total of Estimated Service Cost for Work Order Hierarchy when Approved",
            "sameAsAttribute": "ESTATAPPRSERVCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ACTSERVCOST",
            "required": false,
            "persistent": false,
            "title": "Actual Service Cost",
            "remarks": "Total of Actual Service Cost for Work Order Hierarchy",
            "sameAsAttribute": "ACTSERVCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTTOTALCOST",
            "required": false,
            "persistent": false,
            "title": "Grand Total of Estimated Cost",
            "remarks": "Grand Total of Estimated Cost of Work Order Hierarchy",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESTATAPPRTOTALCOST",
            "required": false,
            "persistent": false,
            "title": "Grand Total of Estimated Cost at approval",
            "remarks": "Grand Total of Estimated Cost of Work Order Hierarchy when approved",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTTOTALCOST",
            "required": false,
            "persistent": false,
            "title": "Actual Grand Total Cost",
            "remarks": "Actual Grand Total Cost of Work Order Hierarchy",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "TKGRANDTOTAL",
            "source": "TICKET",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}