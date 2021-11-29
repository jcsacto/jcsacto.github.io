mos = {
    "objectName": "LOCKOUT",
    "className": "psdi.app.safety.LockOutSet",
    "description": "Operation to put locking device in required state",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LOCKOUTID",
    "primaryKeyColumns": [
        "SITEID",
        "LOCKOUTID"
    ],
    "logicalRelationships": [
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
            "objectName": "LOCKOUT",
            "targetObject": "WOLOCKOUT",
            "parentKeys": "SITEID, LOCKOUTID",
            "targetKeys": "SITEID, LOCKOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lock-out data",
            "longDescription": null
        },
        {
            "objectName": "LOCKOUT",
            "targetObject": "WOTAGLOCK",
            "parentKeys": "SITEID, LOCKOUTID",
            "targetKeys": "SITEID, LOCKOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Orders using Lock-Out",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "LOCKOUT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 73",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "LOCKOUT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCKOUT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LOCKOUT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCKOUT",
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
            "attributeName": "LOCKOUTID",
            "required": true,
            "persistent": true,
            "title": "LockOut ID",
            "remarks": "Identifies the lockout operation",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the lockout",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Identifies the location acting as a locking device",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the asset acting as a locking device",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "DEVICEDESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the locking device if a defined location or asset is not defined",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIREDSTATE",
            "required": false,
            "persistent": true,
            "title": "Locking Device Required State",
            "remarks": "The required state of the locking device",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK01",
            "required": false,
            "persistent": true,
            "title": "Extra 1",
            "remarks": "Extra Field 01",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK02",
            "required": false,
            "persistent": true,
            "title": "Extra 2",
            "remarks": "Extra Field 02",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK03",
            "required": false,
            "persistent": true,
            "title": "Extra 3",
            "remarks": "Extra Field 03",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK04",
            "required": false,
            "persistent": true,
            "title": "Extra 4",
            "remarks": "Extra Field 04",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK05",
            "required": false,
            "persistent": true,
            "title": "Extra 5",
            "remarks": "Extra Field 05",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK06",
            "required": false,
            "persistent": true,
            "title": "Extra 6",
            "remarks": "Extra Field 06",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK07",
            "required": false,
            "persistent": true,
            "title": "Extra 7",
            "remarks": "Extra Field 07",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK08",
            "required": false,
            "persistent": true,
            "title": "Extra 8",
            "remarks": "Extra Field 08",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK09",
            "required": false,
            "persistent": true,
            "title": "Extra 9",
            "remarks": "Extra Field 09",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK10",
            "required": false,
            "persistent": true,
            "title": "Extra 10",
            "remarks": "Extra Field 10",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for The description of the lockout",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEVICEDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Device Description Long Description",
            "remarks": "Long Description for The description of the locking device if a defined location or asset is not defined",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMOVESEQ",
            "required": false,
            "persistent": false,
            "title": "Remove Sequence",
            "remarks": "REMOVESEQ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPLYSEQ",
            "required": false,
            "persistent": false,
            "title": "Apply Sequence",
            "remarks": "APPLYSEQ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the LOCKOUT to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGLOCK",
            "target": "TAGLOCK",
            "remarks": "Relationship to psdi.app.safety.TagLock (taglock.lockoutid = lockout.lockoutid). This is a cross-reference to the related tagouts. The result set will contain zero or more objects.",
            "whereClause": "lockoutid = :lockoutid and siteid=:siteid",
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
            "remarks": "Relationship from the LOCKOUT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOLOCKOUT",
            "target": "WOLOCKOUT",
            "remarks": "Relationship to psdi.app.workorder.WoLockOut (wolockout.lockoutid = lockout.lockoutid).\tUsed to find workorders having this lockout. The result set will contain zero or more objects.",
            "whereClause": "lockoutid = :lockoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LOCKOUT",
            "source": "ASSET",
            "remarks": "Relationship to the LockOut table, used to find all lock out assets of a hazard for a given asset. (lockout.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCKOUT",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LockOut table, used to find the assets locked out identified by the location. (locations.location =lockout.location). The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCKOUT",
            "source": "TAGLOCK",
            "remarks": "Relationship to LockOut table. (lockout.lockoutid = taglock.lockoutid). The result set will contain one object.",
            "whereClause": "lockoutid = :lockoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCKOUT",
            "source": "TAGOUT",
            "remarks": "Relationship to LockOut table. (lockout.lockoutid in (select taglock.lockoutid from taglock where taglock.tagoutid = tagout.tagoutid)). The result set will contain zero or more objects.",
            "whereClause": "lockoutid in (select lockoutid from taglock where tagoutid = :tagoutid and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCKOUT",
            "source": "WOLOCKOUT",
            "remarks": "Relationship to psdi.app.safety.LockOut (lockout.lockoutid = wolockout.lockoutid). The result set will contain one object.",
            "whereClause": "lockoutid=:lockoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}