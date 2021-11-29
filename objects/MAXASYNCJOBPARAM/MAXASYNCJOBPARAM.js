mos = {
    "objectName": "MAXASYNCJOBPARAM",
    "className": "psdi.app.system.MaxAsyncJobParamSet",
    "description": "Async job parameters",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXASYNCJOBPARAMID",
    "primaryKeyColumns": [
        "JOBNUM",
        "NAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXASYNCJOB",
            "targetObject": "MAXASYNCJOBPARAM",
            "parentKeys": "JOBNUM",
            "targetKeys": "JOBNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asynchronous Job",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "JOBNUM",
            "required": true,
            "persistent": true,
            "title": "Job Number",
            "remarks": "PK - foreign key from MaxAsyncJobs",
            "sameAsAttribute": "JOBNUM",
            "sameAsObject": "MAXASYNCJOB"
        },
        {
            "attributeName": "NAME",
            "required": true,
            "persistent": true,
            "title": "Name",
            "remarks": "Name of the parameter",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "Value of the parameter",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXTYPE",
            "required": true,
            "persistent": true,
            "title": "Data Type",
            "remarks": "Data type of the parameter",
            "sameAsAttribute": "MAXTYPE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "MAXASYNCJOBPARAMID",
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
            "name": "MAXASYNCJOBPARAM",
            "source": "MAXASYNCJOB",
            "remarks": "Relationship to get params from MAXASYNCJOB",
            "whereClause": "jobnum=:jobnum",
            "cardinality": null
        }
    ]
}