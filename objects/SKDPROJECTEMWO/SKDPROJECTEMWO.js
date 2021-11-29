mos = {
    "objectName": "SKDPROJECTEMWO",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDEmergencyWoSet",
    "description": "Emergency Work Orders",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDPROJECTEMWOID",
    "primaryKeyColumns": [
        "PROJECTNAME",
        "SCENARIONAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "EMAIL",
            "targetObject": "SKDPROJECTEMWO",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "TOEMAILADDR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Email where to send Emergency Work Notifications",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECTEMWO",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Change By",
            "longDescription": null
        },
        {
            "objectName": "SKDPROJECT",
            "targetObject": "SKDPROJECTEMWO",
            "parentKeys": "NAME, SCENARIONAME",
            "targetKeys": "PROJECTNAME, SCENARIONAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Emergency Work Orders",
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
            "attributeName": "SCHEDULETYPE",
            "required": true,
            "persistent": true,
            "title": "Schedule Type",
            "remarks": "Represents the type of schedule for adding emergency work. Choose Immediate to execute now. Choose At this Time to execute at a point in the future. Choose recurring to continuously execute at a regularly specified time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULE",
            "required": false,
            "persistent": true,
            "title": "Recurring",
            "remarks": "Select the frequency with which the emergency work query will run.",
            "sameAsAttribute": "PATTERN",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "WHERECLAUSE",
            "required": true,
            "persistent": true,
            "title": "Where Condition",
            "remarks": "The criteria used to define emergency work.",
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
            "attributeName": "TOEMAILADDR",
            "required": false,
            "persistent": true,
            "title": "E-Mail Address Notification",
            "remarks": "The email address of the person who receives the emergency work notification.",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "EXPOBJECT",
            "required": false,
            "persistent": false,
            "title": "expobject",
            "remarks": "Expression builder Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ASYNC",
            "required": true,
            "persistent": true,
            "title": "Run in Background Mode",
            "remarks": "Indicates whether to run optimization in the background.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ONCEDATETIME",
            "required": false,
            "persistent": true,
            "title": "Scheduled date/time for emergency work query",
            "remarks": "The date and time that the emergency query will run and the work will be assigned.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDREFRESH",
            "required": true,
            "persistent": true,
            "title": "Refresh Work List",
            "remarks": "Select the check box to refresh the work list before running the emergency work query.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOASSIGN",
            "required": true,
            "persistent": true,
            "title": "Automatically assign",
            "remarks": "Select the check box to assign emergency work to available labor or crew resources automatically. Clear the check box to see a list of available resources to assign the work to.",
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
            "title": "Recurring time",
            "remarks": "Time for scheduled reports.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "SKDPROJECTEMWOID",
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
            "remarks": "Relationship from SKDPROJECTEMWO to ALNDOMAIN.",
            "whereClause": "domainid='REPORTSCHEDTYPE' and value=:scheduletype",
            "cardinality": null
        },
        {
            "name": "DATESELECTOR",
            "target": "DATESELECTOR",
            "remarks": "Date selector pattern for Emergency WOs Cron Task",
            "whereClause": "pattern = :schedule",
            "cardinality": null
        },
        {
            "name": "EXPBUILDER",
            "target": "EXPBUILDER",
            "remarks": "Relationship for EXPBUILD",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "WFEXPBUILDER",
            "target": "WFEXPBUILDER",
            "remarks": "Relationship for WFEXPBUILDER",
            "whereClause": "1=1",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "SKDPROJECTEMWO",
            "source": "SKDPROJECT",
            "remarks": "Project Emergency Work Orders",
            "whereClause": "projectname=:name and scenarioname=:scenarioname",
            "cardinality": null
        }
    ]
}