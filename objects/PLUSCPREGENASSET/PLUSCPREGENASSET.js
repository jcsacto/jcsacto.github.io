mos = {
    "objectName": "PLUSCPREGENASSET",
    "className": "psdi.plusc.app.plusctmplt.virtual.PlusCPreviewGenAssetSet",
    "description": "Preview of a asset that will be generated",
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
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "The asset identifier for the asset that you generate from the template.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "The location for the asset that you generate from the template or apply the template to.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "Identifies the status of the asset that you generate from the template or apply the template to.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "INSTALLDATE",
            "required": false,
            "persistent": false,
            "title": "Installation Date",
            "remarks": "The installation date for the asset that you generate from the template or apply the template to.",
            "sameAsAttribute": "INSTALLDATE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SERIALNUM",
            "required": false,
            "persistent": false,
            "title": "Serial #",
            "remarks": "Identifies the serial number for the asset that you generate from the template or apply the template to.",
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
            "remarks": "Identifies the start date for PM for assets that you generate from the template or apply the template to. The default is the current date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMSTOREROOM",
            "required": false,
            "persistent": false,
            "title": "PM Storeroom",
            "remarks": "Identifies the PM storeroom for assets that you generate from the template or apply the template to.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Identifies the Site for the asset that you generate from the template or apply the template to.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "EXISTINGASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Identifies the asset. By default, this value remains the asset identifier after you apply the template.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "The organization for the asset that you generate from the template or apply the template to.",
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
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PLUSCPREGENASSET",
            "source": "PLUSCDASSETDATA",
            "remarks": "Empty relationship to the PLUSCPREGENASSET table",
            "whereClause": null,
            "cardinality": null
        }
    ]
}