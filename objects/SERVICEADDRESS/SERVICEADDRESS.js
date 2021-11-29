mos = {
    "objectName": "SERVICEADDRESS",
    "className": "com.ibm.tivoli.maximo.srvad.app.ServiceAddressSet",
    "description": "GIS Service Address",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SERVICEADDRESSID",
    "primaryKeyColumns": [
        "ORGID",
        "ADDRESSCODE"
    ],
    "logicalRelationships": [
        {
            "objectName": "SERVICEADDRESS",
            "targetObject": "ASSET",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SADDRESSCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Service Address",
            "longDescription": null
        },
        {
            "objectName": "SERVICEADDRESS",
            "targetObject": "LOCATIONS",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SADDRESSCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "SERVICEADDRESS",
            "targetObject": "SERVICEADDRESS",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, PARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Service Address",
            "longDescription": null
        },
        {
            "objectName": "SERVICEADDRESS",
            "targetObject": "SKDORIGINDESTMATRIX",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, FROMSERVICEADDRESS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "From Service Address",
            "longDescription": null
        },
        {
            "objectName": "SERVICEADDRESS",
            "targetObject": "SKDORIGINDESTMATRIX",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, TOSERVICEADDRESS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "To Service Address",
            "longDescription": null
        },
        {
            "objectName": "SERVICEADDRESS",
            "targetObject": "TKSERVICEADDRESS",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SADDRESSCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ticket Service Address",
            "longDescription": null
        },
        {
            "objectName": "SERVICEADDRESS",
            "targetObject": "WOSERVICEADDRESS",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SADDRESSCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Service Address",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "SERVICEADDRESS",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SERVICEADDRESS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SERVICEADDRESS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "SERVICEADDRESS",
            "targetObject": "SERVICEADDRESS",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, PARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Service Address",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SERVICEADDRESS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ADDRESSCODE",
            "required": true,
            "persistent": true,
            "title": "Address Code",
            "remarks": "The address code identifies a service address. It must be unique by site for each service address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The organization identifier that is assigned to this service address.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site that is associated with the service address.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the service address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STADDRNUMBER",
            "required": false,
            "persistent": true,
            "title": "House Number",
            "remarks": "The building number of the service address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STADDRDIRPRFX",
            "required": false,
            "persistent": true,
            "title": "Direction Prefix",
            "remarks": "A street direction prefix is part of an address that indicates the cardinal point of a compass, for example, N Florida Ave.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STADDRSTREET",
            "required": false,
            "persistent": true,
            "title": "Street Name",
            "remarks": "The name of the street on which the service address is located.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STADDRSTTYPE",
            "required": false,
            "persistent": true,
            "title": "Street Type",
            "remarks": "The type of street on which the service address is located, such as avenue, circle, parkway, road, street, lane, court, boulevard, or terrace.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STADDRDIRSFX",
            "required": false,
            "persistent": true,
            "title": "Direction Suffix",
            "remarks": "A street direction suffix is part of an address that indicates the cardinal point of a compass, for example Florida Ave. N.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STADDRUNITNUM",
            "required": false,
            "persistent": true,
            "title": "Apartment/Unit/Suite",
            "remarks": "An optional part of a street address that identifies whether the address is an apartment, a unit, or a suite, for example.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STREETADDRESS",
            "required": false,
            "persistent": true,
            "title": "Street Address",
            "remarks": "The street address details of the service address, such as the house number, the street direction prefix, and the name of the street. Additional details can include the type of street, the street direction suffix, and whether the address is an apartment, a unit, or a suite.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FORMATTEDADDRESS",
            "required": false,
            "persistent": true,
            "title": "Formatted Address",
            "remarks": "This address is formatted according to the map provider's requirements and is updated when a location is found on the map tab. Formatted addresses are used to search for addresses on the map tab.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESSLINE2",
            "required": false,
            "persistent": true,
            "title": "Address Line 2",
            "remarks": "Optional additional service address information.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESSLINE3",
            "required": false,
            "persistent": true,
            "title": "Address Line 3",
            "remarks": "Optional additional service address information.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CITY",
            "required": false,
            "persistent": true,
            "title": "City",
            "remarks": "The city of the service address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REGIONDISTRICT",
            "required": false,
            "persistent": true,
            "title": "Region/District",
            "remarks": "The region or district of the service address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COUNTY",
            "required": false,
            "persistent": true,
            "title": "County",
            "remarks": "The county of the service address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATEPROVINCE",
            "required": false,
            "persistent": true,
            "title": "State/Province",
            "remarks": "The state or the province of the service address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POSTALCODE",
            "required": false,
            "persistent": true,
            "title": "Zip/Postal Code",
            "remarks": "The postal code of the service address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COUNTRY",
            "required": false,
            "persistent": true,
            "title": "Country",
            "remarks": "The country of the service address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GEOCODE",
            "required": false,
            "persistent": true,
            "title": "GEO Code",
            "remarks": "GEO code for calculation of sales tax.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TIMEZONE",
            "required": false,
            "persistent": true,
            "title": "Time Zone",
            "remarks": "The time zone of the service address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DIRECTIONS",
            "required": false,
            "persistent": true,
            "title": "Directions",
            "remarks": "Directions to help locate the service address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LATITUDEY",
            "required": false,
            "persistent": true,
            "title": "Latitude(Y)",
            "remarks": "The measurement, in degrees, that the service address is north or south of the equator. Latitude is used with longitude to locate a place on a map. You must specify latitude in decimal degrees.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LONGITUDEX",
            "required": false,
            "persistent": true,
            "title": "Longitude(X)",
            "remarks": "The measurement, in degrees, that the service address is east or west of the prime meridian. Longitude is used with latitude to locate a place on a map. You must specify longitude in decimal degrees.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFERENCEPOINT",
            "required": false,
            "persistent": true,
            "title": "Reference Point",
            "remarks": "A reference point to help to locate the service address, for example, '300 feet behind large red outbuilding.'",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENT",
            "required": false,
            "persistent": true,
            "title": "Parent Address",
            "remarks": "The reference to the parent service address. In case this attribute is null, then it means this Service Address is a root.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Maximo Object",
            "remarks": "The object name following internal Maximo domain for objects",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SERVICEADDRESSID",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DIRECTIONS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Directions Long description",
            "remarks": "Long Description for Directions",
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
            "name": "COUNTRY",
            "target": "ALNDOMAIN",
            "remarks": "Country domain value for Service Address",
            "whereClause": "domainid = 'COUNTRYCODES' and value = :country",
            "cardinality": null
        },
        {
            "name": "STADDRSTTYPE",
            "target": "ALNDOMAIN",
            "remarks": "Street Type domain value for Service Address",
            "whereClause": "domainid = 'STREETTYPE' and value = :staddrsttype",
            "cardinality": null
        },
        {
            "name": "STATEPROVINCE",
            "target": "ALNDOMAIN",
            "remarks": "State / Province domain value for Service Address",
            "whereClause": "domainid = 'STATEPROVINCE' and value = :stateprovince",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Asset in Service Address",
            "whereClause": "saddresscode = :addresscode and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Doclinks table. Used to find out DocLinks for the Service Address. (keytable='SERVICEADDRESS' and keycolumn='SERVICEADDRESSID' and keyvalue=:serviceaddressid$DOCLINKS.KEYVALUE). The resultset will contain zero or more objects.",
            "whereClause": "ownertable = 'SERVICEADDRESS' and ownerid = :serviceaddressid",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Location in Service Address",
            "whereClause": "saddresscode = :addresscode and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "ORGANIZATION",
            "target": "ORGANIZATION",
            "remarks": "Relationship to the Organization table.",
            "whereClause": "orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "PARENT",
            "target": "SERVICEADDRESS",
            "remarks": "Relationship to get the parent Service Address.",
            "whereClause": "ADDRESSCODE = :parent and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "CHILDREN",
            "target": "SERVICEADDRESS",
            "remarks": "Relationship to get the children Service Address.",
            "whereClause": "parent = :addresscode and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "SITE",
            "target": "SITE",
            "remarks": "Relationship to the Site table.",
            "whereClause": "siteid = :siteid and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "FROMSKDORIGINDESTMATRIX",
            "target": "SKDORIGINDESTMATRIX",
            "remarks": "Relationship to the SKDORIGINDESTMATRIX table, used to get the SKDORIGINDESTMATRIX records for a given FromServiceAddress.",
            "whereClause": "fromserviceaddress=:addresscode and orgid=:orgid and toserviceaddress is not null",
            "cardinality": null
        },
        {
            "name": "FROMSKDORIGINDESTMATRIXNOTUSER",
            "target": "SKDORIGINDESTMATRIX",
            "remarks": "Relationship to the SKDORIGINDESTMATRIX table, used to get the SKDORIGINDESTMATRIX records for a given FromServiceAddress and source is not USER.",
            "whereClause": "fromserviceaddress=:addresscode and orgid=:orgid and source not in ( select value from synonymdomain where domainid='SOURCE' and maxvalue='USER')",
            "cardinality": null
        },
        {
            "name": "FROMSKDORIGINDESTMATRIXUSER",
            "target": "SKDORIGINDESTMATRIX",
            "remarks": "Relationship to the SKDORIGINDESTMATRIX table, used to get the SKDORIGINDESTMATRIX records for a given FromServiceAddress and source as USER.",
            "whereClause": "fromserviceaddress=:addresscode and orgid=:orgid and source in ( select value from synonymdomain where domainid='SOURCE' and maxvalue='USER')",
            "cardinality": null
        },
        {
            "name": "TOSKDORIGINDESTMATRIX",
            "target": "SKDORIGINDESTMATRIX",
            "remarks": "Relationship to the SKDORIGINDESTMATRIX table, used to get the SKDORIGINDESTMATRIX records for a given ToServiceAddress.",
            "whereClause": "toserviceaddress=:addresscode and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "TOSKDORIGINDESTMATRIXNOTUSER",
            "target": "SKDORIGINDESTMATRIX",
            "remarks": "Relationship to the SKDORIGINDESTMATRIX table, used to get the SKDORIGINDESTMATRIX records for a given ToServiceAddress and source is not USER.",
            "whereClause": "toserviceaddress=:addresscode and orgid=:orgid and source not in ( select value from synonymdomain where domainid='SOURCE' and maxvalue='USER')",
            "cardinality": null
        },
        {
            "name": "TOSKDORIGINDESTMATRIXUSER",
            "target": "SKDORIGINDESTMATRIX",
            "remarks": "Relationship to the SKDORIGINDESTMATRIX table, used to get the SKDORIGINDESTMATRIX records for a given ToServiceAddress and source as USER.",
            "whereClause": "toserviceaddress=:addresscode and orgid=:orgid and source in ( select value from synonymdomain where domainid='SOURCE' and maxvalue='USER')",
            "cardinality": null
        },
        {
            "name": "STADDRDIRPRFX",
            "target": "SYNONYMDOMAIN",
            "remarks": "Street Direction Prefix domain value for Service Address",
            "whereClause": "domainid = 'STREETDIR' and value = :staddrdirprfx",
            "cardinality": null
        },
        {
            "name": "STADDRDIRSFX",
            "target": "SYNONYMDOMAIN",
            "remarks": "Street Direction Suffix domain value for Service Address",
            "whereClause": "domainid = 'STREETDIR' and value = :staddrdirsfx",
            "cardinality": null
        },
        {
            "name": "TIMEZONE",
            "target": "SYNONYMDOMAIN",
            "remarks": "Time Zone domain value for Service Address",
            "whereClause": "domainid = 'TIMEZONE' and value = :timezone",
            "cardinality": null
        },
        {
            "name": "RELATEDSRS",
            "target": "TKSERVICEADDRESS",
            "remarks": "Relationship to the TKSERVICEAADDRESS table. Used to find out related work orders for the Service Address. The resultset will contain zero or more objects.",
            "whereClause": "orgid = :orgid and saddresscode = :addresscode and class in (select value from synonymdomain where domainid='TKCLASS' and maxvalue='SR')",
            "cardinality": null
        },
        {
            "name": "RELATEDWOS",
            "target": "WOSERVICEADDRESS",
            "remarks": "Relationship to the WOSERVICEAADDRESS table. Used to find out related work orders for the Service Address. The resultset will contain zero or more objects.",
            "whereClause": "orgid = :orgid and saddresscode = :addresscode",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "SERVICEADDRESS",
            "source": "ASSET",
            "remarks": "Service Address for Asset",
            "whereClause": "addresscode = :saddresscode and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "ADDRESSABLE_SERVICEADDRESS",
            "source": "ASSET",
            "remarks": "Relationship from ASSET (Addressable) that doesn't bring any Service Address, used to load a empty set to be used as based for a fake mbo creation.",
            "whereClause": "1 = 2",
            "cardinality": null
        },
        {
            "name": "SERVICEADDRESS",
            "source": "LOCATIONS",
            "remarks": "Service Address for Location",
            "whereClause": "addresscode = :saddresscode and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "ADDRESSABLE_SERVICEADDRESS",
            "source": "LOCATIONS",
            "remarks": "Relationship from LOCATIONS (Addressable) that doesn't bring any Service Address, used to load a empty set to be used as based for a fake mbo creation.",
            "whereClause": "1 = 2",
            "cardinality": null
        },
        {
            "name": "PARENT",
            "source": "SERVICEADDRESS",
            "remarks": "Relationship to get the parent Service Address.",
            "whereClause": "ADDRESSCODE = :parent and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "CHILDREN",
            "source": "SERVICEADDRESS",
            "remarks": "Relationship to get the children Service Address.",
            "whereClause": "parent = :addresscode and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "TOSERVICEADDRESS",
            "source": "SKDORIGINDESTMATRIX",
            "remarks": "Relationship to the SERVICEADDRESS table, used to get the SERVICEADDRESS records for a given toserviceaddress.",
            "whereClause": "addresscode=:toserviceaddress and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "MAIN_SERVICEADDRESS",
            "source": "TKSERVICEADDRESS",
            "remarks": "Service Address for Ticket Service address",
            "whereClause": "addresscode = :saddresscode and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "MAIN_SERVICEADDRESS",
            "source": "WOSERVICEADDRESS",
            "remarks": "Service Address for WO Service address",
            "whereClause": "addresscode = :saddresscode and orgid = :orgid",
            "cardinality": null
        }
    ]
}