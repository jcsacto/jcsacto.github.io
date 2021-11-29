mos = {
    "objectName": "REPORTOSAUTH",
    "className": "psdi.app.report.ReportOSAuthSet",
    "description": "Security group authorizations for report object structures",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTOSAUTHID",
    "primaryKeyColumns": [
        "INTOBJECTNAME",
        "GROUPNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXGROUP",
            "targetObject": "REPORTOSAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Security Group with Access to Report Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "REPORTOSAUTH",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INTOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Report Object Structure",
            "remarks": "Name of the report object structure",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "GROUPNAME",
            "required": true,
            "persistent": true,
            "title": "Group",
            "remarks": "Security group having access to this report object structure",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "REPORTOSAUTHID",
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
            "name": "MAXGROUP",
            "target": "MAXGROUP",
            "remarks": "Relationship to the MAXGROUP table, used to find the security group information for this report object structure authorization.",
            "whereClause": "groupname = :groupname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPORTOSAUTH",
            "source": "MAXINTOBJECT",
            "remarks": "Relationship to the REPORTOSAUTH table, used to find the security group authorizations for this report object structure.",
            "whereClause": "intobjectname = :intobjectname",
            "cardinality": null
        }
    ]
}