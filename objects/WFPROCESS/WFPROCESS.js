mos = {
    "objectName": "WFPROCESS",
    "className": "psdi.workflow.WFProcessSet",
    "description": "Process header. This table is the process header",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "WFPROCESSID",
    "primaryKeyColumns": [
        "PROCESSNAME",
        "PROCESSREV"
    ],
    "logicalRelationships": [
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFACTION",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Actions in the design of a workflow process.1",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFASGNGROUP",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFCALLSTACK",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFCONDITION",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFINPUT",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFINTERACTION",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "LAUNCHPROCESS, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFINTERACTION",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFINTERACTION",
            "parentKeys": "PROCESSNAME",
            "targetKeys": "LAUNCHPROCESS",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "The process to launch after the interaction completes.",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFNODE",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "2 to many",
            "status": "VERIFIED",
            "description": "Nodes in the design of the workflow process. At minimum there will be a Start and a Stop node.",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFNOTIFICATION",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFREVISION",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "MAINPROCESS, PROCESSREV",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "For activated processes, the list of validated processes that would be executed as part of a workflow instance.",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFREVISION",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Process that is called for a main process instance.",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFSTART",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFSTOP",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFSUBPROCESS",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFSUBPROCESS",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "SUBPROCESSNAME, PROCESSREV",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Process to run as a sub-process when the node is reached.",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFSUBPROCESS",
            "parentKeys": "PROCESSNAME",
            "targetKeys": "SUBPROCESSNAME",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "The process to run as a sub-process when this node is reached.",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFTASK",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFTRANSACTION",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "WFPROCESS",
            "targetObject": "WFWAITLIST",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "WFPROCESS",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "WFPROCESS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo type the Workflow process executes only, exclusively.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WFPROCESS",
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
            "attributeName": "PROCESSNAME",
            "required": true,
            "persistent": true,
            "title": "Process",
            "remarks": "Name of the process.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the process",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENABLED",
            "required": true,
            "persistent": true,
            "title": "Enabled",
            "remarks": "Is the process is available to be used?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSREV",
            "required": true,
            "persistent": true,
            "title": "Process Revision",
            "remarks": "Revision for the process",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "The user that last changed the wfprocess row.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "The Date the wfprocess row was changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MIGRATED",
            "required": true,
            "persistent": true,
            "title": "Migrated",
            "remarks": "Was this template created during the 4.1.1 upgrade?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Description of the process",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object",
            "remarks": "Type of Mbo this process is meant for.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Is process available to initiate on Mbos?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WFPROCESSID",
            "required": true,
            "persistent": true,
            "title": "WFPROCESSID",
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
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender Systyem ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Ref ID",
            "remarks": "External Ref ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOINITIATE",
            "required": true,
            "persistent": true,
            "title": "Interactive Initiate",
            "remarks": "Start this process when a MBO is entered interactively?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WFZOOM",
            "required": false,
            "persistent": false,
            "title": "Zoom",
            "remarks": "Process zoom factor",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSDESC",
            "required": false,
            "persistent": false,
            "title": "Name and Description",
            "remarks": "Process Name and Description combined for display",
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
            "attributeName": "DELETABLE",
            "required": false,
            "persistent": true,
            "title": "Allow Deletion",
            "remarks": "Can records be deleted after having this workflow run on them?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWDELETABLE",
            "required": true,
            "persistent": false,
            "title": "Allow Deletion",
            "remarks": "Deletable after having this workflow run on them?",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "APPSUPPORT",
            "target": "APPSUPPORT",
            "remarks": "Parameter set for adding Workflow support to applications.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EDITWFAPPTOOLBAR",
            "target": "EDITWFAPPTOOLBAR",
            "remarks": "Relationship to action set EditWFAppToolBar.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from WFPROCESS.",
            "whereClause": "ldkey=:wfprocessid and ldownertable = 'WFPROCESS'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFAPPTOOLBAR",
            "target": "WFAPPTOOLBAR",
            "remarks": "This relationship gets all the toolbar info. (1=1). Zero to many member set.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "target": "WFASSIGNMENT",
            "remarks": "Relationship to WFPROCESS from WFPROCESS, which displays all active WFPROCESS records. This relationship will find 0 or more objects.",
            "whereClause": "processname=:processname and processrev=:processrev and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFINSTANCE",
            "target": "WFINSTANCE",
            "remarks": "Relationship to WFINSTANCE from WFPROCESS, which displays all WFINSTANCE for that process revision records. This relationship will find 0 or more objects.",
            "whereClause": "processname = :processname and revision in (select revision from wfrevision where processname = mainprocess and processname = :processname and processrev = :processrev)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NODES",
            "target": "WFNODE",
            "remarks": "Relationship to the WFNode table, used to find all nodes for a process.\t(wfnode.processid = wfprocess.processid and wfnode.processrev = wfprocess.processrev). This resulting set will contain zero or more objects.",
            "whereClause": "processname = :processname and processrev = :processrev",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NOTIFICATIONS",
            "target": "WFNOTIFICATION",
            "remarks": " ",
            "whereClause": "processname=:processname and processrev=:processrev",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REVISIONS",
            "target": "WFREVISION",
            "remarks": "Gets the list of subprocesses synchronized with the active main process. (mainprocess = :processname and mainprocess != processname and revision = (select max(revision) from wfrevision where mainprocess = :processname). The set can have zero to many members.",
            "whereClause": "mainprocess = :processname and mainprocess != processname and revision = (select max(revision) from wfrevision where mainprocess = :processname)",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WFPROCESS",
            "source": "COMMLOG",
            "remarks": "Relationship to get the original workflow process",
            "whereClause": "wfprocessid=:uniqueid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFPROCESS",
            "source": "INBOUNDCOMMCFG",
            "remarks": "Relationship between INBOUNDCOMMCFG and WFPROCESS",
            "whereClause": "processname=:wfprocess",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFPROCESS",
            "source": "MFMAILCFG",
            "remarks": "Relationship to the WFPROCESS table, used to find the active records in work flow processes",
            "whereClause": "processname = :wfname and active = 1",
            "cardinality": null
        },
        {
            "name": "WFPROCESS",
            "source": "SHOWWFSUBPROCESS",
            "remarks": "Relationship to WFProcess.",
            "whereClause": "processname = :subprocessname and processrev = (select max(processrev) from wfprocess where processname = :subprocessname)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFPROCESS",
            "source": "WFAPPTOOLBAR",
            "remarks": "Relationship to the processname called by the button. (processname = :processname). Single member set.",
            "whereClause": "processname = :processname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFPROCESS",
            "source": "WFASSIGNMENT",
            "remarks": null,
            "whereClause": "processrev=:processrev and processname=:processname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFPROCESS",
            "source": "WFINSTANCE",
            "remarks": "Relationship to WFPROCESS from WFINSTANCE, which display all records where processnames and process revision match between WFPROCESS and WFINSTANCE.  This relationship will find 0 or more objects.",
            "whereClause": "processname = :processname and processrev = (select processrev from wfrevision where processname = mainprocess and processname = :processname and revision = :revision)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFPROCESS",
            "source": "WFSUBPROCESS",
            "remarks": "Relationship to WFProcess.",
            "whereClause": "processname = :subprocessname and processrev = (select max(processrev) from wfprocess where processname = :subprocessname)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROC",
            "source": "WFTRANSACTION",
            "remarks": null,
            "whereClause": "processname=:processname and processrev = :processrev",
            "cardinality": "UNDEFINED"
        }
    ]
}