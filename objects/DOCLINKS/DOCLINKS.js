mos = {
    "objectName": "DOCLINKS",
    "className": "psdi.app.doclink.DoclinksSet",
    "description": "Register of items linked to documents",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DOCLINKSID",
    "primaryKeyColumns": [
        "OWNERTABLE",
        "OWNERID",
        "DOCINFOID",
        "DOCTYPE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DOCINFO",
            "targetObject": "DOCLINKS",
            "parentKeys": "DOCINFOID",
            "targetKeys": "DOCINFOID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Document Information",
            "longDescription": null
        },
        {
            "objectName": "DOCTYPES",
            "targetObject": "DOCLINKS",
            "parentKeys": "DOCTYPE",
            "targetKeys": "DOCTYPE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Document Type",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DOCLINKS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object the document is linked.",
            "longDescription": "The OwnerID column is the unique ID of the specific record to which the documents are linked."
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
        }
    ],
    "columns": [
        {
            "attributeName": "DOCUMENT",
            "required": false,
            "persistent": true,
            "title": "Document",
            "remarks": "Value assigned by a user that identifies the document.",
            "sameAsAttribute": "DOCUMENT",
            "sameAsObject": "DOCINFO"
        },
        {
            "attributeName": "OWNERTABLE",
            "required": true,
            "persistent": true,
            "title": "Owner Table",
            "remarks": "Table name of the owner record",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OWNERID",
            "required": true,
            "persistent": true,
            "title": "Owner ID",
            "remarks": "Unique id of owner record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFERENCE",
            "required": false,
            "persistent": true,
            "title": "Reference",
            "remarks": "Reference point on document",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOCTYPE",
            "required": true,
            "persistent": true,
            "title": "Document Folder",
            "remarks": "Value assigned by MAXIMO identifying the type of document.",
            "sameAsAttribute": "DOCTYPE",
            "sameAsObject": "DOCTYPES"
        },
        {
            "attributeName": "DOCVERSION",
            "required": false,
            "persistent": true,
            "title": "Version of Document",
            "remarks": "The version of the DMS document linked to this document attachment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GETLATESTVERSION",
            "required": true,
            "persistent": true,
            "title": "Latest Version",
            "remarks": "Y indicates that the latest version should be retrieved. N indicates that the specific version stored in DocVersion should be retrieved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEBY",
            "required": false,
            "persistent": true,
            "title": "Created By",
            "remarks": "MAXIMO user who initially inserted this document.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CREATEDATE",
            "required": false,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Date someone originally inserted this document.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "MAXIMO username of last update",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date stamp of last update",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRINTTHRULINK",
            "required": true,
            "persistent": true,
            "title": "Batch Print",
            "remarks": "Check box indicating if the document is printed in the batch printing operation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COPYLINKTOWO",
            "required": true,
            "persistent": true,
            "title": "Copy Link to be WO",
            "remarks": "Should this link automatically be copied to become a WO link? (only a few apps can copy their links to WO)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOW",
            "required": true,
            "persistent": false,
            "title": "Show",
            "remarks": "Check box indicating if the document should be displayed on the Register Docs and Add/Modify Doclinks screens.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPLOAD",
            "required": true,
            "persistent": false,
            "title": "Upload",
            "remarks": "Check box indicating if the document should be uploaded to the network.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URLPARAM5",
            "required": false,
            "persistent": false,
            "title": "URL Parameter 5",
            "remarks": "URLPARAM5",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URLPARAM4",
            "required": false,
            "persistent": false,
            "title": "URL Parameter 4",
            "remarks": "URLPARAM4",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URLPARAM3",
            "required": false,
            "persistent": false,
            "title": "URL Parameter 3",
            "remarks": "URLPARAM3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URLPARAM2",
            "required": false,
            "persistent": false,
            "title": "URL Parameter 2",
            "remarks": "URLPARAM2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URLPARAM1",
            "required": false,
            "persistent": false,
            "title": "URL Parameter 1",
            "remarks": "URLPARAM1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DMSNAME",
            "required": false,
            "persistent": false,
            "title": "DMS",
            "remarks": "DMSNAME",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": false,
            "title": "Application",
            "remarks": "APP",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDINFO",
            "required": true,
            "persistent": false,
            "title": "Add Document Information",
            "remarks": "Indicates whether a docinfo record should be automatically created witht his doclinks",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WEBURL",
            "required": false,
            "persistent": false,
            "title": "URL",
            "remarks": "URL of the document",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWURLNAME",
            "required": false,
            "persistent": false,
            "title": "URL / File Name",
            "remarks": "NEWURLNAME",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URLTYPE",
            "required": false,
            "persistent": false,
            "title": "URL Type",
            "remarks": "URLTYPE",
            "sameAsAttribute": "URLTYPE",
            "sameAsObject": "DOCINFO"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Value assigned by a user that describes the document.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URLNAME",
            "required": false,
            "persistent": false,
            "title": "URL / File Name",
            "remarks": "Name of the Web address. The value for the name must be unique.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEYCOLUMN",
            "required": false,
            "persistent": false,
            "title": "Key Column",
            "remarks": "Column name of owner record's uniqie id.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "DOCLINKSID",
            "required": true,
            "persistent": true,
            "title": "DOCLINKSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOCINFOID",
            "required": true,
            "persistent": true,
            "title": "Docinfo ID",
            "remarks": "Docinfo UID to which this doclink points",
            "sameAsAttribute": "DOCINFOID",
            "sameAsObject": "DOCINFO"
        },
        {
            "attributeName": "DOCUMENTDATA",
            "required": false,
            "persistent": false,
            "title": "Attached Document Data",
            "remarks": "Attached Document Data",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMSAPISETTING",
            "target": "DMSAPISETTING",
            "remarks": "Relationship to DmsApiSetting table. via non-persistent attribute (dmsapisetting.dmsname = doclinks.dmsname). The result set will contain one object.",
            "whereClause": "dmsname = :dmsname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCINFO",
            "target": "DOCINFO",
            "remarks": "Relationship to Docinfo table. (docinfo.document = doclinks.document). The result set will contain one object.",
            "whereClause": "docinfoid=:docinfoid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WHEREUSED",
            "target": "DOCLINKS",
            "remarks": "Used to find all doclinks record where docinfoid is used",
            "whereClause": "docinfoid = :docinfoid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCTYPES",
            "target": "DOCTYPES",
            "remarks": "Relationship to Doctypes table. (doctypes.doctype = doclinks.doctype). The result set will contain one object.",
            "whereClause": "doctype = :doctype",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DOCLINKS",
            "source": "AMCREWT",
            "remarks": "Relationship to the DOCLINKS table, used to find all document records for the crew template.",
            "whereClause": "ownertable='AMCREWT' and ownerid=:amcrewtid",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "source": "APPDOCTYPE",
            "remarks": "Relationship to Doclinks table. (doclinks.doctype = appdoctype.doctype). The result set will contain zero or more objects.",
            "whereClause": "doctype = :doctype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "ASSET",
            "remarks": "Relationship to the Doclinks table, used to find all document records for a given asset and related records location, item and tool. (doclinks.ownertable = 'ASSET' and doclinks.ownerid = 'ASSETUID'. This resulting set will contain zero or more objects.",
            "whereClause": "(ownertable = 'ASSET' and ownerid = :assetuid) or (ownertable='LOCATIONS' and ownerid=(select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='ITEM' and ownerid=(select itemid from item where itemnum=:itemnum and itemsetid=:itemsetid and itemtype in (select value from synonymdomain where maxvalue ='ITEM' and domainid='ITEMTYPE'))) or (ownertable='TOOLITEM' and ownerid=(select itemid from item where itemnum=:itemnum and itemsetid=:itemsetid and itemtype in (select value from synonymdomain where maxvalue ='TOOL' and domainid='ITEMTYPE')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS_ASSETID",
            "source": "ASSET",
            "remarks": "Relationship to the Doclinks table, used to find all document records for a given asset and related records location, item and tool. This relationship includes asset-related doclinks using assetid (global) instead of assetuid (site-specific).(doclinks.ownertable = 'ASSET' and doclinks.ownerid = 'ASSETID'. This resulting set will contain zero or more objects.",
            "whereClause": "(ownertable = 'ASSET' and ownerid = :assetid) or (ownertable='LOCATIONS' and ownerid=(select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='ITEM' and ownerid=(select itemid from item where itemnum=:itemnum and itemsetid=:itemsetid and itemtype in (select value from synonymdomain where maxvalue ='ITEM' and domainid='ITEMTYPE'))) or (ownertable='TOOLITEM' and ownerid=(select itemid from item where itemnum=:itemnum and itemsetid=:itemsetid and itemtype in (select value from synonymdomain where maxvalue ='TOOL' and domainid='ITEMTYPE')))",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "source": "CALENDAR",
            "remarks": "Relationship to the Doclink table, used to find all document records for a given calendar) This will return 0 or more objects",
            "whereClause": "ownertable = 'CALENDAR' and ownerid = :calendarid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "CI",
            "remarks": "Relationship to the CI's DocLinks records, used to find documents for a given CI. (doclinks.keytable = 'CI' and doclinks.keycolumn = 'CINUM' and ci.cinum= doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "ownertable = 'CI' and ownerid = :ciid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "COLLECTION",
            "remarks": "Relationship to the Collection's DocLinks records, used to find documents for a given Collection. (doclinks.keytable = 'COLLECTION' and doclinks.keycolumn = 'COLLECTION' and collection.collectionnum= doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "ownertable = 'COLLECTION' and ownerid = :collectionid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "COMMLOG",
            "remarks": " Relationship to the Doclink table, used to find all document records for a given COMMLOG.",
            "whereClause": "ownertable = 'COMMLOG' and ownerid = :commloguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRCOMMDOC",
            "source": "COMMLOG",
            "remarks": "doclinks for commlog",
            "whereClause": "ownertable = 'COMMLOG' and ownerid = :commloguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "COMMLOGDOCS",
            "remarks": "Relationship to get the original doclink record for a commlog attachment.",
            "whereClause": "docinfoid=:docinfoid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMDOCLINKS",
            "source": "COMMTEMPLATE",
            "remarks": "Relationship to get an empty doclinks set.",
            "whereClause": "1=0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "COMMTEMPLATE",
            "remarks": " Relationship to the Doclink table, used to find all document records for a given commtemplate.",
            "whereClause": "ownertable = 'COMMTEMPLATE' and ownerid = :commtemplateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "COMPANIES",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given company.  (doclinks.keytable = 'COMPANIES' and doclinks.keycolumn = 'COMPANY' and doclinks.keyvalue = companies.company$DOCLINKS.KEYVALUE and doclinks.orgid = companies.orgid). The resulting set will contain zero or more objects. Note: The Companies.Company field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "ownertable = 'COMPANIES' and ownerid = :companiesid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "CRAFT",
            "remarks": "Relationship to the Doclink table, used to find all document records for a given craft) This will return 0 or more objects",
            "whereClause": "ownertable = 'CRAFT' and ownerid = :craftid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "DOCINFO",
            "remarks": "Relationship to Doclinks table. (doclinks.document = docinfo.document). The result set will contain zero or more objects.",
            "whereClause": "docinfoid = :docinfoid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WHEREUSED",
            "source": "DOCLINKS",
            "remarks": "Used to find all doclinks record where docinfoid is used",
            "whereClause": "docinfoid = :docinfoid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "DOCTYPES",
            "remarks": "Relationship to Doclinks (doclinks.doctype = doctypes.doctype).\tThe result set will contain zero or more objects.",
            "whereClause": "doctype = :doctype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "FAILURECODE",
            "remarks": "Relationship to the doclinks table, used to find all  documents for a given failurecode. (failurecode.failurecode = doclinks.keyvalue and doclinks.keycolumn='FAILURECODE' and doclinks.keytable='FAILURECODE'). This relationship will find zero or more objects.",
            "whereClause": "ownertable = 'FAILURECODE' and ownerid = :failurecodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "FAILURELIST",
            "remarks": "Relationship to the doclinks table, used to find all  documents for a given failurecode. (failurelist.failurelist = doclinks.keyvalue and doclinks.keycolumn='FAILURELIST' and doclinks.keytable='FAILURELIST'). This relationship will find zero or more objects.",
            "whereClause": "ownertable = 'FAILURELIST' and ownerid = :failurelist",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "FEATURES",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given Feature. The resulting set will contain zero or more objects.",
            "whereClause": "ownertable = 'FEATURES' and ownerid = :featuresid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "HAZARD",
            "remarks": "Relationship to Doclinks table. (doclinks.keytable = 'HAZARD' and doclinks.keycolumn = 'HAZARDID' and doclinks.keyvalue = hazard.hazardid). Used to find associated linked documents. The result set will contain zero or more objects.",
            "whereClause": "(ownertable = 'HAZARD' and ownerid = :hazarduid)  or (ownertable  ='PRECAUTION' and ownerid IN (select precaution.precautionuid from  precaution, hazardprec where precaution.precautionid = hazardprec.precautionid and hazardprec.hazardid = :hazardid and hazardprec.orgid = :orgid and precaution.orgid = hazardprec.orgid and precaution.siteid = hazardprec.siteid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "INBOUNDCOMM",
            "remarks": "doclinks for inboundcomm",
            "whereClause": "ownertable = 'INBOUNDCOMM' and ownerid = :inboundcommid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "INCIDENT",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given ticket.  (doclinks.keytable = 'INCIDENT' and doclinks.keycolumn = 'TICKETID' and doclinks.keyvalue = incident.ticketid$DOCLINKS.KEYVALUE and doclinks.orgid = incident.orgid). The resulting set will contain zero or more objects. Note: The INCIDENT.TICKETID field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable = 'INCIDENT' and ownerid = :ticketuid) or (  ownertable='SR' and ownerid in (select ticketuid from sr where ticketid=:origrecordid and class=:origrecordclass) ) or\t(  ownertable='PROBLEM' and ownerid in (select ticketuid from problem where ticketid=:origrecordid and class=:origrecordclass )) or (  ownertable='WOCHANGE' and ownerid in (select workorderid from wochange where wonum=:origrecordid and woclass=:origrecordclass)  ) or (  ownertable='WORELEASE' and ownerid in (select workorderid from worelease where wonum=:origrecordid and woclass=:origrecordclass) ) or (ownertable='SOLUTION' and ownerid in (select solutionid from solution where solution=:solution)) or (ownertable='ASSET' and ownerid in (select assetuid from asset where assetnum=:assetnum)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location)) or (ownertable='WOACTIVITY' and ownerid in (select workorderid from woactivity where origrecordid=:ticketid and origrecordclass=:class)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum in (select jpnum from woactivity where origrecordid=:ticketid and origrecordclass=:class))) or (ownertable='COMMLOG' and ownerid in (select commloguid from commlog where ownertable='INCIDENT' and ownerid=:ticketuid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS_ASSETID",
            "source": "INCIDENT",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given ticket. This relationship includes asset-related doclinks using assetid (global) instead of assetuid (site-specific)(doclinks.keytable = 'INCIDENT' and doclinks.keycolumn = 'TICKETID' and doclinks.keyvalue = incident.ticketid$DOCLINKS.KEYVALUE and doclinks.orgid = incident.orgid). The resulting set will contain zero or more objects. Note: The INCIDENT.TICKETID field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable = 'INCIDENT' and ownerid = :ticketuid) or (  ownertable='SR' and ownerid in (select ticketuid from sr where ticketid=:origrecordid and class=:origrecordclass) ) or (  ownertable='PROBLEM' and ownerid in (select ticketuid from problem where ticketid=:origrecordid and class=:origrecordclass )) or (  ownertable='WOCHANGE' and ownerid in (select workorderid from wochange where wonum=:origrecordid and woclass=:origrecordclass)  ) or (  ownertable='WORELEASE' and ownerid in (select workorderid from worelease where wonum=:origrecordid and woclass=:origrecordclass) ) or (ownertable='SOLUTION' and ownerid in (select solutionid from solution where solution=:solution)) or (ownertable='ASSET' and ownerid in (select assetid from asset where assetnum=:assetnum)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location)) or (ownertable='WOACTIVITY' and ownerid in (select workorderid from woactivity where origrecordid=:ticketid and origrecordclass=:class)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum in (select jpnum from woactivity where origrecordid=:ticketid and origrecordclass=:class))) or (ownertable='COMMLOG' and ownerid in (select commloguid from commlog where ownertable='INCIDENT' and ownerid=:ticketuid))",
            "cardinality": null
        },
        {
            "name": "SOLDOCLINKS",
            "source": "INCIDENT",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given solution on a ticket.  (doclinks.keytable = 'INCIDENT' and doclinks.keycolumn = 'TICKETID' and doclinks.keyvalue = incident.ticketid$DOCLINKS.KEYVALUE and doclinks.orgid = incident.orgid). The resulting set will contain zero or more objects. Note: The INCIDENT.TICKETID field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "ownertable='SOLUTION' and ownerid in (select solutionid from solution where solution=:solution)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "INVENTORY",
            "remarks": "Relationship to the Doclinks table, used to find all documents for a given item. (doclinks.keytable = 'ITEM' and doclinks.keycolumn = 'ITEMNUM' and doclinks.keyvalue = item.itemnum and doclinks.itemsetid = inventory.itemsetid). The resulting set will contain zero or more objects. Note: The Item.ItemNum field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable = 'INVENTORY' and ownerid = :inventoryid ) or (ownertable='ITEM' and ownerid=(select itemid from item where  itemnum=:itemnum and itemsetid=:itemsetid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "INVOICE",
            "remarks": "Relationship to the DocLinks table, used to find all documents for a given invoice. (doclinks.keytable = 'INVOICE' and doclinks.keycolumn = 'INVOICENUM' and doclinks.keyvalue = :invoicenum$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects.",
            "whereClause": "(ownertable= 'INVOICE' and ownerid=:invoiceid) or (ownertable = 'COMPANIES' and ownerid in (select companiesid from companies where company=:vendor and orgid=:orgid)) or (ownertable = 'PO' and ownerid in (select poid from po where ponum=:ponum and status not in (select value from synonymdomain where domainid = 'POSTATUS' and maxvalue = 'REVISE') and siteid=:siteid)) or (ownertable = 'CONTRACT' and ownerid in (select contractid from contract where contractnum=:contractrefnum and revisionnum=:contractrefrev and orgid=:orgid)) or (ownertable = 'MRLINE' and ownerid in (select mrlineid from mrline where mrnum in (select mrnum from poline where ponum=:ponum and siteid=:siteid))) or (ownertable = 'PR' and ownerid in (select prid from pr where prnum in (select prnum from prline where ponum=:ponum and siteid=:siteid))) or (ownertable = 'RFQ' and ownerid in (select rfqid from rfq where rfqnum in (select rfqnum from rfqline where ponum=:ponum and siteid=:siteid)))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "INVUSE",
            "remarks": "Relationship to the InvUse''s DocLinks records, used to find documents for a given InvUse. The resulting set will contain zero or one record.",
            "whereClause": "ownertable='INVUSE' and ownerid=:invuseid",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "source": "ITEM",
            "remarks": "Relationship to the Doclinks table, used to find all documents for a given item. (doclinks.keytable = 'ITEM' and doclinks.keycolumn = 'ITEMNUM' and doclinks.keyvalue = item.itemnum and doclinks.itemsetid = item.itemsetid). The resulting set will contain zero or more objects. Note: The Item.ItemNum field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable='ITEM' and ownerid=:itemid) or (ownertable = 'HAZARD' and ownerid = (select hazarduid from hazard where exists( select 1 from itemorginfo where itemnum=:itemnum\tand itemsetid = :itemsetid and hazardid = hazard.hazardid and orgid = hazard.orgid  ) ) )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "JOBPLAN",
            "remarks": "Relationship to the Job Plan's DocLinks records, used to find all documents for a given Job Plan. (doclinks.keytable = 'JOBPLAN' and doclinks.keycolumn = 'JPNUM' and jobplan.jpnum = doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "(ownertable = 'JOBPLAN' and ownerid = :jobplanid) or   (ownertable='ASSET' and ownerid in (select asset.assetuid from asset, jpassetsplink where asset.assetnum = jpassetsplink.assetnum and asset.siteid = jpassetsplink.siteid and jpassetsplink.jobplanid=:jobplanid ))  or (ownertable='ITEM' and ownerid in (select item.itemid from item, jpassetsplink where item.itemnum=jpassetsplink.itemnum and item.itemsetid=jpassetsplink.itemsetid and jpassetsplink.jobplanid=:jobplanid)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jpassetsplink where locations.location = jpassetsplink.location and locations.siteid = jpassetsplink.siteid and jpassetsplink.jobplanid=:jobplanid )) or (ownertable='SAFETYPLAN' and ownerid in  (select safetyplan.safetyplanuid from safetyplan, jpassetsplink where safetyplan.safetyplanid = jpassetsplink.safetyplanid and safetyplan.siteid = jpassetsplink.siteid and jpassetsplink.jobplanid=:jobplanid)) or (ownertable='ITEM' and ownerid in (select item.itemid from item, jobmaterial where item.itemnum=jobmaterial.itemnum and item.itemsetid=jobmaterial.itemsetid and jobmaterial.jobplanid=:jobplanid)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jobmaterial where locations.location = jobmaterial.location and locations.siteid = jobmaterial.siteid and jobmaterial.jobplanid=:jobplanid )) or (ownertable='ITEM' and ownerid in (select item.itemid from item, jobservice where item.itemnum=jobservice.itemnum and item.itemsetid=jobservice.itemsetid and jobservice.jobplanid=:jobplanid)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jobservice where locations.location = jobservice.location and locations.siteid = jobservice.siteid and jobservice.jobplanid=:jobplanid )) or (ownertable='ITEM' and ownerid in (select item.itemid from item, jobtool where item.itemnum=jobtool.itemnum and item.itemsetid=jobtool.itemsetid and jobtool.jobplanid=:jobplanid)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jobtool where locations.location = jobtool.location and locations.siteid = jobtool.siteid and jobtool.jobplanid=:jobplanid ))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS_ASSETID",
            "source": "JOBPLAN",
            "remarks": "Relationship to the Job Plan's DocLinks records, used to find all documents for a given Job Plan. This relationship includes asset-related doclinks using assetid (global) instead of assetuid (site-specific). (doclinks.keytable = 'JOBPLAN' and doclinks.keycolumn = 'JPNUM' and jobplan.jpnum = doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "(ownertable = 'JOBPLAN' and ownerid = :jobplanid) or   (ownertable='ASSET' and ownerid in (select asset.assetid from asset, jpassetsplink where asset.assetnum = jpassetsplink.assetnum and asset.siteid = jpassetsplink.siteid and jpassetsplink.jobplanid=:jobplanid ))  or (ownertable='ITEM' and ownerid in (select item.itemid from item, jpassetsplink where item.itemnum=jpassetsplink.itemnum and item.itemsetid=jpassetsplink.itemsetid and jpassetsplink.jobplanid=:jobplanid)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jpassetsplink where locations.location = jpassetsplink.location and locations.siteid = jpassetsplink.siteid and jpassetsplink.jobplanid=:jobplanid )) or (ownertable='SAFETYPLAN' and ownerid in  (select safetyplan.safetyplanuid from safetyplan, jpassetsplink where safetyplan.safetyplanid = jpassetsplink.safetyplanid and safetyplan.siteid = jpassetsplink.siteid and jpassetsplink.jobplanid=:jobplanid)) or (ownertable='ITEM' and ownerid in (select item.itemid from item, jobmaterial where item.itemnum=jobmaterial.itemnum and item.itemsetid=jobmaterial.itemsetid and jobmaterial.jobplanid=:jobplanid)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jobmaterial where locations.location = jobmaterial.location and locations.siteid = jobmaterial.siteid and jobmaterial.jobplanid=:jobplanid )) or (ownertable='ITEM' and ownerid in (select item.itemid from item, jobservice where item.itemnum=jobservice.itemnum and item.itemsetid=jobservice.itemsetid and jobservice.jobplanid=:jobplanid)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jobservice where locations.location = jobservice.location and locations.siteid = jobservice.siteid and jobservice.jobplanid=:jobplanid )) or (ownertable='ITEM' and ownerid in (select item.itemid from item, jobtool where item.itemnum=jobtool.itemnum and item.itemsetid=jobtool.itemsetid and jobtool.jobplanid=:jobplanid)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jobtool where locations.location = jobtool.location and locations.siteid = jobtool.siteid and jobtool.jobplanid=:jobplanid ))",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "source": "JOBTASK",
            "remarks": "Relationship to the DocLinks records, used to find all documents for a given Job Task. (ownertable = 'JOBTASK' and ownerid in (select jobtaskid from jobtask where jobplanid = :jobplanid)). The resulting set will contain zero or more records.",
            "whereClause": "(ownertable = 'JOBTASK' and ownerid = :jobtaskid) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobtask where jobplanid=:jobplanid)) or (ownertable='ITEM' and ownerid in (select item.itemid from item, jobitem where item.itemnum=jobitem.itemnum and item.itemsetid=jobitem.itemsetid and jobitem.jobplanid=:jobplanid and jobitem.jptask=:jptask)) or (ownertable='LOCATIONS' and ownerid in (select locations.locationsid from locations, jobitem where locations.location = jobitem.location and locations.siteid = jobitem.siteid and jobitem.jobplanid=:jobplanid and jobitem.jptask=:jptask))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "LABOR",
            "remarks": "Relationship to the Doclinks table.Used to find out DocLinks for the Labor. (keytable = 'LABOR' and keycolumn = 'LABORCODE' and keyvalue = :laborcode$DOCLINKS.KEYVALUE). The resultset will contain zero, one or more than 1 object.",
            "whereClause": "(ownertable='LABOR' and ownerid=:laborid) or (ownertable='CRAFT' and ownerid=(select craftid from craft where craft=(select craft from laborcraftrate where laborcode = :laborcode and defaultcraft = :yes and orgid = :orgid) and orgid = :orgid)) or (ownertable='PERSON' and ownerid=(select personuid from person where personid=:personid))  ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "LABORVIEW",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given master contract. (doclinks.keytable = LABORVIEW and doclinks.keycolumn = CONTRACTNUM and doclinks.keyvalue = masterview.contractnum$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects. Note: The LABORVIEW.CONTRACTNUM field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable='LABORVIEW' and ownerid=:contractid) or (ownertable='LABOR' and ownerid in (select laborid from labor where laborid in (select laborid from labor where laborcode in (select laborcode from laborcraftrate where laborcode in (select laborcode from laborcraftrate where contractnum=:contractnum and orgid=:orgid))))) or (ownertable='CRAFT' and ownerid in (select craftid from craft where craftid in (select craftid from craft where craft in (select craft from craftrate where craft in (select craft from craftrate where contractnum=:contractnum and orgid=:orgid))))) or (ownertable='COMPANIES' and ownerid = (select companiesid from companies where company=:vendor and orgid=:orgid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given master contract. (doclinks.keytable = LEASEVIEW and doclinks.keycolumn = CONTRACTNUM and doclinks.keyvalue = masterview.contractnum$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects. Note: The LEASEVIEW.CONTRACTNUM field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable='LEASEVIEW' and ownerid=:contractid) or (ownertable='COMPANIES' and ownerid = (select companiesid from companies where company=:vendor and orgid=:orgid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "LOCATIONS",
            "remarks": "Relationship to the DocLinks table, used to find all documents for a given location. (doclinks.keytable = 'LOCATIONS' and doclinks.keycolumn = 'LOCATION' and locations.location = doclinks.keyvalue). The resulting set will contain zero or more objects.",
            "whereClause": "ownertable = 'LOCATIONS' and ownerid = :locationsid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "MASTERPM",
            "remarks": "Relationship to the MasterPM's DocLinks records, used to find documents for a given MasterPM. doclinks.keytable = 'MasterPM' and doclinks.keycolumn = 'MASTERPMNUM' and masterpm.masterpmnum = doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "ownertable = 'MASTERPM' and ownerid = :masterpmid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "MASTERVIEW",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given master contract. (doclinks.keytable = 'MASTERVIEW' and doclinks.keycolumn = 'CONTRACTNUM' and doclinks.keyvalue = masterview.contractnum$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects. Note: The MASTERVIEW.CONTRACTNUM field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable='MASTERVIEW' and ownerid=:contractid) or (ownertable='COMPANIES' and ownerid = (select companiesid from companies where company=:vendor and orgid=:orgid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the doclinks table, used to find all document records for a given receipt. The resulting set will contain zero or more objects.",
            "whereClause": "(ownertable='MATRECTRANS' and ownerid=:matrectransid) or (ownertable = 'COMPANIES' and ownerid in (select companiesid from companies where company in (select vendor from po where ponum=:ponum and orgid=:orgid))) or (ownertable = 'PO' and ownerid in (select poid from po where ponum = :ponum and siteid=:siteid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "MAXLICENSE",
            "remarks": "Relationship from MAXLICENSE to DOCLINKS table.",
            "whereClause": "ownertable = 'MAXLICENSE' and ownerid = :maxlicenseid",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the Doclink table, used to find all document records for a given measurepoint. This will return 0 or more objects",
            "whereClause": "(ownertable = 'MEASUREPOINT' and ownerid = :MEASUREPOINTID)  or (ownertable='ASSET' and ownerid in (select assetuid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or  (ownertable='PM' and ownerid in (select pmuid from pm where (pmnum=:llpmnum or pmnum=:ulpmnum) and siteid=:siteid)) or (ownertable='MASTERPM' and ownerid in (select masterpmid from masterpm where masterpmnum=:llpmnum or masterpmnum=:ulpmnum)) ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS_ASSETID",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the Doclink table, used to find all document records for a given measurepoint. This relationship includes asset-related doclinks using assetid (global) instead of assetuid (site-specific). This will return 0 or more objects.",
            "whereClause": "(ownertable = 'MEASUREPOINT' and ownerid = :MEASUREPOINTID)  or (ownertable='ASSET' and ownerid in (select assetid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or  (ownertable='PM' and ownerid in (select pmuid from pm where (pmnum=:llpmnum or pmnum=:ulpmnum) and siteid=:siteid)) or (ownertable='MASTERPM' and ownerid in (select masterpmid from masterpm where masterpmnum=:llpmnum or masterpmnum=:ulpmnum))",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "source": "MRLINE",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given material requisition line. (doclinks.keytable = 'MRLINE' and doclinks.keycolumn = 'MRLINEID' and doclinks.keyvalue = mrline.mrlineid$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects. Note: The MRLine.MRLineID field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "ownertable = 'MRLINE' and ownerid = :mrlineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "PERSON",
            "remarks": "Relationship to the Doclinks table.  Used to find out DocLinks for the Person. (keytable='PERSON' and keycolumn='PERSONID' and keyvalue=:personid$DOCLINKS.KEYVALUE).  The resultset will contain zero or more objects.",
            "whereClause": "ownertable='PERSON' and ownerid=:personuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "PERSONGROUP",
            "remarks": "Allow DOCLINK retrieval via the persongroupid",
            "whereClause": "ownertable = 'PERSONGROUP' and ownerid = :persongroupid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "PLUSCTEMPLATE",
            "remarks": "Relationship to allow attachments for plusctemplate",
            "whereClause": "ownertable = 'PLUSCTEMPLATE' and ownerid=:plusctemplateid",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "ownertable='PLUSDSPLAN' and ownerid=:plusdsplanid",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "source": "PM",
            "remarks": "Relationship to the PM's DocLinks records, used to find documents for a given PM. doclinks.keytable = 'PM' and doclinks.keycolumn = 'PMNUM' and pm.pmnum = doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "(ownertable = 'PM' and ownerid = :pmuid) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='ASSET' and ownerid in (select assetuid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='MASTERPM' and ownerid in (select masterpmid from masterpm where masterpmnum=:masterpm))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS_ASSETID",
            "source": "PM",
            "remarks": "Relationship to the PM's DocLinks records, used to find documents for a given PM. This relationship includes asset-related doclinks using assetid (global) instead of assetuid (site-specific). (doclinks.keytable = 'PM' and doclinks.keycolumn = 'PMNUM' and pm.pmnum = doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "(ownertable = 'PM' and ownerid = :pmuid) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='ASSET' and ownerid in (select assetid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='MASTERPM' and ownerid in (select masterpmid from masterpm where masterpmnum=:masterpm))",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "source": "PO",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given purchase order. (doclinks.keytable = 'PO' and doclinks.keycolumn ='PONUM' and doclinks.keyvalue = po.ponum$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects. Note: The PO.PONum field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable='PO' and ownerid=:poid) or (ownertable = 'COMPANIES' and ownerid = (select companiesid from companies where company=:vendor and orgid=:orgid)) or (ownertable = 'CONTRACT' and ownerid = (select contractid from contract where contractnum=:contractrefnum and revisionnum=:contractrefrev and orgid=:orgid)) or (ownertable = 'MRLINE' and ownerid in (select mrlineid from mrline where mrnum in (select mrnum from poline where ponum=:ponum and siteid=:siteid) and siteid=:siteid)) or (ownertable = 'PR' and ownerid in (select prid from pr where prnum in (select prnum from prline where ponum=:ponum and positeid=:siteid)  and siteid=:siteid)) or (ownertable = 'RFQ' and ownerid in (select rfqid from rfq where rfqnum in (select rfqnum from rfqline where ponum=:ponum and siteid=:siteid) and siteid=:siteid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "PR",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given purchase requisition. (doclinks.keytable = 'PR' and doclinks.keycolumn = 'PRNUM' and doclinks.keyvalue = pr.prnum$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects. Note: The PR.PRNum field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable='PR' and ownerid=:prid) or (ownertable = 'COMPANIES' and ownerid = (select companiesid from companies where company=:vendor and orgid=:orgid)) or (ownertable = 'CONTRACT' and ownerid = (select contractid from contract where contractnum=:contractrefnum and revisionnum=:contractrefrev and orgid=:orgid)) or (ownertable = 'MRLINE' and ownerid in (select mrlineid from mrline where mrnum in (select mrnum from prline where prnum=:prnum and siteid=:siteid)))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "PRECAUTION",
            "remarks": "Relationship to Doclinks table. (doclinks.keytable = 'PRECAUTION' and doclinks.keycolumn = 'PRECAUTIONID' and doclinks.keyvalue = precaution.precautionid). Used to find associated linked documents. The result set will contain zero or more objects.",
            "whereClause": "ownertable = 'PRECAUTION' and ownerid = :precautionuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "PROBLEM",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given ticket.  (doclinks.keytable = 'PROBLEM' and doclinks.keycolumn = 'TICKETID' and doclinks.keyvalue = problem.ticketid$DOCLINKS.KEYVALUE and doclinks.orgid = problem.orgid). The resulting set will contain zero or more objects. Note: The PROBLEM.TICKETID field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable = 'PROBLEM' and ownerid = :ticketuid) or (  ownertable='SR' and ownerid in (select ticketuid from sr where ticketid=:origrecordid and class=:origrecordclass) ) or (  ownertable='INCIDENT' and ownerid in (select ticketuid from incident where ticketid=:origrecordid and class=:origrecordclass)  ) or (  ownertable='WOCHANGE' and ownerid in (select workorderid from wochange where wonum=:origrecordid and woclass=:origrecordclass)  ) or (  ownertable='WORELEASE' and ownerid in (select workorderid from worelease where wonum=:origrecordid and woclass=:origrecordclass) ) or (ownertable='SOLUTION' and ownerid in (select solutionid from solution where solution=:solution)) or (ownertable='ASSET' and ownerid in (select assetuid from asset where assetnum=:assetnum)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location)) or (ownertable='WOACTIVITY' and ownerid in (select workorderid from woactivity where origrecordid=:ticketid and origrecordclass=:class)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum in (select jpnum from woactivity where origrecordid=:ticketid and origrecordclass=:class))) or (ownertable='COMMLOG' and ownerid in (select commloguid from commlog where ownertable='PROBLEM' and ownerid=:ticketuid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS_ASSETID",
            "source": "PROBLEM",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given ticket. This relationship includes asset-related doclinks using assetid (global) instead of assetuid (site-specific). (doclinks.keytable = 'PROBLEM' and doclinks.keycolumn = 'TICKETID' and doclinks.keyvalue = problem.ticketid$DOCLINKS.KEYVALUE and doclinks.orgid = problem.orgid). The resulting set will contain zero or more objects. Note: The PROBLEM.TICKETID field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable = 'PROBLEM' and ownerid = :ticketuid) or (  ownertable='SR' and ownerid in (select ticketuid from sr where ticketid=:origrecordid and class=:origrecordclass) ) or (  ownertable='INCIDENT' and ownerid in (select ticketuid from incident where ticketid=:origrecordid and class=:origrecordclass)  ) or (  ownertable='WOCHANGE' and ownerid in (select workorderid from wochange where wonum=:origrecordid and woclass=:origrecordclass)  ) or (  ownertable='WORELEASE' and ownerid in (select workorderid from worelease where wonum=:origrecordid and woclass=:origrecordclass) ) or (ownertable='SOLUTION' and ownerid in (select solutionid from solution where solution=:solution)) or (ownertable='ASSET' and ownerid in (select assetid from asset where assetnum=:assetnum)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location)) or (ownertable='WOACTIVITY' and ownerid in (select workorderid from woactivity where origrecordid=:ticketid and origrecordclass=:class)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum in (select jpnum from woactivity where origrecordid=:ticketid and origrecordclass=:class))) or (ownertable='COMMLOG' and ownerid in (select commloguid from commlog where ownertable='PROBLEM' and ownerid=:ticketuid))",
            "cardinality": null
        },
        {
            "name": "SOLDOCLINKS",
            "source": "PROBLEM",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given solution on a ticket.  (doclinks.keytable = 'PROBLEM' and doclinks.keycolumn = 'TICKETID' and doclinks.keyvalue = problem.ticketid$DOCLINKS.KEYVALUE and doclinks.orgid = problem.orgid). The resulting set will contain zero or more objects. Note: The PROBLEM.TICKETID field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "ownertable='SOLUTION' and ownerid in (select solutionid from solution where solution=:solution)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given master contract. (doclinks.keytable = PURCHVIEW and doclinks.keycolumn = CONTRACTNUM and doclinks.keyvalue = masterview.contractnum$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects. Note: The PURCHVIEW.CONTRACTNUM field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable='PURCHVIEW' and ownerid=:contractid) or (ownertable='RFQLINE' and ownerid in (select rfqlineid from rfqline where contractnum=:contractnum and orgid=:orgid)) or (ownertable='PRLINE' and ownerid in (select prlineid from prline where contractnum=:contractnum and orgid=:orgid)) or (ownertable='COMPANIES' and ownerid = (select companiesid from companies where company=:vendor and orgid=:orgid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "QUALIFICATION",
            "remarks": "Relationship to the Doclinks table.  Used to find out DocLinks for the Qualification. (keytable='QUALIFICATION' and keycolumn='QUALIFICATIONID' and keyvalue=:qualificationid$DOCLINKS.KEYVALUE).  The resultset will contain zero or more objects.",
            "whereClause": "ownertable='QUALIFICATION' and ownerid=:qualificationuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "RELATEDRECORD",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given solution. The resulting set will contain zero or more objects.",
            "whereClause": "ownertable = 'SOLUTION' and ownerid in (select solutionid from ticket,solution where ticket.ticketid=:relatedreckey and ticket.class=:relatedrecclass and ticket.solution=solution.solution)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "RELATION",
            "remarks": "Relationship to the Relation's DocLinks records, used to find documents for a given Relation. (doclinks.keytable = 'RELATION' and doclinks.keycolumn = 'RELATIONNUM' and relation.relationnum= doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "ownertable = 'RELATION' and ownerid = :relationid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "RFQ",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given request for quotation. (doclinks.keytable = 'RFQ' and doclinks.keycolumn = 'RFQNUM' and doclinks.keyvalue = rfq.rfqnum$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects. Note: The RFQ.RFQNum field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable='RFQ' and ownerid=:rfqid) or (ownertable = 'COMPANIES' and ownerid in (select companiesid from companies where company in (select vendor from rfqvendor where rfqnum=:rfqnum and orgid=:orgid))) or (ownertable = 'MRLINE' and ownerid in (select mrlineid from mrline where mrnum in (select mrnum from rfqline where rfqnum=:rfqnum and siteid=:siteid))) or (ownertable = 'PR' and ownerid in (select prid from pr where prnum in (select prnum from prline where rfqnum=:rfqnum and siteid=:siteid)))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "ROUTES",
            "remarks": "Relationship to the Route's DocLinks records, used to find documents for a given Route. (doclinks.keytable = 'ROTUES' and doclinks.keycolumn = 'ROUTE' and routes.route= doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "ownertable = 'ROUTES' and ownerid = :routesid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "SAFETYPLAN",
            "remarks": "Relationship to Doclinks table. (doclinks.keytable = 'SAFETYPLAN' and doclinks.keycolumn = 'SAFETYPLANID' and doclinks.keyvalue = safetyplan.safetyplanid). Used to find associated linked documents. The result set will contain zero or more objects.",
            "whereClause": "(ownertable = 'SAFETYPLAN' and ownerid = :safetyplanuid) or (ownertable = 'HAZARD' and ownerid in (select hazard.hazarduid from hazard, safetylexicon, splexiconlink, spworkasset where hazard.hazardid = safetylexicon.hazardid and safetylexicon.safetylexiconid = splexiconlink.safetylexiconid and splexiconlink.spworkassetid = spworkasset.spworkassetid and spworkasset.safetyplanid = :safetyplanid and spworkasset.orgid = :orgid and spworkasset.siteid = :siteid and splexiconlink.orgid = spworkasset.orgid and splexiconlink.siteid = spworkasset.siteid and safetylexicon.orgid = splexiconlink.orgid and safetylexicon.siteid = splexiconlink.siteid and hazard.orgid = safetylexicon.orgid) or (ownertable  = 'PRECAUTION' and ownerid in (select precaution.precautionuid from  precaution, hazardprec where precaution.precautionid = hazardprec.precautionid and hazardprec.orgid = :orgid and precaution.orgid = hazardprec.orgid and hazardprec.siteid = :siteid and precaution.siteid = hazardprec.siteid and hazardprec.hazardid in (select hazard.hazardid from hazard,  safetylexicon, splexiconlink, spworkasset where hazard.hazardid = safetylexicon.hazardid and safetylexicon.safetylexiconid = splexiconlink.safetylexiconid and splexiconlink.spworkassetid = spworkasset.spworkassetid and spworkasset.safetyplanid = :safetyplanid and spworkasset.orgid = :orgid and spworkasset.siteid = :siteid and splexiconlink.orgid = spworkasset.orgid and splexiconlink.siteid = spworkasset.siteid and safetylexicon.orgid = splexiconlink.orgid and safetylexicon.siteid = splexiconlink.siteid and hazard.orgid = safetylexicon.orgid))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "SERVICEADDRESS",
            "remarks": "Relationship to the Doclinks table. Used to find out DocLinks for the Service Address. (keytable='SERVICEADDRESS' and keycolumn='SERVICEADDRESSID' and keyvalue=:serviceaddressid$DOCLINKS.KEYVALUE). The resultset will contain zero or more objects.",
            "whereClause": "ownertable = 'SERVICEADDRESS' and ownerid = :serviceaddressid",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "source": "SERVICEITEMS",
            "remarks": null,
            "whereClause": "ownertable ='SERVICEITEMS' and ownerid = :itemid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "SFWVIEW",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given master contract. (doclinks.keytable = SFWVIEW and doclinks.keycolumn = CONTRACTNUM and doclinks.keyvalue = masterview.contractnum$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects. Note: The SFWVIEW.CONTRACTNUM field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable='SFWVIEW' and ownerid=:contractid) or (ownertable='RFQLINE' and ownerid in (select rfqlineid from rfqline where contractnum=:contractnum and orgid=:orgid)) or (ownertable='PRLINE' and ownerid in (select prlineid from prline where contractnum=:contractnum and orgid=:orgid)) or (ownertable='COMPANIES' and ownerid = (select companiesid from companies where company=:vendor and orgid=:orgid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "SKDPROJECT",
            "remarks": "Relationship to the SKDPROJECT's DocLinks records, used to find documents for a given SKDPROJECT. The resulting set will contain zero or one record.",
            "whereClause": "ownertable = 'SKDPROJECT' and ownerid = :skdprojectid",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "source": "SLA",
            "remarks": "Relationsip to the doclink table",
            "whereClause": "ownertable = 'SLA' and ownerid = :slaid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "SOLUTION",
            "remarks": "Relationship to the doclinks table, used to find all  documents for a given solution. (solution.solution = doclinks.keyvalue and doclinks.keycolumn='SOLUTION' and doclinks.keytable='SOLUTION'). This relationship will find zero or more objects.",
            "whereClause": "ownertable = 'SOLUTION' and ownerid = :solutionid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "SR",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given ticket.  (doclinks.keytable = 'SR' and doclinks.keycolumn = 'TICKETID' and doclinks.keyvalue = sr.ticketid$DOCLINKS.KEYVALUE and doclinks.orgid = sr.orgid). The resulting set will contain zero or more objects. Note: The SR.TICKETID field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable = 'SR' and ownerid = :ticketuid) or (  ownertable='PROBLEM' and ownerid in (select ticketuid from problem where ticketid=:origrecordid and class=:origrecordclass )) or (  ownertable='INCIDENT' and ownerid in (select ticketuid from incident where ticketid=:origrecordid and class=:origrecordclass)  ) or (  ownertable='WOCHANGE' and ownerid in (select workorderid from wochange where wonum=:origrecordid and woclass=:origrecordclass)  ) or (  ownertable='WORELEASE' and ownerid in (select workorderid from worelease where wonum=:origrecordid and woclass=:origrecordclass) ) or (ownertable='SOLUTION' and ownerid in (select solutionid from solution where solution=:solution)) or (ownertable='ASSET' and ownerid in (select assetuid from asset where assetnum=:assetnum and siteid=:assetsiteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:assetsiteid)) or (ownertable='WOACTIVITY' and ownerid in (select workorderid from woactivity where origrecordid=:ticketid and origrecordclass=:class)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum in (select jpnum from woactivity where origrecordid=:ticketid and origrecordclass=:class))) or (ownertable='COMMLOG' and ownerid in (select commloguid from commlog where ownertable='SR' and ownerid=:ticketuid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS_ASSETID",
            "source": "SR",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given ticket. This relationship includes asset-related doclinks using assetid (global) instead of assetuid (site-specific). (doclinks.keytable = 'SR' and doclinks.keycolumn = 'TICKETID' and doclinks.keyvalue = sr.ticketid$DOCLINKS.KEYVALUE and doclinks.orgid = sr.orgid). The resulting set will contain zero or more objects. Note: The SR.TICKETID field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable = 'SR' and ownerid = :ticketuid) or (  ownertable='PROBLEM' and ownerid in (select ticketuid from problem where ticketid=:origrecordid and class=:origrecordclass )) or (  ownertable='INCIDENT' and ownerid in (select ticketuid from incident where ticketid=:origrecordid and class=:origrecordclass)  ) or (  ownertable='WOCHANGE' and ownerid in (select workorderid from wochange where wonum=:origrecordid and woclass=:origrecordclass)  ) or (  ownertable='WORELEASE' and ownerid in (select workorderid from worelease where wonum=:origrecordid and woclass=:origrecordclass) ) or (ownertable='SOLUTION' and ownerid in (select solutionid from solution where solution=:solution)) or (ownertable='ASSET' and ownerid in (select assetid from asset where assetnum=:assetnum and siteid=:assetsiteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:assetsiteid)) or (ownertable='WOACTIVITY' and ownerid in (select workorderid from woactivity where origrecordid=:ticketid and origrecordclass=:class)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum in (select jpnum from woactivity where origrecordid=:ticketid and origrecordclass=:class))) or (ownertable='COMMLOG' and ownerid in (select commloguid from commlog where ownertable='SR' and ownerid=:ticketuid))",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "source": "TAGOUT",
            "remarks": "Relationship to Doclinks table. (doclinks.keytable = 'TAGOUT' and doclinks.keycolumn = 'TAGOUTID' and doclinks.keyvalue = tagout.tagoutid). Used to find associated linked documents. The result set will contain zero or more objects.",
            "whereClause": "ownertable = 'TAGOUT' and ownerid = :tagoutuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "TKSERVICEADDRESS",
            "remarks": "Relationship to the Doclinks table. Used to find out DocLinks for the Service Address. (keytable='SERVICEADDRESS' and keycolumn='SERVICEADDRESSID' and keyvalue=:serviceaddressid$DOCLINKS.KEYVALUE). The resultset will contain zero or more objects.",
            "whereClause": "ownertable = 'SERVICEADDRESS' and ownerid = :serviceaddressid",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "source": "TKTEMPLATE",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given tktemplate.  (doclinks.keytable = 'TKTEMPLATE' and doclinks.keycolumn = 'TEMPLATEID' and doclinks.keyvalue = tktemplate.templateid$DOCLINKS.KEYVALUE and doclinks.orgid = tktemplate.orgid). The resulting set will contain zero or more objects. Note: The TKTEMPLATE.TEMPLATEID field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "ownertable = 'TKTEMPLATE' and ownerid = :tktemplateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "TOOLINV",
            "remarks": null,
            "whereClause": "(ownertable ='TOOLINV' and ownerid = :inventoryid) or (ownertable ='TOOLITEM' and ownerid = (select itemid from toolitem where itemnum=:itemnum and itemsetid=:itemsetid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "TOOLITEM",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given tool. (doclinks.keytable = 'TOOL' and doclinks.keycolumn = 'TOOLNUM' and doclinks.keyvalue = tool.toolnum$DOCLINKS.KEYVALUE and doclinks.orgid = tool.orgid). The resulting set will contain zero or more objects. Note: The Tool.ToolNum field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable ='TOOLITEM' and ownerid = :itemid) or (ownertable ='QUALIFICATION' and ownerid in (select qualificationuid from qualification where qualificationid in (select qualificationid from toolqual where itemnum=:itemnum and itemsetid=:itemsetid)))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given master contract. (doclinks.keytable = WARRANTYVIEW and doclinks.keycolumn = CONTRACTNUM and doclinks.keyvalue = masterview.contractnum$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects. Note: The WARRANTYVIEW.CONTRACTNUM field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable='WARRANTYVIEW' and ownerid=:contractid) or (ownertable='COMPANIES' and ownerid = (select companiesid from companies where company=:vendor and orgid=:orgid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "source": "WOACTIVITY",
            "remarks": "Relationship to the Doclinks table, used to find all doclinks for a work order. (Doclinks.keytable = 'WOCHANGE' and Doclinks.keycolumn = 'WONUM' and Doclinks.keyvalue = Workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "(ownertable='WOACTIVITY' and ownerid=:workorderid) or (ownertable='WOACTIVITY' and ownerid in (select workorderid from workorder where parent=:wonum and istask=1 and siteid=:siteid)) or (ownertable='ASSET' and ownerid in (select assetuid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum=:jpnum and (siteid is null or siteid=:siteid) and pluscrevnum =:pluscjprevnum) ) or (ownertable='PM' and ownerid in (select pmuid from pm where pmnum=:pmnum and siteid=:siteid)) or (ownertable='SAFETYPLAN' and ownerid in (select safetyplanuid from safetyplan,wosafetyplan where safetyplan.safetyplanid=wosafetyplan.safetyplanid and wosafetyplan.wonum=:wonum and wosafetyplan.siteid=:siteid)) or (ownertable in ('SR','INCIDENT','PROBLEM') and ownerid in (select ticketuid from ticket,relatedrecord where ticketid=recordkey and ticket.class = relatedrecord.class and relatedrecclass=:woclass and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable in ('WORKORDER','WOCHANGE','WORELEASE') and ownerid in (select workorderid from workorder,relatedrecord where wonum=recordkey and workorder.woclass = relatedrecord.class and relatedrecclass=:woclass and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable='COMMLOG' and ownerid in (select commloguid from commlog where ownerid=:workorderid and ownertable in (select value from synonymdomain where domainid='WOCLASS'))) or (ownertable='SLA' and ownerid in (select slaid from sla,slarecords,workorder where sla.slanum=slarecords.slanum and slarecords.ownerid=workorder.workorderid and sla.objectname='WOCHANGE' and slarecords.ownertable='WOACTIVITY' and workorder.wonum=:wonum)) or (ownertable='JOBTASK' and ownerid=:jobtaskid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS_ASSETID",
            "source": "WOACTIVITY",
            "remarks": "Relationship to the Doclinks table, used to find all doclinks for a work order. This relationship includes asset-related doclinks using assetid (global) instead of assetuid (site-specific). (Doclinks.keytable = 'WOACTIVITY' and Doclinks.keycolumn = 'WONUM' and Doclinks.keyvalue = Workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "(ownertable='WOACTIVITY' and ownerid=:workorderid) or (ownertable='WOACTIVITY' and ownerid in (select workorderid from workorder where parent=:wonum and istask=1 and siteid=:siteid)) or (ownertable='ASSET' and ownerid in (select assetid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum=:jpnum and (siteid is null or siteid=:siteid) and pluscrevnum =:pluscjprevnum) ) or (ownertable='PM' and ownerid in (select pmuid from pm where pmnum=:pmnum and siteid=:siteid)) or (ownertable='SAFETYPLAN' and ownerid in (select safetyplanuid from safetyplan,wosafetyplan where safetyplan.safetyplanid=wosafetyplan.safetyplanid and wosafetyplan.wonum=:wonum and wosafetyplan.siteid=:siteid)) or (ownertable in ('SR','INCIDENT','PROBLEM') and ownerid in (select ticketuid from ticket,relatedrecord where ticketid=recordkey and ticket.class = relatedrecord.class and relatedrecclass=:woclass and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable in ('WORKORDER','WOCHANGE','WORELEASE') and ownerid in (select workorderid from workorder,relatedrecord where wonum=recordkey and workorder.woclass = relatedrecord.class and relatedrecclass=:woclass and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable='COMMLOG' and ownerid in (select commloguid from commlog where ownerid=:workorderid and ownertable in (select value from synonymdomain where domainid='WOCLASS'))) or (ownertable='SLA' and ownerid in (select slaid from sla,slarecords,workorder where sla.slanum=slarecords.slanum and slarecords.ownerid=workorder.workorderid and sla.objectname='WOCHANGE' and slarecords.ownertable='WOACTIVITY' and workorder.wonum=:wonum)) or (ownertable='JOBTASK' and ownerid=:jobtaskid)",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "source": "WOCHANGE",
            "remarks": "Relationship to the Doclinks table, used to find all doclinks for a work order. (Doclinks.keytable = 'WOCHANGE' and Doclinks.keycolumn = 'WONUM' and Doclinks.keyvalue = Workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "(ownertable='WOCHANGE' and ownerid=:workorderid) or (ownertable='WOCHANGE' and ownerid in (select workorderid from workorder where parent=:wonum and istask=1 and siteid=:siteid)) or (ownertable='ASSET' and ownerid in (select assetuid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum=:jpnum and (siteid is null or siteid=:siteid) and pluscrevnum =:pluscjprevnum) ) or (ownertable='PM' and ownerid in (select pmuid from pm where pmnum=:pmnum and siteid=:siteid)) or (ownertable='SAFETYPLAN' and ownerid in (select safetyplanuid from safetyplan,wosafetyplan where safetyplan.safetyplanid=wosafetyplan.safetyplanid and wosafetyplan.wonum=:wonum and wosafetyplan.siteid=:siteid)) or (ownertable in ('SR','INCIDENT','PROBLEM') and ownerid in (select ticketuid from ticket,relatedrecord where ticketid=recordkey  and ticket.class = relatedrecord.class and relatedrecclass=:woclass and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable in ('WORKORDER','WORELEASE','WOACTIVITY') and ownerid in (select workorderid from workorder,relatedrecord where wonum=recordkey and workorder.woclass = relatedrecord.class and relatedrecclass=:woclass and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable='COMMLOG' and ownerid in (select commloguid from commlog where ownerid=:workorderid and ownertable in (select value from synonymdomain where domainid='WOCLASS'))) or (ownertable='SLA' and ownerid in (select slaid from sla,slarecords,workorder where sla.slanum=slarecords.slanum and slarecords.ownerid=workorder.workorderid and sla.objectname='WOCHANGE' and slarecords.ownertable='WOCHANGE' and workorder.wonum=:wonum))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS_ASSETID",
            "source": "WOCHANGE",
            "remarks": "Relationship to the Doclinks table, used to find all doclinks for a work order. This relationship includes asset-related doclinks using assetid (global) instead of assetuid (site-specific). (Doclinks.keytable = 'WOCHANGE' and Doclinks.keycolumn = 'WONUM' and Doclinks.keyvalue = Workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "(ownertable='WOCHANGE' and ownerid=:workorderid) or (ownertable='WOCHANGE' and ownerid in (select workorderid from workorder where parent=:wonum and istask=1 and siteid=:siteid)) or (ownertable='ASSET' and ownerid in (select assetid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum=:jpnum and (siteid is null or siteid=:siteid) and pluscrevnum =:pluscjprevnum) ) or (ownertable='PM' and ownerid in (select pmuid from pm where pmnum=:pmnum and siteid=:siteid)) or (ownertable='SAFETYPLAN' and ownerid in (select safetyplanuid from safetyplan,wosafetyplan where safetyplan.safetyplanid=wosafetyplan.safetyplanid and wosafetyplan.wonum=:wonum and wosafetyplan.siteid=:siteid)) or (ownertable in ('SR','INCIDENT','PROBLEM') and ownerid in (select ticketuid from ticket,relatedrecord where ticketid=recordkey  and ticket.class = relatedrecord.class and relatedrecclass=:woclass and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable in ('WORKORDER','WORELEASE','WOACTIVITY') and ownerid in (select workorderid from workorder,relatedrecord where wonum=recordkey and workorder.woclass = relatedrecord.class and relatedrecclass=:woclass and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable='COMMLOG' and ownerid in (select commloguid from commlog where ownerid=:workorderid and ownertable in (select value from synonymdomain where domainid='WOCLASS'))) or (ownertable='SLA' and ownerid in (select slaid from sla,slarecords,workorder where sla.slanum=slarecords.slanum and slarecords.ownerid=workorder.workorderid and sla.objectname='WOCHANGE' and slarecords.ownertable='WOCHANGE' and workorder.wonum=:wonum))",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "source": "WORELEASE",
            "remarks": "Relationship to the Doclinks table, used to find all doclinks for a work order. (Doclinks.keytable = 'WOCHANGE' and Doclinks.keycolumn = 'WONUM' and Doclinks.keyvalue = Workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "(ownertable='WORELEASE' and ownerid=:workorderid) or (ownertable='WORELEASE' and ownerid in (select workorderid from workorder where parent=:wonum and istask=1 and siteid=:siteid)) or (ownertable='ASSET' and ownerid in (select assetuid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum=:jpnum and (siteid is null or siteid=:siteid) and pluscrevnum =:pluscjprevnum) ) or (ownertable='PM' and ownerid in (select pmuid from pm where pmnum=:pmnum and siteid=:siteid)) or (ownertable='SAFETYPLAN' and ownerid in (select safetyplanuid from safetyplan,wosafetyplan where safetyplan.safetyplanid=wosafetyplan.safetyplanid and wosafetyplan.wonum=:wonum and wosafetyplan.siteid=:siteid)) or (ownertable in ('SR','INCIDENT','PROBLEM') and ownerid in (select ticketuid from ticket,relatedrecord where ticketid=recordkey and ticket.class = relatedrecord.class and relatedrecclass=:woclass and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable in ('WORKORDER','WOCHANGE','WOACTIVITY') and ownerid in (select workorderid from workorder,relatedrecord where wonum=recordkey and workorder.woclass = relatedrecord.class and relatedrecclass=:woclass and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable='COMMLOG' and ownerid in (select commloguid from commlog where ownerid=:workorderid and ownertable in (select value from synonymdomain where domainid='WOCLASS'))) or (ownertable='SLA' and ownerid in (select slaid from sla,slarecords,workorder where sla.slanum=slarecords.slanum and slarecords.ownerid=workorder.workorderid and sla.objectname='WOCHANGE' and slarecords.ownertable='WORELEASE' and workorder.wonum=:wonum))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS_ASSETID",
            "source": "WORELEASE",
            "remarks": "Relationship to the Doclinks table, used to find all doclinks for a work order. This relationship includes asset-related doclinks using assetid (global) instead of assetuid (site-specific). (Doclinks.keytable = 'WORELEASE' and Doclinks.keycolumn = 'WONUM' and Doclinks.keyvalue = Workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "(ownertable='WORELEASE' and ownerid=:workorderid) or (ownertable='WORELEASE' and ownerid in (select workorderid from workorder where parent=:wonum and istask=1 and siteid=:siteid)) or (ownertable='ASSET' and ownerid in (select assetid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum=:jpnum and (siteid is null or siteid=:siteid) and pluscrevnum =:pluscjprevnum) ) or (ownertable='PM' and ownerid in (select pmuid from pm where pmnum=:pmnum and siteid=:siteid)) or (ownertable='SAFETYPLAN' and ownerid in (select safetyplanuid from safetyplan,wosafetyplan where safetyplan.safetyplanid=wosafetyplan.safetyplanid and wosafetyplan.wonum=:wonum and wosafetyplan.siteid=:siteid)) or (ownertable in ('SR','INCIDENT','PROBLEM') and ownerid in (select ticketuid from ticket,relatedrecord where ticketid=recordkey and ticket.class = relatedrecord.class and relatedrecclass=:woclass and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable in ('WORKORDER','WOCHANGE','WOACTIVITY') and ownerid in (select workorderid from workorder,relatedrecord where wonum=recordkey and workorder.woclass = relatedrecord.class and relatedrecclass=:woclass and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable='COMMLOG' and ownerid in (select commloguid from commlog where ownerid=:workorderid and ownertable in (select value from synonymdomain where domainid='WOCLASS'))) or (ownertable='SLA' and ownerid in (select slaid from sla,slarecords,workorder where sla.slanum=slarecords.slanum and slarecords.ownerid=workorder.workorderid and sla.objectname='WOCHANGE' and slarecords.ownertable='WORELEASE' and workorder.wonum=:wonum))",
            "cardinality": null
        },
        {
            "name": "PLUSCDOCLINKS",
            "source": "WORKORDER",
            "remarks": "DOCLINKS WORKORDER RELATIONSHIP",
            "whereClause": "(ownertable='WORKORDER' and ownerid=:workorderid) or (ownertable='WORKORDER' and ownerid in (select workorderid from workorder where parent=:wonum and istask=1 and siteid=:siteid)) or (ownertable='ASSET' and ownerid in (select assetuid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum=:jpnum and (siteid is null or siteid=:siteid) and pluscrevnum =:pluscjprevnum )) or (ownertable='PM' and ownerid in (select pmuid from pm where pmnum=:pmnum and siteid=:siteid)) or (ownertable='SAFETYPLAN' and ownerid in (select safetyplanuid from safetyplan,wosafetyplan where safetyplan.safetyplanid=wosafetyplan.safetyplanid and wosafetyplan.wonum=:wonum and wosafetyplan.siteid=:siteid)) or (ownertable in ('SR','INCIDENT','PROBLEM') and ownerid in (select ticketuid from ticket,relatedrecord where ticketid=recordkey and ticket.class = relatedrecord.class and relatedrecclass='WORKORDER' and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable in ('WOCHANGE','WORELEASE','WOACTIVITY') and ownerid in (select workorderid from workorder,relatedrecord where wonum=recordkey and workorder.woclass = relatedrecord.class and relatedrecclass='WORKORDER' and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable='COMMLOG' and ownerid in (select commloguid from workorder,commlog where workorderid=ownerid and ownertable='WORKORDER')) or (ownertable='SLA' and ownerid in (select slaid from sla,slarecords,workorder where sla.slanum=slarecords.slanum and slarecords.ownerid=workorder.workorderid and sla.objectname='WORKORDER' and slarecords.ownertable='WORKORDER' and workorder.wonum=:wonum))",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "source": "WORKORDER",
            "remarks": "Relationship to the Doclinks table, used to find all doclinks for a work order. (Doclinks.keytable = 'WORKORDER' and Doclinks.keycolumn = 'WONUM' and Doclinks.keyvalue = Workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "(ownertable='WORKORDER' and ownerid=:workorderid) or (ownertable='WORKORDER' and ownerid in (select workorderid from workorder where parent=:wonum and istask=1 and siteid=:siteid)) or (ownertable='ASSET' and ownerid in (select assetuid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum=:jpnum and (siteid is null or siteid=:siteid) and pluscrevnum =:pluscjprevnum) ) or (ownertable='PM' and ownerid in (select pmuid from pm where pmnum=:pmnum and siteid=:siteid)) or (ownertable='SAFETYPLAN' and ownerid in (select safetyplanuid from safetyplan,wosafetyplan where safetyplan.safetyplanid=wosafetyplan.safetyplanid and wosafetyplan.wonum=:wonum and wosafetyplan.siteid=:siteid)) or (ownertable in ('SR','INCIDENT','PROBLEM') and ownerid in (select ticketuid from ticket,relatedrecord where ticketid=recordkey and ticket.class = relatedrecord.class and relatedrecclass=:woclass and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable in ('WOCHANGE','WORELEASE','WOACTIVITY') and ownerid in (select workorderid from workorder,relatedrecord where wonum=recordkey and workorder.woclass = relatedrecord.class and relatedrecclass=:woclass and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable='COMMLOG' and ownerid in (select commloguid from commlog where ownerid=:workorderid and ownertable in (select value from synonymdomain where domainid='WOCLASS'))) or (ownertable='SLA' and ownerid in (select slaid from sla,slarecords,workorder where sla.slanum=slarecords.slanum and slarecords.ownerid=workorder.workorderid and sla.objectname='WORKORDER' and slarecords.ownertable='WORKORDER' and workorder.wonum=:wonum))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS_ASSETID",
            "source": "WORKORDER",
            "remarks": "Relationship to the Doclinks table, used to find all doclinks for a work order. This relationship includes asset-related doclinks using assetid (global) instead of assetuid (site-specific).(Doclinks.keytable = 'WORKORDER' and Doclinks.keycolumn = 'WONUM' and Doclinks.keyvalue = Workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "(ownertable='WORKORDER' and ownerid=:workorderid) or (ownertable='WORKORDER' and ownerid in (select workorderid from workorder where parent=:wonum and istask=1 and siteid=:siteid)) or (ownertable='ASSET' and ownerid in (select assetid from asset where assetnum=:assetnum and siteid=:siteid)) or (ownertable='LOCATIONS' and ownerid in (select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='JOBPLAN' and ownerid in (select jobplanid from jobplan where jpnum=:jpnum and (siteid is null or siteid=:siteid) and pluscrevnum =:pluscjprevnum )) or (ownertable='PM' and ownerid in (select pmuid from pm where pmnum=:pmnum and siteid=:siteid)) or (ownertable='SAFETYPLAN' and ownerid in (select safetyplanuid from safetyplan,wosafetyplan where safetyplan.safetyplanid=wosafetyplan.safetyplanid and wosafetyplan.wonum=:wonum and wosafetyplan.siteid=:siteid)) or (ownertable in ('SR','INCIDENT','PROBLEM') and ownerid in (select ticketuid from ticket,relatedrecord where ticketid=recordkey and ticket.class = relatedrecord.class and relatedrecclass='WORKORDER' and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable in ('WOCHANGE','WORELEASE','WOACTIVITY') and ownerid in (select workorderid from workorder,relatedrecord where wonum=recordkey and workorder.woclass = relatedrecord.class and relatedrecclass='WORKORDER' and relatedreckey=:wonum and relatedrecsiteid=:siteid)) or (ownertable='COMMLOG' and ownerid in (select commloguid from workorder,commlog where workorderid=ownerid and ownertable='WORKORDER')) or (ownertable='SLA' and ownerid in (select slaid from sla,slarecords,workorder where sla.slanum=slarecords.slanum and slarecords.ownerid=workorder.workorderid and sla.objectname='WORKORDER' and slarecords.ownertable='WORKORDER' and workorder.wonum=:wonum))",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "source": "WOSERVICEADDRESS",
            "remarks": "Relationship to the Doclinks table. Used to find out DocLinks for the Service Address. (keytable='SERVICEADDRESS' and keycolumn='SERVICEADDRESSID' and keyvalue=:serviceaddressid$DOCLINKS.KEYVALUE). The resultset will contain zero or more objects.",
            "whereClause": "ownertable = 'SERVICEADDRESS' and ownerid = :serviceaddressid",
            "cardinality": null
        }
    ]
}