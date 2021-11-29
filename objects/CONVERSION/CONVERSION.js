mos = {
    "objectName": "CONVERSION",
    "className": "psdi.app.inventory.ConversionSet",
    "description": "Conversion factors for measure units.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONVERSIONID",
    "primaryKeyColumns": [
        "FROMMEASUREUNIT",
        "TOMEASUREUNIT",
        "ITEMNUM",
        "ITEMSETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ITEM",
            "targetObject": "CONVERSION",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CONVERSION",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "CONVERSION",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CONVERSIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FROMMEASUREUNIT",
            "required": true,
            "persistent": true,
            "title": "From Unit of Measure",
            "remarks": "Identifies from which unit of measure you are converting, which is the unit in which the item was either received or transferred.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "TOMEASUREUNIT",
            "required": true,
            "persistent": true,
            "title": "To Unit of Measure",
            "remarks": "Identifies to which unit of measure you are converting, which is the unit in which the item is stored in the storeroom (the issue unit).",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "CONVERSION",
            "required": true,
            "persistent": true,
            "title": "Conversion Factor",
            "remarks": "A ratio that is applied to relate one unit of measure to another, for example, from CASE to EACH. Conversion from one unit of measure to another only takes place when you receive or transfer an item into a storeroom. For this reason, MAXIMO is always converting to the unit at which a storeroom receives and stores the items, which is the same as the storeroom's issue unit.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Name of the user who last modified this record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date this record was last modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item set identifier.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item number",
            "remarks": "Item with which this conversion is associated. For example, a CASE for one item may be 24 and for another item may be 36. However, the numbers 24 and 36 represent the quantity within the case and not the issue unit. If you receive a case of 24 gaskets, but you issue them in sets of four, then the conversion ratio for CASE in this example would be 6. You can assign the conversion of a CASE of 24 gaskets to be 6, and associate it to the item gaskets.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "CONTENTUID",
            "required": true,
            "persistent": true,
            "title": "CONTENTUID",
            "remarks": "Content Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CONVERSION",
            "source": "ITEM",
            "remarks": "Relationship to the Conversion table, used to find all Conversion factors for a given item. (item.itemnum = conversion.itemnum and conversion.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONVERSION_NEW",
            "source": "ITEM",
            "remarks": "Relationship to the Conversion table, used to get an empty conversion set. (1=2) This relationship will find zero objects.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONVERSION",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the Conversion table, used to find all conversion records using this measureunit. (conversion.frommeasureunit=measureunit.measureunitid or conversion.tomeasureunit=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "frommeasureunit=:measureunitid or tomeasureunit=:measureunitid",
            "cardinality": "UNDEFINED"
        }
    ]
}