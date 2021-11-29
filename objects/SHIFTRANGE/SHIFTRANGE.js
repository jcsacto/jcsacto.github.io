mos = {
    "objectName": "SHIFTRANGE",
    "className": "psdi.app.calendar.virtual.ShiftRangeSet",
    "description": "to store range start and end dates for apply shift",
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
            "attributeName": "RANGESTARTDATE",
            "required": false,
            "persistent": false,
            "title": "StartDate",
            "remarks": "start date of the range",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RANGEENDDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "End date of shift  range",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USECALENDATES",
            "required": true,
            "persistent": false,
            "title": "flag",
            "remarks": "flag to choose range dates or apply shift to the whole calendar",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIFTNUM",
            "required": false,
            "persistent": false,
            "title": "SHIFTNUM",
            "remarks": "name of the shift",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "IORGID",
            "remarks": "name of the organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SHIFTORGFORSHIFTRANGE",
            "source": "SHIFT",
            "remarks": null,
            "whereClause": "shiftnum=:shiftnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}