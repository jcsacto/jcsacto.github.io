mos = {
    "objectName": "EXPFUNCTIONS",
    "className": "com.ibm.tivoli.maximo.expression.app.ExpFunctionsSet",
    "description": "Functions Definition",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "EXPFUNCTIONSID",
    "primaryKeyColumns": [
        "FUNCTIONNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "FUNCTIONNAME",
            "required": true,
            "persistent": true,
            "title": "Name",
            "remarks": "Function Name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMPARAMS",
            "required": true,
            "persistent": true,
            "title": "Number Of Paramaters",
            "remarks": "Number Of Function Paramaters",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMPLNAME",
            "required": false,
            "persistent": true,
            "title": "Class name or Script name",
            "remarks": "Class name or Script name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMPLTYPE",
            "required": true,
            "persistent": true,
            "title": "Implementation Type",
            "remarks": "Implementation Type(java or script).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the function.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPFUNCTIONSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}