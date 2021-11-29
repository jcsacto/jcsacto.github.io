mos = {
    "objectName": "DMCFGOBJECT",
    "className": "psdi.dm.DMCfgObjectSet",
    "description": "Configuration Object",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMCFGOBJECTID",
    "primaryKeyColumns": [
        "CFGOBJECT",
        "CFGOBJGROUP"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DMCFGGROUP",
            "targetObject": "DMCFGOBJECT",
            "parentKeys": "CFGOBJGROUP",
            "targetKeys": "CFGOBJGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Migration group used by Object Structure.",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMCFGOBJECT",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "CFGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure used by Migration group.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMCFGOBJECT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DMCFGOBJECTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CFGOBJECT",
            "required": true,
            "persistent": true,
            "title": "Migration Object",
            "remarks": "Identifies the configuration object; the object is nothing but a Maximo Object Structure (MOS)",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "CFGOBJGROUP",
            "required": true,
            "persistent": true,
            "title": "Configuration Object Group",
            "remarks": "Identifies the configuration object group to which this object belongs",
            "sameAsAttribute": "CFGOBJGROUP",
            "sameAsObject": "DMCFGGROUP"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Short description for the configuration object",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CFGOBJORDER",
            "required": true,
            "persistent": true,
            "title": "Migration Object Order",
            "remarks": "Specifies the order of the object among all objects of the configuration group; used primarily during the package deployment process (import)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Change By",
            "remarks": "User ID of the user that changed this record",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Date and time information when record was last changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERNAL",
            "required": true,
            "persistent": true,
            "title": "Internal",
            "remarks": "Flag that determines whether this configuration object can be modified or deleted by user",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPOBJECT",
            "required": false,
            "persistent": false,
            "title": "Exp Object",
            "remarks": "Non-Persistent field for Expression Builder",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CONDITION",
            "required": false,
            "persistent": false,
            "title": "Where Clause",
            "remarks": "Non-persistent field for Expression Builder",
            "sameAsAttribute": "WHERECLAUSE",
            "sameAsObject": "DMPKGCFGOBJDEF"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "EXPBUILDER",
            "target": "EXPBUILDER",
            "remarks": "Relationship for EXPBUILD",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJDETAIL",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Relationship to get the main object for config object.",
            "whereClause": "intobjectname=:cfgobject and processorder=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJDETAIL_ROOT",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Relationship for deployment group hier tree",
            "whereClause": "intobjectname =:cfgobject and relation is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMMAXINTOBJDETAIL_MAP",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Mapping tree relationship...",
            "whereClause": "intobjectname=:cfgobject",
            "cardinality": null
        },
        {
            "name": "DMCFGOBJINTOBJ",
            "target": "MAXINTOBJECT",
            "remarks": "User defined int object for dmcfgobject",
            "whereClause": "intobjectname=:cfgobject and userdefined =1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCFGOBJINTOBJECT",
            "target": "MAXINTOBJECT",
            "remarks": "Int object for dmcfgobject",
            "whereClause": "intobjectname=:cfgobject",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMCFGOBJECT",
            "source": "DMCFGGROUP",
            "remarks": "Configuration object details for a group",
            "whereClause": "cfgobjgroup=:cfgobjgroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCFGOBJECT_COUNT",
            "source": "DMMAPRULES",
            "remarks": "Used to test if there are any rules defined at all.",
            "whereClause": "cfgobject in (select intobjectname from maxifaceproc where usewith = 'MIGRATIONOBJECT')",
            "cardinality": null
        },
        {
            "name": "RULECFGOBJ",
            "source": "DMMAPRULES",
            "remarks": "Relationship for CFG Object",
            "whereClause": "cfgobject=:cfgobject",
            "cardinality": null
        },
        {
            "name": "TREEDMCFGOBJECT",
            "source": "DMMAPTREERULE",
            "remarks": "Get list of Configuration Objects for Tree Control.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DMCFGOBJECT",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship to get all config objects for a package def.",
            "whereClause": "cfgobjgroup in (select cfgobjgroup from dmpkgcfggrpdef where pkgdefname=:pkgdefname and source=:source) or cfgobjgroup in (select dependentgroup from dmdependency where dependinggroup in (select cfgobjgroup from dmpkgcfggrpdef where pkgdefname=:pkgdefname and source=:source))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAPCFGOBJ",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship for getting Configuration Object description",
            "whereClause": "cfgobject=:mapobject",
            "cardinality": null
        },
        {
            "name": "DMCFGOBJECT",
            "source": "DMPKGCFGGRPDEF",
            "remarks": "Relationship to get config object set for a group.",
            "whereClause": "cfgobjgroup=:cfgobjgroup  order by cfgobjorder",
            "cardinality": "UNDEFINED"
        }
    ]
}