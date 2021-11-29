mos = {
    "objectName": "LAYOUT",
    "className": "psdi.app.scconfig.LayoutSet",
    "description": "Layout Of Start Center",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LAYOUTID",
    "primaryKeyColumns": [
        "LAYOUTID"
    ],
    "logicalRelationships": [
        {
            "objectName": "LAYOUT",
            "targetObject": "ACTIONSCFG",
            "parentKeys": "LAYOUTID",
            "targetKeys": "LAYOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the Quick Insert Portlet Configuration to the Start Center Layout",
            "longDescription": null
        },
        {
            "objectName": "LAYOUT",
            "targetObject": "FACONFIG",
            "parentKeys": "LAYOUTID",
            "targetKeys": "LAYOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the Favorite Applications Portlet Configuration to the Start Center Layout",
            "longDescription": null
        },
        {
            "objectName": "LAYOUT",
            "targetObject": "INBXCONFIG",
            "parentKeys": "LAYOUTID",
            "targetKeys": "LAYOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the Inbox/Assignments Portlet Configuration to the Start Center Layout",
            "longDescription": null
        },
        {
            "objectName": "LAYOUT",
            "targetObject": "KPIGCONFIG",
            "parentKeys": "LAYOUTID",
            "targetKeys": "LAYOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the KPI Graph Portlet Configuration to the Star Center Layout",
            "longDescription": null
        },
        {
            "objectName": "LAYOUT",
            "targetObject": "KPILCONFIG",
            "parentKeys": "LAYOUTID",
            "targetKeys": "LAYOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the KPI List Portlet Configuration to the Start Center Layout",
            "longDescription": null
        },
        {
            "objectName": "LAYOUT",
            "targetObject": "PORTLETDISPLAY",
            "parentKeys": "LAYOUTID",
            "targetKeys": "LAYOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the Portlet Master Table to the Start Center Layout",
            "longDescription": null
        },
        {
            "objectName": "LAYOUT",
            "targetObject": "REPORTLISTCFG",
            "parentKeys": "LAYOUTID",
            "targetKeys": "LAYOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the Report List Portlet Configuration to the Start Center Layout",
            "longDescription": null
        },
        {
            "objectName": "LAYOUT",
            "targetObject": "RSCONFIG",
            "parentKeys": "LAYOUTID",
            "targetKeys": "LAYOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the Result Set Portlet Configuration to the Start Center Layout",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "LAYOUT",
            "parentKeys": "APP",
            "targetKeys": "QUERYAPP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "LAYOUT",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LAYOUT",
            "parentKeys": "PERSONID",
            "targetKeys": "QUERYOWNER",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 131",
            "longDescription": null
        },
        {
            "objectName": "PORTLET",
            "targetObject": "LAYOUT",
            "parentKeys": "PORTLETID",
            "targetKeys": "PORTLETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Portlet types available for the Start Center",
            "longDescription": null
        },
        {
            "objectName": "QUERY",
            "targetObject": "LAYOUT",
            "parentKeys": "APP, OWNER, CLAUSENAME",
            "targetKeys": "QUERYAPP, QUERYOWNER, QUERYCLAUSENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application Queries that are used on Portlets",
            "longDescription": null
        },
        {
            "objectName": "SCCONFIG",
            "targetObject": "LAYOUT",
            "parentKeys": "SCCONFIGID",
            "targetKeys": "SCCONFIGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Layout of the Portlets in a Start Center",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LAYOUTID",
            "required": true,
            "persistent": true,
            "title": "Layout",
            "remarks": "Layout Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PORTLETID",
            "required": false,
            "persistent": true,
            "title": "Portlet Id",
            "remarks": "Portlet Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Display Name",
            "remarks": "The user-entered text that appears as the title for this portlet.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORDERNUM",
            "required": false,
            "persistent": true,
            "title": "Order",
            "remarks": "The order of the portlet in the column.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COLUMNNUM",
            "required": false,
            "persistent": true,
            "title": "Column",
            "remarks": "Left / Right Column Flag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCCONFIGID",
            "required": false,
            "persistent": true,
            "title": "SCCONFIGID",
            "remarks": "Start Center Id",
            "sameAsAttribute": "SCCONFIGID",
            "sameAsObject": "SCCONFIG"
        },
        {
            "attributeName": "MINORMAX",
            "required": true,
            "persistent": true,
            "title": "Portlet State",
            "remarks": "Minimised or Maximized",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHARTTYPE",
            "required": false,
            "persistent": true,
            "title": "Chart Type",
            "remarks": "Select the type of chart to display; bar or pie.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWCHART",
            "required": true,
            "persistent": true,
            "title": "Show Chart by Default",
            "remarks": "Check this box to display the chart or list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RSCONDITIONATTR",
            "required": false,
            "persistent": false,
            "title": "Condition Attribute",
            "remarks": "The field that is examined by the expression. If the field meets the criterion of the condition, the row of the attribute in the portlet is colored.",
            "sameAsAttribute": "QUERYCOLUMN",
            "sameAsObject": "RSCONFIG"
        },
        {
            "attributeName": "RSGRAPHATTR",
            "required": false,
            "persistent": false,
            "title": "Display By",
            "remarks": "The field that is used to group the data in the chart.",
            "sameAsAttribute": "QUERYCOLUMN",
            "sameAsObject": "RSCONFIG"
        },
        {
            "attributeName": "ROWSTODISPLAY",
            "required": false,
            "persistent": true,
            "title": "Rows To Display",
            "remarks": "The number of rows that are displayed on each page of the table in the portlet.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUERYNAME",
            "required": false,
            "persistent": false,
            "title": "Current Query",
            "remarks": "Query Name Used in Result Set Portlet",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "QUERY"
        },
        {
            "attributeName": "CONTENTUID",
            "required": true,
            "persistent": true,
            "title": "CONTENTUID",
            "remarks": "Content Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LEGENDATTRIBUTETITLE",
            "required": false,
            "persistent": true,
            "title": "Legend Attribute Title",
            "remarks": "The title that you choose for the View By attribute on the chart legend in the portlet. For example, you might want to view work orders by priority.",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "LEGENDVALUETITLE",
            "required": false,
            "persistent": true,
            "title": "Legend Value Title",
            "remarks": "The title that you choose for the Count attribute on the chart legend. For example, the count for priority 1 work orders might be 16.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUERYCLAUSENAME",
            "required": false,
            "persistent": true,
            "title": "Query Name",
            "remarks": "The name of the query that provides the data for the result set.",
            "sameAsAttribute": "CLAUSENAME",
            "sameAsObject": "QUERY"
        },
        {
            "attributeName": "QUERYAPP",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "Name of the application on which query was built",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "QUERYOWNER",
            "required": false,
            "persistent": true,
            "title": "Query Owner",
            "remarks": "Username of the person who created the query",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object Structure Name",
            "remarks": "Description of object. Used only with Reporting Object Structures.",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "INTOBJECTDESC",
            "required": false,
            "persistent": false,
            "title": "Object Structure",
            "remarks": "The description of the object structure. When an object is associated with multiple reporting object structures, you must specify an object structure for the portlet. This field is read-only if the object is associated with only one reporting object structure.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ACTIONSCFG",
            "target": "ACTIONSCFG",
            "remarks": "Relationship to the ACTIONSCFG table, used to find information Quick Insert Portlet. Resulting set will contain one object.",
            "whereClause": "layoutid=:layoutid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FACONFIG",
            "target": "FACONFIG",
            "remarks": "Relationship between FACONFIG Object and LAYOUT object. Used to return favorite applications portlet configuration for a given portlet.",
            "whereClause": "layoutid = :layoutid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INBXCONFIG",
            "target": "INBXCONFIG",
            "remarks": "Relationship between INBXCONFIG Object and LAYOUT object. Used to return Inbox portlet configuration for a given portlet.",
            "whereClause": "layoutid = :layoutid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "KPIGRAPHCONFIG",
            "target": "KPIGCONFIG",
            "remarks": "Relationship between KPIGCONFIG Object and LAYOUT object. Used to return kpi graph portlet configuration for a given portlet.",
            "whereClause": "layoutid = :layoutid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "KPILISTCONFIG",
            "target": "KPILCONFIG",
            "remarks": "Relationship between KPILCONFIG Object and LAYOUT object. Used to return KPI List Portlet portlet configuration for a given portlet.",
            "whereClause": "layoutid = :layoutid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relationship from LAYOUT to MAXAPPS",
            "whereClause": ":queryapp=app",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTE",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship from LAYOUT to MAXATTRIBUTE",
            "whereClause": "1=2",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJDETAIL",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Relationship from LAYOUT to MAXINTOBJDETAIL",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJECT",
            "target": "MAXINTOBJECT",
            "remarks": "Relationship from LAYOUT to MAXATTRIBUTE",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        },
        {
            "name": "PORTLET",
            "target": "PORTLET",
            "remarks": "Relationship between PORTLET Object and LAYOUT object. Used to return portlet information for a given portlet.",
            "whereClause": "portletid = :portletid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PORTLET_DISPLAY",
            "target": "PORTLETDISPLAY",
            "remarks": "Relationship to PORTLETDISPLAY table. The result set will contain zero or more objects",
            "whereClause": "layoutid =:layoutid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUERY",
            "target": "QUERY",
            "remarks": "Relationship to query table, used to find query details of the query bound to this portlet record. It will contain one object.",
            "whereClause": "clausename=:queryclausename and owner=:queryowner and app=:queryapp",
            "cardinality": null
        },
        {
            "name": "REPORTLISTCFG",
            "target": "REPORTLISTCFG",
            "remarks": "Relationship between REPORTLISTCFG Object and LAYOUT object. Used to return Report List Portlet configuration for a given portlet.",
            "whereClause": "layoutid = :layoutid",
            "cardinality": null
        },
        {
            "name": "RSCONFIG",
            "target": "RSCONFIG",
            "remarks": "Relationship between PORTLET Object and LAYOUT object. Used to return result set portlet configuration for a given portlet.",
            "whereClause": "layoutid = :layoutid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RSCONFIGSELECT",
            "target": "RSCONFIGSELECT",
            "remarks": "Relationship from LAYOUT to Selected Attributes",
            "whereClause": "",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "LAYOUTALL",
            "source": "SCCONFIG",
            "remarks": "Relationship between SCCONFIG Object and Layout. Used to return portlets configuration in a start center",
            "whereClause": "scconfigid = :scconfigid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LAYOUTLEFT",
            "source": "SCCONFIG",
            "remarks": "Relationship between SCCONFIG Object and Layout. Used to return portlets configuration on right column  in a start center",
            "whereClause": "scconfigid = :scconfigid and columnnum = 0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LAYOUTRIGHT",
            "source": "SCCONFIG",
            "remarks": "Relationship between SCCONFIG Object and Layout. Used to return portlets configuration on left column  in a start center",
            "whereClause": "scconfigid = :scconfigid and columnnum = 1",
            "cardinality": "UNDEFINED"
        }
    ]
}