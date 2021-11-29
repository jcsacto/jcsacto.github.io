mos = {
    "objectName": "DMCOLLPACKAGEMAP",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Migration Collections to Migration Package mapping",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMCOLLPACKAGEMAPID",
    "primaryKeyColumns": [
        "DMCOLLPACKAGEMAPID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "DMCOLLECTIONID",
            "required": true,
            "persistent": true,
            "title": "Collection Id",
            "remarks": "Unique ID representing the collection from which package definition has been generated",
            "sameAsAttribute": "DMCOLLECTIONID",
            "sameAsObject": "DMCOLLECTION"
        },
        {
            "attributeName": "DMPACKAGEDEFID",
            "required": true,
            "persistent": true,
            "title": "Package Defination Id",
            "remarks": "Unique ID representing the generated package definition corresponding to the collection.",
            "sameAsAttribute": "DMPACKAGEDEFID",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "PACKAGEORDER",
            "required": true,
            "persistent": true,
            "title": "Package Order",
            "remarks": "Order in which the package should be deployed; this applies only if multiple package definitions were generated from a single collection.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DMCOLLPACKAGEMAPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DMCOLLPACKAGEMAP",
            "source": "DMCOLLECTION",
            "remarks": "Relationship from DMCOLLECTION to DMCOLLPACKAGEMAP",
            "whereClause": "dmcollectionid=:dmcollectionid",
            "cardinality": null
        },
        {
            "name": "DMCOLLPACKAGEMAP",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship from DMPACKAGEDEF to DMCOLLPACKAGEMAP",
            "whereClause": "dmpackagedefid=:dmpackagedefid",
            "cardinality": null
        }
    ]
}