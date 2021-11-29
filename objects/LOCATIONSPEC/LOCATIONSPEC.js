mos = {
    "objectName": "LOCATIONSPEC",
    "className": "psdi.app.location.LocationSpecSet",
    "description": "Values of an attribute specified for a location",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LOCATIONSPECID",
    "primaryKeyColumns": [
        "LOCATION",
        "ASSETATTRID",
        "SECTION",
        "SITEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "LINKEDTOATTRIBUTE, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 30",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, SECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 33",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 121",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LOCATION",
            "required": true,
            "persistent": true,
            "title": "Location",
            "remarks": "Location identifier",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ASSETATTRID",
            "required": true,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Asset attribute identifier",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": true,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Classification Structure identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "INHERITEDFROMITEM",
            "required": true,
            "persistent": true,
            "title": "Inherited from Item",
            "remarks": "Specification inherited from item specification?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMSPECVALCHANGED",
            "required": true,
            "persistent": true,
            "title": "Item Specification Value Changed ",
            "remarks": "Item specification value changed after being inherited? N if value not changed and N if value not inherited from ItemSpecification.",
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
            "remarks": "Numeric value in entered units",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "NUMERICDOMAIN"
        },
        {
            "attributeName": "MEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "Entered units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ALNVALUE",
            "required": false,
            "persistent": true,
            "title": "Alphanumeric Value",
            "remarks": "Alphanumeric(text) value",
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
            "remarks": "User name who last changed record",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "LS01",
            "required": false,
            "persistent": true,
            "title": "Ls01",
            "remarks": "Cross-over field from ClassSpec.CS01",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LS02",
            "required": false,
            "persistent": true,
            "title": "Ls02",
            "remarks": "Cross-over field from ClassSpec.CS02",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LS03",
            "required": false,
            "persistent": true,
            "title": "Ls03",
            "remarks": "Cross-over field from ClassSpec.CS03",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LS04",
            "required": false,
            "persistent": true,
            "title": "Ls04",
            "remarks": "Cross-over field from ClassSpec.CS04",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LS05",
            "required": false,
            "persistent": true,
            "title": "Ls05",
            "remarks": "Cross-over field from ClassSpec.CS05",
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
            "attributeName": "SECTION",
            "required": false,
            "persistent": true,
            "title": "Section",
            "remarks": "Section for a Group of Attributes",
            "sameAsAttribute": "SECTION",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "LOCATIONSPECID",
            "required": true,
            "persistent": true,
            "title": "LOCATIONSPECID",
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
            "remarks": "Relationship to the AssetAttribute table, used to find the attribute of a given location specification. (locationspec.assetattrid = assetattribute.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find the base specification which the given location specification is derived from. (locationspec.classstructureid = classspec.classstructureid and locationspec.assetattrid = classspec.assetattrid ). The resulting set will contain one object.",
            "whereClause": "classstructureid=:classstructureid and assetattrid=:assetattrid and (section is null or (section is not null and section=:section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ClassStructure table, used to find the class specfication identifier of a given location specification. (locationspec.classstructureid = classstructure.classstructureid). The resulting set will contain one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Location table, used to find the LOCATIONS record for a given LOCATIONSPEC. (locationspec.location=locations.location and locationspec.classstructureid = Locations.classstructureid and locationspec.siteid=locations.siteid). The resulting set will contain one object.",
            "whereClause": "location=:location and classstructureid =:classstructureid and siteid=:siteid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREUNIT",
            "target": "MEASUREUNIT",
            "remarks": "Relationship to the MeasureUnit table, used to find the MeasureUnit object associated with this LocationSpec. The WHERE clause is: measureunit.measureunitid = locationspec.measureunitid and measureunit.orgid = locationspec.orgid. The resulting set will contain one object",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LOCATIONSPEC",
            "source": "ASSET",
            "remarks": "Relationship to the LocationSpec table, used to find all location specifications for a given asset. (locationspec.location = asset.location and locationspec.classstructureid = asset.classstructureid). This resulting set will contain zero or more objects.",
            "whereClause": "location = :location and classstructureid = :classstructureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONSPEC",
            "source": "ASSETATTRIBUTE",
            "remarks": "Relationship to the LocationSpec table, used to find all location specification records for a given asset attribute. (locationspec.assetattrid = assetattribute.assetattrid). The resulting set will contain zero or more objects.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONSPEC",
            "source": "AUTOATTRUPDATE",
            "remarks": null,
            "whereClause": "location=:location and assetattrid=:attribute and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONSPEC",
            "source": "CLASSSPEC",
            "remarks": "Relationship to the LocationSpec table, used to find any location specification records derived from the given class specification record. (locationspec.classstructureid = classspec.classstructureid and locationspec.assetattrid = classspec.assetattrid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid and assetattrid=:assetattrid and ((:section is null and section is null) or (:section is not null and section=:section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONSPECCLASS",
            "source": "CLASSSPEC",
            "remarks": "Relationship to the LocationSpec table, used to find any location specification records derived from the given class specification. (locationspec.classstructureid = classspec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid and (:section is null or (:section is not null and :section=section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONSPEC",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the LocationSpec table, used to find any location specification records for the given class structure. (locationspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROTATINGLOCATIONSPEC",
            "source": "ITEMSPEC",
            "remarks": "Relationship to the LocationSpec table, used to find a rotating location specification for a given item specification. (locationspec.inheritedfromitem = 'yes' and locationspec.classstructureid = itemspec.classstructureid and locationspec.assetattrid = itemspec.assetattrid). The resulting set will contain zero or one object.",
            "whereClause": "inheritedfromitem = 1 and classstructureid=:classstructureid and assetattrid=:assetattrid and location in (select b.location from locoper b where b.itemnum = :itemnum and locationspec.location = b.location and locationspec.siteid = b.siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONSSPEC",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocationSpec table, used to find the specifications which contain the attributes and values to characterize the operating location. (locations.location=locationspec.location). The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LOCATIONSSPECCLASS",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocationSpec table, used to find the location specifications which contain the operating location's individual attributes and values to characterize the location. (locations.location= locationspec.location and locations.classstructureid =locationspec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and classstructureid = :classstructureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONSPEC",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the LocationSpec table, used to find all location specification records that use the given measure unit. (locationspec.measureunitid = measureunit.measureunitid). The resulting set will contain zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONSPEC",
            "source": "MULTIASSETLOCCI",
            "remarks": null,
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}