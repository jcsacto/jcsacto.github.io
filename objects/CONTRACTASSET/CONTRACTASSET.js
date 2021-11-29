mos = {
    "objectName": "CONTRACTASSET",
    "className": "psdi.app.contract.ContractAssetSet",
    "description": "Contract Asset table.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTRACTASSETID",
    "primaryKeyColumns": [
        "CONTRACTASSETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTASSET",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "CONTRACTASSET",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTASSETLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "CONTRACTASSET",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTRACTASSET",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CONTRACTASSETID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Contract",
            "remarks": "Contract Number.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the contract. This number indicates the number of times the contract has been revised. A contract that has been created and not revised will show a number of 0.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CONTRACTLINENUM",
            "required": false,
            "persistent": true,
            "title": "Line",
            "remarks": "Contract Line Number.",
            "sameAsAttribute": "CONTRACTLINENUM",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "A unique number to identify the asset.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Location of the asset .",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Date when this contract becomes active.",
            "sameAsAttribute": "STARTDATE",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "End date of the contract.",
            "sameAsAttribute": "ENDDATE",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "LEASEENDVALUE",
            "required": false,
            "persistent": true,
            "title": "Lease End Value",
            "remarks": "The monetary amount required to buy the asset at the end of the lease period.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PAYMENTSCHEDULE",
            "required": true,
            "persistent": true,
            "title": "Payment Schedule",
            "remarks": "Checking this box indicates a payment schedule exists for this asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALCOST",
            "required": false,
            "persistent": true,
            "title": "Total Cost",
            "remarks": "Total Cost of the Asset.",
            "sameAsAttribute": "TOTALCOST",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "INTERIMCHG",
            "required": false,
            "persistent": true,
            "title": "Interim Charge",
            "remarks": "Partial first month charge for this lease or rental.",
            "sameAsAttribute": "INTERIMCHG",
            "sameAsObject": "CONTRACTLEASE"
        },
        {
            "attributeName": "WARRANTYSTARTDATE",
            "required": false,
            "persistent": true,
            "title": "Warranty Start Date",
            "remarks": "Start date of the warranty.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RMAREQUIRED",
            "required": true,
            "persistent": true,
            "title": "RMA Required",
            "remarks": "Checking this box indicates a return material authorization is required.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COVERSCHILDREN",
            "required": true,
            "persistent": true,
            "title": "Covers Children",
            "remarks": "Will the children of this asset be covered ?",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "CONTASSETLINENUM",
            "required": true,
            "persistent": true,
            "title": "Line",
            "remarks": "Line Number for the ContractAsset table",
            "sameAsAttribute": "CONTRACTLINENUM",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "ASSETID",
            "required": true,
            "persistent": true,
            "title": "Asset ID",
            "remarks": "Unique Id",
            "sameAsAttribute": "ASSETID",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LEASEENDSTATUS",
            "required": false,
            "persistent": true,
            "title": "Lease End Status",
            "remarks": "Asset lease end status.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find all asset for a given contract asset. (contractasset.assetnum=asset.assetnum and contractasset.orgid=asset.orgid)",
            "whereClause": "assetid=:assetid and moved=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUERYASSET",
            "target": "ASSET",
            "remarks": "Relationship to the asset table to obtain all asset records that have the same asset identifier(contractasset.assetid=asset.assetid",
            "whereClause": "assetid=:assetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETUSER",
            "target": "ASSETUSERCUST",
            "remarks": "Relationship to the AssetUserCust table, used to find all assetusercusts for a given contract asset. (assetusercust.assetnum=contractasset.assetnum and assetusercust.siteid=contractasset.siteid and assetusercust.orgid=contractasset.orgid)",
            "whereClause": "assetnum=:assetnum and orgid=:orgid and siteid=:siteid and iscustodian=:yes and isprimary=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETUSERCUST",
            "target": "ASSETUSERCUST",
            "remarks": "Relationship to the AssetUserCust table, used to find all assetusercusts for a given contract asset. (assetusercust.assetnum=contractasset.assetnum and assetusercust.siteid=contractasset.siteid and assetusercust.orgid=contractasset.orgid)",
            "whereClause": "assetnum=:assetnum and orgid=:orgid and siteid=:siteid and isuser=:yes and isprimary=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTLINEASSET",
            "target": "CONTLINEASSET",
            "remarks": "Relationship to the ContLineAsset table, used to find all lines that are related to a particular asset for a given warranty contract. (contractasset.contractnum = contlineasset.contractnum and contractasset.revisionnum=contlineasset.revisionnum and contractasset.orgid=contlineasset.orgid and contractasset.assetid=contlineasset.assetid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and assetid=:assetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "target": "CONTRACT",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given contract asset. (contract.contractnum = contractasset.contractnum and contract.revisionnum = contractasset.revisionnum and contract.orgid = contractasset.orgid). The resulting set will contain one object.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
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
            "remarks": "Relationship to the Locations table, used to find all locations for a given contract asset. (contractasset.assetnum=locations.location and contractasset.orgid=locations.orgid and contractasset.siteid=locations.siteid)",
            "whereClause": "location=:location and orgid=:orgid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCHEDULELINE",
            "target": "SCHEDULELINE",
            "remarks": "Relationship to the Scheduleline table, used to find all schedule lines for a given contract asset.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and assetid=:assetid",
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
            "remarks": "Relationship from the CONTRACTASSET to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CONTRACTASSET",
            "source": "ASSET",
            "remarks": "Relationship to the ContractAsset table, used to find the begin and end dates associated with an asset on a contract",
            "whereClause": "assetid=:assetid and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "CONTRACTASSET",
            "source": "DRILLDOWN",
            "remarks": "Relationship to the contractasset table, used to find the contract asset records for a given location or asset shown on DrilDown. (((contractasset.location = drilldown.locinhierarchy and drilldown.locison=:yes) or (contractasset.assetid=drilldown.assetinhierarchy and drilldown.locison=:no))",
            "whereClause": "((location = :locvalue and :locison=:yes) or (assetid=:assetuid and :locison=:no)) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTASSET",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the ContractAsset table, used to find all assets for a given lease contract. (leaseview.contractnum = contractasset.contractnum and leaseview.revisionnum=contractasset.revisionnum and leaseview.orgid=contractasset.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTASSET",
            "source": "LOCATIONS",
            "remarks": "Relationship to the ContractAsset table, used to find a contract records for a given location. (contractasset.location = locations.location and contractasset.orgid = locations.orgid). The resulting set will contain zero, one or more than one object.",
            "whereClause": "location = :location and orgid = :orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "CONTRACTASSET",
            "source": "SCHEDULELINE",
            "remarks": "Relationship to the ContractAsset table, used to find the asset for a given schedule line. (scheduleline.assetid = contractasset.assetid  and contractnum in (select contractnum from schleaseview where schleaseview.scheduleid = scheduleline.scheduleid and schleaseview.orgid = scheduleline.orgid) and scheduleline.orgid = contractasset.orgid)",
            "whereClause": "assetid = :assetid  and contractnum in (select contractnum from schleaseview where schleaseview.scheduleid = :scheduleid and schleaseview.orgid = :orgid) and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTASSET",
            "source": "SCHLEASEVIEW",
            "remarks": "Relationship to the Contractasset table, used to find all contract assets for this schedule. (schleaseview.contractnum = :contractasset.contractnum and schleaseview.revisionnum = :contractasset.revisionnum and schleaseview.orgid = :contractasset.orgid and contractasset.paymentschedule = :no)",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid and paymentschedule = :no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTASSET",
            "source": "SFWVIEW",
            "remarks": "Relationship to the contractasset table, used to find all contract assets for a given contract. (sfwview.contractnum=contractasset.contractnum)",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWSC_BYASSET",
            "source": "VIEWWOPMS",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "assetid=(select assetid from asset where assetnum=:assetnum and siteid=:siteid) ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTASSET",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship to the ContractAsset table, used to find all assets for a given lease contract. (warrantyview.contractnum = contractasset.contractnum and warrantyview.revisionnum=contractasset.revisionnum and warrantyview.orgid=contractasset.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}