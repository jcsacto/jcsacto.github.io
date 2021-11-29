mos = {
    "objectName": "PLUSCTPDATASHEET",
    "className": "psdi.plusc.app.plusctmplt.PlusCATDSPlanSet",
    "description": "Asset Template Datasheet table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PLUSCTPDATASHEETID",
    "primaryKeyColumns": [
        "PLUSCTPDATASHEETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCTPDATASHEET",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCTPDATASHEET",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCTPDATASHEET",
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
            "attributeName": "TEMPLATEID",
            "required": true,
            "persistent": true,
            "title": "Template",
            "remarks": "Identifies the asset template.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "DSPLANNUM",
            "required": true,
            "persistent": true,
            "title": "Data Sheet",
            "remarks": "Identifies the data sheet associated with the asset template. Enter a value or click Detail Menu to specify a data sheet value.",
            "sameAsAttribute": "DSPLANNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization the asset template belongs to.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "Data Sheet Revision Number",
            "remarks": "The data sheet revision number.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site the asset template belongs to.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "PLUSCTPDATASHEETID",
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
            "name": "PLUSDSPLAN",
            "target": "PLUSDSPLAN",
            "remarks": "Relationship from PLUSCTPDATASHEET to pludsplan",
            "whereClause": "dsplannum=:dsplannum and revisionnum = :revisionnum",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PLUSCTPDATASHEET",
            "source": "PLUSCTEMPLATE",
            "remarks": "Relationship from PLUSCTEMPLATE TO PLUSCTPDATASHEET",
            "whereClause": "templateid =:templateid and orgid =:orgid ",
            "cardinality": null
        }
    ]
}