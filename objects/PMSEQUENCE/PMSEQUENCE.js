mos = {
    "objectName": "PMSEQUENCE",
    "className": "psdi.app.pm.PMSequenceSet",
    "description": "The PMSEQUENCE Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PMSEQUENCEID",
    "primaryKeyColumns": [
        "SITEID",
        "PMNUM",
        "INTERVAL"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PMSEQUENCE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PMSEQUENCE",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plans used by PM",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PMSEQUENCE",
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
            "attributeName": "PMNUM",
            "required": true,
            "persistent": true,
            "title": "PM",
            "remarks": "Unique Identifier For PM",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "JPNUM",
            "required": false,
            "persistent": true,
            "title": "Job Plan",
            "remarks": "Unique Identifier For Job Plan",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "INTERVAL",
            "required": true,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Interval The Jobplan Is Used",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifie",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "PMSEQUENCEID",
            "required": true,
            "persistent": true,
            "title": "PMSEQUENCEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCJPREVNUM_NP",
            "required": false,
            "persistent": false,
            "title": "Revision",
            "remarks": "Job Plan Revision Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "JOBPLAN",
            "target": "JOBPLAN",
            "remarks": "Relationship to the PMSequence's Jobplan Set,used to find the jobplan records for a given PM. (jobplan.jpnum = pmsequence.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null) or (:orgid is null and :siteid is null) or (:orgid is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCJOBPLAN",
            "target": "JOBPLAN",
            "remarks": "Relationship to the PM's Jobplan records, used to find the jobplan records for a given PM, taking the status into account to filter out revised job plans. (jobplan.jpnum = pm.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null) or (:orgid is null and :siteid is null) or (:orgid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": null
        },
        {
            "name": "PMSEQUENCE",
            "target": "PMSEQUENCE",
            "remarks": "Relationship to the PM's PMSequence records, used to find all the PMSequence for a given PM. (pmsequence.pmnum = pm.pmnum). The resulting set will contain zero or more record.",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PMSEQUENCE",
            "source": "PM",
            "remarks": "Relationship to the PM's PMSequence records, used to find all the PMSequence for a given PM. (pmsequence.pmnum = pm.pmnum). The resulting set will contain zero or more record.",
            "whereClause": "pmnum = :pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMSEQUENCE",
            "source": "PMSEQUENCE",
            "remarks": "Relationship to the PM's PMSequence records, used to find all the PMSequence for a given PM. (pmsequence.pmnum = pm.pmnum). The resulting set will contain zero or more record.",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}