mos = {
    "objectName": "REASSIGNWF",
    "className": "psdi.workflow.virtual.ReassignWFSet",
    "description": "Parameters for workflow reassignment",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ASSIGNEE",
            "required": true,
            "persistent": false,
            "title": "Assignee",
            "remarks": "The PersonID of the person getting the assignment.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Remarks about the reassignment.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "SENDEMAIL",
            "required": true,
            "persistent": false,
            "title": "Send E-mail",
            "remarks": "Flag whether to send email to the person assigned.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKDESC",
            "required": false,
            "persistent": false,
            "title": "Task Description",
            "remarks": "Task Description, copied from the original assignment, can be changed for the new assignment",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "WFASSIGNMENT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "NOTIFICATIONS",
            "target": "NOTIFICATIONWF",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSIGNEE",
            "target": "PERSON",
            "remarks": "This relationship gets the person details for the assignment assignee. (person = :assignee). One member set.",
            "whereClause": "personid=:assignee",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "REASSIGNWF",
            "source": "WFASSIGNMENT",
            "remarks": "Relationship to the non-persistent REASSIGNWF MBO.",
            "whereClause": "assignee=:assigncode",
            "cardinality": "UNDEFINED"
        }
    ]
}