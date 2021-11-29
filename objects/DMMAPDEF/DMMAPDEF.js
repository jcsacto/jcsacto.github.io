mos = {
    "objectName": "DMMAPDEF",
    "className": "psdi.dm.DMMapDefSet",
    "description": "Migration Manager Mapping table",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMMAPDEFID",
    "primaryKeyColumns": [
        "PKGDEFNAME",
        "SOURCE",
        "OBJECTNAME",
        "ATTRIBUTENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMMAPDEF",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Mapping for Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "DMMAPDEF",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute for Mapping.",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMMAPDEF",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "CFGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure for Mapping.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMMAPDEF",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object for Mapping.",
            "longDescription": null
        }
    ],
    "columns": [
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
            "attributeName": "SOURCE",
            "required": true,
            "persistent": true,
            "title": "Source",
            "remarks": "The name of the product source environment where the package is defined. The name is a combination of the database host name, the database identifier, and the database schema name.",
            "sameAsAttribute": "SOURCE",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Remarks for the Migration Mapping",
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
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object",
            "remarks": "Object name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": true,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Attribute name",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "DMMAPDEFID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMMAPDEFPROC",
            "target": "MAXIFACEPROC",
            "remarks": "Get all the rules for a dmmapdef",
            "whereClause": "ifacename=:cfgobject and intobjectname=:cfgobject  and usewith='MIGRATIONOBJECT' and objectname=:objectname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMMAPDEFMAPPED",
            "source": "DMMAPTREERULE",
            "remarks": "Used to test if there are any mapped attributes for this object.",
            "whereClause": "objectname=:mboObjectname",
            "cardinality": null
        },
        {
            "name": "DMMAPDEF",
            "source": "DMPACKAGE",
            "remarks": "Relationship to the dmmapdef table",
            "whereClause": "source=:source and pkgdefname=:pkgdefname",
            "cardinality": null
        },
        {
            "name": "SELECTMAPPEDATTRIBUTES",
            "source": "MAXREPLACEPROC",
            "remarks": "Used to list valid attributes for mapped attributes in the select value dialog.",
            "whereClause": "cfgobject=:intobjectname",
            "cardinality": null
        }
    ]
}