mos = {
    "objectName": "WOSAFETYPLAN",
    "className": "psdi.app.workorder.WoSafetyPlanSet",
    "description": "A Safety Plan associated with a Work Order.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WOSAFETYPLANID",
    "primaryKeyColumns": [
        "SITEID",
        "WONUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "WOSAFETYPLAN",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WOSAFETYPLAN",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOSAFETYPLAN",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SAFETYPLAN",
            "targetObject": "WOSAFETYPLAN",
            "parentKeys": "SITEID, SAFETYPLANID",
            "targetKeys": "SITEID, SAFETYPLANID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Plan applied to the Work Order.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOSAFETYPLAN",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOSAFETYPLAN",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order''s Safety Plan",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Identifies the Work Order",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SAFETYPLANID",
            "required": true,
            "persistent": true,
            "title": "Safety Plan",
            "remarks": "Identifies the Work Order's Safety Plan.",
            "sameAsAttribute": "SAFETYPLANID",
            "sameAsObject": "SAFETYPLAN"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the Safety Plan",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "SAFETYPLAN"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "The user who last modified the Safety Plan.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "The date the Safety Plan was last Modified",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "ASSETSTATUS"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for The description of the Safety Plan",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOSAFETYPLANID",
            "required": true,
            "persistent": true,
            "title": "WOSAFETYPLANID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "SAFETYPLAN",
            "target": "SAFETYPLAN",
            "remarks": "Relationship to SafetyPlan table. (safetyplan.safetyplanid = wosafetyplan.safetyplanid). The result set will contain one object.",
            "whereClause": "safetyplanid=:safetyplanid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WOSAFETYPLAN",
            "source": "SAFETYPLAN",
            "remarks": "Relationship to WoSafetyPlan table. (wosafetyplan.safetyplanid = safetyplan.safetyplanid). Used to find workorders that are associated with this safety plan. The result set will contain zero or more objects.",
            "whereClause": "safetyplanid = :safetyplanid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOSAFETYPLAN",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship to the WoSafetyPlan Table; used to find WoSafetyPlan rows that are related to the Work Orders of a set of WMAssignments.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_SAFETYPLAN",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOSAFETYPLAN",
            "source": "WORKORDER",
            "remarks": "Relationship to the WOSafetyPlan table, used to find all workorder safetyplans for a work order. (WOSafetyPlan.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}