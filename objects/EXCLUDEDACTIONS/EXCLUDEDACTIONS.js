mos = {
    "objectName": "EXCLUDEDACTIONS",
    "className": "psdi.app.actionscfg.ExcludedActionsSet",
    "description": "LIst of execluded actions from QI Portlet",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "EXCLUDEDACTIONSID",
    "primaryKeyColumns": [
        "EXCLUDEDACTIONSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "EXCLUDEDACTIONS",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application with execluded actions",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "EXCLUDEDACTIONS",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APP, OPTIONNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action not available in Quick Insert Portlet",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "EXCLUDEDACTIONSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "OPTIONNAME",
            "required": false,
            "persistent": true,
            "title": "Action",
            "remarks": "Action Name",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}