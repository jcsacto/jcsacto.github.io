mos = {
    "objectName": "VIEWSECURITYDET",
    "className": "psdi.app.report.virtual.ViewSecurityDetSet",
    "description": "This table displays the Viev Group Security",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "APPNAME",
        "GROUPNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "VIEWSECURITYDET",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application name.",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "VIEWSECURITYDET",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Security group.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "APPNAME",
            "required": false,
            "persistent": true,
            "title": "Application Name",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS",
            "viewColumnName": "APPNAME",
            "tableName": "REPORTAPPAUTH",
            "tableColumnName": "APPNAME"
        },
        {
            "attributeName": "GROUPNAME",
            "required": false,
            "persistent": true,
            "title": "Group",
            "remarks": "Group Identifier",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP",
            "viewColumnName": "GROUPNAME",
            "tableName": "REPORTAPPAUTH",
            "tableColumnName": "APPNAME"
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
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "application description",
            "remarks": "description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXAPPS",
            "viewColumnName": "DESCRIPTION",
            "tableName": "MAXAPPS",
            "tableColumnName": "APP"
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
    "viewinfo": {
        "autosect": false,
        "viewwhere": "1=1 group by groupname,appname",
        "viewselect": "select groupname, appname, (select description from maxapps where app=appname) as description",
        "viewfrom": "from reportappauth"
    },
    "outgoingRelationships": [
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relationship from VIEWSECURITYDET to MAXAPPS",
            "whereClause": "app=:appname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "VIEWSECURITYDET",
            "source": "VIEWSECURITYGR",
            "remarks": "Relationship from VIEWSECURITYGR to VIEWSECURITYDET",
            "whereClause": "groupname=:groupname",
            "cardinality": "UNDEFINED"
        }
    ]
}