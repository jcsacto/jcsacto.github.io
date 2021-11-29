mos = {
    "objectName": "WOLOCKOUT",
    "className": "psdi.app.workorder.WoLockOutSet",
    "description": "A lock out operation for a work order.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WOLOCKOUTID",
    "primaryKeyColumns": [
        "WOLOCKOUTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "WOLOCKOUT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assets to Lock-out for Work",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "WOLOCKOUT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOLOCKOUT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Locations to Lock-out for Work",
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
            "objectName": "ORGANIZATION",
            "targetObject": "WOLOCKOUT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOLOCKOUT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOLOCKOUT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lock-outs required for work.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Identifies the Work Order",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "LOCKOUTID",
            "required": true,
            "persistent": true,
            "title": "LockOut ID",
            "remarks": "Identifies a LockOut operation for this Work Order.",
            "sameAsAttribute": "LOCKOUTID",
            "sameAsObject": "LOCKOUT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the lockout",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "LOCKOUT"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Identifies the Location acting as a locking device.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the Asset acting as a locking device.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "DEVICEDESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Device Description",
            "remarks": "The description of the locking device if a defined location or asset is not used.",
            "sameAsAttribute": "DEVICEDESCRIPTION",
            "sameAsObject": "LOCKOUT"
        },
        {
            "attributeName": "REQUIREDSTATE",
            "required": false,
            "persistent": true,
            "title": "Required State",
            "remarks": "The required state of the locking device",
            "sameAsAttribute": "REQUIREDSTATE",
            "sameAsObject": "LOCKOUT"
        },
        {
            "attributeName": "WOSAFETYDATASOURCE",
            "required": true,
            "persistent": true,
            "title": "Safety Data Source",
            "remarks": "Identifies the source of the safety information",
            "sameAsAttribute": "WOSAFETYDATASOURCE",
            "sameAsObject": "WOHAZARD"
        },
        {
            "attributeName": "LCK01",
            "required": false,
            "persistent": true,
            "title": "Extra 1",
            "remarks": "Extra Field 01",
            "sameAsAttribute": "LCK01",
            "sameAsObject": "LOCKOUT"
        },
        {
            "attributeName": "LCK02",
            "required": false,
            "persistent": true,
            "title": "Extra 2",
            "remarks": "Extra Field 02",
            "sameAsAttribute": "LCK02",
            "sameAsObject": "LOCKOUT"
        },
        {
            "attributeName": "LCK03",
            "required": false,
            "persistent": true,
            "title": "Extra 3",
            "remarks": "Extra Field 03",
            "sameAsAttribute": "LCK03",
            "sameAsObject": "LOCKOUT"
        },
        {
            "attributeName": "LCK04",
            "required": false,
            "persistent": true,
            "title": "Extra 4",
            "remarks": "Extra Field 04",
            "sameAsAttribute": "LCK04",
            "sameAsObject": "LOCKOUT"
        },
        {
            "attributeName": "LCK05",
            "required": false,
            "persistent": true,
            "title": "Extra 5",
            "remarks": "Extra Field 05",
            "sameAsAttribute": "LCK05",
            "sameAsObject": "LOCKOUT"
        },
        {
            "attributeName": "LCK06",
            "required": false,
            "persistent": true,
            "title": "Extra 6",
            "remarks": "Extra Field 06",
            "sameAsAttribute": "LCK06",
            "sameAsObject": "LOCKOUT"
        },
        {
            "attributeName": "LCK07",
            "required": false,
            "persistent": true,
            "title": "Extra 7",
            "remarks": "Extra Field 07",
            "sameAsAttribute": "LCK07",
            "sameAsObject": "LOCKOUT"
        },
        {
            "attributeName": "LCK08",
            "required": false,
            "persistent": true,
            "title": "Extra 8",
            "remarks": "Extra Field 08",
            "sameAsAttribute": "LCK08",
            "sameAsObject": "LOCKOUT"
        },
        {
            "attributeName": "LCK09",
            "required": false,
            "persistent": true,
            "title": "Extra 9",
            "remarks": "Extra Field 09",
            "sameAsAttribute": "LCK09",
            "sameAsObject": "LOCKOUT"
        },
        {
            "attributeName": "LCK10",
            "required": false,
            "persistent": true,
            "title": "Extra 10",
            "remarks": "Extra Field 10",
            "sameAsAttribute": "LCK10",
            "sameAsObject": "LOCKOUT"
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
            "attributeName": "WOLOCKOUTID",
            "required": true,
            "persistent": true,
            "title": "wolockoutid",
            "remarks": "unique key column for table identifying lockout",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEVICEDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DEVICEDESCRIPTION Long description",
            "remarks": "Long description for DEVICEDESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "remarks": "Relationship from the WOLOCKOUT to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCKOUT",
            "target": "LOCKOUT",
            "remarks": "Relationship to psdi.app.safety.LockOut (lockout.lockoutid = wolockout.lockoutid). The result set will contain one object.",
            "whereClause": "lockoutid=:lockoutid and siteid=:siteid",
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
            "remarks": "Relationship from the WOLOCKOUT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTAGLOCK",
            "target": "WOTAGLOCK",
            "remarks": "Relationship to psdi.app.workorder.WoTagLock (wotaglock.wonum = wolockout.wonum and wotaglock.lockoutid = wolockout.lockoutid and wotaglock.wosafetydatasource = wolockout.wosafetydatasource). The result set will contain one or more objects.",
            "whereClause": "wonum = :wonum and lockoutid = :lockoutid and wosafetydatasource = :wosafetydatasource and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WOLOCKOUT",
            "source": "LOCKOUT",
            "remarks": "Relationship to psdi.app.workorder.WoLockOut (wolockout.lockoutid = lockout.lockoutid).\tUsed to find workorders having this lockout. The result set will contain zero or more objects.",
            "whereClause": "lockoutid = :lockoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOLOCKOUT",
            "source": "WORKORDER",
            "remarks": "Relationship to the WOLockOut table, used to find all workorder lockouts for a work order. (WOLockOut.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOLOCKOUT",
            "source": "WOSAFETYLINK",
            "remarks": "Relationship to psdi.app.workorder.WoLockOut where the owner is a tagout (wolockout.wonum = wosafetylink.wonum and wolockout.lockoutid in (select wotaglock.lockoutid from wotaglock where wotaglock.wonum = wosafetylink.wonum and wotaglock.tagoutid = wosafetylink.tagoutid)). Used to find lockouts for this tagout. The result set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and lockoutid in (select lockoutid from wotaglock where wonum = :wonum and tagoutid = :tagoutid and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOLOCKOUT",
            "source": "WOTAGLOCK",
            "remarks": "Relationship to psdi.app.workorder.WoLockOut (wolockout.wonum = wotaglock.wonum and wolockout.lockoutid = wotaglock.lockoutid and wosafetydatasource = wotaglock.wosafetydatasource). Used to find the lockouts for this taglock cross reference. The result set will contain one object.",
            "whereClause": "wonum = :wonum and lockoutid = :lockoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOLOCKOUT",
            "source": "WOTAGOUT",
            "remarks": "Relationship to psdi.app.workorder.WoLockOut WoLockOut (wolockout.wonum = wotagout.wonum and wolockout.lockoutid in (select wotaglock.lockoutid from wotaglock where wotaglock.wonum = wotagout.wonum and wotaglock.tagoutid = wotagout.tagoutid)). The result set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and lockoutid in (select lockoutid from wotaglock where wonum = :wonum and tagoutid = :tagoutid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}