mos = {
    "objectName": "COMMITPERSON",
    "className": "com.ibm.tivoli.maximo.skd.app.CommitPersonSet",
    "description": "User that is allowed to commit changes",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "COMMITPERSONID",
    "primaryKeyColumns": [
        "PROJECTNAME",
        "PERSONID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "COMMITPERSON",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
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
            "attributeName": "PERSONID",
            "required": true,
            "persistent": true,
            "title": "Person",
            "remarks": "Identifier of the person's record. This field must be unique.When you save a person record, this field becomes read only.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "COMMITPERSONID",
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
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Get person for the commitperson.",
            "whereClause": "personid=:personid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMMITPERSON",
            "source": "SKDPROJECT",
            "remarks": "Users that are allow to commit changes.",
            "whereClause": "projectname=:name",
            "cardinality": null
        }
    ]
}