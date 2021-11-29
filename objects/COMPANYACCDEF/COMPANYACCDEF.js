mos = {
    "objectName": "COMPANYACCDEF",
    "className": "psdi.app.financial.CompanyAccDefSet",
    "description": "Company Default Accounts table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "COMPANYACCDEFID",
    "primaryKeyColumns": [
        "ORGID",
        "TYPE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "COMPANYACCDEF",
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
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Company Type",
            "remarks": "Company type. Enter a value or click the Select Value button.",
            "sameAsAttribute": "TYPE",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "RBNIACC",
            "required": false,
            "persistent": true,
            "title": "RBNI Account",
            "remarks": "Current default account for items received but not invoiced.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APCONTROLACC",
            "required": false,
            "persistent": true,
            "title": "AP Control Account",
            "remarks": "Current default for the Accounts Payable Control account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APSUSPENSEACC",
            "required": false,
            "persistent": true,
            "title": "AP Suspense Account",
            "remarks": "Current default account for the Accounts Payable Suspense account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OLDRBNIACC",
            "required": false,
            "persistent": true,
            "title": "Old RBNI Account",
            "remarks": "Previous default RBNI account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OLDAPCONTROLACC",
            "required": false,
            "persistent": true,
            "title": "Old AP Control Account",
            "remarks": "Previous default AP Control account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OLDAPSUSPENSEACC",
            "required": false,
            "persistent": true,
            "title": "Old Suspense Account",
            "remarks": "Previous default AP Suspense account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "COMPANYACCDEFID",
            "required": true,
            "persistent": true,
            "title": "COMPANYACCDEFID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMPACCDEFTYPE",
            "target": "SYNONYMDOMAIN",
            "remarks": null,
            "whereClause": "value = :type and domainid = 'COMPTYPE'",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMP_ACCDEF",
            "source": "COMPANIES",
            "remarks": null,
            "whereClause": "type=:type and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANYACCDEF",
            "source": "ORGANIZATION",
            "remarks": null,
            "whereClause": "orgid= :orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}