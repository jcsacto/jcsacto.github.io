mos = {
    "objectName": "DEPSCHEDPERIODS",
    "className": "psdi.app.asset.DepSchedPeriodsSet",
    "description": "The periods in a depreciation schedule",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DEPSCHEDPERIODSID",
    "primaryKeyColumns": [
        "ORGID",
        "DEPSCHEDNUM",
        "PERIODNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "DEPSCHEDPERIODS",
            "targetObject": "DEPTRANS",
            "parentKeys": "ORGID, DEPSCHEDNUM, PERIODNUM",
            "targetKeys": "ORGID, DEPSCHEDNUM, PERIODNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Periods in a depreciation schedule",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "DEPSCHEDPERIODS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 99",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CURRENTVALUE",
            "required": false,
            "persistent": true,
            "title": "Depreciated Value",
            "remarks": "Current value of the asset in this depreciation period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPAMT",
            "required": false,
            "persistent": true,
            "title": "Depreciation Amount",
            "remarks": "Amount the asset will depreciate in this period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPDATE",
            "required": false,
            "persistent": true,
            "title": "Date",
            "remarks": "Date when this depreciation period becomes valid",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPMETERLTD",
            "required": false,
            "persistent": true,
            "title": "Meter Life to Date",
            "remarks": "Meter life-to-date reading that is the starting point for this depreciation period. This period becomes valid when the asset reaches this meter life-to-date reading",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "GLTRANSCREATED",
            "required": true,
            "persistent": true,
            "title": "Transaction Created",
            "remarks": "Indicates that a GL transaction was created for this depreciation period",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "PERIODNUM",
            "required": false,
            "persistent": true,
            "title": "Period",
            "remarks": "System-generated sequential number that identifies the period in the depreciation schedule",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECALCPOINT",
            "required": true,
            "persistent": false,
            "title": "Recalculation Point",
            "remarks": "Specifies whether this record in the depreciation schedule should be the recalculation point. When you recalculate an existing depreciation schedule, this is the point from which the recalculation will occur. Records prior to this point in the depreciation schedule will be retained. All records in the schedule from this point forward will be deleted. The new schedule that the system calculates is based on the current, updated, parameters. The new schedule will be appended to the part of the schedule, prior to the recalculation point, that is retained",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALDEP",
            "required": false,
            "persistent": true,
            "title": "Total Depreciation",
            "remarks": "Total depreciation amount for this asset up to and including this period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPSCHEDPERIODSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DEPSCHEDPERIODS",
            "source": "DEPSCHED",
            "remarks": "Relationship to the DEPSCHEDPERIODS object.",
            "whereClause": "depschednum=:depschednum and orgid=:orgid",
            "cardinality": null
        }
    ]
}