mos = {
    "objectName": "TDTVERSION",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Versions applied by the TDToolkit.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TDTVERSIONID",
    "primaryKeyColumns": [
        "VERSION",
        "LANGUAGE",
        "PMPNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "VERSION",
            "required": true,
            "persistent": true,
            "title": "TDToolkit version",
            "remarks": "Version applied by the TDToolkit",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGUAGE",
            "required": true,
            "persistent": true,
            "title": "TDToolkit language",
            "remarks": "Language applied by TDToolkit.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMPNAME",
            "required": true,
            "persistent": true,
            "title": "TDToolkit PMPName",
            "remarks": "Name of PMP or CORE if just Maximo",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TDTVERSIONID",
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