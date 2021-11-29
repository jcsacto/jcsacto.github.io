mos = {
    "objectName": "COMPANIES",
    "className": "psdi.app.company.CompanySet",
    "description": "The COMPANIES Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "COMPANIESID",
    "primaryKeyColumns": [
        "ORGID",
        "COMPANY"
    ],
    "logicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "AMCREW",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Crew",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "AMCREWLABOR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Crew Labor",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "AMCREWLABPOS",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Crew Labor Position",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "AMCREWWOLAB",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Vendor on Crew Labor",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "AMCTCRAFT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Crew Template Craft",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "ASSET",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Asset",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "ASSET",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, PLUSCVENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calibration Vendor on Asset",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "ASSET",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Asset",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Assignment",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "COMPANIES",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, PARENTCOMPANY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Vendor on Company",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "COMPANIES",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, PAYVENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Pay To Vendor on Company",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "COMPCOMMODITY",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, COMPANY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Company Commodity",
            "longDescription": null
        },
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
            "objectName": "COMPANIES",
            "targetObject": "CONTRACT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Contract",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "AUTHORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Contract Authorization Organization",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Contract Authorization",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "CONTRACTLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Contract Line",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "CRAFTRATE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Craft Rate",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ASSETORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "CALCORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORIGRECORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVENTORY",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, CONSVENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Consignment Vendor on Inventory",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVENTORY",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Inventory",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVENTORY",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Primary Vendor on Inventory",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVLOT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Inventory Lots",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVLOT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Inventory Lots",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVOICE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Invoice",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVOICECOST",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Invoice Cost",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVOICELINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Invoice Line",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Invoice Matching",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVOICESTATUS",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Invoice Status",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVOICETRANS",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Invoice Transaction",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVTRANS",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, CONSVENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Inventory Transaction",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVVENDOR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Inventory Vendor",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "INVVENDOR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Inventory Vendor",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "ITEMORGINFO",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Item Organization",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "JOBITEM",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Job Item",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "JOBLABOR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Job Labor",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "JOBMATERIAL",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Job Material",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "JOBSERVICE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Job Service",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "JOBTOOL",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Job Tool",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "LABORCRAFTRATE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Labor Craft Rate",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "LABORVIEW",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Labor Contract",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "LABTRANS",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Labor Reporting",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "LEASEVIEW",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Lease Contract",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Lease Contract Line",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "MASTERVIEW",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Master Contract",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "MATRECTRANS",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, CONSVENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Consignment Vendor",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "MATRECTRANS",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "MATUSETRANS",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, CONSVENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Consignment Vendor on Material Usage Transaction",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "MRLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on MR Line",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "MRLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on MR Line",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "PLUSCTEMPLATE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Asset Template",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "PLUSCTEMPLATE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Asset Template",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "PO",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on PO",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "POLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on PO Line",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "PR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on PR",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "PRLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on PR Line",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ASSETORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 55",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "CALCORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 56",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 57",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORIGRECORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 58",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "PURCHVIEW",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Purchase Contract",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Quotation Line",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Quotation Line",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "REORDERPAD",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 62",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "REORDERPAD",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 63",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "RFQLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on RFQ Line",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "RFQLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Awarded Vendor on RFQ Line",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "RFQVENDOR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on RFQ Vendor",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "RFQVENDORTERM",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on RFQ Vendor Term",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SFWVIEW",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Software Contract",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SFWVIEWLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Software Contract Line",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SHIPMENT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "FROMORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 71",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "TOORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 73",
            "longDescription": null
        },
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
            "objectName": "COMPANIES",
            "targetObject": "SKDACTIVITYQBE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on SKDActivity Search",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on SKDEXTRACAPCREWVIEW",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID1, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on SKDEXTRACAPCREWVIEW",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SLA",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "CALCORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 75",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SLA",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor of SLA",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SLA",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "SLAORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 77",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ASSETORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 78",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "CALCORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 79",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 80",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORIGRECORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 81",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ASSETORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 82",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "CALCORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 83",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor for Ticket",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORIGRECORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 85",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "TKTEMPLATE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Ticket Template",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "TKTEMPLTACTIVITY",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Ticket Template Activity",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "TOOLINV",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, CONSVENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Consignment Vendor on Tool Inventory",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "TOOLINV",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Tool Inventory",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "TOOLINV",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Primary Vendor on Tool Inventory",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "TOOLTRANS",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, PLUSCMANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Tool Transaction",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WARRANTYVIEW",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Warranty Contract",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WARRANTYVIEWLINE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Warranty Contract Line",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on WF Assigement",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, WOVENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on WF Assigement",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "CALCORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 96",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor for Activity",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "CALCORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 98",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "CALCORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 100",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Release Vendor",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "CALCORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 102",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor performing work.",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WPITEM",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Work Plan Item",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WPITEM",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Work Plan Item",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WPLABOR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Work Plan Labor",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WPMATERIAL",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Work Plan Material",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WPMATERIAL",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Work Plan Material",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WPSERVICE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Work Plan Service",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WPSERVICE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Work Plan Service",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WPTOOL",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Work Plan Tool",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WPTOOL",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Work Plan Tool",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "COMPANIES",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, PARENTCOMPANY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Vendor on Company",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "COMPANIES",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, PAYVENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Pay To Vendor on Company",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "COMPANIES",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "COMPANIES",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "COMPANIES",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "COMPANIES",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "COMPANY",
            "required": true,
            "persistent": true,
            "title": "Company",
            "remarks": "Identifier of the company record. This field must be unique within an organization. When you save a company record, this field becomes read-only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Company Type",
            "remarks": "The type of company. You may select from three default types: C (courier), M (manufacturer), and V (vendor).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NAME",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Name and/or description of the company. Click the Long Description button to enter or view a long description.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESS1",
            "required": false,
            "persistent": true,
            "title": "Address",
            "remarks": "The company's street address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESS2",
            "required": false,
            "persistent": true,
            "title": "City",
            "remarks": "The city where the company is located.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESS3",
            "required": false,
            "persistent": true,
            "title": "State/Province",
            "remarks": "The state or province where the company is located; use either the two-character code or full spelling.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESS4",
            "required": false,
            "persistent": true,
            "title": "ZIP/Postal Code",
            "remarks": "The company's zip or postal code.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTACT",
            "required": false,
            "persistent": true,
            "title": "Customer Contact",
            "remarks": "Name of the primary person to contact at the company. To view more information about the contact, go to the Contacts tab. This contact is the default on purchase orders. If you enter a name that is not listed on the Contacts tab for the company, MAXIMO adds the name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PHONE",
            "required": false,
            "persistent": true,
            "title": "Phone",
            "remarks": "Telephone number of the company or contact.",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "FOB",
            "required": false,
            "persistent": true,
            "title": "FOB Point",
            "remarks": "Free on board point; the point where responsibility and liability are transferred. The FOB point is usually either the destination or the shipping point.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREIGHTTERMS",
            "required": false,
            "persistent": true,
            "title": "Freight Terms",
            "remarks": "A description of what is being shipped; any riders to the shipping agreement should be included here. For example, you might specify \"\"Fresh fruit. Perishable. Keep refrigerated. Must meet delivery dates.\"\" Click the Long Description button to enter or view a description of the terms.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIPVIA",
            "required": false,
            "persistent": true,
            "title": "Ship Via",
            "remarks": "Specifies how the goods are shipped (for example, First Class Mail, UPS, FEDEX).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PAYMENTTERMS",
            "required": false,
            "persistent": true,
            "title": "Payment Terms",
            "remarks": "The specified terms of payment for this vendor. For example, you might enter: 2/10, net 30. This indicates that if the invoice is paid within ten days, the company will get a two percent discount (\"\"2/10\"\"). The invoice total must be paid within 30 days (\"\"net 30\"\").",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CUSTOMERNUM",
            "required": false,
            "persistent": true,
            "title": "Customer #",
            "remarks": "The number used by an outside company to identify your own company.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FAX",
            "required": false,
            "persistent": true,
            "title": "Company Fax",
            "remarks": "Fax number of the company or contact.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE1",
            "required": true,
            "persistent": true,
            "title": "Pay Tax to Vendor",
            "remarks": "Select the Pay Tax to Vendor? box if tax is included in the invoicing cost. By default, the box is selected.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE2",
            "required": true,
            "persistent": true,
            "title": "Include Tax 2",
            "remarks": "Vendors invoices inclusive of Tax 2?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE3",
            "required": true,
            "persistent": true,
            "title": "Include Tax 3",
            "remarks": "Vendors invoices inclusive of Tax 3?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX1CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code",
            "remarks": "Country or state tax code for the company.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX2CODE",
            "required": false,
            "persistent": true,
            "title": "Tax 2",
            "remarks": "Tax2 code.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX3CODE",
            "required": false,
            "persistent": true,
            "title": "Tax 3",
            "remarks": "Tax3 code.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": true,
            "persistent": true,
            "title": "Currency",
            "remarks": "The currency that the company uses. This value is used for currency conversion, when necessary.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Location of company.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "REGISTRATION1",
            "required": false,
            "persistent": true,
            "title": "Registration #",
            "remarks": "The tax registration number used by the company.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REGISTRATION2",
            "required": false,
            "persistent": true,
            "title": "Registration # 2",
            "remarks": "Tax Registration number for tax type 2.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REGISTRATION3",
            "required": false,
            "persistent": true,
            "title": "Registration # 3",
            "remarks": "Tax Registration number for tax type 3.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APCONTROLACC",
            "required": false,
            "persistent": true,
            "title": "AP Control Account",
            "remarks": "The credit account used when the invoice is paid.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APSUSPENSEACC",
            "required": false,
            "persistent": true,
            "title": "Suspense Account",
            "remarks": "The credit account used when the invoice is approved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RBNIACC",
            "required": false,
            "persistent": true,
            "title": "RBNI Account",
            "remarks": "The account for receipts that have not been invoiced.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "BANKACCOUNT",
            "required": false,
            "persistent": true,
            "title": "Bank",
            "remarks": "Vendor bank account for direct credits.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE4",
            "required": true,
            "persistent": true,
            "title": "Include Tax 4",
            "remarks": "Vendors invoices inclusive of Tax 4?.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUSIVE5",
            "required": true,
            "persistent": true,
            "title": "Include Tax 5",
            "remarks": "Vendors invoices inclusive of Tax 5?.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REGISTRATION4",
            "required": false,
            "persistent": true,
            "title": "Registration # 4",
            "remarks": "Tax registration number for tax type 4.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REGISTRATION5",
            "required": false,
            "persistent": true,
            "title": "Registration # 5",
            "remarks": "Tax registration number for tax type 5.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX4CODE",
            "required": false,
            "persistent": true,
            "title": "Tax 4",
            "remarks": "Tax4 Code.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX5CODE",
            "required": false,
            "persistent": true,
            "title": "Tax 5",
            "remarks": "Tax5 Code.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "DISABLED",
            "required": true,
            "persistent": true,
            "title": "Disqualified Vendor",
            "remarks": "Select the Disqualified Vendor? box if the company is disqualified from being used on new PRs, POs, RFQs, Invoices, or any other application that references vendors. By default, the box is unchecked.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMITADDRESS1",
            "required": false,
            "persistent": true,
            "title": "Address",
            "remarks": "The Remit To company's street address.",
            "sameAsAttribute": "ADDRESS1",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "REMITADDRESS2",
            "required": false,
            "persistent": true,
            "title": "City",
            "remarks": "The city where the Remit To company is located.",
            "sameAsAttribute": "ADDRESS2",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "REMITADDRESS3",
            "required": false,
            "persistent": true,
            "title": "State/Province",
            "remarks": "The state or province where the Remit To company is located; use the two-character code or full spelling.",
            "sameAsAttribute": "ADDRESS3",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "REMITADDRESS4",
            "required": false,
            "persistent": true,
            "title": "ZIP/Postal Code",
            "remarks": "The Remit To company's zip or postal code.",
            "sameAsAttribute": "ADDRESS4",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "REMITCONTACT",
            "required": false,
            "persistent": true,
            "title": "Contact",
            "remarks": "Name of the person to contact at the Remit To company, which is a separate address used for invoicing. To view more information about the contact, go to the Contacts tab. This contact is the default value on invoices. If you enter a name that is not listed on the Contacts tab for the company, MAXIMO adds the name to the Contacts table.",
            "sameAsAttribute": "CONTACT",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "PAYONRECEIPT",
            "required": true,
            "persistent": true,
            "title": "Payment on Receipt",
            "remarks": "Select the Payment on Receipt? box if you have a payment on receipt agreement with the company. By default, the box is unchecked.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HOMEPAGE",
            "required": false,
            "persistent": true,
            "title": "Home Page",
            "remarks": "Home Page number for the company. This number is the URL of the company's World Wide Web address.",
            "sameAsAttribute": "URLNAME",
            "sameAsObject": "DOCINFO"
        },
        {
            "attributeName": "BANKNUM",
            "required": false,
            "persistent": true,
            "title": "Bank Reference #",
            "remarks": "Bank and branch identification reference number. Used to transfer funds electronically and allow transfer of dollars between buyer and seller.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DUNSNUM",
            "required": false,
            "persistent": true,
            "title": "DUNS #",
            "remarks": "Data Universal Numbering System number, used to uniquely identify a company and its location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAXEXEMPTCODE",
            "required": false,
            "persistent": true,
            "title": "Tax Exempt Code",
            "remarks": "Indicates if the company is exempt from paying taxes (for example, 1=exempt, 2=not exempt, 3=exempt resale).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAXEXEMPTNUM",
            "required": false,
            "persistent": true,
            "title": "Tax Exempt Number",
            "remarks": "The company's National Tax Exempt Number for tax reporting purposes.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ECOMMERCEENABLED",
            "required": true,
            "persistent": true,
            "title": "E-commerce Enabled",
            "remarks": "Select the E-Commerce Enabled? box if the company is e-commerce enabled. By default, the box is unchecked.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MNETCOMPANYID",
            "required": false,
            "persistent": true,
            "title": "E-commerce Supplier",
            "remarks": "The ID number or string value that identifies the e-commerce supplier from whose catalog you will be ordering. This number is not necessarily a unique identifier.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTORECEIVEONASN",
            "required": true,
            "persistent": true,
            "title": "Automatically Approve Receipt on ASN",
            "remarks": "Select the Auto Approve Receipt on ASN? box if the receipt of items can be automatically processed when an ASN for those items has been received. By default, the box is not selected.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDORSENDSASN",
            "required": true,
            "persistent": true,
            "title": "Vendor Sends ASN",
            "remarks": "Select the Vendor Sends ASN? box if the vendor sends electronic ASN (advance ship notice) transactions. By default, the box is unchecked.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDORSENDSINV",
            "required": true,
            "persistent": true,
            "title": "Vendor Sends Invoice",
            "remarks": "Select the Vendor Sends Invoice? box if the vendor sends invoice transactions. By default, the box is unchecked.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ECOMINTERFACE",
            "required": false,
            "persistent": true,
            "title": "E-commerce Supplier Location",
            "remarks": "The name of the B2B package containing the interface mapping that enables e-commerce transactions to be routed between MAXIMO and an e-commerce supplier. For example, the name of the B2B package might be mroOAGAdapter.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDORSENDSSTATUS",
            "required": true,
            "persistent": true,
            "title": "Vendor Sends Order Status",
            "remarks": "Select the Vendor Sends Order Status? box if the vendor sends an electronic transaction detailing the status of orders. By default, the box is unchecked.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOAPPROVEINV",
            "required": true,
            "persistent": true,
            "title": "Automatically Approve Invoice",
            "remarks": "Are Invoices automatically approved for the vendor upon receipt of the invoice?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOSENDPOCANCEL",
            "required": true,
            "persistent": true,
            "title": "Send Vendor Transaction on PO Cancel",
            "remarks": "Select the Send Vendor Transaction on PO Cancel? box if the vendor will be sent a PO cancellation transaction when a PO or PO line is cancelled before the item(s) are received or an ASN is sent by the vendor. By default, the box is unchecked.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The name of the organization associated with this company.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "DEFAULTWAREHOUSE",
            "required": false,
            "persistent": true,
            "title": "Default Warehouse",
            "remarks": "The default warehouse used by the vendor.",
            "sameAsAttribute": "VENDORWAREHOUSE",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "PARENTCOMPANY",
            "required": false,
            "persistent": true,
            "title": "Parent",
            "remarks": "The parent company of this company.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "USEPARENTREMITTO",
            "required": true,
            "persistent": true,
            "title": "Use Parent Remit To",
            "remarks": "Select the Use Parent Remit To? box to use the parent's remit to information on invoices created against the child company. The default value is unselected.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESS5",
            "required": false,
            "persistent": true,
            "title": "Country",
            "remarks": "Address Of Company",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "CATALOGNAME",
            "required": false,
            "persistent": true,
            "title": "Catalog",
            "remarks": "The outside vendor's catalog that you can access on the Internet. When the Punchout Enabled? box is checked, the catalog name displays in the drop-down list for the Catalog Name field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PUNCHOUTENABLED",
            "required": true,
            "persistent": true,
            "title": "Punchout Enabled",
            "remarks": "Select the Punchout Enabled? box if you have can use the Companies application to search marketplace web sites for purchases. By default, the box is unchecked.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NAME_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Name Long Description",
            "remarks": "Long Description for Name Of Company",
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
            "attributeName": "COMPANIESID",
            "required": true,
            "persistent": true,
            "title": "COMPANIESID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSUREXPDATE",
            "required": false,
            "persistent": true,
            "title": "Expiration Date of Insurance",
            "remarks": "The expiration date of liability insurance for the vendor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSPECTIONREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Inspection Required",
            "remarks": "Indicates whether items purchased from this vendor should be inspected on receipt.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "TOOLCONTROLACCOUNT",
            "required": false,
            "persistent": true,
            "title": "Tool Control Account",
            "remarks": "Tool Control Account",
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
            "attributeName": "CELLPHONE",
            "required": false,
            "persistent": true,
            "title": "Cell Phone",
            "remarks": "Cell phone number of the company or contact.",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "CONSACCT",
            "required": false,
            "persistent": true,
            "title": "Consignment Account",
            "remarks": "The consignment vendor account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMPANYCHILDREN",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find the parent company record for a given child company. (companies.company = companies.parentcompany). The resulting set will contain zero or one object.",
            "whereClause": "company=:parentcompany and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANYPARENT",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find the child company records for a given parent company. (companies.parentcompany = companies.company). The resulting set will contain zero or more objects.",
            "whereClause": "parentcompany=:company and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMP_ACCDEF",
            "target": "COMPANYACCDEF",
            "remarks": null,
            "whereClause": "type=:type and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_COMPGRP",
            "target": "COMPCOMMODITY",
            "remarks": null,
            "whereClause": "company = :company and orgid=:orgid and parent is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_COMPMAIN",
            "target": "COMPCOMMODITY",
            "remarks": null,
            "whereClause": "company = :company",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMP_CONTACT",
            "target": "COMPCONTACT",
            "remarks": null,
            "whereClause": "company=:company and contact=:contact and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTACT",
            "target": "COMPCONTACT",
            "remarks": "Relationship to the CompContact table, used to find all contact records for a given company. (compcontact.company = companies.company). The resulting set will contain zero or more objects.",
            "whereClause": "company=:company and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INT_CONTACT",
            "target": "COMPCONTACT",
            "remarks": "Relationship to the Compcontact table for INT table. The resulting set will contain zero or more objects.",
            "whereClause": "company=:company and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYCONTACT",
            "target": "COMPCONTACT",
            "remarks": "Relationship to the CompContact table, used to find the primary contact record for a given company. (compcontact.company = companies.company and compcontact.contact = companies.contact). Resulting set will contain zero or one object.",
            "whereClause": "company=:company and contact=:contact and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REMITCONTACT",
            "target": "COMPCONTACT",
            "remarks": "Relationship to the CompContact table, used to find the remit contact record for a given company. (compcontact.company = companies.company and compcontact.contact = companies.remitcontact). The resulting set will contain zero or one object.",
            "whereClause": "company=:company and contact=:remitcontact and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTS_ACTIVE",
            "target": "CONTRACT",
            "remarks": "Relationship to the Contract table, used to find all active contracts for this vendor company. (contract.vendor = companies.company and contract.status not in (select value from synonymdomain  where maxvalue in ('APPR', 'PNDREV', 'WSTART') and domainid='CONTRACTSTATUS') and contract.historyflag=false and contract.orgid = companies.orgid) This relationship will find zero or more objects.",
            "whereClause": "vendor = :company and status in (select value from synonymdomain  where maxvalue in ('APPR', 'PNDREV', 'WSTART') and domainid='CONTRACTSTATUS') and historyflag=:no and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "target": "CONTRACT",
            "remarks": "Relationship to the Contract table, used to find a contract record for a given company (contract.vendor = companies.company and contract.orgid = companies.orgid). The resulting set will contain zero, one or more than one object.",
            "whereClause": "vendor = :company and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMP_CURRENCY",
            "target": "CURRENCY",
            "remarks": null,
            "whereClause": "currencycode=:currencycode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given company.  (doclinks.keytable = 'COMPANIES' and doclinks.keycolumn = 'COMPANY' and doclinks.keyvalue = companies.company$DOCLINKS.KEYVALUE and doclinks.orgid = companies.orgid). The resulting set will contain zero or more objects. Note: The Companies.Company field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "ownertable = 'COMPANIES' and ownerid = :companiesid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR",
            "target": "INVVENDOR",
            "remarks": "Relationship to the InvVendor table, used to find the InvVendor records for a given company. (invvendor.vendorcompany = companies.company and invvendor.orgid = companies.orgid).  The resulting set will contain zero or more object.",
            "whereClause": "vendor=:company and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMP_AS_LOCATION",
            "target": "LOCATIONS",
            "remarks": null,
            "whereClause": "location=:location and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for company. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:companiesid and ldownertable = 'COMPANIES'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SETS_COMPANY",
            "target": "SETS",
            "remarks": "Relationship to the Sets table, used to find the company set record for this company's organization. (sets.setid=(select companysetid from organization where organization.orgid = company.orgid) and settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'COMPANY')",
            "whereClause": "setid=(select companysetid from organization where orgid = :orgid) and settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'COMPANY')",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMPANY",
            "source": "ACCOUNTDEFAULTS",
            "remarks": "Relationship to the Companies table, used to find the company used as the group for establishing a default account. (accountdefaults.groupvalue = companies.company). The resulting set will contain zero or one object.",
            "whereClause": "company = :groupvalue and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIES",
            "source": "ASSET",
            "remarks": "Relationship to the Companies table, used to find all companies for a given asset. (companies.company = asset.vendor). This resulting set will contain zero or one object.",
            "whereClause": "company = :vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCCOMPDESC",
            "source": "ASSET",
            "remarks": "Relationship to show description for pluscvendor",
            "whereClause": "company = :pluscvendor and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "MANUFACTURER",
            "source": "ASSET",
            "remarks": "Relationship to the Companies table, used to find all manufacturers for a given asset. (companies.company = asset.manufacturer). This resulting set will contain zero or one object.",
            "whereClause": "company = :manufacturer and orgid=:orgid",
            "cardinality": "SINGLE"
        },
        {
            "name": "COMPANYCHILDREN",
            "source": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find the parent company record for a given child company. (companies.company = companies.parentcompany). The resulting set will contain zero or one object.",
            "whereClause": "company=:parentcompany and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANYPARENT",
            "source": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find the child company records for a given parent company. (companies.parentcompany = companies.company). The resulting set will contain zero or more objects.",
            "whereClause": "parentcompany=:company and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANY",
            "source": "COMPCONTACT",
            "remarks": "Relationship to the Company table, used to find the company for a given company contact. (companies.company = compcontact.company). The resulting set will contain one object.",
            "whereClause": "company=:company and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANYBYCONTACT",
            "source": "COMPCONTACT",
            "remarks": null,
            "whereClause": "company=:company and contact=:contact",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTACT_COMPANY",
            "source": "COMPCONTACT",
            "remarks": null,
            "whereClause": "company=:company and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIES",
            "source": "COMPMASTER",
            "remarks": "Relationship to the Companies table, used to find all Companies created from a given company master. (organization.company = compmaster.company and orgid in (select orgid from organization where organization.companysetid = compmaster.companysetid)). The resulting set will contain zero or more objects.",
            "whereClause": "company=:company and orgid in (select orgid from organization where companysetid = :companysetid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANY",
            "source": "CONTRACTAUTH",
            "remarks": "Relationship to the Organization table, used to find all Company records for a given ContractAuth. (contractauth.vendor=companies.company). The resulting set will contain one record.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIES",
            "source": "CRAFTRATE",
            "remarks": "Relationship to the Companies table where company and orgid match. (companies.company=craftrate.vendor and companies.orgid=craftrate.orgid.)  This will return 0 or more objects.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICEVENDOR",
            "source": "CREATEINVOICE",
            "remarks": null,
            "whereClause": "company = :vendor and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "source": "CREATERELINPUT",
            "remarks": "Relationship to the Companies table, used to find all company records for a given company. (createrelinput.vendor=companies.company)",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "source": "FAVITEM",
            "remarks": null,
            "whereClause": "company = :vendor",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONSVENDOR",
            "source": "INVENTORY",
            "remarks": "Relationship to the Companies table, used to find the consignment vendor for the given Inventory record. (Inventory.consvendor = Companies.company). The resulting set will contain zero or one object.",
            "whereClause": "company=:consvendor and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "MANUFACTURER",
            "source": "INVENTORY",
            "remarks": "Relationship to the Companies table, used to find the manufacturer for  a given Inventory record. (Inventory.manufacturer = Companies.company). The resulting set will contain zero or one object.",
            "whereClause": "company = :manufacturer and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "source": "INVENTORY",
            "remarks": "Relationship to the Companies table, used to find the primary vendor for the given Inventory record. (Inventory.vendor = Companies.company). The resulting set will contain zero or one object.",
            "whereClause": "company = :vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIES",
            "source": "INVOICE",
            "remarks": "Relationship to the Companies table, used to find the company(vendor) used for a given invoice. (invoice.vendor = companies.company). The resulting set will contain zero or one object.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIESORG",
            "source": "INVOICE",
            "remarks": "Relationship to the Companies table, used to find the company(vendor) used for a given invoice. (invoice.orgid = companies.orgid). The resulting set will contain zero or one object.",
            "whereClause": "orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "INVC_VENDOR",
            "source": "INVOICE",
            "remarks": null,
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIES",
            "source": "INVOICELINE",
            "remarks": "Relationship to the Companies table, used to find the company(vendor) for a given invoice line. (invoiceline.vendor = companies.company). The resulting set will contain zero or one object.",
            "whereClause": "company = :vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MANUFACTURER",
            "source": "INVVENDOR",
            "remarks": "Relationship to the Companies table, used to find a manufacturer for a given inventory vendor. (invvendor.manufacturer = companies.company). The resulting set will contain one object.",
            "whereClause": "company=:manufacturer and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "source": "INVVENDOR",
            "remarks": "Relationship to the Companies table, used to find a vendor for a given inventory vendor. (invvendor.vendor = companies.company). The resulting set will contain one object.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIES",
            "source": "ITEMORGINFO",
            "remarks": null,
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANY",
            "source": "JOBITEM",
            "remarks": null,
            "whereClause": "company = :vendor and orgid=:orgid and disabled=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANY",
            "source": "JOBLABOR",
            "remarks": "Relationship to the Job Labors vendor records, used to find the vendor records for a given Job Labor.",
            "whereClause": "company = :vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANY",
            "source": "JOBMATERIAL",
            "remarks": "Relationship to the Job Material's vendor records, used to find the vendor records for a given Job Material. (companies.company=jobmaterial.vendor). The resulting set will contain zero or one record.",
            "whereClause": "company = :vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIES",
            "source": "LABORCRAFTRATE",
            "remarks": "Relationship to the Companies table where company and orgid match. (companies.company=laborcraftrate.vendor and companies.orgid=laborcraftrates.orgid.)  This will return 0 or more objects.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "source": "LABORVIEW",
            "remarks": "Relationship to the Companies table, used to find all company records for a given contract.(contract.vendor=companies.company.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "source": "LABTRANS",
            "remarks": "Relationship to the companies table where company = vendor and orgid = orgid. This will return 0 or more objects.",
            "whereClause": "company = :vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABREP_LABTRANSENTERBY_COMPANIES",
            "source": "LABTRANSENTERBY",
            "remarks": "Relationship from labtransenterby to companies ",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the Companies table, used to find all company records for a given contract.(leaseview.vendor=companies.company).",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIES_COURIERVENDOR",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Companies table, used to find the couriers or vendors which are associated with the courier or vendor location via Companies.location. (locations.location = companies.location). The resulting set will contain zero or one object.  If found, the location can not be deleted.",
            "whereClause": "location = :location and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIES_STOREROOM",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Companies table, used to find the vendor set up as the storeroom location for internal POs or the Companies records which are associated with the storeroom location via Companies.location. (locations.location = companies.company OR locations.location = companies.location). The resulting set will contain zero or one object. If found, the location can not be deleted.",
            "whereClause": "(company = :location or location = :location) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "source": "MASTERVIEW",
            "remarks": "Relationship to the Companies table, used to find all company records for a given contract. (contract.vendor=companies.company)",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MR_SHIPTO",
            "source": "MR",
            "remarks": null,
            "whereClause": "company=:shipto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "source": "PLUSCTEMPLATE",
            "remarks": "Relationship to the Companies table (companies.company = plusctemplate.vendor)",
            "whereClause": "company = :vendor and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "MANUFACTURER",
            "source": "PLUSCTEMPLATE",
            "remarks": "Relationship to the Companies table (companies.company = plusctemplate.manufacturer)",
            "whereClause": "company = :manufacturer and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "PO_SHIPTO",
            "source": "PO",
            "remarks": null,
            "whereClause": "company=:shipto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO_VENDOR",
            "source": "PO",
            "remarks": null,
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PO_BILLTO",
            "source": "PO",
            "remarks": null,
            "whereClause": "company=:billto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "source": "PO",
            "remarks": "Relationship to the Companies table, used to find all vendor company records for a given purchase order. (companies.company = po.vendor). The resulting set will contain zero or more objects.",
            "whereClause": "company = :vendor and orgid=:orgid",
            "cardinality": "SINGLE"
        },
        {
            "name": "MANUFACTURER",
            "source": "POLINE",
            "remarks": "Relationship to the Companies table, used to find the manufacturer record for a given purchase order line. (companies.company = poline.manufacturer). The resulting set will contain one object.",
            "whereClause": "company = :manufacturer and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIES",
            "source": "PR",
            "remarks": "Relationship to the Companies table, used to find all vendor company records for a given purchase requisition. (companies.company = pr.vendor). The resulting set will contain zero or more objects.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PR_VENDOR",
            "source": "PR",
            "remarks": null,
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PR_BILLTO",
            "source": "PR",
            "remarks": null,
            "whereClause": "company=:billto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PR_SHIPTO",
            "source": "PR",
            "remarks": null,
            "whereClause": "company=:shipto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the Companies table, used to find all company records for a given contract. (contract.vendor=companies.company",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ_BILLTO",
            "source": "RFQ",
            "remarks": null,
            "whereClause": "company=:billto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ_BUYERCOMPANY",
            "source": "RFQ",
            "remarks": null,
            "whereClause": "company=:buyercompany and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ_REPLYTO",
            "source": "RFQ",
            "remarks": null,
            "whereClause": "company=:replyto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQ_SHIPTO",
            "source": "RFQ",
            "remarks": null,
            "whereClause": "company=:shipto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIES",
            "source": "RFQVENDOR",
            "remarks": "Relationship to the Companies table, used to find company records for a given request for quotation vendor. (companies.company = rfqvendor.vendor). The resulting set will contain zero or one objects.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "source": "SFWVIEW",
            "remarks": "Relationship to the Companies table, used to find all company records for a given contract. (sfwview.vendor=companies.company and sfwview.orgid=companies.orgid)",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "source": "SHIPMENT",
            "remarks": "Relationship to the Companies table, used to find the company records for a given shipment. (shipment.vendor = companies.company). The resulting set will contain zero or more objects.",
            "whereClause": "company = :vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VENDOR",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship to the Companies table, used to find all company records for a given contract. (contract.vendor=companies.company)",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANY",
            "source": "WPMATERIAL",
            "remarks": "Relationship to the vendor table, used to find the vendor for a given work plan material. (companies.company=wpmaterial.vendor ). This resulting set will contain zero or one object.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANY",
            "source": "WPSERVICE",
            "remarks": "Relationship to the vendor table, used to find the vendor for a given work plan service. (companies.company=wpservice.vendor ). This resulting set will contain zero or one object.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": null
        }
    ]
}