mos = {
    "objectName": "PM",
    "className": "psdi.app.pm.PMSet",
    "description": "The PM Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "PMUID",
    "primaryKeyColumns": [
        "SITEID",
        "PMNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "PM",
            "targetObject": "CHARPOINTACTION",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "LNRRECALIB",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "LNRRECALIBNONAF",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "MEASUREPOINT",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, LLPMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM activated by lower limit measurement.",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "MEASUREPOINT",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, ULPMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM activated by upper limit measurement.",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PLUSCPMEXTDATE",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, MASTERPMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PLUSCPMEXTDATE",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PM",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, MASTERPM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Master PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PM",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PARENT",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Parent PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PM",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "STORELOCSITE, MASTERPM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PM",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "STORELOCSITE, PARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PMANCESTOR",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, ANCESTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "List of the PM and its descendants.",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PMANCESTOR",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "List of the PM and its ancestors.",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PMFORECAST",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work forecasted by PMs",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PMFORECASTJP",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plans forecasted by PMs",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PMFORECASTJP",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, ROOTANCESTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PMMETER",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter readings for the PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PMSEASONS",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Season defined for a PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PMSEQUENCE",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plans used by PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "SKDACTIVITYQBE",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Activity QBE PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "SKDPMFORECAST",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "SKDPMFORECASTJP",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "SKDPMFORECASTJP",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, ROOTANCESTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM''s top-level parent",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "REPFACSITEID, PMNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "PM for work order",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "REPFACSITEID, PMNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 26",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM for an Activity",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "REPFACSITEID, PMNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 28",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM for a Change",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "WOGEN",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM for a forecasted PM generated Work Order",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "REPFACSITEID, PMNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 31",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM for a Release",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "REPFACSITEID, PMNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 33",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM for a Work Order",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "PM",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PM",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM''s Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PM",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "STORELOCSITE, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 123",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "PM",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "PM",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "PM",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "PM",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendar used by PM",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "PM",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM''s Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 147",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 148",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, STORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Storeroom used for PM generated work orders.",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 185",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 186",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITUID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 187",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITUID, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 188",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 189",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 190",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITUID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 191",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITUID, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 192",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 193",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 194",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITUID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 195",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITUID, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 196",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 197",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 198",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITUID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 199",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITUID, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 200",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 201",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 202",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITUID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 203",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITUID, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 204",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PM",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PM",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PM",
            "parentKeys": "PERSONID",
            "targetKeys": "LEAD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person leading PM work.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PM",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner of the PM",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PM",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor for PM work.",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "PM",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group that owns PM generated work.",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "PM",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group that owns the PM",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "PM",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group assigned to the generated work.",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "PM",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PM",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, MASTERPM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Master PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PM",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PARENT",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Parent PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PM",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "STORELOCSITE, MASTERPM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PM",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "STORELOCSITE, PARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
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
            "objectName": "SITE",
            "targetObject": "PM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PM",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 183",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PMNUM",
            "required": true,
            "persistent": true,
            "title": "PM",
            "remarks": "Identifies the PM. This value must be unique for all PM records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the PM. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset on which the preventive maintenance is done.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "FIRSTDATE",
            "required": false,
            "persistent": true,
            "title": "First Start Date",
            "remarks": "First Start Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTCOMPDATE",
            "required": false,
            "persistent": true,
            "title": "Last Completion Date",
            "remarks": "Latest completion date of any work order that is generated from this PM. This field is automatically updated when a PM work order is completed or closed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTSTARTDATE",
            "required": false,
            "persistent": true,
            "title": "Last Start Date",
            "remarks": "Date on which the last work order generated from the PM was targeted to start. The frequency count between time-based PM work orders starts with either this date or the last completion date. When you do not use frequency criteria while generating work orders, the last start date is set to the system date if the PM is not due.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USETARGETDATE",
            "required": true,
            "persistent": true,
            "title": "Use Last Work Order's Start Date to Calculate Next Due Date",
            "remarks": "Select this check box if you want to use the target start date of the last PM work order to calculate the due date of the next PM work order. Clear this check box if you want to use the completion date of the last PM work order to calculate the next due date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREQUENCY",
            "required": true,
            "persistent": true,
            "title": "Frequency",
            "remarks": "Frequency in the unit of time that is specified in the Frequency Units field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMCOUNTER",
            "required": true,
            "persistent": true,
            "title": "Counter",
            "remarks": "Number of work orders generated from the PM since the First Start Date. The counter is set to zero when you insert a new PM record, and increases each time you generate a top-level work order from the PM. If you are using a job plan sequence, the job plan is selected after the counter increments.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIORITY",
            "required": false,
            "persistent": true,
            "title": "Priority",
            "remarks": "Priority of work orders generated from this PM.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKTYPE",
            "required": false,
            "persistent": true,
            "title": "Work Type",
            "remarks": "Classification or type of work order generated from this PM.",
            "sameAsAttribute": "WORKTYPE",
            "sameAsObject": "WORKTYPE"
        },
        {
            "attributeName": "JPNUM",
            "required": false,
            "persistent": true,
            "title": "Job Plan",
            "remarks": "Identifies the job plan associated with this PM.",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "JPSEQINUSE",
            "required": true,
            "persistent": true,
            "title": "Use Job Plan Sequences",
            "remarks": "Specifies whether the PM uses job plan sequences. If the check box is selected, the PM generates different work orders each time based on a job plan sequence. If the checkbox is cleared, the PM generates identical work orders every time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEXTDATE",
            "required": false,
            "persistent": true,
            "title": "Estimated Next Due Date",
            "remarks": "If you selected the Use Last Work Order's Start Information to Calculate Next Due Date check box, it is the date that is calculated by adding the frequency value to the target start date of the last work order. If you did not select that check box, it is calculated by adding the frequency value to the completion date of the last work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date PM Last Changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Person Who Entered-Modified PM",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PMEQ1",
            "required": false,
            "persistent": true,
            "title": "PMEQ1",
            "remarks": "Extra Field Copied From Asset",
            "sameAsAttribute": "EQ9",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SUPERVISOR",
            "required": false,
            "persistent": true,
            "title": "Supervisor",
            "remarks": "Person or craft responsible for implementing the work order. Maximo copies this field from either a single job plan on the PM, or from the first job plan in a job plan sequence. If you change the job plan associated with the PM, you must update this field manually.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CALENDAR",
            "required": false,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Calendar to determine shift work is to be done on.",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "CREWID",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "Work crew assigned to work orders generated from this PM. Maximo copies this field from either a single job plan on the PM, or from the first job plan in a job plan sequence. If you change the job plan associated with the PM, you must update this field manually.",
            "sameAsAttribute": "CREWID",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "DOWNTIME",
            "required": true,
            "persistent": true,
            "title": "Downtime",
            "remarks": "Does the Asset have to be down to perform work order?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMEQ2",
            "required": false,
            "persistent": true,
            "title": "PMEQ2",
            "remarks": "PM Extra Field #11",
            "sameAsAttribute": "EQ23",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PMEQ3",
            "required": false,
            "persistent": true,
            "title": "PMEQ3",
            "remarks": "PM Extra Field #12",
            "sameAsAttribute": "EQ24",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": true,
            "title": "GL Account",
            "remarks": "General ledger account to which costs on work orders generated from this PM are charged.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Location where work is done when work orders are generated from this PM.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STORELOC",
            "required": false,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "The storeroom for materials on a PM with an associated job plan. If you leave this field blank, Maximo will populate this field with your default storeroom.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "PARENT",
            "required": false,
            "persistent": true,
            "title": "Parent",
            "remarks": "PMNUM of this PMs parent.",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "HASCHILDREN",
            "required": true,
            "persistent": true,
            "title": "Has Children",
            "remarks": "Specifies whether the PM has any child PMs. If the check box is selected, the PM has child PMs associated with it. If the checkbox is cleared, the PM has no child PMs.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOSEQUENCE",
            "required": false,
            "persistent": true,
            "title": "Sequence",
            "remarks": "WO Sequence number. Copied to WorkOrder.WOSequence.",
            "sameAsAttribute": "WOSEQUENCE",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "USEFREQUENCY",
            "required": true,
            "persistent": true,
            "title": "Use this PM to Trigger PM Hierarchy",
            "remarks": "Tells the Generate WO function that the frequency for a lower level PM should be checked when determining if all of the PMs in the hierarchy should be generated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROUTE",
            "required": false,
            "persistent": true,
            "title": "Route",
            "remarks": "Identifies the route associated with the PM. A route is a list of stops that represent asset or work locations. When you generate work orders from a PM with an associated route, you create a parent work order for the asset shown in the Asset or Location field or for the GL account, and a child work order for each asset listed on the route.",
            "sameAsAttribute": "ROUTE",
            "sameAsObject": "ROUTES"
        },
        {
            "attributeName": "FREQUNIT",
            "required": true,
            "persistent": true,
            "title": "Frequency Units",
            "remarks": "Frequency Units DAYS WEEKS MONTHS or YEARS",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LEADTIME",
            "required": false,
            "persistent": true,
            "title": "Lead Time (Days)",
            "remarks": "The number of days in advance of the Next Due Date that Maximo generates work orders from this PM. The target start date for the work order will still be the Next Due Date. You must Select the Lead Time Active checkbox before you can enter or edit data in this field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTDATE",
            "required": false,
            "persistent": true,
            "title": "Extended Date",
            "remarks": "If Extended Date supplied it overrides Next Due Date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADJNEXTDUE",
            "required": true,
            "persistent": true,
            "title": "Adjust Next Due Date",
            "remarks": "Adjust the next due date after generation?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MASTERPM",
            "required": false,
            "persistent": true,
            "title": "Master PM",
            "remarks": "Identifies the master PM record associated with this PM.",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "OVERRIDEMASTERUPD",
            "required": true,
            "persistent": true,
            "title": "Override Updates from Master PM",
            "remarks": "Specifies whether changes to the Master PM will update this PM. If the checkbox is selected, changes to the Master PM will not affect this PM. If the checkbox is cleared, changes to the master PM will roll down to this PM whenever the Update Associated PMs action is performed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOSTATUS",
            "required": true,
            "persistent": true,
            "title": "Work Order Status",
            "remarks": "Identifies the initial status of generated work orders.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifie",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
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
            "attributeName": "PMACTMETER",
            "required": true,
            "persistent": true,
            "title": "Generate Work Order Based on Meter Readings (Do Not Estimate)",
            "remarks": "PM Actual Meter Reading",
            "sameAsAttribute": "USEFREQUENCY",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "PMASSETWOGEN",
            "required": true,
            "persistent": true,
            "title": "Generate Work Order When Meter Frequency is Reached",
            "remarks": "Flag that indicates to generate work orders automatically from a PM when meter frequency is reached.",
            "sameAsAttribute": "USEFREQUENCY",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for One Line Short Description Of PM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LEADTIMEACTIVE",
            "required": true,
            "persistent": false,
            "title": "Lead Time Active",
            "remarks": "Specifies whether you want to apply lead time when generating work orders from this PM. If the chechbox is selected (the default), Maximo generates work orders a nukmber of days in advance of the Next Due Date. The number of days is defined in the Lead Time Days field. If teh checkbox is cleared, no lead time is applied to the Next Due Date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": true,
            "title": "Owner",
            "remarks": "The person who will be responsible for the work order generated from this PM.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "LEAD",
            "required": false,
            "persistent": true,
            "title": "Lead",
            "remarks": "The lead person for the work order generated from this PM.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PARENTCHGSSTATUS",
            "required": true,
            "persistent": true,
            "title": "Child Work Orders and Tasks Will Inherit Status Changes",
            "remarks": "Specifies whether the child work order should change its status when the parents status changes. If the check box is selected, the status of the child work orders will change. If the check box is cleared, the status of the child work orders will not change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of the PM.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMUID",
            "required": true,
            "persistent": true,
            "title": "PMUID",
            "remarks": "Unique id for PM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUNDAY",
            "required": true,
            "persistent": true,
            "title": "Sunday",
            "remarks": "Flag to indicate if this day is active for the PM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MONDAY",
            "required": true,
            "persistent": true,
            "title": "Monday",
            "remarks": "Flag to indicate if this day is active for the PM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TUESDAY",
            "required": true,
            "persistent": true,
            "title": "Tuesday",
            "remarks": "Flag to indicate if this day is active for the PM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WEDNESDAY",
            "required": true,
            "persistent": true,
            "title": "Wednesday",
            "remarks": "Flag to indicate if this day is active for the PM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "THURSDAY",
            "required": true,
            "persistent": true,
            "title": "Thursday",
            "remarks": "Flag to indicate if this day is active for the PM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FRIDAY",
            "required": true,
            "persistent": true,
            "title": "Friday",
            "remarks": "Flag to indicate if this day is active for the PM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SATURDAY",
            "required": true,
            "persistent": true,
            "title": "Saturday",
            "remarks": "Flag to indicate if this day is active for the PM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALERTLEAD",
            "required": false,
            "persistent": true,
            "title": "Alert Lead (Days)",
            "remarks": "Acceptable period (in days), prior to the PM due date, during which the PM may be performed.",
            "sameAsAttribute": "LEADTIME",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "PERSONGROUP",
            "required": false,
            "persistent": true,
            "title": "Work Group",
            "remarks": "Identifies the Person Group for the supervisor.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "STORELOCSITE",
            "required": false,
            "persistent": true,
            "title": "Storeroom Site",
            "remarks": "Specifies the Storeroom's Site of an item",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "OWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Owner Group",
            "remarks": "The person group who will be responsible for the work order generated from this PM.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "NP_STATUSMEMO",
            "required": false,
            "persistent": false,
            "title": "Change Status Memo",
            "remarks": "Status change memo, temporary non-persistent field used by MEA",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
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
            "attributeName": "INTERRUPTIBLE",
            "required": true,
            "persistent": true,
            "title": "Interruptible",
            "remarks": "Specifies if the work order created from this PM is allowed to be stopped and restarted during resource scheduling. If the checkbox is selected, the work order can be stopped and restarted. If the checkbox is cleared, the work order cannot be interrupted for resource scheduling.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMCOUNT",
            "required": false,
            "persistent": false,
            "title": "New PM Counter",
            "remarks": "Non-Persistent PM Counter Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ERLSTWOGENDATE",
            "required": false,
            "persistent": false,
            "title": "Earliest Next Due Date",
            "remarks": "Earliest next due date for a work order generated from this PM.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "JPASSETS",
            "required": true,
            "persistent": false,
            "title": "Show Job Plans associated with current Work Assets",
            "remarks": "Non persistent field for Job Plan lookup",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSIFACE",
            "required": true,
            "persistent": false,
            "title": "Has Status Changed",
            "remarks": "Non persistent boolean field to indicate whether the status has been changed after the stateful object is fetched from the database.",
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
            "attributeName": "STARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Start Asset Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the start offset, to determine the start measure for this linear segment.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "End Asset Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the end offset, to determine the end measure for this linear segment.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "End Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where this PM segment ends.  This can be manually entered or calculated by entering an end reference point and end offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Offset",
            "remarks": "Distance used in conjunction with the end reference point to determine where the PM work location ends.  ",
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
            "remarks": "Absolute distance taken from the start of the linear asset to where the work for this PM will take place.  This can be manually entered or calculated by entering a start reference point and start offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Offset",
            "remarks": "Distance used in conjunction with the start reference point to determine where the PM work location begins.  ",
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
            "attributeName": "STARTZOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
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
            "attributeName": "STARTYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Start Y Offset Referent",
            "remarks": "The point from which the Y Offset is measured.  The user can create a domain for this purpose.  The value entered will not be used in calculations -- it is simply used to locate the feature in the field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "End Y Offset Referent",
            "remarks": "The point from which the Y Offset is measured.  The user can create a domain for this purpose.  The value entered will not be used in calculations -- it is simply used to locate the feature in the field.",
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
            "attributeName": "FEATURE",
            "required": false,
            "persistent": false,
            "title": "Feature",
            "remarks": "An object that exists on or alongside a linear asset that is not a point asset",
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
            "attributeName": "BASEMEASUREUNITUID",
            "required": false,
            "persistent": true,
            "title": "Unit of Base Measure",
            "remarks": "Base Measurement Units",
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
            "attributeName": "ENDMEASUREUNITUID",
            "required": false,
            "persistent": true,
            "title": "Unit of End Measure",
            "remarks": "End Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ENDOFFSETUNITUID",
            "required": false,
            "persistent": true,
            "title": "Unit of End Offset",
            "remarks": "End Offset Units",
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
            "attributeName": "STARTMEASUREUNITUID",
            "required": false,
            "persistent": true,
            "title": "Unit of Start Measure",
            "remarks": "Start Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "STARTOFFSETUNITUID",
            "required": false,
            "persistent": true,
            "title": "Unit of Start Offset",
            "remarks": "Start Offset Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
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
            "attributeName": "ENDMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of End Measure",
            "remarks": "End Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "STARTMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Start Measure",
            "remarks": "Start measure units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ENDOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of End Offset",
            "remarks": "Unit of measure for the offset (before or after) from the end reference point of the asset on this PM.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "STARTOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Start Offset",
            "remarks": "Unit of measure for the offset (before or after) from the start reference point of the asset on this PM.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "SCHEDEARLY",
            "required": true,
            "persistent": true,
            "title": "Schedule Early on Frequency Conflict",
            "remarks": "Check box determines how conflicts between the PM frequency and the day of the week are resolved.  If the check box is selected, then the PM work order is conservatively assigned a Target Start on a selected day of the week that is earlier or the same as the normal frequency-based schedule date.  If the check box is cleared, the PM work order will only be assigned a Target Start on a selected day of the week that is the same as or later than the normal frequency-based schedule date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGSTARTTIME",
            "required": false,
            "persistent": true,
            "title": "Target Start Time",
            "remarks": "Target time for starting the PM Work Order.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
        },
        {
            "attributeName": "ASSIGNEDOWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Assigned Owner Group",
            "remarks": "Identifies the owner group who will be responsible for the work order created with this PM. Use the Select Action menu to assign an owner group. You can enter a value either in this field or the Owner field.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "PLUSCDUEDATE",
            "required": true,
            "persistent": true,
            "title": "Due Date",
            "remarks": "Determines which PM is the one that establishes the Assets next calibration due date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCJPREVNUM_NP",
            "required": false,
            "persistent": false,
            "title": "Revision",
            "remarks": "Job Plan Revision Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLFORECAST",
            "required": true,
            "persistent": true,
            "title": "Include this PM in the Forecast",
            "remarks": "Indicates if this PM  should be included in the forecast",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LTDPMCOUNTER",
            "required": false,
            "persistent": true,
            "title": "Life To Date Counter",
            "remarks": "Number of work orders generated from the PM since the First Start Date. The counter is set to zero when you insert a new PM record, and increases each time you generate a top-level work order from the PM. If you are using a job plan sequence, the job plan is selected after the counter increments. Life to Date Counter cannot be reset by Set PM Counter.",
            "sameAsAttribute": "PMCOUNTER",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "LASTFORECASTDATE",
            "required": false,
            "persistent": false,
            "title": "Last Forecast Date",
            "remarks": "The last date to which the PM has been forecasted. If this field is blank, no PM forecast has been generated.",
            "sameAsAttribute": "FORECASTDATE",
            "sameAsObject": "PMFORECAST"
        },
        {
            "attributeName": "FORECASTEXISTS",
            "required": true,
            "persistent": false,
            "title": "Forecast Exists",
            "remarks": "Indicates if this PM has forecasted dates.  Forecasts are generated by choosing Generate Forecast from the Select Action menu or by using the PM Forecast cron task. This field is read only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFORECAST",
            "required": true,
            "persistent": true,
            "title": "Reforecast Subsequent Dates",
            "remarks": "Indicates if subsequent dates for this PM should be adjusted as a result of the New Date entered. If you select this checkbox, the forecast dates following the adjusted date will be reforecasted automatically. If you clear this checkbox, subsequent PM dates in the forecast will remain unchanged. If a forecast exists for this PM, this field is read-only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCKFORECAST",
            "required": true,
            "persistent": true,
            "title": "Forecast Dates Locked",
            "remarks": "Indicates if New Dates can be modified or added to the forecast. If the check box is selected, no New Dates can be added or modified. To modify or add New Dates, select Unlock Forecast Dates from the Select Action menu.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STCONOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Constraint Offset",
            "remarks": "The amount of time (in hours) to be subtracted from the Target Start date in order to calculate the Start No Earlier Than date of the work record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FNCONOFFSET",
            "required": false,
            "persistent": true,
            "title": "Finish Constraint Offset",
            "remarks": "The amount of time (in hours) to be added to the Target Finish date in order to calculate the Finish No Later Than date of the work record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COPYWHENINACTIVE",
            "required": true,
            "persistent": true,
            "title": "Copy When Inactive on Receipt of Transferred Asset",
            "remarks": "Should this PM be copied to the new asset that is created on receipt of a cross-site or cross-organization asset transfer even if status is INACTIVE? The system uses this flag to determine which PMs became INACTIVE when the asset was SHIPPED so that the PMs are copied to the asset created in the new site or organization when the shipment is received. This flag pertains only to PMs created from Master PMs because these are the only PMs that are moved cross-site or cross-organization with an asset when it is transferred.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWWORKGROUP",
            "required": false,
            "persistent": true,
            "title": "Crew Work Group",
            "remarks": "Identifies the resource pool to which the labor belongs.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "Identifies the crew that performed the work.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "REQASSTDWNTIME",
            "required": true,
            "persistent": true,
            "title": "Require Asset Downtime",
            "remarks": "Indicates if the asset requires downtime while work is performed.",
            "sameAsAttribute": "REQASSTDWNTIME",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "PMFPCOSTCALDATE",
            "required": false,
            "persistent": true,
            "title": "Last Calculated Date",
            "remarks": "The date when the PM forecast cost was last calculated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GRANDTOTALCOST",
            "required": false,
            "persistent": true,
            "title": "Grand Total Cost",
            "remarks": "The grand total cost for this PM forecast.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "REPAIRLOCFLAG",
            "required": true,
            "persistent": true,
            "title": "Repair Facility Required",
            "remarks": "Indicates whether the repair location is required.",
            "sameAsAttribute": "REPAIRLOCFLAG",
            "sameAsObject": "WORKORDER"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ACTIVEASSET",
            "target": "ASSET",
            "remarks": "Relationship to the PM's asset records, used to find the active asset records for a given PM. (asset.assetnum = pm.assetnum and asset.siteid=pm.siteid and status not in (select value from synonymdomain where maxvalue in (DECOMMISSIONED) and domainid=LOCASSETSTATUS). The resulting set will contain zero or one record.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid and status not in (select value from synonymdomain where maxvalue in ('DECOMMISSIONED') and domainid='LOCASSETSTATUS')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the PM's asset records, used to find the asset records for a given PM. (asset.assetnum = pm.assetnum). The resulting set will contain zero or one record.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETNOTREADY",
            "target": "ASSET",
            "remarks": "Relationship to the PM's asset records, used to find the not ready asset records for a given PM. (asset.assetnum = pm.assetnum and asset.siteid=pm.siteid and status not in (select value from synonymdomain where maxvalue in (NOT READY) and domainid=LOCASSETSTATUS). The resulting set will contain zero or one record.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid and status in (select value from synonymdomain where maxvalue in ('NOT READY') and domainid='LOCASSETSTATUS')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSOCASSET",
            "target": "ASSET",
            "remarks": "Relationship to MasterPMItem's asset records, used to find all the associated asset records for this rotating item on Master PM record. (:applymasterpmtoasset=:yes and itemnum =:masterpmitemnum and assetnum not in(select assetnum from pm where masterpm=:pmnum and assetnum is not null) and asset.itemsetid = pm.itemsetid). The resulting set will contain zero to many records.",
            "whereClause": ":applymasterpmtoasset=:yes and itemnum =:masterpmitemnum and assetnum not in(select assetnum from pm where masterpm=:pmnum and assetnum is not null) and itemsetid = :itemsetid and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this PM's linear Asset. (pm.assetnum=asset.assetnum and pm.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "The PM's end feature (assetfeature.assetfeatureID = PM.endassetfeatureID).  The set will contain zero or one object.",
            "whereClause": "assetfeatureid = :endassetfeatureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "The PM's asset feature (assetfeature.assetfeatureID = PM.assetfeatureID).  The set will contain zero or one object.",
            "whereClause": "assetfeatureid = :assetfeatureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "The PM's start feature (assetfeature.assetfeatureID = PM.startassetfeatureID).  The set will contain zero or one object.",
            "whereClause": "assetfeatureid = :startassetfeatureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the PM's DocLinks records, used to find documents for a given PM. doclinks.keytable = 'PM' and doclinks.keycolumn = 'PMNUM' and pm.pmnum = doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "(ownertable = 'PM' and ownerid = :pmuid) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='ASSET' and ownerid in (select assetuid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='MASTERPM' and ownerid in (select masterpmid from masterpm where masterpmnum=:masterpm))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS_ASSETID",
            "target": "DOCLINKS",
            "remarks": "Relationship to the PM's DocLinks records, used to find documents for a given PM. This relationship includes asset-related doclinks using assetid (global) instead of assetuid (site-specific). (doclinks.keytable = 'PM' and doclinks.keycolumn = 'PMNUM' and pm.pmnum = doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "(ownertable = 'PM' and ownerid = :pmuid) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='ASSET' and ownerid in (select assetid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='MASTERPM' and ownerid in (select masterpmid from masterpm where masterpmnum=:masterpm))",
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the PM to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURE",
            "target": "FEATURES",
            "remarks": "Relationship to the Features table, used to find the feature for this PM. (features.feature=pm.feature). The resulting set will contain one object",
            "whereClause": "feature = :feature",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the PM's Item records, used to find the item records for a given PM. (item.itemnum=pm.masterpmitemnum and item.itemsetid = pm.itemsetid). The resulting set will contain zero or one record.",
            "whereClause": "itemnum = :masterpmitemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLAN",
            "target": "JOBPLAN",
            "remarks": "Relationship to the PM's Jobplan records, used to find the jobplan records for a given PM. (jobplan.jpnum = pm.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null) or (:orgid is null and :siteid is null) or (:orgid is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCJOBPLAN",
            "target": "JOBPLAN",
            "remarks": "Relationship to the PM's Jobplan records, used to find the jobplan records for a given PM, taking the status into account to filter out revised job plans. (jobplan.jpnum = pm.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null) or (:orgid is null and :siteid is null) or (:orgid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": null
        },
        {
            "name": "PRIMARYSYSLOCPM",
            "target": "LOCANCESTOR",
            "remarks": "Relationship to the PM's Primary system locations records, used to find all PM's in the Primary system locations. (locancestor.location =pm.location and locancestor.systemid =( select primarysystem from site where siteid =:siteid) ).  The resulting set will contain zero or more records.",
            "whereClause": "location =:location and systemid =( select systemid from locsystem where primarysystem = '1' and siteid =:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONNOTREADY",
            "target": "LOCATIONS",
            "remarks": "Relationship to the PM's location records, used to find the not ready location records for a given PM. (location.assetnum = pm.assetnum and location.siteid=pm.siteid and status not in (select value from synonymdomain where maxvalue in (NOT READY) and domainid=LOCASSETSTATUS). The resulting set will contain zero or one record.",
            "whereClause": "location = :location and siteid=:siteid and status in (select value from synonymdomain where maxvalue in ('NOT READY') and domainid='LOCASSETSTATUS')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the PM's Location records, used to find the location records for a given PM. (locations.location = pm.location). The resulting set will contain zero or one record.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSOCLOC",
            "target": "LOCOPER",
            "remarks": "Relationship to MasterPMItem's Location records, used to find all the associated location records for this rotating item on Master PM record. (:applymasterpmtoloc=:yes and itemnum =:masterpmitemnum and location not in(select location from pm where masterpm=:pmnum and location is not null) and locoper.itemsetid = pm.itemsetid). The resulting set will contain zero to many records.",
            "whereClause": ":applymasterpmtoloc=:yes and itemnum =:masterpmitemnum and location not in(select location from pm where masterpm=:pmnum and location is not null) and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVELOC",
            "target": "LOCOPER",
            "remarks": "Relationship to MasterPMItem's Location records, used to find all the associated active location records for a given PM. (locoper.location = pm.location and locoper.siteid=pm.siteid and status not in (select value from synonymdomain where maxvalue in (DECOMMISSIONED) and domainid=LOCASSETSTATUS). The resulting set will contain zero or one record.",
            "whereClause": "location=:location and siteid=:siteid and location in (select location from locations where location=:location and status not in (select value from synonymdomain where maxvalue in ('DECOMMISSIONED') and domainid='LOCASSETSTATUS'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for pmuid. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:pmuid and ldownertable = 'PM'",
            "cardinality": null
        },
        {
            "name": "MASTERPM",
            "target": "MASTERPM",
            "remarks": "Relationship to the PM's MasterPM records, used to find the MasterPM record for a given PM. (pm.pmnum = pm.masterpm). The resulting set will contain zero or one record.",
            "whereClause": "masterpmnum=:masterpm",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREPOINT",
            "target": "MEASUREPOINT",
            "remarks": "Relationship to the PM's Measurepoint records, used to find all the measurepoint records for a given PM. (measurepoint.pmnum = pm.pmnum). The resulting set will contain zero to many records.",
            "whereClause": "(llpmnum = :pmnum  or ulpmnum=:pmnum) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCPMEXTDATE",
            "target": "PLUSCPMEXTDATE",
            "remarks": null,
            "whereClause": "pmnum=:pmnum and siteid=:siteid and history = :no",
            "cardinality": null
        },
        {
            "name": "PLUSCPMEXTDATEHISTORY",
            "target": "PLUSCPMEXTDATE",
            "remarks": "Relationship to recover the extended date history",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PMANCESTORS",
            "target": "PM",
            "remarks": "Relationship to the PM table, used to get the PM ancestors for a given PM.",
            "whereClause": "pmnum in (select ancestor from pmancestor where pmnum =:pmnum and siteid =:siteid ) and siteid =:siteid",
            "cardinality": null
        },
        {
            "name": "PARENT",
            "target": "PM",
            "remarks": "Relationship to the PM's Parent records, used to find the parent record for a given PM. (pm.pmnum = pm.parent). The resulting set will contain zero or one record.",
            "whereClause": "pmnum=:parent and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "target": "PM",
            "remarks": "Relationship to the PM's children records, used to find all the children for a given PM. (pm.parent = pm.pmnum ). The resulting set will contain zero or more records.",
            "whereClause": "parent=:pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HIERARCHY",
            "target": "PM",
            "remarks": "Relationship to the PM's ancestor records, used to find all PMs under this PM in the hierarchy. pm.pmnum in (select pmnum from pmAncestor where Ancestor = :pmnum)). This set includes this PM so it will always have at least one record.",
            "whereClause": "pmnum in (select pmnum from pmancestor where ancestor = :pmnum and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMANCESTOR",
            "target": "PMANCESTOR",
            "remarks": "Relationship to the PM's PMAncestor records, used to find all PMAncestor records which refer to the PM. (pmancestor.pmnum=pm.pmnum or pmancesotr.ancestor=pm.pmnum). The resulting set will contain zero to many records.",
            "whereClause": "pmnum = :pmnum or ancestor = :pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMCHANGESTATUS",
            "target": "PMCHANGESTATUS",
            "remarks": "Relationship to the non-persistent PMChangeStatus object. The resulting set will contain zero or more objects. Note : PMChangeStatus is a non-persistent MBO with whose help the dialog box binds with the object.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMFORECAST",
            "target": "PMFORECAST",
            "remarks": "Relationship to the PMForecast table, used to get the forecast for a given PM.",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PMFORECASTNEWDATE",
            "target": "PMFORECAST",
            "remarks": "Relationship to the PMForecast table, used to get the forecast where new forecast date is not null",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and newdate is not null",
            "cardinality": null
        },
        {
            "name": "PMFORECASTREGENERATE",
            "target": "PMFORECAST",
            "remarks": "Relationship to the PMForecast table, used to get the forecast where new forecast date is not null and regenerate flag is true.",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and newdate is not null and regenerate =:yes",
            "cardinality": null
        },
        {
            "name": "PMFORECASTSKD",
            "target": "PMFORECAST",
            "remarks": "Relationship to the PMForecast table, used to get the forecast for a given PM.",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "TOPLEVELPMFORECAST",
            "target": "PMFORECAST",
            "remarks": "Relationship to the PMForecast table, used to get the forecast for top level PM of a given PM.",
            "whereClause": "pmnum = (select pmnum from pm where  parent is null and pmnum in (select ancestor from pmancestor where pmnum = :pmnum and siteid=:siteid) and siteid=:siteid) and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "MINLTDPMCOUNTERPMFORECAST",
            "target": "PMFORECAST",
            "remarks": "Relationship to the PMForecast table, used to get the forecast for a given PM and minimum ltdpmcounter.",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and ltdpmcounter = (select min(ltdpmcounter) from pmforecast  where pmnum =:pmnum and siteid =:siteid)",
            "cardinality": null
        },
        {
            "name": "MAXLTDPMCOUNTERPMFORECAST",
            "target": "PMFORECAST",
            "remarks": "Relationship to the PMForecast table, used to get the forecast for a given PM and maximum ltdpmcounter.",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and ltdpmcounter = (select max(ltdpmcounter) from pmforecast  where pmnum =:pmnum and siteid =:siteid)",
            "cardinality": null
        },
        {
            "name": "PMFORECASTGEN",
            "target": "PMFORECASTGEN",
            "remarks": "Relationship to PMForecastGen table, used by the Generate Forecast dialog to generate the forecast .",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "PMFORECASTJP",
            "target": "PMFORECASTJP",
            "remarks": "Relationship to the PMForecastJP table, used to get the job plan for a given PM.",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PMFORECASTJPROUTE",
            "target": "PMFORECASTJP",
            "remarks": "Relationship to the PMForecastJP table, used to get the PMForecastJP records for a given PM and where route is not null.",
            "whereClause": "pmnum=:pmnum and siteid=:siteid and route is not null",
            "cardinality": null
        },
        {
            "name": "ROOTANCESTORPMFORECASTJP",
            "target": "PMFORECASTJP",
            "remarks": "Relationship to the PMForecastJP table, used to get the PMForecastJP records with top most parent in the hierarchy as the given PM.",
            "whereClause": "rootancestor =:pmnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "MINLTDPMCOUNTERPMFORECASTJP",
            "target": "PMFORECASTJP",
            "remarks": "Relationship to the PMForecastJP table, used to get the pmforecastjp for a given PM and minimum ltdpmcounter.",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and ltdpmcounter = (select min(ltdpmcounter) from pmforecastjp  where pmnum =:pmnum and siteid =:siteid)",
            "cardinality": null
        },
        {
            "name": "PMMETER",
            "target": "PMMETER",
            "remarks": "Relationsip to the PMs PMMeter records,used to find all PMMeter records for a given PM",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMSEASONS",
            "target": "PMSEASONS",
            "remarks": "Relationship to the PM's PMSEASONS records, used to find all the PMSEASONS DATES for a given PM. (PMSEASONS.pmnum = pm.pmnum). The resulting set will contain zero or more record.",
            "whereClause": "pmnum = :pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMSEQUENCE",
            "target": "PMSEQUENCE",
            "remarks": "Relationship to the PM's PMSequence records, used to find all the PMSequence for a given PM. (pmsequence.pmnum = pm.pmnum). The resulting set will contain zero or more record.",
            "whereClause": "pmnum = :pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMSTATUSDUMMY",
            "target": "PMSTATUSDUMMY",
            "remarks": "Relationship to the PMStatusDummy non-persistent table, used to find all status for a given PM. (pmstatusdummy.pmnum = pm.pmnum). This resulting set will contain zero or more objects.",
            "whereClause": "pmnum = :pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMWORKGENERATION",
            "target": "PMWORKGENERATION",
            "remarks": "Relationship to the PM's non-persistent PmWorkGeneration records. (PMWORKGENERATION is non-persistent object, no where clause). The resulting set will contain zero objects. This relationship is used by the \"Generate WorkOrder\" action page to generate the workorders from a given PM.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECORDTIMEZONE",
            "target": "RECORDTIMEZONE",
            "remarks": "Get associated Time Zone.",
            "whereClause": "objectname = 'PM' and objectid = :pmuid",
            "cardinality": null
        },
        {
            "name": "RECORDTIMEZONEDIALOG",
            "target": "RECORDTIMEZONEDIALOG",
            "remarks": "Used to show the Associate Time Zone Dialog Box.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "ROUTES",
            "target": "ROUTES",
            "remarks": "Relationship to the PM's Routes records, used to find the Route records for a given PM. (routes.route = pm.route). The resulting set will contain zero or one record.",
            "whereClause": "route = :route and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SKDPMFORECAST",
            "target": "SKDPMFORECAST",
            "remarks": "Scheduler forecast records for a PM record",
            "whereClause": "pmnum = :pmnum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "SKDPMFORECASTREGENERATE",
            "target": "SKDPMFORECAST",
            "remarks": "Relationship to the scheduler forecast table where regerate is 1",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and newdate is not null and regenerate =:yes",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='PMSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the PM to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to the PM's Work order records, used to find all the workorder records for a given PM. (workorder.pmnum=pm.pmnum). The resulting set will contain zero to many records.",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXPMDUEDATEWO",
            "target": "WORKORDER",
            "remarks": "Relationship to the Workorder table, used to get the workorder record for a given PM and maximum pmduedate.",
            "whereClause": "pmnum =:pmnum and siteid =:siteid and historyflag = 0 and pmduedate = ( select max(pmduedate) from workorder where pmnum =:pmnum and siteid =:siteid and historyflag = 0) ",
            "cardinality": null
        },
        {
            "name": "WORKTYPE",
            "target": "WORKTYPE",
            "remarks": "Relationship to the WorkType table, used to find all work type records for a given organization. (organization.orgid = worktype.orgid). The resulting set will contain one or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PM",
            "source": "ASSET",
            "remarks": "Relationship to the PM table, used to find all preventive maintenance for a given asset.(pm.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LNRPM",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the PM table, used to find the assetfeature records for the given AssetFeatureId",
            "whereClause": "startassetfeatureid=:assetfeatureid or endassetfeatureid=:assetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECALASSETPM",
            "source": "ASSETFEATURE",
            "remarks": "Linear Recalibration",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PM",
            "source": "CHARPOINTACTION",
            "remarks": "Relationship to the pm records, used to find the pms records for a given pmnum and has masterpm.",
            "whereClause": "pmnum=:pmnum and siteid=:siteid and masterpm is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMSFORSITE",
            "source": "CHARPOINTACTION",
            "remarks": "Relationship to the pm records, used to find the pms records for a given CharPointAction's pmnum.  The resulting set will contain one object",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMGLACCOUNT",
            "source": "CHARTOFACCOUNTS",
            "remarks": "Relationship to the PM table, used to find the PM records where this gl account is being used (pm.orgid = chartofaccounts.orgid and pm.glaccount = chartofaccounts.glaccount). The resulting set will contain zero or more objects.",
            "whereClause": "orgid = :orgid and glaccount = :glaccount",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMVIAROUTE",
            "source": "DRILLDOWN",
            "remarks": "Relationship to the pm table, used to find the pm records for a given location or asset shown on DrilDown. (((pm.location = drilldown.locvalue and drilldown.locison=:yes) or (pm.assetnum=drilldown.assetvalue and drilldown.locison=:no))",
            "whereClause": "((location = :locvalue and :locison=:yes) or (assetnum=:assetvalue and :locison=:no)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PM",
            "source": "LOCATIONS",
            "remarks": "Relationship to the PM table, used to find the preventive maintenance records which contain the operating location. (locations.location = pm.location). The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "PM_STORELOC",
            "source": "LOCATIONS",
            "remarks": "Relationship to the PM table, used to find preventive maintenance records which use a given storeroom location. (locations.location = pm.storeloc). The resulting set will contain zero or more objects.",
            "whereClause": "storeloc = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MASTERPMS",
            "source": "LOCATIONS",
            "remarks": "Relationship to the PM table, used to find the master preventive maintenance records to apply item assembly atructure using the operating location's ItemNum. (locations.itemnum = pm.masterpmitemnum and pm.applymasterpmtoloc = yes and pm.ismasterpm = yes and pm.pmnum NOT IN (Select masterpm from PM where location= locations.location) and pm.itemsetid = locations.itemsetid). The resulting set will contain zero or more objects. ItemNum is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "pmnum not in (select a.masterpm from pm a where a.location = :location and a.siteid=:siteid and a.masterpm=pmnum) and exists (select * from masterpm where applympmtoloc=:yes and itemnum=:itemnum and itemsetid=:itemsetid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MASTERPMS",
            "source": "LOCOPER",
            "remarks": "Relationship to the PM table, used to find the master PM records which contain the operating location. (locoper.itemnum = pm.masterpmitemnum and pm.applymasterpmtoloc = :yes and pm.ismasterpm = :yes and pm.pmnum NOT IN (Select masterpm from PM where  location= locoper.location and pm.itemsetid = locoper.itemsetid)). The resulting set will contain zero or more objects.",
            "whereClause": "pmnum not in (select a.masterpm from pm a where a.location = :location and a.siteid=:siteid and a.masterpm=pmnum) and exists (select * from masterpm where applympmtoloc=:yes and itemnum=:itemnum and itemsetid=:itemsetid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PM",
            "source": "MASTERPM",
            "remarks": "Relationship to the MasterPM's to PM records, used to find the PM record for a given MasterPM. (pm.pmnum = pm.masterpm). The resulting set will contain zero or one record.",
            "whereClause": "masterpm=:masterpmnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "UPDASSOPM",
            "source": "MASTERPM",
            "remarks": "Relationship to the MasterPM's to PM records, used to find the PM record for a given MasterPM. (pm.pmnum = pm.masterpm). The resulting set will contain zero or one record.",
            "whereClause": "masterpm=:masterpmnum and overridemasterupd=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MP_LLPM",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the pm records, used to find the pms records for a given llpmnum and has masterpm.",
            "whereClause": "pmnum=:llpmnum and siteid=:siteid and masterpm is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PM",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the PM table, used to find the preventive maintenance order for a given measure point. (pm.pmnum = measurepoint.pmnum ). The resulting set will contain one object.",
            "whereClause": "pmnum = :pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MP_ULPM",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the pm records, used to find the pms records for a given ulpmnum and has masterpm.",
            "whereClause": "pmnum=:ulpmnum and siteid=:siteid and masterpm is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MPASSET_LLPM",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the PM table, used to find the PMs associated with the MeasurePoint's Asset and Lower Limit PM. The WHERE clause is: pm.pmnum = measurepoint.llpmnum and pm.assetnum = measurepoint.assetnum and pm.siteid = measurepoint.siteid. The resulting set will contain one zero or one object.",
            "whereClause": "pmnum = :llpmnum and assetnum = :assetnum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MPASSET_ULPM",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the PM table, used to find the PMs associated with the MeasurePoint's Asset and Upper Limit PM. The WHERE clause is: pm.pmnum = measurepoint.ulpmnum and pm.assetnum = measurepoint.assetnum and pm.siteid = measurepoint.siteid. The resulting set will contain one zero or one object.",
            "whereClause": "pmnum = :ulpmnum and assetnum = :assetnum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MPLOCATION_LLPM",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the PM table, used to find the PMs associated with the MeasurePoint's Location and Lower Limit PM. The WHERE clause is: pm.pmnum = measurepoint.llpmnum and pm.location = measurepoint.location and pm.siteid = measurepoint.siteid. The resulting set will contain one zero or one object.",
            "whereClause": "pmnum = :llpmnum and location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MPLOCATION_ULPM",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the PM table, used to find the PMs associated with the MeasurePoint's Location and Upper Limit PM. The WHERE clause is: pm.pmnum = measurepoint.ulpmnum and pm.location = measurepoint.location and pm.siteid = measurepoint.siteid. The resulting set will contain one zero or one object.",
            "whereClause": "pmnum = :ulpmnum and location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPUSEDBYPM",
            "source": "PERSONGROUP",
            "remarks": "returns any rows if used by pms",
            "whereClause": "(persongroup=:persongroup  or ownergroup= :persongroup) ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PM",
            "source": "PLUSCPMEXTDATE",
            "remarks": null,
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PMANCESTORS",
            "source": "PM",
            "remarks": "Relationship to the PM table, used to get the PM ancestors for a given PM.",
            "whereClause": "pmnum in (select ancestor from pmancestor where pmnum =:pmnum and siteid =:siteid ) and siteid =:siteid",
            "cardinality": null
        },
        {
            "name": "PARENT",
            "source": "PM",
            "remarks": "Relationship to the PM's Parent records, used to find the parent record for a given PM. (pm.pmnum = pm.parent). The resulting set will contain zero or one record.",
            "whereClause": "pmnum=:parent and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "source": "PM",
            "remarks": "Relationship to the PM's children records, used to find all the children for a given PM. (pm.parent = pm.pmnum ). The resulting set will contain zero or more records.",
            "whereClause": "parent=:pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HIERARCHY",
            "source": "PM",
            "remarks": "Relationship to the PM's ancestor records, used to find all PMs under this PM in the hierarchy. pm.pmnum in (select pmnum from pmAncestor where Ancestor = :pmnum)). This set includes this PM so it will always have at least one record.",
            "whereClause": "pmnum in (select pmnum from pmancestor where ancestor = :pmnum and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PM",
            "source": "PMMETER",
            "remarks": "Relationship to the PM table, used to find the PM associated with the PMMeter. The WHERE clause is: pm.pmnum = pmmeter.pmnum and pm.orgid = pmmeter.orgid and pm.siteid = pmmeter.siteid. The resulting set will contain one object.",
            "whereClause": "pmnum = :pmnum and orgid = :orgid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PM",
            "source": "ROUTES",
            "remarks": "Relationship to the Route's PM records, used to find all the PM records for a given Route. (pm.route=routes.route). The resulting set will contain zero or more records.",
            "whereClause": "route=:route and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPM_BYASSET",
            "source": "VIEWWOPMS",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPM_BYLOC",
            "source": "VIEWWOPMS",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPM_BYLOCANDANCESTORS",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current location and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select siteid from locancestor where pm.location=locancestor.ancestor and pm.siteid=locancestor.siteid and locancestor.location=:location and locancestor.siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPM_BYLOCANDFAMILY",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current location, its children and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists ( (select siteid from locancestor where pm.location=locancestor.ancestor and pm.siteid=locancestor.siteid and locancestor.location=:location and locancestor.siteid=:siteid) union (select siteid from locancestor where pm.location=locancestor.location and pm.siteid=locancestor.siteid and locancestor.ancestor=:location and locancestor.siteid=:siteid) )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMCHILD_BYASSET",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the PM table, used to find all PMs for the asset and its children specified in the assetnum field.  The resulting set will contain zero or many.",
            "whereClause": "(assetnum=:assetnum or assetnum in (select assetnum from assetancestor where ancestor =:assetnum)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMCHILD_BYLOC",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the PM table, used to find all PMs for the location and its children specified in the location field.  The resulting set will contain zero or many.",
            "whereClause": "(location=:location or location in (select location from locancestor where ancestor =:location and siteid=:siteid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMRS_BYASSET",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current asset. PMs that pertain to the asset via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "(assetnum=:assetnum and siteid=:siteid) or exists (select 1 from route_stop where route_stop.route=pm.route and route_stop.siteid=pm.siteid and route_stop.assetnum=:assetnum and route_stop.siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMRS_BYASSETANDANCESTORS",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current asset or its ancestors. PMs that pertain to the asset or an ancestor via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=pm.siteid and assetancestor.siteid=:siteid and assetancestor.assetnum=:assetnum and (assetancestor.ancestor=pm.assetnum or (pm.assetnum is null and exists (select 1 from route_stop where assetancestor.ancestor=route_stop.assetnum and route_stop.route=pm.route and assetancestor.assetnum=:assetnum and assetancestor.siteid=:siteid))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMRS_BYASSETANDCHILDREN",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current asset or its children. PMs that pertain to the asset or a child via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=pm.siteid and assetancestor.siteid=:siteid and assetancestor.ancestor=:assetnum and (assetancestor.assetnum=pm.assetnum or (pm.assetnum is null and exists (select 1 from route_stop where assetancestor.assetnum=route_stop.assetnum and route_stop.route=pm.route and assetancestor.ancestor=:assetnum and assetancestor.siteid=:siteid))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMRS_BYASSETANDFAMILY",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current asset, its children and its ancestors. PMs that pertain to the asset, a child or a parent via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=pm.siteid and assetancestor.siteid=:siteid and assetancestor.ancestor=:assetnum and (assetancestor.assetnum=pm.assetnum or (pm.assetnum is null and exists (select 1 from route_stop where assetancestor.assetnum=route_stop.assetnum and route_stop.route=pm.route and assetancestor.ancestor=:assetnum and assetancestor.siteid=:siteid))) union (select 1 from assetancestor where assetancestor.siteid=pm.siteid and assetancestor.siteid=:siteid and  assetancestor.assetnum=:assetnum and (assetancestor.ancestor=pm.assetnum or (pm.assetnum is null and exists (select 1 from route_stop where assetancestor.ancestor=route_stop.assetnum and  route_stop.route=pm.route and assetancestor.assetnum=:assetnum and assetancestor.siteid=:siteid)))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMRS_BYLOC",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current location. PMs that pertain to the location via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "(location=:location and siteid=:siteid) or exists (select 1 from route_stop where route_stop.route=pm.route and route_stop.siteid=pm.siteid and route_stop.location=:location and route_stop.siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMRS_BYLOCANDANCESTORS",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current location or its ancestors. PMs that pertain to the location or an ancestor via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=pm.siteid and locancestor.siteid=:siteid and locancestor.location=:location and (locancestor.ancestor=pm.location or (pm.location is null and exists (select 1 from route_stop where locancestor.ancestor=route_stop.location and route_stop.route=pm.route and locancestor.location=:location and locancestor.siteid=:siteid))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMRS_BYLOCANDCHILDREN",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current location or its children. PMs that pertain to the location or a child via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=pm.siteid and locancestor.siteid=:siteid and locancestor.ancestor=:location and (locancestor.location=pm.location or (pm.location is null and exists (select 1 from route_stop where locancestor.location=route_stop.location and route_stop.route=pm.route and locancestor.ancestor=:location and locancestor.siteid=:siteid))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMRS_BYLOCANDFAMILY",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current location, its children and its ancestors. PMs that pertain to the location, a child or a parent via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=pm.siteid and locancestor.siteid=:siteid and locancestor.ancestor=:location and (locancestor.location=pm.location or (pm.location is null and exists (select 1 from route_stop where locancestor.location=route_stop.location and route_stop.route=pm.route and locancestor.ancestor=:location and locancestor.siteid=:siteid))) union (select 1 from locancestor where locancestor.siteid=pm.siteid and locancestor.siteid=:siteid and locancestor.location=:location and (locancestor.ancestor=pm.location or (pm.location is null and exists (select 1 from route_stop where locancestor.ancestor=route_stop.location and route_stop.route=pm.route and locancestor.location=:location and locancestor.siteid=:siteid)))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PM",
            "source": "WORKORDER",
            "remarks": "Relationship to the WorkOrder's PM record, used to find the pm for a work order. (PM.pmnum = Workorder.pmnum). This resulting set will contain zero or one object.",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_PM",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}