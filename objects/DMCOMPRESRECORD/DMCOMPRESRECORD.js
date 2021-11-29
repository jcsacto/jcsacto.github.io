mos = {
    "objectName": "DMCOMPRESRECORD",
    "className": "psdi.dm.DMCompResRecordSet",
    "description": "Database Comparison Result Record",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMCOMPRESRECORDID",
    "primaryKeyColumns": [
        "DMCOMPRESRECORDID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
    "columns": [
        {
            "attributeName": "DMCOMPRESULTID",
            "required": false,
            "persistent": true,
            "title": "Database Comparison Result Unique ID",
            "remarks": "Identifies the unique ID of a record from the DMCOMPRESULT object for which details are being stored in this table",
            "sameAsAttribute": "DMCOMPRESULTID",
            "sameAsObject": "DMCOMPRESULT"
        },
        {
            "attributeName": "LOCATTRIBUTENAME",
            "required": false,
            "persistent": true,
            "title": "Local Attribute Name",
            "remarks": "The name of the attribute in the source database.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "LOCTITLE",
            "required": false,
            "persistent": true,
            "title": "Local Title",
            "remarks": "The title of the attribute in the source database.",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "LOCVALUE",
            "required": false,
            "persistent": true,
            "title": "Local Value",
            "remarks": "The value of the attribute in the source database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMOTEATTRIBUTENAME",
            "required": false,
            "persistent": true,
            "title": "Remote Attribute Name",
            "remarks": "The name of the attribute in the target database.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "REMOTETITLE",
            "required": false,
            "persistent": true,
            "title": "Remote Title",
            "remarks": "The title of the attribute in the target database.",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "REMOTEVALUE",
            "required": false,
            "persistent": true,
            "title": "Remote Value",
            "remarks": "The value of the attribute in the target database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DMCOMPRESRECORDID",
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
            "name": "DMCOMPRESULT",
            "target": "DMCOMPRESULT",
            "remarks": "Many-to-one elationship from Database Comparison Record to Database Comparison Result",
            "whereClause": "dmcompresultid = :dmcompresultid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMCOMPRESRECORD",
            "source": "DMCOMPRESULT",
            "remarks": "One to many relationship between Database Comparison Result and Database Comparison Result Record",
            "whereClause": "dmcompresultid = :dmcompresultid",
            "cardinality": "MULTIPLE"
        }
    ]
}