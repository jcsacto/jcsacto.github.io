mos = {
    "objectName": "DMCFGGROUP",
    "className": "psdi.dm.DMCfgGroupSet",
    "description": "Deployment manager configuration group",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "DMCFGGROUPID",
    "primaryKeyColumns": [
        "CFGOBJGROUP"
    ],
    "logicalRelationships": [
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
            "objectName": "DMCFGGROUP",
            "targetObject": "DMCOMPRESULT",
            "parentKeys": "CFGOBJGROUP",
            "targetKeys": "CFGOBJGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Migration group used by Database Conmparison.",
            "longDescription": null
        },
        {
            "objectName": "DMCFGGROUP",
            "targetObject": "DMDEPENDENCY",
            "parentKeys": "CFGOBJGROUP",
            "targetKeys": "DEPENDENTGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Migration group used by Migration Manager Dependent group.",
            "longDescription": null
        },
        {
            "objectName": "DMCFGGROUP",
            "targetObject": "DMDEPENDENCY",
            "parentKeys": "CFGOBJGROUP",
            "targetKeys": "DEPENDINGGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Migration group used by Migration Manager Dependending group.",
            "longDescription": null
        },
        {
            "objectName": "DMCFGGROUP",
            "targetObject": "DMERROR",
            "parentKeys": "CFGOBJGROUP",
            "targetKeys": "CFGOBJGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Migration group used by Migration Manager to log errors when deployment fails.",
            "longDescription": null
        },
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
            "objectName": "DMCFGGROUP",
            "targetObject": "DMPKGCFGOBJDEF",
            "parentKeys": "CFGOBJGROUP",
            "targetKeys": "CFGOBJGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Migration group used by Package Definintion Object.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "DMCFGGROUP",
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
            "attributeName": "DMCFGGROUPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CFGOBJGROUP",
            "required": true,
            "persistent": true,
            "title": "Migration Group",
            "remarks": "Identifies the configuration object group to which this object belongs",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Short description for the configuration group",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CFGGROUPORDER",
            "required": true,
            "persistent": true,
            "title": "Migration Group Order",
            "remarks": "Specifies the order of the group among all groups; used primarily during the package deployment process (import)",
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
            "attributeName": "GROUPTYPE",
            "required": true,
            "persistent": true,
            "title": "Group Type",
            "remarks": "Specifies the category of the group from the perspective of staging table management",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERNAL",
            "required": true,
            "persistent": true,
            "title": "Internal",
            "remarks": "Flag that determines whether this configuration group can be modified or deleted by user",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMCFGGROUP",
            "target": "DMCFGGROUP",
            "remarks": "Relationship to get the dependent groups of a group.",
            "whereClause": "cfgobjgroup in (select dependentgroup from dmdependency where dependinggroup=:cfgobjgroup)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCFGOBJECT",
            "target": "DMCFGOBJECT",
            "remarks": "Configuration object details for a group",
            "whereClause": "cfgobjgroup=:cfgobjgroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMDEPENDENCY",
            "target": "DMDEPENDENCY",
            "remarks": "Relationship for deployment group dependencies",
            "whereClause": "dependinggroup =:cfgobjgroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEPENDENTGROUP",
            "target": "DMDEPENDENCY",
            "remarks": "Relationship to get the dependent groups on this group",
            "whereClause": "dependentgroup=:cfgobjgroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGCFGGRPDEF",
            "target": "DMPKGCFGGRPDEF",
            "remarks": "Relationship to get the package definition records that include this group",
            "whereClause": "cfgobjgroup=:cfgobjgroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMGRP_TREE",
            "target": "DMSTRUC",
            "remarks": "Relationship for deployment group hier tree",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMCFGGROUP",
            "source": "DMCFGGROUP",
            "remarks": "Relationship to get the dependent groups of a group.",
            "whereClause": "cfgobjgroup in (select dependentgroup from dmdependency where dependinggroup=:cfgobjgroup)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEPENDENTGROUP",
            "source": "DMDEPENDENCY",
            "remarks": "Relationship to get the details of a dependent group",
            "whereClause": "cfgobjgroup=:dependentgroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCFGGROUP",
            "source": "DMDEPENDENCY",
            "remarks": "Relationship for deployment group dependencies",
            "whereClause": "cfgobjgroup =:dependinggroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCFGGROUP",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship for config groups associated with a package definition ",
            "whereClause": "cfgobjgroup in (select cfgobjgroup from dmpkgcfggrpdef g where g.pkgdefname=:pkgdefname and g.source=:source)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PKGMETADATACFGGROUP",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship for package metadata config groups",
            "whereClause": "cfgobjgroup='MIGRATION'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCFGGROUP",
            "source": "DMPKGCFGGRPDEF",
            "remarks": "Relationship to get a deployment group",
            "whereClause": "cfgobjgroup=:cfgobjgroup",
            "cardinality": "UNDEFINED"
        }
    ]
}