mos = {
    "objectName": "REPORTADHOC",
    "className": "psdi.app.report.ReportAdHocSet",
    "description": "Table for ad-hoc report definitions",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTADHOCID",
    "primaryKeyColumns": [
        "REPORTNAME",
        "APPNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "REPORTADHOC",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 39",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, FILTERATTRIBUTENAME1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, FILTERATTRIBUTENAME2",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, FILTERATTRIBUTENAME3",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 46",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, GROUPATTRIBUTENAME1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 47",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, GROUPATTRIBUTENAME2",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 48",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, GROUPATTRIBUTENAME3",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 49",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, SORTATTRIBUTENAME1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, SORTATTRIBUTENAME2",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, SORTATTRIBUTENAME3",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 52",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, FILTEROBJECTID1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, FILTEROBJECTID2",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, FILTEROBJECTID3",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, GROUPOBJECTID1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, GROUPOBJECTID2",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, GROUPOBJECTID3",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, OBJECTID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, SORTOBJECTID1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, SORTOBJECTID2",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, SORTOBJECTID3",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "REPORTOBJECT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 36",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "REPORTADHOC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 159",
            "longDescription": null
        },
        {
            "objectName": "REPORT",
            "targetObject": "REPORTADHOC",
            "parentKeys": "APPNAME, REPORTNAME",
            "targetKeys": "APPNAME, REPORTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ad hoc reports.",
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
            "attributeName": "REPORTOBJECT",
            "required": false,
            "persistent": true,
            "title": "Report Object Structure",
            "remarks": "Report Object Structure for this application",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "The name of the main object for the report.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OBJECTID",
            "required": false,
            "persistent": true,
            "title": "Object ID",
            "remarks": "The object ID of the main object of the report, if the report was designed against a report object structure.",
            "sameAsAttribute": "OBJECTID",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "STYLE",
            "required": true,
            "persistent": true,
            "title": "Style",
            "remarks": "Specifies the layout or format style of the report.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WHERECLAUSE",
            "required": false,
            "persistent": true,
            "title": "Where Clause",
            "remarks": "The where clause that was saved when the report was created. The report is run against this where clause.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SAVEREPORT",
            "required": true,
            "persistent": false,
            "title": "Save Report",
            "remarks": "Specifies whether the report will be saved so it may be run and edited.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SAVEQUERY",
            "required": true,
            "persistent": true,
            "title": "Apply the application query",
            "remarks": "Apply the current application query, which is displayed in the report as the Saved Where Clause.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TITLE",
            "required": false,
            "persistent": false,
            "title": "Report Title",
            "remarks": "The report title is displayed at the top of the report and in the report browser.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLOSEWINDOW",
            "required": true,
            "persistent": false,
            "title": "Close Window",
            "remarks": "Specifies whether the Create Report window will close after the report is submitted.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISPUBLIC",
            "required": true,
            "persistent": false,
            "title": "Public",
            "remarks": "Check this box to make the report available to all users who can run reports in the applicaton.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date the report was last modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENTCATEGORY",
            "required": false,
            "persistent": false,
            "title": "Parent Category",
            "remarks": "The application category that the report is run against.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization identifier, used to evaluate security option condition.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site identifier, used to evaluate security option condition.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "FILTEROBJECTID1",
            "required": false,
            "persistent": true,
            "title": "Object ID",
            "remarks": "Object ID for first filter.",
            "sameAsAttribute": "OBJECTID",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "FILTERATTRIBUTENAME1",
            "required": false,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "Attribute name for first filter.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "FILTERSINGLEVALUE1",
            "required": true,
            "persistent": true,
            "title": "Single Value",
            "remarks": "The filter has only one parameter. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILTERCATEGORY1",
            "required": false,
            "persistent": false,
            "title": "Category",
            "remarks": "Category for the first filter.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "FILTERREPORTLABEL1",
            "required": false,
            "persistent": false,
            "title": "Report Label",
            "remarks": "Report label for first filter.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILTEROBJECTID2",
            "required": false,
            "persistent": true,
            "title": "Object ID",
            "remarks": "Object ID for second filter.",
            "sameAsAttribute": "OBJECTID",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "FILTERATTRIBUTENAME2",
            "required": false,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "Attribute name for second filter.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "FILTERSINGLEVALUE2",
            "required": true,
            "persistent": true,
            "title": "Single Value",
            "remarks": "The filter has only one parameter. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILTERCATEGORY2",
            "required": false,
            "persistent": false,
            "title": "Category",
            "remarks": "Category for the second filter.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "FILTERREPORTLABEL2",
            "required": false,
            "persistent": false,
            "title": "Report Label",
            "remarks": "Report label for second filter.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILTEROBJECTID3",
            "required": false,
            "persistent": true,
            "title": "Object ID",
            "remarks": "Object ID for third filter.",
            "sameAsAttribute": "OBJECTID",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "FILTERATTRIBUTENAME3",
            "required": false,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "Attribute name for third filter.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "FILTERSINGLEVALUE3",
            "required": true,
            "persistent": true,
            "title": "Single Value",
            "remarks": "The filter has only one parameter. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILTERCATEGORY3",
            "required": false,
            "persistent": false,
            "title": "Category",
            "remarks": "Category for the third filter.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "FILTERREPORTLABEL3",
            "required": false,
            "persistent": false,
            "title": "Report Label",
            "remarks": "Report label for third filter.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPOBJECTID1",
            "required": false,
            "persistent": true,
            "title": "Object ID",
            "remarks": "Object ID for first group level.",
            "sameAsAttribute": "OBJECTID",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "GROUPATTRIBUTENAME1",
            "required": false,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "Attribute name for first group level.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "GROUPASCENDING1",
            "required": true,
            "persistent": true,
            "title": "Ascending",
            "remarks": "The group is displayed in the report in ascending order, alpha-numerically.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPCATEGORY1",
            "required": false,
            "persistent": false,
            "title": "Category",
            "remarks": "Category for the first group level.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "GROUPREPORTLABEL1",
            "required": false,
            "persistent": false,
            "title": "Report Label",
            "remarks": "Report label for first group level.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPOBJECTID2",
            "required": false,
            "persistent": true,
            "title": "Object ID",
            "remarks": "Object ID for second group level.",
            "sameAsAttribute": "OBJECTID",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "GROUPATTRIBUTENAME2",
            "required": false,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "Attribute name for second group level.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "GROUPASCENDING2",
            "required": true,
            "persistent": true,
            "title": "Ascending",
            "remarks": "The group is displayed in the report in ascending order, alpha-numerically.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPCATEGORY2",
            "required": false,
            "persistent": false,
            "title": "Category",
            "remarks": "Category for the second group level.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "GROUPREPORTLABEL2",
            "required": false,
            "persistent": false,
            "title": "Report Label",
            "remarks": "Report label for second group level.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPOBJECTID3",
            "required": false,
            "persistent": true,
            "title": "Object ID",
            "remarks": "Object ID for third group level.",
            "sameAsAttribute": "OBJECTID",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "GROUPATTRIBUTENAME3",
            "required": false,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "Attribute name for third group level.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "GROUPASCENDING3",
            "required": true,
            "persistent": true,
            "title": "Ascending",
            "remarks": "The group is displayed in the report in ascending order, alpha-numerically.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPCATEGORY3",
            "required": false,
            "persistent": false,
            "title": "Category",
            "remarks": "Category for the third group level.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "GROUPREPORTLABEL3",
            "required": false,
            "persistent": false,
            "title": "Report Label",
            "remarks": "Report label for third group level.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SORTOBJECTID1",
            "required": false,
            "persistent": true,
            "title": "Object ID",
            "remarks": "Object ID for first sort level.",
            "sameAsAttribute": "OBJECTID",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "SORTATTRIBUTENAME1",
            "required": false,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "Attribute name for first sort level.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "SORTASCENDING1",
            "required": true,
            "persistent": true,
            "title": "Ascending",
            "remarks": "The report sorting is displayed in ascending order, alpha-numerically.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SORTCATEGORY1",
            "required": false,
            "persistent": false,
            "title": "Category",
            "remarks": "Category for the first sort level.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "SORTREPORTLABEL1",
            "required": false,
            "persistent": false,
            "title": "Report Label",
            "remarks": "Report label for first sort level.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SORTOBJECTID2",
            "required": false,
            "persistent": true,
            "title": "Object ID",
            "remarks": "Object ID for second sort level.",
            "sameAsAttribute": "OBJECTID",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "SORTATTRIBUTENAME2",
            "required": false,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "Attribute name for second sort level.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "SORTASCENDING2",
            "required": true,
            "persistent": true,
            "title": "Ascending",
            "remarks": "The report sorting is displayed in ascending order, alpha-numerically.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SORTCATEGORY2",
            "required": false,
            "persistent": false,
            "title": "Category",
            "remarks": "Category for the second sort level.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "SORTREPORTLABEL2",
            "required": false,
            "persistent": false,
            "title": "Report Label",
            "remarks": "Report label for second sort level.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SORTATTRIBUTENAME3",
            "required": false,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "Attribute name for third sort level.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "SORTASCENDING3",
            "required": true,
            "persistent": true,
            "title": "Ascending",
            "remarks": "The report sorting is displayed in ascending order, alpha-numerically.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SORTOBJECTID3",
            "required": false,
            "persistent": true,
            "title": "Object ID",
            "remarks": "Object ID for third sort level.",
            "sameAsAttribute": "OBJECTID",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "SORTCATEGORY3",
            "required": false,
            "persistent": false,
            "title": "Category",
            "remarks": "Category for the third sort level.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "SORTREPORTLABEL3",
            "required": false,
            "persistent": false,
            "title": "Report Label",
            "remarks": "Report label for third sort level.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INEDITMODE",
            "required": true,
            "persistent": false,
            "title": "In Edit Mode",
            "remarks": "Is this ad hoc report definition being edited?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPREPORTNAME",
            "required": false,
            "persistent": false,
            "title": "Temporary Report File Name",
            "remarks": "The file name of the temporary report.",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "REPORTADHOCID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPRESSION_NP",
            "required": false,
            "persistent": false,
            "title": "Expression",
            "remarks": "Enter the expression calculation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPORDER_NP",
            "required": false,
            "persistent": false,
            "title": "Order",
            "remarks": "The position of the expression result on the report.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESC_NP",
            "required": false,
            "persistent": false,
            "title": "Name",
            "remarks": "The name of the expression.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CATEGORY_NP",
            "required": false,
            "persistent": false,
            "title": "Category Name",
            "remarks": "The category of the expression.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETID_NP",
            "required": false,
            "persistent": false,
            "title": "Target ID",
            "remarks": "Target ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTID_NP",
            "required": false,
            "persistent": false,
            "title": "Object ID",
            "remarks": "Unique identifier of the expression's object.",
            "sameAsAttribute": "OBJECTID",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "SUMDESC_NP",
            "required": false,
            "persistent": false,
            "title": "Field",
            "remarks": "The field selected to summarize.",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "SUMATTRNAME_NP",
            "required": false,
            "persistent": false,
            "title": "Attribute",
            "remarks": "The name of the attribute being summarized.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "FUNCTION_NP",
            "required": false,
            "persistent": false,
            "title": "Function",
            "remarks": "The mathematical function performed on the selected field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUMOBJECTID_NP",
            "required": false,
            "persistent": false,
            "title": "Object ID",
            "remarks": "Unique identifier of the calculation's object.",
            "sameAsAttribute": "OBJECTID",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "DATATYPE_NP",
            "required": false,
            "persistent": false,
            "title": "Data Type",
            "remarks": "Specify the data type that the calculation must result in.",
            "sameAsAttribute": "MAXTYPE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "INTERNALFUNCTION_NP",
            "required": false,
            "persistent": false,
            "title": "Function",
            "remarks": "The mathematical function performed on the selected field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXATTRIBUTE",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship from the REPORTADHOC table to the MAXATTRIBUTE table, used to find the available persistent attributes.",
            "whereClause": "persistent=1 or extended=1",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTE_EXCLUDE",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXATTRIBUTE table that filters the attributes excluded from the selected object structure.",
            "whereClause": "(extended=1 or persistent=1) and not exists (select 1 from maxintobjcols where intobjfldtype = 'EXCLUDE' and intobjectname = :reportobject and maxintobjcols.objectname = maxattribute.objectname and maxintobjcols.name = maxattribute.attributename)",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTECALC",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship from the REPORTADHOC table to the MAXATTRIBUTE table for the calc tab.",
            "whereClause": "(persistent=1 or extended=1) and maxtype in ('AMOUNT','BIGINT','DATE','DATETIME','DECIMAL','DURATION','FLOAT','INTEGER','SMALLINT','TIME', 'YORN')",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTECALC_EXCLUDE",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship from the REPORTADHOC table to the MAXATTRIBUTE table for the calc tab.",
            "whereClause": "(extended=1 or persistent=1) and not exists (select 1 from maxintobjcols where intobjfldtype = 'EXCLUDE' and intobjectname = :reportobject and maxintobjcols.objectname = maxattribute.objectname and maxintobjcols.name = maxattribute.attributename) and maxtype in ('AMOUNT','BIGINT','DATE','DATETIME','DECIMAL','DURATION','FLOAT','INTEGER','SMALLINT','TIME', 'YORN')",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJDETAIL",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Relationship from REPORTADHOC to Integration Object Details, used to get the Category value for the Create Report dialog.",
            "whereClause": "objectname = :objectname and intobjectname in (select reportobject from maxapps where app = :appname)",
            "cardinality": null
        },
        {
            "name": "INTOBJ_TREE",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Relationship used to populate the Categories drilldown in the Create Report dialog.",
            "whereClause": "intobjectname=:reportobject",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJECT",
            "target": "MAXINTOBJECT",
            "remarks": "Relationship from the REPORTADHOC table to the MAXINTOBJECT table.",
            "whereClause": "intobjectname=:reportobject",
            "cardinality": null
        },
        {
            "name": "REPORT",
            "target": "REPORT",
            "remarks": "Relationship from the REPORTADHOC table to the REPORT table. The resulting set will contain one object.",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": null
        },
        {
            "name": "REPORTADHOCCALC",
            "target": "REPORTADHOCCALC",
            "remarks": "Relationship from the REPORTADHOC table to the REPORTADHOCCALC table.",
            "whereClause": "REPORTNAME=:REPORTNAME and APPNAME=:APPNAME",
            "cardinality": null
        },
        {
            "name": "REPORTADHOCCALC_TEMP",
            "target": "REPORTADHOCCALC",
            "remarks": "Relationship from REPORTADHOC to REPORTADHOCCALC that returns an empty set.",
            "whereClause": "1=5",
            "cardinality": null
        },
        {
            "name": "REPORTADHOCFIELD",
            "target": "REPORTADHOCFIELD",
            "remarks": "Relationship from the REPORTADHOC table to the REPORTADHOCFIELD table, used to get the fields included in the report.",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": null
        },
        {
            "name": "REPORTADHOCFIELD_TEMP",
            "target": "REPORTADHOCFIELD",
            "remarks": "Relationship from ReportAdHoc to ReportAdHocField. Will return no rows.",
            "whereClause": "1=2",
            "cardinality": null
        },
        {
            "name": "SELECTFIELD",
            "target": "REPORTADHOCFIELD",
            "remarks": "Relationship from ReportAdHoc to ReportAdHocField. Will return no rows.",
            "whereClause": "1=2",
            "cardinality": null
        },
        {
            "name": "REPORTADHOCPARAM",
            "target": "REPORTADHOCPARAM",
            "remarks": "Relationship from THE REPORTADHOC table to the nonpersistent REPORTADHOCPARAM table.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "REPORTADHOCSUM",
            "target": "REPORTADHOCSUM",
            "remarks": "Relationship from the REPORTADHOC table to the REPORTADHOCSUM table.",
            "whereClause": "REPORTNAME=:REPORTNAME and APPNAME=:APPNAME",
            "cardinality": null
        },
        {
            "name": "REPORTADHOCSUM_TEMP",
            "target": "REPORTADHOCSUM",
            "remarks": "Relationship from REPORTADHOC to REPORTADHOCSUM that returns an empty set.",
            "whereClause": "1=5",
            "cardinality": null
        },
        {
            "name": "REPORTAUTHPUBLIC",
            "target": "REPORTAUTH",
            "remarks": "Relationship from REPORTADHOC to REPORTAUTH, used to determine if the report is Public.",
            "whereClause": "reportname=:reportname and appname=:appname and groupname in (select varvalue from maxvars where varname = 'ALLUSERGROUP')",
            "cardinality": null
        },
        {
            "name": "REPORTPARAMETER",
            "target": "REPORTPARAMETER",
            "remarks": "Relationship from the REPORTADHOC table to the nonpersistent REPORTPARAMETER table. ",
            "whereClause": "1=1",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPORTADHOC",
            "source": "REPORT",
            "remarks": "Relationship from Report to ReportAdHoc.",
            "whereClause": "reportname=:reportname and appname=:appname",
            "cardinality": null
        }
    ]
}