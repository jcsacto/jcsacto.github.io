mos = {
    "objectName": "MAXLICENSE",
    "className": "psdi.app.lictrack.MaxLicenseSet",
    "description": "Table for license usage data",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLICENSEID",
    "primaryKeyColumns": [
        "LICENSENUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXLICENSE",
            "targetObject": "MAXLICPURCHDET",
            "parentKeys": "LICENSENUM",
            "targetKeys": "LICENSENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo License",
            "longDescription": null
        },
        {
            "objectName": "MAXLICENSE",
            "targetObject": "MAXLICUSAGE",
            "parentKeys": "LICENSENUM",
            "targetKeys": "LICENSENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo License",
            "longDescription": null
        },
        {
            "objectName": "MAXLICENSE",
            "targetObject": "MAXLICUSERASC",
            "parentKeys": "LICENSENUM",
            "targetKeys": "LICENSENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo License",
            "longDescription": null
        },
        {
            "objectName": "MAXLICENSE",
            "targetObject": "MAXLICUSGCONCURT",
            "parentKeys": "LICENSENUM",
            "targetKeys": "LICENSENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo License",
            "longDescription": null
        },
        {
            "objectName": "MAXLICENSE",
            "targetObject": "MAXLICUSGVAR",
            "parentKeys": "LICENSENUM",
            "targetKeys": "LICENSENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo License",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXLICENSE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXLICENSE",
            "parentKeys": "PERSONID",
            "targetKeys": "RESPONSIBLEPERSON",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Responsible Person",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LICENSENUM",
            "required": true,
            "persistent": true,
            "title": "License Num",
            "remarks": "License Num",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICDESC",
            "required": false,
            "persistent": true,
            "title": "License Description",
            "remarks": "License Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRDNAME",
            "required": true,
            "persistent": true,
            "title": "Product Name",
            "remarks": "Link to other tables",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICMETRICTYPE",
            "required": true,
            "persistent": true,
            "title": "License Type",
            "remarks": "Domain Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICQTY",
            "required": true,
            "persistent": true,
            "title": "License Entitled Quantity",
            "remarks": "Licensed Entitled Quantity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "License Status",
            "remarks": "License Status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICSTARTDATE",
            "required": false,
            "persistent": true,
            "title": "License Start Date",
            "remarks": "Date the license starts.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICENDDATE",
            "required": false,
            "persistent": true,
            "title": "License End Date",
            "remarks": "Date the license ends.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Vendor from which this license was purchased",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PURCHASEDDATE",
            "required": false,
            "persistent": true,
            "title": "Purchased Date",
            "remarks": "Date when the license is purchased",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAINRENEWALDATE",
            "required": false,
            "persistent": true,
            "title": "Maintenance Renewal Date",
            "remarks": "Date of renewal",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESPONSIBLEPERSON",
            "required": false,
            "persistent": true,
            "title": "Person Responsible",
            "remarks": "Person Responsible for this license.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CREATEDATE",
            "required": false,
            "persistent": true,
            "title": "Record Creation Date",
            "remarks": "Record creation date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDATEDATE",
            "required": false,
            "persistent": true,
            "title": "Record Update Date",
            "remarks": "Record update date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXLICENSEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICDESC_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "A detailed description of the license.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date the License status was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ALNDOMAIN",
            "target": "ALNDOMAIN",
            "remarks": "Relationship from MAXLICENSE to ALNDOMAIN table.",
            "whereClause": "domainid='LICMETRICTYPE' and value=:LICMETRICTYPE ",
            "cardinality": null
        },
        {
            "name": "MAXLICUSGVARSTD",
            "target": "ALNDOMAIN",
            "remarks": "Relationship from MAXLICENSE to ALNDOMAIN table.",
            "whereClause": "domainid='LICUSAGESTATUS' and value=(select usagestatus from maxlicusgvar where licensenum=:licensenum and islatest=1)",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship from MAXLICENSE to DOCLINKS table.",
            "whereClause": "ownertable = 'MAXLICENSE' and ownerid = :maxlicenseid",
            "cardinality": null
        },
        {
            "name": "MAXLICCHGSTATUS",
            "target": "MAXLICCHGSTATUS",
            "remarks": "Relation to non persistent object for changing license status.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "MAXLICPRODAPPS",
            "target": "MAXLICPRODAPPS",
            "remarks": "Relationship from MAXLICENSE to MAXPRODAPP table.",
            "whereClause": "prodname=:PRDNAME ",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MAXLICPURCHDET",
            "target": "MAXLICPURCHDET",
            "remarks": "Relationship from MAXLICENSE to ALNDOMAIN table.",
            "whereClause": "licensenum=:licensenum",
            "cardinality": null
        },
        {
            "name": "MAXLICUSAGE",
            "target": "MAXLICUSAGE",
            "remarks": "Relationship from MAXLICENSE to MAXLICUSAGE table.",
            "whereClause": "licensenum=:licensenum and islatest=1",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MAXLICUSERASC",
            "target": "MAXLICUSERASC",
            "remarks": "Relationship from MAXLICENSE to MAXLICUSERASC table.",
            "whereClause": "licensenum=:licensenum",
            "cardinality": null
        },
        {
            "name": "MAXLICUSGVAR",
            "target": "MAXLICUSGVAR",
            "remarks": "Relationship from MAXLICENSE to MAXLICUSGVAR table.",
            "whereClause": "licensenum=:licensenum and islatest=1",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Relationship from MAXLICENSE to PERSON table.",
            "whereClause": "personid=:responsibleperson",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXLICENSE",
            "source": "MAXLICUSAGE",
            "remarks": "Relationship from MAXLICUSAGE to MAXLICENSE table.",
            "whereClause": "licensenum=:licensenum",
            "cardinality": null
        },
        {
            "name": "MAXLICENSE",
            "source": "MAXLICUSERASC",
            "remarks": "Relationship from MAXLICUSERASC to MAXLICENSE table.",
            "whereClause": "licensenum=:licensenum",
            "cardinality": null
        }
    ]
}