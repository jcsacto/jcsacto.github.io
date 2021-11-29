mos = {
    "objectName": "DPALOGICALDRIVE",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Logical Drives",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LOGICALDRIVEID",
    "primaryKeyColumns": [
        "LOGICALDRIVEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPALOGICALDRIVE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Logical Drive",
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
            "attributeName": "LOGICALDRIVEID",
            "required": true,
            "persistent": true,
            "title": "Logical Drive Id",
            "remarks": "Logical Drive Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DRIVETYPE",
            "required": false,
            "persistent": true,
            "title": "Drive Type",
            "remarks": "Type of logical drive, local or network.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILESYSTEM",
            "required": false,
            "persistent": true,
            "title": "File System",
            "remarks": "File system used on the logical drive, such as NTFS (the file system for Windows NT), FAT (file allocation table), FAT16, FAT32, HPFS, VFAT for Windows systems; HFS for Macintosh or Mac-formatted CD-ROM; ISO 9660 or Joliet for CD-ROM, etc.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VOLUMELABEL",
            "required": false,
            "persistent": true,
            "title": "Volume Label",
            "remarks": "Volume label assigned to the logical drive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENCRYPTED",
            "required": true,
            "persistent": true,
            "title": "Encrypted",
            "remarks": "Specifies whether or not the information on the drive is encrypted. If the check box is selected, the information is encrypted; if the check box is empty, the information is not encrypted.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPRESSED",
            "required": true,
            "persistent": true,
            "title": "Compressed",
            "remarks": "Specifies whether or not the information on the drive is compressed. If the check box is selected, the information is compressed; if the check box is empty, the information is not compressed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ATTACHEDNETNAME",
            "required": false,
            "persistent": true,
            "title": "Attached Network Name",
            "remarks": "Network name assigned to the logical drive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the drive. This description contains relevant data that is not provided in other fields or that identifies the drive in more detail. The data in this field is dependent on the discovery tool used to collect the computer information; the field might be empty or might consist of several concatenated pieces of information.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALSIZE",
            "required": false,
            "persistent": true,
            "title": "Total Size",
            "remarks": "Sum of used and available space on the logical drive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AVAILABLESIZE",
            "required": false,
            "persistent": true,
            "title": "Available Size",
            "remarks": "Total amount of space available on a logical drive. Note that the available space might be less than the sum of the space of all logical drives because of quotas or because more than one network drive is mapped to physical storage on the network.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIZEUNIT",
            "required": false,
            "persistent": true,
            "title": "Size Unit",
            "remarks": "Unit of measurement for the drive size, kilobytes (KB), megabytes (MB), or gigabytes (GB).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MOUNT",
            "required": false,
            "persistent": true,
            "title": "Drive",
            "remarks": "The logical drive letter or volume name assigned to the logical drive. For Windows operating systems, this is usually a letter, such as C:, D:, or F:. For Linux- or Unix-based operating systems, a slash plus a name (such as dev or home) is used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Create Date",
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
            "attributeName": "VAVAILABLESIZE",
            "required": false,
            "persistent": false,
            "title": "Available Size",
            "remarks": "Total amount of space available on a logical drive. Note that the available space might be less than the sum of the space of all logical drives because of quotas or because more than one network drive is mapped to physical storage on the network.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VTOTALSIZE",
            "required": false,
            "persistent": false,
            "title": "Total Size",
            "remarks": "Sum of used and available space on the logical drive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DDPALOGICALDRIVE",
            "source": "COMPUTERSYSTEM",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPALOGICALDRIVE",
            "source": "DPACOMPUTER",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}