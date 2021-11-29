mos = {
    "objectName": "TICKETSPEC",
    "className": "psdi.app.ticket.TicketSpecSet",
    "description": "The TicketSpec table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TICKETSPECID",
    "primaryKeyColumns": [
        "ASSETATTRID",
        "TICKETID",
        "CLASS",
        "SECTION"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "TICKETSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "TICKETSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "LINKEDTOATTRIBUTE, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "TICKETSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 36",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "TICKETSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "TICKETSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "TICKETSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, SECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 39",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "TICKETSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "TICKETSPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "TICKETSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 233",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "TICKETSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TICKETSPEC",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
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
            "objectName": "TICKET",
            "targetObject": "TICKETSPEC",
            "parentKeys": "CLASS, TICKETID",
            "targetKeys": "CLASS, TICKETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ticket Specifications",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TICKETSPECID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALNVALUE",
            "required": false,
            "persistent": true,
            "title": "Alphanumeric Value",
            "remarks": "Alphanumeric(text) value",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "ASSETATTRID",
            "required": true,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Asset attribute identifier",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "TICKETID",
            "required": true,
            "persistent": true,
            "title": "Ticket",
            "remarks": "Identifies the ticket.",
            "sameAsAttribute": "TICKETID",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "CLASS",
            "required": true,
            "persistent": true,
            "title": "Class",
            "remarks": "Class of the ticket. Default values are SR (service request), INCIDENT, and PROBLEM.",
            "sameAsAttribute": "CLASS",
            "sameAsObject": "TICKET"
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
            "remarks": "Date record modified",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": true,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Classification Structure identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "DISPLAYSEQUENCE",
            "required": true,
            "persistent": true,
            "title": "Display Sequence",
            "remarks": "Display sequence",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINKEDTOATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Linked To Attribute",
            "remarks": "This attribute is linked to another attribute in this specification.",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "LINKEDTOSECTION",
            "required": false,
            "persistent": true,
            "title": "Linked To Section",
            "remarks": "This section is linked to another section in this specification.",
            "sameAsAttribute": "SECTION",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "MEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "Entered units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "NUMVALUE",
            "required": false,
            "persistent": true,
            "title": "Numeric Value",
            "remarks": "Numeric value in entered units",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "NUMERICDOMAIN"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SECTION",
            "required": false,
            "persistent": true,
            "title": "Section",
            "remarks": "Section for a group of attributes",
            "sameAsAttribute": "SECTION",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "REFOBJECTID",
            "required": true,
            "persistent": true,
            "title": "Referenced Object",
            "remarks": "The unique identifier this ticket spec object references.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Referenced Object Name",
            "remarks": "The object name this ticket spec references",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CLASSSPECID",
            "required": false,
            "persistent": true,
            "title": "ClassSpec Unique ID",
            "remarks": "The Unique ID of the Classspec object this ticket spec gets attribute from",
            "sameAsAttribute": "CLASSSPECID",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "MANDATORY",
            "required": true,
            "persistent": true,
            "title": "Mandatory",
            "remarks": "Is value mandatory?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TABLEVALUE",
            "required": false,
            "persistent": true,
            "title": "Table Value",
            "remarks": "The value from the table specified in the DOMAIN where the domaintype and datatype is TABLE.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSETATTRIBUTE",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given ticket. (ticketspec.assetattrid=assetattribute.assetattrid) The resulting set will contain one object.",
            "whereClause": "assetattrid=:assetattrid and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given ticketspec. (ticketspec.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given ticket specification. (ticketspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREUNIT",
            "target": "MEASUREUNIT",
            "remarks": "Relationship to the measureunit table, used to find the measureunit record for a given ticketspec. (workorderspec.measureunitid=assetattribute.measureunitid) The resulting set will contain zero or one object.",
            "whereClause": "measureunitid= :measureunitid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SRSPECCLASS",
            "source": "SR",
            "remarks": "Relationship to the ticketspec table, used to find the ticketspec records for a given sr. (sr.ticketid=ticketspec.ticketid and sr.class=ticketspec.class and sr.classstructureid=ticketspec.classstructureid) The resulting set will contain zero or more object.",
            "whereClause": "refobjectid=:ticketuid and refobjectname='SR' and classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKETSPEC",
            "source": "TICKET",
            "remarks": "Relationship to the ticketspec table, used to find the ticketspec records for a given ticket. (ticket.ticketuid=ticketspec.refobjectid) The resulting set will contain zero or more object.",
            "whereClause": "refobjectid=:ticketuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKETSPECCLASS",
            "source": "TICKET",
            "remarks": "Relationship to the ticketspec table, used to find the ticketspec records for a given ticket. (ticket.ticketid=ticketspec.ticketid and ticket.class=ticketspec.class and ticket.classstructureid=ticketspec.classstructureid) The resulting set will contain zero or more object.",
            "whereClause": "ticketid= :ticketid and class=:class and classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTTICKETSPEC",
            "source": "WOACTIVITY",
            "remarks": "Relationship to the ticketspec table, used to find the ticket specification records for a given woactivity parent (ticketspec.ticketid = woactivity.origrecordid and ticketspec.class = woactivity.origrecordclass). The resulting set will contain zero or more objects.",
            "whereClause": "ticketid = :origrecordid and class = :origrecordclass",
            "cardinality": "UNDEFINED"
        }
    ]
}