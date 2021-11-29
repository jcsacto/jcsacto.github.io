mos = {
    "objectName": "SKDODMAPP",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDODMAppSet",
    "description": "ODM application",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDODMAPPID",
    "primaryKeyColumns": [
        "OPTSCENARIO",
        "USEWITH"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "SKDODMAPP",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDODMAPP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "INPUTOBJ",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Input Object to ODM Application",
            "longDescription": null
        },
        {
            "objectName": "MXODMAPP",
            "targetObject": "SKDODMAPP",
            "parentKeys": "ODMAPPNAME",
            "targetKeys": "OPTSCENARIO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Optimization Scenario",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ODMAPPNAME",
            "required": true,
            "persistent": true,
            "title": "ODM App Name",
            "remarks": "Identifies name of the ODM application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEWITH",
            "required": true,
            "persistent": true,
            "title": "Use With",
            "remarks": "Indicates the application this ODM application can be used.",
            "sameAsAttribute": "USEWITH",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the ODM application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPTSCENARIO",
            "required": false,
            "persistent": true,
            "title": "Optimization scenario type name",
            "remarks": "Optimization scenario type name.",
            "sameAsAttribute": "ODMAPPNAME",
            "sameAsObject": "MXODMAPP"
        },
        {
            "attributeName": "INPUTOBJ",
            "required": true,
            "persistent": true,
            "title": "Input parameter object name",
            "remarks": "Indicates the input parameter object name of the ODM application.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SKDODMAPPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
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
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
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
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDODMAPP",
            "source": "SKDPROJECT",
            "remarks": "ODM Application",
            "whereClause": "usewith=:usewith and optscenario=:type",
            "cardinality": null
        },
        {
            "name": "SKDODMAPPDATA",
            "source": "SKDPROJECT",
            "remarks": "Scenario Type.",
            "whereClause": "optscenario=:type",
            "cardinality": null
        },
        {
            "name": "ODMAPP",
            "source": "SKDPROJECTSCENARIO",
            "remarks": "ODM Application",
            "whereClause": "optscenario=:optscenario",
            "cardinality": null
        }
    ]
}