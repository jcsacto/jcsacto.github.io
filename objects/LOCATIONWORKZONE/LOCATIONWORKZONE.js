mos = {
    "objectName": "LOCATIONWORKZONE",
    "className": "com.ibm.tivoli.maximo.workzone.LocationWorkZoneSet",
    "description": "Locations that are part of a work zone",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LOCATIONWORKZONEID",
    "primaryKeyColumns": [
        "TYPE",
        "ORGID",
        "LOCATION",
        "SITEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCATIONWORKZONE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LOCATIONWORKZONE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCATIONWORKZONE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "WORKZONE",
            "targetObject": "LOCATIONWORKZONE",
            "parentKeys": "WORKZONE, ORGID",
            "targetKeys": "WORKZONE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location Work Zone",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LOCATION",
            "required": true,
            "persistent": true,
            "title": "Location",
            "remarks": "The location that belongs to a workzone",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "WORKZONE",
            "required": true,
            "persistent": true,
            "title": "Work Zone",
            "remarks": "Identifies the work zone that is associated with the location. You can choose from work zones that are defined in the Work Zones  application. You can define more than one work zone for a location, but you cannot define the same work zone multiple times for a single location.",
            "sameAsAttribute": "WORKZONE",
            "sameAsObject": "WORKZONE"
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Work Zone Type",
            "remarks": "The type of the work zone",
            "sameAsAttribute": "TYPE",
            "sameAsObject": "WORKZONE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The organization the workzone is a part of.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "The site the location belongs to.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "LOCATIONWORKZONEID",
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
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship from locationworkzone to location",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "WORKZONE",
            "target": "WORKZONE",
            "remarks": "Relationship from locationworkzone to workzone",
            "whereClause": "workzone=:workzone and type=:type and orgid=:orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "LOCATIONWORKZONE",
            "source": "LOCATIONS",
            "remarks": "Relationship from locations to locationworkzones",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LOCATIONWORKZONE",
            "source": "WORKZONE",
            "remarks": "Relationship from locationworkzone to workzone",
            "whereClause": "workzone=:workzone and type=:type and orgid=:orgid",
            "cardinality": null
        }
    ]
}