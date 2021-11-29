mos = {
    "objectName": "CONTLINEASSET",
    "className": "psdi.app.contract.warranty.ContLineAssetSet",
    "description": "Table to hold the assets of each Contract Line",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTLINEASSETID",
    "primaryKeyColumns": [
        "CONTLINEASSETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTLINEASSET",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "CONTLINEASSET",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "CONTLINEASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "LOCATIONSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTLINEASSET",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CONTLINEASSET",
            "parentKeys": "SITEID",
            "targetKeys": "LOCATIONSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CONTLINEASSETID",
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
            "remarks": "Unique ID Number for the current contract.",
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
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "The physical location of the asset indicated.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "WARRANTYSTARTDATE",
            "required": true,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Start date of the warranty.",
            "sameAsAttribute": "STARTDATE",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "WARRANTYENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "End date of the warranty",
            "sameAsAttribute": "ENDDATE",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "COVERSCHILDREN",
            "required": true,
            "persistent": true,
            "title": "Covers Children",
            "remarks": "Checking this box indicates the children of this asset are covered by this warranty.",
            "sameAsAttribute": "COVERSCHILDREN",
            "sameAsObject": "CONTRACTASSET"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": true,
            "persistent": true,
            "title": "Description",
            "remarks": "A description of the asset on this contract line.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "DURATION",
            "required": true,
            "persistent": true,
            "title": "Duration",
            "remarks": "Duration of the warranty associated with this asset.",
            "sameAsAttribute": "DURATION",
            "sameAsObject": "WARRANTYLINE"
        },
        {
            "attributeName": "TIMEUNIT",
            "required": true,
            "persistent": true,
            "title": "Time Unit",
            "remarks": "The measurement unit used to define the duration (days, months, years)",
            "sameAsAttribute": "TIMEUNIT",
            "sameAsObject": "WARRANTYLINE"
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
            "attributeName": "CONTRACTLINENUM",
            "required": true,
            "persistent": true,
            "title": "Line",
            "remarks": "Contract Line Number",
            "sameAsAttribute": "CONTRACTLINENUM",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Asset Number.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ASSETTYPE",
            "required": false,
            "persistent": true,
            "title": "Asset Type",
            "remarks": "Asset Type",
            "sameAsAttribute": "ASSETTYPE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATIONSITE",
            "required": false,
            "persistent": true,
            "title": "Location Site",
            "remarks": "Site identifier of the location",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CONTASSETMETER",
            "target": "CONTASSETMETER",
            "remarks": "Relationship to the ContAssetMeter table, used to find all lines that are related to a particular asset for a given warranty contract. (contassetmeter.contractnum = contlineasset.contractnum and contassetmeter.revisionnum=contlineasset.revisionnum and contassetmeter.orgid=contlineasset.orgid and contassetmeter.assetid=contlineasset.assetid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and assetid=:assetid and contractlinenum = :contractlinenum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTASSETMETERLOC",
            "target": "CONTASSETMETER",
            "remarks": "Relationship to the ContAssetMeter table, used to find all lines that are related to a particular location for a given warranty contract. (contassetmeter.contractnum = contlineasset.contractnum and contassetmeter.revisionnum=contlineasset.revisionnum and contassetmeter.orgid=contlineasset.orgid and contassetmeter.location=contlineasset.location). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and location=:location and locationsite=:locationsite and contractlinenum = :contractlinenum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "target": "CONTASSETMETER",
            "remarks": "Relationship to the ContAssetMeter table, used to find all lines that are related to a particular asset for a given warranty contract. (contassetmeter.contractnum = contlineasset.contractnum and contassetmeter.revisionnum=contlineasset.revisionnum and contassetmeter.orgid=contlineasset.orgid and contassetmeter.location=contlineasset.location). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and location=:location and contractlinenum = :contractlinenum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the CONTLINEASSET to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CONTRACTLINEASSET",
            "source": "ASSET",
            "remarks": " Relationship to the Contract Line Asset table that stores the warranty begin and expiry dates",
            "whereClause": "assetid=:assetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTLINEASSET",
            "source": "CONTRACTASSET",
            "remarks": "Relationship to the ContLineAsset table, used to find all lines that are related to a particular asset for a given warranty contract. (contractasset.contractnum = contlineasset.contractnum and contractasset.revisionnum=contlineasset.revisionnum and contractasset.orgid=contlineasset.orgid and contractasset.assetid=contlineasset.assetid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and assetid=:assetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "source": "WARRANTYASSET",
            "remarks": "Relationship to the ContLineAsset table, used to find all lines that are related to a particular location for a given warranty contract. (warrantyasset.location = contlineasset.location and warrantyasset.revisionnum=contlineasset.revisionnum and warrantyasset.orgid=contlineasset.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and location=:location",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTLINEASSET",
            "source": "WARRANTYASSET",
            "remarks": "Relationship to the ContLineAsset table, used to find all lines that are related to a particular asset for a given warranty contract. (warrantyasset.contractnum = contlineasset.contractnum and warrantyasset.revisionnum=contlineasset.revisionnum and warrantyasset.orgid=contlineasset.orgid and warrantyasset.assetid=contlineasset.assetid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and assetid=:assetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTLINEASSETLOC",
            "source": "WARRANTYASSET",
            "remarks": "Relationship to the ContLineAsset table, used to find all lines that are related to a particular asset for a given warranty contract. (warrantyasset.contractnum = contlineasset.contractnum and warrantyasset.revisionnum=contlineasset.revisionnum and warrantyasset.orgid=contlineasset.orgid and warrantyasset.location=contlineasset.location and warrantyasset.locationsite=contlineasset.locationsite). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and location=:location and locationsite=:locationsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTLINEASSETTYP",
            "source": "WARRANTYASSET",
            "remarks": "Relationship to the ContLineAsset table, used to find all lines that are related to a particular assettype for a given warranty contract. (warrantyasset.contractnum = contlineasset.contractnum and warrantyasset.revisionnum=contlineasset.revisionnum and warrantyasset.orgid=contlineasset.orgid and warrantyasset.assettype=contlineasset.assettype. The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and assettype=:assettype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTLINEASSET",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship to the ContLineAsset table, used to find all lines that are related to a particular asset for a given warranty contract. (warrantyasset.contractnum = contlineasset.contractnum and warrantyasset.revisionnum=contlineasset.revisionnum and warrantyasset.orgid=contlineasset.orgid and warrantyasset.assetid=contlineasset.assetid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and assetid=:assetid",
            "cardinality": "UNDEFINED"
        }
    ]
}