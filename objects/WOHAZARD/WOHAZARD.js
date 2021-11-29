mos = {
    "objectName": "WOHAZARD",
    "className": "psdi.app.workorder.WoHazardSet",
    "description": "Work related safety hazard for a work order.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WOHAZARDID",
    "primaryKeyColumns": [
        "SITEID",
        "WONUM",
        "HAZARDID",
        "WOSAFETYDATASOURCE"
    ],
    "logicalRelationships": [
        {
            "objectName": "WOHAZARD",
            "targetObject": "WOHAZARDPREC",
            "parentKeys": "SITEID, WONUM, HAZARDID, WOSAFETYDATASOURCE",
            "targetKeys": "SITEID, WONUM, HAZARDID, WOSAFETYDATASOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Link between Hazards and Precautions on the Work Order.",
            "longDescription": null
        },
        {
            "objectName": "WOHAZARD",
            "targetObject": "WOSAFETYLINK",
            "parentKeys": "SITEID, WONUM, HAZARDID, WOSAFETYDATASOURCE",
            "targetKeys": "SITEID, WONUM, HAZARDID, WOSAFETYDATASOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Safety Hazards introduce through the Asset or Location.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
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
            "objectName": "LANGUAGE",
            "targetObject": "WOHAZARD",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WOHAZARD",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOHAZARD",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOHAZARD",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order''s Safety Hazards",
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
            "attributeName": "HAZARDID",
            "required": true,
            "persistent": true,
            "title": "Hazard",
            "remarks": "Identifies a safety Hazard to working on this Work Order.",
            "sameAsAttribute": "HAZARDID",
            "sameAsObject": "HAZARD"
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
            "title": "Precaution Enabled",
            "remarks": "Does this hazard have associated precautions?",
            "sameAsAttribute": "PRECAUTIONENABLED",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZMATENABLED",
            "required": true,
            "persistent": true,
            "title": "Can Have Hazardous Materials",
            "remarks": "Does this hazard have hazardous material details?",
            "sameAsAttribute": "HAZMATENABLED",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "TAGOUTENABLED",
            "required": true,
            "persistent": true,
            "title": "TagOut Enabled",
            "remarks": "Does this hazard have associated Tagout procedures?",
            "sameAsAttribute": "TAGOUTENABLED",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZARDTYPE",
            "required": false,
            "persistent": true,
            "title": "Hazard Type",
            "remarks": "Identifies the hazard type(category)",
            "sameAsAttribute": "HAZARDTYPE",
            "sameAsObject": "HAZARD"
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
            "title": "Health Rating",
            "remarks": "NFPA Health Rating",
            "sameAsAttribute": "HEALTHRATING",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "FLAMMABILITYRATING",
            "required": false,
            "persistent": true,
            "title": "Flammability Rating",
            "remarks": "NFPA Flammability Rating",
            "sameAsAttribute": "FLAMMABILITYRATING",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "REACTIVITYRATING",
            "required": false,
            "persistent": true,
            "title": "Reactivity Rating",
            "remarks": "NFPA Reactivity Rating",
            "sameAsAttribute": "REACTIVITYRATING",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "CONTACTRATING",
            "required": false,
            "persistent": true,
            "title": "Contact Rating",
            "remarks": "NFPA Contact Rating",
            "sameAsAttribute": "CONTACTRATING",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "WOSAFETYDATASOURCE",
            "required": true,
            "persistent": true,
            "title": "Safety Data Source",
            "remarks": "Identifies the source of the safety information",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZ01",
            "required": false,
            "persistent": true,
            "title": "Extra 1",
            "remarks": "Extra Field 01",
            "sameAsAttribute": "HAZ01",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ02",
            "required": false,
            "persistent": true,
            "title": "Extra 2",
            "remarks": "Extra Field 02",
            "sameAsAttribute": "HAZ02",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ03",
            "required": false,
            "persistent": true,
            "title": "Extra 3",
            "remarks": "Extra Field 03",
            "sameAsAttribute": "HAZ03",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ04",
            "required": false,
            "persistent": true,
            "title": "Extra 4",
            "remarks": "Extra Field 04",
            "sameAsAttribute": "HAZ04",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ05",
            "required": false,
            "persistent": true,
            "title": "Extra 5",
            "remarks": "Extra Field 05",
            "sameAsAttribute": "HAZ05",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ06",
            "required": false,
            "persistent": true,
            "title": "Extra 6",
            "remarks": "Extra Field 06",
            "sameAsAttribute": "HAZ06",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ07",
            "required": false,
            "persistent": true,
            "title": "Extra 7",
            "remarks": "Extra Field 07",
            "sameAsAttribute": "HAZ07",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ08",
            "required": false,
            "persistent": true,
            "title": "Extra 8",
            "remarks": "Extra Field 08",
            "sameAsAttribute": "HAZ08",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ09",
            "required": false,
            "persistent": true,
            "title": "Extra 9",
            "remarks": "Extra Field 09",
            "sameAsAttribute": "HAZ09",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ10",
            "required": false,
            "persistent": true,
            "title": "Extra 10",
            "remarks": "Extra Field 10",
            "sameAsAttribute": "HAZ10",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ11",
            "required": false,
            "persistent": true,
            "title": "Extra 11",
            "remarks": "Extra Field 11",
            "sameAsAttribute": "HAZ11",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ12",
            "required": false,
            "persistent": true,
            "title": "Extra 12",
            "remarks": "Extra Field 12",
            "sameAsAttribute": "HAZ12",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ13",
            "required": false,
            "persistent": true,
            "title": "Extra 13",
            "remarks": "Extra Field 13",
            "sameAsAttribute": "HAZ13",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ14",
            "required": false,
            "persistent": true,
            "title": "Extra 14",
            "remarks": "Extra Field 14",
            "sameAsAttribute": "HAZ14",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ15",
            "required": false,
            "persistent": true,
            "title": "Extra 15",
            "remarks": "Extra Field 15",
            "sameAsAttribute": "HAZ15",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ16",
            "required": false,
            "persistent": true,
            "title": "Extra 16",
            "remarks": "Extra Field 16",
            "sameAsAttribute": "HAZ16",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ17",
            "required": false,
            "persistent": true,
            "title": "Extra 17",
            "remarks": "Extra Field 17",
            "sameAsAttribute": "HAZ17",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ18",
            "required": false,
            "persistent": true,
            "title": "Extra 18",
            "remarks": "Extra Field 18",
            "sameAsAttribute": "HAZ18",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ19",
            "required": false,
            "persistent": true,
            "title": "Extra 19",
            "remarks": "Extra Field 19",
            "sameAsAttribute": "HAZ19",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "HAZ20",
            "required": true,
            "persistent": true,
            "title": "Extra 20",
            "remarks": "Extra Field 20",
            "sameAsAttribute": "HAZ20",
            "sameAsObject": "HAZARD"
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
            "remarks": "Long Description for The description of the hazard",
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
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "LOCATION",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "ASSETNUM",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WOHAZARDID",
            "required": true,
            "persistent": true,
            "title": "WOHAZARDID",
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
            "name": "HAZARD",
            "target": "HAZARD",
            "remarks": "Relationship to psdi.app.safety.Hazard. (hazard.hazardid = wohazard.hazardid). The result set will contain zero or one object.",
            "whereClause": "hazardid=:hazardid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRECAUTION",
            "target": "PRECAUTION",
            "remarks": "Relationship from wohazard to precaution ",
            "whereClause": "precautionid in (select precautionid from hazardprec where hazardid = :hazardid and siteid=:siteid) and siteid=:siteid",
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
            "remarks": "Relationship from the WOHAZARD to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZARDPREC",
            "target": "WOHAZARDPREC",
            "remarks": "Relationship to psdi.app.workorder.WoHazardPrec wohazardprec.wonum = wohazard.wonum and hazardid = wohazard.hazardid and ( (wohazardprec.wosafetydatasource = 'WP' and wohazard.wosafetydatasource = 'WP') or (wohazardprec.wosafetydatasource != 'WP' and wohazard.wosafetydatasource != 'WP') ) ). The result set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and hazardid = :hazardid and( (wosafetydatasource = 'WP' and :wosafetydatasource = 'WP') or    (wosafetydatasource != 'WP' and :wosafetydatasource != 'WP') ) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOPRECAUTION",
            "target": "WOPRECAUTION",
            "remarks": "Relationship to psdi.app.workorder.WoPrecaution WoPrecaution. (woprecaution.wonum = wohazard.wonum and precautionid in (select precautionid from wohazardprec where wonum = wohazard.wonum and hazardid = wohazard.hazardid and\twohazardprec.wosafetydatasource = woprecaution.wosafetydatasource and\t( (wohazardprec.wosafetydatasource = 'WP' and wohazard.wosafetydatasource = 'WP') or (wohazardprec.wosafetydatasource != 'WP' and wohazard.wosafetydatasource != 'WP')))). The result set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and precautionid in (select precautionid from wohazardprec where wonum = :wonum and hazardid = :hazardid and siteid=:siteid and wohazardprec.wosafetydatasource = woprecaution.wosafetydatasource and  ( (wohazardprec.wosafetydatasource = 'WP' and :wosafetydatasource = 'WP') or  (wohazardprec.wosafetydatasource != 'WP' and :wosafetydatasource != 'WP') )) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOSAFETYLINKMAIN",
            "target": "WOSAFETYLINK",
            "remarks": "Relationship to link psdi.app.workorder.WoSafetyLink WoSafetyLink (wosafetylink.wonum = wohazard.wonum and wosafetylink.wosafetydatasource = wohazard.wosafetydatasource and wosafetylink.hazardid = wohazard.hazardid and wosafetylink.tagoutid is null ). This is the master WoSafetyLink for this hazard. The result set will contain one object.",
            "whereClause": "wonum = :wonum and wosafetydatasource = :wosafetydatasource and hazardid = :hazardid and tagoutid is null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOSAFETYLINKTAGOUTS",
            "target": "WOSAFETYLINK",
            "remarks": "Relationship to psdi.app.workorder.WoSafetyLink WoSafetyLink (wosafetylink.wonum = wohazard.wonum and wosafetylink.hazardid = wohazard.hazardid and wosafetylink.tagoutid is not null). When the hazard is tagout enabled, these are the tagouts. The result set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and hazardid = :hazardid and tagoutid is not null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOTAGOUT",
            "target": "WOTAGOUT",
            "remarks": "Relationship to WoTagOut table. (wotagout.wonum = wohazard.wonum and wotagout.tagoutid in (select wosafetylink.tagoutid from wosafetylink where wosafetylink.wonum = wohazard.wonum and wosafetylink.hazardid = wohazard.hazardid)). The result set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and tagoutid in (select tagoutid from wosafetylink where wonum = :wonum  and hazardid = :hazardid and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WOHAZARD",
            "source": "HAZARD",
            "remarks": "Relationship to psdi.app.workorder.WoHazard (wohazard.hazardid = hazard.hazardid). Used to find any workorders having this hazard. The result set will contain zero or more objects.",
            "whereClause": "hazardid = :hazardid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZARD",
            "source": "WOHAZARDPREC",
            "remarks": "Relationship to WoHazard table. (wohazard.wonum = wohazardprec.wonum and wohazard.hazardid = wohazardprec.hazardid). The result set will contain one object.",
            "whereClause": "wonum = :wonum and hazardid = :hazardid and wosafetydatasource = :wosafetydatasource and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZARD",
            "source": "WORKORDER",
            "remarks": "Relationship to the WOHazard table, used to find all work order hazards for a work order. (WOHazard.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZMATENABLED",
            "source": "WORKORDER",
            "remarks": "Relationship to the WOHazard table, used to find all work order hazards that are hazardous-material-enabled for a work order. (WOHazard.wonum = workorder.wonum and hazmatenabled = True). This is used for the Wotrack Safety tab, HazMat subtab. This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and hazmatenabled = :yes and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZPRECENABLED",
            "source": "WORKORDER",
            "remarks": "Relationship to the WOHazard table, used to find all work order hazards that are precaution-enabled for a work order. (WOHazard.wonum = workorder.wonum and precautionenabled = True). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and precautionenabled = :yes and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZTAGENABLED",
            "source": "WORKORDER",
            "remarks": "Relationship to the WOHazard table, used to find all work order hazards that are tagout-enabled for a work order. (WOHazard.wonum = workorder.wonum and tagoutenabled = True). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and tagoutenabled = :yes and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZARD",
            "source": "WOSAFETYLINK",
            "remarks": "Relationship to psdi.app.workorder.WoHazard (wohazard.wonum = wosafetylink.wonum and wohazard.hazardid = wosafetylink.hazardid and wohazard.wosafetydatasource = wosafetylink.wosafetydatasource). The result set will contain one object.",
            "whereClause": "wonum = :wonum and hazardid = :hazardid and wosafetydatasource = :wosafetydatasource and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}