mos = {
    "objectName": "DEFAULTQUERY",
    "className": "psdi.app.signature.DefaultQuerySet",
    "description": "Default Querys for User when executing an app.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DEFAULTQUERYID",
    "primaryKeyColumns": [
        "USERID",
        "APP",
        "CLAUSENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "DEFAULTQUERY",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default query for an application.",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "DEFAULTQUERY",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Query for User",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DEFAULTQUERY",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Query Created By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DEFAULTQUERY",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 54",
            "longDescription": null
        },
        {
            "objectName": "QUERY",
            "targetObject": "DEFAULTQUERY",
            "parentKeys": "APP, OWNER, CLAUSENAME",
            "targetKeys": "APP, OWNER, CLAUSENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Query for User.",
            "longDescription": null
        },
        {
            "objectName": "QUERY",
            "targetObject": "DEFAULTQUERY",
            "parentKeys": "APP, OWNER, CLAUSENAME",
            "targetKeys": "APP, USERID, CLAUSENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Application associated with a default query.",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "CLAUSENAME",
            "required": true,
            "persistent": true,
            "title": "Save Query As",
            "remarks": "Where Clause Name that contains the code to be executed.",
            "sameAsAttribute": "CLAUSENAME",
            "sameAsObject": "QUERY"
        },
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "User",
            "remarks": "User identifier",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DEFAULTQUERYID",
            "required": true,
            "persistent": true,
            "title": "DEFAULTQUERYID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": true,
            "title": "Query Created By",
            "remarks": "Query Created By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relationship to MaxApps table. (maxapps.app = defaultquery.app). Used to get the application for this default query. The result set will normally contain one object, assuming the app exists in only one module.",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSER",
            "target": "MAXUSER",
            "remarks": "The user who owns this default query record",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUERY",
            "target": "QUERY",
            "remarks": "Relationship to  Query table. (query.clausename = defaultquery.clausename and app = defaultquery.app). Used to get the query for this default query. The result set will contain one object.",
            "whereClause": "clausename = :clausename and app = :app and owner = :owner",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DEFAULTQUERY",
            "source": "MAXAPPS",
            "remarks": "Relationship to DefaultQuery table by app, used to find default queries for an application. ( defaultquery.app = maxapps.app ). This relationship will find 0 or more objects.",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFAULTQUERY",
            "source": "MAXUSER",
            "remarks": "Default queries for a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFAULTFORAPP",
            "source": "QUERY",
            "remarks": "Relationship to DefaultQuery table. (defaultquery.app = query.app and defaultquery.username = the user who owns this Query MboSet, not the Query.Owner attribute). The result set will contain zero or one object.",
            "whereClause": "app = :app and userid = :user",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFAULTQUERY",
            "source": "QUERY",
            "remarks": "Relationship to DefaultQuery table. (defaultquery.clausename = query.clausename and defaultquery.app = query.app). The result set will contain zero or mroe objects.",
            "whereClause": "clausename = :clausename and app = :app and owner = :owner",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "THISUSERDEFAULT",
            "source": "QUERY",
            "remarks": "Relationship to DefaultQuery table. (defaultquery.clausename = query.clausename and defaultquery.app = query.app and defaultquery.username = the user who owns this Query MboSet, not the Query.Owner attribute). The result set will contain zero or one object. If the result set is not empty, then this Query is the default query for this user and app.",
            "whereClause": "clausename = :clausename and app = :app and userid = :user",
            "cardinality": "UNDEFINED"
        }
    ]
}