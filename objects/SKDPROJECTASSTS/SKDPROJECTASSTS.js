mos = {
    "objectName": "SKDPROJECTASSTS",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDProjectAsstsSet",
    "description": "Add Multiple Assets for a Schedule.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDPROJECTASSTSID",
    "primaryKeyColumns": [
        "ASSETNUM",
        "SITEID",
        "NAME",
        "OBJECTNAME",
        "QUERYNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "SKDPROJECTASSTS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Project Asset",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDPROJECTASSTS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent MBO",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SKDPROJECTASSTS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDPROJECTASSTS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDPROJECTASSTS",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "NAME, OBJECTNAME, QUERYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Project Assets",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the asset.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization the asset belongs to.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site the asset belongs to.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "SKDPROJECTASSTSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDPROJECTASSTS",
            "source": "SKDPROJECT",
            "remarks": "Relationship to the persistent object SKDProjectAssets from Schedule to get the Schedule Assets.",
            "whereClause": "name=:name and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTASSTS",
            "source": "SKDQUERY",
            "remarks": "Relationship to the persistent object SKDProjectAssets from Schedule to get the Schedule Assets.",
            "whereClause": "name=:name and objectname=:objectname and queryname=:queryname",
            "cardinality": null
        }
    ]
}