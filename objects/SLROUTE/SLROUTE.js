mos = {
    "objectName": "SLROUTE",
    "className": "com.ibm.tivoli.maximo.slroute.SLRouteSet",
    "description": "Street Level Route Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SLROUTEID",
    "primaryKeyColumns": [
        "SLROUTEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "SLROUTE",
            "targetObject": "SLRTRAVELTIME",
            "parentKeys": "SLROUTEID",
            "targetKeys": "SLROUTEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SL Route",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "SLROUTE",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "SLROUTE",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SLROUTE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SLROUTE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 238",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SLROUTE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 239",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SLROUTE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SLROUTE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SLROUTE",
            "parentKeys": "SITEID",
            "targetKeys": "ENDLOCSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 287",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SLROUTE",
            "parentKeys": "SITEID",
            "targetKeys": "STARTLOCSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 288",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "STARTLOCATION",
            "required": false,
            "persistent": true,
            "title": "Start location",
            "remarks": "Specify the location where the labor or the crew or both starts the route.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STARTLOCSITEID",
            "required": false,
            "persistent": true,
            "title": "Start location site id",
            "remarks": "Start Location SiteId",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ENDLOCATION",
            "required": false,
            "persistent": true,
            "title": "End location",
            "remarks": "Specify the location where the labor or the crew or both ends the route.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ENDLOCSITEID",
            "required": false,
            "persistent": true,
            "title": "End location SiteId",
            "remarks": "End Location SiteId",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "The unique identifier of the organization.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SLROUTEDATE",
            "required": false,
            "persistent": true,
            "title": "Date of SLR",
            "remarks": "Date of SLR",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "Crew Id",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "LABORCODE",
            "required": false,
            "persistent": true,
            "title": "Labor",
            "remarks": "Labor Code",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "AMCREWNP",
            "required": false,
            "persistent": false,
            "title": "Crew",
            "remarks": "Specify the crew to assign to the route.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABORCODENP",
            "required": false,
            "persistent": false,
            "title": "Labor",
            "remarks": "Specify the labor to assign to the route.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": false,
            "title": "Start date",
            "remarks": "Specify the date when the labor or the crew or both starts the route. If you enter a different start date and end date, a route is created for each day. For example, if you enter the 2nd of February as the start date and enter the 5th of February as the end date, routes are created for the 2nd, 3rd, 4th, and 5th of February.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": false,
            "title": "End date",
            "remarks": "Specify the date when the labor or the crew or both ends the route. If you enter a different start date and end date, a route is created for each day. For example, if you enter the 2nd of February as the start date and enter the 5th of February as the end date, routes are created for the 2nd, 3rd, 4th, and 5th of February.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SLROUTENP",
            "required": false,
            "persistent": false,
            "title": "Street Level Routes",
            "remarks": "Specify the Street Level Route to delete.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SLROUTEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCREW",
            "target": "AMCREW",
            "remarks": "Get Crew for SLROUTE",
            "whereClause": "orgid=:orgid and amcrew=:amcrew",
            "cardinality": null
        },
        {
            "name": "LABOR",
            "target": "LABOR",
            "remarks": "Get Crew for SLROUTE",
            "whereClause": "orgid=:orgid and laborcode=:laborcode",
            "cardinality": null
        },
        {
            "name": "STARTLOCATION",
            "target": "LOCATIONS",
            "remarks": "Get Start location for SLROUTE",
            "whereClause": "location = :startlocation and siteid = :startlocsiteid",
            "cardinality": null
        },
        {
            "name": "ENDLOCATION",
            "target": "LOCATIONS",
            "remarks": "Get end location for SLROUTE",
            "whereClause": "location = :endlocation and siteid = :endlocsiteid",
            "cardinality": null
        },
        {
            "name": "SLRTRAVELTIME",
            "target": "SLRTRAVELTIME",
            "remarks": "Get SLRTRAVELTIMEs for SLROUTE",
            "whereClause": "slrouteid=:slrouteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}