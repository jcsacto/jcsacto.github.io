mos = {
    "objectName": "LABTRANSENTERBY",
    "className": "psdi.app.labor.virtual.LabTransEnterBySet",
    "description": "anchors labor reporting data entry dialog relation",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "LABORCODE",
            "required": false,
            "persistent": false,
            "title": "Labor",
            "remarks": "Identifies the labor code for whom you are reporting a transaction.",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Identifies the work order for which you are reporting labor.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Identifies the task on the work order for which you are reporting labor.",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "TICKETID",
            "required": false,
            "persistent": false,
            "title": "Ticket",
            "remarks": "Identifies the ticket for which you are reporting labor.",
            "sameAsAttribute": "TICKETID",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "CLASS",
            "required": false,
            "persistent": false,
            "title": "Ticket Class",
            "remarks": "Identifies the ticket's class, for example, incident, problem or service request.",
            "sameAsAttribute": "CLASS",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": false,
            "title": "Contract",
            "remarks": "Identifies the contract associated with the outside labor.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Identifies the organization the labor is associated with.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Identifies the site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": false,
            "title": "Vendor",
            "remarks": "Identifies the vendor for which you are reporting labor.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": false,
            "title": "Crew",
            "remarks": "Identifies the crew that performed the work.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "WORKDATE",
            "required": false,
            "persistent": false,
            "title": "Work Date",
            "remarks": "Work Date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCREW",
            "target": "AMCREW",
            "remarks": "Relationship from non persistent table LABTRANSENTERBY to AMCREW.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWLABOR",
            "target": "AMCREWLABOR",
            "remarks": "Relationship from table LABTRANSENTERBY to AMCREWLABOR.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid and ((:workdate between effectivedate and enddate) or (:workdate >= effectivedate and enddate is null))",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOL",
            "target": "AMCREWTOOL",
            "remarks": "Relationship from table LABTRANSENTERBY to AMCREWTOOL.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid and ((:workdate between effectivedate and enddate) or (:workdate >= effectivedate and enddate is null))",
            "cardinality": null
        },
        {
            "name": "AMCREWWOLAB",
            "target": "AMCREWWOLAB",
            "remarks": "Relationship from table LABTRANSENTERBY to AMCREWWOLAB.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWWOTL",
            "target": "AMCREWWOTL",
            "remarks": "Relationship from table LABTRANSENTERBY to AMCREWWOTL.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "LABTRANSENTERBY_ATTENDANCE",
            "target": "ATTENDANCE",
            "remarks": "Relationship from non persistent table labtransenterby to attendance",
            "whereClause": "laborcode=:laborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABREP_LABTRANSENTERBY_COMPANIES",
            "target": "COMPANIES",
            "remarks": "Relationship from labtransenterby to companies ",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABREP_LABTRANSENTERBY_LABOR",
            "target": "LABOR",
            "remarks": "Relationship from labtransenterby to labor ",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANSENTERBY_LABTRANS",
            "target": "LABTRANS",
            "remarks": "Relationship from non persistent table labtransenterby to labtrans",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANSCREW",
            "target": "LABTRANS",
            "remarks": "Relationship from table LABTRANSENTERBY to LABTRANS for Crews.",
            "whereClause": "amcrew=:amcrew and startdate=:workdate",
            "cardinality": null
        },
        {
            "name": "LABTRANSCREWNR",
            "target": "LABTRANS",
            "remarks": "Relationship from table LABTRANSENTERBY to LABTRANS with no return for Crews.",
            "whereClause": "1=2",
            "cardinality": null
        },
        {
            "name": "LABREP_LABTRANSENTERBY_TICKET",
            "target": "TICKET",
            "remarks": "Relationship from labtransenterby to ticket ",
            "whereClause": "ticketid=:ticketid and class=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOOLTRANSCREWNR",
            "target": "TOOLTRANS",
            "remarks": "Relationship from table LABTRANSENTERBY to TOOLTRANS with no return for Crews.",
            "whereClause": "1=2",
            "cardinality": null
        },
        {
            "name": "WMASSIGNMENTCREW",
            "target": "WMASSIGNMENT",
            "remarks": "Relationship from non persistent table LABTRANSENTERBY to WASSIGNMENT view for Crews.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "LABTRANSENTERBY_ASSIGNMENT",
            "target": "WMASSIGNMENT",
            "remarks": "Relationship from non persistent table labtransenterby to wmassignment",
            "whereClause": "(wonum in (select wonum from workorder where status in (select value  from synonymdomain where domainid='WOSTATUS' and value !='WAPPR')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WMASSIGNTMP",
            "target": "WMASSIGNTMP",
            "remarks": "Relationship from non persistent table LABTRANSENTERBY to WMASSIGNTMP.",
            "whereClause": "amcrew=:amcrew",
            "cardinality": null
        },
        {
            "name": "WORKORDERCREW",
            "target": "WORKORDER",
            "remarks": "Relationship from non persistent table LABTRANSENTERBY to WORKORDER for Crews.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "LABTRANSENTERBY_WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship from non persistent table labtransenterby to workorder",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANSWORKPERIOD",
            "target": "WORKPERIOD",
            "remarks": "Relationship from non persistent table LABTRANSENTERBY to WORKPERIOD.",
            "whereClause": "workdate>:workdate and orgid=:orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "LABTRANSENTERBY",
            "source": "WORKORDER",
            "remarks": "Relationship between LABTRANSENTERBY and WORKORDER, used by Enter Time by Crew dialog.",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}