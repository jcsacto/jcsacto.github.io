mos = {
    "objectName": "WOCHANGESTATUS",
    "className": "psdi.app.workorder.virtual.WOChangeStatusSet",
    "description": "Parameters for Work Order Change Status",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": false,
            "title": "New Status",
            "remarks": "Change to Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ASOFDATE",
            "required": true,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Date of the status change",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "WOSTATUS"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo for status change",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "CHILDSTATUS",
            "required": true,
            "persistent": false,
            "title": "Child Status",
            "remarks": "Does child workorder status need be changed?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SINGLEWO",
            "required": true,
            "persistent": false,
            "title": "Single Work Order ",
            "remarks": "Used by the application to tell the set that there is a single WO",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Work Order Number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "WOSTATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "Current Work Order Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Work Order Task Identifier",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Work Order Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "LANGCODE",
            "required": false,
            "persistent": false,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRINTREPORT",
            "required": true,
            "persistent": false,
            "title": "Print or Email Work Order Report when change status in background selected",
            "remarks": "Check box indicating if the records selected should print or Email Work Order Report when change status in background selected.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTNAME",
            "required": true,
            "persistent": false,
            "title": "Report Name",
            "remarks": "The report that will be printed if the printreport flag is enabled.",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "ASYNC",
            "required": true,
            "persistent": false,
            "title": "Change work order status in back ground",
            "remarks": "if true, Change work order status in back ground",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOEMAILADDR",
            "required": false,
            "persistent": false,
            "title": "Notification E-mail for Work Order Change Status",
            "remarks": "Notification E-mail for Work Order Change Status",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "GENSTATUSACTION",
            "required": true,
            "persistent": false,
            "title": "From general change status action",
            "remarks": "From general change status action",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='WOSTATUS' and value=:wostatus and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WOCHANGESTATUS",
            "source": "WORKORDER",
            "remarks": "Relationship to the nonpersistent parameter set for changing work order status.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}