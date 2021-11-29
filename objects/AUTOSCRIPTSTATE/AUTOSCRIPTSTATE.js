mos = {
    "objectName": "AUTOSCRIPTSTATE",
    "className": "com.ibm.ism.script.autoscript.AutoScriptStateSet",
    "description": "Script State Management",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AUTOSCRIPTSTATEID",
    "primaryKeyColumns": [
        "AUTOSCRIPTSTATEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AUTOSCRIPT",
            "targetObject": "AUTOSCRIPTSTATE",
            "parentKeys": "AUTOSCRIPT",
            "targetKeys": "AUTOSCRIPT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Automation Script",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AUTOSCRIPTSTATE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "AUTOSCRIPTSTATE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AUTOSCRIPTSTATE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "AUTOSCRIPTSTATEID",
            "required": true,
            "persistent": true,
            "title": "ScriptStateId",
            "remarks": "Script State Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOSCRIPT",
            "required": true,
            "persistent": true,
            "title": "Script Id",
            "remarks": "Script Identifier",
            "sameAsAttribute": "AUTOSCRIPT",
            "sameAsObject": "AUTOSCRIPT"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Modified By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "State Date",
            "remarks": "State Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "State Memo",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "State",
            "remarks": "State",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "AUTOSCRIPT"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "AUTOSCRIPTSTATE",
            "source": "AUTOSCRIPT",
            "remarks": "Relationship to the  AUTOSCRIPTSTATE table, used to find the state of the automation script . (AUTOSCRIPTSTATE.autoscriptid =  AUTOSCRIPT.autoscriptid). This resulting set will contain 1 or more objects",
            "whereClause": "autoscript=:autoscript",
            "cardinality": null
        }
    ]
}