mos = {
    "objectName": "SKDPROJECTSTATUS",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDProjectStatusSet",
    "description": "SKDPROJECT Status Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDPROJECTSTATUSID",
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECTSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Change By",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "The date status of the SKDPROJECT was changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Signature of the user who changed the status.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "NAME",
            "required": true,
            "persistent": true,
            "title": "Schedule",
            "remarks": "Identifier of the Schedule.",
            "sameAsAttribute": "NAME",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of the Schedule.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Memo for status change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCENARIONAME",
            "required": false,
            "persistent": true,
            "title": "Scenario",
            "remarks": "Name of the scenario, which was useD to get this result.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDPROJECTSTATUSID",
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
            "name": "SKDPROJECTSTATUS",
            "source": "SKDPROJECT",
            "remarks": "Relationship to the SKDProjectStatus table, used to find all status records for a given SKDProject. (name=:name) The resulting set will contain zero or more objects.",
            "whereClause": "scenarioname=:scenarioname",
            "cardinality": null
        }
    ]
}