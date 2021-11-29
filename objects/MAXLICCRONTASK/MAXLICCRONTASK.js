mos = {
    "objectName": "MAXLICCRONTASK",
    "className": "psdi.app.lictrack.virtual.MaxLicCronTaskSet",
    "description": "Non-persistent object to show License tracking crontask in UI",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ISACTIVE",
            "required": false,
            "persistent": false,
            "title": "Active",
            "remarks": "Is Cron task active?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULE",
            "required": false,
            "persistent": false,
            "title": "Schedule",
            "remarks": "Schedule of the cron task",
            "sameAsAttribute": "SCHEDULE",
            "sameAsObject": "CRONTASKINSTANCE"
        },
        {
            "attributeName": "RUNASUSERID",
            "required": false,
            "persistent": false,
            "title": "Run as User",
            "remarks": "The User ID the crontask instance is running as",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "USETOPUSERSAUTH",
            "required": false,
            "persistent": false,
            "title": "Assign Top Users to Authorized Licenses",
            "remarks": "Assign Top users to Authorized licenses",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTCOMPLETIONDATE",
            "required": false,
            "persistent": false,
            "title": "Last Completion Date",
            "remarks": "Last Completion Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ALNDOMAIN",
            "target": "ALNDOMAIN",
            "remarks": "Relationship from MAXLICCRONTASK to ALNDOMAIN table.",
            "whereClause": "domainid='LICTIMEPERIOD' and value=:TIMEPERIOD ",
            "cardinality": null
        },
        {
            "name": "DATESELECTOR",
            "target": "DATESELECTOR",
            "remarks": "Date selector pattern for Cron Task.",
            "whereClause": "pattern =:schedule",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}