mos = {
    "objectName": "COMPCONTACT",
    "className": "psdi.app.company.CompContactSet",
    "description": "Company Main or Remit Contact Person Information",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "COMPCONTACTID",
    "primaryKeyColumns": [
        "ORGID",
        "COMPANY",
        "CONTACT"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "COMPCONTACT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, COMPANY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Company Contact",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "COMPCONTACT",
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
            "attributeName": "COMPANY",
            "required": true,
            "persistent": true,
            "title": "Company",
            "remarks": "Company",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CONTACT",
            "required": true,
            "persistent": true,
            "title": "Contact",
            "remarks": "Name of the person to contact at the company. If the person is the Customer Contact or Remit To Contact on the Addresses tab, and you delete a contact in this table, MAXIMO deletes the value on the Addresses tab.",
            "sameAsAttribute": "CONTACT",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "POSITION",
            "required": false,
            "persistent": true,
            "title": "Position",
            "remarks": "Position or title of the contact person.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VOICEPHONE",
            "required": false,
            "persistent": true,
            "title": "Phone",
            "remarks": "Business telephone number of the contact.",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "FAXPHONE",
            "required": false,
            "persistent": true,
            "title": "Fax",
            "remarks": "Fax number of the contact person.",
            "sameAsAttribute": "FAX",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "EMAIL",
            "required": false,
            "persistent": true,
            "title": "E-mail",
            "remarks": "E-mail address of the contact person.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HOMEPHONE",
            "required": false,
            "persistent": true,
            "title": "Home Phone",
            "remarks": "The home phone number of the contact person.",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "PAGERPHONE",
            "required": false,
            "persistent": true,
            "title": "Pager Phone",
            "remarks": "The pager phone number of the contact person.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCUREMENTCARDNUM",
            "required": false,
            "persistent": true,
            "title": "Procurement Card #",
            "remarks": "Procurement Card Number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCCARDEXPIREDATE",
            "required": false,
            "persistent": true,
            "title": "Procurement Card Expiration Date",
            "remarks": "Procurement Card Expiration Date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MNETUSERID",
            "required": false,
            "persistent": true,
            "title": "Mnet User Id",
            "remarks": "Mnet assigned User Id",
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
            "attributeName": "COMPCONTACTID",
            "required": true,
            "persistent": true,
            "title": "COMPCONTACTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CELLPHONE",
            "required": false,
            "persistent": true,
            "title": "Cell Phone",
            "remarks": "Cell phone number of the contact.",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMPANY",
            "target": "COMPANIES",
            "remarks": "Relationship to the Company table, used to find the company for a given company contact. (companies.company = compcontact.company). The resulting set will contain one object.",
            "whereClause": "company=:company and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANYBYCONTACT",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company=:company and contact=:contact",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTACT_COMPANY",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company=:company and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMP_CONTACT",
            "source": "COMPANIES",
            "remarks": null,
            "whereClause": "company=:company and contact=:contact and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTACT",
            "source": "COMPANIES",
            "remarks": "Relationship to the CompContact table, used to find all contact records for a given company. (compcontact.company = companies.company). The resulting set will contain zero or more objects.",
            "whereClause": "company=:company and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INT_CONTACT",
            "source": "COMPANIES",
            "remarks": "Relationship to the Compcontact table for INT table. The resulting set will contain zero or more objects.",
            "whereClause": "company=:company and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYCONTACT",
            "source": "COMPANIES",
            "remarks": "Relationship to the CompContact table, used to find the primary contact record for a given company. (compcontact.company = companies.company and compcontact.contact = companies.contact). Resulting set will contain zero or one object.",
            "whereClause": "company=:company and contact=:contact and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REMITCONTACT",
            "source": "COMPANIES",
            "remarks": "Relationship to the CompContact table, used to find the remit contact record for a given company. (compcontact.company = companies.company and compcontact.contact = companies.remitcontact). The resulting set will contain zero or one object.",
            "whereClause": "company=:company and contact=:remitcontact and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPCONTACT",
            "source": "RFQVENDOR",
            "remarks": "Relationship to the Companies table, used to find company records for a given request for quotation vendor. (compcontact.company = rfqvendor.vendor and compcontact.contact = rfqvendor.contact). The resulting set will contain zero or one objects.",
            "whereClause": "company = :vendor and contact = :contact and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}