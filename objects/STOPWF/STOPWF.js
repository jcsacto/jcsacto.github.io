mos = {
    "objectName": "STOPWF",
    "className": "psdi.workflow.virtual.StopWFSet",
    "description": "Nonpersistent MboSet for stoping work flow",
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
            "attributeName": "EMAILOPEN",
            "required": true,
            "persistent": false,
            "title": "E-mail Open",
            "remarks": "Email open assignments?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILCOMPLETE",
            "required": true,
            "persistent": false,
            "title": "E-mail Complete",
            "remarks": "Email complete assignments?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MESSAGE",
            "required": false,
            "persistent": false,
            "title": "E-mail Message",
            "remarks": "Message to send with emails.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Transaction Memo",
            "remarks": "Work Flow Transaction Memo",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "WFID",
            "required": true,
            "persistent": false,
            "title": "Workflow Instance",
            "remarks": "Workflow Instance Identifier",
            "sameAsAttribute": "WFID",
            "sameAsObject": "WFINSTANCE"
        },
        {
            "attributeName": "SUBJECT",
            "required": false,
            "persistent": false,
            "title": "E-mail Subject",
            "remarks": "Subject to send with e-mails.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPLATEID",
            "required": false,
            "persistent": false,
            "title": "Communication Template",
            "remarks": "Identifies the Communication Template to use to email.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "SENDTO",
            "required": false,
            "persistent": false,
            "title": "Send To",
            "remarks": "Where to send the notification email",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMMTEMPLATE",
            "target": "COMMTEMPLATE",
            "remarks": "Gets the communication template used by a stop workflow dialog. (templateid = :templateid). Empty or one member set.",
            "whereClause": "templateid = :templateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "target": "WFASSIGNMENT",
            "remarks": "This relationship gets the assignments for the instance to stop. (wfid = :wfid and assignstatus in (select value from synonymdomain where domainid = 'WFASGNSTATUS' and maxvalue in ('ACTIVE', 'COMPLETE'))). Zero to many member set.",
            "whereClause": "wfid = :wfid and assignstatus in (select value from synonymdomain where domainid = 'WFASGNSTATUS' and maxvalue in ('ACTIVE', 'COMPLETE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INSTANCE",
            "target": "WFINSTANCE",
            "remarks": "This relationship gets the workflow instance to stop. (wfid=:wfid). One member set.",
            "whereClause": "wfid = :wfid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "STOPWF",
            "source": "WFASSIGNMENT",
            "remarks": "Relationship to the non-persistent STOPWF table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STOPWF",
            "source": "WFINSTANCE",
            "remarks": "Relationship to the non-persistent set used to stop workflow. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}