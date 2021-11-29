mos = {
    "objectName": "TIMEZONERULE",
    "className": "psdi.app.timezone.TimeZoneRuleSet",
    "description": "Time Zone Rules",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TIMEZONERULEID",
    "primaryKeyColumns": [
        "PROCESS",
        "ORGID",
        "SITEID",
        "OBJECTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "TIMEZONERULE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The object for which the Time Zone rule is defined.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TIMEZONERULE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TIMEZONERULE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TIMEZONERULE",
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
            "attributeName": "TIMEZONENAME",
            "required": true,
            "persistent": true,
            "title": "Rule",
            "remarks": "Unique identifier for the time zone rule.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESS",
            "required": true,
            "persistent": true,
            "title": "Process",
            "remarks": "The process for which the rule is defined.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCRULE",
            "required": true,
            "persistent": true,
            "title": "Process Rule",
            "remarks": "The rule defined for the process.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Optionally specifies an organization to associate with the rule.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Optionally specifies a site to associate with the rule.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Changed by.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object",
            "remarks": "The object for which the rule is defined.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "TIMEZONERULEID",
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
            "name": "PROCOBJ",
            "target": "PROCOBJ",
            "remarks": "Relationship to get an object for the process. Returns one row.",
            "whereClause": "process = :process",
            "cardinality": null
        },
        {
            "name": "PROCRULE",
            "target": "PROCRULE",
            "remarks": "Relationship to get an rule for the process. Returns one row.",
            "whereClause": "procrule = :procrule",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}