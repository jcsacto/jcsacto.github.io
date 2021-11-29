mos = {
    "objectName": "REPORTOUTPUTCNT",
    "className": "psdi.app.report.ReportOutputCntSet",
    "description": "Contains the scheduled report output content",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTOUTPUTCNTID",
    "primaryKeyColumns": [
        "JOBNUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "REPORTOUTPUT",
            "targetObject": "REPORTOUTPUTCNT",
            "parentKeys": "JOBNUM",
            "targetKeys": "JOBNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Scheduled report output content.",
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
            "attributeName": "FILENAME",
            "required": false,
            "persistent": true,
            "title": "Output file Name",
            "remarks": "Output file Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILETYPE",
            "required": false,
            "persistent": true,
            "title": "File type",
            "remarks": "File Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTENT",
            "required": true,
            "persistent": true,
            "title": "Content",
            "remarks": "Content of report ouput",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTOUTPUTCNTID",
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
            "name": "REPORTOUTPUTCNT",
            "source": "REPORTOUTPUT",
            "remarks": "Returns only one REPORTOUTPUTCNT entry",
            "whereClause": "jobnum=:jobnum",
            "cardinality": null
        }
    ]
}