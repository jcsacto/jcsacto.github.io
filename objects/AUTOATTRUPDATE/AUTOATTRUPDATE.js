mos = {
    "objectName": "AUTOATTRUPDATE",
    "className": "psdi.app.workorder.AutoAttrUpdateSet",
    "description": "auto attribute update table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AUTOATTRUPDATEID",
    "primaryKeyColumns": [
        "AUTOATTRUPDATEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTCI",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Actual CI",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSET",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "WORKSITEID, ASSET",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 37",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ATTRIBUTE, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ATTRIBUTE, ORGID, WORKSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ATTRIBUTE, WORKORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ATTRIBUTE, WORKORGID, WORKSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "NEWENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "New End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "NEWSTARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "New Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "OLDENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Old End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "OLDSTARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Old Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 31",
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
            "objectName": "ORGANIZATION",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ORGID",
            "targetKeys": "WORKORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order''s Organization",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "PERSONID",
            "targetKeys": "COMPLETEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who completed.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "SITEID",
            "targetKeys": "WORKSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order''s Site",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "WORKSITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "AUTOATTRUPDATEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Work order number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ASSET",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ATTRIBUTE",
            "required": true,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Asset or locataion attribute",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "OLDALNVALUE",
            "required": false,
            "persistent": true,
            "title": "Old ALN Value",
            "remarks": "Old ALN Value of  the attribute",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "NEWALNVALUE",
            "required": false,
            "persistent": true,
            "title": "New ALN Value",
            "remarks": "New ALN Value of the attribute",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "OLDNUMVALUE",
            "required": false,
            "persistent": true,
            "title": "Old NUM Value",
            "remarks": "Old NUM Value of the attribute",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "NUMERICDOMAIN"
        },
        {
            "attributeName": "NEWNUMVALUE",
            "required": false,
            "persistent": true,
            "title": "New NUM Value",
            "remarks": "New NUM Value of attribute",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "NUMERICDOMAIN"
        },
        {
            "attributeName": "COMPLETEDATETIME",
            "required": false,
            "persistent": true,
            "title": "Completed Date",
            "remarks": "Date Completed of attribute change",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPLETEDBY",
            "required": false,
            "persistent": true,
            "title": "Completed By",
            "remarks": "Attribute update By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifier of the site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifier of the organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "OLDSPECVALUE",
            "required": false,
            "persistent": false,
            "title": "Old Value",
            "remarks": "Old asset attribute value",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "NEWSPECVALUE",
            "required": false,
            "persistent": false,
            "title": "New Value",
            "remarks": "new asset attribute value",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "SECTION",
            "required": false,
            "persistent": true,
            "title": "Section",
            "remarks": "Section for a group of attributes",
            "sameAsAttribute": "SECTION",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "CINUM",
            "required": false,
            "persistent": true,
            "title": "Configuration Item",
            "remarks": "Authorized CI Identifier",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "WORKSITEID",
            "required": true,
            "persistent": true,
            "title": "Work Site",
            "remarks": "The site of the work order",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "WORKORGID",
            "required": true,
            "persistent": true,
            "title": "Work Organization",
            "remarks": "The organization of the work order",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "NEWENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "New End Asset Feature ID",
            "remarks": "The feature (e.g. mile marker) that is used to identify where on the linear asset the attribute now ends",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "NEWSTARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "New Start Asset Feature ID",
            "remarks": "The feature (e.g. mile marker) that is used to identify where on the linear asset the attribute now  starts",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "OLDENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Old End Asset Feature ID",
            "remarks": "The feature (e.g. mile marker) that is used to identify where on the linear asset the attribute previously ended",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "OLDSTARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Old Start Asset Feature ID",
            "remarks": "The feature (e.g. mile marker) that is used to identify where on the linear asset the attribute previously started",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Asset Feature ID",
            "remarks": "Unique identifier of the feature being modified",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "CREATEDDATE",
            "required": false,
            "persistent": true,
            "title": "Created On Date",
            "remarks": "The date when this record was created.  When a user-identified column in this table is modified then Maximo will place a Removed Date on the existing record and create a new copy - with changes - and give it a Created Date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "New End Measure",
            "remarks": "Distance from the start of the linear asset where the attribute now ends",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "NEWENDOFFSET",
            "required": false,
            "persistent": true,
            "title": "New End  Offset",
            "remarks": "Distance: used in conjunction with the new 'End Asset Feature' to determine the new measure for the end of this attribute",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "NEWSTARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "New Start Measure",
            "remarks": "Distance from the start of the linear asset where the attribute now starts",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "NEWSTARTOFFSET",
            "required": false,
            "persistent": true,
            "title": "New Start Offset",
            "remarks": "Distance: used in conjunction with the new 'Start Asset Feature' to determine the measure for the start of this attribute",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "OLDENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "Old End Measure",
            "remarks": "Distance from the start of the linear asset where the attribute previously ended",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "OLDENDOFFSET",
            "required": false,
            "persistent": true,
            "title": "Old End  Offset",
            "remarks": "Distance: used in conjunction with the old 'End Asset Feature' to determine the measure for the end of this attribute",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "OLDSTARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "Old Start Measure",
            "remarks": "Distance from the start of the linear asset where the attribute previously started",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "OLDSTARTOFFSET",
            "required": false,
            "persistent": true,
            "title": "Old Start Offset",
            "remarks": "Distance: used in conjunction with the old 'Start Asset Feature' to determine the measure for the start of this attribute",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "NEWTABLEVALUE",
            "required": false,
            "persistent": true,
            "title": "New TABLE Value",
            "remarks": "New TABLE Value of the attribute",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OLDTABLEVALUE",
            "required": false,
            "persistent": true,
            "title": "Old TABLE Value",
            "remarks": "Old TABLE Value of  the attribute",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWBASEMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of New Base Measure",
            "remarks": "New Base Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "NEWENDBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "New End Base Measure",
            "remarks": "Measurement taken from the start of this linear asset to where this asset ends.  This can be manually measured and entered or calculated using the EndLabel and EndOffset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "NEWENDMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of New End Measure",
            "remarks": "New End Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "NEWENDOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of New End Offset",
            "remarks": "New End Offset Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "NEWSTARTBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "New Start Base Measure",
            "remarks": "Measurement taken from the start of this linear asset to where this asset is initially encountered.  This can be manually measured and entered or calculated using the StartLabel and StartOffset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "NEWSTARTMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of New Start Measure",
            "remarks": "New Start Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "NEWSTARTOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of New Start Offset",
            "remarks": "New Start Offset Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "OLDBASEMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Old Base Measure",
            "remarks": "Old Base Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "OLDENDBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "Old End Base Measure",
            "remarks": "Measurement taken from the start of this linear asset to where this asset ends.  This can be manually measured and entered or calculated using the EndLabel and EndOffset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "OLDENDMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Old End Measure",
            "remarks": "Old End Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "OLDENDOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Old End Offset",
            "remarks": "Old End Offset Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "OLDSTARTBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "Old Start Base Measure",
            "remarks": "Measurement taken from the start of this linear asset to where this asset is initially encountered.  This can be manually measured and entered or calculated using the StartLabel and StartOffset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "OLDSTARTMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Old Start Measure",
            "remarks": "Old Start Measure Unit",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "OLDSTARTOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Old Start Offset",
            "remarks": "Old Start Offset Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the asset table, used to find asset . The result set will contain one object.",
            "whereClause": "assetnum=:asset and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "target": "ASSETATTRIBUTE",
            "remarks": null,
            "whereClause": "assetattrid=:attribute",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSPEC",
            "target": "ASSETSPEC",
            "remarks": null,
            "whereClause": "assetnum=:asset and assetattrid=:attribute and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "target": "CI",
            "remarks": "Relationship to the ci table, used to find ci. The result set will contain one object.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CISPEC",
            "target": "CISPEC",
            "remarks": null,
            "whereClause": "cinum=:cinum and assetattrid=:attribute",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COLLECTDETAILS",
            "target": "COLLECTDETAILS",
            "remarks": "Relationship from AutoAttrUpdate to CollectDetails",
            "whereClause": "(assetnum is not null and assetnum = :asset and siteid = :siteid) or (location is not null and location = :location and siteid = :siteid) or (cinum is not null and cinum = :cinum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the locations table, used to find location . The result set will contain one object.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONSPEC",
            "target": "LOCATIONSPEC",
            "remarks": null,
            "whereClause": "location=:location and assetattrid=:attribute and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "AUTOATTRUPDATE",
            "source": "ASSET",
            "remarks": "Relationship to the workorder's autoattrupdate records, used to find the autoattrupdate records for a given asset.",
            "whereClause": "asset=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AUTOATTRUPDATE",
            "source": "CI",
            "remarks": "Relationship to the workorder's autoattrupdate records, used to find the autoattrupdate records for a given ci.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AUTOATTRUPDATE",
            "source": "LOCATIONS",
            "remarks": "Relationship to the workorder's autoattrupdate records, used to find the autoattrupdate records for a given location.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETAUTOATTRUPDATE",
            "source": "MULTIASSETLOCCI",
            "remarks": null,
            "whereClause": "wonum=:recordkey and worksiteid=:worksiteid and asset=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIAUTOATTRUPDATE",
            "source": "MULTIASSETLOCCI",
            "remarks": null,
            "whereClause": "wonum=:recordkey and worksiteid=:worksiteid and cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCAUTOATTRUPDATE",
            "source": "MULTIASSETLOCCI",
            "remarks": null,
            "whereClause": "wonum=:recordkey and worksiteid=:worksiteid and location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AUTOATTRUPDATE",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "(wonum=:wonum or wonum in ( select wonum from workorder where parent=:wonum and siteid=:siteid) ) and worksiteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}