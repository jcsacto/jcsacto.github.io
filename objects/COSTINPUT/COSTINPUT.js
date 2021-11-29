mos = {
    "objectName": "COSTINPUT",
    "className": "psdi.app.contract.virtual.CostInputSet",
    "description": "Non-persistent table for displaying contract costs",
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
            "attributeName": "COMMITTEDCOST",
            "required": false,
            "persistent": false,
            "title": "Committed Cost",
            "remarks": "The commited cost for the contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNCOMMITTEDCOST",
            "required": false,
            "persistent": false,
            "title": "Uncommitted Cost",
            "remarks": "Uncommitted cost on the contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMTREMAINING",
            "required": false,
            "persistent": false,
            "title": "Amount Remaining",
            "remarks": "Amount remaining on the contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMTONORDER",
            "required": false,
            "persistent": false,
            "title": "Amount on Order",
            "remarks": "Amount on order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMOFCOMMREL",
            "required": false,
            "persistent": false,
            "title": "Number of Committed Releases",
            "remarks": "Number of committed releases against the contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMOFUNCOMMREL",
            "required": false,
            "persistent": false,
            "title": "Number of Uncommitted Releases",
            "remarks": "Number of uncommitted releases against the contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMTRECEIVED",
            "required": false,
            "persistent": false,
            "title": "Amount Received",
            "remarks": "Amount received but not invoiced.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "A unique identifier indicating the organization level associated with this contract.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": false,
            "title": "Contract",
            "remarks": "Contract Number",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": false,
            "title": "Revision",
            "remarks": "This number indicates the number of times the contract has been revised. A contract that has been created and not revised will show a number of 0.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "TOTALCOST",
            "required": false,
            "persistent": false,
            "title": "Total Cost",
            "remarks": "Total Cost on the Contract",
            "sameAsAttribute": "TOTALCOST",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "INVVARIANCE",
            "required": false,
            "persistent": false,
            "title": "Invoice Variance",
            "remarks": "Invoice Variance.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "COSTINPUT",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the non-persistent CostInput object. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COSTINPUT",
            "source": "SFWVIEW",
            "remarks": "Relationship to the non-persistent CostInput object. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}