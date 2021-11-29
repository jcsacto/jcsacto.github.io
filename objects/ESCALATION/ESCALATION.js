mos = {
    "objectName": "ESCALATION",
    "className": "psdi.app.escalation.EscalationSet",
    "description": "Contains attributes to define an escalation group",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "ESCALATIONID",
    "primaryKeyColumns": [
        "ESCALATION"
    ],
    "logicalRelationships": [
        {
            "objectName": "ESCALATION",
            "targetObject": "ESCNOTIFICATION",
            "parentKeys": "ESCALATION",
            "targetKeys": "ESCALATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Escalation",
            "longDescription": null
        },
        {
            "objectName": "ESCALATION",
            "targetObject": "ESCREFPOINT",
            "parentKeys": "ESCALATION",
            "targetKeys": "ESCALATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Escalation",
            "longDescription": null
        },
        {
            "objectName": "ESCALATION",
            "targetObject": "ESCREPEATTRACK",
            "parentKeys": "ESCALATION",
            "targetKeys": "ESCALATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Escalation",
            "longDescription": null
        },
        {
            "objectName": "ESCALATION",
            "targetObject": "ESCSTATUS",
            "parentKeys": "ESCALATION",
            "targetKeys": "ESCALATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "ESCALATION",
            "targetObject": "SLA",
            "parentKeys": "ESCALATION",
            "targetKeys": "ESCALATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CALENDAR",
            "targetObject": "ESCALATION",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ESCCALORGID, ESCCALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Escalation Calendar",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "ESCALATION",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, ESCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "ESCALATION",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "CRONTASKNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Escalations",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "ESCALATION",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ESCALATION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object the escalation executes on.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ESCALATION",
            "parentKeys": "ORGID",
            "targetKeys": "ESCCALORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 74",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ESCALATION",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "ESCALATION",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ESCCALORGID, ESCSHIFT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "ESCALATION",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, ESCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ESCALATION",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SLA",
            "targetObject": "ESCALATION",
            "parentKeys": "SLANUM",
            "targetKeys": "SLANUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Escalation related to the SLA",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ESCALATIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the escalation.The description can be up to 255 characters in length. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization for which this escalation applies. Organization field may be read only if the selected business object is a system-level object or a site-level object.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site for which this escalation applies. Site field may be read only if the selected business object is a system-level object or a organization-level object. If you specify a site, the escalation will not monitor records at any other site in the same organization. Click the Select Value button to choose a site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Specifies whether the escalation is active. If the check box is selected, the escalation searches for records against the business object that meet the criteria defined in the escalation and triggers actions, notifications, or both. If the check box is cleared (the default), the escalation does not monitor Maximo for those records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Applies To",
            "remarks": "Business object for which this escalation applies, for example, INCIDENT. The escalation only monitors records for this business object. Click the Select Value button to choose a business object.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CONDITION",
            "required": false,
            "persistent": true,
            "title": "Condition",
            "remarks": "A filter that identifies the set of records for the business object targeted by this escalation. The filter is expressed in the form of a SQL where clause. You can enter this condition manually, or click the Detail Menu button to use the SQL Expression Builder. Each escalation point you create further filters this set of records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Change By",
            "sameAsAttribute": "LOGINID",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CRONTASKNAME",
            "required": false,
            "persistent": true,
            "title": "Cron Task",
            "remarks": "Crontask Name",
            "sameAsAttribute": "CRONTASKNAME",
            "sameAsObject": "CRONTASKDEF"
        },
        {
            "attributeName": "INSTANCENAME",
            "required": false,
            "persistent": true,
            "title": "Instance",
            "remarks": "Crontask Instance Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESCALATION",
            "required": true,
            "persistent": true,
            "title": "Escalation",
            "remarks": "Identifies the name or number of the escalation. The escalation name or number can be up to 10 characters in length.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALIDATION",
            "required": false,
            "persistent": false,
            "title": "Validation",
            "remarks": "Displays error information if the validation on an escalation fails. Validate an escalation by selecting Validate from the Select Action menu. Errors can be against either the header Condition or individual Escalation Point Conditions.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULE",
            "required": true,
            "persistent": true,
            "title": "Schedule",
            "remarks": "Schedule string that indicates how often or when you want the escalation to monitor Maximo for records meeting the criteria defined in the escalation, for example, every 30 minutes. Click the Set Schedule button to define the schedule or frequency. The default frequency is every hour.",
            "sameAsAttribute": "SCHEDULE",
            "sameAsObject": "CRONTASKINSTANCE"
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
            "attributeName": "LASTRUN",
            "required": false,
            "persistent": false,
            "title": "Last Run Time",
            "remarks": "Time stamp indicating the last time the escalation was run by Maximo.",
            "sameAsAttribute": "LASTRUN",
            "sameAsObject": "TASKSCHEDULER"
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
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
            "attributeName": "ESCSTATUSFLAG",
            "required": true,
            "persistent": true,
            "title": "Create Successful Execution Entry",
            "remarks": "Boolean flag to indicate whether to write status upon success execution of an escalation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESCCALENDAR",
            "required": false,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Calendar that specifies the days and times for which the escalation is valid.",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "ESCSHIFT",
            "required": false,
            "persistent": true,
            "title": "Shift",
            "remarks": "Shift that specifies the days and times for which the escalation is valid.",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        },
        {
            "attributeName": "ESCCALORGID",
            "required": false,
            "persistent": true,
            "title": "Calendar Organization",
            "remarks": "Organization that is associated with the escalation calendar.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SLANUM",
            "required": false,
            "persistent": true,
            "title": "SLA",
            "remarks": "Identifies the service level agreement (SLA) record.",
            "sameAsAttribute": "SLANUM",
            "sameAsObject": "SLA"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ESCLASTRUN",
            "target": "CRONTASKINSTANCE",
            "remarks": "Relationship for LASTRUN",
            "whereClause": "crontaskname = :crontaskname and instancename = :instancename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DATESELECTOR",
            "target": "DATESELECTOR",
            "remarks": "Relationship for date selector",
            "whereClause": "pattern =:schedule",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMLOG",
            "target": "ESCCOMMLOG",
            "remarks": "Relationship for commlog",
            "whereClause": "uniqueid in (select escalationid from escalation where  escalation=:escalation) and (ownertable=:objectname or (ownertable in (select value from synonymdomain where domainid in ('TKCLASS', 'WOCLASS') and maxvalue=:objectname)))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ESCREFPOINT",
            "target": "ESCREFPOINT",
            "remarks": "Relationship for reference points",
            "whereClause": "escalation =:escalation",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ESCREPEATTRACK",
            "target": "ESCREPEATTRACK",
            "remarks": "Relationship for repeattracking",
            "whereClause": "escalation =:escalation",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ESCSTATUS",
            "target": "ESCSTATUS",
            "remarks": "Relationship to get the status records associated with the escalation.",
            "whereClause": "escalation=:escalation",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXPBUILDER",
            "target": "EXPBUILDER",
            "remarks": "Relationship for EXPBUILD",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from ESCALATION.",
            "whereClause": "ldkey=:escalationid and ldownertable = 'ESCALATION'",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ESCALATION",
            "source": "COMMLOG",
            "remarks": "Relationship to get the original escalation",
            "whereClause": "escalationid=:uniqueid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ESCALATION",
            "source": "SLA",
            "remarks": "SLA to Escalation relation",
            "whereClause": "escalation = :escalation",
            "cardinality": "UNDEFINED"
        }
    ]
}