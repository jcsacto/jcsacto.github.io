mos = {
    "objectName": "RECONTASK",
    "className": "psdi.app.recontask.ReconTaskSet",
    "description": "Reconciliation Task",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "RECONTASKID",
    "primaryKeyColumns": [
        "TASKNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "RECONTASK",
            "targetObject": "RECONTASKCOMP",
            "parentKeys": "TASKNAME",
            "targetKeys": "TASKNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reconcilation Task",
            "longDescription": null
        },
        {
            "objectName": "RECONTASK",
            "targetObject": "RECONTASKLINK",
            "parentKeys": "TASKNAME",
            "targetKeys": "TASKNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reconcilation Task",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "RECONTASK",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "RECONTASKFILTER",
            "targetObject": "RECONTASK",
            "parentKeys": "FILTERNAME",
            "targetKeys": "FILTERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reconcilation Task Filter",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RECONTASKID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKNAME",
            "required": true,
            "persistent": true,
            "title": "Reconciliation Task",
            "remarks": "Task Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the reconciliation task. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILTERNAME",
            "required": false,
            "persistent": true,
            "title": "Task Filter",
            "remarks": "Specifies a task filter to use when this reconciliation task is executed. A task filter specifies either a subset of authorized IT assets or a subset of deployed assets to evaluate. You can select an existing task filter, go to the Task Filters application to create a new task filter, or leave the field blank. If you do not define a task filter, Maximo reconciles the deployed assets against all authorized IT assets.",
            "sameAsAttribute": "FILTERNAME",
            "sameAsObject": "RECONTASKFILTER"
        },
        {
            "attributeName": "ISCASESENSITIVE",
            "required": true,
            "persistent": true,
            "title": "Is Case Sensitive",
            "remarks": "Specifies whether or not the task is case sensitive. If this check box is selected, all data included in the task is case sensitive, including data entered for a task filter, comparison rule(s) and all link rules associated with the task. If the check box is empty, data in the task is not case sensitive.",
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
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESULTOPTION",
            "required": false,
            "persistent": true,
            "title": "Comparison Results",
            "remarks": "Specifies which comparison results Maximo should add to the Reconciliation Results application.",
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
            "attributeName": "RECONTYPE",
            "required": false,
            "persistent": true,
            "title": "Data Set 1",
            "remarks": "Used to categorize the type of reconciliation task being configured.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPSET",
            "required": false,
            "persistent": true,
            "title": "Data Set 2",
            "remarks": "Used to categorize set of data being compared in this reconciliation type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPLETIONDATE",
            "required": false,
            "persistent": true,
            "title": "Last Completion Date",
            "remarks": "The date and time this reconciliation task completed execution.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMACTIVE",
            "required": true,
            "persistent": false,
            "title": "Active",
            "remarks": "Specifies whether the reconciliation task is active. If the check box is selected, the cron task searches records against the business object that meet the criteria defined in the reconciliation task and triggers actions, notifications, or both. If the check box is cleared (the default), the reconciliation task does not monitor Maximo for those records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULE",
            "required": false,
            "persistent": false,
            "title": "Schedule",
            "remarks": "Schedule string that indicates how often or when you want the crontask to monitor Maximo for records meeting the criteria defined in the reconciliation task, for example, every 30 minutes. Click the Set Schedule button to define the schedule or frequency.",
            "sameAsAttribute": "SCHEDULE",
            "sameAsObject": "CRONTASKINSTANCE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "RECONTASK_CRONTASKPARAM",
            "target": "CRONTASKPARAM",
            "remarks": "REconTask to CRONTASKPARAM",
            "whereClause": "value=:taskname and crontaskname in (select crontaskname from crontaskdef where classname='psdi.app.recontask.engine.ReconCronTask')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DATESELECTOR",
            "target": "DATESELECTOR",
            "remarks": "Date selector pattern for Cron Task",
            "whereClause": "pattern = :schedule",
            "cardinality": null
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from RECONTASK.",
            "whereClause": "ldkey=:recontaskid and ldownertable = 'RECONTASK'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONTASK_RECONCOMPRULE",
            "target": "RECONCOMPRULE",
            "remarks": "Comparison Rules with full ci relationship comparison for a Task ",
            "whereClause": "RULENAME in (select RULENAME from RECONTASK,RECONTASKCOMP, RECONCOMPRULE where RECONTASKCOMP.taskname=:taskname and  RECONTASKCOMP.COMPRULENAME =RECONCOMPRULE.RULENAME and RECONCOMPRULE.FULLCICOMPARE = 1)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONTASK_RECONLINKRULE",
            "target": "RECONLINKRULE",
            "remarks": "Link Rules for a Task",
            "whereClause": "rulename in (select linkrulename from recontasklink where taskname=:taskname)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONTASK_RECONTASKCOMP",
            "target": "RECONTASKCOMP",
            "remarks": "Comparison Rules for a Task",
            "whereClause": "taskname=:taskname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONTASK_RECONTASKFILTER",
            "target": "RECONTASKFILTER",
            "remarks": "Filters for a Reconciliation Task",
            "whereClause": "filtername=:filtername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONTASK_RECONTASKLINK",
            "target": "RECONTASKLINK",
            "remarks": "Link Rules for a Task",
            "whereClause": "taskname=:taskname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RECONTASK",
            "source": "RECONASSETRESULT",
            "remarks": "Relationship to the Recontask table, used to find the recontask record for the recon asset result based on the recontaskid.",
            "whereClause": "recontaskid=:recontaskid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONTASK",
            "source": "RECONCIRESULT",
            "remarks": "Relationship to the Recontask table, used to find the recontask record for the reconciresult based on the recontaskid.",
            "whereClause": "recontaskid=:recontaskid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONFILTER_RECONTASK",
            "source": "RECONTASKFILTER",
            "remarks": "ReconTaskFilter to ReconTask",
            "whereClause": "filtername=:filtername",
            "cardinality": "UNDEFINED"
        }
    ]
}