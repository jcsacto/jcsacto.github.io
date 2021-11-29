mos = {
    "objectName": "WFNODE",
    "className": "psdi.workflow.WFNodeSet",
    "description": "This tables entries represent the generic node",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WFNODEID",
    "primaryKeyColumns": [
        "PROCESSNAME",
        "PROCESSREV",
        "NODEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "WFNODE",
            "targetObject": "WFACTION",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, MEMBERNODEID",
            "relNum": "0 to many",
            "status": "VERIFIED",
            "description": "Workflow actions extending from the node",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFACTION",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, OWNERNODEID",
            "relNum": "0 to many",
            "status": "VERIFIED",
            "description": "Workflow actions pointing to the node",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFASGNGROUP",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": "This is related to the WFAssignment"
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
            "objectName": "WFNODE",
            "targetObject": "WFCALLSTACK",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFCONDITION",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Condition node attributes",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFINPUT",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Input node attributes",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFINTERACTION",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Interaction node attributes",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFINTERACTION",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "LAUNCHPROCESS, PROCESSREV, NODEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFNOTIFICATION",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Notification defined on the Workflow Node",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFSTART",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Start node attributes",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFSTOP",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Stop node attributes",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFSUBPROCESS",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Subprocess node attributes",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFSUBPROCESS",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "SUBPROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFTASK",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Task node attributes",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFTRANSACTION",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Transactions related to a Workflow Node.",
            "longDescription": null
        },
        {
            "objectName": "WFNODE",
            "targetObject": "WFWAITLIST",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "WaitList node information.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "WFNODE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
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
        }
    ],
    "columns": [
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node ID",
            "remarks": "Unique ID for the node.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NODETYPE",
            "required": true,
            "persistent": true,
            "title": "Node Type",
            "remarks": "The type of node",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "XCOORDINATE",
            "required": false,
            "persistent": true,
            "title": "X Coordinate",
            "remarks": "X Coordinate on the graphical palette.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "YCOORDINATE",
            "required": false,
            "persistent": true,
            "title": "Y Coordinate",
            "remarks": "Y Coordinate on the graphical palette.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMAGEFILE",
            "required": false,
            "persistent": true,
            "title": "Image File",
            "remarks": "The filename of the IMAGE to be displayed for this type of node.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TITLE",
            "required": false,
            "persistent": true,
            "title": "Title",
            "remarks": "Name of the node.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the node",
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
            "remarks": "Long Description for Description of the node",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAKENEGATIVE",
            "required": true,
            "persistent": false,
            "title": "Take Negative",
            "remarks": "Take Negative",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAKEPOSITIVE",
            "required": true,
            "persistent": false,
            "title": "Take Positive",
            "remarks": "Take Positive",
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
            "attributeName": "WFNODEID",
            "required": true,
            "persistent": true,
            "title": "WFNODEID",
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
        },
        {
            "attributeName": "POINTEDTO",
            "required": false,
            "persistent": false,
            "title": "Pointed To By",
            "remarks": "List on nodes that point to this one",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from WFNODE.",
            "whereClause": "ldkey=:wfnodeid and ldownertable = 'WFNODE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWFCONDITION",
            "target": "SHOWWFCONDITION",
            "remarks": "Relationship to the ShowWFCondition non-persistantobject, used to edit a WFCONDITION.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWFINPUT",
            "target": "SHOWWFINPUT",
            "remarks": "Relationship to the ShowWFInput non-persistantobject, used to edit a WFINPUT.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWFINTERACT",
            "target": "SHOWWFINTERACT",
            "remarks": "Relationship to the ShowWFInteract non-persistantobject, used to edit a WFINTERACTION.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWFNODE",
            "target": "SHOWWFNODE",
            "remarks": "Relationship to the ShowWFNodet non-persistantobject, used to edit a WFNODE.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWFSUBPROCESS",
            "target": "SHOWWFSUBPROCESS",
            "remarks": "Relationship to the ShowWFSubprocess non-persistantobject, used to edit a WFSUBPROCESS.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWFTASK",
            "target": "SHOWWFTASK",
            "remarks": "Relationship to the ShowWFTask non-persistantobject, used to edit a WFTASK.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWFWAIT",
            "target": "SHOWWFWAIT",
            "remarks": "Relationship to the ShowWFWait nonpersistant object, used to edit a wait node.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENTERINGACTIONS",
            "target": "WFACTION",
            "remarks": "The actions extending to this node. Set contains zero to many objects.",
            "whereClause": "processname=:processname and processrev=:processrev and membernodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIONS",
            "target": "WFACTION",
            "remarks": "Relationship to the WFAction table, used to find all actions extending from a node, of any node type. (wfnode.processid = wfaction.processid and wfnode.processrev = wfaction.processrev and wfnode.nodeid = wfaction.ownernodeid). This resulting set will contain zero or more objects.",
            "whereClause": "processname = :processname and processrev = :processrev and ownernodeid = :nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASGNGROUP",
            "target": "WFASGNGROUP",
            "remarks": "Template Assignment Groups, relationship to the WFAsgnGroup table. (wftask.processid = wfasgngroup.processid and wftask.processrev = wfasgngroup.processrev and wftask.nodeid = wfasgngroup.nodeid and wfid = 0). This resulting set will contain zero to many objects.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid and wfid = 0",
            "cardinality": null
        },
        {
            "name": "DEFINEDASSIGNMENTS",
            "target": "WFASSIGNMENT",
            "remarks": "Relationship to the WFAssignment table, used to find the defined assignments for a task node. (wftask.processid = wfassignment.processid and wftask.processrev = wfassignment.processrev and wftask.nodeid = wfassignment.nodeid and wfid = 0). This resulting set will contain one or more objects.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid and wfid = 0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONDITION",
            "target": "WFCONDITION",
            "remarks": "Relationship to the WFCondition table, used to find the companion Mbo for a condition node. (wfnode.processid=wfstart.processid and wfnode.processrev=wfstart.processrev and wfnode.nodeid=wfstart.nodeid). This resulting set will contain one record if the nodetype is 'WFCONDITION' and zero otherwise.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INPUT",
            "target": "WFINPUT",
            "remarks": "Relationship to the WFInput table, used to find the companion Mbo for a input node. (wfnode.processid=wfstart.processid and wfnode.processrev=wfstart.processrev and wfnode.nodeid=wfstart.nodeid). This resulting set will contain one record if the nodetype is 'WFINPUT' and zero otherwise.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INTERACTION",
            "target": "WFINTERACTION",
            "remarks": "Relationship to details for a WFInteraction node. One member set.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NOTIFICATIONS",
            "target": "WFNOTIFICATION",
            "remarks": "Relationship to the WFNotification table which holds the notifications for the task node.  (processid=:processid and processid=:processid and nodeid = :nodeid and actionid = 0). This resulting set will contain zero to many objects.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid and actionid = 0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "START",
            "target": "WFSTART",
            "remarks": "Relationship to the WFStart table, used to find the companion Mbo for a start node. (wfnode.processid=wfstart.processid and wfnode.processrev=wfstart.processrev and wfnode.nodeid=wfstart.nodeid). This resulting set will contain one record if the nodetype is 'WFSTART' and zero otherwise.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STOP",
            "target": "WFSTOP",
            "remarks": "Relationship to the WFStop table, used to find the companion Mbo for a stop node. (wfnode.processid=wfstart.processid and wfnode.processrev=wfstart.processrev and wfnode.nodeid=wfstart.nodeid). This resulting set will contain one record if the nodetype is 'WFSTOP' and zero otherwise.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SUBPROCESS",
            "target": "WFSUBPROCESS",
            "remarks": "Relationship to the WFSubProcess table, used to find the companion Mbo for a subprocess node. (wfnode.processid=wfstart.processid and wfnode.processrev=wfstart.processrev and wfnode.nodeid=wfstart.nodeid). This resulting set will contain one record if the nodetype is 'WFSUBPROCESS' and zero otherwise.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TASK",
            "target": "WFTASK",
            "remarks": "Relationship to the WFTask table, used to find the companion Mbo for a task node. (wfnode.processid=wfstart.processid and wfnode.processrev=wfstart.processrev and wfnode.nodeid=wfstart.nodeid). This resulting set will contain one record if the nodetype is 'WFTASK' and zero otherwise.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WAITLIST",
            "target": "WFWAITLIST",
            "remarks": "List of things to wait for a Wait Node.  Returns one or many records.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WFTASK",
            "source": "MFMAILCFG",
            "remarks": "Relationship to the WFTASK table, used to find the tasks which specified in workflow process",
            "whereClause": "processname = :wfname and processrev = (select processrev from wfprocess where  active = :yes and processname = :wfname) and nodetype in (select value from synonymdomain where domainid='WFNODETYPE' and maxvalue='WFTASK')",
            "cardinality": null
        },
        {
            "name": "WFNODE",
            "source": "MFMAILWFNODECFG",
            "remarks": "Relationship to the WFNODE table, used to find the workflow nodes from parent's WFNAME field",
            "whereClause": "nodeid = :wfnode and processname = (select wfname from mfmailcfg where mfmailcfgnum = :mfmailcfgnum) and processrev = (select processrev from wfprocess where  active = :yes and processname =  (select wfname from mfmailcfg where mfmailcfgnum = :mfmailcfgnum))",
            "cardinality": null
        },
        {
            "name": "MEMBERNODE",
            "source": "WFACTION",
            "remarks": "Relationship to the membernode of the wfaction.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid = :membernodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NODES",
            "source": "WFCALLSTACK",
            "remarks": "Nodes associated with the (sub)process referenced by the call stack. Set contains zero to many objects.",
            "whereClause": "processname=:processname and processrev=:processrev",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NODES",
            "source": "WFPROCESS",
            "remarks": "Relationship to the WFNode table, used to find all nodes for a process.\t(wfnode.processid = wfprocess.processid and wfnode.processrev = wfprocess.processrev). This resulting set will contain zero or more objects.",
            "whereClause": "processname = :processname and processrev = :processrev",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NODE",
            "source": "WFTRANSACTION",
            "remarks": null,
            "whereClause": "processname=:processname and nodeid=:nodeid and processrev = :processrev",
            "cardinality": "UNDEFINED"
        }
    ]
}