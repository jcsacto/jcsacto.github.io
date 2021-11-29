mos = {
    "objectName": "GENERATEWO",
    "className": "psdi.app.measurement.virtual.GenerateWOSet",
    "description": "The table for \"Generate Work Order\" dialog page",
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
            "attributeName": "EFFECTIVEDATE",
            "required": false,
            "persistent": false,
            "title": "Effective Date",
            "remarks": "Effective date of the work order to be generated",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Remark for the work order generation action",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEACTIONLIMIT",
            "required": true,
            "persistent": false,
            "title": "Use Action Limits as Work Order Generation Criteria",
            "remarks": "Use action limits as the work order generation criteria?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMNUM",
            "required": false,
            "persistent": false,
            "title": "PM",
            "remarks": "pmnum to be used to generate a work order for the owning MeasurePoint.",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "JPNUM",
            "required": false,
            "persistent": false,
            "title": "Job Plan",
            "remarks": "job plan to be used to generate a work order for the owning MeasurePoint",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "site identifier for this GenerateWO",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "organization identifier for this GenerateWO",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "assetnum for this GenerateWO",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "location for this GenerateWO",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
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
            "remarks": "Relationship from the GENERATEWO to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a Location or Asset field.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "REPAIRFACILITY",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find all location records for a GenerateWO record. (location=:repairfacility and siteid=:repfacsiteid). The resulting set will contain zero or more objects.",
            "whereClause": "location=:repairfacility and siteid=:repfacsiteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "GENERATEWO",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the GenerateWO table, used to find the generate work order object for a given measure point. (no where clause). The resulting set will contain one object. Note: GenerateWO is a virtual table.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}