mos = {
    "objectName": "MRCOST",
    "className": "psdi.app.mr.MRCostSet",
    "description": "Table to hold the distributed cost records",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MRCOSTID",
    "primaryKeyColumns": [
        "SITEID",
        "MRCOSTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "FINCNTRL",
            "targetObject": "MRCOST",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "MR",
            "targetObject": "MRCOST",
            "parentKeys": "SITEID, MRNUM",
            "targetKeys": "SITEID, MRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Request",
            "longDescription": null
        },
        {
            "objectName": "MRLINE",
            "targetObject": "MRCOST",
            "parentKeys": "SITEID, MRLINEID",
            "targetKeys": "SITEID, MRLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MR Line",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "MRCOST",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MRCOST",
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
            "attributeName": "MRCOSTID",
            "required": true,
            "persistent": true,
            "title": "MR Cost Line ID",
            "remarks": "Unique identifier for each MRCost record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MRNUM",
            "required": true,
            "persistent": true,
            "title": "MRNUM",
            "remarks": "MRNUM associated with this MRCOST",
            "sameAsAttribute": "MRNUM",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "PERCENTAGE",
            "required": true,
            "persistent": true,
            "title": "Percentage",
            "remarks": "Percentage of Distribution in each MRCost Line",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "The GLDebit Account for the MRCost",
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
            "attributeName": "LINECOST",
            "required": true,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "Line cost of the MRCost",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "MRLINEID",
            "required": true,
            "persistent": true,
            "title": "MR Line ID",
            "remarks": "Internal MRLine Identifier",
            "sameAsAttribute": "MRLINEID",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
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
            "remarks": "Quantity of MRCOST record.",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MRCOST",
            "source": "MRLINE",
            "remarks": "Relationship to the MRCost table, used to find the mrcost records for a given material requisition line. (mrline.mrnum = mrcost.mrnum). The resulting set will contain zero or more objects.",
            "whereClause": "mrlineid = :mrlineid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}