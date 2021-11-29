mos = {
    "objectName": "SKDEDITCONSTRAINT",
    "className": "com.ibm.tivoli.maximo.skd.app.virtual.SKDEditConstraintSet",
    "description": "non persistent object for edit constraint in Scheduler",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SOURCE",
            "required": false,
            "persistent": false,
            "title": "Predecessor",
            "remarks": "The work record from which the constraint starts. For example, in a Finish to Start relationship, the Successor record starts when the Predecessor record finishes.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGET",
            "required": false,
            "persistent": false,
            "title": "Successor",
            "remarks": "The work record to which the constraint goes.  For example, in a Finish to Start relationship, the Successor record starts when the Predecessor record finishes.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONSTRAINTTYPE",
            "required": false,
            "persistent": false,
            "title": "Constraint Type",
            "remarks": "Constraint Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LEADLAGHOURS",
            "required": false,
            "persistent": false,
            "title": "Lead and Lag Time (Hours):",
            "remarks": "The overlap of, or delay between, work records that have a dependency. Enter a positive duration for a Lag (delay). Enter a negative duration for a Lead (overlap).",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}