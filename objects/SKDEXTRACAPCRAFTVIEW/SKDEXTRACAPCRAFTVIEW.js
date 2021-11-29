mos = {
    "objectName": "SKDEXTRACAPCRAFTVIEW",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDExtraCapCraftViewSet",
    "description": "View that combines SKDWORKPLANEXTCAP and CRAFTSKILL.",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "CRAFT",
        "SKILLLEVEL1",
        "ORGID1"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CRAFT",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Scheduler Extra Capacity Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID1",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Scheduler Extra Capacity Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID1",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL1, ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL1, ORGID1",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "RESOURCENAME, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Scheduler Extra Capacity Craft Itemnum",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID1",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Item Set",
            "longDescription": null
        },
        {
            "objectName": "SKDWORKPLANEXTCAP",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "SKDWORKPLANEXTCAPID",
            "targetKeys": "SKDWORKPLANEXTCAPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Scheduler Extra Capacity Object",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RANK",
            "required": true,
            "persistent": true,
            "title": "Skill Level Rank",
            "remarks": "The rank ascribed to a craft's skill level; 1 being the lowest and 5 being the highest.",
            "sameAsAttribute": "RANK",
            "sameAsObject": "CRAFTSKILL",
            "viewColumnName": "RANK",
            "tableName": "CRAFTSKILL",
            "tableColumnName": "RANK"
        },
        {
            "attributeName": "RANK1",
            "required": false,
            "persistent": true,
            "title": "Rank",
            "remarks": "The rank associated with the skill level of a particular craft. The rank is in ascending order, 1 being the lowest.",
            "sameAsAttribute": "RANK",
            "sameAsObject": "CRAFTSKILL",
            "viewColumnName": "RANK1",
            "tableName": "SKDWORKPLANEXTCAP",
            "tableColumnName": "RANK"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description Field",
            "sameAsAttribute": "DESCRIPTION_LONGDESCRIPTION",
            "sameAsObject": "CRAFTSKILL"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORGID",
            "tableName": "SKDWORKPLANEXTCAP",
            "tableColumnName": "ORGID"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": "HASLD",
            "sameAsObject": "CRAFTSKILL",
            "viewColumnName": "HASLD",
            "tableName": "CRAFTSKILL",
            "tableColumnName": "HASLD"
        },
        {
            "attributeName": "SKILLNAME",
            "required": false,
            "persistent": true,
            "title": "Skill Name",
            "remarks": "Unique ID of the skill.",
            "sameAsAttribute": "SKILLNAME",
            "sameAsObject": "SKDWORKPLANEXTCAP",
            "viewColumnName": "SKILLNAME",
            "tableName": "SKDWORKPLANEXTCAP",
            "tableColumnName": "SKILLNAME"
        },
        {
            "attributeName": "SKDPROJECTID",
            "required": false,
            "persistent": true,
            "title": "Project Id",
            "remarks": "Unique identifier of the Schedule.",
            "sameAsAttribute": "SKDPROJECTID",
            "sameAsObject": "SKDPROJECT",
            "viewColumnName": "SKDPROJECTID",
            "tableName": "SKDWORKPLANEXTCAP",
            "tableColumnName": "SKDPROJECTID"
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "Additional Capacity Required",
            "remarks": "The amount of extra resources that are required in order to complete the work during the specified time period.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "SKDWORKPLANEXTCAP",
            "viewColumnName": "VALUE",
            "tableName": "SKDWORKPLANEXTCAP",
            "tableColumnName": "VALUE"
        },
        {
            "attributeName": "STANDARDRATE",
            "required": false,
            "persistent": false,
            "title": "Standard Rate",
            "remarks": "The standard rate established for a particular skill level.",
            "sameAsAttribute": "STANDARDRATE",
            "sameAsObject": "CRAFTRATE"
        },
        {
            "attributeName": "CRAFT",
            "required": true,
            "persistent": true,
            "title": "Craft",
            "remarks": "Craft",
            "sameAsAttribute": "CRAFT",
            "sameAsObject": "CRAFT",
            "viewColumnName": "CRAFT",
            "tableName": "CRAFTSKILL",
            "tableColumnName": "CRAFT"
        },
        {
            "attributeName": "RESOURCENAME",
            "required": false,
            "persistent": true,
            "title": "Resource Name",
            "remarks": "Identifies the craft, tool, or crew that is required to complete the work.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM",
            "viewColumnName": "RESOURCENAME",
            "tableName": "SKDWORKPLANEXTCAP",
            "tableColumnName": "RESOURCENAME"
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "Identifies the end date and time when this additional resource is required.",
            "sameAsAttribute": "ENDDATE",
            "sameAsObject": "SKDWORKPLANEXTCAP",
            "viewColumnName": "ENDDATE",
            "tableName": "SKDWORKPLANEXTCAP",
            "tableColumnName": "ENDDATE"
        },
        {
            "attributeName": "SKDWORKPLANEXTCAPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": "SKDWORKPLANEXTCAPID",
            "sameAsObject": "SKDWORKPLANEXTCAP",
            "viewColumnName": "SKDWORKPLANEXTCAPID",
            "tableName": "SKDWORKPLANEXTCAP",
            "tableColumnName": "SKDWORKPLANEXTCAPID"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Identifies the item set.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS",
            "viewColumnName": "ITEMSETID",
            "tableName": "SKDWORKPLANEXTCAP",
            "tableColumnName": "ITEMSETID"
        },
        {
            "attributeName": "SKILLLEVEL",
            "required": false,
            "persistent": true,
            "title": "Skill Level",
            "remarks": "Identifies the level of skill or expertise in a particular craft.",
            "sameAsAttribute": "SKILLLEVEL",
            "sameAsObject": "CRAFTSKILL",
            "viewColumnName": "SKILLLEVEL",
            "tableName": "SKDWORKPLANEXTCAP",
            "tableColumnName": "SKILLLEVEL"
        },
        {
            "attributeName": "CRAFTSKILLID",
            "required": true,
            "persistent": true,
            "title": "CRAFTSKILLID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "CRAFTSKILLID",
            "sameAsObject": "CRAFTSKILL",
            "viewColumnName": "CRAFTSKILLID",
            "tableName": "CRAFTSKILL",
            "tableColumnName": "CRAFTSKILLID"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the craft's skill level.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "CRAFTSKILL",
            "viewColumnName": "DESCRIPTION",
            "tableName": "CRAFTSKILL",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "SKILLLEVEL1",
            "required": false,
            "persistent": true,
            "title": "Skill Level",
            "remarks": "The level of skill or expertise in a particular craft.",
            "sameAsAttribute": "SKILLLEVEL",
            "sameAsObject": "CRAFTSKILL",
            "viewColumnName": "SKILLLEVEL1",
            "tableName": "CRAFTSKILL",
            "tableColumnName": "SKILLLEVEL"
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE",
            "viewColumnName": "LANGCODE",
            "tableName": "CRAFTSKILL",
            "tableColumnName": "LANGCODE"
        },
        {
            "attributeName": "ORGID1",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORGID1",
            "tableName": "CRAFTSKILL",
            "tableColumnName": "ORGID"
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Identifies the type of resource that is required. Options include craft, tool, or crew.",
            "sameAsAttribute": "TYPE",
            "sameAsObject": "SKDWORKPLANEXTCAP",
            "viewColumnName": "TYPE",
            "tableName": "SKDWORKPLANEXTCAP",
            "tableColumnName": "TYPE"
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Identifies the start date and time when this additional resource is required.",
            "sameAsAttribute": "STARTDATE",
            "sameAsObject": "SKDWORKPLANEXTCAP",
            "viewColumnName": "STARTDATE",
            "tableName": "SKDWORKPLANEXTCAP",
            "tableColumnName": "STARTDATE"
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "skdworkplanextcap.resourcename=craftskill.craft and skdworkplanextcap.orgid=craftskill.orgid  and (skdworkplanextcap.skilllevel=craftskill.skilllevel or (craftskill.skilllevel is null and skdworkplanextcap.skilllevel is null)) "
    },
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDEXTRACAPCRAFTVIEW",
            "source": "SKDPROJECT",
            "remarks": "Relationship to the SKDExtraCapCraftView table, used to find the extra capacity for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        }
    ]
}