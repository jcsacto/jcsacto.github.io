mos = {
    "objectName": "SAFETYLEXICON",
    "className": "psdi.app.safety.SafetyLexiconSet",
    "description": "Lexicon of safety terms with As/Loc associations",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SAFETYLEXICONID",
    "primaryKeyColumns": [
        "SITEID",
        "SAFETYLEXICONID"
    ],
    "logicalRelationships": [
        {
            "objectName": "SAFETYLEXICON",
            "targetObject": "SPLEXICONLINK",
            "parentKeys": "SITEID, SAFETYLEXICONID",
            "targetKeys": "SITEID, SAFETYLEXICONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Lexicon",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "SAFETYLEXICON",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 137",
            "longDescription": null
        },
        {
            "objectName": "HAZARD",
            "targetObject": "SAFETYLEXICON",
            "parentKeys": "ORGID, HAZARDID",
            "targetKeys": "ORGID, HAZARDID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Hazard",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SAFETYLEXICON",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SAFETYLEXICON",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SAFETYLEXICON",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "TAGOUT",
            "targetObject": "SAFETYLEXICON",
            "parentKeys": "SITEID, TAGOUTID",
            "targetKeys": "SITEID, TAGOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Tag Out",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SAFETYLEXICONID",
            "required": true,
            "persistent": true,
            "title": "Safety Lexicon ID",
            "remarks": "Identifies a Safety Term and optional Asset/Loc association. Key field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Identifies the related asset location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the related asset",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "HAZARDID",
            "required": false,
            "persistent": true,
            "title": "Hazard",
            "remarks": "Identifies the Hazard",
            "sameAsAttribute": "HAZARDID",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "TAGOUTID",
            "required": false,
            "persistent": true,
            "title": "Tag Out",
            "remarks": "Identifies the Tag Out Procedure",
            "sameAsAttribute": "TAGOUTID",
            "sameAsObject": "TAGOUT"
        },
        {
            "attributeName": "APPLYSEQ",
            "required": false,
            "persistent": true,
            "title": "Apply Sequence",
            "remarks": "Identifies the sequence to apply a Tag Out Procedure",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMOVESEQ",
            "required": false,
            "persistent": true,
            "title": "Remove Sequence",
            "remarks": "Identifies the sequence to remove a Tag Out Procedure",
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
            "attributeName": "ASSETDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "ASSETDESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SL01",
            "required": false,
            "persistent": true,
            "title": "sl01",
            "remarks": "Extra fields",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SL02",
            "required": false,
            "persistent": true,
            "title": "sl02",
            "remarks": "Extra fields",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SL03",
            "required": false,
            "persistent": true,
            "title": "sl03",
            "remarks": "Extra fields",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SL04",
            "required": false,
            "persistent": true,
            "title": "sl04",
            "remarks": "extra fields",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SL05",
            "required": false,
            "persistent": true,
            "title": "sl05",
            "remarks": "Extra fields",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Asset long description",
            "remarks": "The long description of asset",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to psdi.app.asset. Asset (asset.assetnum = safetylexicon.assetnum). Used to find the asset that is associated with this hazard or tagout. If assetnum is not null, the result set will contain one object.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the SAFETYLEXICON to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARD",
            "target": "HAZARD",
            "remarks": "Relationship to psdi.app.safety.Hazard Hazard (hazard.hazardid = safetylexicon.hazardid). If hazardid is not null, the result set will contain one object.",
            "whereClause": "hazardid = :hazardid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARDPREC",
            "target": "HAZARDPREC",
            "remarks": "Relationship to psdi.app.safety.HazardPrec (hazardprec.hazardid = safetylexicon.hazardid). This is the cross-reference to the related precautions. If hazardid is not null, the result set will contain zero or more objects.",
            "whereClause": "hazardid = :hazardid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to psdi.app.location.Location (locations.location = safetylexicon.location). Used to find the asset that is associated with this hazard or tagout. If location is not null, the result set will contain one object.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXTAG",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to psdi.app.safety.SafetyLexicon. If this safetylexicon is the \"owner\" for a tagout-enabled hazard, these are the tagout safetylexicons.  The \"owner\" will have null tagoutid,\tthe children will have non-null tagoutid. The Sql is: (safetylexicon.hazardid = (this)safetylexicon.hazardid and safetylexicon.tagoutid is not null and ((safetylexicon.assetnum is null and safetylexicon.location is null) or safetylexicon.assetnum = (this)safetylexicon.assetnum or safetylexicon.location = (this)safetylexicon.location)). The result set will contain zero or more objects.",
            "whereClause": "hazardid = :hazardid and tagoutid is not null and ((assetnum is null and location is null) or assetnum = :assetnum or location = :location) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPLEXICONLINK",
            "target": "SPLEXICONLINK",
            "remarks": "Relationship to psdi.app.safety.SPLexiconLink (splexiconlink.safetylexiconid = safetylexicon.safetylexiconid). This is the first in a chain of cross-reference tables leading back to the Safety Plan. The result set will contain zero or more objects.",
            "whereClause": "safetylexiconid = :safetylexiconid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPRELATEDASSET",
            "target": "SPRELATEDASSET",
            "remarks": "Relationship to psdi.app.safety.SPRelatedAsset (sprelatedasset.relatedasset = safetylexicon.assetnum or sprelatedasset.relatedlocation = safetylexicon.location). Used to find the asset or location that owns this safetylexicon. The result set will contain zero or more objects.",
            "whereClause": "relatedasset = :assetnum or relatedlocation = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPWORKASSET",
            "target": "SPWORKASSET",
            "remarks": "Relationship to psdi.app.safety.SPWorkAsset (spworkasset.spworkassetid in (select splexiconlink.spworkassetid from splexiconlink where splexiconlink.safetylexiconid = safetylexicon.safetylexiconid)). This is the middle link in a chain of cross-reference tables leading back to the Safety Plan. The result set will contain zero or more objects.",
            "whereClause": "spworkassetid in (select spworkassetid from splexiconlink where safetylexiconid = :safetylexiconid and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGLOCK",
            "target": "TAGLOCK",
            "remarks": "Relationship to TagLock table. When the owner has a non-null tagoutid, these are the related taglocks (taglock.tagoutid = safetylexicon.tagoutid). The result set will contain zero or more objects.",
            "whereClause": "tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGOUT",
            "target": "TAGOUT",
            "remarks": "Relationship to psdi.app.safety.TagOut (tagout.tagoutid = safetylexicon.tagoutid). If TagOutID is not null, the result set will contain one object.",
            "whereClause": "tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZTAGOUT",
            "target": "TAGOUT",
            "remarks": "Relationship to psdi.app.safety.TagOut. If this safetylexicon is the owner for a tagout-enabled hazard, these are the tagouts.  The owner will have null tagoutid. This is similar to relationship SAFETYLEXTAG, except that you are getting the TagOut mbos. The Sql is: tagout.tagoutid in (select safetylexicon.tagoutid from safetylexicon where safetylexicon.hazardid = (this)safetylexicon.hazardid and ((safetylexicon.assetnum is null and safetylexicon.location is null) or safetylexicon.assetnum = (this)safetylexicon.assetnum or safetylexicon.location = (this)safetylexicon.location))). The result set will contain zero or more objects.",
            "whereClause": "tagoutid in (select tagoutid from safetylexicon where hazardid = :hazardid and siteid=:siteid and  ((assetnum is null and location is null) or assetnum = :assetnum or location = :location)) and siteid=:siteid",
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
            "remarks": "Relationship from the SAFETYLEXICON to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SAFETYLEXHAZMAT",
            "source": "ASSET",
            "remarks": "Relationship to the SafetyLexicon table, used to find all safetylexicons for a given asset where hazard is hazardous-material enabled. (safetylexicon.assetnum = asset.assetnum and exists (select 1 from hazard where hazard.hazardid = safetylexicon.hazardid and hazard.hazmatenabled = \"T\")). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.hazmatenabled=:yes) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXHAZPREC",
            "source": "ASSET",
            "remarks": "Relationship to the SafetyLexicon table, used to find all safetylexicons for a given asset where hazard is precautionenabled. (safetylexicon.assetnum = asset.assetnum and exists (select 1 from hazard where hazard.hazardid = safetylexicon.hazardid and hazard.precautionenabled = \"T\")). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.precautionenabled=:yes) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXICON",
            "source": "ASSET",
            "remarks": "Relationship to the SafetyLexicon table, used to find all safetylexicons for a given asset. (safetylexicon.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXNOTAGOUT",
            "source": "ASSET",
            "remarks": "Relationship to the SafetyLexicon table, used to find all safetylexicons for a given asset where tagout is null.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid and tagoutid is null",
            "cardinality": null
        },
        {
            "name": "SAFETYLEXTAGOUT",
            "source": "ASSET",
            "remarks": "Relationship to the SafetyLexicon table, used to find all safetylexicons for a given asset where hazard is tagout enabled. (safetylexIcon.assetnum = asset.assetnum and exists (select 1 from hazard where hazard.hazardid = safetylexicon.hazardid and hazard.tagoutenabled = \"T\" and safetylexicon.tagoutid is null)). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.tagoutenabled=:yes and safetylexicon.tagoutid is null) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXALL",
            "source": "HAZARD",
            "remarks": "Relationship to psdi.app.safety.SafetyLexicon (safetylexicon.hazardid = hazard.hazardid). Finds all SafetyLexicon for this Hazard. The result set will contain one or more objects.",
            "whereClause": "hazardid = :hazardid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXCHILDREN",
            "source": "HAZARD",
            "remarks": "Relationship to psdi.app.safety.SafetyLexicon (safetylexicon.hazardid = hazard.hazardid and (safetylexicon.assetnum is not null or safetylexicon.location is not null or safetylexicon.tagoutid is not null)). Finds all SafetyLexicon for this Hazard except the \"main\" SafetyLexicon. The result set will contain zero or more objects.",
            "whereClause": "hazardid = :hazardid and (assetnum is not null or location is not null or tagoutid is not null) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXMAIN",
            "source": "HAZARD",
            "remarks": "Relationship to psdi.app.safety.SafetyLexicon (safetylexicon.hazardid = hazard.hazardid and safetylexicon.assetnum is null and\tsafetylexicon.location is null and safetylexicon.tagoutid is null). Finds the \"main\" SafetyLexicon for this Hazard. The result set will contain one object.",
            "whereClause": "hazardid = :hazardid and assetnum is null and location is null and tagoutid is null and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXTAGOUTS",
            "source": "HAZARD",
            "remarks": "Relationship to psdi.app.safety.SafetyLexicon (safetylexicon.hazardid = hazard.hazardid and safetylexicon.tagoutid is not null). Finds SafetyLexicon children of this Hazard that represent TagOuts. The result set will contain zero or more objects.",
            "whereClause": "hazardid = :hazardid and tagoutid is not null and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXHAZMAT",
            "source": "LOCATIONS",
            "remarks": "Relationship to the SafetyLexicon table, used to find the operating location's lexicon of safety terms for hazardous material enabled hazards. (safetylexicon.location = locations.location and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.hazmatenabled=yes)). This relationship will find zero or more objects.",
            "whereClause": "location = :location and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.hazmatenabled=:yes) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXHAZPREC",
            "source": "LOCATIONS",
            "remarks": "Relationship to the SafetyLexicon table, used to find the operating location's lexicon of safety terms for precaution enabled hazards. (safetylexicon.location = locations.location and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.precautionenabled= yes)). This relationship will contain zero or more objects.",
            "whereClause": "location = :location and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.precautionenabled=:yes) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXICON",
            "source": "LOCATIONS",
            "remarks": "Relationship to the SafetyLexicon table, used to find the lexicon of safety terms which contain the operating location. (locations.location =safetylexicon.location). The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXTAGOUT",
            "source": "LOCATIONS",
            "remarks": "Relationship to the SafetyLexicon table, used to find the operating location's lexicon of safety terms for tagout enabled hazards. (safetylexicon.location = locations.location and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.tagoutenabled=yes and safetylexicon.tagoutid is null)). This relationship will find zero or more objects.",
            "whereClause": "location = :location and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.tagoutenabled=:yes and safetylexicon.tagoutid is null) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXTAG",
            "source": "SAFETYLEXICON",
            "remarks": "Relationship to psdi.app.safety.SafetyLexicon. If this safetylexicon is the \"owner\" for a tagout-enabled hazard, these are the tagout safetylexicons.  The \"owner\" will have null tagoutid,\tthe children will have non-null tagoutid. The Sql is: (safetylexicon.hazardid = (this)safetylexicon.hazardid and safetylexicon.tagoutid is not null and ((safetylexicon.assetnum is null and safetylexicon.location is null) or safetylexicon.assetnum = (this)safetylexicon.assetnum or safetylexicon.location = (this)safetylexicon.location)). The result set will contain zero or more objects.",
            "whereClause": "hazardid = :hazardid and tagoutid is not null and ((assetnum is null and location is null) or assetnum = :assetnum or location = :location) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARD",
            "source": "SAFETYPLAN",
            "remarks": "Relationship to SafetyLexicon table for a given safetyplan. The Sql is ( safetylexiconid in (select safetylexiconid from  splexiconlink\twhere spworkassetid in (select spworkassetid from spworkasset where\tsafetyplanid = safetyplan.safetyplanid ))). Used to search all safetyplans which has specified hazard in SafetyPlan application. The result set will contain zero or more objects.",
            "whereClause": "safetylexiconid in (select safetylexiconid from  splexiconlink where spworkassetid in (select spworkassetid from spworkasset where safetyplanid = :safetyplanid and siteid=:siteid) and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXICON",
            "source": "SITE",
            "remarks": "Relationship from Site to SafetyLexicon",
            "whereClause": "siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "SAFETYLEXICON",
            "source": "SPLEXICONLINK",
            "remarks": "Relationship to SafetyLexicon table. (safetylexicon.safetylexiconid = splexiconlink.safetylexiconid). The result set will contain one object.",
            "whereClause": "safetylexiconid = :safetylexiconid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXICON",
            "source": "SPRELATEDASSET",
            "remarks": "Relationship to SafetyLexicon table. (safetylexicon.assetnum = sprelatedasset.relatedasset or safetylexicon.location = sprelatedasset.relatedlocation). Finds any SafetyLexicon for the related asset. The result set will contain zero or more objects.",
            "whereClause": "assetnum = :relatedasset or location = :relatedlocation and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SELECTHAZARD",
            "source": "SPWORKASSET",
            "remarks": null,
            "whereClause": "tagoutid is null and siteid =:siteid and  (  (assetnum in (   select relatedasset from sprelatedasset  where (assetnum=:workasset or assetnum is null) and (location=:worklocation or location is null) and siteid=:siteid) ) or (location in ( select relatedlocation from sprelatedasset where (assetnum=:workasset or assetnum is null) and (location=:worklocation or location is null) and siteid=:siteid ) ) or ( ( (assetnum=:workasset )  or   ( location= :worklocation   ) )  and  exists  (select varvalue from maxvars where varname='SHOWWORKASSETHAZ' and varvalue='1' and siteid =:siteid) ) )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXICON",
            "source": "TAGOUT",
            "remarks": "Relationship to SafetyLexicon (safetylexicon.tagoutid = tagout.tagoutid). The result set will contain one or more objects.",
            "whereClause": "tagoutid = :tagoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXMAIN",
            "source": "TAGOUT",
            "remarks": "Relationship to SafetyLexicon table. (safetylexicon.tagoutid = tagout.tagoutid and safetylexicon.assetnum is null and safetylexicon.location is null and safetylexicon.hazardid is null). Finds the \"main\" SafetyLexicon for this TagOut. The result set will contain one object.",
            "whereClause": "tagoutid = :tagoutid and assetnum is null and location is null and hazardid is null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}