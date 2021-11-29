mos = {
    "objectName": "DOCTYPES",
    "className": "psdi.app.doclink.DoctypesSet",
    "description": "The Golden Document Type table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DOCTYPESID",
    "primaryKeyColumns": [
        "DOCTYPE"
    ],
    "logicalRelationships": [
        {
            "objectName": "DOCTYPES",
            "targetObject": "APPDOCTYPE",
            "parentKeys": "DOCTYPE",
            "targetKeys": "DOCTYPE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Document Type",
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
            "objectName": "DOCTYPES",
            "targetObject": "DOCINFO",
            "parentKeys": "DOCTYPE",
            "targetKeys": "DOCTYPE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Document Type",
            "longDescription": null
        },
        {
            "objectName": "DOCTYPES",
            "targetObject": "DOCLINKS",
            "parentKeys": "DOCTYPE",
            "targetKeys": "DOCTYPE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Document Type",
            "longDescription": null
        },
        {
            "objectName": "DOCTYPES",
            "targetObject": "LOCSYSTEM",
            "parentKeys": "DOCTYPE",
            "targetKeys": "DOCTYPE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Document Type",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "DOCTYPE",
            "required": true,
            "persistent": true,
            "title": "Document Folder",
            "remarks": "The document folder name assigned by a user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Value assigned by a user that describes the document folder.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULTFILEPATH",
            "required": false,
            "persistent": true,
            "title": "Default File Path",
            "remarks": "Default file path of the document type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": false,
            "title": "Application",
            "remarks": "APP",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOCTYPESID",
            "required": true,
            "persistent": true,
            "title": "DOCTYPESID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "APPDOCTYPE",
            "target": "APPDOCTYPE",
            "remarks": "Relationship to AppDoctype table. (appdoctype.doctype = doctypes.doctype). The result set will contain zero or more objects.",
            "whereClause": "doctype = :doctype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCINFO",
            "target": "DOCINFO",
            "remarks": "Relationship to Docinfo table. (docinfo.doctype = doctypes.doctype). The result set will contain zero or more objects.",
            "whereClause": "doctype = :doctype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to Doclinks (doclinks.doctype = doctypes.doctype).\tThe result set will contain zero or more objects.",
            "whereClause": "doctype = :doctype",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DOCTYPES",
            "source": "APPDOCTYPE",
            "remarks": "Relationship to Doctypes table. (doctypes.doctype = appdoctype.doctype). The result set will contain one object.",
            "whereClause": "doctype = :doctype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCTYPES",
            "source": "DOCINFO",
            "remarks": "Relationship to\tDoctypes table. (doctypes.doctype = docinfo.doctype). The result set will contain one object.",
            "whereClause": "doctype = :doctype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCTYPES",
            "source": "DOCLINKS",
            "remarks": "Relationship to Doctypes table. (doctypes.doctype = doclinks.doctype). The result set will contain one object.",
            "whereClause": "doctype = :doctype",
            "cardinality": "UNDEFINED"
        }
    ]
}