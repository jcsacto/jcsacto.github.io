mos = {
    "objectName": "SKDEXTRACAPACITY",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDExtraCapacitySet",
    "description": "Scheduler extra capacity summary object",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "SKDPROJECTID",
        "RESOURCENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ITEM",
            "targetObject": "SKDEXTRACAPACITY",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "RESOURCENAME, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Extra Capacity Item",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SKDEXTRACAPACITY",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "SKDEXTRACAPACITY",
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
            "title": "Project ID",
            "remarks": "Identifies the scheduler project.",
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
            "attributeName": "RESOURCENAME",
            "required": false,
            "persistent": true,
            "title": "Craft",
            "remarks": "Identifies the craft, tool, or crew that is required to complete the work.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
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
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Identifies the item set.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDEXTRACAPACITYCRAFT",
            "source": "SKDPROJECT",
            "remarks": "Relationship to the SKDExtraCapacity table, used to find the additional capacity for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid and type='CRAFT'",
            "cardinality": null
        },
        {
            "name": "SKDEXTRACAPACITYCREW",
            "source": "SKDPROJECT",
            "remarks": "Relationship to the SKDExtraCapacity table, used to find the additional capacity for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid and type='CREW'",
            "cardinality": null
        },
        {
            "name": "SKDEXTRACAPACITYTOOL",
            "source": "SKDPROJECT",
            "remarks": "Relationship to the SKDExtraCapacity table, used to find the additional capacity for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid and type='TOOL'",
            "cardinality": null
        },
        {
            "name": "SKDEXTRACAPACITY",
            "source": "SKDWORKPLANEXTCAP",
            "remarks": "Relationship to the SKDExtraCapacity table, used to find the additional capacity for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        }
    ]
}