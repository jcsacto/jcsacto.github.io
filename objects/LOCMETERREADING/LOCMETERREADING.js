mos = {
    "objectName": "LOCMETERREADING",
    "className": "psdi.app.location.LocMeterReadingSet",
    "description": "Readings and observations recorded on meters.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "METERREADINGID",
    "primaryKeyColumns": [
        "METERREADINGID",
        "SITEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCMETERREADING",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LOCMETERREADING",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 122",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LOCMETERREADING",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "LOCMETERREADING",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LOCMETERREADING",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCMETERREADING",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCMETERREADING",
            "parentKeys": "PERSONID",
            "targetKeys": "INSPECTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inspector",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCMETERREADING",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "METERREADINGID",
            "required": true,
            "persistent": true,
            "title": "Meter Reading ID",
            "remarks": "Unique identifier for this meter reading.  This value is automatically generated for each new meter reading.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": true,
            "persistent": true,
            "title": "Location",
            "remarks": "Identifier of location for which this meter reading is being recorded.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "METERNAME",
            "required": true,
            "persistent": true,
            "title": "Meter",
            "remarks": "Meter for which the current reading is being recorded.",
            "sameAsAttribute": "METERNAME",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "READINGTYPE",
            "required": false,
            "persistent": true,
            "title": "Reading Type",
            "remarks": "Reading can be ACTUAL or DELTA.",
            "sameAsAttribute": "READINGTYPE",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "DELTA",
            "required": false,
            "persistent": true,
            "title": "Delta",
            "remarks": "Difference between this and the last meter reading. The actual reading is recorded separately in the Reading column.",
            "sameAsAttribute": "READING",
            "sameAsObject": "METERREADING"
        },
        {
            "attributeName": "READING",
            "required": false,
            "persistent": true,
            "title": "Reading",
            "remarks": "Actual reading for the meter.  The delta is recorded separately in the Delta column.",
            "sameAsAttribute": "READING",
            "sameAsObject": "METERREADING"
        },
        {
            "attributeName": "ROLLOVER",
            "required": false,
            "persistent": true,
            "title": "Rollover",
            "remarks": "Point at which the location's meter returns to the its mininum value.  Rollover applies to CONTINUOUS meters only.",
            "sameAsAttribute": "ROLLOVER",
            "sameAsObject": "METERINGROUP"
        },
        {
            "attributeName": "MEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "Unit of measure for this meter reading.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "READINGDATE",
            "required": true,
            "persistent": true,
            "title": "Reading Date",
            "remarks": "Date and time that this meter reading is being entered.  The value defaults to the system date and time, but the user can modify it as long as it is not in the future.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSPECTOR",
            "required": true,
            "persistent": true,
            "title": "Inspector",
            "remarks": "Person who reported the meter reading.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "Current login name - cannot be modified by user.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "System date and time when the MeterReading was entered - cannot be modified by user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MODIFIED",
            "required": true,
            "persistent": true,
            "title": "Modified",
            "remarks": "True if this location meterreading has been modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site identifier for this MeterReading.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier for this MeterReading.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ISMODIFICATIONADELTA",
            "required": true,
            "persistent": false,
            "title": "Enter as Delta",
            "remarks": "ISMODIFICATIONADELTA",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "READINGISDELTA",
            "required": true,
            "persistent": false,
            "title": "Entered as Delta",
            "remarks": "READINGISDELTA",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MODIFIEDDELTA",
            "required": false,
            "persistent": false,
            "title": "Modified Delta",
            "remarks": "MODIFIEDDELTA",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MODIFIEDREADING",
            "required": false,
            "persistent": false,
            "title": "Modified Reading",
            "remarks": "MODIFIEDREADING",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DIDROLLOVER",
            "required": true,
            "persistent": true,
            "title": "Did Reading Roll Over",
            "remarks": "Yes/No flag indicating whether a rollover occured during the setting of this location meterreading's value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOROLLOVER",
            "required": true,
            "persistent": false,
            "title": "Rollover",
            "remarks": "non-persistent attribute to indicate if a reading update will cause the meter to roll over",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REASON",
            "required": false,
            "persistent": true,
            "title": "Reason",
            "remarks": "reason for modification to historical meter reading",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DEPLOYEDMETER",
            "target": "LOCATIONMETER",
            "remarks": "Relationship to the LocationMeter table, used to get the LocationMeter associated with this LocMeterReading. The WHERE clause is: locationmeter.location = locmeterreading.location and locationmeter.metername = locmeterreading.metername and locationmeter.siteid = locmeterreading.siteid. The resulting set will contain one object.",
            "whereClause": "location = :location and metername = :metername and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMETER",
            "target": "LOCATIONMETER",
            "remarks": "Relationship to the LOCATIONMETER table, used to get the LOCATIONMETER for this LOCMETERREADING. The WHERE clause is: locationmeter.location=locmeterreading.location and locationmeter.metername=locmeterreading.metername and locationmeter.siteid=locmeterreading.siteid. The resulting set will contain one object.",
            "whereClause": "location=:location and metername=:metername and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "target": "METER",
            "remarks": "Relationship to the Meter table, used to get the Meter associated with this LocMeterReading. The WHERE clause is: meter.metername = locmeterreading.metername. The resulting set will contain one object.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDMETERREADINGS",
            "target": "METERREADING",
            "remarks": "Relationship to the METERREADING table, used to find all MeterReadings originating from this LocMeterReading. The WHERE clause is: meterreading.locmeterreadingid = locmeterreading.meterreadingid and meterreading.siteid = locmeterreading.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "locmeterreadingid = :meterreadingid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LOCMETERREADING",
            "source": "LOCATIONMETER",
            "remarks": "Relationship to the LocMeterReading table, used to find LocMeterReadings associated with the LocationMeter. The WHERE clause is: locmeterreading.location = locationmeter.location and locmeterreading.metername = locationmeter.metername and locmeterreading.siteid = locationmeter.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and metername = :metername and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWMETERREADING",
            "source": "LOCATIONMETER",
            "remarks": "Relationship to the LocMeterReading table, used to get an empty LocMeterReading to create a new location meter reading for the current LocationMeter object.",
            "whereClause": "1=2 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCMETERREADINGS",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocMeterReading table, used to find the LocMeterReadings associated with the Location. The WHERE clause is: locmeterreading.location = locations.location and locmeterreading.orgid = locations.orgid. The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and orgid = :orgid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCMETERREADING",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the locmeterreading table, used to find all locmeterreading records using this measureunit. (locmeterreading.measureunitid=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCMETERREADING",
            "source": "METER",
            "remarks": "Relationship to the LocMeterReading table, used to find all locmeterreadings having this meter. (locmeterreading.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCMETERREADING",
            "source": "PMMETER",
            "remarks": "Relationsip to the PMMeters Locmeterreading records,used to find all location meter records for a given PMMeter metername/location",
            "whereClause": "location=:location and metername=:metername and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}