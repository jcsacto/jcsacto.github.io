mos = {
    "objectName": "DOCINFO",
    "className": "psdi.app.doclink.DocinfoSet",
    "description": "Info for each individual document",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DOCINFOID",
    "primaryKeyColumns": [
        "DOCINFOID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DOCINFO",
            "targetObject": "COMMLOGDOCS",
            "parentKeys": "DOCINFOID",
            "targetKeys": "DOCINFOID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Log Documents",
            "longDescription": null
        },
        {
            "objectName": "DOCINFO",
            "targetObject": "DOCLINKS",
            "parentKeys": "DOCINFOID",
            "targetKeys": "DOCINFOID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Document Information",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "DMSAPISETTING",
            "targetObject": "DOCINFO",
            "parentKeys": "DMSNAME",
            "targetKeys": "DMSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "API Settings",
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
            "objectName": "LANGUAGE",
            "targetObject": "DOCINFO",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DOCINFO",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DOCINFO",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DOCUMENT",
            "required": true,
            "persistent": true,
            "title": "Document",
            "remarks": "Value assigned by a user that identifies the document.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Value assigned by a user that describes the document.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPLICATION",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "Native application",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Document status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date of document status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDATE",
            "required": false,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Date someone created this document.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVISION",
            "required": false,
            "persistent": true,
            "title": "Revision",
            "remarks": "Document revision number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "MAXIMO user who modified this document.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date someone modified this document.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOCLOCATION",
            "required": false,
            "persistent": true,
            "title": "Document Location",
            "remarks": "The physical location of the hard copy document",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOCTYPE",
            "required": true,
            "persistent": true,
            "title": "Document Folder",
            "remarks": "Value assigned by MAXIMO identifying the type of document.",
            "sameAsAttribute": "DOCTYPE",
            "sameAsObject": "DOCTYPES"
        },
        {
            "attributeName": "CREATEBY",
            "required": false,
            "persistent": true,
            "title": "Created By",
            "remarks": "MAXIMO user who initially registered this document.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "URLTYPE",
            "required": true,
            "persistent": true,
            "title": "URL Type",
            "remarks": "External file, Web page, or DMS reference for a document.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DMSNAME",
            "required": false,
            "persistent": true,
            "title": "DMS",
            "remarks": "DMS being used to manage this document.",
            "sameAsAttribute": "DMSNAME",
            "sameAsObject": "DMSAPISETTING"
        },
        {
            "attributeName": "URLNAME",
            "required": true,
            "persistent": true,
            "title": "URL / File Name",
            "remarks": "Name of the file, Web address, or DMS document. The value for the name must be unique.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URLPARAM1",
            "required": false,
            "persistent": true,
            "title": "URL Parameter 1",
            "remarks": "Parameter value used to define the DMS key.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URLPARAM2",
            "required": false,
            "persistent": true,
            "title": "URL Parameter 2",
            "remarks": "Parameter value used to define the DMS key.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URLPARAM3",
            "required": false,
            "persistent": true,
            "title": "URL Parameter 3",
            "remarks": "Parameter value used to define the DMS key.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URLPARAM4",
            "required": false,
            "persistent": true,
            "title": "URL Parameter 4",
            "remarks": "Parameter value used to define the DMS key.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URLPARAM5",
            "required": false,
            "persistent": true,
            "title": "URL Parameter 5",
            "remarks": "Parameter value used to define the DMS key.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRINTTHRULINKDFLT",
            "required": true,
            "persistent": true,
            "title": "Default Batch Printing",
            "remarks": "Check box indicating if the document is printed in the batch printing operation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEDEFAULTFILEPATH",
            "required": true,
            "persistent": true,
            "title": "Default Document File Path",
            "remarks": "Flag to use the document type's default file path.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOW",
            "required": true,
            "persistent": true,
            "title": "Show",
            "remarks": "Show on Register Docs and Add/Modify Doclinks screens",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Document description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPLOAD",
            "required": true,
            "persistent": false,
            "title": "Upload",
            "remarks": "Check box indicating if the document should be uploaded to the network.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WEBURL",
            "required": false,
            "persistent": false,
            "title": "URL",
            "remarks": "URL of the document",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWURLNAME",
            "required": false,
            "persistent": false,
            "title": "URL / File Name",
            "remarks": "NEWURLNAME",
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
            "attributeName": "DOCINFOID",
            "required": true,
            "persistent": true,
            "title": "DOCINFOID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "NEWDOCTYPE",
            "required": false,
            "persistent": false,
            "title": "Doctype",
            "remarks": "non-persistent field to store new doctype for creating links from library",
            "sameAsAttribute": "DOCTYPE",
            "sameAsObject": "DOCTYPES"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTENTUID",
            "required": true,
            "persistent": true,
            "title": "Content unique id",
            "remarks": "Content unique id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMSAPISETTING",
            "target": "DMSAPISETTING",
            "remarks": "Relationship to DmsApiSetting table. (dmsapisetting.dmsname = docinfo.dmsname). If dmsname is not null, the result set will contain one object.",
            "whereClause": "dmsname = :dmsname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to Doclinks table. (doclinks.document = docinfo.document). The result set will contain zero or more objects.",
            "whereClause": "docinfoid = :docinfoid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCTYPES",
            "target": "DOCTYPES",
            "remarks": "Relationship to\tDoctypes table. (doctypes.doctype = docinfo.doctype). The result set will contain one object.",
            "whereClause": "doctype = :doctype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMDOCINFOLONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "long description record for docinfo",
            "whereClause": "ldkey=:docinfoid and ldownertable = 'DOCINFO'",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DOCINFO",
            "source": "APPDOCTYPE",
            "remarks": "Relationship to Docinfo table. (docinfo.doctype = appdoctype.doctype). The result set will contain zero or more objects.",
            "whereClause": "doctype = :doctype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCINFO",
            "source": "DMSAPISETTING",
            "remarks": "Relationship to Docinfo table. (docinfo.dmsname = dmsapisetting.dmsname). The result set will contain zero or more objects.",
            "whereClause": "dmsname = :dmsname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCINFO",
            "source": "DOCLINKS",
            "remarks": "Relationship to Docinfo table. (docinfo.document = doclinks.document). The result set will contain one object.",
            "whereClause": "docinfoid=:docinfoid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCINFO",
            "source": "DOCTYPES",
            "remarks": "Relationship to Docinfo table. (docinfo.doctype = doctypes.doctype). The result set will contain zero or more objects.",
            "whereClause": "doctype = :doctype",
            "cardinality": "UNDEFINED"
        }
    ]
}