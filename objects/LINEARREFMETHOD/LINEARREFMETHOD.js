mos = {
    "objectName": "LINEARREFMETHOD",
    "className": "psdi.app.asset.LinearRefMethodSet",
    "description": "Linear Referencing Method",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LINEARREFMETHODID",
    "primaryKeyColumns": [
        "LRM"
    ],
    "logicalRelationships": [
        {
            "objectName": "LINEARREFMETHOD",
            "targetObject": "ASSET",
            "parentKeys": "LRM",
            "targetKeys": "LRM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "All linear Asset records using the current LinearRefMethod. (Linear)",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "LINEARREFMETHOD",
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
            "attributeName": "LRM",
            "required": true,
            "persistent": true,
            "title": "LRM",
            "remarks": "Name of this linear referencing method.  A linear referencing method specifies the units of measure (for measures and offsets) and the reference points (for offsets) to locate points on or near a linear asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEASUREUNITID",
            "required": true,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "Unit of measure used to locate assets along the linear asset's x-axis.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "BASEMEASUREUNITID",
            "required": true,
            "persistent": true,
            "title": "Base Unit of Measure",
            "remarks": "Usually, this is the same as the unit of measure  for the asset. If they differ, Maximo will display measures in the unit of measure but will store measures in both the unit of measure and base unit of measure.  A conversion between the unit of measure and base unit of measure, entered via the Units of Measure and Conversion Action in Assets, must exist if the base unit of measure differs from the unit of measure.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "OFFSETMEASUREUNITID",
            "required": true,
            "persistent": true,
            "title": "Offset Unit of Measure",
            "remarks": " Unit of measure for the start and end reference point offsets, which are used in conjunction with the start and end reference points to determine the start and end measures.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "YOFFSETMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Y-Offset Unit of Measure",
            "remarks": "Unit of measure for the Y Offset, which is the measure to the right or left of the linear asset.  The measurement is taken from the Y Offset Reference Point.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ZOFFSETMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Z-Offset Unit of Measure",
            "remarks": "Unit of measure for the Z Offset, which is the measure above or below the linear asset.  The measurement is taken from the Z Offset Reference Point.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "YOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Y-Offset Reference Point",
            "remarks": "Reference point from which the start Y-Offset (distance to the right or left of the linear asset) is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ZOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Z-Offset Reference Point",
            "remarks": "Reference point from which the start Z-Offset (distance above or below the linear asset) is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINEARREFMETHODID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique ID for the LINEARREFMETHOD table ",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this LinearRefMethod's LinearRefMethod. (Asset.LRM=LinearRefMethod.LRM). The resulting set will contain one object.",
            "whereClause": "lrm=:lrm",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LINEARREFMETHOD",
            "source": "ASSET",
            "remarks": "Relationship to the LinearRefMethod table, used to find this Asset's LinearRefMethod. (LinearRefMethod.LRM=Asset.LRM). The resulting set will contain one object.",
            "whereClause": "lrm=:lrm",
            "cardinality": "UNDEFINED"
        }
    ]
}