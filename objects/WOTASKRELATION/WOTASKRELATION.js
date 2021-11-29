mos = {
    "objectName": "WOTASKRELATION",
    "className": "psdi.app.workorder.WOTaskRelationSet",
    "description": "Work Order task precedence",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WOTASKRELATIONID",
    "primaryKeyColumns": [
        "WOTASKRELATIONID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WOTASKRELATION",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOTASKRELATION",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOTASKRELATION",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, PREDREFWONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Predecessor Work Order Task",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOTASKRELATION",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, PREDWONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Predecessor Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOTASKRELATION",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WOTASKRELATIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Identifies the Work Order",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
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
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Identifies the successor task for the predecessor task.",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "PREDREFWONUM",
            "required": true,
            "persistent": true,
            "title": "Predecessor WONUM",
            "remarks": "Identifies the wonum of the predecessor work order task",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "PREDWONUM",
            "required": true,
            "persistent": true,
            "title": "Predecessor Work Order",
            "remarks": "Identifies the predecessor work order",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "PREDTASKID",
            "required": false,
            "persistent": true,
            "title": "Predecessor Task",
            "remarks": "Identifies the predecessor task id",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "RELTYPE",
            "required": true,
            "persistent": true,
            "title": "Relationship",
            "remarks": "The dependency between work records which determines scheduling order.  This includes Finish to Start, Finish to Finish, Start to Start, and Start to Finish.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LEADLAGHOURS",
            "required": false,
            "persistent": true,
            "title": "Lead/Lag Hours",
            "remarks": "The overlap of, or delay between, work records that have a dependency.  Enter a positive duration for a Lag (delay).  Enter a negative duration for a Lead (overlap).",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SHOWALLTASKRELATION",
            "source": "TICKET",
            "remarks": "Relationship to the ShowAllTaskRelationSet used by UI for display. This is a special MboSet used for displaying all predessor tasks related to the entire work hierarchy under a given workorder.",
            "whereClause": "wonum in (select wonum from woancestor where ancestor = :woactivity.wogroup and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTASKRELATION",
            "source": "WORKORDER",
            "remarks": "Relationship to the WOTaskRelation table, used to find all predessor tasks for a work order.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOPREDREFWONUM",
            "source": "WORKORDER",
            "remarks": "Relationship to the WOTaskRelation table, used to find all task relation rows that reference this work order.",
            "whereClause": "predrefwonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWALLTASKRELATION",
            "source": "WORKORDER",
            "remarks": " Relationship to the ShowAllTaskRelationSet used by UI for display. This is a special MboSet used for displaying all predessor tasks related to the entire work hierarchy under a given workorder.",
            "whereClause": "wonum in (select wonum from woancestor where ancestor = :wonum and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWTASKRELATION",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowTaskRelation Set used by UI for display. This is a  special MboSet used for displaying the task predessors for a given workorder.",
            "whereClause": "wonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        }
    ]
}