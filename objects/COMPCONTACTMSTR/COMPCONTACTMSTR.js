mos = {
    "objectName": "COMPCONTACTMSTR",
    "className": "psdi.app.compmaster.CompContactMasterSet",
    "description": "Company master - main or remit contact person",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "COMPCONTACTMSTRID",
    "primaryKeyColumns": [
        "CONTACT",
        "COMPANY",
        "COMPANYSETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "SETS",
            "targetObject": "COMPCONTACTMSTR",
            "parentKeys": "SETID",
            "targetKeys": "COMPANYSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company Set",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "COMPANY",
            "required": true,
            "persistent": true,
            "title": "Company",
            "remarks": "Unique Identifier For Company",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CONTACT",
            "required": true,
            "persistent": true,
            "title": "Contact",
            "remarks": "Contacts name",
            "sameAsAttribute": "CONTACT",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "COMPANYSETID",
            "required": true,
            "persistent": true,
            "title": "Company Set",
            "remarks": "Company set identifier.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "POSITION",
            "required": false,
            "persistent": true,
            "title": "Position",
            "remarks": "Contacts position",
            "sameAsAttribute": "POSITION",
            "sameAsObject": "COMPCONTACT"
        },
        {
            "attributeName": "VOICEPHONE",
            "required": false,
            "persistent": true,
            "title": "Phone",
            "remarks": "Contacts voicemail phone number",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "FAXPHONE",
            "required": false,
            "persistent": true,
            "title": "Fax",
            "remarks": "Contacts fax phone number",
            "sameAsAttribute": "FAX",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "EMAIL",
            "required": false,
            "persistent": true,
            "title": "E-mail",
            "remarks": "Contacts email address",
            "sameAsAttribute": "EMAIL",
            "sameAsObject": "COMPCONTACT"
        },
        {
            "attributeName": "HOMEPHONE",
            "required": false,
            "persistent": true,
            "title": "Home Phone",
            "remarks": "Contacts home phone number",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "PAGERPHONE",
            "required": false,
            "persistent": true,
            "title": "Pager Phone",
            "remarks": "Contacts pager phone number",
            "sameAsAttribute": "PAGERPHONE",
            "sameAsObject": "COMPCONTACT"
        },
        {
            "attributeName": "PROCUREMENTCARDNUM",
            "required": false,
            "persistent": true,
            "title": "Procurement Card #",
            "remarks": "Procurement Card Number.",
            "sameAsAttribute": "PROCUREMENTCARDNUM",
            "sameAsObject": "COMPCONTACT"
        },
        {
            "attributeName": "PROCCARDEXPIREDATE",
            "required": false,
            "persistent": true,
            "title": "Procurement Card Expiration Date",
            "remarks": "Procurement Card Expiration Date.",
            "sameAsAttribute": "PROCCARDEXPIREDATE",
            "sameAsObject": "COMPCONTACT"
        },
        {
            "attributeName": "MNETUSERID",
            "required": false,
            "persistent": true,
            "title": "Mnet User Id",
            "remarks": "Mnet assigned User Id",
            "sameAsAttribute": "MNETUSERID",
            "sameAsObject": "COMPCONTACT"
        },
        {
            "attributeName": "COMPCONTACTMSTRID",
            "required": true,
            "persistent": true,
            "title": "COMPCONTACTMSTRID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMPMASTERBYCONTACT",
            "target": "COMPMASTER",
            "remarks": "Relationship to the CompMastertable, used to find the company master record for a given contact master. (compmaster.company = compcontactmstr.company and compmaster.companysetid = compcontactmstr.companysetid). The resulting set will contain one object.",
            "whereClause": "company=:company and companysetid=:companysetid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMPCONTACTMSTR",
            "source": "COMPMASTER",
            "remarks": "Relationship to the CompContactMstr table, used to find all contact records for a given company master. (compcontactmstr.company = compmaster.company and compcontactmstr.companysetid = compmaster.companysetid). The resulting set will contain zero or more objects.",
            "whereClause": "company=:company and companysetid=:companysetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYCONTACT",
            "source": "COMPMASTER",
            "remarks": "Relationship to the CompContactMstr table, used to find the primary contact record for a given company master. (compcontactmstr.contact = compmaster.contact and compcontactmstr.company = compmaster.company and compcontactmstr.companysetid = compmaster.companysetid). The resulting set will contain zero or one object.",
            "whereClause": "contact=:contact and company=:company and companysetid=:companysetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REMITCONTACT",
            "source": "COMPMASTER",
            "remarks": "Relationship to the CompContactMstr table, used to find the remit contact record for a given company master. (compcontactmstr.contact = compmaster.remitcontact and compcontactmstr.company = compmaster.company and compcontactmstr.companysetid = compmaster.companysetid). The resulting set will contain zero or one object.",
            "whereClause": "contact=:remitcontact and company=:company and companysetid=:companysetid",
            "cardinality": "UNDEFINED"
        }
    ]
}