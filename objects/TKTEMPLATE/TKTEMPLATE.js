mos = {
    "objectName": "TKTEMPLATE",
    "className": "psdi.app.ticket.TKTemplateSet",
    "description": "The Ticket Template Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "TKTEMPLATEID",
    "primaryKeyColumns": [
        "TEMPLATEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "TKTEMPLATE",
            "targetObject": "TKTEMPLATE",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "EXTERNALREFID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ticket Template",
            "longDescription": null
        },
        {
            "objectName": "TKTEMPLATE",
            "targetObject": "TKTEMPLATESPEC",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "TEMPLATEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ticket Template",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "TKTEMPLATE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
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
            "objectName": "LANGUAGE",
            "targetObject": "TKTEMPLATE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TKTEMPLATE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
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
            "objectName": "PERSONGROUP",
            "targetObject": "TKTEMPLATE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assigned Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "TKTEMPLATE",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group",
            "longDescription": null
        },
        {
            "objectName": "TKTEMPLATE",
            "targetObject": "TKTEMPLATE",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "EXTERNALREFID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ticket Template",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TEMPLATEID",
            "required": true,
            "persistent": true,
            "title": "Template",
            "remarks": "Identifies the ticket template. This value must be unique for all ticket template records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASS",
            "required": true,
            "persistent": true,
            "title": "Class",
            "remarks": "Type of ticket to which a Maximo user can apply the template. You can choose from three classes: Service Request, Incident, or Problem. Click the Select Value button to choose a class.",
            "sameAsAttribute": "CLASS",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of the ticket template. When you create a template, Maximo automatically sets the status to DRAFT. When you are ready for Maximo users to apply the template, set the status to ACTIVE. Set the status of a template to INACTIVE if you do not want it to be used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Status Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the ticket template. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERNALPRIORITY",
            "required": false,
            "persistent": true,
            "title": "Internal Priority",
            "remarks": "Importance of the ticket relative to other tickets as categorized by Service Desk personnel. Predefined values include: 1 (Urgent), 2 (High), 3 (Medium), and 4 (Low). Click the Select Value button to choose an internal priority.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMPACT",
            "required": false,
            "persistent": true,
            "title": "Impact",
            "remarks": "Ticket Template Impact",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URGENCY",
            "required": false,
            "persistent": true,
            "title": "Urgency",
            "remarks": "Ticket Template Urgency",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": true,
            "title": "Owner",
            "remarks": "Individual person responsible for the ticket. Click the Detail Menu button to select a person or go to the People application to create one.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "OWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Owner Group",
            "remarks": "Functional group or organization that owns this type of ticket. Click the Detail Menu button to select a person group or go to the Person Groups application to create one.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "DESCRIPTION_LONGDESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Class Structure Identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Service",
            "remarks": "Service or type of work associated with the ticket. Can serve as a way to categorize tickets. Click the Detail Menu button to select a value or to view related records for this service.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": true,
            "title": "Service Group",
            "remarks": "Service group or organization responsible for performing the work associated with the ticket. Can serve as a way to categorize tickets. Click the Detail Menu button to select a value or go to the Service Catalog application to create one. You can also view related records for this service group.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "TKTEMPLATEID",
            "required": true,
            "persistent": true,
            "title": "TKTEMPLATEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "If ticket requires work to be performed by an outside company, name of vendor responsible for the work. Click the Detail Menu button to select a value or go to the Companies application to create one.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization associated with the ticket. Click the Select Value button choose an organization.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
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
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "HIERARCHYPATH",
            "required": false,
            "persistent": false,
            "title": "Hierarchy Path",
            "remarks": "Used to set the value of CLASSTRUCTUREID",
            "sameAsAttribute": "HIERARCHYPATH",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Ref ID",
            "remarks": "'Identifies the ticket template. Hold Internal ID for source MAXIMO",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "TKTEMPLATE"
        },
        {
            "attributeName": "ASSIGNEDOWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Assigned Owner Group",
            "remarks": "Assigned Owner Group of the ticket template record. Use the Select Action menu to assign an owner group. ",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSETLOCCOMM",
            "target": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "commodity=:commodity and assettype is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMMGRPVIEW",
            "target": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup and assettype is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMM",
            "target": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "commodity=:commodity and assettype is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMMGRPVIEW",
            "target": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup and assettype is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMCI",
            "target": "CI",
            "remarks": null,
            "whereClause": "service=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMGRPCI",
            "target": "CI",
            "remarks": null,
            "whereClause": "servicegroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "target": "CLASSANCESTOR",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (tktemplate.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given TKTEMPLATESPEC. (TKTEMPLATESPEC.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the CLASSSTRUCTURE table, used to find the CLASSSTRUCTURE record for a given ticket template. (classstructure.classstructureid = solution.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTCOMMODITY",
            "target": "CONTCOMMODITY",
            "remarks": null,
            "whereClause": "commodity=:commodity and contractnum in (select contractnum from contract where contract.contractnum=contcommodity.contractnum and contract.revisionnum=contcommodity.revisionnum and contract.status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTCOMMODITYGRP",
            "target": "CONTCOMMODITY",
            "remarks": null,
            "whereClause": "((commodity=:commodity and contractnum not in (select contractnum from contcommodity where parent=:commodity)) or parent=:commodity) and contractnum in (select contractnum from contract where contract.contractnum=contcommodity.contractnum and contract.revisionnum=contcommodity.revisionnum and contract.status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given tktemplate.  (doclinks.keytable = 'TKTEMPLATE' and doclinks.keycolumn = 'TEMPLATEID' and doclinks.keyvalue = tktemplate.templateid$DOCLINKS.KEYVALUE and doclinks.orgid = tktemplate.orgid). The resulting set will contain zero or more objects. Note: The TKTEMPLATE.TEMPLATEID field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "ownertable = 'TKTEMPLATE' and ownerid = :tktemplateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from TKTEMPLATE.",
            "whereClause": "ldkey=:tktemplateid and ldownertable = 'TKTEMPLATE'",
            "cardinality": null
        },
        {
            "name": "COMMSLA",
            "target": "SLA",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMSLAGRP",
            "target": "SLA",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRVCOMMODRELREC",
            "target": "SRVCOMMODRELREC",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='TEMPLATESTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTEMPCHANGESTATUS",
            "target": "TEMPCHANGESTATUS",
            "remarks": "Relationship to the non-persistent TKTempChangeStatus table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Change Status action page to change the status of a given ticket template.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TEMPLATESTATUS",
            "target": "TEMPLATESTATUS",
            "remarks": null,
            "whereClause": "templateid=:templateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTICKET",
            "target": "TICKET",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTICKETGRP",
            "target": "TICKET",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTEMPQBE",
            "target": "TKTEMPLATE",
            "remarks": "Relationship to the Ticket Template table, used to find the ticket template records containing the classtructureid node. (Gets the classstructureid from classancestor where ancestor=classstructureid). This resulting set will contain zero or more objects.",
            "whereClause": "in (select classstructureid from classancestor where ancestor=:1)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTEMPLATESPEC",
            "target": "TKTEMPLATESPEC",
            "remarks": "Relationship to the tktemplate table, used to find a tktemplate in the tktemplatespec table. (refobjectid=:tktempteid).  The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:tktemplateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTEMPLATESPECCLASS",
            "target": "TKTEMPLATESPEC",
            "remarks": "Relationship to the tktemplatespec table, used to find the tktemplate records for a given tktemplate. (tktemplate.templateid=tktemplatespec.templateid and tktemplate.class=tktemplatespec.class and tktemplate.classstructureid=tktemplatespec.classstructureid) The resulting set will contain zero or more object.",
            "whereClause": "templateid= :templateid and class=:class and classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVITY",
            "target": "TKTEMPLTACTIVITY",
            "remarks": null,
            "whereClause": "templateid=:templateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTEMPLTACTIVITYSPECCLASS",
            "target": "TKTEMPLTACTYSPEC",
            "remarks": "Relationship to the tktemplatespec table, used to find the tktemplate records for a given tktemplate. (tktemplate.templateid=tktemplatespec.templateid and tktemplate.class=tktemplatespec.class and tktemplate.classstructureid=tktemplatespec.classstructureid) The resulting set will contain zero or more object.",
            "whereClause": "templateid= :templateid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMWO",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMWOGRP",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "TKTEMPLATE",
            "source": "ACTIONSCFG",
            "remarks": "This relationship returns all active templates for the given object type.",
            "whereClause": "app=:class and status in (select value from synonymdomain where domainid = 'TEMPLATESTATUS' and maxvalue = 'ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTEMPLATE",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the SR table, used to find the tktemplate records for a given classstructure. (classstructure.classstructureid = tktemplate.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTEMPLATE",
            "source": "PERSON",
            "remarks": "Relationship to the tktemplate table.  Returns all tktemplates owned by this person.  Returns 0 or more objects.",
            "whereClause": "owner=:personid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPUSEDBYTKTEMPLATE",
            "source": "PERSONGROUP",
            "remarks": "returns any rows if used by ticket templates",
            "whereClause": "(ownergroup = :persongroup)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTEMPLATE",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "class=:class and (:orgid is null or (orgid=:orgid or orgid is null) ) and status in (select value from synonymdomain where domainid = 'TEMPLATESTATUS' and maxvalue = 'ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTEMPQBE",
            "source": "TKTEMPLATE",
            "remarks": "Relationship to the Ticket Template table, used to find the ticket template records containing the classtructureid node. (Gets the classstructureid from classancestor where ancestor=classstructureid). This resulting set will contain zero or more objects.",
            "whereClause": "in (select classstructureid from classancestor where ancestor=:1)",
            "cardinality": "UNDEFINED"
        }
    ]
}