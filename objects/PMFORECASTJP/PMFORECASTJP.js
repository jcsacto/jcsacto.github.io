mos = {
    "objectName": "PMFORECASTJP",
    "className": "psdi.app.pm.PMForecastJPSet",
    "description": "Stores PM forecast Job plans and LtdPMCounter",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PMFORECASTJPID",
    "primaryKeyColumns": [
        "SITEID",
        "PMNUM",
        "LTDPMCOUNTER",
        "ROUTE",
        "ROUTESTOPID"
    ],
    "logicalRelationships": [
        {
            "objectName": "PMFORECASTJP",
            "targetObject": "PMFORECASTLABOR",
            "parentKeys": "PMFORECASTJPID",
            "targetKeys": "PMFORECASTJPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM Forecast Job Plan",
            "longDescription": null
        },
        {
            "objectName": "PMFORECASTJP",
            "targetObject": "PMFORECASTMATERIAL",
            "parentKeys": "PMFORECASTJPID",
            "targetKeys": "PMFORECASTJPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM Forecast Job Plan",
            "longDescription": null
        },
        {
            "objectName": "PMFORECASTJP",
            "targetObject": "PMFORECASTSERVICE",
            "parentKeys": "PMFORECASTJPID",
            "targetKeys": "PMFORECASTJPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM Forecast Job Plan",
            "longDescription": null
        },
        {
            "objectName": "PMFORECASTJP",
            "targetObject": "PMFORECASTTOOL",
            "parentKeys": "PMFORECASTJPID",
            "targetKeys": "PMFORECASTJPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM Forecast Job Plan",
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
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PMFORECASTJP",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PMFORECASTJP",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PMFORECASTJP",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PMFORECASTJP",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plans forecasted by PMs",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PMFORECASTJP",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, ROOTANCESTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM",
            "longDescription": null
        },
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "PMFORECASTJP",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "SITEID, ROUTE, ROUTESTOPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM Forecast Jbo Plan Route Stop",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "PMFORECASTJP",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "SITEID, ROUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route forecasted by PM",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PMFORECASTJP",
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
            "required": true,
            "persistent": true,
            "title": "Life To Date Counter",
            "remarks": "Number of work orders generated from the PM since the First Start Date. The counter is set to zero when you insert a new PM record, and increases each time you generate a top-level work order from the PM. If you are using a job plan sequence, the job plan is selected after the counter increments. Life to Date Counter cannot be reset by Set PM Counter.",
            "sameAsAttribute": "PMCOUNTER",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "CREATEBY",
            "required": true,
            "persistent": true,
            "title": "Created By",
            "remarks": "Name of person who created the forecast.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "The Date the Forecast was created",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "FORECASTSEQNO",
            "required": true,
            "persistent": true,
            "title": "PM forecast sequence Number",
            "remarks": "Unique identifier for a given forecast of a PM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROOTANCESTOR",
            "required": true,
            "persistent": true,
            "title": "Root Ancestor",
            "remarks": "Top most parent in the hierarchy",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "PMFORECASTJPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROUTE",
            "required": false,
            "persistent": true,
            "title": "Route",
            "remarks": "Identifies the route that is associated with the job plan of this PM forecast.",
            "sameAsAttribute": "ROUTE",
            "sameAsObject": "ROUTES"
        },
        {
            "attributeName": "ROUTESTOPID",
            "required": false,
            "persistent": true,
            "title": "Route Stop",
            "remarks": "Identifies a stop on a route.",
            "sameAsAttribute": "ROUTESTOPID",
            "sameAsObject": "ROUTE_STOP"
        },
        {
            "attributeName": "TOTALLABHRS",
            "required": false,
            "persistent": true,
            "title": "Total Labor Hours",
            "remarks": "Total labor hours for this forecast segment.",
            "sameAsAttribute": "LABORHRS",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "TOTALLABCOST",
            "required": false,
            "persistent": true,
            "title": "Total Labor Cost",
            "remarks": "Total labor cost for this forecast segment.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "TOTALMATCOST",
            "required": false,
            "persistent": true,
            "title": "Total Material Cost",
            "remarks": "Total material cost for this forecast segment.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "TOTALTOOLCOST",
            "required": false,
            "persistent": true,
            "title": "Total Tool Cost",
            "remarks": "Total tool cost for this forecast segment.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "TOTALSERVCOST",
            "required": false,
            "persistent": true,
            "title": "Total Service Cost",
            "remarks": "Total service cost for this forecast segment.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "TOTALCOST",
            "required": false,
            "persistent": true,
            "title": "Total Cost",
            "remarks": "Total cost for this forecast segment.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "NESTEDJP",
            "required": true,
            "persistent": true,
            "title": "Nested Job Plan",
            "remarks": "Identifies the nested job plan that is associated with this PM forecast.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "JOBPLAN",
            "target": "JOBPLAN",
            "remarks": "Relationship to the PMFORECASTJP's Jobplan records, used to find the jobplan records for a given PMForecastJP.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null) or (:orgid is null and :siteid is null) or (:orgid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": null
        },
        {
            "name": "PMFORECAST",
            "target": "PMFORECAST",
            "remarks": "Relationship to PMFORECAST table, used to get PMForecast records for a given forecastseqno.",
            "whereClause": "pmnum=:rootancestor and siteid=:siteid and forecastseqno=:forecastseqno",
            "cardinality": null
        },
        {
            "name": "PMFORECASTDATEROUTE",
            "target": "PMFORECAST",
            "remarks": "Relationship to the PMForecast table, used to get the forecasts records for top level PM of a given PM.",
            "whereClause": "pmnum=:rootancestor and siteid=:siteid and ltdpmcounter=:ltdpmcounter",
            "cardinality": null
        },
        {
            "name": "ROOTANCESTORPMFORECAST",
            "target": "PMFORECAST",
            "remarks": "Relationship to the PMForecast table, used to get the forecast for top level PM of a given PM.",
            "whereClause": "pmnum=:rootancestor and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PMFORECASTLABOR",
            "target": "PMFORECASTLABOR",
            "remarks": "Relationship to PMFORECASTLABOR table.",
            "whereClause": "pmforecastjpid=:pmforecastjpid",
            "cardinality": null
        },
        {
            "name": "PMFORECASTMATERIAL",
            "target": "PMFORECASTMATERIAL",
            "remarks": "Relationship to PMFORECASTMATERIAL table.",
            "whereClause": "pmforecastjpid=:pmforecastjpid",
            "cardinality": null
        },
        {
            "name": "PMFORECASTSERVICE",
            "target": "PMFORECASTSERVICE",
            "remarks": "Relationship to PMFORECASTSERVICE table.",
            "whereClause": "pmforecastjpid=:pmforecastjpid",
            "cardinality": null
        },
        {
            "name": "PMFORECASTTOOL",
            "target": "PMFORECASTTOOL",
            "remarks": "Relationship to PMFORECASTTOOL table.",
            "whereClause": "pmforecastjpid=:pmforecastjpid",
            "cardinality": null
        },
        {
            "name": "ROUTE_STOP",
            "target": "ROUTE_STOP",
            "remarks": "Relationship to the Route_Stop records, used to find route_stop record for a given route and routestopid.",
            "whereClause": "route=:route and routestopid=:routestopid and siteid=:siteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PMFORECASTJP",
            "source": "PM",
            "remarks": "Relationship to the PMForecastJP table, used to get the job plan for a given PM.",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PMFORECASTJPROUTE",
            "source": "PM",
            "remarks": "Relationship to the PMForecastJP table, used to get the PMForecastJP records for a given PM and where route is not null.",
            "whereClause": "pmnum=:pmnum and siteid=:siteid and route is not null",
            "cardinality": null
        },
        {
            "name": "ROOTANCESTORPMFORECASTJP",
            "source": "PM",
            "remarks": "Relationship to the PMForecastJP table, used to get the PMForecastJP records with top most parent in the hierarchy as the given PM.",
            "whereClause": "rootancestor =:pmnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "MINLTDPMCOUNTERPMFORECASTJP",
            "source": "PM",
            "remarks": "Relationship to the PMForecastJP table, used to get the pmforecastjp for a given PM and minimum ltdpmcounter.",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and ltdpmcounter = (select min(ltdpmcounter) from pmforecastjp  where pmnum =:pmnum and siteid =:siteid)",
            "cardinality": null
        },
        {
            "name": "ALLPMFORECASTJPWITHSEQNO",
            "source": "PMFORECAST",
            "remarks": "Relationship to the PMForecastJP table, used to get the all the PMForecastJP records for a given top most parent in the hierarchy and forecast sequence number.",
            "whereClause": "rootancestor=:pmnum and siteid=:siteid and forecastseqno=:forecastseqno",
            "cardinality": null
        }
    ]
}