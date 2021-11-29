mos = {
    "objectName": "CTRL_UPLOADFILE",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Upload File Control",
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
            "attributeName": "ID",
            "required": true,
            "persistent": false,
            "title": "ID",
            "remarks": "ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "DATASRC",
            "required": false,
            "persistent": false,
            "title": "Data Source ID",
            "remarks": "Data Source ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "LABEL",
            "required": false,
            "persistent": false,
            "title": "Label",
            "remarks": "Label",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "MAXFILESIZE",
            "required": false,
            "persistent": false,
            "title": "Maximum File Size",
            "remarks": "Maximum File Size",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EVENT",
            "required": false,
            "persistent": false,
            "title": "Event",
            "remarks": "Event",
            "sameAsAttribute": "MXEVENT",
            "sameAsObject": "CTRL_PUSHBUTTON"
        },
        {
            "attributeName": "OKLABEL",
            "required": false,
            "persistent": false,
            "title": "OK Button Label",
            "remarks": "OK Button Label",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "CANCELLABEL",
            "required": false,
            "persistent": false,
            "title": "Cancel Button Label",
            "remarks": "Cancel Button Label",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "SIGOPTION",
            "required": false,
            "persistent": false,
            "title": "Signature Option",
            "remarks": "Signature Option Option Name",
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
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_uploadfile.app and ctrlgroup.optionname=ctrl_uploadfile.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_uploadfile.app and sigoption.optionname=ctrl_uploadfile.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}