mos = {
    "objectName": "SKDPROJECTPUBLISH",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDProjectPublishSet",
    "description": "SKDPROJECT Publish History Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDPROJECTPUBLISHID",
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECTPUBLISH",
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
            "title": "Publish Date",
            "remarks": "The date that the SKDPROJECT was published.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User who published the schedule.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "NAME",
            "required": true,
            "persistent": true,
            "title": "Schedule",
            "remarks": "Identifies the schedule.",
            "sameAsAttribute": "NAME",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Publish Memo",
            "remarks": "Memo for publish.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCENARIONAME",
            "required": false,
            "persistent": true,
            "title": "Scenario",
            "remarks": "Name of the scenario, which was user to get this result. If no scenario exists, the schedule name is used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDPROJECTPUBLISHID",
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
            "name": "SKDPROJECTPUBLISH",
            "source": "SKDPROJECT",
            "remarks": "Relationship to the SKDProjectPublish table, used to find all publish records for a given SKDProject. (name=:name) The resulting set will contain zero or more objects.",
            "whereClause": "name=:name",
            "cardinality": null
        }
    ]
}