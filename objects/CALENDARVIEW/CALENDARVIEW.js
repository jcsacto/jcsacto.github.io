mos = {
    "objectName": "CALENDARVIEW",
    "className": "psdi.app.workorder.virtual.CalendarViewSet",
    "description": "Non-Persistent Table for CalendarView",
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
            "attributeName": "DAY1",
            "required": false,
            "persistent": false,
            "title": "Day 1",
            "remarks": "The first day of the displayed seven-day range.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY2",
            "required": false,
            "persistent": false,
            "title": "Day 2",
            "remarks": "Second day starting from the given workdate",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY3",
            "required": false,
            "persistent": false,
            "title": "Day 3",
            "remarks": "Third day starting from the given workdate",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY4",
            "required": false,
            "persistent": false,
            "title": "Day 4",
            "remarks": "Fourth day starting from the given workdate",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY5",
            "required": false,
            "persistent": false,
            "title": "Day 5",
            "remarks": "Fifth day starting from the given workdate",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY6",
            "required": false,
            "persistent": false,
            "title": "Day 6",
            "remarks": "Sixth day starting from the given workdate",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY7",
            "required": false,
            "persistent": false,
            "title": "Day 7",
            "remarks": "Seventh day starting from the given workdate",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKDATE",
            "required": false,
            "persistent": false,
            "title": "Work Date",
            "remarks": "Work Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CALENDARVIEW",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship to the CalendarView Table; allows CalendarView data to be retrieved by WMAssignments.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}