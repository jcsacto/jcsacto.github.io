mos = {
    "objectName": "REPORTBROSDPURL",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "BROS report direct print urls",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTBROSDPURLID",
    "primaryKeyColumns": [
        "REPORTBROSID",
        "URL"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "URL",
            "required": true,
            "persistent": true,
            "title": "Direct PrintUrl",
            "remarks": "v",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SECUREDATTACH",
            "required": true,
            "persistent": true,
            "title": "Is Secured Attachment",
            "remarks": "Is Secured Attachment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISQPIXURL",
            "required": true,
            "persistent": true,
            "title": "Is Qpix Url",
            "remarks": "Is Qpix Url",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTBROSID",
            "required": true,
            "persistent": true,
            "title": "Report BROS Queue Id",
            "remarks": "Report BROS Queue Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTBROSDPURLID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "REPORTBROSDPURL",
            "source": "REPORTBROS",
            "remarks": "Relationship from REPORTBROS to REPORTBROSDPURL table",
            "whereClause": "reportbrosid=:reportbrosid",
            "cardinality": null
        }
    ]
}