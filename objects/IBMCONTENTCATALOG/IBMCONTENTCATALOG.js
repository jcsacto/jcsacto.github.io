mos = {
    "objectName": "IBMCONTENTCATALOG",
    "className": "com.ibm.ism.content.CatalogSet",
    "description": "ISM Content Installer",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "IBMCONTENTCATALOGID",
    "primaryKeyColumns": [
        "IBMCONTENTCATALOGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "IBMCONTENTCATALOGID",
            "required": true,
            "persistent": true,
            "title": "Ibmcontentcatalogid",
            "remarks": "Ibmcontentcatalogid",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description_longdescription",
            "remarks": "Description_longdescription",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Hasld",
            "remarks": "Hasld",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URL",
            "required": false,
            "persistent": true,
            "title": "URL",
            "remarks": "URL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URL_NPF",
            "required": false,
            "persistent": false,
            "title": "Url_npf",
            "remarks": "Url_npf",
            "sameAsAttribute": "URL",
            "sameAsObject": "IBMCONTENTCATALOG"
        },
        {
            "attributeName": "DESC_NPF",
            "required": false,
            "persistent": false,
            "title": "Desc_npf",
            "remarks": "Desc_npf",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "IBMCONTENTCATALOG"
        },
        {
            "attributeName": "INFOURL",
            "required": false,
            "persistent": false,
            "title": "Information URL",
            "remarks": "URL pointing to information about this catalog",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CATALOGITEMS",
            "target": "IBMCONTENTITEM",
            "remarks": "Set of catalog items associated with this catalog",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SOURCECATALOG",
            "source": "IBMCONTENTRECEIPTS",
            "remarks": "A relationship to the source catalog",
            "whereClause": "url=:catalogurl",
            "cardinality": null
        }
    ]
}