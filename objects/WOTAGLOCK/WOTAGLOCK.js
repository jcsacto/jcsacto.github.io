mos = {
    "objectName": "WOTAGLOCK",
    "className": "psdi.app.workorder.WoTagLockSet",
    "description": "One operational step of a WO tag out procedure.",
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
            "objectName": "ASSET",
            "targetObject": "WOTAGLOCK",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset related Tag-Locks",
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
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WOTAGLOCK",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOTAGLOCK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "TAGOUT",
            "targetObject": "WOTAGLOCK",
            "parentKeys": "SITEID, TAGOUTID",
            "targetKeys": "SITEID, TAGOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Orders using Tag-Out",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOTAGLOCK",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Safety Tag-Locks",
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
            "attributeName": "TAGOUTID",
            "required": true,
            "persistent": true,
            "title": "Tagout",
            "remarks": "Identifies a TagOut procedure for working on this Work Order.",
            "sameAsAttribute": "TAGOUTID",
            "sameAsObject": "TAGOUT"
        },
        {
            "attributeName": "LOCKOUTID",
            "required": true,
            "persistent": true,
            "title": "Lockout",
            "remarks": "Identifies a Lock Out operation of this TagOut procedure for this Work Order.",
            "sameAsAttribute": "LOCKOUTID",
            "sameAsObject": "LOCKOUT"
        },
        {
            "attributeName": "APPLYSEQ",
            "required": false,
            "persistent": true,
            "title": "Apply Sequence",
            "remarks": "Number of the step in the lock out sequence for the equipment or a location. You can edit this field if the work order's status allows safety information edits. Work order editing rules are set up in the Organizations application.",
            "sameAsAttribute": "APPLYSEQ",
            "sameAsObject": "TAGLOCK"
        },
        {
            "attributeName": "REMOVESEQ",
            "required": false,
            "persistent": true,
            "title": "Remove Sequence",
            "remarks": "Number of the step in the sequence of lock out steps when used to unlock the equipment or location. You can edit this field if the work order's status allows safety information edits. Work order editing rules are set up in the Organizations application.",
            "sameAsAttribute": "REMOVESEQ",
            "sameAsObject": "TAGLOCK"
        },
        {
            "attributeName": "WOSAFETYDATASOURCE",
            "required": true,
            "persistent": true,
            "title": "Source of Safety",
            "remarks": "Identifies the source of the safety information",
            "sameAsAttribute": "WOSAFETYDATASOURCE",
            "sameAsObject": "WOHAZARD"
        },
        {
            "attributeName": "TL01",
            "required": false,
            "persistent": true,
            "title": "Tl01",
            "remarks": "Extra Field 01",
            "sameAsAttribute": "TL01",
            "sameAsObject": "TAGLOCK"
        },
        {
            "attributeName": "TL02",
            "required": false,
            "persistent": true,
            "title": "Tl02",
            "remarks": "Extra Field 02",
            "sameAsAttribute": "TL02",
            "sameAsObject": "TAGLOCK"
        },
        {
            "attributeName": "TL03",
            "required": false,
            "persistent": true,
            "title": "Tl03",
            "remarks": "Extra Field 03",
            "sameAsAttribute": "TL03",
            "sameAsObject": "TAGLOCK"
        },
        {
            "attributeName": "TL04",
            "required": false,
            "persistent": true,
            "title": "Tl04",
            "remarks": "Extra Field 04",
            "sameAsAttribute": "TL04",
            "sameAsObject": "TAGLOCK"
        },
        {
            "attributeName": "TL05",
            "required": false,
            "persistent": true,
            "title": "Tl05",
            "remarks": "Extra Field 05",
            "sameAsAttribute": "TL05",
            "sameAsObject": "TAGLOCK"
        },
        {
            "attributeName": "TL06",
            "required": false,
            "persistent": true,
            "title": "Tl06",
            "remarks": "Extra Field 06",
            "sameAsAttribute": "TL06",
            "sameAsObject": "TAGLOCK"
        },
        {
            "attributeName": "TL07",
            "required": false,
            "persistent": true,
            "title": "Tl07",
            "remarks": "Extra Field 07",
            "sameAsAttribute": "TL07",
            "sameAsObject": "TAGLOCK"
        },
        {
            "attributeName": "TL08",
            "required": false,
            "persistent": true,
            "title": "Tl08",
            "remarks": "Extra Field 08",
            "sameAsAttribute": "TL08",
            "sameAsObject": "TAGLOCK"
        },
        {
            "attributeName": "TL09",
            "required": false,
            "persistent": true,
            "title": "Tl09",
            "remarks": "Extra Field 09",
            "sameAsAttribute": "TL09",
            "sameAsObject": "TAGLOCK"
        },
        {
            "attributeName": "TL10",
            "required": false,
            "persistent": true,
            "title": "Tl10",
            "remarks": "Extra Field 10",
            "sameAsAttribute": "TL10",
            "sameAsObject": "TAGLOCK"
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
            "remarks": "Identifies the organization.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "LCK10",
            "required": false,
            "persistent": false,
            "title": "Extra 10",
            "remarks": "LCK10",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK09",
            "required": false,
            "persistent": false,
            "title": "Extra 9",
            "remarks": "LCK09",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK08",
            "required": false,
            "persistent": false,
            "title": "Extra 8",
            "remarks": "LCK08",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK07",
            "required": false,
            "persistent": false,
            "title": "Extra 7",
            "remarks": "LCK07",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK06",
            "required": false,
            "persistent": false,
            "title": "Extra 6",
            "remarks": "LCK06",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK05",
            "required": false,
            "persistent": false,
            "title": "Extra 5",
            "remarks": "LCK05",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK04",
            "required": false,
            "persistent": false,
            "title": "Extra 4",
            "remarks": "LCK04",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK03",
            "required": false,
            "persistent": false,
            "title": "Extra 3",
            "remarks": "LCK03",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK02",
            "required": false,
            "persistent": false,
            "title": "Extra 2",
            "remarks": "LCK02",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LCK01",
            "required": false,
            "persistent": false,
            "title": "Extra 1",
            "remarks": "LCK01",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIREDSTATE",
            "required": false,
            "persistent": false,
            "title": "Required State",
            "remarks": "Required operational state the asset, location or locking device needs to be in after performing this lock out step. You can edit this field if the work order's status allows safety information edits. Work order editing rules are set up in the Organizations application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEVICEDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Device Description",
            "remarks": "DEVICEDESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "Identifies the location to be locked out in this lock out step. A lock out step can lock out either a location or an asset, but not both. You can also specify a generic locking device by leaving the asset and location fields empty and enter a locking device name directly into the description field. You can edit this field if the work order's status allows safety information edits. Work order editing rules are set up in the Organizations application.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Identifies the asset to be locked out in this step of lock out operations. A lock out step can lock out either a location or an asset, but not both. You can also specify a generic locking device by leaving the asset and location fields empty and enter a locking device name directly into the description field. You can edit this field if the work order's status allows safety information edits. Work order editing rules are set up in the Organizations application.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Long description",
            "remarks": "The long description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEVICEDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Device long description",
            "remarks": "The long description of device",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to Asset for RecHover in Wotrack  / Safety Plan tab / WoLockOut_table",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the WOTAGLOCK to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGLOCK",
            "target": "SAFETYPLAN",
            "remarks": "Relationship to psdi.app.safety.TagLock (taglock.tagoutid = wotaglock.tagoutid and taglock.lockoutid = wotaglock.lockoutid). The result set will contain zero or one object.",
            "whereClause": "tagoutid=:tagoutid and lockoutid=:lockoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause).",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the WOTAGLOCK to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOLOCKOUT",
            "target": "WOLOCKOUT",
            "remarks": "Relationship to psdi.app.workorder.WoLockOut (wolockout.wonum = wotaglock.wonum and wolockout.lockoutid = wotaglock.lockoutid and wosafetydatasource = wotaglock.wosafetydatasource). Used to find the lockouts for this taglock cross reference. The result set will contain one object.",
            "whereClause": "wonum = :wonum and lockoutid = :lockoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTAGOUT",
            "target": "WOTAGOUT",
            "remarks": "Relationship to psdi.app.workorder.WoTagOut (wotagout.wonum = wotaglock.wonum and wotagout.tagoutid = wotaglock.tagoutid). Used to find the tagouts for this taglock cross reference. The result set will contain one object.",
            "whereClause": "wonum = :wonum and tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WOTAGLOCK",
            "source": "TAGLOCK",
            "remarks": "Relationship to WoTagLock table. (wotaglock.tagoutid = taglock.tagoutid and wotaglock.lockoutid = taglock.lockoutid). The result set will contain zero or more objects.",
            "whereClause": "tagoutid = :tagoutid and lockoutid = :lockoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTAGLOCK",
            "source": "WOLOCKOUT",
            "remarks": "Relationship to psdi.app.workorder.WoTagLock (wotaglock.wonum = wolockout.wonum and wotaglock.lockoutid = wolockout.lockoutid and wotaglock.wosafetydatasource = wolockout.wosafetydatasource). The result set will contain one or more objects.",
            "whereClause": "wonum = :wonum and lockoutid = :lockoutid and wosafetydatasource = :wosafetydatasource and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTAGLOCK",
            "source": "WORKORDER",
            "remarks": "Relationship to the WOTagLock table, used to find all workorder taglocks for a work order. (WOTagLock.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTAGLOCK",
            "source": "WOSAFETYLINK",
            "remarks": "Relationship to psdi.app.workorder.WoTagLock where the owner is a tagout (wotaglock.wonum = wosafetylink.wonum and wotaglock.tagoutid = wosafetylink.tagoutid).\tThe result set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTAGLOCK",
            "source": "WOTAGOUT",
            "remarks": "Relationship to psdi.app.workorder.WoTagLock (wotaglock.wonum = wotagout.wonum and wotaglock.tagoutid = wotagout.tagoutid ). The result set will contain zero or more object.",
            "whereClause": "wonum = :wonum and tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}