mos = {
    "objectName": "PRCOST",
    "className": "psdi.app.pr.PRCostSet",
    "description": "Table to hold the distributed cost records",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PRCOSTID",
    "primaryKeyColumns": [
        "PRCOSTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "FINCNTRL",
            "targetObject": "PRCOST",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PRCOST",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "PRCOST",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Costs for PR",
            "longDescription": null
        },
        {
            "objectName": "PRLINE",
            "targetObject": "PRCOST",
            "parentKeys": "PRLINEID",
            "targetKeys": "PRLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PRLine cost record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PRCOST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PRCOSTID",
            "required": true,
            "persistent": true,
            "title": "PR Cost Line ID",
            "remarks": "Unique identifier for each PRCost record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRNUM",
            "required": true,
            "persistent": true,
            "title": "PR",
            "remarks": "PRNUM related to this PRCost",
            "sameAsAttribute": "PRNUM",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PERCENTAGE",
            "required": true,
            "persistent": true,
            "title": "Percentage",
            "remarks": "Percentage of the PR line cost that is distributed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "General Ledger account that is charged for this percentage of the distributed line cost.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINCNTRLID",
            "required": false,
            "persistent": true,
            "title": "FINCNTRLID",
            "remarks": "Financial Control Identifier",
            "sameAsAttribute": "FINCNTRLID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "The unique identifier of a site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Constraint Identifier of the organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "LINECOST",
            "required": true,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "Value of the PR line cost that is distributed. Maximo calculates this field by multiplying the total line cost by the percentage entered in the Distribute Costs dialog box.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "LOADEDCOST",
            "required": true,
            "persistent": true,
            "title": "Loaded Cost",
            "remarks": "Loaded cost of the PRCost",
            "sameAsAttribute": "LOADEDCOST",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "PRLINEID",
            "required": true,
            "persistent": true,
            "title": "PR Line ID",
            "remarks": "Internal PRLine Identifier",
            "sameAsAttribute": "PRLINEID",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "The GLCredit Account for the PRCost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FCPROJECTID",
            "required": false,
            "persistent": false,
            "title": "FC Project ID",
            "remarks": "Financial control project identifier.",
            "sameAsAttribute": "PROJECTID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "FCTASKID",
            "required": false,
            "persistent": false,
            "title": "FC Task ID",
            "remarks": "Financial control task identifier.",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "COSTLINENUM",
            "required": true,
            "persistent": true,
            "title": "Cost Line",
            "remarks": "System generated line number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Quantity of PRCOST record.",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PRCOST",
            "source": "PRLINE",
            "remarks": "Relationship to the PRCost table, used to find the purchase requisition cost records for a given purchase requisition line.  (prline.prlineid = prcost.prlineid). The resulting set will contain one or more objects.",
            "whereClause": "prlineid = :prlineid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}