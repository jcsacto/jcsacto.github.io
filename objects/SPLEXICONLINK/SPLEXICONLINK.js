mos = {
    "objectName": "SPLEXICONLINK",
    "className": "psdi.app.safety.SPLexiconLinkSet",
    "description": "A link of safety info. with Safety Plan work asset",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SPLEXICONLINKID",
    "primaryKeyColumns": [
        "SITEID",
        "SPWORKASSETID",
        "SAFETYLEXICONID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SPLEXICONLINK",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SAFETYLEXICON",
            "targetObject": "SPLEXICONLINK",
            "parentKeys": "SITEID, SAFETYLEXICONID",
            "targetKeys": "SITEID, SAFETYLEXICONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Lexicon",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SPLEXICONLINK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SPWORKASSET",
            "targetObject": "SPLEXICONLINK",
            "parentKeys": "SITEID, SPWORKASSETID",
            "targetKeys": "SITEID, SPWORKASSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Plan Work Asset",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SPWORKASSETID",
            "required": true,
            "persistent": true,
            "title": "Work Asset",
            "remarks": "Identifies the Safety Plan Work Asset.",
            "sameAsAttribute": "SPWORKASSETID",
            "sameAsObject": "SPWORKASSET"
        },
        {
            "attributeName": "SAFETYLEXICONID",
            "required": true,
            "persistent": true,
            "title": "Safety Lexicon ID",
            "remarks": "The Safety Lexicon ID",
            "sameAsAttribute": "SAFETYLEXICONID",
            "sameAsObject": "SAFETYLEXICON"
        },
        {
            "attributeName": "APPLYSEQ",
            "required": false,
            "persistent": true,
            "title": "Apply Sequence",
            "remarks": "The ordered apply sequence of the Tag Out Procedure",
            "sameAsAttribute": "APPLYSEQ",
            "sameAsObject": "SAFETYLEXICON"
        },
        {
            "attributeName": "REMOVESEQ",
            "required": false,
            "persistent": true,
            "title": "Remove Sequence",
            "remarks": "The ordered remove sequence of the Tag Out Procedure",
            "sameAsAttribute": "REMOVESEQ",
            "sameAsObject": "SAFETYLEXICON"
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
            "attributeName": "CONTACTRATING",
            "required": false,
            "persistent": false,
            "title": "Contact",
            "remarks": "CONTACTRATING",
            "sameAsAttribute": "CONTACTRATING",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "REACTIVITYRATING",
            "required": false,
            "persistent": false,
            "title": "Reactivity",
            "remarks": "REACTIVITYRATING",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FLAMMABILITYRATING",
            "required": false,
            "persistent": false,
            "title": "Flammability",
            "remarks": "FLAMMABILITYRATING",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HEALTHRATING",
            "required": false,
            "persistent": false,
            "title": "Health",
            "remarks": "HEALTHRATING",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSDSNUM",
            "required": false,
            "persistent": false,
            "title": "MSDS",
            "remarks": "MSDSNUM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZARDDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "HAZARDDESCRIPTION",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "WORKASSETDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "WORKASSETDESCRIPTION",
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
            "attributeName": "TAGOUTDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "TAGOUTDESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAGOUTLOCATION",
            "required": false,
            "persistent": false,
            "title": "Location to Tag Out",
            "remarks": "TAGOUTLOCATION",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "TAGOUTASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset to Tag Out",
            "remarks": "TAGOUTASSETNUM",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WORKLOCATION",
            "required": false,
            "persistent": false,
            "title": "Work Location",
            "remarks": "WORKLOCATION",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "WORKASSET",
            "required": false,
            "persistent": false,
            "title": "Work Asset",
            "remarks": "WORKASSET",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Related Location",
            "remarks": "LOCATION",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Related Asset",
            "remarks": "ASSETNUM",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TAGOUTID",
            "required": false,
            "persistent": false,
            "title": "Tag Out",
            "remarks": "TAGOUTID",
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
            "attributeName": "SPLEXICONLINKID",
            "required": true,
            "persistent": true,
            "title": "SPLEXICONLINKID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZARDDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Hazard long description",
            "remarks": "Hazard long description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Asset long description",
            "remarks": "Asset long description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKASSETDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Work Asset long description",
            "remarks": "work asset long  description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAGOUTDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Tag Out Long Description",
            "remarks": "tagout long description",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the SPLEXICONLINK to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARD",
            "target": "HAZARD",
            "remarks": "Relationship to Hazard table. The Sql is ( hazard.hazardid in ( select safetylexicon.hazardid from safetylexicon where safetylexicon.safetylexiconid = splexiconlink.safetylexiconid)). The result set will contain one object.",
            "whereClause": "hazardid in ( select hazardid from safetylexicon where safetylexiconid = :safetylexiconid and siteid=:siteid) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARDPREC",
            "target": "HAZARDPREC",
            "remarks": "Relationship to HazardPrec table. The Sql is ( hazardprec.hazardid in ( select safetylexicon.hazardid from safetylexicon where safetylexicon.safetylexiconid = splexiconlink.safetylexiconid)). The result set will contain zero or more objects.",
            "whereClause": " hazardid in ( select hazardid from safetylexicon where safetylexiconid = :safetylexiconid and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXICON",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to SafetyLexicon table. (safetylexicon.safetylexiconid = splexiconlink.safetylexiconid). The result set will contain one object.",
            "whereClause": "safetylexiconid = :safetylexiconid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPLLTAGOUTS",
            "target": "SPLEXICONLINK",
            "remarks": "Relationship to SPLexiconLink table when the owner is a tagout-enabled hazard (the parent safetylexicon has null tagoutid) and the child set represents its tagouts. The Sql is (splexiconlink.spworkassetid = :spworkassetid and splexiconlink.safetylexiconid in (select safetylexicon.safetylexiconid from safetylexicon where safetylexicon.tagoutid is not null and safetylexicon.hazardid in (select slex2.hazardid from safetylexicon slex2 where slex2.safetylexiconid = (this)splexiconlink.safetylexiconid))). The result set will contain zero or more objects.",
            "whereClause": "spworkassetid = :spworkassetid and safetylexiconid in  (select safetylexiconid from safetylexicon where tagoutid is not null  and hazardid in (select hazardid from safetylexicon where safetylexiconid = :safetylexiconid and siteid=:siteid) and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPWORKASSET",
            "target": "SPWORKASSET",
            "remarks": "Relationship to SPWorkAsset table. (spworkasset.spworkassetid = splexiconlink.spworkassetid). The result set will contain one object.",
            "whereClause": "spworkassetid = :spworkassetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGLOCK",
            "target": "TAGLOCK",
            "remarks": "Relationship to TagLock when the owner represents a tagout (the parent safetylexicon has non-null tagoutid) and the child set represents its taglocks. The Sql is (taglock.tagoutid in (select safetylexicon.tagoutid from safetylexicon where safetylexicon.safetylexiconid = splexiconlink.safetylexiconid)). The result set will contain zero or more objects.",
            "whereClause": "tagoutid in (select tagoutid from safetylexicon where safetylexiconid = :safetylexiconid and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGOUT",
            "target": "TAGOUT",
            "remarks": "Relationship to TagOut when the owner is a tagout-enabled hazard (the parent safetylexicon has null tagoutid) and the child set represents its tagouts.\tThe Sql is ( tagout.tagoutid in\t(select safetylexicon.tagoutid from safetylexicon where safetylexicon.safetylexiconid in (select spll2.safetylexiconid from splexiconlink spll2 where spll2.spworkassetid = (this)splexiconlink.spworkassetid) and spll2.hazardid in (select slex2.hazardid from safetylexicon slex2 where slex2.safetylexiconid = (this)splexiconlink.safetylexiconid))). The result set will contain zero or more objects.",
            "whereClause": "tagoutid in  (select tagoutid from safetylexicon where safetylexiconid in (select safetylexiconid from splexiconlink where spworkassetid = :spworkassetid and siteid=:siteid) and hazardid in (select hazardid from safetylexicon where safetylexiconid = :safetylexiconid and siteid=:siteid) and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SINGLETAGOUT",
            "target": "TAGOUT",
            "remarks": "Relationship to TagOut table when the owner is a tagout (the parent safetylexicon has non-null tagoutid). The Sql is ( tagout.tagoutid in (select safetylexicon.tagoutid from safetylexicon where safetylexicon.safetylexiconid = splexiconlink.safetylexiconid)). The result set will contain one object if there is a non-null tagoutid.",
            "whereClause": "tagoutid in  (select tagoutid from safetylexicon where safetylexiconid = :safetylexiconid and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput.  ",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the SPLEXICONLINK to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SPLEXICONLINK",
            "source": "SAFETYLEXICON",
            "remarks": "Relationship to psdi.app.safety.SPLexiconLink (splexiconlink.safetylexiconid = safetylexicon.safetylexiconid). This is the first in a chain of cross-reference tables leading back to the Safety Plan. The result set will contain zero or more objects.",
            "whereClause": "safetylexiconid = :safetylexiconid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSOCHAZMAT",
            "source": "SAFETYPLAN",
            "remarks": "Relationship to SPLexiconLink table. Finds associated hazards that are hazmatenabled (regardless of whether there are items with that hazardid). The Sql is: ( splexiconlink.spworkassetid in (select spworkasset.spworkassetid from spworkasset where spworkasset.safetyplanid = safetyplan.safetyplanid )  and splexiconlink.safetylexiconid in (select safetylexicon.safetylexiconid from safetylexicon where safetylexicon.hazardid in (select hazard.hazardid from hazard where hazard.hazmatenabled = :yes))). The result set will contain zero or more objects.",
            "whereClause": "spworkassetid in (select spworkassetid from spworkasset where safetyplanid = :safetyplanid and siteid=:siteid) and safetylexiconid in (select safetylexiconid from safetylexicon where hazardid in (select hazardid from hazard where hazmatenabled = :yes and orgid=:orgid) and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSOCHAZPREC",
            "source": "SAFETYPLAN",
            "remarks": "Relationship to SPLexiconLink table. Finds associated hazards that are precautionenabled (regardless of whether there are hazardprec with that hazardid). The Sql is: (splexiconlink.spworkassetid in (select spworkasset.spworkassetid from spworkasset where spworkasset.safetyplanid = safetyplan.safetyplanid )  and splexiconlink.safetylexiconid in (select safetylexicon.safetylexiconid from safetylexicon where safetylexicon.hazardid in (select hazard.hazardid from hazard where hazard.precautionenabled = :yes))). The result set will contain zero or more objects.",
            "whereClause": "spworkassetid in (select spworkassetid from spworkasset where safetyplanid = :safetyplanid and siteid=:siteid) and safetylexiconid in (select safetylexiconid from safetylexicon where hazardid in (select hazardid from hazard where precautionenabled = :yes and orgid=:orgid) and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSOCHAZTAG",
            "source": "SAFETYPLAN",
            "remarks": "Relationship to SPLexiconLink table. Finds associated hazards that are tagoutenabled (regardless of whether there are actually tagouts). The Sql is: ( splexiconlink.spworkassetid in (select spworkasset.spworkassetid from spworkasset where spworkasset.safetyplanid = safetyplan.safetyplanid )\t and splexiconlink.safetylexiconid in (select safetylexicon.safetylexiconid from safetylexicon where safetylexicon.tagoutid is null and safetylexicon.hazardid in (select hazard.hazardid from hazard where hazard.tagoutenabled = :yes))).\t The result set will contain zero or more objects.",
            "whereClause": "spworkassetid in  (select spworkassetid from spworkasset where safetyplanid = :safetyplanid and siteid=:siteid) and safetylexiconid in (select safetylexiconid from safetylexicon where tagoutid is null and hazardid in  (select hazardid from hazard where tagoutenabled = :yes and orgid=:orgid) and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSOCTAGOUT",
            "source": "SAFETYPLAN",
            "remarks": "Relationship to SPLexiconLink table. Finds associated tagouts. The Sql is: ( splexiconlink.spworkassetid in (select spworkasset.spworkassetid from spworkasset where spworkasset.safetyplanid = safetyplan.safetyplanid ) and splexiconlink.safetylexiconid in (select safetylexicon.safetylexiconid from safetylexicon where safetylexicon.tagoutid is not null and safetylexicon.hazardid in (select hazard.hazardid from hazard where hazard.tagoutenabled = :yes))). The result set will contain zero or more objects.",
            "whereClause": "spworkassetid in  (select spworkassetid from spworkasset where safetyplanid = :safetyplanid and siteid=:siteid) and safetylexiconid in (select safetylexiconid from safetylexicon where tagoutid is not null and hazardid in  (select hazardid from hazard where tagoutenabled = :yes and orgid=:orgid)and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPLLTAGOUTS",
            "source": "SPLEXICONLINK",
            "remarks": "Relationship to SPLexiconLink table when the owner is a tagout-enabled hazard (the parent safetylexicon has null tagoutid) and the child set represents its tagouts. The Sql is (splexiconlink.spworkassetid = :spworkassetid and splexiconlink.safetylexiconid in (select safetylexicon.safetylexiconid from safetylexicon where safetylexicon.tagoutid is not null and safetylexicon.hazardid in (select slex2.hazardid from safetylexicon slex2 where slex2.safetylexiconid = (this)splexiconlink.safetylexiconid))). The result set will contain zero or more objects.",
            "whereClause": "spworkassetid = :spworkassetid and safetylexiconid in  (select safetylexiconid from safetylexicon where tagoutid is not null  and hazardid in (select hazardid from safetylexicon where safetylexiconid = :safetylexiconid and siteid=:siteid) and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPLEXICONLINK",
            "source": "SPWORKASSET",
            "remarks": "Relationship to SPLexiconLink table. (splexiconlink.spworkassetid = spworkasset.spworkassetid). The result set will contain zero or more objects.",
            "whereClause": "spworkassetid = :spworkassetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}