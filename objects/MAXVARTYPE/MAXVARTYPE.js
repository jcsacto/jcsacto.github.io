mos = {
    "objectName": "MAXVARTYPE",
    "className": "psdi.app.system.MaxVarTypeSet",
    "description": "Identifies the domain of a MaxVar",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXVARTYPEID",
    "primaryKeyColumns": [
        "VARNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
    "columns": [
        {
            "attributeName": "VARNAME",
            "required": true,
            "persistent": true,
            "title": "Variable",
            "remarks": "System Variable Name",
            "sameAsAttribute": "VARNAME",
            "sameAsObject": "MAXVARS"
        },
        {
            "attributeName": "VARTYPE",
            "required": true,
            "persistent": true,
            "title": "Variable Type",
            "remarks": "Domain of the MaxVar - System, Organization, or Site",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULTVALUE",
            "required": false,
            "persistent": true,
            "title": "Default Value",
            "remarks": "Default value for MaxVar VarValue",
            "sameAsAttribute": "VARVALUE",
            "sameAsObject": "MAXVARS"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the MaxVar",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXVARTYPEID",
            "required": true,
            "persistent": true,
            "title": "MAXVARTYPEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXVARS",
            "target": "MAXVARS",
            "remarks": "Relationship to MaxVars table. (maxvars.varname = maxvars.varname). The result set will contain zero or more objects.",
            "whereClause": "varname = :varname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXVARTYPE",
            "source": "MAXVARS",
            "remarks": "Relationship to MaxVarType table. (maxvartype.varname = maxvars.varname). The result set will contain one object.",
            "whereClause": "varname = :varname",
            "cardinality": "UNDEFINED"
        }
    ]
}