mos = {
    "objectName": "SKDODMEMSG",
    "className": "com.ibm.tivoli.maximo.skd.service.SKDODMEMsgSet",
    "description": "Messages sent to SKDProject",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDODMEMSGID",
    "primaryKeyColumns": [
        "SKDODMEMSGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SKDPROJECTID",
            "required": true,
            "persistent": true,
            "title": "SKDProjectId",
            "remarks": "Project id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MESSAGE",
            "required": true,
            "persistent": true,
            "title": "Message",
            "remarks": "Message sent to the project.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDODMEMSGID",
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