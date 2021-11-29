mos = {
    "objectName": "REPFACAUTH",
    "className": "psdi.app.signature.RepFacAuthSet",
    "description": "Authorized repair facilities for a security group.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPFACAUTHID",
    "primaryKeyColumns": [
        "GROUPNAME",
        "SITEID",
        "REPAIRFACILITY"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LOCATIONS",
            "targetObject": "REPFACAUTH",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, REPAIRFACILITY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "REPFACAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "REPFACAUTH",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "REPFACAUTH",
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
            "attributeName": "GROUPNAME",
            "required": true,
            "persistent": true,
            "title": "Group",
            "remarks": "The name of the security group.",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "REPAIRFACILITY",
            "required": true,
            "persistent": true,
            "title": "Repair Facility",
            "remarks": "Specifies the repair facility location. A repair facility can take ownership of work orders from multiple sites in the same organization. User security can be configured to give permission to view work orders in multiple sites if the work orders are owned by a single repair facility.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "REPFACAUTHID",
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
            "name": "REPAIRFACILITY",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find all location records for a REPFACAUTH record. (location = :REPAIRFACILITY and siteid=:SITEID). The resulting set will contain zero or more objects.",
            "whereClause": "location = :REPAIRFACILITY and siteid=:SITEID",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPFACAUTH",
            "source": "MAXGROUP",
            "remarks": "Relationship from MaxGroup to RepFacAuth",
            "whereClause": "groupname = :groupname",
            "cardinality": null
        }
    ]
}