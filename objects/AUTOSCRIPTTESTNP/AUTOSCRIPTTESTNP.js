mos = {
    "objectName": "AUTOSCRIPTTESTNP",
    "className": "com.ibm.ism.script.autoscript.AutoScriptTestSet",
    "description": "Non-persistent Object Script testing",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "AUTOSCRIPT",
            "required": false,
            "persistent": false,
            "title": "Script",
            "remarks": "Script.",
            "sameAsAttribute": "AUTOSCRIPT",
            "sameAsObject": "AUTOSCRIPT"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": false,
            "persistent": false,
            "title": "Attribute Name",
            "remarks": "Attribute Name.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": false,
            "title": "Value",
            "remarks": "Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROGRESSLOG",
            "required": true,
            "persistent": false,
            "title": "Process Log",
            "remarks": "Process Log",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATA",
            "required": true,
            "persistent": false,
            "title": "Data",
            "remarks": "Data",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TESTDATA",
            "required": true,
            "persistent": false,
            "title": "Test Data",
            "remarks": "Test Data",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LAUNCHPOINTNAME",
            "required": false,
            "persistent": false,
            "title": "Launch Point",
            "remarks": "Name for the launch point",
            "sameAsAttribute": "LAUNCHPOINTNAME",
            "sameAsObject": "SCRIPTLAUNCHPOINT"
        },
        {
            "attributeName": "OBJECTPROCESS",
            "required": false,
            "persistent": false,
            "title": "Object Processing",
            "remarks": "Object Processing",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTPATH",
            "required": false,
            "persistent": false,
            "title": "Object Path",
            "remarks": "Script name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object",
            "remarks": "The object that launches the script.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "IFACETYPE",
            "required": false,
            "persistent": false,
            "title": "Integration Type",
            "remarks": "The automation script runs on the selected type of integration component to insert custom logic into the processing of integration messages.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Structure",
            "remarks": "Select the object structure that you want to customize",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "IFACENAME",
            "required": false,
            "persistent": false,
            "title": "Publish Channel",
            "remarks": "Select the publish channel that you want to customize",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "IFACENAMEES",
            "required": false,
            "persistent": false,
            "title": "Enterprise Service",
            "remarks": "Select the enterprise service that you want to customize",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "IFACENAMEIC",
            "required": false,
            "persistent": false,
            "title": "Invocation Channel",
            "remarks": "Select the invocation channel that you want to customize",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "EXTSYSNAME",
            "required": false,
            "persistent": false,
            "title": "External System",
            "remarks": "External System",
            "sameAsAttribute": "EXTSYSNAME",
            "sameAsObject": "MAXEXTSYSTEM"
        },
        {
            "attributeName": "ISINBOUND",
            "required": false,
            "persistent": false,
            "title": "Is Inbound",
            "remarks": "Determines the direction that the script runs.  Select Inbound processing to run the script inbound to Maximo Asset Management.  Select Outbound definition to run the script outbound from Maximo Asset Management.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AUTOSCRIPTTESTDET",
            "target": "AUTOSCRIPTTESTNP",
            "remarks": "Relation to Autoscript test details. This relationship will return 1 or more rows",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "SCRIPTLAUNCHPOINT",
            "target": "SCRIPTLAUNCHPOINT",
            "remarks": "Relation to Autoscript test details. This relationship will return 1 or more rows",
            "whereClause": "launchpointname=:launchpointname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AUTOSCRIPTTESTNP",
            "source": "AUTOSCRIPT",
            "remarks": "Relation to Autoscript test. This relationship will return 1 or more rows",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "AUTOSCRIPTTESTDET",
            "source": "AUTOSCRIPTTESTNP",
            "remarks": "Relation to Autoscript test details. This relationship will return 1 or more rows",
            "whereClause": "",
            "cardinality": null
        }
    ]
}