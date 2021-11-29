mos = {
    "objectName": "TLOAMDPAPARENT",
    "className": "psdi.app.common.CommonMboSet",
    "description": "Deployed asset parent Records",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "NODEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "TLOAMDPAPARENT",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Child Records",
            "longDescription": null
        },
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "TLOAMDPAPARENT",
            "parentKeys": "NODEID",
            "targetKeys": "TLOAMPARENTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Records",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node Id",
            "remarks": "Node Id",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "NODEID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "NODEID"
        },
        {
            "attributeName": "TLOAMPARENTID",
            "required": false,
            "persistent": true,
            "title": "Parent Node Id",
            "remarks": "Parent Node Id",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMPARENTID",
            "tableName": "DPACOMPUTER",
            "tableColumnName": "TLOAMPARENTID"
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": null,
        "viewselect": "select deployedasset.nodeid, dpacomputer.tloamparentid",
        "viewfrom": "from deployedasset left outer join dpacomputer on deployedasset.nodeid = dpacomputer.nodeid"
    },
    "outgoingRelationships": [],
    "incomingRelationships": []
}