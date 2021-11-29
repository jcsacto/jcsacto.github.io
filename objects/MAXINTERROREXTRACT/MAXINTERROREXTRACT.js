mos = {
    "objectName": "MAXINTERROREXTRACT",
    "className": "psdi.iface.app.interror.MaxIntErrorExtractSet",
    "description": "Error Extract Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXINTERROREXTRACTID",
    "primaryKeyColumns": [
        "EXTRACTFILEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXINTERROREXTRACT",
            "targetObject": "MAXINTERRORMSG",
            "parentKeys": "EXTRACTFILEID",
            "targetKeys": "EXTRACTFILEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Error File",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXINTERROREXTRACT",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXINTERROREXTRACT",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTERROREXTRACT",
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
            "attributeName": "EXTRACTFILEID",
            "required": true,
            "persistent": true,
            "title": "Extract File Id",
            "remarks": "Extract File Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEFILE",
            "required": true,
            "persistent": true,
            "title": "Import File",
            "remarks": "Import File",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACENAME",
            "required": false,
            "persistent": true,
            "title": "Enterprise Service",
            "remarks": "Enterprise Service",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "EXTSYSNAME",
            "required": false,
            "persistent": true,
            "title": "External System",
            "remarks": "External System",
            "sameAsAttribute": "EXTSYSNAME",
            "sameAsObject": "MAXEXTSYSTEM"
        },
        {
            "attributeName": "IMPORTEDCOUNT",
            "required": false,
            "persistent": true,
            "title": "Imported Count",
            "remarks": "Imported Count",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSEDCOUNT",
            "required": false,
            "persistent": true,
            "title": "Processed Count",
            "remarks": "Processed Count",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ERRORCOUNT",
            "required": false,
            "persistent": true,
            "title": "Error Count",
            "remarks": "Error Count",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMPORTDATE",
            "required": false,
            "persistent": true,
            "title": "Import Date",
            "remarks": "Import Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILETOQUEUE",
            "required": false,
            "persistent": true,
            "title": "File To Queue",
            "remarks": "File To Queue",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILEFORMAT",
            "required": false,
            "persistent": true,
            "title": "File Format",
            "remarks": "File Format",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CRONTASKOWNER",
            "required": false,
            "persistent": true,
            "title": "Cron Task Owner",
            "remarks": "Cron Task Owner",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AVAILFOREXTRACT",
            "required": false,
            "persistent": false,
            "title": "Available To Extract",
            "remarks": "Available To Extract",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELIMITER",
            "required": false,
            "persistent": true,
            "title": "Delimiter",
            "remarks": "Delimiter",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEXTQUALIFIER",
            "required": false,
            "persistent": true,
            "title": "Text Qualifier",
            "remarks": "Text Qualifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILEATTRIBUTES",
            "required": false,
            "persistent": true,
            "title": "File Attributes",
            "remarks": "File Attributes",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXINTERROREXTRACTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}