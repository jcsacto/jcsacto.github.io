mos = {
    "objectName": "DMPKGCFGOBJDEF",
    "className": "psdi.dm.DMPkgCfgObjDefSet",
    "description": "Where clause for an object in config group",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMPKGCFGOBJDEFID",
    "primaryKeyColumns": [
        "PKGDEFNAME",
        "SOURCE",
        "CFGOBJGROUP",
        "CFGOBJECT"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DMCFGGROUP",
            "targetObject": "DMPKGCFGOBJDEF",
            "parentKeys": "CFGOBJGROUP",
            "targetKeys": "CFGOBJGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Migration group used by Package Definintion Object.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMPKGCFGOBJDEF",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Package Definition",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMPKGCFGOBJDEF",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "CFGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure for Migration group SQL Where clause.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DMPKGCFGOBJDEFID",
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
            "remarks": "Name of the MAXIMO source where package definition is created",
            "sameAsAttribute": "SOURCE",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "CFGOBJGROUP",
            "required": true,
            "persistent": true,
            "title": "Configuration Object Group",
            "remarks": "Group to which configuration object belongs",
            "sameAsAttribute": "CFGOBJGROUP",
            "sameAsObject": "DMCFGGROUP"
        },
        {
            "attributeName": "CFGOBJECT",
            "required": true,
            "persistent": true,
            "title": "Migration Object",
            "remarks": "Name of the configuration object",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "WHERECLAUSE",
            "required": true,
            "persistent": true,
            "title": "Where Clause",
            "remarks": "SQL WHERE clause associated with the root MBO of the configuration object specified in the CFGOBJECT attribute",
            "sameAsAttribute": null,
            "sameAsObject": null
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
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DMPKGCFGOBJDEF",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship to get the set of package related config object details",
            "whereClause": "pkgdefname = :pkgdefname and source = :source",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGCFGOBJDEF",
            "source": "DMPKGCFGGRPDEF",
            "remarks": "Relationship to get the related config object set",
            "whereClause": "pkgdefname=:pkgdefname and source=:source and cfgobjgroup=:cfgobjgroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGCFGOBJDEFMOS",
            "source": "DMPKGCFGGRPDEF",
            "remarks": "dmpkgcfgobjdef records for dmpkgcfggrpdef",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and cfgobjgroup = :cfgobjgroup",
            "cardinality": "UNDEFINED"
        }
    ]
}