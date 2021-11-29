mos = {
    "objectName": "WMMATCHCRW",
    "className": "com.ibm.tivoli.maximo.amcrew.app.workorder.virtual.WMMatchToCrewSet",
    "description": "Mbo to match work to Crew",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WMMATCHCRWID",
    "primaryKeyColumns": [
        "WMMATCHCRWID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "AMCREWTYPE",
            "required": false,
            "persistent": false,
            "title": "Crew Type",
            "remarks": "Identifies the crew type.",
            "sameAsAttribute": "AMCREWTYPE",
            "sameAsObject": "AMCREWT"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": false,
            "title": "Vendor",
            "remarks": "Identifies the vendor supplying the resources.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CREWWORKGROUP",
            "required": false,
            "persistent": false,
            "title": "Crew Work Group",
            "remarks": "Identifies the resource pool.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Org ID",
            "remarks": "Identifies the organization to which the crew belongs.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "WMMATCHCRWID",
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