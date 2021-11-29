mos = {
    "objectName": "MXCOLLABREF",
    "className": "psdi.app.integration.MXCollabRefSet",
    "description": "The MXCollab Reference Table",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MXCOLLABREFID",
    "primaryKeyColumns": [
        "PCID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "PCID",
            "required": true,
            "persistent": true,
            "title": "Proc ID",
            "remarks": "Proc ID",
            "sameAsAttribute": "PCID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESS",
            "required": false,
            "persistent": true,
            "title": "Process",
            "remarks": "Process",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MXCOLLABREFID",
            "required": true,
            "persistent": true,
            "title": "MXCOLLABREFID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}