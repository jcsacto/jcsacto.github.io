mos = {
    "objectName": "WOASSETSTOMOVE",
    "className": "psdi.app.workorder.WOAssetsToMoveSet",
    "description": "Assets that are being added to the plan to move",
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
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "the asset to be moved",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "MOVETOLOC",
            "required": false,
            "persistent": false,
            "title": "Move to Location",
            "remarks": "the location to move the asset to",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "MOVETOSITE",
            "required": false,
            "persistent": false,
            "title": "Move to Site",
            "remarks": "the new site to move the asset to",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "MOVETOPARENT",
            "required": false,
            "persistent": false,
            "title": "Move to Parent",
            "remarks": "new parent for the asset",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": false,
            "title": "Site",
            "remarks": "SITE ID",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": false,
            "title": "Organization",
            "remarks": "ORGANIZATION ID",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "WOASSETSTOMOVE",
            "target": "ASSET",
            "remarks": "Relationship from the WOASSETSTOMOVE table to the asset table. (No where clause). The resulting set will contain zero or more objects. Note: This relationship is used to create assets to add to a list used to generate move asset workorder tasks",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the WOASSETSTOMOVE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}