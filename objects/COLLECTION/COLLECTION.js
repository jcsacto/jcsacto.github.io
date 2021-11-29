mos = {
    "objectName": "COLLECTION",
    "className": "psdi.app.collection.CollectionSet",
    "description": "Collection Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "COLLECTIONID",
    "primaryKeyColumns": [
        "COLLECTIONNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "COLLECTION",
            "targetObject": "COLLECTDETAILS",
            "parentKeys": "COLLECTIONNUM",
            "targetKeys": "COLLECTIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Collection",
            "longDescription": null
        },
        {
            "objectName": "COLLECTION",
            "targetObject": "COLLECTIONAUTH",
            "parentKeys": "COLLECTIONNUM",
            "targetKeys": "COLLECTIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Collection",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "COLLECTION",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "COLLECTIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COLLECTIONNUM",
            "required": true,
            "persistent": true,
            "title": "Collection",
            "remarks": "Identifier of the Collection",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the COLLECTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Indicates if the Collection can be used or not",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "BOOKMARK",
            "target": "BOOKMARK",
            "remarks": "Relationship to the bookmark records, used to find the bookmark records for a given COLLECTION",
            "whereClause": "app='COLLECTION' and keyvalue=:collectionid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COLLECTDETAILS",
            "target": "COLLECTDETAILS",
            "remarks": "Relationship to the COLLECTDETAILS table, used to find a Collection Details record for a given COLLECTION. (COLLECTDETAILS.collectionnum = COLLECTION.collectionnum). The resulting set will contain zero or one object.",
            "whereClause": "collectionnum = :collectionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COLLECTIONAUTH",
            "target": "COLLECTIONAUTH",
            "remarks": "Relationship from Collection to CollectionAuth",
            "whereClause": "collectionnum = :collectionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Collection's DocLinks records, used to find documents for a given Collection. (doclinks.keytable = 'COLLECTION' and doclinks.keycolumn = 'COLLECTION' and collection.collectionnum= doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "ownertable = 'COLLECTION' and ownerid = :collectionid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the COLLECTION to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SECURITYRESTRICT",
            "target": "SECURITYRESTRICT",
            "remarks": "Relationship from Collection to SecurityRestrict",
            "whereClause": "srestrictnum in (select sridciqual from collectionauth where collectionnum = :collectionnum) or srestrictnum in (select sridassetqual from collectionauth where collectionnum = :collectionnum) or srestrictnum in (select sridlocationqual from collectionauth where collectionnum = :collectionnum) or srestrictnum in (select sridcihide from collectionauth where collectionnum = :collectionnum) or srestrictnum in (select sridassethide from collectionauth where collectionnum = :collectionnum) or srestrictnum in (select sridlocationhide from collectionauth where collectionnum = :collectionnum)",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COLLECTIONS",
            "source": "COLLECTDETAILS",
            "remarks": "Relationship to the COLLECTION table, used to find a Collection record for a given COLLECDETAILS record",
            "whereClause": "collectionnum = :collectionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COLLECTION",
            "source": "COLLECTIONAUTH",
            "remarks": "Relationship from CollectionAuth to Collection",
            "whereClause": "collectionnum = :collectionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COLLECTION",
            "source": "NPCOLLECTION",
            "remarks": "Relationship to the COLLECTION table, used to find a COLLECTION record for a given NPCOLLECTION record.",
            "whereClause": "collectionnum = :collectionnum",
            "cardinality": "UNDEFINED"
        }
    ]
}