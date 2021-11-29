mos = {
    "objectName": "PLUSCDSSTATUS",
    "className": "psdi.plusc.app.pluscds.PlusCDSStatusSet",
    "description": "Data Sheet Statuses",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PLUSCDSSTATUSID",
    "primaryKeyColumns": [
        "PLUSCDSSTATUSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXGROUP",
            "targetObject": "PLUSCDSSTATUS",
            "parentKeys": "GROUPNAME",
            "targetKeys": "CHANGEBY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCDSSTATUS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PLUSCDSSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who made the last change.",
            "longDescription": null
        },
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCDSSTATUS",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCDSSTATUS",
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
            "attributeName": "DSPLANNUM",
            "required": true,
            "persistent": true,
            "title": "Data Sheet",
            "remarks": "Data Sheet",
            "sameAsAttribute": "DSPLANNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Indicates the current status (including workflow status) of the data sheet. Click Select Value to select a value from the list.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Chnage By",
            "remarks": "Name of the user that changed status",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Date time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Status memo",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization ID",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "Revision Number",
            "remarks": "Revision number",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "PLUSCDSSTATUSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PLUSCPLUSDSPLAN",
            "target": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum = :revisionnum",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PLUSCDSSTAHISTORY",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum= :revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSSTATUS",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSREVISIONHIST",
            "source": "PLUSDSPLAN",
            "remarks": "Revision history",
            "whereClause": "dsplannum=:dsplannum",
            "cardinality": null
        }
    ]
}