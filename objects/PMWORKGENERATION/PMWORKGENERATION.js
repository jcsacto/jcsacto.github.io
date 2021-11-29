mos = {
    "objectName": "PMWORKGENERATION",
    "className": "psdi.app.pm.virtual.PmWorkGenerationSet",
    "description": "Parameters for Pm's work order generation",
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
            "attributeName": "LEADTIME",
            "required": true,
            "persistent": false,
            "title": "Generate WOs Due Today Plus This Number of Days",
            "remarks": "The number of days until which the work orders should be generated.",
            "sameAsAttribute": "LEADTIME",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "USEFREQUENCY",
            "required": true,
            "persistent": false,
            "title": "Use Frequency Criteria",
            "remarks": "Specifies whether Frequency criteria should be used while generating the work orders. If this box is selected (the default), Maximo evaluates the frequency criteria for the selected set of records to determine which PMs are due to generate work orders. If a PM is part of a hierarchy, it may trigger work order generation from the entire PM hierarchy. Clear this check box to generate work orders for the selected set's top-level PMs regardless of their due dates. If a top-level PM is part of a hierarchy, it might trigger work order generation from the entire hierarchy.",
            "sameAsAttribute": "USEFREQUENCY",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "ASYNC",
            "required": true,
            "persistent": false,
            "title": "Run Work Order Generation in the Background",
            "remarks": "Indicate if generating workorders from pms process is to be asynchronous.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOEMAILADDR",
            "required": false,
            "persistent": false,
            "title": "Notification E-mail for Work Order Generation",
            "remarks": "The email address of the person who receives the workorder generation notice.",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "REPFACSITEID",
            "required": false,
            "persistent": false,
            "title": "Repair Facility Site",
            "remarks": "The site for the repair facility.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "REPAIRFACILITY",
            "required": false,
            "persistent": false,
            "title": "Repair Facility",
            "remarks": "Specifies the repair facility location. A repair facility can take ownership of work orders from multiple sites in the same organization. User security can be configured to give permission to view work orders in multiple sites if the work orders are owned by a single repair facility.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "USEASSETDEFREPFAC",
            "required": true,
            "persistent": false,
            "title": "Use Asset's Default Repair Facility",
            "remarks": "Specifies whether the default repair facility of the asset is specified on generated work orders for the asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the PMWORKGENERATION to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a Location or Asset field.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "REPAIRFACILITY",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find all location records for a PMWorkGeneration record. (location=:repairfacility and siteid=:repfacsiteid). The resulting set will contain zero or more objects.",
            "whereClause": "location=:repairfacility and siteid=:repfacsiteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PMWORKGENERATION",
            "source": "PM",
            "remarks": "Relationship to the PM's non-persistent PmWorkGeneration records. (PMWORKGENERATION is non-persistent object, no where clause). The resulting set will contain zero objects. This relationship is used by the \"Generate WorkOrder\" action page to generate the workorders from a given PM.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}