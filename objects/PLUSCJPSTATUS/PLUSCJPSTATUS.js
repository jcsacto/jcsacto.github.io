mos = {
    "objectName": "PLUSCJPSTATUS",
    "className": "psdi.plusc.app.jobplan.PlusCJobPlanStatusSet",
    "description": "Job Plan Status History",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PLUSCJPSTATUSID",
    "primaryKeyColumns": [
        "PLUSCJPSTATUSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "JOBPLAN",
            "targetObject": "PLUSCJPSTATUS",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, JPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCJPSTATUS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PLUSCJPSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCJPSTATUS",
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
            "attributeName": "JPNUM",
            "required": true,
            "persistent": true,
            "title": "Job Plan Number",
            "remarks": "Displays the current job plan number.",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "JPREVNUM",
            "required": true,
            "persistent": true,
            "title": "Revision Number",
            "remarks": "Displays the current job plan revision level.",
            "sameAsAttribute": "PLUSCREVNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Job Plan Status",
            "remarks": "Lists what status you can move to based on the current status.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Displays the user name of the person logged in when the job plan status was changed.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Displays the date the status was changed. This field is editable only on the Change Status dialog box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Org ID",
            "remarks": "Displays the original ID of the job plan.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site ID",
            "remarks": "Displays the current site ID of the job plan.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Enter any comments, when you change the status of the job plan.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCJPSTATUSID",
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
            "name": "PLUSCJPSTATUS",
            "source": "JOBPLAN",
            "remarks": "Relationship to the status history object.",
            "whereClause": "jpnum=:jpnum and jprevnum=:pluscrevnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null))",
            "cardinality": null
        }
    ]
}