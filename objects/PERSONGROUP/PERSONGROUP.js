mos = {
    "objectName": "PERSONGROUP",
    "className": "psdi.app.persongroup.PersonGroupSet",
    "description": "person group app main table replaces persongroups",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "PERSONGROUPID",
    "primaryKeyColumns": [
        "PERSONGROUP"
    ],
    "logicalRelationships": [
        {
            "objectName": "PERSONGROUP",
            "targetObject": "AMCREW",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CONTACTGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group to Contact when area is affected.",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "BBOARDAUDIENCE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group that should see the bulletin.",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "COMMITGROUP",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "COMMODITIES",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Owning Commodity",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "INCIDENT",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "INCIDENT",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "JOBLABOR",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "JOBPLAN",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Resource pool that will perform the work order.",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "JOBPLAN",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group of work orders created with this job plan.",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "JOBPLAN",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group of work orders created with this job plan.",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "JOBPLAN",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group, copied to Work Order.",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "JOBTASK",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group of Work",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "JOBTASK",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group of Work",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "JOBTASK",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Group for Work",
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
            "objectName": "PERSONGROUP",
            "targetObject": "LABTRANS",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "PERSON",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person''s default Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "PERSONGROUPTEAM",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "PERSONGROUPVIEW",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group",
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
            "objectName": "PERSONGROUP",
            "targetObject": "PROBLEM",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "PROBLEM",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "SITE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CONTACTGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site Contact Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "SKDACTIVITYQBE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Activity QBE Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "SKDACTIVITYQBE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Activity QBE Person Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "SKDACTIVITYQBE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Activity QBE Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Extra Capacity Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "SR",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "SR",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 23",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "TICKET",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Assigned Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "TICKET",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "TKOWNERHISTORY",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assigned Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "TKOWNERHISTORY",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "TKTEMPLATE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assigned Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "TKTEMPLATE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "TKTEMPLTACTIVITY",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assigned Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "TKTEMPLTACTIVITY",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "TLOAMASSETGRP",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group",
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
            "objectName": "PERSONGROUP",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ACREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WMASSIGNTMP",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WMMATCH",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOACTIVITY",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOACTIVITY",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assigned Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOACTIVITY",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOACTIVITY",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOCHANGE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assigned Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOCHANGE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOCHANGE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOCHANGE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOGEN",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 60",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOGEN",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOGEN",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "GROUPOWNER",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOGEN",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 43",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOOWNERHISTORY",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assigned Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WOOWNERHISTORY",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group owning Work Order",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WORELEASE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assigned Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WORELEASE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WORELEASE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WORELEASE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assigned Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WORKVIEW",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assigned Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WORKVIEW",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WPLABOR",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "PERSONGROUP",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PERSONGROUPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONGROUP",
            "required": true,
            "persistent": true,
            "title": "Person Group",
            "remarks": "Identifier of the person group record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the person group record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "long description for description attribute",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CC",
            "required": true,
            "persistent": false,
            "title": "cc",
            "remarks": "Recipient type is CC.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BCC",
            "required": true,
            "persistent": false,
            "title": "bcc",
            "remarks": "Recipient type is BCC.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDTO",
            "required": true,
            "persistent": false,
            "title": "To",
            "remarks": "Recipient typs is To.",
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
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISCREWWORKGROUP",
            "required": true,
            "persistent": true,
            "title": "Crew Work Group",
            "remarks": "Specifies whether the work group can be used in Crew applications. If the check box is  selected, the resource can be used. If the check box is cleared (the default), the resource cannot be used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PERSONGROUPUSEDBYCOMMODITIES",
            "target": "COMMODITIES",
            "remarks": "returns any rows if used by commodities",
            "whereClause": "(ownergroup = :persongroup)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPUSEDBYCOMMTEMPLATE",
            "target": "COMMTMPLTSENDTO",
            "remarks": "returns any rows if used by communications templates",
            "whereClause": "type ='GROUP' and sendtovalue=:persongroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Allow DOCLINK retrieval via the persongroupid",
            "whereClause": "ownertable = 'PERSONGROUP' and ownerid = :persongroupid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPUSEDBYJOBPLAN",
            "target": "JOBPLAN",
            "remarks": "returns any rows if used by pms",
            "whereClause": "((persongroup = :persongroup) or (ownergroup = :persongroup))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPUSEDBYJOBTASK",
            "target": "JOBPLAN",
            "remarks": "Relationship to find jobtask that are assigned to the person",
            "whereClause": "status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue='ACTIVE') and jpnum in (select jpnum from jobtask where jobplan.jpnum=jobtask.jpnum and jobplan.pluscrevnum=jobtask.pluscjprevnum and (jobplan.orgid=jobtask.orgid or (jobplan.orgid is null and jobtask.orgid is null)) and (jobplan.siteid=jobtask.siteid or (jobplan.siteid is null and jobtask.siteid is null)) and (ownergroup = :persongroup))",
            "cardinality": null
        },
        {
            "name": "DMPERSONGRPLONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "long description record for person group",
            "whereClause": "ldkey=:persongroupid and ldownertable = 'PERSONGROUP'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLPERSONGROUPTEAMDEFAULTS",
            "target": "PERSON",
            "remarks": "select person info for group default",
            "whereClause": "personid in (select respparty from persongroupteam where (persongroup=:persongroup and (groupdefault = :yes)))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLPEOPLEINPERSONGROUP",
            "target": "PERSON",
            "remarks": "Relationship to person to return all people in a group",
            "whereClause": "personid in (select respparty from persongroupteam where persongroup=:persongroup)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYPERSONGROUPPERSONS",
            "target": "PERSON",
            "remarks": "REMARKS select person info for all primary persons in the persongroup",
            "whereClause": "personid in (select respparty from persongroupteam where persongroup=:persongroup and resppartygroup=respparty)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONCAL",
            "target": "PERSONCAL",
            "remarks": "Enable lookup=\"personcal\" to work",
            "whereClause": ":respparty=personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUP_PRIMARYMEMBERS",
            "target": "PERSONGROUPTEAM",
            "remarks": "Allow persongroup to retrieve primary members in person group team",
            "whereClause": "persongroup=:persongroup and resppartygroup=respparty",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPS_DEFAULTASSIGNEE",
            "target": "PERSONGROUPTEAM",
            "remarks": "Relationship to persongroupteam used to find all members of group",
            "whereClause": "persongroup=:persongroup and (groupdefault=:yes or orgdefault=:yes or sitedefault=:yes)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLPERSONGROUPTEAM",
            "target": "PERSONGROUPTEAM",
            "remarks": "Relationship to persongroupteam used to find all members of group",
            "whereClause": "persongroup=:persongroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPUSEDBYPM",
            "target": "PM",
            "remarks": "returns any rows if used by pms",
            "whereClause": "(persongroup=:persongroup  or ownergroup= :persongroup) ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPUSEDBYSITE",
            "target": "SITE",
            "remarks": "returns any rows if used by site",
            "whereClause": "(contactgroup = :persongroup)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPUSEDBYTICKET",
            "target": "TICKET",
            "remarks": "returns any rows if used by tickets",
            "whereClause": "(ownergroup = :persongroup) and (historyflag=:no)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPUSEDBYTKTEMPLATE",
            "target": "TKTEMPLATE",
            "remarks": "returns any rows if used by ticket templates",
            "whereClause": "(ownergroup = :persongroup)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPUSEDBYTKTEMPLATEACTIVITY",
            "target": "TKTEMPLTACTIVITY",
            "remarks": "Relationship from persongroup to tktemplateactivity ",
            "whereClause": "(ownergroup = :persongroup)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPS_WORKORDER",
            "target": "WORKORDER",
            "remarks": "find non history  workorders with persongroupid",
            "whereClause": "(persongroup=:persongroup  or ownergroup= :persongroup) and historyflag=:no",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "BBGROUPDESC",
            "source": "BBOARDAUDIENCE",
            "remarks": null,
            "whereClause": "persongroup = :persongroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUP",
            "source": "COMMITGROUP",
            "remarks": "Get person group for the commitgroup.",
            "whereClause": "persongroup=:persongroup",
            "cardinality": null
        },
        {
            "name": "COMMLOG_PERSONGROUP",
            "source": "COMMLOG",
            "remarks": "Relationship to get PERSONGROUP set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTACTPERSONGROUP",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "persongroup = :ownergroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLTSENDTO_GROUP",
            "source": "COMMTMPLTSENDTO",
            "remarks": "Relationship to the persongroups table, used to get the person group records",
            "whereClause": "persongroup=:sendtovalue",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUP",
            "source": "MAXROLE",
            "remarks": "Relationship to get persongroup record for a role.",
            "whereClause": "persongroup=:value",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPS",
            "source": "SITE",
            "remarks": "Relationship to the PersonGroup table, used to find the person group record for the site contact group. (persongroup.persongroupid = site.contactgroup). This relationship will find zero or one object.",
            "whereClause": "persongroup = :contactgroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUP",
            "source": "SKDPROJECT",
            "remarks": "Get group for the project.",
            "whereClause": "persongroup not in (select persongroup from commitgroup where projectname=:name)",
            "cardinality": null
        },
        {
            "name": "WORKORDERPERSONGROUP",
            "source": "SKDWOMODIFYDETAIL",
            "remarks": "Relationship to persongroup to return the workorders persongroup",
            "whereClause": "persongroup = :persongroup",
            "cardinality": null
        },
        {
            "name": "TLOAMPERSONGROUP",
            "source": "TLOAMASSETGRP",
            "remarks": "Relationship between the TLOAMASSETGRP and PERSONGROUP tables",
            "whereClause": "persongroup = :persongroup",
            "cardinality": null
        },
        {
            "name": "TLOAMDEFLTPERSONGRP",
            "source": "TLOAMASSETGRPDFLT",
            "remarks": "Relationship between the TLOAMASSETGRPDFLT and PERSONGROUP tables",
            "whereClause": "persongroup = :dfltpersongroup",
            "cardinality": null
        },
        {
            "name": "WORKORDERPERSONGROUP",
            "source": "WORKORDER",
            "remarks": "Relationship to persongroup to return the workorders persongroup",
            "whereClause": "persongroup = :persongroup",
            "cardinality": "UNDEFINED"
        }
    ]
}