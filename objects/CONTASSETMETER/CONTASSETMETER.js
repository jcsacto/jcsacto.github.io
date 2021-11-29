mos = {
    "objectName": "CONTASSETMETER",
    "className": "psdi.app.contract.warranty.ContAssetMeterSet",
    "description": "Table to store the meter information for the asset",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTASSETMETERID",
    "primaryKeyColumns": [
        "CONTASSETMETERID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTASSETMETER",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "CONTASSETMETER",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "CONTASSETMETER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "LOCATIONSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "CONTASSETMETER",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNIT, LOCATIONSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 102",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "CONTASSETMETER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "CONTASSETMETER",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTASSETMETER",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CONTASSETMETER",
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
            "attributeName": "CONTASSETMETERID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "The location of the asset for which this meter is defined.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "METERNAME",
            "required": false,
            "persistent": true,
            "title": "Meter",
            "remarks": "Meter for which the current reading is being recorded.",
            "sameAsAttribute": "METERNAME",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "COVERSCHILDREN",
            "required": true,
            "persistent": true,
            "title": "Covers Children",
            "remarks": "Will the children of this asset be covered ?",
            "sameAsAttribute": "COVERSCHILDREN",
            "sameAsObject": "CONTRACTASSET"
        },
        {
            "attributeName": "MEASUREUNIT",
            "required": false,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "Name of the measurement unit.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "STARTREADING",
            "required": false,
            "persistent": true,
            "title": "Start Reading",
            "remarks": "The reading logged at the start of the meter duration.",
            "sameAsAttribute": "READING",
            "sameAsObject": "METERREADING"
        },
        {
            "attributeName": "ENDREADING",
            "required": false,
            "persistent": true,
            "title": "End Reading",
            "remarks": "End meter reading",
            "sameAsAttribute": "READING",
            "sameAsObject": "METERREADING"
        },
        {
            "attributeName": "METERDURATION",
            "required": false,
            "persistent": true,
            "title": "Duration",
            "remarks": "Duration of the meter. Will be in the unit of MEASUREUNIT.",
            "sameAsAttribute": "READING",
            "sameAsObject": "METERREADING"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "OrgID",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
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
            "attributeName": "ASSETID",
            "required": false,
            "persistent": true,
            "title": "Asset ID",
            "remarks": "Asset Identifier",
            "sameAsAttribute": "ASSETID",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "CONTRACTLINENUM",
            "required": false,
            "persistent": true,
            "title": "Line",
            "remarks": "Contract Line",
            "sameAsAttribute": "CONTRACTLINENUM",
            "sameAsObject": "CONTRACTLINE"
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
            "name": "ASSETMETER",
            "target": "ASSETMETER",
            "remarks": "Relationship to the AssetMeter table, used to find the meters for a given asset. (assetmeter.metername=contassetmeter.metername and assetnum in (select assetnum from asset where contassetmeter.assetid=asset.assetid  and moved=:no)). The resulting set will contain zero or one record.",
            "whereClause": "metername=:metername and assetnum in (select assetnum from asset where assetid=:assetid  and moved=:no)",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CONTASSETMETER",
            "source": "CONTLINEASSET",
            "remarks": "Relationship to the ContAssetMeter table, used to find all lines that are related to a particular asset for a given warranty contract. (contassetmeter.contractnum = contlineasset.contractnum and contassetmeter.revisionnum=contlineasset.revisionnum and contassetmeter.orgid=contlineasset.orgid and contassetmeter.assetid=contlineasset.assetid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and assetid=:assetid and contractlinenum = :contractlinenum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTASSETMETERLOC",
            "source": "CONTLINEASSET",
            "remarks": "Relationship to the ContAssetMeter table, used to find all lines that are related to a particular location for a given warranty contract. (contassetmeter.contractnum = contlineasset.contractnum and contassetmeter.revisionnum=contlineasset.revisionnum and contassetmeter.orgid=contlineasset.orgid and contassetmeter.location=contlineasset.location). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and location=:location and locationsite=:locationsite and contractlinenum = :contractlinenum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "source": "CONTLINEASSET",
            "remarks": "Relationship to the ContAssetMeter table, used to find all lines that are related to a particular asset for a given warranty contract. (contassetmeter.contractnum = contlineasset.contractnum and contassetmeter.revisionnum=contlineasset.revisionnum and contassetmeter.orgid=contlineasset.orgid and contassetmeter.location=contlineasset.location). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and location=:location and contractlinenum = :contractlinenum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTASSETMETER",
            "source": "METER",
            "remarks": "Relationship to the ContAssetMeter table, used to find all contassetmeters having this meter. (contassetmeter.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        }
    ]
}