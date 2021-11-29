mos = {
    "objectName": "DPAFILE",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Files",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "FILEID",
    "primaryKeyColumns": [
        "FILEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPAFILE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed File",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node Id",
            "remarks": "Node Id",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET"
        },
        {
            "attributeName": "FILEID",
            "required": true,
            "persistent": true,
            "title": "File",
            "remarks": "Name that identifies the file.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NAME",
            "required": true,
            "persistent": true,
            "title": "File",
            "remarks": "Name that identifies the file.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTHOR",
            "required": false,
            "persistent": true,
            "title": "Author",
            "remarks": "Author of the file.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": true,
            "title": "Owner",
            "remarks": "Owner of the file.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Date the file was created.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTCHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Last Modified Date",
            "remarks": "Date the file was last modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTACCESSDATE",
            "required": false,
            "persistent": true,
            "title": "Last Accessed Date",
            "remarks": "Date the file was last accessed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTACCESSEDBY",
            "required": false,
            "persistent": true,
            "title": "Last Accessed By",
            "remarks": "User who last accessed the file.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTENSION",
            "required": false,
            "persistent": true,
            "title": "Extension",
            "remarks": "File extension.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VOLUME",
            "required": false,
            "persistent": true,
            "title": "Volume",
            "remarks": "Depending on the operating system of the computer, this field displays the drive letter or the volume where the file is stored.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PATH",
            "required": false,
            "persistent": true,
            "title": "Path",
            "remarks": "File path.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the file. This description contains relevant data that is not provided in other fields or that identifies the file in more detail. The data in this field is dependent on the discovery tool used to collect the file information; the field might be empty or might consist of several concatenated pieces of information.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILESIZE",
            "required": false,
            "persistent": true,
            "title": "File Size",
            "remarks": "Size of the file.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIZEUNIT",
            "required": false,
            "persistent": true,
            "title": "Size Unit",
            "remarks": "Unit of measurement for the file size, kilobytes (KB), megabytes (MB), or gigabytes (GB).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILECREATEDATE",
            "required": false,
            "persistent": true,
            "title": "Created Date",
            "remarks": "File Create Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VFILESIZE",
            "required": false,
            "persistent": false,
            "title": "File Size",
            "remarks": "Size of the file.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DDPAFILE",
            "source": "COMPUTERSYSTEM",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAFILE",
            "source": "DPACOMPUTER",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}