mos = {
    "objectName": "MAXPRESENTATION",
    "className": "psdi.app.appsetup.MaxPresentationSet",
    "description": "MAXIMO Presentation Content",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXPRESENTATIONID",
    "primaryKeyColumns": [
        "APP"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXPRESENTATION",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The UI presentation defined for an application.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Application Name (Name of the .RUN file)",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "PRESENTATION",
            "required": true,
            "persistent": true,
            "title": "Presentation",
            "remarks": "MAXIMO Presentation Content",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXPRESENTATIONID",
            "required": true,
            "persistent": true,
            "title": "MAXPRESENTATIONID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMXMLAPP",
            "target": "MAXAPPS",
            "remarks": null,
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXPRESENTATION",
            "source": "MAXAPPS",
            "remarks": "Relationship to MaxPresentation table, used to find the MaxPresenation record for an App. ( maxpresentation.app = maxapps.app ). This relationship will find zero or 1 object.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        }
    ]
}