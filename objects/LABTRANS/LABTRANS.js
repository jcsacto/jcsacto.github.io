mos = {
    "objectName": "LABTRANS",
    "className": "psdi.app.labor.LabTransSet",
    "description": "The LABTRANS Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "LABTRANSID",
    "primaryKeyColumns": [
        "SITEID",
        "LABORCODE",
        "LABTRANSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "LABTRANS",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "LABTRANS",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "AMCTCRAFT",
            "targetObject": "LABTRANS",
            "parentKeys": "AMCREWTYPE, ORGID, POSITION",
            "targetKeys": "AMCREWTYPE, ORGID, POSITION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type Labor Transactions",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "LABTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 67",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "LABTRANS",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Labor Reporting",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "LABTRANS",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, POREVISIONNUM, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "LABTRANS",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "LABTRANS",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "LABTRANS",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "LABTRANS",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "LABTRANS",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "INVOICE",
            "targetObject": "LABTRANS",
            "parentKeys": "SITEID, INVOICENUM",
            "targetKeys": "SITEID, INVOICENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice",
            "longDescription": null
        },
        {
            "objectName": "INVOICELINE",
            "targetObject": "LABTRANS",
            "parentKeys": "SITEID, INVOICENUM, INVOICELINENUM",
            "targetKeys": "SITEID, INVOICENUM, INVOICELINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Line",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "LABTRANS",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LABTRANS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LABTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "LABTRANS",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "LABTRANS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, POREVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "PO",
            "targetObject": "LABTRANS",
            "parentKeys": "SITEID, PONUM, REVISIONNUM",
            "targetKeys": "SITEID, PONUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "PREMIUMPAY",
            "targetObject": "LABTRANS",
            "parentKeys": "PREMIUMPAYCODE, ORGID",
            "targetKeys": "PREMIUMPAYCODE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Premium Pay",
            "longDescription": null
        },
        {
            "objectName": "SERVRECTRANS",
            "targetObject": "LABTRANS",
            "parentKeys": "SERVRECTRANSID",
            "targetKeys": "SERVRECTRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Created Service Receipt",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LABTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "TICKET",
            "targetObject": "LABTRANS",
            "parentKeys": "CLASS, TICKETID",
            "targetKeys": "TICKETCLASS, TICKETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor Transactions related to the Ticket",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "LABTRANS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Actual Labor Usage",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TRANSDATE",
            "required": true,
            "persistent": true,
            "title": "Transaction Date",
            "remarks": "Timestamp - Key To Table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABORCODE",
            "required": true,
            "persistent": true,
            "title": "Labor",
            "remarks": "Identifies the person or craft performing the work. ",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "CRAFT",
            "required": true,
            "persistent": true,
            "title": "Craft",
            "remarks": "Identifies the craft. This field is read-only, if the Labor/Craft field contains a craft. If you edit this field, the Rate and Premium Pay Code fields are updated automatically.",
            "sameAsAttribute": "CRAFT",
            "sameAsObject": "CRAFT"
        },
        {
            "attributeName": "PAYRATE",
            "required": true,
            "persistent": true,
            "title": "Rate",
            "remarks": "Pay rate for the labor. Maximo copies the pay rate for the labor from the labor record. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the asset to which labor costs are charged.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "REGULARHRS",
            "required": true,
            "persistent": true,
            "title": "Regular Hours",
            "remarks": "Number of regular hours (not overtime, holiday, weekend, etc.) worked.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "Approved By (Authorized Manager Signature)",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "Date Labor Was Reported",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATEENTERED",
            "required": true,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Date on which the reported work began. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTTIMEENTERED",
            "required": false,
            "persistent": true,
            "title": "Start Time",
            "remarks": "Time at which work began. If you enter a Start Time and a Finish Time, Maximo calculates values for the Hours field, but will not write over a value you have already entered in the field. You can only enter a value if the work order has a status of Approve. You can modify the field until you save the record. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINISHDATEENTERED",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "Date on which the labor finished the work. If you have entered a Start Date, Start Time, and Finish Time, Maximo calculates a value for the Finish Date field using this formula: (start date) + (finish time - start time). The work order must be approved before you can insert a value. You can modify the field until you save the record. Maximo then updates the Line Cost field. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINISHTIMEENTERED",
            "required": false,
            "persistent": true,
            "title": "End Time",
            "remarks": "Time at which the work was finished.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TRANSTYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "The type of time being entered (work, travel, vacation, etc.). If you use WORK, TRAV, or WMATL as the type, you must enter a work order, GL account, asset, or location. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OUTSIDE",
            "required": true,
            "persistent": true,
            "title": "Outside",
            "remarks": "Specifies whether the work was performed by an outside contractor or by an employee. If the check box is selected, the work was performed by a contractor. If the check box is cleared, the work was performed by an employee. Maximo selects or clears the check box based on the value in the Labor field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Describes any notes or comments about the performed work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROLLUP",
            "required": true,
            "persistent": true,
            "title": "Rolled Up",
            "remarks": "Indicates whether this transaction has been rolled up.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "General ledger account to charge for the labor transaction. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST",
            "required": true,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "Extended or lump sum cost of labor transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "General ledger account to which the cost of the labor is to be credited. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINANCIALPERIOD",
            "required": false,
            "persistent": true,
            "title": "Financial Period",
            "remarks": "Financial period in a format corresponding to that required by the accounting system.",
            "sameAsAttribute": "FINANCIALPERIOD",
            "sameAsObject": "FINANCIALPERIODS"
        },
        {
            "attributeName": "PONUM",
            "required": false,
            "persistent": true,
            "title": "PO",
            "remarks": "Identifies the purchase order that is purchasing the labor.The PO you select must have a service line, and the vendor on the PO must match the vendor on the selected labor/craft record. ",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "POLINENUM",
            "required": false,
            "persistent": true,
            "title": "PO Line",
            "remarks": "Identifies the line number on the PO for the labor.",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Identifies the location to which labor costs are charged.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "GENAPPRSERVRECEIPT",
            "required": true,
            "persistent": true,
            "title": "Approved",
            "remarks": "Specifies whether the labor transaction has been approved and a service receipt can be written. If the check box is selected, the transaction has been approved. If the check box is cleared, the transaction has not been approved. You can edit labor transactions until the work order is closed or cancelled.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PAYMENTTRANSDATE",
            "required": false,
            "persistent": true,
            "title": "Recorded as Received",
            "remarks": "The date and time the transaction was recorded in Purchasing. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXCHANGERATE2",
            "required": false,
            "persistent": true,
            "title": "Secondary Exchange Rate",
            "remarks": "Base Exchange Rate 2",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "LINECOST2",
            "required": false,
            "persistent": true,
            "title": "Premium Code",
            "remarks": "Base Currency Line Cost 2.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABTRANSID",
            "required": true,
            "persistent": true,
            "title": "ID",
            "remarks": "Primary key for the table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVRECTRANSID",
            "required": false,
            "persistent": true,
            "title": "Service Receipt ID",
            "remarks": "Created when Create service Receipt is used",
            "sameAsAttribute": "SERVRECTRANSID",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
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
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
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
            "attributeName": "REFWO",
            "required": false,
            "persistent": true,
            "title": "Activity",
            "remarks": "Referenced Work Order",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ENTEREDASTASK",
            "required": true,
            "persistent": true,
            "title": "Entered as Task",
            "remarks": "Was this transaction created against a work order task?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TICKETID",
            "required": false,
            "persistent": true,
            "title": "Ticket",
            "remarks": "Ticket Identifier",
            "sameAsAttribute": "TICKETID",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "TICKETCLASS",
            "required": false,
            "persistent": true,
            "title": "Ticket Class",
            "remarks": "class of the ticket",
            "sameAsAttribute": "CLASS",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "TASKID",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "ACTUALSTASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Identifies the task for which you are reporting labor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Contract",
            "remarks": "Identifies the contract for the outside labor for the transaction. You can select a contract based on the value in the Craft field or in the Labor field.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "SKILLLEVEL",
            "required": false,
            "persistent": true,
            "title": "Skill Level",
            "remarks": "Identifies the skill level of the labor.",
            "sameAsAttribute": "SKILLLEVEL",
            "sameAsObject": "CRAFTSKILL"
        },
        {
            "attributeName": "TIMERSTATUS",
            "required": false,
            "persistent": true,
            "title": "Timer Status",
            "remarks": "Indicates whether a user created the labor transaction using the timer on the Maximo toolbar. If the field is blank, the timer was not used. If the field has a value, the timer was used to create this labor transaction. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIVITY",
            "required": false,
            "persistent": false,
            "title": "Activity",
            "remarks": "Ticket's activity number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
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
            "attributeName": "INVOICENUM",
            "required": false,
            "persistent": true,
            "title": "Invoice",
            "remarks": "Invoice number of the invoice created from this Labor Transaction.",
            "sameAsAttribute": "INVOICENUM",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "INVOICELINENUM",
            "required": false,
            "persistent": true,
            "title": "Invoice Line",
            "remarks": "Invoice line number of the invoice line created from this Labor Transaction.",
            "sameAsAttribute": "INVOICELINENUM",
            "sameAsObject": "INVOICELINE"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "Revision",
            "remarks": "Identifies the Active Revision Number of the contract for this labor transaction.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "PREMIUMPAYCODE",
            "required": false,
            "persistent": true,
            "title": "Premium Pay Code",
            "remarks": "Identifies the premium pay code for this labor transaction, for example, holiday hours, Sunday hours, greater than 40 hours per week, greater than eight hours per shift.",
            "sameAsAttribute": "PREMIUMPAYCODE",
            "sameAsObject": "PREMIUMPAY"
        },
        {
            "attributeName": "PREMIUMPAYHOURS",
            "required": false,
            "persistent": true,
            "title": "Premium Pay Hours",
            "remarks": "Number of hours for which the labor will be paid the premium rate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREMIUMPAYRATE",
            "required": false,
            "persistent": true,
            "title": "Premium Pay Rate",
            "remarks": "Identifies the labor's rate for work done beyond the usual work shift, for example, the overtime rate. Maximo displays the premium pay rate in this read-only field and uses it to calculate the Line Cost.",
            "sameAsAttribute": "DEFAULTRATE",
            "sameAsObject": "PREMIUMPAY"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Vendor who provided the labor.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "PREMIUMPAYRATETYPE",
            "required": false,
            "persistent": true,
            "title": "Premium Rate Type",
            "remarks": "Describes the type of premium rate, for example, hourly, incremental, or multiplier.",
            "sameAsAttribute": "DEFAULTRATETYPE",
            "sameAsObject": "PREMIUMPAY"
        },
        {
            "attributeName": "SOURCEMBO",
            "required": false,
            "persistent": false,
            "title": "Source MBO",
            "remarks": "Source MBO",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "POREVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "PO Revision",
            "remarks": "Revision number of the purchase order. Indicates how many times a purchase order has been revised.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "FINISHDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "Date on which the labor finished the work. If you have entered a Start Date, Start Time, and Finish Time, Maximo calculates a value for the Finish Date field using this formula: (start date) + (finish time - start time). The work order must be approved before you can insert a value. You can modify the field until you save the record. Maximo then updates the Line Cost field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINISHTIME",
            "required": false,
            "persistent": false,
            "title": "End Time",
            "remarks": "Time at which the work was finished.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": true,
            "persistent": false,
            "title": "Start Date",
            "remarks": "Date on which the reported work began.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": false,
            "title": "Start Time",
            "remarks": "Time at which work began. If you enter a Start Time and a Finish Time, Maximo calculates values for the Hours field, but will not write over a value you have already entered in the field. You can only enter a value if the work order has a status of Approve. You can modify the field until you save the record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATETIME",
            "required": false,
            "persistent": true,
            "title": "Start Date Time",
            "remarks": "Time at which work began. If you enter a Start Time and a Finish Time, Maximo calculates values for the Hours field, but will not write over a value you have already entered in the field. You can only enter a value if the work order has a status of Approve. You can modify the field until you save the record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINISHDATETIME",
            "required": false,
            "persistent": true,
            "title": "Start Date Time",
            "remarks": "Time at which work began. If you enter a Start Time and a Finish Time, Maximo calculates values for the Hours field, but will not write over a value you have already entered in the field. You can only enter a value if the work order has a status of Approve. You can modify the field until you save the record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWWORKGROUP",
            "required": false,
            "persistent": true,
            "title": "Crew Work Group",
            "remarks": "Identifies the resource pool to which the labor belongs.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "Identifies the crew that performed the work.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "AMCREWTYPE",
            "required": false,
            "persistent": true,
            "title": "Crew Type",
            "remarks": "Type of Crew.",
            "sameAsAttribute": "AMCREWTYPE",
            "sameAsObject": "AMCREWT"
        },
        {
            "attributeName": "POSITION",
            "required": false,
            "persistent": true,
            "title": "Position",
            "remarks": "Identifies the labor's position on the crew.",
            "sameAsAttribute": "POSITION",
            "sameAsObject": "AMCTCRAFT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ALNDOMAIN",
            "target": "ALNDOMAIN",
            "remarks": "Relationship to the alndomain table where values are a skilllevel. This will return 0 or more objects.",
            "whereClause": "domainid = 'SKILLLEVEL'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table. Used to find out Asset for the LabTrans. (Asset.assetnum=LabTrans.assetnum). The resultset will contain at most  1 object.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANSATTENDANCE",
            "target": "ATTENDANCE",
            "remarks": "Relationship to the Attendance table.Used to find out Attendance for the Labortrans labor. (Attendance.laborcode=Labor.laborcode). The resultset will contain more than 1 object.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "target": "COMPANIES",
            "remarks": "Relationship to the companies table where company = vendor and orgid = orgid. This will return 0 or more objects.",
            "whereClause": "company = :vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "target": "CONTRACT",
            "remarks": "Relationship to the contract table where contract is of type labor, approved, and not history . This will return 0 or more objects.",
            "whereClause": "status in (select value from synonymdomain  where maxvalue in ('APPR')and domainid = 'CONTRACTSTATUS') and contracttype in (select value from synonymdomain where maxvalue in ('LABOR') and domainid='CONTRACTTYPE') and historyflag=:no and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTS",
            "target": "CONTRACT",
            "remarks": "Relationship to the contract table to find the contract from this labtrans(labtrans.contractnum=contract.contractnum and labtrans.revisionnum=contract.revisionnum and labtrans.orgid=contract.orgid). The resulting set will contain one record",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFT",
            "target": "CRAFT",
            "remarks": "Relationship from Labtrans to Craft",
            "whereClause": "craft = :craft and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTSKILL",
            "target": "CRAFTSKILL",
            "remarks": "Relationship between LABTRANS and CRAFTSKILL tables.",
            "whereClause": "craft = :craft and orgid = :orgid and (skilllevel = :skilllevel or skilllevel is null)",
            "cardinality": null
        },
        {
            "name": "CREATEINVOICE",
            "target": "CREATEINVOICE",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the LABTRANS to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table. Used to find out Labor for the LabTrans (Labor.laborcode=LabTrans.laborcode). The resultset will contain at most  1 object.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "SINGLE"
        },
        {
            "name": "LABTRANSNOROWS",
            "target": "LABTRANS",
            "remarks": "Allows retrieval zero rows to enable an empty table",
            "whereClause": "laborcode = :laborcode and laborcode != :laborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Location table. Used to find out Location for the LabTrans. (Location.location=LabTrans.location). The resultset will contain at most  1 object.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Relationship to find person for the labtrans.labor.laborcode",
            "whereClause": "personid in (select personid from labor where laborcode = :laborcode)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO",
            "target": "PO",
            "remarks": "Relationship to the PO table. Used to find out PO for the LabTrans. (PO.ponum = LabTrans.ponum). The resultset will contain at most  1 object.",
            "whereClause": "ponum = :ponum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PPCRAFTRATE",
            "target": "PPCRAFTRATE",
            "remarks": "Relationship to the ppcraftrate table on labtrans. (ppcraftrate.premiumpaycode=labtrans.premiumpaycode and ppcraftrate.craft=labtrans.craft and ppcraftrate.orgid=craft.orgid.)  This will return 0 or more objects ",
            "whereClause": "premiumpaycode=:premiumpaycode and craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANS_PREMIUMPAY",
            "target": "PREMIUMPAY",
            "remarks": "Relationship from labtrans to premiumpay",
            "whereClause": "premiumpaycode=:premiumpaycode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "target": "TICKET",
            "remarks": "Relationship to the ticket table on labtrans. (ticketid=:ticketid and class=:ticketclass.)  This will return 0 or more objects ",
            "whereClause": "ticketid=:ticketid and class=:ticketclass",
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
            "remarks": "Relationship from the LABTRANS to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANS_WOHIERARCHY",
            "target": "WOANCESTOR",
            "remarks": "Relationship from labtrans to woancestor",
            "whereClause": "(wonum=:refwo)and(siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to the WorkOrder table. Used to find out WorkOrder for the LabTrans. (WorkOrder.wonum=LabTrans.wonum). The resultset will contain at most 1 object.",
            "whereClause": "wonum=:refwo and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANS_WOANDTASK",
            "target": "WORKORDER",
            "remarks": "Relationship from labtrans to workorder and its tasks",
            "whereClause": "((wonum=:refwo)or(parent = :refwo and istask = :yes))and(siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANSWPLABOR",
            "target": "WPLABOR",
            "remarks": "Relationship to the WPLabor table, used to find all work plan labors for a work order. (WPLabor.wonum = Labtrans.refwo). This resulting set will contain zero or more objects.",
            "whereClause": "(wonum=:refwo) and (siteid=:siteid) and (:refwo is not null)",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LABTRANS",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and LABTRANS tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "LABTRANS",
            "source": "AMCREWLABPOS",
            "remarks": "Relationship between AMCREWLABPOS and LABTRANS tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "LABTRANS",
            "source": "AMCREWT",
            "remarks": "Relationship to check if the crew type is being used by a LABTRANS.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "LABTRANSCREW",
            "source": "ASSIGNMENT",
            "remarks": "Relationship from table ASSIGNMENT to LABTRANS for Crews.",
            "whereClause": "amcrew=:amcrew and refwo=:wonum",
            "cardinality": null
        },
        {
            "name": "APPRLABORCONTRACT",
            "source": "CONTRACT",
            "remarks": "Finds all contracts that are approved for the contract.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and genapprservreceipt=:yes",
            "cardinality": null
        },
        {
            "name": "LABTRANS",
            "source": "INVOICE",
            "remarks": "invoice to labtrans",
            "whereClause": "invoicenum=:invoicenum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LABTRANS",
            "source": "LABOR",
            "remarks": "Relationship to the LabTrans table. Used to find out the Set of LaborTransactions for the Labor. (LabTrans.laborcode=Labor.laborcode). The resultset will contain 0 or more objects.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "APPRUNPAIDLABTRANS",
            "source": "LABORVIEW",
            "remarks": "Relationship to the LabTrans table, used to find all approved but unpaid LabTrans records for a given contract. (labtrans.contractnum=contract.contractnum and labtrans.revisionnum=contract.revisionnum and labtrans.orgid=contract.orgid and genapprservreceipt=Y and invoicenum is null). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and genapprservreceipt=:yes and invoicenum is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "UNAPPROVEDLABTRANS",
            "source": "LABORVIEW",
            "remarks": "Relationship to the LabTrans table, used to find all unapproved LabTrans records for a given contract. (labtrans.contractnum=contract.contractnum and labtrans.revisionnum=contract.revisionnum and labtrans.orgid=contract.orgid and genapprservreceipt=N). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and genapprservreceipt=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANSNOROWS",
            "source": "LABTRANS",
            "remarks": "Allows retrieval zero rows to enable an empty table",
            "whereClause": "laborcode = :laborcode and laborcode != :laborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANSENTERBY_LABTRANS",
            "source": "LABTRANSENTERBY",
            "remarks": "Relationship from non persistent table labtransenterby to labtrans",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANSCREW",
            "source": "LABTRANSENTERBY",
            "remarks": "Relationship from table LABTRANSENTERBY to LABTRANS for Crews.",
            "whereClause": "amcrew=:amcrew and startdate=:workdate",
            "cardinality": null
        },
        {
            "name": "LABTRANSCREWNR",
            "source": "LABTRANSENTERBY",
            "remarks": "Relationship from table LABTRANSENTERBY to LABTRANS with no return for Crews.",
            "whereClause": "1=2",
            "cardinality": null
        },
        {
            "name": "LABTRANS",
            "source": "SKDCOMPLIANCEWOLIST",
            "remarks": "Get schedule compliance for a project",
            "whereClause": "REFWO=:WONUM",
            "cardinality": null
        },
        {
            "name": "LABTRANS",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "labtransid in (((select labtransid from labtrans where ticketid=:ticketid and ticketclass=:class) union all select labtransid from labtrans where refwo in (select wonum from workorder where (origrecordid=:ticketid and origrecordclass=:class and woclass in (select value from synonymdomain where domainid='WOCLASS' and maxvalue='ACTIVITY')))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVELABTRANS",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "ticketid=:ticketid and ticketclass=:class and timerstatus in (select value from synonymdomain where domainid = 'TIMERSTATUS' and maxvalue = 'ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "UNAPPROVEDLABTRANS",
            "source": "TICKET",
            "remarks": "Relationship to the LabTrans table, used to find all unApproved labtrans for a ticket. This resulting set will contain zero or more objects.",
            "whereClause": "ticketid=:ticketid and ticketclass=:class and genapprservreceipt=0",
            "cardinality": null
        },
        {
            "name": "LABTRANSCREW",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship from table WMASSIGNMENT to LABTRANS for Crews.",
            "whereClause": "amcrew=:amcrew and startdate=:scheduledate",
            "cardinality": null
        },
        {
            "name": "LABTRANS",
            "source": "WORKORDER",
            "remarks": "Relationship to the LabTrans table, used to find all labtrans for a work order. (LabTrans.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "REP_ACTLAB",
            "source": "WORKORDER",
            "remarks": "Relationship that returns all actual labor for given Work Order, including the labor for the Work Order's tasks.  Used for reporting.",
            "whereClause": "(refwo=:wonum or exists (select 1 from workorder w where w.parent=:wonum and w.istask=1 and labtrans.siteid=w.siteid and labtrans.refwo=w.wonum)) and labtrans.siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "UNAPPROVEDLABTRANS",
            "source": "WORKORDER",
            "remarks": "Relationship to the LabTrans table, used to find all unApproved labtrans for a work order. This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid and genapprservreceipt=0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWACTUALLABOR",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowActualLabor Set used by UI for display. This is a special MboSet used for displaying the actual labor for a given workorder. (refwo in (select wonum from workorder where workorder.wonum=workorder.wonum or workorder.parent=workorder.wonum and workorder.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "refwo in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVELABTRANS",
            "source": "WORKORDER",
            "remarks": "Relationship to the LabTrans table, used to find all active labtrans for a work order. (LabTrans.wonum = workorder.wonum and timerstatus='ACTIVE'). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid  and timerstatus in (select value from synonymdomain where domainid = 'TIMERSTATUS' and maxvalue = 'ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANS",
            "source": "WPLABOR",
            "remarks": "Relationship to the LabTrans table, used to find the labor transactions for a given work plan labor. (labtrans.refwo = wplabor.wonum and labtrans.laborcode=wplabor.laborcode). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and laborcode=:laborcode and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}