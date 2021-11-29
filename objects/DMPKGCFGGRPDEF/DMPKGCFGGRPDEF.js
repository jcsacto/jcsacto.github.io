mos = {
    "objectName": "DMPKGCFGGRPDEF",
    "className": "psdi.dm.DMPkgCfgGrpDefSet",
    "description": "Specifies configuration groups for a package",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMPKGCFGGRPDEFID",
    "primaryKeyColumns": [
        "PKGDEFNAME",
        "SOURCE",
        "CFGOBJGROUP"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DMCFGGROUP",
            "targetObject": "DMPKGCFGGRPDEF",
            "parentKeys": "CFGOBJGROUP",
            "targetKeys": "CFGOBJGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Migration group used by Package Definintion group.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGCFGGRPDEF",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Package Definition.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DMPKGCFGGRPDEFID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCE",
            "required": true,
            "persistent": true,
            "title": "Source",
            "remarks": "Identifies the MAXIMO source where package is created",
            "sameAsAttribute": "SOURCE",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "CFGOBJGROUP",
            "required": true,
            "persistent": true,
            "title": "Migration Group",
            "remarks": "Groups to which config object belongs",
            "sameAsAttribute": "CFGOBJGROUP",
            "sameAsObject": "DMCFGGROUP"
        },
        {
            "attributeName": "PKGDEFNAME",
            "required": true,
            "persistent": true,
            "title": "Package Definition Name",
            "remarks": "Name of the package definition as entered by the user",
            "sameAsAttribute": "PKGDEFNAME",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "CONTENTID",
            "required": true,
            "persistent": true,
            "title": "Content Id",
            "remarks": "Unique attribute for content delivery",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMCFGGROUP",
            "target": "DMCFGGROUP",
            "remarks": "Relationship to get a deployment group",
            "whereClause": "cfgobjgroup=:cfgobjgroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCFGOBJECT",
            "target": "DMCFGOBJECT",
            "remarks": "Relationship to get config object set for a group.",
            "whereClause": "cfgobjgroup=:cfgobjgroup  order by cfgobjorder",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMDEPENDENCY",
            "target": "DMDEPENDENCY",
            "remarks": "Relationship to get a deployment group' depending groups",
            "whereClause": "dependinggroup=:cfgobjgroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGCFGOBJDEF",
            "target": "DMPKGCFGOBJDEF",
            "remarks": "Relationship to get the related config object set",
            "whereClause": "pkgdefname=:pkgdefname and source=:source and cfgobjgroup=:cfgobjgroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGCFGOBJDEFMOS",
            "target": "DMPKGCFGOBJDEF",
            "remarks": "dmpkgcfgobjdef records for dmpkgcfggrpdef",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and cfgobjgroup = :cfgobjgroup",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMPKGCFGGRPDEF",
            "source": "DMCFGGROUP",
            "remarks": "Relationship to get the package definition records that include this group",
            "whereClause": "cfgobjgroup=:cfgobjgroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGCFGGRPDEF",
            "source": "DMPACKAGEDEF",
            "remarks": "Groups for a package and source",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        }
    ]
}