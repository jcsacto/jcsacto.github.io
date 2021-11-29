mos = {
    "objectName": "DPACDISPLAY",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Displays - Converted Manufacturer",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "DISPLAYID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACDISPLAY",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "DPADISPLAY",
            "targetObject": "DPACDISPLAY",
            "parentKeys": "DISPLAYID",
            "targetKeys": "DISPLAYID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Display Adapter",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "DPACDISPLAY",
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
            "remarks": "Node Id",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "NODEID",
            "tableName": "DPADISPLAY",
            "tableColumnName": "NODEID"
        },
        {
            "attributeName": "DISPLAYID",
            "required": true,
            "persistent": true,
            "title": "Display Id",
            "remarks": "Display Id",
            "sameAsAttribute": "DISPLAYID",
            "sameAsObject": "DPADISPLAY",
            "viewColumnName": "DISPLAYID",
            "tableName": "DPADISPLAY",
            "tableColumnName": "DISPLAYID"
        },
        {
            "attributeName": "DISPLAYTYPE",
            "required": false,
            "persistent": true,
            "title": "Display Type",
            "remarks": "Type of display (for example, CRT, flat panel, etc.).",
            "sameAsAttribute": "DISPLAYTYPE",
            "sameAsObject": "DPADISPLAY",
            "viewColumnName": "DISPLAYTYPE",
            "tableName": "DPADISPLAY",
            "tableColumnName": "DISPLAYTYPE"
        },
        {
            "attributeName": "DISPLAYSIZE",
            "required": false,
            "persistent": true,
            "title": "Display Size",
            "remarks": "Display size (diagonal) of the computer monitor in inches.",
            "sameAsAttribute": "DISPLAYSIZE",
            "sameAsObject": "DPADISPLAY",
            "viewColumnName": "DISPLAYSIZE",
            "tableName": "DPADISPLAY",
            "tableColumnName": "DISPLAYSIZE"
        },
        {
            "attributeName": "MAXHORZRESOLUTION",
            "required": false,
            "persistent": true,
            "title": "Maximum Horizontal Resolution",
            "remarks": "Maximum horizontal resolution of the display, in pixels.",
            "sameAsAttribute": "MAXHORZRESOLUTION",
            "sameAsObject": "DPADISPLAY",
            "viewColumnName": "MAXHORZRESOLUTION",
            "tableName": "DPADISPLAY",
            "tableColumnName": "MAXHORZRESOLUTION"
        },
        {
            "attributeName": "MAXVERTRESOLUTION",
            "required": false,
            "persistent": true,
            "title": "Maximum Vertical Resolution",
            "remarks": "Maximum vertical resolution of the display, in pixels.",
            "sameAsAttribute": "MAXVERTRESOLUTION",
            "sameAsObject": "DPADISPLAY",
            "viewColumnName": "MAXVERTRESOLUTION",
            "tableName": "DPADISPLAY",
            "tableColumnName": "MAXVERTRESOLUTION"
        },
        {
            "attributeName": "COLORDEPTHBIT",
            "required": false,
            "persistent": true,
            "title": "Color Depth Bit",
            "remarks": "Maximum color depth of the display image. On computer monitors, this refers to the number of colors that any pixel can display. The number of colors that can be displayed corresponds to the number of bits per pixel.",
            "sameAsAttribute": "COLORDEPTHBIT",
            "sameAsObject": "DPADISPLAY",
            "viewColumnName": "COLORDEPTHBIT",
            "tableName": "DPADISPLAY",
            "tableColumnName": "COLORDEPTHBIT"
        },
        {
            "attributeName": "SERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial number of the display.",
            "sameAsAttribute": "SERIALNUMBER",
            "sameAsObject": "DPADISPLAY",
            "viewColumnName": "SERIALNUMBER",
            "tableName": "DPADISPLAY",
            "tableColumnName": "SERIALNUMBER"
        },
        {
            "attributeName": "ASSETTAG",
            "required": false,
            "persistent": true,
            "title": "Asset Tag",
            "remarks": "Asset tag of the display.",
            "sameAsAttribute": "ASSETTAG",
            "sameAsObject": "DPADISPLAY",
            "viewColumnName": "ASSETTAG",
            "tableName": "DPADISPLAY",
            "tableColumnName": "ASSETTAG"
        },
        {
            "attributeName": "MAKEMODEL",
            "required": false,
            "persistent": true,
            "title": "Make/Model",
            "remarks": "Make or model (product name) of the display. Sometimes the make or model field contains the name of the manufacturer of the display.",
            "sameAsAttribute": "MAKEMODEL",
            "sameAsObject": "DPADISPLAY",
            "viewColumnName": "MAKEMODEL",
            "tableName": "DPADISPLAY",
            "tableColumnName": "MAKEMODEL"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the display. This description contains relevant data that is not provided in other fields or that identifies the display in more detail. The data in this field is dependent on the discovery tool used to collect the display information; the field might be empty or might consist of several concatenated pieces of information.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "DPADISPLAY",
            "viewColumnName": "DESCRIPTION",
            "tableName": "DPADISPLAY",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Create Date",
            "sameAsAttribute": "CREATEDATE",
            "sameAsObject": "DPADISPLAY",
            "viewColumnName": "CREATEDATE",
            "tableName": "DPADISPLAY",
            "tableColumnName": "CREATEDATE"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change  Date",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "DPADISPLAY",
            "viewColumnName": "CHANGEDATE",
            "tableName": "DPADISPLAY",
            "tableColumnName": "CHANGEDATE"
        },
        {
            "attributeName": "CMANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Name of manufacturer of the display.",
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
            "remarks": "Manufacturer",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "MANUFACTURER",
            "tableName": "DPADISPLAY",
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
        "viewwhere": "dpadisplay.manufacturer=dpammanuvariant.manufacturervar",
        "viewselect": "select dpadisplay.nodeid,dpadisplay.displayid,dpadisplay.displaytype,dpadisplay.displaysize, dpadisplay.maxhorzresolution,dpadisplay.maxvertresolution,dpadisplay.colordepthbit,dpadisplay.serialnumber, dpadisplay.assettag,dpadisplay.makemodel,dpadisplay.manufacturer,dpadisplay.description,dpadisplay.createdate, dpadisplay.changedate,dpadisplay.rowstamp,dpammanuvariant.manufacturername as cmanufacturer, dpammanuvariant.manufacturervar,dpammanuvariant.dpammanuvariantid,dpammanuvariant.rowstamp as rowstamp1",
        "viewfrom": "from dpadisplay,dpammanuvariant"
    },
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DPADISPLAY",
            "source": "DPACOMPUTER",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}