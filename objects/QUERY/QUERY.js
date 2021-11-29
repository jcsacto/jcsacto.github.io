mos = {
    "objectName": "QUERY",
    "className": "psdi.app.signature.QuerySet",
    "description": "The QUERY Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "QUERYID",
    "primaryKeyColumns": [
        "APP",
        "OWNER",
        "CLAUSENAME"
    ],
    "logicalRelationships": [
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
        },
        {
            "objectName": "QUERY",
            "targetObject": "LAYOUT",
            "parentKeys": "APP, OWNER, CLAUSENAME",
            "targetKeys": "QUERYAPP, QUERYOWNER, QUERYCLAUSENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application Queries that are used on Portlets",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "QUERY",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Stored Queries for an application.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "QUERY",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Created By",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "App Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "CLAUSENAME",
            "required": true,
            "persistent": true,
            "title": "Query Name",
            "remarks": "The unique name of the Where clause that generates the query.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNER",
            "required": true,
            "persistent": true,
            "title": "Owner",
            "remarks": "Created By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": true,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the Where clause that is used to generate the query.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLAUSE",
            "required": true,
            "persistent": true,
            "title": "Clause",
            "remarks": "Where Clause",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISPUBLIC",
            "required": true,
            "persistent": true,
            "title": "Public",
            "remarks": "Indicates whether the query is available to be used by all users or only by the creator.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULT",
            "required": true,
            "persistent": false,
            "title": "Default",
            "remarks": "Indicates whether this is the default query for this user",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUERYID",
            "required": true,
            "persistent": true,
            "title": "QUERYID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DEFAULTFORAPP",
            "target": "DEFAULTQUERY",
            "remarks": "Relationship to DefaultQuery table. (defaultquery.app = query.app and defaultquery.username = the user who owns this Query MboSet, not the Query.Owner attribute). The result set will contain zero or one object.",
            "whereClause": "app = :app and userid = :user",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFAULTQUERY",
            "target": "DEFAULTQUERY",
            "remarks": "Relationship to DefaultQuery table. (defaultquery.clausename = query.clausename and defaultquery.app = query.app). The result set will contain zero or mroe objects.",
            "whereClause": "clausename = :clausename and app = :app and owner = :owner",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "THISUSERDEFAULT",
            "target": "DEFAULTQUERY",
            "remarks": "Relationship to DefaultQuery table. (defaultquery.clausename = query.clausename and defaultquery.app = query.app and defaultquery.username = the user who owns this Query MboSet, not the Query.Owner attribute). The result set will contain zero or one object. If the result set is not empty, then this Query is the default query for this user and app.",
            "whereClause": "clausename = :clausename and app = :app and userid = :user",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relationship to MaxApps table. (maxapps.app = query.app). The result set will normally contain one object, assuming the app exists in only one module.",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSER",
            "target": "MAXUSER",
            "remarks": "The user who owns this query record",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "QUERY",
            "source": "DEFAULTQUERY",
            "remarks": "Relationship to  Query table. (query.clausename = defaultquery.clausename and app = defaultquery.app). Used to get the query for this default query. The result set will contain one object.",
            "whereClause": "clausename = :clausename and app = :app and owner = :owner",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUERY",
            "source": "LAYOUT",
            "remarks": "Relationship to query table, used to find query details of the query bound to this portlet record. It will contain one object.",
            "whereClause": "clausename=:queryclausename and owner=:queryowner and app=:queryapp",
            "cardinality": null
        },
        {
            "name": "QUERY",
            "source": "MAXAPPS",
            "remarks": "Relationship to Query table by app, used to find queries for an application. ( query.app = maxapps.app ). This relationship will find 0 or more objects.",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUERY",
            "source": "MAXUSER",
            "remarks": "Queries for a specified user",
            "whereClause": "owner = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUERY",
            "source": "RSCONFIG",
            "remarks": "Relationship of RSConfig Object with Query Object. Used to return the query in a Result Set Portlet Configuration",
            "whereClause": "clausename = :clausename and app=:app",
            "cardinality": "UNDEFINED"
        }
    ]
}