mos = {
    "objectName": "DPAMSWUSAGE",
    "className": "psdi.app.dpamswusg.DPAMSWUsageSet",
    "description": "Deployed Assets Software Usage Setup",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "INPUTSOURCEID",
    "primaryKeyColumns": [
        "SWDETECTIONTOOL"
    ],
    "logicalRelationships": [
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
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "DPAMSWUSAGE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INPUTSOURCEID",
            "required": true,
            "persistent": true,
            "title": "Input Source ID",
            "remarks": "Input Source ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SWDETECTIONTOOL",
            "required": true,
            "persistent": true,
            "title": "Software Detection Tool",
            "remarks": "Software Detection Tool",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the hardware/software discovery tool used to collect software usage data. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "name": "DPAMSWUSAGERANGE",
            "target": "DPAMSWUSAGERANGE",
            "remarks": null,
            "whereClause": "inputsourceid = :inputsourceid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from DPAMSWUSAGE.",
            "whereClause": "ldkey=:inputsourceid and ldownertable = 'DPAMSWUSAGE'",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PARENT",
            "source": "DPAMSWUSAGERANGE",
            "remarks": null,
            "whereClause": "inputsourceid = :inputsourceid",
            "cardinality": "UNDEFINED"
        }
    ]
}