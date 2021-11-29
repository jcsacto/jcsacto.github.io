mos = {
    "objectName": "BBOARDAUDIENCE",
    "className": "psdi.app.bulletinboard.BBAudienceSet",
    "description": "Table to store and maintain BulletinBoard Audience",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "BBOARDAUDIENCEID",
    "primaryKeyColumns": [
        "BBOARDAUDIENCEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "BULLETINBOARD",
            "targetObject": "BBOARDAUDIENCE",
            "parentKeys": "BULLETINBOARDID",
            "targetKeys": "BULLETINBOARDID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Who should see the bulletin.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "BBOARDAUDIENCE",
            "parentKeys": "ORGID",
            "targetKeys": "MSGORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization that should see the bulletin.",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "BBOARDAUDIENCE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group that should see the bulletin.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "BBOARDAUDIENCE",
            "parentKeys": "SITEID",
            "targetKeys": "MSGSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site that should see the bulletin.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "BULLETINBOARDID",
            "required": true,
            "persistent": true,
            "title": "Bulletin Board ID",
            "remarks": "Unique System generated identifier for the Bulletin Board message",
            "sameAsAttribute": "BULLETINBOARDID",
            "sameAsObject": "BULLETINBOARD"
        },
        {
            "attributeName": "MSGORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "The organization that the audience for this message belongs to.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "MSGSITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "The site that the audience for this message belongs to.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "BBOARDAUDIENCEID",
            "required": true,
            "persistent": true,
            "title": "BBOARDAUDIENCEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONGROUP",
            "required": false,
            "persistent": true,
            "title": "Group",
            "remarks": "The person group that the audience for this message belongs to.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "BBORGDESC",
            "target": "ORGANIZATION",
            "remarks": null,
            "whereClause": "orgid = :msgorgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BBGROUPDESC",
            "target": "PERSONGROUP",
            "remarks": null,
            "whereClause": "persongroup = :persongroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BBSITEDESC",
            "target": "SITE",
            "remarks": null,
            "whereClause": "siteid = :msgsiteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "BBAUD",
            "source": "BULLETINBOARD",
            "remarks": null,
            "whereClause": "bulletinboardid = :bulletinboardid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BBGROUP",
            "source": "BULLETINBOARD",
            "remarks": null,
            "whereClause": "bulletinboardid = :bulletinboardid and (msgorgid is null and msgsiteid is null and persongroup is not null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BBORG",
            "source": "BULLETINBOARD",
            "remarks": null,
            "whereClause": "bulletinboardid = :bulletinboardid and (msgorgid is not null and msgsiteid is null and persongroup is null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BBSITE",
            "source": "BULLETINBOARD",
            "remarks": null,
            "whereClause": "bulletinboardid = :bulletinboardid and (msgsiteid is not null and persongroup is null)",
            "cardinality": "UNDEFINED"
        }
    ]
}