mos = {
    "objectName": "MAXINTPOLICYPARAM",
    "className": "com.ibm.tivoli.maximo.interaction.app.manageint.MaxIntPolicyParamSet",
    "description": "Interaction Policy Parameters",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXINTPOLICYPARAMID",
    "primaryKeyColumns": [
        "POLICYID",
        "INTERACTION",
        "PARAM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXINTPOLICYPARAM",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXINTPOLICY",
            "targetObject": "MAXINTPOLICYPARAM",
            "parentKeys": "POLICYID, INTERACTION",
            "targetKeys": "POLICYID, INTERACTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration Policy",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTPOLICYPARAM",
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
            "attributeName": "POLICYID",
            "required": true,
            "persistent": true,
            "title": "Policy ID",
            "remarks": "Policy ID",
            "sameAsAttribute": "POLICYID",
            "sameAsObject": "MAXINTPOLICY"
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
            "attributeName": "PARAM",
            "required": false,
            "persistent": true,
            "title": "Parameter",
            "remarks": "Parameter",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "Value",
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
            "title": "Chnage Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULTVALUE",
            "required": false,
            "persistent": true,
            "title": "Default Value",
            "remarks": "Default Value",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "MAXINTPOLICYPARAMID",
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
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXINTPOLICYPARAM",
            "source": "MAXINTPOLICY",
            "remarks": "Relationhip to show all parameters for the interaction policy",
            "whereClause": "policyid=:policyid and interaction=:interaction",
            "cardinality": null
        }
    ]
}