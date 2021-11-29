mos = {
    "objectName": "MAXLOGMSGTOOLDISP",
    "className": "psdi.util.logging.MaxLogMSGToolDispSet",
    "description": "Non persistent object to show Add Custom Log Message to Application dialog",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "APP",
            "required": true,
            "persistent": false,
            "title": "Application",
            "remarks": "Application",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Application Name",
            "remarks": "Application Name",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "CURRSUPPINTERNAL",
            "required": false,
            "persistent": false,
            "title": "Current Support Internal",
            "remarks": "Current Support Internal",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENTSUPPORT",
            "required": false,
            "persistent": false,
            "title": "Current Support",
            "remarks": "Current Support",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDSUPPORT",
            "required": false,
            "persistent": false,
            "title": "Enabled",
            "remarks": "Select or clear the check box to enable or disable the Custom Log Message button in the application. If you enable the button, users must log off and log in before they can use it.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXLOGMSGTOOLBAR",
            "target": "MAXLOGMSGTOOLBAR",
            "remarks": "Relationship from MAXLOGMSGTOOLDISP to MAXLOGMSGTOOLBAR",
            "whereClause": "appname=:app",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}