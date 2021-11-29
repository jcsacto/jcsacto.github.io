mos = {
    "objectName": "SKDEMAVAILRES",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDEmWoAvailResSet",
    "description": "Available Resources for Emergency Work Orders",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDEMAVAILRESID",
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "SKDEMAVAILRES",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Change By",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDEMAVAILRES",
            "parentKeys": "SITEID",
            "targetKeys": "CURSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "SKDEMAVAILRES",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "CURSITEID, CURWONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Current Work Order",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SKDPROJECTID",
            "required": false,
            "persistent": true,
            "title": "Project Id",
            "remarks": "Unique identifier of the Schedule.",
            "sameAsAttribute": "SKDPROJECTID",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "ASSIGNMENTID",
            "required": true,
            "persistent": true,
            "title": "Assignment Unique Id",
            "remarks": "Assignment Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABORCODE",
            "required": false,
            "persistent": true,
            "title": "Labor",
            "remarks": "Identifier of the labor record.  This field must be unique within an organization. When you save a labor record, this field becomes read-only.",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "Identfies the crew. This value must be unique within an organization.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "TRAVELTIME",
            "required": false,
            "persistent": true,
            "title": "Travel Time",
            "remarks": "The amount of time needed to travel between the service addresses. This value can be calculated by the map provider, or you can enter a value in the format HH:MM.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURWONUM",
            "required": false,
            "persistent": true,
            "title": "Currently Assigned Work Order",
            "remarks": "Identifies the currently assigned work order.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CURSITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Last Modified By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Last Modified Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDEMAVAILRESID",
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
            "name": "ASSIGNMENT",
            "target": "ASSIGNMENT",
            "remarks": "Assignment records for the emergency work orders available resources",
            "whereClause": "assignmentid=:assignmentid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "SKDEMAVAILRES",
            "source": "SKDPROJECT",
            "remarks": "Emergency work orders available resources records for a given skdproject",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        }
    ]
}