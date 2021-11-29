mos = {
    "objectName": "SKDCOMPLIANCEWOLIST",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDComplianceWOListSet",
    "description": "Wororder List for the Schedule Compliance",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDCOMPLIANCEWOLISTID",
    "primaryKeyColumns": [
        "SKDPROJECTID",
        "WORKORDERID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SKDPROJECTID",
            "required": false,
            "persistent": true,
            "title": "Project Id",
            "remarks": "Project Id",
            "sameAsAttribute": "SKDPROJECTID",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "WORKORDERID",
            "required": false,
            "persistent": true,
            "title": "WO Unique Identifier",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "WORKORDERID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SKDCOMPLIANCEWOLISTID",
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
            "name": "LABTRANS",
            "target": "LABTRANS",
            "remarks": "Get schedule compliance for a project",
            "whereClause": "REFWO=:WONUM",
            "cardinality": null
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Get WO's for the project",
            "whereClause": "workorderid=:workorderid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "SKDCOMPLIANCEWOLIST",
            "source": "SKDPROJECT",
            "remarks": "Compliance WO List defined for a project in WO Activity",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        }
    ]
}