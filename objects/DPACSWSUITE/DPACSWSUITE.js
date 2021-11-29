mos = {
    "objectName": "DPACSWSUITE",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Suites - Converted Manufacturer",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "DPASWSUITEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPACSWSUITE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "DPACSWSUITE",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        },
        {
            "objectName": "DPAMSWSUITE",
            "targetObject": "DPACSWSUITE",
            "parentKeys": "SUITEID",
            "targetKeys": "SUITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Assets Software Suite Setup",
            "longDescription": null
        },
        {
            "objectName": "DPASWSUITE",
            "targetObject": "DPACSWSUITE",
            "parentKeys": "DPASWSUITEID",
            "targetKeys": "DPASWSUITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Software Suite",
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
            "tableName": "DPASWSUITE",
            "tableColumnName": "NODEID"
        },
        {
            "attributeName": "SUITEID",
            "required": true,
            "persistent": true,
            "title": "Suite Id",
            "remarks": "Suite Id",
            "sameAsAttribute": "SUITEID",
            "sameAsObject": "DPAMSWSUITE",
            "viewColumnName": "SUITEID",
            "tableName": "DPASWSUITE",
            "tableColumnName": "SUITEID"
        },
        {
            "attributeName": "SUITENAME",
            "required": false,
            "persistent": true,
            "title": "Suite",
            "remarks": "Suite Name",
            "sameAsAttribute": "SUITENAME",
            "sameAsObject": "DPASWSUITE",
            "viewColumnName": "SUITENAME",
            "tableName": "DPASWSUITE",
            "tableColumnName": "SUITENAME"
        },
        {
            "attributeName": "LANGUAGE",
            "required": false,
            "persistent": true,
            "title": "Language",
            "remarks": "Language",
            "sameAsAttribute": "LANGUAGE",
            "sameAsObject": "DPASWSUITE",
            "viewColumnName": "LANGUAGE",
            "tableName": "DPASWSUITE",
            "tableColumnName": "LANGUAGE"
        },
        {
            "attributeName": "VERSION",
            "required": false,
            "persistent": true,
            "title": "Version",
            "remarks": "Version",
            "sameAsAttribute": "VERSION",
            "sameAsObject": "DPASWSUITE",
            "viewColumnName": "VERSION",
            "tableName": "DPASWSUITE",
            "tableColumnName": "VERSION"
        },
        {
            "attributeName": "LICENSEDORG",
            "required": false,
            "persistent": true,
            "title": "Licensed Organization",
            "remarks": "Licensed Organization",
            "sameAsAttribute": "LICENSEDORG",
            "sameAsObject": "DPASWSUITE",
            "viewColumnName": "LICENSEDORG",
            "tableName": "DPASWSUITE",
            "tableColumnName": "LICENSEDORG"
        },
        {
            "attributeName": "LICENSEDUSER",
            "required": false,
            "persistent": true,
            "title": "Licensed User",
            "remarks": "Licensed User",
            "sameAsAttribute": "LICENSEDUSER",
            "sameAsObject": "DPASWSUITE",
            "viewColumnName": "LICENSEDUSER",
            "tableName": "DPASWSUITE",
            "tableColumnName": "LICENSEDUSER"
        },
        {
            "attributeName": "USAGECOUNT",
            "required": false,
            "persistent": true,
            "title": "Usage Count",
            "remarks": "Usage Count",
            "sameAsAttribute": "USAGECOUNT",
            "sameAsObject": "DPASWSUITE",
            "viewColumnName": "USAGECOUNT",
            "tableName": "DPASWSUITE",
            "tableColumnName": "USAGECOUNT"
        },
        {
            "attributeName": "LASTUSAGEDATE",
            "required": false,
            "persistent": true,
            "title": "Last Usage Date",
            "remarks": "Last Usage Date",
            "sameAsAttribute": "LASTUSAGEDATE",
            "sameAsObject": "DPASWSUITE",
            "viewColumnName": "LASTUSAGEDATE",
            "tableName": "DPASWSUITE",
            "tableColumnName": "LASTUSAGEDATE"
        },
        {
            "attributeName": "INSTALLDATE",
            "required": false,
            "persistent": true,
            "title": "Installation Date",
            "remarks": "Install Date",
            "sameAsAttribute": "INSTALLDATE",
            "sameAsObject": "DPASWSUITE",
            "viewColumnName": "INSTALLDATE",
            "tableName": "DPASWSUITE",
            "tableColumnName": "INSTALLDATE"
        },
        {
            "attributeName": "SERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial Number",
            "sameAsAttribute": "SERIALNUMBER",
            "sameAsObject": "DPASWSUITE",
            "viewColumnName": "SERIALNUMBER",
            "tableName": "DPASWSUITE",
            "tableColumnName": "SERIALNUMBER"
        },
        {
            "attributeName": "PRODUCTID",
            "required": false,
            "persistent": true,
            "title": "Product Id",
            "remarks": "Product Id",
            "sameAsAttribute": "PRODUCTID",
            "sameAsObject": "DPASWSUITE",
            "viewColumnName": "PRODUCTID",
            "tableName": "DPASWSUITE",
            "tableColumnName": "PRODUCTID"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "DPASWSUITE",
            "viewColumnName": "DESCRIPTION",
            "tableName": "DPASWSUITE",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Create Date",
            "sameAsAttribute": "CREATEDATE",
            "sameAsObject": "DPASWSUITE",
            "viewColumnName": "CREATEDATE",
            "tableName": "DPASWSUITE",
            "tableColumnName": "CREATEDATE"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change Date",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "DPASWSUITE",
            "viewColumnName": "CHANGEDATE",
            "tableName": "DPASWSUITE",
            "tableColumnName": "CHANGEDATE"
        },
        {
            "attributeName": "VUSAGEDISPLAYTEXT",
            "required": false,
            "persistent": false,
            "title": "Usage",
            "remarks": "Usage Display Text",
            "sameAsAttribute": "VUSAGEDISPLAYTEXT",
            "sameAsObject": "DPASWSUITE"
        },
        {
            "attributeName": "DPASWSUITEID",
            "required": true,
            "persistent": true,
            "title": "Unique Identifier",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "DPASWSUITEID",
            "sameAsObject": "DPASWSUITE",
            "viewColumnName": "DPASWSUITEID",
            "tableName": "DPASWSUITE",
            "tableColumnName": "DPASWSUITEID"
        },
        {
            "attributeName": "CMANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer Name",
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
            "remarks": "Name of manufacturer of the software application suite.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "MANUFACTURER",
            "tableName": "DPASWSUITE",
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
        "viewwhere": "dpaswsuite.manufacturer=dpammanuvariant.manufacturervar",
        "viewselect": "select dpaswsuite.nodeid,dpaswsuite.suiteid,dpaswsuite.suitename,dpaswsuite.language,dpaswsuite.version, dpaswsuite.licensedorg,dpaswsuite.licenseduser,dpaswsuite.usagecount,dpaswsuite.lastusagedate,dpaswsuite.installdate, dpaswsuite.serialnumber,dpaswsuite.productid,dpaswsuite.manufacturer,dpaswsuite.description,dpaswsuite.createdate, dpaswsuite.changedate,dpaswsuite.dpaswsuiteid,dpaswsuite.rowstamp,dpammanuvariant.manufacturername as cmanufacturer, dpammanuvariant.manufacturervar,dpammanuvariant.dpammanuvariantid,dpammanuvariant.rowstamp as rowstamp1",
        "viewfrom": "from dpaswsuite,dpammanuvariant"
    },
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DPASWSUITE",
            "source": "DPACOMPUTER",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}