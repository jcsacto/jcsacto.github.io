mos = {
    "objectName": "RELATEDSLA",
    "className": "psdi.app.sla.RelatedSLASet",
    "description": "SLAs that are related to each other",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "RELATEDSLAID",
    "primaryKeyColumns": [
        "PARENTSLANUM",
        "CHILDSLANUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "SLA",
            "targetObject": "RELATEDSLA",
            "parentKeys": "SLANUM",
            "targetKeys": "CHILDSLANUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supporting SLA''s",
            "longDescription": null
        },
        {
            "objectName": "SLA",
            "targetObject": "RELATEDSLA",
            "parentKeys": "SLANUM",
            "targetKeys": "PARENTSLANUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SLA Supported",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PARENTSLANUM",
            "required": true,
            "persistent": true,
            "title": "SLA",
            "remarks": "Identifies the parent service level agreement (SLA), or SLA that this SLA supports. Click the Detail Menu button to select an SLA.",
            "sameAsAttribute": "SLANUM",
            "sameAsObject": "SLA"
        },
        {
            "attributeName": "CHILDSLANUM",
            "required": true,
            "persistent": true,
            "title": "SLA",
            "remarks": "Identifies the child service level agreement (SLA), or SLA that supports this SLA. Click the Detail Menu button to select an SLA.",
            "sameAsAttribute": "SLANUM",
            "sameAsObject": "SLA"
        },
        {
            "attributeName": "RELATEDSLAID",
            "required": true,
            "persistent": true,
            "title": "RELATEDSLAID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PARENTSLA",
            "target": "SLA",
            "remarks": "Relationship to the SLA table, used to find the SLA records a given RelatedSLA. (relatedsla.parentslanum = sla.slanum).",
            "whereClause": "slanum = :parentslanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDSLA",
            "target": "SLA",
            "remarks": "Relationship to the SLA table, used to find the SLA records a given RelatedSLA. (relatedsla.childslanum = sla.slanum).",
            "whereClause": "slanum = :childslanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDSLACOMMITMENTS",
            "target": "SLACOMMITMENTS",
            "remarks": "Relationship to the SLACOMMITMENTS table, used to find the Commitments records a given child SLA. (slacommitments.slanum = relatedsla.childslanum). The resulting set will contain zero more objects.",
            "whereClause": "slanum = :childslanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTSLACOMMITMENTS",
            "target": "SLACOMMITMENTS",
            "remarks": "Relationship to the SLACOMMITMENTS table, used to find the Commitments records a given parent SLA. (slacommitments.slanum = relatedsla.parentslanum). The resulting set will contain zero more objects.",
            "whereClause": "slanum = :parentslanum",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RELATEDSLACHILD",
            "source": "SLA",
            "remarks": "Relationship to the RelatedSLA table, used to find the RelatedSLA records a given SLA supports. (sla.slanum = relatedsla.childslanum). The resulting set will contain zero more objects.",
            "whereClause": "parentslanum = :slanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDSLAPARENT",
            "source": "SLA",
            "remarks": "Relationship to the RelatedSLA table, used to find the RelatedSLA records supported by a given SLA. (sla.slanum =  relatedsla.parentslanum). The resulting set will contain zero or more objects.",
            "whereClause": "childslanum = :slanum",
            "cardinality": "UNDEFINED"
        }
    ]
}