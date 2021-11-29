mos = {
    "objectName": "ROUTE_STOP",
    "className": "psdi.app.route.RouteStopSet",
    "description": "A route stop identifying an asset or location.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ROUTE_STOPID",
    "primaryKeyColumns": [
        "SITEID",
        "ROUTE",
        "ROUTESTOPID"
    ],
    "logicalRelationships": [
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "MOVETOSITE, ROUTE, ROUTESTOP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "REPLACEMENTSITE, ROUTE, ROUTESTOP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "SITEID, ROUTE, ROUTESTOP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Link to Configuration Item",
            "longDescription": null
        },
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "WORKSITEID, ROUTE, ROUTESTOP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "PMFORECASTJP",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "SITEID, ROUTE, ROUTESTOPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM Forecast Jbo Plan Route Stop",
            "longDescription": null
        },
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "SKDPMFORECASTJP",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "SITEID, ROUTE, ROUTESTOPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route Stop",
            "longDescription": null
        },
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "REPFACSITEID, ROUTE, ROUTESTOPID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "SITEID, ROUTE, ROUTESTOPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route Stop this Activity was created.",
            "longDescription": null
        },
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "REPFACSITEID, ROUTE, ROUTESTOPID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "SITEID, ROUTE, ROUTESTOPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route Stop this Change was created for.",
            "longDescription": null
        },
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "REPFACSITEID, ROUTE, ROUTESTOPID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "SITEID, ROUTE, ROUTESTOPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route Stop used to generate Release",
            "longDescription": null
        },
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "REPFACSITEID, ROUTE, ROUTESTOPID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "ROUTE_STOP",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, ROUTE, ROUTESTOPID",
            "targetKeys": "SITEID, ROUTE, ROUTESTOPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Route Stop that was used to create this Work Order",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ASSETLOCSITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Stop",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 136",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETLOCSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 176",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location Stop",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, ASSETLOCSITEID, ASSETLOCORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 213",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, ASSETLOCSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 214",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ASSETLOCORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 215",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 216",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, ASSETLOCSITEID, ASSETLOCORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 217",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, ASSETLOCSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 218",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ASSETLOCORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 219",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 220",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, ASSETLOCSITEID, ASSETLOCORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 221",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, ASSETLOCSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 222",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ASSETLOCORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 223",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 224",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, ASSETLOCSITEID, ASSETLOCORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 225",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, ASSETLOCSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 226",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ASSETLOCORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 227",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 228",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, ASSETLOCSITEID, ASSETLOCORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 229",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, ASSETLOCSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 230",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ASSETLOCORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 231",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 232",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "BASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "ORGID",
            "targetKeys": "ASSETLOCORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset or Location''s Organization",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
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
            "objectName": "SITE",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "SITEID",
            "targetKeys": "ASSETLOCSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset or Location''s Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ROUTE_STOP",
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
            "remarks": "Route Identifier",
            "sameAsAttribute": "ROUTE",
            "sameAsObject": "ROUTES"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifier of the asset at this route stop. You can specify an asset or a location identifier, but not both, for the stop.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Location identifier of this route stop. You can specify either a location or an asset identifier for the stop, but not both.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "JPNUM",
            "required": false,
            "persistent": true,
            "title": "Job Plan",
            "remarks": "Specify the job plan to be used on the work order generated for this route stop. If this route is used on work orders generated from PMs, the job plan is copied from this field if it is filled in; otherwise it is copied from the PM.",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "STOPSEQUENCE",
            "required": false,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Sequence number of this route stop. This field can be a positive integer or null.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROUTESTOPID",
            "required": true,
            "persistent": true,
            "title": "Stop Added to Route",
            "remarks": "Identifies a stop record added to a route.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RTS1",
            "required": false,
            "persistent": true,
            "title": "Rts1",
            "remarks": "Extra field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RTS2",
            "required": false,
            "persistent": true,
            "title": "Rts2",
            "remarks": "Extra field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RTS3",
            "required": false,
            "persistent": true,
            "title": "Rts3",
            "remarks": "Extra field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RTS4",
            "required": false,
            "persistent": true,
            "title": "Rts4",
            "remarks": "Extra field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RTS5",
            "required": false,
            "persistent": true,
            "title": "Rts5",
            "remarks": "Extra field",
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
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Name or description of the route stop.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long Description",
            "remarks": "Long Description for Asset Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Asset/Location Description",
            "remarks": "Description of Asset or Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROUTE_STOPID",
            "required": true,
            "persistent": true,
            "title": "ROUTE_STOPID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JPASSETS",
            "required": true,
            "persistent": false,
            "title": "JP Assets",
            "remarks": "Non persistent field for JopPlan lookup.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JPCLASS",
            "required": false,
            "persistent": false,
            "title": "WO Class",
            "remarks": "non-persistent attribute used in the job plan lookup to filter for a specific class of job plans.  The Class field will default to the class of the current record and the initial lookup will show job plans associated with that class.",
            "sameAsAttribute": "WOCLASS",
            "sameAsObject": "WORKTYPE"
        },
        {
            "attributeName": "JPINCLUDECLASSLESS",
            "required": true,
            "persistent": false,
            "title": "Show Job Plans with No Classes Defined",
            "remarks": "non-persistent attribute used by the job plan lookup to determine whether or not job plans without a WO class should be available.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETLOCORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "The Organization to which the asset or locations belongs to.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ASSETLOCSITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "The Site to which the asset or location belongs to.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "STARTZOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTYOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "End Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where this route stop ends.  This can be manually entered or calculated by entering an end reference point and end offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Offset",
            "remarks": "Distance used in conjunction with the end reference point to determine where the route stop ends.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDZOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "Start Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where this route stop is initially encountered.  This can be manually entered or calculated by entering a start reference point and start offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Offset",
            "remarks": "Distance used in conjunction with the start reference point to determine where the route stop begins.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDYOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Start Y Offset Referent",
            "remarks": "Reference point from which the Y offset is measured",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "End Y Offset Referent",
            "remarks": "Reference point from which the Y offset is measured",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTZOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Start Z Offset Referent",
            "remarks": "Reference point from which the start Z-Offset (distance above or below the linear asset) is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDZOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "End Z Offset Referent",
            "remarks": "Point from which the Z-Offset is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Asset Feature ID",
            "remarks": "Asset Feature that is the focus of work (e.g. Guardrail 127) as opposed to the start/end asset features that identify where the work takes place",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "End Asset Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the end offset to determine the end measure for this linear segment.",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "STARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Start Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the start offset, to determine the start measure for this linear segment.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "STARTFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "Unique label used to differentiate features.",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "Unique label used to differentiate features.",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "FEATURE",
            "required": false,
            "persistent": false,
            "title": "Feature",
            "remarks": "An instance of a generic feature (Features.Feature) within a given location.  For example, if 'mile post' is a generic feature, the mile post located at mile 1 of location I-95 is the instance of that generic feature (LocationFeature.Feature).",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "FEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Feature Label",
            "remarks": "Unique label used to differentiate features.",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "BASEMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Base Measure",
            "remarks": "Usually, this is the same as the unit of measure  for the asset. If they differ, Maximo will display measures in the unit of measure but will store measures in both the unit of measure and base unit of measure.  A conversion between the unit of measure and base unit of measure, entered via the Units of Measure and Conversion Action in Assets, must exist if the base unit of measure differs from the unit of measure.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ENDBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "End Base Measure",
            "remarks": "An absolute measure that is calculated by converting from the end measure using a defined conversion method.  Conversion methods are defined in the Assets application using the Add/Modify Conversions action.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of End Measure",
            "remarks": "End Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ENDOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of End Offset",
            "remarks": "Unit of measure for the offset (before or after) from the end reference point of the asset on this route stop.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "STARTBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "Start Base Measure",
            "remarks": "An absolute measure that is calculated by converting from the end measure using a defined conversion method.  Conversion methods are defined in the Assets application using the Add/Modify Conversions action.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Start Measure",
            "remarks": "Start Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "STARTOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Start Offset",
            "remarks": "Unit of measure for the offset (before or after) from the start reference point of the asset on this route stop.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "PLUSCJPREVNUM_NP",
            "required": false,
            "persistent": false,
            "title": "Revision",
            "remarks": "Job Plan Revision Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to location from route_stop will return 0 or 1 object.",
            "whereClause": "assetnum=:assetnum and siteid=:assetlocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this Route Stop's linear Asset. (route_stop.assetnum=asset.assetnum and route_stop.assetlocsiteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:assetlocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the end asset feature on the route stop.",
            "whereClause": "assetfeatureid = :endassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the asset features table, used to find the asset feature on the route stop.",
            "whereClause": "assetfeatureid = :assetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the start asset feature on the route stop.",
            "whereClause": "assetfeatureid = :startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the ROUTE_STOP to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDFEATURE",
            "target": "FEATURES",
            "remarks": "Relationship to the features table, used to find the end feature on the route stop. The resulting set will contain zero or one object.",
            "whereClause": "feature=:endfeature",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTFEATURE",
            "target": "FEATURES",
            "remarks": "Relationship to the features table, used to find the start feature on the route stop. The resulting set will contain zero or one object.",
            "whereClause": "feature=:startfeature",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLAN",
            "target": "JOBPLAN",
            "remarks": "Relationship to the RouteStop's Job Plan records, used to find Job Plan records for a given RouteStop. (jobplan.jpnum=route_stop.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to asset from route_stop will return 0 or 1 object.",
            "whereClause": "location=:location and siteid=:assetlocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROUTES",
            "target": "ROUTES",
            "remarks": "Relationship to the RouteStop's Route records, used to find route records for a given RouteStop. (routes.route=route_stop.route). The resulting set will contain zero or one record.",
            "whereClause": "route=:route and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the ROUTE_STOP to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PMROUTE_STOP",
            "source": "ASSET",
            "remarks": "Relationship to the route_stop records, used to find the route_stop records via PM for a given asset.",
            "whereClause": "route in (select route from pm) and (assetnum=:assetnum and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROUTE_STOP",
            "source": "ASSET",
            "remarks": "Relationship to the Route_Stop table, used to find all route stops for a given asset. (route_stop.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECALRSTOP",
            "source": "ASSETFEATURE",
            "remarks": "Linear Recalibration for Route_Stop",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LNRROUTE_STOP",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the route_stop table, used to find the assetfeature records for the given AssetFeatureId",
            "whereClause": "startassetfeatureid=:assetfeatureid or endassetfeatureid=:assetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROUTE_STOP",
            "source": "DRILLDOWN",
            "remarks": "Relationship to the route_stop table, used to find the route records for a given location or asset shown on DrilDown. (((route_stop.location = drilldown.locinhierarchy and drilldown.locison=:yes) or (route_stop.assetnum=drilldown.assetvalue and drilldown.locison=:no))",
            "whereClause": "((location = :locvalue and :locison=:yes) or (assetnum=:assetvalue and :locison=:no)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMROUTE_STOP",
            "source": "LOCATIONS",
            "remarks": "Relationship to the route_stop records, used to find the route_stop records via PM for a given location.",
            "whereClause": "route in (select route from pm) and (location = :location and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROUTE_STOP",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Route_stop table, used to find the route stops identifying the location. (locations.location= route_stop.location). The resulting set will contain zero or more objects. A location can be part of multiple routes, and a location can appear multiple times within the same route.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROUTE_STOP",
            "source": "PMFORECASTJP",
            "remarks": "Relationship to the Route_Stop records, used to find route_stop record for a given route and routestopid.",
            "whereClause": "route=:route and routestopid=:routestopid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ROUTE_STOP",
            "source": "ROUTES",
            "remarks": "Relationship to the Route's Route_Stop records, used to find all the route_stop records for a given Route. (route_stop.route=routes.route). The resulting set will contain zero or more records.",
            "whereClause": "route=:route and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRS_BYASSET",
            "source": "VIEWWOPMS",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRS_BYASSETANDANCESTORS",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the route_stop table, used to find the route_stop records involving the current asset or its ancestors.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=route_stop.siteid and assetancestor.ancestor=route_stop.assetnum and assetancestor.siteid=:siteid and assetancestor.assetnum=:assetnum )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRS_BYASSETANDCHILDREN",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the route_stop table, used to find the route_stop records involving the current asset or its children.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=route_stop.siteid and assetancestor.assetnum=route_stop.assetnum and assetancestor.siteid=:siteid and assetancestor.ancestor=:assetnum )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRS_BYASSETANDFAMILY",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the route_stop table, used to find the route_stop records involving the current asset, its children and its ancestors.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=route_stop.siteid and assetancestor.siteid=:siteid and assetancestor.ancestor=:assetnum and assetancestor.assetnum=route_stop.assetnum union select 1 from assetancestor where assetancestor.siteid=route_stop.siteid and assetancestor.siteid=:siteid and assetancestor.assetnum=:assetnum and assetancestor.ancestor=route_stop.assetnum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRS_BYLOC",
            "source": "VIEWWOPMS",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRS_BYLOCANDANCESTORS",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the route_stop table, used to find the route_stop records involving the current location or its ancestors.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=route_stop.siteid and locancestor.ancestor=route_stop.location and locancestor.siteid=:siteid and locancestor.location=:location )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRS_BYLOCANDCHILDREN",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the route_stop table, used to find the route_stop records involving the current location or its children.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=route_stop.siteid and locancestor.location=route_stop.location and locancestor.siteid=:siteid and locancestor.ancestor=:location )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRS_BYLOCANDFAMILY",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the route_stop table, used to find the route_stop records involving the current location, its children and its ancestors.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=route_stop.siteid and locancestor.siteid=:siteid and locancestor.ancestor=:location and locancestor.location=route_stop.location union select 1 from locancestor where locancestor.siteid=route_stop.siteid and locancestor.siteid=:siteid and locancestor.location=:location and locancestor.ancestor=route_stop.location)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRSCHILD_BYASSET",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the route_stop records, used to find the route_stops records for a given asset and its children.",
            "whereClause": "(assetnum=:assetnum or assetnum in (select assetnum from assetancestor where ancestor =:assetnum)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRSCHILD_BYLOC",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the route_stop records, used to find the route_stops records for a given location and its children.",
            "whereClause": "(location=:location or location in (select location from locancestor where ancestor =:location )) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}