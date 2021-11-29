mos = {
    "objectName": "SKDPMFORECASTJP",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "SKD PM FORECAST JP",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "SKDPROJECTID",
        "SITEID",
        "PMNUM",
        "LTDPMCOUNTER",
        "ROUTE",
        "ROUTESTOPID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SKDPMFORECASTJP",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPMFORECASTJP",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPMFORECASTJP",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "SKDPMFORECASTJP",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "SKDPMFORECASTJP",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, ROOTANCESTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM''s top-level parent",
            "longDescription": null
        },
        {
            "objectName": "PMFORECASTJP",
            "targetObject": "SKDPMFORECASTJP",
            "parentKeys": "PMFORECASTJPID",
            "targetKeys": "PMFORECASTJPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM Forecast",
            "longDescription": null
        },
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "SKDPMFORECASTJP",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "SITEID, ROUTE, ROUTESTOPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route Stop",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "SKDPMFORECASTJP",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "SITEID, ROUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route forecasted by schedule.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDPMFORECASTJP",
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
            "attributeName": "SKDPROJECTID",
            "required": true,
            "persistent": true,
            "title": "Schedule Project Id",
            "remarks": "Unique identifier of the Schedule",
            "sameAsAttribute": "SKDPROJECTID",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "PMNUM",
            "required": true,
            "persistent": true,
            "title": "PM",
            "remarks": "Identifies the PM",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "LTDPMCOUNTER",
            "required": false,
            "persistent": true,
            "title": "Life To Date Counter",
            "remarks": " Number of work orders generated from the PM since the First Start Date. The counter is set to zero when you insert a new PM record, and increases each time you generate a top-level work order from the PM. If you are using a job plan sequence, the job plan is selected after the counter increments. Life to Date Counter cannot be reset by Set PM Counter.",
            "sameAsAttribute": "PMCOUNTER",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "CREATEBY",
            "required": false,
            "persistent": true,
            "title": "Created By",
            "remarks": "Name of person who created the forecast.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CREATEDATE",
            "required": false,
            "persistent": true,
            "title": "Created Date",
            "remarks": "The Date the Forecast was created",
            "sameAsAttribute": "CREATEDATE",
            "sameAsObject": "PMFORECASTJP"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Person who provided the newdate for the forecast",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "The date the newdate was provided for the forecast",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "PMFORECASTJP"
        },
        {
            "attributeName": "JPNUM",
            "required": false,
            "persistent": true,
            "title": "Job Plan",
            "remarks": "Identifies the job plan associated with this PM Forecast",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "FORECASTSEQNO",
            "required": false,
            "persistent": true,
            "title": "PM forecast sequence Number",
            "remarks": "Unique identifier for a given forecast of a PM",
            "sameAsAttribute": "FORECASTSEQNO",
            "sameAsObject": "PMFORECASTJP"
        },
        {
            "attributeName": "ROOTANCESTOR",
            "required": false,
            "persistent": true,
            "title": "Root Ancestor",
            "remarks": "Top most parent in the hierarchy",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "PMFORECASTJPID",
            "required": false,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": "PMFORECASTJPID",
            "sameAsObject": "PMFORECASTJP"
        },
        {
            "attributeName": "ROUTE",
            "required": false,
            "persistent": true,
            "title": "Route",
            "remarks": "Route Identifier",
            "sameAsAttribute": "ROUTE",
            "sameAsObject": "ROUTES"
        },
        {
            "attributeName": "ROUTESTOPID",
            "required": false,
            "persistent": true,
            "title": "Stop Added to Route",
            "remarks": "Identifies a stop record added to a route.",
            "sameAsAttribute": "ROUTESTOPID",
            "sameAsObject": "ROUTE_STOP"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDPMFORECASTJP",
            "source": "SKDPROJECT",
            "remarks": "Relationship to skdpmforecastjp records, used to find skdpmforecastjp records for a given skdproject.",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        }
    ]
}