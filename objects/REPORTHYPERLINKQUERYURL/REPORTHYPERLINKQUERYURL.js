mos = {
    "objectName": "REPORTHYPERLINKQUERYURL",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Stores the Query url of hyperlinks",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTHYPERLINKQUERYURLID",
    "primaryKeyColumns": [
        "SESSIONID",
        "MAXHLPARAM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SESSIONID",
            "required": true,
            "persistent": true,
            "title": "Session Id",
            "remarks": "Session Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXHLPARAM",
            "required": true,
            "persistent": true,
            "title": "Hyperlink Param Key",
            "remarks": "Hyperlink Param Key",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUERYURL",
            "required": true,
            "persistent": true,
            "title": "Query Url",
            "remarks": "Query Url",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDATE",
            "required": false,
            "persistent": true,
            "title": "Record Creation Date",
            "remarks": "Record creation date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTHYPERLINKQUERYURLID",
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