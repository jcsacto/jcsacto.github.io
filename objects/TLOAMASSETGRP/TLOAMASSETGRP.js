mos = {
    "objectName": "TLOAMASSETGRP",
    "className": "psdi.app.asset.AssetGrpSet",
    "description": "TLOAM Asset Group Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TLOAMASSETGRPID",
    "primaryKeyColumns": [
        "TLOAMASSETGRPID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "TLOAMASSETGRP",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 155",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "TLOAMASSETGRP",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TLOAMASSETGRP",
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
            "attributeName": "PERSONGROUP",
            "required": true,
            "persistent": true,
            "title": "Group",
            "remarks": "Identifier of the person group record.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
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
            "attributeName": "ISPRIMARY",
            "required": true,
            "persistent": true,
            "title": "Primary",
            "remarks": "Is this person group a primary?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMASSETGRPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "TLOAMPERSONGROUP",
            "target": "PERSONGROUP",
            "remarks": "Relationship between the TLOAMASSETGRP and PERSONGROUP tables",
            "whereClause": "persongroup = :persongroup",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "TLOAMASSETPERSONGRP",
            "source": "ASSET",
            "remarks": "Relationship between the ASSET and TLOAMASSETGRP tables",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": null
        }
    ]
}