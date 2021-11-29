mos = {
    "objectName": "MEASUREUNIT",
    "className": "psdi.app.assetcatalog.MeasureUnitSet",
    "description": "Measurment units",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MEASUREUNITUID",
    "primaryKeyColumns": [
        "MEASUREUNITID",
        "SITEID",
        "ORGID"
    ],
    "logicalRelationships": [
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETATTRIBUTE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETATTRIBUTE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "BASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "BASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "BASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "BASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCEBASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCEENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCEENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCESTARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCESTARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETBASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETSTARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETSTARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCEBASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCEENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 23",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCEENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCESTARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCESTARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 26",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETBASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 28",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 29",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETSTARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 30",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETSTARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 31",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCEBASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 32",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCEENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 33",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCEENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 34",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCESTARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 35",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "SOURCESTARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 36",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETBASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 37",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 38",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETENDMEASUREUNITUID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 39",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 40",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETSTARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "TARGETSTARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCEBASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCEENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCEENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCESTARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "SOURCESTARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETBASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETSTARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "TARGETSTARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "BASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 43",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 46",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 47",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETMETER",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 48",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 49",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 52",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 53",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 54",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "BASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "BASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 55",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 56",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 57",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 58",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 59",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 60",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWBASEMEASUREUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Units of Measure",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWBASEMEASUREUNITID, SITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 62",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWBASEMEASUREUNITID, WORKSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 63",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWBASEMEASUREUNITID, WORKSITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 64",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWENDMEASUREUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Units of Measure",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWENDMEASUREUNITID, SITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 66",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWENDMEASUREUNITID, WORKSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 67",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWENDMEASUREUNITID, WORKSITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 68",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWENDOFFSETUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Units of Measure",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWENDOFFSETUNITID, SITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 70",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWENDOFFSETUNITID, WORKSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 71",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWENDOFFSETUNITID, WORKSITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 72",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWSTARTMEASUREUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Units of Measure",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWSTARTMEASUREUNITID, SITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 74",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWSTARTMEASUREUNITID, WORKSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 75",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWSTARTMEASUREUNITID, WORKSITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 76",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWSTARTOFFSETUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Units of Measure",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWSTARTOFFSETUNITID, SITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 78",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWSTARTOFFSETUNITID, WORKSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 79",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "NEWSTARTOFFSETUNITID, WORKSITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 80",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDBASEMEASUREUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Units of Measure",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDBASEMEASUREUNITID, SITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 82",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDBASEMEASUREUNITID, WORKSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 83",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDBASEMEASUREUNITID, WORKSITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 84",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDENDMEASUREUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Units of Measure",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDENDMEASUREUNITID, SITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 86",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDENDMEASUREUNITID, WORKSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 87",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDENDMEASUREUNITID, WORKSITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 88",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDENDOFFSETUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Units of Measure",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDENDOFFSETUNITID, SITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 90",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDENDOFFSETUNITID, WORKSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 91",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDENDOFFSETUNITID, WORKSITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 92",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDSTARTMEASUREUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Units of Measure",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDSTARTMEASUREUNITID, SITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 94",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDSTARTMEASUREUNITID, WORKSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 95",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDSTARTMEASUREUNITID, WORKSITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 96",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDSTARTOFFSETUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Units of Measure",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDSTARTOFFSETUNITID, SITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 98",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDSTARTOFFSETUNITID, WORKSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 99",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "OLDSTARTOFFSETUNITID, WORKSITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 100",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "CLASSSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 101",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "CLASSSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "CONTASSETMETER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "CONTASSETMETER",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNIT, LOCATIONSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 102",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVENTORY",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ISSUEUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 103",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVENTORY",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ISSUEUNIT, STORELOCSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 104",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVENTORY",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 105",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVENTORY",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, STORELOCSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 106",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVENTORY",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ISSUEUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Issue Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVENTORY",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Order Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVOICELINE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "INVOICEUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVOICELINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "INVOICEUNIT, POSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 107",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVOICELINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "INVOICEUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 108",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVVENDOR",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 109",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "INVVENDOR",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "JOBPLANSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "JOBPLANSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 110",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 111",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID1",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 112",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 113",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID1, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 114",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID1, ORGID1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 115",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID1, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 116",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID1, SITEID, ORGID1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 117",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID1, SITEID1, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 118",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID1, SITEID1, ORGID1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 119",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LOCATIONMETER",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 120",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LOCATIONMETER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 121",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LOCMETERREADING",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 122",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "LOCMETERREADING",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "RECEIVEDUNIT, FROMSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 123",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "RECEIVEDUNIT, POSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 124",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MATRECTRANS",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "RECEIVEDUNIT, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit of receipt.",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MATUSETRANS",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ISSUEUNIT, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Issue Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MATUSETRANS",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ISSUEUNIT, TOSITEID, ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 127",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MEASUREMENT",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measurement Units",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MEASUREMENT",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measurement Units",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MEASUREMENT",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Offset Measurement Units",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MEASUREMENT",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measurement Units",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MEASUREMENT",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Offset Measurement Units",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METER",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measurement Unit for Meter",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "BASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 131",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 132",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 133",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 134",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 135",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "METERREADING",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 136",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MRLINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 137",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MRLINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 138",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MRLINE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, MOVETOSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 139",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, MOVETOSITE, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 140",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, REPLACEMENTSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 141",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, REPLACEMENTSITE, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 142",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Units of measure",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 144",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, WORKSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 145",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, WORKSITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 146",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, MOVETOSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 147",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, MOVETOSITE, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 148",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, REPLACEMENTSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 149",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, REPLACEMENTSITE, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 150",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Units of end measure",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 152",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, WORKSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 153",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, WORKSITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 154",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, MOVETOSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 155",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, MOVETOSITE, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 156",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, REPLACEMENTSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 157",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, REPLACEMENTSITE, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 158",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Units of end offset measure",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 160",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, WORKSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 161",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, WORKSITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 162",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, MOVETOSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 163",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, MOVETOSITE, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 164",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, REPLACEMENTSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 165",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, REPLACEMENTSITE, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 166",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start units of measure",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 168",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, WORKSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 169",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, WORKSITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 170",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, MOVETOSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 171",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, MOVETOSITE, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 172",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, REPLACEMENTSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 173",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, REPLACEMENTSITE, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 174",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Units of start offset measure",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 176",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, WORKSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 177",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, WORKSITEID, WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 178",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 179",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 180",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 181",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 182",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 183",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "BASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PDSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PDSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 184",
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
            "objectName": "MEASUREUNIT",
            "targetObject": "POLINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 205",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "POLINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, TOSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 206",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "POLINE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PRLINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, POSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 207",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PRLINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit for PR Line",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 209",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "REORDERPAD",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 210",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "REORDERPAD",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 211",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "RFQLINE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 212",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "RFQLINE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
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
            "targetObject": "TICKETSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 233",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "TICKETSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "TOOLINV",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ISSUEUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Issue Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "TOOLINV",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ISSUEUNIT3",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "TOOLINV",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Order Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "TOOLINV",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT3",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "TOOLINV",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ISSUEUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 234",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "TOOLINV",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ISSUEUNIT, STORELOCSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 235",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "TOOLINV",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ISSUEUNIT3, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 236",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "TOOLINV",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ISSUEUNIT3, STORELOCSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 237",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "TOOLINV",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 238",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "TOOLINV",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, STORELOCSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 239",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "TOOLINV",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT3, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 240",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "TOOLINV",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT3, STORELOCSITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 241",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WORKORDERSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 242",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WORKORDERSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPITEM",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPITEM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 243",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPITEM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 244",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPMATERIAL",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 245",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPMATERIAL",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 246",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPMATERIAL",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPSERVICE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPSERVICE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 247",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPSERVICE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 248",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPTOOL",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 249",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPTOOL",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 250",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPTOOL",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "MEASUREUNIT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MEASUREUNIT",
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
            "attributeName": "MEASUREUNITID",
            "required": true,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "Unit of measure name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ABBREVIATION",
            "required": false,
            "persistent": true,
            "title": "Abbreviation",
            "remarks": "Measure unit abbreviation. Used as suffix in generated description.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of unit of measure",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "MEASUREUNITUID",
            "required": true,
            "persistent": true,
            "title": "MEASUREUNITUID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTENTUID",
            "required": true,
            "persistent": true,
            "title": "CONTENTUID",
            "remarks": "Content Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSETATTRIBUTE",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the AssetAttribute table, used to find the asset attributes for a given measure unit. (assetattribute.measureunitid = measureunit.assetattrid). The resulting set will contain zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETMETER",
            "target": "ASSETMETER",
            "remarks": "Relationship to the assetmeter table, used to find all assetmeter records using this measureunit. (assetmeter.measureunitid=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSPEC",
            "target": "ASSETSPEC",
            "remarks": "Relationship to the AssetSpec table, used to find all asset specification records that use the given measure unit. (assetspec.measureunitid = measureunit.measureunitid). The resulting set will contain zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, , used to find all class specification records that use the given measure unit. (classspec.measureunitid = measureunit.measureunitid). The resulting set will contain zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTLINE",
            "target": "CONTRACTLINE",
            "remarks": "Relationship to the contractline table, used to find all non-historical contractline records using this measureunit. (contractline.orderunit=measureunit.measureunitid and exists (select 1 from contract where contract.contractnum=contractline.contractnum and contract.historyflag = :no)  This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid and exists (select 1 from contract where contract.contractnum=contractline.contractnum and contract.historyflag = :no)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONVERSION",
            "target": "CONVERSION",
            "remarks": "Relationship to the Conversion table, used to find all conversion records using this measureunit. (conversion.frommeasureunit=measureunit.measureunitid or conversion.tomeasureunit=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "frommeasureunit=:measureunitid or tomeasureunit=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the inventory table, used to find all inventory records using this measureunit. (inventory.orderunit=measureunit.measureunitid or inventory.issueunit=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid or issueunit=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINE",
            "target": "INVOICELINE",
            "remarks": "Relationship to the invoiceline table, used to find all non-historical invoiceline records using this measureunit. (invoiceline.orderunit=measureunit.measureunitid and exists (select 1 from invoice where invoice.invoicenum=invoiceline.invoicenum and invoice.historyflag = :no)  This relationship will find zero or more objects.",
            "whereClause": "invoiceunit=:measureunitid and exists (select 1 from invoice where invoice.invoicenum=invoiceline.invoicenum and invoice.historyflag = :no)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR",
            "target": "INVVENDOR",
            "remarks": "Relationship to the measureunit table, used to find all measureunit records using this measureunit. (measureunit.orderunit=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the item table, used to find all item records using this measureunit. (item.orderunit=measureunit.measureunitid or item.issueunit=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid or issueunit=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSPEC",
            "target": "ITEMSPEC",
            "remarks": "Relationship to the ItemSpec table, used to find all item specification records that use the given measure unit. (itemspec.measureunitid = measureunit.measureunitid). The resulting set will contain zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMETER",
            "target": "LOCATIONMETER",
            "remarks": "Relationship to the locationmeter table, used to find all locationmeter records using this measureunit. (locationmeter.measureunitid=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONSPEC",
            "target": "LOCATIONSPEC",
            "remarks": "Relationship to the LocationSpec table, used to find all location specification records that use the given measure unit. (locationspec.measureunitid = measureunit.measureunitid). The resulting set will contain zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCMETERREADING",
            "target": "LOCMETERREADING",
            "remarks": "Relationship to the locmeterreading table, used to find all locmeterreading records using this measureunit. (locmeterreading.measureunitid=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "target": "METER",
            "remarks": "Relationship to the meter table, used to find all meter records using this measureunit. (meter.measureunitid=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINE",
            "target": "MRLINE",
            "remarks": "Relationship to the mrline table, used to find all non-historical mrline records using this measureunit. (mrline.orderunit=measureunit.measureunitid and exists (select 1 from mr where mr.mrnum=mrline.mrnum and mr.historyflag = :no)  This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid and exists (select 1 from mr where mr.mrnum=mrline.mrnum and mr.historyflag = :no)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship to the poline table, used to find all non-historical poline records using this measureunit. (poline.orderunit=measureunit.measureunitid and exists (select 1 from po where po.ponum=poline.ponum and po.historyflag = :no)  This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid and exists (select 1 from po where po.ponum=poline.ponum and po.historyflag = :no)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "target": "PRLINE",
            "remarks": "Relationship to the prline table, used to find all non-historical prline records using this measureunit. (prline.orderunit=measureunit.measureunitid and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag = :no)  This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag = :no)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUOTATIONLINE",
            "target": "QUOTATIONLINE",
            "remarks": "Relationship to the quotationline table, used to find all quotationline records using this measureunit. (quotationline.orderunit=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REORDERPAD",
            "target": "REORDERPAD",
            "remarks": "Relationship to the reorderpad table, used to find all reorderpad records using this measureunit. (reorderpad.orderunit=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "target": "RFQLINE",
            "remarks": "Relationship to the rfqline table, used to find all rfqline records using this measureunit. (rfqline.orderunit=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid and exists (select 1 from rfq where rfq.rfqnum=rfqline.rfqnum and rfq.historyflag = :no)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPITEM",
            "target": "WPITEM",
            "remarks": "Relationship to the wpitem table, used to find all wpitem records using this measureunit. (wpitem.orderunit=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MEASUREUNIT",
            "source": "ASSETSPEC",
            "remarks": "Relationship to the MeasureUnit table, used to find the MeasureUnit object associated with this AssetSpec. The WHERE clause is: measureunit.measureunitid = assetspec.measureunitid and measureunit.orgid = assetspec.orgid. The resulting set will contain one object",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREUNIT",
            "source": "CLASSSPEC",
            "remarks": "Relationship to the MeasureUnit table, used to find the measure unit definition for the given class structure record. (measureunit.measureunitid = classspec.measureunitid ). The resulting set will contain zero or one object.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREUNIT",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the measureunit table, used to find all measureunit records for a given orgnization. (measureunit.orgid = classstructure.orgid). The resulting set will contain zero or objects.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREUNIT",
            "source": "FEATURESPEC",
            "remarks": "Relationship to the measureunit table, used to find the measureunit record for a given featurespec. (featurespec.measureunitid=assetattribute.measureunitid) The resulting set will contain zero or one object.",
            "whereClause": "measureunitid= :measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREUNIT",
            "source": "ITEMSPEC",
            "remarks": "Relationship to the MeasureUnit table, used to find the MeasureUnit object associated with this ItemSpec. The WHERE clause is: measureunit.measureunitid = itemspec.measureunitid and measureunit.orgid = itemspec.orgid. The resulting set will contain one object",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREUNIT",
            "source": "LOCATIONSPEC",
            "remarks": "Relationship to the MeasureUnit table, used to find the MeasureUnit object associated with this LocationSpec. The WHERE clause is: measureunit.measureunitid = locationspec.measureunitid and measureunit.orgid = locationspec.orgid. The resulting set will contain one object",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREUNIT",
            "source": "METER",
            "remarks": "Relationship from Meter to MeasureUnit to get the description for the meter's measureunitid",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREUNIT",
            "source": "TICKETSPEC",
            "remarks": "Relationship to the measureunit table, used to find the measureunit record for a given ticketspec. (workorderspec.measureunitid=assetattribute.measureunitid) The resulting set will contain zero or one object.",
            "whereClause": "measureunitid= :measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREUNIT",
            "source": "WORKORDERSPEC",
            "remarks": "Relationship to the measureunit table, used to find the measureunit record for a given workorderspec. (workorderspec.measureunitid=assetattribute.measureunitid) The resulting set will contain zero or one object.",
            "whereClause": "measureunitid= :measureunitid",
            "cardinality": "UNDEFINED"
        }
    ]
}