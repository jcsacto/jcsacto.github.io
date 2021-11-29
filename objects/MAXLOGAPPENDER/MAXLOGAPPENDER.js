mos = {
    "objectName": "MAXLOGAPPENDER",
    "className": "psdi.util.logging.MaxLogAppenderSet",
    "description": "Maximo table used to persist appender information",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLOGAPPENDERID",
    "primaryKeyColumns": [
        "APPENDER"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "MAXLOGAPPENDERID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPENDER",
            "required": true,
            "persistent": true,
            "title": "Appender",
            "remarks": "Name of the appender; this name is used to associate loggers with an appender",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the appender.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILENAME",
            "required": false,
            "persistent": true,
            "title": "File Name",
            "remarks": "Name of the physical file into which the appender will write log entries",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILESIZE",
            "required": false,
            "persistent": true,
            "title": "File Size",
            "remarks": "Size of the physical file into which the appender will write log entries. This size is always specified in Megabytes.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BACKUPINDEX",
            "required": false,
            "persistent": true,
            "title": "Backup Index",
            "remarks": "Number of times the file should be rolled over when its size reaches the specified in File Size",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPENDERIMPL",
            "required": true,
            "persistent": true,
            "title": "Appender Implementation Class",
            "remarks": "Fully qualified name of the Java class that provides an implementation for the appender; the value for this field is based on the APPENDERTYPE synonym domain",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONVPATTERN",
            "required": false,
            "persistent": true,
            "title": "Conversion Pattern",
            "remarks": "Description\tA pattern based on which the layout of each log statement is determined. Out of the box, this pattern includes a date and time stamp.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATEPATTERN",
            "required": false,
            "persistent": true,
            "title": "Date Pattern",
            "remarks": "A pattern based on which the name of the rolling log file is generated. The name of the file indicates the date on which the file was backed up.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERNAL",
            "required": true,
            "persistent": true,
            "title": "Internal",
            "remarks": "Indicate whether an appender is internal.  Internal appenders can not be deleted.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFLTFOLDER",
            "required": false,
            "persistent": false,
            "title": "Logging Folder",
            "remarks": "Defult root folder where Maximo-generated log files are to be written.  This is a non-persistent column which will be later saved in MaxProp's mxe.logging.defaultfolder property.",
            "sameAsAttribute": "MAXIMODEFAULT",
            "sameAsObject": "MAXPROP"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DEFAULTFOLDERPROP",
            "target": "MAXPROP",
            "remarks": "Relationship to get the default logging folder property",
            "whereClause": "propname='mxe.logging.rootfolder'",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "APPENDERS",
            "source": "MAXLOGGER",
            "remarks": "Relationship to get all appenders.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}