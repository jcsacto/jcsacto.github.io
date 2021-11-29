mos = {
    "objectName": "MAXTESTFIX",
    "className": "psdi.app.common.CommonMboSet",
    "description": "Limited availability test fix information",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXTESTFIXID",
    "primaryKeyColumns": [
        "PRODUCT",
        "VERSION",
        "HFLEVEL",
        "APARNUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "PRODUCT",
            "required": true,
            "persistent": true,
            "title": "Product",
            "remarks": "The name of the product that the fix was applied to.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VERSION",
            "required": true,
            "persistent": true,
            "title": "Version",
            "remarks": "The version the fix was applied to, in the format Version.Release.Major.FixPack",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HFLEVEL",
            "required": false,
            "persistent": true,
            "title": "Hot Fix Level",
            "remarks": "The cumulative hot fix level the fix was applied to.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APARNUM",
            "required": true,
            "persistent": true,
            "title": "APAR Number",
            "remarks": "The APAR number for the issue fixed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILENAMES",
            "required": false,
            "persistent": true,
            "title": "File Names",
            "remarks": "A comma-delimited list, including path, of files updated in the fix.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Comments about the fix, including issue details.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FIXEDDATE",
            "required": false,
            "persistent": true,
            "title": "Fixed Date",
            "remarks": "The date the fix was provided by development, in the format mm-dd-yyyy.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPLYDATE",
            "required": true,
            "persistent": true,
            "title": "Apply Date",
            "remarks": "The system timestamp when UpdateDB was executed and the record was inserted or updated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXTESTFIXID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}