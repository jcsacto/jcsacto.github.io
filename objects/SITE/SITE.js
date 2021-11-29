mos = {
    "objectName": "SITE",
    "className": "psdi.app.site.SiteSet",
    "description": "Site where MAXIMO operations are performed.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SITEUID",
    "primaryKeyColumns": [
        "SITEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "SITE",
            "targetObject": "ALNDOMAIN",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID",
            "targetKeys": "ENDLOCSITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID",
            "targetKeys": "STARTLOCSITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID",
            "targetKeys": "WORKSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AMCREWTOOL",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AMCREWWOLAB",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "APPFIELDDEFAULTS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ARCHIVE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "SITEID",
            "targetKeys": "AFFECTEDSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSET",
            "parentKeys": "SITEID",
            "targetKeys": "DEFAULTREPFACSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSET",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETANCESTOR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETATTRIBUTE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETHIERARCHY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETHISTORY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETLOCCOMM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETLOCUSERCUST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETMETER",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETMNTSKD",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETOPSKD",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETSPEC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETSTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "POSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "TOSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Destination Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETUSERCUST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETWORKZONE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID",
            "targetKeys": "REPLOCSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "SITEID",
            "targetKeys": "WORKSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order''s Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AUTOKEY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AUTOSCRIPT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AUTOSCRIPTSTATE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "BBOARDAUDIENCE",
            "parentKeys": "SITEID",
            "targetKeys": "MSGSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site that should see the bulletin.",
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
        },
        {
            "objectName": "SITE",
            "targetObject": "CHARPOINTACTION",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CI",
            "parentKeys": "SITEID",
            "targetKeys": "ASSETLOCSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Location Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CLASSANCESTOR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CLASSIFICATION",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CLASSSPEC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CLASSSPECUSEWITH",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CLASSSTRUCTURE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "COLLECTDETAILS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "COMPUTERSYSTEM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CONTASSETMETER",
            "parentKeys": "SITEID",
            "targetKeys": "LOCATIONSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CONTLINEASSET",
            "parentKeys": "SITEID",
            "targetKeys": "LOCATIONSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "SITEID",
            "targetKeys": "AUTHSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site Authorization",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CROSSOVERDOMAIN",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID",
            "targetKeys": "NEXTASSETSITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 59",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID",
            "targetKeys": "PREVIOUSASSETSITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 60",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 61",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "DEPLOYEDASSET",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "DEPTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 63",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ESCALATION",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ESCSTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "FAILUREREMARK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "FAILUREREPORT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "FINCNTRL",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "HAZARDPREC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INCIDENT",
            "parentKeys": "SITEID",
            "targetKeys": "ASSETSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 56",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INCIDENT",
            "parentKeys": "SITEID",
            "targetKeys": "ORIGRECSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 57",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INCIDENT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVBALANCES",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVCOST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVENTORY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVENTORY",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 62",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVLIFOFIFOCOST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVLOT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID",
            "targetKeys": "POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 65",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID",
            "targetKeys": "POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 67",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID",
            "targetKeys": "TOSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICELINE",
            "parentKeys": "SITEID",
            "targetKeys": "POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 70",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICELINE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "SITEID",
            "targetKeys": "POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 72",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICEMATCH",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICESTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICETERM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVOICETRANS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 78",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVSTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVUSE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID",
            "targetKeys": "POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 82",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID",
            "targetKeys": "PRSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 83",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID",
            "targetKeys": "TOSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 85",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVUSELINESPLIT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVUSESTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVVENDOR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBITEM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBITEM",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 90",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBLABOR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBMATERIAL",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBMATERIAL",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 93",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBPLAN",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBPLANSPEC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBSERVICE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBSERVICE",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 97",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBTASK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBTOOL",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBTOOL",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 101",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JPASSETSPLINK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JPTASKRELATION",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "KPIOEE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LABOR",
            "parentKeys": "SITEID",
            "targetKeys": "LABINVENTORYSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor Inventory Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LABOR",
            "parentKeys": "SITEID",
            "targetKeys": "WORKSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LABOR",
            "parentKeys": "SITEID",
            "targetKeys": "ENDLOCSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 119",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LABOR",
            "parentKeys": "SITEID",
            "targetKeys": "STARTLOCSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 121",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LABTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LBSLOCATION",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 124",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID1",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LNRRECALIB",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LNRRECALIBNONAF",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCANCESTOR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCATIONMETER",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCATIONMNTSKD",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCATIONOPSKD",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCATIONS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCATIONUSERCUST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCATIONWORKZONE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCAUTH",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCHIERARCHY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCKOUT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCLEADTIME",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCMETERREADING",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCOPER",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCSTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCSYSTEM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAPSITES",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "FROMSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site where items are coming from",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "POSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO''s Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID",
            "targetKeys": "TOSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 129",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXEXTBOOLVAL",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXEXTCTLVAL",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXEXTOVER",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXLISTOVERVAL",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXTABLEDOMAIN",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID",
            "targetKeys": "DEFAULTREPFACSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 135",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID",
            "targetKeys": "DEFSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID",
            "targetKeys": "STOREROOMSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 137",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXVARS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Specific site the MaxVar value is for.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXXREFOVERVAL",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MEASUREMENT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MEASUREPOINT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MEASUREUNIT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "METERREADING",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MRCOST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 147",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MRSTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID",
            "targetKeys": "MOVETOSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Move To Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID",
            "targetKeys": "REPLACEMENTSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Replacement Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID",
            "targetKeys": "WORKSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "NAMEDUSERS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "NETDEVICE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "NETPRINTER",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "NUMERICDOMAIN",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "NUMRANGEDOMAIN",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PDSPEC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PERSCOMMODITY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PERSON",
            "parentKeys": "SITEID",
            "targetKeys": "LOCATIONSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person''s Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PERSONGROUPTEAM",
            "parentKeys": "SITEID",
            "targetKeys": "USEFORSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PERSONGROUPVIEW",
            "parentKeys": "SITEID",
            "targetKeys": "LOCATIONSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location''s Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PERSONGROUPVIEW",
            "parentKeys": "SITEID",
            "targetKeys": "USEFORSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site the person is to be used for",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCASSETSTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCDSASSETLINK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCDSCONFIG",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCDSINSTR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCDSPOINT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCDSSTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCJPDATASHEET",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCJPSTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCPMEXTDATE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCSPOTCHECK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCTPASSET",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCTPDATASHEET",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCTPHISTORY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCWODS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCWODSINSTR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCWODSPOINT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSDSPLAN",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PM",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 183",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PMANCESTOR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PMFORECAST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PMFORECASTJP",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PMMETER",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PMSEASONS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PMSEQUENCE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PO",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PO",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "POCOST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "POECOMSTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "POINTWO",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "POLINE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "POLINE",
            "parentKeys": "SITEID",
            "targetKeys": "TOSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "POSTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "POTERM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PR",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 200",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PRCOST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PRECAUTION",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PRICALC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID",
            "targetKeys": "POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 204",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PROBLEM",
            "parentKeys": "SITEID",
            "targetKeys": "ASSETSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 206",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PROBLEM",
            "parentKeys": "SITEID",
            "targetKeys": "ORIGRECSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 207",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PROBLEM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PRSTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PRTERM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RECONASSETLINK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RECONASSETRESULT",
            "parentKeys": "SITEID",
            "targetKeys": "ANCESTORSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RECONASSETRESULT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RECONCILINK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RECONCIRESULT",
            "parentKeys": "SITEID",
            "targetKeys": "ANCESTORSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RECONCIRESULT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RECONLINK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RECONMULTILINK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RECONRESULT",
            "parentKeys": "SITEID",
            "targetKeys": "ANCESTORSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RECONRESULT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RELATEDRECORD",
            "parentKeys": "SITEID",
            "targetKeys": "RELATEDRECSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RELATEDRECORD",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "REORDERMUTEX",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 226",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "REPFACAUTH",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RFQ",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RFQLINE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RFQSTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RFQTERM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RFQVENDOR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RFQVENDORTERM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "SITEID",
            "targetKeys": "ASSETLOCSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset or Location''s Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ROUTES",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SAFETYLEXICON",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SAFETYPLAN",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SERVICEADDRESS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "FROMSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 240",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SHIPMENT",
            "parentKeys": "SITEID",
            "targetKeys": "FROMSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SHIPMENT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SITEID",
            "targetKeys": "FROMSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SITEAUTH",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
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
        },
        {
            "objectName": "SITE",
            "targetObject": "SITEFILTER",
            "parentKeys": "SITEID",
            "targetKeys": "SITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDACTIVITYQBE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDEMAVAILRES",
            "parentKeys": "SITEID",
            "targetKeys": "CURSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "SITEID",
            "targetKeys": "WORKSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "SITEID",
            "targetKeys": "ENDLOCSITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 273",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "SITEID",
            "targetKeys": "STARTLOCSITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 274",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDPMFORECAST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDPMFORECASTJP",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID",
            "targetKeys": "ENDLOCSITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "End",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID",
            "targetKeys": "STARTLOCSITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 281",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID",
            "targetKeys": "ASSETSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID",
            "targetKeys": "MNTLOCATIONSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MNT Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDPROJECTASSTS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDSTATE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SKDTEMPLATES",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SLA",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SLAASSETLOC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SLROUTE",
            "parentKeys": "SITEID",
            "targetKeys": "ENDLOCSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 287",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SLROUTE",
            "parentKeys": "SITEID",
            "targetKeys": "STARTLOCSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 288",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SPAREPART",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SPLEXICONLINK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SPRELATEDASSET",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SPWORKASSET",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SR",
            "parentKeys": "SITEID",
            "targetKeys": "ASSETSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 258",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SR",
            "parentKeys": "SITEID",
            "targetKeys": "ORIGRECSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 259",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SYNONYMDOMAIN",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TAGLOCK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TAGOUT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TICKET",
            "parentKeys": "SITEID",
            "targetKeys": "ASSETSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset''s site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TICKET",
            "parentKeys": "SITEID",
            "targetKeys": "ORIGRECSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 265",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TICKET",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TICKETSPEC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TIMEZONERULE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TKOWNERHISTORY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TKSERVICEADDRESS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TKSTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TKTEMPLTACTIVITY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TLOAMASSETCONTRACT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TLOAMASSETGRP",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TLOAMPRMDFLT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TLOAMPROMOTE",
            "parentKeys": "SITEID",
            "targetKeys": "DPLDSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TOOLINV",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TOOLINV",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 277",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "ROTASSETSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 278",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "UNASSIGNEDWORKVIEW",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "VENDORSTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WARRANTYASSET",
            "parentKeys": "SITEID",
            "targetKeys": "LOCATIONSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 281",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID",
            "targetKeys": "REPFACSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 282",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WMASSIGNTMP",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID",
            "targetKeys": "REPFACSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site of Repair Location.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOANCESTOR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOASSETUSERCUST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID",
            "targetKeys": "REPFACSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 288",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOCONTRACT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOGEN",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOHAZARD",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOHAZARDPREC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOLOCKOUT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOLOCUSERCUST",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOMATSTATUSSYNC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOMETER",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOOWNERHISTORY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOPRECAUTION",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID",
            "targetKeys": "REPFACSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Repair Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WORELEXT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WORKLOG",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID",
            "targetKeys": "REPFACSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 304",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WORKORDERSPEC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WORKPRIORITY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WORKVIEW",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOSAFETYLINK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOSAFETYPLAN",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOSERVICEADDRESS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOSTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOTAGLOCK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOTAGOUT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOTASKRELATION",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 316",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WPLABOR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 319",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WPSERVICE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WPSERVICE",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 321",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 323",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "SITE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SITE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SITE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SITE",
            "parentKeys": "PERSONID",
            "targetKeys": "CONTACT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Person to Approve Work",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SITE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "SITE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CONTACTGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site Contact Group",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site with a short code, for example, TORONTO, for a company's Toronto, Canada site. This value must be unique for all sites.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the site, for example, Toronto IT Operations Center. To enter of view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERBY",
            "required": false,
            "persistent": true,
            "title": "Entered By",
            "remarks": "User name who entered record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ENTERDATE",
            "required": false,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "Date record was entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User name who last changed record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date/Time Record was last modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The organization identifier for this site",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Site description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Specifies whether the site is active. If this check box is selected, the site is active and can be used wherever a site is specified in Maximo. It the check box is cleared, the site is inactive and will not appear when you use the select value function.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEUID",
            "required": true,
            "persistent": true,
            "title": "SITEUID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTACT",
            "required": false,
            "persistent": true,
            "title": "Site Contact",
            "remarks": "Default person at the site for approving work to be done.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CONTACTGROUP",
            "required": false,
            "persistent": true,
            "title": "Site Contact Group",
            "remarks": "Default person group at the site for approving work to be done.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
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
            "name": "ADDRESSBILLTO",
            "target": "ADDRESS",
            "remarks": "Relationship to the Address table, used to find the site's default bill to address. (address.orgid = site.orgid and address.addresscode = site.billtoaddresscode). This relationship will find zero or one object.",
            "whereClause": "orgid = :orgid and addresscode = :billtoaddresscode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ADDRESSSHIPTO",
            "target": "ADDRESS",
            "remarks": "Relationship to the Address table, used to find the site's default ship to address. (address.orgid = site.orgid and address.addresscode = site.shiptoaddresscode). This relationship will find zero or one object.",
            "whereClause": "orgid = :orgid and addresscode = :shiptoaddresscode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AUTOKEY",
            "target": "AUTOKEY",
            "remarks": "Relationship between Site and AutoKey table, used to find the site's AutoKey records. (autokey.siteid = site.siteid and autokey.orgid = site.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid = :orgid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BILLTODEFAULT",
            "target": "BILLTOSHIPTO",
            "remarks": "Relationship to the billtoshipto table, used to find the billtodefault record for given site.(site.siteid = billtoshipto.siteid and organization.orgid = billtoshipto.orgid and billtodefault=1). The resulting set will contain zero or one object.",
            "whereClause": "siteid=:siteid and orgid=:orgid and billtodefault=1",
            "cardinality": null
        },
        {
            "name": "BILLTOSHIPTO",
            "target": "BILLTOSHIPTO",
            "remarks": "Relationship to the BilltoShipto table, used to find billtoshipto records for a given site.(site.siteid = billtoshipto.siteid and site.orgid = billtoshipto.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "SHIPTODEFAULT",
            "target": "BILLTOSHIPTO",
            "remarks": "Relationship to the billtoshipto table, used to find the shiptodefault record for given site.(site.siteid = billtoshipto.siteid and organization.orgid = billtoshipto.orgid and shiptodefault=1). The resulting set will contain zero or one object.",
            "whereClause": "siteid=:siteid and orgid=:orgid and shiptodefault=1",
            "cardinality": null
        },
        {
            "name": "LABORBILLTO",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find the site's default bill to labor code (contact information). (labor.orgid = site.orgid and labor.laborcode = site.billtolaborcode). This relationship will find zero or one object.",
            "whereClause": "orgid = :orgid and laborcode = :billtolaborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORSHIPTO",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find the site's default ship to labor code (contact information). (labor.orgid = site.orgid and labor.laborcode = site.shiptolaborcode). This relationship will find zero or one object.",
            "whereClause": "orgid = :orgid and laborcode = :shiptolaborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HOLDINGLOC",
            "target": "LOCATIONS",
            "remarks": "Relationship to the locations table, used to find the holding location for this site with the same name as the site. (locations.siteid=site.siteid and locations.location=site.siteid  This relationship will find zero or one object.",
            "whereClause": "siteid=:siteid and location=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCSYSTEM",
            "target": "LOCSYSTEM",
            "remarks": "Relationship to the LocSystem table, used to find the systems in this site. The resulting set will contain one or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYSYSTEM",
            "target": "LOCSYSTEM",
            "remarks": "Relationship to the Locsystem table, used to find the primary location system record for the site. (locsystem.systemid = site.primarysystem and locsystem.siteid = site.siteid). If primarysystem is not null, this relationship will find one object.",
            "whereClause": "siteid=:siteid and primarysystem=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from SITE.",
            "whereClause": "ldkey=:siteuid and ldownertable = 'SITE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVARS",
            "target": "MAXVARS",
            "remarks": "Relationship to the MarVars table, used to find the site's MaxVars records. (maxvars.siteid = site.siteid). This relationship will find zero or more objects.",
            "whereClause": "siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGANIZATION",
            "target": "ORGANIZATION",
            "remarks": "Relationship to the Organization table, used to find the site's organization record. (organization.orgid = site.orgid). This relationship will find one object.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Relationship to the Person table, used to find the person record for the site contact. (person.personid = site.contact). This relationship will find zero or one object.",
            "whereClause": "personid = :contact",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONBILLTO",
            "target": "PERSON",
            "remarks": "Relationship to the Person table, used to find the bill to contact person for this site (person.personid=site.billtolaborcode) This relationship will find zero or one object.",
            "whereClause": "personid=:billtolaborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONSHIPTO",
            "target": "PERSON",
            "remarks": "Relationship to the Person table, used to find the ship to contact person for this site (person.personid=site.shiptolaborcode) This relationship will find zero or one object.",
            "whereClause": "personid=:shiptolaborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPS",
            "target": "PERSONGROUP",
            "remarks": "Relationship to the PersonGroup table, used to find the person group record for the site contact group. (persongroup.persongroupid = site.contactgroup). This relationship will find zero or one object.",
            "whereClause": "persongroup = :contactgroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRICALC",
            "target": "PRICALC",
            "remarks": "The relationship from Site to PriCalc; it fetches all the PriCalc rows for a given site.  The result set will contain zero or six rows.",
            "whereClause": "siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECORDTIMEZONE",
            "target": "RECORDTIMEZONE",
            "remarks": "Get associated Time Zone.",
            "whereClause": "objectname = 'SITE' and objectid = :siteuid",
            "cardinality": null
        },
        {
            "name": "RECORDTIMEZONEDIALOG",
            "target": "RECORDTIMEZONEDIALOG",
            "remarks": "Used to show the Associate Time Zone Dialog Box.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "SAFETYLEXICON",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship from Site to SafetyLexicon",
            "whereClause": "siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "WORKPRIORITY",
            "target": "WORKPRIORITY",
            "remarks": "The relationship from Site to WorkPriority; it fetches all the WorkPriority rows for a given site.  The result set will contain zero or five rows.",
            "whereClause": "siteid = :siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WORKSITE",
            "source": "AMCREW",
            "remarks": "Relationship to the Site table.  Returns the site object for this crews worksite and organization.  (amcrew.worksite=site.siteid and amcrew.orgid=site.orgid).  This returns zero or one object.",
            "whereClause": "siteid=:worksite and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AFFECTEDSITE",
            "source": "AREASAFFECTED",
            "remarks": "Relationship from Areas Affected Site to the Site table - used to get site description.",
            "whereClause": "siteid=:affectedsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEPTARGETASSETSITEID",
            "source": "ASSET",
            "remarks": "Relationship to get the Target Asset Site",
            "whereClause": "orgid =:orgid and siteid=:deptargetassetsiteid",
            "cardinality": null
        },
        {
            "name": "NEWSITE",
            "source": "ASSET",
            "remarks": "Relationship to the site records, used to find the site record for a given site.",
            "whereClause": "siteid=:newsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BBSITEDESC",
            "source": "BBOARDAUDIENCE",
            "remarks": null,
            "whereClause": "siteid = :msgsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "CONTRACTAUTH",
            "remarks": "Relationship to the Site table, used to find all Site records for a given ContractAuth. (contractauth.siteid=site.siteid). The resulting set will contain one or more records.",
            "whereClause": "siteid=:authsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZSITES",
            "source": "HAZARD",
            "remarks": "Relationship to the site table, used to find all sites for the hazard . The result set will contain zero or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "LABOR",
            "remarks": "Relationship to the Site table. Used to find out Company specified by the ShipToLocation attribute. (Site.SiteID = Labor.SiteID AND Site.OrgID = Labor.OrgID). The resultset will contain at most 1 object.",
            "whereClause": "siteid = :primarysiteid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKSITE",
            "source": "LABOR",
            "remarks": "Relationship to the Site table.  Returns the site object for this labors worksite and organization.  (labor.worksite=site.siteid and labor.orgid=site.orgid).  This returns zero or one object.",
            "whereClause": "siteid=:worksite and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABINVENTORYSITE",
            "source": "LABOR",
            "remarks": "Relationship to the Site table.  Returns the site object for this labors worksite and organization.  (labor.laborinventorysite=site.siteid and labor.orgid=site.orgid).  This returns zero or one object.",
            "whereClause": "siteid=:labinventorysite and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTSITE",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the Site table, used to find all sites that use the same itemset and companyset as the current contract site. The resulting set will contain zero or more objects.",
            "whereClause": "orgid in (select orgid from organization where itemsetid in (select itemsetid from organization where orgid=:orgid) and companysetid in (select companysetid from organization where orgid=:orgid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Site table. (locations.siteid = site.siteid and locations.orgid = site.orgid). The resulting set will contain one object.",
            "whereClause": "siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "LOCAUTH",
            "remarks": "LocAuth to Site, will be one record",
            "whereClause": "siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "MASTERPM",
            "remarks": "Relationship to the Site table, used to list down all the sites that the user has acces to. The resulting set will contain one or more records.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTSITE",
            "source": "MASTERVIEW",
            "remarks": "Relationship to the Site table, used to find all sites that use the same itemset and companyset as the current contract site. The resulting set will contain zero or more objects.",
            "whereClause": "orgid in (select orgid from organization where itemsetid in (select itemsetid from organization where orgid=:orgid) and companysetid in (select companysetid from organization where orgid=:orgid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "MAXLICUSAGE",
            "remarks": "Relationship from MAXLICUSAGE to SITE table.",
            "whereClause": "siteid = (select defsite from maxuser where userid='WILSON')",
            "cardinality": null
        },
        {
            "name": "SITE",
            "source": "MAXUSER",
            "remarks": "Relationship to the Site table, used to find site records for a given User record. (siteid = :DEFAULTREPFACSITEID). The resulting set will contain zero or one object.",
            "whereClause": "siteid = :DEFAULTREPFACSITEID",
            "cardinality": null
        },
        {
            "name": "STOREROOMSITE",
            "source": "MAXUSER",
            "remarks": "MaxUser to Site for StoreroomSite",
            "whereClause": "siteid = :storeroomsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFSITE",
            "source": "MAXUSER",
            "remarks": "Site record for user default site",
            "whereClause": "siteid = :defsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "MAXVARINPUT",
            "remarks": "Relationship to Site table. ( site.siteid = maxvarinput.site ). If this is a site-level maxvar, the result set will contain one object.",
            "whereClause": "siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "MR",
            "remarks": "Relationship to the Site table, used to find site records whose orgid and siteid match that of the material requisition's. (site.siteid = mr.siteid and site.orgid = mr.orgid). The resulting set will contain zero or one object.",
            "whereClause": "siteid = :siteid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "MULTIASSETLOCCI",
            "remarks": "site record for the MultiAssetLocCI",
            "whereClause": "siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MOVETOSITE",
            "source": "MULTIASSETLOCCI",
            "remarks": "movetosite for MultiAssetLocCI",
            "whereClause": "siteid=:movetosite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the Site table, used to find all site records for a given organization. (organization.orgid = site.orgid). The resulting set will contain one or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENABLEDSITE",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the Site table, used to find all enabled site records for a given organization. (organization.orgid = site.orgid and site.disabled=no ). The resulting set will contain one or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFLOCATIONSITE",
            "source": "PERSON",
            "remarks": "Relationship to the site table.  Used to find the site whose siteid is this locationsite. (site.siteid=person.locationsite).  The resulting set will return zero or one object.",
            "whereClause": "siteid=:locationsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPUSEDBYSITE",
            "source": "PERSONGROUP",
            "remarks": "returns any rows if used by site",
            "whereClause": "(contactgroup = :persongroup)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "PLUSCDASSETDATA",
            "remarks": "Relationship to the SITE table",
            "whereClause": "siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "SITE",
            "source": "PLUSCTEMPLATE",
            "remarks": "Relationship to SITE table",
            "whereClause": "siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "SITE",
            "source": "PO",
            "remarks": "Relationship to the Site table, used to find site records for a given purchase order. (site.siteid = po.siteid and site.orgid = po.orgid). The resulting set will contain zero or one object.",
            "whereClause": "siteid = :siteid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "POLINE",
            "remarks": "Relationship to the Site table, used to find site records for a given purchase order line. (site.siteid = poline.tositeid and site.orgid = poline.orgid). The resulting set will contain zero or one object.",
            "whereClause": "siteid = :tositeid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "PR",
            "remarks": "Relationship to the Site table, used to find site records for a given purchase requisition. (site.siteid = pr.siteid and site.orgid = pr.orgid). The resulting set will contain zero or one object.",
            "whereClause": "siteid = :siteid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTSITE",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the Site table, used to find all sites that use the same itemset and companyset as the current contract site. The resulting set will contain zero or more objects.",
            "whereClause": "orgid in (select orgid from organization where itemsetid in (select itemsetid from organization where orgid=:orgid) and companysetid in (select companysetid from organization where orgid=:orgid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "RFQ",
            "remarks": "Relationship to the Site table, used to find site records for a given request for quotation. (site.siteid = rfq.siteid and site.orgid = rfq.orgid). The resulting set will contain zero or one object.",
            "whereClause": "siteid = :siteid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "SERVICEADDRESS",
            "remarks": "Relationship to the Site table.",
            "whereClause": "siteid = :siteid and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "CONTRACTSITE",
            "source": "SFWVIEW",
            "remarks": "Relationship to the Site table, used to find all sites that use the same itemset and companyset as the current contract site. The resulting set will contain zero or more objects.",
            "whereClause": "orgid in (select orgid from organization where itemsetid in (select itemsetid from organization where orgid=:orgid) and companysetid in (select companysetid from organization where orgid=:orgid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "SITEAUTH",
            "remarks": "Site associated with this SiteAuth",
            "whereClause": "siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "TKSERVICEADDRESS",
            "remarks": "Relationship to the Site table.",
            "whereClause": "siteid = :siteid and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "STOREROOMSITE",
            "source": "USERSECUR",
            "remarks": "UserSecur to Site, for storeroom site",
            "whereClause": "siteid = :storeroomsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFSITE",
            "source": "USERSECUR",
            "remarks": "UserSecur to Site, for default site",
            "whereClause": "siteid = :defsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTSITE",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship to the Site table, used to find all sites that use the same itemset and companyset as the current contract site. The resulting set will contain zero or more objects.",
            "whereClause": "orgid in (select orgid from organization where itemsetid in (select itemsetid from organization where orgid=:orgid) and companysetid in (select companysetid from organization where orgid=:orgid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "source": "WOSERVICEADDRESS",
            "remarks": "Relationship to the Site table.",
            "whereClause": "siteid = :siteid and orgid = :orgid",
            "cardinality": null
        }
    ]
}