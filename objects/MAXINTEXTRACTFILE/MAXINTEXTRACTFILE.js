mos = {
    "objectName": "MAXINTEXTRACTFILE",
    "className": "psdi.iface.app.interror.MaxIntExtractFileSet",
    "description": "Integration Extract File",
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
            "attributeName": "EXTRACTFILENAME",
            "required": true,
            "persistent": false,
            "title": "Extract File Name",
            "remarks": "Name of the Extract File",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTRACTFILEDATE",
            "required": true,
            "persistent": false,
            "title": "Extract File Date",
            "remarks": "Creation Date of the Extract File",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMPORTFILENAME",
            "required": false,
            "persistent": false,
            "title": "Import File Name",
            "remarks": "Name of the Source Input file",
            "sameAsAttribute": "SOURCEFILE",
            "sameAsObject": "MAXINTERROREXTRACT"
        },
        {
            "attributeName": "IMPORTFILEDATE",
            "required": false,
            "persistent": false,
            "title": "Import File Date",
            "remarks": "Date that Import File was processed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTRACTFILEURL",
            "required": false,
            "persistent": false,
            "title": "Extract File URL",
            "remarks": "Extract File URL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTRACTFILEPATH",
            "required": false,
            "persistent": false,
            "title": "Extract File Path",
            "remarks": "Extract File Path",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTSYSNAME",
            "required": false,
            "persistent": false,
            "title": "External System Name",
            "remarks": "External System Name",
            "sameAsAttribute": "EXTSYSNAME",
            "sameAsObject": "MAXEXTSYSTEM"
        },
        {
            "attributeName": "FILEFORMAT",
            "required": false,
            "persistent": false,
            "title": "File Format",
            "remarks": "File Format",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}