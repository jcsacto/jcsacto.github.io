mos = {
    "objectName": "DMCOLLECTIONRELOBJ",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Migration Collections related objects",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMCOLLECTIONRELOBJID",
    "primaryKeyColumns": [
        "DMCOLLECTIONOBJECTID",
        "CFGOBJECT",
        "OBJECT",
        "OBJECTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DMCOLLECTIONOBJECT",
            "targetObject": "DMCOLLECTIONRELOBJ",
            "parentKeys": "DMCOLLECTIONOBJECTID",
            "targetKeys": "DMCOLLECTIONOBJECTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Migration Collection Object",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "DMCOLLECTIONRELOBJ",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application used in Migration collection.",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMCOLLECTIONRELOBJ",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "CFGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure used in Migration Collection.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMCOLLECTIONRELOBJ",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object used in Migration Collection.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMCOLLECTIONRELOBJ",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DMCOLLECTIONID",
            "required": true,
            "persistent": true,
            "title": "Collection Id",
            "remarks": "Collection id",
            "sameAsAttribute": "DMCOLLECTIONID",
            "sameAsObject": "DMCOLLECTION"
        },
        {
            "attributeName": "DMCOLLECTIONOBJECTID",
            "required": true,
            "persistent": true,
            "title": "Collection Object Id",
            "remarks": "Collection object id",
            "sameAsAttribute": "DMCOLLECTIONOBJECTID",
            "sameAsObject": "DMCOLLECTIONOBJECT"
        },
        {
            "attributeName": "CFGOBJECT",
            "required": true,
            "persistent": true,
            "title": "Related Object Structure",
            "remarks": "References the object structure that supports migration of this related record.",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "OBJECT",
            "required": true,
            "persistent": true,
            "title": "Related Object Name",
            "remarks": "References the MBO that holds the related record.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OBJECTID",
            "required": true,
            "persistent": true,
            "title": "Object Id",
            "remarks": "References a record recognized as related data for the current collection entry identified by DMCOLLECTIONOBJECTID.",
            "sameAsAttribute": "OBJECTID",
            "sameAsObject": "DMCOLLECTIONOBJECT"
        },
        {
            "attributeName": "PRIMARYKEYS",
            "required": true,
            "persistent": true,
            "title": "Related Configuration Primary Keys",
            "remarks": "References a record recognized as related data for the current collection entry identified by DMCOLLECTIONOBJECTID .",
            "sameAsAttribute": "PRIMARYKEYS",
            "sameAsObject": "DMCOLLECTIONOBJECT"
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": true,
            "title": "Related Application",
            "remarks": "References the application that is used to manage the related record.",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Create Date",
            "remarks": "Specifies the date and time when the record was created in this table.",
            "sameAsAttribute": "CREATEDATE",
            "sameAsObject": "DMCOLLECTIONOBJECT"
        },
        {
            "attributeName": "CREATEBY",
            "required": true,
            "persistent": true,
            "title": "Create By",
            "remarks": "Specifies the user ID of the currently logger in user who triggered the validation function.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DMCOLLECTIONRELOBJID",
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
            "name": "DMCOLLECTIONOBJECT",
            "target": "DMCOLLECTIONOBJECT",
            "remarks": "Relationship from DMCOLLECTIONRELOBJ to DMCOLLECTIONOBJECT",
            "whereClause": "dmcollectionobjectid = :dmcollectionobjectid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMCOLLECTIONRELOBJ",
            "source": "DMCOLLECTION",
            "remarks": "Relationship from DMCOLLECTION to DMCOLLECTIONRELOBJ ",
            "whereClause": "dmcollectionid=:dmcollectionid",
            "cardinality": null
        },
        {
            "name": "DMCOLLECTIONRELOBJ",
            "source": "DMCOLLECTIONOBJECT",
            "remarks": "Relationship from DMCOLLECTIONOBJECT to DMCOLLECTIONRELOBJ",
            "whereClause": "dmcollectionobjectid=:dmcollectionobjectid",
            "cardinality": null
        }
    ]
}