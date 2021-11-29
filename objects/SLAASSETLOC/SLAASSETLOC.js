mos = {
    "objectName": "SLAASSETLOC",
    "className": "psdi.app.sla.SLAAssetLocSet",
    "description": "Contains valid Asset, Assettype and Location",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SLAASSETLOCID",
    "primaryKeyColumns": [
        "SLANUM",
        "ASSETNUM",
        "LOCATION",
        "ASSETTYPE",
        "SITEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "SLAASSETLOC",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 142",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SLAASSETLOC",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Locations related to an SLA",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SLAASSETLOC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SLA",
            "targetObject": "SLAASSETLOC",
            "parentKeys": "SLANUM",
            "targetKeys": "SLANUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SLA that has the relationships to the Locations and Assets",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SLANUM",
            "required": false,
            "persistent": true,
            "title": "SLA",
            "remarks": "Identifier for the SLA",
            "sameAsAttribute": "SLANUM",
            "sameAsObject": "SLA"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the asset you want to associate with the service level agreement (SLA). Click the Detail Menu button to choose an asset.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ASSETTYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Identifies the asset type you want to associate with the service level agreement (SLA). Click the Detail menu button to choose an asset type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Identifies the location you want to associate with the service level agreement (SLA). Click the Detail Menu button to choose a location.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SLAASSETLOCID",
            "required": true,
            "persistent": true,
            "title": "SLAASSETLOCID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Describes the asset or location you associate with the service level agreement (SLA).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site of the asset or location that you associate with the service level agreement (SLA).",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "SLAASSETLOCDESC",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the Asset records for a given SLAAssetLoc. (slaassetloc.assetnum = asset.assetnum). The resulting set will contain 0 or 1 object.",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "SLAAssetLoc to Drilldown relation",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLAASSETLOCLOCATIONDESC",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the Locations records for a given SLAAssetLoc. (slaassetloc.location = locations.location). The resulting set will contain 0 or 1 object.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SYNONYMDOMAIN",
            "target": "SYNONYMDOMAIN",
            "remarks": "SLAAssetLoc to Synonymdomain relation",
            "whereClause": "domainid='ASSETTYPE' and value=:assettype",
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
            "remarks": "Relationship from the SLAASSETLOC to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SLAASSETLOC",
            "source": "SLA",
            "remarks": "Relationship to the SLAAssetLoc table, used to find the SLAAssetLoc records for a given SLA. (sla.slanum = slaassetloc.slanum). The resulting set will contain 0 or more objects.",
            "whereClause": "slanum = :slanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLAASSETLOCASSET",
            "source": "SLA",
            "remarks": "Relationship to the SLAAssetLoc table, used to find the SLAAssetLoc asset records for a given SLA. (sla.slanum = slaassetloc.slanum and assetnum is not null). The resulting set will contain 1 or more objects.",
            "whereClause": "slanum = :slanum and assetnum is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLAASSETLOCASSETLOC",
            "source": "SLA",
            "remarks": "SLA to SLAASSETLOC table relation, for assets or locations",
            "whereClause": "slanum = :slanum and (assetnum  is not null or location is not null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLAASSETLOCLOCATION",
            "source": "SLA",
            "remarks": "Relationship to the SLAAssetLoc table, used to find the SLAAssetLoc location records for a given SLA. (sla.slanum = slaassetloc.slanum and location is not null). The resulting set will contain 1 or more objects.",
            "whereClause": "slanum = :slanum and location is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLAASSETLOCTYPE",
            "source": "SLA",
            "remarks": "Relationship to the SLAAssetLoc table, used to find the SLAAssetLoc assettype records for a given SLA. (sla.slanum = slaassetloc.slanum and assettype is not null). The resulting set will contain 1 or more objects.",
            "whereClause": "slanum = :slanum and assettype is not null",
            "cardinality": "UNDEFINED"
        }
    ]
}