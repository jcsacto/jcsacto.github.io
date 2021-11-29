mos = {
    "objectName": "METERDATA",
    "className": "psdi.iface.app.meterdata.MeterDataSet",
    "description": "Meterdata sent from external systems",
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
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Asset number to which the meter is attached",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "METERNAME",
            "required": false,
            "persistent": false,
            "title": "Meter",
            "remarks": "Identifier for the meter, for example HOURS or KILOMETERS.",
            "sameAsAttribute": "METERNAME",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": false,
            "title": "Changed By",
            "remarks": "Name of user who last modified this record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": false,
            "title": "Changed Date",
            "remarks": "Date and time record was last modified.",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": false,
            "title": "Remarks",
            "remarks": "Additional information supplied by the user regarding the record.",
            "sameAsAttribute": "REMARKS",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site identifier for this meter.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization identifier for this meter.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "REMARKS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Remarks Long Description",
            "remarks": "Long Description for Additional information supplied by the user regarding the record.",
            "sameAsAttribute": "REMARKS_LONGDESCRIPTION",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "INSPECTOR",
            "required": false,
            "persistent": false,
            "title": "Inspector",
            "remarks": "Person who reported this Measurement",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "NEWREADINGDATE",
            "required": false,
            "persistent": false,
            "title": "New Reading Date",
            "remarks": "NEWREADINGDATE",
            "sameAsAttribute": "NEWREADINGDATE",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "ISDELTA",
            "required": true,
            "persistent": false,
            "title": "Delta",
            "remarks": "ISDELTA",
            "sameAsAttribute": "ISDELTA",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "NEWREADING",
            "required": false,
            "persistent": false,
            "title": "New  Reading",
            "remarks": "NEWREADING",
            "sameAsAttribute": "NEWREADING",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "POINTNUM",
            "required": false,
            "persistent": false,
            "title": "Point",
            "remarks": "Identifier of this Meter's related condition monitoring point.",
            "sameAsAttribute": "POINTNUM",
            "sameAsObject": "MEASUREPOINT"
        },
        {
            "attributeName": "ASSETMETERID",
            "required": false,
            "persistent": false,
            "title": "Asset Meter ID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "ASSETMETERID",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "DOROLLOVER",
            "required": true,
            "persistent": false,
            "title": "Rollover",
            "remarks": "Should new reading cause the meter to roll over?",
            "sameAsAttribute": "DOROLLOVER",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "SEQUENCE",
            "required": false,
            "persistent": false,
            "title": "Meter display sequence",
            "remarks": "Meter display sequence",
            "sameAsAttribute": "SEQUENCE",
            "sameAsObject": "METERINGROUP"
        },
        {
            "attributeName": "ENDFEATURE",
            "required": false,
            "persistent": false,
            "title": "End Feature",
            "remarks": "The feature (e.g. mile marker) that is used to identify where, on the linear asset, the meter reading was taken.",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "STARTFEATURE",
            "required": false,
            "persistent": false,
            "title": "Start Feature",
            "remarks": "The feature (e.g. mile marker) that is used to identify where, on the linear asset, the meter reading was taken.",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "ENDMEASURE",
            "required": false,
            "persistent": false,
            "title": "End Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where the end of this meter is defined.  This can be manually entered or calculated by entering an end reference point and end offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTMEASURE",
            "required": false,
            "persistent": false,
            "title": "Start Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where this meter is defined.  This can be manually entered or calculated by entering a start reference point and start offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTOFFSET",
            "required": false,
            "persistent": false,
            "title": "Start Offset",
            "remarks": "Distance used in conjunction with the start reference point to determine where the meter resides.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDOFFSET",
            "required": false,
            "persistent": false,
            "title": "End Offset",
            "remarks": "Distance used in conjunction with the end reference point to determine where the meter resides.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTYOFFSET",
            "required": false,
            "persistent": false,
            "title": "Start Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDYOFFSET",
            "required": false,
            "persistent": false,
            "title": "End Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTZOFFSET",
            "required": false,
            "persistent": false,
            "title": "Start Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDZOFFSET",
            "required": false,
            "persistent": false,
            "title": "End Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTYOFFSETREF",
            "required": false,
            "persistent": false,
            "title": "Start Y Offset Referent",
            "remarks": "The point from which the Y Offset is measured (e.g. centerline, edge, etc).   The user can create a domain for this purpose.  The value entered will not be used in calculations, it is simply used to locate the feature in the field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDYOFFSETREF",
            "required": false,
            "persistent": false,
            "title": "End Y Offset Referent",
            "remarks": "The point from which the Y Offset is measured (e.g. centerline, edge, etc).   The user can create a domain for this purpose.  The value entered will not be used in calculations, it is simply used to locate the feature in the field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTZOFFSETREF",
            "required": false,
            "persistent": false,
            "title": "Start Z Offset Referent",
            "remarks": "Reference point from which the start Z-Offset (distance above or below the linear asset) is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDZOFFSETREF",
            "required": false,
            "persistent": false,
            "title": "End Z Offset Referent",
            "remarks": "Point from which the Z-Offset is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Identifies the work order.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "Location to which the meter is attached",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "MEASUREDATE",
            "required": false,
            "persistent": false,
            "title": "Measurement Date",
            "remarks": "Date The Measurement Was Taken",
            "sameAsAttribute": "MEASUREDATE",
            "sameAsObject": "MEASUREMENT"
        },
        {
            "attributeName": "MEASUREMENTVALUE",
            "required": false,
            "persistent": false,
            "title": "Measurement",
            "remarks": "Actual Measurement Value Recorded",
            "sameAsAttribute": "MEASUREMENTVALUE",
            "sameAsObject": "MEASUREMENT"
        },
        {
            "attributeName": "OBSERVATION",
            "required": false,
            "persistent": false,
            "title": "Observation",
            "remarks": "Reading taken on a CHARACTERISTIC meter.  Valid values are from the ALNDOMAINVALUE table where the domain identifier is the same as the meter's domain identifier.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "MEASUREMENTID",
            "required": false,
            "persistent": false,
            "title": "Measurement",
            "remarks": "Unique identifier for this measurement. This value is automatically generated for each new measurement.",
            "sameAsAttribute": "MEASUREMENTID",
            "sameAsObject": "MEASUREMENT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the METERDATA to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}