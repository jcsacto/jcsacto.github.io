mos = {
    "objectName": "PMFORECASTLABOR",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Labor information for PM Forecast id",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PMFORECASTLABORID",
    "primaryKeyColumns": [
        "PMFORECASTLABORID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "JOBLABOR",
            "targetObject": "PMFORECASTLABOR",
            "parentKeys": "JOBLABORID",
            "targetKeys": "JOBLABORID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Labor",
            "longDescription": null
        },
        {
            "objectName": "PMFORECASTJP",
            "targetObject": "PMFORECASTLABOR",
            "parentKeys": "PMFORECASTJPID",
            "targetKeys": "PMFORECASTJPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM Forecast Job Plan",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PMFORECASTJPID",
            "required": false,
            "persistent": true,
            "title": "PMFORECASTJPID",
            "remarks": "This field identifies PMFORCASTJP record.",
            "sameAsAttribute": "PMFORECASTJPID",
            "sameAsObject": "PMFORECASTJP"
        },
        {
            "attributeName": "JOBLABORID",
            "required": false,
            "persistent": true,
            "title": "JOBLABORID",
            "remarks": "Unique Identifier for JobLabor table",
            "sameAsAttribute": "JOBLABORID",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "THISLABORHRS",
            "required": false,
            "persistent": true,
            "title": "Labor Hours",
            "remarks": "Labor hours for this forecast segment.",
            "sameAsAttribute": "LABORHRS",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "THISLABORCOST",
            "required": false,
            "persistent": true,
            "title": "Labor Cost",
            "remarks": "Labor cost for this forecast segment.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "PMFORECASTLABORID",
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
            "name": "JOBLABOR",
            "target": "JOBLABOR",
            "remarks": "Relationship to JOBLABOR table.",
            "whereClause": "joblaborid=:joblaborid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PMFORECASTLABOR",
            "source": "PMFORECASTJP",
            "remarks": "Relationship to PMFORECASTLABOR table.",
            "whereClause": "pmforecastjpid=:pmforecastjpid",
            "cardinality": null
        }
    ]
}