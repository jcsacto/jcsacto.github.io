mos = {
    "objectName": "CRONTASKPARAM",
    "className": "psdi.app.system.CrontaskParamSet",
    "description": "Crontask parameter",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CRONTASKPARAMID",
    "primaryKeyColumns": [
        "CRONTASKNAME",
        "INSTANCENAME",
        "PARAMETER"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "CRONTASKINSTANCE",
            "targetObject": "CRONTASKPARAM",
            "parentKeys": "CRONTASKNAME, INSTANCENAME",
            "targetKeys": "CRONTASKNAME, INSTANCENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CronTask Parameters",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CRONTASKNAME",
            "required": true,
            "persistent": true,
            "title": "Task",
            "remarks": "The name of the crontask",
            "sameAsAttribute": "CRONTASKNAME",
            "sameAsObject": "CRONTASKDEF"
        },
        {
            "attributeName": "INSTANCENAME",
            "required": true,
            "persistent": true,
            "title": "Instance",
            "remarks": "The name of the crontask instance",
            "sameAsAttribute": "CRONTASKNAME",
            "sameAsObject": "CRONTASKDEF"
        },
        {
            "attributeName": "PARAMETER",
            "required": true,
            "persistent": true,
            "title": "Parameter",
            "remarks": "The parameter name of the crontask",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "The value of the parameter",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CRONTASKPARAMID",
            "required": true,
            "persistent": true,
            "title": "CRONTASKPARAMID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of the parameter",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CRYPTOVALUE",
            "required": false,
            "persistent": true,
            "title": "CRYPTOVALUE",
            "remarks": "Field to store cron task parameters that require encryption, such as passwords.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPVALUE",
            "required": false,
            "persistent": false,
            "title": "Value",
            "remarks": "Non-persistent UI display field for entering cron task parameters that are then stored  to the database.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "CRONTASKPARAM"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DMPARAMETER",
            "source": "CRONTASKINSTANCE",
            "remarks": "parameters for an instance",
            "whereClause": "crontaskname=:crontaskname and instancename=:instancename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARAMETER",
            "source": "CRONTASKINSTANCE",
            "remarks": null,
            "whereClause": "crontaskname=:crontaskname and instancename=:instancename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONTASK_CRONTASKPARAM",
            "source": "RECONTASK",
            "remarks": "REconTask to CRONTASKPARAM",
            "whereClause": "value=:taskname and crontaskname in (select crontaskname from crontaskdef where classname='psdi.app.recontask.engine.ReconCronTask')",
            "cardinality": "UNDEFINED"
        }
    ]
}