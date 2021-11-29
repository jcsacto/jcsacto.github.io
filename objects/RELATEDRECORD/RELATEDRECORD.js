mos = {
    "objectName": "RELATEDRECORD",
    "className": "psdi.app.ticket.RelatedRecordSet",
    "description": "The Related Record Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "RELATEDRECORDID",
    "primaryKeyColumns": [
        "RELATEDRECORDID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "RELATEDRECORD",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "RELATEDRECORD",
            "parentKeys": "ORGID",
            "targetKeys": "RELATEDRECORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
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
            "objectName": "WORKORDER",
            "targetObject": "RELATEDRECORD",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "RELATEDRECSITEID, RECORDKEY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "RELATEDRECORD",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, RECORDKEY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RECORDKEY",
            "required": true,
            "persistent": true,
            "title": "Record Key",
            "remarks": "Key for the Record",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CLASS",
            "required": true,
            "persistent": true,
            "title": "Class",
            "remarks": "Type of the record",
            "sameAsAttribute": "CLASS",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "RELATEDRECKEY",
            "required": true,
            "persistent": true,
            "title": "Related Record Key",
            "remarks": "Identifies the related ticket. Enter a value or click the Detail Menu button to select an option and retrieve a value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATEDRECCLASS",
            "required": true,
            "persistent": true,
            "title": "Class",
            "remarks": "Class of the related ticket. Maximo enters this value for the related ticket you select. You can choose a ticket class before choosing a related ticket; if you do so, Maximo displays only tickets of the chosen class in the Select Value dialog box for the related ticket. To choose a ticket class, enter a value or click the Select Value button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATEDRECSITEID",
            "required": false,
            "persistent": true,
            "title": "Site of Related Record",
            "remarks": "Site Identifier for Related Record",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "RELATEDRECORGID",
            "required": false,
            "persistent": true,
            "title": "Organization of Related Record",
            "remarks": "Organization Identifier for Related Record",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Unique Identifier of the Site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Constraint Identifier of the organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "RELATEDRECWONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Identifies the related work order. Click the Detail Menu button to select an option and retrieve a value.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "RELATEDRECWOCLASS",
            "required": false,
            "persistent": false,
            "title": "Class",
            "remarks": "Class of the related record.",
            "sameAsAttribute": "RELATEDRECCLASS",
            "sameAsObject": "RELATEDRECORD"
        },
        {
            "attributeName": "RELATETYPE",
            "required": true,
            "persistent": true,
            "title": "Relationship",
            "remarks": "Describes the relationship of this record to the record in the key field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATEDRECORDID",
            "required": true,
            "persistent": true,
            "title": "RELATEDRECORDID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given solution. The resulting set will contain zero or more objects.",
            "whereClause": "ownertable = 'SOLUTION' and ownerid in (select solutionid from ticket,solution where ticket.ticketid=:relatedreckey and ticket.class=:relatedrecclass and ticket.solution=solution.solution)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDRECORDMULTIASSET",
            "target": "MULTIASSETLOCCI",
            "remarks": "Related ticket/workorder records for the ticket",
            "whereClause": "(recordkey =:relatedreckey and recordclass =:relatedrecclass and isprimary=0)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDRECORD",
            "target": "RELATEDRECORD",
            "remarks": null,
            "whereClause": "relatedreckey=:recordkey and relatedrecclass=:class and recordkey=:relatedreckey and class=:relatedrecclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDRECTK",
            "target": "TICKET",
            "remarks": null,
            "whereClause": "ticketid=:relatedreckey and class=:relatedrecclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDRECTKT",
            "target": "TICKET",
            "remarks": null,
            "whereClause": "ticketid=:relatedreckey and class=:relatedrecclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "target": "TICKET",
            "remarks": null,
            "whereClause": "ticketid=:recordkey and class=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "origrecordid=:recordkey and origrecordclass=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDRECWO",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "wonum=:relatedreckey and woclass=:relatedrecclass and siteid=:relatedrecsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDRECDETAILS",
            "target": "WORKVIEW",
            "remarks": "Relationship from reltedrecord to the workview object",
            "whereClause": "recordkey=:relatedreckey and class=:relatedrecclass",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RELATEDRECORD",
            "source": "RELATEDRECORD",
            "remarks": null,
            "whereClause": "relatedreckey=:recordkey and relatedrecclass=:class and recordkey=:relatedreckey and class=:relatedrecclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ONLYRELATEDRECORD",
            "source": "TICKET",
            "remarks": "Relationship to the relatedrecord table, used to find all related relatedrecords. This result set will contain zero or more objects.",
            "whereClause": "recordkey=:ticketid and class=:class and relatetype in (select value from synonymdomain where domainid ='RELATETYPE' and maxvalue='RELATED')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDGLOBALREC",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "recordkey=:ticketid and class=:class and relatetype in (select value from synonymdomain where domainid ='RELATETYPE' and maxvalue in ('ISGLOBAL'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDORIGINATOR",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "recordkey=:ticketid and class=:class and relatetype in (select value from synonymdomain where domainid ='RELATETYPE' and maxvalue in ('ORIGINATOR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDRECORD",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "recordkey=:ticketid and class=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDSOLUTIONS",
            "source": "TICKET",
            "remarks": "Return the solution applied to the SR related tickets. As SRs do not have a solution applied to them, this will not look for current ticket solution.",
            "whereClause": "recordkey=:ticketid and class =:class and relatedreckey in (select ticketid from ticket where hassolution=1)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDTICKET",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "recordkey=:ticketid and class =:class and relatedrecclass in (select value from synonymdomain where domainid ='TKCLASS' and maxvalue in ('SR', 'PROBLEM', 'INCIDENT'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDWO",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "recordkey=:ticketid and class =:class and relatedrecclass in (select value from synonymdomain where domainid ='WOCLASS' and maxvalue in ('CHANGE', 'RELEASE','ACTIVITY', 'WORKORDER'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SELFSERVRELATEDSOLUTIONS",
            "source": "TICKET",
            "remarks": "Return the solution applied to the SR related tickets where the solution is available to the self-service users.",
            "whereClause": "recordkey=:ticketid and class =:class and relatedreckey in (select ticketid from ticket where selfservsolaccess=1)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTWO",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "recordkey=:parent and class =(select woclass from workorder where wonum=:parent and siteid=:siteid) and relatedrecclass in (select value from synonymdomain where domainid ='WOCLASS' and maxvalue in ('CHANGE', 'RELEASE','ACTIVITY', 'WORKORDER'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARTKTREL",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "recordkey=:parent and class =(select woclass from workorder where wonum=:parent and siteid=:siteid) and relatedrecclass in (select value from synonymdomain where domainid='TKCLASS' and maxvalue in ('SR','PROBLEM', 'INCIDENT'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDONTICKET",
            "source": "WORKORDER",
            "remarks": "Relationship to the relatedrecord table where recordkey=wonum and class=woclass.  This relationship will return 0 or 1 object.",
            "whereClause": "relatedreckey=:wonum and relatedrecclass=:woclass and relatedrecsiteid=:siteid and relatedrecorgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDORIGINATOR",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "recordkey=:wonum and class=:woclass and siteid=:siteid and relatetype in (select value from synonymdomain where domainid ='RELATETYPE' and maxvalue in ('ORIGINATOR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDPARENTTICKET",
            "source": "WORKORDER",
            "remarks": "Related Parent Ticket",
            "whereClause": "((recordkey=:origrecordid and class =:origrecordclass) or (recordkey=:parent and class =(select woclass from workorder where wonum=:parent and siteid=:siteid) and siteid=:siteid)) and relatedrecclass in  (select value from synonymdomain where domainid ='TKCLASS' and maxvalue in ('SR', 'PROBLEM', 'INCIDENT'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDPARENTWO",
            "source": "WORKORDER",
            "remarks": "Related Parent Work Order",
            "whereClause": "((recordkey=:origrecordid and class =:origrecordclass) or (recordkey=:parent and class =(select woclass from workorder where wonum=:parent and siteid=:siteid) and siteid=:siteid)) and relatedrecclass in (select value from synonymdomain where domainid ='WOCLASS' and maxvalue in ('CHANGE', 'RELEASE','ACTIVITY', 'WORKORDER'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDRECORD",
            "source": "WORKORDER",
            "remarks": "Relationship to the relatedrecord table where recordkey=wonum and class=woclass.  This relationship will return 0 or 1 object.",
            "whereClause": "recordkey=:wonum and class=:woclass and siteid=:siteid and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "RELATEDTICKET",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "recordkey=:wonum and class=:woclass and siteid=:siteid and relatedrecclass in (select value from synonymdomain where domainid ='TKCLASS' and maxvalue in ('SR', 'PROBLEM', 'INCIDENT'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDWO",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "siteid = :siteid and recordkey=:wonum and class =:woclass and relatedrecclass in (select value from synonymdomain where domainid ='WOCLASS' and maxvalue in ('CHANGE', 'RELEASE','ACTIVITY', 'WORKORDER'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDGLOBALREC",
            "source": "WORKVIEW",
            "remarks": "Relationship to the RELATEDRECORD table",
            "whereClause": "recordkey=:recordkey and class=:class and relatetype in (select value from synonymdomain where domainid ='RELATETYPE' and maxvalue in ('ISGLOBAL'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDRECORD",
            "source": "WORKVIEW",
            "remarks": "Relationship to the RelatedRecord table, used to find the RelatedRecords for the current WorkView object.  (recordkey=:recordkey and class=:class and siteid=:siteid and orgid=:orgid).  This relationship will return 0 or more records.",
            "whereClause": "recordkey=:recordkey and class=:class and siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}