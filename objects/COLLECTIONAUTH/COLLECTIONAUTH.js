mos = {
    "objectName": "COLLECTIONAUTH",
    "className": "psdi.app.signature.CollectionAuthSet",
    "description": "Permissions for Collection",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "COLLECTIONAUTHID",
    "primaryKeyColumns": [
        "GROUPNAME",
        "COLLECTIONNUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COLLECTION",
            "targetObject": "COLLECTIONAUTH",
            "parentKeys": "COLLECTIONNUM",
            "targetKeys": "COLLECTIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Collection",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "COLLECTIONAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "COLLECTIONAUTHID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPNAME",
            "required": true,
            "persistent": true,
            "title": "Group Name",
            "remarks": "Security Group having access to this collection",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "COLLECTIONNUM",
            "required": true,
            "persistent": true,
            "title": "Collection",
            "remarks": "Collection to which the group has access",
            "sameAsAttribute": "COLLECTIONNUM",
            "sameAsObject": "COLLECTION"
        },
        {
            "attributeName": "SRIDCIQUAL",
            "required": false,
            "persistent": true,
            "title": "Qualified CI Restriction",
            "remarks": "Foreign key to SecurityRestrict for qualified CI object",
            "sameAsAttribute": "SRESTRICTNUM",
            "sameAsObject": "SECURITYRESTRICT"
        },
        {
            "attributeName": "SRIDASSETQUAL",
            "required": false,
            "persistent": true,
            "title": "Qualified Asset Restriction",
            "remarks": "Foreign key to SecurityRestrict for qualified Asset object",
            "sameAsAttribute": "SRESTRICTNUM",
            "sameAsObject": "SECURITYRESTRICT"
        },
        {
            "attributeName": "SRIDLOCATIONQUAL",
            "required": false,
            "persistent": true,
            "title": "Qualified Location Restriction",
            "remarks": "Foreign key to SecurityRestrict for qualified Location object",
            "sameAsAttribute": "SRESTRICTNUM",
            "sameAsObject": "SECURITYRESTRICT"
        },
        {
            "attributeName": "SRIDCIHIDE",
            "required": false,
            "persistent": true,
            "title": "Hidden CI Restriction",
            "remarks": "Foreign key to SecurityRestrict for hidden CI object",
            "sameAsAttribute": "SRESTRICTNUM",
            "sameAsObject": "SECURITYRESTRICT"
        },
        {
            "attributeName": "SRIDASSETHIDE",
            "required": false,
            "persistent": true,
            "title": "Hidden Asset Restriction",
            "remarks": "Foreign key to SecurityRestrict for hidden Asset object",
            "sameAsAttribute": "SRESTRICTNUM",
            "sameAsObject": "SECURITYRESTRICT"
        },
        {
            "attributeName": "SRIDLOCATIONHIDE",
            "required": false,
            "persistent": true,
            "title": "Hidden Location Restriction",
            "remarks": "Foreign key to SecurityRestrict for hidden Location object",
            "sameAsAttribute": "SRESTRICTNUM",
            "sameAsObject": "SECURITYRESTRICT"
        },
        {
            "attributeName": "COLLECTIONAUTHNUM",
            "required": true,
            "persistent": true,
            "title": "Collection Authorization ID",
            "remarks": "CollectionAuth name, unique user-readable identifier.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SRIDMAQUAL",
            "required": false,
            "persistent": true,
            "title": "Qualified MULTIASSETLOCCI Restriction",
            "remarks": "Foreign key to SecurityRestrict for qualified MULTIASSETLOCCI object",
            "sameAsAttribute": "SRESTRICTNUM",
            "sameAsObject": "SECURITYRESTRICT"
        },
        {
            "attributeName": "SRIDMAHIDE",
            "required": false,
            "persistent": true,
            "title": "Hidden MULTIASSETLOCCI Restriction",
            "remarks": "Foreign key to SecurityRestrict for hidden MULTIASSETLOCCI object",
            "sameAsAttribute": "SRESTRICTNUM",
            "sameAsObject": "SECURITYRESTRICT"
        },
        {
            "attributeName": "SRIDAAQUAL",
            "required": false,
            "persistent": true,
            "title": "Qualified AUTOATTRUPDATE Restriction",
            "remarks": "Foreign key to SecurityRestrict for qualified AUTOATTRUPDATE restriction",
            "sameAsAttribute": "SRESTRICTNUM",
            "sameAsObject": "SECURITYRESTRICT"
        },
        {
            "attributeName": "SRIDAAHIDE",
            "required": false,
            "persistent": true,
            "title": "Hidden AUTOATTRUPDATE Restriction",
            "remarks": "Foreign key to SecurityRestrict for hidden AUTOATTRUPDATE object",
            "sameAsAttribute": "SRESTRICTNUM",
            "sameAsObject": "SECURITYRESTRICT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COLLECTION",
            "target": "COLLECTION",
            "remarks": "Relationship from CollectionAuth to Collection",
            "whereClause": "collectionnum = :collectionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "target": "MAXGROUP",
            "remarks": "Relationship from CollectionAuth to MaxGroup",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SECURITYRESTRICT",
            "target": "SECURITYRESTRICT",
            "remarks": "Relationship from CollectionAuth to SecurityRestrict",
            "whereClause": "srestrictnum = :sridciqual or srestrictnum = :sridassetqual or srestrictnum = :sridlocationqual or srestrictnum = :sridcihide or srestrictnum = :sridassethide or srestrictnum = :sridlocationhide or srestrictnum = :sridmaqual or srestrictnum = :sridmahide or srestrictnum = :sridaaqual or srestrictnum = :sridaahide",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COLLECTIONAUTH",
            "source": "COLLECTION",
            "remarks": "Relationship from Collection to CollectionAuth",
            "whereClause": "collectionnum = :collectionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COLLECTIONAUTH",
            "source": "MAXGROUP",
            "remarks": "Relationship from MaxGroup to CollectionAuth",
            "whereClause": "groupname = :groupname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "COLLECTIONAUTH",
            "source": "SECURITYRESTRICT",
            "remarks": "Relationship from SecurityRestrict to CollectionAuth",
            "whereClause": "(:srestrictnum  = sridciqual and sridciqual is not null) or (:srestrictnum  = sridassetqual and sridassetqual is not null) or (:srestrictnum  = sridlocationqual and sridlocationqual is not null) or (:srestrictnum  = sridcihide and sridcihide is not null) or (:srestrictnum  = sridassethide and sridassethide is not null) or (:srestrictnum  = sridlocationhide and sridlocationhide is not null) or (:srestrictnum  = sridmaqual and sridmaqual is not null) or (:srestrictnum  = sridmahide and sridmahide is not null) or (:srestrictnum  = sridaaqual and sridaaqual is not null) or (:srestrictnum  = sridaahide and sridaahide is not null)",
            "cardinality": "UNDEFINED"
        }
    ]
}