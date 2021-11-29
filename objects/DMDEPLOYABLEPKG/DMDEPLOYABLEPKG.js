mos = {
    "objectName": "DMDEPLOYABLEPKG",
    "className": "psdi.dm.virtual.DMDeployablePkgSet",
    "description": "Non-persistent object for deployable packages",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "PACKAGE",
            "required": false,
            "persistent": false,
            "title": "Package",
            "remarks": "Either the package name or the file name for the package",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": false,
            "title": "Type",
            "remarks": "Type of package",
            "sameAsAttribute": "TYPE",
            "sameAsObject": "DMPKGDSTTRGT"
        },
        {
            "attributeName": "MANIFEST",
            "required": false,
            "persistent": false,
            "title": "Manifest",
            "remarks": "Content of the manifest file of the package.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDATE",
            "required": false,
            "persistent": false,
            "title": "Create Date",
            "remarks": "Date and time the package was created",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONFIRM",
            "required": true,
            "persistent": false,
            "title": "Do you have a current backup",
            "remarks": "Confirm backup exists",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISPREVIEW",
            "required": false,
            "persistent": false,
            "title": "Preview",
            "remarks": "Deploy the package in preview mode or not.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREVIEWSQL",
            "required": false,
            "persistent": false,
            "title": "Include Database Configuration Commands",
            "remarks": "Include sql and ddl command in preview log or not",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROLLBACKPOINT",
            "required": false,
            "persistent": false,
            "title": "Rollback Point",
            "remarks": "Point at which rollback will be called for preview mode.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAPDEFNEEDED",
            "required": false,
            "persistent": false,
            "title": "Skip prompts to create attribute rules",
            "remarks": "If a package definition has attributes selected for replacement but no attribute replacement rules are defined in the target environment, you are prompted to create the rules. Select this check box to skip the prompts.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMSOURCEPRODUCTS",
            "target": "DMSOURCEPRODUCTS",
            "remarks": "Relationship to display source products information for a package",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "DMTARGETPRODUCTS",
            "target": "DMTARGETPRODUCTS",
            "remarks": "Relationship to display target products information for a package",
            "whereClause": "1=1",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMDEPLOYABLEPKG",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship to get deployable packages",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}