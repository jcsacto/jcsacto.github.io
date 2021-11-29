mos = {
    "objectName": "IBMCONTENTRECEIPTS",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Install receipts for IBM content catalog",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "IBMCONTENTRECEIPTSID",
    "primaryKeyColumns": [
        "IBMCONTENTRECEIPTSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "IBMCONTENTRECEIPTSID",
            "required": true,
            "persistent": true,
            "title": "Ibmcontentreceiptsid",
            "remarks": "Ibmcontentreceiptsid",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CATALOGURL",
            "required": false,
            "persistent": true,
            "title": "Catalog URL",
            "remarks": "Catalog URL",
            "sameAsAttribute": "URL",
            "sameAsObject": "IBMCONTENTCATALOG"
        },
        {
            "attributeName": "CATALOGITEMURL",
            "required": false,
            "persistent": true,
            "title": "Catalogitemurl",
            "remarks": "Catalog item URL",
            "sameAsAttribute": "URL",
            "sameAsObject": "IBMCONTENTITEM"
        },
        {
            "attributeName": "INSTALLMESSAGES",
            "required": false,
            "persistent": true,
            "title": "Install Messages",
            "remarks": "Install messages",
            "sameAsAttribute": "INSTALLMESSAGES",
            "sameAsObject": "IBMCONTENTITEM"
        },
        {
            "attributeName": "ACCEPTEDLICENSE",
            "required": true,
            "persistent": true,
            "title": "Accepted license",
            "remarks": "Accepted license",
            "sameAsAttribute": "ACCEPTEDLICENSE",
            "sameAsObject": "IBMCONTENTITEM"
        },
        {
            "attributeName": "INSTALLDATE",
            "required": false,
            "persistent": true,
            "title": "Install Date",
            "remarks": "Install date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NAVCODE",
            "required": false,
            "persistent": true,
            "title": "Navcode",
            "remarks": "Navcode used by ISM lib",
            "sameAsAttribute": "NAVCODE",
            "sameAsObject": "IBMCONTENTITEM"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "SOURCECATALOG",
            "target": "IBMCONTENTCATALOG",
            "remarks": "A relationship to the source catalog",
            "whereClause": "url=:catalogurl",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "RECEIPTS",
            "source": "IBMCONTENTITEM",
            "remarks": null,
            "whereClause": "catalogitemurl=:url or navcode=:navcode",
            "cardinality": null
        }
    ]
}