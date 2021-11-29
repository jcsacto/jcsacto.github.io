mos = {
    "objectName": "CRONTASKINSTANCE",
    "className": "psdi.app.system.CrontaskInstanceSet",
    "description": "Crontask instance",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CRONTASKINSTANCEID",
    "primaryKeyColumns": [
        "INSTANCENAME",
        "CRONTASKNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "CRONTASKINSTANCE",
            "targetObject": "CRONTASKHISTORY",
            "parentKeys": "CRONTASKNAME, INSTANCENAME",
            "targetKeys": "CRONTASKNAME, INSTANCENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CronTask History",
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
    "targetLogicalRelationships": [
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
            "objectName": "LANGUAGE",
            "targetObject": "CRONTASKINSTANCE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "CRONTASKINSTANCE",
            "parentKeys": "USERID",
            "targetKeys": "RUNASUSERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User ID to run the instance as",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CRONTASKINSTANCE",
            "parentKeys": "PERSONID",
            "targetKeys": "RUNASUSERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CRONTASKNAME",
            "required": true,
            "persistent": true,
            "title": "Cron Task Name",
            "remarks": "The name of the crontask that this instance belongs to.",
            "sameAsAttribute": "CRONTASKNAME",
            "sameAsObject": "CRONTASKDEF"
        },
        {
            "attributeName": "INSTANCENAME",
            "required": true,
            "persistent": true,
            "title": "Cron Task Instance Name",
            "remarks": "The name of the crontask instance.",
            "sameAsAttribute": "CRONTASKNAME",
            "sameAsObject": "CRONTASKDEF"
        },
        {
            "attributeName": "RELOADREQTIME",
            "required": false,
            "persistent": true,
            "title": "Reload Request Time",
            "remarks": "The time stamp of the last request to reload the crontask instance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULE",
            "required": true,
            "persistent": true,
            "title": "Schedule",
            "remarks": "The string to represent the schedule for the crontask instance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Is the crontask instance active?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the crontask instance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CRONTASKINSTANCEID",
            "required": true,
            "persistent": true,
            "title": "CRONTASKINSTANCEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RUNASUSERID",
            "required": true,
            "persistent": true,
            "title": "Run as User",
            "remarks": "The User ID the crontask instance is running as",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "LASTRUN",
            "required": false,
            "persistent": false,
            "title": "Last Run Timestamp",
            "remarks": "The date time when the previous action took place",
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
        },
        {
            "attributeName": "AUTOREMOVAL",
            "required": true,
            "persistent": true,
            "title": "Auto Removal",
            "remarks": "True to indicate the crontask instance will be unloaded by the crontask manager after its last run and the database entries for this crontask instance will be permanantly removed from the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEXTRUNTMOVERWRITE",
            "required": false,
            "persistent": true,
            "title": "Next Run Time Upon Request",
            "remarks": "Internal date field to indicate the next run time of the crontask instance if it is different than what the schedule calculates to. This field is readonly and cannot be set directly.",
            "sameAsAttribute": "RELOADREQTIME",
            "sameAsObject": "CRONTASKINSTANCE"
        },
        {
            "attributeName": "KEEPHISTORY",
            "required": true,
            "persistent": true,
            "title": "Keep History",
            "remarks": "Whether to keep  the run history of the crontask instance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXHISTORY",
            "required": false,
            "persistent": true,
            "title": "Max Number of History Records",
            "remarks": "Maximum number of history records kept for this crontask instance.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CRONTASKHISTORY",
            "target": "CRONTASKHISTORY",
            "remarks": "The crontask history record for a crontask insance.",
            "whereClause": "crontaskname=:crontaskname and instancename=:instancename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPARAMETER",
            "target": "CRONTASKPARAM",
            "remarks": "parameters for an instance",
            "whereClause": "crontaskname=:crontaskname and instancename=:instancename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARAMETER",
            "target": "CRONTASKPARAM",
            "remarks": null,
            "whereClause": "crontaskname=:crontaskname and instancename=:instancename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DATESELECTOR",
            "target": "DATESELECTOR",
            "remarks": "date selector pattern for Cron Task",
            "whereClause": "pattern = :schedule",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCRONTASKINSTANCELONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "long description record for crontaskinstance",
            "whereClause": "ldkey=:crontaskinstanceid and ldownertable = 'CRONTASKINSTANCE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMFORECASTCOSTCRONPARAM",
            "target": "PMFORECASTCOSTCRONPARAM",
            "remarks": "Relationship to the PMFORECASTCOSTCRONPARAM table. Used to get the crontask parameter for a given instance.",
            "whereClause": "crontaskname=:crontaskname and instancename=:instancename",
            "cardinality": null
        },
        {
            "name": "PMFORECASTCRONPARAM",
            "target": "PMFORECASTCRONPARAM",
            "remarks": "Relationship to the PMFORECASTCRONPARAM table. Used to get the crontask parameter for a given instance.",
            "whereClause": "crontaskname=:crontaskname and instancename=:instancename",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "ACTIVEINSTANCE",
            "source": "CRONTASKDEF",
            "remarks": "Active crontask instances",
            "whereClause": "crontaskname=:crontaskname and active=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRONTASKINSTANCE",
            "source": "CRONTASKDEF",
            "remarks": null,
            "whereClause": "crontaskname=:crontaskname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ESCLASTRUN",
            "source": "ESCALATION",
            "remarks": "Relationship for LASTRUN",
            "whereClause": "crontaskname = :crontaskname and instancename = :instancename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRLASTRUN",
            "source": "INBOUNDCOMMCFG",
            "remarks": "Relationship for LASTRUN",
            "whereClause": "crontaskname = :crontaskname and instancename = :crontaskinstance",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRONTASKINSTANCE",
            "source": "INBOUNDCOMMCFG",
            "remarks": "Relationship between INBOUNDCOMMCFG and CRONTASKINSTANCE",
            "whereClause": "crontaskname=:crontaskname and instancename = :crontaskinstance",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRONTASKINSTANCE",
            "source": "KPISCHEDULE",
            "remarks": "Relationship from the KPI Schedule table to the crontask instance table",
            "whereClause": "crontaskname='KPICronTask' and instancename=:instancename",
            "cardinality": null
        },
        {
            "name": "CRONTASKINSTANCE",
            "source": "MAXUSER",
            "remarks": "MaxUser to CronTaskInstance, for users in active crontasks",
            "whereClause": "runasuserid = :userid and active = :yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRONTASKINSTANCE",
            "source": "REPORTSCHED",
            "remarks": "Relationship between REPORTSCHED and CRONTASKINSTANCE tables",
            "whereClause": "crontaskname=:crontaskname and instancename=:instancename",
            "cardinality": "UNDEFINED"
        }
    ]
}