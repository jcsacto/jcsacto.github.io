mos = {
    "objectName": "CRONTASKDEF",
    "className": "psdi.app.system.CrontaskDefSet",
    "description": "Crontask definition",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "CRONTASKDEFID",
    "primaryKeyColumns": [
        "CRONTASKNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "CRONTASKHISTORY",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "CRONTASKNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "CRONTASKHISTORY",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "INSTANCENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "CRONTASKINSTANCE",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "CRONTASKNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "CRONTASKINSTANCE",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "INSTANCENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "CRONTASKPARAM",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "CRONTASKNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "CRONTASKPARAM",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "INSTANCENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "ESCALATION",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "CRONTASKNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Escalations",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "INBOUNDCOMMCFG",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "CRONTASKINSTANCE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "INBOUNDCOMMCFG",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "CRONTASKNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "KPISCHEDULE",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "INSTANCENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "LDAPSYNCPARAMS",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "TASKINSTANCE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "LDAPSYNCPARAMS",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "TASKNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "REPORTSCHED",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "CRONTASKNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "REPORTSCHED",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "INSTANCENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "CRONTASKDEF",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CRONTASKNAME",
            "required": true,
            "persistent": true,
            "title": "Cron Task",
            "remarks": "The name of the crontask",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSNAME",
            "required": true,
            "persistent": true,
            "title": "Class",
            "remarks": "The java classname for the crontask",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the crontask",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CRONTASKDEFID",
            "required": true,
            "persistent": true,
            "title": "CRONTASKDEFID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCESSLEVEL",
            "required": true,
            "persistent": true,
            "title": "Access Level",
            "remarks": "Access level of the crontask instance of this crontask. Valid values are from synonym domain CRONACCESSLEVEL",
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
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long description for DESCRIPTION",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ACTIVEINSTANCE",
            "target": "CRONTASKINSTANCE",
            "remarks": "Active crontask instances",
            "whereClause": "crontaskname=:crontaskname and active=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRONTASKINSTANCE",
            "target": "CRONTASKINSTANCE",
            "remarks": null,
            "whereClause": "crontaskname=:crontaskname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCRONTASKDEFLONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "long description record for crontaskdef",
            "whereClause": "ldkey=:crontaskdefid and ldownertable = 'CRONTASKDEF'",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LSNRCRONDEF",
            "source": "INBOUNDCOMMCFG",
            "remarks": "crontaskdef for inboundcommcfg",
            "whereClause": "crontaskname=:crontaskname",
            "cardinality": "UNDEFINED"
        }
    ]
}