mos = {
    "objectName": "DMCOLLTOOLDISP",
    "className": "psdi.dm.collection.virtual.DmCollToolDispSet",
    "description": "Non persistent object to show Add Migration Collection to Application dialog",
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
            "required": false,
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
            "title": "Add Support",
            "remarks": "Select or clear the check box to enable or disable the migration collections button in the application. If you enable the button, users must log off and log in before they can use it.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMCOLLAPPTOOLBAR",
            "target": "DMCOLLAPPTOOLBAR",
            "remarks": "Relationship from DMCOLLTOOLDISP to DMCOLLAPPTOOLBAR",
            "whereClause": "appname=:app",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}