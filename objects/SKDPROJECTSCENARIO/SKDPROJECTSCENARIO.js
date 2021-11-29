mos = {
    "objectName": "SKDPROJECTSCENARIO",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDProjectScenarioSet",
    "description": "Project Scenario",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDPROJECTSCENARIOID",
    "primaryKeyColumns": [
        "PROJECTNAME",
        "SCENARIONAME",
        "OPTSCENARIO"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "EMAIL",
            "targetObject": "SKDPROJECTSCENARIO",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "TOEMAILADDR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Where to email process notifications",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDPROJECTSCENARIO",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "INPUTOBJ",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Input Parameter MBO",
            "longDescription": null
        },
        {
            "objectName": "MXODMAPP",
            "targetObject": "SKDPROJECTSCENARIO",
            "parentKeys": "ODMAPPNAME",
            "targetKeys": "OPTSCENARIO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "ODM Application",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECTSCENARIO",
            "parentKeys": "PERSONID",
            "targetKeys": "LASTRUNUSER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECTSCENARIO",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Change By",
            "longDescription": null
        },
        {
            "objectName": "SKDPROJECT",
            "targetObject": "SKDPROJECTSCENARIO",
            "parentKeys": "NAME, SCENARIONAME",
            "targetKeys": "PROJECTNAME, SCENARIONAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Scenario Options",
            "longDescription": null
        },
        {
            "objectName": "SKDRESLEVELPARAM",
            "targetObject": "SKDPROJECTSCENARIO",
            "parentKeys": "INPUTNAME",
            "targetKeys": "INPUTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "ODM Input Parameters",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PROJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Name",
            "remarks": "Identifies name of the project.",
            "sameAsAttribute": "NAME",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "SCENARIONAME",
            "required": false,
            "persistent": true,
            "title": "Scenario",
            "remarks": "Identifies scenario name of the project.",
            "sameAsAttribute": "SCENARIONAME",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "OPTSCENARIO",
            "required": true,
            "persistent": true,
            "title": "ODM App Name",
            "remarks": "Identifies name of the ODM application.",
            "sameAsAttribute": "ODMAPPNAME",
            "sameAsObject": "MXODMAPP"
        },
        {
            "attributeName": "INPUTOBJ",
            "required": true,
            "persistent": true,
            "title": "Input parameter object name",
            "remarks": "Indicates the input parameter object name of the ODM application.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "INPUTNAME",
            "required": true,
            "persistent": true,
            "title": "Input parameter name",
            "remarks": "Indicates the input parameter  name of the ODM application.",
            "sameAsAttribute": "INPUTNAME",
            "sameAsObject": "SKDRESLEVELPARAM"
        },
        {
            "attributeName": "SKDREFRESH",
            "required": true,
            "persistent": true,
            "title": "Refresh Project Data",
            "remarks": "Select the check box to refresh project data before the process is run.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASYNC",
            "required": true,
            "persistent": true,
            "title": "Run in Background Mode",
            "remarks": "Name of the scenario that was used to get this result. If no scenario exists, the schedule name is used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INPUTOBJID",
            "required": true,
            "persistent": true,
            "title": "Input parameter object id",
            "remarks": "Indicates the objectid of the input parameter of the ODM application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOEMAILADDR",
            "required": false,
            "persistent": true,
            "title": "E-Mail Address Notification",
            "remarks": "The email address of the person who receives the process notification.",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "LASTRUNDATE",
            "required": false,
            "persistent": true,
            "title": "Last Run Date",
            "remarks": "Date when the process was last run.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RUNSTATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Current status of the process.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTRUNUSER",
            "required": false,
            "persistent": true,
            "title": "Run By",
            "remarks": "User who last ran the process.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "USETEMPLATE",
            "required": true,
            "persistent": true,
            "title": "Use template",
            "remarks": "Use template is false, create a copy of template, user can modify.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULETYPE",
            "required": true,
            "persistent": true,
            "title": "Schedule Type",
            "remarks": "Represents the type of schedule. Choose Immediate to run the process now. Choose At this Time to run the process at a point in the future. Choose Recurring to continuously run the process at a regularly specified time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ONCEDATETIME",
            "required": false,
            "persistent": true,
            "title": "Scheduled Date/Time for Process",
            "remarks": "The date and time that the process will run.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULEDISP",
            "required": false,
            "persistent": true,
            "title": "Schedule Selected",
            "remarks": "This shows that the field is selected.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULEPERIOD",
            "required": false,
            "persistent": true,
            "title": "Recurring",
            "remarks": "Schedule period for reporting.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECURRINGTIME",
            "required": false,
            "persistent": true,
            "title": "Recurring Time",
            "remarks": "Frequency with which optimization will run.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULE",
            "required": false,
            "persistent": true,
            "title": "Schedule",
            "remarks": "Select the frequency with which the optimization will run.",
            "sameAsAttribute": "PATTERN",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Last Modified By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Last Modified Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDPROJECTSCENARIOID",
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
            "name": "ALNDOMAIN",
            "target": "ALNDOMAIN",
            "remarks": "Relationship from SKDPROJECTSCENARIO to ALNDOMAIN.",
            "whereClause": "domainid='REPORTSCHEDTYPE' and value=:scheduletype",
            "cardinality": null
        },
        {
            "name": "DATESELECTOR",
            "target": "DATESELECTOR",
            "remarks": "Date selector pattern for Optimization Cron Task",
            "whereClause": "pattern = :schedule",
            "cardinality": null
        },
        {
            "name": "CAPACITYPLANPARAM",
            "target": "SKDCAPACITYPLANPARAM",
            "remarks": "Capacity Planning Parameter.",
            "whereClause": "skdcapacityplanparamid=:inputobjid ",
            "cardinality": null
        },
        {
            "name": "CAPPLANPARAM",
            "target": "SKDCAPACITYPLANPARAM",
            "remarks": "Capacity Planning Parameter",
            "whereClause": "skdcapacityplanparamid=:inputobjid",
            "cardinality": null
        },
        {
            "name": "LABORMODPARAM",
            "target": "SKDLABORMODPARAM",
            "remarks": "Labor assignment model Parameters",
            "whereClause": "skdlabormodparamid=:inputobjid",
            "cardinality": null
        },
        {
            "name": "ODMAPP",
            "target": "SKDODMAPP",
            "remarks": "ODM Application",
            "whereClause": "optscenario=:optscenario",
            "cardinality": null
        },
        {
            "name": "RESLEVELPARAM",
            "target": "SKDRESLEVELPARAM",
            "remarks": "Resource Leveling Parameter",
            "whereClause": "skdreslevelparamid=:inputobjid",
            "cardinality": null
        },
        {
            "name": "SPATIALPARAM",
            "target": "SKDSPATIALPARAM",
            "remarks": "Spatial scheduling model parameters",
            "whereClause": "skdspatialparamid=:inputobjid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "SKDPROJECTSCENARIO",
            "source": "SKDCAPACITYPLANPARAM",
            "remarks": "Relationship to the SKDProjectScenerio table, used to find all project scenerio's using capacity planning template. ",
            "whereClause": "inputobjid =:skdcapacityplanparamid",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTSCENARIO",
            "source": "SKDLABORMODPARAM",
            "remarks": "Relationship to the SKDProjectScenerio table, used to find all project scenerio's using labor assignment template. ",
            "whereClause": "inputobjid =:skdlabormodparamid",
            "cardinality": null
        },
        {
            "name": "PROJECTSCENARIO",
            "source": "SKDPROJECT",
            "remarks": "Project Scenario",
            "whereClause": "projectname=:name and scenarioname=:scenarioname",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTSCENARIO",
            "source": "SKDRESLEVELPARAM",
            "remarks": "Relationship to the SKDProjectScenerio table, used to find all project scenerio's using resource leveling template.",
            "whereClause": "inputobjid =:skdreslevelparamid",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTSCENARIO",
            "source": "SKDSPATIALPARAM",
            "remarks": "Relationship to the SKDProjectScenerio table, used to find all project scenerio's using spatial scheduling template. ",
            "whereClause": "inputobjid =:skdspatialparamid",
            "cardinality": null
        }
    ]
}