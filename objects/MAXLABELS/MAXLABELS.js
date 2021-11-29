mos = {
    "objectName": "MAXLABELS",
    "className": "psdi.app.appsetup.MaxLabelsSet",
    "description": "Maximo Locale Specific Labels",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLABELSID",
    "primaryKeyColumns": [
        "APP",
        "ID",
        "PROPERTY"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXLABELS",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Presentation labels defined for the application.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "ID",
            "required": true,
            "persistent": true,
            "title": "Id",
            "remarks": "Property id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROPERTY",
            "required": true,
            "persistent": true,
            "title": "Property",
            "remarks": "Property Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUE",
            "required": true,
            "persistent": true,
            "title": "Value",
            "remarks": "Value for the Label",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXLABELSID",
            "required": true,
            "persistent": true,
            "title": "MAXLABELSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXLABELS",
            "source": "MAXAPPS",
            "remarks": "Relationship to MaxLabels table, used to find all MaxLabels for an App. ( maxlabels.app = maxapps.app ). This relationship will find 1 or more objects.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        }
    ]
}