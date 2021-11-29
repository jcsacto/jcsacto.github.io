mos = {
    "objectName": "RFQ",
    "className": "psdi.app.rfq.RFQSet",
    "description": "Request for Quotation (RFQ)",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "RFQID",
    "primaryKeyColumns": [
        "SITEID",
        "RFQNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "RFQ",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, RFQNUM",
            "targetKeys": "POSITEID, RFQNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "RFQ",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, RFQNUM",
            "targetKeys": "SITEID, RFQNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "RFQ",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "SITEID, RFQNUM",
            "targetKeys": "SITEID, RFQNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "RFQ",
            "longDescription": null
        },
        {
            "objectName": "RFQ",
            "targetObject": "RFQLINE",
            "parentKeys": "SITEID, RFQNUM",
            "targetKeys": "SITEID, RFQNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "RFQ",
            "longDescription": null
        },
        {
            "objectName": "RFQ",
            "targetObject": "RFQSTATUS",
            "parentKeys": "SITEID, RFQNUM",
            "targetKeys": "SITEID, RFQNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "RFQ",
            "targetObject": "RFQTERM",
            "parentKeys": "SITEID, RFQNUM",
            "targetKeys": "SITEID, RFQNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "RFQ",
            "longDescription": null
        },
        {
            "objectName": "RFQ",
            "targetObject": "RFQVENDOR",
            "parentKeys": "SITEID, RFQNUM",
            "targetKeys": "SITEID, RFQNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "RFQ",
            "longDescription": null
        },
        {
            "objectName": "RFQ",
            "targetObject": "RFQVENDORTERM",
            "parentKeys": "SITEID, RFQNUM",
            "targetKeys": "SITEID, RFQNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "RFQ",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ADDRESS",
            "targetObject": "RFQ",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, BILLTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bill To Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "RFQ",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, BUYERCOMPANY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Buyer Company Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "RFQ",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, REPLYTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reply To Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "RFQ",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SHIPTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Address",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "RFQ",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "RFQ",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQ",
            "parentKeys": "PERSONID",
            "targetKeys": "BILLTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bill To Attention",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQ",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQ",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQ",
            "parentKeys": "PERSONID",
            "targetKeys": "PURCHASEAGENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Agent",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQ",
            "parentKeys": "PERSONID",
            "targetKeys": "REPLYTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reply To Attention",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQ",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQ",
            "parentKeys": "PERSONID",
            "targetKeys": "SHIPTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Attention",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RFQ",
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
            "attributeName": "RFQNUM",
            "required": true,
            "persistent": true,
            "title": "RFQ",
            "remarks": "Identifies the request for quotation record. This value must be unique for all RFQ records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the request for quotation. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Current status of the RFQ.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date and time that the RFQ status was last changed. The default is the system date and time at the time of the status change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERDATE",
            "required": false,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "Date and Time when RFQ was entered",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERBY",
            "required": false,
            "persistent": true,
            "title": "Entered By",
            "remarks": "The person who entered the RFQ. The default value is the current login ID.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "REPLYDATE",
            "required": false,
            "persistent": true,
            "title": "Reply Date",
            "remarks": "Date by which the vendor should reply to the RFQ.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLOSEONDATE",
            "required": false,
            "persistent": true,
            "title": "Close Date",
            "remarks": "Date when no further quotations will be accepted from vendors.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PURCHASEAGENT",
            "required": false,
            "persistent": true,
            "title": "Buyer",
            "remarks": "Purchasing agent responsible for ordering the items.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "RFQTYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Identifies the RFQ type. For example, new project, extension, renewal, etc.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIREDDATE",
            "required": false,
            "persistent": true,
            "title": "Required Date",
            "remarks": "Date when the RFQ line items are needed.",
            "sameAsAttribute": "REQUIREDDATE",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "REQUESTEDBY",
            "required": false,
            "persistent": true,
            "title": "Requested By",
            "remarks": "Person who requested the vendor quotation. The default value is the current login ID.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
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
            "remarks": "Company or division to send bill to",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "BILLTOATTN",
            "required": false,
            "persistent": true,
            "title": "Attention",
            "remarks": "Bill to attention",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "REPLYTO",
            "required": false,
            "persistent": true,
            "title": "Reply To",
            "remarks": "Address code where the quotation reply should be sent.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "REPLYTOATTN",
            "required": false,
            "persistent": true,
            "title": "Attention",
            "remarks": "Person to whom the quotation reply should be sent.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
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
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Name of person that changed RFQ",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Datetime RFQ last changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIORITY",
            "required": true,
            "persistent": true,
            "title": "Priority",
            "remarks": "Priority level used to determine the order in which quotations should be processed. We recommend that limit your range of values from 0 to 9, where 0 is the lowest priority. The default value is 0.",
            "sameAsAttribute": "PRIORITY",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "HISTORYFLAG",
            "required": true,
            "persistent": true,
            "title": "History",
            "remarks": "History Flag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RFQ1",
            "required": false,
            "persistent": true,
            "title": "Rfq1",
            "remarks": "Crossover from PR extra field 01",
            "sameAsAttribute": "PR1",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "RFQ2",
            "required": false,
            "persistent": true,
            "title": "Rfq2",
            "remarks": "Crossover from PR extra field 02",
            "sameAsAttribute": "PR2",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "RFQ3",
            "required": false,
            "persistent": true,
            "title": "Rfq3",
            "remarks": "Crossover from PR extra field 03",
            "sameAsAttribute": "PR3",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "RFQ4",
            "required": false,
            "persistent": true,
            "title": "Rfq4",
            "remarks": "Crossover from PR extra field 04",
            "sameAsAttribute": "PR4",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "RFQ5",
            "required": false,
            "persistent": true,
            "title": "Rfq5",
            "remarks": "Crossover from PR extra field 05",
            "sameAsAttribute": "PR5",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "RFQ6",
            "required": false,
            "persistent": true,
            "title": "Rfq6",
            "remarks": "Crossover from PR extra field 06",
            "sameAsAttribute": "PR6",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "RFQ7",
            "required": false,
            "persistent": true,
            "title": "Rfq7",
            "remarks": "Crossover from PR extra field 07",
            "sameAsAttribute": "PR7",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "RFQ8",
            "required": false,
            "persistent": true,
            "title": "Rfq8",
            "remarks": "Crossover from PR extra field 08",
            "sameAsAttribute": "PR8",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "RFQ9",
            "required": false,
            "persistent": true,
            "title": "Rfq9",
            "remarks": "Crossover from PR extra field 09",
            "sameAsAttribute": "PR9",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "RFQ10",
            "required": true,
            "persistent": true,
            "title": "Rfq10",
            "remarks": "Crossover from PR extra field 10",
            "sameAsAttribute": "PR10",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PRINTDATE",
            "required": false,
            "persistent": true,
            "title": "Printed Date",
            "remarks": "Date the RFQ was printed and sent to the vendor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUYERCOMPANY",
            "required": false,
            "persistent": true,
            "title": "Buyer Company",
            "remarks": "Buyers Company links the buyers address information to the order",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
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
            "remarks": "Site where the RFQ was entered.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for RFQ Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREIGHTTERMS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Freight Terms Long Description",
            "remarks": "Long Description for Requested Freight terms",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RFQID",
            "required": true,
            "persistent": true,
            "title": "RFQID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "name": "BILLTO",
            "target": "ADDRESS",
            "remarks": "Relationship to the Address table, used to find all bill to address records for a given request for quotation. (address.addresscode = rfq.billto). The resulting set will contain one object.",
            "whereClause": "addresscode = :billto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPLYTOADDRESS",
            "target": "ADDRESS",
            "remarks": "Relationship to the Address table, used to find all reply to address records for a given request for quotation. (address.addresscode = rfq.replyto).  The resulting set will contain one object.",
            "whereClause": "addresscode = :replyto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTOADDRESS",
            "target": "ADDRESS",
            "remarks": "Relationship to the Address table, used to find all ship to address records for a given request for quotation. (address.addresscode = rfq.shipto). The resulting set will contain one object.",
            "whereClause": "addresscode = :shipto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ_BILLTO",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company=:billto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ_BUYERCOMPANY",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company=:buyercompany and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ_REPLYTO",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company=:replyto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ_SHIPTO",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company=:shipto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given request for quotation. (doclinks.keytable = 'RFQ' and doclinks.keycolumn = 'RFQNUM' and doclinks.keyvalue = rfq.rfqnum$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects. Note: The RFQ.RFQNum field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable='RFQ' and ownerid=:rfqid) or (ownertable = 'COMPANIES' and ownerid in (select companiesid from companies where company in (select vendor from rfqvendor where rfqnum=:rfqnum and orgid=:orgid))) or (ownertable = 'MRLINE' and ownerid in (select mrlineid from mrline where mrnum in (select mrnum from rfqline where rfqnum=:rfqnum and siteid=:siteid))) or (ownertable = 'PR' and ownerid in (select prid from pr where prnum in (select prnum from prline where rfqnum=:rfqnum and siteid=:siteid)))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the RFQ to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ_REQUESTEDBY",
            "target": "LABOR",
            "remarks": null,
            "whereClause": "laborcode =:requestedby and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ_ENTERBY",
            "target": "LABOR",
            "remarks": null,
            "whereClause": "laborcode=:enterby and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPLYTOATTN",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find all reply to attention records for a given request for quotation. (labor.laborcode = rfq.replytoattn). The resulting set will contain one object.",
            "whereClause": "laborcode = :replytoattn and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTOATTN",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find all ship to attention records for a given request for quotation. (labor.laborcode = rfq.shiptoattn). The resulting set will contain one object.",
            "whereClause": "laborcode = :shiptoattn and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINESPECCLASS",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given rfq (pdownerid=:rfqid and refobjectname='RFQLINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:rfqid and refobjectname='RFQLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PDSPECCLASS",
            "target": "PDSPEC",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given rfq (pdownerid=:rfqid and refobjectname='RFQLINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:rfqid and refobjectname='RFQLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPLYTOPERSON",
            "target": "PERSON",
            "remarks": "Relationship to the Person table, used to find all person records for a given request for quotation. (rfq.replytoattn = person.personid). The resulting set will contain zero or more objects.",
            "whereClause": "personid=:replytoattn",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTOPERSON",
            "target": "PERSON",
            "remarks": "Relationship to the Person table, used to find all person records for a given request for quotation. (rfq.shiptoattn = person.personid). The resulting set will contain zero or more objects.",
            "whereClause": "personid=:shiptoattn",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "target": "PRLINE",
            "remarks": "Relationship to the PRLine table, used to find all purchase requisition line records for a given request for quotation. (rfq.rfqnum = prline.rfqnum). The resulting set will contain zero or more objects.",
            "whereClause": "rfqnum=:rfqnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQCHANGESTATUS",
            "target": "RFQCHANGESTATUS",
            "remarks": "Relationship to the non-persistent RFQChangeStatus table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Change Status action page to change the status of a given request for quotation.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "target": "RFQLINE",
            "remarks": "Relationship to the RFQLine table, used to find all request for quotation line records for a given request for quotation. (rfq.rfqnum = rfqline.rfqnum). The resulting set will contain zero or more objects.",
            "whereClause": "rfqnum=:rfqnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQSTATUS",
            "target": "RFQSTATUS",
            "remarks": "Relationship to the RFQStatus table, used to find all status records for a given request for quotation. (rfq.rfqnum = rfqstatus.rfqnum). The resulting set will contain zero or more objects.",
            "whereClause": "rfqnum=:rfqnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQTERM",
            "target": "RFQTERM",
            "remarks": "Relationship to the RFQTERM table, used to find all rfq term records for a given request for quotation. (rfqterm.rfqnum = rfq.rfqnum). The resulting set will contain zero or more objects.",
            "whereClause": "rfqnum=:rfqnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQVENDOR",
            "target": "RFQVENDOR",
            "remarks": "Relationship to the RFQVendor table, used to find all vendor records for a given request for quotation. (rfq.rfqnum = rfqvendor.rfqnum). The resulting set will contain zero or more objects.",
            "whereClause": "rfqnum=:rfqnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "target": "SITE",
            "remarks": "Relationship to the Site table, used to find site records for a given request for quotation. (site.siteid = rfq.siteid and site.orgid = rfq.orgid). The resulting set will contain zero or one object.",
            "whereClause": "siteid = :siteid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='RFQSTAT' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "target": "WFASSIGNMENT",
            "remarks": "Relationship to active assignments on this RFQ. (ownertable = 'RFQ' and ownerid = :rfqid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'RFQ' and wfassignment.ownerid = :rfqid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
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
            "remarks": "Relationship to workflow transactions. (ownertable = 'RFQ' and ownerid = :rfqid). Zero to many member set.",
            "whereClause": "ownertable = 'RFQ' and ownerid = :rfqid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "target": "WORKFLOWMAP",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RFQ",
            "source": "MR",
            "remarks": "Relationship to the RFQ table, used to find the rfq records which have been created from the purchase requisition. (rfqnum in (select rfqnum from rfqline where mrnum = mr.mrnum). The resulting set will contain zero or more objects.  Note: The approval of material requisition creates one or more purchase requisitions. A Request for Quotation may be created from a purchase requisition if desired and this relationship is used to find all such RFQs.",
            "whereClause": "rfqnum in (select rfqnum from rfqline where mrnum = :mrnum) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ",
            "source": "MRLINE",
            "remarks": "Relationship to the RFQ table, used to find all the rfq records for a given material requisition line. (rfqnum in (select rfqnum from rfqline where mrnum = mrline.mrnum and mrlinenum = mrline.mrlinenum). The resulting set will contain zero or more objects. Note: The approval of material requisition creates one or more purchase requisitions. A Request for Quotation may be created from a purchase requisition if desired and this relationship is used to find all such RFQs.",
            "whereClause": "rfqnum in (select rfqnum from rfqline where mrnum = :mrnum and mrlinenum = :mrlinenum) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ",
            "source": "QUOTATIONLINE",
            "remarks": "Relationship to the RFQ table, used to find all request for quotation records for a given quotation line. (quotationline.rfqnum = rfq.rfqnum). The resulting set will contain zero or one object.",
            "whereClause": "rfqnum = :rfqnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ",
            "source": "RFQLINE",
            "remarks": "Relationship to the RFQ table, used to find all request for quotation records for a given request for quotation line. (rfqline.rfqnum = rfq.rfqnum). The resulting set will contain one object.",
            "whereClause": "rfqnum=:rfqnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}