mos = {
    "objectName": "MPWOGENCRONPARAM",
    "className": "psdi.app.measurement.virtual.MPWOGenCronParamSet",
    "description": "Measure Point WOGen crontask param validation mbo",
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
            "attributeName": "EMAILTO",
            "required": false,
            "persistent": false,
            "title": "E-mail To",
            "remarks": "Email to' address",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOGFILE",
            "required": false,
            "persistent": false,
            "title": "Log File",
            "remarks": "Log file path",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "specific organization for the Measure Point Wogen Crontask instance",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "specific site for the Measure Point Wogen Crontask instance",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}