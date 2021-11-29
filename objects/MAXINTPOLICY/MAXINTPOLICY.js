mos = {
    "objectName": "MAXINTPOLICY",
    "className": "com.ibm.tivoli.maximo.interaction.app.manageint.MaxIntPolicySet",
    "description": "Interaction Policy",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXINTPOLICYID",
    "primaryKeyColumns": [
        "POLICYID",
        "INTERACTION"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXINTPOLICY",
            "targetObject": "MAXINTPOLICYPARAM",
            "parentKeys": "POLICYID, INTERACTION",
            "targetKeys": "POLICYID, INTERACTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration Policy",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXINTPOLICY",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTPOLICY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "POLICYNAME",
            "required": false,
            "persistent": true,
            "title": "Policy",
            "remarks": "Policy",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERACTION",
            "required": false,
            "persistent": true,
            "title": "Interaction Name",
            "remarks": "Interaction Name",
            "sameAsAttribute": "INTERACTION",
            "sameAsObject": "INTGENERATOR"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POLICYTYPE",
            "required": false,
            "persistent": true,
            "title": "Policy Type",
            "remarks": "Policy Type",
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
            "attributeName": "POLICYID",
            "required": true,
            "persistent": true,
            "title": "Policy ID",
            "remarks": "Policy ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXINTPOLICYID",
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
            "name": "MAXINTPOLICYPARAM",
            "target": "MAXINTPOLICYPARAM",
            "remarks": "Relationhip to show all parameters for the interaction policy",
            "whereClause": "policyid=:policyid and interaction=:interaction",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXINTPOLICY",
            "source": "INTGENERATOR",
            "remarks": "Relationship to show policy for an interaction",
            "whereClause": "interaction=:interaction",
            "cardinality": null
        },
        {
            "name": "MAXINTPOLICY",
            "source": "MAXINTERACTION",
            "remarks": "Relationship to show all policeis for an interaction. Will return 1 or more rows",
            "whereClause": "interaction=:interaction",
            "cardinality": null
        }
    ]
}