mos = {
    "objectName": "NAMEDUSERS",
    "className": "psdi.app.contract.software.NamedUsersSet",
    "description": "Table that contains the name users of the software",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "NAMEDUSERSID",
    "primaryKeyColumns": [
        "NAMEDUSERSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "NAMEDUSERS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 112",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "NAMEDUSERS",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "NAMEDUSERS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "NAMEDUSERS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "NAMEDUSERS",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "NAMEDUSERS",
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
            "attributeName": "NAMEDUSERSID",
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
            "remarks": "Revision Number of the Contract",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
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
            "attributeName": "PERSONID",
            "required": false,
            "persistent": true,
            "title": "Person",
            "remarks": "Person identifier",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset identifier",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "USERNAME",
            "required": false,
            "persistent": true,
            "title": "User Name",
            "remarks": "User Name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier of the asset.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find asset  records for a given nameduser. (namedusers.assetnum = asset.assetnum and namedusers.orgid = asset.orgid). The resulting set will contain zero, one or more than one object.",
            "whereClause": "assetnum = :assetnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find locations  records for a given nameduser. (namedusers.location = locations.location and namedusers.orgid = locations.orgid). The resulting set will contain zero, one or more than one object.",
            "whereClause": "location = :location and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Relationship to the Person table, used to find the person record corresponding to the personid.(namedusers.personid=person.personid). The resulting set will contain one object.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VALIDPERSON",
            "target": "PERSON",
            "remarks": "Relationship to the Person table, used to find all person records which are in a status of ACTIVE. The resulting set will contain zero or more objects.",
            "whereClause": "status in (select value from synonymdomain where maxvalue='ACTIVE' and domainid='PERSONSTATUS')",
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
            "remarks": "Relationship from the NAMEDUSERS to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "NAMEDUSERS",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the NamesUsers table, used to find all NamesUsers records for a given purchase contract. (ContractSWLic.contractnum=ContractSWLic.contractnum). The resulting set will contain one or more records.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NAMEDUSERS",
            "source": "SFWVIEW",
            "remarks": "Relationship to the NamedUsers table, used to find all named users records for a given software contract. (sfwview.contractnum=namedusers.contractnum and sfwview.revisionnum=namedusers.revisionnum and sfwview.orgid=namedusers.orgid)",
            "whereClause": "contractnum = :contractnum and revisionnum =:revisionnum and orgid =:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}