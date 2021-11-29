mos = {
    "objectName": "FINCNTRL",
    "className": "psdi.app.financial.FinControlSet",
    "description": "Financial Control Entities",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "FINCNTRLUID",
    "primaryKeyColumns": [
        "ORGID",
        "FINCNTRLID"
    ],
    "logicalRelationships": [
        {
            "objectName": "FINCNTRL",
            "targetObject": "DEPTRANS",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "FINCNTRL",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, PARENTFINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "INVOICECOST",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "INVRESERVE",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "LABTRANS",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "MATRECTRANS",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "MATUSETRANS",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "MR",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "MRCOST",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "MRLINE",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "POCOST",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "POLINE",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "PRCOST",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "PRLINE",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control that applies to PR Line",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "RFQLINE",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "TOOLTRANS",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "CALCORGID, FINCNTRLID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control for Activity",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "CALCORGID, FINCNTRLID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "CALCORGID, FINCNTRLID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "CALCORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "WOSTATUS",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "FINCNTRL",
            "targetObject": "FINCNTRL",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, PARENTFINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Financial Control",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "FINCNTRL",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "FINCNTRL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "FINCNTRL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "FINCNTRL",
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
            "attributeName": "FINCNTRLID",
            "required": true,
            "persistent": true,
            "title": "FCID",
            "remarks": "Unique Financial Control Identifier",
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
            "attributeName": "BUDGETID",
            "required": false,
            "persistent": true,
            "title": "Budget",
            "remarks": "Budget Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUDGETLINEID",
            "required": false,
            "persistent": true,
            "title": "Budget Line",
            "remarks": "Budget Line Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROJECTID",
            "required": false,
            "persistent": true,
            "title": "Project",
            "remarks": "Project Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": true,
            "title": "Task",
            "remarks": "Task Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUDGETTYPE",
            "required": false,
            "persistent": true,
            "title": "Budget Type",
            "remarks": "Budget type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUDGETLINETYPE",
            "required": false,
            "persistent": true,
            "title": "Budget Line Type",
            "remarks": "Budget line type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROJECTTYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Project type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKTYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Task type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENTFINCNTRLID",
            "required": false,
            "persistent": true,
            "title": "Parent FCID",
            "remarks": "Parent Financial Control Identifier",
            "sameAsAttribute": "FINCNTRLID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "TASKLEVEL",
            "required": false,
            "persistent": true,
            "title": "Task Level",
            "remarks": "Level from the top in a prent-child task-subtask relationship",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUDGETCOST",
            "required": false,
            "persistent": true,
            "title": "Budgeted Amount",
            "remarks": "Budgeted Amount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTUALCOST",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "Actual Amount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BURDENEDCOST",
            "required": false,
            "persistent": true,
            "title": "Burdened Amount",
            "remarks": "Burdened Amount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALLOCATEDCOST",
            "required": false,
            "persistent": true,
            "title": "Allocated Amount",
            "remarks": "Allocated Amount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMITTEDCOST",
            "required": false,
            "persistent": true,
            "title": "Committed Amount",
            "remarks": "Committed Amount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMAININGCOST",
            "required": false,
            "persistent": true,
            "title": "Remaining Amount",
            "remarks": "Remaining Amount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASOFDATE",
            "required": false,
            "persistent": true,
            "title": "Last Reported Date",
            "remarks": "Date Last Reported",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Effective start date for the financial control entity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "Effective finish date for the financial control entity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FCTYPE",
            "required": false,
            "persistent": true,
            "title": "FC Type",
            "remarks": "Financial control type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISABLED",
            "required": true,
            "persistent": true,
            "title": "Disabled",
            "remarks": "Indicates whether the financial control entity has been disabled from use",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUMMARY",
            "required": true,
            "persistent": true,
            "title": "Is Summary",
            "remarks": "Indicates whether this is a summary reporting cost entity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISCHARGEABLE",
            "required": true,
            "persistent": true,
            "title": "Is Chargeable",
            "remarks": "Indicates whether costs can be collected for this cost entity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPLATEID",
            "required": false,
            "persistent": true,
            "title": "Template",
            "remarks": "Template Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Souce application system for this financial control entity",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Application system managing the financial control entity",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "The date the financial control entity was last modified",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "The user who last modified the financial control entity",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "SOURCEID",
            "required": false,
            "persistent": true,
            "title": "Source",
            "remarks": "Source Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "FCSTATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of the financial control entity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENTTASKID",
            "required": false,
            "persistent": false,
            "title": "Parent Task",
            "remarks": "PARENTTASKID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENTPROJECTID",
            "required": false,
            "persistent": false,
            "title": "Parent Project",
            "remarks": "PARENTPROJECTID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINCNTRLUID",
            "required": true,
            "persistent": true,
            "title": "FINCNTRLUID",
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
            "name": "FINCONTROLCHILD",
            "target": "FINCNTRL",
            "remarks": "Relationship to the FinCntrl table, used to find all the child records where this financial control identifier has been used as a parent. (fincntrl.fincntrlid = fincntrl.parentfincntrlid and fincntrl.orgid = fincntrl.orgid and fincntrl.siteid = fincntrl.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "parentfincntrlid = :fincntrlid and orgid=:orgid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FINCONTROLPARENT",
            "target": "FINCNTRL",
            "remarks": "Relationship to the FinCntrl table, used to find the parent record for this financial control identifier. (fincntrl.parentfincntrlid = fincntrl.fincntrlid and fincntrl.orgid = fincntrl.orgid and fincntrl.siteid = fincntrl.siteid). The resulting set will contain zero or one object.",
            "whereClause": "fincntrlid = :parentfincntrlid and orgid=:orgid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FINCONTROLTASKS",
            "target": "FINCNTRL",
            "remarks": "Relationship to the FinCntrl table, used to find all the tasks belonging to this financial control projectid. (fincntrl.projectid = fincntrl.projectid and fincntrl.taskid is not null and fincntrl.orgid = fincntrl.orgid and fincntrl.siteid = fincntrl.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "projectid = :projectid and taskid is not null and orgid=:orgid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "FINCONTROLCHILD",
            "source": "FINCNTRL",
            "remarks": "Relationship to the FinCntrl table, used to find all the child records where this financial control identifier has been used as a parent. (fincntrl.fincntrlid = fincntrl.parentfincntrlid and fincntrl.orgid = fincntrl.orgid and fincntrl.siteid = fincntrl.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "parentfincntrlid = :fincntrlid and orgid=:orgid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FINCONTROLPARENT",
            "source": "FINCNTRL",
            "remarks": "Relationship to the FinCntrl table, used to find the parent record for this financial control identifier. (fincntrl.parentfincntrlid = fincntrl.fincntrlid and fincntrl.orgid = fincntrl.orgid and fincntrl.siteid = fincntrl.siteid). The resulting set will contain zero or one object.",
            "whereClause": "fincntrlid = :parentfincntrlid and orgid=:orgid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FINCONTROLTASKS",
            "source": "FINCNTRL",
            "remarks": "Relationship to the FinCntrl table, used to find all the tasks belonging to this financial control projectid. (fincntrl.projectid = fincntrl.projectid and fincntrl.taskid is not null and fincntrl.orgid = fincntrl.orgid and fincntrl.siteid = fincntrl.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "projectid = :projectid and taskid is not null and orgid=:orgid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FINCNTRL",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the FinCntrl table, used to find all financial control records for a given organization. (organization.orgid = site.orgid). The resulting set will contain one or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FINCNTRL",
            "source": "WORKORDER",
            "remarks": "Relationship to the FinCntrl table, used to find the financial control identifier for a work order. (fincntrl.fincntrlid = workorder.fincntrlid). This resulting set will contain zero or one object.",
            "whereClause": "fincntrlid=:fincntrlid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}