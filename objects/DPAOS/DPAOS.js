mos = {
    "objectName": "DPAOS",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Operating Systems",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSID",
    "primaryKeyColumns": [
        "OSID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DPAOS",
            "targetObject": "DPACOS",
            "parentKeys": "OSID",
            "targetKeys": "OSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Operating System",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPAOS",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Operating System",
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
            "attributeName": "OSID",
            "required": true,
            "persistent": true,
            "title": "Operating System Id",
            "remarks": "Operating System Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NAME",
            "required": true,
            "persistent": true,
            "title": "Operating System",
            "remarks": "Name that identifies the operating system.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGUAGE",
            "required": false,
            "persistent": true,
            "title": "Language",
            "remarks": "Language version of the operating system, either the name of the language (in English) or the local identifier (LCID).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VERSION",
            "required": false,
            "persistent": true,
            "title": "Version",
            "remarks": "Operating system version and release.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVICEPACK",
            "required": false,
            "persistent": true,
            "title": "Service Pack",
            "remarks": "Operating system's service pack.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICENSEDORG",
            "required": false,
            "persistent": true,
            "title": "Licensed Organization",
            "remarks": "Name of the organization to which the operating system license is registered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICENSEDUSER",
            "required": false,
            "persistent": true,
            "title": "Licensed User",
            "remarks": "Name of the user to which the operating system license is registered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial number of the operating system.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Name of manufacturer of the operating system.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the operating system. This description contains relevant data that is not provided in other fields or that identifies the operating system in more detail. The data in this field is dependent on the discovery tool used to collect the operating system information; the field might be empty or might consist of several concatenated pieces of information.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUILD",
            "required": false,
            "persistent": true,
            "title": "Build",
            "remarks": "Operating system's service build.",
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
            "attributeName": "CHARACTERSET1",
            "required": false,
            "persistent": true,
            "title": "Character Set",
            "remarks": "Character set (or encoding) of the operating system",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DDPAOS",
            "source": "COMPUTERSYSTEM",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERI",
            "source": "DPAMMANUVARIANT",
            "remarks": "Find the OS that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFOSNAME",
            "source": "DPAMOSVARIANT",
            "remarks": "Find the operating system installations that reference this OS",
            "whereClause": "name=:osvariant",
            "cardinality": "UNDEFINED"
        }
    ]
}