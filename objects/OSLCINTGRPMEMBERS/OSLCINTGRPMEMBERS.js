mos = {
    "objectName": "OSLCINTGRPMEMBERS",
    "className": "com.ibm.tivoli.maximo.oslc.consumer.app.interaction.OslcInteractionGroupMemberSet",
    "description": "OSLC Interaction Group Memebers",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSLCINTGRPMEMBERSID",
    "primaryKeyColumns": [
        "INTGROUPNAME",
        "INTERACTIONNAME",
        "PROVIDERNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CONDITION",
            "targetObject": "OSLCINTGRPMEMBERS",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition",
            "longDescription": null
        },
        {
            "objectName": "OSLCINTERACTION",
            "targetObject": "OSLCINTGRPMEMBERS",
            "parentKeys": "INTERACTIONNAME, PROVIDERNAME",
            "targetKeys": "INTERACTIONNAME, PROVIDERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "OSLC Interaction",
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
        },
        {
            "objectName": "OSLCPROVIDER",
            "targetObject": "OSLCINTGRPMEMBERS",
            "parentKeys": "PROVIDERNAME",
            "targetKeys": "PROVIDERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Interaction Group Members",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCINTGRPMEMBERS",
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
            "attributeName": "PROVIDERNAME",
            "required": true,
            "persistent": true,
            "title": "Provider",
            "remarks": "Identifies the OSLC provider application.",
            "sameAsAttribute": "PROVIDERNAME",
            "sameAsObject": "OSLCPROVIDER"
        },
        {
            "attributeName": "INTGROUPNAME",
            "required": true,
            "persistent": true,
            "title": "Interaction Group",
            "remarks": "The name of the interaction group.",
            "sameAsAttribute": "INTGROUPNAME",
            "sameAsObject": "OSLCINTGROUP"
        },
        {
            "attributeName": "INTERACTIONNAME",
            "required": false,
            "persistent": true,
            "title": "Interaction",
            "remarks": "Identifies the OSLC interaction, that is, the interaction between the consumer application and the OSLC provider application.",
            "sameAsAttribute": "INTERACTIONNAME",
            "sameAsObject": "OSLCINTERACTION"
        },
        {
            "attributeName": "SEQUENCE",
            "required": true,
            "persistent": true,
            "title": "Sequence",
            "remarks": "The order in which the interactions are run in an interaction group.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONNUM",
            "required": false,
            "persistent": true,
            "title": "Condition",
            "remarks": "The condition from the Conditional Expression Manager application that must be met for the interaction to be run for an interaction group.",
            "sameAsAttribute": "CONDITIONNUM",
            "sameAsObject": "CONDITION"
        },
        {
            "attributeName": "IGNOREONERROR",
            "required": true,
            "persistent": true,
            "title": "Ignore On Error",
            "remarks": "Specifies how to treat failed interactions. If the check box is cleared, if interactions in a group failed user will get the error. If thi filed is checked then error interaction will be skipped and user will not get an error.",
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
            "attributeName": "OSLCINTGRPMEMBERSID",
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
            "name": "OSLCINTERACTION",
            "target": "OSLCINTERACTION",
            "remarks": "Relation to get OSLC Interaction. It will return one row.",
            "whereClause": "providername=:providername and interactionname=:interactionname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "OSLCINTGRPMEMBERS",
            "source": "OSLCINTGROUP",
            "remarks": "Relation to an Interaction Group memebers. It will return 0 or more row.",
            "whereClause": "intgroupname=:intgroupname",
            "cardinality": null
        }
    ]
}