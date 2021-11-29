mos = {
    "objectName": "REPORTDSPARAM",
    "className": "psdi.app.report.ReportDSParamSet",
    "description": "Report Data Source Parameters",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTDSPARAMID",
    "primaryKeyColumns": [
        "DATASOURCENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
    "columns": [
        {
            "attributeName": "REPORTDSPARAMID",
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
            "sameAsAttribute": "DATASOURCENAME",
            "sameAsObject": "REPORTDS"
        },
        {
            "attributeName": "URL",
            "required": true,
            "persistent": true,
            "title": "Database URL",
            "remarks": "Database URL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DRIVER",
            "required": true,
            "persistent": true,
            "title": "Database Driver",
            "remarks": "Database Driver",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERNAME",
            "required": true,
            "persistent": true,
            "title": "Database User Name",
            "remarks": "Database User Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORD",
            "required": true,
            "persistent": true,
            "title": "Database User Password",
            "remarks": "Database User Password",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEMAOWNER",
            "required": false,
            "persistent": true,
            "title": "Database Schema Owner",
            "remarks": "Database Schema Owner",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "REPORTDSPARAM",
            "source": "REPORTDS",
            "remarks": "Relationship from Reportds to reportdsparam",
            "whereClause": "datasourcename=:datasourcename",
            "cardinality": "UNDEFINED"
        }
    ]
}