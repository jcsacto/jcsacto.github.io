mos = {
    "objectName": "CONTLINEMETER",
    "className": "psdi.app.contract.warranty.ContLineMeterSet",
    "description": "Meter details for each contract line.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTLINEMETERID",
    "primaryKeyColumns": [
        "CONTLINEMETERID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTLINEMETER",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "CONTLINEMETER",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTLINEMETER",
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
            "attributeName": "CONTLINEMETERID",
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
            "remarks": "Revision number of the contract",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTLINENUM",
            "required": true,
            "persistent": true,
            "title": "Line",
            "remarks": "Contract Line Number of the owning contract line",
            "sameAsAttribute": "CONTRACTLINENUM",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "MEASUREUNIT",
            "required": true,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "Name of the measurement unit.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "METERDURATION",
            "required": false,
            "persistent": true,
            "title": "Meter Duration",
            "remarks": "Duration of the meter. Indicated in the unit described in MEASUREUNIT.",
            "sameAsAttribute": "READING",
            "sameAsObject": "METERREADING"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CONTLINEMETER",
            "source": "WARRANTYVIEWLINE",
            "remarks": "Relationship to the ContLineMeter table, used to find the ContLineMeter for a given ContractLine record. (warrantyline.contractnum=contlinemeter.contractnum and warrantyline.revisionnum=contlinemeter.revisionnum and warrantyline.orgid=contlinemeter.orgid and warrantyline.contractlinenum=contlinemeter.contractlinenum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and contractlinenum=:contractlinenum",
            "cardinality": "UNDEFINED"
        }
    ]
}