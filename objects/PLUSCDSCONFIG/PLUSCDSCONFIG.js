mos = {
    "objectName": "PLUSCDSCONFIG",
    "className": "psdi.plusc.app.pluscds.PlusCDSConfigSet",
    "description": "Data Sheet Configuration Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PLUSCDSCONFIGID",
    "primaryKeyColumns": [
        "PLUSCDSCONFIGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCDSCONFIG",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCDSCONFIG",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCDSCONFIG",
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
            "attributeName": "DSPLANNUM",
            "required": false,
            "persistent": true,
            "title": "Data Sheet Number",
            "remarks": "Data Sheet Number",
            "sameAsAttribute": "DSPLANNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision Number",
            "remarks": "Identifies the revision level of this data sheet template.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "ASSETERROR",
            "required": true,
            "persistent": true,
            "title": "Asset Error configuration",
            "remarks": "The Asset Error configuration that is used on the workorder data sheet. When it is set to the default value of 1, the MFR of Output plus 'n' places is used. When set to 2, the maximum of Input or Output is used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNPLACES",
            "required": false,
            "persistent": true,
            "title": "Amount of Places",
            "remarks": "The amount of places expressed after the Output Resolution. The default value is 0. This is used when the Asset and Process Error field is selected.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETTRUNCATE",
            "required": true,
            "persistent": true,
            "title": "Truncate or Round Formula Calculations",
            "remarks": "When this field is not selected, the final formula value is rounded off. When this is selected, the final value is truncated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOLERROR",
            "required": true,
            "persistent": true,
            "title": "Tolerance Limit and Error configuration",
            "remarks": "The tolerance limit and error that is used on the data sheet template and work order data sheet. When it is set to the default value of 1, the MFR of Output plus 'n' places is used. When set to 2, the maximum of Input or Output is used plus 1 more resolution. This allows the output values to be more conservative.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOLNPLACES",
            "required": false,
            "persistent": true,
            "title": "Amount of Places",
            "remarks": "The amount of places expressed after the Output Resolution. This value is used when the Tolerance Limit and Error field has a value of 1.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOLTRUNCATE",
            "required": true,
            "persistent": true,
            "title": "Truncate or Round Formula Calculations",
            "remarks": "When this check box is not selected, the final formula value is rounded off. When this is selected, the final value is truncated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPEATVALUE",
            "required": true,
            "persistent": true,
            "title": "Default Value of Repeating Calibration Points",
            "remarks": "When the Repeatable? field is selected, this number is how many times the calibration point is repeated. The default value is 5.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STDDEV",
            "required": true,
            "persistent": true,
            "title": "Standard Deviation",
            "remarks": "This field determines if standard deviation is used. When you select N, the total number of vaules is used. When you select N-1, then the system uses the number of values minus one.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "The organization identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site Id",
            "remarks": "The site identifier.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "PLUSCDSCONFIGID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OUTPUTTRUNCATE",
            "required": true,
            "persistent": true,
            "title": "Desired Output Truncate",
            "remarks": "Determines whether the final desired output value is truncated or rounded.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RANGETRUNCATE",
            "required": true,
            "persistent": true,
            "title": "Range Limits Truncate",
            "remarks": "Determines whether the Range Limits value are truncated or rounded.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PLUSCDSCONFIG",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum=:revisionnum",
            "cardinality": null
        }
    ]
}