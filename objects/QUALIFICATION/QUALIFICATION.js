mos = {
    "objectName": "QUALIFICATION",
    "className": "psdi.app.qual.QualSet",
    "description": "The Qualification Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "QUALIFICATIONUID",
    "primaryKeyColumns": [
        "ORGID",
        "QUALIFICATIONID"
    ],
    "logicalRelationships": [
        {
            "objectName": "QUALIFICATION",
            "targetObject": "AMCREWQUAL",
            "parentKeys": "ORGID, QUALIFICATIONID",
            "targetKeys": "ORGID, QUALIFICATIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Qualification",
            "longDescription": null
        },
        {
            "objectName": "QUALIFICATION",
            "targetObject": "AMCTQUAL",
            "parentKeys": "ORGID, QUALIFICATIONID",
            "targetKeys": "ORGID, QUALIFICATIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 2",
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
        },
        {
            "objectName": "QUALIFICATION",
            "targetObject": "LABORQUALSTATUS",
            "parentKeys": "ORGID, QUALIFICATIONID",
            "targetKeys": "ORGID, QUALIFICATIONID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "QUALIFICATION",
            "targetObject": "QUALCRAFTSKILL",
            "parentKeys": "ORGID, QUALIFICATIONID",
            "targetKeys": "ORGID, QUALIFICATIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Qualification",
            "longDescription": null
        },
        {
            "objectName": "QUALIFICATION",
            "targetObject": "QUALSTATUS",
            "parentKeys": "ORGID, QUALIFICATIONID",
            "targetKeys": "ORGID, QUALIFICATIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "QUALIFICATION",
            "targetObject": "TOOLQUAL",
            "parentKeys": "ORGID, QUALIFICATIONID",
            "targetKeys": "ORGID, QUALIFICATIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Qualification",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "QUALIFICATION",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "QUALIFICATION",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "QUALIFICATIONID",
            "required": true,
            "persistent": true,
            "title": "Qualification",
            "remarks": "Identifier of the qualification. This field must be unique within this organization.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The name of the organization this qualification belongs to.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the qualification",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Non Persistent long description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUALTYPE",
            "required": true,
            "persistent": true,
            "title": "Qualification Type",
            "remarks": "The type of qualification.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CERTIFICATEREQ",
            "required": true,
            "persistent": true,
            "title": "Certificate Required",
            "remarks": "Indicates if this qualification requires a certificate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DURATION",
            "required": false,
            "persistent": true,
            "title": "Duration",
            "remarks": "The length of time the certificate for this qualification lasts for.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DURATIONPERIOD",
            "required": false,
            "persistent": true,
            "title": "Duration Period",
            "remarks": "A specific period of time the certificate for this qualification lasts for. A period of time can be days, weeks, months, or years.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIREDUSELENGTH",
            "required": false,
            "persistent": true,
            "title": "Required Use Length",
            "remarks": "The length of time the certificate for this qualification must be used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIREDUSEPERIOD",
            "required": false,
            "persistent": true,
            "title": "Required Use Period",
            "remarks": "A specific period of time the certificate for this qualification must be used. A period of time can be days, weeks, months or years.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EVALUATIONMETHOD",
            "required": false,
            "persistent": true,
            "title": "Evaluation Method",
            "remarks": "The method used to evaluate the qualification.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EVALUATIONMETHOD_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Evaluation Method Long Description",
            "remarks": "Non Persistent long description for evaluation",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUINGAUTHORITY",
            "required": false,
            "persistent": true,
            "title": "Issuing Authority",
            "remarks": "The authority or body that grants the certificate for the qualification.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUINGAUTHORITY_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Issuing Authority Description",
            "remarks": "Non Persistent Long Description for issuing authority",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "The current status of this qualification. On creating a new qualification, the status of the qualification defaults to being active.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "LABOR"
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
            "attributeName": "QUALIFICATIONUID",
            "required": true,
            "persistent": true,
            "title": "QUALIFICATIONUID",
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
            "name": "AMCREWQUAL",
            "target": "AMCREWQUAL",
            "remarks": "Relationship between QUALIFICATION and AMCREWQUAL tables.",
            "whereClause": "qualificationid = :qualificationid and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCTQUAL",
            "target": "AMCTQUAL",
            "remarks": "Relationship between QUALIFICATION and AMCTQUAL tables.",
            "whereClause": "qualificationid = :qualificationid and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Doclinks table.  Used to find out DocLinks for the Qualification. (keytable='QUALIFICATION' and keycolumn='QUALIFICATIONID' and keyvalue=:qualificationid$DOCLINKS.KEYVALUE).  The resultset will contain zero or more objects.",
            "whereClause": "ownertable='QUALIFICATION' and ownerid=:qualificationuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORQUAL",
            "target": "LABORQUAL",
            "remarks": "Relationship to the Qual table. (qual.qualificationid=laborqual.qualificationid AND qual.orgid=laborqual.orgid).  This relationship will return 0 or more objects.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUALCHANGESTATUS",
            "target": "QUALCHANGESTATUS",
            "remarks": "Relationship to the non-persistent QualChangeStatus table.(No whereclause.)  This will return 0 objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUALCRAFT",
            "target": "QUALCRAFTSKILL",
            "remarks": "Relationship to the QualCraftSkill table where qualificationid and orgid match. (qualcraftskill.qualificationid=qualification.qualificationid and qualcraftskill.orgid=qualification.orgid.)  This will return 0 or more objects.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUALSTATUS",
            "target": "QUALSTATUS",
            "remarks": "Relationship to the QualStatus history table on qualificationid and orgid.(qualstatus.qualificationid=qualification.qualificationid and qualstatus.orgid=qualification.orgid.)  This will return 0 or more objects.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship from Qualification to Synonymdomain to get the description of the status.",
            "whereClause": "domainid='QUALSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOOLQUAL",
            "target": "TOOLQUAL",
            "remarks": "Relationship to the ToolQual table on qualificationid. (toolqual.qualificationid=qualification.qualificationid and toolqual.orgid=:qualification.orgid.)  This set returns 0 or more objects.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "QUALIFICATION",
            "source": "AMCREWQUAL",
            "remarks": "Relationship between AMCREWQUAL and QUALIFICATION tables.",
            "whereClause": "qualificationid = :qualificationid and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "QUALIFICATION",
            "source": "AMCTQUAL",
            "remarks": "Qualification entry for corresponding ANCTQUAL.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "QUALIFICATION",
            "source": "LABORCERTHIST",
            "remarks": "Relationship to the qualification table. (qualification.qualificationid=laborcerthist.qualificationid AND qualification.orgid=laborcerthist.orgid).  This relationship will return 0 or more objects.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUAL",
            "source": "LABORQUAL",
            "remarks": "Relationship to the Qual table. (qual.qualificationid=laborqual.qualificationid AND qual.orgid=laborqual.orgid).  This relationship will return 0 or more objects.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUALIFICATION",
            "source": "TOOLQUAL",
            "remarks": "Relationship to the TOOLQUAL table. This set returns 1 object.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}