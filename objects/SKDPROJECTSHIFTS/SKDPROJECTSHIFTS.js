mos = {
    "objectName": "SKDPROJECTSHIFTS",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDProjectShiftsSet",
    "description": "Add Multiple Shifts for a Schedule.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDPROJECTSHIFTSID",
    "primaryKeyColumns": [
        "NAME",
        "ORGID",
        "SHIFTNUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SKDPROJECTSHIFTS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SKDPROJECTSHIFTS",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Project Shift",
            "longDescription": null
        },
        {
            "objectName": "SKDPROJECT",
            "targetObject": "SKDPROJECTSHIFTS",
            "parentKeys": "NAME",
            "targetKeys": "NAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Project Shifts",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SHIFTNUM",
            "required": false,
            "persistent": true,
            "title": "Shift",
            "remarks": "Identifies the shift, for example, NIGHT, for the standard night shift",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization the shift belongs to.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
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
            "attributeName": "SKDPROJECTSHIFTSID",
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
            "name": "SKDPRJSHIFT",
            "source": "SKDPROJECT",
            "remarks": "Shifts for a project",
            "whereClause": "name=:name and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTSHIFTS",
            "source": "SKDPROJECT",
            "remarks": "Relationship to the persistent object SKDProjectShifts from Schedule to get the Schedule and Calendar Orgs.",
            "whereClause": "name=:name and orgid=:orgid",
            "cardinality": null
        }
    ]
}