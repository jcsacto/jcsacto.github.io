mos = {
    "objectName": "LABOR",
    "className": "psdi.app.labor.LaborSet",
    "description": "The LABOR Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "LABORID",
    "primaryKeyColumns": [
        "ORGID",
        "LABORCODE"
    ],
    "logicalRelationships": [
        {
            "objectName": "LABOR",
            "targetObject": "AMCREWLABOR",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "AMCREWWOLAB",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "ATTENDANCE",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "INVRESERVE",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, ISSUETO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Issued To",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "JOBLABOR",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "JOBPLAN",
            "parentKeys": "LABORCODE",
            "targetKeys": "LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lead on this Job Plan",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "LABORAUTH",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "LABORCERTHIST",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "LABORCRAFTRATE",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "LABORQUAL",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Qualifications for this Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "LABORQUALSTATUS",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor Qualification Status History",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "LABORSTATUS",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "LABORWORKZONE",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "LABTRANS",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "LBSLABORVIEW",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "PPLABORRATE",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "SLROUTE",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, WOLABLNK",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "CALCORGID, WOLABLNK",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, WOLABLNK",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor Link",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "CALCORGID, WOLABLNK",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, WOLABLNK",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lead",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "CALCORGID, WOLABLNK",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, WOLABLNK",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lead",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "CALCORGID, WOLABLNK",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, WOLABLNK",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WPITEM",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, ISSUETO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Issued To",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WPLABOR",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WPMATERIAL",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, ISSUETO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Issued To",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WPSERVICE",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, ISSUETO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Issued To",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WPTOOL",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, ISSUETO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Issued To",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, LABINVENTORYLOC",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 99",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 100",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, WORKLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 101",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "LABINVENTORYSITE, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 102",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "LABINVENTORYSITE, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 104",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 106",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, LABINVENTORYLOC",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 107",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, WORKLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 109",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITE, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 110",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITE, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 112",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "LABINVENTORYSITE, LABINVENTORYLOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor Inventory Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "LABINVENTORYSITE, WORKLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 86",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITE, LABINVENTORYLOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 87",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITE, WORKLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LABOR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LABOR",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Record for Labor",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "LABOR",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LABOR",
            "parentKeys": "SITEID",
            "targetKeys": "ENDLOCSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 119",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LABOR",
            "parentKeys": "SITEID",
            "targetKeys": "STARTLOCSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 121",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LABOR",
            "parentKeys": "SITEID",
            "targetKeys": "LABINVENTORYSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor Inventory Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LABOR",
            "parentKeys": "SITEID",
            "targetKeys": "WORKSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Site",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LABORCODE",
            "required": true,
            "persistent": true,
            "title": "Labor",
            "remarks": "Identifier of the labor record.  This field must be unique within an organization. When you save a labor record, this field becomes read-only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTEDHRS",
            "required": true,
            "persistent": true,
            "title": "Regular Hours",
            "remarks": "Year-to-date labor hours reported for this labor code. This field is updated each time labor hours are reported either on the Labor Reporting tab in the Labor Reporting application, on the Actual Labor tab in the Work Order application, or in the Quick Reporting application. You can reset this value with the Zero Year to Date Hours action.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "YTDOTHRS",
            "required": true,
            "persistent": true,
            "title": "Premium Hours",
            "remarks": "Year-to-date premium hours reported for this labor code. This field is updated each time premium labor hours are reported either on the Labor Reporting tab in the Labor Reporting application, on the Actual Labor table in the Work Order Tracking application, or Quick Reporting application in the Work Orders module. You can reset this value with the Zero Year to Date Hours action.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "YTDHRSREFUSED",
            "required": true,
            "persistent": true,
            "title": "Overtime Refused",
            "remarks": "Number of overtime hours in the year that this labor code refused. This default value is 0. You can reset this value with the Zero Year to Date Hours action.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AVAILFACTOR",
            "required": true,
            "persistent": true,
            "title": "Availability Factor",
            "remarks": "% to use during resource scheduling",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWID",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "ID for a given crew within a craft",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Work Type",
            "remarks": "The type of work that this labor code can perform or is typically assigned.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKLOCATION",
            "required": false,
            "persistent": true,
            "title": "Work Location",
            "remarks": "The location where this labor code works. The work location maybe used to select a labor code for work order assignments. This location's internal labor account is used to set the GL Control Account on all crafts for this labor that are not associated with a vendor. The GL Control Account, in turn, is used as the credit GL account for the labor transaction.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The name of the organization that is associated with this labor code.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SHIFT",
            "required": false,
            "persistent": false,
            "title": "Shift",
            "remarks": "SHIFT",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AVAILABILITY",
            "required": false,
            "persistent": false,
            "title": "Available Hours",
            "remarks": "AVAILABILITY",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ATTENDANCE",
            "required": false,
            "persistent": false,
            "title": "Reported Hours",
            "remarks": "ATTENDANCE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAILYTIME",
            "required": false,
            "persistent": false,
            "title": "Reported Hours",
            "remarks": "DAILYTIME",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONID",
            "required": true,
            "persistent": true,
            "title": "Person",
            "remarks": "Identifier of the person's record that is associated with this labor code.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "The current status of this labor code. On inserting a new record, this field defaults to the active status.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKSITE",
            "required": false,
            "persistent": true,
            "title": "Work Site",
            "remarks": "The site where this labor code works.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "LABINVENTORYSITE",
            "required": false,
            "persistent": true,
            "title": "Labor Inventory Site",
            "remarks": "The site of this labor code's inventory location.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "LABINVENTORYLOC",
            "required": false,
            "persistent": true,
            "title": "Labor Inventory Location",
            "remarks": "The inventory location associated with this labor code. The labor inventory location is used when inventory is issued to or transferred to a labor.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "LABORID",
            "required": true,
            "persistent": true,
            "title": "LABORID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY1",
            "required": false,
            "persistent": false,
            "title": "Day 1",
            "remarks": "Available hours for this labor code on the scheduled work date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY2",
            "required": false,
            "persistent": false,
            "title": "Day 2",
            "remarks": "Available hours for this labor code on the day after the scheduled work date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY3",
            "required": false,
            "persistent": false,
            "title": "Day 3",
            "remarks": "Available hours for this labor code on the second day after the scheduled work date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY4",
            "required": false,
            "persistent": false,
            "title": "Day 4",
            "remarks": "Available hours for this labor code on the third day after the scheduled work date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY5",
            "required": false,
            "persistent": false,
            "title": "Day 5",
            "remarks": "Available hours for this labor code on the forth day after the scheduled work date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY6",
            "required": false,
            "persistent": false,
            "title": "Day 6",
            "remarks": "Available hours for this labor code on the fifth day after the scheduled work date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY7",
            "required": false,
            "persistent": false,
            "title": "Day 7",
            "remarks": "Available hours for this labor code on the sixth day after the scheduled work date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERCENTALLOC",
            "required": false,
            "persistent": false,
            "title": "Percent Allocated",
            "remarks": "Percentage of the labor code's available hours that has been allocated.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALNUM",
            "required": false,
            "persistent": false,
            "title": "Calendar",
            "remarks": "Non Persistent calnum field.",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "SHIFTNUM",
            "required": false,
            "persistent": false,
            "title": "Shift",
            "remarks": "Non persistent shiftnum",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
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
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": false,
            "title": "Start Time",
            "remarks": "Start time of available hours",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGNED",
            "required": true,
            "persistent": false,
            "title": "Assigned",
            "remarks": "Indicates if labor with no availability during the date range is included in the available labor list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWWORKGROUP",
            "required": false,
            "persistent": true,
            "title": "Crew Work Group",
            "remarks": "The identifier of the person group that is used in the Crews applications. You define crew work groups in the Person Groups application.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "LBSDATAFROMWO",
            "required": true,
            "persistent": true,
            "title": "Save Location with Work Order",
            "remarks": "If the audit history is enabled, and you select the Use Labor Location checkbox, the labor location is stored with the work order data in the LBSLOCATION table. To enable the audit history, configure the Database Configuration application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LBSINTERVAL",
            "required": false,
            "persistent": true,
            "title": "Location Refresh (in seconds)",
            "remarks": "The interval to refresh the location of a labor or a crew. For example, if you enter 5, the GPS location is refreshed every five seconds.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTLOCATION",
            "required": false,
            "persistent": true,
            "title": "Start Location",
            "remarks": "The first location in a street-level route.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STARTLOCSITEID",
            "required": false,
            "persistent": true,
            "title": "Start location site id",
            "remarks": "Start Location SiteId",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ENDLOCATION",
            "required": false,
            "persistent": true,
            "title": "End Location",
            "remarks": "The last location in a street-level route.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ENDLOCSITEID",
            "required": false,
            "persistent": true,
            "title": "End location site id",
            "remarks": "End Location SiteId",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": false,
            "title": "Start Date",
            "remarks": "The start date for the date range of the assigned work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "The end date for the date range of the assigned work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWASSIGNMENT",
            "required": true,
            "persistent": false,
            "title": "Crew Assignment",
            "remarks": "Indicates if labor is assigned a crew for any future assignment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWENDDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "The end date for the date range of the assigned work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWSTARTDATE",
            "required": false,
            "persistent": false,
            "title": "Start Date",
            "remarks": "The start date for the date range of the assigned work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ADDRESS",
            "target": "ADDRESS",
            "remarks": "Relationship to the Address table. Used to find out Company specified by the ShipToLocation attribute. (Address.addresscode=Labor.shiptolocation). The resultset will contain at most 1 object.",
            "whereClause": "addresscode = :shiptolocation and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AMCREWLABOR",
            "target": "AMCREWLABOR",
            "remarks": "Relationship to the AMCREWLABOR table,used to find crews where this labor is assigned to.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWLABOR_LABOR",
            "target": "AMCREWLABOR",
            "remarks": "Relationship to the AMCREWLABOR table,used to find crews where this labor is assigned to.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid and enddate is not null",
            "cardinality": null
        },
        {
            "name": "ASSIGNMENT",
            "target": "ASSIGNMENT",
            "remarks": "Relationship to the ASSIGNMENT table.  (assignment.laborcode=labor.laborcode.)  The resulting set will contain one or more objects.",
            "whereClause": "laborcode=:laborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ATTENDANCE",
            "target": "ATTENDANCE",
            "remarks": "Relationship to the Attendance table.Used to find out Attendance for the Labor. (Attendance.laborcode=Labor.laborcode). The resultset will contain more than 1 object.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CREATESERVREC",
            "target": "CREATESERVREC",
            "remarks": "Relationship to the nonpersistent parameter set to create service receipts.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFINEFILTER",
            "target": "DEFINEFILTER",
            "remarks": "Relationship to the nonpersistent parameter set to apply  define filters.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Doclinks table.Used to find out DocLinks for the Labor. (keytable = 'LABOR' and keycolumn = 'LABORCODE' and keyvalue = :laborcode$DOCLINKS.KEYVALUE). The resultset will contain zero, one or more than 1 object.",
            "whereClause": "(ownertable='LABOR' and ownerid=:laborid) or (ownertable='CRAFT' and ownerid=(select craftid from craft where craft=(select craft from laborcraftrate where laborcode = :laborcode and defaultcraft = :yes and orgid = :orgid) and orgid = :orgid)) or (ownertable='PERSON' and ownerid=(select personuid from person where personid=:personid))  ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the LABOR to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EMAIL",
            "target": "EMAIL",
            "remarks": "Relationship to the EMAIL table.  (email.personid=labor.personid.)  The resulting set will contain one or more objects.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLAN",
            "target": "JOBPLAN",
            "remarks": "Relationship to the JOBPLAN table.  (jobplan.laborcode=labor.laborcode.)  The resulting set will contain one or more objects.",
            "whereClause": "laborcode=:laborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CREWWGLIST",
            "target": "LABAMCREWWG",
            "remarks": "Relationship to the non-persistent parameter set for crew workgroup.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "LABCHANGESTATUS",
            "target": "LABCHANGESTATUS",
            "remarks": "Relationship to the non-persistent LABCHANGESTATUS table. (No where clause.)  The resulting set will contain zero objects.  Note: this relationship is used only for the change status action page to give the status of the current labor.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABINVLOCCHANGE",
            "target": "LABINVLOCCHANGE",
            "remarks": "Relationship to the non-persistent LABINVLOCCHANGE table.  For access to the non-persistent table only.  (No whereclause.)  Returns 0 objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORCERTHIST",
            "target": "LABORCERTHIST",
            "remarks": "Returns a set of the laborcerthists associated with this labor, where laborcode=laborcode and orgid=:orgid.  This will return 0 or more objects.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORCRAFTRATE",
            "target": "LABORCRAFTRATE",
            "remarks": "Relationship to the Laborcraft table where laborcode and orgid match. (laborcraftrate.laborcode=labor.laborcode and laborcraftrate.orgid = labor.orgid.)  This will return 0 or more objects.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LABORCRAFTRATEDEFAULT",
            "target": "LABORCRAFTRATE",
            "remarks": "Relationship to the Laborcraft table where laborcode and orgid match and defaultcraft is Y. (laborcraftrate.laborcode=labor.laborcode and laborcraftrate.orgid = labor.orgid and laborcraftrate.defaultcraft=Y.)  This will return 1 object.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid and defaultcraft=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORQUAL",
            "target": "LABORQUAL",
            "remarks": "Relationship to the LaborQual table where laborquals laborcode is equal to labors laborcode. (laborqual.laborcode=labor.laborcode AND orgid=:orgid).  This relationship will return 0 or more objects.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LABORQUALSTATUS",
            "target": "LABORQUALSTATUS",
            "remarks": "Returns a set of the laborqualstatuses associated with this labor, where laborcode=laborcode.  This will return 0 or more objects.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORSTATUS",
            "target": "LABORSTATUS",
            "remarks": "Relationship to the LABORSTATUS table.  (laborstatus.laborcode=labor.laborcode.)  The resulting set will contain one or more objects.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORWORKZONE",
            "target": "LABORWORKZONE",
            "remarks": "Relationship for all the workzones the labor is a part of",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "DEFLABORWORKZONE",
            "target": "LABORWORKZONE",
            "remarks": "Relationship to the default workzone the labor is a part of",
            "whereClause": "laborcode=:laborcode and orgid=:orgid and defaultzone=1",
            "cardinality": null
        },
        {
            "name": "LABTRANS",
            "target": "LABTRANS",
            "remarks": "Relationship to the LabTrans table. Used to find out the Set of LaborTransactions for the Labor. (LabTrans.laborcode=Labor.laborcode). The resultset will contain 0 or more objects.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LBSLOCATION",
            "target": "LBSLOCATION",
            "remarks": "Relationship to find the lbslocation from a labor",
            "whereClause": "refobject='LABOR' and key1 =:orgid and key2 =:laborcode",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table.Used to find out Locations for the Labor. (Locations.location=Labor.laborcode). The resultset will contain zero, one or more objects.",
            "whereClause": "location=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDLOCATION",
            "target": "LOCATIONS",
            "remarks": "Get end location for Labor",
            "whereClause": "location=:endlocation and siteid=:endlocsiteid",
            "cardinality": null
        },
        {
            "name": "LABINVENTORYLOC",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Location table.  Returns the location object for this labors labinventoryloc and organization.  (labor.labinventorysite=site.siteid and labor.orgid=site.orgid and labor.labinventoryloc=locations.location).  This returns zero or one object.",
            "whereClause": "siteid=:labinventorysite and orgid=:orgid and location=:labinventoryloc",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTLOCATION",
            "target": "LOCATIONS",
            "remarks": "Get start location for Labor",
            "whereClause": "location=:startlocation and siteid=:startlocsiteid",
            "cardinality": null
        },
        {
            "name": "WORKLOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the locations table.  Used to find the location that is the labors work location, in the labors worksite.  The resultset will contain 0 or 1 object.",
            "whereClause": "location=:worklocation and siteid=:worksite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Relationship to the Person table.  Used to find the Person specidied by the personid attribute.  (Person.personid = Labor.personid).  The resulting set wil contain zero or 1 object",
            "whereClause": "personid=:personid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "PERSONCAL",
            "target": "PERSONCAL",
            "remarks": "Relationship to the PERSONCAL table on personid. (personcal.personid=labor.personid and personcal.orgid=labor.orgid.)  This will return 0 or 1 item.",
            "whereClause": "personid=:personid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONCALNOORG",
            "target": "PERSONCAL",
            "remarks": "Relationship to the personcal table ignoring organization.  Will return 0 or more objects.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CAL",
            "target": "PERSONCAL",
            "remarks": "Relationship to the PersonCal table. (labor.personid=personcal.personid AND labor.orgid=personcal.orgid).  Will return the associated Personcal object. This relaitonship will return 0 or 1 objects.",
            "whereClause": "personid=:personid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PHONE",
            "target": "PHONE",
            "remarks": "Relationship to the PHONE table.  (phone.personid=labor.personid.)  The resulting set will contain one or more objects.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PPLABORRATE",
            "target": "PPLABORRATE",
            "remarks": "Relationship to the pplaborrate table to find the on laborcode, craft, and orgid.  Relationship will return 0 or more objects.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "target": "SITE",
            "remarks": "Relationship to the Site table. Used to find out Company specified by the ShipToLocation attribute. (Site.SiteID = Labor.SiteID AND Site.OrgID = Labor.OrgID). The resultset will contain at most 1 object.",
            "whereClause": "siteid = :primarysiteid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKSITE",
            "target": "SITE",
            "remarks": "Relationship to the Site table.  Returns the site object for this labors worksite and organization.  (labor.worksite=site.siteid and labor.orgid=site.orgid).  This returns zero or one object.",
            "whereClause": "siteid=:worksite and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABINVENTORYSITE",
            "target": "SITE",
            "remarks": "Relationship to the Site table.  Returns the site object for this labors worksite and organization.  (labor.laborinventorysite=site.siteid and labor.orgid=site.orgid).  This returns zero or one object.",
            "whereClause": "siteid=:labinventorysite and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship from Labor to Synonymdomain to get the description of the status.",
            "whereClause": "domainid='LABORSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause).",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the INVOICELINE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "ZEROYTD",
            "target": "ZEROYTD",
            "remarks": "Relationship to the nonpersistent parameter set to apply  zero year to date.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LABOR",
            "source": "AMCREWLABOR",
            "remarks": "Relationship between AMCREWLABOR and LABOR tables.",
            "whereClause": "laborcode = :laborcode and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "LABOR",
            "source": "AMCREWLABUNRESTRICTED",
            "remarks": "Relationship between AMCREWLABUNRESTRICTED and LABOR tables.",
            "whereClause": "laborcode = :laborcode and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "TOLABOR",
            "source": "AMCREWLABUNRESTRICTED",
            "remarks": "Relationship between AMCREWLABUNRESTRICTED and LABOR tables.",
            "whereClause": "laborcode = :tolaborcode and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "WOLABLABOR",
            "source": "AMCREWWOLAB",
            "remarks": "Relationship from table AMCREWWOLAB to LABOR.",
            "whereClause": "laborcode=:laborcode",
            "cardinality": null
        },
        {
            "name": "LABOR",
            "source": "ASSIGNMENT",
            "remarks": "Relationship to the Labor table, used to find the labor for a given assignment. (labor.laborcode=assignment.laborcode). This resulting set will contain zero or one object.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVC_ENTERBY",
            "source": "INVOICE",
            "remarks": null,
            "whereClause": "laborcode=:enterby and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "source": "JOBLABOR",
            "remarks": "Relationship to the Job Labor's labor records, used to find the labor records for a given Job Labor. (labor.laborcode=joblabor.laborcode). The resulting set will contain zero or one record.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "source": "LABORAUTH",
            "remarks": "LaborAuth to Labor, will be one record",
            "whereClause": "orgid = :orgid and laborcode = :laborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "source": "LABORCRAFTRATE",
            "remarks": "Relationship to the Labor table on laborcode. (labor.laborcode=laborcraftrate.laborcode and labor.orgid=laborcraftrate.orgid.)  This will return 0 or more objects ",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "source": "LABORQUAL",
            "remarks": "Relationship to the Labor table where laborquals laborcode is equal to labors laborcode. (laborqual.laborcode=labor.laborcode AND orgid=:orgid).  This relationship will return 0 or more objects.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORFORORGID",
            "source": "LABORVIEW",
            "remarks": "Relationship to the Labor table to only show laborcode for the same orgid",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "source": "LABORWORKZONE",
            "remarks": "Relationship from laborworkzone to labor",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "LABOR",
            "source": "LABTRANS",
            "remarks": "Relationship to the Labor table. Used to find out Labor for the LabTrans (Labor.laborcode=LabTrans.laborcode). The resultset will contain at most  1 object.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "SINGLE"
        },
        {
            "name": "LABREP_LABTRANSENTERBY_LABOR",
            "source": "LABTRANSENTERBY",
            "remarks": "Relationship from labtransenterby to labor ",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "source": "LBSLABORVIEW",
            "remarks": "Relationship to find the labor from an lbslaborview",
            "whereClause": "orgid = :key1 and laborcode = :key2",
            "cardinality": null
        },
        {
            "name": "LABINVENTORYLOC",
            "source": "LOCATIONS",
            "remarks": "Relationship to the labor table where labor.labinventoryloc=locations.location and labor.orgid=locations.orgid.  This will return 0 or more objects.",
            "whereClause": "labinventoryloc=:location and labinventorysite=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR_COURIERLABOR",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Labor table, used to find the persons indentified as this labor location via the storelocation attribute. (locations.location = labor.storelocation OR locations.location = labor.worklocation). The resulting set will contain zero or more objects. A location of type LABOR is a logical location where inventory balances are tracked but the location is not bound to a physical place. Materials can be transferred to the labor location(person) from a storeroom and the labor location(person) can tranfer materials to a storeroom. The location can not be deleted if such records exist.",
            "whereClause": "labinventoryloc = :location or worklocation = :location and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR_OPERATING",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Labor table, used to find the persons who work at the location. (locations.location =labor.worklocation). The resulting set will contain zero or more objects. If there are people working at the operating location, the location can not be deleted.",
            "whereClause": " worklocation = :location and worksite=:siteid and orgid=:orgid",
            "cardinality": "SINGLE"
        },
        {
            "name": "LABOR_STOREROOM",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Labor table, used to find the persons whose default storeroom is this location. (locations.location =labor.worklocation OR locations.location = labor.defaultstoreloc). The resulting set will contain zero or more objects. If the storeroom location is referenced as the persons' default storeroom, it can not be deleted.",
            "whereClause": "worklocation = :location and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORBILLTO",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Labor table, used to find the location's default bill to labor code (contact information). (labor.laborcode = locations.billtolaborcode). This relationship will find zero or one object.",
            "whereClause": "laborcode = :billtolaborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORSHIPTO",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Labor table, used to find the location's default ship to labor code (contact information). (labor.laborcode = locations.shiptolaborcode). This relationship will find zero or one object.",
            "whereClause": "laborcode = :shiptolaborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "source": "MR",
            "remarks": "Relationship to the Labor table, used to find all requestedby records for a given material requisition. (labor.laborcode = mr.requestedby). The resulting set will contain zero or more objects.",
            "whereClause": "laborcode = :requestedby and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MR_REQUESTEDBY",
            "source": "MR",
            "remarks": null,
            "whereClause": "laborcode =:requestedby and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "source": "NOTIFICATIONWF",
            "remarks": null,
            "whereClause": "laborcode = :laborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "source": "PERSON",
            "remarks": "Relationship to the labor table, used to find the labor code for this person. (maxuser.personid = person.personid). The resulting set will contain zero or more objects. The labor records are across different organizations.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPTEAM_LABOR",
            "source": "PERSONGROUPTEAM",
            "remarks": "Return the labor for a persongroupteam resppartygroup member",
            "whereClause": "laborcode=:resppartygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPTEAM_LABORALTERNATE",
            "source": "PERSONGROUPTEAM",
            "remarks": "Return the labor for a persongroupteam resppart (alternates) member",
            "whereClause": "laborcode=:respparty",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PURCHASEAGENT",
            "source": "PO",
            "remarks": "Relationship to the Labor table, used to find all purchase agent records for a given purchase order. (labor.laborcode = po.purchaseagent). The resulting set will contain one object.",
            "whereClause": "laborcode = :purchaseagent and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTOATTN",
            "source": "PO",
            "remarks": "Relationship to the Labor table, used to find all ship to attention records for a given purchase order. (labor.laborcode = po.shiptoattn). The resulting set will contain one object.",
            "whereClause": "laborcode = :shiptoattn and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BILLTOATTN",
            "source": "PO",
            "remarks": "Relationship to the Labor table, used to find all bill to attention records for a given purchase order. (labor.laborcode = po.billtoattn). The resulting set will contain one object.",
            "whereClause": "laborcode = :billtoattn and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BILLTOATTN",
            "source": "PR",
            "remarks": "Relationship to the Labor table, used to find all bill to attention records for a given purchase requisition. (labor.laborcode = pr.billtoattn). The resulting set will contain one or more objects.",
            "whereClause": "laborcode = :billtoattn and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTOATTN",
            "source": "PR",
            "remarks": "Relationship to the Labor table, used to find all ship to attention records for a given purchase requisition. (labor.laborcode = pr.shiptoattn). The resulting set will contain one objects.",
            "whereClause": "laborcode = :shiptoattn and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PR_SUPERVISOR",
            "source": "PR",
            "remarks": null,
            "whereClause": "laborcode=:supervisor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PR_REQUESTEDBY",
            "source": "PR",
            "remarks": null,
            "whereClause": "laborcode =:requestedby and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ_REQUESTEDBY",
            "source": "RFQ",
            "remarks": null,
            "whereClause": "laborcode =:requestedby and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ_ENTERBY",
            "source": "RFQ",
            "remarks": null,
            "whereClause": "laborcode=:enterby and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPLYTOATTN",
            "source": "RFQ",
            "remarks": "Relationship to the Labor table, used to find all reply to attention records for a given request for quotation. (labor.laborcode = rfq.replytoattn). The resulting set will contain one object.",
            "whereClause": "laborcode = :replytoattn and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTOATTN",
            "source": "RFQ",
            "remarks": "Relationship to the Labor table, used to find all ship to attention records for a given request for quotation. (labor.laborcode = rfq.shiptoattn). The resulting set will contain one object.",
            "whereClause": "laborcode = :shiptoattn and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORBILLTO",
            "source": "SITE",
            "remarks": "Relationship to the Labor table, used to find the site's default bill to labor code (contact information). (labor.orgid = site.orgid and labor.laborcode = site.billtolaborcode). This relationship will find zero or one object.",
            "whereClause": "orgid = :orgid and laborcode = :billtolaborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORSHIPTO",
            "source": "SITE",
            "remarks": "Relationship to the Labor table, used to find the site's default ship to labor code (contact information). (labor.orgid = site.orgid and labor.laborcode = site.shiptolaborcode). This relationship will find zero or one object.",
            "whereClause": "orgid = :orgid and laborcode = :shiptolaborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "source": "SKDPROJECT",
            "remarks": "For Graphical Assignment Report",
            "whereClause": "orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "LABOR",
            "source": "SLROUTE",
            "remarks": "Get Crew for SLROUTE",
            "whereClause": "orgid=:orgid and laborcode=:laborcode",
            "cardinality": null
        },
        {
            "name": "LABOR",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "laborcode=:reportedby and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "source": "TOOLTRANS",
            "remarks": "Relationshipt to the labor table to get the labor for the given tooltrans labor.",
            "whereClause": "laborcode=:plusctechnician and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "LABOR",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship to the Labor Table; used to find the Laborcodes that are appear in a set of WMAssignments.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LEADCRAFT",
            "source": "WORKORDER",
            "remarks": "Relationship to the Labor record referenced by the work order's LeadCraft attribute, used to find the labor for a work order. (Labor.laborcode = Workorder.leadcraft). This resulting set will contain zero or one object.",
            "whereClause": "laborcode=:leadcraft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_SUPERVISOR",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "laborcode=:supervisor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_REPORTEDBY",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "laborcode=:reportedby and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_LEADCRAFT",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "laborcode=:leadcraft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SUPERVISOR",
            "source": "WORKORDER",
            "remarks": "Relationship to the Labor table, used to find the labor(supervisor) for a work order. (Labor.laborcode = Workorder.Supervisor). This resulting set will contain zero or one object.",
            "whereClause": "laborcode=:supervisor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "source": "WPLABOR",
            "remarks": "Relationship to the Labor table, used to find the labor for a given work plan labor. (labor.laborcode=wplabor.laborcode). This resulting set will contain one object.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "SINGLE"
        }
    ]
}