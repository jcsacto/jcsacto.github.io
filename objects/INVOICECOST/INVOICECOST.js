mos = {
    "objectName": "INVOICECOST",
    "className": "psdi.app.invoice.InvoiceCostSet",
    "description": "The Invoice Cost Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "INVOICECOSTID",
    "primaryKeyColumns": [
        "SITEID",
        "INVOICENUM",
        "INVOICELINENUM",
        "COSTLINENUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "INVOICECOST",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "SITEID, INVOICENUM, INVOICELINENUM, COSTLINENUM",
            "targetKeys": "POSITEID, INVOICENUM, INVOICELINENUM, COSTLINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "INVOICECOST",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "SITEID, INVOICENUM, INVOICELINENUM, COSTLINENUM",
            "targetKeys": "SITEID, INVOICENUM, INVOICELINENUM, COSTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Cost",
            "longDescription": null
        },
        {
            "objectName": "INVOICECOST",
            "targetObject": "INVOICETRANS",
            "parentKeys": "SITEID, INVOICENUM, INVOICELINENUM, COSTLINENUM",
            "targetKeys": "SITEID, INVOICENUM, INVOICELINENUM, COSTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Cost",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "TOSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 46",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVOICECOST",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Invoice Cost",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "INVOICECOST",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "POSITEID, INVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, INVOICENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Cost",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "TOSITEID, INVOICENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "INVOICELINE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, INVOICENUM, INVOICELINENUM",
            "targetKeys": "POSITEID, INVOICENUM, INVOICELINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "INVOICELINE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, INVOICENUM, INVOICELINENUM",
            "targetKeys": "SITEID, INVOICENUM, INVOICELINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Line",
            "longDescription": null
        },
        {
            "objectName": "INVOICELINE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, INVOICENUM, INVOICELINENUM",
            "targetKeys": "TOSITEID, INVOICENUM, INVOICELINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 48",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Cost Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVOICECOST",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID",
            "targetKeys": "POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 67",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID",
            "targetKeys": "TOSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "POSITEID, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "TOSITEID, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INVOICENUM",
            "required": true,
            "persistent": true,
            "title": "Invoice",
            "remarks": "The Invoice Number",
            "sameAsAttribute": "INVOICENUM",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "VENDOR",
            "required": true,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Supplier of Invoice",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "INVOICELINENUM",
            "required": true,
            "persistent": true,
            "title": "Invoice Line",
            "remarks": "Line Item number of the Invoice",
            "sameAsAttribute": "INVOICELINENUM",
            "sameAsObject": "INVOICELINE"
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "General Ledger Account - Debit.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "General Ledger Account - Credit.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset to be charged.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "Amount to be charged.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST",
            "required": true,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "Total Cost to be Charged",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERCENTAGE",
            "required": true,
            "persistent": true,
            "title": "Percentage",
            "remarks": "Percentage of total cost.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Notes....",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COSTLINENUM",
            "required": true,
            "persistent": true,
            "title": "Cost Line",
            "remarks": "System generated line item",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHARGESTORE",
            "required": true,
            "persistent": true,
            "title": "Charge to Store",
            "remarks": "Indicates if the cost on this line should be placed in the INVCOST column of the ASSETNUM.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ICT1",
            "required": false,
            "persistent": true,
            "title": "Ict1",
            "remarks": "Crossover from INVOICELIN1 to INVTRANS or SERVICETRANS.",
            "sameAsAttribute": "IN19",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ICT2",
            "required": false,
            "persistent": true,
            "title": "Ict2",
            "remarks": "Crossover from INVOICELIN2 to INVTRANS or SERVICETRANS.",
            "sameAsAttribute": "IN20",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ICT3",
            "required": false,
            "persistent": true,
            "title": "Ict3",
            "remarks": "Crossover from INVOICELIN3 to INVTRANS or SERVICETRANS.",
            "sameAsAttribute": "IN21",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Quantity of INVOICECOST record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Charge Location.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
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
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "REFWO",
            "required": false,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Referenced Work Order",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ENTEREDASTASK",
            "required": true,
            "persistent": true,
            "title": "Entered as Task ",
            "remarks": "Was this transaction created against a work order task?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QTYFORUI",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "QTYFORUI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOSTFORUI",
            "required": false,
            "persistent": false,
            "title": "Line Cost",
            "remarks": "LINECOSTFORUI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCTNONPER",
            "required": false,
            "persistent": false,
            "title": "GL Account",
            "remarks": "GLCREDITACCTNONPER",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLDEBITACCTNONPER",
            "required": false,
            "persistent": false,
            "title": "GL Debit Account",
            "remarks": "Account code for the general ledger account that will be charged the cost of the line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUMNONPER",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Identifies the asset to which costs for the service are charged. You can set a default value for this field in the Default Table Data area.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATIONNONPER",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "Location where the item or service will be used. You can set a default value for this field in the Default Table Data area.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "TASKIDNONPER",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "TASKIDNONPER",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "WONUMNONPER",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Identifies the work order for the line item.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "TASKID",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "WONUM",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "INVOICECOSTID",
            "required": true,
            "persistent": true,
            "title": "INVOICECOSTID",
            "remarks": "Unique Identifier",
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
            "attributeName": "TOSITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "To Site Identifier.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "TOSITEIDNONPER",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "To Site ID non persistent field.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "POSITEID",
            "required": false,
            "persistent": true,
            "title": "PO Site",
            "remarks": "The site where the purchase order for this cost line was created. To create an invoice, you must have security privileges to the same organization to which the purchase order site belongs.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the ROUTE_STOP to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINE",
            "target": "INVOICELINE",
            "remarks": "Relationship to the InvoiceLine table, used to find the owner invoice line for a given invoice cost line. (invoicecost.invoicenum = invoiceline.invoicenum and invoicecost.invoicelinenum = invoiceline.invoicelinenum). The resulting set will contain one object.",
            "whereClause": "invoicenum=:invoicenum and invoicelinenum=:invoicelinenum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the INVOICECOST to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to the WorkOrder table, used to find the work order that is used as a charge for a given invoice cost line. (invoicecost.refwo = workorder.wonum). The resulting set will contain one object.Relationship to the InvoiceLine table, used to find the owner invoice line for a given invoice cost line. (invoicecost.invoicenum = invoiceline.invoicenum and invoicecost.invoicelinenum = invoiceline.invoicelinenum). The resulting set will contain one object.",
            "whereClause": "wonum=:refwo and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "INVOICECOST",
            "source": "ASSET",
            "remarks": "Relationship to the InvoiceCost table, used to find all invoice costs for a given asset. (invoicecost.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICECOST",
            "source": "INVOICE",
            "remarks": "Relationship to the InvoiceCost table, used to find all invoice cost lines for a given invoice. (invoice.invoicenum = invoicecost.invoicenum). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum=:invoicenum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "INVOICECOST",
            "source": "INVOICELINE",
            "remarks": "Relationship to the InvoiceCost table, used to find all invoice cost lines for a given invoice line. (invoiceline.invoicenum = invoicecost.invoicenum and invoiceline.invoicelinenum = invoicecost.invoicelinenum). The resulting set will contain one or more objects.",
            "whereClause": "invoicenum=:invoicenum and invoicelinenum=:invoicelinenum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "INVOICECOST",
            "source": "INVOICETRANS",
            "remarks": "Relationship to the InvoiceLine table, used to find the invoice line for which this invoice transaction was created. (invoicetrans.invoicenum = invoiceline.invoicenum and invoicetrans.invoicelinenum = invoiceline.invoicelinenum and invoiceline.invoicelinenum is not null). The resulting set will contain one object.",
            "whereClause": "invoicenum=:invoicenum and invoicelinenum=:invoicelinenum and costlinenum=:costlinenum and invoicelinenum is not null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICECOST",
            "source": "LOCATIONS",
            "remarks": "Relationship to the SafetyLexicon table, used to find the operating location's lexicon of safety terms for tagout enabled hazards. (safetylexicon.location = locations.location and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.tagoutenabled=yes and safetylexicon.tagoutid is null)). This relationship will find zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}