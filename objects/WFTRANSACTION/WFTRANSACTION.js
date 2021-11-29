mos = {
    "objectName": "WFTRANSACTION",
    "className": "psdi.workflow.WFTransactionSet",
    "description": "Stores transactions against a workflow instance",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TRANSID",
    "primaryKeyColumns": [
        "TRANSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTION",
            "targetObject": "WFTRANSACTION",
            "parentKeys": "ACTION",
            "targetKeys": "ACTIONPERFORMED",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action performed as part of workflow.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "WFTRANSACTION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The target Mbo Object of the Workflow transaction",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WFTRANSACTION",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who caused the transaction",
            "longDescription": null
        },
        {
            "objectName": "WFACTION",
            "targetObject": "WFTRANSACTION",
            "parentKeys": "PROCESSNAME, PROCESSREV, ACTIONID",
            "targetKeys": "PROCESSNAME, PROCESSREV, ACTIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Executed Notification on Workflow Action",
            "longDescription": null
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
        },
        {
            "objectName": "WFINSTANCE",
            "targetObject": "WFTRANSACTION",
            "parentKeys": "WFID",
            "targetKeys": "WFID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Transaction records created during the run of the workflow instance.",
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
            "objectName": "WFPROCESS",
            "targetObject": "WFTRANSACTION",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TRANSID",
            "required": true,
            "persistent": true,
            "title": "Trans ID",
            "remarks": "Unique id for each transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node ID",
            "remarks": "The node that this transaction occurred on.",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "WFID",
            "required": true,
            "persistent": true,
            "title": "Workflow ID",
            "remarks": "The workflow that this transaction occurred in.",
            "sameAsAttribute": "WFID",
            "sameAsObject": "WFINSTANCE"
        },
        {
            "attributeName": "ASSIGNID",
            "required": false,
            "persistent": true,
            "title": "Assignment",
            "remarks": "The assignment that this transaction is related to in order to get historical information about timing and completion of assignments.",
            "sameAsAttribute": "ASSIGNID",
            "sameAsObject": "WFASSIGNMENT"
        },
        {
            "attributeName": "TRANSTYPE",
            "required": true,
            "persistent": true,
            "title": "Transaction Type",
            "remarks": "Type of Transaction. This will be one of the valid node types: WFSTART, WFSTOP, WFTASK, WFCONDITION, WFINPUT, WFSUBPROCESS",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TRANSDATE",
            "required": true,
            "persistent": true,
            "title": "Transaction Date",
            "remarks": "Date of transaction",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Descriptive data field for end user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIONID",
            "required": false,
            "persistent": true,
            "title": "Action",
            "remarks": "Uniquely identifies an action in a process",
            "sameAsAttribute": "ACTIONID",
            "sameAsObject": "WFACTION"
        },
        {
            "attributeName": "NODETYPE",
            "required": true,
            "persistent": true,
            "title": "Node Type",
            "remarks": "The type of node",
            "sameAsAttribute": "NODETYPE",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "PROCESSREV",
            "required": false,
            "persistent": true,
            "title": "Process Revision",
            "remarks": "Process Revision",
            "sameAsAttribute": "PROCESSREV",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "REASSIGNED",
            "required": true,
            "persistent": false,
            "title": "Reassigned",
            "remarks": "REASSIGNED",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIONTAKEN",
            "required": false,
            "persistent": false,
            "title": "Action String",
            "remarks": "ACTIONTAKEN",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSNAME",
            "required": true,
            "persistent": true,
            "title": "Process",
            "remarks": "Name of the creating process.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "PERSONID",
            "required": false,
            "persistent": true,
            "title": "Person",
            "remarks": "Person who caused the transaction.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
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
            "attributeName": "ACTIONPERFORMED",
            "required": false,
            "persistent": true,
            "title": "Action Performed",
            "remarks": "Action performed at transaction.",
            "sameAsAttribute": "ACTION",
            "sameAsObject": "ACTION"
        },
        {
            "attributeName": "WFTASKTYPE",
            "required": false,
            "persistent": true,
            "title": "Task Type",
            "remarks": "Field to differentiate task types, e.g., approval task or a domain",
            "sameAsAttribute": "WFTASKTYPE",
            "sameAsObject": "WFTASK"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ACTIONPERFORMED",
            "target": "ACTION",
            "remarks": "This relationship gets the action performed when the transaction was recorded. (action = :actionperformed). Empty or one member set.",
            "whereClause": "action = :actionperformed",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTION",
            "target": "WFACTION",
            "remarks": null,
            "whereClause": "processname=:processname and actionid=:actionid and processrev = :processrev",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSIGN",
            "target": "WFASSIGNMENT",
            "remarks": null,
            "whereClause": "processname=:processname and wfid=:wfid and assignid=:assignid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INSTANCE",
            "target": "WFINSTANCE",
            "remarks": null,
            "whereClause": "wfid = :wfid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NODE",
            "target": "WFNODE",
            "remarks": null,
            "whereClause": "processname=:processname and nodeid=:nodeid and processrev = :processrev",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROC",
            "target": "WFPROCESS",
            "remarks": null,
            "whereClause": "processname=:processname and processrev = :processrev",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MEMOS",
            "source": "COMPLETEWF",
            "remarks": null,
            "whereClause": "wfid= :wfid and memo is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "source": "INCIDENT",
            "remarks": "Relationship to workflow transactions. (ownertable = 'PO' and ownerid = :poid). Zero to many member set.",
            "whereClause": "ownertable = 'INCIDENT' and ownerid = :ticketuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "source": "INVOICE",
            "remarks": "Relationship to workflow transactions. (ownertable = 'INVOICE' and ownerid = :invoiceid). Zero to many member set.",
            "whereClause": "ownertable = 'INVOICE' and ownerid = :invoiceid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "source": "MAXUSER",
            "remarks": "Relationship to maxuser transactions. (ownertable = 'MAXUSER' and ownerid = :maxuserid). Zero to many member set.",
            "whereClause": "ownertable = 'MAXUSER' and ownerid = :maxuserid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "source": "MR",
            "remarks": "Relationship to workflow transactions on this MR. (ownertable = 'MR' and ownerid = :mrid) Zero to many member set.",
            "whereClause": "ownertable = 'MR' and ownerid = :mrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "ownertable = 'PLUSDSPLAN' and ownerid = :plusdsplanid",
            "cardinality": null
        },
        {
            "name": "WFTRANSACTION",
            "source": "PO",
            "remarks": "Relationship to workflow transactions. (ownertable = 'PO' and ownerid = :poid). Zero to many member set.",
            "whereClause": "ownertable = 'PO' and ownerid = :poid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "source": "PR",
            "remarks": "Relationship to workflow transactions. (ownertable = 'PR' and ownerid = :prid). Zero to many member set.",
            "whereClause": "ownertable = 'PR' and ownerid = :prid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "source": "RFQ",
            "remarks": "Relationship to workflow transactions. (ownertable = 'RFQ' and ownerid = :rfqid). Zero to many member set.",
            "whereClause": "ownertable = 'RFQ' and ownerid = :rfqid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "source": "SOLUTION",
            "remarks": "Relationship to workflow transactions. (ownertable = 'PO' and ownerid = :poid). Zero to many member set.",
            "whereClause": "ownertable = 'SOLUTION' and ownerid = :solutionid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "source": "SR",
            "remarks": "Relationship to workflow transactions. (ownertable = 'PO' and ownerid = :poid). Zero to many member set.",
            "whereClause": "ownertable = 'SR' and ownerid = :ticketuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TRANSACTIONS",
            "source": "WFASSIGNMENT",
            "remarks": null,
            "whereClause": "nodeid=:nodeid and processname=:processname and wfid=:wfid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEMOS",
            "source": "WFASSIGNMENT",
            "remarks": "This relationship gets all the memos for this instance. (wfid=:wfid and memo is not null). Zero to many member set.",
            "whereClause": "wfid = :wfid and memo is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LASTMEMO",
            "source": "WFASSIGNMENT",
            "remarks": "Gets the last memo written on the instance for this assignment, if any. (<long>). Empty or one member set.",
            "whereClause": "transid = (select max(transid) from wftransaction where wfid = :wfid and memo is not null and ((nodetype in (select value from synonymdomain where domainid = 'WFNODETYPE' and maxvalue = 'WFINPUT')) or  (transtype in (select value from synonymdomain where domainid = 'WFTRANSTYPE' and maxvalue in ('WFASSIGNCOMP', 'WFFORWARDED', 'WFSTART'))) ) )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TRANSACTIONS",
            "source": "WFINSTANCE",
            "remarks": "Get all the workflow transactions for the instance. (wfid=:wfid). Set may contain any number of members.",
            "whereClause": "wfid = :wfid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "source": "WOACTIVITY",
            "remarks": "Relationship to workflow transactions. (ownertable = 'PO' and ownerid = :poid). Zero to many member set.",
            "whereClause": "ownertable = 'WOACTIVITY' and ownerid = :workorderid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "source": "WOCHANGE",
            "remarks": "Relationship to workflow transactions on this WOCHANGE. (ownertable = 'WOCHANGE' and ownerid = :workorderid) Zero to many member set.",
            "whereClause": "ownertable = 'WOCHANGE' and ownerid = :workorderid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "source": "WORKORDER",
            "remarks": "Relationship to workflow transactions. (ownertable = 'WORKORDER' and ownerid = :workorderid). Zero to many member set.",
            "whereClause": "ownertable = 'WORKORDER' and ownerid = :workorderid",
            "cardinality": "UNDEFINED"
        }
    ]
}