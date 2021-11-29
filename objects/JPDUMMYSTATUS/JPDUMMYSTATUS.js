mos = {
    "objectName": "JPDUMMYSTATUS",
    "className": "psdi.app.jobplan.virtual.JPDummyStatusSet",
    "description": "Job Plan Dummy Status History",
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
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": false,
            "title": "Changed By",
            "remarks": "Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Org ID",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site ID",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "JPNUM",
            "required": false,
            "persistent": false,
            "title": "Job Plan",
            "remarks": "Job Plan Number",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "JPDUMMYSTATUS",
            "source": "JOBPLAN",
            "remarks": "Job Plan to JPDUMMYSTATUS relationship.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}