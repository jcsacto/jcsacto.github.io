mos = {
    "objectName": "KPIMAIN",
    "className": "psdi.app.kpi.KPISet",
    "description": "Main KPI Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "KPIMAINID",
    "primaryKeyColumns": [
        "KPINAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "KPIMAIN",
            "targetObject": "KPIAUTH",
            "parentKeys": "KPINAME",
            "targetKeys": "KPINAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "KPI",
            "longDescription": null
        },
        {
            "objectName": "KPIMAIN",
            "targetObject": "KPIGCONFIG",
            "parentKeys": "KPINAME",
            "targetKeys": "KPINAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the KPI Graph Portlet to the KPI",
            "longDescription": null
        },
        {
            "objectName": "KPIMAIN",
            "targetObject": "KPILCONFIG",
            "parentKeys": "KPINAME",
            "targetKeys": "KPINAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the KPI List Portlet to the KPI",
            "longDescription": null
        },
        {
            "objectName": "KPIMAIN",
            "targetObject": "KPISCHEDULE",
            "parentKeys": "KPINAME",
            "targetKeys": "KPINAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "KPI",
            "longDescription": null
        },
        {
            "objectName": "KPIMAIN",
            "targetObject": "SLAKPI",
            "parentKeys": "KPINAME",
            "targetKeys": "KPINAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Between KPI and SLA",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
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
            "objectName": "KPITEMPLATEMAIN",
            "targetObject": "KPIMAIN",
            "parentKeys": "KPITEMPLATENUM, KPITEMPLATEMAINNUM",
            "targetKeys": "KPITEMPLATENUM, KPITEMPLATEMAINNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "KPI Template",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "KPIMAIN",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "KPIMAIN",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "KPINAME",
            "required": true,
            "persistent": true,
            "title": "KPI Name",
            "remarks": "The name of the KPI.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "A clear description of the KPI.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KPIVALUE",
            "required": false,
            "persistent": true,
            "title": "Current Value",
            "remarks": "The current value of the KPI.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KPIDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "The date the KPI was created",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CAUTIONMIN",
            "required": true,
            "persistent": true,
            "title": "Caution At",
            "remarks": "The value where the indicators would change to a user-set color to indicate that the result of the KPI is in a caution stage. Note: If the Caution At value is greater than the Alert At value, the direction of the KPI will change to indicate that a higher number is more ideal than a lower number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CAUTIONMAX",
            "required": true,
            "persistent": true,
            "title": "Alert At",
            "remarks": "The value where the indicators would change to a user-set color to indicate that the result of the KPI is in an alert stage.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URL",
            "required": false,
            "persistent": true,
            "title": "URL",
            "remarks": "URL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FORMAT",
            "required": true,
            "persistent": true,
            "title": "Calculation Type",
            "remarks": "Indicates whether the KPI is decimal or percentage based.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGET",
            "required": true,
            "persistent": true,
            "title": "Target",
            "remarks": "The target, or desired, value for the KPI.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELECTSTMT",
            "required": true,
            "persistent": true,
            "title": "Select",
            "remarks": "Enter a statement about what information you want the KPI to select and from what tables. For example: select avg(actfinish-reportdate) from workorder. A Select statement is mandatory.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLAUSE",
            "required": false,
            "persistent": true,
            "title": "Where",
            "remarks": "Enter a statement that sets up any conditions that must be met for the Select statement to be carried out. For example: where worktype = EM and istask=0. A Where statement is not mandatory.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "ISPUBLIC",
            "required": true,
            "persistent": true,
            "title": "Is Public",
            "remarks": "Give everyone access to the KPI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "Application on which this KPI is based on",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTNAME",
            "required": false,
            "persistent": true,
            "title": "Link to Report",
            "remarks": "Select a report to link to this KPI so that you can drill down into the KPI for more information.",
            "sameAsAttribute": "REPORTNAME",
            "sameAsObject": "REPORT"
        },
        {
            "attributeName": "KPITEXTFORMAT",
            "required": false,
            "persistent": true,
            "title": "KPI Text Format",
            "remarks": "KPI Text Format",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTKPIVALUE",
            "required": false,
            "persistent": true,
            "title": "Last KPI Value",
            "remarks": "Last KPI Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REALTIME",
            "required": true,
            "persistent": true,
            "title": "Is Active",
            "remarks": "Used for flagging if this KPI is active or not. If not active then it will not be picked up by KPICron task",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINKTO",
            "required": false,
            "persistent": true,
            "title": "Link to KPI",
            "remarks": "Select another KPI to link this one to.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KPIMAINID",
            "required": true,
            "persistent": true,
            "title": "KPI Unique Id",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "DESCRIPTION_LONGDESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECORDTIME",
            "required": false,
            "persistent": true,
            "title": "Record Time",
            "remarks": "The period elapsed after which KPI will be recorded",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
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
            "attributeName": "REPORTNUM",
            "required": false,
            "persistent": true,
            "title": "Report Number",
            "remarks": "Report Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTAPPNAME",
            "required": false,
            "persistent": true,
            "title": "Report Application",
            "remarks": "Name of the application for the report",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTUPDATED",
            "required": false,
            "persistent": true,
            "title": "Last Updated",
            "remarks": "Last Updated Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KPITEMPLATENUM",
            "required": false,
            "persistent": true,
            "title": "Template",
            "remarks": "Template Name for the related KPI Template that generated this KPI",
            "sameAsAttribute": "KPITEMPLATENUM",
            "sameAsObject": "KPITEMPLATE"
        },
        {
            "attributeName": "KPITEMPLATEMAINNUM",
            "required": false,
            "persistent": true,
            "title": "KPI",
            "remarks": "Unique KPI for the related KPI instance that generated this KPI ",
            "sameAsAttribute": "KPITEMPLATEMAINNUM",
            "sameAsObject": "KPITEMPLATEMAIN"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMMLOG",
            "target": "COMMLOG",
            "remarks": "Relationship to the COMMLOG table used to get all communication log entries for a kpi",
            "whereClause": "ownerid=:kpimainid and ownertable='KPIMAIN'",
            "cardinality": null
        },
        {
            "name": "KPIAUTH",
            "target": "KPIAUTH",
            "remarks": "Relationship from the KPIMAIN table to the KPISchedule table",
            "whereClause": "kpiname=:kpiname",
            "cardinality": null
        },
        {
            "name": "KPI_GRAPH",
            "target": "KPIGCONFIG",
            "remarks": "Relationship between KPIMAIN and KPIGCONFIG table",
            "whereClause": "kpiname=:kpiname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "KPI_HISTORY",
            "target": "KPIHISTORY",
            "remarks": "Relationship between KPIMAIN and KPIHISTORY table",
            "whereClause": "kpimainid=:kpimainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "KPI_LIST",
            "target": "KPILCONFIG",
            "remarks": "Relationship between KPIMAIN and KPILCONFIG table",
            "whereClause": "kpiname=:kpiname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "KPI_KPI",
            "target": "KPIMAIN",
            "remarks": "Relationship to the KPI record, used to find the KPI record that is linked to this KPI.",
            "whereClause": "kpiname=:linkto",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "KPISCHEDULE",
            "target": "KPISCHEDULE",
            "remarks": "Relationship from the KPIMAIN table to the KPISchedule table",
            "whereClause": "kpiname=:kpiname",
            "cardinality": null
        },
        {
            "name": "KPI_TREND",
            "target": "KPITRENDCFG",
            "remarks": "Relationship to the KPITRENDCFG, used to find trend settings for a given KPI. The resulting set will contain zero or one object",
            "whereClause": "kpimainid=:kpimainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from KPIMAIN.",
            "whereClause": "ldkey=:kpimainid and ldownertable = 'KPIMAIN'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "KPI_REPORT",
            "target": "REPORT",
            "remarks": "Relationship between REPORT and KPIMAIN tables",
            "whereClause": "reportname=:reportname and appname=:reportappname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "KPIMAIN",
            "source": "KPIGCONFIG",
            "remarks": "Relationship of KPIGConfig Object with KPI Object. Used to return all KPIs in a KPIGraph Portlet Configuration",
            "whereClause": "kpiname = :kpiname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "KPIMAIN",
            "source": "KPILCONFIG",
            "remarks": "Relationship of KPILConfig Object with KPI Object. Used to return all KPIs in a KPI ListPortlet Configuration",
            "whereClause": "kpiname = :kpiname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "KPI_KPI",
            "source": "KPIMAIN",
            "remarks": "Relationship to the KPI record, used to find the KPI record that is linked to this KPI.",
            "whereClause": "kpiname=:linkto",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLKPIS",
            "source": "KPITEMPLATE",
            "remarks": "Relationship for KPIMAIN records that were created using the KPITEMPLATE",
            "whereClause": "kpitemplatenum=:kpitemplatenum",
            "cardinality": null
        },
        {
            "name": "KPITEMPLATES",
            "source": "KPITEMPLATE",
            "remarks": "Relationship for KPIMAIN records that were created using the KPITEMPLATE",
            "whereClause": "kpitemplatenum=:kpitemplatenum and kpitemplatemainnum is not null",
            "cardinality": null
        },
        {
            "name": "KPIINSTANCE",
            "source": "KPITEMPLATEMAIN",
            "remarks": "Relationship for KPIMAIN records for the given KPI Instance",
            "whereClause": "kpitemplatenum=:kpitemplatenum and kpitemplatemainnum=:kpitemplatemainnum",
            "cardinality": null
        },
        {
            "name": "KPIMAIN",
            "source": "SLAKPI",
            "remarks": "Define slakpi to kpimain relationship",
            "whereClause": "kpiname = :kpiname",
            "cardinality": "UNDEFINED"
        }
    ]
}