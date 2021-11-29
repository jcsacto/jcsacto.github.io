mos = {
    "objectName": "DPASOFTWARE",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Applications",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SOFTWAREID",
    "primaryKeyColumns": [
        "SOFTWAREID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DPASOFTWARE",
            "targetObject": "DPACSOFTWARE",
            "parentKeys": "SOFTWAREID",
            "targetKeys": "SOFTWAREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Software",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPASOFTWARE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Software",
            "longDescription": null
        },
        {
            "objectName": "DPAMSWSUITE",
            "targetObject": "DPASOFTWARE",
            "parentKeys": "SUITEID",
            "targetKeys": "SUITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Assets Software Suite Setup",
            "longDescription": null
        },
        {
            "objectName": "TLOAMSOFTWARE",
            "targetObject": "DPASOFTWARE",
            "parentKeys": "TLOAMSOFTWAREID",
            "targetKeys": "TLOAMPRODUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Software",
            "longDescription": null
        },
        {
            "objectName": "TLOAMSOFTWARE",
            "targetObject": "DPASOFTWARE",
            "parentKeys": "TLOAMSOFTWAREID",
            "targetKeys": "TLOAMSOFTWAREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Software Product",
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
            "attributeName": "SOFTWAREID",
            "required": true,
            "persistent": true,
            "title": "Software",
            "remarks": "Software Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUITEID",
            "required": false,
            "persistent": true,
            "title": "Suite Id",
            "remarks": "Suite Id",
            "sameAsAttribute": "SUITEID",
            "sameAsObject": "DPAMSWSUITE"
        },
        {
            "attributeName": "SOFTWARENAME",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Software Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGUAGE",
            "required": false,
            "persistent": true,
            "title": "Language",
            "remarks": "Language",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VERSION",
            "required": false,
            "persistent": true,
            "title": "Version",
            "remarks": "Version",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICENSEDORG",
            "required": false,
            "persistent": true,
            "title": "Licensed Organization",
            "remarks": "Licensed Organization",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICENSEDUSER",
            "required": false,
            "persistent": true,
            "title": "Licensed User",
            "remarks": "Licensed User",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USAGECOUNT",
            "required": false,
            "persistent": true,
            "title": "Usage Count",
            "remarks": "Usage Count",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTUSAGEDATE",
            "required": false,
            "persistent": true,
            "title": "Last Usage Date",
            "remarks": "Last Usage Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTALLPATH",
            "required": false,
            "persistent": true,
            "title": "Install Path",
            "remarks": "Install Path",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTALLDATE",
            "required": false,
            "persistent": true,
            "title": "Installation Date",
            "remarks": "Install Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRODUCTID",
            "required": false,
            "persistent": true,
            "title": "Product Id",
            "remarks": "Product Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description",
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
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Application Type",
            "remarks": "Software Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUITENAME",
            "required": false,
            "persistent": false,
            "title": "Suite",
            "remarks": "Suite Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VUSAGEDISPLAYTEXT",
            "required": false,
            "persistent": false,
            "title": "Usage",
            "remarks": "Usage Display Text",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FIRSTENCOUNTERED1",
            "required": false,
            "persistent": true,
            "title": "First Encountered Date",
            "remarks": "Date software first encountered",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTENCOUNTERED1",
            "required": false,
            "persistent": true,
            "title": "Last Encountered Date",
            "remarks": "Date software last encountered",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMSOFTWAREID",
            "required": false,
            "persistent": true,
            "title": "Software",
            "remarks": "Link to the Software Catalog entry for the discovered software",
            "sameAsAttribute": "TLOAMSOFTWAREID",
            "sameAsObject": "TLOAMSOFTWARE"
        },
        {
            "attributeName": "TLOAMPRODUCTID",
            "required": false,
            "persistent": true,
            "title": "Software",
            "remarks": "Link to the Software Catalog entry for the assigned software product (in Tivoli Asset Discovery)",
            "sameAsAttribute": "TLOAMSOFTWAREID",
            "sameAsObject": "TLOAMSOFTWARE"
        },
        {
            "attributeName": "TLOAMUNINSTDATE",
            "required": false,
            "persistent": true,
            "title": "Uninstall Date",
            "remarks": "The date when the software has been unsinstalled",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DPASOFTWARE_DPASWSUITE",
            "target": "DPASWSUITE",
            "remarks": null,
            "whereClause": "suiteid=:suiteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DDPASOFTWARE",
            "source": "COMPUTERSYSTEM",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERJ",
            "source": "DPAMMANUVARIANT",
            "remarks": "Find the software that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFSWNAME",
            "source": "DPAMSWVARIANT",
            "remarks": "Find the SW instances that reference this SW",
            "whereClause": "softwarename=:softwarevariant",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPASOFTWARE",
            "source": "TLOAMSOFTWARE",
            "remarks": "Deployed software inventory (TAMIT) for a catalog entry",
            "whereClause": "tloamsoftwareid=:tloamsoftwareid",
            "cardinality": null
        }
    ]
}