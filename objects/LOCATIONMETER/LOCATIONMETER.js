mos = {
    "objectName": "LOCATIONMETER",
    "className": "psdi.app.location.LocationMeterSet",
    "description": "Information for meters attached to locations",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LOCATIONMETERID",
    "primaryKeyColumns": [
        "LOCATION",
        "METERNAME",
        "SITEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "LOCATIONMETER",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCATIONMETER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "LOCATIONMETER",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Point",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LOCATIONMETER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LOCATIONMETER",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 120",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "LOCATIONMETER",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LOCATIONMETER",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONMETER",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONMETER",
            "parentKeys": "PERSONID",
            "targetKeys": "LASTREADINGINSPCTR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Reading Inspector",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCATIONMETER",
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
            "attributeName": "LOCATION",
            "required": true,
            "persistent": true,
            "title": "Location",
            "remarks": "Location to which the meter is attached",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "METERNAME",
            "required": true,
            "persistent": true,
            "title": "Meter",
            "remarks": "Identifier for the meter attached to the location, for example HOURS or KILOMETERS.",
            "sameAsAttribute": "METERNAME",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Is this location's meter available to accept manual or rolled down readings, or to be used in PM or CM work order generation?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "Measure unit for the meter when attached to this location, for example LITERS or RPM",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
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
            "attributeName": "AVGCALCMETHOD",
            "required": false,
            "persistent": true,
            "title": "Average Calculation Method",
            "remarks": "Method used to calculate the average meter units per day:  STATIC, ALL or SLIDING.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SLIDINGWINDOWSIZE",
            "required": false,
            "persistent": true,
            "title": "Sliding Window Size",
            "remarks": "The number of readings, days, weeks or months to include in a sliding average meter unit calculation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SINCELASTREPAIR",
            "required": true,
            "persistent": true,
            "title": "Since Last Repair",
            "remarks": "Difference between current meter reading and the meter reading when the last work order was opened or closed as determined by the application setup.",
            "sameAsAttribute": "SINCELASTREPAIR",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "SINCELASTOVERHAUL",
            "required": true,
            "persistent": true,
            "title": "Since Last Overhaul",
            "remarks": "Difference between the current meter reading and the meter reading when the last work order of type OVERHAUL was opened or closed as determined by application setup.",
            "sameAsAttribute": "SINCELASTOVERHAUL",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "SINCELASTINSPECT",
            "required": true,
            "persistent": true,
            "title": "Since Last Inspection",
            "remarks": "Difference between the current meter reading and the meter reading when the last work order of type INSPECTION was opened or closed as determined by application setup.",
            "sameAsAttribute": "SINCELASTINSPECT",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "SINCEINSTALL",
            "required": true,
            "persistent": true,
            "title": "Since Install",
            "remarks": "Difference between the current meter reading and the meter reading when this LocationMeter's location was moved into its current configuration.",
            "sameAsAttribute": "SINCEINSTALL",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "LIFETODATE",
            "required": true,
            "persistent": true,
            "title": "Life to Date for Location",
            "remarks": "Total readings over the life of this location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Name of user who last modified this record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date and time record was last modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Additional information supplied by the user regarding the LocationMeter record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site identifier for this LocationMeter.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization ",
            "remarks": "Organization identifier for this LocationMeter.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "REMARKS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Remarks Long Description",
            "remarks": "Long Description for Additional information supplied by the user regarding the LocationMeter record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOMAINID",
            "required": false,
            "persistent": false,
            "title": "Domain",
            "remarks": "Non-persistent attribute. For LocationMeters associated with CHARACTERISTIC meters only, this attribute holds domain information from the Meter.  This domain information is used to validate a new CHARACTERISTIC measurement.",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "INSPECTOR",
            "required": false,
            "persistent": false,
            "title": "Inspector",
            "remarks": "INSPECTOR",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "LASTREADINGDATE",
            "required": false,
            "persistent": true,
            "title": "Last Reading Date",
            "remarks": "Date of last reading for this location meter.",
            "sameAsAttribute": "NEWREADINGDATE",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "LASTREADING",
            "required": false,
            "persistent": true,
            "title": "Last Reading",
            "remarks": "Last reading taken for this location meter",
            "sameAsAttribute": "NEWREADING",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "NEWREADINGDATE",
            "required": false,
            "persistent": false,
            "title": "New Reading Date",
            "remarks": "NEWREADINGDATE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELTAVALUE",
            "required": false,
            "persistent": false,
            "title": "Reading",
            "remarks": "DELTAVALUE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISDELTA",
            "required": true,
            "persistent": false,
            "title": "Delta",
            "remarks": "ISDELTA",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWREADING",
            "required": false,
            "persistent": false,
            "title": "New Reading",
            "remarks": "NEWREADING",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POINTNUM",
            "required": false,
            "persistent": true,
            "title": "Point",
            "remarks": "identifier of this LocationMeter's related condition monitoring point.  A condition monitoring point is related if it shares this LocationMeter's Location and MeterName",
            "sameAsAttribute": "POINTNUM",
            "sameAsObject": "MEASUREPOINT"
        },
        {
            "attributeName": "AVERAGE",
            "required": false,
            "persistent": true,
            "title": "Average Units/Day",
            "remarks": "Average units per day for this AssetMeter",
            "sameAsAttribute": "AVERAGE",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "READINGTYPE",
            "required": false,
            "persistent": true,
            "title": "Reading Type",
            "remarks": "reading type (CONTINUOUS or DELTA) for this LocationMeter. Location meter readings default to this LocationMeter's readingtype value.",
            "sameAsAttribute": "READINGTYPE",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "PREVIOUSREADING",
            "required": false,
            "persistent": false,
            "title": "Previous Reading",
            "remarks": "non-persistent attribute that is the reading just previous to the location meter reading being added or updated.",
            "sameAsAttribute": "NEWREADING",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "PREVIOUSREADINGDATE",
            "required": false,
            "persistent": false,
            "title": "Previous Reading Date",
            "remarks": "non-persistent attribute that is the date of the location meter reading just previous to the location meter reading being added or updated.",
            "sameAsAttribute": "NEWREADINGDATE",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "LASTREADINGINSPCTR",
            "required": false,
            "persistent": true,
            "title": "Last Reading Inspector",
            "remarks": "inspector for this assetmeter's most recent meter reading",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PREVIOUSREADINGINSPECTOR",
            "required": false,
            "persistent": false,
            "title": "Previous Reading Inspector",
            "remarks": "inspector for the most recent reading that is prior to the date of interest, either the system date or a user-specified date.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "NEWREADINGROLLOVERINCLUSIVE",
            "required": false,
            "persistent": false,
            "title": "New Reading to Save",
            "remarks": "Set to the reading value resulting from any rollover calculations.  If there is not a rollover, then this value will be the same as the non-persistent NewReading attribute.",
            "sameAsAttribute": "NEWREADING",
            "sameAsObject": "LOCATIONMETER"
        },
        {
            "attributeName": "LOCATIONMETERID",
            "required": true,
            "persistent": true,
            "title": "LOCATIONMETERID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SINCELASTREPAIRNEW",
            "required": false,
            "persistent": false,
            "title": "Since Last Repair",
            "remarks": "Reset 'Since Last Repair' value",
            "sameAsAttribute": "SINCELASTREPAIR",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "SINCELASTOVERHAULNEW",
            "required": false,
            "persistent": false,
            "title": "Since Last Overhaul",
            "remarks": "Reset 'Since Last Overhaul' value",
            "sameAsAttribute": "SINCELASTOVERHAUL",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "SINCELASTINSPECTNEW",
            "required": false,
            "persistent": false,
            "title": "Since Last Inspection",
            "remarks": "Reset 'Since Last Inspection' value",
            "sameAsAttribute": "SINCELASTINSPECT",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "SINCEINSTALLNEW",
            "required": false,
            "persistent": false,
            "title": "Since Install",
            "remarks": "Reset 'Since Install' value",
            "sameAsAttribute": "SINCEINSTALL",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "ROLLOVERNEW",
            "required": false,
            "persistent": false,
            "title": "Rollover",
            "remarks": "Reset 'Rollover' value",
            "sameAsAttribute": "ROLLOVER",
            "sameAsObject": "METERINGROUP"
        },
        {
            "attributeName": "AVERAGENEW",
            "required": false,
            "persistent": false,
            "title": "Average",
            "remarks": "Reset 'Average' value",
            "sameAsAttribute": "AVERAGE",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "LASTREADINGNEW",
            "required": false,
            "persistent": false,
            "title": "Last Reading",
            "remarks": "Reset 'LastReading' value pertains to LocationMeters with CONTINUOUS meters only.",
            "sameAsAttribute": "READING",
            "sameAsObject": "METERREADING"
        },
        {
            "attributeName": "LASTREADINGDATENEW",
            "required": false,
            "persistent": false,
            "title": "Last Reading Date",
            "remarks": "Reset 'LastReadingDate' value",
            "sameAsAttribute": "NEWREADINGDATE",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "LASTREADINGINSPCTRNEW",
            "required": false,
            "persistent": false,
            "title": "Last Reading Inspector",
            "remarks": "Reset 'LastReadingInspctr' value",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
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
            "attributeName": "DOROLLOVER",
            "required": true,
            "persistent": false,
            "title": "Rollover",
            "remarks": "non-persistent attribute to indicate if a new reading should cause the meter to roll over",
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
            "attributeName": "SEQUENCE",
            "required": false,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Meter display sequence",
            "sameAsAttribute": "SEQUENCE",
            "sameAsObject": "METERINGROUP"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find Assets associated with the LocationMeter's Location. The WHERE clause is: asset.location= locationmeter.location and asset.siteid = locationmeter.siteid and exists (select assetnum from assetmeter where assetmeter.assetnum=asset.assetnum and assetmeter.siteid=asset.siteid and assetmeter.siteid = locationmeter.siteid and assetmeter.metername=locationmeter.metername and assetmeter.active=:yes and assetmeter.rolldownsource in (select value from SYNONYMDOMAIN where DOMAINID='ROLLDOWNSOURCE' and maxvalue='LOCATION')). The resulting set will contain zero or more objects.",
            "whereClause": "location= :location and siteid = :siteid and exists (select assetnum from assetmeter where assetmeter.assetnum=asset.assetnum and assetmeter.siteid=asset.siteid and assetmeter.siteid = :siteid and assetmeter.metername=:metername and assetmeter.active=:yes and assetmeter.rolldownsource in (select value from synonymdomain where domainid='ROLLDOWNSOURCE' and maxvalue='LOCATION'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Location table, used to get the Location associated with this LocationMeter. The WHERE clause is: locations.location = locationmeter.location and locations.siteid = locationmeter.siteid and locations.orgid =  locationmeter.orgid. The resulting set will contain one object.",
            "whereClause": "location = :location and siteid = :siteid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCMETERREADING",
            "target": "LOCMETERREADING",
            "remarks": "Relationship to the LocMeterReading table, used to find LocMeterReadings associated with the LocationMeter. The WHERE clause is: locmeterreading.location = locationmeter.location and locmeterreading.metername = locationmeter.metername and locmeterreading.siteid = locationmeter.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and metername = :metername and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWMETERREADING",
            "target": "LOCMETERREADING",
            "remarks": "Relationship to the LocMeterReading table, used to get an empty LocMeterReading to create a new location meter reading for the current LocationMeter object.",
            "whereClause": "1=2 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWMEASUREMENT",
            "target": "MEASUREMENT",
            "remarks": "Relationship to the Measurement table, used to get an empty measurement set so that a new measurement can be added for the LocationMeter. The WHERE clause is: 1=2. The resulting set will contain zero objects.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREMENT",
            "target": "MEASUREMENT",
            "remarks": "Relationship to the Measurement table, used to find the measurements for this characteristic or gauge LocationMeter. (measurement.metername=locationmeter.metername and measurement.location=locationmeter.location and measurement.siteid=locationmeter.siteid). This resulting set will contain zero or more objects.",
            "whereClause": "metername=:metername and location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREPOINT",
            "target": "MEASUREPOINT",
            "remarks": "Relationship to the MeasurePoint table, used to find MeasurePoints associated with the LocationMeter. The WHERE clause is: measurepoint.location = locationmeter.location and measurepoint.metername = locationmeter.metername and measurepoint.siteid = locationmeter.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and metername = :metername and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "target": "METER",
            "remarks": "Relationship to the Meter table, used to find the Meter associated with the LocationMeter. The WHERE clause is: meter.metername = locationmeter.metername. The resulting set will contain one object.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMMETER",
            "target": "PMMETER",
            "remarks": "Relationship to the PMMeter records for this LocationMeter. (pmmeter.location = locationmeter.location and pmmeter.metername = locationmeter.metername and pmmeter.siteid = locationmeter.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and metername=:metername and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AVERAGECALCMETHOD",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship from LocationMeter to Synonymdomain to get the description for the locationmeter's average calculation method",
            "whereClause": "domainid='AVERAGEMETHOD' and value=:avgcalcmethod",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "INT_LOCATIONMETER",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocationMeter table for INT table. The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMETER",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocationMeter table, used to find LocationMeters associated with the Location. The WHERE clause is: locationmeter.location = locations.location and locationmeter.siteid = locations.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMETERCONTINUOUS",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocationMeter object, used to find the location meters for the current location that have a CONTINUOUS meter type",
            "whereClause": "location = :location and siteid = :siteid and exists (select metername from meter where metername=locationmeter.metername and metertype in (select value from synonymdomain where maxvalue='CONTINUOUS' and domainid='METERTYPE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVELOCATIONMETER",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocationMeter table, used to find active LocationMeters associated with the Location. The WHERE clause is: locationmeter.active = :yes and locationmeter.location = locations.location and locationmeter.siteid = locations.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "active=:yes and location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEPLOYEDMETER",
            "source": "LOCMETERREADING",
            "remarks": "Relationship to the LocationMeter table, used to get the LocationMeter associated with this LocMeterReading. The WHERE clause is: locationmeter.location = locmeterreading.location and locationmeter.metername = locmeterreading.metername and locationmeter.siteid = locmeterreading.siteid. The resulting set will contain one object.",
            "whereClause": "location = :location and metername = :metername and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMETER",
            "source": "LOCMETERREADING",
            "remarks": "Relationship to the LOCATIONMETER table, used to get the LOCATIONMETER for this LOCMETERREADING. The WHERE clause is: locationmeter.location=locmeterreading.location and locationmeter.metername=locmeterreading.metername and locationmeter.siteid=locmeterreading.siteid. The resulting set will contain one object.",
            "whereClause": "location=:location and metername=:metername and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMETER",
            "source": "LOCOPER",
            "remarks": "Relationship to the LocationMeter table, used to find the LocationMeter objects associated with this LocOper's location and siteid. The WHERE clause is: locationmeter.location = locoper.location and locationmeter.siteid = locoper.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMETER",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the LocationMeter table, used to find the LocationMeter associated with the MeasurePoint. The WHERE clause is: locationmeter.metername = measurepoint.metername and locationmeter.location = measurepoint.location and locationmeter.siteid = measurepoint.siteid. The resulting set will contain zero or one object.",
            "whereClause": "metername = :metername and location = :location and siteid = :siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "LOCATIONMETER",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the locationmeter table, used to find all locationmeter records using this measureunit. (locationmeter.measureunitid=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMETER",
            "source": "METER",
            "remarks": "Relationship to the LocationMeter table, used to find all locations using this meter. (locationmeter.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMETER",
            "source": "METERGROUP",
            "remarks": "Relationship to the LocationMeter table, used to get the LocationMeter associated with this MeterGroup. The WHERE clause is: locationmeter.groupname = metergroup.metername. The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVELOCATIONMETER",
            "source": "MULTIASSETLOCCI",
            "remarks": "Relationship to the LOCATIONMETER table, used to get the LOCATIONMETERs for this location. The resulting set will contain zero or more objects.  ",
            "whereClause": "active=:yes and location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMETER",
            "source": "PMMETER",
            "remarks": "Relationsip to the PMMeters Location Meter records,used to find all location meter records for a given PMMeter",
            "whereClause": "location=:location",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONPMMETER",
            "source": "PMMETER",
            "remarks": "Relationsip to the PMMeters Location Meter records,used to find all location meter records for a given PMMeter metername",
            "whereClause": "location=:location and metername=:metername and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVELOCATIONMETER",
            "source": "WORKORDER",
            "remarks": "Relationship to the LOCATIONMETER table, used to get the LOCATIONMETERs for this WORKORDER. The WHERE clause is: active=:yes and workorder.location=locationmeter.location and workorder.siteid=:locationmeter.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "active=:yes and location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}