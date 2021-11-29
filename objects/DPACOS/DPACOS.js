mos = {
    "objectName": "DPACOS",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Operating Systems - Converted Operating System and Manufacturer",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "OSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACOS",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "DPACOS",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMOSVARIANT",
            "targetObject": "DPACOS",
            "parentKeys": "DPAMOSVARIANTID",
            "targetKeys": "DPAMOSVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "OS Variant",
            "longDescription": null
        },
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
    "columns": [
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node Id",
            "remarks": "Node Id",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "NODEID",
            "tableName": "DPAOS",
            "tableColumnName": "NODEID"
        },
        {
            "attributeName": "OSID",
            "required": true,
            "persistent": true,
            "title": "Operating System Id",
            "remarks": "Operating System Id",
            "sameAsAttribute": "OSID",
            "sameAsObject": "DPAOS",
            "viewColumnName": "OSID",
            "tableName": "DPAOS",
            "tableColumnName": "OSID"
        },
        {
            "attributeName": "LANGUAGE",
            "required": false,
            "persistent": true,
            "title": "Language",
            "remarks": "Language version of the operating system, either the name of the language (in English) or the local identifier (LCID).",
            "sameAsAttribute": "LANGUAGE",
            "sameAsObject": "DPAOS",
            "viewColumnName": "LANGUAGE",
            "tableName": "DPAOS",
            "tableColumnName": "LANGUAGE"
        },
        {
            "attributeName": "VERSION",
            "required": false,
            "persistent": true,
            "title": "Version",
            "remarks": "Operating system version and release.",
            "sameAsAttribute": "VERSION",
            "sameAsObject": "DPAOS",
            "viewColumnName": "VERSION",
            "tableName": "DPAOS",
            "tableColumnName": "VERSION"
        },
        {
            "attributeName": "SERVICEPACK",
            "required": false,
            "persistent": true,
            "title": "Service Pack",
            "remarks": "Operating system's service pack.",
            "sameAsAttribute": "SERVICEPACK",
            "sameAsObject": "DPAOS",
            "viewColumnName": "SERVICEPACK",
            "tableName": "DPAOS",
            "tableColumnName": "SERVICEPACK"
        },
        {
            "attributeName": "LICENSEDORG",
            "required": false,
            "persistent": true,
            "title": "Licensed Organization",
            "remarks": "Name of the organization to which the operating system license is registered.",
            "sameAsAttribute": "LICENSEDORG",
            "sameAsObject": "DPAOS",
            "viewColumnName": "LICENSEDORG",
            "tableName": "DPAOS",
            "tableColumnName": "LICENSEDORG"
        },
        {
            "attributeName": "LICENSEDUSER",
            "required": false,
            "persistent": true,
            "title": "Licensed User",
            "remarks": "Name of the user to which the operating system license is registered.",
            "sameAsAttribute": "LICENSEDUSER",
            "sameAsObject": "DPAOS",
            "viewColumnName": "LICENSEDUSER",
            "tableName": "DPAOS",
            "tableColumnName": "LICENSEDUSER"
        },
        {
            "attributeName": "SERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial number of the operating system.",
            "sameAsAttribute": "SERIALNUMBER",
            "sameAsObject": "DPAOS",
            "viewColumnName": "SERIALNUMBER",
            "tableName": "DPAOS",
            "tableColumnName": "SERIALNUMBER"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the operating system. This description contains relevant data that is not provided in other fields or that identifies the operating system in more detail. The data in this field is dependent on the discovery tool used to collect the operating system information; the field might be empty or might consist of several concatenated pieces of information.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "DPAOS",
            "viewColumnName": "DESCRIPTION",
            "tableName": "DPAOS",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "BUILD",
            "required": false,
            "persistent": true,
            "title": "Build",
            "remarks": "Operating system's service build.",
            "sameAsAttribute": "BUILD",
            "sameAsObject": "DPAOS",
            "viewColumnName": "BUILD",
            "tableName": "DPAOS",
            "tableColumnName": "BUILD"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Create Date",
            "sameAsAttribute": "CREATEDATE",
            "sameAsObject": "DPAOS",
            "viewColumnName": "CREATEDATE",
            "tableName": "DPAOS",
            "tableColumnName": "CREATEDATE"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change Date",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "DPAOS",
            "viewColumnName": "CHANGEDATE",
            "tableName": "DPAOS",
            "tableColumnName": "CHANGEDATE"
        },
        {
            "attributeName": "CMANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Name of manufacturer of the operating system.",
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
            "remarks": "Name of manufacturer of the operating system.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "MANUFACTURER",
            "tableName": "DPAOS",
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
        },
        {
            "attributeName": "CNAME",
            "required": true,
            "persistent": true,
            "title": "Operating System",
            "remarks": "Name that identifies the operating system.",
            "sameAsAttribute": "OSNAME",
            "sameAsObject": "DPAMOSVARIANT",
            "viewColumnName": "CNAME",
            "tableName": "DPAMOSVARIANT",
            "tableColumnName": "OSNAME"
        },
        {
            "attributeName": "NAME",
            "required": true,
            "persistent": true,
            "title": "Operating System",
            "remarks": "Name that identifies the operating system.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "NAME",
            "tableName": "DPAOS",
            "tableColumnName": "NAME"
        },
        {
            "attributeName": "OSVARIANT",
            "required": true,
            "persistent": true,
            "title": "Operating System Variant",
            "remarks": "OS Variant",
            "sameAsAttribute": "OSVARIANT",
            "sameAsObject": "DPAMOSVARIANT",
            "viewColumnName": "OSVARIANT",
            "tableName": "DPAMOSVARIANT",
            "tableColumnName": "OSVARIANT"
        },
        {
            "attributeName": "DPAMOSVARIANTID",
            "required": true,
            "persistent": true,
            "title": "Operating System Variant Id",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "DPAMOSVARIANTID",
            "sameAsObject": "DPAMOSVARIANT",
            "viewColumnName": "DPAMOSVARIANTID",
            "tableName": "DPAMOSVARIANT",
            "tableColumnName": "DPAMOSVARIANTID"
        },
        {
            "attributeName": "CHARACTERSET1",
            "required": false,
            "persistent": true,
            "title": "Character Set",
            "remarks": "Character set (or encoding) of the operating system",
            "sameAsAttribute": "CHARACTERSET1",
            "sameAsObject": "DPAOS",
            "viewColumnName": "CHARACTERSET1",
            "tableName": "DPAOS",
            "tableColumnName": "CHARACTERSET1"
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": "dpaos.manufacturer=dpammanuvariant.manufacturervar and dpaos.name=dpamosvariant.osvariant",
        "viewselect": "select dpaos.nodeid,dpaos.osid,dpaos.name,dpaos.language,dpaos.version,dpaos.servicepack,dpaos.licensedorg,dpaos.licenseduser, dpaos.serialnumber,dpaos.manufacturer,dpaos.description,dpaos.build,dpaos.createdate,dpaos.changedate,dpaos.rowstamp,dpaos.characterset1,dpammanuvariant.manufacturername as cmanufacturer,dpammanuvariant.manufacturervar,dpammanuvariant.dpammanuvariantid, dpammanuvariant.rowstamp as rowstamp1, dpamosvariant.osname as cname,dpamosvariant.osvariant, dpamosvariant.dpamosvariantid,dpamosvariant.rowstamp as rowstamp2",
        "viewfrom": "from dpaos,dpammanuvariant,dpamosvariant"
    },
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DPAOS",
            "source": "DPACOMPUTER",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}