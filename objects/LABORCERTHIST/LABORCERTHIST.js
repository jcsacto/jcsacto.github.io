mos = {
    "objectName": "LABORCERTHIST",
    "className": "psdi.app.labor.LaborCertHistSet",
    "description": "Labor Certification History",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LABORCERTHISTID",
    "primaryKeyColumns": [
        "LABORCERTHISTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LABOR",
            "targetObject": "LABORCERTHIST",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "LABORCERTHIST",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LABORCERTHIST",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LABORCERTHIST",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "QUALIFICATION",
            "targetObject": "LABORCERTHIST",
            "parentKeys": "ORGID, QUALIFICATIONID",
            "targetKeys": "ORGID, QUALIFICATIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Qualification",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LABORCODE",
            "required": true,
            "persistent": true,
            "title": "Labor",
            "remarks": "Laborcode associated with certification",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "QUALIFICATIONID",
            "required": true,
            "persistent": true,
            "title": "Qualification",
            "remarks": "Qualification ID of the Certification",
            "sameAsAttribute": "QUALIFICATIONID",
            "sameAsObject": "QUALIFICATION"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization ID",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CERTIFICATENUM",
            "required": false,
            "persistent": true,
            "title": "Certificate #",
            "remarks": "Certificate Number",
            "sameAsAttribute": "CERTIFICATENUM",
            "sameAsObject": "LABORQUAL"
        },
        {
            "attributeName": "EFFDATE",
            "required": true,
            "persistent": true,
            "title": "Effective Date",
            "remarks": "Effective Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "Expiration Date",
            "remarks": "Expiration Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALIDATIONDATE",
            "required": false,
            "persistent": true,
            "title": "Validation Date",
            "remarks": "Date qualification was validated",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALIDATEDBY",
            "required": false,
            "persistent": true,
            "title": "Validated By",
            "remarks": "Person qualification was validated by",
            "sameAsAttribute": "VALIDATEDBY",
            "sameAsObject": "LABORQUAL"
        },
        {
            "attributeName": "ISSUINGAUTHORITY",
            "required": false,
            "persistent": true,
            "title": "Issuing Authority",
            "remarks": "Person/Group that issued the qualification",
            "sameAsAttribute": "ISSUINGAUTHORITY",
            "sameAsObject": "QUALIFICATION"
        },
        {
            "attributeName": "EVALUATIONMETHOD",
            "required": false,
            "persistent": true,
            "title": "Evaluation Method",
            "remarks": "Method by which qualification was evaluated",
            "sameAsAttribute": "EVALUATIONMETHOD",
            "sameAsObject": "QUALIFICATION"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date qualification was changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Person Qualification was changed by",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "LABORCERTHISTID",
            "required": true,
            "persistent": true,
            "title": "LABORCERTHISTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUINGAUTHORITY_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Issuing Authority Long Description",
            "remarks": "NP Long Description Field for Issuing Authority",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EVALUATIONMETHOD_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Evaluation Method Long Description",
            "remarks": "NP Long Description Field for Evaluation Method",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALIDATEDBY_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "ValidatedBy Long Description",
            "remarks": "NP Long Description Field for ValidatedBy",
            "sameAsAttribute": null,
            "sameAsObject": null
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "QUALIFICATION",
            "target": "QUALIFICATION",
            "remarks": "Relationship to the qualification table. (qualification.qualificationid=laborcerthist.qualificationid AND qualification.orgid=laborcerthist.orgid).  This relationship will return 0 or more objects.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LABORCERTHIST",
            "source": "LABOR",
            "remarks": "Returns a set of the laborcerthists associated with this labor, where laborcode=laborcode and orgid=:orgid.  This will return 0 or more objects.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORCERTHIST",
            "source": "LABORQUAL",
            "remarks": "Relationship to the LaborCertHist table where labor, qualification, certificatenum and org match.  Returns 0 or more values",
            "whereClause": "laborcode=:laborcode and qualificationid=:qualificationid and orgid=:orgid and certificatenum=:certificatenum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CERTHISTNOCERTNUM",
            "source": "LABORQUAL",
            "remarks": "Returns a set of the laborcerthists associated with this labor, where laborcode=laborcode and qualificationid=:qualificationid and orgid=:orgid.  This will return 0 or more objects.",
            "whereClause": "laborcode=:laborcode and qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}