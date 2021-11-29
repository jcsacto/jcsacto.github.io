mos = {
    "objectName": "OSLCINTGROUP",
    "className": "com.ibm.tivoli.maximo.oslc.consumer.app.interaction.OslcInteractionGroupSet",
    "description": "OSLC Interaction Group",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSLCINTGROUPID",
    "primaryKeyColumns": [
        "INTGROUPNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "OSLCINTGROUP",
            "targetObject": "OSLCINTGRPAPPMENU",
            "parentKeys": "INTGROUPNAME",
            "targetKeys": "INTGROUPNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "OSLCINTGROUP",
            "targetObject": "OSLCINTGRPAPPS",
            "parentKeys": "INTGROUPNAME",
            "targetKeys": "INTGROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Interaction Group Action",
            "longDescription": null
        },
        {
            "objectName": "OSLCINTGROUP",
            "targetObject": "OSLCINTGRPMEMBERS",
            "parentKeys": "INTGROUPNAME",
            "targetKeys": "INTGROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Members",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "OSLCINTGROUP",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "OSLCINTGROUP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Main Object",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCINTGROUP",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Changed By",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INTGROUPNAME",
            "required": true,
            "persistent": true,
            "title": "Interaction Group",
            "remarks": "The name of the interaction group.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the Interaction Group.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "The main object for the interaction group. All interactions that are part of a group must specify the same main object. Interactions that do not specify the same main object cannot be added to the group.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "COMBINEVIEW",
            "required": true,
            "persistent": true,
            "title": "Support Combined View of Multiple Providers",
            "remarks": "Specifies whether resource URIs from multiple providers are returned to the end user. If the check box is cleared, resource URIs are returned only from the first provider that meets the condition.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSLCINTGROUPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "OSLCINTGRPAPPS",
            "target": "OSLCINTGRPAPPS",
            "remarks": "Relation to an Interaction Group Application. It will return 0 or more row.",
            "whereClause": "intgroupname=:intgroupname",
            "cardinality": null
        },
        {
            "name": "OSLCINTGRPMEMBERS",
            "target": "OSLCINTGRPMEMBERS",
            "remarks": "Relation to an Interaction Group memebers. It will return 0 or more row.",
            "whereClause": "intgroupname=:intgroupname",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}