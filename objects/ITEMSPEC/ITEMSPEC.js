mos = {
    "objectName": "ITEMSPEC",
    "className": "psdi.app.item.ItemSpecSet",
    "description": "Values of an attribute specified for an item",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ITEMSPECID",
    "primaryKeyColumns": [
        "ITEMNUM",
        "ITEMSETID",
        "ASSETATTRID",
        "SECTION"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ITEMSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "ITEMSPEC",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ITEMSPEC",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ITEMSPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "ITEMSPEC",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 33",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Item",
            "remarks": "Item number",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ASSETATTRID",
            "required": true,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Characteristic that you apply to many classifications to help describe an item. For example, SIZE or SPEED.",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "ROTATING",
            "required": true,
            "persistent": true,
            "title": "Rotating",
            "remarks": "IS Item a rotating asset? - Used for search",
            "sameAsAttribute": "ROTATING",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": true,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Classification Structure identifier.",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "ALLASSPECUSEVALUE",
            "required": true,
            "persistent": true,
            "title": "All Asset Specs Use Value",
            "remarks": "For Asset listing this ItemNum - do all AssetSpecs use this ItemSpec value?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALLLOCSPECUSEVALUE",
            "required": true,
            "persistent": true,
            "title": "All Location Specs Use Value",
            "remarks": "For Locations listing this ItemNum - do all LocationSpecs use this ItemSpec value?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYSEQUENCE",
            "required": true,
            "persistent": true,
            "title": "Display Sequence",
            "remarks": "Display sequence",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMVALUE",
            "required": false,
            "persistent": true,
            "title": "Numeric Value",
            "remarks": "Numeric value for the attribute associated with the item or tool.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "NUMERICDOMAIN"
        },
        {
            "attributeName": "MEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "Unit of measure associated with the attribute for this item or tool, such as gallon. Click the Select Value button to choose a unit of measure.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ALNVALUE",
            "required": false,
            "persistent": true,
            "title": "Alphanumeric Value",
            "remarks": "Alphanumeric value for the attribute associated with the item or tool",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date record modified",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User name who last changed record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "IS01",
            "required": false,
            "persistent": true,
            "title": "Is01",
            "remarks": "Cross-over field from ClassSpec.CS01",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IS02",
            "required": false,
            "persistent": true,
            "title": "Is02",
            "remarks": "Cross-over field from ClassSpec.CS02",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IS03",
            "required": false,
            "persistent": true,
            "title": "Is03",
            "remarks": "Cross-over field from ClassSpec.CS03",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IS04",
            "required": false,
            "persistent": true,
            "title": "Is04",
            "remarks": "Cross-over field from ClassSpec.CS04",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IS05",
            "required": false,
            "persistent": true,
            "title": "Is05",
            "remarks": "Cross-over field from ClassSpec.CS05",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Set identifier for the item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "SECTION",
            "required": false,
            "persistent": true,
            "title": "Section",
            "remarks": "Identifies a group of attributes.",
            "sameAsAttribute": "SECTION",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "ITEMSPECID",
            "required": true,
            "persistent": true,
            "title": "ITEMSPECID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MANDATORY",
            "required": true,
            "persistent": true,
            "title": "Mandatory",
            "remarks": "Is value mandatory?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TABLEVALUE",
            "required": false,
            "persistent": true,
            "title": "Table Value",
            "remarks": "The value from the table specified in the DOMAIN where the domaintype and datatype is TABLE.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINKEDTOATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Linked to Attribute",
            "remarks": "This attribute is linked to another attribute in this specification.",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "LINKEDTOSECTION",
            "required": false,
            "persistent": true,
            "title": "Linked to Section",
            "remarks": "This section is linked to another section in this specification.",
            "sameAsAttribute": "SECTION",
            "sameAsObject": "CLASSSPEC"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSETATTRIBUTE",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the AssetAttribute table, used to find an asset attribute record for a given item specification. (itemspec.assetattrid = assetattribute.assetattrid). The resulting set will contain zero or one object.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROTATINGASSETSPEC",
            "target": "ASSETSPEC",
            "remarks": "Relationship to the AssetSpec table, used to find a rotating asset specifiaction for a given item specification. (assetspec.inheritedfromitem = 'yes' and assetspec.classstructureid = itemspec.classstructureid and assetspec.assetattrid = itemspec.assetattrid). The resulting set will contain zero or one object.",
            "whereClause": "inheritedfromitem = 1 and classstructureid=:classstructureid and assetattrid=:assetattrid and assetnum in (select b.assetnum from asset b where b.itemnum = :itemnum and assetspec.assetnum = b.assetnum and assetspec.siteid = b.siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find a class spec for a given item specification. (itemspec.classstructureid = classspec.classstructureid and itemspec.assetattrid = classspec.assetattrid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid and assetattrid=:assetattrid and (section is null or (section is not null and section=:section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given item specification. (itemspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROTATINGLOCATIONSPEC",
            "target": "LOCATIONSPEC",
            "remarks": "Relationship to the LocationSpec table, used to find a rotating location specification for a given item specification. (locationspec.inheritedfromitem = 'yes' and locationspec.classstructureid = itemspec.classstructureid and locationspec.assetattrid = itemspec.assetattrid). The resulting set will contain zero or one object.",
            "whereClause": "inheritedfromitem = 1 and classstructureid=:classstructureid and assetattrid=:assetattrid and location in (select b.location from locoper b where b.itemnum = :itemnum and locationspec.location = b.location and locationspec.siteid = b.siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREUNIT",
            "target": "MEASUREUNIT",
            "remarks": "Relationship to the MeasureUnit table, used to find the MeasureUnit object associated with this ItemSpec. The WHERE clause is: measureunit.measureunitid = itemspec.measureunitid and measureunit.orgid = itemspec.orgid. The resulting set will contain one object",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ITEMSPEC",
            "source": "ASSET",
            "remarks": "Relationship to the ItemSpec table, used to find all item specifications for a given asset. (itemspec.itemnum = asset.itemnum and itemspec.classstructureid = asset.classstructureid and itemspec.itemsetid = asset.itemsetid). This resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and classstructureid = :classstructureid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSPEC",
            "source": "ASSETATTRIBUTE",
            "remarks": "Relationship to the ItemSpec table, used to find all item specification records for a given asset attribute. (itemspec.assetattrid = assetattribute.assetattrid). The resulting set will contain zero or more objects.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSPEC",
            "source": "CLASSSPEC",
            "remarks": "Relationship to the ItemSpec table, used to find any item specification records derived from the given class specification record. (itemspec.classstructureid = classspec.classstructureid and itemspec.assetattrid = classspec.assetattrid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid and assetattrid=:assetattrid and ((:section is null and section is null) or (:section is not null and section=:section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSPECCLASS",
            "source": "CLASSSPEC",
            "remarks": "Relationship to the ItemSpec table, used to find any item specification records derived from the given class specification. (itemspec.classstructureid = classspec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid and (:section is null or (:section is not null and :section=section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSPEC",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ItemSpec table, used to find any item specification records for the given class structure. (itemspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSPEC",
            "source": "ITEM",
            "remarks": "Relationship to the ItemSpec table, used to find all item specifications for a given item. (item.itemnum = itemspec.itemnum and itemspec.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSPECCLASS",
            "source": "ITEM",
            "remarks": "Relationship to the ItemSpec table, used to find all item specifications for a given item with a class structure. (item.itemnum = itemspec.itemnum and item.classstructureid = itemspec.classstructureid and itemspec.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and classstructureid = :classstructureid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSPEC",
            "source": "LOCATIONS",
            "remarks": "Relationship to the ItemSpec table, used to find the item specifications which contain the operating location's ItemNum and ClassStructureId. (locations.classstructureid =itemspec.classstructureid and itemspec.itemnum=locations.itemnum and itemspec.itemsetid = locations.itemsetid). The resulting set will contain zero or more objects. If found, these item specifications will be copied to the location's specifications. SystemId is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "itemnum = :itemnum and classstructureid = :classstructureid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSPEC",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the ItemSpec table, used to find all item specification records that use the given measure unit. (itemspec.measureunitid = measureunit.measureunitid). The resulting set will contain zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        }
    ]
}