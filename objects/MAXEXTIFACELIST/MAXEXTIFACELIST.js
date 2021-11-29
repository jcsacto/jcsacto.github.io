mos = {
    "objectName": "MAXEXTIFACELIST",
    "className": "psdi.iface.app.extsystem.MaxExtIfaceListSet",
    "description": "Non-persistent mbo for create table",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "IFACENAME",
            "required": false,
            "persistent": false,
            "title": "Channel / Service",
            "remarks": "Non-persistent column for non-persistent mbo",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "DESCRIPTION",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXIFACEIN"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}