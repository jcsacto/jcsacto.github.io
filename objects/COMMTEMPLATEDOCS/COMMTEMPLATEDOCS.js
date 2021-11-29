mos = {
    "objectName": "COMMTEMPLATEDOCS",
    "className": "psdi.common.commtmplt.CommTemplateDocsSet",
    "description": "Doclink folder for communication templates",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "COMMTEMPLATEDOCSID",
    "primaryKeyColumns": [
        "TEMPLATEID",
        "DOCTYPE",
        "APP"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "COMMTEMPLATEDOCS",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "TEMPLATEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template Documents",
            "longDescription": null
        },
        {
            "objectName": "DOCTYPES",
            "targetObject": "COMMTEMPLATEDOCS",
            "parentKeys": "DOCTYPE",
            "targetKeys": "DOCTYPE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Document Type",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "COMMTEMPLATEDOCS",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TEMPLATEID",
            "required": true,
            "persistent": true,
            "title": "Template",
            "remarks": "Communication template identifier.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "COMMTEMPLATEDOCSID",
            "required": true,
            "persistent": true,
            "title": "COMMTEMPLATEDOCSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOCTYPE",
            "required": true,
            "persistent": true,
            "title": "Document Folder",
            "remarks": "The name of a folder assigned by a user that is associated with this application.",
            "sameAsAttribute": "DOCTYPE",
            "sameAsObject": "DOCTYPES"
        },
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "The name of the record's application to which a user has attached document.",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "APPDOCTYPE",
            "target": "APPDOCTYPE",
            "remarks": "Relationship to get all a app doc type related to a COMMTEMPLATEDOCS record.",
            "whereClause": "doctype=:doctype and app=:app",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMMTMPLTDOCS",
            "source": "COMMTEMPLATE",
            "remarks": "Relationship to get all selected doc folders for the template.",
            "whereClause": "templateid=:templateid",
            "cardinality": "UNDEFINED"
        }
    ]
}