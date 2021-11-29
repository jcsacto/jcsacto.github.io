mos = {
    "objectName": "LOCATIONMNTSKD",
    "className": "psdi.app.location.LocationMntSKDSet",
    "description": "Location Maintenance Schedule",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LOCATIONMNTSKDID",
    "primaryKeyColumns": [
        "LOCATION",
        "SITEID",
        "STARTDATETIME",
        "OPHRS"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCATIONMNTSKD",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LOCATIONMNTSKD",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONMNTSKD",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Entered By",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCATIONMNTSKD",
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
            "attributeName": "LOCATION",
            "required": true,
            "persistent": true,
            "title": "Location",
            "remarks": "Location  number",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site of the Location",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "STARTDATETIME",
            "required": true,
            "persistent": true,
            "title": "Schedule Start",
            "remarks": "The date and time that the maintenance  schedule for the location starts.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATETIME",
            "required": false,
            "persistent": true,
            "title": "Schedule End",
            "remarks": "The date and time that the maintenance  schedule for the location ends",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPHRS",
            "required": true,
            "persistent": true,
            "title": "Maintenance Hours",
            "remarks": "The duration of the maintenance schedule.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Comments about the maintenance schedule.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "Name of user who entered the record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "The date the location maintenance schedule was entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
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
            "attributeName": "SKDTYPE",
            "required": true,
            "persistent": true,
            "title": "Schedule Type",
            "remarks": "Type of schedule. For example, choose daily, weekly, monthly, or custom.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATIONMNTSKDID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "LOCATIONMNTSKD",
            "source": "LOCATIONS",
            "remarks": "Relationship to locationmntskd table, used to find all the location maintenance schedule dates for a location.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": null
        }
    ]
}