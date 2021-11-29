mos = {
    "objectName": "RFQSTATUS",
    "className": "psdi.app.rfq.RFQStatusSet",
    "description": "Request for Quotation Status Change Transaction",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "RFQSTATUSSEQ",
    "primaryKeyColumns": [
        "SITEID",
        "RFQNUM",
        "RFQSTATUSSEQ"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "RFQSTATUS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
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
            "objectName": "SITE",
            "targetObject": "RFQSTATUS",
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
            "remarks": "Request for Quotation (RFQ) Number",
            "sameAsAttribute": "RFQNUM",
            "sameAsObject": "RFQ"
        },
        {
            "attributeName": "RFQSTATUSSEQ",
            "required": true,
            "persistent": true,
            "title": "RFQ Status",
            "remarks": "Internal RFQStatus Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "RFQ Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "RFQ"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date and time when the status last changed.",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "RFQ"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "The person who changed the RFQ's status.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Comments associated with the status change.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
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
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "RFQSTATUS",
            "source": "RFQ",
            "remarks": "Relationship to the RFQStatus table, used to find all status records for a given request for quotation. (rfq.rfqnum = rfqstatus.rfqnum). The resulting set will contain zero or more objects.",
            "whereClause": "rfqnum=:rfqnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}