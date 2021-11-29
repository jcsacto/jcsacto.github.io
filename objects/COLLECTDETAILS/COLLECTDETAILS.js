mos = {
    "objectName": "COLLECTDETAILS",
    "className": "psdi.app.collection.CollectDetailsSet",
    "description": "CollectionDetails table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "COLLECTDETAILSID",
    "primaryKeyColumns": [
        "COLLECTDETAILSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTCI",
            "targetObject": "COLLECTDETAILS",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "COLLECTDETAILS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CollectDetails for the current Asset.",
            "longDescription": null
        },
        {
            "objectName": "COLLECTION",
            "targetObject": "COLLECTDETAILS",
            "parentKeys": "COLLECTIONNUM",
            "targetKeys": "COLLECTIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Collection",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "COLLECTDETAILS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "COLLECTDETAILS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "COLLECTDETAILS",
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
            "attributeName": "COLLECTDETAILSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COLLECTIONNUM",
            "required": true,
            "persistent": true,
            "title": "Collection",
            "remarks": "Identifier of the Collection",
            "sameAsAttribute": "COLLECTIONNUM",
            "sameAsObject": "COLLECTION"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifier of the Asset that is part of the collection",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Identifier of the Location that is part of the collection",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "CINUM",
            "required": false,
            "persistent": true,
            "title": "CI",
            "remarks": "Identifier of the CI that is part of the collection",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifier of the Asset's/Location's Site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifier of the Asset's/Location's Organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CIASSETLOCATIONDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "CI/Asset/Location Description",
            "remarks": "CI/Asset/Location Description.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CIASSETLOCATIONDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long Description",
            "remarks": "Long Description for CI/Asset/Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the ASSET table, used to find an ASSET record for a given COLLECDETAIL. (ASSET.asstenum = COLLECTDETAILS.assetnum). The resulting set will contain zero or one object.",
            "whereClause": "assetnum = :assetnum and siteid  = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find a CI for a given COLLECDETAIL. (CI.cinum = COLLECTDETAILS.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VCICOLLECT",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find a CI record for a given WORKORDER record. (CI.cinum = WORKORDER.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWACTCI",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find a CI record for a given COLLECTDETAILS record. (CI.cinum = COLLECTDETAILS.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCIRELHIS",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find a CI record for a given COLLECTDETAILS record. (CI.cinum = COLLECTDETAILS.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COLLECTIONS",
            "target": "COLLECTION",
            "remarks": "Relationship to the COLLECTION table, used to find a Collection record for a given COLLECDETAILS record",
            "whereClause": "collectionnum = :collectionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the CollectDetails to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a CollectDetails - asset or location field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find a Locations record for a given COLLECDETAIL. (LOCATIONS.location = COLLECTDETAILS.location). The resulting set will contain zero or one object.",
            "whereClause": "location = :location and siteid  = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Location application, displays all contracts that cover this location and its parents.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the COLLECTDETAILS to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COLLECTDETAILS",
            "source": "ASSET",
            "remarks": "Relationship to the COLLECTDETAILS table, used to find a CollectDetails record for a given Asset. (COLLECTDETAILS.assetnum = ASSET.assetnum). The resulting set will contain zero or one object.",
            "whereClause": "assetnum = :assetnum and siteid= :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COLLECTDETAILS",
            "source": "AUTOATTRUPDATE",
            "remarks": "Relationship from AutoAttrUpdate to CollectDetails",
            "whereClause": "(assetnum is not null and assetnum = :asset and siteid = :siteid) or (location is not null and location = :location and siteid = :siteid) or (cinum is not null and cinum = :cinum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COLLECTDETAILS",
            "source": "CI",
            "remarks": "Relationship to the COLLECTDETAILS table, used to find collectdetails record for a given CI",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VCICOLLECT2",
            "source": "CI",
            "remarks": "Relationship to the COLLECTDETAILS table, used to find a COLLECTDETAILS record for a given CI. (COLLECTDETAILS.cinum = CI.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COLLECTDETAILS",
            "source": "COLLECTION",
            "remarks": "Relationship to the COLLECTDETAILS table, used to find a Collection Details record for a given COLLECTION. (COLLECTDETAILS.collectionnum = COLLECTION.collectionnum). The resulting set will contain zero or one object.",
            "whereClause": "collectionnum = :collectionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COLLECTDETAILS",
            "source": "LOCATIONS",
            "remarks": "Relationship to the COLLECTDETAILS table, used to find a CollectDetails record for a given Location. (COLLECTDETAILS.location = LOCATIONS.location). The resulting set will contain zero or one object.",
            "whereClause": "location = :location and siteid= :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COLLECTDETAILS",
            "source": "MULTIASSETLOCCI",
            "remarks": "Relationship from MultiAssetLocCI to CollectDetails",
            "whereClause": "(assetnum is not null and assetnum = :assetnum and siteid = :siteid) or (location is not null and location = :location and siteid = :siteid) or (cinum is not null and cinum = :cinum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYASSET",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the CollectDetails table, used to find the CollectDetails records involving the current asset.  The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYASSETANDANCESTORS",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the route_stop table, used to find the route_stop records involving the current asset or its ancestors.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=collectdetails.siteid and assetancestor.ancestor=collectdetails.assetnum and assetancestor.siteid=:siteid and assetancestor.assetnum=:assetnum )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYASSETANDCHILDREN",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the CollectDetails table, used to find the CollectDetails records involving the current asset or its children.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=collectdetails.siteid and assetancestor.assetnum=collectdetails.assetnum and assetancestor.siteid=:siteid and assetancestor.ancestor=:assetnum )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYASSETANDFAMILY",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current asset, its children and its ancestors. PMs that pertain to the asset, a child or a parent via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=collectdetails.siteid and assetancestor.siteid=:siteid and assetancestor.ancestor=:assetnum and assetancestor.assetnum=collectdetails.assetnum union select 1 from assetancestor where assetancestor.siteid=collectdetails.siteid and assetancestor.siteid=:siteid and assetancestor.assetnum=:assetnum and assetancestor.ancestor=collectdetails.assetnum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYCI",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the CollectDetails table, used to find the CollectDetails records involving the current configuration item.  The resulting set will contain zero or more objects.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYLOC",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the CollectDetails table, used to find the CollectDetails records involving the current location.  The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYLOCANDANCESTORS",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the CollectDetails table, used to find the CollectDetails records involving the current location or its ancestors.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=collectdetails.siteid and locancestor.ancestor=collectdetails.location and locancestor.siteid=:siteid and locancestor.location=:location )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYLOCANDCHILDREN",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the CollectDetails table, used to find the CollectDetails records involving the current location or its children.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=collectdetails.siteid and locancestor.location=collectdetails.location and locancestor.siteid=:siteid and locancestor.ancestor=:location )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYLOCANDFAMILY",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the CollectDetails table, used to find the CollectDetails records involving the current location, its children and its ancestors.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=collectdetails.siteid and locancestor.siteid=:siteid and locancestor.ancestor=:location and locancestor.location=collectdetails.location union select 1 from locancestor where locancestor.siteid=collectdetails.siteid and locancestor.siteid=:siteid and locancestor.location=:location and locancestor.ancestor=collectdetails.location)",
            "cardinality": "UNDEFINED"
        }
    ]
}