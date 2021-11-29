mos = {
    "objectName": "JOBTASKSPEC",
    "className": "psdi.app.jobplan.JobTaskSpecSet",
    "description": "JobTask Specification Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "JOBTASKSPECID",
    "primaryKeyColumns": [
        "JPNUM",
        "JPTASK",
        "ASSETATTRID",
        "SECTION",
        "ORGID",
        "SITEID",
        "PLUSCJPREVNUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan",
            "longDescription": null
        },
        {
            "objectName": "JOBTASK",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "JOBTASKID",
            "targetKeys": "REFOBJECTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Task",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 111",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
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
            "objectName": "SITE",
            "targetObject": "JOBTASKSPEC",
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
            "attributeName": "JOBTASKSPECID",
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
            "required": false,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Asset attribute identifier",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "JPNUM",
            "required": false,
            "persistent": true,
            "title": "Job Plan",
            "remarks": "Job Plan Number The Task Refers To",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "JPTASK",
            "required": true,
            "persistent": true,
            "title": "Task",
            "remarks": "Job Plan Task Number",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User name who last changed record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date record modified",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Classification Structure identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "DISPLAYSEQUENCE",
            "required": false,
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
            "title": "Linked to Attribute",
            "remarks": "This attribute is linked to another attribute in this specification.",
            "sameAsAttribute": "ASSETATTRIBUTEID",
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
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "REFOBJECTID",
            "required": false,
            "persistent": true,
            "title": "Reference Object ID",
            "remarks": "Reference Object ID",
            "sameAsAttribute": "JOBTASKID",
            "sameAsObject": "JOBTASK"
        },
        {
            "attributeName": "REFOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Reference Object Name",
            "remarks": "Reference Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CLASSSPECID",
            "required": false,
            "persistent": true,
            "title": "ClassSpec ID",
            "remarks": "ClassSpec Unique ID",
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
        },
        {
            "attributeName": "PLUSCJPREVNUM",
            "required": true,
            "persistent": true,
            "title": "Job Plan Revision Number",
            "remarks": "Revision number of associated  job plan.",
            "sameAsAttribute": "PLUSCREVNUM",
            "sameAsObject": "JOBPLAN"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSETATTRIBUTE",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given job task (jobtaskpec.assetattrid=assetattribute.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid = :assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given jobtaskspec. (jobtaskspec.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstructure table, used to find the classstructure records for a given jobtaskspec (classstructure.classstructureid=jobtaskspec.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "JOBTASKSPECCLASS",
            "source": "JOBPLAN",
            "remarks": "Relationship to the jobtaskspec table, used to find the jobtaskspec records for a given jobplan (jobtaskspec.jpnum=jobplan.jpnum and jobtaskspec.siteid=jobplan.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "jpnum = :jpnum and pluscjprevnum =:pluscrevnum and((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and (:siteid is null or :siteid='')) or ((:orgid is null or :orgid='') and (:siteid is null or :siteid='')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBTASKSPEC",
            "source": "JOBTASK",
            "remarks": "Relationship to the jobtaskspec table, used to find the jobtaskspec records for a given jobtask (jobtask.jobtaskid=jobtaskspec.refobjectid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:jobtaskid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBTASKSPECCLASS",
            "source": "JOBTASK",
            "remarks": "Relationship to the jobtaskspec table, used to find the jobtaskspec records for a given jobtask (jobtask.jpnum=jobtaskspec.jpnum and jobtask.jptask=jobtaskspec.jptask and jobtask.classstructureid=jobtaskspec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "jpnum=:jpnum and jptask=:jptask and pluscjprevnum =:pluscjprevnum and classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        }
    ]
}