mos = {
    "objectName": "SKDWORKPLANEXTCAP",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDWorkPlanExtCapSet",
    "description": "Scheduler Work Plan Extra Capacity Object.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDWORKPLANEXTCAPID",
    "primaryKeyColumns": [],
    "logicalRelationships": [
        {
            "objectName": "SKDWORKPLANEXTCAP",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "SKDWORKPLANEXTCAPID",
            "targetKeys": "SKDWORKPLANEXTCAPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Scheduler Extra Capacity Object",
            "longDescription": null
        },
        {
            "objectName": "SKDWORKPLANEXTCAP",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "SKDWORKPLANEXTCAPID",
            "targetKeys": "SKDWORKPLANEXTCAPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Work Plan Next Capacity",
            "longDescription": null
        },
        {
            "objectName": "SKDWORKPLANEXTCAP",
            "targetObject": "SKDEXTRACAPTOOLVIEW",
            "parentKeys": "SKDWORKPLANEXTCAPID",
            "targetKeys": "SKDWORKPLANEXTCAPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Extra Capacity Work Plan Next",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ITEM",
            "targetObject": "SKDWORKPLANEXTCAP",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "RESOURCENAME, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Extra Capacity Item",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SKDWORKPLANEXTCAP",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "SKDWORKPLANEXTCAP",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Item Set",
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
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Identifies the type of resource that is required. Options include craft, tool, or crew.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKILLNAME",
            "required": false,
            "persistent": true,
            "title": "Skill Name",
            "remarks": "Unique ID of the skill.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RANK",
            "required": false,
            "persistent": true,
            "title": "Rank",
            "remarks": "The rank associated with the skill level of a particular craft. The rank is in ascending order, 1 being the lowest.",
            "sameAsAttribute": "RANK",
            "sameAsObject": "CRAFTSKILL"
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "Additional Capacity Required",
            "remarks": "The amount of extra resources that are required in order to complete the work during the specified time period.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Identifies the start date and time when this additional resource is required.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "Identifies the end date and time when this additional resource is required.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESOURCENAME",
            "required": false,
            "persistent": true,
            "title": "Resource Name",
            "remarks": "Identifies the craft, tool, or crew that is required to complete the work.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SKILLLEVEL",
            "required": false,
            "persistent": true,
            "title": "Skill Level",
            "remarks": "Identifies the level of skill or expertise in a particular craft.",
            "sameAsAttribute": "SKILLLEVEL",
            "sameAsObject": "CRAFTSKILL"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Identifies the item set.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "SKDWORKPLANEXTCAPID",
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
            "name": "SKDEXTRACAPACITY",
            "target": "SKDEXTRACAPACITY",
            "remarks": "Relationship to the SKDExtraCapacity table, used to find the additional capacity for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "SKDWORKPLANEXTCAP",
            "source": "SKDPROJECT",
            "remarks": "Relationship to the SKDWorkPlanExtCap table, used to find the extra capacity for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid and orgid=:orgid",
            "cardinality": null
        }
    ]
}