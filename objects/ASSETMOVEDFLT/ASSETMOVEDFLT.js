mos = {
    "objectName": "ASSETMOVEDFLT",
    "className": "psdi.app.asset.virtual.AssetMoveDfltSet",
    "description": "Asset Move default values",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "DFLTNEWSITE",
            "required": false,
            "persistent": false,
            "title": "To Site",
            "remarks": "Default newsite",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DFLTNEWLOCATION",
            "required": false,
            "persistent": false,
            "title": "To Location",
            "remarks": "Default newlocation",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "DFLTNEWPARENT",
            "required": false,
            "persistent": false,
            "title": "To Parent",
            "remarks": "Default newparent",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "DFLTNEWBINNUM",
            "required": false,
            "persistent": false,
            "title": "To Bin",
            "remarks": "Default newbinnum",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "DFLTNEWLOCATIONCHKBOX",
            "required": true,
            "persistent": false,
            "title": "Default New Location",
            "remarks": "default newlocation checkbox",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DFLTNEWBINNUMCHKBOX",
            "required": true,
            "persistent": false,
            "title": "Default New Bin",
            "remarks": "default newbinnum checkbox",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DFLTNEWPARENTCHKBOX",
            "required": true,
            "persistent": false,
            "title": "Default New Parent",
            "remarks": "default newparent checkbox",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DFLTNEWORGID",
            "required": false,
            "persistent": false,
            "title": "To Organization",
            "remarks": "To Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "TLOAMDFLTNEWGLACCOUNT",
            "required": false,
            "persistent": false,
            "title": "To GL Account",
            "remarks": "Move to new GL Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site ID",
            "remarks": "Site ID added by TLOAM",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Org ID",
            "remarks": "Org ID added by TLOAM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCDFLTNEWLPLOC",
            "required": false,
            "persistent": false,
            "title": "To Loop Location",
            "remarks": "Defines the location number that the Loop Calibration record is moving to. Click Detail Menu to select the value.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DFLTNEWPARENT",
            "target": "ASSET",
            "remarks": "Relationship to the asset records, used to find the asset records in a given site.",
            "whereClause": "assetnum=:dfltnewparent and siteid=:dfltnewsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the ASSETMOVEDFLT to the non-persistent DrillDown table. The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DFLTNEWLOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the location records, used to find the location records in a given site.",
            "whereClause": "location=:dfltnewlocation and siteid=:dfltnewsite",
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
            "remarks": "Relationship from the ASSETMOVEDFLT to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field.",
            "whereClause": "",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "ASSETMOVEDFLT",
            "source": "ASSET",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETMOVEDFLT",
            "source": "PO",
            "remarks": "Relationship to the po assetmovedflt records, used to find the assetmovedflt records for a given po.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETMOVEDFLT",
            "source": "SHIPMENT",
            "remarks": "Relationship to the shipment assetmovedflt records, used to find the assetmovedflt records for a given shipment.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "ASSETMOVEDFLT",
            "source": "WORKORDER",
            "remarks": "Relationship to the workorder's assetmovedflt records, used to find the assetmovedflt records for a given workorder.",
            "whereClause": " ",
            "cardinality": "UNDEFINED"
        }
    ]
}