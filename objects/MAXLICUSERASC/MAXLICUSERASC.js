mos = {
    "objectName": "MAXLICUSERASC",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "License User Association",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLICUSERASCID",
    "primaryKeyColumns": [
        "USERID",
        "LICENSENUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXLICENSE",
            "targetObject": "MAXLICUSERASC",
            "parentKeys": "LICENSENUM",
            "targetKeys": "LICENSENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo License",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXLICUSERASC",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "User",
            "remarks": "User ID",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "LICENSENUM",
            "required": true,
            "persistent": true,
            "title": "License Num",
            "remarks": "License Num",
            "sameAsAttribute": "LICENSENUM",
            "sameAsObject": "MAXLICENSE"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Create Date",
            "remarks": "Timestamp when this record was created",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDATEDATE",
            "required": true,
            "persistent": true,
            "title": "Update Date",
            "remarks": "Last update timestamp",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXLICUSERASCID",
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
            "name": "MAXLICENSE",
            "target": "MAXLICENSE",
            "remarks": "Relationship from MAXLICUSERASC to MAXLICENSE table.",
            "whereClause": "licensenum=:licensenum",
            "cardinality": null
        },
        {
            "name": "MAXUSER",
            "target": "MAXUSER",
            "remarks": "Relationship from MAXLICUSERASC to MAXUSER table.",
            "whereClause": "userid=:userid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXLICUSERASC",
            "source": "MAXLICENSE",
            "remarks": "Relationship from MAXLICENSE to MAXLICUSERASC table.",
            "whereClause": "licensenum=:licensenum",
            "cardinality": null
        }
    ]
}