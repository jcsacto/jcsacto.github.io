mos = {
    "objectName": "MAXMODULES",
    "className": "psdi.app.appsetup.MaxModulesSet",
    "description": "The MAXMODULES Table",
    "longDescription": "List of Go To Menu modules. Groups the applications.",
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "MAXMODULESID",
    "primaryKeyColumns": [
        "MODULE"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXMODULES",
            "targetObject": "MAXLICAPPACCESS",
            "parentKeys": "MODULE",
            "targetKeys": "MODULE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo Modules",
            "longDescription": null
        },
        {
            "objectName": "MAXMODULES",
            "targetObject": "MAXMENU",
            "parentKeys": "MODULE",
            "targetKeys": "MODULEAPP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Goto Menu",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "MODULE",
            "required": true,
            "persistent": true,
            "title": "Module",
            "remarks": "Maximo Module Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": true,
            "persistent": true,
            "title": "Description",
            "remarks": "Maximo Module Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXMODULESID",
            "required": true,
            "persistent": true,
            "title": "MAXMODULESID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relationship to MaxApps table by module (maxapps.module = maxmodules.module ). This relationship will find 1 or more objects.",
            "whereClause": "module=:module",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MODULEMENU",
            "target": "MAXMENU",
            "remarks": "Module menu for a given module",
            "whereClause": "menutype = 'MODULE' and moduleapp = :module",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXMODULES",
            "source": "MAXAPPS",
            "remarks": "Relationship to MaxModules table by module, used to find the module. ( maxmodules.module = maxapps.module ). This relationship will find only 1 object at most.",
            "whereClause": "module=:module",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXMODULES",
            "source": "MAXLICPRODAPPS",
            "remarks": "Relationship from MAXLICPRODAPPS to MAXMODULES table.",
            "whereClause": "module = (select module from maxlicappaccess where  appname=:appname)",
            "cardinality": null
        },
        {
            "name": "MAXMODULES",
            "source": "MAXMENU",
            "remarks": "MaxMenu to MaxModules for elementtypes MODULE and APP",
            "whereClause": "(:elementtype = 'APP' and module = :moduleapp) or (:elementtype = 'MODULE' and module = :keyvalue)",
            "cardinality": "UNDEFINED"
        }
    ]
}