mos = {
    "objectName": "WORKVIEW",
    "className": "psdi.app.ticket.WorkViewSet",
    "description": "A table for all the tickets and work orders",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "WORKVIEWID",
    "primaryKeyColumns": [
        "RECORDKEY",
        "CLASS",
        "SITEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "WORKVIEW",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WORKVIEW",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
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
            "objectName": "PERSONGROUP",
            "targetObject": "WORKVIEW",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assigned Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WORKVIEW",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group",
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
        }
    ],
    "columns": [
        {
            "attributeName": "WORKVIEWID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECORDKEY",
            "required": true,
            "persistent": true,
            "title": "Record",
            "remarks": "Identifies the ticket or work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASS",
            "required": true,
            "persistent": true,
            "title": "Class",
            "remarks": "Type of ticket or work order. Possible ticket classes include SR (service request), INCIDENT, and PROBLEM. Possible work order classes include CHANGE, RELEASE, WORKORDER, and ACTIVITY. Click the Select Value button to choose a class.",
            "sameAsAttribute": "CLASS",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the ticket or work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIORITY",
            "required": false,
            "persistent": true,
            "title": "Priority",
            "remarks": "Number that indicates the importance of the ticket or work order in relation to other tickets or work orders, as defined by Service Desk personnel. Identifies the importance of the ticket or work order. In tickets, one (1) is the highest priority. In work orders, the implementation is left to the customer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": true,
            "title": "Owner",
            "remarks": "Individual person responsible for the work on a ticket or work order. Click the Select Value button to select a person.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "OWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Owner Group",
            "remarks": "Group or organization that owns the work on the ticket or work order. Click the Select Value button to choose an owner group.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "REPORTEDBY",
            "required": false,
            "persistent": true,
            "title": "Reported By",
            "remarks": "Person who reported the request for information, help, or service on the ticket or work order. Click the Select Value button to choose a person.",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "REPORTDATE",
            "required": false,
            "persistent": true,
            "title": "Reported Date",
            "remarks": "System date and time the ticket or work order was reported. Click the Select Date and Time button to use the calendar functionality.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Current status of the ticket or work order, for example, WPPR for \"\"waiting on approval.\"\" Click the Select Value button to choose a status.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site associated with the ticket or work order. Click the Select Value button to choose a site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Orgnization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "HISTORYFLAG",
            "required": true,
            "persistent": true,
            "title": "History",
            "remarks": "Specifies whether to search for ticket or work orders that are still in process or are closed or canceled. If the value is N (the default), Maximo searchs for all non-hisorical ticket and work orders (those that are not closed (CLOSE) or canceled (CAN). If the value is Y, Maximo searchs for all historical tickets and work orders (those with a status of CLOSE or CAN).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISTASK",
            "required": true,
            "persistent": true,
            "title": "Is Task",
            "remarks": "Is task work order?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TICKETID",
            "required": false,
            "persistent": false,
            "title": "Ticket",
            "remarks": "Ticket Identifier",
            "sameAsAttribute": "TICKETID",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Work order number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "Name of the application to launch",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "OWNERID",
            "required": false,
            "persistent": true,
            "title": "Owner ID",
            "remarks": "uniqueid of the controlled record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTEDBYNAME",
            "required": false,
            "persistent": true,
            "title": "Reported By Name",
            "remarks": "Display Name of the reported By person",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "AFFECTEDPERSON",
            "required": false,
            "persistent": true,
            "title": "Affected Person",
            "remarks": "Affected Person ID",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "AFFECTEDPERSONNAME",
            "required": false,
            "persistent": true,
            "title": "Affected Person Name",
            "remarks": "The name of the affected person",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "TARGSTARTDATE",
            "required": false,
            "persistent": true,
            "title": "Target Start Date",
            "remarks": "target start date for the work order or ticket represented by this workview object",
            "sameAsAttribute": "TARGSTARTDATE",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ASSIGNEDOWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Assigned Owner Group",
            "remarks": "Identifies the owner group that is currently assigned to the  record. ",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MULTIASSETLOCCI",
            "target": "MULTIASSETLOCCI",
            "remarks": "multiassetlocci records for workview record",
            "whereClause": "recordkey=:recordkey and recordclass=:class and (worksiteid=:siteid or worksiteid is null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDGLOBALREC",
            "target": "RELATEDRECORD",
            "remarks": "Relationship to the RELATEDRECORD table",
            "whereClause": "recordkey=:recordkey and class=:class and relatetype in (select value from synonymdomain where domainid ='RELATETYPE' and maxvalue in ('ISGLOBAL'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDRECORD",
            "target": "RELATEDRECORD",
            "remarks": "Relationship to the RelatedRecord table, used to find the RelatedRecords for the current WorkView object.  (recordkey=:recordkey and class=:class and siteid=:siteid and orgid=:orgid).  This relationship will return 0 or more records.",
            "whereClause": "recordkey=:recordkey and class=:class and siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "target": "TICKET",
            "remarks": "Relationship to the Ticket table, used to get the ticket record for the current workview.",
            "whereClause": "ticketid=:recordkey and class=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to the workorder table, used to find the workorder for the existing workview.",
            "whereClause": "wonum=:recordkey and woclass=:class and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RELATEDRECDETAILS",
            "source": "RELATEDRECORD",
            "remarks": "Relationship from reltedrecord to the workview object",
            "whereClause": "recordkey=:relatedreckey and class=:relatedrecclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKVIEW",
            "source": "TICKET",
            "remarks": "Relationship to the workview table, used to find the workview  for a ticket. This resulting set will contain zero or one object.",
            "whereClause": "recordkey=:ticketid and class=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records involving the current cofiguration item and its related containment and non-containment configuration items. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( multiassetlocci.cinum=:cinum and multiassetlocci.siteid=:siteid ))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYASSET",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records involving the current assetnum. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( multiassetlocci.assetnum=:assetnum and multiassetlocci.siteid=:siteid ))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYASSET_WORKSITENOTNULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find site-specific work order-related work records involving the current assetnum. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( multiassetlocci.assetnum=:assetnum and multiassetlocci.siteid=:siteid ))",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYASSET_WORKSITENULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records with a null work siteid involving the current assetnum. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( multiassetlocci.assetnum=:assetnum and multiassetlocci.siteid=:siteid ))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYASSETANDANCESTORS",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records involving the current assetnum and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.ancestor and multiassetlocci.siteid=assetancestor.siteid and assetancestor.assetnum=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYASSETANDANCESTORS_WORKSITENOTNULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find site-specific work records involving the current assetnum. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.ancestor and multiassetlocci.siteid=assetancestor.siteid and assetancestor.assetnum=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYASSETANDANCESTORS_WORKSITENULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records with a null work siteid involving the current assetnum and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.ancestor and multiassetlocci.siteid=assetancestor.siteid and assetancestor.assetnum=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYASSETANDCHILDREN",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records involving the current assetnum and its children. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.assetnum and multiassetlocci.siteid=assetancestor.siteid and assetancestor.ancestor=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYASSETANDCHILDREN_WORKSITENOTNULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find site-specific work records involving the current assetnum. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.assetnum and multiassetlocci.siteid=assetancestor.siteid and assetancestor.ancestor=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYASSETANDCHILDREN_WORKSITENULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records with a null work siteid involving the current assetnum and its children. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.assetnum and multiassetlocci.siteid=assetancestor.siteid and assetancestor.ancestor=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYASSETANDFAMILY",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records involving the current assetnum, its children and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and exists ( (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.ancestor and multiassetlocci.siteid=assetancestor.siteid and assetancestor.assetnum=:assetnum and assetancestor.siteid=:siteid) union (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.assetnum and  multiassetlocci.siteid=assetancestor.siteid and assetancestor.ancestor=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYASSETANDFAMILY_WORKSITENOTNULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find site-specific work records involving the current assetnum. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and exists ( (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.ancestor and multiassetlocci.siteid=assetancestor.siteid and assetancestor.assetnum=:assetnum and assetancestor.siteid=:siteid) union (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.assetnum and  multiassetlocci.siteid=assetancestor.siteid and assetancestor.ancestor=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYASSETANDFAMILY_WORKSITENULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records with a null work siteid involving the current assetnum, its children and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and exists ( (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.ancestor and multiassetlocci.siteid=assetancestor.siteid and assetancestor.assetnum=:assetnum and assetancestor.siteid=:siteid) union (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.assetnum and  multiassetlocci.siteid=assetancestor.siteid and assetancestor.ancestor=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYCI",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records involving the current cofiguration item. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and multiassetlocci.cinum=:cinum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYCI_WORKSITENOTNULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find site-specific work records involving the current cofiguration item. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and multiassetlocci.cinum=:cinum)",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYCI_WORKSITENULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records with a null work siteid involving the current cofiguration item. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and multiassetlocci.cinum=:cinum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYLOC",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records involving the current location. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and multiassetlocci.location=:location and multiassetlocci.siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYLOC_WORKSITENOTNULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find site-specific work records involving the current location. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and multiassetlocci.location=:location and multiassetlocci.siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYLOC_WORKSITENULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records with a null work siteid involving the current location. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and multiassetlocci.location=:location and multiassetlocci.siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYLOCANDANCESTORS",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records involving the current location and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from locancestor where multiassetlocci.location=locancestor.ancestor and multiassetlocci.siteid=locancestor.siteid and locancestor.location=:location and locancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYLOCANDANCESTORS_WORKSITENOTNULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find site-specific work records involving the current location and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from locancestor where multiassetlocci.location=locancestor.ancestor and multiassetlocci.siteid=locancestor.siteid and locancestor.location=:location and locancestor.siteid=:siteid )))",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYLOCANDANCESTORS_WORKSITENULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records with a null work siteid involving the current location and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from locancestor where multiassetlocci.location=locancestor.ancestor and multiassetlocci.siteid=locancestor.siteid and locancestor.location=:location and locancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYLOCANDCHILDREN",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records involving the current location and its children. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from locancestor where multiassetlocci.location=locancestor.location and multiassetlocci.siteid=locancestor.siteid and locancestor.ancestor=:location and locancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYLOCANDCHILDREN_WORKSITENOTNULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find site-specific work records involving the current location and its children. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from locancestor where multiassetlocci.location=locancestor.location and multiassetlocci.siteid=locancestor.siteid and locancestor.ancestor=:location and locancestor.siteid=:siteid )))",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYLOCANDCHILDREN_WORKSITENULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records with a null work site involving the current location and its children. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from locancestor where multiassetlocci.location=locancestor.location and multiassetlocci.siteid=locancestor.siteid and locancestor.ancestor=:location and locancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYLOCANDFAMILY",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records involving the current location, its children and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and exists ( (select 1 from locancestor where multiassetlocci.location=locancestor.ancestor and multiassetlocci.siteid=locancestor.siteid and locancestor.location=:location and locancestor.siteid=:siteid) union (select 1 from locancestor where multiassetlocci.location=locancestor.location and multiassetlocci.siteid=locancestor.siteid and locancestor.ancestor=:location and locancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYLOCANDFAMILY_WORKSITENOTNULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find site-specific work records involving the current location, its children and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and exists ( (select 1 from locancestor where multiassetlocci.location=locancestor.ancestor and multiassetlocci.siteid=locancestor.siteid and locancestor.location=:location and locancestor.siteid=:siteid) union (select 1 from locancestor where multiassetlocci.location=locancestor.location and multiassetlocci.siteid=locancestor.siteid and locancestor.ancestor=:location and locancestor.siteid=:siteid )))",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYLOCANDFAMILY_WORKSITENULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records with a null work siteid involving the current location, its children and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and exists ( (select 1 from locancestor where multiassetlocci.location=locancestor.ancestor and multiassetlocci.siteid=locancestor.siteid and locancestor.location=:location and locancestor.siteid=:siteid) union (select 1 from locancestor where multiassetlocci.location=locancestor.location and multiassetlocci.siteid=locancestor.siteid and locancestor.ancestor=:location and locancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_WORKSITENULL",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the workview table, used to find the work records with a null siteid involving the current cofiguration item and its related containment and non-containment configuration items. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( multiassetlocci.cinum=:cinum and multiassetlocci.siteid=:siteid ))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKVIEW",
            "source": "WORKORDER",
            "remarks": "Relationship to the workview table, used to find the workview  for a work order. This resulting set will contain zero or one object.",
            "whereClause": "recordkey=:wonum and class=:woclass and  siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}