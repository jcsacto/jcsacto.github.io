mos = {
    "objectName": "MULTIASSETLOCCI",
    "className": "psdi.app.workorder.MultiAssetLocCISet",
    "description": "Multi Asset, location and Cis for workorder",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MULTIID",
    "primaryKeyColumns": [
        "MULTIID"
    ],
    "logicalRelationships": [
        {
            "objectName": "MULTIASSETLOCCI",
            "targetObject": "ASSETLOCUSERCUST",
            "parentKeys": "MULTIID",
            "targetKeys": "MULTIID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "MULTIASSETLOCCI",
            "targetObject": "ASSETUSERCUST",
            "parentKeys": "MULTIID",
            "targetKeys": "MULTIID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "MULTIASSETLOCCI",
            "targetObject": "LOCATIONUSERCUST",
            "parentKeys": "MULTIID",
            "targetKeys": "MULTIID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "MULTIASSETLOCCI",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "MULTIID",
            "targetKeys": "MULTIID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "MULTIASSETLOCCI",
            "targetObject": "WOASSETUSERCUST",
            "parentKeys": "MULTIID",
            "targetKeys": "MULTIID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "MULTIASSETLOCCI",
            "targetObject": "WOLOCUSERCUST",
            "parentKeys": "MULTIID",
            "targetKeys": "MULTIID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 6",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTCI",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Configuration Item",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "MOVETOSITE, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Moved Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "MOVETOSITE, MOVETOPARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Move to Parent",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "MOVETOSITE, NEWASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "New Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "MOVETOSITE, NEWREPLACEASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 94",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "MOVETOSITE, REPLACEASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 95",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "REPLACEMENTSITE, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 96",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "REPLACEMENTSITE, MOVETOPARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 97",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "REPLACEMENTSITE, NEWASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 98",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "REPLACEMENTSITE, NEWREPLACEASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "New Replacement Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "REPLACEMENTSITE, REPLACEASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Replacement Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, MOVETOPARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 102",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, NEWASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 103",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, NEWREPLACEASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 104",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, REPLACEASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 105",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "WORKSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 106",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "WORKSITEID, MOVETOPARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 107",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "WORKSITEID, NEWASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 108",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "WORKSITEID, NEWREPLACEASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 109",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "WORKSITEID, REPLACEASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 110",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "FEATURE",
            "targetKeys": "FEATURE",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Features",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "MOVETOSITE, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 129",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "MOVETOSITE, MOVETOLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Moved To Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPLACEMENTSITE, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 131",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPLACEMENTSITE, MOVETOLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 132",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, MOVETOLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 134",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 135",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITEID, MOVETOLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 136",
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
            "objectName": "ORGANIZATION",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "ORGID",
            "targetKeys": "WORKORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 176",
            "longDescription": null
        },
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
            "objectName": "ROUTES",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "MOVETOSITE, ROUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "REPLACEMENTSITE, ROUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "SITEID, ROUTE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Applied Route",
            "longDescription": null
        },
        {
            "objectName": "ROUTES",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ROUTE",
            "targetKeys": "WORKSITEID, ROUTE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID",
            "targetKeys": "MOVETOSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Move To Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID",
            "targetKeys": "REPLACEMENTSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Replacement Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID",
            "targetKeys": "WORKSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Site",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MULTIID",
            "required": true,
            "persistent": true,
            "title": "MULTI ID",
            "remarks": "Unique identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "An asset that is associated with the work order.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "A location that is associated with the work order.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "CINUM",
            "required": false,
            "persistent": true,
            "title": "Configuration Item",
            "remarks": "A configuration item that is associated with the work order.",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "SEQUENCE",
            "required": false,
            "persistent": true,
            "title": "Sequence",
            "remarks": "The place of the asset, location, or configuration item in a sequential order. For example, you have a work order to inspect some train cars. The train cars are in sequential order and you must inspect each train car sequentially. You assign a number to each train car according to its place in that sequence.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROGRESS",
            "required": true,
            "persistent": true,
            "title": "Mark Progress",
            "remarks": "Select this check box when you finish working with the asset, location, or configuration item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISPRIMARY",
            "required": true,
            "persistent": true,
            "title": "Is Primary",
            "remarks": "if the asset is primary asset",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKORGID",
            "required": false,
            "persistent": true,
            "title": "Work Organization",
            "remarks": "The organization of the work record",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "WORKSITEID",
            "required": false,
            "persistent": true,
            "title": "Work Site",
            "remarks": "The site of the work record",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "The Organization of the Asset/Location/CI",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "The site that is associated with the asset, location, or configuration item.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "COMMENTS",
            "required": false,
            "persistent": true,
            "title": "Comment",
            "remarks": "Comment or further information pertaining to the asset, location, or configuration item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROUTE",
            "required": false,
            "persistent": true,
            "title": "Route",
            "remarks": "Route Identifier",
            "sameAsAttribute": "ROUTE",
            "sameAsObject": "ROUTES"
        },
        {
            "attributeName": "ROUTESTOP",
            "required": false,
            "persistent": true,
            "title": "Route Stop",
            "remarks": "Add route field",
            "sameAsAttribute": "ROUTESTOPID",
            "sameAsObject": "ROUTE_STOP"
        },
        {
            "attributeName": "MOVETOPARENT",
            "required": false,
            "persistent": true,
            "title": "Move To Parent",
            "remarks": "Identifies the new Parent for the Asset",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "MOVETOLOCATION",
            "required": false,
            "persistent": true,
            "title": "Move To Location",
            "remarks": "Identifies the new Location for the Asset",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "MOVETOBIN",
            "required": false,
            "persistent": true,
            "title": "Move To Bin",
            "remarks": "Identifies the new Bin for the Asset",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "PERFORMMOVETO",
            "required": true,
            "persistent": true,
            "title": "Perform the Move to Action",
            "remarks": "Perform the move to action",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETDESC",
            "required": false,
            "persistent": true,
            "title": "Target Description",
            "remarks": "A temporary description of the group of assets, locations, or configuration items. For example, you have a work order to upgrade all of the company notebooks. You can enter a description of the group of notebooks until you can identify specific asset numbers for each notebook.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECORDKEY",
            "required": false,
            "persistent": true,
            "title": "Record Key",
            "remarks": "Record Key for worknum or ticketid",
            "sameAsAttribute": "RECORDKEY",
            "sameAsObject": "WORKVIEW"
        },
        {
            "attributeName": "RECORDCLASS",
            "required": true,
            "persistent": true,
            "title": "Class",
            "remarks": "Class of the work order or ticket",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "TARGETDESC_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "TARGETDESC Long description",
            "remarks": "Long description for TARGETDESC",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMENTS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "COMMENTS Long description",
            "remarks": "Long description for COMMENTS",
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
            "remarks": "A previously defined feature or relationship used, in conjunction with the end offset, to determine the end measure for this linear segment.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "End Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where this linear work segment ends.  This can be manually entered or calculated by entering an end reference point and end offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Offset",
            "remarks": "Distance used in conjunction with the end reference point to determine where the work location ends.  ",
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
            "remarks": "Absolute distance taken from the start of the linear asset to where this linear work segment begins.  This can be manually entered or calculated by entering a start reference point and start offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Offset",
            "remarks": "Distance used in conjunction with the start reference point to determine where the work location begins.  ",
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
            "attributeName": "MOVETOSITE",
            "required": false,
            "persistent": true,
            "title": "Move To Site",
            "remarks": "Identifies the new Site for the Asset",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "NEWASSETNUM",
            "required": false,
            "persistent": true,
            "title": "New Asset Number",
            "remarks": "Defines what the new Asset number will be for the Asset being removed if it is moved to a different site",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "REPLACEMENTSITE",
            "required": false,
            "persistent": true,
            "title": "Replacement Asset Site",
            "remarks": "Identifies the Site where the Replacement Asset is currently located",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "REPLACEASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Replacement Asset",
            "remarks": "Identifies the Replacement Asset that will replace the current Asset",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "NEWREPLACEASSETNUM",
            "required": false,
            "persistent": true,
            "title": "New Replacement Asset Number",
            "remarks": "Identifies the new replacement asset number if the replacement asset is coming from a different site",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
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
            "remarks": "Unit of measure for the offset (before or after) from the end reference point of this asset.",
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
            "remarks": "Unit of measure for the offset (before or after) from the start reference point of this asset.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "FEATURE",
            "required": false,
            "persistent": true,
            "title": "Feature",
            "remarks": "An object that exists on or alongside a linear asset that is not a point asset.",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "FEATURELABEL",
            "required": false,
            "persistent": true,
            "title": "Feature Label",
            "remarks": "Unique label used to differentiate features.",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "asset record for the multiassetlocci",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this MultiAssetLocCI's linear Asset. (multiassetlocci.assetnum=asset.assetnum and multiassetlocci.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MOVEDASSET",
            "target": "ASSET",
            "remarks": "assetnum to MultiAssetLocCI",
            "whereClause": "assetnum=:assetnum and siteid=:movetosite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MOVETOPARENT",
            "target": "ASSET",
            "remarks": "movetoparent for the MultiAssetLocCI",
            "whereClause": "assetnum=:movetoparent and siteid=:movetosite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWASSETSITE",
            "target": "ASSET",
            "remarks": "new asset",
            "whereClause": "assetnum=:newassetnum and siteid=:movetosite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPLACEASSET",
            "target": "ASSET",
            "remarks": "replaceassetnum for the  MultiAssetLocCI",
            "whereClause": "assetnum=:replaceassetnum and siteid=:replacementsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "The Multiassetlocci's start feature (assetfeature.assetfeatureID = MULTIASSETLOCCI.startassetfeatureID).  The set will contain zero or one object.",
            "whereClause": "assetfeatureid = :startassetfeatureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "The Multiassetlocci's asset feature (assetfeature.assetfeatureID = Multiassetlocci.assetfeatureID).  The set will contain zero or one object.",
            "whereClause": "assetfeatureid = :assetfeatureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "The Multiassetlocci's end feature (assetfeature.assetfeatureID = Multiassetlocci.endassetfeatureID).  The set will contain zero or one object.",
            "whereClause": "assetfeatureid = :endassetfeatureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSET",
            "target": "ASSETLOCUSERCUST",
            "remarks": "Relationship to the WOMODUSERCUST table, used to find all multi records for a given WOModUserCust. (multiassetlocci.multiid=womodusercust.multiid). The resulting set will contain zero or one object.",
            "whereClause": "multiid=:multiid and (addperson=1 or modifyperson=1 or removeperson=1)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVEASSETMETER",
            "target": "ASSETMETER",
            "remarks": "Relationship to the ASSETMETER table, used to get the ASSETMETERs for this asset. The resulting set will contain zero or more objects.  ",
            "whereClause": "active=:yes and assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSPEC",
            "target": "ASSETSPEC",
            "remarks": null,
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETUSERCUST",
            "target": "ASSETUSERCUST",
            "remarks": "Relationship to AssetUserCust",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETAUTOATTRUPDATE",
            "target": "AUTOATTRUPDATE",
            "remarks": null,
            "whereClause": "wonum=:recordkey and worksiteid=:worksiteid and asset=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIAUTOATTRUPDATE",
            "target": "AUTOATTRUPDATE",
            "remarks": null,
            "whereClause": "wonum=:recordkey and worksiteid=:worksiteid and cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCAUTOATTRUPDATE",
            "target": "AUTOATTRUPDATE",
            "remarks": null,
            "whereClause": "wonum=:recordkey and worksiteid=:worksiteid and location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VCICOLLECT",
            "target": "CI",
            "remarks": "View CI Collections",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWACTCI",
            "target": "CI",
            "remarks": "relationship for view actual ci",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCIRELHIS",
            "target": "CI",
            "remarks": "View CI Relationship History",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETCI",
            "target": "CI",
            "remarks": "CI record for the multiassetloc",
            "whereClause": "assetnum=:assetnum and assetlocsiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "target": "CI",
            "remarks": "CI record for the multiassetlocci",
            "whereClause": "cinum=:cinum",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "CISPEC",
            "target": "CISPEC",
            "remarks": null,
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COLLECTDETAILS",
            "target": "COLLECTDETAILS",
            "remarks": "Relationship from MultiAssetLocCI to CollectDetails",
            "whereClause": "(assetnum is not null and assetnum = :assetnum and siteid = :siteid) or (location is not null and location = :location and siteid = :siteid) or (cinum is not null and cinum = :cinum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOWNTIMEREPORT",
            "target": "DOWNTIMEREPORT",
            "remarks": "Relationship to the nonpersistent parameter set for reporting downtime.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the MULTIASSETLOCCI to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.  ",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MALOCPRIMARYSYSLOC",
            "target": "LOCANCESTOR",
            "remarks": "To retrieve WOs whose MultiAssetLocCI list contains locations in a given Location Hierarchy",
            "whereClause": "location =:location and systemid = ( select systemid from locsystem where primarysystem = 1 and siteid =:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVELOCATIONMETER",
            "target": "LOCATIONMETER",
            "remarks": "Relationship to the LOCATIONMETER table, used to get the LOCATIONMETERs for this location. The resulting set will contain zero or more objects.  ",
            "whereClause": "active=:yes and location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MOVETOLOCATION",
            "target": "LOCATIONS",
            "remarks": "movetolocation for the MultiAssetLocCI",
            "whereClause": "location=:movetolocation and siteid=:movetosite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": "locations record for the multiassetlocci",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LOCATIONSPEC",
            "target": "LOCATIONSPEC",
            "remarks": null,
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONUSERCUST",
            "target": "LOCATIONUSERCUST",
            "remarks": "Relationship to LocationUserCust",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCIPR",
            "target": "MULTIASSETLOCCIPR",
            "remarks": "Retrieves progress records associated with a MultiAssetLocCI record; will return zero or many records.",
            "whereClause": "multiid = :multiid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SEARCHHIRCHYREL",
            "target": "SEARCHHIRCHYREL",
            "remarks": "use for searching workview records",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "target": "SITE",
            "remarks": "site record for the MultiAssetLocCI",
            "whereClause": "siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MOVETOSITE",
            "target": "SITE",
            "remarks": "movetosite for MultiAssetLocCI",
            "whereClause": "siteid=:movetosite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "target": "TICKET",
            "remarks": "Relationship from multiassetlocci to ticket table to get ticket related info",
            "whereClause": "ticketid=:recordkey and (siteid=:siteid or siteid is null)",
            "cardinality": null
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput.  ",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the MULTIASSETLOCCI to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOASSETUSERCUST",
            "target": "WOASSETUSERCUST",
            "remarks": "Relationship to WOMODUSERCUST",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOLOCUSERCUST",
            "target": "WOLOCUSERCUST",
            "remarks": "Relationship to WOMODUSERCUST",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship from multiassetlocci to workorder table to get workorder related info",
            "whereClause": "wonum=:recordkey and (siteid=:worksiteid or siteid is null)",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MULTIASSETLOCCI",
            "source": "ASSET",
            "remarks": "multiassetlocci record for the asset",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "MULTIASSETLOCCISR",
            "source": "ASSET",
            "remarks": "Relationship from multiassetlocci to ticket table to get ticket related info",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and recordclass in (select value from synonymdomain where domainid='TKCLASS' and maxvalue='SR') and progress=0 and ((startmeasure >= :frommeasure and startmeasure <= :tomeasure) or (endmeasure >= :frommeasure and endmeasure <= :tomeasure) or (startmeasure <= :frommeasure and endmeasure >= :tomeasure) or (startmeasure >= :tomeasure and endmeasure <= :frommeasure) or (startmeasure is null or endmeasure is null))",
            "cardinality": null
        },
        {
            "name": "MULTIASSETLOCCIWO",
            "source": "ASSET",
            "remarks": "Relationship from multiassetlocci to workorder table to get workorder related info",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and recordclass in (select value from synonymdomain where domainid='WOCLASS' and maxvalue='WORKORDER') and ((startmeasure >= :frommeasure and startmeasure <= :tomeasure) or (endmeasure >= :frommeasure and endmeasure <= :tomeasure) or (startmeasure <= :frommeasure and endmeasure >= :tomeasure) or (startmeasure >= :tomeasure and endmeasure <= :frommeasure) or (startmeasure is null or endmeasure is null))",
            "cardinality": null
        },
        {
            "name": "LNRMULTIASSETLOCCI",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the MultiAssetLocCI table to find records for the WORKORDER for all Asset/Loc/CI.",
            "whereClause": "(startassetfeatureid=:assetfeatureid or endassetfeatureid=:assetfeatureid) and recordclass in ('WORKORDER', 'CHANGE','RELEASE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LNRMULTIASSETLOCCITICKET",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the MultiAssetLocCI table to find records for the TICKET for all Asset/Loc/CI.",
            "whereClause": "(startassetfeatureid=:assetfeatureid or endassetfeatureid=:assetfeatureid) and recordclass in ('SR', 'INCIDENT', 'ACTIVITY', 'PROBLEM')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCI",
            "source": "ASSETLOCUSERCUST",
            "remarks": "Relationship to the MULTIASSETLOCCI table",
            "whereClause": "multiid=:multiid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCI",
            "source": "ASSETUSERCUST",
            "remarks": "Relationship to the MULTIASSETLOCCI table",
            "whereClause": "assetnum=:assetnum and multiid=:multiid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCI",
            "source": "CI",
            "remarks": "Relationship to the MULTIASSETLOCCI table, used to find MULTIASSETLOCCI  record for a given CI.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCI",
            "source": "LOCATIONS",
            "remarks": "multiassetlocci record for the location",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "MULTIASSETLOCCI",
            "source": "LOCATIONUSERCUST",
            "remarks": "Relationship to the MULTIASSETLOCCI table",
            "whereClause": "location=:location and multiid=:multiid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDRECORDMULTIASSET",
            "source": "RELATEDRECORD",
            "remarks": "Related ticket/workorder records for the ticket",
            "whereClause": "(recordkey =:relatedreckey and recordclass =:relatedrecclass and isprimary=0)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLMULTIASSETLOCCI",
            "source": "TICKET",
            "remarks": "all asset/loc/CI  records for the ticket",
            "whereClause": "recordkey=:ticketid and recordclass=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARRELATED",
            "source": "TICKET",
            "remarks": "A copy of TicketPrimaryAsset created especially for the LinearDetailsRelated include section in Library.xml.  It will return the primary AssetLocCI record for the Ticket : one or zero records.",
            "whereClause": "recordkey=:ticketid and recordclass=:class and isprimary=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCI",
            "source": "TICKET",
            "remarks": "all asset/loc/CI records for the ticket,except the primary one",
            "whereClause": "recordkey=:ticketid and recordclass=:class and isprimary=0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKETPRIMARYASSET",
            "source": "TICKET",
            "remarks": "primary asset/loc/CI  record for the ticket",
            "whereClause": "recordkey=:ticketid and recordclass=:class and isprimary=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCI",
            "source": "WOASSETUSERCUST",
            "remarks": null,
            "whereClause": "assetnum=:assetnum and multiid=:multiid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLASSET",
            "source": "WOCHANGE",
            "remarks": "Relationship to changes",
            "whereClause": "recordkey=:wonum and recordclass=:woclass and assetnum is not null and worksiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLCI",
            "source": "WOCHANGE",
            "remarks": "Relationship to changes",
            "whereClause": "recordkey=:wonum and recordclass=:woclass and cinum is not null and worksiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLLOCATION",
            "source": "WOCHANGE",
            "remarks": "Relationship to changes",
            "whereClause": "recordkey=:wonum and recordclass=:woclass and location is not null and worksiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCI",
            "source": "WOLOCUSERCUST",
            "remarks": null,
            "whereClause": "location=:location and multiid=:multiid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLASSET",
            "source": "WORELEASE",
            "remarks": "Relationship to changes",
            "whereClause": "recordkey=:wonum and recordclass=:woclass and assetnum is not null and worksiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLCI",
            "source": "WORELEASE",
            "remarks": "Relationship to releases",
            "whereClause": "recordkey=:wonum and recordclass=:woclass and cinum is not null and worksiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLLOCATION",
            "source": "WORELEASE",
            "remarks": "Relationship to changes",
            "whereClause": "recordkey=:wonum and recordclass=:woclass and location is not null and worksiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCI",
            "source": "WORKORDER",
            "remarks": "all asset/loc/CI records for the workorder,except the primary one",
            "whereClause": "recordkey=:wonum and recordclass=:woclass and worksiteid=:siteid and isprimary=0",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LINEARRELATED",
            "source": "WORKORDER",
            "remarks": "A copy of WOPrimaryAsset created especially for the LinearDetailsRelated include section in Library.xml.  It will return the primary AssetLocCI record for the Work Order: one or zero records.",
            "whereClause": "recordkey=:wonum and recordclass=:woclass and worksiteid=:siteid and isprimary=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOPRIMARYASSET",
            "source": "WORKORDER",
            "remarks": "primary asset/loc/CI  record for the workorder",
            "whereClause": "recordkey=:wonum and recordclass=:woclass and worksiteid=:siteid and isprimary=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLMULTIASSETLOCCI",
            "source": "WORKORDER",
            "remarks": "all asset/loc/CI  records for the workorder",
            "whereClause": "recordkey=:wonum and recordclass=:woclass and worksiteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ALLLINEARMULTIASSETLOCCI",
            "source": "WORKORDER",
            "remarks": "all Linear asset/loc/CI  records for the workorder",
            "whereClause": "recordkey=:wonum and recordclass=:woclass and worksiteid=:siteid and :linearasset.islinear=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLLOCATION",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "recordkey=:wonum and recordclass=:woclass and location is not null and worksiteid=:siteid and multiid =(select min(multiid) from multiassetlocci multi2 where multi2.recordkey=multiassetlocci.recordkey and multi2.recordclass=multiassetlocci.recordclass  and multi2.worksiteid=multiassetlocci.worksiteid and multi2.location=multiassetlocci.location and multi2.siteid=multiassetlocci.siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLASSET",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "recordkey=:wonum and recordclass=:woclass and assetnum is not null and worksiteid=:siteid and multiid =(select min(multiid) from multiassetlocci multi2 where multi2.recordkey=multiassetlocci.recordkey and multi2.recordclass=multiassetlocci.recordclass  and multi2.worksiteid=multiassetlocci.worksiteid and multi2.assetnum=multiassetlocci.assetnum and multi2.siteid=multiassetlocci.siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLCI",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "recordkey=:wonum and recordclass=:woclass and cinum is not null and worksiteid=:siteid and multiid =(select min(multiid) from multiassetlocci multi2 where multi2.recordkey=multiassetlocci.recordkey and multi2.recordclass=multiassetlocci.recordclass  and multi2.worksiteid=multiassetlocci.worksiteid and multi2.cinum=multiassetlocci.cinum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCI",
            "source": "WORKVIEW",
            "remarks": "multiassetlocci records for workview record",
            "whereClause": "recordkey=:recordkey and recordclass=:class and (worksiteid=:siteid or worksiteid is null)",
            "cardinality": "UNDEFINED"
        }
    ]
}