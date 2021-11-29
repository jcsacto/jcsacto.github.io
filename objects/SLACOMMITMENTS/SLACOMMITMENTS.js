mos = {
    "objectName": "SLACOMMITMENTS",
    "className": "psdi.app.sla.SLACommitmentsSet",
    "description": "SLA Commitments",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SLACOMMITMENTSID",
    "primaryKeyColumns": [
        "SLANUM",
        "COMMITMENTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "SLACOMMITMENTS",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "SLA",
            "targetObject": "SLACOMMITMENTS",
            "parentKeys": "SLANUM",
            "targetKeys": "SLANUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SLA Commitments",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SLANUM",
            "required": true,
            "persistent": true,
            "title": "SLA",
            "remarks": "Identifier of the SLA",
            "sameAsAttribute": "SLANUM",
            "sameAsObject": "SLA"
        },
        {
            "attributeName": "COMMITMENTID",
            "required": true,
            "persistent": true,
            "title": "Commitment",
            "remarks": "Identifies the commitment. A commitment is basically any service, product, or outcome that is being agreed to between the service provider and the customer and can be measured in a qualitative or quantitative way.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the commitment. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Category of commitment. Maximo includes four predefined commitment types: CONTACT, RESPONSE, RESOLUTION, and OTHER. Excluding the commitment type OTHER, you can add only one of each commitment type to an SLA. Click the Select Value button to choose a commitment type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "Numerical value associated with the Unit of Measure field, for this commitment type. For example, if the type is RESPONSE, the commitment could be to respond in 4 hours. The value would be four and the unit of measure would be hours.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TIMEPERIOD",
            "required": false,
            "persistent": true,
            "title": "Time Period (Days)",
            "remarks": "Time period of measurement",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNITOFMEASURE",
            "required": false,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "Unit of Measure associated with the Value field, for this commitment type. For example, if the type is RESPONSE, the commitment could be to respond in 4 hours. The value would be four and the unit of measure would be hours.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SLACOMMITMENTSID",
            "required": true,
            "persistent": true,
            "title": "SLACOMMITMENTSID",
            "remarks": "Unique Identifier",
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
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CHILDSLACOMMITMENTS",
            "source": "RELATEDSLA",
            "remarks": "Relationship to the SLACOMMITMENTS table, used to find the Commitments records a given child SLA. (slacommitments.slanum = relatedsla.childslanum). The resulting set will contain zero more objects.",
            "whereClause": "slanum = :childslanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTSLACOMMITMENTS",
            "source": "RELATEDSLA",
            "remarks": "Relationship to the SLACOMMITMENTS table, used to find the Commitments records a given parent SLA. (slacommitments.slanum = relatedsla.parentslanum). The resulting set will contain zero more objects.",
            "whereClause": "slanum = :parentslanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLACOMMITMENTS",
            "source": "SLA",
            "remarks": "Relationship to the SLACommitments table, used to find the SLACommitments for a given SLA. (sla.slanum = slacommitments.slanum). The resulting set will contain 1 or more objects.",
            "whereClause": "slanum = :slanum",
            "cardinality": "UNDEFINED"
        }
    ]
}