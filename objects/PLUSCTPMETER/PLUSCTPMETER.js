mos = {
    "objectName": "PLUSCTPMETER",
    "className": "psdi.plusc.app.plusctmplt.PlusCATMeterSet",
    "description": "Asset Template Meters Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PLUSCTPMETERID",
    "primaryKeyColumns": [
        "METERNAME",
        "ORGID",
        "TEMPLATEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "PLUSCTPMETER",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
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
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCTPMETER",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "AVERAGE",
            "required": false,
            "persistent": true,
            "title": "Average Units/Day",
            "remarks": "Average meter reading units or usage per day. The average is calculated based on the type in the Average Calculation Method field and the value in the Sliding Window Size field. For example, if the average calculation method is ALL, all readings are used to calculate the average. If the average calculation method is STATIC, the average is not calculated. Instead, you must enter a static (unchanging) value in the Average Units/Day field. That value is used as the average. For PM meters, the value in this field is used to calculate PM due dates. The frequency defined in the PM (for example 3000) is divided by the average (for example 100). The resulting value (30, in this example) is the number of days that is added to the Last Completion Date or Last Target Start field. This resulting value determines the next due date of the PM.",
            "sameAsAttribute": "AVERAGE",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "AVGCALCMETHOD",
            "required": false,
            "persistent": true,
            "title": "Average Calculation Method",
            "remarks": "Calculates the average meter units per day: STATIC, ALL, or SLIDING.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Commodity Code",
            "remarks": "The commodity associated with the meter. For example, fuel or engine oil. If you specify the Commodity Code, you cannot specify the Item.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "The item associated with the meter. For example, diesel or 89 octane. If you specify the Item, you cannot specify the Commodity Code.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "MEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "The unit of measure for the meter. Enter a value or click Select value to specify a unit of measure.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "METERNAME",
            "required": true,
            "persistent": true,
            "title": "Meter",
            "remarks": "The name of the meter attached to the asset template. Enter a value or click Detail Menu to select a meter name.",
            "sameAsAttribute": "METERNAME",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "READINGTYPE",
            "required": false,
            "persistent": true,
            "title": "Reading Type",
            "remarks": "Reading type for the meter name. The value defaults to either ACTUAL or DELTA depending on the meter name.",
            "sameAsAttribute": "READINGTYPE",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Remarks or additional information associated with this record. Click Long Description to add more information.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROLLDOWNSOURCE",
            "required": false,
            "persistent": true,
            "title": "Accept Rolldown From",
            "remarks": "Specifies the source, such as a parent asset or location, from which the meter of the asset accepts meter reading deltas. A value of NONE indicates that the meter does not accept rolled-down readings from a parent.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROLLOVER",
            "required": false,
            "persistent": true,
            "title": "Rollover",
            "remarks": "The rollover point for a continuous meter. After this point, the meter returns to its minimum value, for example zero, because the meter has reached its maximum capacity. For example, the rollover point for an odometer might be 999,999.",
            "sameAsAttribute": "ROLLOVER",
            "sameAsObject": "METERINGROUP"
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
            "attributeName": "TEMPLATEID",
            "required": true,
            "persistent": true,
            "title": "Template",
            "remarks": "Identifies the asset template.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SEQUENCE",
            "required": false,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Meter display sequence.",
            "sameAsAttribute": "SEQUENCE",
            "sameAsObject": "METERINGROUP"
        },
        {
            "attributeName": "PLUSCTPMETERID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
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
            "attributeName": "REMARKS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Remarks Long description",
            "remarks": "Long Description for Remarks",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMMODITIES",
            "target": "COMMODITIES",
            "remarks": "relationship to the commodites table (plusctpmeter.commodity = commodities.commodity",
            "whereClause": "commodity = :commodity",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "relationship to the item table (plusctpmeter.itemnum = item.itemnum",
            "whereClause": "itemnum = :itemnum",
            "cardinality": null
        },
        {
            "name": "METER",
            "target": "METER",
            "remarks": "Relationship to METER table",
            "whereClause": "metername = :metername",
            "cardinality": null
        },
        {
            "name": "AVERAGEMETHOD",
            "target": "SYNONYMDOMAIN",
            "remarks": "description of specified avgcalcmethod attribute",
            "whereClause": "domainid = 'AVERAGEMETHOD' and value = :avgcalcmethod",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PLUSCTPMETERWITHMETERNAME",
            "source": "PLUSCTEMPLATE",
            "remarks": "Relationship to PLUSCTPMETER table",
            "whereClause": "metername = :pluscdepmeter and orgid = :orgid and templateid = :templateid",
            "cardinality": null
        },
        {
            "name": "PLUSCTMPLTMETER",
            "source": "PLUSCTEMPLATE",
            "remarks": "relationship to the plusctpmeter table (plusctpmeter.templateid = plusctemplate.templateid and plusctpmeter.orgid = plusctemplate.orgid",
            "whereClause": "templateid = :templateid and orgid = :orgid",
            "cardinality": null
        }
    ]
}