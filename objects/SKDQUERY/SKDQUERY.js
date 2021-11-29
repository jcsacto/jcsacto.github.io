mos = {
    "objectName": "SKDQUERY",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDQuerySet",
    "description": "Query associated with the project",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDQUERYID",
    "primaryKeyColumns": [
        "NAME",
        "OBJECTNAME",
        "QUERYNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDPROJECTASSTS",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "NAME, OBJECTNAME, QUERYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Project Assets",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDPROJECTOBJ",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "NAME, MAXOBJECTNAME, QUERYNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDPROJECTOBJ",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "NAME, OBJECTNAME, QUERYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Project Data Objects",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDQUERY",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "NAME, OBJECTNAME, P_QUERYNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDQUERY",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "NAME, P_OBJECTNAME, P_QUERYNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDQUERY",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "NAME, SKDOBJECTNAME, P_QUERYNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDQUERY",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "P_NAME, OBJECTNAME, P_QUERYNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDQUERY",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "P_NAME, P_OBJECTNAME, P_QUERYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Child Queries",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDQUERY",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "P_NAME, SKDOBJECTNAME, P_QUERYNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDQUERY",
            "parentKeys": "P_NAME, P_OBJECTNAME, P_QUERYNAME",
            "targetKeys": "NAME, OBJECTNAME, QUERYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Query",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "SKDQUERY",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDQUERY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 180",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDQUERY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO where to store data.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDQUERY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "P_OBJECTNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 195",
            "longDescription": null
        },
        {
            "objectName": "SKDPROJECT",
            "targetObject": "SKDQUERY",
            "parentKeys": "NAME",
            "targetKeys": "NAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Project Queries",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDQUERY",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "NAME, OBJECTNAME, P_QUERYNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDQUERY",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "NAME, P_OBJECTNAME, P_QUERYNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDQUERY",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "NAME, SKDOBJECTNAME, P_QUERYNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDQUERY",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "P_NAME, OBJECTNAME, P_QUERYNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDQUERY",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "P_NAME, P_OBJECTNAME, P_QUERYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Child Queries",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDQUERY",
            "parentKeys": "NAME, OBJECTNAME, QUERYNAME",
            "targetKeys": "P_NAME, SKDOBJECTNAME, P_QUERYNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "SKDQUERY",
            "targetObject": "SKDQUERY",
            "parentKeys": "P_NAME, P_OBJECTNAME, P_QUERYNAME",
            "targetKeys": "NAME, OBJECTNAME, QUERYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Query",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Data Source",
            "remarks": "Identifies the type of work/resource records that will be retrieved using the query.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "QUERYNAME",
            "required": true,
            "persistent": true,
            "title": "Query Name",
            "remarks": "Identifies the query that will be used to retrieve work/resource records. This value must be unique.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WHERECLAUSE",
            "required": true,
            "persistent": true,
            "title": "Where Condition",
            "remarks": "SQL expression that will be used to retrieve work/resource records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Scheduler Object Name",
            "remarks": "The location where data will be stored in Scheduler.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SKDQUERYID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the query.",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
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
            "attributeName": "EXPOBJECT",
            "required": false,
            "persistent": false,
            "title": "expobject",
            "remarks": "Expression builder Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "NAME",
            "required": true,
            "persistent": true,
            "title": "Project Name",
            "remarks": "Identifies the schedule. This value must be unique. The schedule consists of a group of work records and their required resources. The schedule can be viewed and edited in the Gantt View tab.",
            "sameAsAttribute": "NAME",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "LISTWHERE",
            "required": false,
            "persistent": true,
            "title": "Assets",
            "remarks": "List of Assets",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HEAVYITEMS",
            "required": true,
            "persistent": true,
            "title": "Heavy Items",
            "remarks": "Select Heavy Items only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "P_NAME",
            "required": false,
            "persistent": true,
            "title": "Project Name",
            "remarks": "Identifies the schedule.",
            "sameAsAttribute": "NAME",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "P_OBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Data Source",
            "remarks": "Identifies the parent object name.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "P_QUERYNAME",
            "required": false,
            "persistent": true,
            "title": "Query Name",
            "remarks": "Identifies the parent query name.",
            "sameAsAttribute": "QUERYNAME",
            "sameAsObject": "SKDQUERY"
        },
        {
            "attributeName": "LISTOBJECT",
            "required": false,
            "persistent": true,
            "title": "Data Objects",
            "remarks": "List Objects for the Work Query Restriction",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOPASSETONLY",
            "required": false,
            "persistent": false,
            "title": "Top Asset Only",
            "remarks": "Display the top asset data only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOPLOCATIONONLY",
            "required": false,
            "persistent": false,
            "title": "Top Location Only",
            "remarks": "Displays the top location data only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "To get the Assets for a Schedule's Assets table.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "EXPBUILDER",
            "target": "EXPBUILDER",
            "remarks": "Relationship for EXPBUILD",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "To get the Locations for a Schedule's Locations table.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "MAXOBJECT",
            "target": "MAXOBJECT",
            "remarks": "To get the MAXOBJECT for a Schedule's Query MAXOBJECT table.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTASSTS",
            "target": "SKDPROJECTASSTS",
            "remarks": "Relationship to the persistent object SKDProjectAssets from Schedule to get the Schedule Assets.",
            "whereClause": "name=:name and objectname=:objectname and queryname=:queryname",
            "cardinality": null
        },
        {
            "name": "SKDPROJECTOBJ",
            "target": "SKDPROJECTOBJ",
            "remarks": "Relationship to the persistent object SKDPROJECTOBJ from Schedule to get the Schedule Objects.",
            "whereClause": "name=:name and objectname=:objectname and queryname=:queryname",
            "cardinality": null
        },
        {
            "name": "SKDQUERYCHILDREN",
            "target": "SKDQUERY",
            "remarks": "Query to identify child queries.",
            "whereClause": "p_name=:name and p_objectname=:objectname and p_queryname=:queryname",
            "cardinality": null
        },
        {
            "name": "SKDQUERYPARENT",
            "target": "SKDQUERY",
            "remarks": "Query to identify parent query.",
            "whereClause": "name=:p_name and objectname=:p_objectname and queryname=:p_queryname",
            "cardinality": null
        },
        {
            "name": "WFEXPBUILDER",
            "target": "WFEXPBUILDER",
            "remarks": "Relationship for WFEXPBUILDER",
            "whereClause": "1=1",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "SKDOBJACTQUERY",
            "source": "SKDASSETLOCQUERY",
            "remarks": "Query to identify activities, which are common for the project.",
            "whereClause": "name=:name and objectname=:objectname and skdobjectname='SKDACTIVITY'",
            "cardinality": null
        },
        {
            "name": "SKDQUERY",
            "source": "SKDPROJECT",
            "remarks": "List of queries defined for a project",
            "whereClause": "name=:name",
            "cardinality": null
        },
        {
            "name": "SKDASSETQUERY",
            "source": "SKDPROJECT",
            "remarks": "Query to identify available resources for a Schedule.",
            "whereClause": "name=:name and skdobjectname='SKDAVAILABILITY'",
            "cardinality": null
        },
        {
            "name": "SKDASSTNULLQRY",
            "source": "SKDPROJECT",
            "remarks": "Gets all records where skobjectname is skdavailability for a project",
            "whereClause": "name=:name and skdobjectname='SKDAVAILABILITY' and objectname='ASSET'",
            "cardinality": null
        },
        {
            "name": "SKDTOOLITEM",
            "source": "SKDPROJECT",
            "remarks": "Query to identify toolitem available resources for a Schedule.",
            "whereClause": "name=:name and skdobjectname='SKDAVAILABILITY' and objectname='TOOLITEM'",
            "cardinality": null
        },
        {
            "name": "SKDRESQUERY",
            "source": "SKDPROJECT",
            "remarks": "Queries defined for Resources",
            "whereClause": "name=:name and skdobjectname = 'SKDRESOURCE'",
            "cardinality": null
        },
        {
            "name": "SKDWPTOOL",
            "source": "SKDPROJECT",
            "remarks": "Query to identify wptool available resources for a Schedule",
            "whereClause": "name=:name and skdobjectname='SKDAVAILABILITY'  and objectname='TOOLITEM'",
            "cardinality": null
        },
        {
            "name": "SKDLABORQUERY",
            "source": "SKDPROJECT",
            "remarks": "Query to identify available resources for a Schedule",
            "whereClause": "name=:name and skdobjectname='SKDAVAILABILITY'",
            "cardinality": null
        },
        {
            "name": "SKDLOCACTQUERY",
            "source": "SKDPROJECT",
            "remarks": "Query to identify activities.",
            "whereClause": "name=:name and skdobjectname='SKDACTIVITY' and objectname='LOCATIONS'",
            "cardinality": null
        },
        {
            "name": "SKDLOCNULLQRY",
            "source": "SKDPROJECT",
            "remarks": "Query to identify toolitem available resources for a Schedule.",
            "whereClause": "name=:name and skdobjectname='SKDAVAILABILITY' and objectname='LOCATIONS'",
            "cardinality": null
        },
        {
            "name": "SKDLOCQUERY",
            "source": "SKDPROJECT",
            "remarks": "Query to identify available resources for a Schedule.",
            "whereClause": "name=:name and skdobjectname='SKDAVAILABILITY'",
            "cardinality": null
        },
        {
            "name": "SKDOBJNULLQRY",
            "source": "SKDPROJECT",
            "remarks": "Gets all records where skobjectname is skdavailability for a project",
            "whereClause": "name=:name and skdobjectname ='SKDAVAILABILITY' and objectname='LABOR'",
            "cardinality": null
        },
        {
            "name": "SKDACTQUERY",
            "source": "SKDPROJECT",
            "remarks": "Query to identify activities",
            "whereClause": "name=:name and skdobjectname='SKDACTIVITY'",
            "cardinality": null
        },
        {
            "name": "SKDAMCREWQUERY",
            "source": "SKDPROJECT",
            "remarks": "Get all Crew Queries",
            "whereClause": "name=:name and objectname='AMCREW' and skdobjectname='SKDAVAILABILITY'",
            "cardinality": null
        },
        {
            "name": "SKDASSETACTQUERY",
            "source": "SKDPROJECT",
            "remarks": "Query to identify activities.",
            "whereClause": "name=:name and skdobjectname='SKDACTIVITY' and objectname='ASSET'",
            "cardinality": null
        },
        {
            "name": "SKDJOBTOOL",
            "source": "SKDPROJECT",
            "remarks": "Query to identify jobtool available resources for a Schedule",
            "whereClause": "name=:name and skdobjectname='SKDAVAILABILITY'  and objectname='TOOLITEM'",
            "cardinality": null
        },
        {
            "name": "SKDQUERYCHILDREN",
            "source": "SKDQUERY",
            "remarks": "Query to identify child queries.",
            "whereClause": "p_name=:name and p_objectname=:objectname and p_queryname=:queryname",
            "cardinality": null
        },
        {
            "name": "SKDQUERYPARENT",
            "source": "SKDQUERY",
            "remarks": "Query to identify parent query.",
            "whereClause": "name=:p_name and objectname=:p_objectname and queryname=:p_queryname",
            "cardinality": null
        }
    ]
}