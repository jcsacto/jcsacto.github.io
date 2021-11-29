mos = {
    "objectName": "METERINGROUP",
    "className": "psdi.app.meter.MeterInGroupSet",
    "description": "Stores meter groupings",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "METERINGROUPID",
    "primaryKeyColumns": [
        "GROUPNAME",
        "METERNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "METERGROUP",
            "targetObject": "METERINGROUP",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter Group",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "GROUPNAME",
            "required": true,
            "persistent": true,
            "title": "Group",
            "remarks": "Identifier of the meter group",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "METERGROUP"
        },
        {
            "attributeName": "METERNAME",
            "required": true,
            "persistent": true,
            "title": "Meter",
            "remarks": "Identifier of the meter.",
            "sameAsAttribute": "METERNAME",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "ROLLOVER",
            "required": false,
            "persistent": true,
            "title": "Meter Rollover",
            "remarks": "The point at which a CONTINUOUS type meter returns to the meter's mininum value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROPAGATEMETERGROUPMOD",
            "required": true,
            "persistent": false,
            "title": "Apply This Meter Where Group Is Used",
            "remarks": "Boolean flag to indicate if this meter should be copied to all assets or locations that use the current meter group.  This flag is used only when the meter is being added to the group.  This value defaults from the meter group's 'Apply New Meters Where Group Is Used?' flag.  The default can be modified for individual meters before saving.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "METERINGROUPID",
            "required": true,
            "persistent": true,
            "title": "METERINGROUPID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATICAVERAGE",
            "required": false,
            "persistent": true,
            "title": "Static Average",
            "remarks": "default average when AvgCalcMethod is STATIC.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SLIDINGWINDOWSIZE",
            "required": false,
            "persistent": true,
            "title": "Sliding Window Size",
            "remarks": "size of sliding window for SLIDING AvgCalcMethods",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SEQUENCE",
            "required": false,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Meter display sequence",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find Assets associated with the MeterInGroup's groupname. The WHERE clause is: asset.groupname = meteringroup.groupname. The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCOPER",
            "target": "LOCOPER",
            "remarks": "Relationship to the LocOper table, used to find the LocOper objects associated with this MeterInGroup's GroupName. The WHERE clause is: locoper.groupname = meteringroup.groupname. The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "target": "METER",
            "remarks": "Relationship to the Meter table, used to find meter details for the given meter. (meter.metername = meteringroup.metername). The resulting set will contain one object.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERGROUP",
            "target": "METERGROUP",
            "remarks": "Relationship to find the MeterGroups associated with the current MeterInGroup. The WHERE clause is: metergroup.groupname = meteringroup.groupname. The resulting set will contain one object.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "METERINGROUP",
            "source": "ASSET",
            "remarks": "Relationship to the MeterInGroup table, used to find the MeterInGroup objects associated with this Asset's GroupName. The WHERE clause is: meteringroup.groupname = asset.groupname. The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERINGROUP",
            "source": "ASSETMETER",
            "remarks": "Relationship to the MeterInGroup table, used to find the meteringroup associated with the current AssetMeter. The WHERE clause is: meteringroup.groupname = assetmeter.groupname and meteringroup.metername = assetmeter.metername. The resulting set will contain zero or one object.",
            "whereClause": "groupname = :groupname and metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERINGROUP",
            "source": "LOCATIONS",
            "remarks": "Relationship to the MeterInGroup table, used to find the MeterInGroup objects associated with this Location's GroupName. The WHERE clause is: meteringroup.groupname = locations.groupname. The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERINGROUP",
            "source": "METER",
            "remarks": "Relationship to the MeterInGroup table, used to find all MeterInGroups associated with the current Meter. The WHERE clause is: meteringroup.metername = meter.metername. The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERINGROUP",
            "source": "METERGROUP",
            "remarks": "Relationship to the MeterInGroup table, used to find all meters belonging to the given meter group. (meteringroup.groupname = metergroup.groupname). The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        }
    ]
}