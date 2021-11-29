mos = {
    "objectName": "DMERROR",
    "className": "psdi.dm.pkg.DMErrorSet",
    "description": "Errors from failed deployments",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMERRORID",
    "primaryKeyColumns": [
        "SOURCE",
        "PACKAGE",
        "PKGDEFNAME",
        "ERRORDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DMCFGGROUP",
            "targetObject": "DMERROR",
            "parentKeys": "CFGOBJGROUP",
            "targetKeys": "CFGOBJGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Migration group used by Migration Manager to log errors when deployment fails.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGE",
            "targetObject": "DMERROR",
            "parentKeys": "PKGDEFNAME, SOURCE, PACKAGE",
            "targetKeys": "PKGDEFNAME, SOURCE, PACKAGE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Errors for Migration Manager package.",
            "longDescription": null
        },
        {
            "objectName": "DMPACKAGEDEF",
            "targetObject": "DMERROR",
            "parentKeys": "PKGDEFNAME, SOURCE",
            "targetKeys": "PKGDEFNAME, SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Error for Package Definition.",
            "longDescription": null
        },
        {
            "objectName": "DMPKGSTAGING",
            "targetObject": "DMERROR",
            "parentKeys": "PKGDEFNAME, SOURCE, PACKAGE, TYPE, CFGDATAORDER",
            "targetKeys": "PKGDEFNAME, SOURCE, PACKAGE, TYPE, CFGDATAORDER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Error for Staging Components.",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "DMERROR",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "CFGOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure for the error.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMERROR",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SOURCE",
            "required": true,
            "persistent": true,
            "title": "Source",
            "remarks": "Identifies the source MAXIMO environment where package is created",
            "sameAsAttribute": "SOURCE",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "PACKAGE",
            "required": true,
            "persistent": true,
            "title": "Package",
            "remarks": "Identifies the instance of a package definition; this is a generated name",
            "sameAsAttribute": "PACKAGE",
            "sameAsObject": "DMPACKAGE"
        },
        {
            "attributeName": "PKGDEFNAME",
            "required": true,
            "persistent": true,
            "title": "Package Definition Name",
            "remarks": "Name of the package definition as entered by the user",
            "sameAsAttribute": "PKGDEFNAME",
            "sameAsObject": "DMPACKAGEDEF"
        },
        {
            "attributeName": "ERRORDATE",
            "required": true,
            "persistent": true,
            "title": "Date",
            "remarks": "The date and time when the deployment data error occurred.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CFGOBJGROUP",
            "required": false,
            "persistent": true,
            "title": "Migration Group",
            "remarks": "The migration group that contains the migration object that caused the deployment data error.",
            "sameAsAttribute": "CFGOBJGROUP",
            "sameAsObject": "DMCFGGROUP"
        },
        {
            "attributeName": "CFGOBJECT",
            "required": false,
            "persistent": true,
            "title": "Migration Object",
            "remarks": "The migration object that caused the deployment data error.",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "MSG",
            "required": false,
            "persistent": true,
            "title": "Message",
            "remarks": "The error message that was triggered by the deployment data error. The message contains a unique identifier and a description of the error.",
            "sameAsAttribute": "MSG",
            "sameAsObject": "DMMESSAGE"
        },
        {
            "attributeName": "MSGDETAILS",
            "required": false,
            "persistent": true,
            "title": "Message Details",
            "remarks": "The stack trace for the error.",
            "sameAsAttribute": "MSGDETAILS",
            "sameAsObject": "DMMESSAGE"
        },
        {
            "attributeName": "ERRORDATA",
            "required": false,
            "persistent": true,
            "title": "Error Data",
            "remarks": "The XML that contains the record that caused the deployment data error, with any edits made.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGERRORDATA",
            "required": false,
            "persistent": true,
            "title": "Original Error Data",
            "remarks": "The XML that contains the record that caused the deployment data error. If you edit the error data, the edits are not displayed in this field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEYS",
            "required": false,
            "persistent": true,
            "title": "Keys",
            "remarks": "The keys that uniquely identify the record in the XML that caused the deployment data error.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Type of XML document within set of staging table records.",
            "sameAsAttribute": "TYPE",
            "sameAsObject": "DMPKGSTAGING"
        },
        {
            "attributeName": "CFGDATAORDER",
            "required": false,
            "persistent": true,
            "title": "Configuration Data Order",
            "remarks": "Order of the XML document within the set of staging table records",
            "sameAsAttribute": "CFGDATAORDER",
            "sameAsObject": "DMPKGSTAGING"
        },
        {
            "attributeName": "RECORDNUM",
            "required": false,
            "persistent": true,
            "title": "Record Number",
            "remarks": "Location of the specific record within the XML document",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LATESTERROR",
            "required": true,
            "persistent": false,
            "title": "Latest",
            "remarks": "Is this error record the latest for the package?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "User ID of who last changed the record",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DMERRORID",
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
            "name": "DMERROR",
            "source": "DMPACKAGE",
            "remarks": "Errors encountered when deploying this package",
            "whereClause": "pkgdefname = :pkgdefname and source = :source and package = :package",
            "cardinality": null
        }
    ]
}