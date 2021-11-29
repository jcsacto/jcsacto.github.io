mos = {
    "objectName": "MAXLICCHGSTATUS",
    "className": "psdi.app.lictrack.virtual.MaxLicChangeStatusSet",
    "description": "License Usage Monitor",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "LICNUM",
            "required": true,
            "persistent": false,
            "title": "License Number",
            "remarks": "License Number.",
            "sameAsAttribute": "LICENSENUM",
            "sameAsObject": "MAXLICENSE"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": false,
            "title": "New Status",
            "remarks": "License status.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "MAXLICENSE"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo for status change",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATDATE",
            "required": false,
            "persistent": false,
            "title": "As of Date",
            "remarks": "Date of Status Change",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXLICCHGSTATUS",
            "source": "MAXLICENSE",
            "remarks": "Relation to non persistent object for changing license status.",
            "whereClause": "",
            "cardinality": null
        }
    ]
}