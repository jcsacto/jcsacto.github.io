mos = {
    "objectName": "DPACDISK",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Disks - Converted Manufacturer",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "DISKID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACDISK",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "DPADISK",
            "targetObject": "DPACDISK",
            "parentKeys": "DISKID",
            "targetKeys": "DISKID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Computer Disks, Deployed Assets",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "DPACDISK",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
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
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "NODEID",
            "tableName": "DPADISK",
            "tableColumnName": "NODEID"
        },
        {
            "attributeName": "DISKID",
            "required": true,
            "persistent": true,
            "title": "Disk Id",
            "remarks": "Disk Id",
            "sameAsAttribute": "DISKID",
            "sameAsObject": "DPADISK",
            "viewColumnName": "DISKID",
            "tableName": "DPADISK",
            "tableColumnName": "DISKID"
        },
        {
            "attributeName": "DISKTYPE",
            "required": false,
            "persistent": true,
            "title": "Disk Type",
            "remarks": "Type of physical storage component, such as hard disk, floppy drive, tape device, or USB removable storage.",
            "sameAsAttribute": "DISKTYPE",
            "sameAsObject": "DPADISK",
            "viewColumnName": "DISKTYPE",
            "tableName": "DPADISK",
            "tableColumnName": "DISKTYPE"
        },
        {
            "attributeName": "DISKINTERFACE",
            "required": false,
            "persistent": true,
            "title": "Disk Interface",
            "remarks": "Interface used to connect the disk to the rest of the computer (such as SCSI, USB, or parallel interfaces).",
            "sameAsAttribute": "DISKINTERFACE",
            "sameAsObject": "DPADISK",
            "viewColumnName": "DISKINTERFACE",
            "tableName": "DPADISK",
            "tableColumnName": "DISKINTERFACE"
        },
        {
            "attributeName": "REMOVABLEMEDIA",
            "required": true,
            "persistent": true,
            "title": "Removable Media",
            "remarks": "Specifies whether or not the disk is removable media. If the check box is selected, the disk is removable; if the check box is empty, the disk is not removable.",
            "sameAsAttribute": "REMOVABLEMEDIA",
            "sameAsObject": "DPADISK",
            "viewColumnName": "REMOVABLEMEDIA",
            "tableName": "DPADISK",
            "tableColumnName": "REMOVABLEMEDIA"
        },
        {
            "attributeName": "WRITECAPABLE",
            "required": true,
            "persistent": true,
            "title": "Write Capable",
            "remarks": "Specifies whether or not the disk is write capable. If the check box is selected, you can write to the disk; if the check box is cleared, you cannot write to the disk.",
            "sameAsAttribute": "WRITECAPABLE",
            "sameAsObject": "DPADISK",
            "viewColumnName": "WRITECAPABLE",
            "tableName": "DPADISK",
            "tableColumnName": "WRITECAPABLE"
        },
        {
            "attributeName": "EXTERNALDEVICE",
            "required": true,
            "persistent": true,
            "title": "External Device",
            "remarks": "Specifies whether or not the disk is an external device that is not housed in the same box with the computer. If the check box is selected, the disk is an external device; if the check box is cleared, the disk is not an external device.",
            "sameAsAttribute": "EXTERNALDEVICE",
            "sameAsObject": "DPADISK",
            "viewColumnName": "EXTERNALDEVICE",
            "tableName": "DPADISK",
            "tableColumnName": "EXTERNALDEVICE"
        },
        {
            "attributeName": "SERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial number of the disk.",
            "sameAsAttribute": "SERIALNUMBER",
            "sameAsObject": "DPADISK",
            "viewColumnName": "SERIALNUMBER",
            "tableName": "DPADISK",
            "tableColumnName": "SERIALNUMBER"
        },
        {
            "attributeName": "ASSETTAG",
            "required": false,
            "persistent": true,
            "title": "Asset Tag",
            "remarks": "Asset tag of the disk.",
            "sameAsAttribute": "ASSETTAG",
            "sameAsObject": "DPADISK",
            "viewColumnName": "ASSETTAG",
            "tableName": "DPADISK",
            "tableColumnName": "ASSETTAG"
        },
        {
            "attributeName": "MAKEMODEL",
            "required": false,
            "persistent": true,
            "title": "Make/Model",
            "remarks": "Make or model of the disk. Sometimes the make or model field contains the name of the manufacturer of the disk.",
            "sameAsAttribute": "MAKEMODEL",
            "sameAsObject": "DPADISK",
            "viewColumnName": "MAKEMODEL",
            "tableName": "DPADISK",
            "tableColumnName": "MAKEMODEL"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the disk. This description contains relevant data that is not provided in other fields or that identifies the physical storage component in more detail. The data in this field is dependent on the discovery tool used to collect the computer information; the field might be empty or might consist of several concatenated pieces of information.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "DPADISK",
            "viewColumnName": "DESCRIPTION",
            "tableName": "DPADISK",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "SIZEUNIT",
            "required": false,
            "persistent": true,
            "title": "Size Unit",
            "remarks": "Unit of measurement for disk size, kilobytes (KB), megabytes (MB), or gigabytes (GB).",
            "sameAsAttribute": "SIZEUNIT",
            "sameAsObject": "DPADISK",
            "viewColumnName": "SIZEUNIT",
            "tableName": "DPADISK",
            "tableColumnName": "SIZEUNIT"
        },
        {
            "attributeName": "TOTALSPACE",
            "required": false,
            "persistent": true,
            "title": "Total Space",
            "remarks": "Total size of the disk; that is, the capacity of the unformatted disk.",
            "sameAsAttribute": "TOTALSPACE",
            "sameAsObject": "DPADISK",
            "viewColumnName": "TOTALSPACE",
            "tableName": "DPADISK",
            "tableColumnName": "TOTALSPACE"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Create Date",
            "sameAsAttribute": "CREATEDATE",
            "sameAsObject": "DPADISK",
            "viewColumnName": "CREATEDATE",
            "tableName": "DPADISK",
            "tableColumnName": "CREATEDATE"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change Date",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "DPADISK",
            "viewColumnName": "CHANGEDATE",
            "tableName": "DPADISK",
            "tableColumnName": "CHANGEDATE"
        },
        {
            "attributeName": "HOTSWAPPABLE",
            "required": true,
            "persistent": true,
            "title": "Hot Swappable",
            "remarks": "Specifies whether or not the disk is hot swappable. A device is hot swappable if it can be removed while the computer is running, and the operating system will recognize the change without requiring you to reboot the computer. If the check box is selected, the disk is hot swappable; if the check box is cleared, the disk is not hot swappable.",
            "sameAsAttribute": "HOTSWAPPABLE",
            "sameAsObject": "DPADISK",
            "viewColumnName": "HOTSWAPPABLE",
            "tableName": "DPADISK",
            "tableColumnName": "HOTSWAPPABLE"
        },
        {
            "attributeName": "VTOTALSPACE",
            "required": false,
            "persistent": false,
            "title": "Size",
            "remarks": "Total size of the disk; that is, the capacity of the unformatted disk.",
            "sameAsAttribute": "VTOTALSPACE",
            "sameAsObject": "DPADISK"
        },
        {
            "attributeName": "SYSTEMNAME",
            "required": false,
            "persistent": true,
            "title": "Device",
            "remarks": "System name or physical device name that the operating system on a computer uses to identify a disk. This name is used to uniquely identify disk devices on a computer.",
            "sameAsAttribute": "SYSTEMNAME",
            "sameAsObject": "DPADISK",
            "viewColumnName": "SYSTEMNAME",
            "tableName": "DPADISK",
            "tableColumnName": "SYSTEMNAME"
        },
        {
            "attributeName": "CMANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer of the disk.",
            "sameAsAttribute": "MANUFACTURERNAME",
            "sameAsObject": "DPAMMANUVARIANT",
            "viewColumnName": "CMANUFACTURER",
            "tableName": "DPAMMANUVARIANT",
            "tableColumnName": "MANUFACTURERNAME"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer of the disk.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "MANUFACTURER",
            "tableName": "DPADISK",
            "tableColumnName": "MANUFACTURER"
        },
        {
            "attributeName": "MANUFACTURERVAR",
            "required": true,
            "persistent": true,
            "title": "Manufacturer Variant",
            "remarks": "Manufacturer Var",
            "sameAsAttribute": "MANUFACTURERVAR",
            "sameAsObject": "DPAMMANUVARIANT",
            "viewColumnName": "MANUFACTURERVAR",
            "tableName": "DPAMMANUVARIANT",
            "tableColumnName": "MANUFACTURERVAR"
        },
        {
            "attributeName": "DPAMMANUVARIANTID",
            "required": true,
            "persistent": true,
            "title": "Manufacturer Variant Id",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "DPAMMANUVARIANTID",
            "sameAsObject": "DPAMMANUVARIANT",
            "viewColumnName": "DPAMMANUVARIANTID",
            "tableName": "DPAMMANUVARIANT",
            "tableColumnName": "DPAMMANUVARIANTID"
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": "dpadisk.manufacturer=dpammanuvariant.manufacturervar",
        "viewselect": "select dpadisk.nodeid,dpadisk.diskid,dpadisk.disktype,dpadisk.diskinterface,dpadisk.removablemedia,dpadisk.writecapable, dpadisk.externaldevice,dpadisk.serialnumber,dpadisk.assettag,dpadisk.makemodel,dpadisk.manufacturer,dpadisk.description, dpadisk.sizeunit,dpadisk.totalspace,dpadisk.createdate,dpadisk.changedate,dpadisk.hotswappable,dpadisk.systemname, dpadisk.rowstamp,dpammanuvariant.manufacturername as cmanufacturer, dpammanuvariant.manufacturervar,dpammanuvariant.dpammanuvariantid,dpammanuvariant.rowstamp as rowstamp1",
        "viewfrom": "from dpadisk,dpammanuvariant"
    },
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DPADISK",
            "source": "DPACOMPUTER",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}