mos = {
    "objectName": "REPORTOUTPUTAUTH",
    "className": "psdi.app.report.ReportOutputAuthSet",
    "description": "Contains the list of recipients authorized to see the report output",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTOUTPUTAUTHID",
    "primaryKeyColumns": [
        "JOBNUM",
        "EMAILADDRESS"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "EMAIL",
            "targetObject": "REPORTOUTPUTAUTH",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "EMAILADDRESS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Email address of the authorized user.",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "REPORTOUTPUTAUTH",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User ID of the authorized user.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REPORTOUTPUTAUTH",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "REPORTOUTPUT",
            "targetObject": "REPORTOUTPUTAUTH",
            "parentKeys": "JOBNUM",
            "targetKeys": "JOBNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report output authorizations.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "JOBNUM",
            "required": true,
            "persistent": true,
            "title": "Job Number",
            "remarks": "Auto-keyed unique identifier",
            "sameAsAttribute": "JOBNUM",
            "sameAsObject": "REPORTOUTPUT"
        },
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "Recipient",
            "remarks": "Maximo User authorized to see the report output",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "EMAILADDRESS",
            "required": true,
            "persistent": true,
            "title": "Sender email",
            "remarks": "Sender Email",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "REPORTOUTPUTAUTHID",
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
            "name": "REPORTOUTPUT",
            "target": "REPORTOUTPUT",
            "remarks": "Returns zero or more REPORTOUTPUT entries",
            "whereClause": "jobnum=:jobnum",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPORTOUTPUTAUTH",
            "source": "REPORTOUTPUT",
            "remarks": "Returns zero or more REPORTOUTPUTAUTH entries",
            "whereClause": "jobnum=:jobnum",
            "cardinality": null
        }
    ]
}