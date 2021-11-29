mos = {
    "objectName": "SKDAPPLETEXT",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Scheduler Applet extensions",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDAPPLETEXTID",
    "primaryKeyColumns": [
        "EXTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "EXTNAME",
            "required": true,
            "persistent": true,
            "title": "Extension Name",
            "remarks": "Name of the applet extension",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSNAME",
            "required": true,
            "persistent": true,
            "title": "Class Name",
            "remarks": "Class Name that implements the applet extension interface",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDAPPLETEXTID",
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