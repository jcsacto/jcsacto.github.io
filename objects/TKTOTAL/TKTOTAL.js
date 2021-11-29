mos = {
    "objectName": "TKTOTAL",
    "className": "psdi.app.ticket.virtual.TKTotalSet",
    "description": "Non-Persistent table to display TK totals",
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
            "attributeName": "ESTLABCOST",
            "required": false,
            "persistent": false,
            "title": "Estimated Labor Cost",
            "remarks": "Estimated Labor Cost including Activities and Tasks",
            "sameAsAttribute": "ESTLABCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTMATCOST",
            "required": false,
            "persistent": false,
            "title": "Estimated Material Cost",
            "remarks": "Estimated Material Cost including Activities and Tasks",
            "sameAsAttribute": "ESTMATCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTSERVCOST",
            "required": false,
            "persistent": false,
            "title": "Estimated Service Cost",
            "remarks": "Estimated Service Cost including Activities and Tasks",
            "sameAsAttribute": "ESTSERVCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTTOOLCOST",
            "required": false,
            "persistent": false,
            "title": "Estimated Tool Cost",
            "remarks": "Estimated Tool Cost including Activities and Tasks",
            "sameAsAttribute": "ESTTOOLCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTLABHRS",
            "required": false,
            "persistent": false,
            "title": "Estimated Labor Cost",
            "remarks": "Estimated Labor Cost including Activities and Tasks",
            "sameAsAttribute": "ESTLABHRS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTATAPPRLABCOST",
            "required": false,
            "persistent": false,
            "title": "Estimate Labor Cost at Approval",
            "remarks": "Estimate at time of Approval of the Labor Costs including Activities and Tasks",
            "sameAsAttribute": "ESTATAPPRLABCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTATAPPRMATCOST",
            "required": false,
            "persistent": false,
            "title": "Estimate Material Cost at Approval",
            "remarks": "Estimate at time of Approval of all Material Costs including Activities and Tasks",
            "sameAsAttribute": "ESTATAPPRMATCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTATAPPRSERVCOST",
            "required": false,
            "persistent": false,
            "title": "Estimate Service Cost at Approval",
            "remarks": "Estimate at time of Approval of all Service Costs including Activities and Tasks",
            "sameAsAttribute": "ESTATAPPRSERVCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTATAPPRTOOLCOST",
            "required": false,
            "persistent": false,
            "title": "Estimate Tool Cost at Approval",
            "remarks": "Estimate at time of Approval of all Tool Costs including Activities and Tasks",
            "sameAsAttribute": "ESTATAPPRTOOLCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTATAPPRLABHRS",
            "required": false,
            "persistent": false,
            "title": "Estimate Labor Hours at Approval",
            "remarks": "Estimate at time of Approval of all the Labor Hours including Activities and Tasks",
            "sameAsAttribute": "ESTATAPPRLABHRS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ACTLABCOST",
            "required": false,
            "persistent": false,
            "title": "Actual Labor Cost",
            "remarks": "Actual Labor Cost including Activities and Tasks",
            "sameAsAttribute": "ACTLABCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ACTMATCOST",
            "required": false,
            "persistent": false,
            "title": "Actual Material Cost",
            "remarks": "Actual Material Cost including Activities and Tasks",
            "sameAsAttribute": "ACTMATCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ACTSERVCOST",
            "required": false,
            "persistent": false,
            "title": "Actual Service Cost",
            "remarks": "Actual Service Cost including Activities and Tasks",
            "sameAsAttribute": "ACTSERVCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ACTTOOLCOST",
            "required": false,
            "persistent": false,
            "title": "Actual Tool Cost",
            "remarks": "Actual Tool Cost including Activities and Tasks",
            "sameAsAttribute": "ACTTOOLCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ACTLABHRS",
            "required": false,
            "persistent": false,
            "title": "Actual Labor Hours",
            "remarks": "Actual Labor Hours including Activities and Tasks",
            "sameAsAttribute": "ACTLABHRS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTTOTALCOST",
            "required": false,
            "persistent": false,
            "title": "Estimated Total Cost",
            "remarks": "Estimated Total Cost including Activities and Tasks",
            "sameAsAttribute": "ESTMATCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ESTATAPPRTOTALCOST",
            "required": false,
            "persistent": false,
            "title": "Estimate Total Cost at Approval",
            "remarks": "Estimated at Approval Total Cost including Activities and Tasks",
            "sameAsAttribute": "ESTMATCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ACTTOTALCOST",
            "required": false,
            "persistent": false,
            "title": "Actual Total Cost",
            "remarks": "Actual Total Cost including Activities and Tasks",
            "sameAsAttribute": "ESTMATCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "TKACTLABHRS",
            "required": false,
            "persistent": false,
            "title": "Ticket Actual Labor Hours",
            "remarks": "Ticket Actual Labor Hours ",
            "sameAsAttribute": "ACTLABHRS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "TKACTLABCOST",
            "required": false,
            "persistent": false,
            "title": "Ticket Actual Labor Cost",
            "remarks": "Ticket Actual Labor Cost ",
            "sameAsAttribute": "ACTLABCOST",
            "sameAsObject": "WORKORDER"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "TKTOTAL",
            "source": "TICKET",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}