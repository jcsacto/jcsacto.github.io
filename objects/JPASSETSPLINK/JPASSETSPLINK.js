mos = {
    "objectName": "JPASSETSPLINK",
    "className": "psdi.app.jobplan.JpAssetSpLinkSet",
    "description": "Safety Plan linked with As/Loc/Item for a Job Plan",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "JPASSETSPLINKID",
    "primaryKeyColumns": [
        "JPASSETSPLINKID"
    ],
    "logicalRelationships": [
        {
            "objectName": "JPASSETSPLINK",
            "targetObject": "PLUSCJPDATASHEET",
            "parentKeys": "JPASSETSPLINKID",
            "targetKeys": "JPASSETSPLINKID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan Asset Safety Plan Link",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "JPASSETSPLINK",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 65",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "JPASSETSPLINK",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JPASSETSPLINK",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "JPASSETSPLINK",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "JPASSETSPLINK",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
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
            "objectName": "SETS",
            "targetObject": "JPASSETSPLINK",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 40",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JPASSETSPLINK",
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
            "attributeName": "JPASSETSPLINKID",
            "required": true,
            "persistent": true,
            "title": "JP Asset Link",
            "remarks": "Identifies a given link between a Job Plan, an Asset, Location, or Item, and a Safety Plan.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JPNUM",
            "required": true,
            "persistent": true,
            "title": "Job Plan",
            "remarks": "Identifies the Job Plan",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "SAFETYPLANID",
            "required": false,
            "persistent": true,
            "title": "Safety Plan",
            "remarks": "Identifies the Safety Plan",
            "sameAsAttribute": "SAFETYPLANID",
            "sameAsObject": "SAFETYPLAN"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "Identifies the Item",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the Asset",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Identifies the Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ISDEFAULTASSETSP",
            "required": true,
            "persistent": true,
            "title": "Default Safety Plan",
            "remarks": "Identifies the default Safety Plan for an asset, location, or item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOREQWHENPURCH",
            "required": true,
            "persistent": true,
            "title": "Create WO When Purchasing This Item",
            "remarks": "Required work order for an item",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOTYPEWHENPURCH",
            "required": false,
            "persistent": true,
            "title": "Work Type of Created Work Order",
            "remarks": "Work type of the created work order",
            "sameAsAttribute": "WORKTYPE",
            "sameAsObject": "WORKTYPE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item set identifier for this item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "ASSETDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long Description",
            "remarks": "Description Long Description for JPAssetSPLink",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Asset/Location/Item Description",
            "remarks": "ASSETDESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JOBPLANID",
            "required": true,
            "persistent": true,
            "title": "JOBPLANID",
            "remarks": "Unique JobPlan Identifier",
            "sameAsAttribute": "JOBPLANID",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "PLUSCJPREVNUM",
            "required": true,
            "persistent": true,
            "title": "Job Plan Revision Number",
            "remarks": "Revision number of associated job plan.",
            "sameAsAttribute": "PLUSCREVNUM",
            "sameAsObject": "JOBPLAN"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Work Asset's records, used to find the assets for a given work asset. (asset.assetnum=jpassetsplink.assetnum. The resulting set will contain zero or one record.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the JPASSETSPLINK to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Work Asset's Item records, used to find the item records for a given work asset. (item.itemnum=jpassetsplink.itemnum  and item.itemsetid = jpassetsplink.itemsetid). The resulting set will contain zero or one record.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Work Asset's Location records, used to find the location records for a given work asset. (locations.location=jpassetsplink.location). The resulting set will contain zero or one record.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCJPDSASSETSPLINK",
            "target": "PLUSCJPDATASHEET",
            "remarks": null,
            "whereClause": "jpassetsplinkid=:jpassetsplinkid",
            "cardinality": null
        },
        {
            "name": "SAFETYPLAN",
            "target": "SAFETYPLAN",
            "remarks": "Relationship to the Work Asset's Safety Plan records, used to find the safety plan records for a given work asset.  (safetyplan.safetyplanid=jpassetsplink.safetyplanid). The resulting set will contain zero or one record.",
            "whereClause": "safetyplanid = :safetyplanid and siteid=:siteid",
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
            "remarks": "Relationship from the JPASSETSPLINK to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "JPASSETSPLINK",
            "source": "ASSET",
            "remarks": "Relationship to the JPAssetSpLink table, used to find all job plan, location, or item, and safety plan links for a given asset. (jpassetsplink.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "JPASSETSPLINK",
            "source": "JOBPLAN",
            "remarks": "Relationship to the Job Plan's Work Asset records, used to find all the work assets for a given Job Plan. (jpassetsplink.jpnum=jobplan.jpnum). The resulting set will contain zero or more records.",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "JPASSETSPLINK",
            "source": "LOCATIONS",
            "remarks": "Relationship to the SafetyLexicon table, used to find the operating location's lexicon of safety terms for tagout enabled hazards. (safetylexicon.location = locations.location and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.tagoutenabled=yes and safetylexicon.tagoutid is null)). This relationship will find zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JPASSETSPLINK",
            "source": "SAFETYPLAN",
            "remarks": "Relationship to JpAssetSpLink table. (jpassetsplink.safetyplanid = safetyplan.safetyplanid). This is a cross reference table that points back to the JobPlan. The result set will contain zero or more objects.",
            "whereClause": "safetyplanid = :safetyplanid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}