mos = {
    "objectName": "TKTEMPLTACTIVITY",
    "className": "psdi.app.ticket.TKTempltActivitySet",
    "description": "Ticket Template Activity",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TKTEMPLTACTIVITYID",
    "primaryKeyColumns": [
        "TKTEMPLTACTIVITYID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "TKTEMPLTACTIVITY",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
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
            "objectName": "LANGUAGE",
            "targetObject": "TKTEMPLTACTIVITY",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TKTEMPLTACTIVITY",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
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
            "objectName": "PERSONGROUP",
            "targetObject": "TKTEMPLTACTIVITY",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "ASSIGNEDOWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assigned Owner Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "TKTEMPLTACTIVITY",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "OWNERGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner Group",
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
        }
    ],
    "columns": [
        {
            "attributeName": "TEMPLATEID",
            "required": false,
            "persistent": true,
            "title": "Template ",
            "remarks": "Ticket Template ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JPNUM",
            "required": false,
            "persistent": true,
            "title": "Job Plan",
            "remarks": "Job plan associated with the ticket template, if any. Maximo automatically generates work orders for the activities associated with the job plan when a Maximo user applies the template to a ticket. Click the Detail Menu button to select a job plan or go to the Job Plans application to create one.",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "JPSEQUENCE",
            "required": false,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Number that indicates the order in which the activities should be performed. For example, if you have three activities, you could type values of 10, 20, and 30 in their respective Sequence fields.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the activity or job plan associated with the ticket template. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Description Long Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIORITY",
            "required": false,
            "persistent": true,
            "title": "Priority",
            "remarks": "Importance of the activity relative to other activities. If you add a job plan in the Activities table window, Maximo defaults the priority of the activity from the job plan.",
            "sameAsAttribute": "PRIORITY",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "OWNER",
            "required": false,
            "persistent": true,
            "title": "Owner",
            "remarks": "Individual person responsible for completing the activity. Click the Detail Menu botton to select a person or go to the People application to create one.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "OWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Owner Group",
            "remarks": "Functional group or organization that owns the work for this activity. Click the Detail Menu botton to select a person group or go to the Person Groups application to create one.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "TKTEMPLTACTIVITYID",
            "required": true,
            "persistent": true,
            "title": "TKTEMPLTACTIVITYID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Classification Structure ID",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "If the activity requires work to be performed by an outside company, name of vendor responsible for the work. Click the Detail Menu button to select a value or go to the Companies application to create one.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site associated with a job plan. If you enter a job plan, Maximo defaults the Site value from the job plan. Click the Select Value button to choose a site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization associated with a job plan. If you enter a job plan, Maximo defaults the Organization value from the job plan. Click the Select Value button to choose an organization.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
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
            "attributeName": "HIERARCHYPATH",
            "required": false,
            "persistent": false,
            "title": "Hierarchy Path",
            "remarks": "Used to set the value of CLASSTRUCTUREID",
            "sameAsAttribute": "HIERARCHYPATH",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "ASSIGNEDOWNERGROUP",
            "required": false,
            "persistent": true,
            "title": "Assigned Owner Group",
            "remarks": "Assigned Owner Group of the ticket template activity record. Use the Select Action menu to assign an owner group. ",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "JPREVNUM_NP",
            "required": false,
            "persistent": false,
            "title": "Revision",
            "remarks": "Job Plan Revision Number",
            "sameAsAttribute": "PLUSCREVNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "CONTENTUID",
            "required": false,
            "persistent": true,
            "title": "Content Unique ID",
            "remarks": "Content Unique ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
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
            "remarks": "Relationship to the CLASSSTRUCTURE table, used to find the CLASSSTRUCTURE record for a given ticket template activity. (classstructure.classstructureid = solution.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLAN",
            "target": "JOBPLAN",
            "remarks": null,
            "whereClause": "jpnum=:jpnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from TKTEMPLTACTIVITY.",
            "whereClause": "ldkey=:tktempltactivityid and ldownertable = 'TKTEMPLTACTIVITY'",
            "cardinality": null
        },
        {
            "name": "TKTEMPLTACTIVITYSPEC",
            "target": "TKTEMPLTACTYSPEC",
            "remarks": "Relationship to the tktemplate table, used to find a tktemplate in the tktemplatespec table. (refobjectid=:tktempteid).  The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:tktempltactivityid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTEMPLTACTIVITYSPECCLASS",
            "target": "TKTEMPLTACTYSPEC",
            "remarks": "Relationship to the tktemplatespec table, used to find the tktemplate records for a given tktemplate. (tktemplate.templateid=tktemplatespec.templateid and tktemplate.class=tktemplatespec.class and tktemplate.classstructureid=tktemplatespec.classstructureid) The resulting set will contain zero or more object.",
            "whereClause": "refobjectid=:tktempltactivityid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "TKTEMPLTACTIVITY",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the SR table, used to find the tktemplate activity records for a given classstructure. (classstructure.classstructureid = tktemplatactivity.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPUSEDBYTKTEMPLATEACTIVITY",
            "source": "PERSONGROUP",
            "remarks": "Relationship from persongroup to tktemplateactivity ",
            "whereClause": "(ownergroup = :persongroup)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVITY",
            "source": "TKTEMPLATE",
            "remarks": null,
            "whereClause": "templateid=:templateid",
            "cardinality": "UNDEFINED"
        }
    ]
}