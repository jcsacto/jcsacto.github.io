mos = {
    "objectName": "REPORTLABEL",
    "className": "psdi.app.report.ReportLabelSet",
    "description": "Record per report lable needing to be translated",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTLABELID",
    "primaryKeyColumns": [
        "REPORTNAME",
        "LABELKEY"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "REPORTLABEL",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "REPORTLABEL",
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
            "attributeName": "REPORTLABELID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABELKEY",
            "required": true,
            "persistent": true,
            "title": "Label Key",
            "remarks": "Label Key",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABELVALUE",
            "required": false,
            "persistent": true,
            "title": "Label Value",
            "remarks": "Label Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIZEDYNAMIC",
            "required": true,
            "persistent": true,
            "title": "Size Dynamic",
            "remarks": "Size Dynamic",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FONTNAME",
            "required": false,
            "persistent": true,
            "title": "Font Name",
            "remarks": "Font Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FONTSIZE",
            "required": false,
            "persistent": true,
            "title": "Font Size",
            "remarks": "Font Size",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEATTRIBUTE",
            "required": true,
            "persistent": true,
            "title": "Use Attribute",
            "remarks": "If checked, this report label should use the attribute title",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Attribute Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "REPORTNAME",
            "required": false,
            "persistent": true,
            "title": "Report Name",
            "remarks": "Report Filename",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": false,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "Maxattribute Attribute Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COLUMNWIDTH",
            "required": false,
            "persistent": true,
            "title": "Column Width",
            "remarks": "Column Width",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": false,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "RESOURCENAME",
            "required": false,
            "persistent": true,
            "title": "Resource Name",
            "remarks": "Included Resource Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "REPORT_LABEL",
            "source": "REPORT",
            "remarks": "Relationship between REPORT and REPORTLABEL table",
            "whereClause": "reportname = :reportname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTDESIGN_LABEL",
            "source": "REPORTDESIGN",
            "remarks": "Relationship between REPORTDESIGN and REPORTLABEL table",
            "whereClause": "reportname=:reportname",
            "cardinality": "UNDEFINED"
        }
    ]
}