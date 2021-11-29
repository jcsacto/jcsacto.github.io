mos = {
    "objectName": "SLRTRAVELTIME",
    "className": "com.ibm.tivoli.maximo.slroute.SLRTravelTimeSet",
    "description": "Street Level Route Travel Time Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SLRTRAVELTIMEID",
    "primaryKeyColumns": [
        "SLRTRAVELTIMEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSIGNMENT",
            "targetObject": "SLRTRAVELTIME",
            "parentKeys": "ASSIGNMENTID",
            "targetKeys": "FROMASSIGNID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "From Assignment",
            "longDescription": null
        },
        {
            "objectName": "ASSIGNMENT",
            "targetObject": "SLRTRAVELTIME",
            "parentKeys": "ASSIGNMENTID",
            "targetKeys": "TOASSIGNID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "To Assignment",
            "longDescription": null
        },
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
    "columns": [
        {
            "attributeName": "SLROUTEID",
            "required": true,
            "persistent": true,
            "title": "Primary key for SLR records",
            "remarks": "Primary key for SLR records",
            "sameAsAttribute": "SLROUTEID",
            "sameAsObject": "SLROUTE"
        },
        {
            "attributeName": "FROMLOCATIONSID",
            "required": false,
            "persistent": true,
            "title": "From Location of SLR",
            "remarks": "Specify the location where the labor, or the crew, or both, starts the route.",
            "sameAsAttribute": "LOCATIONSID",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "TOLOCATIONSID",
            "required": false,
            "persistent": true,
            "title": "To Location of SLR",
            "remarks": "Specify the location where the labor, or the crew, or both, starts the route.",
            "sameAsAttribute": "LOCATIONSID",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "FROMASSIGNID",
            "required": false,
            "persistent": true,
            "title": "Starting Assignment",
            "remarks": "Starting Assignment",
            "sameAsAttribute": "ASSIGNMENTID",
            "sameAsObject": "ASSIGNMENT"
        },
        {
            "attributeName": "TOASSIGNID",
            "required": false,
            "persistent": true,
            "title": "Ending Assignment",
            "remarks": "Ending Assignment",
            "sameAsAttribute": "ASSIGNMENTID",
            "sameAsObject": "ASSIGNMENT"
        },
        {
            "attributeName": "TRAVELTIME",
            "required": false,
            "persistent": true,
            "title": "Calculated Travel Time",
            "remarks": "The approximate travel time between this assignment and the next assignment on the route. If you are running an optimization scenario, this value might change once the scenario is published, due to changes in the route.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SLRTRAVELTIMEID",
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
            "name": "FROMASSIGNMENT",
            "target": "ASSIGNMENT",
            "remarks": "Get the final assignment of a SLRTRAVELTIMEs",
            "whereClause": "assignmentid=:fromassignid",
            "cardinality": null
        },
        {
            "name": "TOASSIGNMENT",
            "target": "ASSIGNMENT",
            "remarks": "Get the final assignment of a SLRTRAVELTIMEs",
            "whereClause": "assignmentid=:toassignid",
            "cardinality": null
        },
        {
            "name": "TOLOCATION",
            "target": "LOCATIONS",
            "remarks": "Get Start location for SLRTRavelTime",
            "whereClause": "locationsid=:tolocationsid",
            "cardinality": null
        },
        {
            "name": "FROMLOCATION",
            "target": "LOCATIONS",
            "remarks": "Get Start location for SLRTRavelTime",
            "whereClause": "locationsid=:fromlocationsid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "TRAVELTIMEFROMME",
            "source": "ASSIGNMENT",
            "remarks": "Get the travel time where this assignment is the initial location",
            "whereClause": "fromassignid=:assignmentid",
            "cardinality": null
        },
        {
            "name": "TRAVELTIMETOME",
            "source": "ASSIGNMENT",
            "remarks": "Get the travel time where this assignment is the initial location",
            "whereClause": "toassignid=:assignmentid",
            "cardinality": null
        },
        {
            "name": "SLRTRAVELTIME",
            "source": "SLROUTE",
            "remarks": "Get SLRTRAVELTIMEs for SLROUTE",
            "whereClause": "slrouteid=:slrouteid",
            "cardinality": null
        }
    ]
}