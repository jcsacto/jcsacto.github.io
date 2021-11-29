mos = {
    "objectName": "COMMITGROUP",
    "className": "com.ibm.tivoli.maximo.skd.app.CommitGroupSet",
    "description": "Group that is allowed to commit changes",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "COMMITGROUPID",
    "primaryKeyColumns": [
        "PROJECTNAME",
        "PERSONGROUP"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSONGROUP",
            "targetObject": "COMMITGROUP",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PROJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Project Name",
            "remarks": "Identifies the schedule or work list. This value must be unique, and consists of a group of work records and their required resources. The record can be viewed and edited in the Gantt View tab.",
            "sameAsAttribute": "NAME",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "PERSONGROUP",
            "required": true,
            "persistent": true,
            "title": "Person Group",
            "remarks": "Identifier of the person group's record. This field must be unique.When you save a person record, this field becomes read only.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "COMMITGROUPID",
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
            "name": "PERSONGROUP",
            "target": "PERSONGROUP",
            "remarks": "Get person group for the commitgroup.",
            "whereClause": "persongroup=:persongroup",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMMITGROUP",
            "source": "SKDPROJECT",
            "remarks": "Groups that are allow to commit changes.",
            "whereClause": "projectname=:name",
            "cardinality": null
        }
    ]
}