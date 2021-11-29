mos = {
    "objectName": "CONTLEASEENDASST",
    "className": "psdi.app.contract.lease.virtual.ContLeaseEndAsstSet",
    "description": "Contract Lease End Asset Set",
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
            "remarks": "Asset number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RMNCOST",
            "required": true,
            "persistent": false,
            "title": "Remaining Cost",
            "remarks": "Asset remaining cost.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX1CODE",
            "required": false,
            "persistent": false,
            "title": "Tax Code",
            "remarks": "Tax code to be used for calculation of tax 1.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX1",
            "required": false,
            "persistent": false,
            "title": "Tax",
            "remarks": "Tax 1 amount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLACCT",
            "required": true,
            "persistent": false,
            "title": "GL Account",
            "remarks": "GL account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Asset orgid",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site id",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ASSETID",
            "required": false,
            "persistent": false,
            "title": "Asset ID",
            "remarks": "Unique ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSTTARGETSTATUS",
            "required": true,
            "persistent": false,
            "title": "Decommission",
            "remarks": "Contract assets target status.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX2",
            "required": false,
            "persistent": false,
            "title": "Tax 2",
            "remarks": "Tax 2 amount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX3",
            "required": false,
            "persistent": false,
            "title": "Tax 3",
            "remarks": "Tax 3 amount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX4",
            "required": false,
            "persistent": false,
            "title": "Tax 4",
            "remarks": "Tax 4 amount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX5",
            "required": false,
            "persistent": false,
            "title": "Tax 5",
            "remarks": "Tax 5 amount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX2CODE",
            "required": false,
            "persistent": false,
            "title": "Tax Code 2",
            "remarks": "Tax code to be used for calculation of tax 2.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX3CODE",
            "required": false,
            "persistent": false,
            "title": "Tax Code 3",
            "remarks": "Tax code to be used for calculation of tax 3.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX4CODE",
            "required": false,
            "persistent": false,
            "title": "Tax Code 4",
            "remarks": "Tax code to be used for calculation of tax 4.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX5CODE",
            "required": false,
            "persistent": false,
            "title": "Tax Code 5",
            "remarks": "Tax code to be used for calculation of tax 5.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "Asset Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find all asset for a given contract asset. (contractasset.assetnum=asset.assetnum and contractasset.orgid=asset.orgid).",
            "whereClause": "assetnum=:assetnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the CONTLEASEENDASST to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}