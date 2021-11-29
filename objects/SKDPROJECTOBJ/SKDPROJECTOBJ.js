mos = {
    "objectName": "SKDPROJECTOBJ",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDProjectObjSet",
    "description": "Object to Add Multiple Data Objects for a Asset/Location Query.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDPROJECTOBJID",
    "primaryKeyColumns": [
        "MAXOBJECTNAME",
        "NAME",
        "OBJECTNAME",
        "QUERYNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDPROJECTOBJ",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MAXOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDPROJECTOBJ",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent MBO",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDPROJECTOBJ",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "NAME, MAXOBJECTNAME, QUERYNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDPROJECTOBJ",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "NAME, OBJECTNAME, QUERYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Project Data Objects",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAXOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object",
            "remarks": "Identifies the object.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "NAME",
            "required": false,
            "persistent": true,
            "title": "Schedule",
            "remarks": "Identifies the schedule. This value must be unique. The schedule consists of a group of work records and their required resources. The schedule can be viewed and edited in the Gantt View tab.",
            "sameAsAttribute": "NAME",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Data Source",
            "remarks": "Identifies the parent object name.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "QUERYNAME",
            "required": false,
            "persistent": true,
            "title": "Query Name",
            "remarks": "Identifies the parent query name.",
            "sameAsAttribute": "QUERYNAME",
            "sameAsObject": "SKDQUERY"
        },
        {
            "attributeName": "SKDPROJECTOBJID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDPROJECTOBJ",
            "source": "SKDQUERY",
            "remarks": "Relationship to the persistent object SKDPROJECTOBJ from Schedule to get the Schedule Objects.",
            "whereClause": "name=:name and objectname=:objectname and queryname=:queryname",
            "cardinality": null
        }
    ]
}