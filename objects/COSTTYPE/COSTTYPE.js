mos = {
    "objectName": "COSTTYPE",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Table of Work Order Cost Types",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "COSTTYPEID",
    "primaryKeyColumns": [
        "COSTTYPE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "COSTTYPE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "COSTTYPE",
            "required": true,
            "persistent": true,
            "title": "Cost Type",
            "remarks": "A cost type for a Work Order",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "PARENTCOST",
            "required": false,
            "persistent": true,
            "title": "Parent Cost Type",
            "remarks": "Cagtegory of Cost Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COSTSEQNUM",
            "required": false,
            "persistent": true,
            "title": "Cost Sequence Number",
            "remarks": "Allows ordering of the Cost Types",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "COSTTYPEID",
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