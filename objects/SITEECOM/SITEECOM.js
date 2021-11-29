mos = {
    "objectName": "SITEECOM",
    "className": "psdi.app.site.SiteEComSet",
    "description": "Buying ECommerce Information for each site.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SITEECOMID",
    "primaryKeyColumns": [
        "SITEID",
        "ORGID",
        "VENDOR"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "SITEECOM",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on ECommerce",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SITEECOM",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SITEECOM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site within the organization.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "VENDOR",
            "required": true,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Vendor or marketplace for which you are setting up the e-commerce relationship in Maximo. Click the Select Value button to select a valid vendor from those in the Companies application.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "MKTPLCID",
            "required": true,
            "persistent": true,
            "title": "Marketplace ID",
            "remarks": "Identifier of the buying site issued by the e-commerce supplier or marketplace.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MKTPLCIDDOMAIN",
            "required": false,
            "persistent": true,
            "title": "Marketplace ID Domain",
            "remarks": "Domain name of the marketplace. It identifies the group to which the marketplace ID belongs to, such as a company ID or user ID.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CUSTNUM",
            "required": false,
            "persistent": true,
            "title": "Customer #",
            "remarks": "Identifier of the buying site issued by the supplier or vendor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DUNSNUM",
            "required": false,
            "persistent": true,
            "title": "DUNS #",
            "remarks": "Database Universal Numbering System (DUNS) number for the buying site. This number is issued by Dun and Bradstreet for the buying entity.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEECOMID",
            "required": true,
            "persistent": true,
            "title": "SITEECOMID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SITEECOM",
            "source": "ORGANIZATION",
            "remarks": null,
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}