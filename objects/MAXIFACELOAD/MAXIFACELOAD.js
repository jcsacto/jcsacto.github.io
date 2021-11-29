mos = {
    "objectName": "MAXIFACELOAD",
    "className": "psdi.iface.app.common.MaxIfaceLoadSet",
    "description": "MAXIFACELOAD",
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
            "attributeName": "FILETYPE",
            "required": false,
            "persistent": false,
            "title": "File Type",
            "remarks": "Valid file types are XML and Flat File. A flat file is a text representation of the corresponding Maximo interface table. If you select Flat File, enter a value in the Delimiter field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DIRECTORY",
            "required": false,
            "persistent": false,
            "title": "Server Directory",
            "remarks": "Directory containing the XML or flat file to be imported into Maximo.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELIMITER",
            "required": false,
            "persistent": false,
            "title": "Delimiter",
            "remarks": "Character that separates the data fields in a flat file to be imported into Maximo. The default value is a comma. Not applicable if the selected file type is XML.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILENAME",
            "required": false,
            "persistent": false,
            "title": "File Name",
            "remarks": "Identifies the XML or flat file to be imported into Maximo.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISPREVIEW",
            "required": true,
            "persistent": false,
            "title": "Import Preview",
            "remarks": "If selected, you can verify that the structure and data content of a file is correct before importing it. Preview mode is suitable for viewing small amounts of data, such as sample data, and is not intended for use to preview large input files.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALDOC",
            "required": false,
            "persistent": false,
            "title": "Total number of documents",
            "remarks": "Number of object structures included in the imported file",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALIDDOC",
            "required": false,
            "persistent": false,
            "title": "Valid documents",
            "remarks": "Number of object structures  successfully processed by the Preview mode",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVALIDDOC",
            "required": false,
            "persistent": false,
            "title": "Invalid documents",
            "remarks": "Number of object structures that include a processing failure condition",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WARNINGMSG",
            "required": false,
            "persistent": false,
            "title": "Results",
            "remarks": "Warning and Error Messages",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISFILEEXTRACT",
            "required": true,
            "persistent": false,
            "title": "File-based Error Management",
            "remarks": "If selected, all integration messages flagged with an error are made available in a downloadable file. If deselected, in the Message Reprocessing application, you can search, update, and retry integration messages.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEXTQUALIFIER",
            "required": true,
            "persistent": false,
            "title": "Text Qualifier",
            "remarks": "Character to escape when data itself has delimter in it",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Structure",
            "remarks": "Object Structure",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "MAXCOUNT",
            "required": false,
            "persistent": false,
            "title": "Maximum Count",
            "remarks": "Maximum Count",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTION",
            "required": false,
            "persistent": false,
            "title": "Action",
            "remarks": "Action",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MESSAGETYPE",
            "required": false,
            "persistent": false,
            "title": "Operation",
            "remarks": "Message type. The Value of this field comes from SYNONYMDOMAIN MESSAGETYPE",
            "sameAsAttribute": "MESSAGETYPE",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "AVAILCOUNT",
            "required": false,
            "persistent": false,
            "title": "Selected to Export",
            "remarks": "Selected to Export",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TRANSLANGCODE",
            "required": false,
            "persistent": false,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXINTOBJECT",
            "target": "MAXINTOBJECT",
            "remarks": "Relationship to get Object Structure description. It will return one row.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXIFACELOAD",
            "source": "MAXEXTIFACEIN",
            "remarks": "Relationship to the MAXIFACELOAD table, The resulting set will contain zero or more objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}