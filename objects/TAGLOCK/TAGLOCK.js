mos = {
    "objectName": "TAGLOCK",
    "className": "psdi.app.safety.TagLockSet",
    "description": "An operational step of a tagout procedure",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TAGLOCKID",
    "primaryKeyColumns": [
        "SITEID",
        "TAGLOCKID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LOCKOUT",
            "targetObject": "TAGLOCK",
            "parentKeys": "SITEID, LOCKOUTID",
            "targetKeys": "SITEID, LOCKOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Tag Lock",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TAGLOCK",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TAGLOCK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "TAGOUT",
            "targetObject": "TAGLOCK",
            "parentKeys": "SITEID, TAGOUTID",
            "targetKeys": "SITEID, TAGOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Tag Out for Tag Lock",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TAGOUTID",
            "required": true,
            "persistent": true,
            "title": "Tagout",
            "remarks": "Identifies the tagout procedure",
            "sameAsAttribute": "TAGOUTID",
            "sameAsObject": "TAGOUT"
        },
        {
            "attributeName": "LOCKOUTID",
            "required": true,
            "persistent": true,
            "title": "Lock Out",
            "remarks": "Identifies the associated Lockout operation",
            "sameAsAttribute": "LOCKOUTID",
            "sameAsObject": "LOCKOUT"
        },
        {
            "attributeName": "APPLYSEQ",
            "required": false,
            "persistent": true,
            "title": "Apply Sequence",
            "remarks": "Identifies the locking sequence for the Lockout operation",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMOVESEQ",
            "required": false,
            "persistent": true,
            "title": "Remove Sequence",
            "remarks": "Identifies the unlocking sequence for the Lockout operation",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TL01",
            "required": false,
            "persistent": true,
            "title": "Tl01",
            "remarks": "Extra Field 01",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TL02",
            "required": false,
            "persistent": true,
            "title": "Tl02",
            "remarks": "Extra Field 02",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TL03",
            "required": false,
            "persistent": true,
            "title": "Tl03",
            "remarks": "Extra Field 03",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TL04",
            "required": false,
            "persistent": true,
            "title": "Tl04",
            "remarks": "Extra Field 04",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TL05",
            "required": false,
            "persistent": true,
            "title": "Tl05",
            "remarks": "Extra Field 05",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TL06",
            "required": false,
            "persistent": true,
            "title": "Tl06",
            "remarks": "Extra Field 06",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TL07",
            "required": false,
            "persistent": true,
            "title": "Tl07",
            "remarks": "Extra Field 07",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TL08",
            "required": false,
            "persistent": true,
            "title": "Tl08",
            "remarks": "Extra Field 08",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TL09",
            "required": false,
            "persistent": true,
            "title": "Tl09",
            "remarks": "Extra Field 09",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TL10",
            "required": false,
            "persistent": true,
            "title": "Tl10",
            "remarks": "Extra Field 10",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAGLOCKID",
            "required": true,
            "persistent": true,
            "title": "ID",
            "remarks": "Primary Key",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Assetnum",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the TAGLOCK to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCKOUT",
            "target": "LOCKOUT",
            "remarks": "Relationship to LockOut table. (lockout.lockoutid = taglock.lockoutid). The result set will contain one object.",
            "whereClause": "lockoutid = :lockoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGOUT",
            "target": "TAGOUT",
            "remarks": "Relationship to TagOut table. (tagout.tagoutid = taglock.tagoutid). The result set will contain one object.",
            "whereClause": "tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the TAGLOCK to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTAGLOCK",
            "target": "WOTAGLOCK",
            "remarks": "Relationship to WoTagLock table. (wotaglock.tagoutid = taglock.tagoutid and wotaglock.lockoutid = taglock.lockoutid). The result set will contain zero or more objects.",
            "whereClause": "tagoutid = :tagoutid and lockoutid = :lockoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "TAGLOCK",
            "source": "LOCKOUT",
            "remarks": "Relationship to psdi.app.safety.TagLock (taglock.lockoutid = lockout.lockoutid). This is a cross-reference to the related tagouts. The result set will contain zero or more objects.",
            "whereClause": "lockoutid = :lockoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGLOCK",
            "source": "SAFETYLEXICON",
            "remarks": "Relationship to TagLock table. When the owner has a non-null tagoutid, these are the related taglocks (taglock.tagoutid = safetylexicon.tagoutid). The result set will contain zero or more objects.",
            "whereClause": "tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGLOCK",
            "source": "SPLEXICONLINK",
            "remarks": "Relationship to TagLock when the owner represents a tagout (the parent safetylexicon has non-null tagoutid) and the child set represents its taglocks. The Sql is (taglock.tagoutid in (select safetylexicon.tagoutid from safetylexicon where safetylexicon.safetylexiconid = splexiconlink.safetylexiconid)). The result set will contain zero or more objects.",
            "whereClause": "tagoutid in (select tagoutid from safetylexicon where safetylexiconid = :safetylexiconid and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGLOCK",
            "source": "TAGOUT",
            "remarks": "Relationship to TagLock (taglock.tagoutid = tagout.tagoutid). The result set will contain zero or more objects.",
            "whereClause": "tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGLOCK",
            "source": "WOSAFETYLINK",
            "remarks": "Relationship to the taglock table, used to find all taglock for the tagout . The result set will contain zero or more objects.",
            "whereClause": "tagoutid=:tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}