mos = {
    "objectName": "REPORTDS",
    "className": "psdi.app.report.ReportDSSet",
    "description": "Report Data Source Information",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTDSID",
    "primaryKeyColumns": [
        "DATASOURCENAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "REPORTDS",
            "targetObject": "REPORTDSPARAM",
            "parentKeys": "DATASOURCENAME",
            "targetKeys": "DATASOURCENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 1",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "REPORTDSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATASOURCENAME",
            "required": true,
            "persistent": true,
            "title": "Data Source Name",
            "remarks": "Data Source Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Data Source Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "REPORTDSPARAM",
            "target": "REPORTDSPARAM",
            "remarks": "Relationship from Reportds to reportdsparam",
            "whereClause": "datasourcename=:datasourcename",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}