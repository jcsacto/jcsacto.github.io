mos = {
    "objectName": "ASSETMETER",
    "className": "psdi.app.asset.AssetMeterSet",
    "description": "The ASSETMETER Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASSETMETERID",
    "primaryKeyColumns": [
        "ASSETNUM",
        "METERNAME",
        "SITEID",
        "LINEARASSETMETERID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "ASSETMETER",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Current Asset''s AssetMeter records. The meters on the asset.",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETMETER",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETMETER",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETMETER",
            "parentKeys": "FEATURE",
            "targetKeys": "ENDFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETMETER",
            "parentKeys": "FEATURE",
            "targetKeys": "STARTFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Feature",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "ASSETMETER",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "ASSETMETER",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Point",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "BASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 43",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 46",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 47",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 48",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "ASSETMETER",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSETMETER",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETMETER",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETMETER",
            "parentKeys": "PERSONID",
            "targetKeys": "LASTREADINGINSPCTR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Reading Inspector",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETMETER",
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
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset number to which the meter is attached",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "METERNAME",
            "required": true,
            "persistent": true,
            "title": "Meter",
            "remarks": "Identifier for the meter attached to the asset, for example HOURS or KILOMETERS.",
            "sameAsAttribute": "METERNAME",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Is this asset's meter available to accept manual or rolled down readings, or to be used in PM or CM work order generation?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "Measure unit for the meter when attached to this asset, for example LITERS or RPM",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ROLLOVER",
            "required": false,
            "persistent": true,
            "title": "Rollover",
            "remarks": "Point at which the asset's meter returns to the its mininum value. Rollover applies to CONTINUOUS meters only.",
            "sameAsAttribute": "ROLLOVER",
            "sameAsObject": "METERINGROUP"
        },
        {
            "attributeName": "AVGCALCMETHOD",
            "required": false,
            "persistent": true,
            "title": "Average Calculation Method",
            "remarks": "Method used to calculate the average meter units per day: STATIC, ALL or SLIDING.",
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
            "attributeName": "ROLLDOWNSOURCE",
            "required": false,
            "persistent": true,
            "title": "Accept Rolldown From",
            "remarks": "Identifies whether or not an asset's meter accepts a reading delta from a parent asset's or location's meter. A value of NONE indicates that this Meter does not accept rolled down parent readings.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SINCELASTREPAIR",
            "required": true,
            "persistent": true,
            "title": "Since Last Repair",
            "remarks": "Difference between current meter reading and the meter reading when the last work order was opened or closed as determined by the application setup.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SINCELASTOVERHAUL",
            "required": true,
            "persistent": true,
            "title": "Since Last Overhaul",
            "remarks": "Difference between the current meter reading and the meter reading when the last work order of type OVERHAUL was opened or closed as determined by application setup.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SINCELASTINSPECT",
            "required": true,
            "persistent": true,
            "title": "Since Last Inspection",
            "remarks": "Difference between the current meter reading and the meter reading when the last work order of type INSPECTION was opened or closed as determined by application setup.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SINCEINSTALL",
            "required": true,
            "persistent": true,
            "title": "Since Install",
            "remarks": "Difference between the current meter reading and the meter reading when this AssetMeter's asset was moved into its current configuration.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LIFETODATE",
            "required": true,
            "persistent": true,
            "title": "Life to Date for Asset",
            "remarks": "This value tracks the total use of an asset over its life span. It will always be equal to or exceed the last reading value and is used to determine the meter-based PM frequencies. If a meter does not roll over and is never replaced or reset, this value is the same as the last reading.  Even if the meter rolls over or the physical meter is replaced or reset, this value continues to increase because the value is based on the asset.",
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
            "remarks": "Additional information supplied by the user regarding the record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site identifier for this meter.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier for this AssetMeter.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "REMARKS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Remarks Long Description",
            "remarks": "Long Description for Additional information supplied by the user regarding the record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INHERITEDFROMASSET",
            "required": false,
            "persistent": false,
            "title": "Inherited From",
            "remarks": "Asset from which reading has been INHERITED during rolldown",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ADJUSTEDDELTAREADING",
            "required": false,
            "persistent": false,
            "title": "Reading",
            "remarks": "ADJUSTEDDELTAREADING",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOMAINID",
            "required": false,
            "persistent": false,
            "title": "Domain",
            "remarks": "This domain information is used to validate a new CHARACTERISTIC measurement.",
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
            "remarks": "Date of the last reading for this meter.",
            "sameAsAttribute": "NEWREADINGDATE",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "LASTREADING",
            "required": false,
            "persistent": true,
            "title": "Last Reading",
            "remarks": "Last reading taken for this meter. This should be the same as the most recent meter reading. An asset that was used before it was added to the system will have an asset meter reading. The last meter reading for an existing asset can be used as the initial meter reading for that asset in the system.",
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
            "attributeName": "LOCMETERREADINGID",
            "required": false,
            "persistent": false,
            "title": "Location Meter Reading Identifier",
            "remarks": "The AssetMeter's location's LocMeterReadingId when this meter reading is being rolled down from the location. This value is used to set the persistent LocMeterReadingId for the MeterReading.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POINTNUM",
            "required": false,
            "persistent": true,
            "title": "Point",
            "remarks": "identifier of this AssetMeter's related condition monitoring point.",
            "sameAsAttribute": "POINTNUM",
            "sameAsObject": "MEASUREPOINT"
        },
        {
            "attributeName": "AVERAGE",
            "required": false,
            "persistent": true,
            "title": "Average Units/Day",
            "remarks": "Average units per day for this meter",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "READINGTYPE",
            "required": false,
            "persistent": true,
            "title": "Reading Type",
            "remarks": "reading type (CONTINUOUS or DELTA) for this meter.",
            "sameAsAttribute": "READINGTYPE",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "PREVIOUSREADING",
            "required": false,
            "persistent": false,
            "title": "Previous Reading",
            "remarks": "non-persistent attribute that is the reading just previous to the meter reading being added or updated.",
            "sameAsAttribute": "NEWREADING",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "PREVIOUSREADINGDATE",
            "required": false,
            "persistent": false,
            "title": "Previous Reading Date",
            "remarks": "non-persistent attribute that is the date of the reading just previous to the meter reading being added or updated.",
            "sameAsAttribute": "NEWREADINGDATE",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "LASTREADINGINSPCTR",
            "required": false,
            "persistent": true,
            "title": "Last Reading Inspector",
            "remarks": "inspector for this meter's most recent meter reading",
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
            "remarks": "Set to the reading value resulting from any rollover calculations. If there is not a rollover, then this value will be the same as the non-persistent NewReading attribute.",
            "sameAsAttribute": "NEWREADING",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "ASSETMETERID",
            "required": true,
            "persistent": true,
            "title": "ASSETMETERID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SINCELASTREPAIRNEW",
            "required": false,
            "persistent": false,
            "title": "Since Last Repair",
            "remarks": "Reset Since Last Repair value",
            "sameAsAttribute": "SINCELASTREPAIR",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "SINCELASTOVERHAULNEW",
            "required": false,
            "persistent": false,
            "title": "Since Last Overhaul",
            "remarks": "Reset Since Last Overhaul value",
            "sameAsAttribute": "SINCELASTOVERHAUL",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "SINCELASTINSPECTNEW",
            "required": false,
            "persistent": false,
            "title": "Since Last Inspection",
            "remarks": "Reset Since Last Inspection value",
            "sameAsAttribute": "SINCELASTINSPECT",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "SINCEINSTALLNEW",
            "required": false,
            "persistent": false,
            "title": "Since Install",
            "remarks": "Reset Since Install value",
            "sameAsAttribute": "SINCEINSTALL",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "ROLLOVERNEW",
            "required": false,
            "persistent": false,
            "title": "Rollover",
            "remarks": "Reset Rollover value",
            "sameAsAttribute": "ROLLOVER",
            "sameAsObject": "METERINGROUP"
        },
        {
            "attributeName": "ASSETID",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "AssetId of this AssetMeter's AssetNum",
            "sameAsAttribute": "ASSETID",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "AVERAGENEW",
            "required": false,
            "persistent": false,
            "title": "Average",
            "remarks": "Reset Average value",
            "sameAsAttribute": "AVERAGE",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "LASTREADINGNEW",
            "required": false,
            "persistent": false,
            "title": "Last Reading",
            "remarks": "pertains to CONTINUOUS meters only.",
            "sameAsAttribute": "READING",
            "sameAsObject": "METERREADING"
        },
        {
            "attributeName": "LASTREADINGDATENEW",
            "required": false,
            "persistent": false,
            "title": "Last Reading Date",
            "remarks": "Reset LastReadingDate value",
            "sameAsAttribute": "NEWREADINGDATE",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "LASTREADINGINSPCTRNEW",
            "required": false,
            "persistent": false,
            "title": "Last Reading Inspector",
            "remarks": "Reset LastReadingInspctr value",
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
        },
        {
            "attributeName": "ENDFEATURE",
            "required": false,
            "persistent": true,
            "title": "End Feature",
            "remarks": "The feature (e.g. mile marker) that is used to identify where, on the linear asset, the meter reading was taken.",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "STARTFEATURE",
            "required": false,
            "persistent": true,
            "title": "Start Feature",
            "remarks": "The feature (e.g. mile marker) that is used to identify where, on the linear asset, the meter reading was taken.",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "ENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "End Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where this meter is defined.  This can be manually entered or calculated by entering an end reference point and end offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "Start Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where this meter is defined.  This can be manually entered or calculated by entering a start reference point and start offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Offset",
            "remarks": "Distance used in conjunction with the start reference point to determine where the meter resides.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Offset",
            "remarks": "Distance used in conjunction with the end reference point to determine where the meter resides.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTYOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDYOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTZOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDZOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Start Y Offset Referent",
            "remarks": "The point from which the Y Offset is measured (e.g. centerline, edge, etc).   The user can create a domain for this purpose.  The value entered will not be used in calculations, it is simply used to locate the feature in the field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "End Y Offset Referent",
            "remarks": "The point from which the Y Offset is measured (e.g. centerline, edge, etc).   The user can create a domain for this purpose.  The value entered will not be used in calculations, it is simply used to locate the feature in the field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTZOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Start Z Offset Referent",
            "remarks": "Reference point from which the start Z-Offset (distance above or below the linear asset) is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDZOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "End Z Offset Referent",
            "remarks": "Point from which the Z-Offset is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "label used to identify the specific AssetFeature used to locate the start of the portion of the linear asset for which this meter applies",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "label used to identify the specific AssetFeature used to locate the end of the portion of the linear asset for which this meter applies",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "STARTFEATUREID",
            "required": false,
            "persistent": true,
            "title": "StartFeature ID",
            "remarks": "unique identifier for the feature that marks the start of the section of the linear asset for which this meter applies",
            "sameAsAttribute": "FEATURESID",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "ENDFEATUREID",
            "required": false,
            "persistent": true,
            "title": "EndFeature ID",
            "remarks": "unique identifier for the feature that marks the end of the section of the linear asset for which this meter applies",
            "sameAsAttribute": "FEATURESID",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "STARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Start Asset Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the start offset, to determine the start measure for this meter.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "End Asset Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the end offset, to determine the end measure for this meter.",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "BASEMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Base Measure",
            "remarks": "Base Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ENDBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "End Base Measure",
            "remarks": "An absolute measure that is calculated by converting from the end measure using a defined conversion method.  Conversion methods are defined in the Assets application using the Add/Modify Conversions action.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of End Measure",
            "remarks": "End Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ENDOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of End Offset",
            "remarks": "Unit of measure for the offset (before or after) from the end reference point of this meter.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "STARTBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "Start Base Measure",
            "remarks": "An absolute measure that is calculated by converting from the end measure using a defined conversion method.  Conversion methods are defined in the Assets application using the Add/Modify Conversions action.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Start Measure",
            "remarks": "Start Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "STARTOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Start Offset",
            "remarks": "Unit of measure for the offset (before or after) from the start reference point of this meter.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "LINEARASSETMETERID",
            "required": true,
            "persistent": true,
            "title": "Linear Specification Id",
            "remarks": "Part of the primary key to differentiate Linear asset meters only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the ASSET table, used to find the Asset associated with the AssetMeter. The WHERE clause is: asset.assetnum = assetmeter.assetnum and asset.siteid = assetmeter.siteid and asset.orgid = assetmeter.orgid. The resulting set will contain one object.",
            "whereClause": "assetnum = :assetnum and siteid = :siteid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this assetmeter's linear Asset. (assetmeter.assetnum=asset.assetnum and assetmeter.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a this assetmeter's start asset feature. (assetfeature.assetfeatureid=assetmeter.startassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for this assetmeter's end asset feature. (assetfeature.assetfeatureid=assetmeter.endassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:endassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWMEASUREMENT",
            "target": "MEASUREMENT",
            "remarks": "Relationship to the Measurement table, used to get an empty measurement set so that a new measurement can be added for the AssetMeter. The WHERE clause is: 1=2. The resulting set will contain zero objects.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREMENT",
            "target": "MEASUREMENT",
            "remarks": "Relationship to the Measurement table, used to find the measurements for this characteristic or gauge AssetMeter. (measurement.metername=assetmeter.metername and measurement.assetnum=assetmeter.assetnum and measurement.siteid=assetmeter.siteid). This resulting set will contain zero or more objects.",
            "whereClause": "metername=:metername and assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREPOINT",
            "target": "MEASUREPOINT",
            "remarks": "Relationship to the MeasurePoint table, used to find all measure points associated with the current AssetMeter object's asset and meter combination. (measurepoint.metername = assetmeter.metername and measurepoint.siteid = assetmeter.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "metername=:metername and assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "target": "METER",
            "remarks": "Relationship to the Meter table, used to find the meter associated with the current AssetMeter. (meter.metername = assetmeter.metername). The resulting set will contain one object.",
            "whereClause": "metername=:metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERINGROUP",
            "target": "METERINGROUP",
            "remarks": "Relationship to the MeterInGroup table, used to find the meteringroup associated with the current AssetMeter. The WHERE clause is: meteringroup.groupname = assetmeter.groupname and meteringroup.metername = assetmeter.metername. The resulting set will contain zero or one object.",
            "whereClause": "groupname = :groupname and metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERREADING",
            "target": "METERREADING",
            "remarks": "Relationship to the MeterReading table, used to find all meter readings for the current AssetMeter object's asset and meter combination. (meterreading.metername = assetmeter.metername and meterreading.assetnum = assetmeter.assetnum and meterreading.siteid = assetmeter.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "metername=:metername and assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWMETERREADING",
            "target": "METERREADING",
            "remarks": "Relationship to the MeterReading table, used to get an empty MeterReading to create a new meter reading for the current AssetMeter object. (1=2). The resulting set will contain zero objects.",
            "whereClause": "1=2 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMMETER",
            "target": "PMMETER",
            "remarks": "Relationship to the PMMeter records for this AssetMeter. (pmmeter.assetnum = assetmeter.assetnum and pmmeter.metername = assetmeter.metername and pmmeter.siteid = assetmeter.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum= :assetnum and metername=:metername and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AVERAGECALCMETHOD",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship from AssetMeter to Synonymdomain to get the description for the assetmeter's average calculation method",
            "whereClause": "domainid='AVERAGEMETHOD' and value=:avgcalcmethod",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "INT_ASSETMETER",
            "source": "ASSET",
            "remarks": "Relationship to the AssetMeter table for INT table. The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETMETER",
            "source": "ASSET",
            "remarks": "Relationship to the AssetMeter table, used to find all asset meters for the current asset. (assetmeter.assetnum = asset.assetnum). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSETMETERCONTINUOUS",
            "source": "ASSET",
            "remarks": "Relationship to the AssetMeter object, used to find the asset meters for the current asset that have a CONTINUOUS meter type",
            "whereClause": "assetnum = :assetnum and siteid = :siteid and exists (select metername from meter where metername=assetmeter.metername and metertype in (select value from synonymdomain where maxvalue='CONTINUOUS' and domainid='METERTYPE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVEASSETMETER",
            "source": "ASSET",
            "remarks": "Relationship to the AssetMeter table, used to find all active asset meters for the current asset. (assetmeter.active = :yes and assetmeter.assetnum = asset.assetnum). The resulting set will contain zero or more objects.",
            "whereClause": "active=:yes and assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSETMETER",
            "source": "ASSET",
            "remarks": "Relationship to the AssetMeter table, used to find all asset meters between the linear asset's FROMMEASURE and TOMEASURE. (assetmeter.assetnum=asset.assetnum and assetmeter.siteid=asset.siteid and ((assetmeter.startmeasure >= asset.frommeasure and assetmeter.startmeasure <= asset.tomeasure) or (assetmeter.endmeasure >= asset.frommeasure and assetmeter.endmeasure <= asset.tomeasure) or (assetmeter.startmeasure <= asset.frommeasure and assetmeter.endmeasure >= asset.tomeasure) or (assetmeter.startmeasure >= asset.tomeasure and assetmeter.endmeasure <= asset.frommeasure)) ). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and ((assetmeter.startmeasure >= :frommeasure and assetmeter.startmeasure <= :tomeasure) or (assetmeter.endmeasure >= :frommeasure and assetmeter.endmeasure <= :tomeasure) or (assetmeter.startmeasure <= :frommeasure and assetmeter.endmeasure >= :tomeasure) or (assetmeter.startmeasure >= :tomeasure and assetmeter.endmeasure <= :frommeasure) or(assetmeter.startmeasure is null or assetmeter.endmeasure is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LNRASSETMETER",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the AssetMeter table, used to find the assetfeature records for the given AssetFeatureId",
            "whereClause": "startassetfeatureid=:assetfeatureid or endassetfeatureid=:assetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECALASSETMETER",
            "source": "ASSETFEATURE",
            "remarks": "Linear Recalibration",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ASSETMETER",
            "source": "CONTASSETMETER",
            "remarks": "Relationship to the AssetMeter table, used to find the meters for a given asset. (assetmeter.metername=contassetmeter.metername and assetnum in (select assetnum from asset where contassetmeter.assetid=asset.assetid  and moved=:no)). The resulting set will contain zero or one record.",
            "whereClause": "metername=:metername and assetnum in (select assetnum from asset where assetid=:assetid  and moved=:no)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETMETER",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the AssetMeter table, used to find the AssetMeter object associated with this MeasurePoint. The WHERE clause is: assetmeter.metername = measurepoint.metername and assetmeter.assetnum = measurepoint.assetnum and assetmeter.siteid = measurepoint.siteid. The resulting set will contain zero or one object.",
            "whereClause": "metername = :metername and assetnum = :assetnum and siteid = :siteid and siteid=:siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "ASSETMETER_REPORTING",
            "source": "MEASUREPOINT",
            "remarks": "Reporting Relationship",
            "whereClause": "siteid=:siteid and assetnum=:assetnum and metername=:metername",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSETMETER",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the assetmeter table, used to find all assetmeter records using this measureunit. (assetmeter.measureunitid=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETMETER",
            "source": "METER",
            "remarks": "Relationship to the AssetMeter table, used to find all asset using this meter. (assetmeter.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETMETER",
            "source": "METERGROUP",
            "remarks": "Relationship to the AssetMeter table, used to find all AssetMeter objects that tie the given meter group to asset. (assetmeter.groupname = metergroup.groupname). The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEPLOYEDMETER",
            "source": "METERREADING",
            "remarks": "Relationship to the AssetMeter table, used to find the AssetMeter object from which this MeterReading originated. (assetmeter.metername = meterreading.metername and assetmeter.assetnum = meterreading.assetnum and assetmeter.siteid = meterreading.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and metername=:metername and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVEASSETMETER",
            "source": "MULTIASSETLOCCI",
            "remarks": "Relationship to the ASSETMETER table, used to get the ASSETMETERs for this asset. The resulting set will contain zero or more objects.  ",
            "whereClause": "active=:yes and assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETMETER",
            "source": "PMMETER",
            "remarks": "Relationsip to the PMMeters Asset Meter records,used to find all asset meter records for a given PMMeter",
            "whereClause": "assetnum=:assetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETPMMETER",
            "source": "PMMETER",
            "remarks": "Relationsip to the PMMeters Asset Meter records,used to find all asset meter records for a given PMMeter metername",
            "whereClause": "assetnum=:assetnum and metername=:metername and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVEASSETMETER",
            "source": "WORKORDER",
            "remarks": "Relationship to the ASSETMETER table, used to get the ASSETMETERs for this WORKORDER. The WHERE clause is: active=:yes and workorder.assetnum=assetmeter.assetnum and workorder.siteid=:assetmeter.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "active=:yes and assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}