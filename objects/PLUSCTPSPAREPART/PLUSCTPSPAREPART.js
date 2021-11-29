mos = {
    "objectName": "PLUSCTPSPAREPART",
    "className": "psdi.plusc.app.plusctmplt.PlusCATSparePartSet",
    "description": "Asset Template Spare Part table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PLUSCTPSPAREPARTID",
    "primaryKeyColumns": [
        "PLUSCTPSPAREPARTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ITEM",
            "targetObject": "PLUSCTPSPAREPART",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "PLUSCTPSPAREPART",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCTPSPAREPART",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "PLUSCTPSPAREPART",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Item",
            "remarks": "The item that is listed as a spare part. Enter a value or click Detail Menu to specify item record.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item set, or group of items, the item belongs to.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "QUANTITY",
            "required": true,
            "persistent": true,
            "title": "Quantity",
            "remarks": "The quantity of the item used on the asset.",
            "sameAsAttribute": "QUANTITY",
            "sameAsObject": "SPAREPART"
        },
        {
            "attributeName": "TEMPLATEID",
            "required": true,
            "persistent": true,
            "title": "Template",
            "remarks": "Identifies the asset template.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Information about the item. For example, where the item is located on the asset.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "PLUSCTPSPAREPARTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Remarks Long description",
            "remarks": "Long Description for Remarks",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "relationship to the item table (plusctpsparepart.itemnum = item.itemnum",
            "whereClause": "itemnum = :itemnum",
            "cardinality": null
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg record for a given template spare part.(itemorginfo.itemnum = plusctpsparepart.itemnum and itemorginfo.itemsetid = plusctpsparepart.itemsetid and itemorginfo.orgid = plusctpsparepart.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": null
        },
        {
            "name": "SETS",
            "target": "SETS",
            "remarks": "relationship to the sets table (plusctpsparepart.itemsetid = sets.setid",
            "whereClause": "setid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "SPAREPART",
            "target": "SPAREPART",
            "remarks": "relationship to the sparepart table, used for Select Spare Parts dialog",
            "whereClause": "orgid = :orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PLUSCTPSPAREPART",
            "source": "PLUSCTEMPLATE",
            "remarks": "relationship to the spare part table (plusctpsparepart.templateid = plusctemplate.templateid and plusctpsparepart.orgid = plusctemplate.orgid",
            "whereClause": "templateid = :templateid and orgid = :orgid",
            "cardinality": null
        }
    ]
}