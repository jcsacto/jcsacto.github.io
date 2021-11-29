mos = {
    "objectName": "WARRANTYASSET",
    "className": "psdi.app.contract.warranty.WarrantyAssetSet",
    "description": "Table that carries the assets of the warranty",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WARRANTYASSETID",
    "primaryKeyColumns": [
        "WARRANTYASSETID",
        "CONTRACTNUM",
        "REVISIONNUM",
        "ORGID",
        "ASSETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CONTRACT",
            "targetObject": "WARRANTYASSET",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WARRANTYASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "LOCATIONSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Warranty Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WARRANTYASSET",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WARRANTYASSET",
            "parentKeys": "SITEID",
            "targetKeys": "LOCATIONSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 281",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WARRANTYASSETID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": true,
            "persistent": true,
            "title": "Contract",
            "remarks": "Contract Number",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision Number",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Org ID",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ASSETID",
            "required": false,
            "persistent": true,
            "title": "Asset ID",
            "remarks": "Asset identifier",
            "sameAsAttribute": "ASSETID",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Location to which the warranty applies.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "A unique identification number assigned to the asset indicated.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ASSETTYPE",
            "required": false,
            "persistent": true,
            "title": "Asset Type",
            "remarks": "The predefined type of this asset.",
            "sameAsAttribute": "ASSETTYPE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATIONSITE",
            "required": false,
            "persistent": true,
            "title": "Location site",
            "remarks": "Site identifier of the Location",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find all asset for a given contract asset. (warrantyasset.assetid=asset.assetid and moved=no). The resulting set will contain zero or one object.",
            "whereClause": "assetid=:assetid and moved=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUERYASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find all assets for a given contract asset. (warrantyasset.assetid=asset.assetid). The resulting set will contain zero or one object.",
            "whereClause": "assetid=:assetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "target": "CONTLINEASSET",
            "remarks": "Relationship to the ContLineAsset table, used to find all lines that are related to a particular location for a given warranty contract. (warrantyasset.location = contlineasset.location and warrantyasset.revisionnum=contlineasset.revisionnum and warrantyasset.orgid=contlineasset.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and location=:location",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTLINEASSET",
            "target": "CONTLINEASSET",
            "remarks": "Relationship to the ContLineAsset table, used to find all lines that are related to a particular asset for a given warranty contract. (warrantyasset.contractnum = contlineasset.contractnum and warrantyasset.revisionnum=contlineasset.revisionnum and warrantyasset.orgid=contlineasset.orgid and warrantyasset.assetid=contlineasset.assetid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and assetid=:assetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTLINEASSETLOC",
            "target": "CONTLINEASSET",
            "remarks": "Relationship to the ContLineAsset table, used to find all lines that are related to a particular asset for a given warranty contract. (warrantyasset.contractnum = contlineasset.contractnum and warrantyasset.revisionnum=contlineasset.revisionnum and warrantyasset.orgid=contlineasset.orgid and warrantyasset.location=contlineasset.location and warrantyasset.locationsite=contlineasset.locationsite). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and location=:location and locationsite=:locationsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTLINEASSETTYP",
            "target": "CONTLINEASSET",
            "remarks": "Relationship to the ContLineAsset table, used to find all lines that are related to a particular assettype for a given warranty contract. (warrantyasset.contractnum = contlineasset.contractnum and warrantyasset.revisionnum=contlineasset.revisionnum and warrantyasset.orgid=contlineasset.orgid and warrantyasset.assettype=contlineasset.assettype. The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and assettype=:assettype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship to the drill down non-persistent object",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find all locations for a given warranty asset. (warrantyasset.location=location.location and warrantyasset.locationsite=locations.siteid). The resulting set will contain zero or one object.",
            "whereClause": "location=:location and siteid=:locationsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Asset application, displays all contracts that cover this asset and its parents.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the WARRANTYASSET to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WARRANTYASSET",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship to the WarrantyAsset table, used to find the WarrantyAsset records for a given Warranty Contract. (warrantyview.contractnum=warrantyasset.contractnum and warrantyview.revisionnum=warrantyasset.revisionum and warrantyview.orgid=warrantyasset.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}