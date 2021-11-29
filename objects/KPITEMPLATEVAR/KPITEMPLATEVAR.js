mos = {
    "objectName": "KPITEMPLATEVAR",
    "className": "psdi.app.kpi.KPITemplateVariableSet",
    "description": "KPI Template Variable.  Each KPITEMPLATE will have one or variables defined",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "KPITEMPLATEVARID",
    "primaryKeyColumns": [
        "KPITEMPLATENUM",
        "VARNAME"
    ],
    "logicalRelationships": [
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
    "targetLogicalRelationships": [
        {
            "objectName": "KPITEMPLATE",
            "targetObject": "KPITEMPLATEVAR",
            "parentKeys": "KPITEMPLATENUM",
            "targetKeys": "KPITEMPLATENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "KPI Template",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "KPITEMPLATEVAR",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "KPITEMPLATEVAR",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
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
            "attributeName": "VARNAME",
            "required": true,
            "persistent": true,
            "title": "Variable Name",
            "remarks": "Variable Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": false,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Attribute Name",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "MAXTYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Maximo Type",
            "sameAsAttribute": "MAXTYPE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Text that the admin can utilize for informational purposes",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KPITEMPLATEVARID",
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
            "name": "KPITEMPLATEVARVALUES",
            "target": "KPITEMPLATEVARVALUE",
            "remarks": "Relationship for KPI Variable Values for a given KPI Template Variable.",
            "whereClause": "kpitemplatenum=:kpitemplatenum and varname=:varname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "KPITEMPLATEVARS",
            "source": "KPITEMPLATE",
            "remarks": "Relationship for KPI Variables for a given KPI Template",
            "whereClause": "kpitemplatenum=:kpitemplatenum",
            "cardinality": null
        },
        {
            "name": "KPITEMPLATEVARIABLE",
            "source": "KPITEMPLATEVARVALUE",
            "remarks": "Locate the KPITEMPLATEVAR for the current value",
            "whereClause": "kpitemplatenum=:kpitemplatenum and varname=:varname",
            "cardinality": null
        }
    ]
}