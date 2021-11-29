mos = {
    "objectName": "MAXMENU",
    "className": "psdi.app.appsetup.MaxMenuSet",
    "description": "Specifies levels and nesting for apps and options",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXMENUID",
    "primaryKeyColumns": [
        "MENUTYPE",
        "MODULEAPP",
        "ELEMENTTYPE",
        "KEYVALUE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXMENU",
            "parentKeys": "APP",
            "targetKeys": "KEYVALUE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 28",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXMENU",
            "parentKeys": "APP",
            "targetKeys": "MODULEAPP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Menus for an application.",
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
    "columns": [
        {
            "attributeName": "MENUTYPE",
            "required": true,
            "persistent": true,
            "title": "Menu Type",
            "remarks": "Type of menu being specified: Module, App Menu, or App Toolbar",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MODULEAPP",
            "required": true,
            "persistent": true,
            "title": "Module or App",
            "remarks": "Name of the module or application",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "POSITION",
            "required": true,
            "persistent": true,
            "title": "Position",
            "remarks": "Position",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUBPOSITION",
            "required": true,
            "persistent": true,
            "title": "Subposition",
            "remarks": "Subposition within Position",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ELEMENTTYPE",
            "required": true,
            "persistent": true,
            "title": "Element Type",
            "remarks": "Type of menu being specified: Module, App Menu, or App Toolbar",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEYVALUE",
            "required": false,
            "persistent": true,
            "title": "Key Value",
            "remarks": "Name of the app or optionname. Will be null if this is a header.",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "HEADERDESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Header Description",
            "remarks": "Header description. Will be null if this is not a header.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URL",
            "required": false,
            "persistent": true,
            "title": "URL",
            "remarks": "URL for third-party applications",
            "sameAsAttribute": "URLNAME",
            "sameAsObject": "DOCINFO"
        },
        {
            "attributeName": "VISIBLE",
            "required": true,
            "persistent": true,
            "title": "Visible",
            "remarks": "Indicates whether this entry should be visible on the menu",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMAGE",
            "required": false,
            "persistent": true,
            "title": "Image",
            "remarks": "Filename for icon associated with this selection",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCESSKEY",
            "required": false,
            "persistent": true,
            "title": "Access Key",
            "remarks": "Used for Access Keys on actions",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TABDISPLAY",
            "required": false,
            "persistent": true,
            "title": "Tabs",
            "remarks": "Indicates the tabs on which an option can be displayed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXMENUID",
            "required": true,
            "persistent": true,
            "title": "MAXMENUID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "MaxMenu to MaxApps for elementtypes APP and OPTION",
            "whereClause": "(:elementtype = 'OPTION' and app = :moduleapp) or (:elementtype = 'APP' and app = :keyvalue)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXMODULES",
            "target": "MAXMODULES",
            "remarks": "MaxMenu to MaxModules for elementtypes MODULE and APP",
            "whereClause": "(:elementtype = 'APP' and module = :moduleapp) or (:elementtype = 'MODULE' and module = :keyvalue)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "MaxMenu to SigOption for elementtype OPTION",
            "whereClause": "APP = :MODULEAPP AND OPTIONNAME = :KEYVALUE",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "APPSIGOPTION",
            "target": "SIGOPTION",
            "remarks": "MaxMenu to SigOption for apps (appaccess)",
            "whereClause": ":elementtype ='APP' and app = :keyvalue and optionname = 'READ'",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "FA_MAXMENU",
            "source": "FACONFIG",
            "remarks": "Relationship between FACONFIG and MAXMENU table",
            "whereClause": "keyvalue = :app and elementtype='APP'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXMENU",
            "source": "FACONFIG",
            "remarks": "Relationship of MAXMENU Object with FACONFIG Object",
            "whereClause": "keyvalue = :app and elementtype = 'APP'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXMENU",
            "source": "MAXAPPS",
            "remarks": "Relationship to MaxMenu table, used to find all MaxMenu records for an App. (maxmenu.moduleapp = maxapps.app and menutype != 'MODULE'. This relationship will find 1 or more objects.",
            "whereClause": "moduleapp=:app and menutype != 'MODULE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXMENUAPPMENU",
            "source": "MAXAPPS",
            "remarks": "Relationship to MaxMenu table, used to find all MaxMenu records for an App of menutype APPMENU. ( maxmenu.moduleapp = maxapps.app and menutype=). This relationship will find 1 or more objects.",
            "whereClause": "moduleapp=:app and menutype='APPMENU'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXMENUAPPTOOL",
            "source": "MAXAPPS",
            "remarks": "Relationship to MaxMenu table, used to find all MaxMenu records for an App of menutype APPTOOL. ( maxmenu.moduleapp = maxapps.app and menutype='APPTOOL'). This relationship will find 1 or more objects.",
            "whereClause": "moduleapp=:app and menutype='APPTOOL'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXMENUMODULEAPP",
            "source": "MAXAPPS",
            "remarks": "Relationship to MaxMenu table, used to find all MaxMenu app records for a module. (menutype='MODULE' and moduleapp=:module). This relationship will find 1 or more objects.",
            "whereClause": "menutype='MODULE' and moduleapp=:module",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXMENUSEARCHMENU",
            "source": "MAXAPPS",
            "remarks": "Relationship to MaxMenu table, used to find all MaxMenu records for an App of menutype SEARCHMENU. ( maxmenu.moduleapp = maxapps.app and menutype='SEARCHMENU'). This relationship will find 1 or more objects.",
            "whereClause": "moduleapp=:app and menutype='SEARCHMENU'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MODULEMENU",
            "source": "MAXMODULES",
            "remarks": "Module menu for a given module",
            "whereClause": "menutype = 'MODULE' and moduleapp = :module",
            "cardinality": "UNDEFINED"
        }
    ]
}