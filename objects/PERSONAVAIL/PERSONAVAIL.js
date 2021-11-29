mos = {
    "objectName": "PERSONAVAIL",
    "className": "psdi.app.person.virtual.PersonAvailSet",
    "description": "Person Availability table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "PERSONID",
        "WORKDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "DAY",
            "required": true,
            "persistent": false,
            "title": "Day",
            "remarks": "The day of the week.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": false,
            "title": "Start Time",
            "remarks": "The start time of the person's work hours for that day. The range between the start time and end time must not be less than the person's work hours.",
            "sameAsAttribute": "STARTTIME",
            "sameAsObject": "MODAVAIL"
        },
        {
            "attributeName": "ENDTIME",
            "required": false,
            "persistent": false,
            "title": "End Time",
            "remarks": "The end time of the person's work hours for that day.The range between the start time and end time must not be less than the person's work hours.",
            "sameAsAttribute": "ENDTIME",
            "sameAsObject": "MODAVAIL"
        },
        {
            "attributeName": "WORKHOURS",
            "required": false,
            "persistent": false,
            "title": "Work Hours",
            "remarks": "The total number of work hours of the person for that day.",
            "sameAsAttribute": "WORKHOURS",
            "sameAsObject": "MODAVAIL"
        },
        {
            "attributeName": "REASONCODE",
            "required": false,
            "persistent": false,
            "title": "Reason Code",
            "remarks": "The code indicating the reason for any change in the person's work hours.",
            "sameAsAttribute": "REASONCODE",
            "sameAsObject": "MODAVAIL"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "A brief description of the reason code.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "SYNONYMDOMAIN"
        },
        {
            "attributeName": "PERSONID",
            "required": true,
            "persistent": false,
            "title": "Person",
            "remarks": "Personid",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "WORKDATE",
            "required": true,
            "persistent": false,
            "title": "Work Date",
            "remarks": "Workdate non persistent field",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Relationship to the person table on personid.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REASONCODE",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to the synonym domain table to get reasoncode description.",
            "whereClause": "domainid='RSNCODE' and value=:reasoncode",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PERSONAVAIL",
            "source": "LABORCRAFTRATE",
            "remarks": "Relationship to the non-persistent PersonAvail table.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONAVAIL",
            "source": "PERSON",
            "remarks": "Relationship to the non-persistent personavail table",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}