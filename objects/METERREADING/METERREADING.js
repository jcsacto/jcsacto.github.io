mos = {
    "objectName": "METERREADING",
    "className": "psdi.app.asset.MeterReadingSet",
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
    "logicalRelationships": [
        {
            "objectName": "METERREADING",
            "targetObject": "METERREADING",
            "parentKeys": "METERREADINGID, SITEID",
            "targetKeys": "ROLLDOWNID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Roll Down Meter Reading",
            "longDescription": null
        },
        {
            "objectName": "METERREADING",
            "targetObject": "WOMETER",
            "parentKeys": "METERREADINGID, SITEID",
            "targetKeys": "METERREADINGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "METERREADING",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MeterReading records for the current Asset. This relationship will return the readings for all this Asset''s meters.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "METERREADING",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, INHERITEDFROMASSET",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MeterReading records on other assets that were inherited from the current Asset during meter reading rolldown.",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "METERREADING",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "METERREADING",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "METERREADING",
            "parentKeys": "SITEID, MATUSETRANSID",
            "targetKeys": "SITEID, MATUSETRANSID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "MATUSETRANS",
            "targetObject": "METERREADING",
            "parentKeys": "MATUSETRANSID",
            "targetKeys": "MATUSETRANSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Material Usage",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "BASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 131",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 132",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 133",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 134",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 135",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 136",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "METERREADING",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Readings for a Meter",
            "longDescription": null
        },
        {
            "objectName": "METERREADING",
            "targetObject": "METERREADING",
            "parentKeys": "METERREADINGID, SITEID",
            "targetKeys": "ROLLDOWNID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Roll Down Meter Reading",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "METERREADING",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "METERREADING",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "METERREADING",
            "parentKeys": "PERSONID",
            "targetKeys": "INSPECTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inspector",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "METERREADING",
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
            "remarks": "Unique identifier for this meter reading. This value is automatically generated for each new meter reading.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifier of asset for which this meter reading is being recorded.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
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
            "attributeName": "READINGSOURCE",
            "required": false,
            "persistent": true,
            "title": "Source",
            "remarks": "Source of this meter reading. A new reading can be a direct entry by the user, an inherited value from a parent asset's or locations meter or a modification.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "remarks": "Actual reading for the meter. The delta is recorded separately in the Delta column.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "remarks": "Date and time that this meter reading is being entered. The value defaults to the system date and time, but the user can modify it as long as it is not in the future.",
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
            "attributeName": "ROLLDOWNSOURCE",
            "required": false,
            "persistent": true,
            "title": "Rolldown Source",
            "remarks": "If this meter reading is the result of a rolldown, this attribute indicates the source of the rolldown, ASSET, LOCATION or NONE. NONE indicates that this meter reading was not the result of a rolldown.",
            "sameAsAttribute": "ROLLDOWNSOURCE",
            "sameAsObject": "ASSETMETER"
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
            "attributeName": "ROLLDOWNID",
            "required": false,
            "persistent": true,
            "title": "Rolldown Identifier",
            "remarks": "Identifier that makes it possible to find all readings that were added during the same rolldown.",
            "sameAsAttribute": "METERREADINGID",
            "sameAsObject": "METERREADING"
        },
        {
            "attributeName": "MODIFIED",
            "required": true,
            "persistent": true,
            "title": "Modified",
            "remarks": "True if this meterreading has been modified either directly or indirectly, that is, via the rolling down or forward of a modification through the asset hierarchy and reading history.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INHERITEDFROMASSET",
            "required": false,
            "persistent": true,
            "title": "Inherited From",
            "remarks": "Asset from which reading has been INHERITED during rolldown",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
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
            "attributeName": "LOCMETERREADINGID",
            "required": false,
            "persistent": true,
            "title": "Location Meter Reading Identifier",
            "remarks": "The AssetMeter's location's LocMeterReadingId when this meter reading is rolled down from the location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MATUSETRANSID",
            "required": false,
            "persistent": true,
            "title": "Issue Identifier",
            "remarks": "if this reading resulted from the issue of an item that had a metername corresponding to the metername of the issue's target asset, this attribute is populated with the MatUseTransId of the orginating MatUseTrans ISSUE transaction.",
            "sameAsAttribute": "MATUSETRANSID",
            "sameAsObject": "MATUSETRANS"
        },
        {
            "attributeName": "ASSETID",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "unique identifier for this MeterReading's Asset",
            "sameAsAttribute": "ASSETID",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "DIDROLLOVER",
            "required": true,
            "persistent": true,
            "title": "Did Reading Roll Over",
            "remarks": "Yes/No flag indicating whether a rollover occured during the setting of this meter reading's value.",
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
            "attributeName": "ENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "End Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where the end of this meter is defined.  This can be manually entered or calculated by entering an end reference point and end offset.",
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
            "attributeName": "STARTFEATURELABEL",
            "required": false,
            "persistent": true,
            "title": "Reference Point",
            "remarks": "label used to identify the specific AssetFeature used to locate the start of the range on this linear asset for which this meterreading applies",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDFEATURELABEL",
            "required": false,
            "persistent": true,
            "title": "Reference Point",
            "remarks": "label used to identify the specific AssetFeature used to locate the end of the range on this linear asset for which this meterreading applies",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "STARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Start Feature",
            "remarks": "A previously defined feature or relationship used, in conjunction with the start offset, to determine the start measure for this meter.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "End Feature",
            "remarks": "A previously defined feature or relationship used, in conjunction with the end offset to determine the end measure for this meter.",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
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
            "attributeName": "STARTYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Start Y Offset Referent",
            "remarks": "Point from which the Y Offset Start is measured, for example, centerline or edge.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "End Y Offset Referent",
            "remarks": "Point from which the Y Offset End is measured, for example, centerline or edge.",
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
            "attributeName": "BASEMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Base Measure",
            "remarks": "Usually, this is the same as the unit of measure  for the asset. If they differ, Maximo will display measures in the unit of measure but will store measures in both the unit of measure and base unit of measure.  A conversion between the unit of measure and base unit of measure, entered via the Units of Measure and Conversion Action in Assets, must exist if the base unit of measure differs from the unit of measure.",
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
            "remarks": "Unit of measure for the offset (before or after) from the end reference point where this meter reading was taken.",
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
            "remarks": "Unit of measure for the offset (before or after) from the start reference point where this meter reading was taken.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this MeterReading's linear Asset. (meterreading.assetnum=asset.assetnum and meterreading.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for this meterreading's end asset feature. (assetfeature.assetfeatureid=meterreading.endassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid=:endassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for this meterreading's start asset feature. (assetfeature.assetfeatureid=meterreading.startassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid=:startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEPLOYEDMETER",
            "target": "ASSETMETER",
            "remarks": "Relationship to the AssetMeter table, used to find the AssetMeter object from which this MeterReading originated. (assetmeter.metername = meterreading.metername and assetmeter.assetnum = meterreading.assetnum and assetmeter.siteid = meterreading.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and metername=:metername and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "target": "METER",
            "remarks": "Relationship to the Meter table, used to find the Meter object for this MeterReading. (meter.metername = meterreading.metername). The resulting set will contain one object.",
            "whereClause": "metername=:metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the METERREADING to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "METERREADINGS",
            "source": "ASSET",
            "remarks": "Relationship to the MeterReading table, used to find all meter readings for a given asset with a given site",
            "whereClause": "siteid=:siteid and assetid = (select assetid from asset where assetnum=:assetnum and siteid=:siteid)",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "METERREADING",
            "source": "ASSETMETER",
            "remarks": "Relationship to the MeterReading table, used to find all meter readings for the current AssetMeter object's asset and meter combination. (meterreading.metername = assetmeter.metername and meterreading.assetnum = assetmeter.assetnum and meterreading.siteid = assetmeter.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "metername=:metername and assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWMETERREADING",
            "source": "ASSETMETER",
            "remarks": "Relationship to the MeterReading table, used to get an empty MeterReading to create a new meter reading for the current AssetMeter object. (1=2). The resulting set will contain zero objects.",
            "whereClause": "1=2 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDMETERREADINGS",
            "source": "LOCMETERREADING",
            "remarks": "Relationship to the METERREADING table, used to find all MeterReadings originating from this LocMeterReading. The WHERE clause is: meterreading.locmeterreadingid = locmeterreading.meterreadingid and meterreading.siteid = locmeterreading.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "locmeterreadingid = :meterreadingid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERREADING",
            "source": "METER",
            "remarks": "Relationship to the MeterReading table, used to find all meterreadings having this meter. (meterreading.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERREADING",
            "source": "PMMETER",
            "remarks": "Relationsip to the PMMeters Meterreading records,used to find all asset meter records for a given PMMeter metername/asset",
            "whereClause": "assetnum=:assetnum and metername=:metername",
            "cardinality": "UNDEFINED"
        }
    ]
}