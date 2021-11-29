mos = {
    "objectName": "WOMETER",
    "className": "psdi.app.workorder.WOMeterSet",
    "description": "Work Order meter table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WOMETERID",
    "primaryKeyColumns": [
        "WONUM",
        "SITEID",
        "WOMETERID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "METER",
            "targetObject": "WOMETER",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Readings from Work Orders",
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
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WOMETER",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOMETER",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOMETER",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Meter Reading taken.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Identifies the work order that the meter reading is taken against.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "I dentifies the status of the work order at the time of the meter reading",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "METERNAME",
            "required": false,
            "persistent": true,
            "title": "Meter",
            "remarks": "Meter Name",
            "sameAsAttribute": "METERNAME",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "METERREADINGID",
            "required": false,
            "persistent": true,
            "title": "Meter Reading ID",
            "remarks": "Unique identifier for this WOMeter reading when this WOMeter's meter is of type CONTINUOUS, that is, the reading is stored as a meter reading in the MeterReading table, and the WOMeter is being created for the work order's asset's AssetMeter.",
            "sameAsAttribute": "METERREADINGID",
            "sameAsObject": "METERREADING"
        },
        {
            "attributeName": "PMGENREADINGDATE",
            "required": false,
            "persistent": true,
            "title": "PmGenReadingDate",
            "remarks": "Meter Reading date when the PM work order was generated.",
            "sameAsAttribute": "READINGDATE",
            "sameAsObject": "METERREADING"
        },
        {
            "attributeName": "PMGENREADING",
            "required": false,
            "persistent": true,
            "title": "PmGenReading",
            "remarks": "Meter reading when the PM work order was generated.",
            "sameAsAttribute": "READING",
            "sameAsObject": "METERREADING"
        },
        {
            "attributeName": "LOCMETERREADINGID",
            "required": false,
            "persistent": true,
            "title": "Location Meter Reading ID",
            "remarks": "Unique identifier for this WOMeter reading when this WOMeter's meter is of type CONTINUOUS, that is, the reading is stored as a meter reading in the LocMeterReading table, and the WOMeter is being created for the work order's location's LocationMeter.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEASUREMENTID",
            "required": false,
            "persistent": true,
            "title": "Measurement",
            "remarks": "Unique identifier for this WOMeter reading when this WOMeter's meter is of type CHARACTERISTIC or GAUGE, that is, the reading is stored as a measurement in the Measurement table.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOMETERID",
            "required": true,
            "persistent": true,
            "title": "WOMETERID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "WOMETER",
            "source": "METER",
            "remarks": "Relationship to the WOMeter table, used to find all wometers having this meter. (wometer.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOMETER",
            "source": "WORKORDER",
            "remarks": "Relationship to the WOMeter table, used to find all wometers having this meter. (workorder.wonum = wometer.wonum). The resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWWOMETER",
            "source": "WORKORDER",
            "remarks": "Relationship to the WOMeter table, used to get an empty WOMeter set so that a new WOMeter can be added for the work order. The WHERE clause is: 1=2. The resulting set will contain zero objects.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        }
    ]
}