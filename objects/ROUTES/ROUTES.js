mos = {
    "objectName": "ROUTES",
    "className": "psdi.app.route.RouteSet",
    "description": "Identifies a route of asset or locations.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "ROUTESID",
    "primaryKeyColumns": [
        "SITEID",
        "ROUTE"
    ],
    "logicalRelationships": [
        {
            "objectName": "ROUTES",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "MOVETOSITE, ROUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "REPLACEMENTSITE, ROUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "SITEID, ROUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Applied Route",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "WORKSITEID, ROUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "PM",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "SITEID, ROUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Routes for PM",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "PM",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "STORELOCSITE, ROUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "PMFORECASTJP",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "SITEID, ROUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route forecasted by PM",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "ASSETLOCSITEID, ROUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "SITEID, ROUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Stops of a Route.",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "SKDPMFORECASTJP",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "SITEID, ROUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route forecasted by schedule.",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "REPFACSITEID, ROUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "SITEID, ROUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route on an Activity",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "REPFACSITEID, ROUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "SITEID, ROUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route on a Change",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "WOGEN",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "SITEID, ROUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route on work order that would be generated by a PM.",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "REPFACSITEID, ROUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "SITEID, ROUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route on a Release",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "REPFACSITEID, ROUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "SITEID, ROUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route applied to a Work Order",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "ROUTES",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ROUTES",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ROUTES",
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
            "attributeName": "ROUTE",
            "required": true,
            "persistent": true,
            "title": "Route",
            "remarks": "Identifier of the route. This field must be unique.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Name or description of the route.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Description of Route",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENTCHGSSTATUS",
            "required": true,
            "persistent": true,
            "title": "Route Stops Inherit Status Changes",
            "remarks": "Checkbox that determines if the status on child work orders gets updated automatically when you change the status of the parent work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROUTESID",
            "required": true,
            "persistent": true,
            "title": "ROUTESID",
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
        },
        {
            "attributeName": "ROUTESTOPSBECOME",
            "required": true,
            "persistent": true,
            "title": "When this Route is applied to a Work Order, the Route Stops will become",
            "remarks": "Identifies what Route Stops become when Routes are applied to Work Orders - Child Work Orders, Work Order Tasks or Entries in the Multi Asset, Location & CI table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PATHASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Identifies the starting asset for the linear asset path selector.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ALLASSETS",
            "target": "ASSET",
            "remarks": null,
            "whereClause": "siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLASSETSNOSITES",
            "target": "ASSET",
            "remarks": "Select all assets from all sites",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Route's DocLinks records, used to find documents for a given Route. (doclinks.keytable = 'ROTUES' and doclinks.keycolumn = 'ROUTE' and routes.route= doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "ownertable = 'ROUTES' and ownerid = :routesid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the ROUTES to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLLOCATIONS",
            "target": "LOCATIONS",
            "remarks": null,
            "whereClause": "siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLLOCATIONSNOSITES",
            "target": "LOCATIONS",
            "remarks": "Select all locations from all sites",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for routes. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:routesid and ldownertable = 'ROUTES'",
            "cardinality": null
        },
        {
            "name": "PM",
            "target": "PM",
            "remarks": "Relationship to the Route's PM records, used to find all the PM records for a given Route. (pm.route=routes.route). The resulting set will contain zero or more records.",
            "whereClause": "route=:route and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROUTE_STOP",
            "target": "ROUTE_STOP",
            "remarks": "Relationship to the Route's Route_Stop records, used to find all the route_stop records for a given Route. (route_stop.route=routes.route). The resulting set will contain zero or more records.",
            "whereClause": "route=:route and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ROUTES",
            "source": "PM",
            "remarks": "Relationship to the PM's Routes records, used to find the Route records for a given PM. (routes.route = pm.route). The resulting set will contain zero or one record.",
            "whereClause": "route = :route and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROUTES",
            "source": "ROUTE_STOP",
            "remarks": "Relationship to the RouteStop's Route records, used to find route records for a given RouteStop. (routes.route=route_stop.route). The resulting set will contain zero or one record.",
            "whereClause": "route=:route and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}