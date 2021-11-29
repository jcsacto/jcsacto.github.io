mos = {
    "objectName": "SLADUMMYSTATUS",
    "className": "psdi.app.sla.virtual.SLADummyStatusSet",
    "description": "SLA Dummy Status History",
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
            "attributeName": "SLANUM",
            "required": false,
            "persistent": false,
            "title": "SLA",
            "remarks": "SLA ID",
            "sameAsAttribute": "SLANUM",
            "sameAsObject": "SLA"
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
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": false,
            "title": "Changed By",
            "remarks": "Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
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
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SLADUMMYSTATUS",
            "source": "SLA",
            "remarks": "SLA to SLADUMMYSTATUS relationship",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}