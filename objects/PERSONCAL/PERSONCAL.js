mos = {
    "objectName": "PERSONCAL",
    "className": "psdi.app.person.PersonCalSet",
    "description": "The Person Calendar Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PERSONCALID",
    "primaryKeyColumns": [
        "PERSONID",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CALENDAR",
            "targetObject": "PERSONCAL",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Calendar",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PERSONCAL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSONCAL",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendars for Person",
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
        }
    ],
    "columns": [
        {
            "attributeName": "PERSONID",
            "required": true,
            "persistent": true,
            "title": "Person",
            "remarks": "Person",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The organization associated with this person's calendar.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CALNUM",
            "required": true,
            "persistent": true,
            "title": "Calendar",
            "remarks": "The calendar record associated with this person.",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "SHIFTNUM",
            "required": false,
            "persistent": true,
            "title": "Shift",
            "remarks": "The shift record associated with this person.",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        },
        {
            "attributeName": "PERSONCALID",
            "required": true,
            "persistent": true,
            "title": "PERSONCALID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISPRIMARY",
            "required": true,
            "persistent": true,
            "title": "Primary",
            "remarks": "Indicates that this is the primary calendar record associated with this person. Only one calendar record can be set to primary; by default, the first calendar record entered is set to primary.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CALENDAR",
            "target": "CALENDAR",
            "remarks": "Relationship to the calendar table.  Used to find the calendar whose calnumis contained in this personcals calnum.  (personcal.calnum=calendar.calnum).  The resulting set will return zero or one object.",
            "whereClause": "calnum=:calnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIFT",
            "target": "SHIFT",
            "remarks": "Relationship to the Shift table.  Used to find the shift whose shiftnum is contained in this personcals shiftnum.  (personcal.shiftnum=shift.shiftnum).  The resulting set will return zero or one object.",
            "whereClause": "shiftnum=:shiftnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PERSONCAL",
            "source": "AMCREWLABOR",
            "remarks": "Relationship between AMCREWLABOR and PERSONCAL tables.",
            "whereClause": "personid in (select personid from labor where laborcode = :laborcode and orgid = :orgid) and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "PERSONCAL",
            "source": "LABOR",
            "remarks": "Relationship to the PERSONCAL table on personid. (personcal.personid=labor.personid and personcal.orgid=labor.orgid.)  This will return 0 or 1 item.",
            "whereClause": "personid=:personid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONCALNOORG",
            "source": "LABOR",
            "remarks": "Relationship to the personcal table ignoring organization.  Will return 0 or more objects.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CAL",
            "source": "LABOR",
            "remarks": "Relationship to the PersonCal table. (labor.personid=personcal.personid AND labor.orgid=personcal.orgid).  Will return the associated Personcal object. This relaitonship will return 0 or 1 objects.",
            "whereClause": "personid=:personid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONCAL",
            "source": "PERSON",
            "remarks": "Relationship to the personcal table. Used to find the personcal records of this person. (personcal.personid=person.personid). The resulting set will be zero or more records.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON_HOMECAL",
            "source": "PERSON",
            "remarks": "Relationship to the personcal table. Used to find the personcal records of this person for the locationorg associated with the persons home location. The resulting set will be zero or more records.",
            "whereClause": "personid=:personid and orgid=:locationorg",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYPERSONCAL",
            "source": "PERSON",
            "remarks": "Relationship to the personcal table where the personids match and isprimary is true",
            "whereClause": "personid=:personid and isprimary=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONCAL",
            "source": "PERSONGROUP",
            "remarks": "Enable lookup=\"personcal\" to work",
            "whereClause": ":respparty=personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPTEAM_PERSONCAL",
            "source": "PERSONGROUPTEAM",
            "remarks": "Relationship to allow retrieval of personcal info using persongroupteam",
            "whereClause": "personid=:respparty",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONCAL",
            "source": "PERSONGROUPVIEW",
            "remarks": null,
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        }
    ]
}