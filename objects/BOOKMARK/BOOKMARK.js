mos = {
    "objectName": "BOOKMARK",
    "className": "psdi.app.signature.BookmarkSet",
    "description": "Bookmark Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "BOOKMARKID",
    "primaryKeyColumns": [
        "USERID",
        "APP",
        "KEYVALUE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "BOOKMARK",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bookmarks defined for an application.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "BOOKMARK",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User''s Bookmarks.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "KEYVALUE",
            "required": true,
            "persistent": true,
            "title": "Bookmark",
            "remarks": "Key Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "Date this bookmark was created",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of the entity that has been bookmarked",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BOOKMARKID",
            "required": true,
            "persistent": true,
            "title": "BOOKMARKID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERKEY",
            "required": false,
            "persistent": false,
            "title": "Key Value",
            "remarks": "Owner key field's value",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relationship to MaxApps table. (maxapps.app = bookmark.app). Used to get the application for this bookmark.\tThe result set will normally contain one object, assuming the app exists in only one module.",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXUSER",
            "target": "MAXUSER",
            "remarks": "The user who owns this bookmark record",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "BOOKMARK",
            "source": "ASSET",
            "remarks": "Relationship to the bookmark records, used to find the bookmark records for a given asset.",
            "whereClause": "app='ASSET' and keyvalue=:assetuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BOOKMARK",
            "source": "AUTOSCRIPT",
            "remarks": "Relationship to the BOOKMARK table, used to find all bookmarks for a automation script. ( bookmark.app= 'AUTOSCRIPT' and bookmark.keyvalue = autoscript.autoscriptuid). This resulting set will contain zero or more objects.",
            "whereClause": "app='AUTOSCRIPT' and keyvalue=:autoscriptid",
            "cardinality": null
        },
        {
            "name": "BOOKMARK",
            "source": "CI",
            "remarks": "Relationship to the bookmark records, used to find the bookmark records for a given CI",
            "whereClause": "app='CI' and keyvalue=:ciid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BOOKMARK",
            "source": "COLLECTION",
            "remarks": "Relationship to the bookmark records, used to find the bookmark records for a given COLLECTION",
            "whereClause": "app='COLLECTION' and keyvalue=:collectionid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BOOKMARK",
            "source": "MAXAPPS",
            "remarks": "Relationship to Bookmark table by app, used to find bookmarks for an application. ( bookmark.app = maxapps.app ). This relationship will find 0 or more objects.",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BOOKMARK",
            "source": "MAXUSER",
            "remarks": "Bookmarks for a specified user",
            "whereClause": "userid = :userid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BOOKMARK",
            "source": "SLA",
            "remarks": "Relationship to the BOOKMARK table, used to find all bookmarks for a SLA. ( bookmark.app= 'SLA' and bookmark.keyvalue = SLA.SLAID). This resulting set will contain zero or more objects.",
            "whereClause": "app='SLA' and keyvalue=:slaid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BOOKMARK",
            "source": "WORKORDER",
            "remarks": "Relationship to the BOOKMARK table, used to find all bookmarks for a work order. ( bookmark.app= 'WOTRACK' and bookmark.keyvalue = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "app='WOTRACK' and keyvalue=:workorderid",
            "cardinality": "UNDEFINED"
        }
    ]
}