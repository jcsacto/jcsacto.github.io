mos = {
    "objectName": "CONTSFWLIC",
    "className": "psdi.app.sfwlicview.ContSfwLicSet",
    "description": "Table to link Contract Item and Software License",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTSFWLICID",
    "primaryKeyColumns": [
        "CONTSFWLICID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTSFWLIC",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SFWLICENSE",
            "targetObject": "CONTSFWLIC",
            "parentKeys": "SFWLICENSEID",
            "targetKeys": "SFWLICENSEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Sofware License",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CONTSFWLICID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTID",
            "required": false,
            "persistent": true,
            "title": "Contract ID",
            "remarks": "Contract ID",
            "sameAsAttribute": "CONTRACTID",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTLINEID",
            "required": false,
            "persistent": true,
            "title": "Contract Line ID",
            "remarks": "Contract Line ID",
            "sameAsAttribute": "CONTRACTLINEID",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "SFWLICENSEID",
            "required": false,
            "persistent": true,
            "title": "License",
            "remarks": "Software License Id",
            "sameAsAttribute": "SFWLICENSEID",
            "sameAsObject": "SFWLICENSE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CONTSFWLIC_SFWLICID",
            "target": "CONTSFWLIC",
            "remarks": "Relationship to the contsfwlic table for existed sfwlicenseid.(contsfwlic.sfwlicenseid=contsfwlic.sfwlicenseid)",
            "whereClause": "sfwlicenseid=:sfwlicenseid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SFWLICENSE",
            "target": "SFWLICENSE",
            "remarks": "Relationship to the sfwlicense table.(contsfwlic.sfwlicenseid=sfwlicense.sfwlicenseid)",
            "whereClause": "sfwlicenseid=:sfwlicenseid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SFWVIEW",
            "target": "SFWVIEW",
            "remarks": "Relationship to the sfwview table.(contswlic.contractlineid=sfwview.contractlineid)",
            "whereClause": "contractid = :contractid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTSFWLIC_CONTLINE",
            "target": "SFWVIEWLINE",
            "remarks": "Relationship to the sfwviewline table. (contsfwlic.contractlineid=sfwviewline.contractlineid)",
            "whereClause": "contractlineid = :contractlineid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CONTRACTLINE",
            "source": "CONTRACTLINE",
            "remarks": "Relationship to the contsfwlic table (contractline.contractlineid=contsfwlic.contractlineid)",
            "whereClause": "contractlineid = :contractlineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTSFWLIC_SFWLICID",
            "source": "CONTSFWLIC",
            "remarks": "Relationship to the contsfwlic table for existed sfwlicenseid.(contsfwlic.sfwlicenseid=contsfwlic.sfwlicenseid)",
            "whereClause": "sfwlicenseid=:sfwlicenseid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTSFWLIC",
            "source": "SFWLICENSE",
            "remarks": "Relationship to the contsfwlic table.(contsfwlic.sfwlicenseid=sfwlicense.sfwlicenseid)",
            "whereClause": "sfwlicenseid=:sfwlicenseid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTSFWLIC",
            "source": "SFWVIEW",
            "remarks": "Relationship to the contsfwlic table. (contsfwlic.contractid=sfwview.contractid)",
            "whereClause": "contractid = :contractid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTSFWLIC",
            "source": "SFWVIEWLINE",
            "remarks": "Relationship to the contsfwlic table (sfwviewline.contractlineid=contsfwlic.contractlineid)",
            "whereClause": "contractlineid=:contractlineid",
            "cardinality": "UNDEFINED"
        }
    ]
}