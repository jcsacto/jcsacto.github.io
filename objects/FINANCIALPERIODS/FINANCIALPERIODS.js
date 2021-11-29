mos = {
    "objectName": "FINANCIALPERIODS",
    "className": "psdi.app.financial.FinancialPeriodsSet",
    "description": "The Financial Periods Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "FINANCIALPERIODSID",
    "primaryKeyColumns": [
        "ORGID",
        "FINANCIALPERIOD"
    ],
    "logicalRelationships": [
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "DEPTRANS",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "INVOICE",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "INVOICETRANS",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "INVTRANS",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "INVUSELINE",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "INVUSELINE",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "TOORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
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
            "objectName": "FINANCIALPERIODS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "TOOLTRANS",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "FINANCIALPERIODS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "FINANCIALPERIODS",
            "parentKeys": "PERSONID",
            "targetKeys": "CLOSEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who closed the financial period.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "FINANCIALPERIOD",
            "required": true,
            "persistent": true,
            "title": "Period",
            "remarks": "Identifier of the financial period. Format should correspond to the requirements of the accounting system.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERIODSTART",
            "required": true,
            "persistent": true,
            "title": "Start Period",
            "remarks": "Start date of financial period. Current date if there are no existing financial periods. If financial periods already exist, MAXIMO inserts the date shown in the To field of the last period.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERIODEND",
            "required": true,
            "persistent": true,
            "title": "End Period",
            "remarks": "End date for financial period. The first moment at which the financial period is invalid.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLOSEDBY",
            "required": false,
            "persistent": true,
            "title": "Closed By",
            "remarks": "MAXIMO automatically inserts the name of the user who enters the Actual Close Date.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CLOSEDATE",
            "required": false,
            "persistent": true,
            "title": "Actual Close Date",
            "remarks": "Date that a user closes the financial period. This can be on or after the date in the Accounting Close Date field, but not before it. Until this date is entered, the other dates can be modified. After this date is entered, the period information is read-only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERIODCLOSEDATE",
            "required": false,
            "persistent": true,
            "title": "Accounting Close Date",
            "remarks": "This is the date after which no further transactions can be charged to that accounting period. For example, an Accounting Period \"X\" is from 2/1/2008 to 3/1/2008, with an Accounting Close Date of 3/15/2008. A transaction that occurred on 2/15/2008 (within the period) can be entered into the system and charged to the period on 3/14/2008 because it is after the end date but before the Accounting Close Date. After this date, no further transactions can be charged to the period.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "FINANCIALPERIODSID",
            "required": true,
            "persistent": true,
            "title": "FINANCIALPERIODSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "FINANCIALPERIODS",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the FinancialPeriods table, used to find all financial periods records for a given organization. (organization.orgid = financialperiods.orgid). The resulting set will contain one or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}