mos = {
    "objectName": "PMSEASONS",
    "className": "psdi.app.pm.PMSeasonsSet",
    "description": "The PM Active SeasonalDates",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PMSEASONSID",
    "primaryKeyColumns": [
        "PMNUM",
        "STARTDAY",
        "STARTMONTH",
        "ENDDAY",
        "ENDMONTH",
        "SITEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PMSEASONS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PMSEASONS",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Season defined for a PM",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PMSEASONS",
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
            "attributeName": "PMSEASONSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMNUM",
            "required": true,
            "persistent": true,
            "title": "PM",
            "remarks": "Unique Identifier For PM",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "STARTMONTH",
            "required": true,
            "persistent": true,
            "title": "Start Month",
            "remarks": "Identifies the seasonal start month of a PM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDAY",
            "required": true,
            "persistent": true,
            "title": "Start Day",
            "remarks": "Identifies the day of the month when the PM becomes active. The PM remains active until the end month and day is reached.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDMONTH",
            "required": true,
            "persistent": true,
            "title": "End Month",
            "remarks": "Identifies the season end month of a PM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDAY",
            "required": true,
            "persistent": true,
            "title": "End Day",
            "remarks": "Identifies the day of the month when the PM becomes inactive. The PM becomes inactive when the end month and day is reached.",
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
            "name": "PMSEASONS",
            "source": "PM",
            "remarks": "Relationship to the PM's PMSEASONS records, used to find all the PMSEASONS DATES for a given PM. (PMSEASONS.pmnum = pm.pmnum). The resulting set will contain zero or more record.",
            "whereClause": "pmnum = :pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}