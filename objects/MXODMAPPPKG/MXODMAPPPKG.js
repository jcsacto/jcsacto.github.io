mos = {
    "objectName": "MXODMAPPPKG",
    "className": "com.ibm.tivoli.maximo.skd.app.MXODMAppPkgSet",
    "description": "Maximo ODM Application Package Object.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MXODMAPPPKGID",
    "primaryKeyColumns": [
        "ODMAPPNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MXODMAPP",
            "targetObject": "MXODMAPPPKG",
            "parentKeys": "ODMAPPNAME",
            "targetKeys": "ODMAPPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MAXIMO ODM",
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
            "sameAsAttribute": "ODMAPPNAME",
            "sameAsObject": "MXODMAPP"
        },
        {
            "attributeName": "APPPACKAGE",
            "required": false,
            "persistent": true,
            "title": "Optimization model",
            "remarks": "Identifies the content of the optimization model.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTMODIFIED",
            "required": false,
            "persistent": true,
            "title": "Last Modified ",
            "remarks": "Indicates the last modified date of the optimization model.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MXODMAPPPKGID",
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