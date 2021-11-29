mos = {
    "objectName": "SKDPROJECT",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDProjectSet",
    "description": "Project",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDPROJECTID",
    "primaryKeyColumns": [
        "NAME",
        "SCENARIONAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "SKDPROJECT",
            "targetObject": "SKDACTIVITY",
            "parentKeys": "SKDPROJECTID",
            "targetKeys": "SKDPROJECTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Project Activities",
            "longDescription": null
        },
        {
            "objectName": "SKDPROJECT",
            "targetObject": "SKDGVPREF",
            "parentKeys": "NAME",
            "targetKeys": "PROJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Gantt Viewer Preferences",
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
            "objectName": "SKDPROJECT",
            "targetObject": "SKDPROJECTSHIFTS",
            "parentKeys": "NAME",
            "targetKeys": "NAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Project Shifts",
            "longDescription": null
        },
        {
            "objectName": "SKDPROJECT",
            "targetObject": "SKDQUERY",
            "parentKeys": "NAME",
            "targetKeys": "NAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Project Queries",
            "longDescription": null
        },
        {
            "objectName": "SKDPROJECT",
            "targetObject": "SKDUSERPROP",
            "parentKeys": "NAME",
            "targetKeys": "PROJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User Properties for Project",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CALENDAR",
            "targetObject": "SKDPROJECT",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendar for Gantt View",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "SKDPROJECT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 224",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETSITEID, MNTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 225",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 226",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, MNTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 228",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 229",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "MNTLOCATIONSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 230",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "MNTLOCATIONSITEID, MNTLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MNT Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "MNTLOCATIONSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 232",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 233",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, MNTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 234",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Location",
            "longDescription": null
        },
        {
            "objectName": "LOCSYSTEM",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, SYSTEMID",
            "targetKeys": "ASSETSITEID, SYSTEMID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "LOCSYSTEM",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, SYSTEMID",
            "targetKeys": "ENDLOCSITEID, SYSTEMID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "LOCSYSTEM",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, SYSTEMID",
            "targetKeys": "MNTLOCATIONSITEID, SYSTEMID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "LOCSYSTEM",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, SYSTEMID",
            "targetKeys": "STARTLOCSITEID, SYSTEMID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "MAXASYNCJOB",
            "targetObject": "SKDPROJECT",
            "parentKeys": "JOBNUM",
            "targetKeys": "JOBNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asynchronous Job",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SKDPROJECT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECT",
            "parentKeys": "PERSONID",
            "targetKeys": "COMMITBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Committed By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECT",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECT",
            "parentKeys": "PERSONID",
            "targetKeys": "SAVEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Saved By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECT",
            "parentKeys": "PERSONID",
            "targetKeys": "PUBLISHBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Publish By",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID",
            "targetKeys": "ENDLOCSITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "End",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID",
            "targetKeys": "STARTLOCSITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 281",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID",
            "targetKeys": "ASSETSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID",
            "targetKeys": "MNTLOCATIONSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MNT Site",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NAME",
            "required": true,
            "persistent": true,
            "title": "Key Name",
            "remarks": "Identifies the schedule or work list. This value must be unique, and consists of a group of work records and their required resources. The record can be viewed and edited in the Gantt View tab.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Schedule Description",
            "remarks": "Describes the schedule or work list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMITTIME",
            "required": false,
            "persistent": true,
            "title": "Last Committed Time",
            "remarks": "The date and time when the schedule was last used to update the work records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INITIALIZED",
            "required": true,
            "persistent": true,
            "title": "Initialized?",
            "remarks": "Has the data been initialized?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SAVETIME",
            "required": false,
            "persistent": true,
            "title": "Last Saved Time",
            "remarks": "The date and time when the schedule or work list was last saved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDPROJECTID",
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
            "title": "Project Description Long description",
            "remarks": "Long Description for Project Description",
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
        },
        {
            "attributeName": "CALNUM",
            "required": false,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Calendar that will be used in the Gantt view. This is used to determine work days versus non-work days.",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "SHIFTNUM",
            "required": false,
            "persistent": false,
            "title": "Shift",
            "remarks": "Shift that will be used in the Gantt view. This is used to determine work hours on a daily basis.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CREATEBY",
            "required": false,
            "persistent": true,
            "title": "Created By",
            "remarks": "The name of the person who created the schedule or work list.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "The date and time when the schedule or work list was created.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISPUBLIC",
            "required": true,
            "persistent": true,
            "title": "Public",
            "remarks": "Make a schedule or work list public if you want other users to be able to see it. Any records that the user does not have access to will not appear on the Gantt View tab, and dependencies between work records might be broken if changes are made to the schedule dates.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "The name of the person who modified the schedule.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "The date and time when the schedule was modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SAVEBY",
            "required": false,
            "persistent": true,
            "title": "Last Saved By",
            "remarks": "Last Saved By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "COMMITBY",
            "required": false,
            "persistent": true,
            "title": "Last Committed By",
            "remarks": "Last Committed By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "The date on which the schedule should start. In the Scheduler application, CPM will not schedule any work earlier than the specified date. This date will also assign Schedule Dates to work records coming in with neither Schedule nor Target Dates of their own. In the Graphical Assignment application, the date when the route creation starts.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGSCHEDULE",
            "required": false,
            "persistent": false,
            "title": "Original Schedule",
            "remarks": "Non-persistent column to store the original schedule for the duplicated schedule.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DUPESCHEDULE",
            "required": true,
            "persistent": false,
            "title": "Duplicate Schedule",
            "remarks": "This flag is true, if we are on 'Duplicate Schedule' action.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOREFRESHGVIEW",
            "required": true,
            "persistent": true,
            "title": "Refresh When Opening Gantt View",
            "remarks": "Indicates if the schedule or work list will be refreshed every time the Gantt view is opened. If this check box is selected, the queries used to gather the schedule data will be run every time the Gantt view is opened, and new or updated work record data will appear. If this check box is cleared, data will only be refreshed upon clicking the Refresh Schedule button in the Gantt view.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDACTIVITYQBE",
            "required": false,
            "persistent": false,
            "title": "SKDACTIVITYQBE",
            "remarks": "SKDACTIVITYQBE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EDITCONSTRAINTVALUES",
            "required": false,
            "persistent": false,
            "title": "Edit Constraint Values",
            "remarks": "Non-persistent attribute for passing and storing changed values of a constraint",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRESERVESTARTDATE",
            "required": true,
            "persistent": true,
            "title": "Preserve Schedule Start Dates",
            "remarks": "Indicates if the start date of tasks included in the schedule will be preserved. If selected, CPM will not change the start date of tasks that do not have any predecessor constraints defined. If there are constraints defined, CPM will adjust the start date depending on the constraints.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRESERVESKDDATA",
            "required": true,
            "persistent": true,
            "title": "Preserve Existing Records On Refresh",
            "remarks": "Indicates if existing records will always be visible in the Gantt view, even after changes to those records occur. For example, records that are closed or cancelled after initially being included in the Gantt view will not be deleted, even after the view is refreshed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JOBNUM",
            "required": false,
            "persistent": true,
            "title": "Job Number",
            "remarks": "Job number of asynchronous job",
            "sameAsAttribute": "JOBNUM",
            "sameAsObject": "MAXASYNCJOB"
        },
        {
            "attributeName": "COMMITINPRG",
            "required": false,
            "persistent": true,
            "title": "Asynchronous commit job in progress",
            "remarks": "Asynchronous commit job is in progress",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEWITH",
            "required": true,
            "persistent": true,
            "title": "Use for",
            "remarks": "Use for project scheduler or assignment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHAREPROJECT",
            "required": true,
            "persistent": true,
            "title": "Can copy project in Assignment",
            "remarks": "Project can be copied in assignment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDCOSTCALDATE",
            "required": false,
            "persistent": false,
            "title": "WO Cost Last Calculated Date",
            "remarks": "The date when the work order cost was last calculated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End date of SLR",
            "remarks": "Specify the date that the route creation finishes.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTLOCATION",
            "required": false,
            "persistent": true,
            "title": "Start location of SLR",
            "remarks": "Specify the location where the labor, or the crew, or both starts the route. The start location must have a service address associated with it to gather the latitudinal and longitudinal coordinates for mapping  and for calculation of travel time.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ENDLOCATION",
            "required": false,
            "persistent": true,
            "title": "End location",
            "remarks": "Specify the location where the labor, or the crew, or both, ends the route. The end location must have a service address associated with it to gather the latitudinal and longitudinal coordinates for mapping  and for calculation of travel time.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STARTLOCSITEID",
            "required": false,
            "persistent": true,
            "title": "Start location site id",
            "remarks": "Start Location SiteId",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ENDLOCSITEID",
            "required": false,
            "persistent": true,
            "title": "End location site id",
            "remarks": "End Location SiteId",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "STARTWEEKDAY",
            "required": true,
            "persistent": true,
            "title": "Start Week Day",
            "remarks": "Identifies the day of the week that should be the starting day for calculations.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDCOMPSTART",
            "required": false,
            "persistent": true,
            "title": "Schedule Compliance Start",
            "remarks": "The start date of the current or next  schedule compliance period.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDCOMPEND",
            "required": false,
            "persistent": true,
            "title": "Schedule Compliance End",
            "remarks": "The end date of the current or next schedule compliance period.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDCOMPACTIVE",
            "required": true,
            "persistent": true,
            "title": "Schedule Compliance Active",
            "remarks": "Indicates whether the schedule compliance period is still in effect. This field is read-only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREQUENCY",
            "required": true,
            "persistent": true,
            "title": "Duration",
            "remarks": "The length of the schedule compliance period, combined with the Duration Units field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREQUNIT",
            "required": true,
            "persistent": true,
            "title": "Duration Units",
            "remarks": "Units for the schedule compliance duration. Choose days, weeks, months, or years.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULE",
            "required": false,
            "persistent": true,
            "title": "Schedule",
            "remarks": "Defines the frequency of the schedule date refresh. For example, the schedule refreshes every Monday.",
            "sameAsAttribute": "PATTERN",
            "sameAsObject": "DATESELECTOR"
        },
        {
            "attributeName": "SKDCOMPLASTSTART",
            "required": false,
            "persistent": true,
            "title": "Last Schedule Compliance Start",
            "remarks": "The date that the last schedule compliance started, if it ran by cron task. This field is read-only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISAUTOCOMPLIANCE",
            "required": true,
            "persistent": true,
            "title": "Cron Active",
            "remarks": "Indicates if the schedule compliance is calculated automatically. Select the check box to make the cron task active.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCENARIONAME",
            "required": false,
            "persistent": true,
            "title": "Scenario",
            "remarks": "Name of the scenario that was used to get this result. If no scenario exists, the schedule name is used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Current status of the schedule.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date and time that the status of the schedule was last changed. The default is the system date and time at the time of the status change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTPUBLISHDATE",
            "required": false,
            "persistent": true,
            "title": "Last Publish Date",
            "remarks": "Date when the schedule was last published.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PUBLISHBY",
            "required": false,
            "persistent": true,
            "title": "Published By",
            "remarks": "User who last published the schedule.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "FETCHNEWWO",
            "required": true,
            "persistent": true,
            "title": "Fetch New Work Orders",
            "remarks": "Fetch new work orders.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IGNOREREFRESHDATES",
            "required": true,
            "persistent": true,
            "title": "Ignore Changes and Refresh Schedule Dates",
            "remarks": "Ignore changes and refresh schedule dates.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BASELINEMEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo for snapshot.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SNAPSHOT",
            "required": true,
            "persistent": true,
            "title": "Snapshot",
            "remarks": "Indicates that the record is an image of the schedule at a point in time. No edits can be made to a snapshot.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DFLTSCENARIO",
            "required": true,
            "persistent": true,
            "title": "Default Scenario",
            "remarks": "Indicates that the record is a default scenario.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCENARIOALLOWED",
            "required": true,
            "persistent": true,
            "title": "Scenario Allowed",
            "remarks": "Indicates that a scenario can be created for this schedule.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HISTORYFLAG",
            "required": true,
            "persistent": true,
            "title": "History",
            "remarks": "Indicates that the record is a history record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCENARIOPROJECTSSTRING",
            "required": false,
            "persistent": false,
            "title": "project and scenario projects string",
            "remarks": "project and scenario projects string, used to pass to applet",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Scenario Type",
            "remarks": "Identifies name of the ODM application.",
            "sameAsAttribute": "ODMAPPNAME",
            "sameAsObject": "SKDODMAPP"
        },
        {
            "attributeName": "SHIFTMARGIN",
            "required": true,
            "persistent": true,
            "title": "Shift Margin",
            "remarks": "The number of hours before and after the assigned shift that assignments can be scheduled as part of the route. Specify an integer between 0 and 4. For example, a shift runs from 7:00 a.m. to 3:00 p.m.  If you enter a shift margin of 2, work that is assigned from 5:00 a.m. to 5:00 p.m. will be included in the route.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRESERVEDATES",
            "required": false,
            "persistent": true,
            "title": "Preserve Dates",
            "remarks": "If checked Start Date and End Date will only be modified by the user. If unchecked, Start Date will be modified to the current date and End Date will become previous End Date the difference of the current date and the previous Start Date. Times will not be modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDID1",
            "required": false,
            "persistent": false,
            "title": "SKD Project ID1",
            "remarks": "SKD Project ID1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDID2",
            "required": false,
            "persistent": false,
            "title": "SKD Project ID2",
            "remarks": "SKD Project ID2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPARE",
            "required": false,
            "persistent": false,
            "title": "Compare Scenarios",
            "remarks": "Compare scenarios.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTASSIGNDATE",
            "required": false,
            "persistent": true,
            "title": "Start date of crew assignments",
            "remarks": "Date when crew assigments start.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VIEWTYPE",
            "required": false,
            "persistent": true,
            "title": "View Type",
            "remarks": "Daily view or weekly view, true daily view,false weekly view. Only used in Graphical crew assignment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCCLOSEWO",
            "required": true,
            "persistent": true,
            "title": "Include Closed Work Records",
            "remarks": "Indicates if cancelled work records are included in the compliance calculation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCCANWO",
            "required": true,
            "persistent": true,
            "title": "Include Cancelled Work Records",
            "remarks": "Indicates if closed work records are included in the compliance calculation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDLABORHRSCALDATE",
            "required": false,
            "persistent": false,
            "title": "WO Labor hours Last Calculated Date",
            "remarks": "Identifies the date that the labor hours for the work records were last calculated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMWO",
            "required": false,
            "persistent": true,
            "title": "Number of Work records",
            "remarks": "Identifies the number of work records in the schedule. This includes both work orders and tasks if you have included tasks in the schedule.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTSTARTTIME",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Identifies the start date of the earliest activity in the schedule.",
            "sameAsAttribute": "STARTTIME",
            "sameAsObject": "SKDACTIVITY"
        },
        {
            "attributeName": "ACTENDTIME",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "Identifies the end date of the latest activity in the schedule.",
            "sameAsAttribute": "ENDTIME",
            "sameAsObject": "SKDACTIVITY"
        },
        {
            "attributeName": "PREVACTSTARTTIME",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Identifies the start date of the earliest activity in the schedule before optimization.",
            "sameAsAttribute": "STARTTIME",
            "sameAsObject": "SKDACTIVITY"
        },
        {
            "attributeName": "PREVACTENDTIME",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "Identifies the end date of the latest activity in the schedule before optimization.",
            "sameAsAttribute": "ENDTIME",
            "sameAsObject": "SKDACTIVITY"
        },
        {
            "attributeName": "CALSTARTDATE",
            "required": false,
            "persistent": true,
            "title": "Calendar Start Date",
            "remarks": "The date from which working time is displayed in the Gantt view. The default value is the start date of your schedule, or today's date if your schedule does not specify a start date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALENDDATE",
            "required": false,
            "persistent": true,
            "title": "Calendar End Date",
            "remarks": "The last date for which working time is displayed in the Gantt view. The default value is six months from the Start Date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETSITEID",
            "required": false,
            "persistent": true,
            "title": "Asset Site",
            "remarks": "Identifies the site the assets belong to.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "STARTDATEACM",
            "required": true,
            "persistent": true,
            "title": "Start Date",
            "remarks": "The date on which the schedule starts.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATEACM",
            "required": true,
            "persistent": true,
            "title": "End Date",
            "remarks": "The date on which the schedule ends.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROLLTASKS",
            "required": true,
            "persistent": false,
            "title": "Roll up Tasks",
            "remarks": "xxxxxxx.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROLLCHILDWORK",
            "required": true,
            "persistent": false,
            "title": "Roll up Child Work",
            "remarks": "xxxxxxx.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MNTLOCATION",
            "required": false,
            "persistent": true,
            "title": "Repair Facility",
            "remarks": "Identifies the location where repairs are performed.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "MNTLOCATIONSITEID",
            "required": false,
            "persistent": true,
            "title": "Repair Facility Site",
            "remarks": "Specifies the site where this repair location resides.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ROLLING",
            "required": true,
            "persistent": true,
            "title": "Rolling Project",
            "remarks": "Indicates whether the project has a rolling start date. For example, the project always contains work for today plus the next two weeks.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DURATION",
            "required": false,
            "persistent": true,
            "title": "Duration in Days",
            "remarks": "The duration of the work, in days.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDPMFOCOSTCALDATE",
            "required": false,
            "persistent": true,
            "title": "PM Cost Last Calculated Date",
            "remarks": "The date when the PM forecast cost was last calculated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOPLEVELONLY",
            "required": true,
            "persistent": true,
            "title": "Top Level Work Records Only",
            "remarks": "Indicates whether the schedule should include only top level work records. Select this check box to exclude child work records and tasks from the schedule.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROJECTTYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Identifies the schedule type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SYSTEMID",
            "required": false,
            "persistent": true,
            "title": "Location System",
            "remarks": "Identifies project location system.",
            "sameAsAttribute": "SYSTEMID",
            "sameAsObject": "LOCSYSTEM"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCREW",
            "target": "AMCREW",
            "remarks": "For Graphical Assignment Report",
            "whereClause": "orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "To get the Assets for a Schedule's Assets table.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "SKDCALENDAR",
            "target": "CALENDAR",
            "remarks": "Calendar for a project",
            "whereClause": "calnum=:calnum and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "COMMITGROUP",
            "target": "COMMITGROUP",
            "remarks": "Groups that are allow to commit changes.",
            "whereClause": "projectname=:name",
            "cardinality": null
        },
        {
            "name": "COMMITPERSON",
            "target": "COMMITPERSON",
            "remarks": "Users that are allow to commit changes.",
            "whereClause": "projectname=:name",
            "cardinality": null
        },
        {
            "name": "DATESELECTOR",
            "target": "DATESELECTOR",
            "remarks": "Date selector pattern for Cron Task",
            "whereClause": "pattern = :schedule",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the SKDPROJECT's DocLinks records, used to find documents for a given SKDPROJECT. The resulting set will contain zero or one record.",
            "whereClause": "ownertable = 'SKDPROJECT' and ownerid = :skdprojectid",
            "cardinality": null
        },
        {
            "name": "FWMRESGANTTPROP",
            "target": "FWMRESGANTTPROP",
            "remarks": "Relationship from SKDProject to the non persistent object FWMResGanttProp",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "LABOR",
            "target": "LABOR",
            "remarks": "For Graphical Assignment Report",
            "whereClause": "orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "To get the Locations for a Schedule's Locations table.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "LOCSYSTEM",
            "target": "LOCSYSTEM",
            "remarks": "Relationship to the Locsystem table, used to find the information for the system of the location scheduling project. The resulting set will contain one object.",
            "whereClause": "systemid=:systemid",
            "cardinality": null
        },
        {
            "name": "MXODMAPP",
            "target": "MXODMAPP",
            "remarks": "Relationship to MXODMAPP object, used to find MXODMAPP records for a given skdproject.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "ODMERUNMONITOR",
            "target": "ODMERUNMONITOR",
            "remarks": "Relationship to get ODME run status for a given scenario.",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Get person for the project.",
            "whereClause": "personid not in (select personid from commitperson where projectname=:name)",
            "cardinality": null
        },
        {
            "name": "PERSONGROUP",
            "target": "PERSONGROUP",
            "remarks": "Get group for the project.",
            "whereClause": "persongroup not in (select persongroup from commitgroup where projectname=:name)",
            "cardinality": null
        },
        {
            "name": "SHIFT",
            "target": "SHIFT",
            "remarks": "To get the Shifts for a Schedule's Calendar from Shifts table.",
            "whereClause": "orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "SKDSHIFT",
            "target": "SHIFT",
            "remarks": "Shift for a project",
            "whereClause": "orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "SKDACTGANTTPROP",
            "target": "SKDACTGANTTPROP",
            "remarks": "Relationship from SKDProject to the non persistent object SKDActGanttProp",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "SKDACTIVITY",
            "target": "SKDACTIVITY",
            "remarks": "Activities defined for a project",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDASSETLOCQUERY",
            "target": "SKDASSETLOCQUERY",
            "remarks": "Query to identify activities.",
            "whereClause": "name=:name and skdobjectname='SKDACTIVITY'",
            "cardinality": null
        },
        {
            "name": "SKDASYNCJOBMSGREFRESH",
            "target": "SKDASYNCJOBMSGREFRESH",
            "remarks": "Relationship to the non persistent object SKDASYNCJOBMSGREFRESH",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "SKDASYNCOBJ",
            "target": "SKDASYNCOBJ",
            "remarks": "Get asynchronous job for project",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDCOMPLIANCE",
            "target": "SKDCOMPLIANCE",
            "remarks": "Compliance WO List defined for a project WO's in SKDActivity table",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDCOMPLIANCECOMP",
            "target": "SKDCOMPLIANCE",
            "remarks": "Relationship to the SKDCompliance table, used to find the completed compliance period for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid and skdcompactive=0",
            "cardinality": null
        },
        {
            "name": "SKDCOMPLIANCEWOLIST",
            "target": "SKDCOMPLIANCEWOLIST",
            "remarks": "Compliance WO List defined for a project in WO Activity",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDCONSTRAINT",
            "target": "SKDCONSTRAINT",
            "remarks": "Constraints of the project",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDCOST",
            "target": "SKDCOST",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find all WO cost",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDCOST1",
            "target": "SKDCOST",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find all WO cost",
            "whereClause": "skdprojectid = :skdid1",
            "cardinality": null
        },
        {
            "name": "SKDCOST2",
            "target": "SKDCOST",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find all WO cost",
            "whereClause": "skdprojectid = :skdid2",
            "cardinality": null
        },
        {
            "name": "SKDCOSTMONTH",
            "target": "SKDCOST",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find monthly WO cost",
            "whereClause": "skdprojectid=:skdprojectid and timeperiod not in (select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue in ('13','14') and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDCOSTMONTH1",
            "target": "SKDCOST",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find monthly WO cost",
            "whereClause": "skdprojectid = :skdid1 and timeperiod not in (select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue in ('13','14') and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDCOSTMONTH2",
            "target": "SKDCOST",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find monthly WO cost",
            "whereClause": "skdprojectid = :skdid2 and timeperiod not in (select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue in ('13','14') and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDCOSTWEEK",
            "target": "SKDCOST",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find weekly WO cost",
            "whereClause": "skdprojectid=:skdprojectid and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='13' and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDCOSTWEEK1",
            "target": "SKDCOST",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find weekly WO cost",
            "whereClause": "skdprojectid = :skdid1 and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='13' and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDCOSTWEEK2",
            "target": "SKDCOST",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find weekly WO cost",
            "whereClause": "skdprojectid = :skdid2 and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='13' and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDCOSTYEAR",
            "target": "SKDCOST",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find yearly WO cost",
            "whereClause": "skdprojectid=:skdprojectid and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='14' and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDCOSTYEAR1",
            "target": "SKDCOST",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find yearly WO cost",
            "whereClause": "skdprojectid = :skdid1 and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='14' and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDCOSTYEAR2",
            "target": "SKDCOST",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find yearly WO cost",
            "whereClause": "skdprojectid = :skdid2 and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='14' and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDEMAVAILRES",
            "target": "SKDEMAVAILRES",
            "remarks": "Emergency work orders available resources records for a given skdproject",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDEXTRACAPACITYCRAFT",
            "target": "SKDEXTRACAPACITY",
            "remarks": "Relationship to the SKDExtraCapacity table, used to find the additional capacity for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid and type='CRAFT'",
            "cardinality": null
        },
        {
            "name": "SKDEXTRACAPACITYCREW",
            "target": "SKDEXTRACAPACITY",
            "remarks": "Relationship to the SKDExtraCapacity table, used to find the additional capacity for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid and type='CREW'",
            "cardinality": null
        },
        {
            "name": "SKDEXTRACAPACITYTOOL",
            "target": "SKDEXTRACAPACITY",
            "remarks": "Relationship to the SKDExtraCapacity table, used to find the additional capacity for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid and type='TOOL'",
            "cardinality": null
        },
        {
            "name": "SKDEXTRACAPCRAFTVIEW",
            "target": "SKDEXTRACAPCRAFTVIEW",
            "remarks": "Relationship to the SKDExtraCapCraftView table, used to find the extra capacity for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDEXTRACAPCREWVIEW",
            "target": "SKDEXTRACAPCREWVIEW",
            "remarks": "Relationship to the SKDExtraCapCrewView table, used to find the extra capacity for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDEXTRACAPTOOLVIEW",
            "target": "SKDEXTRACAPTOOLVIEW",
            "remarks": "Relationship to the SKDExtraCapToolView table, used to find the extra capacity for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDGVPREF",
            "target": "SKDGVPREF",
            "remarks": "Gantt View preferences",
            "whereClause": "projectname=:name",
            "cardinality": null
        },
        {
            "name": "SKDLABHRSDAILY",
            "target": "SKDLABORHRS",
            "remarks": "Relationship from SKDPROJECT to SKLABORHRS to find yearly labor hours.",
            "whereClause": "skdprojectid=:skdprojectid and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='15' and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDLABHRSMONTH",
            "target": "SKDLABORHRS",
            "remarks": "Relationship from SKDPROJECT to SKDLABORHRS to find monthly labor hours.",
            "whereClause": "skdprojectid=:skdprojectid and timeperiod not in (select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue in ('13','14', '15') and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDLABHRSWEEK",
            "target": "SKDLABORHRS",
            "remarks": "Relationship from SKDPROJECT to SKDLABORHRS to find weekly labor hours.",
            "whereClause": "skdprojectid=:skdprojectid and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='13' and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDLABORHRS",
            "target": "SKDLABORHRS",
            "remarks": "Relationship from SKDPROJECT to SKDLABORHRS to find all labor hours.",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDODMAPP",
            "target": "SKDODMAPP",
            "remarks": "ODM Application",
            "whereClause": "usewith=:usewith and optscenario=:type",
            "cardinality": null
        },
        {
            "name": "SKDODMAPPDATA",
            "target": "SKDODMAPP",
            "remarks": "Scenario Type.",
            "whereClause": "optscenario=:type",
            "cardinality": null
        },
        {
            "name": "SKDPMCOSTMONTH",
            "target": "SKDPMFOCOST",
            "remarks": "Relationship from SKDPROJECT to SKDPMFOCOST to find monthly PM Forecast cost",
            "whereClause": "skdprojectid=:skdprojectid and timeperiod not in (select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue in ('13','14') and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDPMCOSTWEEK",
            "target": "SKDPMFOCOST",
            "remarks": "Relationship from SKDPROJECT to SKDPMFOCOST to find weekly PM Forecast cost",
            "whereClause": "skdprojectid=:skdprojectid and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='13' and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDPMCOSTYEAR",
            "target": "SKDPMFOCOST",
            "remarks": "Relationship from SKDPROJECT to SKDPMFOCOST to find yearly PM Forecast cost",
            "whereClause": "skdprojectid=:skdprojectid and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='14' and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDPMFOCOST",
            "target": "SKDPMFOCOST",
            "remarks": "Relationship from SKDPROJECT to SKDPMFOCOST to find all PM Forecast cost",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDPMFORECAST",
            "target": "SKDPMFORECAST",
            "remarks": "Relationship to skdpmforecast records, used to find skdpmforecast records for a given skdproject.",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDPMFORECASTJP",
            "target": "SKDPMFORECASTJP",
            "remarks": "Relationship to skdpmforecastjp records, used to find skdpmforecastjp records for a given skdproject.",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDPROJECT_SKDPROJECT",
            "target": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDPROJECT to find Schedule Name",
            "whereClause": "name=:name and dfltscenario=1 ",
            "cardinality": null
        },
        {
            "name": "SKDPROJECT1",
            "target": "SKDPROJECT",
            "remarks": "get first project to compare",
            "whereClause": "skdprojectid = :skdid1",
            "cardinality": null
        },
        {
            "name": "SKDPROJECT2",
            "target": "SKDPROJECT",
            "remarks": "get second project to compare",
            "whereClause": "skdprojectid = :skdid2",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTRESLVL",
            "target": "SKDPROJECT",
            "remarks": "Relationship to the SKDProject table, used to find resource levelling scenarios for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid and type = 'RESLEVEL'",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTRESULT",
            "target": "SKDPROJECT",
            "remarks": "Relationship to get snapshot or scenario records for the given skdproject.",
            "whereClause": "name=:name and scenarioname!=:scenarioname",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTSCENARIO",
            "target": "SKDPROJECT",
            "remarks": "Relationship to get scenario records for the given skdproject.",
            "whereClause": "name=:name and scenarioname!=:scenarioname and snapshot=:no",
            "cardinality": null
        },
        {
            "name": "SCENARIOPROJECTS",
            "target": "SKDPROJECT",
            "remarks": "get Senarios and snapshot projects for this project",
            "whereClause": "name = :name",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTASSTS",
            "target": "SKDPROJECTASSTS",
            "remarks": "Relationship to the persistent object SKDProjectAssets from Schedule to get the Schedule Assets.",
            "whereClause": "name=:name and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTBASELINE",
            "target": "SKDPROJECTBASELINE",
            "remarks": "Relationship to the non-persistent SKDPROJECTBASELINE table. (There is no where clause for non-persistent objects). The resulting set will contain zero or more objects.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTCHANGESTATUS",
            "target": "SKDPROJECTCHANGESTATUS",
            "remarks": "Relationship to the non-persistent SKDProjectChangeStatus table. (There is no where clause for non-persistent objects). The resulting set will contain zero or more objects.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTEMWO",
            "target": "SKDPROJECTEMWO",
            "remarks": "Project Emergency Work Orders",
            "whereClause": "projectname=:name and scenarioname=:scenarioname",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTPUBLISH",
            "target": "SKDPROJECTPUBLISH",
            "remarks": "Relationship to the SKDProjectPublish table, used to find all publish records for a given SKDProject. (name=:name) The resulting set will contain zero or more objects.",
            "whereClause": "name=:name",
            "cardinality": null
        },
        {
            "name": "PROJECTSCENARIO",
            "target": "SKDPROJECTSCENARIO",
            "remarks": "Project Scenario",
            "whereClause": "projectname=:name and scenarioname=:scenarioname",
            "cardinality": null
        },
        {
            "name": "SKDPRJSHIFT",
            "target": "SKDPROJECTSHIFTS",
            "remarks": "Shifts for a project",
            "whereClause": "name=:name and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTSHIFTS",
            "target": "SKDPROJECTSHIFTS",
            "remarks": "Relationship to the persistent object SKDProjectShifts from Schedule to get the Schedule and Calendar Orgs.",
            "whereClause": "name=:name and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTSTATUS",
            "target": "SKDPROJECTSTATUS",
            "remarks": "Relationship to the SKDProjectStatus table, used to find all status records for a given SKDProject. (name=:name) The resulting set will contain zero or more objects.",
            "whereClause": "scenarioname=:scenarioname",
            "cardinality": null
        },
        {
            "name": "SKDPROJPROPERTY",
            "target": "SKDPROPERTY",
            "remarks": "Relationship from SKDProject to SKDProperty",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "SKDQUERY",
            "target": "SKDQUERY",
            "remarks": "List of queries defined for a project",
            "whereClause": "name=:name",
            "cardinality": null
        },
        {
            "name": "SKDASSETQUERY",
            "target": "SKDQUERY",
            "remarks": "Query to identify available resources for a Schedule.",
            "whereClause": "name=:name and skdobjectname='SKDAVAILABILITY'",
            "cardinality": null
        },
        {
            "name": "SKDASSTNULLQRY",
            "target": "SKDQUERY",
            "remarks": "Gets all records where skobjectname is skdavailability for a project",
            "whereClause": "name=:name and skdobjectname='SKDAVAILABILITY' and objectname='ASSET'",
            "cardinality": null
        },
        {
            "name": "SKDTOOLITEM",
            "target": "SKDQUERY",
            "remarks": "Query to identify toolitem available resources for a Schedule.",
            "whereClause": "name=:name and skdobjectname='SKDAVAILABILITY' and objectname='TOOLITEM'",
            "cardinality": null
        },
        {
            "name": "SKDRESQUERY",
            "target": "SKDQUERY",
            "remarks": "Queries defined for Resources",
            "whereClause": "name=:name and skdobjectname = 'SKDRESOURCE'",
            "cardinality": null
        },
        {
            "name": "SKDWPTOOL",
            "target": "SKDQUERY",
            "remarks": "Query to identify wptool available resources for a Schedule",
            "whereClause": "name=:name and skdobjectname='SKDAVAILABILITY'  and objectname='TOOLITEM'",
            "cardinality": null
        },
        {
            "name": "SKDLABORQUERY",
            "target": "SKDQUERY",
            "remarks": "Query to identify available resources for a Schedule",
            "whereClause": "name=:name and skdobjectname='SKDAVAILABILITY'",
            "cardinality": null
        },
        {
            "name": "SKDLOCACTQUERY",
            "target": "SKDQUERY",
            "remarks": "Query to identify activities.",
            "whereClause": "name=:name and skdobjectname='SKDACTIVITY' and objectname='LOCATIONS'",
            "cardinality": null
        },
        {
            "name": "SKDLOCNULLQRY",
            "target": "SKDQUERY",
            "remarks": "Query to identify toolitem available resources for a Schedule.",
            "whereClause": "name=:name and skdobjectname='SKDAVAILABILITY' and objectname='LOCATIONS'",
            "cardinality": null
        },
        {
            "name": "SKDLOCQUERY",
            "target": "SKDQUERY",
            "remarks": "Query to identify available resources for a Schedule.",
            "whereClause": "name=:name and skdobjectname='SKDAVAILABILITY'",
            "cardinality": null
        },
        {
            "name": "SKDOBJNULLQRY",
            "target": "SKDQUERY",
            "remarks": "Gets all records where skobjectname is skdavailability for a project",
            "whereClause": "name=:name and skdobjectname ='SKDAVAILABILITY' and objectname='LABOR'",
            "cardinality": null
        },
        {
            "name": "SKDACTQUERY",
            "target": "SKDQUERY",
            "remarks": "Query to identify activities",
            "whereClause": "name=:name and skdobjectname='SKDACTIVITY'",
            "cardinality": null
        },
        {
            "name": "SKDAMCREWQUERY",
            "target": "SKDQUERY",
            "remarks": "Get all Crew Queries",
            "whereClause": "name=:name and objectname='AMCREW' and skdobjectname='SKDAVAILABILITY'",
            "cardinality": null
        },
        {
            "name": "SKDASSETACTQUERY",
            "target": "SKDQUERY",
            "remarks": "Query to identify activities.",
            "whereClause": "name=:name and skdobjectname='SKDACTIVITY' and objectname='ASSET'",
            "cardinality": null
        },
        {
            "name": "SKDJOBTOOL",
            "target": "SKDQUERY",
            "remarks": "Query to identify jobtool available resources for a Schedule",
            "whereClause": "name=:name and skdobjectname='SKDAVAILABILITY'  and objectname='TOOLITEM'",
            "cardinality": null
        },
        {
            "name": "SKDRESERVATION",
            "target": "SKDRESERVATION",
            "remarks": "Reservations of a project",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDRESGANTTPROP",
            "target": "SKDRESGANTTPROP",
            "remarks": "Relationship from SKDProject to the non persistent object SKDResGanttProp",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "SKDRESOURCE",
            "target": "SKDRESOURCE",
            "remarks": "Resources of the project",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "PROJECTSTATE",
            "target": "SKDSTATE",
            "remarks": "Relationship of State Records that are linked to the Project",
            "whereClause": "skdprojectid=:skdprojectid and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "SKDUSERPROP",
            "target": "SKDUSERPROP",
            "remarks": "User properties defined for a project",
            "whereClause": "projectname=:name",
            "cardinality": null
        },
        {
            "name": "SKDUSERPROPS",
            "target": "SKDUSERPROP",
            "remarks": "User properties defined for a project",
            "whereClause": "projectname=:name and userid=:&USERNAME&",
            "cardinality": null
        },
        {
            "name": "SKDWORKPLANEXTCAP",
            "target": "SKDWORKPLANEXTCAP",
            "remarks": "Relationship to the SKDWorkPlanExtCap table, used to find the extra capacity for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='SCHDSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": null
        },
        {
            "name": "SKDWORKPERIOD",
            "target": "WORKPERIOD",
            "remarks": "workperiod for a project",
            "whereClause": "calnum=:calnum and orgid = :orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "SKDPROJECT",
            "source": "SKDODMERUN",
            "remarks": "Get skdproject record for skdodmerun record.",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDPROJECT_SKDPROJECT",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDPROJECT to find Schedule Name",
            "whereClause": "name=:name and dfltscenario=1 ",
            "cardinality": null
        },
        {
            "name": "SKDPROJECT1",
            "source": "SKDPROJECT",
            "remarks": "get first project to compare",
            "whereClause": "skdprojectid = :skdid1",
            "cardinality": null
        },
        {
            "name": "SKDPROJECT2",
            "source": "SKDPROJECT",
            "remarks": "get second project to compare",
            "whereClause": "skdprojectid = :skdid2",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTRESLVL",
            "source": "SKDPROJECT",
            "remarks": "Relationship to the SKDProject table, used to find resource levelling scenarios for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid and type = 'RESLEVEL'",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTRESULT",
            "source": "SKDPROJECT",
            "remarks": "Relationship to get snapshot or scenario records for the given skdproject.",
            "whereClause": "name=:name and scenarioname!=:scenarioname",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTSCENARIO",
            "source": "SKDPROJECT",
            "remarks": "Relationship to get scenario records for the given skdproject.",
            "whereClause": "name=:name and scenarioname!=:scenarioname and snapshot=:no",
            "cardinality": null
        },
        {
            "name": "SCENARIOPROJECTS",
            "source": "SKDPROJECT",
            "remarks": "get Senarios and snapshot projects for this project",
            "whereClause": "name = :name",
            "cardinality": null
        }
    ]
}