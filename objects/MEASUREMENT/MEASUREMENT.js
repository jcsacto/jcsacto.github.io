mos = {
    "objectName": "MEASUREMENT",
    "className": "psdi.app.measurement.MeasurementSet",
    "description": "The MEASUREMENT Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MEASUREMENTID",
    "primaryKeyColumns": [
        "MEASUREMENTID"
    ],
    "logicalRelationships": [
        {
            "objectName": "MEASUREMENT",
            "targetObject": "POINTWO",
            "parentKeys": "MEASUREMENTID",
            "targetKeys": "POINTMEASUREMENTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measurement point that generated the Work Order",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "MEASUREMENT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measurements for Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "MEASUREMENT",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "MEASUREMENT",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MEASUREMENT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measurements for Location",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "MEASUREMENT",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measurements Taken",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MEASUREMENT",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measurement Units",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MEASUREMENT",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measurement Units",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MEASUREMENT",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Offset Measurement Units",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MEASUREMENT",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measurement Units",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MEASUREMENT",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Offset Measurement Units",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "MEASUREMENT",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter Measurements",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "MEASUREMENT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MEASUREMENT",
            "parentKeys": "PERSONID",
            "targetKeys": "INSPECTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inspector",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MEASUREMENT",
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
            "attributeName": "POINTNUM",
            "required": false,
            "persistent": true,
            "title": "Measurement Point",
            "remarks": "Point Number For Measurement",
            "sameAsAttribute": "POINTNUM",
            "sameAsObject": "MEASUREPOINT"
        },
        {
            "attributeName": "MEASUREDATE",
            "required": true,
            "persistent": true,
            "title": "Measurement Date",
            "remarks": "Date The Measurement Was Taken",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEASUREMENTVALUE",
            "required": false,
            "persistent": true,
            "title": "Measurement",
            "remarks": "Actual Measurement Value Recorded",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "OBSERVATION",
            "required": false,
            "persistent": true,
            "title": "Observation",
            "remarks": "Reading taken on a CHARACTERISTIC meter.  Valid values are from the ALNDOMAINVALUE table where the domain identifier is the same as the meter's domain identifier.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "DOMAINID",
            "required": false,
            "persistent": false,
            "title": "Domain",
            "remarks": "domain of valid observation values for a MeasurePoint with a CHARACTERISTIC meter type.",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "MEASUREMENTID",
            "required": true,
            "persistent": true,
            "title": "Measurement",
            "remarks": "Unique identifier for this measurement. This value is automatically generated for each new measurement.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset on this Measurement's MeasurePoint, AssetMeter or LocationMeter.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Location on this Measurement's MeasurePoint, AssetMeter or LocationMeter.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "METERNAME",
            "required": false,
            "persistent": true,
            "title": "Meter",
            "remarks": "Meter on this Measurement's MeasurePoint, AssetMeter or LocationMeter.",
            "sameAsAttribute": "METERNAME",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "INSPECTOR",
            "required": false,
            "persistent": true,
            "title": "Inspector",
            "remarks": "Person who reported this Measurement",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ASSETID",
            "required": false,
            "persistent": true,
            "title": "Asset ID",
            "remarks": "asset identifier",
            "sameAsAttribute": "ASSETID",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Offset",
            "remarks": "Distance used in conjunction with the end reference point to determine where the measurement was taken.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Start Feature",
            "remarks": "A previously defined feature or relationship used, in conjunction with the start offset, to determine the start measure for this measurement.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "End Feature",
            "remarks": "A previously defined feature or relationship used, in conjunction with the end offset to determine the end measure for this measurement.",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "STARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "Start Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where this measurement was taken.  This can be manually entered or calculated by entering a start reference point and start offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "End Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where this measurement was taken.  This can be manually entered or calculated by entering an end reference point and end offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Offset",
            "remarks": "Distance used in conjunction with the start reference point to determine where the measurement was taken.  ",
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
            "attributeName": "STARTYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Start Y Offset Referent",
            "remarks": "Point from which the Y Offset is measured, for example, centerline or edge.  The system administrator can create a domain for this purpose.  The value entered will not be used in calculations, it is simply used to locate the feature in the field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "End Y Offset Referent",
            "remarks": "Point from which the Y Offset is measured, for example, centerline or edge. The system administrator can create a domain for this purpose.  The value entered will not be used in calculations, it is simply used to locate the feature in the field.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "remarks": "label used to identify the specific AssetFeature used to locate the start of the portion of the linear asset for which this measurement applies",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "label used to identify the specific AssetFeature used to locate the end of the portion of the linear asset for which this measurement applies",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
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
            "remarks": "Unit of measure for the offset (before or after) from the end reference point where this measurement was taken.",
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
            "remarks": "Unit of measure for the offset (before or after) from the start reference point where this measurement was taken.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "OBSERV_DESC",
            "target": "ALNDOMAIN",
            "remarks": "Relationship to alndomain table, used to find the description for the Measurement's observation value.  (domainid=:domainid and value=:observation and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null)) ).  The resulting set will contain one object",
            "whereClause": "domainid=:domainid and value=:observation and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this Measurement's linear Asset. (measurement.assetnum=asset.assetnum and measurement.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Used to find the asset object for this measurement.  (assetnum=:assetnum and siteid=:siteid).  The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for this meaurement's end asset feature. (assetfeature.assetfeatureid=measurement.endassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:endassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for this meaurement's start asset feature. (assetfeature.assetfeatureid=measurement.startassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "target": "METER",
            "remarks": "Relationship to the METER table, used to get the METER for this MEASUREMENT. The WHERE clause is: meter.metername=measurement.metername. The resulting set will contain one object.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POINTWO",
            "target": "POINTWO",
            "remarks": "Relationship to the POINTWO table, used to see if a work order already exists for the MEASUREMENT. The WHERE clause is: pointwo.pointnum = measurement.pointnum and pointwo.pointmeasurementid = measurement.measurementid and pointwo.siteid = measurement.siteid and pointwo.orgid = measurement.orgid. The resulting set will contain zero or one object.",
            "whereClause": "pointnum = :pointnum and pointmeasurementid=:measurementid and siteid = :siteid and orgid = :orgid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the MEASUREMENT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MEASUREMENTS",
            "source": "ASSET",
            "remarks": "Relationship to the Measurement table, used to find all measurements for an asset.  The WHERE clause is: measurement.assetid = asset.assetid). The resulting set will contain zero or more objects.",
            "whereClause": "assetid = :assetid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "NEWMEASUREMENT",
            "source": "ASSETMETER",
            "remarks": "Relationship to the Measurement table, used to get an empty measurement set so that a new measurement can be added for the AssetMeter. The WHERE clause is: 1=2. The resulting set will contain zero objects.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREMENT",
            "source": "ASSETMETER",
            "remarks": "Relationship to the Measurement table, used to find the measurements for this characteristic or gauge AssetMeter. (measurement.metername=assetmeter.metername and measurement.assetnum=assetmeter.assetnum and measurement.siteid=assetmeter.siteid). This resulting set will contain zero or more objects.",
            "whereClause": "metername=:metername and assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREMENT",
            "source": "CHARPOINTACTION",
            "remarks": "Relationship to the MEASUREMENT table, used to find any Measurements associated with the CharPointAction. The WHERE clause is: charpointaction.pointnum = measurement.pointnum and charpointaction.siteid = measurement.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "pointnum = :pointnum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWMEASUREMENT",
            "source": "LOCATIONMETER",
            "remarks": "Relationship to the Measurement table, used to get an empty measurement set so that a new measurement can be added for the LocationMeter. The WHERE clause is: 1=2. The resulting set will contain zero objects.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREMENT",
            "source": "LOCATIONMETER",
            "remarks": "Relationship to the Measurement table, used to find the measurements for this characteristic or gauge LocationMeter. (measurement.metername=locationmeter.metername and measurement.location=locationmeter.location and measurement.siteid=locationmeter.siteid). This resulting set will contain zero or more objects.",
            "whereClause": "metername=:metername and location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREMENTS",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Measurement table, used to find all measurements associated with the location. The WHERE clause is: measurement.location = locations.location and measurement.siteid = measurement.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MEASUREMENT",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the the Measurement table, used to find all measurements for a given measure point. (measurement.pointnum = measurepoint.pointnum ). The resulting set will contain zero or more objects.",
            "whereClause": "pointnum = :pointnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MEASUREMENTRECENT",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the Measurement table, used to find the most recent measurement for a given measure point. (measurement.pointnum = measurepoint.pointnum and measurement.siteid = measurepoint.siteid and measurement.measuredate in (select max(measurement.measuredate) from measurement where measurement.pointnum = measurepoint.pointnum and measurement.siteid = measurepoint.siteid)). The resulting set will contain zero or one object.",
            "whereClause": "pointnum = :pointnum and siteid = :siteid and measuredate in (select max(measurement.measuredate) from measurement where measurement.pointnum=:pointnum and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWMEASUREMENT",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the Measurement table, used to get an empty measurement set so that a new measurement can be added for the MeasurePoint. The WHERE clause is: 1=2. The resulting set will contain zero objects.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREMENT",
            "source": "METER",
            "remarks": "Relationship to the Measurement table, used to find all measurements having this meter. (measurement.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREMENT",
            "source": "WORKORDER",
            "remarks": "Relationship to the Measurement table, used to find all measurement for a work order's measure pointnum. (measurement.pointnum = workorder.pointnum). This resulting set will contain zero or more objects.",
            "whereClause": "pointnum=:pointnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}