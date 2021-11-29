mos = {
    "objectName": "MEASUREPOINT",
    "className": "psdi.app.measurement.MeasurePointSet",
    "description": "The MEASUREPOINT Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "MEASUREPOINTID",
    "primaryKeyColumns": [
        "POINTNUM",
        "SITEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "ASSETMETER",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Point",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "CHARPOINTACTION",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Point",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "LOCATIONMETER",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Point",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "MEASUREMENT",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measurements Taken",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "POINTWO",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Point",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, REPFACSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measurement Point",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "WOACTIVITY",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, REPFACSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "WOACTIVITY",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measurement to take for Activity",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "WOCHANGE",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, REPFACSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "WOCHANGE",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measurement to make for Change",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "WORELEASE",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, REPFACSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "WORELEASE",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measurement taken for Release",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "WORKORDER",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, REPFACSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "WORKORDER",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Point to take reading for.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "MEASUREPOINT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MeasurePoints for the current Asset.",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "MEASUREPOINT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MEASUREPOINT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measurement Location",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "MEASUREPOINT",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "MEASUREPOINT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
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
            "objectName": "SITE",
            "targetObject": "MEASUREPOINT",
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
            "attributeName": "POINTNUM",
            "required": true,
            "persistent": true,
            "title": "Point",
            "remarks": "Point Number For Measurement",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset Number The Measurement Refers To",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Point Description (One Line)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOWERWARNING",
            "required": false,
            "persistent": true,
            "title": "Lower Warning Limit",
            "remarks": "1st Low Alarm",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOWERACTION",
            "required": false,
            "persistent": true,
            "title": "Lower Action Limit",
            "remarks": "2nd Low Alarm",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPPERWARNING",
            "required": false,
            "persistent": true,
            "title": "Upper Warning Limit",
            "remarks": "1st High Alarm",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPPERACTION",
            "required": false,
            "persistent": true,
            "title": "Upper Action Limit",
            "remarks": "2nd High Alarm",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Point Description (One Line)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Location where MeasurePoint is used.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "METERNAME",
            "required": true,
            "persistent": true,
            "title": "Meter",
            "remarks": "Name of meter associated with this MeasurePoint",
            "sameAsAttribute": "METERNAME",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "LLPMNUM",
            "required": false,
            "persistent": true,
            "title": "Lower Limit PM",
            "remarks": "Lower Limit (LL) PMNUM is the PM that is used to generate a work order when a Measurement is entered below the MeasurePoint's Lower Limit.",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "LLJPNUM",
            "required": false,
            "persistent": true,
            "title": "Lower Limit Job Plan",
            "remarks": "Lower Limit (LL) JPNUM is the job plan that is used to generate a work order when a Measurement is entered below the MeasurePoint's Lower Limit.",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "LLPRIORITY",
            "required": false,
            "persistent": true,
            "title": "Lower Limit Priority",
            "remarks": "Work priority for the Lower Limit PM or job plan",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ULPMNUM",
            "required": false,
            "persistent": true,
            "title": "Upper Limit PM",
            "remarks": "Upper Limit (UL) PMNUM is the PM that is used to generate a work order when a Measurement is entered above the MeasurePoint's Upper Limit.",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "ULJPNUM",
            "required": false,
            "persistent": true,
            "title": "Upper Limit Job Plan",
            "remarks": "Upper Limit (UL) JPNUM is the job plan that is used to generate a work order when a Measurement is entered above the MeasurePoint's Upper Limit.",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "ULPRIORITY",
            "required": false,
            "persistent": true,
            "title": "Upper Limit Priority",
            "remarks": "Work priority for the Upper Limit PM or job plan",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEASUREPOINTID",
            "required": true,
            "persistent": true,
            "title": "MEASUREPOINTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "MEASUREUNITID",
            "required": false,
            "persistent": false,
            "title": "Unit of Measure",
            "remarks": "Unit of measure associated with the Measure Points' corresponding meter ",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
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
            "attributeName": "STARTYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Start Y Offset Referent",
            "remarks": "Starting point from which to measure the Y-Offset at the start of the section of the linear asset to which this condition monitoring measurepoint applies.  CURB and CENTER-LINE are two examples.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "End Y Offset Referent",
            "remarks": "Starting point from which to measure the end Y-Offset at the end of the section of the linear asset to which this condition monitoring measurepoint applies.  GUARDRAIL and SURFACE are two examples.",
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
            "attributeName": "STARTFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "label used to identify the specific AssetFeature used to locate the start of the portion of the linear asset for which condition monitoring measurepoint applies",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDFEATURELABEL",
            "required": false,
            "persistent": false,
            "title": "Reference Point",
            "remarks": "label used to identify the specific AssetFeature used to locate the end of the portion of the linear asset for which condition monitoring measurepoint applies",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "STARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where this measure point is defined  This can be manually entered or calculated by entering start/end reference points and offsets.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where the end of this measure point is defined  This can be manually entered or calculated by entering an end reference point and end offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Offset",
            "remarks": "Distance used in conjunction with the start reference point to determine where the measurepoint resides.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Offset",
            "remarks": "Distance used in conjunction with the end reference point to determine where the measurepoint resides.  ",
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
            "attributeName": "ENDYOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Y Offset",
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
            "attributeName": "ENDZOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
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
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the asset for a given measure point. (asset.assetnum = measurepoint.assetnum and asset.siteid = measurepoint.siteid ). The resulting set will contain one object.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid and siteid = :siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "ASSET_REPORTING",
            "target": "ASSET",
            "remarks": "Reporting Relationship",
            "whereClause": "siteid=:siteid and assetnum=:assetnum",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the asset for a given measure point.   Used to test if the asset on a measurepoint is linear.  (asset.assetnum = measurepoint.assetnum and asset.siteid = measurepoint.siteid ). The resulting set will contain one object.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETMETER",
            "target": "ASSETMETER",
            "remarks": "Relationship to the AssetMeter table, used to find the AssetMeter object associated with this MeasurePoint. The WHERE clause is: assetmeter.metername = measurepoint.metername and assetmeter.assetnum = measurepoint.assetnum and assetmeter.siteid = measurepoint.siteid. The resulting set will contain zero or one object.",
            "whereClause": "metername = :metername and assetnum = :assetnum and siteid = :siteid and siteid=:siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "ASSETMETER_REPORTING",
            "target": "ASSETMETER",
            "remarks": "Reporting Relationship",
            "whereClause": "siteid=:siteid and assetnum=:assetnum and metername=:metername",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "CHARPOINTACTION",
            "target": "CHARPOINTACTION",
            "remarks": "Relationship to the CHARPOINTACTION table, used to find the CharPointAction associated with the MeasurePoint. The WHERE clause is: measurepoint.pointnum = charpointaction.pointnum and measurepoint.siteid = charpointaction.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "pointnum = :pointnum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Doclink table, used to find all document records for a given measurepoint. This will return 0 or more objects",
            "whereClause": "(ownertable = 'MEASUREPOINT' and ownerid = :MEASUREPOINTID)  or (ownertable='ASSET' and ownerid in (select assetuid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or  (ownertable='PM' and ownerid in (select pmuid from pm where (pmnum=:llpmnum or pmnum=:ulpmnum) and siteid=:siteid)) or (ownertable='MASTERPM' and ownerid in (select masterpmid from masterpm where masterpmnum=:llpmnum or masterpmnum=:ulpmnum)) ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS_ASSETID",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Doclink table, used to find all document records for a given measurepoint. This relationship includes asset-related doclinks using assetid (global) instead of assetuid (site-specific). This will return 0 or more objects.",
            "whereClause": "(ownertable = 'MEASUREPOINT' and ownerid = :MEASUREPOINTID)  or (ownertable='ASSET' and ownerid in (select assetid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or  (ownertable='PM' and ownerid in (select pmuid from pm where (pmnum=:llpmnum or pmnum=:ulpmnum) and siteid=:siteid)) or (ownertable='MASTERPM' and ownerid in (select masterpmid from masterpm where masterpmnum=:llpmnum or masterpmnum=:ulpmnum))",
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the MEASUREPOINT to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GENERATEWO",
            "target": "GENERATEWO",
            "remarks": "Relationship to the GenerateWO table, used to find the generate work order object for a given measure point. (no where clause). The resulting set will contain one object. Note: GenerateWO is a virtual table.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MP_LLJP",
            "target": "JOBPLAN",
            "remarks": "Relationship to the jobplan records, used to find the jobplans records for a given lljpnum and is system level.",
            "whereClause": "jpnum=:lljpnum and siteid is null and orgid is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MP_LLJPFORSITEORGSYS",
            "target": "JOBPLAN",
            "remarks": "Relationship to the jobplan object, used to find the jobplan for a given MeaurePoint's lower limit jobplan number. ( jpnum=:lljpnum and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null)) ).  The resulting set will contain one object",
            "whereClause": "jpnum=:lljpnum and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MP_ULJP",
            "target": "JOBPLAN",
            "remarks": "Relationship to the jobplan records, used to find the jobplans records for a given uljpnum and is system level.",
            "whereClause": "jpnum=:uljpnum and siteid is null and orgid is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MP_ULJPFORSITEORGSYS",
            "target": "JOBPLAN",
            "remarks": "Relationship to the jobplan object, used to find the jobplan for a given MeaurePoint's upper limit jobplan number. ( jpnum=:uljpnum and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null)) ).  The resulting set will contain one object",
            "whereClause": "jpnum=:uljpnum and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMETER",
            "target": "LOCATIONMETER",
            "remarks": "Relationship to the LocationMeter table, used to find the LocationMeter associated with the MeasurePoint. The WHERE clause is: locationmeter.metername = measurepoint.metername and locationmeter.location = measurepoint.location and locationmeter.siteid = measurepoint.siteid. The resulting set will contain zero or one object.",
            "whereClause": "metername = :metername and location = :location and siteid = :siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Location table, used to find the location for a given measure point. (locations.location = measurepoint.location). The resulting set will contain one object. Note: Location is a non-persistent attribute of the MeasurePoint object.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "MEASUREMENT",
            "target": "MEASUREMENT",
            "remarks": "Relationship to the the Measurement table, used to find all measurements for a given measure point. (measurement.pointnum = measurepoint.pointnum ). The resulting set will contain zero or more objects.",
            "whereClause": "pointnum = :pointnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MEASUREMENTRECENT",
            "target": "MEASUREMENT",
            "remarks": "Relationship to the Measurement table, used to find the most recent measurement for a given measure point. (measurement.pointnum = measurepoint.pointnum and measurement.siteid = measurepoint.siteid and measurement.measuredate in (select max(measurement.measuredate) from measurement where measurement.pointnum = measurepoint.pointnum and measurement.siteid = measurepoint.siteid)). The resulting set will contain zero or one object.",
            "whereClause": "pointnum = :pointnum and siteid = :siteid and measuredate in (select max(measurement.measuredate) from measurement where measurement.pointnum=:pointnum and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWMEASUREMENT",
            "target": "MEASUREMENT",
            "remarks": "Relationship to the Measurement table, used to get an empty measurement set so that a new measurement can be added for the MeasurePoint. The WHERE clause is: 1=2. The resulting set will contain zero objects.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREPOINTASSET",
            "target": "MEASUREPOINT",
            "remarks": "Relationship to the MeasurePoint table, used to check if a MeasurePoint with the same assetnum, metername and siteid already exists. The WHERE clause is: measurepoint.assetnum = measurepoint.assetnum and measureppoint.metername = measurepoint.metername and measurepoint.siteid = measurepoint.siteid. The resulting set will contain zero or one object.",
            "whereClause": "assetnum = :assetnum and metername = :metername and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREPOINTLOCATION",
            "target": "MEASUREPOINT",
            "remarks": "Relationship to the MeasurePoint table, used to check if a MeasurePoint with the same location, metername and siteid already exists. The WHERE clause is: measurepoint.location = measurepoint.location and measureppoint.metername = measurepoint.metername and measurepoint.siteid = measurepoint.siteid. The resulting set will contain zero or one object.",
            "whereClause": "location = :location and metername = :metername and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "target": "METER",
            "remarks": "Relationship to the Meter table, used to find the Meter objects associated with this MeasurePoint's MeterName. The WHERE clause is: meter.metername = measurepoint.metername. The resulting set will contain one object.",
            "whereClause": "metername = :metername",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MP_LLPM",
            "target": "PM",
            "remarks": "Relationship to the pm records, used to find the pms records for a given llpmnum and has masterpm.",
            "whereClause": "pmnum=:llpmnum and siteid=:siteid and masterpm is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PM",
            "target": "PM",
            "remarks": "Relationship to the PM table, used to find the preventive maintenance order for a given measure point. (pm.pmnum = measurepoint.pmnum ). The resulting set will contain one object.",
            "whereClause": "pmnum = :pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MP_ULPM",
            "target": "PM",
            "remarks": "Relationship to the pm records, used to find the pms records for a given ulpmnum and has masterpm.",
            "whereClause": "pmnum=:ulpmnum and siteid=:siteid and masterpm is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MPASSET_LLPM",
            "target": "PM",
            "remarks": "Relationship to the PM table, used to find the PMs associated with the MeasurePoint's Asset and Lower Limit PM. The WHERE clause is: pm.pmnum = measurepoint.llpmnum and pm.assetnum = measurepoint.assetnum and pm.siteid = measurepoint.siteid. The resulting set will contain one zero or one object.",
            "whereClause": "pmnum = :llpmnum and assetnum = :assetnum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MPASSET_ULPM",
            "target": "PM",
            "remarks": "Relationship to the PM table, used to find the PMs associated with the MeasurePoint's Asset and Upper Limit PM. The WHERE clause is: pm.pmnum = measurepoint.ulpmnum and pm.assetnum = measurepoint.assetnum and pm.siteid = measurepoint.siteid. The resulting set will contain one zero or one object.",
            "whereClause": "pmnum = :ulpmnum and assetnum = :assetnum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MPLOCATION_LLPM",
            "target": "PM",
            "remarks": "Relationship to the PM table, used to find the PMs associated with the MeasurePoint's Location and Lower Limit PM. The WHERE clause is: pm.pmnum = measurepoint.llpmnum and pm.location = measurepoint.location and pm.siteid = measurepoint.siteid. The resulting set will contain one zero or one object.",
            "whereClause": "pmnum = :llpmnum and location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MPLOCATION_ULPM",
            "target": "PM",
            "remarks": "Relationship to the PM table, used to find the PMs associated with the MeasurePoint's Location and Upper Limit PM. The WHERE clause is: pm.pmnum = measurepoint.ulpmnum and pm.location = measurepoint.location and pm.siteid = measurepoint.siteid. The resulting set will contain one zero or one object.",
            "whereClause": "pmnum = :ulpmnum and location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POINTWO",
            "target": "POINTWO",
            "remarks": "Relationship to the PointWO table, used to find all work orders for a given measure point. (pointwo.pointnum = measurepoint.pointnum). The resulting set will contain zero or more objects.",
            "whereClause": "pointnum = :pointnum and siteid=:siteid",
            "cardinality": "SINGLE"
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
            "remarks": "Relationship from the MEASUREPOINT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDERGENFROMJP",
            "target": "WORKORDER",
            "remarks": "Relationship to the Work Order table, used to get an empty set of work orders so that a new work order can be added. The WHERE clause is: 1=2. The resulting set will contain zero objects.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MEASUREPOINT",
            "source": "ASSET",
            "remarks": "Relationship to the MeasurePoint table, used to find all measure points for a given asset, and to validate the measurement table to ensure that only those measure points that have a corresponding reported measurement are returned. (measurepoint.assetnum = asset.assetnum and exists (select 1 from measurement where measurement.pointnum = measurepoint.pointnum)). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and exists (select 1 from measurement where measurement.pointnum = measurepoint.pointnum) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREPOINT_ALL",
            "source": "ASSET",
            "remarks": "Relationship to the Measurepoint table, used to find the measurepoints for a given asset. (measurepoint.assetnum = asset.assetnum and measurepoint.siteid = asset.siteid ). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MEASUREPOINT",
            "source": "ASSETMETER",
            "remarks": "Relationship to the MeasurePoint table, used to find all measure points associated with the current AssetMeter object's asset and meter combination. (measurepoint.metername = assetmeter.metername and measurepoint.siteid = assetmeter.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "metername=:metername and assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREPOINT",
            "source": "LOCATIONMETER",
            "remarks": "Relationship to the MeasurePoint table, used to find MeasurePoints associated with the LocationMeter. The WHERE clause is: measurepoint.location = locationmeter.location and measurepoint.metername = locationmeter.metername and measurepoint.siteid = locationmeter.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and metername = :metername and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREPOINT_ALL",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Measurepoint table, used to find the measurepoints for a given location. (measurepoint.location = locations.location and measurepoint.siteid = locations.siteid ). The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MEASUREPOINTASSET",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the MeasurePoint table, used to check if a MeasurePoint with the same assetnum, metername and siteid already exists. The WHERE clause is: measurepoint.assetnum = measurepoint.assetnum and measureppoint.metername = measurepoint.metername and measurepoint.siteid = measurepoint.siteid. The resulting set will contain zero or one object.",
            "whereClause": "assetnum = :assetnum and metername = :metername and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREPOINTLOCATION",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the MeasurePoint table, used to check if a MeasurePoint with the same location, metername and siteid already exists. The WHERE clause is: measurepoint.location = measurepoint.location and measureppoint.metername = measurepoint.metername and measurepoint.siteid = measurepoint.siteid. The resulting set will contain zero or one object.",
            "whereClause": "location = :location and metername = :metername and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREPOINT",
            "source": "METER",
            "remarks": "Relationship to the MeasurePoint table, used to find all MeasurePoints using this meter. (measurepoint.metername= meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREPOINT",
            "source": "PM",
            "remarks": "Relationship to the PM's Measurepoint records, used to find all the measurepoint records for a given PM. (measurepoint.pmnum = pm.pmnum). The resulting set will contain zero to many records.",
            "whereClause": "(llpmnum = :pmnum  or ulpmnum=:pmnum) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREPOINT",
            "source": "POINTWO",
            "remarks": "Relationship to the the MeasurePoint table, used to find the measure point for a given work order. ( measurepoint.pointnum = pointwo.pointnum ). The resulting set will contain one object.",
            "whereClause": "pointnum=:pointnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREPOINT",
            "source": "WORKORDER",
            "remarks": "Relationship to the MeasurePoint table, used to find the measurepoint pointname for a work orders measurepoint pointnum (workorder.pointnum = measurepoint.pointnum). The resulting set will contain one object.",
            "whereClause": "pointnum=:pointnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}