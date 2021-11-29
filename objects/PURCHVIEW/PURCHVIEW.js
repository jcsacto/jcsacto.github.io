mos = {
    "objectName": "PURCHVIEW",
    "className": "psdi.app.contract.purch.PurchViewSet",
    "description": "View that combines the CONTRACT and CONTRACTPURCH",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": null,
    "primaryKeyColumns": [
        "CONTRACTNUM",
        "REVISIONNUM",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "PURCHVIEW",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Purchase Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "PURCHVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, MASTERREVNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Master Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "PURCHVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTPURCH",
            "targetObject": "PURCHVIEW",
            "parentKeys": "CONTRACTPURCHID",
            "targetKeys": "CONTRACTPURCHID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Contract",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "PURCHVIEW",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "PURCHVIEW",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PURCHVIEW",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PURCHVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PURCHVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "PURCHASEAGENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Agent",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Contract",
            "remarks": "Unique ID Number for the current purchase contract.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CONTRACTNUM",
            "tableName": "CONTRACT",
            "tableColumnName": "CONTRACTNUM"
        },
        {
            "attributeName": "CONTRACTNUM1",
            "required": true,
            "persistent": true,
            "title": "Contract",
            "remarks": "Unique Contract identifier.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CONTRACTNUM1",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "CONTRACTNUM"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the current purchase contract.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR",
            "viewColumnName": "DESCRIPTION",
            "tableName": "CONTRACT",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "MASTERNUM",
            "required": false,
            "persistent": true,
            "title": "Master Contract",
            "remarks": "The unique identification number of a Master Contract from which this contract was created.",
            "sameAsAttribute": "MASTERNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "MASTERNUM",
            "tableName": "CONTRACT",
            "tableColumnName": "MASTERNUM"
        },
        {
            "attributeName": "VENDORREFNUM",
            "required": false,
            "persistent": true,
            "title": "Vendor Reference #",
            "remarks": "A unique identification code issued to a vendor.",
            "sameAsAttribute": "VENDORREFNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "VENDORREFNUM",
            "tableName": "CONTRACT",
            "tableColumnName": "VENDORREFNUM"
        },
        {
            "attributeName": "CONTRACTTYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Indicator of the current contract type.",
            "sameAsAttribute": "CONTRACTTYPE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CONTRACTTYPE",
            "tableName": "CONTRACT",
            "tableColumnName": "CONTRACTTYPE"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the contract. This number indicates the number of times the contract has been revised. A contract that has been created and not revised will show a number of 0.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "REVISIONNUM",
            "tableName": "CONTRACT",
            "tableColumnName": "REVISIONNUM"
        },
        {
            "attributeName": "REVISIONNUM1",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the contract. This number indicates the number of times the contract has been revised. A contract that has been created and not revised will show a number of 0.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "REVISIONNUM1",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "REVISIONNUM"
        },
        {
            "attributeName": "PURCHASEAGENT",
            "required": false,
            "persistent": true,
            "title": "Buyer",
            "remarks": "The current buyer, or purchasing agent listed on this contract.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON",
            "viewColumnName": "PURCHASEAGENT",
            "tableName": "CONTRACT",
            "tableColumnName": "PURCHASEAGENT"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Current status of this contract.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "STATUS",
            "tableName": "CONTRACT",
            "tableColumnName": "STATUS"
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Status date.",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "STATUSDATE",
            "tableName": "CONTRACT",
            "tableColumnName": "STATUSDATE"
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "The date on which the contract becomes active.",
            "sameAsAttribute": "STARTDATE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "STARTDATE",
            "tableName": "CONTRACT",
            "tableColumnName": "STARTDATE"
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "Date after which the contract is no longer valid.",
            "sameAsAttribute": "ENDDATE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "ENDDATE",
            "tableName": "CONTRACT",
            "tableColumnName": "ENDDATE"
        },
        {
            "attributeName": "RENEWALDATE",
            "required": false,
            "persistent": true,
            "title": "Renewal Date",
            "remarks": "Date that the contract can or must be be renewed to remain active.",
            "sameAsAttribute": "RENEWALDATE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "RENEWALDATE",
            "tableName": "CONTRACT",
            "tableColumnName": "RENEWALDATE"
        },
        {
            "attributeName": "EXTENDABLE",
            "required": true,
            "persistent": true,
            "title": "Extendable",
            "remarks": "Checking this box indicates the contract is extendable.",
            "sameAsAttribute": "EXTENDABLE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "EXTENDABLE",
            "tableName": "CONTRACT",
            "tableColumnName": "EXTENDABLE"
        },
        {
            "attributeName": "AUTOEXTENDPERIOD",
            "required": false,
            "persistent": true,
            "title": "Extension Period",
            "remarks": "If the contract is extendable, this field indicates the auto extend period in days.",
            "sameAsAttribute": "AUTOEXTENDPERIOD",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "AUTOEXTENDPERIOD",
            "tableName": "CONTRACT",
            "tableColumnName": "AUTOEXTENDPERIOD"
        },
        {
            "attributeName": "CONDFOREXT",
            "required": false,
            "persistent": true,
            "title": "Conditions for Extension",
            "remarks": "Details any conditions that may exist for an extension.",
            "sameAsAttribute": "CONDFOREXT",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CONDFOREXT",
            "tableName": "CONTRACT",
            "tableColumnName": "CONDFOREXT"
        },
        {
            "attributeName": "CUSTTERMALLOWED",
            "required": true,
            "persistent": true,
            "title": "Customer Termination Allowed",
            "remarks": "Checking this box indicates that early termination by the customer is allowed.",
            "sameAsAttribute": "CUSTTERMALLOWED",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CUSTTERMALLOWED",
            "tableName": "CONTRACT",
            "tableColumnName": "CUSTTERMALLOWED"
        },
        {
            "attributeName": "CUSTNOTIFYPERIOD",
            "required": false,
            "persistent": true,
            "title": "Customer Notification Period",
            "remarks": "If early termination by the customer is allowed this is the customer notification period in days.",
            "sameAsAttribute": "CUSTNOTIFYPERIOD",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CUSTNOTIFYPERIOD",
            "tableName": "CONTRACT",
            "tableColumnName": "CUSTNOTIFYPERIOD"
        },
        {
            "attributeName": "VENDTERMALLOWED",
            "required": true,
            "persistent": true,
            "title": "Vendor Termination Allowed",
            "remarks": "Checking this box indicates that early termination is allowed by vendor.",
            "sameAsAttribute": "VENDTERMALLOWED",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "VENDTERMALLOWED",
            "tableName": "CONTRACT",
            "tableColumnName": "VENDTERMALLOWED"
        },
        {
            "attributeName": "VENDNOTIFYPERIOD",
            "required": false,
            "persistent": true,
            "title": "Vendor Notification Period",
            "remarks": "If early termination is allowed by vendor, this indicates the notice of termination in days.",
            "sameAsAttribute": "VENDNOTIFYPERIOD",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "VENDNOTIFYPERIOD",
            "tableName": "CONTRACT",
            "tableColumnName": "VENDNOTIFYPERIOD"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Company",
            "remarks": "A unique code indicating the vendor of the current purchase contract.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "VENDOR",
            "tableName": "CONTRACT",
            "tableColumnName": "VENDOR"
        },
        {
            "attributeName": "CONTACT",
            "required": false,
            "persistent": true,
            "title": "Contact",
            "remarks": "The name of the person employed by the vendor to contact with queries about this contract.",
            "sameAsAttribute": "CONTACT",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "CONTACT",
            "tableName": "CONTRACT",
            "tableColumnName": "CONTACT"
        },
        {
            "attributeName": "FREIGHTTERMS",
            "required": false,
            "persistent": true,
            "title": "Freight Terms",
            "remarks": "The agreed upon terms related to shipping and receiving associated with this contract.",
            "sameAsAttribute": "FREIGHTTERMS",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "FREIGHTTERMS",
            "tableName": "CONTRACT",
            "tableColumnName": "FREIGHTTERMS"
        },
        {
            "attributeName": "PAYMENTTERMS",
            "required": false,
            "persistent": true,
            "title": "Payment Terms",
            "remarks": "The agreed upon terms related to monetary payments associated with this contract.",
            "sameAsAttribute": "PAYMENTTERMS",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "PAYMENTTERMS",
            "tableName": "CONTRACT",
            "tableColumnName": "PAYMENTTERMS"
        },
        {
            "attributeName": "SHIPVIA",
            "required": false,
            "persistent": true,
            "title": "Ship Via",
            "remarks": "The name of the shipping company to use for transporting items associated withthis contract.",
            "sameAsAttribute": "SHIPVIA",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "SHIPVIA",
            "tableName": "CONTRACT",
            "tableColumnName": "SHIPVIA"
        },
        {
            "attributeName": "CUSTOMERNUM",
            "required": false,
            "persistent": true,
            "title": "Customer #",
            "remarks": "The unique number issued by the vendor to identify our company.",
            "sameAsAttribute": "CUSTOMERNUM",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "CUSTOMERNUM",
            "tableName": "CONTRACT",
            "tableColumnName": "CUSTOMERNUM"
        },
        {
            "attributeName": "FOB",
            "required": false,
            "persistent": true,
            "title": "FOB Point",
            "remarks": "The point at which merchandise is on board a vehicle and in transit.",
            "sameAsAttribute": "FOB",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "FOB",
            "tableName": "CONTRACT",
            "tableColumnName": "FOB"
        },
        {
            "attributeName": "TOTALCOST",
            "required": false,
            "persistent": true,
            "title": "Total Cost",
            "remarks": "The sum of all the costs on the contract lines on the current contract.",
            "sameAsAttribute": "TOTALCOST",
            "sameAsObject": "PO",
            "viewColumnName": "TOTALCOST",
            "tableName": "CONTRACT",
            "tableColumnName": "TOTALCOST"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "The login name of the person who last changed the contract.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON",
            "viewColumnName": "CHANGEBY",
            "tableName": "CONTRACT",
            "tableColumnName": "CHANGEBY"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "The date on which the contract was last altered.",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CHANGEDATE",
            "tableName": "CONTRACT",
            "tableColumnName": "CHANGEDATE"
        },
        {
            "attributeName": "HISTORYFLAG",
            "required": true,
            "persistent": true,
            "title": "History",
            "remarks": "History flag.",
            "sameAsAttribute": "HISTORYFLAG",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "HISTORYFLAG",
            "tableName": "CONTRACT",
            "tableColumnName": "HISTORYFLAG"
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": true,
            "persistent": true,
            "title": "Currency",
            "remarks": "Indicates the currency used to satisfy monetary transactions associated with this contract.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY",
            "viewColumnName": "CURRENCYCODE",
            "tableName": "CONTRACT",
            "tableColumnName": "CURRENCYCODE"
        },
        {
            "attributeName": "EXCHANGERATE",
            "required": false,
            "persistent": true,
            "title": "Exchange Rate",
            "remarks": "Exchange rate the time of contract approval.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE",
            "viewColumnName": "EXCHANGERATE",
            "tableName": "CONTRACT",
            "tableColumnName": "EXCHANGERATE"
        },
        {
            "attributeName": "EXCHANGERATE2",
            "required": false,
            "persistent": true,
            "title": "Exchange Rate2",
            "remarks": "Exchange rate2 at the time of contract approval.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE",
            "viewColumnName": "EXCHANGERATE2",
            "tableName": "CONTRACT",
            "tableColumnName": "EXCHANGERATE2"
        },
        {
            "attributeName": "EXCHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "ExDate Changed",
            "remarks": "Date of the exchange rate.",
            "sameAsAttribute": "EXCHANGEDATE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "EXCHANGEDATE",
            "tableName": "CONTRACT",
            "tableColumnName": "EXCHANGEDATE"
        },
        {
            "attributeName": "BUYAHEAD",
            "required": true,
            "persistent": true,
            "title": "Buy Ahead",
            "remarks": "Is this a buy ahead rate, ie entered directly by the user and not calculated from the list of active exchange rate.",
            "sameAsAttribute": "BUYAHEAD",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "BUYAHEAD",
            "tableName": "CONTRACT",
            "tableColumnName": "BUYAHEAD"
        },
        {
            "attributeName": "INCLUSIVE1",
            "required": true,
            "persistent": true,
            "title": "Pay Tax to Vendor",
            "remarks": "Is the PO total inclusive of Tax 1",
            "sameAsAttribute": "INCLUSIVE1",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "INCLUSIVE1",
            "tableName": "CONTRACT",
            "tableColumnName": "INCLUSIVE1"
        },
        {
            "attributeName": "INCLUSIVE2",
            "required": true,
            "persistent": true,
            "title": "Include Tax 2",
            "remarks": "Is the PO total inclusive of Tax 2.",
            "sameAsAttribute": "INCLUSIVE2",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "INCLUSIVE2",
            "tableName": "CONTRACT",
            "tableColumnName": "INCLUSIVE2"
        },
        {
            "attributeName": "INCLUSIVE3",
            "required": true,
            "persistent": true,
            "title": "Include Tax 3",
            "remarks": "Is the PO total inclusive of Tax 3.",
            "sameAsAttribute": "INCLUSIVE3",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "INCLUSIVE3",
            "tableName": "CONTRACT",
            "tableColumnName": "INCLUSIVE3"
        },
        {
            "attributeName": "INCLUSIVE4",
            "required": true,
            "persistent": true,
            "title": "Include Tax 4",
            "remarks": "Is the PO total inclusive of Tax 4.",
            "sameAsAttribute": "INCLUSIVE4",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "INCLUSIVE4",
            "tableName": "CONTRACT",
            "tableColumnName": "INCLUSIVE4"
        },
        {
            "attributeName": "INCLUSIVE5",
            "required": true,
            "persistent": true,
            "title": "Include Tax 5",
            "remarks": "Is the PO total inclusive of Tax 5.",
            "sameAsAttribute": "INCLUSIVE5",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "INCLUSIVE5",
            "tableName": "CONTRACT",
            "tableColumnName": "INCLUSIVE5"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID.",
            "sameAsAttribute": "EXTERNALREFID",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "EXTERNALREFID",
            "tableName": "CONTRACT",
            "tableColumnName": "EXTERNALREFID"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner system ID.",
            "sameAsAttribute": "OWNERSYSID",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "OWNERSYSID",
            "tableName": "CONTRACT",
            "tableColumnName": "OWNERSYSID"
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (MEA).",
            "sameAsAttribute": "SENDERSYSID",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "SENDERSYSID",
            "tableName": "CONTRACT",
            "tableColumnName": "SENDERSYSID"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORGID",
            "tableName": "CONTRACT",
            "tableColumnName": "ORGID"
        },
        {
            "attributeName": "ORGID1",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORGID1",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "ORGID"
        },
        {
            "attributeName": "TOTALBASECOST",
            "required": true,
            "persistent": true,
            "title": "Total Base Cost",
            "remarks": "Cost of the entire contract in base currency 1.",
            "sameAsAttribute": "TOTALBASECOST",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "TOTALBASECOST",
            "tableName": "CONTRACT",
            "tableColumnName": "TOTALBASECOST"
        },
        {
            "attributeName": "POREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Requires PO",
            "remarks": "Checking this box indicates a PO is required for this contract.",
            "sameAsAttribute": "POREQUIRED",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "POREQUIRED",
            "tableName": "CONTRACT",
            "tableColumnName": "POREQUIRED"
        },
        {
            "attributeName": "PAYMENTSCHED",
            "required": true,
            "persistent": true,
            "title": "Payment Schedule",
            "remarks": "Checking this box indicates a there is a defined payment schedule.",
            "sameAsAttribute": "PAYMENTSCHED",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "PAYMENTSCHED",
            "tableName": "CONTRACT",
            "tableColumnName": "PAYMENTSCHED"
        },
        {
            "attributeName": "ADDLINESONUSE",
            "required": true,
            "persistent": true,
            "title": "Add Lines on Use",
            "remarks": "Checking this box indicates you can add lines to the purchase document with contract reference.",
            "sameAsAttribute": "ADDLINESONUSE",
            "sameAsObject": "CONTRACTPURCH",
            "viewColumnName": "ADDLINESONUSE",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "ADDLINESONUSE"
        },
        {
            "attributeName": "CHGPRICEONUSE",
            "required": true,
            "persistent": true,
            "title": "Change Price on Use",
            "remarks": "Can price be changed on the line with contract reference.",
            "sameAsAttribute": "CHGPRICEONUSE",
            "sameAsObject": "CONTRACTPURCH",
            "viewColumnName": "CHGPRICEONUSE",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "CHGPRICEONUSE"
        },
        {
            "attributeName": "CHGQTYONUSE",
            "required": true,
            "persistent": true,
            "title": "Change Quantity on Use",
            "remarks": "Can quantity be changed on line with contract reference.",
            "sameAsAttribute": "CHGQTYONUSE",
            "sameAsObject": "CONTRACTPURCH",
            "viewColumnName": "CHGQTYONUSE",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "CHGQTYONUSE"
        },
        {
            "attributeName": "MAXVOL",
            "required": false,
            "persistent": true,
            "title": "Maximum Amount",
            "remarks": "Either the maximum monetary amount for a contract, or an estimate depending on how the'CANEXCEEDVOLUME' property is set.",
            "sameAsAttribute": "MAXVOL",
            "sameAsObject": "CONTRACTPURCH",
            "viewColumnName": "MAXVOL",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "MAXVOL"
        },
        {
            "attributeName": "MAXRELVOL",
            "required": false,
            "persistent": true,
            "title": "Maximum Release Amount",
            "remarks": "The total cost that a single REL type PO can have against this contract.",
            "sameAsAttribute": "MAXRELVOL",
            "sameAsObject": "CONTRACTPURCH",
            "viewColumnName": "MAXRELVOL",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "MAXRELVOL"
        },
        {
            "attributeName": "SHIPPINGLOSS",
            "required": true,
            "persistent": true,
            "title": "Shipping Loss",
            "remarks": "Checking this box indicates you are liable for shipping loss.",
            "sameAsAttribute": "SHIPPINGLOSS",
            "sameAsObject": "CONTRACTPURCH",
            "viewColumnName": "SHIPPINGLOSS",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "SHIPPINGLOSS"
        },
        {
            "attributeName": "DELIVERYLOSS",
            "required": true,
            "persistent": true,
            "title": "Delivery Loss",
            "remarks": "Liable for delivery loss?",
            "sameAsAttribute": "DELIVERYLOSS",
            "sameAsObject": "CONTRACTPURCH",
            "viewColumnName": "DELIVERYLOSS",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "DELIVERYLOSS"
        },
        {
            "attributeName": "ACCEPTANCELOSS",
            "required": true,
            "persistent": true,
            "title": "Acceptance Loss",
            "remarks": "Checking this box indicates you are liable for acceptance loss.",
            "sameAsAttribute": "ACCEPTANCELOSS",
            "sameAsObject": "CONTRACTPURCH",
            "viewColumnName": "ACCEPTANCELOSS",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "ACCEPTANCELOSS"
        },
        {
            "attributeName": "ACCEPTPERIOD",
            "required": false,
            "persistent": true,
            "title": "Acceptance Period",
            "remarks": "Amount of time in days that can pass before the buyer must either accept the received items or return them.",
            "sameAsAttribute": "ACCEPTPERIOD",
            "sameAsObject": "CONTRACTPURCH",
            "viewColumnName": "ACCEPTPERIOD",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "ACCEPTPERIOD"
        },
        {
            "attributeName": "ENFORCEBUNDLE",
            "required": true,
            "persistent": true,
            "title": "Maintain Hierarchy",
            "remarks": "Checking this box indicates that bundling is enforced.",
            "sameAsAttribute": "ENFORCEBUNDLE",
            "sameAsObject": "CONTRACTPURCH",
            "viewColumnName": "ENFORCEBUNDLE",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "ENFORCEBUNDLE"
        },
        {
            "attributeName": "AMTREMAINING",
            "required": false,
            "persistent": true,
            "title": "Amount Remaining",
            "remarks": "Difference between the maximum volume and the commited cost for a volume specified contract.",
            "sameAsAttribute": "AMTREMAINING",
            "sameAsObject": "CONTRACTPURCH",
            "viewColumnName": "AMTREMAINING",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "AMTREMAINING"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "A detailed description of the current purchase contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREIGHTTERMS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Freight Terms Long Description",
            "remarks": "A detailed description of the freight terms associated with this contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADJUSTPERCENT",
            "required": false,
            "persistent": false,
            "title": "Adjustment %",
            "remarks": "Use this field to specify the increase or decrease percentage in price for this contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADJUSTAMT",
            "required": false,
            "persistent": false,
            "title": "Adjustment Amount",
            "remarks": "Use this field to indicate the amount that the unitcost must be incremented or decremented.",
            "sameAsAttribute": "TOTALCOST",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "CREATEREL",
            "required": true,
            "persistent": true,
            "title": "Create Release",
            "remarks": "Checking this box indicates you can createa release from the contract.",
            "sameAsAttribute": "CREATEREL",
            "sameAsObject": "CONTRACTPURCH",
            "viewColumnName": "CREATEREL",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "CREATEREL"
        },
        {
            "attributeName": "HASINSURANCE",
            "required": true,
            "persistent": true,
            "title": "Has Insurance",
            "remarks": "Does this vendor have a current insurance policy ?",
            "sameAsAttribute": "HASINSURANCE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "HASINSURANCE",
            "tableName": "CONTRACT",
            "tableColumnName": "HASINSURANCE"
        },
        {
            "attributeName": "INSURANCEEXPDATE",
            "required": false,
            "persistent": true,
            "title": "Insurance Expiration Date",
            "remarks": "Expiration date of the vendors insurance policy.",
            "sameAsAttribute": "INSURANCEEXPDATE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "INSURANCEEXPDATE",
            "tableName": "CONTRACT",
            "tableColumnName": "INSURANCEEXPDATE"
        },
        {
            "attributeName": "LINESTATUS",
            "required": false,
            "persistent": false,
            "title": "Line Status",
            "remarks": "Use this field to indicate the status you want for the checked lines below.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CANEXCEEDVOLUME",
            "required": true,
            "persistent": true,
            "title": "Can Exceed Amount",
            "remarks": "Checking this box indicates you can exceed the specified maximum amount on this contract.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "CANEXCEEDVOLUME",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "CANEXCEEDVOLUME"
        },
        {
            "attributeName": "CONTRACTPURCHID",
            "required": false,
            "persistent": true,
            "title": "CONTRACTPURCHID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "CONTRACTPURCHID",
            "sameAsObject": "CONTRACTPURCH",
            "viewColumnName": "CONTRACTPURCHID",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "CONTRACTPURCHID"
        },
        {
            "attributeName": "CONTRACTID",
            "required": false,
            "persistent": true,
            "title": "CONTRACTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "CONTRACTID",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CONTRACTID",
            "tableName": "CONTRACT",
            "tableColumnName": "CONTRACTID"
        },
        {
            "attributeName": "REVCOMMENTS",
            "required": false,
            "persistent": true,
            "title": "Revision Comments",
            "remarks": "Comments associated with the current revision of this contract.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR",
            "viewColumnName": "REVCOMMENTS",
            "tableName": "CONTRACT",
            "tableColumnName": "REVCOMMENTS"
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE",
            "viewColumnName": "LANGCODE",
            "tableName": "CONTRACT",
            "tableColumnName": "LANGCODE"
        },
        {
            "attributeName": "NP_STATUSMEMO",
            "required": false,
            "persistent": false,
            "title": "Change Status Memo",
            "remarks": "Status change memo, temporary non-persistent field used by MEA",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "MASTERREVNUM",
            "required": false,
            "persistent": true,
            "title": "Master Revision",
            "remarks": "Master Contract Revision Number",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "MASTERREVNUM",
            "tableName": "CONTRACT",
            "tableColumnName": "MASTERREVNUM"
        },
        {
            "attributeName": "PROCESSCLAIM",
            "required": true,
            "persistent": true,
            "title": "PROCESS CLAIM",
            "remarks": "Can a claim be processed against this contract",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "PROCESSCLAIM",
            "tableName": "CONTRACT",
            "tableColumnName": "PROCESSCLAIM"
        },
        {
            "attributeName": "REVCOMMENTS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "REVCOMMENTS Long description",
            "remarks": "Long description or detailed comments associated with the current revision of this contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSPECTIONREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Inspection Required",
            "remarks": "Checking this box indicates that items ordered from this company must be inspected on receipt.",
            "sameAsAttribute": "INSPECTIONREQUIRED",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "INSPECTIONREQUIRED",
            "tableName": "CONTRACT",
            "tableColumnName": "INSPECTIONREQUIRED"
        },
        {
            "attributeName": "MAINTHIERCHY",
            "required": true,
            "persistent": true,
            "title": "Maintain Hierarchy",
            "remarks": "Maintain Hierarchy",
            "sameAsAttribute": "MAINTHIERCHY",
            "sameAsObject": "ASSET",
            "viewColumnName": "MAINTHIERCHY",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "MAINTHIERCHY"
        },
        {
            "attributeName": "SWLICTYPE",
            "required": false,
            "persistent": true,
            "title": "License Type",
            "remarks": "Software License Type",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "SWLICTYPE",
            "tableName": "CONTRACTPURCH",
            "tableColumnName": "SWLICTYPE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "HASLD",
            "tableName": "CONTRACT",
            "tableColumnName": "HASLD"
        },
        {
            "attributeName": "STATUSIFACE",
            "required": true,
            "persistent": false,
            "title": "Has Status Changed",
            "remarks": "Non persistent boolean field to indicate whether the status has been changed after the stateful object is fetched from the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "contract.contractnum=contractpurch.contractnum and contract.revisionnum=contractpurch.revisionnum and contract.orgid=contractpurch.orgid and contract.contracttype in (select value from synonymdomain where domainid ='CONTRACTTYPE' and maxvalue in ('PRICE','BLANKET','PURCHASE', 'SWLICENSE'))"
    },
    "outgoingRelationships": [
        {
            "name": "VENDOR",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find all company records for a given contract. (contract.vendor=companies.company",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_CONTGRP",
            "target": "CONTCOMMODITY",
            "remarks": null,
            "whereClause": "contractnum = :contractnum and revisionnum=:revisionnum and orgid = :orgid and commodity in (select commodity from contcommodity where parent is null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTCOMMODITY",
            "target": "CONTCOMMODITY",
            "remarks": "Relationship to the ContCommodity table, used to find all commodities for a given contract. (contcommodity.contractnum = purchview.contractnum and contcommodity.revisionnum=purchview.revisionnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTAUTH",
            "target": "CONTRACTAUTH",
            "remarks": "Relationship to the ContractAuth table, used to find all ContractAuth records for a given purchase contract. (contractauth.contractnum=purchview.contractnum). The resulting set will contain one or more records.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NONCANCELEDCONRACTLINE",
            "target": "CONTRACTLINE",
            "remarks": "Relationship to the ContractLine table, used to find all ContractLines that dont have a linestatus of cenceled. The resulting set might contain one or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and linestatus not in (select value from synonymdomain where domainid ='CONTRACTSTATUS' and maxvalue='CAN')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTLINE",
            "target": "CONTRACTLINE",
            "remarks": "Relationship to the ContractLine table, used to find all contract lines for a given contract. (purchview.contractnum=contractline.contractnum and purchview.orgid=contractline.orgid)",
            "whereClause": "contractnum=:contractnum and revisionnum = :revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REVISIONLINE",
            "target": "CONTRACTLINE",
            "remarks": "Relationship to the ContractLine table used to find all ContractLines for a given Purchase Contract",
            "whereClause": "contractnum=:contractnum and revisionnum in (:revisionnum, (select max(revisionnum) from contractline where contractnum=:contractnum and revisionnum < :revisionnum)) and contractlinenum in (select contractlinenum from contractline where contractnum=:contractnum and revstatus in (select value from synonymdomain where domainid='REVSTATUS' and maxvalue in ('ADDED','CHANGED'))  and revisionnum = :revisionnum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "APPRCONTRACTLINE",
            "target": "CONTRACTLINE",
            "remarks": "Relationship to the ContractLine table, used to find approved contract line records for a given contract. (contractline.contractnum = contract.contractnum and contractline.revisionnum = contract.revisionnum and contractline.orgid = contract.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum = :revisionnum and orgid=:orgid and linestatus in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTSTATUS",
            "target": "CONTRACTSTATUS",
            "remarks": "Relationship to the ContractStatus table, used to find all contract statuses for a given contract. (purchview.contractnum=contractstatus.contractnum and purchview.orgid=contractstatus.orgid)",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTSWLIC",
            "target": "CONTRACTSWLIC",
            "remarks": "Relationship to the ContractSWLic table, used to find all ContractSWLic records for a given purchase contract. (ContractSWLic.contractnum=ContractSWLic.contractnum). The resulting set will contain one or more records.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTTERM",
            "target": "CONTRACTTERM",
            "remarks": "Relationship to the CONTRACTTERM table, used to find all contract term records for a given contract. (contractterm.contractnum = contract.contractnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTTYPETERM",
            "target": "CONTRACTTYPETERM",
            "remarks": "Relationship to the ContractTypeTerm table used to find all ContractTerms for a given Contract Type (contracttypeterm.contracttypeid=purchview.contracttype and contracttypeterm.orgid=purchview.orgid)",
            "whereClause": "contracttypeid=:contracttype and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COSTINPUT",
            "target": "COSTINPUT",
            "remarks": "Relationship to the non-persistent CostInput object. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CREATERELINPUT",
            "target": "CREATERELINPUT",
            "remarks": "Relationship to the non-persistent CreateRelInput object. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the create release action page to create a release from a given purchase contract.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given master contract. (doclinks.keytable = PURCHVIEW and doclinks.keycolumn = CONTRACTNUM and doclinks.keyvalue = masterview.contractnum$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects. Note: The PURCHVIEW.CONTRACTNUM field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable='PURCHVIEW' and ownerid=:contractid) or (ownertable='RFQLINE' and ownerid in (select rfqlineid from rfqline where contractnum=:contractnum and orgid=:orgid)) or (ownertable='PRLINE' and ownerid in (select prlineid from prline where contractnum=:contractnum and orgid=:orgid)) or (ownertable='COMPANIES' and ownerid = (select companiesid from companies where company=:vendor and orgid=:orgid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the PURCHVIEW to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINEFORCONTRACT",
            "target": "INVOICELINE",
            "remarks": "Relationship to the InvoiceLine table, used to find all invoiceline for a given contract. (invoiceline.contractrefnum = purchview.contractnum). The resulting set will contain one or more objects.",
            "whereClause": "contractrefnum = :contractnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR",
            "target": "INVVENDOR",
            "remarks": "Relationship to the InvVendor table, used to find the invvendor records for a given vendor. (invvendor.vendor = purchview.vendor and invvendor.orgid=purchview.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "vendor=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NAMEDUSERS",
            "target": "NAMEDUSERS",
            "remarks": "Relationship to the NamesUsers table, used to find all NamesUsers records for a given purchase contract. (ContractSWLic.contractnum=ContractSWLic.contractnum). The resulting set will contain one or more records.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELEASEPO",
            "target": "PO",
            "remarks": "Relationship to the PO table, used to find all release POs for a given contract. (contract.contractnum=po.contractrefnum and contract.orgid=po.orgid)",
            "whereClause": "contractrefnum=:contractnum and orgid in (select authorgid from contractauth where contractnum=:contractnum and orgid=:orgid) and status not in (select value from synonymdomain where domainid = 'POSTATUS' and maxvalue in ('REVISE', 'PNDREV'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINES",
            "target": "POLINE",
            "remarks": "Relationship to the POLine table. Used to fetch all the POLines from the POLINE table",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "target": "PRLINE",
            "remarks": "Relationship to the PRLine table, used to find all purchase req line records for a given contract. (prline.contractnum = purchview.contractnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROPERTYDEFAULT",
            "target": "PROPERTYDEFAULT",
            "remarks": "Relationship to the PropertyDefault table, used to find the PropertyDefault records whose propertyid match that of the PurchView. (propertydefault.contracttypeid=purchview.contracttype). The resulting set will contain zero or more objects.",
            "whereClause": "contracttypeid = :contracttype and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PURCHASEPROPERTYDEFAULT",
            "target": "PROPERTYDEFAULT",
            "remarks": "Relationship to the PropertyDefault table, used to find the PropertyDefault records whose propertyid match that of the PurchView. (propertydefault.contracttypeid=PURCHASE). The resulting set will contain zero or more objects.",
            "whereClause": "contracttypeid in ( select value from synonymdomain where domainid = 'CONTRACTTYPE' and maxvalue ='PURCHASE') and propertyid not in (select propertyid from propertydefault where contracttypeid in ( select value from synonymdomain where domainid = 'CONTRACTTYPE' and maxvalue ='SWLICENSE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWREVHIST",
            "target": "PURCHVIEW",
            "remarks": "Relationship to the PurchView table used to find all PurchView for a given Purchase Contract",
            "whereClause": "contractnum=:contractnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PURCHVIEWCHGSTAT",
            "target": "PURCHVIEWCHGSTAT",
            "remarks": "Relationship to the non-persistent PurchViewChangeStatus object. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Change Status action page to change the status of a given purchase contract.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REVISIONINPUT",
            "target": "REVISIONINPUT",
            "remarks": "Relationship to the non-persistent RevisionInput object. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "target": "RFQLINE",
            "remarks": "Relationship to the RFQLine table, used to find all rfq records for a given contract. (rfqline.contractnum = purchview.contractnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCHPURCHVIEW",
            "target": "SCHPURCHVIEW",
            "remarks": "Relationship to the MRLine table, used to find all mrline records for a given material requisition. (purchview.contractnum = schpurchview.contractnum and purchview.orgid=schpurchview.orgid and purchview.revisionnum=schpurchview.revisionnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTSITE",
            "target": "SITE",
            "remarks": "Relationship to the Site table, used to find all sites that use the same itemset and companyset as the current contract site. The resulting set will contain zero or more objects.",
            "whereClause": "orgid in (select orgid from organization where itemsetid in (select itemsetid from organization where orgid=:orgid) and companysetid in (select companysetid from organization where orgid=:orgid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLA",
            "target": "SLA",
            "remarks": "Relationship to the SLA table, used to find all slas in a status of active. (sla.status=ACTIVE). The resulting set will contain zero or more objects.",
            "whereClause": "orgid=:orgid and status in (select value from synonymdomain where domainid='SLASTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLACONTRACT",
            "target": "SLACONTRACT",
            "remarks": "Relationship to the SLAContract table, used to find all slacontracts for a given purchase contract. (purchview.contractid = slacontract.contractid). The resulting set will contain zero or more object.",
            "whereClause": "contractnum=:contractnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='CONTRACTSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PURCHVIEW",
            "source": "CONTRACT",
            "remarks": "Relationship to the PurchView table, used to find purch view records for a given contract. (purchview.contractid = contract.contractid and purchview.orgid = contract.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PURCHVIEW",
            "source": "PO",
            "remarks": "Relationship to the Purchase Contract, used to find all purchase contracts for a given relase po. (purchview.contractid = po.contractrefid). The resulting set will contain zero or one object.",
            "whereClause": "contractid=:contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWREVHIST",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the PurchView table used to find all PurchView for a given Purchase Contract",
            "whereClause": "contractnum=:contractnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}