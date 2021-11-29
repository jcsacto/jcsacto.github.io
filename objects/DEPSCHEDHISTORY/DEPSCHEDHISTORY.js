mos = {
    "objectName": "DEPSCHEDHISTORY",
    "className": "psdi.app.asset.DepSchedHistorySet",
    "description": "The history of an asset's depreciation schedules",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DEPSCHEDHISTORYID",
    "primaryKeyColumns": [
        "ORGID",
        "DEPRECIATIONNUM",
        "DEPSCHEDNUM",
        "CHANGEDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CHARTOFACCOUNTS",
            "targetObject": "DEPSCHEDHISTORY",
            "parentKeys": "ORGID, GLACCOUNT",
            "targetKeys": "ORGID, GLCREDITACCT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Credit Account",
            "longDescription": null
        },
        {
            "objectName": "CHARTOFACCOUNTS",
            "targetObject": "DEPSCHEDHISTORY",
            "parentKeys": "ORGID, GLACCOUNT",
            "targetKeys": "ORGID, GLDEBITACCT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Debit Account",
            "longDescription": null
        },
        {
            "objectName": "DEPRECIATION",
            "targetObject": "DEPSCHEDHISTORY",
            "parentKeys": "ORGID, DEPRECIATIONNUM",
            "targetKeys": "ORGID, DEPRECIATIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Depreciation Schedule History",
            "longDescription": null
        },
        {
            "objectName": "DEPSCHED",
            "targetObject": "DEPSCHEDHISTORY",
            "parentKeys": "ORGID, DEPRECIATIONNUM, DEPSCHEDNUM",
            "targetKeys": "ORGID, DEPRECIATIONNUM, DEPSCHEDNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The history of an asset''s depreciation schedules",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "DEPSCHEDHISTORY",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset meter used to calculate depreciation.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "DEPSCHEDHISTORY",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 98",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CALCDAY",
            "required": false,
            "persistent": true,
            "title": "Calculation Day",
            "remarks": "The day depreciation periods are calculated. Choices are first, last, or middle",
            "sameAsAttribute": "CALCDAY",
            "sameAsObject": "DEPSCHED"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Date that the depreciation schedule changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEGLTRANS",
            "required": false,
            "persistent": true,
            "title": "Create GL Transactions",
            "remarks": "Indicates that GL transactions will be generated for the depreciation periods in this schedule when their date or meter reading are reached",
            "sameAsAttribute": "CREATEGLTRANS",
            "sameAsObject": "DEPSCHED"
        },
        {
            "attributeName": "DEPRECIATIONNUM",
            "required": true,
            "persistent": true,
            "title": "Depreciation ID",
            "remarks": "ID of the depreciation",
            "sameAsAttribute": "DEPRECIATIONNUM",
            "sameAsObject": "DEPRECIATION"
        },
        {
            "attributeName": "DEPSCHEDNUM",
            "required": true,
            "persistent": true,
            "title": "Schedule",
            "remarks": "ID of the depreciation schedule",
            "sameAsAttribute": "DEPSCHEDNUM",
            "sameAsObject": "DEPSCHED"
        },
        {
            "attributeName": "EXPECTEDLIFE",
            "required": false,
            "persistent": true,
            "title": "Expected Life",
            "remarks": "Expected life of the asset in the units, such as miles, specified in the associated Meter Units field. The value in this field, together with the value in the Meter Units field, specifies the expected life of the asset. For example, 100,000 miles",
            "sameAsAttribute": "EXPECTEDLIFE",
            "sameAsObject": "DEPSCHED"
        },
        {
            "attributeName": "EXPECTEDLIFEUOM",
            "required": false,
            "persistent": true,
            "title": "Period Units",
            "remarks": "Time unit of measure for the depreciation schedule of the asset, such as months or years. The value in this field, along with the value in the Number of Periods field, specifies the expected life of the asset. For example, 8 years",
            "sameAsAttribute": "EXPECTEDLIFEUOM",
            "sameAsObject": "DEPSCHED"
        },
        {
            "attributeName": "FINANCIAL",
            "required": false,
            "persistent": true,
            "title": "Financial Schedule",
            "remarks": "Indicated that the depreciation schedule defines the financial value of the asset",
            "sameAsAttribute": "FINANCIAL",
            "sameAsObject": "DEPSCHED"
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "The account that is credited with the depreciation transaction",
            "sameAsAttribute": "GLACCOUNT",
            "sameAsObject": "CHARTOFACCOUNTS"
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "The account that is debited with the depreciation transaction",
            "sameAsAttribute": "GLACCOUNT",
            "sameAsObject": "CHARTOFACCOUNTS"
        },
        {
            "attributeName": "METERNAME",
            "required": false,
            "persistent": true,
            "title": "Meter",
            "remarks": "Asset meter that is used to calculate depreciation. If the Depreciation Period Type field is set to Meter, the specified meter's units are used to determine the expected life of the asset and the current depreciated value",
            "sameAsAttribute": "METERNAME",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "METERSTART",
            "required": false,
            "persistent": true,
            "title": "Starting Reading",
            "remarks": "Starting life-to-date reading for the meter that is used to calculate depreciation",
            "sameAsAttribute": "METERSTART",
            "sameAsObject": "DEPSCHED"
        },
        {
            "attributeName": "METHOD",
            "required": false,
            "persistent": true,
            "title": "Method",
            "remarks": "Depreciation method that is used to calculate the depreciation schedule",
            "sameAsAttribute": "METHOD",
            "sameAsObject": "DEPSCHED"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "ID of the organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "PERIODS",
            "required": false,
            "persistent": true,
            "title": "Periods",
            "remarks": "The number of periods in the depreciation schedule",
            "sameAsAttribute": "PERIODS",
            "sameAsObject": "DEPSCHED"
        },
        {
            "attributeName": "PERIODTYPE",
            "required": false,
            "persistent": true,
            "title": "Period Type",
            "remarks": "Specifies whether the depreciation schedule is based on time or on usage (a meter)",
            "sameAsAttribute": "PERIODTYPE",
            "sameAsObject": "DEPSCHED"
        },
        {
            "attributeName": "RATIO",
            "required": false,
            "persistent": true,
            "title": "Ratio",
            "remarks": "If there is more than one schedule defined for this asset, the ratio used to determine the amount of this schedule's periods that will be used to calculate the asset's total current value.  The total of values in this field across all schedules for this asset must equal 100",
            "sameAsAttribute": "RATIO",
            "sameAsObject": "DEPSCHED"
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Date that depreciation on the asset begins",
            "sameAsAttribute": "STARTDATE",
            "sameAsObject": "DEPSCHED"
        },
        {
            "attributeName": "DEPSCHEDHISTORYID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "METER",
            "target": "METER",
            "remarks": " Relationship to METER table",
            "whereClause": "metername = :metername",
            "cardinality": null
        },
        {
            "name": "CALCDAY",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to get The Calculation Day",
            "whereClause": "domainid = 'DEPCALCDAY' and value = :CALCDAY",
            "cardinality": null
        },
        {
            "name": "DEPMETHOD",
            "target": "SYNONYMDOMAIN",
            "remarks": "Description of specified depreciation method",
            "whereClause": "domainid='DEPMETHOD' and value=:method",
            "cardinality": null
        },
        {
            "name": "DEPPERIODTYPE",
            "target": "SYNONYMDOMAIN",
            "remarks": "Description of specified depreciation period type",
            "whereClause": "domainid='DEPPERIODTYPE' and value=:periodtype",
            "cardinality": null
        },
        {
            "name": "EXPECTEDLIFEUOM",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to get THE Period Units",
            "whereClause": "domainid = 'DEPEXPLIFEUOM' and value = :EXPECTEDLIFEUOM",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DEPSCHEDHISTORY",
            "source": "DEPHISTORY",
            "remarks": "Relationship to the DEPSCHEDHISTORY object.",
            "whereClause": "depreciationnum=:depreciationnum and orgid=:orgid",
            "cardinality": null
        }
    ]
}