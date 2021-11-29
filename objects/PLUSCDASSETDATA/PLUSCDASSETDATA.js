mos = {
    "objectName": "PLUSCDASSETDATA",
    "className": "psdi.plusc.app.plusctmplt.virtual.PlusCDefaultAssetDataSet",
    "description": "Default data for generating assets from a template",
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
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "Identifies the default location for assets that you generate from the template or apply the template to. Enter a location or click Detail Menu to select a location. The location must be a valid location in the current site.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "Identifies the default status for assets that you generate from the template or apply the template to. The default for new asset records is NOT READY.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "INSTALLDATE",
            "required": false,
            "persistent": false,
            "title": "Installation Date",
            "remarks": "Identifies the default installation date for assets that you generate from the template or apply the template to. The default date for new asset records is the current date.",
            "sameAsAttribute": "INSTALLDATE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SERIALNUM",
            "required": false,
            "persistent": false,
            "title": "Serial #",
            "remarks": "Identifies the default serial number or portion of the serial number for assets that you generate from the template or apply the template to. If generate or apply to multiple assets, edit the Serial # field in the Assets table so that each asset has the correct unique serial number.",
            "sameAsAttribute": "SERIALNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "METERSTARTDATE",
            "required": false,
            "persistent": false,
            "title": "Meter Start Date",
            "remarks": "Identifies the default date that the meter begins for assets that you generate from the template or apply the template to. The default is the current date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMSTARTDATE",
            "required": false,
            "persistent": false,
            "title": "PM Start Date",
            "remarks": "Identifies the default start date for PM for assets that you generate from the template or apply the template to. The default is the current date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMSTOREROOM",
            "required": false,
            "persistent": false,
            "title": "PM Storeroom",
            "remarks": "Identifies the default PM storeroom for assets that you generate from the template or apply the template to.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "Identifies the number of asset records with the associated asset identifier data to generate from the template or apply the template to.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTNUM",
            "required": false,
            "persistent": false,
            "title": "Starting Asset #",
            "remarks": "The initial number for the asset identifier for the series of asset records that you want to generate or apply the template to. This value must be numeric. The total number of characters in the Prefix, Suffix, and Starting Asset # fields cannot be greater than the Asset field length.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREFIX",
            "required": false,
            "persistent": false,
            "title": "Prefix",
            "remarks": "Optional prefix for the asset identifiers for assets that you generate from the template or apply the template to. The total number of characters in the Prefix, Suffix, and Starting Asset # fields cannot be greater than the Asset field length.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUFFIX",
            "required": false,
            "persistent": false,
            "title": "Suffix",
            "remarks": "Optional suffix for the asset identifiers for assets that you generate from the template or apply the template to. The total number of characters in the Prefix, Suffix, and Starting Asset # fields cannot be greater than the Asset field length.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Identifies the site for the assets that you generate from the template or apply the template to.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "orgid",
            "remarks": "The organization for assets that you generate from the template or apply the template to.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "DEPRSTARTDATE",
            "required": false,
            "persistent": false,
            "title": "Depreciation Start Date",
            "remarks": "Date that depreciation on the asset begins",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PLUSCPREGENASSET",
            "target": "PLUSCPREGENASSET",
            "remarks": "Empty relationship to the PLUSCPREGENASSET table",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "SITE",
            "target": "SITE",
            "remarks": "Relationship to the SITE table",
            "whereClause": "siteid = :siteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}