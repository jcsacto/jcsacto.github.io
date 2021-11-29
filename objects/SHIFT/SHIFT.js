mos = {
    "objectName": "SHIFT",
    "className": "psdi.app.calendar.ShiftSet",
    "description": "The SHIFT Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SHIFTID",
    "primaryKeyColumns": [
        "ORGID",
        "SHIFTNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "SHIFT",
            "targetObject": "AMCREW",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "AMCREWLABOR",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Labor Shift",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "AMCREWTOOL",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Tool Shift",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "ASSET",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Shift",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "CALENDARBREAK",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "CI",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ASSETLOCORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset / Location Shift",
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
            "objectName": "SHIFT",
            "targetObject": "ESCREFPOINT",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, CALCSHIFT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ASSETORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORIGRECORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "LBSCREWVIEW",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "LBSLABORVIEW",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "LOCOPER",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "PERSONCAL",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ASSETORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORIGRECORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 15",
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
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SKDACTIVITYQBE",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Activity QBE Shift",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Extra Capacity Crew Shift",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID1, SHIFTNUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SKDPROJECTSHIFTS",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Project Shift",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SLA",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, CALCSHIFT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift used to calculate target date",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SLA",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, SLASHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SLA",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SLA",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SLASHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SLA",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "SLAORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SLA",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "SLAORGID, SLASHIFT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift Hours SLA is valid.",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SLARECORDS",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, CALCSHIFT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift used for target calculations.",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SR",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ASSETORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SR",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 26",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SR",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SR",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORIGRECORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 28",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ASSETORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 29",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, CALCSHIFT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift used for target calculations",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 31",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORIGRECORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 32",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, CALCSHIFT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift used for target calculations",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 34",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, CALCSHIFT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift used in target calculations.",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 36",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, CALCSHIFT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift used in target calculations",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 38",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, CALCSHIFT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift used for target date calculation",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 40",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "SHIFT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SHIFT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SHIFTNUM",
            "required": true,
            "persistent": true,
            "title": "Shift",
            "remarks": "Identifies the shift, for example, NIGHT, for the standard night shift",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the shift in a short phrase, for example, Evening Shift 1500 to 2300. Limited to one line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDAY",
            "required": true,
            "persistent": true,
            "title": "Start Day",
            "remarks": "Day of the week on which the shift begins.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization the shift belongs to.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for One Line Short Shift Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAYSINPATTERN",
            "required": false,
            "persistent": false,
            "title": "Days in Pattern",
            "remarks": "Number of days in the shift's pattern, for example, 7 in a typical weekly shift.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIFTID",
            "required": true,
            "persistent": true,
            "title": "SHIFTID",
            "remarks": "Unique Identifier",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from SHIFT.",
            "whereClause": "ldkey=:shiftid and ldownertable = 'SHIFT'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIFTPATTERNDAY",
            "target": "SHIFTPATTERNDAY",
            "remarks": "Relationship to the Shift's ShiftPatternday record(s). Used to find shiftpatternday set for a given shift. (Shiftpatternday.shiftnum=Shift.shiftnum). The resulting set will contain zero or seven objects.",
            "whereClause": "shiftnum=:shiftnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIFTORGFORSHIFTRANGE",
            "target": "SHIFTRANGE",
            "remarks": null,
            "whereClause": "shiftnum=:shiftnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SELECTORGSHIFT",
            "source": "CALENDAR",
            "remarks": null,
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIFT",
            "source": "PERSONCAL",
            "remarks": "Relationship to the Shift table.  Used to find the shift whose shiftnum is contained in this personcals shiftnum.  (personcal.shiftnum=shift.shiftnum).  The resulting set will return zero or one object.",
            "whereClause": "shiftnum=:shiftnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIFT",
            "source": "SKDPROJECT",
            "remarks": "To get the Shifts for a Schedule's Calendar from Shifts table.",
            "whereClause": "orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "SKDSHIFT",
            "source": "SKDPROJECT",
            "remarks": "Shift for a project",
            "whereClause": "orgid = :orgid",
            "cardinality": null
        }
    ]
}