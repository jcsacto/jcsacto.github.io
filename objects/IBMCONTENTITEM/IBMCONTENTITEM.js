mos = {
    "objectName": "IBMCONTENTITEM",
    "className": "com.ibm.ism.content.virtual.CatalogItemSet",
    "description": "ISM Content Installer item",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "URL",
            "required": true,
            "persistent": false,
            "title": "URL",
            "remarks": "URL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HOMEPAGE",
            "required": false,
            "persistent": false,
            "title": "Homepage",
            "remarks": "Homepage",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VERSION",
            "required": true,
            "persistent": false,
            "title": "Version",
            "remarks": "Version",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": false,
            "title": "Type",
            "remarks": "Content type: MM or CL( Migration Manager or Content Loader )",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CATEGORY",
            "required": false,
            "persistent": false,
            "title": "Category",
            "remarks": "Content Category",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NAME",
            "required": true,
            "persistent": false,
            "title": "Name",
            "remarks": "Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICENSEURL",
            "required": false,
            "persistent": false,
            "title": "License URL",
            "remarks": "URL to license",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCEPTEDLICENSE",
            "required": true,
            "persistent": false,
            "title": "Accepted License",
            "remarks": "Acceptedlicense",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTALLMESSAGES",
            "required": false,
            "persistent": false,
            "title": "Install messages",
            "remarks": "Installmessages",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTALLABLE",
            "required": true,
            "persistent": false,
            "title": "Installable",
            "remarks": "Installable if all prereqs are fulfilled",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTALLED",
            "required": true,
            "persistent": false,
            "title": "Installed",
            "remarks": "Installed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICENSETEXT",
            "required": false,
            "persistent": false,
            "title": "License Text",
            "remarks": "License text",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HTTPUSER",
            "required": false,
            "persistent": false,
            "title": "Username",
            "remarks": "Userid for HTTP authentication",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HTTPPASSWORD",
            "required": false,
            "persistent": false,
            "title": "Password",
            "remarks": "Password for HTTP authentication",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEEDSAUTHENTICATION",
            "required": true,
            "persistent": false,
            "title": "Needsauthentication",
            "remarks": "Needsauthentication",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URLTYPE",
            "required": false,
            "persistent": false,
            "title": "Urltype",
            "remarks": "Urltype",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NAVCODE",
            "required": false,
            "persistent": false,
            "title": "Navcode",
            "remarks": "Navcode",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DOCUMENTS",
            "target": "IBMCONTENTDOCUMENTS",
            "remarks": null,
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "MRIUCOMPONENTS",
            "target": "IBMCONTENTITEMCOMPONENTS",
            "remarks": null,
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "RECEIPTS",
            "target": "IBMCONTENTRECEIPTS",
            "remarks": null,
            "whereClause": "catalogitemurl=:url or navcode=:navcode",
            "cardinality": null
        },
        {
            "name": "MRIUREPLACEMENTS",
            "target": "IBMCONTENTREPLACEMENTS",
            "remarks": null,
            "whereClause": null,
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "CATALOGITEMS",
            "source": "IBMCONTENTCATALOG",
            "remarks": "Set of catalog items associated with this catalog",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}