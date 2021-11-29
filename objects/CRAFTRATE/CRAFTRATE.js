mos = {
    "objectName": "CRAFTRATE",
    "className": "psdi.app.craft.CraftRateSet",
    "description": "Craft Rates",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CRAFTRATEID",
    "primaryKeyColumns": [
        "CRAFT",
        "SKILLLEVEL",
        "ORGID",
        "VENDOR",
        "CONTRACTNUM",
        "REVISIONNUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "CRAFTRATE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Craft Rate",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "CRAFTRATE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "CRAFTRATE",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "CRAFTRATE",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CRAFTRATE",
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
            "attributeName": "CRAFT",
            "required": true,
            "persistent": true,
            "title": "Craft",
            "remarks": "Craft",
            "sameAsAttribute": "CRAFT",
            "sameAsObject": "CRAFT"
        },
        {
            "attributeName": "SKILLLEVEL",
            "required": false,
            "persistent": true,
            "title": "Skill Level",
            "remarks": "The level of skill or expertise for an external vendor.",
            "sameAsAttribute": "SKILLLEVEL",
            "sameAsObject": "CRAFTSKILL"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Contract",
            "remarks": "The number on the contract for the external vendor.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "STANDARDRATE",
            "required": false,
            "persistent": true,
            "title": "Standard Rate",
            "remarks": "The standard rate that is established for the current revision of the contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of the skill level for an external vendor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CRAFTRATEID",
            "required": true,
            "persistent": true,
            "title": "CRAFTRATEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "Revision",
            "remarks": "The revision number of the contract for this craft/skill level.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "The external vendor supplying this craft/skill level.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "NEWSTANDARDRATE",
            "required": false,
            "persistent": false,
            "title": "New Standard Rate",
            "remarks": "Non-persistent field to hold the new standard rate",
            "sameAsAttribute": "STANDARDRATE",
            "sameAsObject": "CRAFTRATE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMPANIES",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table where company and orgid match. (companies.company=craftrate.vendor and companies.orgid=craftrate.orgid.)  This will return 0 or more objects.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "target": "CONTRACT",
            "remarks": "Relationship to the Contract table on contractnum. (contract.contractnum = craftrate.contractnum and contract.orgid=craftrate.orgid.)  This will return 0 or more objects ",
            "whereClause": "contractnum=:contractnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTREV",
            "target": "CONTRACT",
            "remarks": "Relationship to the contract table to get a given revision",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AMCTCRAFT",
            "target": "CRAFT",
            "remarks": "Relationship to Craft.",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "CRAFTRATE",
            "source": "AMCTCRAFT",
            "remarks": "Relationship to get rate for crafts.",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "CRAFTRATE",
            "source": "CRAFT",
            "remarks": "Relationship to the CraftRate table on craft. (craftrate.craft=craft.craft and craftrate.orgid=craft.orgid.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTRATENOTNULL",
            "source": "CRAFT",
            "remarks": "Relationship to the CraftRate table on craft. (craftrate.craft=craft.craft and craftrate.vendor is not null and craftrate.orgid=craft.orgid.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and orgid=:orgid and vendor  is not null and (contractnum is null or (contractnum is not null and contractnum in (select contractnum from contract where revisionnum = craftrate.revisionnum and historyflag = :no)))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWCRAFTRATE",
            "source": "CRAFT",
            "remarks": "Relationship to the craftrate table on craft. (craftrate.craft=craft.craft and craftrate.orgid=craft.orgid and skilllevel is null and vendor is null.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and orgid=:orgid and skilllevel is null and vendor is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTRATE",
            "source": "CRAFTSKILL",
            "remarks": "Relationship to the CraftRate table on craft and skilllevel. (craftrate.craft=craftskill.craft and craftrate.skilllevel=craftskill.skilllevel and craftrate.orgid=craftskill.orgid.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and skilllevel=:skilllevel and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTRATESKILL",
            "source": "CRAFTSKILL",
            "remarks": "Relationship to the CraftRate table on craftskill. (craftrate.craft=craftskill.craft and craftrate.vendor is null and and craftrate.skilllevel = craftskill.skilllevel and craftrate.orgid=craftskill.orgid.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and vendor is null and skilllevel = :skilllevel and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTRATE",
            "source": "LABORCRAFTRATE",
            "remarks": "Relationship from laborcraftrate to craftrate.  Where craft, skill, vendor, contract and org match or are null.  Returns 0 or 1 object.",
            "whereClause": "craft=:craft and ((skilllevel=:skilllevel and :skilllevel is not null) or (skilllevel is null and :skilllevel is null)) and ((vendor=:vendor and :vendor is not null) or (vendor is null and :vendor is null)) and ((contractnum=:contractnum and :contractnum is not null and revisionnum=(select revisionnum from contract where contractnum=:contractnum and orgid=:orgid and status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))) or (contractnum is null and :contractnum is null)) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTRATE",
            "source": "LABORVIEW",
            "remarks": "Relationship to the Craft Rate table, used to find all Craft rates. (craftrate.contractnum=laborview.contractnum and craftrate.orgid=laborview.orgid)",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}