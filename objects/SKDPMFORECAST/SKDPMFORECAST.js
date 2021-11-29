mos = {
    "objectName": "SKDPMFORECAST",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Scheduler Preventive Maintenance Forecast table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "SKDPROJECTID",
        "PMNUM",
        "SITEID",
        "LTDPMCOUNTER"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SKDPMFORECAST",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPMFORECAST",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPMFORECAST",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "SKDPMFORECAST",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM",
            "longDescription": null
        },
        {
            "objectName": "PMFORECAST",
            "targetObject": "SKDPMFORECAST",
            "parentKeys": "PMFORECASTID",
            "targetKeys": "PMFORECASTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM Forecast",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDPMFORECAST",
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
            "remarks": "Number of work orders generated from the PM since the First Start Date. The counter is set to zero when you insert a new PM record, and increases each time you generate a top-level work order from the PM. If you are using a job plan sequence, the job plan is selected after the counter increments. Life to Date Counter cannot be reset by Set PM Counter.",
            "sameAsAttribute": "PMCOUNTER",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "FORECASTDATE",
            "required": false,
            "persistent": true,
            "title": "Forecast Date",
            "remarks": "Forecasted Date",
            "sameAsAttribute": "FORECASTDATE",
            "sameAsObject": "PMFORECAST"
        },
        {
            "attributeName": "NEWDATE",
            "required": false,
            "persistent": true,
            "title": "New Date",
            "remarks": "New Forecasted Date",
            "sameAsAttribute": "NEWDATE",
            "sameAsObject": "PMFORECAST"
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
            "sameAsObject": "PMFORECAST"
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
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "PMFORECAST"
        },
        {
            "attributeName": "FORECASTSEQNO",
            "required": false,
            "persistent": true,
            "title": "PM forecast sequence Number",
            "remarks": "Unique identifier for a given forecast of a PM",
            "sameAsAttribute": "FORECASTSEQNO",
            "sameAsObject": "PMFORECAST"
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
            "attributeName": "PMFORECASTID",
            "required": false,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": "PMFORECASTID",
            "sameAsObject": "PMFORECAST"
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Remark",
            "remarks": "Remark",
            "sameAsAttribute": "REMARKS",
            "sameAsObject": "PMFORECAST"
        },
        {
            "attributeName": "REGENERATE",
            "required": true,
            "persistent": true,
            "title": "Regenerate",
            "remarks": "Regenerate",
            "sameAsAttribute": "REGENERATE",
            "sameAsObject": "PMFORECAST"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDPMFORECAST",
            "source": "PM",
            "remarks": "Scheduler forecast records for a PM record",
            "whereClause": "pmnum = :pmnum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "SKDPMFORECASTREGENERATE",
            "source": "PM",
            "remarks": "Relationship to the scheduler forecast table where regerate is 1",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and newdate is not null and regenerate =:yes",
            "cardinality": null
        },
        {
            "name": "SKDPMFORECAST",
            "source": "SKDPROJECT",
            "remarks": "Relationship to skdpmforecast records, used to find skdpmforecast records for a given skdproject.",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        }
    ]
}