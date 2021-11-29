mos = {
    "objectName": "METERGROUP",
    "className": "psdi.app.meter.MeterGroupSet",
    "description": "Stores names under which meters can be grouped.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "METERGROUPID",
    "primaryKeyColumns": [
        "GROUPNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "METERGROUP",
            "targetObject": "ASSET",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "All Asset records using the current MeterGroup.",
            "longDescription": null
        },
        {
            "objectName": "METERGROUP",
            "targetObject": "ITEM",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter Group of Item",
            "longDescription": null
        },
        {
            "objectName": "METERGROUP",
            "targetObject": "LOCOPER",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter Group",
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
        },
        {
            "objectName": "METERGROUP",
            "targetObject": "PLUSCTEMPLATE",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter Group",
            "longDescription": null
        },
        {
            "objectName": "METERGROUP",
            "targetObject": "SERVICEITEMS",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter Group",
            "longDescription": null
        },
        {
            "objectName": "METERGROUP",
            "targetObject": "SKDEXTRACAPTOOLVIEW",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Extra Capacity Tool Group",
            "longDescription": null
        },
        {
            "objectName": "METERGROUP",
            "targetObject": "TOOLINV",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter Group",
            "longDescription": null
        },
        {
            "objectName": "METERGROUP",
            "targetObject": "TOOLITEM",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter Group",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "METERGROUP",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "GROUPNAME",
            "required": true,
            "persistent": true,
            "title": "Meter Group",
            "remarks": "Name of group under which meters can be grouped.",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Use the Long Description dialog box to enter or view descriptions that are too large (more than 50 characters in length) for the Description field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROPAGATEMOD",
            "required": true,
            "persistent": false,
            "title": "Apply New Meters Where Group Is Used",
            "remarks": "Boolean flag to indicate whether additions to this meter group should be copied to all assets or locations that use it.  This flag is used only when meters are being added to the group.  This is the default value for the 'Apply This Meter Where Group Is Used?' flag.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "METERGROUPID",
            "required": true,
            "persistent": true,
            "title": "METERGROUPID",
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
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find Assets associated with the MeterGroup. The WHERE clause is: asset.groupname = metergroup.groupname. The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETMETER",
            "target": "ASSETMETER",
            "remarks": "Relationship to the AssetMeter table, used to find all AssetMeter objects that tie the given meter group to asset. (assetmeter.groupname = metergroup.groupname). The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find all items that use the given meter group. (item.groupname = metergroup.groupname). The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMETER",
            "target": "LOCATIONMETER",
            "remarks": "Relationship to the LocationMeter table, used to get the LocationMeter associated with this MeterGroup. The WHERE clause is: locationmeter.groupname = metergroup.metername. The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "target": "LOCOPER",
            "remarks": "Relationship to the LocOper table, used to get the LocOpers associated with this MeterGroup. The WHERE clause is: locoper.groupname = metergroup.groupname. The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERINGROUP",
            "target": "METERINGROUP",
            "remarks": "Relationship to the MeterInGroup table, used to find all meters belonging to the given meter group. (meteringroup.groupname = metergroup.groupname). The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "METERGROUP",
            "source": "ASSET",
            "remarks": "Relationship to the MeterGroup table, used to find the MeterGroup object associated with this Asset's GroupName. The WHERE clause is: metergroup.groupname = asset.groupname. The resulting set will contain one object.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERGROUP",
            "source": "ITEM",
            "remarks": "Relationship to the MeterGroup table, used to find the metergroup associated with the Item. (metergroup.groupname = item.groupname). The resulting set will contain one object.",
            "whereClause": "groupname=:groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERGROUP",
            "source": "LOCATIONS",
            "remarks": "Relationship to the MeterGroup table, used to find the MeterGroup object associated with this Location's GroupName. The WHERE clause is: metergroup.groupname = locations.groupname. The resulting set will contain one object.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERGROUP",
            "source": "METERINGROUP",
            "remarks": "Relationship to find the MeterGroups associated with the current MeterInGroup. The WHERE clause is: metergroup.groupname = meteringroup.groupname. The resulting set will contain one object.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERGROUP",
            "source": "PLUSCTEMPLATE",
            "remarks": "relationship to the metergroup table (plusctemplate.groupname = metergroup.groupname",
            "whereClause": "groupname = :groupname",
            "cardinality": null
        }
    ]
}