mos = {
    "objectName": "KPITEMPLATEVARVALUE",
    "className": "psdi.app.kpi.KPITemplateVariableValueSet",
    "description": "KPI Template Variable Value",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "KPITEMPLATEVARVALUEID",
    "primaryKeyColumns": [
        "KPITEMPLATENUM",
        "KPITEMPLATEMAINNUM",
        "VARNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "KPITEMPLATE",
            "targetObject": "KPITEMPLATEVARVALUE",
            "parentKeys": "KPITEMPLATENUM",
            "targetKeys": "KPITEMPLATENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "KPI Template",
            "longDescription": null
        },
        {
            "objectName": "KPITEMPLATEMAIN",
            "targetObject": "KPITEMPLATEVARVALUE",
            "parentKeys": "KPITEMPLATENUM, KPITEMPLATEMAINNUM",
            "targetKeys": "KPITEMPLATENUM, KPITEMPLATEMAINNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "KPI Template",
            "longDescription": null
        },
        {
            "objectName": "KPITEMPLATEVAR",
            "targetObject": "KPITEMPLATEVARVALUE",
            "parentKeys": "KPITEMPLATENUM, VARNAME",
            "targetKeys": "KPITEMPLATENUM, VARNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "KPI Template",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "KPITEMPLATENUM",
            "required": true,
            "persistent": true,
            "title": "Related Template",
            "remarks": "Template Name",
            "sameAsAttribute": "KPITEMPLATENUM",
            "sameAsObject": "KPITEMPLATE"
        },
        {
            "attributeName": "KPITEMPLATEMAINNUM",
            "required": true,
            "persistent": true,
            "title": "Related Template",
            "remarks": "Template Name",
            "sameAsAttribute": "KPITEMPLATEMAINNUM",
            "sameAsObject": "KPITEMPLATEMAIN"
        },
        {
            "attributeName": "VARNAME",
            "required": true,
            "persistent": true,
            "title": "Variable Name",
            "remarks": "Variable Name",
            "sameAsAttribute": "VARNAME",
            "sameAsObject": "KPITEMPLATEVAR"
        },
        {
            "attributeName": "VARVALUE",
            "required": true,
            "persistent": true,
            "title": "Value",
            "remarks": "Value Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KPITEMPLATEVARVALUEID",
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
            "name": "KPITEMPLATEVARIABLE",
            "target": "KPITEMPLATEVAR",
            "remarks": "Locate the KPITEMPLATEVAR for the current value",
            "whereClause": "kpitemplatenum=:kpitemplatenum and varname=:varname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "KPITEMPLATEVARVALUES",
            "source": "KPITEMPLATEMAIN",
            "remarks": "Relationship for KPI Variable Values for a given KPI Template Main Record",
            "whereClause": "kpitemplatenum=:kpitemplatenum and kpitemplatemainnum=:kpitemplatemainnum",
            "cardinality": null
        },
        {
            "name": "KPITEMPLATEVARVALUES",
            "source": "KPITEMPLATEVAR",
            "remarks": "Relationship for KPI Variable Values for a given KPI Template Variable.",
            "whereClause": "kpitemplatenum=:kpitemplatenum and varname=:varname",
            "cardinality": null
        }
    ]
}