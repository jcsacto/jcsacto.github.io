mos = {
    "objectName": "ASSIGNLOC",
    "className": "psdi.app.workorder.virtual.AssignLocSet",
    "description": "Non-Persistent table to dispatch/plan location",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ASSIGNED",
            "required": true,
            "persistent": false,
            "title": "Include Fully Assigned",
            "remarks": "Select this check box to include location, even if they are fully allocated to other assignments during the specified date range.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FROMDATE",
            "required": true,
            "persistent": false,
            "title": "From",
            "remarks": "Date range starting from.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SHIFTNUM",
            "required": false,
            "persistent": false,
            "title": "Shift",
            "remarks": "Shift for this date range.",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site identifier.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "TODATE",
            "required": true,
            "persistent": false,
            "title": "To",
            "remarks": "Date range ending on.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the LOCATIONS table, used to find repair facility locations. This resulting set will contain one object.",
            "whereClause": "isrepairfacility=:yes",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "ASSIGNLOC",
            "source": "ASSIGNREPLOC",
            "remarks": "Relationship to the nonpersistent parameter set for dispatch location.",
            "whereClause": "",
            "cardinality": null
        }
    ]
}