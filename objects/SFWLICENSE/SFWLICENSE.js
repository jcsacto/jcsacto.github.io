mos = {
    "objectName": "SFWLICENSE",
    "className": "psdi.app.sfwlicview.SfwLicenseSet",
    "description": "Software License",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SFWLICENSEID",
    "primaryKeyColumns": [
        "SFWLICENSEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "SFWLICENSE",
            "targetObject": "CONTSFWLIC",
            "parentKeys": "SFWLICENSEID",
            "targetKeys": "SFWLICENSEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Sofware License",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SFWLICENSE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SFWLICENSEID",
            "required": true,
            "persistent": true,
            "title": "License",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The License Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "The License Vendor",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLATFORM",
            "required": false,
            "persistent": true,
            "title": "Platform",
            "remarks": "The License Platform",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICENSETYPE",
            "required": false,
            "persistent": true,
            "title": "License Type",
            "remarks": "The License Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICENSELOCATION",
            "required": false,
            "persistent": true,
            "title": "License Location",
            "remarks": "The License Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CAPACITY",
            "required": false,
            "persistent": true,
            "title": "Capacity",
            "remarks": "The License Capacity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CAPACITYUNIT",
            "required": false,
            "persistent": true,
            "title": "Capacity Unit",
            "remarks": "The License Capacity Unit",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALCCAPACITY",
            "required": false,
            "persistent": true,
            "title": "Calculated Capacity",
            "remarks": "The discovered License capacity, expressed as a number of Capacity Units. If the discovered capacity of the Hardware is expressed in MIPS, then the value is converted to MSUs at the Vendor's conversion rate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CAPACITYDELTA",
            "required": false,
            "persistent": true,
            "title": "Capacity Delta",
            "remarks": "The difference between the License Capacity and the capacity of the System on which the software is installed, expressed in Capacity Units.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSOCIATED",
            "required": true,
            "persistent": true,
            "title": "Associated",
            "remarks": "Indicates whether the license is associated to a Contract",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ENTERPRISE",
            "required": false,
            "persistent": true,
            "title": "Enterprise",
            "remarks": "Enterprise",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPDATE",
            "required": false,
            "persistent": true,
            "title": "Expiration Date",
            "remarks": "The License Expiration Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "License Start Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "License Comments",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTALLEDUSED",
            "required": false,
            "persistent": true,
            "title": "Installed/Used",
            "remarks": "Installed/Used",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCOPE",
            "required": false,
            "persistent": true,
            "title": "Scope",
            "remarks": "License Scope",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CPUCOMPLIANT",
            "required": false,
            "persistent": true,
            "title": "CPU Compliant",
            "remarks": "Indicates Compliancy (Y/N)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICENSENUM",
            "required": false,
            "persistent": true,
            "title": "License Number",
            "remarks": "License Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CONTSFWLIC",
            "target": "CONTSFWLIC",
            "remarks": "Relationship to the contsfwlic table.(contsfwlic.sfwlicenseid=sfwlicense.sfwlicenseid)",
            "whereClause": "sfwlicenseid=:sfwlicenseid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SFWLICENSE",
            "source": "CONTRACTLINE",
            "remarks": "Relationship to the sfwlicense table for sfwlicenseid associated with a contract line.",
            "whereClause": "sfwlicenseid in (select sfwlicenseid from contsfwlic where contractlineid=:contractlineid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SFWLICENSE",
            "source": "CONTSFWLIC",
            "remarks": "Relationship to the sfwlicense table.(contsfwlic.sfwlicenseid=sfwlicense.sfwlicenseid)",
            "whereClause": "sfwlicenseid=:sfwlicenseid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SFWLICENSE",
            "source": "SFWVIEW",
            "remarks": "Relationship to the sfwlicense table for sfwlicenseid associated with a contract.",
            "whereClause": "sfwlicenseid in (select sfwlicenseid from contsfwlic where contractid=:contractid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SFWLICENSE",
            "source": "SFWVIEWLINE",
            "remarks": "Relationship to the sfwlicense table for sfwlicenseid associated with a software contract line.",
            "whereClause": "sfwlicenseid in (select sfwlicenseid from contsfwlic where contractlineid=:sfwviewlineid)",
            "cardinality": "UNDEFINED"
        }
    ]
}