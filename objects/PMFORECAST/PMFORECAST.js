mos = {
    "objectName": "PMFORECAST",
    "className": "psdi.app.pm.PMForecastSet",
    "description": "Stores PM forecast dates and the new dates",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PMFORECASTID",
    "primaryKeyColumns": [
        "SITEID",
        "PMNUM",
        "LTDPMCOUNTER"
    ],
    "logicalRelationships": [
        {
            "objectName": "PMFORECAST",
            "targetObject": "SKDPMFORECAST",
            "parentKeys": "PMFORECASTID",
            "targetKeys": "PMFORECASTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM Forecast",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PMFORECAST",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PMFORECAST",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PMFORECAST",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PMFORECAST",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work forecasted by PMs",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PMFORECAST",
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
            "attributeName": "FORECASTDATE",
            "required": true,
            "persistent": true,
            "title": "Forecast Date",
            "remarks": "Forecasted Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWDATE",
            "required": false,
            "persistent": true,
            "title": "New Date",
            "remarks": "New Forecasted Date",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "remarks": "Person who changed the forecast",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "The date the forecast was changed",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "JPNUM",
            "required": false,
            "persistent": false,
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
            "attributeName": "PMFORECASTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Notes or comments relating to this PM forecast date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REGENERATE",
            "required": true,
            "persistent": true,
            "title": "Reforecast Pending",
            "remarks": "Indicates if the Forecast Date within the forecast has an adjustment pending. If the field is checked, a New Date has been entered for a Forecast Date, the Reforecast Subsequent Dates field is set to yes, and the reforecasting of subsequent Forecast dates will occur based on the frequency of the forecast cron task. This field is read-only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PMFORECASTMAXLTD",
            "target": "PMFORECAST",
            "remarks": "Relationship to the PMForecast table, used to get the PMForecast record with a maximum ltdpmcounter.",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and ltdpmcounter = (select max(ltdpmcounter) from pmforecast  where pmnum =:pmnum and siteid =:siteid)",
            "cardinality": null
        },
        {
            "name": "PMFORECASTMINLTD",
            "target": "PMFORECAST",
            "remarks": "Relationship to the PMForecast table, used to get the PMForecast record with a minimum ltdpmcounter.",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and ltdpmcounter = (select min(ltdpmcounter) from pmforecast  where pmnum =:pmnum and siteid =:siteid)",
            "cardinality": null
        },
        {
            "name": "ALLPMFORECASTJPWITHSEQNO",
            "target": "PMFORECASTJP",
            "remarks": "Relationship to the PMForecastJP table, used to get the all the PMForecastJP records for a given top most parent in the hierarchy and forecast sequence number.",
            "whereClause": "rootancestor=:pmnum and siteid=:siteid and forecastseqno=:forecastseqno",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PMFORECAST",
            "source": "PM",
            "remarks": "Relationship to the PMForecast table, used to get the forecast for a given PM.",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PMFORECASTNEWDATE",
            "source": "PM",
            "remarks": "Relationship to the PMForecast table, used to get the forecast where new forecast date is not null",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and newdate is not null",
            "cardinality": null
        },
        {
            "name": "PMFORECASTREGENERATE",
            "source": "PM",
            "remarks": "Relationship to the PMForecast table, used to get the forecast where new forecast date is not null and regenerate flag is true.",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and newdate is not null and regenerate =:yes",
            "cardinality": null
        },
        {
            "name": "PMFORECASTSKD",
            "source": "PM",
            "remarks": "Relationship to the PMForecast table, used to get the forecast for a given PM.",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "TOPLEVELPMFORECAST",
            "source": "PM",
            "remarks": "Relationship to the PMForecast table, used to get the forecast for top level PM of a given PM.",
            "whereClause": "pmnum = (select pmnum from pm where  parent is null and pmnum in (select ancestor from pmancestor where pmnum = :pmnum and siteid=:siteid) and siteid=:siteid) and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "MINLTDPMCOUNTERPMFORECAST",
            "source": "PM",
            "remarks": "Relationship to the PMForecast table, used to get the forecast for a given PM and minimum ltdpmcounter.",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and ltdpmcounter = (select min(ltdpmcounter) from pmforecast  where pmnum =:pmnum and siteid =:siteid)",
            "cardinality": null
        },
        {
            "name": "MAXLTDPMCOUNTERPMFORECAST",
            "source": "PM",
            "remarks": "Relationship to the PMForecast table, used to get the forecast for a given PM and maximum ltdpmcounter.",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and ltdpmcounter = (select max(ltdpmcounter) from pmforecast  where pmnum =:pmnum and siteid =:siteid)",
            "cardinality": null
        },
        {
            "name": "PMFORECASTMAXLTD",
            "source": "PMFORECAST",
            "remarks": "Relationship to the PMForecast table, used to get the PMForecast record with a maximum ltdpmcounter.",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and ltdpmcounter = (select max(ltdpmcounter) from pmforecast  where pmnum =:pmnum and siteid =:siteid)",
            "cardinality": null
        },
        {
            "name": "PMFORECASTMINLTD",
            "source": "PMFORECAST",
            "remarks": "Relationship to the PMForecast table, used to get the PMForecast record with a minimum ltdpmcounter.",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and ltdpmcounter = (select min(ltdpmcounter) from pmforecast  where pmnum =:pmnum and siteid =:siteid)",
            "cardinality": null
        },
        {
            "name": "PMFORECAST",
            "source": "PMFORECASTJP",
            "remarks": "Relationship to PMFORECAST table, used to get PMForecast records for a given forecastseqno.",
            "whereClause": "pmnum=:rootancestor and siteid=:siteid and forecastseqno=:forecastseqno",
            "cardinality": null
        },
        {
            "name": "PMFORECASTDATEROUTE",
            "source": "PMFORECASTJP",
            "remarks": "Relationship to the PMForecast table, used to get the forecasts records for top level PM of a given PM.",
            "whereClause": "pmnum=:rootancestor and siteid=:siteid and ltdpmcounter=:ltdpmcounter",
            "cardinality": null
        },
        {
            "name": "ROOTANCESTORPMFORECAST",
            "source": "PMFORECASTJP",
            "remarks": "Relationship to the PMForecast table, used to get the forecast for top level PM of a given PM.",
            "whereClause": "pmnum=:rootancestor and siteid=:siteid",
            "cardinality": null
        }
    ]
}