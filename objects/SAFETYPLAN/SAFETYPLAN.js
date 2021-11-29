mos = {
    "objectName": "SAFETYPLAN",
    "className": "psdi.app.safety.SafetyPlanSet",
    "description": "A plan to ensure a safe work environment",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "SAFETYPLANUID",
    "primaryKeyColumns": [
        "SITEID",
        "SAFETYPLANID"
    ],
    "logicalRelationships": [
        {
            "objectName": "SAFETYPLAN",
            "targetObject": "JPASSETSPLINK",
            "parentKeys": "SITEID, SAFETYPLANID",
            "targetKeys": "SITEID, SAFETYPLANID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Plan",
            "longDescription": null
        },
        {
            "objectName": "SAFETYPLAN",
            "targetObject": "SPWORKASSET",
            "parentKeys": "SITEID, SAFETYPLANID",
            "targetKeys": "SITEID, SAFETYPLANID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Plan",
            "longDescription": null
        },
        {
            "objectName": "SAFETYPLAN",
            "targetObject": "WOSAFETYPLAN",
            "parentKeys": "SITEID, SAFETYPLANID",
            "targetKeys": "SITEID, SAFETYPLANID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Plan applied to the Work Order.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "SAFETYPLAN",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SAFETYPLAN",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SAFETYPLAN",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SAFETYPLAN",
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
            "attributeName": "SAFETYPLANID",
            "required": true,
            "persistent": true,
            "title": "Safety Plan",
            "remarks": "Identifies the Safety Plan. Key Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the Safety Plan",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "The user who last modified the Safety Plan.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "The date the Safety Plan was last Modified",
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
            "remarks": "Long Description for The description of the Safety Plan",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SAFETYPLANUID",
            "required": true,
            "persistent": true,
            "title": "SAFETYPLANUID",
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
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to Doclinks table. (doclinks.keytable = 'SAFETYPLAN' and doclinks.keycolumn = 'SAFETYPLANID' and doclinks.keyvalue = safetyplan.safetyplanid). Used to find associated linked documents. The result set will contain zero or more objects.",
            "whereClause": "(ownertable = 'SAFETYPLAN' and ownerid = :safetyplanuid) or (ownertable = 'HAZARD' and ownerid in (select hazard.hazarduid from hazard, safetylexicon, splexiconlink, spworkasset where hazard.hazardid = safetylexicon.hazardid and safetylexicon.safetylexiconid = splexiconlink.safetylexiconid and splexiconlink.spworkassetid = spworkasset.spworkassetid and spworkasset.safetyplanid = :safetyplanid and spworkasset.orgid = :orgid and spworkasset.siteid = :siteid and splexiconlink.orgid = spworkasset.orgid and splexiconlink.siteid = spworkasset.siteid and safetylexicon.orgid = splexiconlink.orgid and safetylexicon.siteid = splexiconlink.siteid and hazard.orgid = safetylexicon.orgid) or (ownertable  = 'PRECAUTION' and ownerid in (select precaution.precautionuid from  precaution, hazardprec where precaution.precautionid = hazardprec.precautionid and hazardprec.orgid = :orgid and precaution.orgid = hazardprec.orgid and hazardprec.siteid = :siteid and precaution.siteid = hazardprec.siteid and hazardprec.hazardid in (select hazard.hazardid from hazard,  safetylexicon, splexiconlink, spworkasset where hazard.hazardid = safetylexicon.hazardid and safetylexicon.safetylexiconid = splexiconlink.safetylexiconid and splexiconlink.spworkassetid = spworkasset.spworkassetid and spworkasset.safetyplanid = :safetyplanid and spworkasset.orgid = :orgid and spworkasset.siteid = :siteid and splexiconlink.orgid = spworkasset.orgid and splexiconlink.siteid = spworkasset.siteid and safetylexicon.orgid = splexiconlink.orgid and safetylexicon.siteid = splexiconlink.siteid and hazard.orgid = safetylexicon.orgid))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the SAFETYPLAN to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JPASSETSPLINK",
            "target": "JPASSETSPLINK",
            "remarks": "Relationship to JpAssetSpLink table. (jpassetsplink.safetyplanid = safetyplan.safetyplanid). This is a cross reference table that points back to the JobPlan. The result set will contain zero or more objects.",
            "whereClause": "safetyplanid = :safetyplanid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARD",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to SafetyLexicon table for a given safetyplan. The Sql is ( safetylexiconid in (select safetylexiconid from  splexiconlink\twhere spworkassetid in (select spworkassetid from spworkasset where\tsafetyplanid = safetyplan.safetyplanid ))). Used to search all safetyplans which has specified hazard in SafetyPlan application. The result set will contain zero or more objects.",
            "whereClause": "safetylexiconid in (select safetylexiconid from  splexiconlink where spworkassetid in (select spworkassetid from spworkasset where safetyplanid = :safetyplanid and siteid=:siteid) and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSOCHAZMAT",
            "target": "SPLEXICONLINK",
            "remarks": "Relationship to SPLexiconLink table. Finds associated hazards that are hazmatenabled (regardless of whether there are items with that hazardid). The Sql is: ( splexiconlink.spworkassetid in (select spworkasset.spworkassetid from spworkasset where spworkasset.safetyplanid = safetyplan.safetyplanid )  and splexiconlink.safetylexiconid in (select safetylexicon.safetylexiconid from safetylexicon where safetylexicon.hazardid in (select hazard.hazardid from hazard where hazard.hazmatenabled = :yes))). The result set will contain zero or more objects.",
            "whereClause": "spworkassetid in (select spworkassetid from spworkasset where safetyplanid = :safetyplanid and siteid=:siteid) and safetylexiconid in (select safetylexiconid from safetylexicon where hazardid in (select hazardid from hazard where hazmatenabled = :yes and orgid=:orgid) and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSOCHAZPREC",
            "target": "SPLEXICONLINK",
            "remarks": "Relationship to SPLexiconLink table. Finds associated hazards that are precautionenabled (regardless of whether there are hazardprec with that hazardid). The Sql is: (splexiconlink.spworkassetid in (select spworkasset.spworkassetid from spworkasset where spworkasset.safetyplanid = safetyplan.safetyplanid )  and splexiconlink.safetylexiconid in (select safetylexicon.safetylexiconid from safetylexicon where safetylexicon.hazardid in (select hazard.hazardid from hazard where hazard.precautionenabled = :yes))). The result set will contain zero or more objects.",
            "whereClause": "spworkassetid in (select spworkassetid from spworkasset where safetyplanid = :safetyplanid and siteid=:siteid) and safetylexiconid in (select safetylexiconid from safetylexicon where hazardid in (select hazardid from hazard where precautionenabled = :yes and orgid=:orgid) and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSOCHAZTAG",
            "target": "SPLEXICONLINK",
            "remarks": "Relationship to SPLexiconLink table. Finds associated hazards that are tagoutenabled (regardless of whether there are actually tagouts). The Sql is: ( splexiconlink.spworkassetid in (select spworkasset.spworkassetid from spworkasset where spworkasset.safetyplanid = safetyplan.safetyplanid )\t and splexiconlink.safetylexiconid in (select safetylexicon.safetylexiconid from safetylexicon where safetylexicon.tagoutid is null and safetylexicon.hazardid in (select hazard.hazardid from hazard where hazard.tagoutenabled = :yes))).\t The result set will contain zero or more objects.",
            "whereClause": "spworkassetid in  (select spworkassetid from spworkasset where safetyplanid = :safetyplanid and siteid=:siteid) and safetylexiconid in (select safetylexiconid from safetylexicon where tagoutid is null and hazardid in  (select hazardid from hazard where tagoutenabled = :yes and orgid=:orgid) and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSOCTAGOUT",
            "target": "SPLEXICONLINK",
            "remarks": "Relationship to SPLexiconLink table. Finds associated tagouts. The Sql is: ( splexiconlink.spworkassetid in (select spworkasset.spworkassetid from spworkasset where spworkasset.safetyplanid = safetyplan.safetyplanid ) and splexiconlink.safetylexiconid in (select safetylexicon.safetylexiconid from safetylexicon where safetylexicon.tagoutid is not null and safetylexicon.hazardid in (select hazard.hazardid from hazard where hazard.tagoutenabled = :yes))). The result set will contain zero or more objects.",
            "whereClause": "spworkassetid in  (select spworkassetid from spworkasset where safetyplanid = :safetyplanid and siteid=:siteid) and safetylexiconid in (select safetylexiconid from safetylexicon where tagoutid is not null and hazardid in  (select hazardid from hazard where tagoutenabled = :yes and orgid=:orgid)and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDSPWORKASSET",
            "target": "SPWORKASSET",
            "remarks": "Relationship to SPWorkAsset. (spworkasset.safetyplanid = safetyplan.safetyplanid and (spworkasset.workasset is not null or spworkasset.worklocation is not null)). Finds the child SPWorkAssets for this SafetyPlan. The result set will contain zero or more objects.",
            "whereClause": "safetyplanid = :safetyplanid and (workasset is not null or worklocation is not null) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAINSPWORKASSET",
            "target": "SPWORKASSET",
            "remarks": "Relationship to SPWorkAsset table. (spworkasset.safetyplanid = safetyplan.safetyplanid and spworkasset.workasset is null and spworkasset.worklocation is null).\tFinds the \"main\" SPWorkAsset record for this SafetyPlan (the record that does not specify an asset or location). The result set will contain one object.",
            "whereClause": "safetyplanid = :safetyplanid and workasset is null and worklocation is null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPWORKASSET",
            "target": "SPWORKASSET",
            "remarks": "Relationship to SPWorkAsset table. (spworkasset.safetyplanid = safetyplan.safetyplanid). Finds all SPWorkAsset records for this SafetyPlan. The result set will contain one or more objects.",
            "whereClause": "safetyplanid = :safetyplanid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOSAFETYPLAN",
            "target": "WOSAFETYPLAN",
            "remarks": "Relationship to WoSafetyPlan table. (wosafetyplan.safetyplanid = safetyplan.safetyplanid). Used to find workorders that are associated with this safety plan. The result set will contain zero or more objects.",
            "whereClause": "safetyplanid = :safetyplanid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SAFETYPLAN",
            "source": "JPASSETSPLINK",
            "remarks": "Relationship to the Work Asset's Safety Plan records, used to find the safety plan records for a given work asset.  (safetyplan.safetyplanid=jpassetsplink.safetyplanid). The resulting set will contain zero or one record.",
            "whereClause": "safetyplanid = :safetyplanid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYPLAN",
            "source": "SPWORKASSET",
            "remarks": "Relationship to SafetyPlan table. (safetyplan.safetyplanid = spworkasset.safetyplanid). The result set will contain one object.",
            "whereClause": "safetyplanid = :safetyplanid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPLANASSET",
            "source": "WORKORDER",
            "remarks": "Relationship to the SafetyPlan table, used to find all safetyplan related to this work order's asset. (safetyplanid in (select safetyplanid from spworkasset where workasset = workorder.assetnum)), The join is done through psdi.app.safety.SPWorkAsset. The result set will contain one or more objects.",
            "whereClause": "safetyplanid in (select safetyplanid from spworkasset where workasset = :1) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPLANASSETLOC",
            "source": "WORKORDER",
            "remarks": "Relationship to the psdi.app.safety.SafetyPlan SafetyPlan} table, used to find all safetyplan related to this work order's asset and location. (safetyplanid in (select w1.safetyplanid from spworkasset w1 where w1.workasset =workorder.assetnum and exists (select w2.* from spworkasset w2 where w2.safetyplanid = w1.safetyplanid and w2.worklocation = workorder.location)). The join is done through psdi.app.safety.SPWorkAsset SPWorkAsset. The result set will contain zero or more objects.",
            "whereClause": "safetyplanid in (select w1.safetyplanid from spworkasset w1 where w1.workasset = :1 or w1.worklocation = :2) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPLANJP",
            "source": "WORKORDER",
            "remarks": "Relationship to the psdi.app.safety.SafetyPlan SafetyPlan table, used to find all safetyplan where the jobplan matches the workorder's jobplan and the jobplan's asset or location matches the work order's. (safetyplanid in (select safetyplanid from jpassetsplink where jpnum = workorder.jpnum and (assetnum = workorder.assetnum or location = workorder.location)). The join is done through psdi.app.jobplan.JpAssetSpLink. The result set will contain zero or more objects.",
            "whereClause": "safetyplanid in (select safetyplanid from jpassetsplink where jpnum = :1 and (assetnum = :2 or location = :3) and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPLANLOC",
            "source": "WORKORDER",
            "remarks": "Relationship to psdi.app.safety.SafetyPlan SafetyPlan table, used to find all safetyplan related to this work order's location. (safetyplanid in (select safetyplanid from spworkasset where worklocation = workorder.location)). The join is done through psdi.app.safety.SPWorkAsset SPWorkAsset. The result set will contain one or more objects.",
            "whereClause": "safetyplanid in (select safetyplanid from spworkasset where worklocation = :1 and siteid=:siteid) and siteid=:siteid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYPLAN",
            "source": "WOSAFETYPLAN",
            "remarks": "Relationship to SafetyPlan table. (safetyplan.safetyplanid = wosafetyplan.safetyplanid). The result set will contain one object.",
            "whereClause": "safetyplanid=:safetyplanid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGLOCK",
            "source": "WOTAGLOCK",
            "remarks": "Relationship to psdi.app.safety.TagLock (taglock.tagoutid = wotaglock.tagoutid and taglock.lockoutid = wotaglock.lockoutid). The result set will contain zero or one object.",
            "whereClause": "tagoutid=:tagoutid and lockoutid=:lockoutid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}