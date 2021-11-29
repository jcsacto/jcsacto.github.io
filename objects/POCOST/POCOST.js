mos = {
    "objectName": "POCOST",
    "className": "psdi.app.po.POCostSet",
    "description": "Table to hold the distributed cost records",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "POCOSTID",
    "primaryKeyColumns": [
        "POCOSTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "FINCNTRL",
            "targetObject": "POCOST",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "POCOST",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "POCOST",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 33",
            "longDescription": null
        },
        {
            "objectName": "POLINE",
            "targetObject": "POCOST",
            "parentKeys": "POLINEID",
            "targetKeys": "POLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO Line",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "POCOST",
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
            "attributeName": "POCOSTID",
            "required": true,
            "persistent": true,
            "title": "Cost Line",
            "remarks": "Unique identifier for each POCost record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PONUM",
            "required": true,
            "persistent": true,
            "title": "PO",
            "remarks": "PONUM related to this POCost",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "POLINEID",
            "required": true,
            "persistent": true,
            "title": "Poline ID",
            "remarks": "POLINEID to which this POCost is related",
            "sameAsAttribute": "POLINEID",
            "sameAsObject": "POLINE"
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
            "title": "FCID",
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
            "remarks": "Value of the PO line cost that is distributed. Maximo calculates this field by multiplying the total line cost by the percentage entered in the Distribute Costs dialog box.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "POLINE"
        },
        {
            "attributeName": "LOADEDCOST",
            "required": true,
            "persistent": true,
            "title": "Loaded Cost",
            "remarks": "Loaded cost of the po cost",
            "sameAsAttribute": "LOADEDCOST",
            "sameAsObject": "POLINE"
        },
        {
            "attributeName": "PERCENTAGE",
            "required": true,
            "persistent": true,
            "title": "Percentage",
            "remarks": "Percentage of the PO line cost that is distributed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "The GLCredit Account for the POCost",
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
            "remarks": "Quantity of POCOST record.",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the purchase order. Indicates how many times a purchase order has been revised.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVSTATUS",
            "required": false,
            "persistent": true,
            "title": "Revision Status",
            "remarks": "Shows when a cost line item has been added to a purchase order, or when a cost line item on a purchase order has been modified.",
            "sameAsAttribute": "REVSTATUS",
            "sameAsObject": "CONTRACTLINE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship to the POLine table, used to find a purchase order line record for a given purchase order cost. (pocost.polineid = poline.polineid). The resulting set will contain zero or more objects.",
            "whereClause": "polineid = :polineid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "REVISIONCOST",
            "source": "POLINE",
            "remarks": "Relationship to the POCost table used to find all POCost for a given Purchase Order",
            "whereClause": "ponum=:ponum and siteid=:siteid and revisionnum in (:revisionnum, (select max(revisionnum) from pocost where ponum=:ponum and siteid=:siteid and revisionnum < :revisionnum)) and polineid in (select polineid from pocost where ponum=:ponum and siteid=:siteid and revstatus in (select value from synonymdomain where domainid='REVSTATUS' and maxvalue in ('ADDED','CHANGED')) and revisionnum=:revisionnum)",
            "cardinality": null
        },
        {
            "name": "POCOST",
            "source": "POLINE",
            "remarks": "Relationship to the POCost table, used to find the purchase order cost records for a given purchase order line. (poline.polineid = pocost.polineid). The resulting set will contain one or more objects.",
            "whereClause": "polineid = :polineid and siteid = :siteid",
            "cardinality": "SINGLE"
        }
    ]
}