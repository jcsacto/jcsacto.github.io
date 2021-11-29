mos = {
    "objectName": "METER",
    "className": "psdi.app.meter.MeterSet",
    "description": "Master meters that can be grouped or attached",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "METERID",
    "primaryKeyColumns": [
        "METERNAME"
    ],
    "logicalRelationships": [
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
            "objectName": "METER",
            "targetObject": "CONTASSETMETER",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "DEPSCHED",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Asset meter that is used to calculate depreciation.",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "DEPSCHEDHISTORY",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset meter used to calculate depreciation.",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "ITEM",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter on Item",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "JOBTASK",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter where to take a measurement.",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "LNRRECALIB",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "LNRRECALIBNONAF",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
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
            "objectName": "METER",
            "targetObject": "MASTERPMMETER",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
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
            "objectName": "METER",
            "targetObject": "MEASUREPOINT",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "METERINGROUP",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
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
            "objectName": "METER",
            "targetObject": "PLUSCTPMETER",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "PMMETER",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "SERVICEITEMS",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "SKDEXTRACAPTOOLVIEW",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Extra Capacity Tool Meter",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "TOOLINV",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "TOOLITEM",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "WOMETER",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Readings from Work Orders",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "METER",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "METER",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measurement Unit for Meter",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "METERNAME",
            "required": true,
            "persistent": true,
            "title": "Meter",
            "remarks": "Meter identifier, for example, HOURS or KILOMETERS",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "METERTYPE",
            "required": true,
            "persistent": true,
            "title": "Meter Type",
            "remarks": "Maximo supports three types of meters: CONTINUOUS, GAUGE and CHARACTERISTIC.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the meter group.The description can be up to 255 characters in length. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "READINGTYPE",
            "required": false,
            "persistent": true,
            "title": "Reading Type",
            "remarks": "Do readings for this meter default to an ACTUAL or DELTA reading type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "Measurement unit associated with this meter.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "DOMAINID",
            "required": false,
            "persistent": true,
            "title": "Domain",
            "remarks": "Constraint defining what are valid values for this meter. A domain can be ALN, NUMERIC or from a value list.",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Use the Long Description dialog box to enter or view descriptions that are too large (more than 50 characters in length) for the Description field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "METERID",
            "required": true,
            "persistent": true,
            "title": "METERID",
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
            "name": "ASSETMETER",
            "target": "ASSETMETER",
            "remarks": "Relationship to the AssetMeter table, used to find all asset using this meter. (assetmeter.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTASSETMETER",
            "target": "CONTASSETMETER",
            "remarks": "Relationship to the ContAssetMeter table, used to find all contassetmeters having this meter. (contassetmeter.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the ITEM table, used to find all items associated with the meter. The WHERE clause is: meter.metername = item.metername. The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBTASK",
            "target": "JOBTASK",
            "remarks": "Relationship to the JobTask table, used to find all jobtasks having this meter. (jobtask.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMETER",
            "target": "LOCATIONMETER",
            "remarks": "Relationship to the LocationMeter table, used to find all locations using this meter. (locationmeter.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCMETERREADING",
            "target": "LOCMETERREADING",
            "remarks": "Relationship to the LocMeterReading table, used to find all locmeterreadings having this meter. (locmeterreading.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MASTERPMMETER",
            "target": "MASTERPMMETER",
            "remarks": "Relationship to the MasterPMMeter table, used to find all masterpmmeters having this meter. (masterpmmeter.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOMAINID",
            "target": "MAXDOMAIN",
            "remarks": "Relationship from Meter to MaxDomain to get the description for the meter's domainid",
            "whereClause": "domainid=:domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREMENT",
            "target": "MEASUREMENT",
            "remarks": "Relationship to the Measurement table, used to find all measurements having this meter. (measurement.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREPOINT",
            "target": "MEASUREPOINT",
            "remarks": "Relationship to the MeasurePoint table, used to find all MeasurePoints using this meter. (measurepoint.metername= meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREUNIT",
            "target": "MEASUREUNIT",
            "remarks": "Relationship from Meter to MeasureUnit to get the description for the meter's measureunitid",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERINGROUP",
            "target": "METERINGROUP",
            "remarks": "Relationship to the MeterInGroup table, used to find all MeterInGroups associated with the current Meter. The WHERE clause is: meteringroup.metername = meter.metername. The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERREADING",
            "target": "METERREADING",
            "remarks": "Relationship to the MeterReading table, used to find all meterreadings having this meter. (meterreading.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMMETER",
            "target": "PMMETER",
            "remarks": "Relationship to the PMMeter table, used to find all PMs using this meter. (pmmeter.metername = meter.metername). The resulting set will contain zero or more objects. Note: Meters can be associated only with master PMs.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "READINGTYPE",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship from Meter to Synonymdomain to get the description for the meter's readingtype",
            "whereClause": "domainid='READINGTYPE' and value=:readingtype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERTYPE",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship from Meter to Synonymdomain to get the description for the meter's metertype",
            "whereClause": "domainid='METERTYPE' and value=:metertype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOMETER",
            "target": "WOMETER",
            "remarks": "Relationship to the WOMeter table, used to find all wometers having this meter. (wometer.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "METER",
            "source": "ASSETMETER",
            "remarks": "Relationship to the Meter table, used to find the meter associated with the current AssetMeter. (meter.metername = assetmeter.metername). The resulting set will contain one object.",
            "whereClause": "metername=:metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "source": "DEPSCHED",
            "remarks": " Relationship to METER table",
            "whereClause": "metername = :metername",
            "cardinality": null
        },
        {
            "name": "METER",
            "source": "DEPSCHEDHISTORY",
            "remarks": " Relationship to METER table",
            "whereClause": "metername = :metername",
            "cardinality": null
        },
        {
            "name": "METER",
            "source": "ITEM",
            "remarks": "Relationship to the Meter table, used to find the meter associated with the Item. (meter.metername = item.metername). The resulting set will contain one object.",
            "whereClause": "metername=:metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "source": "LOCATIONMETER",
            "remarks": "Relationship to the Meter table, used to find the Meter associated with the LocationMeter. The WHERE clause is: meter.metername = locationmeter.metername. The resulting set will contain one object.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "source": "LOCMETERREADING",
            "remarks": "Relationship to the Meter table, used to get the Meter associated with this LocMeterReading. The WHERE clause is: meter.metername = locmeterreading.metername. The resulting set will contain one object.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "source": "MASTERPMMETER",
            "remarks": "Relationsip to the MasterPMMeters Meter records,used to find all meter records for a given MasterPMMeter",
            "whereClause": "metername=:metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "source": "MEASUREMENT",
            "remarks": "Relationship to the METER table, used to get the METER for this MEASUREMENT. The WHERE clause is: meter.metername=measurement.metername. The resulting set will contain one object.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the Meter table, used to find the Meter objects associated with this MeasurePoint's MeterName. The WHERE clause is: meter.metername = measurepoint.metername. The resulting set will contain one object.",
            "whereClause": "metername = :metername",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "METER",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the meter table, used to find all meter records using this measureunit. (meter.measureunitid=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "source": "METERINGROUP",
            "remarks": "Relationship to the Meter table, used to find meter details for the given meter. (meter.metername = meteringroup.metername). The resulting set will contain one object.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "source": "METERREADING",
            "remarks": "Relationship to the Meter table, used to find the Meter object for this MeterReading. (meter.metername = meterreading.metername). The resulting set will contain one object.",
            "whereClause": "metername=:metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "source": "PLUSCTPMETER",
            "remarks": "Relationship to METER table",
            "whereClause": "metername = :metername",
            "cardinality": null
        },
        {
            "name": "METER",
            "source": "PMMETER",
            "remarks": "Relationsip to the PMMeters Meter records,used to find all meter records for a given PMMeter",
            "whereClause": "metername=:metername",
            "cardinality": "UNDEFINED"
        }
    ]
}