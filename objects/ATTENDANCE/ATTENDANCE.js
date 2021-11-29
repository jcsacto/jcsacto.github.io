mos = {
    "objectName": "ATTENDANCE",
    "className": "psdi.app.labor.AttendanceSet",
    "description": "The ATTENDANCE Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ATTENDANCEID",
    "primaryKeyColumns": [
        "ATTENDANCEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LABOR",
            "targetObject": "ATTENDANCE",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ATTENDANCE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ATTENDANCE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LABORCODE",
            "required": true,
            "persistent": true,
            "title": "Labor",
            "remarks": "Labor for whom you are recording attendance.",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "STARTDATE",
            "required": true,
            "persistent": true,
            "title": "Start Date",
            "remarks": "The start date of the labor's attendance for this transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": true,
            "title": "Start Time",
            "remarks": "The start time of the labor's attendance for this transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINISHDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "The finish date of the labor's attendance for this transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINISHTIME",
            "required": false,
            "persistent": true,
            "title": "End Time",
            "remarks": "The finish time of the labor's attendance for this transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABORHOURS",
            "required": true,
            "persistent": true,
            "title": "Hours",
            "remarks": "Total hours for attendance transaction. Maximo calculates this value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "The date the labor signed and submitted the time card.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TRANSDATE",
            "required": true,
            "persistent": true,
            "title": "Transaction Date",
            "remarks": "The date and time the attendance was entered into Maximo. The default is the current system date/time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "Maximo user name of person who recorded the attendance.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ATTENDANCEID",
            "required": true,
            "persistent": true,
            "title": "ATTENDANCEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "ATTENDANCE",
            "source": "LABOR",
            "remarks": "Relationship to the Attendance table.Used to find out Attendance for the Labor. (Attendance.laborcode=Labor.laborcode). The resultset will contain more than 1 object.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANSATTENDANCE",
            "source": "LABTRANS",
            "remarks": "Relationship to the Attendance table.Used to find out Attendance for the Labortrans labor. (Attendance.laborcode=Labor.laborcode). The resultset will contain more than 1 object.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANSENTERBY_ATTENDANCE",
            "source": "LABTRANSENTERBY",
            "remarks": "Relationship from non persistent table labtransenterby to attendance",
            "whereClause": "laborcode=:laborcode",
            "cardinality": "UNDEFINED"
        }
    ]
}