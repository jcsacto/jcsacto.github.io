mos = {
    "objectName": "DMCOMPRESULT",
    "className": "psdi.dm.DMCompResultSet",
    "description": "Database Comparison Results",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMCOMPRESULTID",
    "primaryKeyColumns": [
        "COMPJOBNUM",
        "OBJECTNAME",
        "LOCALUNIQUEID",
        "REMOTEUNIQUEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DMCOMPRESULT",
            "targetObject": "DMCOMPRESRECORD",
            "parentKeys": "DMCOMPRESULTID",
            "targetKeys": "DMCOMPRESULTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Com Result",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "DMCFGGROUP",
            "targetObject": "DMCOMPRESULT",
            "parentKeys": "CFGOBJGROUP",
            "targetKeys": "CFGOBJGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Migration group used by Database Conmparison.",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMCOMPRESULT",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "CFGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure for Database Comparison result.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMCOMPRESULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ENTITYNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Database Table for Database Comparison result.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMCOMPRESULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object for Database Comparison result.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "COMPJOBNUM",
            "required": true,
            "persistent": true,
            "title": "Job Number",
            "remarks": "Identifies the specific compare job submitted by a user",
            "sameAsAttribute": "COMPJOBNUM",
            "sameAsObject": "DMCOMPJOB"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object",
            "remarks": "The object that was compared.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "LOCALUNIQUEID",
            "required": false,
            "persistent": true,
            "title": "Local Unique ID",
            "remarks": "The internal ID of the record in the source database that was compared.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMOTEUNIQUEID",
            "required": false,
            "persistent": true,
            "title": "Remote Unique ID",
            "remarks": "The internal ID of the record in the target database that was compared.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTITYNAME",
            "required": true,
            "persistent": true,
            "title": "Entity",
            "remarks": "The name of the database table or the view.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ISVIEW",
            "required": true,
            "persistent": true,
            "title": "Is View",
            "remarks": "If the check box is selected, the object is a view.",
            "sameAsAttribute": "ISVIEW",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "RESULT",
            "required": true,
            "persistent": true,
            "title": "Result",
            "remarks": "The result is one of the following values: Match, Different, Local only, or Remote only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CFGOBJECT",
            "required": true,
            "persistent": true,
            "title": "Migration Object",
            "remarks": "The name of the object structure that is associated to the object that was compared.",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "CFGOBJGROUP",
            "required": true,
            "persistent": true,
            "title": "Configuration Object Group",
            "remarks": "The group to which the configuration object belongs.",
            "sameAsAttribute": "CFGOBJGROUP",
            "sameAsObject": "DMCFGGROUP"
        },
        {
            "attributeName": "PRIMARYKEYS",
            "required": true,
            "persistent": true,
            "title": "Primary Key Information",
            "remarks": "A comma-separated list of the primary key columns and values of the object that was compared.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DMCOMPRESULTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMCOMPJOB",
            "target": "DMCOMPJOB",
            "remarks": "Relationship from Database Comparison Result to Database Comparison Job",
            "whereClause": "compjobnum = :compjobnum",
            "cardinality": null
        },
        {
            "name": "DMCOMPRESRECORD",
            "target": "DMCOMPRESRECORD",
            "remarks": "One to many relationship between Database Comparison Result and Database Comparison Result Record",
            "whereClause": "dmcompresultid = :dmcompresultid",
            "cardinality": "MULTIPLE"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMCOMPRESULT",
            "source": "DMCOMPJOB",
            "remarks": "One to many relationship from Database Comparison Job to Database Comparison Result",
            "whereClause": "compjobnum = :compjobnum",
            "cardinality": null
        },
        {
            "name": "DMCOMPRESULTTOCOLLECTION",
            "source": "DMCOMPJOB",
            "remarks": "Relationship to all records to add to a Collection.",
            "whereClause": "compjobnum=:compjobnum and result in (select value from synonymdomain where domainid = 'DMCOMPRESULT' and maxvalue not in ('MATCH', 'REMOTEONLY'))",
            "cardinality": null
        },
        {
            "name": "DMCOMPRESULT",
            "source": "DMCOMPRESRECORD",
            "remarks": "Many-to-one elationship from Database Comparison Record to Database Comparison Result",
            "whereClause": "dmcompresultid = :dmcompresultid",
            "cardinality": null
        }
    ]
}