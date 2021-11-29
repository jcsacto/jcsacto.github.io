mos = {
    "objectName": "SKDSTATE",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Scheduler State",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "SKDSTATEID",
    "primaryKeyColumns": [
        "SKDSTATEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SKDSTATE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDSTATE",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDSTATE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site identifier.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "SKDPROJECTID",
            "required": true,
            "persistent": true,
            "title": "Project ID",
            "remarks": "Scheduler Project Id.",
            "sameAsAttribute": "SKDPROJECTID",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "Maximo User",
            "remarks": "Maximo User Id.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "STATEKEY",
            "required": true,
            "persistent": true,
            "title": "State Key",
            "remarks": "State Key.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATE",
            "required": true,
            "persistent": true,
            "title": "State",
            "remarks": "Binary State Data",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDSTATEID",
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
            "name": "PROJECTSTATE",
            "source": "SKDPROJECT",
            "remarks": "Relationship of State Records that are linked to the Project",
            "whereClause": "skdprojectid=:skdprojectid and orgid=:orgid",
            "cardinality": null
        }
    ]
}