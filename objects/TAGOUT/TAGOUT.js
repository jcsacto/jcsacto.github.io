mos = {
    "objectName": "TAGOUT",
    "className": "psdi.app.safety.TagOutSet",
    "description": "An asset or location tagout procedure",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "TAGOUTUID",
    "primaryKeyColumns": [
        "SITEID",
        "TAGOUTID"
    ],
    "logicalRelationships": [
        {
            "objectName": "TAGOUT",
            "targetObject": "SAFETYLEXICON",
            "parentKeys": "SITEID, TAGOUTID",
            "targetKeys": "SITEID, TAGOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Tag Out",
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
        },
        {
            "objectName": "TAGOUT",
            "targetObject": "WOSAFETYLINK",
            "parentKeys": "SITEID, TAGOUTID",
            "targetKeys": "SITEID, TAGOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Tag-Outs due to Asset or Location",
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
            "objectName": "TAGOUT",
            "targetObject": "WOTAGOUT",
            "parentKeys": "SITEID, TAGOUTID",
            "targetKeys": "SITEID, TAGOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tag-Out data",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "TAGOUT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 150",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "TAGOUT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TAGOUT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tag Out Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TAGOUT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TAGOUT",
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
            "attributeName": "TAGOUTID",
            "required": true,
            "persistent": true,
            "title": "Tag Out",
            "remarks": "Identifies the tagout procedure",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "remarks": "Identifies the location that will be tagged out",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the asset that will be tagged out",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "REQUIREDSTATE",
            "required": false,
            "persistent": true,
            "title": "Required State",
            "remarks": "Identifies the required state of the Tag Out asset",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAG01",
            "required": false,
            "persistent": true,
            "title": "Extra 1",
            "remarks": "Extra Field 01",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAG02",
            "required": false,
            "persistent": true,
            "title": "Extra 2",
            "remarks": "Extra Field 02",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAG03",
            "required": false,
            "persistent": true,
            "title": "Extra 3",
            "remarks": "Extra Field 03",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAG04",
            "required": false,
            "persistent": true,
            "title": "Extra 4",
            "remarks": "Extra Field 04",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAG05",
            "required": false,
            "persistent": true,
            "title": "Extra 5",
            "remarks": "Extra Field 05",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAG06",
            "required": false,
            "persistent": true,
            "title": "Extra 6",
            "remarks": "Extra Field 06",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAG07",
            "required": false,
            "persistent": true,
            "title": "Extra 7",
            "remarks": "Extra Field 07",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAG08",
            "required": false,
            "persistent": true,
            "title": "Extra 8",
            "remarks": "Extra Field 08",
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
            "remarks": "Long Description for The description of the tagout procedure",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "TAGOUTUID",
            "required": true,
            "persistent": true,
            "title": "TAGOUTUID",
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
            "remarks": "The long description of asset",
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
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to Asset table. (asset.assetnum = tagout.assetnum). If assetnum is not null, the result set will contain one object.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to Doclinks table. (doclinks.keytable = 'TAGOUT' and doclinks.keycolumn = 'TAGOUTID' and doclinks.keyvalue = tagout.tagoutid). Used to find associated linked documents. The result set will contain zero or more objects.",
            "whereClause": "ownertable = 'TAGOUT' and ownerid = :tagoutuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the TAGOUT to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to Locations table. (locations.location = tagout.location). If location is not null, the result set will contain one object.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCKOUT",
            "target": "LOCKOUT",
            "remarks": "Relationship to LockOut table. (lockout.lockoutid in (select taglock.lockoutid from taglock where taglock.tagoutid = tagout.tagoutid)). The result set will contain zero or more objects.",
            "whereClause": "lockoutid in (select lockoutid from taglock where tagoutid = :tagoutid and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXICON",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to SafetyLexicon (safetylexicon.tagoutid = tagout.tagoutid). The result set will contain one or more objects.",
            "whereClause": "tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXMAIN",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to SafetyLexicon table. (safetylexicon.tagoutid = tagout.tagoutid and safetylexicon.assetnum is null and safetylexicon.location is null and safetylexicon.hazardid is null). Finds the \"main\" SafetyLexicon for this TagOut. The result set will contain one object.",
            "whereClause": "tagoutid = :tagoutid and assetnum is null and location is null and hazardid is null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGLOCK",
            "target": "TAGLOCK",
            "remarks": "Relationship to TagLock (taglock.tagoutid = tagout.tagoutid). The result set will contain zero or more objects.",
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
            "remarks": "Relationship from the TAGOUT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTAGOUT",
            "target": "WOTAGOUT",
            "remarks": "Relationship to WoTagOut (wotagout.tagoutid = tagout.tagoutid). The result set will contain zero or more objects.",
            "whereClause": "tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "TAGOUT",
            "source": "ASSET",
            "remarks": "Relationship to the TagOut table, used to find all tag out assets to prevent a hazard for a given asset. (tagout.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGOUT",
            "source": "LOCATIONS",
            "remarks": "Relationship to the TagOut table, used to find the assets tagged out identified by the operating location. (locations.location =tagout.location). The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGOUT",
            "source": "SAFETYLEXICON",
            "remarks": "Relationship to psdi.app.safety.TagOut (tagout.tagoutid = safetylexicon.tagoutid). If TagOutID is not null, the result set will contain one object.",
            "whereClause": "tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZTAGOUT",
            "source": "SAFETYLEXICON",
            "remarks": "Relationship to psdi.app.safety.TagOut. If this safetylexicon is the owner for a tagout-enabled hazard, these are the tagouts.  The owner will have null tagoutid. This is similar to relationship SAFETYLEXTAG, except that you are getting the TagOut mbos. The Sql is: tagout.tagoutid in (select safetylexicon.tagoutid from safetylexicon where safetylexicon.hazardid = (this)safetylexicon.hazardid and ((safetylexicon.assetnum is null and safetylexicon.location is null) or safetylexicon.assetnum = (this)safetylexicon.assetnum or safetylexicon.location = (this)safetylexicon.location))). The result set will contain zero or more objects.",
            "whereClause": "tagoutid in (select tagoutid from safetylexicon where hazardid = :hazardid and siteid=:siteid and  ((assetnum is null and location is null) or assetnum = :assetnum or location = :location)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGOUT",
            "source": "SPLEXICONLINK",
            "remarks": "Relationship to TagOut when the owner is a tagout-enabled hazard (the parent safetylexicon has null tagoutid) and the child set represents its tagouts.\tThe Sql is ( tagout.tagoutid in\t(select safetylexicon.tagoutid from safetylexicon where safetylexicon.safetylexiconid in (select spll2.safetylexiconid from splexiconlink spll2 where spll2.spworkassetid = (this)splexiconlink.spworkassetid) and spll2.hazardid in (select slex2.hazardid from safetylexicon slex2 where slex2.safetylexiconid = (this)splexiconlink.safetylexiconid))). The result set will contain zero or more objects.",
            "whereClause": "tagoutid in  (select tagoutid from safetylexicon where safetylexiconid in (select safetylexiconid from splexiconlink where spworkassetid = :spworkassetid and siteid=:siteid) and hazardid in (select hazardid from safetylexicon where safetylexiconid = :safetylexiconid and siteid=:siteid) and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SINGLETAGOUT",
            "source": "SPLEXICONLINK",
            "remarks": "Relationship to TagOut table when the owner is a tagout (the parent safetylexicon has non-null tagoutid). The Sql is ( tagout.tagoutid in (select safetylexicon.tagoutid from safetylexicon where safetylexicon.safetylexiconid = splexiconlink.safetylexiconid)). The result set will contain one object if there is a non-null tagoutid.",
            "whereClause": "tagoutid in  (select tagoutid from safetylexicon where safetylexiconid = :safetylexiconid and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGOUT",
            "source": "TAGLOCK",
            "remarks": "Relationship to TagOut table. (tagout.tagoutid = taglock.tagoutid). The result set will contain one object.",
            "whereClause": "tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGOUT",
            "source": "WOSAFETYLINK",
            "remarks": "Relationship to psdi.app.safety.TagOut (tagout.tagoutid = wosafetylink.tagoutid). The result set will contain zero or one object.",
            "whereClause": "tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGOUT",
            "source": "WOTAGOUT",
            "remarks": "Relationship to psdi.app.safety.TagOut (tagout.tagoutid = wotagout.tagoutid). The result set will contain one object.",
            "whereClause": "tagoutid=:tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}