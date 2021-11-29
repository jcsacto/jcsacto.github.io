mos = {
    "objectName": "CTRL_TREENODE",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Tree Node Control",
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
            "attributeName": "ID",
            "required": true,
            "persistent": false,
            "title": "Control ID",
            "remarks": "Control ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "IMAGE",
            "required": false,
            "persistent": false,
            "title": "Image",
            "remarks": "Image",
            "sameAsAttribute": "IMAGENAME",
            "sameAsObject": "CTRL_IMAGE"
        },
        {
            "attributeName": "SELECTIMAGE",
            "required": false,
            "persistent": false,
            "title": "Select Image",
            "remarks": "Select Image",
            "sameAsAttribute": "IMAGENAME",
            "sameAsObject": "CTRL_IMAGE"
        },
        {
            "attributeName": "DISPLAYKEYATTRIBUTE",
            "required": true,
            "persistent": false,
            "title": "Display Key Attribute",
            "remarks": "Display Key Attribute",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYOBJECTNAME",
            "required": true,
            "persistent": false,
            "title": "Display Object Name",
            "remarks": "Display Object Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYNODEIMAGE",
            "required": true,
            "persistent": false,
            "title": "Display Node Image",
            "remarks": "Display Node Image",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEYATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Key Attribute",
            "remarks": "Key Attribute",
            "sameAsAttribute": "DATAATTRIBUTE",
            "sameAsObject": "CTRL_DEFAULT"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Name",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "KEYVALUE",
            "required": false,
            "persistent": false,
            "title": "Key Value",
            "remarks": "Key Value",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "CTRL_DEFAULT"
        },
        {
            "attributeName": "RETURNATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Return Attribute",
            "remarks": "Return Attribute",
            "sameAsAttribute": "DATAATTRIBUTE",
            "sameAsObject": "CTRL_DEFAULT"
        },
        {
            "attributeName": "ENABLERETURN",
            "required": true,
            "persistent": false,
            "title": "Enable Return",
            "remarks": "Enable Return",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIGOPTION",
            "required": false,
            "persistent": false,
            "title": "Signature Option",
            "remarks": "signature option option name",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "SIGOPTIONDATASRC",
            "required": false,
            "persistent": false,
            "title": "data source id",
            "remarks": "data source id",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": false,
            "title": "Application",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CTRLGROUP",
            "target": "CTRLGROUP",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_treenode.app and ctrlgroup.optionname=ctrl_treenode.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_treenode.app and sigoption.optionname=ctrl_treenode.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}