mos = {
    "objectName": "REPORTDIALOGDET",
    "className": "psdi.app.report.virtual.ReportDialogDetSet",
    "description": "To Show the Report Security details dialog",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "APPNAME",
        "GROUPNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "APPNAME",
            "required": false,
            "persistent": false,
            "title": "Application Name",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "GROUPNAME",
            "required": false,
            "persistent": false,
            "title": "Group",
            "remarks": "Group identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELECTALL",
            "required": true,
            "persistent": false,
            "title": "All",
            "remarks": "Select All",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUERY",
            "required": true,
            "persistent": false,
            "title": "External Ad Hoc Report",
            "remarks": "External Ad Hoc Report",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORT",
            "required": true,
            "persistent": false,
            "title": "External Report",
            "remarks": "External Report",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESPREADSHEET",
            "required": true,
            "persistent": false,
            "title": "External spreadsheet",
            "remarks": "External spreadsheet",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BIRT",
            "required": true,
            "persistent": false,
            "title": "BIRT",
            "remarks": "BIRT",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CRYSTAL",
            "required": true,
            "persistent": false,
            "title": "Crystal",
            "remarks": "Crystal",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CUSTOM",
            "required": true,
            "persistent": false,
            "title": "Custom",
            "remarks": "Custom",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COGNOS",
            "required": true,
            "persistent": false,
            "title": "Cognos",
            "remarks": "Cognos",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXGROUP",
            "target": "MAXGROUP",
            "remarks": "Relationship to MAXGROUP from REPORTDIALOGGR",
            "whereClause": "groupname=:groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP_SEC",
            "target": "MAXGROUP",
            "remarks": "Relationship ised in setting report security",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "REPORTDIALOGDET",
            "source": "MAXAPPS",
            "remarks": "REPORTDIALOGDET Relationship from MAXAPPS to REPORTDIALOGDET",
            "whereClause": "appname = :app",
            "cardinality": "UNDEFINED"
        }
    ]
}