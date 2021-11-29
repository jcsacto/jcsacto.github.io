mos = {
    "objectName": "PR",
    "className": "psdi.app.pr.PRSet",
    "description": "The PR Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "PRID",
    "primaryKeyColumns": [
        "SITEID",
        "PRNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "PR",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MR created for the PR",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "STORELOCSITE, PRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
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
            "objectName": "PR",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "POSITEID, PRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PR Lines",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "PRSTATUS",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PR Status History",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "PRTERM",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PRNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PR Terms",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "STORELOCSITE, PRNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Item ordered on this PR",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "STORELOCSITE, PR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Material ordered on this PR",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "STORELOCSITE, PR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "WPSERVICE",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Service ordered on this PR",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "WPSERVICE",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "STORELOCSITE, PR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Tool ordered on this PR",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "STORELOCSITE, PR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ADDRESS",
            "targetObject": "PR",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, BILLTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bill To address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "PR",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SHIPTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To address",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "PR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on PR",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "PR",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTREFNUM, CONTRACTREFREV, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract convering this PR",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "PR",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Currency of this PR",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "PR",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 157",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, STORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target storeroom location for inventory on this PR.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PR",
            "parentKeys": "PERSONID",
            "targetKeys": "BILLTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person to Bill",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PR",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PR",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person requesting PR",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PR",
            "parentKeys": "PERSONID",
            "targetKeys": "SHIPTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person to Ship to.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PR",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PR",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 200",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PRNUM",
            "required": true,
            "persistent": true,
            "title": "PR",
            "remarks": "Identifies the purchase requisition record. This value must be unique for all PR records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUEDATE",
            "required": false,
            "persistent": true,
            "title": "Requested Date",
            "remarks": "Date the PR was issued.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIREDDATE",
            "required": false,
            "persistent": true,
            "title": "Required Date",
            "remarks": "Date the PR items are needed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUESTEDBY",
            "required": false,
            "persistent": true,
            "title": "Requested By",
            "remarks": "Person who asked for the PR. The default value is the current login ID.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Company",
            "remarks": "Identifies the vendor for the item.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CONTACT",
            "required": false,
            "persistent": true,
            "title": "Contact",
            "remarks": "Primary person to contact at the vendor.",
            "sameAsAttribute": "CONTACT",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CUSTOMERNUM",
            "required": false,
            "persistent": true,
            "title": "Customer #",
            "remarks": "Number used by the vendor to identify your company.",
            "sameAsAttribute": "CUSTOMERNUM",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "FOB",
            "required": false,
            "persistent": true,
            "title": "FOB Point",
            "remarks": "Free On Board Point. The point where responsibility and liability are transferred. The FOB point is usually either the destination or the shipping point.",
            "sameAsAttribute": "FOB",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "FREIGHTTERMS",
            "required": false,
            "persistent": true,
            "title": "Freight Terms",
            "remarks": "Describes what is being shipped. Any riders to the shipping agreement should be included here. To enter or view additional information, click the Long Description button. For example, Fresh Fruit. Perishable. Must meet delivery dates.",
            "sameAsAttribute": "FREIGHTTERMS",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "SHIPVIA",
            "required": false,
            "persistent": true,
            "title": "Ship Via",
            "remarks": "Specifies how the goods should be shipped. For example, First Class Mail.",
            "sameAsAttribute": "SHIPVIA",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "PAYMENTTERMS",
            "required": false,
            "persistent": true,
            "title": "Payment Terms",
            "remarks": "Specified terms of payment for this vendor. For example, net 30.",
            "sameAsAttribute": "PAYMENTTERMS",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "SHIPTO",
            "required": false,
            "persistent": true,
            "title": "Ship To",
            "remarks": "Address code where the order will be shipped.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "SHIPTOATTN",
            "required": false,
            "persistent": true,
            "title": "Attention",
            "remarks": "Person to whom the order is being shipped.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "BILLTO",
            "required": false,
            "persistent": true,
            "title": "Bill To",
            "remarks": "Address code where the order will be billed.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "BILLTOATTN",
            "required": false,
            "persistent": true,
            "title": "Attention",
            "remarks": "Person to whom the bill will be sent.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the purchase requisition. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Current status of the PR.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date and time that the PR status was last changed. The default is the system date and time at the time of the status change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date Of Modification",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Signature Of Modifier",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "TOTALCOST",
            "required": true,
            "persistent": true,
            "title": "Total Cost",
            "remarks": "Total cost for the PR, including taxes. Maximo calculates this amount using the value in the Currency field. If the Currency field is blank, Maximo calculates this amount in your company's base currency.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIORITY",
            "required": true,
            "persistent": true,
            "title": "Priority",
            "remarks": "Priority level used to determine the order in which requisitions should be turned into purchase orders. We recommend that limit your range of values from 0 to 9, where 0 is the lowest priority. The default value is 0.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HISTORYFLAG",
            "required": true,
            "persistent": true,
            "title": "History",
            "remarks": "Specifies whether to include PR records that are stored in history, rather than just current records, in the query. Records stored in history are closed, cancelled, etc. If the check box is selected, records stored in history will be included in the query results. If the check box is cleared, only current records will be included in the query results.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PR1",
            "required": false,
            "persistent": true,
            "title": "Pr1",
            "remarks": "Extra Field 01",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PR2",
            "required": false,
            "persistent": true,
            "title": "Pr2",
            "remarks": "Extra Field 02",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PR3",
            "required": false,
            "persistent": true,
            "title": "Pr3",
            "remarks": "Extra Field 03",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PR4",
            "required": false,
            "persistent": true,
            "title": "Pr4",
            "remarks": "Extra Field 04",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PR5",
            "required": false,
            "persistent": true,
            "title": "Pr5",
            "remarks": "Extra Field 05",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PR6",
            "required": false,
            "persistent": true,
            "title": "Pr6",
            "remarks": "Extra Field 06",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PR7",
            "required": false,
            "persistent": true,
            "title": "Pr7",
            "remarks": "Extra Field 07",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PR8",
            "required": false,
            "persistent": true,
            "title": "Pr8",
            "remarks": "Extra Field 08",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PR9",
            "required": false,
            "persistent": true,
            "title": "Pr9",
            "remarks": "Extra Field 09",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PR10",
            "required": true,
            "persistent": true,
            "title": "Pr10",
            "remarks": "Extra Field 10",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUPERVISOR",
            "required": false,
            "persistent": true,
            "title": "Supervisor",
            "remarks": "Person responsible for approving the work to be done. For example, the person who oversees the services provided by a contractor.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": true,
            "persistent": true,
            "title": "Currency",
            "remarks": "Identifies the currency the PR is in.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "EXCHANGERATE",
            "required": false,
            "persistent": true,
            "title": "Exchange Rate",
            "remarks": "Exchange rate at time of PR approval.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "EXCHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Exchange Date",
            "remarks": "Date of the exchange rate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUYAHEAD",
            "required": true,
            "persistent": true,
            "title": "Buy Ahead Rate",
            "remarks": "Is this a buy ahead rate, ie entered directly by the user and not calculated from the list of active exchange rate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX1",
            "required": false,
            "persistent": true,
            "title": "Total Tax",
            "remarks": "Total Tax applied to the PR. Maximo calculates this amount based on the line items entered on the PR Lines tab.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX2",
            "required": false,
            "persistent": true,
            "title": "Total Tax 2",
            "remarks": "Amount of Tax 2 Payable",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX3",
            "required": false,
            "persistent": true,
            "title": "Total Tax 3",
            "remarks": "Amount of Tax 3 Payable",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE1",
            "required": true,
            "persistent": true,
            "title": "Pay Tax to Vendor",
            "remarks": "Specifies if the vendor is authorized to collect taxes and you will pay the tax amount to the vendor. Select the checkbox if you want to pay taxes to the vendor. Clear the checkbox if there is no tax, or if you want to pay taxes directly to the taxing authority.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE2",
            "required": true,
            "persistent": true,
            "title": "Include Tax 2",
            "remarks": "Is the PR total inclusive of Tax 2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE3",
            "required": true,
            "persistent": true,
            "title": "Include Tax 3",
            "remarks": "Is the PR total inclusive of Tax 3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERNAL",
            "required": true,
            "persistent": true,
            "title": "Internal",
            "remarks": "Specifies if the requisition is an internal requisition or an external requisition. If the check box is selected, the requisition is an internal requisition, which means that the item supplier is within your company. You must enter a storeroom location for the item on the PR Lines tab. Internal requisitions can only be for inventory material from a storeroom, not for a service. If the check box is cleared, the item vendor is external to your company, and may be either inventory material or a service.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX4",
            "required": false,
            "persistent": true,
            "title": "Total Tax 4",
            "remarks": "Amount of Tax4 payable.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALTAX5",
            "required": false,
            "persistent": true,
            "title": "Total Tax 5",
            "remarks": "Amount of Tax5 payable.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE4",
            "required": true,
            "persistent": true,
            "title": "Include Tax 4",
            "remarks": "Is the PR total inclusive of Tax 4.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE5",
            "required": true,
            "persistent": true,
            "title": "Include Tax 5",
            "remarks": "Is the PR total inclusive of Tax 5.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PAYONRECEIPT",
            "required": true,
            "persistent": true,
            "title": "Pay on Receipt",
            "remarks": "Specifies whether you have a pay on receipt agreement with the vendor. If the check box is selected, Maximo will generate an invoice upon receipt of the item or service. If the check box is cleared (the default), no invoice is generated.",
            "sameAsAttribute": "PAYONRECEIPT",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "EXCHANGERATE2",
            "required": false,
            "persistent": true,
            "title": "Secondary Exchange Rate",
            "remarks": "Exchange Rate 2",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
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
            "attributeName": "PRLA1",
            "required": false,
            "persistent": true,
            "title": "PRLA1",
            "remarks": "Extra Crossover Field Crosses over from MR.MRLA1 or LABOR.LA21",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRLA2",
            "required": false,
            "persistent": true,
            "title": "PRLA2",
            "remarks": "Extra Crossover Field Crosses over from MR.MRLA2 or LABOR.LA22",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRLA3",
            "required": false,
            "persistent": true,
            "title": "PRLA3",
            "remarks": "Extra Crossover Field Crosses over from MR.MRLA3 or LABOR.LA23",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRLA4",
            "required": false,
            "persistent": true,
            "title": "PRLA4",
            "remarks": "Extra Crossover Field Crosses over from MR.MRLA4 or LABOR.LA24",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRLA5",
            "required": false,
            "persistent": true,
            "title": "PRLA5",
            "remarks": "Extra Crossover Field Crosses over from MR.MRLA5 or LABOR.LA25",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PCARDNUM",
            "required": false,
            "persistent": true,
            "title": "Procurement Card #",
            "remarks": "Procurement Card Number Crosses over from MR.PCARDNUM or LABOR.PCARDNUM",
            "sameAsAttribute": "PCARDNUM",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PCARDTYPE",
            "required": false,
            "persistent": true,
            "title": "Procurement Card Type",
            "remarks": "Procurement Card Type Crosses over from MR.PCARDTYPE or LABOR.PCARDTYPE",
            "sameAsAttribute": "PCARDTYPE",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PCARDEXPDATE",
            "required": false,
            "persistent": true,
            "title": "Procurement Card Expiration",
            "remarks": "Procurement Card Expiration Crosses over from MR.PCARDEXPDATE or LABOR.PCARDEXPDATE",
            "sameAsAttribute": "PCARDEXPDATE",
            "sameAsObject": "PERSON"
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
            "attributeName": "PCARDVERIFICATION",
            "required": false,
            "persistent": true,
            "title": "Procurement Card Verification Value",
            "remarks": "Procurement Card Verification Value",
            "sameAsAttribute": "PCARDVERIFICATION",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site for the PR.",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Purchase Requisition Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREIGHTTERMS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Freight Terms Long Description",
            "remarks": "Long Description for Freight Terms",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALBASECOST",
            "required": false,
            "persistent": false,
            "title": "Total Base Cost",
            "remarks": "Total cost of the PR, in your company's base currency. This value is the Total Cost multiplied by the current exchange rate for the specified currency. If the PR is not yet approved, the value in this field is calculated at the exchange rate in effect at the time the PR was created. Once the PR is approved, the value in this field is calculated at the exchange rate in effect at approval time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRETAXTOTAL",
            "required": false,
            "persistent": false,
            "title": "Pretax Total",
            "remarks": "Total cost for the goods on the PR, excluding taxes.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTREFNUM",
            "required": false,
            "persistent": true,
            "title": "Contract Reference",
            "remarks": "Contract that was used to find the price.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "NOVENDOR",
            "required": true,
            "persistent": true,
            "title": "No Vendor",
            "remarks": "Specifies whether this PR is for a particular vendor. If the checkbox is selected, no vendor will be specified on this PR. If the checkbox is cleared, you may specify particular vendors for line items on the PR Lines tab.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRID",
            "required": true,
            "persistent": true,
            "title": "PRID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTREFID",
            "required": false,
            "persistent": true,
            "title": "Contract Reference ID",
            "remarks": "Contract reference identifier",
            "sameAsAttribute": "CONTRACTID",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTREFREV",
            "required": false,
            "persistent": true,
            "title": "Contract Revision",
            "remarks": "Revision number of the referenced contract.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "STORELOC",
            "required": false,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "Storeroom location of the item. This field is required if the Issue on Receipt? check box on the PR Lines tab is cleared.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STORELOCSITEID",
            "required": false,
            "persistent": true,
            "title": "Storeroom Site",
            "remarks": "Identifies the site where the storeroom is located.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "INSPECTIONREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Inspection Required",
            "remarks": "Specifies whether this item requires an approval of the receipt. When you receive items that require inspection, Maximo records a receipt transaction. However, the item does not appear in the storeroom until the receipt is approved. If the check box is selected, the item requires inspection. If the check box is cleared (the default), no approval of the receipt is necessary.",
            "sameAsAttribute": "INSPECTIONREQUIRED",
            "sameAsObject": "COMPANIES"
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
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
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
    "outgoingRelationships": [
        {
            "name": "PRBILLTO",
            "target": "ADDRESS",
            "remarks": "Relationship to the Address table, used to find all bill to address records for a given purchase requisition. (address.addresscode = pr.billto). The resulting set will contain one object.",
            "whereClause": "addresscode = :billto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRSHIPTO",
            "target": "ADDRESS",
            "remarks": "Relationship to the Address table, used to find all ship to address records for a given purchase requisition. (address.addresscode = pr.shipto). The resulting set will contain one object.",
            "whereClause": "addresscode = :shipto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMLOG",
            "target": "COMMLOG",
            "remarks": "Relationship to the commlog records, used to find the worklog records for a given PR.",
            "whereClause": "ownerid=:prid and ownertable='PR'",
            "cardinality": null
        },
        {
            "name": "COMPANIES",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find all vendor company records for a given purchase requisition. (companies.company = pr.vendor). The resulting set will contain zero or more objects.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PR_VENDOR",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PR_BILLTO",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company=:billto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PR_SHIPTO",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company=:shipto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREF",
            "target": "CONTRACT",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given purchase requisition contract reference number (contract.contractid = pr.contractrefid and contract.orgid = pr.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractid = :contractrefid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CREATECONTRACT",
            "target": "CONTRACTFROMPR",
            "remarks": "Relationship to the non-persistent ContractFromPR table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREFLINE",
            "target": "CONTRACTLINE",
            "remarks": "Relationship to the CONTRACTLINE line table, used to find all CONTRACTLINE line records for a given purchase requisition. (contractlineid in (select contreflineid from prline where prnum=:prnum and siteid=:siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "contractlineid in (select contreflineid from prline where prnum=:prnum and siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given purchase requisition. (doclinks.keytable = 'PR' and doclinks.keycolumn = 'PRNUM' and doclinks.keyvalue = pr.prnum$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects. Note: The PR.PRNum field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable='PR' and ownerid=:prid) or (ownertable = 'COMPANIES' and ownerid = (select companiesid from companies where company=:vendor and orgid=:orgid)) or (ownertable = 'CONTRACT' and ownerid = (select contractid from contract where contractnum=:contractrefnum and revisionnum=:contractrefrev and orgid=:orgid)) or (ownertable = 'MRLINE' and ownerid in (select mrlineid from mrline where mrnum in (select mrnum from prline where prnum=:prnum and siteid=:siteid)))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the PR to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINE",
            "target": "INVOICELINE",
            "remarks": "Relationship to the INVOICELINE line table, used to find all INVOICELINE line records for a given purchase requisition. (polinenum in (select polinenum from prline where prnum=prline.prnum and siteid=prline.siteid) and positeid = pr.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from prline where prnum=:prnum and siteid=:siteid) and ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and positeid = :siteid",
            "cardinality": null
        },
        {
            "name": "INVOICETRANS",
            "target": "INVOICETRANS",
            "remarks": "Relationship to the INVOICETRANS line table, used to find all INVOICETRANS line records for a given purchase order. (polinenum in (select polinenum from prline where prnum=prline.prnum and siteid=prline.siteid) and positeid = pr.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "invoicenum in (select invoicenum from invoiceline where ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and siteid=:siteid) and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "INVVENDOR",
            "target": "INVVENDOR",
            "remarks": "Relationship to the InvVendor table, used to find the invvendor records for a given purchase requisition. (invvendor.vendor = pr.vendor). The resulting set will contain zero or more objects. ",
            "whereClause": "vendor = :vendor and orgid = :orgid and (siteid=:siteid or siteid is null) and itemnum not in (select itemnum from item where status not in (select value from synonymdomain where domainid ='ITEMSTATUS' and maxvalue in ('ACTIVE','PLANNING','PENDOBS')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BILLTOATTN",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find all bill to attention records for a given purchase requisition. (labor.laborcode = pr.billtoattn). The resulting set will contain one or more objects.",
            "whereClause": "laborcode = :billtoattn and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTOATTN",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find all ship to attention records for a given purchase requisition. (labor.laborcode = pr.shiptoattn). The resulting set will contain one objects.",
            "whereClause": "laborcode = :shiptoattn and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PR_SUPERVISOR",
            "target": "LABOR",
            "remarks": null,
            "whereClause": "laborcode=:supervisor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PR_REQUESTEDBY",
            "target": "LABOR",
            "remarks": null,
            "whereClause": "laborcode =:requestedby and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for pr. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:prid and ldownertable = 'PR'",
            "cardinality": null
        },
        {
            "name": "MATRECTRANS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MATRECTRANS line table, used to find all MATRECTRANS line records for a given purchase requisition. (polinenum in (select polinenum from prline where prnum=prline.prnum and siteid=prline.siteid) and positeid = pr.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from prline where prnum=:prnum and siteid=:siteid) and ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and positeid = :siteid",
            "cardinality": null
        },
        {
            "name": "PDSPECCLASS",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given pr (pdownerid=:prid and refobjectname='PRLINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:prid and refobjectname='PRLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINESPECCLASS",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given po (pdownerid=:prid and refobjectname='PRLINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:prid and refobjectname='PRLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BILLTOPERSON",
            "target": "PERSON",
            "remarks": "Relationship to the Person  table, used to find all person records for a given purchase requisition . (pr.billtoattn = person.personid). The resulting set will contain zero or more objects.",
            "whereClause": "personid=:billtoattn",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTOPERSON",
            "target": "PERSON",
            "remarks": "Relationship to the Person  table, used to find all person records for a given purchase requisition . (pr.shiptoattn = person.personid). The resulting set will contain zero or more objects.",
            "whereClause": "personid=:shiptoattn",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POFROMPRINPUT",
            "target": "POFROMPRINPUT",
            "remarks": "Relationship to the non-persistent POFromPRInput table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship to the PO line table, used to find all PO line records for a given purchase requisition. (polineid in (select polineid from prline where prnum=pr.prnum and siteid=pr.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid and positeid=poline.siteid) and polinenum in (select polinenum from prline where prnum=:prnum and siteid=:siteid and positeid=poline.siteid and porevisionnum=poline.revisionnum)",
            "cardinality": null
        },
        {
            "name": "PRCHANGESTATUS",
            "target": "PRCHANGESTATUS",
            "remarks": "Relationship to the non-persistent PRChangeStatus table. (There is no where clause for non-persistent objects). The resulting set will contain zero or more objects. Note : PRChangeStatus is a non-persistent MBO with whose help the dialog box binds with the object.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "target": "PRLINE",
            "remarks": "Relationship to the PRLine table, used to find all purchase requisition line records for a given purchase requisition. (prline.prnum = pr.prnum). The resulting set will contain zero or more objects.",
            "whereClause": "prnum=:prnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MKTPRLINE",
            "target": "PRLINE",
            "remarks": "Relationship to the PRLine table used to obtain all PRLines that have the mktplcitem flag set to true (pr.prnum=prline.prnum and prline.mktplcitem=yes).The resulting set will contain zero or more objects",
            "whereClause": "prnum=:prnum and siteid=:siteid and mktplcitem=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRSTATUS",
            "target": "PRSTATUS",
            "remarks": "Relationship to the PRStatus table, used to find all status records for a given purchase requisition. (prstatus.prnum = pr.prnum). The resulting set will contain zero or more objects.",
            "whereClause": "prnum=:prnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRTERM",
            "target": "PRTERM",
            "remarks": "Relationship to the PRTERM table, used to find all pr term records for a given purchase req. (prterm.prnum = pr.prnum). The resulting set will contain zero or more objects.",
            "whereClause": "prnum=:prnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "target": "RFQLINE",
            "remarks": "Relationship to the RFQ line table, used to find all RFQ line records for a given purchase requisition. (polineid in (select polineid from prline where prnum=pr.prnum and siteid=pr.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "rfqlineid in (select rfqlineid from prline where prnum=:prnum and siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "SERVRECTRANS",
            "target": "SERVRECTRANS",
            "remarks": "Relationship to the SERVRECTRANS line table, used to find all SERVRECTRANS line records for a given purchase requisition. (polinenum in (select polinenum from prline where prnum=prline.prnum and siteid=prline.siteid) and positeid = pr.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "polinenum in (select polinenum from prline where prnum=:prnum and siteid=:siteid) and ponum in (select ponum from prline where prnum=:prnum and siteid=:siteid) and positeid = :siteid",
            "cardinality": null
        },
        {
            "name": "SITE",
            "target": "SITE",
            "remarks": "Relationship to the Site table, used to find site records for a given purchase requisition. (site.siteid = pr.siteid and site.orgid = pr.orgid). The resulting set will contain zero or one object.",
            "whereClause": "siteid = :siteid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='PRSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "target": "WFASSIGNMENT",
            "remarks": "Relationship to active assignments on this PR. (ownertable = 'PR' and ownerid = :prid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'PR' and wfassignment.ownerid = :prid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTOOLBAR",
            "target": "WFTOOLBAR",
            "remarks": "Relationship to virutal set that manages the toolbar buttons. (empty). Any number member set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "target": "WFTRANSACTION",
            "remarks": "Relationship to workflow transactions. (ownertable = 'PR' and ownerid = :prid). Zero to many member set.",
            "whereClause": "ownertable = 'PR' and ownerid = :prid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "target": "WORKFLOWMAP",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKLOG",
            "target": "WORKLOG",
            "remarks": "Relationship to the worklog records, used to find the worklog records for a given PR.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "MODIFYWORKLOG",
            "target": "WORKLOG",
            "remarks": "Relationship to the worklog records, used to find the worklog records for a given PR.",
            "whereClause": "recordkey=:prnum and class='PR' and siteid=:siteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PR",
            "source": "MR",
            "remarks": "Relationship to the PR table, used to find all the pr records which were created from this material requisition. (prnum in (select prnum from prline where mrnum = mr.mrnum). The resulting set will contain zero or more objects. Note: Approval of a material requisition creates one or more purchase requisitions and this relationship is used to find all such purchase requisitions.",
            "whereClause": "prnum in (select prnum from prline  where mrnum = :mrnum) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PR",
            "source": "MRLINE",
            "remarks": "Relationship to the PR table, used to find all the pr records whose lines were created from a given material requisition line. (prnum in (select prnum from prline where mrnum = mrline.mrnum and mrlinenum = mrline.mrlinenum). The resulting set will contain zero or more objects.  Note : When a material requisition is approved, its lines are copied to PRLines and this relationship helps find the PR to which these PRLines belong to.",
            "whereClause": "prnum in (select prnum from prline where mrnum = :mrnum and mrlinenum = :mrlinenum) and siteid=:siteid and status not in (select value from synonymdomain where domainid='PRSTATUS' and maxvalue = 'CAN') ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PR",
            "source": "PRLINE",
            "remarks": "Relationship to the PR table, used to find the purchase requisition records to which a purchase requisition line belongs. (prline.prnum = pr.prnum). The resulting set will contain one object.",
            "whereClause": "prnum=:prnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}