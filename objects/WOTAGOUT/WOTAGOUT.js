mos = {
    "objectName": "WOTAGOUT",
    "className": "psdi.app.workorder.WoTagOutSet",
    "description": "A tagout procedure for a work order.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WOTAGOUTID",
    "primaryKeyColumns": [
        "SITEID",
        "WONUM",
        "TAGOUTID",
        "WOSAFETYDATASOURCE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "WOTAGOUT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 177",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "WOTAGOUT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOTAGOUT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lock Out Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WOTAGOUT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOTAGOUT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "TAGOUT",
            "targetObject": "WOTAGOUT",
            "parentKeys": "SITEID, TAGOUTID",
            "targetKeys": "SITEID, TAGOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tag-Out data",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOTAGOUT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Safety Tag-Outs",
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
            "title": "TagOut ID",
            "remarks": "Identifies a TagOut procedure for working on this Work Order.",
            "sameAsAttribute": "TAGOUTID",
            "sameAsObject": "TAGOUT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the tagout procedure",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Identifies the Location that will be Tagged Out",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the Asset that will be Tagged Out",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "REQUIREDSTATE",
            "required": false,
            "persistent": true,
            "title": "Required State",
            "remarks": "Identifies the required state of the Tag Out asset",
            "sameAsAttribute": "REQUIREDSTATE",
            "sameAsObject": "TAGOUT"
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
            "attributeName": "TAG01",
            "required": false,
            "persistent": true,
            "title": "Extra 1",
            "remarks": "Extra Field 01",
            "sameAsAttribute": "TAG01",
            "sameAsObject": "TAGOUT"
        },
        {
            "attributeName": "TAG02",
            "required": false,
            "persistent": true,
            "title": "Extra 2",
            "remarks": "Extra Field 02",
            "sameAsAttribute": "TAG02",
            "sameAsObject": "TAGOUT"
        },
        {
            "attributeName": "TAG03",
            "required": false,
            "persistent": true,
            "title": "Extra 3",
            "remarks": "Extra Field 03",
            "sameAsAttribute": "TAG03",
            "sameAsObject": "TAGOUT"
        },
        {
            "attributeName": "TAG04",
            "required": false,
            "persistent": true,
            "title": "Extra 4",
            "remarks": "Extra Field 04",
            "sameAsAttribute": "TAG04",
            "sameAsObject": "TAGOUT"
        },
        {
            "attributeName": "TAG05",
            "required": false,
            "persistent": true,
            "title": "Extra 5",
            "remarks": "Extra Field 05",
            "sameAsAttribute": "TAG05",
            "sameAsObject": "TAGOUT"
        },
        {
            "attributeName": "TAG06",
            "required": false,
            "persistent": true,
            "title": "Extra 6",
            "remarks": "Extra Field 06",
            "sameAsAttribute": "TAG06",
            "sameAsObject": "TAGOUT"
        },
        {
            "attributeName": "TAG07",
            "required": false,
            "persistent": true,
            "title": "Extra 7",
            "remarks": "Extra Field 07",
            "sameAsAttribute": "TAG07",
            "sameAsObject": "TAGOUT"
        },
        {
            "attributeName": "TAG08",
            "required": false,
            "persistent": true,
            "title": "Extra 8",
            "remarks": "Extra Field 08",
            "sameAsAttribute": "TAG08",
            "sameAsObject": "TAGOUT"
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
            "remarks": "Long Description for The description of the tagout procedure",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZARDID",
            "required": false,
            "persistent": false,
            "title": "Hazard",
            "remarks": "HAZARDID",
            "sameAsAttribute": "HAZARDID",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "ASSETDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "ASSETDESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOTAGOUTID",
            "required": true,
            "persistent": true,
            "title": "WOTAGOUTID",
            "remarks": "Unique Identifier",
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
            "attributeName": "ASSETDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Asset long description",
            "remarks": "The long description od asset",
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
            "remarks": "Relationship from the WOTAGOUT to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGOUT",
            "target": "TAGOUT",
            "remarks": "Relationship to psdi.app.safety.TagOut (tagout.tagoutid = wotagout.tagoutid). The result set will contain one object.",
            "whereClause": "tagoutid=:tagoutid and siteid=:siteid",
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
            "remarks": "Relationship from the WOTAGOUT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOLOCKOUT",
            "target": "WOLOCKOUT",
            "remarks": "Relationship to psdi.app.workorder.WoLockOut WoLockOut (wolockout.wonum = wotagout.wonum and wolockout.lockoutid in (select wotaglock.lockoutid from wotaglock where wotaglock.wonum = wotagout.wonum and wotaglock.tagoutid = wotagout.tagoutid)). The result set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and lockoutid in (select lockoutid from wotaglock where wonum = :wonum and tagoutid = :tagoutid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOSAFETYLINK",
            "target": "WOSAFETYLINK",
            "remarks": "Relationship to psdi.app.workorder.WoSafetyLink (wosafetylink.wonum = wotagout.wonum and wosafetylink.tagoutid = wotagout.tagoutid and wosafetylink.wosafetydatasource = wotagout.wosafetydatasource). The result set will contain zero or more object.",
            "whereClause": "wonum = :wonum and tagoutid = :tagoutid and wosafetydatasource = :wosafetydatasource and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTAGLOCK",
            "target": "WOTAGLOCK",
            "remarks": "Relationship to psdi.app.workorder.WoTagLock (wotaglock.wonum = wotagout.wonum and wotaglock.tagoutid = wotagout.tagoutid ). The result set will contain zero or more object.",
            "whereClause": "wonum = :wonum and tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WOTAGOUT",
            "source": "TAGOUT",
            "remarks": "Relationship to WoTagOut (wotagout.tagoutid = tagout.tagoutid). The result set will contain zero or more objects.",
            "whereClause": "tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTAGOUT",
            "source": "WOHAZARD",
            "remarks": "Relationship to WoTagOut table. (wotagout.wonum = wohazard.wonum and wotagout.tagoutid in (select wosafetylink.tagoutid from wosafetylink where wosafetylink.wonum = wohazard.wonum and wosafetylink.hazardid = wohazard.hazardid)). The result set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and tagoutid in (select tagoutid from wosafetylink where wonum = :wonum  and hazardid = :hazardid and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTAGOUT",
            "source": "WORKORDER",
            "remarks": "Relationship to the WOTagOut table, used to find all workorder tagouts for a work order. (WOTagOut.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTAGOUT",
            "source": "WOSAFETYLINK",
            "remarks": "Relationship to psdi.app.workorder.WoTagOut where the owner is a tagout (wotagout.wonum = wosafetylink.wonum and wotagout.tagoutid = wosafetylink.tagoutid). The result set will contain one object.",
            "whereClause": "wonum = :wonum and tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTAGOUTS",
            "source": "WOSAFETYLINK",
            "remarks": "Relationship to psdi.app.workorder.WoTagOut WoTagOut} where the owner is a hazard (wotagout.wonum = wosafetylink.wonum and wotagout.tagoutid in\t(select wosl2.tagoutid from wosafetylink wosl2\twhere wosl2.wonum = wosafetylink.wonum and wosl2.hazardid = wosafetylink.hazardid and wosl2.tagoutid is not null)). Used to get the tagouts for thsi hazard. The result set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and tagoutid in (select tagoutid from wosafetylink where wonum = :wonum and hazardid = :hazardid and siteid=:siteid and tagoutid is not null) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTAGOUT",
            "source": "WOTAGLOCK",
            "remarks": "Relationship to psdi.app.workorder.WoTagOut (wotagout.wonum = wotaglock.wonum and wotagout.tagoutid = wotaglock.tagoutid). Used to find the tagouts for this taglock cross reference. The result set will contain one object.",
            "whereClause": "wonum = :wonum and tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}