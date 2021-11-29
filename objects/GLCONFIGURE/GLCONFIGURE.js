mos = {
    "objectName": "GLCONFIGURE",
    "className": "psdi.app.financial.GLConfigureSet",
    "description": "The GL Account Configuration table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "GLCONFIGUREID",
    "primaryKeyColumns": [
        "GLORDER",
        "ORGID"
    ],
    "logicalRelationships": [
        {
            "objectName": "GLCONFIGURE",
            "targetObject": "GLCOMPONENTS",
            "parentKeys": "GLORDER, ORGID",
            "targetKeys": "GLORDER, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "GL Components",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "GLCONFIGURE",
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
            "attributeName": "GLACCOUNTFIELD",
            "required": true,
            "persistent": true,
            "title": "Component",
            "remarks": "Individual GL Account component.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLORDER",
            "required": true,
            "persistent": true,
            "title": "GL Order",
            "remarks": "Order of this component in GL Account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MANDATORY",
            "required": true,
            "persistent": true,
            "title": "Required",
            "remarks": "Is component required?.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELIMITER",
            "required": false,
            "persistent": true,
            "title": "Screen Delimiter",
            "remarks": "Separator character between components.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLTYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Numeric, Alphanumeric, or Alphanumeric only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLLENGTH",
            "required": true,
            "persistent": true,
            "title": "Length",
            "remarks": "Length of the GL component.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCONFIGUREID",
            "required": true,
            "persistent": true,
            "title": "GLCONFIGUREID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPNAME",
            "required": false,
            "persistent": false,
            "title": "Group",
            "remarks": "When the MboSet owner is MaxGroup, this is the groupname",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "AUTHORIZED",
            "required": true,
            "persistent": false,
            "title": "Authorized",
            "remarks": "When groupname is not null, Authorized indicates whether this group has authorization for this component",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Orgaization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "GLAUTH",
            "target": "GLAUTH",
            "remarks": "GLAuths for the specified GL segment",
            "whereClause": "glaccountfield = :glaccountfield and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GLAUTHUI",
            "target": "GLAUTH",
            "remarks": "Relationship for GLConfigure to GLAuth when non-persistent attribute Groupname is not null",
            "whereClause": "groupname = :groupname and glaccountfield = :glaccountfield and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GLCOMPONENTS",
            "target": "GLCOMPONENTS",
            "remarks": "Relationship to GLComponents table. Orgid is a non-persistent attribute on GLConfigure table and is used here to get the correct components from GLComponents for a specific organization. This relationship is only used in Chart of Accounts app, if using anywhere else make sure you somehow populate the orgid first. (glorder = :glorder and orgid = :orgid). The resulting set will contain 0 or more objects.",
            "whereClause": "glorder = :glorder and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMGLCOMPONENT",
            "target": "GLCOMPONENTS",
            "remarks": "glcomponents for gl",
            "whereClause": "glorder = :glorder and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECTCFG",
            "target": "MAXOBJECTCFG",
            "remarks": "Relationship to MaxObjectCfg table. (1=1). The result set will contain all the rows in the MaxObjectCfg table.",
            "whereClause": "1 = 1",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "GLCONFIGURE",
            "source": "ACTIVATEGLACCOUNT",
            "remarks": "Relationship to GLConfigure table (glconfigure.glorder=issuecurrentitem.glorder).  The result set will contain one row in the GLConfigure table.",
            "whereClause": "glorder=:glorder",
            "cardinality": null
        },
        {
            "name": "GLCONFIGURE",
            "source": "GLAUTH",
            "remarks": "GL segment related to this GLAuth",
            "whereClause": "glaccountfield = :glaccountfield",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GLCONFIGURE",
            "source": "MAXGROUP",
            "remarks": "MaxGroup to GLConfigure, will contain all rows from GLConfigure",
            "whereClause": "orgid is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GLCONFIGURE",
            "source": "MAXOBJECTCFG",
            "remarks": "Relationship to GLConfigure table (1=1).  The result set will contain all the rows in the GLConfigure table.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GLCONFIGURE",
            "source": "ORGANIZATION",
            "remarks": "Relationship to get GLCONFIGURE records for the organization.",
            "whereClause": "orgid = :orgid",
            "cardinality": null
        }
    ]
}