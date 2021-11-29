mos = {
    "objectName": "REPORTADHOCFIELD",
    "className": "psdi.app.report.ReportAdHocFieldSet",
    "description": "Fields used in ad-hoc report definitions.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTADHOCFIELDID",
    "primaryKeyColumns": [
        "REPORTNAME",
        "APPNAME",
        "OBJECTID",
        "ATTRIBUTENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTADHOCFIELD",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOCFIELD",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 53",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "REPORTADHOCFIELD",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 160",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTADHOCFIELD",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ad hoc report selected fields.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "REPORTNAME",
            "required": true,
            "persistent": true,
            "title": "Report File Name",
            "remarks": "The file name of the report.",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "APPNAME",
            "required": true,
            "persistent": true,
            "title": "Application Name",
            "remarks": "Application this report will be registered to.",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "OBJECTID",
            "required": false,
            "persistent": true,
            "title": "Object ID",
            "remarks": "Unique identifier of the object within the object structure, if this report was designed against one.",
            "sameAsAttribute": "OBJECTID",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Object where the attribute is located.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": true,
            "persistent": true,
            "title": "Field Value",
            "remarks": "The attribute from the current object to be included in the report.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "REPORTLABEL",
            "required": true,
            "persistent": true,
            "title": "Field Order",
            "remarks": "The field label, which is also displayed as the field label in the report.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FIELDORDER",
            "required": false,
            "persistent": true,
            "title": "Field Order",
            "remarks": "The order that the field is displayed in the report.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CATEGORY",
            "required": false,
            "persistent": false,
            "title": "Category",
            "remarks": "Description of the object that owns this field.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "REPORTADHOCFIELDID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "REPORTADHOCFIELD",
            "source": "REPORT",
            "remarks": "Relationship from Report to ReportAdHocField.",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": null
        },
        {
            "name": "REPORTADHOCFIELD",
            "source": "REPORTADHOC",
            "remarks": "Relationship from the REPORTADHOC table to the REPORTADHOCFIELD table, used to get the fields included in the report.",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": null
        },
        {
            "name": "REPORTADHOCFIELD_TEMP",
            "source": "REPORTADHOC",
            "remarks": "Relationship from ReportAdHoc to ReportAdHocField. Will return no rows.",
            "whereClause": "1=2",
            "cardinality": null
        },
        {
            "name": "SELECTFIELD",
            "source": "REPORTADHOC",
            "remarks": "Relationship from ReportAdHoc to ReportAdHocField. Will return no rows.",
            "whereClause": "1=2",
            "cardinality": null
        }
    ]
}