mos = {
    "objectName": "KPITEMPLATE",
    "className": "psdi.app.kpi.KPITemplateSet",
    "description": "KPI Template",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "KPITEMPLATEID",
    "primaryKeyColumns": [
        "KPITEMPLATENUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "KPITEMPLATE",
            "targetObject": "KPIMAIN",
            "parentKeys": "KPITEMPLATENUM",
            "targetKeys": "KPITEMPLATENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "KPI Template",
            "longDescription": null
        },
        {
            "objectName": "KPITEMPLATE",
            "targetObject": "KPITEMPLATEMAIN",
            "parentKeys": "KPITEMPLATENUM",
            "targetKeys": "KPITEMPLATENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "KPI Template",
            "longDescription": null
        },
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
            "objectName": "KPITEMPLATE",
            "targetObject": "KPITEMPLATEVARVALUE",
            "parentKeys": "KPITEMPLATENUM",
            "targetKeys": "KPITEMPLATENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "KPI Template",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "KPITEMPLATE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "KPITEMPLATE",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "KPITEMPLATE",
            "parentKeys": "PERSONID",
            "targetKeys": "REVISEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Revised By",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "KPITEMPLATENUM",
            "required": true,
            "persistent": true,
            "title": "Template",
            "remarks": "Unique Template Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Template Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUERY",
            "required": true,
            "persistent": true,
            "title": "KPI Query",
            "remarks": "KPI Template Query",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Application on which this KPI is based on",
            "sameAsAttribute": "APP",
            "sameAsObject": "KPIMAIN"
        },
        {
            "attributeName": "FORMAT",
            "required": true,
            "persistent": true,
            "title": "Format",
            "remarks": "Indicates whether the KPI is decimal or percentage based.",
            "sameAsAttribute": "FORMAT",
            "sameAsObject": "KPIMAIN"
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": true,
            "title": "Created By",
            "remarks": "The name of the person who created the KPI.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CREATEDDATE",
            "required": false,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Created Date",
            "sameAsAttribute": "LASTUPDATED",
            "sameAsObject": "KPIMAIN"
        },
        {
            "attributeName": "REVISEDBY",
            "required": false,
            "persistent": true,
            "title": "Revised By",
            "remarks": "Revised By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "REVISEDDATE",
            "required": false,
            "persistent": true,
            "title": "Revised Date",
            "remarks": "Last Updated Date",
            "sameAsAttribute": "LASTUPDATED",
            "sameAsObject": "KPIMAIN"
        },
        {
            "attributeName": "KPITEMPLATEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ALLKPIS",
            "target": "KPIMAIN",
            "remarks": "Relationship for KPIMAIN records that were created using the KPITEMPLATE",
            "whereClause": "kpitemplatenum=:kpitemplatenum",
            "cardinality": null
        },
        {
            "name": "KPITEMPLATES",
            "target": "KPIMAIN",
            "remarks": "Relationship for KPIMAIN records that were created using the KPITEMPLATE",
            "whereClause": "kpitemplatenum=:kpitemplatenum and kpitemplatemainnum is not null",
            "cardinality": null
        },
        {
            "name": "KPITEMPLATEMAINS",
            "target": "KPITEMPLATEMAIN",
            "remarks": "Relationship for KPI Template Main Records for a given KPI Template.  Each KPI Template will have 1 or more KPI Template Main Records",
            "whereClause": "kpitemplatenum=:kpitemplatenum",
            "cardinality": null
        },
        {
            "name": "KPITEMPLATEVARS",
            "target": "KPITEMPLATEVAR",
            "remarks": "Relationship for KPI Variables for a given KPI Template",
            "whereClause": "kpitemplatenum=:kpitemplatenum",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}