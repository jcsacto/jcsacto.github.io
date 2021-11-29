mos = {
    "objectName": "SEARCHDR",
    "className": "psdi.app.mr.virtual.SearchDRSet",
    "description": "Desktop Reqs Non-Persistent Object",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "MRNUM",
            "required": false,
            "persistent": false,
            "title": "Requisition",
            "remarks": "Requisition",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUESTEDBY",
            "required": false,
            "persistent": false,
            "title": "Requested By",
            "remarks": "Requested By",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATEFROM",
            "required": false,
            "persistent": false,
            "title": "Date From",
            "remarks": "Date From",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATETO",
            "required": false,
            "persistent": false,
            "title": "Date To",
            "remarks": "Date To",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": false,
            "title": "Vendor",
            "remarks": "Vendor",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "TMPLTONLY",
            "required": true,
            "persistent": false,
            "title": "Only Search Templates",
            "remarks": "Only Search Templates",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "Status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUESTEDFOR",
            "required": false,
            "persistent": false,
            "title": "Requested For",
            "remarks": "Requested For",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "Item",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}