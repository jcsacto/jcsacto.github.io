mos = {
    "objectName": "WFASGNGROUP",
    "className": "psdi.workflow.WFAsgnGroupSet",
    "description": "Assignment Groups table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WFASGNGROUPID",
    "primaryKeyColumns": [
        "PROCESSNAME",
        "PROCESSREV",
        "NODEID",
        "GROUPNUM",
        "WFID"
    ],
    "logicalRelationships": [
        {
            "objectName": "WFASGNGROUP",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "PROCESSNAME, PROCESSREV, NODEID, GROUPNUM, WFID",
            "targetKeys": "PROCESSNAME, PROCESSREV, NODEID, GROUPNUM, WFID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 1",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
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
            "objectName": "WFINSTANCE",
            "targetObject": "WFASGNGROUP",
            "parentKeys": "WFID",
            "targetKeys": "WFID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 1",
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
            "objectName": "WFPROCESS",
            "targetObject": "WFASGNGROUP",
            "parentKeys": "PROCESSNAME, PROCESSREV",
            "targetKeys": "PROCESSNAME, PROCESSREV",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PROCESSNAME",
            "required": true,
            "persistent": true,
            "title": "Process",
            "remarks": "Name of the owning Process",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "PROCESSREV",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision of the owning Process",
            "sameAsAttribute": "PROCESSREV",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node ID",
            "remarks": "ID of the owning Node",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "GROUPNUM",
            "required": true,
            "persistent": true,
            "title": "Group #",
            "remarks": "Identifier of the Assignment Group.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GRPDESC",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of Group",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FIRSTCOMPLETE",
            "required": true,
            "persistent": true,
            "title": "First Complete",
            "remarks": "Will the first person to complete an assignment complete for the entire group? If N then all of the assignments must be complete before the group is considered completed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WFID",
            "required": true,
            "persistent": true,
            "title": "Workflow ID",
            "remarks": "The workflow that this assignment group is related to.",
            "sameAsAttribute": "WFID",
            "sameAsObject": "WFINSTANCE"
        },
        {
            "attributeName": "WFASGNGROUPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SHOWWFTASKASGNGROUPS",
            "source": "SHOWWFTASK",
            "remarks": "Relationship to the WFAsgnGroup table, used to edit the task assignment groups.",
            "whereClause": "1=2",
            "cardinality": null
        },
        {
            "name": "ACTIVEASGNGROUP",
            "source": "WFASSIGNMENT",
            "remarks": "Active Assignment Groups, relationship to the WFAsgnGroup table. (wftask.processid = wfasgngroup.processid and wftask.processrev = wfasgngroup.processrev and wftask.nodeid = wfasgngroup.nodeid and wfid = 0). This resulting set will contain zero to many objects.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid and wfid = :wfid and active = 1",
            "cardinality": null
        },
        {
            "name": "WFASGNGROUP",
            "source": "WFASSIGNMENT",
            "remarks": "Relationship to WFAsgnGroup, used to find group for the assignment. (processname=:processname and processrev=:processrev and nodeid=:nodeid and groupnum=:groupnum and wfid=:wfid) Zero or one record.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid and groupnum=:groupnum and wfid=:wfid",
            "cardinality": null
        },
        {
            "name": "NEWGROUPS",
            "source": "WFINSTANCE",
            "remarks": "Newly created groups, relationship to the WFAsgnGroup table. (1=2). The set is empty.",
            "whereClause": "wfid = :wfid",
            "cardinality": null
        },
        {
            "name": "WFASGNGROUP",
            "source": "WFNODE",
            "remarks": "Template Assignment Groups, relationship to the WFAsgnGroup table. (wftask.processid = wfasgngroup.processid and wftask.processrev = wfasgngroup.processrev and wftask.nodeid = wfasgngroup.nodeid and wfid = 0). This resulting set will contain zero to many objects.",
            "whereClause": "processname=:processname and processrev=:processrev and nodeid=:nodeid and wfid = 0",
            "cardinality": null
        }
    ]
}