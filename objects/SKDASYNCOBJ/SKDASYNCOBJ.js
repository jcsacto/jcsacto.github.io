mos = {
    "objectName": "SKDASYNCOBJ",
    "className": "com.ibm.tivoli.maximo.skd.service.SKDAsyncJobSubmitter",
    "description": "Non-persistent object for async job in Scheduler",
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
            "attributeName": "SKDPROJECTID",
            "required": false,
            "persistent": false,
            "title": "Project Id",
            "remarks": "Project that this activity is associated with",
            "sameAsAttribute": "SKDPROJECTID",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILADDRESS",
            "required": false,
            "persistent": false,
            "title": "Email Address",
            "remarks": "Email Address",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDASYNCOBJ",
            "source": "SKDPROJECT",
            "remarks": "Get asynchronous job for project",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        }
    ]
}