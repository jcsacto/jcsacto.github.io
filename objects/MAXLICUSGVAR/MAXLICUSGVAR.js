mos = {
    "objectName": "MAXLICUSGVAR",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Usage Summary by license",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLICUSGVARID",
    "primaryKeyColumns": [
        "LICENSENUM",
        "MONITOREDDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXLICENSE",
            "targetObject": "MAXLICUSGVAR",
            "parentKeys": "LICENSENUM",
            "targetKeys": "LICENSENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo License",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LICENSENUM",
            "required": true,
            "persistent": true,
            "title": "License Num",
            "remarks": "License Num",
            "sameAsAttribute": "LICENSENUM",
            "sameAsObject": "MAXLICENSE"
        },
        {
            "attributeName": "MONITOREDDATE",
            "required": true,
            "persistent": true,
            "title": "Monitored Date",
            "remarks": "The latest date for which the cron task collected license usage data. For example, if the cron task collected data for Monday through Friday, this field shows Friday's date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTITLEDLICQTY",
            "required": true,
            "persistent": true,
            "title": "Entitled Qty",
            "remarks": "Number of entitled licenses",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPLOYEDLICQTY",
            "required": true,
            "persistent": true,
            "title": "Deployed Qty",
            "remarks": "Number of deployed licenses",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VARIANCE",
            "required": true,
            "persistent": true,
            "title": "Variance",
            "remarks": "Difference between Entitled quantity and deployed quantity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USAGESTATUS",
            "required": true,
            "persistent": true,
            "title": "Usage Status",
            "remarks": "Usage Status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISLATEST",
            "required": true,
            "persistent": true,
            "title": "Is Latest",
            "remarks": "Is this latest record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Create Date",
            "remarks": "Timestamp when this record was created",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDATEDATE",
            "required": true,
            "persistent": true,
            "title": "Update Date",
            "remarks": "Last update timestamp",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXLICUSGVARID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXLICUSGVAR",
            "source": "MAXLICENSE",
            "remarks": "Relationship from MAXLICENSE to MAXLICUSGVAR table.",
            "whereClause": "licensenum=:licensenum and islatest=1",
            "cardinality": "MULTIPLE"
        }
    ]
}