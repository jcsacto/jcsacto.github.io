mos = {
    "objectName": "SOLUTION",
    "className": "psdi.app.solution.SolutionSet",
    "description": "Solutions",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "SOLUTIONID",
    "primaryKeyColumns": [
        "SOLUTION"
    ],
    "logicalRelationships": [
        {
            "objectName": "SOLUTION",
            "targetObject": "INCIDENT",
            "parentKeys": "SOLUTION",
            "targetKeys": "SOLUTION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "SOLUTION",
            "targetObject": "PROBLEM",
            "parentKeys": "SOLUTION",
            "targetKeys": "SOLUTION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "SOLUTION",
            "targetObject": "SOLUTIONSPEC",
            "parentKeys": "SOLUTION",
            "targetKeys": "SOLUTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Solution",
            "longDescription": null
        },
        {
            "objectName": "SOLUTION",
            "targetObject": "SR",
            "parentKeys": "SOLUTION",
            "targetKeys": "SOLUTION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "SOLUTION",
            "targetObject": "TICKET",
            "parentKeys": "SOLUTION",
            "targetKeys": "SOLUTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 5",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "SOLUTION",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SOLUTION",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SOLUTION",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FR1CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "2nd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SOLUTION",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FR2CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "3rd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SOLUTION",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "SOLUTION",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SOLUTION",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
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
        }
    ],
    "columns": [
        {
            "attributeName": "SOLUTIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOLUTION",
            "required": true,
            "persistent": true,
            "title": "Solution",
            "remarks": "Identifies the solution record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the solution. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status, or state, of the solution record. Predefined statuses include DRAFT, ACTIVE, and INACTIVE. Only solution records that are set to ACTIVE can be viewed or found in a search outside of this administrative Solutions application. Solutions records in DRAFT or INACTIVE statuses are managed within this Solutions application.",
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
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "This is the user who last modified the Solution",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "This is when the solution was last modified",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELFSERVACCESS",
            "required": true,
            "persistent": true,
            "title": "Self-Service Access",
            "remarks": "Specifies whether the solution record is accessible to a self-service user. If the check box is selected, self-service users can search for and view this record. If the check box is cleared (the default), the solution record is unavailable to self-service users. In the More Search Fields dialog box, you must specify a Y or N in this field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Classification",
            "remarks": "Defines the classification of the Solution",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "PROBLEMCODE",
            "required": false,
            "persistent": true,
            "title": "Symptom",
            "remarks": "Defines the Symptom someone may encounter",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE"
        },
        {
            "attributeName": "FR1CODE",
            "required": false,
            "persistent": true,
            "title": "Cause",
            "remarks": "Cause of the Symptom",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE"
        },
        {
            "attributeName": "FR2CODE",
            "required": false,
            "persistent": true,
            "title": "Resolution",
            "remarks": "Defines the Resolution of the Symptom/Cause",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE"
        },
        {
            "attributeName": "PROBLEMCODE_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Symptom",
            "remarks": "Detailed description of the symptom that an internal or external customer is having, typically in the form of a problem or question.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FR1CODE_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Cause",
            "remarks": "Detailed description of what is causing the symptoms being described by the internal or external customer.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FR2CODE_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Resolution",
            "remarks": "Detailed description of how to resolve the symptoms that an internal or external customer is experiencing, such as an answer to a question or information on how to solve a problem.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Org Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "FAILURECODE",
            "required": false,
            "persistent": true,
            "title": "Failure Code",
            "remarks": "Indicates Top level of a Failure Hierarchy",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE"
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
            "attributeName": "CLASSIFICATION",
            "required": false,
            "persistent": false,
            "title": "CLASSIFICATION",
            "remarks": "Classification which displays Hierarchy Path",
            "sameAsAttribute": "CLASSIFICATION",
            "sameAsObject": "SEARCHSOLUTION"
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Type",
            "sameAsAttribute": null,
            "sameAsObject": null
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CLASSANCESTOR",
            "target": "CLASSANCESTOR",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (solution.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given solution (classspec.classstructureid = solution.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the CLASSSTRUCTURE table, used to find the CLASSSTRUCTURE record for a given solution. (classstructure.classstructureid = solution.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the doclinks table, used to find all  documents for a given solution. (solution.solution = doclinks.keyvalue and doclinks.keycolumn='SOLUTION' and doclinks.keytable='SOLUTION'). This relationship will find zero or more objects.",
            "whereClause": "ownertable = 'SOLUTION' and ownerid = :solutionid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOLUTIONCHANGESTATUS",
            "target": "SOLCHANGESTATUS",
            "remarks": "Relationship to the non-persistent SolutionChangeStatus table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Change Status action page to change the status of a given solution.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOLNQBE",
            "target": "SOLUTION",
            "remarks": "Relationship to the Solution table, used to find the solution records containing the classtructureid node. (Gets the classstructureid from classancestor where ancestor=classstructureid). This resulting set will contain zero or more objects.",
            "whereClause": "in (select classstructureid from classancestor where ancestor=:1)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOLUTIONSPEC",
            "target": "SOLUTIONSPEC",
            "remarks": "Relationship to the solutionspec table, used to find the solutionspec records for a given solution (solution.solutionid=solutionspec.refobjectid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:solutionid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOLUTIONSPECCLASS",
            "target": "SOLUTIONSPEC",
            "remarks": "Relationship to the solutionspec table, used to find the solutionspec records for a given solution (solution.solution=solutionspec.solution and solution.classstructureid=solutionspec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "solution = :solution and classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOLUTIONSTATUS",
            "target": "SOLUTIONSTATUS",
            "remarks": null,
            "whereClause": "solution=:solution",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='SOLUTIONSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SELFSERVTICKET",
            "target": "TICKET",
            "remarks": "solution to ticket relationship",
            "whereClause": "origrecordid=:solution",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFASSIGNMENT",
            "target": "WFASSIGNMENT",
            "remarks": "Relationship to active assignments on this RFQ. (ownertable = 'RFQ' and ownerid = :rfqid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')). Zero to many member set.",
            "whereClause": "ownertable = 'SOLUTION' and wfassignment.ownerid = :solutionid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTOOLBAR",
            "target": "WFTOOLBAR",
            "remarks": "Relationship to virutal set that manages the toolbar buttons. (empty). Any number member set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTRANSACTION",
            "target": "WFTRANSACTION",
            "remarks": "Relationship to workflow transactions. (ownertable = 'PO' and ownerid = :poid). Zero to many member set.",
            "whereClause": "ownertable = 'SOLUTION' and ownerid = :solutionid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKFLOWMAP",
            "target": "WORKFLOWMAP",
            "remarks": "Get virtual set to display process maps",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SOLUTION",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the solution table, used to find the solution records for a given classstructure. (classstructure.classstructureid in (select classstructureid from classancestor where ancestor=classstructure.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)  and status in (select value from synonymdomain where domainid='SOLUTIONSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOLUTION_USEWITH",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the solution table, used to find the solution records for a given classstructure. (classstructure.classstructureid in (select classstructureid from classancestor where ancestor=classstructure.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOLUTIONS_ONLY",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the solution table, used to find the solution records for a given classstructure. (classstructure.classstructureid = solution.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SEARCHSOL",
            "source": "SEARCHSOLUTION",
            "remarks": "Relationship to the Solution table, used to find the solution object. (no where clause). The resulting set will contain one object. Note: SearchSolution is a virtual table.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOLNQBE",
            "source": "SOLUTION",
            "remarks": "Relationship to the Solution table, used to find the solution records containing the classtructureid node. (Gets the classstructureid from classancestor where ancestor=classstructureid). This resulting set will contain zero or more objects.",
            "whereClause": "in (select classstructureid from classancestor where ancestor=:1)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOLUTION",
            "source": "TICKET",
            "remarks": "Relationship to the SOLUTION table, used to find all solutions in a status of active. (solution.status=ACTIVE). The resulting set will contain zero or more objects.",
            "whereClause": "status in (select value from synonymdomain where domainid='SOLUTIONSTATUS' and maxvalue in ('ACTIVE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKSOLUTION",
            "source": "TICKET",
            "remarks": "Relationship to the solotion table, used to find the solution. The resulting set will contain zero or one object",
            "whereClause": "SOLUTION=:SOLUTION",
            "cardinality": "UNDEFINED"
        }
    ]
}