mos = {
    "objectName": "LABORQUAL",
    "className": "psdi.app.labor.LaborQualSet",
    "description": "Qualifications assigned to a labor",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LABORQUALID",
    "primaryKeyColumns": [
        "ORGID",
        "LABORCODE",
        "QUALIFICATIONID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LABOR",
            "targetObject": "LABORQUAL",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Qualifications for this Labor",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "LABORQUAL",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LABORQUAL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "QUALIFICATION",
            "targetObject": "LABORQUAL",
            "parentKeys": "ORGID, QUALIFICATIONID",
            "targetKeys": "ORGID, QUALIFICATIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labors with this qualification.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LABORCODE",
            "required": true,
            "persistent": true,
            "title": "Labor",
            "remarks": "LaborCode associated with this qualification",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "QUALIFICATIONID",
            "required": true,
            "persistent": true,
            "title": "Qualification",
            "remarks": "Identifier of the qualification. This field must be unique within this organization.",
            "sameAsAttribute": "QUALIFICATIONID",
            "sameAsObject": "QUALIFICATION"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The organization this labor is found in",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CERTIFICATENUM",
            "required": false,
            "persistent": true,
            "title": "Certificate #",
            "remarks": "The number of the most recent certificate for this qualification.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EFFDATE",
            "required": false,
            "persistent": true,
            "title": "Effective Date",
            "remarks": "The date this qualification became or becomes effective. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "Expiration Date",
            "remarks": "The date this qualification expires or becomes invalid. This field is empty (null) for qualifications that do not expire.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALIDATIONDATE",
            "required": false,
            "persistent": true,
            "title": "Validation Date",
            "remarks": "The date on which the certificate was validated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALIDATEDBY",
            "required": false,
            "persistent": true,
            "title": "Validated By",
            "remarks": "The individual who validated that the requirements for the certificate are met.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGINALYEAR",
            "required": false,
            "persistent": true,
            "title": "Original Year",
            "remarks": "The first year that this labor code acquired competence in this qualification.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUINGAUTHORITY",
            "required": false,
            "persistent": true,
            "title": "Issuing Authority",
            "remarks": "The authority or body that granted the certificate for the qualification. ",
            "sameAsAttribute": "ISSUINGAUTHORITY",
            "sameAsObject": "QUALIFICATION"
        },
        {
            "attributeName": "EVALUATIONMETHOD",
            "required": false,
            "persistent": true,
            "title": "Evaluation Method",
            "remarks": "The method used to evaluate the labor code's qualification.",
            "sameAsAttribute": "EVALUATIONMETHOD",
            "sameAsObject": "QUALIFICATION"
        },
        {
            "attributeName": "LASTREPORTEDUSE",
            "required": false,
            "persistent": true,
            "title": "Last Reported Use",
            "remarks": "Indicates the date when this qualification was last used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "The current status of this qualification.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": true,
            "title": "Status Date",
            "remarks": "The date that the status for this qualification was changed.",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "LABORQUALSTATUS"
        },
        {
            "attributeName": "STATUSMEMO",
            "required": false,
            "persistent": true,
            "title": "Status Memo",
            "remarks": "A brief description or a comment stating the reason for the status change.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "LABORSTATUS"
        },
        {
            "attributeName": "USEREQUIREDEVERY",
            "required": false,
            "persistent": true,
            "title": "Use Required Every",
            "remarks": "Indicates how often this qualification must be made use of by the labor code in order to retain the qualification's certificate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALIDATEDBY_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Validated By Long description",
            "remarks": "Non-Persistent Long Description for validatedby",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUINGAUTHORITY_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Issuing Authority Long Description",
            "remarks": "Long Description for issuing authority",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EVALUATIONMETHOD_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Evaluation Method Long Description",
            "remarks": "Long Description for the EvaluationMethod field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENT",
            "required": true,
            "persistent": false,
            "title": "Current",
            "remarks": "Non Persistent Current column",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABORQUALID",
            "required": true,
            "persistent": true,
            "title": "LABORQUALID",
            "remarks": "Unique Identifier",
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
            "name": "LABOR",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table where laborquals laborcode is equal to labors laborcode. (laborqual.laborcode=labor.laborcode AND orgid=:orgid).  This relationship will return 0 or more objects.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORCERTHIST",
            "target": "LABORCERTHIST",
            "remarks": "Relationship to the LaborCertHist table where labor, qualification, certificatenum and org match.  Returns 0 or more values",
            "whereClause": "laborcode=:laborcode and qualificationid=:qualificationid and orgid=:orgid and certificatenum=:certificatenum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CERTHISTNOCERTNUM",
            "target": "LABORCERTHIST",
            "remarks": "Returns a set of the laborcerthists associated with this labor, where laborcode=laborcode and qualificationid=:qualificationid and orgid=:orgid.  This will return 0 or more objects.",
            "whereClause": "laborcode=:laborcode and qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORQUALSTATUS",
            "target": "LABORQUALSTATUS",
            "remarks": "Relationship to the LaborQualStatus table where labor, qualification, and org match.  Returns 0 or more values",
            "whereClause": "laborcode=:laborcode and qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABQUALCHSTATUS",
            "target": "LABQUALCHSTATUS",
            "remarks": "Relationship to the non persistent LabQualChStatus table. (no whereclause)",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUAL",
            "target": "QUALIFICATION",
            "remarks": "Relationship to the Qual table. (qual.qualificationid=laborqual.qualificationid AND qual.orgid=laborqual.orgid).  This relationship will return 0 or more objects.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship from LaborQual to Synonymdomain to get the description of the status.",
            "whereClause": "domainid='QUALSTAT' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LABORQUAL",
            "source": "AMCREWLABOR",
            "remarks": "Relationship between AMCREWLABOR and active LABORQUAL.",
            "whereClause": "laborcode = :laborcode and orgid = :orgid and status in (select value from synonymdomain where domainid = 'QUALSTAT' and maxvalue in ('ACTIVE'))",
            "cardinality": null
        },
        {
            "name": "LABORQUAL",
            "source": "AMCREWQUAL",
            "remarks": "Relationship between AMCREWQUAL and active LABORQUAL.",
            "whereClause": "qualificationid = :qualificationid and orgid = :orgid and status in (select value from synonymdomain where domainid = 'QUALSTAT' and maxvalue in ('ACTIVE'))",
            "cardinality": null
        },
        {
            "name": "LABORQUAL",
            "source": "LABOR",
            "remarks": "Relationship to the LaborQual table where laborquals laborcode is equal to labors laborcode. (laborqual.laborcode=labor.laborcode AND orgid=:orgid).  This relationship will return 0 or more objects.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LABORQUAL",
            "source": "LABORQUALSTATUS",
            "remarks": "Relationship to the LaborQual table where labor, qualification, and org match.  Returns 0 or more values",
            "whereClause": "laborcode=:laborcode and qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORQUAL",
            "source": "QUALIFICATION",
            "remarks": "Relationship to the Qual table. (qual.qualificationid=laborqual.qualificationid AND qual.orgid=laborqual.orgid).  This relationship will return 0 or more objects.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}