mos = {
    "objectName": "HAZARD",
    "className": "psdi.app.safety.HazardSet",
    "description": "Work related safety hazard",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "HAZARDUID",
    "primaryKeyColumns": [
        "ORGID",
        "HAZARDID"
    ],
    "logicalRelationships": [
        {
            "objectName": "HAZARD",
            "targetObject": "HAZARDPREC",
            "parentKeys": "ORGID, HAZARDID",
            "targetKeys": "ORGID, HAZARDID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Hazard",
            "longDescription": null
        },
        {
            "objectName": "HAZARD",
            "targetObject": "ITEMORGINFO",
            "parentKeys": "ORGID, HAZARDID",
            "targetKeys": "ORGID, HAZARDID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Hazard",
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
            "objectName": "HAZARD",
            "targetObject": "WOHAZARD",
            "parentKeys": "ORGID, HAZARDID",
            "targetKeys": "ORGID, HAZARDID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Hazard",
            "longDescription": null
        },
        {
            "objectName": "HAZARD",
            "targetObject": "WOHAZARDPREC",
            "parentKeys": "ORGID, HAZARDID",
            "targetKeys": "ORGID, HAZARDID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Hazard applied to Work Order",
            "longDescription": null
        },
        {
            "objectName": "HAZARD",
            "targetObject": "WOSAFETYLINK",
            "parentKeys": "ORGID, HAZARDID",
            "targetKeys": "ORGID, HAZARDID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Hazards due to Asset or Location",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "HAZARD",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "HAZARD",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "HAZARDID",
            "required": true,
            "persistent": true,
            "title": "Hazard",
            "remarks": "Identifies the hazard",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the hazard",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRECAUTIONENABLED",
            "required": true,
            "persistent": true,
            "title": "Can Have Precautions",
            "remarks": "Is this hazard precaution enabled",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZMATENABLED",
            "required": true,
            "persistent": true,
            "title": "Can Have Hazardous Materials",
            "remarks": "Is this hazard Hazardous Material enabled",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAGOUTENABLED",
            "required": true,
            "persistent": true,
            "title": "Can Have Tag Outs",
            "remarks": "Is this hazard Tagout enabled",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZARDTYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Identifies the hazard type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSDSNUM",
            "required": false,
            "persistent": true,
            "title": "MSDS",
            "remarks": "Identifies the MSDS Sheet",
            "sameAsAttribute": "MSDSNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "HEALTHRATING",
            "required": false,
            "persistent": true,
            "title": "Health",
            "remarks": "NFPA Health Rating",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FLAMMABILITYRATING",
            "required": false,
            "persistent": true,
            "title": "Flammability",
            "remarks": "MFPA Flammability Rating",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REACTIVITYRATING",
            "required": false,
            "persistent": true,
            "title": "Reactivity",
            "remarks": "MFPA Reactivity Rating",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTACTRATING",
            "required": false,
            "persistent": true,
            "title": "Contact",
            "remarks": "NFPA Contact Rating",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ01",
            "required": false,
            "persistent": true,
            "title": "Extra 1",
            "remarks": "Extra Field 01",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ02",
            "required": false,
            "persistent": true,
            "title": "Extra 2",
            "remarks": "Extra Field 02",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ03",
            "required": false,
            "persistent": true,
            "title": "Extra 3",
            "remarks": "Extra Field 03",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ04",
            "required": false,
            "persistent": true,
            "title": "Extra 4",
            "remarks": "Extra Field 04",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ05",
            "required": false,
            "persistent": true,
            "title": "Extra 5",
            "remarks": "Extra Field 05",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ06",
            "required": false,
            "persistent": true,
            "title": "Extra 6",
            "remarks": "Extra Field 06",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ07",
            "required": false,
            "persistent": true,
            "title": "Extra 7",
            "remarks": "Extra Field 07",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ08",
            "required": false,
            "persistent": true,
            "title": "Extra 8",
            "remarks": "Extra Field 08",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ09",
            "required": false,
            "persistent": true,
            "title": "Extra 9",
            "remarks": "Extra Field 09",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ10",
            "required": false,
            "persistent": true,
            "title": "Extra 10",
            "remarks": "Extra Field 10",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ11",
            "required": false,
            "persistent": true,
            "title": "Extra 11",
            "remarks": "Extra Field 11",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ12",
            "required": false,
            "persistent": true,
            "title": "Extra 12",
            "remarks": "Extra Field 12",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ13",
            "required": false,
            "persistent": true,
            "title": "Extra 13",
            "remarks": "Extra Field 13",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ14",
            "required": false,
            "persistent": true,
            "title": "Extra 14",
            "remarks": "Extra Field 14",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ15",
            "required": false,
            "persistent": true,
            "title": "Extra 15",
            "remarks": "Extra Field 15",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ16",
            "required": false,
            "persistent": true,
            "title": "Extra 16",
            "remarks": "Extra Field 16",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ17",
            "required": false,
            "persistent": true,
            "title": "Extra 17",
            "remarks": "Extra Field 17",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ18",
            "required": false,
            "persistent": true,
            "title": "Extra 18",
            "remarks": "Extra Field 18",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ19",
            "required": false,
            "persistent": true,
            "title": "Extra 19",
            "remarks": "Extra Field 19",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ20",
            "required": true,
            "persistent": true,
            "title": "Extra 20",
            "remarks": "Extra Field 20",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for The description of the hazard",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZARDUID",
            "required": true,
            "persistent": true,
            "title": "HAZARDUID",
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
            "remarks": "Relationship to Doclinks table. (doclinks.keytable = 'HAZARD' and doclinks.keycolumn = 'HAZARDID' and doclinks.keyvalue = hazard.hazardid). Used to find associated linked documents. The result set will contain zero or more objects.",
            "whereClause": "(ownertable = 'HAZARD' and ownerid = :hazarduid)  or (ownertable  ='PRECAUTION' and ownerid IN (select precaution.precautionuid from  precaution, hazardprec where precaution.precautionid = hazardprec.precautionid and hazardprec.hazardid = :hazardid and hazardprec.orgid = :orgid and precaution.orgid = hazardprec.orgid and precaution.siteid = hazardprec.siteid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARDPREC",
            "target": "HAZARDPREC",
            "remarks": "Relationship to psdi.app.safety.HazardPrec (hazardprec.hazardid = hazard.hazardid). This is a cross-reference file to the related precautions. The result set will contain zero or more objects.",
            "whereClause": "hazardid = :hazardid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the item information records for a hazard. (itemorginfo.orgid=hazard.orgid and itemorginfo.hazardid=hazard.hazardid and itemorginfo.itemsetid = (select itemsetid from organization where orgid = hazard.orgid)) This relationship will find zero or more objects.",
            "whereClause": "orgid=:orgid and hazardid=:hazardid and itemsetid = (select itemsetid from organization where orgid = :orgid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGANIZATION",
            "target": "ORGANIZATION",
            "remarks": "Relationship to the Organization table, used to find the organization record for a hazard. (organization.orgid=hazard.orgid) This relationship will find one object.",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRECAUTION",
            "target": "PRECAUTION",
            "remarks": "Relationship to psdi.app.safety.Precaution (precaution.precautionid in (select precautionid from hazardprec where hazardid = hazard.hazardid)). Used to directly access the related precautions. The result set will contain zero or more objects.",
            "whereClause": "precautionid in (select precautionid from hazardprec where hazardid = :hazardid) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXALL",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to psdi.app.safety.SafetyLexicon (safetylexicon.hazardid = hazard.hazardid). Finds all SafetyLexicon for this Hazard. The result set will contain one or more objects.",
            "whereClause": "hazardid = :hazardid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXCHILDREN",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to psdi.app.safety.SafetyLexicon (safetylexicon.hazardid = hazard.hazardid and (safetylexicon.assetnum is not null or safetylexicon.location is not null or safetylexicon.tagoutid is not null)). Finds all SafetyLexicon for this Hazard except the \"main\" SafetyLexicon. The result set will contain zero or more objects.",
            "whereClause": "hazardid = :hazardid and (assetnum is not null or location is not null or tagoutid is not null) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXMAIN",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to psdi.app.safety.SafetyLexicon (safetylexicon.hazardid = hazard.hazardid and safetylexicon.assetnum is null and\tsafetylexicon.location is null and safetylexicon.tagoutid is null). Finds the \"main\" SafetyLexicon for this Hazard. The result set will contain one object.",
            "whereClause": "hazardid = :hazardid and assetnum is null and location is null and tagoutid is null and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXTAGOUTS",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to psdi.app.safety.SafetyLexicon (safetylexicon.hazardid = hazard.hazardid and safetylexicon.tagoutid is not null). Finds SafetyLexicon children of this Hazard that represent TagOuts. The result set will contain zero or more objects.",
            "whereClause": "hazardid = :hazardid and tagoutid is not null and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZSITES",
            "target": "SITE",
            "remarks": "Relationship to the site table, used to find all sites for the hazard . The result set will contain zero or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZARD",
            "target": "WOHAZARD",
            "remarks": "Relationship to psdi.app.workorder.WoHazard (wohazard.hazardid = hazard.hazardid). Used to find any workorders having this hazard. The result set will contain zero or more objects.",
            "whereClause": "hazardid = :hazardid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "HAZARD",
            "source": "HAZARDPREC",
            "remarks": "Relationship to psdi.app.safety.Hazard, used to find the related Hazard (hazard.hazardid = hazardprec.hazardid). The result set will contain one object.",
            "whereClause": "hazardid = :hazardid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARD",
            "source": "ITEMORGINFO",
            "remarks": "Relationship to the Hazard table, used to find the hazard record associted with the item. (hazard.hazardid=itemorginfo.hazardid and hazard.orgid=itemorginfo.orgid) This relationship will find zero or one object.",
            "whereClause": "hazardid=:hazardid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARD",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the Hazard table, used to find all hazard records associated with this organization.  (hazard.orgid=organization.orgid) This relationship will find zero or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARD",
            "source": "SAFETYLEXICON",
            "remarks": "Relationship to psdi.app.safety.Hazard Hazard (hazard.hazardid = safetylexicon.hazardid). If hazardid is not null, the result set will contain one object.",
            "whereClause": "hazardid = :hazardid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARD",
            "source": "SPLEXICONLINK",
            "remarks": "Relationship to Hazard table. The Sql is ( hazard.hazardid in ( select safetylexicon.hazardid from safetylexicon where safetylexicon.safetylexiconid = splexiconlink.safetylexiconid)). The result set will contain one object.",
            "whereClause": "hazardid in ( select hazardid from safetylexicon where safetylexiconid = :safetylexiconid and siteid=:siteid) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SELECTHAZARD",
            "source": "SPRELATEDASSET",
            "remarks": "Relationship to Hazard table. The Sql is ( hazard.hazardid in (select safetylexicon.hazardid from safetylexicon where safetylexicon.tagoutid is null and  (safetylexicon.assetnum = sprelatedasset.relatedasset or safetylexicon.assetnum is null) and (safetylexicon.location = sprelatedasset.relatedlocation or safetylexicon.location is null) and (not (safetylexicon.assetnum is null and safetylexicon.location is null))) and hazard.hazardid not in (select wohazard.hazardid from wohazard where wohazard.wonum = sprelatedasset.wonum and wohazard.wosafetydatasource = WoSafetyLinkSet.SOURCE_WORKORDER )). Used to find hazards that can be applied to a given work order and related asset. The result set will contain zero or more objects. This relationship makes use of the non-persistent attribute wonum.",
            "whereClause": "hazardid in (select hazardid from safetylexicon where tagoutid is null and (assetnum = :relatedasset or assetnum is null) and    (location = :relatedlocation or location is null) and (not (assetnum is null and location is null)) and siteid=:siteid) and hazardid not in (select hazardid from wohazard where wonum = :wonum and wosafetydatasource = 'WO' and siteid=:siteid) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARD",
            "source": "WOHAZARD",
            "remarks": "Relationship to psdi.app.safety.Hazard. (hazard.hazardid = wohazard.hazardid). The result set will contain zero or one object.",
            "whereClause": "hazardid=:hazardid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARD",
            "source": "WOSAFETYLINK",
            "remarks": "Relationship to psdi.app.safety.Hazard (hazard.hazardid = wosafetylink.hazardid). The result set will contain zero or one object.",
            "whereClause": "hazardid = :hazardid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}