mos = {
    "objectName": "COMPMASTER",
    "className": "psdi.app.compmaster.CompMasterSet",
    "description": "Company master table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "COMPMASTERID",
    "primaryKeyColumns": [
        "COMPANY",
        "COMPANYSETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CURRENCY",
            "targetObject": "COMPMASTER",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "COMPMASTER",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "COMPMASTER",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "COMPMASTER",
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
            "attributeName": "ADDRESS1",
            "required": false,
            "persistent": true,
            "title": "Address",
            "remarks": "Address Of Company",
            "sameAsAttribute": "ADDRESS1",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "ADDRESS2",
            "required": false,
            "persistent": true,
            "title": "City",
            "remarks": "Address Of Company",
            "sameAsAttribute": "ADDRESS2",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "ADDRESS3",
            "required": false,
            "persistent": true,
            "title": "State/Province",
            "remarks": "Address Of Company",
            "sameAsAttribute": "ADDRESS3",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "ADDRESS4",
            "required": false,
            "persistent": true,
            "title": "ZIP/Postal Code",
            "remarks": "Address Of Company",
            "sameAsAttribute": "ADDRESS4",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "ADDRESS5",
            "required": false,
            "persistent": true,
            "title": "Country",
            "remarks": "Address Of Company",
            "sameAsAttribute": "ADDRESS5",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "AUTOAPPROVEINV",
            "required": true,
            "persistent": true,
            "title": "Automatically Approve Invoice",
            "remarks": "Are Invoices automatically approved for the vendor upon receipt of the invoice?",
            "sameAsAttribute": "AUTOAPPROVEINV",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "AUTORECEIVEONASN",
            "required": true,
            "persistent": true,
            "title": "Automatically Approve Receipt on ASN",
            "remarks": "Does the vendor automatically process the receipts for an ASN?",
            "sameAsAttribute": "AUTORECEIVEONASN",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "AUTOSENDPOCANCEL",
            "required": true,
            "persistent": true,
            "title": "Send Vendor Transaction on PO Cancel",
            "remarks": "Is the vendor sent a transaction upon PO cancellation?",
            "sameAsAttribute": "AUTOSENDPOCANCEL",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "BANKACCOUNT",
            "required": false,
            "persistent": true,
            "title": "Bank",
            "remarks": "Vendor bank account for direct credits.",
            "sameAsAttribute": "BANKACCOUNT",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "BANKNUM",
            "required": false,
            "persistent": true,
            "title": "Bank Reference #",
            "remarks": "Bank and branch identification reference number. Used to transfer funds electronically and allow transfer of dollars between buyer and seller.",
            "sameAsAttribute": "BANKNUM",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CATALOGNAME",
            "required": false,
            "persistent": true,
            "title": "Catalog",
            "remarks": "The name that will display when choosing where to punch out.",
            "sameAsAttribute": "CATALOGNAME",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User Signature",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Record update date",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "COMPANIES"
        },
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
            "attributeName": "COMPANYSETID",
            "required": true,
            "persistent": true,
            "title": "Company Set",
            "remarks": "Company set identifier.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "CONTACT",
            "required": false,
            "persistent": true,
            "title": "Customer Contact",
            "remarks": "Company Main Contact",
            "sameAsAttribute": "CONTACT",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": true,
            "persistent": true,
            "title": "Currency",
            "remarks": "Currency type used.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "CUSTOMERNUM",
            "required": false,
            "persistent": true,
            "title": "Customer #",
            "remarks": "Code To Identify Client (Maximo User)",
            "sameAsAttribute": "CUSTOMERNUM",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "DEFAULTWAREHOUSE",
            "required": false,
            "persistent": true,
            "title": "Default Warehouse",
            "remarks": "The Vendor's default warehouse",
            "sameAsAttribute": "VENDORWAREHOUSE",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "DUNSNUM",
            "required": false,
            "persistent": true,
            "title": "DUNS #",
            "remarks": "The D and B DUNS (Data Universal Numbering System) number to provide smoother internet procurement.",
            "sameAsAttribute": "DUNSNUM",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "ECOMINTERFACE",
            "required": false,
            "persistent": true,
            "title": "E-commerce Supplier Location",
            "remarks": "E-Commerce supplier catalogue's location",
            "sameAsAttribute": "ECOMINTERFACE",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "ECOMMERCEENABLED",
            "required": true,
            "persistent": true,
            "title": "E-commerce Enabled",
            "remarks": "Is this company Electronic Commerce enabled?.",
            "sameAsAttribute": "ECOMMERCEENABLED",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID",
            "sameAsAttribute": "EXTERNALREFID",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "FAX",
            "required": false,
            "persistent": true,
            "title": "Company Fax",
            "remarks": "Fax Number",
            "sameAsAttribute": "FAX",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "FOB",
            "required": false,
            "persistent": true,
            "title": "FOB Point",
            "remarks": "Freight On Board",
            "sameAsAttribute": "FOB",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "FREIGHTTERMS",
            "required": false,
            "persistent": true,
            "title": "Freight Terms",
            "remarks": "Freight Terms",
            "sameAsAttribute": "FREIGHTTERMS",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "HOMEPAGE",
            "required": false,
            "persistent": true,
            "title": "Home Page",
            "remarks": "Home Page number for company. This number is the URL of the company's World Wide Web address.",
            "sameAsAttribute": "URLNAME",
            "sameAsObject": "DOCINFO"
        },
        {
            "attributeName": "MNETCOMPANYID",
            "required": false,
            "persistent": true,
            "title": "E-commerce Supplier",
            "remarks": "Mnet assigned company code",
            "sameAsAttribute": "MNETCOMPANYID",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "NAME",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Name Of Company",
            "sameAsAttribute": "NAME",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "PAYMENTTERMS",
            "required": false,
            "persistent": true,
            "title": "Payment Terms",
            "remarks": "Payment Terms",
            "sameAsAttribute": "PAYMENTTERMS",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "PAYVENDOR",
            "required": false,
            "persistent": true,
            "title": "Pay To",
            "remarks": "Vendor code to which payment is to be made.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "PHONE",
            "required": false,
            "persistent": true,
            "title": "Phone",
            "remarks": "Company Main Phone Number",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "PUNCHOUTENABLED",
            "required": true,
            "persistent": true,
            "title": "Punchout Enabled",
            "remarks": "Can this vendors catalog be accessed through punchout?",
            "sameAsAttribute": "PUNCHOUTENABLED",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "REMITADDRESS1",
            "required": false,
            "persistent": true,
            "title": "Address",
            "remarks": "Remit To Address line 1",
            "sameAsAttribute": "ADDRESS1",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "REMITADDRESS2",
            "required": false,
            "persistent": true,
            "title": "City",
            "remarks": "Remit To Address line 2",
            "sameAsAttribute": "ADDRESS2",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "REMITADDRESS3",
            "required": false,
            "persistent": true,
            "title": "State/Province",
            "remarks": "Remit To Address line 3",
            "sameAsAttribute": "ADDRESS3",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "REMITADDRESS4",
            "required": false,
            "persistent": true,
            "title": "ZIP/Postal Code",
            "remarks": "Remit To Address line 4",
            "sameAsAttribute": "ADDRESS4",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "REMITADDRESS5",
            "required": false,
            "persistent": true,
            "title": "Country",
            "remarks": "Remit To Address line 5",
            "sameAsAttribute": "ADDRESS5",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "REMITCONTACT",
            "required": false,
            "persistent": true,
            "title": "Contact",
            "remarks": "Company Remit To Contact",
            "sameAsAttribute": "CONTACT",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": "SENDERSYSID",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "SHIPVIA",
            "required": false,
            "persistent": true,
            "title": "Ship Via",
            "remarks": "Ship Via",
            "sameAsAttribute": "SHIPVIA",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "TAXEXEMPTCODE",
            "required": false,
            "persistent": true,
            "title": "Tax Exempt Code",
            "remarks": "Tax Exempt Code.",
            "sameAsAttribute": "TAXEXEMPTCODE",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "TAXEXEMPTNUM",
            "required": false,
            "persistent": true,
            "title": "Tax Exempt Number",
            "remarks": "National Tax Exempt Number for tax reporting purposes.",
            "sameAsAttribute": "TAXEXEMPTNUM",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Company Type",
            "remarks": "Type Of Company (V For Vendor)",
            "sameAsAttribute": "TYPE",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "VENDORSENDSASN",
            "required": true,
            "persistent": true,
            "title": "Vendor Sends ASN",
            "remarks": "Does the vendor send ASN transactions?",
            "sameAsAttribute": "VENDORSENDSASN",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "VENDORSENDSINV",
            "required": true,
            "persistent": true,
            "title": "Vendor Sends Invoice",
            "remarks": "Does the vendor send invoice transactions?",
            "sameAsAttribute": "VENDORSENDSINV",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "VENDORSENDSSTATUS",
            "required": true,
            "persistent": true,
            "title": "Vendor Sends Order Status",
            "remarks": "Does the vendor send status transactions?",
            "sameAsAttribute": "VENDORSENDSSTATUS",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "NAME_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Name Long Description",
            "remarks": "Long Description for this company.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREIGHTTERMS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Freight Terms Long Description",
            "remarks": "Long Description for Freight Terms",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDATERELATEDCOS",
            "required": true,
            "persistent": false,
            "title": "Update Related Companies",
            "remarks": "Update related company records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REGISTRATION1",
            "required": false,
            "persistent": true,
            "title": "Registration #",
            "remarks": "Tax registration number for tax type 1.",
            "sameAsAttribute": "REGISTRATION1",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "REGISTRATION2",
            "required": false,
            "persistent": true,
            "title": "Registration # 2",
            "remarks": "Tax registration number for tax type 2.",
            "sameAsAttribute": "REGISTRATION2",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "REGISTRATION3",
            "required": false,
            "persistent": true,
            "title": "Registration # 3",
            "remarks": "Tax registration number for tax type 3.",
            "sameAsAttribute": "REGISTRATION3",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "REGISTRATION4",
            "required": false,
            "persistent": true,
            "title": "Registration # 4",
            "remarks": "Tax registration number for tax type 4.",
            "sameAsAttribute": "REGISTRATION4",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "REGISTRATION5",
            "required": false,
            "persistent": true,
            "title": "Registration # 5",
            "remarks": "Tax registration number for tax type 5.",
            "sameAsAttribute": "REGISTRATION5",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "COMPMASTERID",
            "required": true,
            "persistent": true,
            "title": "COMPMASTERID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSPECTIONREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Inspection on Receipt",
            "remarks": "Whether items ordered from this company need to be inspected on receipt.",
            "sameAsAttribute": "INSPECTIONREQUIRED",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "DISABLED",
            "required": true,
            "persistent": true,
            "title": "Disqualified Vendor",
            "remarks": "Is this record active?",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMPANIES",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find all Companies created from a given company master. (organization.company = compmaster.company and orgid in (select orgid from organization where organization.companysetid = compmaster.companysetid)). The resulting set will contain zero or more objects.",
            "whereClause": "company=:company and orgid in (select orgid from organization where companysetid = :companysetid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPCONTACTMSTR",
            "target": "COMPCONTACTMSTR",
            "remarks": "Relationship to the CompContactMstr table, used to find all contact records for a given company master. (compcontactmstr.company = compmaster.company and compcontactmstr.companysetid = compmaster.companysetid). The resulting set will contain zero or more objects.",
            "whereClause": "company=:company and companysetid=:companysetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYCONTACT",
            "target": "COMPCONTACTMSTR",
            "remarks": "Relationship to the CompContactMstr table, used to find the primary contact record for a given company master. (compcontactmstr.contact = compmaster.contact and compcontactmstr.company = compmaster.company and compcontactmstr.companysetid = compmaster.companysetid). The resulting set will contain zero or one object.",
            "whereClause": "contact=:contact and company=:company and companysetid=:companysetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REMITCONTACT",
            "target": "COMPCONTACTMSTR",
            "remarks": "Relationship to the CompContactMstr table, used to find the remit contact record for a given company master. (compcontactmstr.contact = compmaster.remitcontact and compcontactmstr.company = compmaster.company and compcontactmstr.companysetid = compmaster.companysetid). The resulting set will contain zero or one object.",
            "whereClause": "contact=:remitcontact and company=:company and companysetid=:companysetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGANIZATION",
            "target": "ORGANIZATION",
            "remarks": "Relationship to the Organization table, used to find all Organizations for a given company master. (organization.companysetid = compmaster.companysetid). The resulting set will contain zero or more objects.",
            "whereClause": "companysetid=:companysetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGANIZATIONS_NOTUSING",
            "target": "ORGANIZATION",
            "remarks": "Relationship to the Organization table, used to find all Organizations that have not created a company from this company master. (organization.companysetid = compmaster.companysetid and organization.orgid not in (select orgid from companies where company = compmaster.company and orgid in (select orgid from organization where companysetid = compmaster.companysetid))). The resulting set will contain zero or more objects.",
            "whereClause": "companysetid = :companysetid and orgid not in (select orgid from companies where company = :company and orgid in (select orgid from organization where companysetid = :companysetid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGANIZATIONS_USING",
            "target": "ORGANIZATION",
            "remarks": "Relationship to the Organization table, used to find all Organizations that have created a company from this company master. (organization.companysetid = compmaster.companysetid and organization.orgid in (select orgid from companies where company = compmaster.company and orgid in (select orgid from organization where companysetid = compmaster.companysetid))). The resulting set will contain zero or more objects.",
            "whereClause": "companysetid = :companysetid and orgid in (select orgid from companies where company = :company and orgid in (select orgid from organization where companysetid = :companysetid))",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMPMASTERBYCONTACT",
            "source": "COMPCONTACTMSTR",
            "remarks": "Relationship to the CompMastertable, used to find the company master record for a given contact master. (compmaster.company = compcontactmstr.company and compmaster.companysetid = compcontactmstr.companysetid). The resulting set will contain one object.",
            "whereClause": "company=:company and companysetid=:companysetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPMASTER",
            "source": "SETS",
            "remarks": "Relationship to the CompMaster table, used to find all company masters in this set. (compmaster.companysetid = sets.setid). This relationship will find zero or more objects.",
            "whereClause": "companysetid=:setid",
            "cardinality": "UNDEFINED"
        }
    ]
}