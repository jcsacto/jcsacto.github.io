mos = {
    "objectName": "LOCLEADTIME",
    "className": "psdi.app.inventory.LocLeadTimeSet",
    "description": "The location Lead Time table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LOCLEADTIMEID",
    "primaryKeyColumns": [
        "SITEID",
        "LOCATION"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCLEADTIME",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LOCLEADTIME",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCLEADTIME",
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
            "title": "Storeroom",
            "remarks": "Item Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "NEWPERCENT",
            "required": true,
            "persistent": true,
            "title": "New Percent",
            "remarks": "Percentage of new lead time for calculation",
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
            "attributeName": "LOCLEADTIMEID",
            "required": true,
            "persistent": true,
            "title": "LOCLEADTIMEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
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
            "name": "LOCLEADTIME",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocLeadTime table, used to find the lead time percentage for a given storeroom location. (locations.location=locleadtime.location). The resulting set will contain zero or one object.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCLEADTIME",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the Locleadtime table, used to find the destination storeroom's new lead time percentage. (locleadtime.location = matrectrans.tostoreloc). The resulting set will contain zero or one object.",
            "whereClause": "location=:tostoreloc and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}