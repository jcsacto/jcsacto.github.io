mos = {
    "objectName": "MAXVARS",
    "className": "psdi.app.system.MaxVarsSet",
    "description": "The MAXVARS Table",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXVARSID",
    "primaryKeyColumns": [
        "VARNAME",
        "ORGID",
        "SITEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXVARS",
            "targetObject": "MAXVARTYPE",
            "parentKeys": "VARNAME",
            "targetKeys": "VARNAME",
            "relNum": "many to 1",
            "status": "VERIFIED",
            "description": "Type information for MaxVars",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "MAXVARS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Specific organization the MaxVar value is for.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXVARS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Specific site the MaxVar value is for.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "VARNAME",
            "required": true,
            "persistent": true,
            "title": "Variable",
            "remarks": "System Variable Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VARVALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "System Variable Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "MAXVARSID",
            "required": true,
            "persistent": true,
            "title": "MAXVARSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VARTYPE",
            "required": false,
            "persistent": true,
            "title": "Variable Type",
            "remarks": "Domain of the MaxVar - System, Organization, or Site",
            "sameAsAttribute": "VARTYPE",
            "sameAsObject": "MAXVARTYPE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXVARTYPE",
            "target": "MAXVARTYPE",
            "remarks": "Relationship to MaxVarType table. (maxvartype.varname = maxvars.varname). The result set will contain one object.",
            "whereClause": "varname = :varname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXVARS",
            "source": "MAXVARTYPE",
            "remarks": "Relationship to MaxVars table. (maxvars.varname = maxvars.varname). The result set will contain zero or more objects.",
            "whereClause": "varname = :varname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVARS",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the MaxVars table, used to find all MaxVars records for a given organization. (maxvars.orgid = site.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVARS",
            "source": "SITE",
            "remarks": "Relationship to the MarVars table, used to find the site's MaxVars records. (maxvars.siteid = site.siteid). This relationship will find zero or more objects.",
            "whereClause": "siteid = :siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}