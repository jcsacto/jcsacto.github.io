mos = {
    "objectName": "DPADISK",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Disks",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DISKID",
    "primaryKeyColumns": [
        "DISKID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DPADISK",
            "targetObject": "DPACDISK",
            "parentKeys": "DISKID",
            "targetKeys": "DISKID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Computer Disks, Deployed Assets",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPADISK",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Computer Disks, Deployed Assets",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node Id",
            "remarks": "Node ID",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET"
        },
        {
            "attributeName": "DISKID",
            "required": true,
            "persistent": true,
            "title": "Disk Id",
            "remarks": "Disk Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISKTYPE",
            "required": false,
            "persistent": true,
            "title": "Disk Type",
            "remarks": "Type of physical storage component, such as hard disk, floppy drive, tape device, or USB removable storage.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISKINTERFACE",
            "required": false,
            "persistent": true,
            "title": "Disk Interface",
            "remarks": "Interface used to connect the disk to the rest of the computer (such as SCSI, USB, or parallel interfaces).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMOVABLEMEDIA",
            "required": true,
            "persistent": true,
            "title": "Removable Media",
            "remarks": "Specifies whether or not the disk is removable media. If the check box is selected, the disk is removable; if the check box is empty, the disk is not removable.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WRITECAPABLE",
            "required": true,
            "persistent": true,
            "title": "Write Capable",
            "remarks": "Specifies whether or not the disk is write capable. If the check box is selected, you can write to the disk; if the check box is cleared, you cannot write to the disk.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTERNALDEVICE",
            "required": true,
            "persistent": true,
            "title": "External Device",
            "remarks": "Specifies whether or not the disk is an external device that is not housed in the same box with the computer. If the check box is selected, the disk is an external device; if the check box is cleared, the disk is not an external device.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial number of the disk.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETTAG",
            "required": false,
            "persistent": true,
            "title": "Asset Tag",
            "remarks": "Asset tag of the disk.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAKEMODEL",
            "required": false,
            "persistent": true,
            "title": "Make/Model",
            "remarks": "Make or model of the disk. Sometimes the make or model field contains the name of the manufacturer of the disk.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer of the disk.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the disk. This description contains relevant data that is not provided in other fields or that identifies the physical storage component in more detail. The data in this field is dependent on the discovery tool used to collect the computer information; the field might be empty or might consist of several concatenated pieces of information.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIZEUNIT",
            "required": false,
            "persistent": true,
            "title": "Size Unit",
            "remarks": "Size Unit",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALSPACE",
            "required": false,
            "persistent": true,
            "title": "Total Space",
            "remarks": "Total Space",
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
            "attributeName": "HOTSWAPPABLE",
            "required": true,
            "persistent": true,
            "title": "Hot Swappable",
            "remarks": "Specifies whether or not the disk is hot swappable. A device is hot swappable if it can be removed while the computer is running, and the operating system will recognize the change without requiring you to reboot the computer. If the check box is selected, the disk is hot swappable; if the check box is cleared, the disk is not hot swappable.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VTOTALSPACE",
            "required": false,
            "persistent": false,
            "title": "Size",
            "remarks": "Total size of the disk; that is, the capacity of the unformatted disk.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SYSTEMNAME",
            "required": false,
            "persistent": true,
            "title": "Device",
            "remarks": "System name or physical device name that the operating system on a computer uses to identify a disk. This name is used to uniquely identify disk devices on a computer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DDPADISK",
            "source": "COMPUTERSYSTEM",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERH",
            "source": "DPAMMANUVARIANT",
            "remarks": "Find the disk devces that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        }
    ]
}