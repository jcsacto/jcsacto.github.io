mos = {
    "objectName": "DPAMSWUSAGERANGE",
    "className": "psdi.app.dpamswusg.DPAMSWUsageRangeSet",
    "description": "Deployed Assets Software Usage Setup Components",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DPAMSWUSAGERANGEID",
    "primaryKeyColumns": [
        "DPAMSWUSAGERANGEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DPAMSWUSAGE",
            "targetObject": "DPAMSWUSAGERANGE",
            "parentKeys": "INPUTSOURCEID",
            "targetKeys": "INPUTSOURCEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Usage",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RANGEFROM",
            "required": true,
            "persistent": true,
            "title": "Range From",
            "remarks": "Low value of the software usage range. The value in this field must be equal to or less than the value in the Range To field. If you enter a value in this field, you must also enter a value in the Range To field. If you leave the field empty, you must also leave the Range To field empty.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RANGETO",
            "required": true,
            "persistent": true,
            "title": "Range To",
            "remarks": "High value of the software usage range. The value in this field must be equal to or greater than the value in the Range From field. If you enter a value in this field, you must also enter a value in the Range From field.If you leave the field empty, you must also leave the Range From field empty.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPAMSWUSAGERANGEID",
            "required": true,
            "persistent": true,
            "title": "Software Usage Range Id",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INPUTSOURCEID",
            "required": true,
            "persistent": true,
            "title": "Input Source Id",
            "remarks": "Input Source Id",
            "sameAsAttribute": "INPUTSOURCEID",
            "sameAsObject": "DPAMSWUSAGE"
        },
        {
            "attributeName": "USAGE",
            "required": false,
            "persistent": true,
            "title": "Usage",
            "remarks": "Text that Maximo displays in the Computers application to convey the usage frequency for this software usage range. For example, you can enter the word frequently to describe software that is often used or 'rarely' to describe software that is not often used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PARENT",
            "target": "DPAMSWUSAGE",
            "remarks": null,
            "whereClause": "inputsourceid = :inputsourceid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DPAMSWUSAGERANGE",
            "source": "DPAMSWUSAGE",
            "remarks": null,
            "whereClause": "inputsourceid = :inputsourceid",
            "cardinality": "UNDEFINED"
        }
    ]
}