mos = {
    "objectName": "POINTWO",
    "className": "psdi.app.measurement.PointWOSet",
    "description": "The POINTWO Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "POINTWOID",
    "primaryKeyColumns": [
        "SITEID",
        "WONUM",
        "POINTNUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "POINTWO",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MEASUREMENT",
            "targetObject": "POINTWO",
            "parentKeys": "MEASUREMENTID",
            "targetKeys": "POINTMEASUREMENTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measurement point that generated the Work Order",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "POINTWO",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Point",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "POINTWO",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "POINTWO",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "POINTWO",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Work Order Number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "POINTNUM",
            "required": true,
            "persistent": true,
            "title": "Measurement Point",
            "remarks": "Point Number For Measurement",
            "sameAsAttribute": "POINTNUM",
            "sameAsObject": "MEASUREPOINT"
        },
        {
            "attributeName": "EFFECTIVEDATE",
            "required": true,
            "persistent": true,
            "title": "Effective Date",
            "remarks": "Effective Date Of Work Order",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description Of The Work Order",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Description Of The Work Order",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POINTMEASUREMENTID",
            "required": false,
            "persistent": true,
            "title": "Point Measurement ID",
            "remarks": "identifier of the pointnum's measurement that initiated creation of this pointnum's work order if the work order has been generated from a measure point's job plan.",
            "sameAsAttribute": "MEASUREMENTID",
            "sameAsObject": "MEASUREMENT"
        },
        {
            "attributeName": "POINTWOID",
            "required": true,
            "persistent": true,
            "title": "POINTWOID",
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
            "name": "MEASUREPOINT",
            "target": "MEASUREPOINT",
            "remarks": "Relationship to the the MeasurePoint table, used to find the measure point for a given work order. ( measurepoint.pointnum = pointwo.pointnum ). The resulting set will contain one object.",
            "whereClause": "pointnum=:pointnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "POINTWO",
            "source": "MEASUREMENT",
            "remarks": "Relationship to the POINTWO table, used to see if a work order already exists for the MEASUREMENT. The WHERE clause is: pointwo.pointnum = measurement.pointnum and pointwo.pointmeasurementid = measurement.measurementid and pointwo.siteid = measurement.siteid and pointwo.orgid = measurement.orgid. The resulting set will contain zero or one object.",
            "whereClause": "pointnum = :pointnum and pointmeasurementid=:measurementid and siteid = :siteid and orgid = :orgid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POINTWO",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the PointWO table, used to find all work orders for a given measure point. (pointwo.pointnum = measurepoint.pointnum). The resulting set will contain zero or more objects.",
            "whereClause": "pointnum = :pointnum and siteid=:siteid",
            "cardinality": "SINGLE"
        }
    ]
}