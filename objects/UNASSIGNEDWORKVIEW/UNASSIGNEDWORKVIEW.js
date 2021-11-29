mos = {
    "objectName": "UNASSIGNEDWORKVIEW",
    "className": "com.ibm.tivoli.maximo.map.UnassignedWorkViewSet",
    "description": "Add view for tables WORKORDER ASSIGNMENT WOSERVICEADDRESS",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "WONUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "UNASSIGNEDWORKVIEW",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "UNASSIGNEDWORKVIEW",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 178",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "UNASSIGNEDWORKVIEW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Unassgined Work Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "UNASSIGNEDWORKVIEW",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "UNASSIGNEDWORKVIEW",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "UNASSIGNEDWORKVIEW",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "UNASSIGNEDWORKVIEW",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, PARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Work Order",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "UNASSIGNEDWORKVIEW",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WORKORDERID",
            "required": true,
            "persistent": true,
            "title": "WORKORDERID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "WORKORDERID",
            "sameAsObject": "WORKORDER",
            "viewColumnName": "WORKORDERID",
            "tableName": "WORKORDER",
            "tableColumnName": "WORKORDERID"
        },
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Identifies the work order.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER",
            "viewColumnName": "WONUM",
            "tableName": "WORKORDER",
            "tableColumnName": "WONUM"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE",
            "viewColumnName": "SITEID",
            "tableName": "WORKORDER",
            "tableColumnName": "SITEID"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORGID",
            "tableName": "WORKORDER",
            "tableColumnName": "ORGID"
        },
        {
            "attributeName": "PARENT",
            "required": false,
            "persistent": true,
            "title": "Parent WO",
            "remarks": "Parent of the work order shown in the Work Order field. When this field is blank, the work order in the Work Order field is a top-level work order. To assign a work order to a parent, select Assign to New Parent from the Select Action menu.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER",
            "viewColumnName": "PARENT",
            "tableName": "WORKORDER",
            "tableColumnName": "PARENT"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of the work order, for example, in progress, waiting on material, waiting for approval, completed, or closed.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "WORKORDER",
            "viewColumnName": "STATUS",
            "tableName": "WORKORDER",
            "tableColumnName": "STATUS"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the work order. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "WORKORDER",
            "viewColumnName": "DESCRIPTION",
            "tableName": "WORKORDER",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Work Order Description",
            "sameAsAttribute": "DESCRIPTION_LONGDESCRIPTION",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SCHEDSTART",
            "required": false,
            "persistent": true,
            "title": "Scheduled Start",
            "remarks": "Date and time the work is scheduled to begin.",
            "sameAsAttribute": "SCHEDSTART",
            "sameAsObject": "WORKORDER",
            "viewColumnName": "SCHEDSTART",
            "tableName": "WORKORDER",
            "tableColumnName": "SCHEDSTART"
        },
        {
            "attributeName": "SCHEDFINISH",
            "required": false,
            "persistent": true,
            "title": "Scheduled Finish",
            "remarks": "Date and time the work is scheduled to be completed.",
            "sameAsAttribute": "SCHEDFINISH",
            "sameAsObject": "WORKORDER",
            "viewColumnName": "SCHEDFINISH",
            "tableName": "WORKORDER",
            "tableColumnName": "SCHEDFINISH"
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "Defines the Crew who will be copied to the work order created with this job plan.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW",
            "viewColumnName": "AMCREW",
            "tableName": "WORKORDER",
            "tableColumnName": "AMCREW"
        },
        {
            "attributeName": "CREWWORKGROUP",
            "required": false,
            "persistent": true,
            "title": "Crew Work Group",
            "remarks": "Resource pool that will perform the work order.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP",
            "viewColumnName": "CREWWORKGROUP",
            "tableName": "WORKORDER",
            "tableColumnName": "CREWWORKGROUP"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the asset.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET",
            "viewColumnName": "ASSETNUM",
            "tableName": "WORKORDER",
            "tableColumnName": "ASSETNUM"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Identifies the work order's location. This is not necessarily the asset's location, however, if an asset is entered, its location will default here",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS",
            "viewColumnName": "LOCATION",
            "tableName": "WORKORDER",
            "tableColumnName": "LOCATION"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": "HASLD",
            "sameAsObject": "WORKORDER",
            "viewColumnName": "HASLD",
            "tableName": "WORKORDER",
            "tableColumnName": "HASLD"
        },
        {
            "attributeName": "WORKTYPE",
            "required": false,
            "persistent": true,
            "title": "Work Type",
            "remarks": "Identifies the work order's type. Some example types are: preventive maintenance, corrective maintenance, emergency maintenace, capital project, and event report.",
            "sameAsAttribute": "WORKTYPE",
            "sameAsObject": "WORKTYPE",
            "viewColumnName": "WORKTYPE",
            "tableName": "WORKORDER",
            "tableColumnName": "WORKTYPE"
        },
        {
            "attributeName": "WOPRIORITY",
            "required": false,
            "persistent": true,
            "title": "Priority",
            "remarks": "Identifies the importance of the work order, from 0-999, where 0 is the lowest priority and 999 is the highest.",
            "sameAsAttribute": "WOPRIORITY",
            "sameAsObject": "WORKORDER",
            "viewColumnName": "WOPRIORITY",
            "tableName": "WORKORDER",
            "tableColumnName": "WOPRIORITY"
        },
        {
            "attributeName": "LATITUDEY",
            "required": false,
            "persistent": true,
            "title": "Latitude(Y)",
            "remarks": "The measurement, in degrees, that the service address is north or south of the equator. Latitude is used with longitude to locate a place on a map. You must specify latitude in decimal degrees.",
            "sameAsAttribute": "LATITUDEY",
            "sameAsObject": "SERVICEADDRESS",
            "viewColumnName": "LATITUDEY",
            "tableName": "WOSERVICEADDRESS",
            "tableColumnName": "LATITUDEY"
        },
        {
            "attributeName": "LONGITUDEX",
            "required": false,
            "persistent": true,
            "title": "Longitude(X)",
            "remarks": "The measurement, in degrees, that the service address is east or west of the prime meridian. Longitude is used with latitude to locate a place on a map. You must specify longitude in decimal degrees.",
            "sameAsAttribute": "LONGITUDEX",
            "sameAsObject": "SERVICEADDRESS",
            "viewColumnName": "LONGITUDEX",
            "tableName": "WOSERVICEADDRESS",
            "tableColumnName": "LONGITUDEX"
        },
        {
            "attributeName": "TARGSTARTDATE",
            "required": false,
            "persistent": true,
            "title": "Target Start",
            "remarks": "Date the work order is targeted to begin. If the work order is generated from a PM, the date is supplied by the PM work order generation process.",
            "sameAsAttribute": "TARGSTARTDATE",
            "sameAsObject": "WORKORDER",
            "viewColumnName": "TARGSTARTDATE",
            "tableName": "WORKORDER",
            "tableColumnName": "TARGSTARTDATE"
        },
        {
            "attributeName": "TARGCOMPDATE",
            "required": false,
            "persistent": true,
            "title": "Target Finish",
            "remarks": "Date the work order is targeted to be completed.",
            "sameAsAttribute": "TARGCOMPDATE",
            "sameAsObject": "WORKORDER",
            "viewColumnName": "TARGCOMPDATE",
            "tableName": "WORKORDER",
            "tableColumnName": "TARGCOMPDATE"
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": " wo.istask = 0 and sa.wonum is null and woclass in (select value from synonymdomain where maxvalue = 'WORKORDER' and domainid ='WOCLASS') and wo.wonum not in (select tw.parent from workorder tw where tw.siteid = wo.siteid and tw.istask = 1 and tw.parent = wo.wonum and tw.parent is not null group by (tw.parent) except (select tw.parent from workorder tw where tw.istask = 1 and tw.parent = wo.wonum and tw.siteid = wo.siteid and tw.wonum not in (select ta.wonum from assignment ta, workorder wwa where ta.siteid = wo.siteid and wwa.siteid = wo.siteid and wwa.parent = tw.parent and ta.status not in (select value from synonymdomain where maxvalue = 'WAITASGN' and domainid = 'ASSTAT')))) ",
        "viewselect": " wo.workorderid,wo.wonum ,wo.siteid,wo.orgid,wo.parent,wo.status,wo.description,wo.schedstart ,wo.schedfinish, wo.amcrew,wo.assetnum,wo.location,wo.crewworkgroup,wo.hasld,wo.worktype,wo.wopriority,ws.latitudey,ws.longitudex, wo.targstartdate, wo.targcompdate",
        "viewfrom": " workorder wo left outer join ( select a.wonum,a.siteid from assignment a where not exists (select 1 from assignment b where b.status in (select value from synonymdomain where maxvalue = 'WAITASGN' and domainid = 'ASSTAT') and a.wonum = b.wonum and a.orgid = b.orgid )) sa on (wo.wonum = sa.wonum and wo.siteid = sa.siteid) left outer join woserviceaddress ws on (ws.wonum = wo.wonum and ws.siteid = wo.siteid)"
    },
    "outgoingRelationships": [
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "WORKORDER for Unassigned WORKORDER",
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}