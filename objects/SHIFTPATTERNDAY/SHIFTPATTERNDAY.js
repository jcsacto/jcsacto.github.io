mos = {
    "objectName": "SHIFTPATTERNDAY",
    "className": "psdi.app.calendar.ShiftPatternDaySet",
    "description": "One days schedule in a repeating shift pattern",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SHIFTPATTERNDAYID",
    "primaryKeyColumns": [
        "ORGID",
        "SHIFTNUM",
        "PATTERNDAYSEQ"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SHIFTPATTERNDAY",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SHIFTPATTERNDAY",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Working time defined for a shift.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SHIFTNUM",
            "required": true,
            "persistent": true,
            "title": "Shift",
            "remarks": "Identifier of shift that this pattern day belongs to.",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        },
        {
            "attributeName": "PATTERNDAYSEQ",
            "required": true,
            "persistent": true,
            "title": "Sequence of Pattern Day",
            "remarks": "Ordinal number identifing a specific day within a repeating pattern of days.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": true,
            "title": "Start Time",
            "remarks": "Time the shift begins on a given day in the pattern. For example, if a shift includes a weekend, a weekend day in the pattern might have a different start time than a week day.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDTIME",
            "required": false,
            "persistent": true,
            "title": "End Time",
            "remarks": "Time the shift ends on a given day in the pattern. For example, if a shift includes a weekend, a weekend day in the pattern might have a different end time than a week day.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKHOURS",
            "required": false,
            "persistent": true,
            "title": "Work Hours",
            "remarks": "Number of working hours during the shift. For example, an 8 hour shift might have 7 work hours.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SHIFTPATTERNDAYID",
            "required": true,
            "persistent": true,
            "title": "SHIFTPATTERNDAYID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of Patternday sequence",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CALENDARBREAK",
            "target": "CALENDARBREAK",
            "remarks": "Relationship to the Shift's Calendar Break record(s). Used to find the break schedule for a given day for a given shift. (shiftnum=:shiftnum patterndayseq=:patterndayseq and orgid=:orgid). The resulting set will contain zero or many objects.",
            "whereClause": "shiftnum=:shiftnum and patterndayseq=:patterndayseq and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "DAYSYNONYM",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to the synonymdomain table on shiftpatternday.",
            "whereClause": "domainid = 'DAYNAME' and maxvalue = :patterndayseq",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SHIFTPATTERNDAY",
            "source": "SHIFT",
            "remarks": "Relationship to the Shift's ShiftPatternday record(s). Used to find shiftpatternday set for a given shift. (Shiftpatternday.shiftnum=Shift.shiftnum). The resulting set will contain zero or seven objects.",
            "whereClause": "shiftnum=:shiftnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}