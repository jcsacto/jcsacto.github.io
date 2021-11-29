mos = {
    "objectName": "REPORTATTACHDOCS",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Hold Microsoft Attachment url for Secured Attachments while printing",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTATTACHDOCSID",
    "primaryKeyColumns": [
        "USERID",
        "URLKEY"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "User",
            "remarks": "User",
            "sameAsAttribute": "LOGINID",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "URLKEY",
            "required": true,
            "persistent": true,
            "title": "Key",
            "remarks": "Key",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URL",
            "required": false,
            "persistent": true,
            "title": "Url",
            "remarks": "CAttachment Url",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPLYDATE",
            "required": true,
            "persistent": true,
            "title": "Apply Date",
            "remarks": "The system timestamp when record was inserted or updated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTATTACHDOCSID",
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