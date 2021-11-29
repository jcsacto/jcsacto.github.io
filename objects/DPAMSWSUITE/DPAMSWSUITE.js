mos = {
    "objectName": "DPAMSWSUITE",
    "className": "psdi.app.dpamsws.DPAMSWSuiteSet",
    "description": "Deployed Assets Software Suite Setup",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "SUITEID",
    "primaryKeyColumns": [
        "SUITENAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "DPAMSWSUITE",
            "targetObject": "DPACSOFTWARE",
            "parentKeys": "SUITEID",
            "targetKeys": "SUITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Assets Software Suite Setup",
            "longDescription": null
        },
        {
            "objectName": "DPAMSWSUITE",
            "targetObject": "DPACSWSUITE",
            "parentKeys": "SUITEID",
            "targetKeys": "SUITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Assets Software Suite Setup",
            "longDescription": null
        },
        {
            "objectName": "DPAMSWSUITE",
            "targetObject": "DPAMSWSUITECOMP",
            "parentKeys": "SUITEID",
            "targetKeys": "SUITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Assets Software Suite Setup",
            "longDescription": null
        },
        {
            "objectName": "DPAMSWSUITE",
            "targetObject": "DPASOFTWARE",
            "parentKeys": "SUITEID",
            "targetKeys": "SUITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Assets Software Suite Setup",
            "longDescription": null
        },
        {
            "objectName": "DPAMSWSUITE",
            "targetObject": "DPASWSUITE",
            "parentKeys": "SUITEID",
            "targetKeys": "SUITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Assets Software Suite Setup",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "DPAMSWSUITE",
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
            "attributeName": "SUITEID",
            "required": true,
            "persistent": true,
            "title": "Suite ID",
            "remarks": "Suite ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUITENAME",
            "required": true,
            "persistent": true,
            "title": "Software Suite",
            "remarks": "Suite Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VERSION",
            "required": false,
            "persistent": true,
            "title": "Version",
            "remarks": "Version of the software suite. Administrators assign the version number when defining a software suite in the Software Suite Setup application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the software suite. To enter or view additional information, click the Long Description button.",
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
            "name": "DPAMSWSUITECOMP",
            "target": "DPAMSWSUITECOMP",
            "remarks": null,
            "whereClause": "suiteid = :suiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from DPAMSWSUITE.",
            "whereClause": "ldkey=:suiteid and ldownertable = 'DPAMSWSUITE'",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}