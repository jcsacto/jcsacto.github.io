mos = {
    "objectName": "MXODMAPP",
    "className": "com.ibm.tivoli.maximo.skd.app.MXODMAppSet",
    "description": "Maximo ODM Application Object.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MXODMAPPID",
    "primaryKeyColumns": [
        "ODMAPPNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MXODMAPP",
            "targetObject": "MXODMAPPPKG",
            "parentKeys": "ODMAPPNAME",
            "targetKeys": "ODMAPPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MAXIMO ODM",
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
        },
        {
            "objectName": "MXODMAPP",
            "targetObject": "SKDPROJECTSCENARIO",
            "parentKeys": "ODMAPPNAME",
            "targetKeys": "OPTSCENARIO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "ODM Application",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MXODMAPP",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MXODMAPP",
            "parentKeys": "PERSONID",
            "targetKeys": "DEPLOYEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed By",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ODMAPPNAME",
            "required": false,
            "persistent": true,
            "title": "Optimization Model Name",
            "remarks": "Identifies the name of the optimization model.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the optimization model.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "SKDODMAPP"
        },
        {
            "attributeName": "ODMAPPLICATIONID",
            "required": false,
            "persistent": true,
            "title": "Optimization Model Id",
            "remarks": "The optimization model identifier.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPTSERVERURL",
            "required": false,
            "persistent": true,
            "title": "Optimization Server URL",
            "remarks": "The optimization server URL. For example,http://&lt; hostname&gt;:&lt; port&gt;/odme",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPTSNDBTYPE",
            "required": false,
            "persistent": true,
            "title": "Database Type",
            "remarks": "Identifies the optimization database type. Possible values are DB2, Oracle, SQL Server. This information is used by the optimization server to store the input and output data related to the work records that are being optimized.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPTSNDBHOSTNAME",
            "required": false,
            "persistent": true,
            "title": "Hostname",
            "remarks": "Identifies the optimization model repository database host name. This information is used by the optimization server to store the input and output data related to the work records that are being optimized.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPTSNDBPORT",
            "required": false,
            "persistent": true,
            "title": "Port",
            "remarks": "Identifies the optimization database port. This information is used by the optimization server to store the input and output data related to the work records that are being optimized.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPTSNDBINSTANCE",
            "required": false,
            "persistent": true,
            "title": "Database Instance",
            "remarks": "Identifies the optimization database instance. This information is used by the optimization server to store the input and output data related to the work records that are being optimized.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPTSNDBUSER",
            "required": false,
            "persistent": true,
            "title": "User Name",
            "remarks": "Indicates the optimization database user name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPTSNDBPASSWORD",
            "required": false,
            "persistent": true,
            "title": "Password",
            "remarks": "Identifies the optimization database password. This information is used by the optimization server to store the input and output data related to the work records that are being optimized.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISDEPLOYED",
            "required": true,
            "persistent": true,
            "title": "Deployed",
            "remarks": "Indicates if the optimization model is deployed on the optimization server.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPLOYEDDATE",
            "required": false,
            "persistent": true,
            "title": "Last Deployed Date",
            "remarks": "Indicates the date of the last deployed optimization model.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPLOYEDBY",
            "required": false,
            "persistent": true,
            "title": "Last Deployed By",
            "remarks": "Identifies the optimization database user name. This information is used by the optimization server to store the input and output data related to the work records that are being optimized.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MXODMAPPID",
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
        },
        {
            "attributeName": "ADAPTERCLASS",
            "required": false,
            "persistent": true,
            "title": "Adapter Class",
            "remarks": "Name of the adapter, which was used to process input and output data of the optimization of this odm model.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MXODMAPP",
            "source": "SKDPROJECT",
            "remarks": "Relationship to MXODMAPP object, used to find MXODMAPP records for a given skdproject.",
            "whereClause": "",
            "cardinality": null
        }
    ]
}