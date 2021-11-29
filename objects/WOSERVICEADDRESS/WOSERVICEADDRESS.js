mos = {
    "objectName": "WOSERVICEADDRESS",
    "className": "com.ibm.tivoli.maximo.srvad.app.wo.WOServiceAddressSet",
    "description": "GIS WO Service Address",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WOSERVICEADDRESSID",
    "primaryKeyColumns": [
        "SITEID",
        "WONUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "WOSERVICEADDRESS",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WOSERVICEADDRESS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
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
        },
        {
            "objectName": "SITE",
            "targetObject": "WOSERVICEADDRESS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOSERVICEADDRESS",
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
            "required": false,
            "persistent": true,
            "title": "Workorder number",
            "remarks": "Workorder number that owns this SA",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
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
            "required": true,
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
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "STADDRNUMBER",
            "required": false,
            "persistent": true,
            "title": "House Number",
            "remarks": "The building number of the service address.",
            "sameAsAttribute": "STADDRNUMBER",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "STADDRDIRPRFX",
            "required": false,
            "persistent": true,
            "title": "Direction Prefix",
            "remarks": "A street direction prefix is part of an address that indicates the cardinal point of a compass, for example, N Florida Ave.",
            "sameAsAttribute": "STADDRDIRPRFX",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "STADDRSTREET",
            "required": false,
            "persistent": true,
            "title": "Street Name",
            "remarks": "The name of the street on which the service address is located.",
            "sameAsAttribute": "STADDRSTREET",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "STADDRSTTYPE",
            "required": false,
            "persistent": true,
            "title": "Street Type",
            "remarks": "The type of street on which the service address is located, such as avenue, circle, parkway, road, street, lane, court, boulevard, or terrace.",
            "sameAsAttribute": "STADDRSTTYPE",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "STADDRDIRSFX",
            "required": false,
            "persistent": true,
            "title": "Direction Suffix",
            "remarks": "A street direction suffix is part of an address that indicates the cardinal point of a compass, for example Florida Ave. N.",
            "sameAsAttribute": "STADDRDIRSFX",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "STADDRUNITNUM",
            "required": false,
            "persistent": true,
            "title": "Apartment/Unit/Suite",
            "remarks": "An optional part of a street address that identifies whether the address is an apartment, a unit, or a suite, for example.",
            "sameAsAttribute": "STADDRUNITNUM",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "STREETADDRESS",
            "required": false,
            "persistent": true,
            "title": "Street Address",
            "remarks": "The street address details of the service address, such as the house number, the street direction prefix, and the name of the street. Additional details can include the type of street, the street direction suffix, and whether the address is an apartment, a unit, or a suite.",
            "sameAsAttribute": "STREETADDRESS",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "FORMATTEDADDRESS",
            "required": false,
            "persistent": true,
            "title": "Formatted Address",
            "remarks": "This address is formatted according to the map provider's requirements and is updated when a location is found on the map tab. You can use the formatted address to search for addresses on the map tab.",
            "sameAsAttribute": "FORMATTEDADDRESS",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "ADDRESSLINE2",
            "required": false,
            "persistent": true,
            "title": "Address Line 2",
            "remarks": "Optional additional service address information.",
            "sameAsAttribute": "ADDRESSLINE2",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "ADDRESSLINE3",
            "required": false,
            "persistent": true,
            "title": "Address Line 3",
            "remarks": "Optional additional service address information.",
            "sameAsAttribute": "ADDRESSLINE3",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "CITY",
            "required": false,
            "persistent": true,
            "title": "City",
            "remarks": "The city of the service address.",
            "sameAsAttribute": "CITY",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "REGIONDISTRICT",
            "required": false,
            "persistent": true,
            "title": "Region/District",
            "remarks": "The region or district of the service address.",
            "sameAsAttribute": "REGIONDISTRICT",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "COUNTY",
            "required": false,
            "persistent": true,
            "title": "County",
            "remarks": "The county of the service address.",
            "sameAsAttribute": "COUNTY",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "STATEPROVINCE",
            "required": false,
            "persistent": true,
            "title": "State/Province",
            "remarks": "The state or the province of the service address.",
            "sameAsAttribute": "STATEPROVINCE",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "POSTALCODE",
            "required": false,
            "persistent": true,
            "title": "Zip/Postal Code",
            "remarks": "The postal code of the service address.",
            "sameAsAttribute": "POSTALCODE",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "COUNTRY",
            "required": false,
            "persistent": true,
            "title": "Country",
            "remarks": "The country of the service address.",
            "sameAsAttribute": "COUNTRY",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "GEOCODE",
            "required": false,
            "persistent": true,
            "title": "GEO Code",
            "remarks": "GEO code for calculation of sales tax.",
            "sameAsAttribute": "GEOCODE",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "TIMEZONE",
            "required": false,
            "persistent": true,
            "title": "Time Zone",
            "remarks": "The time zone of the service address.",
            "sameAsAttribute": "TIMEZONE",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "DIRECTIONS",
            "required": false,
            "persistent": true,
            "title": "Directions",
            "remarks": "Directions to help locate the service address.",
            "sameAsAttribute": "DIRECTIONS",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "LATITUDEY",
            "required": false,
            "persistent": true,
            "title": "Latitude(Y)",
            "remarks": "The measurement, in degrees, that the service address is north or south of the equator. Latitude is used with longitude to locate a place on a map. You must specify latitude in decimal degrees.",
            "sameAsAttribute": "LATITUDEY",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "LONGITUDEX",
            "required": false,
            "persistent": true,
            "title": "Longitude(X)",
            "remarks": "The measurement, in degrees, that the service address is east or west of the prime meridian. Longitude is used with latitude to locate a place on a map. You must specify longitude in decimal degrees.",
            "sameAsAttribute": "LONGITUDEX",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "REFERENCEPOINT",
            "required": false,
            "persistent": true,
            "title": "Reference Point",
            "remarks": "A reference point to help to locate the service address, for example, '300 feet behind large red outbuilding.'",
            "sameAsAttribute": "REFERENCEPOINT",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "ADDRESSISCHANGED",
            "required": false,
            "persistent": true,
            "title": "Service Address has been modified in WO",
            "remarks": "Service Address has been modified in WO.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SADDRESSCODE",
            "required": false,
            "persistent": true,
            "title": "Service Address",
            "remarks": "The address code identifies a service address. It must be unique by site for each service address.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "WOSERVICEADDRESSID",
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
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Doclinks table. Used to find out DocLinks for the Service Address. (keytable='SERVICEADDRESS' and keycolumn='SERVICEADDRESSID' and keyvalue=:serviceaddressid$DOCLINKS.KEYVALUE). The resultset will contain zero or more objects.",
            "whereClause": "ownertable = 'SERVICEADDRESS' and ownerid = :serviceaddressid",
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
            "name": "MAIN_SERVICEADDRESS",
            "target": "SERVICEADDRESS",
            "remarks": "Service Address for WO Service address",
            "whereClause": "addresscode = :saddresscode and orgid = :orgid",
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
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Workorder for WO Service Address",
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "RELATEDWOS",
            "source": "SERVICEADDRESS",
            "remarks": "Relationship to the WOSERVICEAADDRESS table. Used to find out related work orders for the Service Address. The resultset will contain zero or more objects.",
            "whereClause": "orgid = :orgid and saddresscode = :addresscode",
            "cardinality": null
        },
        {
            "name": "SERVICEADDRESS",
            "source": "WORKORDER",
            "remarks": "WO Service Address for Workorder",
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        }
    ]
}