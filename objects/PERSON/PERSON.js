mos = {
    "objectName": "PERSON",
    "className": "psdi.app.person.PersonSet",
    "description": "The Person Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "PERSONUID",
    "primaryKeyColumns": [
        "PERSONID"
    ],
    "logicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "ACTCI",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ACTCIRELATION",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ACTCISPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ADDRESS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "AMCREWSTATHIS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Change By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "AMCTSTATHIST",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Change By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "APPFIELDDEFAULTS",
            "parentKeys": "PERSONID",
            "targetKeys": "GRPNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "APPFIELDDEFAULTS",
            "parentKeys": "PERSONID",
            "targetKeys": "USERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person the field default applies to.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "PERSONID",
            "targetKeys": "CONTACT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contact",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSET",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETLOCUSERCUST",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETMETER",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETMETER",
            "parentKeys": "PERSONID",
            "targetKeys": "LASTREADINGINSPCTR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Reading Inspector",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETMNTSKD",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Entered By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETOPSKD",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Entered By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETSPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETUSERCUST",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ATTENDANCE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "PERSONID",
            "targetKeys": "COMPLETEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who completed.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "AUTOSCRIPT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "AUTOSCRIPT",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEDBYID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Created By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "AUTOSCRIPT",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "AUTOSCRIPTSTATE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "BBOARDMSGSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who has seen the bulletin.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "BBSTATUSHISTORY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
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
            "objectName": "PERSON",
            "targetObject": "BOOKMARK",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User''s Bookmarks.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "BULLETINBOARD",
            "parentKeys": "PERSONID",
            "targetKeys": "POSTBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who posted the bulletin.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CI",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CI",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner of CI",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CIRELATION",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CIRELATIONHIS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CISPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CISPECHIS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CISTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CITYPESTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "COMMITPERSON",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "COMMLOG",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "COMMODITIES",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "COMMTEMPLATE",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The person who created this CommTemplate",
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
        },
        {
            "objectName": "PERSON",
            "targetObject": "COMPANYSETFILTER",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 43",
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
            "objectName": "PERSON",
            "targetObject": "CONTRACT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CONTRACT",
            "parentKeys": "PERSONID",
            "targetKeys": "PURCHASEAGENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Agent",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "PERSONID",
            "targetKeys": "BILLTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bill to Attention",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CONTRACTLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CONTRACTSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CONVERSION",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CRONTASKINSTANCE",
            "parentKeys": "PERSONID",
            "targetKeys": "RUNASUSERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CURRENCY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DEFAULTQUERY",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Query Created By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DEFAULTQUERY",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 54",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DEPHISTORY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who changed the depreciation schedule",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMCFGGROUP",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMCFGOBJECT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMCOLLECTION",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User tracked by Change collection.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMCOLLECTIONOBJECT",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMCOLLECTIONOBJECT",
            "parentKeys": "PERSONID",
            "targetKeys": "EVENTUSER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User for the Migration Object data.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMCOLLECTIONRELOBJ",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMCOMPJOB",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMDEPENDENCY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMERROR",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMMESSAGE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMPACKAGE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMPACKAGE",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMPACKAGEDEF",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMPKGDEFSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMPKGDIST",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMPKGDISTTRACK",
            "parentKeys": "PERSONID",
            "targetKeys": "DISTRIBUTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who distributed Tracking Information.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMPKGDSTTRGT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMPKGEVENTTRK",
            "parentKeys": "PERSONID",
            "targetKeys": "EVENTUSER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tracking Events for this Person.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMPKGSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMPKGTRACKHIST",
            "parentKeys": "PERSONID",
            "targetKeys": "EVENTUSER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "History tracking for this Person.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DOCINFO",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DOCINFO",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DOCLINKS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DOCLINKS",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "EMAIL",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Email Addresses",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ESCCOMMLOG",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "EXCHANGE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "EXCHANGE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "FAVITEM",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Favorite Items",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "FEATURESPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "FEATURESTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "FINANCIALPERIODS",
            "parentKeys": "PERSONID",
            "targetKeys": "CLOSEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who closed the financial period.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "FINCNTRL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "GLCOMPONENTS",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 88",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "GROUPUSER",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 89",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "GRPREASSIGNAUTH",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 90",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INBOUNDCOMM",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INBOUNDCOMM",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Sending Email",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INCIDENT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INCIDENT",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 94",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INCIDENT",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 95",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVOICE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVOICE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVOICELINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVOICESTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVOICETRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVRESERVE",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVUSE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVUSE",
            "parentKeys": "PERSONID",
            "targetKeys": "INVOWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVUSE",
            "parentKeys": "PERSONID",
            "targetKeys": "SHIPTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Attention",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVUSELINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVUSELINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ISSUETO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person to Issue To",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVUSESTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ITEMORGSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ITEMSETFILTER",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 111",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ITEMSPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ITEMSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "JOBPLAN",
            "parentKeys": "PERSONID",
            "targetKeys": "LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lead for Job Plan",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "JOBPLAN",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner of work orders created with this job plan.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "JOBPLAN",
            "parentKeys": "PERSONID",
            "targetKeys": "PLUSCCHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last person who changed the job plan.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "JOBPLAN",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor for job plan work.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "JOBPLANSPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "JOBTASK",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner of Work",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "KPIMAIN",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "KPITEMPLATE",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "KPITEMPLATE",
            "parentKeys": "PERSONID",
            "targetKeys": "REVISEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Revised By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LABOR",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Record for Labor",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LABORCERTHIST",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LABORQUALSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LABORSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LABORVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LABORVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "PURCHASEAGENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Agent",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LABTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LAYOUT",
            "parentKeys": "PERSONID",
            "targetKeys": "QUERYOWNER",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 131",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LEASEVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LEASEVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "PURCHASEAGENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Agent",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LEASEVIEWLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LMO",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LMOATT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LMOIMRLN",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONMETER",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONMETER",
            "parentKeys": "PERSONID",
            "targetKeys": "LASTREADINGINSPCTR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Reading Inspector",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONMNTSKD",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Entered By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONOPSKD",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Entered By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONS",
            "parentKeys": "PERSONID",
            "targetKeys": "BILLTOLABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 140",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONS",
            "parentKeys": "PERSONID",
            "targetKeys": "INVOWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 142",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONS",
            "parentKeys": "PERSONID",
            "targetKeys": "SHIPTOLABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 143",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONUSERCUST",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCMETERREADING",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCMETERREADING",
            "parentKeys": "PERSONID",
            "targetKeys": "INSPECTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inspector",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOGINBLOCK",
            "parentKeys": "PERSONID",
            "targetKeys": "BLOCKBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Blocked By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOGINTRACKING",
            "parentKeys": "PERSONID",
            "targetKeys": "ADMINUSERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Administrator",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOGINTRACKING",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 151",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MASTERPM",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MASTERVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MASTERVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "PURCHASEAGENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Agent",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MATRECTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MATRECTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ISSUETO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person to issue to.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MATRECTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MATRECTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "STATUSCHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Status Change By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MATUSETRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MATUSETRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ISSUETO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person issued materials.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXASYNCJOB",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 161",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXCONDDETAIL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXCONTROLVALUE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXENDPOINT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXENDPOINTDTL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXEXTBOOLVAL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXEXTCTLVAL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXEXTIFACEIN",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXEXTIFACEOUT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXEXTLISTVAL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXEXTOVER",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXEXTSYSCONTROL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXEXTSYSTEM",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXEXTXREFVAL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXHANDLER",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACECOND",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACECONTROL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACEIN",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACEINCNTL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACEINDETAIL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACEINVOKE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACEOUT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACEOUTCNTL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACEPROC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIM",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIMPROP",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTERROR",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTERROR",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTERROREXTRACT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTERRORMSG",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTLISTENER",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTMAPPING",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTMAPPINGDETAIL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTOBJAPP",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTOBJCOLS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTOBJDETAIL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTOBJECT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTPOLICY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTPOLICYPARAM",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXLAUNCHENTRY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXLECONTEXT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
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
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXLICPURCHDET",
            "parentKeys": "PERSONID",
            "targetKeys": "PURCHASEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchased by",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXLICUSAGE",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXLICUSERASC",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXLISTOVERVAL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXPROCCOLS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXPROP",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXPROPINSTANCE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXPROPVALUE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXQUEUE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXQUEUE",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXRECORDLOCK",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXREPLACEPROC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXSESSION",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXTHREADLOGGER",
            "parentKeys": "PERSONID",
            "targetKeys": "CONTEXTUSER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXTHREADLOGGERDET",
            "parentKeys": "PERSONID",
            "targetKeys": "CONTEXTUSER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXTOKEN",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXTRANSFORMPROC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXUSER",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person record for user.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXUSER",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 220",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXUSERSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXUSERSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 222",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXWSREGISTRY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXXREFOVERVAL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MEASUREMENT",
            "parentKeys": "PERSONID",
            "targetKeys": "INSPECTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inspector",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "METERREADING",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "METERREADING",
            "parentKeys": "PERSONID",
            "targetKeys": "INSPECTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inspector",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MODAVAIL",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MR",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MR",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MR",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MR",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDFOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested For",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MRSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MXODMAPP",
            "parentKeys": "PERSONID",
            "targetKeys": "DEPLOYEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "NAMEDUSERS",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OMP",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OMPCIRLN",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OMPIMLMORLN",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OMPIMRLN",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ORGANIZATION",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ORGFILTER",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCINTERACTION",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCINTGROUP",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Changed By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCINTGRPAPPMENU",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Changed By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCINTGRPAPPS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Change By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCINTGRPMEMBERS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Changed By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCINTQUERY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Changed By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCINTQUERYPARAMS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Changed By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCLINK",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCPREFILLMAP",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCPROVIDER",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCRESOURCETYPES",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCTRANSACTION",
            "parentKeys": "PERSONID",
            "targetKeys": "TXSENDER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Transaction sender",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PASSWORDHISTORY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PASSWORDHISTORY",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PDSPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSCOMMODITY",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSON",
            "parentKeys": "PERSONID",
            "targetKeys": "DELEGATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Delegate",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSON",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSONANCESTOR",
            "parentKeys": "PERSONID",
            "targetKeys": "ANCESTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "List of the person and the people who report to that person.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSONANCESTOR",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "List of the person and that person\"s supervisors.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSONCAL",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendars for Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSONGROUPTEAM",
            "parentKeys": "PERSONID",
            "targetKeys": "RESPPARTY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Responsible Party",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSONGROUPTEAM",
            "parentKeys": "PERSONID",
            "targetKeys": "RESPPARTYGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Responsible Party Group",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSONGROUPVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "DELEGATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Delegate",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSONGROUPVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSONGROUPVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "RESPPARTY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Responsible Party",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSONGROUPVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "RESPPARTYGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Responsible Party Group",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSONGROUPVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSONSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSONSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PHONE",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person''s Phone numbers",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PLUSCASSETSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PLUSCDSSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who made the last change.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PLUSCJPSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PLUSCPMEXTDATE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PLUSCSPOTCHECK",
            "parentKeys": "PERSONID",
            "targetKeys": "CHECKBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PLUSCTPASSET",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PLUSCTPHISTORY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PLUSDSPLAN",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PM",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PM",
            "parentKeys": "PERSONID",
            "targetKeys": "LEAD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person leading PM work.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PM",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner of the PM",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PM",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor for PM work.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PMFORECAST",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PMFORECAST",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PMFORECASTJP",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PMFORECASTJP",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PO",
            "parentKeys": "PERSONID",
            "targetKeys": "BILLTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person to bill to.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PO",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PO",
            "parentKeys": "PERSONID",
            "targetKeys": "PURCHASEAGENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchasing Agent",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PO",
            "parentKeys": "PERSONID",
            "targetKeys": "SHIPTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person to ship to.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "POLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "POLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "POLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "SHIPTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Attention",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "POLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "POSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PR",
            "parentKeys": "PERSONID",
            "targetKeys": "BILLTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person to Bill",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PR",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PR",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person requesting PR",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PR",
            "parentKeys": "PERSONID",
            "targetKeys": "SHIPTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person to Ship to.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PR",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PRLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PRLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person requesting PR Line item.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PROBLEM",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PROBLEM",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 298",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PROBLEM",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 299",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PROCOBJ",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PROCRULE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PRSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PURCHVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PURCHVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "PURCHASEAGENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Agent",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "QUALSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "QUERY",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Created By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "QUOTATIONLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RECONASSETRESULT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RECONCIRESULT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RECONRESULT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REORDERMUTEX",
            "parentKeys": "PERSONID",
            "targetKeys": "USERNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 311",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REORDERPAD",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTBY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 312",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REORDERPAD",
            "parentKeys": "PERSONID",
            "targetKeys": "USRNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 313",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REPORT",
            "parentKeys": "PERSONID",
            "targetKeys": "LASTRUNBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Run By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REPORT",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REPORTDESIGN",
            "parentKeys": "PERSONID",
            "targetKeys": "IMPORTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Imported By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REPORTJOB",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REPORTOUTPUT",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REPORTOUTPUTAUTH",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REPORTRUNQUEUE",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REPORTSCHED",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "REPORTUSAGELOG",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQ",
            "parentKeys": "PERSONID",
            "targetKeys": "BILLTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bill To Attention",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQ",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQ",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQ",
            "parentKeys": "PERSONID",
            "targetKeys": "PURCHASEAGENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Agent",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQ",
            "parentKeys": "PERSONID",
            "targetKeys": "REPLYTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reply To Attention",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQ",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQ",
            "parentKeys": "PERSONID",
            "targetKeys": "SHIPTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Attention",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RFQSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SAFETYPLAN",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SCCONFIG",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 335",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SETS",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SFWVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SFWVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "PURCHASEAGENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Agent",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SFWVIEWLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SHIPMENT",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SHIPMENT",
            "parentKeys": "PERSONID",
            "targetKeys": "SHIPTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Person",
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
            "objectName": "PERSON",
            "targetObject": "SITEFILTER",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 347",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDACTIVITYQBE",
            "parentKeys": "PERSONID",
            "targetKeys": "LEAD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lead",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDACTIVITYQBE",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDACTIVITYQBE",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDEMAVAILRES",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Change By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDGVPREF",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDODMERUN",
            "parentKeys": "PERSONID",
            "targetKeys": "ODMEUSER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDORIGINDESTMATRIX",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Change By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPMFORECAST",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPMFORECAST",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPMFORECASTJP",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPMFORECASTJP",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECT",
            "parentKeys": "PERSONID",
            "targetKeys": "COMMITBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Committed By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECT",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECT",
            "parentKeys": "PERSONID",
            "targetKeys": "SAVEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Saved By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECT",
            "parentKeys": "PERSONID",
            "targetKeys": "PUBLISHBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Publish By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECTEMWO",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Change By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECTPUBLISH",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Change By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECTSCENARIO",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Change By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECTSCENARIO",
            "parentKeys": "PERSONID",
            "targetKeys": "LASTRUNUSER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDPROJECTSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Change By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDSTATE",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDTEMPLATES",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDUSERPROP",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SLA",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SLA",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SLA",
            "parentKeys": "PERSONID",
            "targetKeys": "CUSTVENDORCONTACT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Primary contact person of Customer/Vendor",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SLA",
            "parentKeys": "PERSONID",
            "targetKeys": "SLACONTACT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SLA Administrator",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SMS",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SOLUTION",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SOLUTIONSPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SOLUTIONSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SR",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SR",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 370",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SR",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 371",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TAMITDPAHWM",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TAX",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TAXTYPE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TEMPLATESTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TICKET",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TICKET",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Owner of Ticket",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TICKET",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TICKETSPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TIMEZONERULE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TKOWNERHISTORY",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TKOWNERHISTORY",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNERCHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Changed by",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TKSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TKTEMPLATE",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TKTEMPLATESPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TKTEMPLTACTIVITY",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TKTEMPLTACTYSPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TOOLTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TOOLTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "PLUSCTECHNICIAN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "USERPREF",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User Preference",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "USERPURGL",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WARRANTYVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WARRANTYVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "PURCHASEAGENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Agent",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WARRANTYVIEWLINE",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WFACTIVATION",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "PERSONID",
            "targetKeys": "ASSIGNCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Flow Assignments",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "PERSONID",
            "targetKeys": "ORIGPERSON",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Original Assignee",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WFINSTANCE",
            "parentKeys": "PERSONID",
            "targetKeys": "ORIGINATOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who started this Workflow",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WFPROCESS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WFREVISION",
            "parentKeys": "PERSONID",
            "targetKeys": "SYNCHRONIZEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Synchronized By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WFTRANSACTION",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who caused the transaction",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "PERSONID",
            "targetKeys": "INSPECTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inspector",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "PERSONID",
            "targetKeys": "LEAD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lead",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOACTIVITY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOACTIVITY",
            "parentKeys": "PERSONID",
            "targetKeys": "INSPECTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inspector",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOACTIVITY",
            "parentKeys": "PERSONID",
            "targetKeys": "LEAD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lead",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOACTIVITY",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOACTIVITY",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOASSETUSERCUST",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Custodian",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOCHANGE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOCHANGE",
            "parentKeys": "PERSONID",
            "targetKeys": "INSPECTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inspector",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOCHANGE",
            "parentKeys": "PERSONID",
            "targetKeys": "LEAD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lead",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOCHANGE",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOCHANGE",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOGEN",
            "parentKeys": "PERSONID",
            "targetKeys": "LEAD",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 418",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOGEN",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 419",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOGEN",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 420",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOLOCUSERCUST",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Custodian",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOOWNERHISTORY",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Owning Work Order",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOOWNERHISTORY",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNERCHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who changed Ownership",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORELEASE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORELEASE",
            "parentKeys": "PERSONID",
            "targetKeys": "INSPECTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inspector",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORELEASE",
            "parentKeys": "PERSONID",
            "targetKeys": "LEAD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lead",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORELEASE",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORELEASE",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORKLOG",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORKLOG",
            "parentKeys": "PERSONID",
            "targetKeys": "MODIFYBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Modified By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONID",
            "targetKeys": "INSPECTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inspector",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONID",
            "targetKeys": "LEAD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lead",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORKORDER",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORKORDERSPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORKVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "OWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOSAFETYPLAN",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WPITEM",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WPMATERIAL",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WPSERVICE",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WPTOOL",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ADDRESS",
            "targetObject": "PERSON",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "LOCATIONORG, BILLTOADDRESS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person''s Bill To Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "PERSON",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "LOCATIONORG, SHIPTOADDRESS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person''s Ship To Address",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "PERSON",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "PERSON",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGUAGE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PERSON",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "LOCATIONSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person''s Location",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "PERSON",
            "parentKeys": "APP",
            "targetKeys": "DFLTAPP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Start Application for the person.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PERSON",
            "parentKeys": "ORGID",
            "targetKeys": "LOCATIONORG",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person''s Organization",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSON",
            "parentKeys": "PERSONID",
            "targetKeys": "DELEGATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Delegate",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSON",
            "parentKeys": "PERSONID",
            "targetKeys": "SUPERVISOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supervisor",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "PERSON",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person''s default Group",
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
        }
    ],
    "columns": [
        {
            "attributeName": "PERSONID",
            "required": true,
            "persistent": true,
            "title": "Person",
            "remarks": "Identifier of the person's record. This field must be unique.When you save a person record, this field becomes read only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "The current status of the person. On inserting a new record, this field defaults to an active status.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYNAME",
            "required": false,
            "persistent": true,
            "title": "Name",
            "remarks": "A nick name or a friendly name that this person can be identified with.This field is automatically populated when values are entered in the First Name and/or Last Name fields.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FIRSTNAME",
            "required": false,
            "persistent": true,
            "title": "First Name",
            "remarks": "The first name of the person whose record this is.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTNAME",
            "required": false,
            "persistent": true,
            "title": "Last Name",
            "remarks": "The last name of the person whose record this is.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPARTMENT",
            "required": false,
            "persistent": true,
            "title": "Department",
            "remarks": "The department this person belongs to.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TITLE",
            "required": false,
            "persistent": true,
            "title": "Title",
            "remarks": "The job title of this person.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMPLOYEETYPE",
            "required": false,
            "persistent": true,
            "title": "Employee Type",
            "remarks": "The type of employee this person is, such as full time or a part time employee.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JOBCODE",
            "required": false,
            "persistent": true,
            "title": "Job Code",
            "remarks": "The job code of this person.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUPERVISOR",
            "required": false,
            "persistent": true,
            "title": "Supervisor",
            "remarks": "The name of this person's supervisor.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "BIRTHDATE",
            "required": false,
            "persistent": true,
            "title": "Date of Birth",
            "remarks": "The date of this person's birth.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTEVALDATE",
            "required": false,
            "persistent": true,
            "title": "Last Evaluation",
            "remarks": "The date of this person's most recent evaluation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEXTEVALDATE",
            "required": false,
            "persistent": true,
            "title": "Next Evaluation",
            "remarks": "The date of this person's next evaluation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HIREDATE",
            "required": false,
            "persistent": true,
            "title": "Hire Date",
            "remarks": "The date that this person started working for the company.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TERMINATIONDATE",
            "required": false,
            "persistent": true,
            "title": "Termination Date",
            "remarks": "The date when this person's services are terminated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Person's Location",
            "remarks": "The place where this person is located.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "LOCATIONSITE",
            "required": false,
            "persistent": true,
            "title": "Person's Site",
            "remarks": "The site to which this person belongs.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "LOCATIONORG",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization of the location",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SHIPTOADDRESS",
            "required": false,
            "persistent": true,
            "title": "Ship to Address",
            "remarks": "The shipping address of the person. This will be the default shipping address used for purchase transactions entered by this person.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "BILLTOADDRESS",
            "required": false,
            "persistent": true,
            "title": "Bill to Address",
            "remarks": "The billing address of this person. This will be used as the default billing address for purchase transactions entered by the user.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "DROPPOINT",
            "required": false,
            "persistent": true,
            "title": "Drop Point",
            "remarks": "The drop point for making deliveries.",
            "sameAsAttribute": "DROPPOINT",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "WFMAILELECTION",
            "required": false,
            "persistent": true,
            "title": "Workflow E-mail Notification",
            "remarks": "The person's choice of when to receive emailed workflow assignments. A value list field defining the circumstances in which this person will receive workflow related e-mail notification.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TRANSEMAILELECTION",
            "required": true,
            "persistent": true,
            "title": "Notice of E-commerce Exceptions",
            "remarks": "The person''s choice of when to receive transaction email.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELEGATE",
            "required": false,
            "persistent": true,
            "title": "Workflow Delegate",
            "remarks": "The delegate for Workflow assignments for this person. If there is a value in this field and if the workflow assignment is received between the Delegate To and Delegate From date, Workflow sends the assignment to the delegate. Enter a value or click Detail Menu to select an option and retrieve a value",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DELEGATEFROMDATE",
            "required": false,
            "persistent": true,
            "title": "Delegate From",
            "remarks": "The first date from which this person's delegate takes over the workflow assignments.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELEGATETODATE",
            "required": false,
            "persistent": true,
            "title": "Delegate To",
            "remarks": "The last date till which this person's delegate works on the workflow assignments. The value entered in this field must be either equal to or greater than the value in the Delegate From field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PCARDNUM",
            "required": false,
            "persistent": true,
            "title": "Card #",
            "remarks": "The number on the person's company's credit card.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PCARDTYPE",
            "required": false,
            "persistent": true,
            "title": "Card Type",
            "remarks": "The type of credit card used. Enter a value or click Select Value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PCARDEXPDATE",
            "required": false,
            "persistent": true,
            "title": "Expiration Date",
            "remarks": "The expiration date of the company credit card.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PCARDVERIFICATION",
            "required": false,
            "persistent": true,
            "title": "Verification Value",
            "remarks": "The three- or four-digit code at the end of a credit card number; you can find this verification code on the back or front of the card.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESSLINE1",
            "required": false,
            "persistent": true,
            "title": "Address",
            "remarks": "The address of this person.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESSLINE2",
            "required": false,
            "persistent": true,
            "title": "City",
            "remarks": "Address Line 2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESSLINE3",
            "required": false,
            "persistent": true,
            "title": "State/Province",
            "remarks": "Address Line 3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CITY",
            "required": false,
            "persistent": true,
            "title": "City",
            "remarks": "The city where this person resides.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REGIONDISTRICT",
            "required": false,
            "persistent": true,
            "title": "Regional/District",
            "remarks": "Region/District",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COUNTY",
            "required": false,
            "persistent": true,
            "title": "County",
            "remarks": "County",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATEPROVINCE",
            "required": false,
            "persistent": true,
            "title": "State/Province",
            "remarks": "The state or province where this person resides; can be the two-character code or full spelling.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COUNTRY",
            "required": false,
            "persistent": true,
            "title": "Country",
            "remarks": "The country where this person resides.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POSTALCODE",
            "required": false,
            "persistent": true,
            "title": "ZIP/Postal Code",
            "remarks": "The zip or postal code of this person.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VIP",
            "required": false,
            "persistent": true,
            "title": "VIP",
            "remarks": "Indicates if this person is a VIP. This field displays a value indicating the level of importance of the VIP.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "The date of the last status change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCEPTINGWFMAIL",
            "required": true,
            "persistent": true,
            "title": "Accepting E-mail",
            "remarks": "System-managed flag indicating whether a user is currently accepting emailed workflow assignments",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPRIORITY",
            "required": false,
            "persistent": true,
            "title": "Default WO Priority",
            "remarks": "The default priority a work order receives when reported by this person.",
            "sameAsAttribute": "WOPRIORITY",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "LOCTOSERVREQ",
            "required": true,
            "persistent": true,
            "title": "Default Location to Service Request",
            "remarks": "Indicates if service requests reported by this person will default to the location associated with this person",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONUID",
            "required": true,
            "persistent": true,
            "title": "PERSONUID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYNAME_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Display Name Long Desc",
            "remarks": "NP long description field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NP_STATUSMEMO",
            "required": false,
            "persistent": false,
            "title": "Change Status Memo",
            "remarks": "Status change memo, temporary non-persistent field used by MEA",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
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
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
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
            "title": "External Ref ID",
            "remarks": "External Ref ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYFROM",
            "required": false,
            "persistent": false,
            "title": "Display From",
            "remarks": "Displays the current date. Starting from this date, the Available Work Hours table window displays the seven days of the week. You can modify this date to select a new starting date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGUAGE",
            "required": false,
            "persistent": true,
            "title": "Language",
            "remarks": "This person's language preference for using Maximo.",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "LOCALE",
            "required": false,
            "persistent": true,
            "title": "Locale",
            "remarks": "The date format and the currency format used in the region where this person resides.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TIMEZONE",
            "required": false,
            "persistent": true,
            "title": "Time Zone",
            "remarks": "The time zone of this person's location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIMARYEMAIL",
            "required": false,
            "persistent": false,
            "title": "Primary E-mail",
            "remarks": "The primary email address used to contact this person. To display all email addresses of this person, click the Show/Manage icon to display the Add/Modify Email Addresses dialog box. You can modify this email address directly in the Primay Email field if it is the only email address displayed in the Add/Modify Email Addresses dialog box for this person. The primary email address may not be deleted unless it is the only email address",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "PRIMARYPHONE",
            "required": false,
            "persistent": false,
            "title": "Primary Phone",
            "remarks": "The primary phone number that is used to contact this person. To display all phone numbers of this person, click the Show/Manage icon to display the Add/Modify Phone Numbers dialog box. You can modify this number directly in the Primary Phone field if it is the only phone number displayed in the Add/Modify Phone Numbers dialog box for this person. The primary phone number may not be deleted unless it is the only phone number.",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "PRIMARYCALORG",
            "required": false,
            "persistent": false,
            "title": "Calendar Organization",
            "remarks": "Primary Calendar Organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "PRIMARYCALNUM",
            "required": false,
            "persistent": false,
            "title": "Primary Calendar",
            "remarks": "The primary calendar record associated with this person. To display all calendar records of this person, click the Show/Manage icon to display the Calendars dialog box.",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "PRIMARYSHIFTNUM",
            "required": false,
            "persistent": false,
            "title": "Primary Shift",
            "remarks": "The primary shift record associated with this person.",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
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
            "attributeName": "PRIMARYSMS",
            "required": false,
            "persistent": true,
            "title": "Primary",
            "remarks": "Primary SMS Address",
            "sameAsAttribute": "ADDRESS",
            "sameAsObject": "SMS"
        },
        {
            "attributeName": "STATUSIFACE",
            "required": true,
            "persistent": false,
            "title": "Has Status Changed",
            "remarks": "Non persistent boolean field to indicate whether the status has been changed after the stateful object is fetched from the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Person Group",
            "remarks": "The default group for a person. The default group applies to a person record if they belong to one group or multiple groups or if they do not belong to any groups.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "IM_ID",
            "required": false,
            "persistent": true,
            "title": "Instant Messaging Id",
            "remarks": "Instant Messaging Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALTYPE",
            "required": false,
            "persistent": true,
            "title": "Calendar Type",
            "remarks": "Calendar Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DFLTAPP",
            "required": false,
            "persistent": true,
            "title": "User Default Application",
            "remarks": "Specify your preferred default application. If you do not specify an application, either the application specified for your security group or the system default application displays.",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "DEVICECLASS",
            "required": false,
            "persistent": true,
            "title": "Email format",
            "remarks": "The email format you want to use for email interaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISCONSULTANT",
            "required": false,
            "persistent": false,
            "title": "Is Consultant",
            "remarks": "Indicates whether the user provides consultancy services for one or more tenants.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYTO",
            "required": false,
            "persistent": false,
            "title": "Display To",
            "remarks": "Displays the current date plus seven days date. Available Work Hours table window displays the seven days of the week. You can modify this date to select a new ending date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "BILLTOADDRESS",
            "target": "ADDRESS",
            "remarks": "Relationship to the address table.  Used to find the address whose addresscode is contained in this persons billtoaddress.  (address.addresscode=person.billtoaddress).  The resulting set will return zero or one object.",
            "whereClause": "addresscode=:billtoaddress and orgid=:locationorg",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTOADDRESS",
            "target": "ADDRESS",
            "remarks": "Relationship to the address table.  Used to find the address whose addresscode is contained in this persons shiptoaddress. (address.addresscode=person.shiptoaddress).  The resulting set will return zero or one object.",
            "whereClause": "addresscode=:shiptoaddress and orgid=:locationorg",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCALE",
            "target": "ALNDOMAIN",
            "remarks": "Relationship from Person to Alndomain to get the description of locale.",
            "whereClause": "domainid='LOCALE' and value=:locale",
            "cardinality": null
        },
        {
            "name": "CALTYPE",
            "target": "ALNDOMAIN",
            "remarks": "Relationship from Person to CALTYPE domain to get calendar type description",
            "whereClause": "domainid='CALTYPE' and value=:caltype",
            "cardinality": null
        },
        {
            "name": "ASSETUSERCUST",
            "target": "ASSETUSERCUST",
            "remarks": "Relationship to the assetusercust table from person where assetusercust.personid=person.personid",
            "whereClause": "personid=:personid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Doclinks table.  Used to find out DocLinks for the Person. (keytable='PERSON' and keycolumn='PERSONID' and keyvalue=:personid$DOCLINKS.KEYVALUE).  The resultset will contain zero or more objects.",
            "whereClause": "ownertable='PERSON' and ownerid=:personuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from PERSON to the non-persistent DrillDown table. (No whereclause.)  The resulting set will contain zero objects.  This relationship is used when the DrillDown page is launched from a location field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EMAIL",
            "target": "EMAIL",
            "remarks": "Relationship to the email table. Used to find all the email records of this person. (email.personid=person.personid). The resulting set will be zero or more records.",
            "whereClause": "personid=:personid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "PRIMARYEMAIL",
            "target": "EMAIL",
            "remarks": "Relationship to the email table where personid=personid and isprimary=Y.  (person.personid=email.personid AND email.isprimary=Y.)  This will return 1 object.",
            "whereClause": "personid=:personid and  isprimary=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "target": "LABOR",
            "remarks": "Relationship to the labor table, used to find the labor code for this person. (maxuser.personid = person.personid). The resulting set will contain zero or more objects. The labor records are across different organizations.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LANGUAGE",
            "target": "LANGUAGE",
            "remarks": "Relationship from Person to Language where language=maxlangcode.  Will return 0 or 1 object.",
            "whereClause": "maxlangcode=:language",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the locations table. Used to find the default location of this person. (locations.location=person.location and locations.siteid=person.locationsite). The resulting set will be one record if person's location and site are not empty",
            "whereClause": "location=:location and siteid=:locationsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONUSERCUST",
            "target": "LOCATIONUSERCUST",
            "remarks": "Relationship to the locationusercust table from person where locationusercust.personid=person.personid",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPERSONLONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "long description record for person",
            "whereClause": "ldkey=:personuid and ldownertable = 'PERSON'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTUPAPPLICATION",
            "target": "MAXAPPS",
            "remarks": "Person startup application relationship.",
            "whereClause": "app=:dfltapp",
            "cardinality": null
        },
        {
            "name": "USER",
            "target": "MAXUSER",
            "remarks": "Relationship to the maxuser table, used to find the user for this person. (user.personid = person.personid). The resulting set will contain zero or one object.",
            "whereClause": "personid=:personid and status not in (select value from synonymdomain where domainid='MAXUSERSTATUS' and maxvalue='DELETED')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MODAVAIL",
            "target": "MODAVAIL",
            "remarks": "Relationship from person to modavail.",
            "whereClause": "personid = :personid",
            "cardinality": null
        },
        {
            "name": "DEVICECLASSDESC",
            "target": "NUMERICDOMAIN",
            "remarks": "Relationship to the PERSON to Numericdomain to get the description of the Device Class",
            "whereClause": "domainid='MFMAILDEVICECLASS' and value=:deviceclass",
            "cardinality": null
        },
        {
            "name": "DMPERSONORG",
            "target": "ORGANIZATION",
            "remarks": "active organization for person",
            "whereClause": "orgid=:locationorg and active = :yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFLOCATIONORG",
            "target": "ORGANIZATION",
            "remarks": "Relationship to the organization table.  Used to find the organization whose org id is this location org.  (organization.orgid=person.locationorg0.  The resulting set will return zero or one object.",
            "whereClause": "orgid=:locationorg",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSCHANGESTATUS",
            "target": "PERSCHANGESTATUS",
            "remarks": "Relationship to the non-persisten PersonChangeStatus table.  (No where clause).  The resulting set will contain zero objects.  Note:  This relationship is used only for the Change Status action page to change the status of a  given purchase order.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSCOMMODITY",
            "target": "PERSCOMMODITY",
            "remarks": "Returns all PersCommodity rows associated with a Person.  Will return zero, one, or many rows.",
            "whereClause": "personid = :personid",
            "cardinality": null
        },
        {
            "name": "COMM_PERSGRP",
            "target": "PERSCOMMODITY",
            "remarks": "Selects Commodity groups associated with the current person; returns none, one, or more records",
            "whereClause": "personid = :personid and parent is null",
            "cardinality": null
        },
        {
            "name": "ASSUPERVISOR",
            "target": "PERSON",
            "remarks": "Relationship to the person table. Used to find all the persons whose supervisor is this person. (person.supervisor=person.personid). The resulting set will contain zero or more objects.",
            "whereClause": "supervisor=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "target": "PERSON",
            "remarks": "Relationship to the person records, used to find the children records for a person.",
            "whereClause": "supervisor=:personid",
            "cardinality": null
        },
        {
            "name": "DELEGATE",
            "target": "PERSON",
            "remarks": "Relationship to the person table, used to find the person record who is the delegate of this person. (person.personid=person.delegate). The resulting set will contain one object if delegate is not empty.",
            "whereClause": "personid=:delegate",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENT",
            "target": "PERSON",
            "remarks": "Relationship to the Person table, used to find the supervisor for a given person",
            "whereClause": "personid=:supervisor",
            "cardinality": null
        },
        {
            "name": "ASDELEGATE",
            "target": "PERSON",
            "remarks": "Relationship to the person table. Used to find all the persons whose delegate is this person. (person.delegate=person.personid). The resulting set will contain zero or more objects.",
            "whereClause": "delegate=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SUPERVISOR",
            "target": "PERSON",
            "remarks": "Relationship to the person table, used to find the person record who is the supervisor of this person. (person.personid=person.delegate). The resulting set will contain one object if supervisor is not empty.",
            "whereClause": "personid=:supervisor",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONAVAIL",
            "target": "PERSONAVAIL",
            "remarks": "Relationship to the non-persistent personavail table",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONCAL",
            "target": "PERSONCAL",
            "remarks": "Relationship to the personcal table. Used to find the personcal records of this person. (personcal.personid=person.personid). The resulting set will be zero or more records.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON_HOMECAL",
            "target": "PERSONCAL",
            "remarks": "Relationship to the personcal table. Used to find the personcal records of this person for the locationorg associated with the persons home location. The resulting set will be zero or more records.",
            "whereClause": "personid=:personid and orgid=:locationorg",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYPERSONCAL",
            "target": "PERSONCAL",
            "remarks": "Relationship to the personcal table where the personids match and isprimary is true",
            "whereClause": "personid=:personid and isprimary=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONSTATUS",
            "target": "PERSONSTATUS",
            "remarks": "Relationship to the personstatus table. Used to find the personstatus records of this person. (personstatus.personid=person.personid). The resulting set will be zero or more records.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PHONE",
            "target": "PHONE",
            "remarks": "Relationship to the phone table. Used to find all the phone records of this person. (phone.personid=person.personid). The resulting set will be zero or more records.",
            "whereClause": "personid=:personid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "PRIMARYPHONE",
            "target": "PHONE",
            "remarks": "Relationship to the phone table where personid=personid and isprimary=Y.  (person.personid=phone.personid AND phone.isprimary=Y.)  This will return 1 object.",
            "whereClause": "personid=:personid and  isprimary=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFLOCATIONSITE",
            "target": "SITE",
            "remarks": "Relationship to the site table.  Used to find the site whose siteid is this locationsite. (site.siteid=person.locationsite).  The resulting set will return zero or one object.",
            "whereClause": "siteid=:locationsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SMS",
            "target": "SMS",
            "remarks": "Relationship from the person table to the sms table where person=person.  This will return 0 or more records.",
            "whereClause": "personid=:personid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship from Person to Synonymdomain to get the description of the status.",
            "whereClause": "domainid='PERSONSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TIMEZONE",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship from Person to Synonymdomain to get the description of locale.",
            "whereClause": "domainid='TIMEZONE' and value=:timezone",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTEMPLATE",
            "target": "TKTEMPLATE",
            "remarks": "Relationship to the tktemplate table.  Returns all tktemplates owned by this person.  Returns 0 or more objects.",
            "whereClause": "owner=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Location application, displays all contracts that cover this location and its parents.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the LOCATIONS to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "WORKPERIOD",
            "target": "WORKPERIOD",
            "remarks": "Relationship from person to workperiod.",
            "whereClause": "orgid=(select orgid from personcal where personid=:personid and isprimary=1) and calnum=(select calnum from personcal where personid=:personid and isprimary=1) and shiftnum=(select shiftnum from personcal where personid=:personid and isprimary=1)",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DFLTPERSON",
            "source": "ASSETUSERCUSDFLT",
            "remarks": "Relationship to the person records, used to find the person record.",
            "whereClause": "personid=:dfltperson",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "ASSETUSERCUST",
            "remarks": "Relationship to the Person table, used to find all people for a given personid. (assetusercust.personid = person.personid). This resulting set will contain zero or one object.",
            "whereClause": "personid = :personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OWNER",
            "source": "AUTOSCRIPT",
            "remarks": "Relationship to the person table, used to find the person who owns the script. This resulting set will contain zero or one object.",
            "whereClause": "personid = :owner",
            "cardinality": null
        },
        {
            "name": "PERSON",
            "source": "AUTOSCRIPT",
            "remarks": "Relationship to the person table, used to find the person who created the script. This resulting set will contain zero or one object.",
            "whereClause": "personid = :createdby",
            "cardinality": null
        },
        {
            "name": "BILLTOPERSON",
            "source": "BILLTOSHIPTO",
            "remarks": "Relationship to the person table, used to find the person record for the given billtocontact.(person.personid = billtoshipto.billtocontact). The resulting set will contain zero or one object.",
            "whereClause": "personid=:billtocontact",
            "cardinality": null
        },
        {
            "name": "SHIPTOPERSON",
            "source": "BILLTOSHIPTO",
            "remarks": "Relationship to the person table, used to find the person record for the given shiptocontact.(person.personid = billtoshipto.shiptocontact). The resulting set will contain zero or one object.",
            "whereClause": "personid=:shiptocontact",
            "cardinality": null
        },
        {
            "name": "PERSON",
            "source": "CHANGEPASSWORDS",
            "remarks": "ChangePasswords to Person",
            "whereClause": "personid = (select personid from maxuser where userid = :userid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "COMMITPERSON",
            "remarks": "Get person for the commitperson.",
            "whereClause": "personid=:personid",
            "cardinality": null
        },
        {
            "name": "CONTACTPERSON",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "personid = :owner",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLTSENDTO_PERSON",
            "source": "COMMTMPLTSENDTO",
            "remarks": "Relationship to the PERSON table, used to get the person record for a recipient.",
            "whereClause": "personid=:sendtovalue",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BILLTOATTN",
            "source": "CONTRACTAUTH",
            "remarks": "Relationship to the Labor table, used to find all Labor records for a given ContractAuth. (contractauth.billtoattn=labor.laborcode). The resulting set will contain one record.",
            "whereClause": "personid=:billtoattn",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "EMAIL",
            "remarks": "Relationship from EMAIL to the PERSON table.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "ESIGLOGIN",
            "remarks": "Person Information",
            "whereClause": "personid = (select personid from maxuser where userid=:userid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "GROUPUSER",
            "remarks": "GroupUser to Person, will be one record",
            "whereClause": "personid in (select personid from maxuser where userid = :userid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "LABOR",
            "remarks": "Relationship to the Person table.  Used to find the Person specidied by the personid attribute.  (Person.personid = Labor.personid).  The resulting set wil contain zero or 1 object",
            "whereClause": "personid=:personid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "PERSON",
            "source": "LABORAUTH",
            "remarks": "LaborAuth to Person, will be one record",
            "whereClause": "personid in (select personid from labor where orgid = :orgid and laborcode = :laborcode)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "LABTRANS",
            "remarks": "Relationship to find person for the labtrans.labor.laborcode",
            "whereClause": "personid in (select personid from labor where laborcode = :laborcode)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "LOCATIONS",
            "remarks": "Relationship to the PERSON table, used to find the PERSON for the LOCATION. The resulting set will contain one object.",
            "whereClause": "location=:location and locationsite=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONBILLTO",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Person table, used to find the bill to contact person for this storeroom (person.personid=locations.billtolaborcode) This relationship will find zero or one object.",
            "whereClause": "personid=:billtolaborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONSHIPTO",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Person table, used to find the ship to contact person for this storeroom (person.personid=locations.billtolaborcode) This relationship will find zero or one object.",
            "whereClause": "personid=:shiptolaborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOWNER",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Person table, used to find the invowner person for this storeroom. This relationship will find zero or one object.",
            "whereClause": "personid=:invowner",
            "cardinality": null
        },
        {
            "name": "PERSON",
            "source": "LOCATIONUSERCUST",
            "remarks": "Relationship to the Person table, used to find all people for a given personid. (locationusercust.personid = person.personid). This resulting set will contain zero or one object.",
            "whereClause": "personid = :personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "MAXLICENSE",
            "remarks": "Relationship from MAXLICENSE to PERSON table.",
            "whereClause": "personid=:responsibleperson",
            "cardinality": null
        },
        {
            "name": "PERSON",
            "source": "MAXLICPURCHDET",
            "remarks": "Relationship from MAXLICPURCHDET to PERSON table.",
            "whereClause": "personid=:purchasedby",
            "cardinality": null
        },
        {
            "name": "PERSON",
            "source": "MAXLICUSAGE",
            "remarks": "Relationship from MAXLICUSAGE to MAXUSER table.",
            "whereClause": "personid=(select personid from maxuser where userid=:userid)",
            "cardinality": null
        },
        {
            "name": "SUPERVISOR",
            "source": "MAXLICUSAGE",
            "remarks": "Relationship from MAXLICUSAGE to EMAIL table.",
            "whereClause": "personid=(select supervisor from person a, maxuser b where b.userid=:userid and b.personid=a.personid)",
            "cardinality": null
        },
        {
            "name": "PERSON",
            "source": "MAXROLE",
            "remarks": "Relationship to get person record for a role.",
            "whereClause": "personid=:value",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "MAXUSER",
            "remarks": "Person for a specified user",
            "whereClause": "personid = :personid",
            "cardinality": "SINGLE"
        },
        {
            "name": "NEWPERSON",
            "source": "MAXUSER",
            "remarks": "MaxUser to Person for new person ID",
            "whereClause": "personid = :newpersonid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "NAMEDUSERS",
            "remarks": "Relationship to the Person table, used to find the person record corresponding to the personid.(namedusers.personid=person.personid). The resulting set will contain one object.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VALIDPERSON",
            "source": "NAMEDUSERS",
            "remarks": "Relationship to the Person table, used to find all person records which are in a status of ACTIVE. The resulting set will contain zero or more objects.",
            "whereClause": "status in (select value from synonymdomain where maxvalue='ACTIVE' and domainid='PERSONSTATUS')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "NOTIFICATIONWF",
            "remarks": "This relationship gets the person details for the person to notify. (person = :personid). One member set.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "PERSCHANGESTATUS",
            "remarks": "Relationship to the person table.  (No where clause).  The resulting set will contain zero objects.  Note: This relationship is used only for the Change Status action page.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSUPERVISOR",
            "source": "PERSON",
            "remarks": "Relationship to the person table. Used to find all the persons whose supervisor is this person. (person.supervisor=person.personid). The resulting set will contain zero or more objects.",
            "whereClause": "supervisor=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "source": "PERSON",
            "remarks": "Relationship to the person records, used to find the children records for a person.",
            "whereClause": "supervisor=:personid",
            "cardinality": null
        },
        {
            "name": "DELEGATE",
            "source": "PERSON",
            "remarks": "Relationship to the person table, used to find the person record who is the delegate of this person. (person.personid=person.delegate). The resulting set will contain one object if delegate is not empty.",
            "whereClause": "personid=:delegate",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENT",
            "source": "PERSON",
            "remarks": "Relationship to the Person table, used to find the supervisor for a given person",
            "whereClause": "personid=:supervisor",
            "cardinality": null
        },
        {
            "name": "ASDELEGATE",
            "source": "PERSON",
            "remarks": "Relationship to the person table. Used to find all the persons whose delegate is this person. (person.delegate=person.personid). The resulting set will contain zero or more objects.",
            "whereClause": "delegate=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SUPERVISOR",
            "source": "PERSON",
            "remarks": "Relationship to the person table, used to find the person record who is the supervisor of this person. (person.personid=person.delegate). The resulting set will contain one object if supervisor is not empty.",
            "whereClause": "personid=:supervisor",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "PERSONAVAIL",
            "remarks": "Relationship to the person table on personid.",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLPERSONGROUPTEAMDEFAULTS",
            "source": "PERSONGROUP",
            "remarks": "select person info for group default",
            "whereClause": "personid in (select respparty from persongroupteam where (persongroup=:persongroup and (groupdefault = :yes)))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLPEOPLEINPERSONGROUP",
            "source": "PERSONGROUP",
            "remarks": "Relationship to person to return all people in a group",
            "whereClause": "personid in (select respparty from persongroupteam where persongroup=:persongroup)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYPERSONGROUPPERSONS",
            "source": "PERSONGROUP",
            "remarks": "REMARKS select person info for all primary persons in the persongroup",
            "whereClause": "personid in (select respparty from persongroupteam where persongroup=:persongroup and resppartygroup=respparty)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RESPPARTY_PERSONS",
            "source": "PERSONGROUPTEAM",
            "remarks": "Allow persongroupteam to retrieve persons related by respparty",
            "whereClause": "personid=:respparty",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RESPPARTYGROUP_PERSONS",
            "source": "PERSONGROUPTEAM",
            "remarks": "Allow persongroupteam to retrieve persons related by resppartygroup",
            "whereClause": "personid=:resppartygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTOPERSON",
            "source": "PO",
            "remarks": "Relationship to the Person  table, used to find all person records for a given purchase order . (po.shiptoattn = person.personid). The resulting set will contain zero or more objects.",
            "whereClause": "personid=:shiptoattn",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BILLTOPERSON",
            "source": "PO",
            "remarks": "Relationship to the Person  table, used to find all person records for a given purchase order . (po.billtoattn = person.personid). The resulting set will contain zero or more objects.",
            "whereClause": "personid=:billtoattn",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "POLINE",
            "remarks": "Relationship to the Person table, used to find all person records for a given PO Line. (poline.requestedby = person.personid). The resulting set will contain zero or one object.",
            "whereClause": "personid=:requestedby",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BILLTOPERSON",
            "source": "PR",
            "remarks": "Relationship to the Person  table, used to find all person records for a given purchase requisition . (pr.billtoattn = person.personid). The resulting set will contain zero or more objects.",
            "whereClause": "personid=:billtoattn",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTOPERSON",
            "source": "PR",
            "remarks": "Relationship to the Person  table, used to find all person records for a given purchase requisition . (pr.shiptoattn = person.personid). The resulting set will contain zero or more objects.",
            "whereClause": "personid=:shiptoattn",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "PRLINE",
            "remarks": "Relationship to the Person table, used to find all person records for a given PR Line. (prline.requestedby = person.personid). The resulting set will contain zero or one object.",
            "whereClause": "personid=:requestedby",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSIGNEE",
            "source": "REASSIGNWF",
            "remarks": "This relationship gets the person details for the assignment assignee. (person = :assignee). One member set.",
            "whereClause": "personid=:assignee",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPLYTOPERSON",
            "source": "RFQ",
            "remarks": "Relationship to the Person table, used to find all person records for a given request for quotation. (rfq.replytoattn = person.personid). The resulting set will contain zero or more objects.",
            "whereClause": "personid=:replytoattn",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTOPERSON",
            "source": "RFQ",
            "remarks": "Relationship to the Person table, used to find all person records for a given request for quotation. (rfq.shiptoattn = person.personid). The resulting set will contain zero or more objects.",
            "whereClause": "personid=:shiptoattn",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "SITE",
            "remarks": "Relationship to the Person table, used to find the person record for the site contact. (person.personid = site.contact). This relationship will find zero or one object.",
            "whereClause": "personid = :contact",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONBILLTO",
            "source": "SITE",
            "remarks": "Relationship to the Person table, used to find the bill to contact person for this site (person.personid=site.billtolaborcode) This relationship will find zero or one object.",
            "whereClause": "personid=:billtolaborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONSHIPTO",
            "source": "SITE",
            "remarks": "Relationship to the Person table, used to find the ship to contact person for this site (person.personid=site.shiptolaborcode) This relationship will find zero or one object.",
            "whereClause": "personid=:shiptolaborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "SKDPROJECT",
            "remarks": "Get person for the project.",
            "whereClause": "personid not in (select personid from commitperson where projectname=:name)",
            "cardinality": null
        },
        {
            "name": "CUSTVENDORCONTACT",
            "source": "SLA",
            "remarks": "Relationship for customer/vendor contact",
            "whereClause": "personid = :custvendorcontact",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLACONTACT",
            "source": "SLA",
            "remarks": "Relationship for slacontact",
            "whereClause": "personid = :slacontact",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OWNERPERSON",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "personid=:owner",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "personid=:reportedby",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AFFECTEDPERSON",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "personid=:affectedperson",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSIGNEE",
            "source": "WFASSIGNMENT",
            "remarks": "Person who is assigned. (personid = :assigncode) Returns a single record for non-template assignments.",
            "whereClause": "personid = :assigncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORIGINATOR",
            "source": "WFINSTANCE",
            "remarks": "Relationship to the PersonID record of the workflow originator. Returns a single record.",
            "whereClause": "personid = :originator",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ONBEHALFOF",
            "source": "WORKORDER",
            "remarks": "Relationship to the person table, used to find the person  for onbehalfof. This resulting set will contain zero or one object.",
            "whereClause": "personid=:onbehalfof",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OWNERPERSON",
            "source": "WORKORDER",
            "remarks": "Relationship to the person records.",
            "whereClause": "personid=:owner",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPORTEDBY",
            "source": "WORKORDER",
            "remarks": "Relationship to the person table, used to find the person  for reportedby. This resulting set will contain zero or one object.",
            "whereClause": "personid=:reportedby",
            "cardinality": "UNDEFINED"
        }
    ]
}