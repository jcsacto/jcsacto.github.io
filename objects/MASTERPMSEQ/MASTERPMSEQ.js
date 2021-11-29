mos = {
    "objectName": "MASTERPMSEQ",
    "className": "psdi.app.masterpm.MasterPMSeqSet",
    "description": "Master PM Sequence",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MASTERPMSEQID",
    "primaryKeyColumns": [
        "MASTERPMNUM",
        "INTERVAL"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "MASTERPMNUM",
            "required": true,
            "persistent": true,
            "title": "Master PM",
            "remarks": "Unique identifier for Master PM",
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
            "sameAsAttribute": "INTERVAL",
            "sameAsObject": "PMSEQUENCE"
        },
        {
            "attributeName": "MASTERPMSEQID",
            "required": true,
            "persistent": true,
            "title": "MASTERPMSEQID",
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
            "remarks": "Relationship to the MasterPMSequence's Jobplan Set,used to find the jobplan records for a given MasterPM. (jobplan.jpnum = masterpmsequence.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum=:jpnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCJOBPLAN",
            "target": "JOBPLAN",
            "remarks": "Relationship to the Master PM's Jobplan records, used to find the jobplan records for a given Master PM, taking the status into account to filter out revised job plans. (jobplan.jpnum = pm.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum = :jpnum and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MASTERPMSEQ",
            "source": "MASTERPM",
            "remarks": "Relationship to the MasterPM's PMSequence records, used to find all the MasterPMSequence for a given MasterPM. (masterpmsequence.masterpmnum = masterpm.masterpmnum). The resulting set will contain zero or more record.",
            "whereClause": "masterpmnum = :masterpmnum",
            "cardinality": "UNDEFINED"
        }
    ]
}