mos = {
    "objectName": "WFASSIGNMENT",
    "className": "psdi.workflow.WFAssignmentSet",
    "description": "This table is related to the WFTASK table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "WFASSIGNMENTID",
    "primaryKeyColumns": [
        "ASSIGNID",
        "PROCESSNAME",
        "PROCESSREV",
        "WFID",
        "NODEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "WFASSIGNMENT",
            "targetObject": "WFASGNGROUP",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID, WFID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID, WFID",
            "relNum": "0 to many",
            "status": "VERIFIED",
            "description": "Assignment group for the assignment",
            "longDescription": null
        },
        {
            "objectName": "WFASSIGNMENT",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "ASSIGNID, PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "ASSIGNID, PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Template assignments to generated assignments",
            "longDescription": "Template assignments, with a WFID of 0, are stored in the same table as generated assignments, which will have a\n\t\t\tnon-zero WFID."
        },
        {
            "objectName": "WFASSIGNMENT",
            "targetObject": "WFTRANSACTION",
            "parentKeys": "ASSIGNID, PROCESSNAME, PROCESSREV, WFID, NODEID",
            "targetKeys": "ASSIGNID, PROCESSNAME, PROCESSREV, WFID, NODEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "TEMPLATEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CommTemplate used to send a notification about an assignment from the Workflow process.",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default application for a workflow assignment.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The target Mbo Object of the Workflow Assignment",
            "longDescription": null
        },
        {
            "objectName": "MAXROLE",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "MAXROLE",
            "targetKeys": "ESCROLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Escalation Role for the assignment.",
            "longDescription": null
        },
        {
            "objectName": "MAXROLE",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "MAXROLE",
            "targetKeys": "ROLEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Role for the assignment. The role returns the users that get WF assignments.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "PERSONID",
            "targetKeys": "ASSIGNCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Flow Assignments",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "PERSONID",
            "targetKeys": "ORIGPERSON",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Original Assignee",
            "longDescription": null
        },
        {
            "objectName": "WFASGNGROUP",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID, GROUPNUM, WFID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID, GROUPNUM, WFID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "WFASSIGNMENT",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "ASSIGNID, PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "ASSIGNID, PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Template assignments to generated assignments",
            "longDescription": "Template assignments, with a WFID of 0, are stored in the same table as generated assignments, which will have a\n\t\t\tnon-zero WFID."
        },
        {
            "objectName": "WFINSTANCE",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "WFID",
            "targetKeys": "WFID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": "This is related to the WFTask"
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
            "objectName": "WFTASK",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assignments for this Task.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ASSIGNID",
            "required": true,
            "persistent": true,
            "title": "Assignment",
            "remarks": "Used to uniquely identify an assignment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Displayed by inbox and applications to tell user what needs to be done",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIORITY",
            "required": false,
            "persistent": true,
            "title": "Priority",
            "remarks": "Priority of this assignment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGNCODE",
            "required": false,
            "persistent": true,
            "title": "Assigned Person Code",
            "remarks": "The Person assigned.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Name of the application to launch",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "TIMELIMIT",
            "required": false,
            "persistent": true,
            "title": "Time Limit",
            "remarks": "This is the time in hours that can pass before the task is escalated. Defaults from the task time limit but can be changed.",
            "sameAsAttribute": "TIMELIMIT",
            "sameAsObject": "WFTASK"
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "The DATETIME that the assignment became current. It is set to the current date/time on the server. This value is NULL for process definitions",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DUEDATE",
            "required": false,
            "persistent": true,
            "title": "Due Date",
            "remarks": "The date that the assignment is due according to the escalation time limit.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILNOTIFICATION",
            "required": true,
            "persistent": true,
            "title": "Send E-mail",
            "remarks": "Should the assigned person get an email notification when the task becomes the current task of a process instance.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGNSTATUS",
            "required": false,
            "persistent": true,
            "title": "Assignment Status",
            "remarks": "The status of the assignment: DEFAULT ACTIVE COMPLETE INACTIVE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WFID",
            "required": true,
            "persistent": true,
            "title": "Workflow ID",
            "remarks": "The workflow that this assignment is related to.",
            "sameAsAttribute": "WFID",
            "sameAsObject": "WFINSTANCE"
        },
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node ID",
            "remarks": "The task node that this assignment is related to",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "ASSIGN_01",
            "required": false,
            "persistent": true,
            "title": "Extra Field 1",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGN_02",
            "required": false,
            "persistent": true,
            "title": "Extra Field 2",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGN_03",
            "required": false,
            "persistent": true,
            "title": "Extra Field 3",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGN_04",
            "required": false,
            "persistent": true,
            "title": "Extra Field 4",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGN_05",
            "required": false,
            "persistent": true,
            "title": "Extra Field 5",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSREV",
            "required": true,
            "persistent": true,
            "title": "Process Revision",
            "remarks": "Process Revision",
            "sameAsAttribute": "PROCESSREV",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Displayed by inbox and applications to tell user what needs to be done",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSNAME",
            "required": true,
            "persistent": true,
            "title": "Process",
            "remarks": "Name of the owning process.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "ROLEID",
            "required": false,
            "persistent": true,
            "title": "Role ID",
            "remarks": "Identifies the role for the assignment",
            "sameAsAttribute": "MAXROLE",
            "sameAsObject": "MAXROLE"
        },
        {
            "attributeName": "ORIGPERSON",
            "required": false,
            "persistent": true,
            "title": "Original Assignee",
            "remarks": "The original person for the assignment before any delegation is applied",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "WFASSIGNMENTID",
            "required": true,
            "persistent": true,
            "title": "WFASSIGNMENTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPLATEID",
            "required": false,
            "persistent": true,
            "title": "Communication Template",
            "remarks": "Identifies the Communication Template to use to email assignees.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object",
            "remarks": "Type of Object the process, that owns this assignment, supports.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CONDITION",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "Condition to check to enable this assignment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONCLASS",
            "required": false,
            "persistent": true,
            "title": "Condition Class",
            "remarks": "Name of Object to instanciate to enable conditional assignment.",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OWNERTABLE",
            "required": false,
            "persistent": true,
            "title": "Owner Table",
            "remarks": "Table name of the controlled record",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OWNERID",
            "required": false,
            "persistent": true,
            "title": "Owner ID",
            "remarks": "Unique ID of the controlled record",
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
            "attributeName": "ESCROLE",
            "required": false,
            "persistent": true,
            "title": "Escalation Role",
            "remarks": "Role to use when assignment is escalated.",
            "sameAsAttribute": "MAXROLE",
            "sameAsObject": "MAXROLE"
        },
        {
            "attributeName": "CALENDARBASED",
            "required": true,
            "persistent": true,
            "title": "Calendar Based",
            "remarks": "Is this a calendar based time limit?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYONE",
            "required": true,
            "persistent": false,
            "title": "Display One",
            "remarks": "Display a single complete assignment or simply complete it?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERSQL",
            "required": false,
            "persistent": false,
            "title": "Expression",
            "remarks": "User Entered Expression",
            "sameAsAttribute": "USERSQL",
            "sameAsObject": "EXPBUILDER"
        },
        {
            "attributeName": "ISCUSTOMCLASS",
            "required": true,
            "persistent": false,
            "title": "Custom Class",
            "remarks": "Custom Class",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Owner Description",
            "remarks": "Descriptive text about MBO referenced by the assignment.",
            "sameAsAttribute": "OWNERDESCRIPTION",
            "sameAsObject": "WFINSTANCE"
        },
        {
            "attributeName": "HOSTNAME",
            "required": false,
            "persistent": false,
            "title": "Host Name",
            "remarks": "URL of the MXServer",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTMEMO",
            "required": false,
            "persistent": false,
            "title": "Last Memo",
            "remarks": "The last workflow assignment memo for the workflow instance that has been saved to the database.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
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
            "attributeName": "GROUPNUM",
            "required": false,
            "persistent": true,
            "title": "Group #",
            "remarks": "Group this assignment is a member of",
            "sameAsAttribute": "GROUPNUM",
            "sameAsObject": "WFASGNGROUP"
        },
        {
            "attributeName": "ACCEPTEXPR",
            "required": false,
            "persistent": true,
            "title": "Accept Expression",
            "remarks": "An expression that must evaluate to true before an assignment can be completed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NONACCEPTMSG",
            "required": false,
            "persistent": true,
            "title": "Non-Accept Message",
            "remarks": "Message shown when the assignment cannot be completed due to the Accept Expression.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATIONSHIP",
            "required": false,
            "persistent": true,
            "title": "Assignee Relationship",
            "remarks": "Link to Person, PersonGroup, or MaxRole records to assign.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SEPARATEGROUPS",
            "required": true,
            "persistent": true,
            "title": "Separate Groups",
            "remarks": "Flag to create separate groups for assignments created via the relationship",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENTMEMO",
            "required": false,
            "persistent": false,
            "title": "Current Memo",
            "remarks": "The current workflow assignment memo for the workflow instance that has not been saved to the database, but can be used immediately on the workflow routing action.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "KEEPORIGASSGN",
            "required": true,
            "persistent": true,
            "title": "Preserve Original Assignment when Delegating",
            "remarks": "Indicates if the work should remain assigned to the original owner when the assignment is delegated. Select the check box to preserve the original assignment and also assign the work to the delegate. Clear the check box to assign the work only to the delegate, removing the original assignment. If no delegate is specified, the original assignment remains unchanged.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISOWNERLOCKED",
            "required": false,
            "persistent": false,
            "title": "Is Owner Locked",
            "remarks": "Indicates if the owner MBO is locked.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERLOCKEDBY",
            "required": false,
            "persistent": false,
            "title": "Locked By",
            "remarks": "Person who locked the owner record",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMMTEMPLATE",
            "target": "COMMTEMPLATE",
            "remarks": "Link to communication template used by the assignment. (templateid = :templateid). One member set.",
            "whereClause": "templateid = :templateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPLETEWF",
            "target": "COMPLETEWF",
            "remarks": "Relationship to the nonpersistent parameter set for completing a workflow assignment action.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from WFASSIGNMENT.",
            "whereClause": "ldkey=:wfassignmentid and ldownertable = 'WFASSIGNMENT'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNAPP",
            "target": "MAXAPPS",
            "remarks": "Relationship to get the MAXAPPS description.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROLE",
            "target": "MAXROLE",
            "remarks": "Gets the assignment's role. Returns a single record.",
            "whereClause": "maxrole = :roleid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ESCROLE",
            "target": "MAXROLE",
            "remarks": "Gets the assignments escalation role. Returns a single record.",
            "whereClause": "maxrole = :escrole",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSIGNEE",
            "target": "PERSON",
            "remarks": "Person who is assigned. (personid = :assigncode) Returns a single record for non-template assignments.",
            "whereClause": "personid = :assigncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REASSIGNWF",
            "target": "REASSIGNWF",
            "remarks": "Relationship to the non-persistent REASSIGNWF MBO.",
            "whereClause": "assignee=:assigncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STOPWF",
            "target": "STOPWF",
            "remarks": "Relationship to the non-persistent STOPWF table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIONS",
            "target": "WFACTION",
            "remarks": "Relationship used to find all actions extending from an assignment task node. (processname = :processname and processrev = :processrev and ownernodeid = :nodeid). This resulting set will contain one or two actions.",
            "whereClause": "processname = :processname and processrev = :processrev and ownernodeid = :nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVEASGNGROUP",
            "target": "WFASGNGROUP",
            "remarks": "Active Assignment Groups, relationship to the WFAsgnGroup table. (wftask.processid = wfasgngroup.processid and wftask.processrev = wfasgngroup.processrev and wftask.nodeid = wfasgngroup.nodeid and wfid = 0). This resulting set will contain zero to many objects.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid and wfid = :wfid and active = 1",
            "cardinality": null
        },
        {
            "name": "WFASGNGROUP",
            "target": "WFASGNGROUP",
            "remarks": "Relationship to WFAsgnGroup, used to find group for the assignment. (processname=:processname and processrev=:processrev and nodeid=:nodeid and groupnum=:groupnum and wfid=:wfid) Zero or one record.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid and groupnum=:groupnum and wfid=:wfid",
            "cardinality": null
        },
        {
            "name": "WFEXPBUILDER",
            "target": "WFEXPBUILDER",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFPROCESS",
            "target": "WFPROCESS",
            "remarks": null,
            "whereClause": "processrev=:processrev and processname=:processname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TRANSACTIONS",
            "target": "WFTRANSACTION",
            "remarks": null,
            "whereClause": "nodeid=:nodeid and processname=:processname and wfid=:wfid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEMOS",
            "target": "WFTRANSACTION",
            "remarks": "This relationship gets all the memos for this instance. (wfid=:wfid and memo is not null). Zero to many member set.",
            "whereClause": "wfid = :wfid and memo is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LASTMEMO",
            "target": "WFTRANSACTION",
            "remarks": "Gets the last memo written on the instance for this assignment, if any. (<long>). Empty or one member set.",
            "whereClause": "transid = (select max(transid) from wftransaction where wfid = :wfid and memo is not null and ((nodetype in (select value from synonymdomain where domainid = 'WFNODETYPE' and maxvalue = 'WFINPUT')) or  (transtype in (select value from synonymdomain where domainid = 'WFTRANSTYPE' and maxvalue in ('WFASSIGNCOMP', 'WFFORWARDED', 'WFSTART'))) ) )",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WFASSIGNMENT",
            "source": "INCIDENT",
            "remarks": "Relationship to active assignments on this RFQ. (ownertable = 'RFQ' and ownerid = :rfqid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'INCIDENT' and wfassignment.ownerid = :ticketuid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "source": "INVOICE",
            "remarks": "Relationship to active assignments on this invoice. (ownertable = 'INVOICE' and ownerid = :invoiceid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'INVOICE' and wfassignment.ownerid = :invoiceid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "source": "MAXAPPS",
            "remarks": "Relationship WFAssignment table by app, used to find workflow assignments for an application. ( wfassignment.app = maxapps.app ). This relationship will find 1 or more objects.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "source": "MAXUSER",
            "remarks": "Relationship to active assignments on this workorder. (ownertable = 'MAXUSER' and ownerid = :maxuserid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'MAXUSER' and wfassignment.ownerid = :maxuserid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "source": "MR",
            "remarks": "Relationship to active assignments on this MR. (ownertable = 'MR' and ownerid = :mrid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')) Zero to many member set.",
            "whereClause": "ownertable = 'MR' and wfassignment.ownerid = :mrid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "ownertable = 'PLUSDSPLAN' and wfassignment.ownerid = :plusdsplanid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": null
        },
        {
            "name": "WFASSIGNMENT",
            "source": "PO",
            "remarks": "Relationship to active assignments on this PO. (ownertable = 'PO' and ownerid = :poid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'PO' and wfassignment.ownerid = :poid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "source": "PR",
            "remarks": "Relationship to active assignments on this PR. (ownertable = 'PR' and ownerid = :prid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'PR' and wfassignment.ownerid = :prid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "source": "RFQ",
            "remarks": "Relationship to active assignments on this RFQ. (ownertable = 'RFQ' and ownerid = :rfqid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'RFQ' and wfassignment.ownerid = :rfqid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWFTASKASSIGNMENTS",
            "source": "SHOWWFTASK",
            "remarks": "Relationship to the WFAssignment table, used to edit the task assignments.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "source": "SOLUTION",
            "remarks": "Relationship to active assignments on this RFQ. (ownertable = 'RFQ' and ownerid = :rfqid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'SOLUTION' and wfassignment.ownerid = :solutionid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "source": "SR",
            "remarks": "Relationship to active assignments on this RFQ. (ownertable = 'RFQ' and ownerid = :rfqid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'SR' and wfassignment.ownerid = :ticketuid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "source": "STOPWF",
            "remarks": "This relationship gets the assignments for the instance to stop. (wfid = :wfid and assignstatus in (select value from synonymdomain where domainid = 'WFASGNSTATUS' and maxvalue in ('ACTIVE', 'COMPLETE'))). Zero to many member set.",
            "whereClause": "wfid = :wfid and assignstatus in (select value from synonymdomain where domainid = 'WFASGNSTATUS' and maxvalue in ('ACTIVE', 'COMPLETE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVEASSIGNMENTS",
            "source": "WFINSTANCE",
            "remarks": "This relationship gets the workflow instance to stop. (wfid = :wfid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "wfid = :wfid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPLETEASSIGNMENTS",
            "source": "WFINSTANCE",
            "remarks": "Gets all non-active assignments for the instance. Any number member set.",
            "whereClause": "wfid = :wfid and assignstatus not in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFINEDASSIGNMENTS",
            "source": "WFNODE",
            "remarks": "Relationship to the WFAssignment table, used to find the defined assignments for a task node. (wftask.processid = wfassignment.processid and wftask.processrev = wfassignment.processrev and wftask.nodeid = wfassignment.nodeid and wfid = 0). This resulting set will contain one or more objects.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid and wfid = 0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "source": "WFPROCESS",
            "remarks": "Relationship to WFPROCESS from WFPROCESS, which displays all active WFPROCESS records. This relationship will find 0 or more objects.",
            "whereClause": "processname=:processname and processrev=:processrev and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSIGN",
            "source": "WFTRANSACTION",
            "remarks": null,
            "whereClause": "processname=:processname and wfid=:wfid and assignid=:assignid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "source": "WOACTIVITY",
            "remarks": "Relationship to active assignments on this RFQ. (ownertable = 'RFQ' and ownerid = :rfqid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'WOACTIVITY' and wfassignment.ownerid = :workorderid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "source": "WOCHANGE",
            "remarks": "Relationship to active assignments on this WOCHANGE. (ownertable = 'WOCHANGE' and ownerid = :workorderid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')) Zero to many member set.",
            "whereClause": "ownertable = 'WOCHANGE' and wfassignment.ownerid = :workorderid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "source": "WORKORDER",
            "remarks": "Relationship to active assignments on this workorder. (ownertable = 'WORKORDER' and ownerid = :workorderid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'WORKORDER' and wfassignment.ownerid = :workorderid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        }
    ]
}