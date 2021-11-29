mos = {
    "objectName": "BILLTOSHIPTO",
    "className": "psdi.app.site.BilltoShiptoSet",
    "description": "List of addresses for site",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "BILLTOSHIPTOID",
    "primaryKeyColumns": [
        "ADDRESSCODE",
        "ORGID",
        "SITEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ADDRESS",
            "targetObject": "BILLTOSHIPTO",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, ADDRESSCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bill To / Ship To Address",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "BILLTOSHIPTO",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "BILLTOSHIPTO",
            "parentKeys": "PERSONID",
            "targetKeys": "BILLTOCONTACT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bill To Contact",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "BILLTOSHIPTO",
            "parentKeys": "PERSONID",
            "targetKeys": "SHIPTOCONTACT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Contact",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "BILLTOSHIPTO",
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
            "attributeName": "ADDRESSCODE",
            "required": true,
            "persistent": true,
            "title": "Address",
            "remarks": "The identifier of the address that is associated with the current record.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "BILLTO",
            "required": false,
            "persistent": true,
            "title": "Bill To",
            "remarks": "Indicates whether the specified address is to be used for billing.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BILLTOCONTACT",
            "required": false,
            "persistent": true,
            "title": "Bill to Contact",
            "remarks": "The person identified as the contact for billing for the site.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "BILLTODEFAULT",
            "required": false,
            "persistent": true,
            "title": "Default Bill To",
            "remarks": "Indicates whether the specified address is the default billing address. If only one billing address is specified for a site, this address is the default bill-to address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIPTO",
            "required": false,
            "persistent": true,
            "title": "Ship  To",
            "remarks": "Indicates whether the specified address is to be used for shipping.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIPTOCONTACT",
            "required": false,
            "persistent": true,
            "title": "Ship to Contact",
            "remarks": "The person identified as the contact for shipping for the site.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "SHIPTODEFAULT",
            "required": false,
            "persistent": true,
            "title": "Default Ship To",
            "remarks": "Indicates whether the specified address is the default shipping address. If only one shipping address is specified for a site, this address is the default ship-to address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "The identifier of the site within the organization.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The identifier of the organization.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "BILLTOSHIPTOID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ADDRESS",
            "target": "ADDRESS",
            "remarks": "Relationship to the address table, used to find the address record for an address within an organization.(billtoshipto.addresscode = address.addresscode and billtoshipto.orgid = address.orgid). The resulting set will contain zero or one object.",
            "whereClause": "addresscode=:addresscode and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "BILLTOPERSON",
            "target": "PERSON",
            "remarks": "Relationship to the person table, used to find the person record for the given billtocontact.(person.personid = billtoshipto.billtocontact). The resulting set will contain zero or one object.",
            "whereClause": "personid=:billtocontact",
            "cardinality": null
        },
        {
            "name": "SHIPTOPERSON",
            "target": "PERSON",
            "remarks": "Relationship to the person table, used to find the person record for the given shiptocontact.(person.personid = billtoshipto.shiptocontact). The resulting set will contain zero or one object.",
            "whereClause": "personid=:shiptocontact",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "BILLTODEFAULT",
            "source": "SITE",
            "remarks": "Relationship to the billtoshipto table, used to find the billtodefault record for given site.(site.siteid = billtoshipto.siteid and organization.orgid = billtoshipto.orgid and billtodefault=1). The resulting set will contain zero or one object.",
            "whereClause": "siteid=:siteid and orgid=:orgid and billtodefault=1",
            "cardinality": null
        },
        {
            "name": "BILLTOSHIPTO",
            "source": "SITE",
            "remarks": "Relationship to the BilltoShipto table, used to find billtoshipto records for a given site.(site.siteid = billtoshipto.siteid and site.orgid = billtoshipto.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "SHIPTODEFAULT",
            "source": "SITE",
            "remarks": "Relationship to the billtoshipto table, used to find the shiptodefault record for given site.(site.siteid = billtoshipto.siteid and organization.orgid = billtoshipto.orgid and shiptodefault=1). The resulting set will contain zero or one object.",
            "whereClause": "siteid=:siteid and orgid=:orgid and shiptodefault=1",
            "cardinality": null
        }
    ]
}